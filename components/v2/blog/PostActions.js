import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  HiOutlineSquare2Stack,
  HiChevronDown,
  HiOutlineLink,
  HiOutlineArrowUpTray,
  HiArrowRight,
  HiCheck,
} from "react-icons/hi2";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

/**
 * Segmented action cluster for a blog post:
 *   [ copy markdown | ▾ share menu ]  [ share ]  [ → next post ]
 *
 * `url` is absolute (built from SITE_URL) so share links and "copy link" work
 * even during SSR / on localhost. The dropdown lives inside an unclipped
 * `relative` wrapper so it is never cut off by a parent's overflow.
 */
const PostActions = ({ url, title, rawContent, next, className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flash, setFlash] = useState(null); // 'md' | 'link' | null
  const ref = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setMenuOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const ping = (which) => {
    setFlash(which);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlash(null), 1600);
  };

  const copy = async (text, which) => {
    try {
      await navigator.clipboard.writeText(text);
      ping(which);
    } catch {
      /* clipboard blocked — no-op */
    }
  };

  const copyMarkdown = () => copy(`# ${title}\n\n${rawContent}`.trim(), "md");
  const copyLink = () => {
    copy(url, "link");
    setMenuOpen(false);
  };

  const shareX = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  const nativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* user cancelled — fall through to menu */
      }
    }
    setMenuOpen((v) => !v);
  };

  const menuItem =
    "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-[13px] text-ln-muted transition-colors hover:bg-white/[0.06] hover:text-ln-text";

  return (
    <div className={`flex items-center gap-2 ${className}`} ref={ref}>
      {/* Segmented pill: copy markdown + share-menu toggle */}
      <div className="relative">
        <div className="inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.03] p-0.5">
          <button
            type="button"
            onClick={copyMarkdown}
            aria-label="Copy post as Markdown"
            className="inline-flex h-8 items-center gap-1.5 rounded-full px-3 font-mono text-[11px] lowercase tracking-tight text-ln-muted transition-colors hover:bg-white/[0.06] hover:text-ln-text"
          >
            {flash === "md" ? (
              <HiCheck className="text-sm text-emerald-300" />
            ) : (
              <HiOutlineSquare2Stack className="text-sm" />
            )}
            {flash === "md" ? "copied" : "md"}
          </button>

          <span className="h-4 w-px bg-white/10" />

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Share options"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-ln-muted transition-colors hover:bg-white/[0.06] hover:text-ln-text"
          >
            <HiChevronDown
              className={`text-sm transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {menuOpen && (
          <div
            role="menu"
            className="absolute left-0 top-full z-30 mt-2 w-48 rounded-lg border border-white/10 bg-ln-surface p-1 shadow-xl"
          >
            <button
              type="button"
              role="menuitem"
              onClick={copyLink}
              className={menuItem}
            >
              {flash === "link" ? (
                <HiCheck className="text-emerald-300" />
              ) : (
                <HiOutlineLink />
              )}
              {flash === "link" ? "Copied!" : "Copy link"}
            </button>
            <a
              role="menuitem"
              href={shareX}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className={menuItem}
            >
              <FaXTwitter />
              Share on X
            </a>
            <a
              role="menuitem"
              href={shareLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className={menuItem}
            >
              <FaLinkedinIn />
              Share on LinkedIn
            </a>
          </div>
        )}
      </div>

      {/* Native share (falls back to the menu above) */}
      <button
        type="button"
        onClick={nativeShare}
        aria-label="Share this post"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ln-muted transition-colors hover:border-white/20 hover:text-ln-text"
      >
        <HiOutlineArrowUpTray className="text-sm" />
      </button>

      {/* Next post */}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          aria-label={`Next post: ${next.title}`}
          title={`Next: ${next.title}`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ln-muted transition-colors hover:border-ln-blue/50 hover:bg-ln-blue/10 hover:text-ln-blue"
        >
          <HiArrowRight className="text-sm" />
        </Link>
      )}
    </div>
  );
};

export default PostActions;
