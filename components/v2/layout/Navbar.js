import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { NAV_LINKS, SOCIAL_LINKS } from "@/components/v2/lib/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? "border-b border-white/10 bg-ln-bg/95 backdrop-blur-md"
            : "border-b border-transparent bg-ln-bg/80 backdrop-blur"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-2.5 sm:px-8 lg:px-10">
          <a
            href="#home"
            className="flex items-center gap-2.5 text-sm font-semibold text-ln-text"
          >
            <span className="relative inline-flex h-8 w-8 flex-none items-center justify-center overflow-hidden rounded-full border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatars/prof_pic_trimmed.jpg"
                alt="Karthik Vanam"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden sm:inline-block tracking-tight">
              Karthik Vanam
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`relative px-3 py-4 font-mono text-[12px] lowercase tracking-tight transition-colors ${
                      isActive
                        ? "text-ln-text"
                        : "text-ln-muted hover:text-ln-text"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-ln-blue"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.email}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-ln-blue/60 bg-transparent px-4 py-1.5 font-mono text-[12px] lowercase tracking-tight text-ln-blue/90 transition-colors hover:border-ln-blue hover:bg-ln-blue/10 hover:text-ln-blue"
            >
              get in touch
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ln-muted transition-colors hover:bg-white/[0.08] hover:text-ln-text md:hidden"
            >
              {open ? <HiX /> : <HiMenuAlt4 />}
            </button>
          </div>
        </nav>
      </motion.header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-3 top-[3.75rem] z-50 rounded-lg border border-white/10 bg-ln-surface p-3 shadow-xl md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-[13px] lowercase tracking-tight text-ln-muted hover:bg-white/[0.04] hover:text-ln-text"
                >
                  {label}
                  <span className="text-white/30">→</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={SOCIAL_LINKS.email}
            onClick={() => setOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full border border-ln-blue/60 bg-transparent py-2 font-mono text-[13px] lowercase tracking-tight text-ln-blue/90"
          >
            get in touch
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
