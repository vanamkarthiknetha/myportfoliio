/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Container from "@/components/v2/ui/Container";
import SocialLinks from "@/components/v2/ui/SocialLinks";
import { SOCIAL_LINKS } from "@/components/v2/lib/constants";
import { trackEvent } from "@/components/v2/lib/analytics";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-24 sm:pt-28"
    >
      {/* decorative background glow — kept faint; the page stays quiet */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ln-blue/[0.06] blur-[130px]"
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="inline-flex items-center gap-2.5 font-mono text-xs lowercase tracking-[0.18em] text-ln-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-ln-blue" />
            full stack engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-ln-text sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]"
          >
            Hi, I&apos;m <span className="text-ln-blue">Karthik</span>.
            <br />
            <span className="text-ln-text">
              Building <span className="text-ln-blue">Voice AI</span>.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ln-muted sm:text-[17px]"
          >
            I craft performant, reliable products at the intersection of web, AI,
            and voice — from real-time voice agents to production-grade systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-ln-blue px-5 py-2.5 text-sm font-semibold text-ln-bg transition-colors hover:bg-ln-blue-hover"
            >
              View my work
              <svg
                className="transition-transform group-hover:translate-x-0.5"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("resume_download", { location: "hero" })}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-ln-text transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            >
              Download résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <SocialLinks />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
