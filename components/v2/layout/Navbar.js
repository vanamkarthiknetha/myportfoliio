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
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
      >
        <nav
          className={`relative flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-4 py-2 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-black/55 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
              : "border-white/[0.06] bg-black/30 backdrop-blur-md"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2.5 pl-1 text-sm font-semibold text-white"
          >
            <span className="relative inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 p-[1.5px] shadow-[0_0_18px_rgba(34,211,238,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/avatars/prof_pic_trimmed.jpg"
                alt="Karthik Vanam"
                className="h-full w-full rounded-full object-cover"
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
                    className={`relative rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={SOCIAL_LINKS.email}
              className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3.5 py-1.5 text-[13px] font-medium text-cyan-100 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/15"
            >
              Get in touch
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:bg-white/[0.08] md:hidden"
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
          className="fixed inset-x-3 top-[4.5rem] z-50 rounded-2xl border border-white/10 bg-black/85 p-4 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-white/75 hover:bg-white/[0.06] hover:text-white"
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
            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 py-2 text-sm font-medium text-cyan-100"
          >
            Get in touch
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
