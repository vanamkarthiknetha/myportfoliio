import Link from "next/link";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import GlassCard from "@/components/v2/ui/GlassCard";
import { formatDate } from "@/components/v2/blog/format";

/**
 * "Keep reading" — compact previous/next post cards shown at the end of a post.
 * `prev` is the older post, `next` the newer one; either may be null.
 */
const PostNav = ({ prev, next }) => {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="More posts"
      className="mt-14 border-t border-white/10 pt-8"
    >
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-ln-dim">
        Keep reading
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {prev ? <NavCard post={prev} direction="prev" /> : <span className="hidden sm:block" />}
        {next ? <NavCard post={next} direction="next" /> : <span className="hidden sm:block" />}
      </div>
    </nav>
  );
};

const NavCard = ({ post, direction }) => {
  const isNext = direction === "next";
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <GlassCard className={`flex h-full flex-col p-4 ${isNext ? "sm:items-end sm:text-right" : ""}`}>
        <span
          className={`flex items-center gap-1.5 font-mono text-[11px] lowercase tracking-tight text-ln-dim ${
            isNext ? "sm:flex-row-reverse" : ""
          }`}
        >
          {isNext ? <HiOutlineArrowRight /> : <HiOutlineArrowLeft />}
          {isNext ? "next" : "previous"}
        </span>
        <p className="mt-2 line-clamp-2 text-sm font-semibold text-ln-text transition-colors group-hover:text-ln-blue">
          {post.title}
        </p>
        {post.date && (
          <span className="mt-auto pt-3 font-mono text-[11px] tracking-tight text-ln-dim">
            {formatDate(post.date)}
          </span>
        )}
      </GlassCard>
    </Link>
  );
};

export default PostNav;
