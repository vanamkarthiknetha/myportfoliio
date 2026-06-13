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
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-balance text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-ln-text sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]"
            >
              Hi, I&apos;m <span className="text-ln-blue">Karthik</span>.
              <br />
              <span className="text-ln-text">
                Building <span className="text-ln-blue">Voice AI</span>.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex h-7 items-center gap-3 text-sm font-medium text-ln-muted"
            >
              <span className="h-px w-8 bg-white/15" />
              <span className="text-ln-text">Full Stack Engineer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ln-muted sm:text-[17px]"
            >
              I craft performant, reliable products at the intersection of web,
              AI, and voice — from real-time voice agents to production-grade
              systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
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
                onClick={() =>
                  trackEvent("resume_download", { location: "hero" })
                }
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-semibold text-ln-text transition-colors hover:border-white/30 hover:bg-white/[0.04]"
              >
                Download résumé
              </a>
              <div className="ml-1 hidden items-center sm:flex">
                <SocialLinks />
              </div>
            </motion.div>

            <div className="mt-8 flex sm:hidden">
              <SocialLinks size="sm" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 xl:col-span-5"
          >
            <div className="relative mx-auto w-fit max-w-[22rem] sm:max-w-[26rem]">
              {/* decorative glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-ln-blue/30 via-ln-blue/5 to-transparent blur-2xl"
              />
              {/* decorative accent ring */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -top-4 -z-10 h-24 w-24 rounded-full border border-ln-blue/30"
              />
              <a
                href="https://drive.google.com/file/d/1iq8Z98Mv-sGJo-ijJdu4qgGw2N_rdjRC/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("hero_video", { location: "hero" })}
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-ln-surface shadow-xl shadow-black/20"
              >
                <img
                  src="/avatars/prof_pic_trimmed.jpg"
                  alt="Karthik Vanam"
                  className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
                <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/45 py-1.5 pl-1.5 pr-3 text-xs font-semibold text-white shadow-lg backdrop-blur transition-colors duration-300 group-hover:bg-black/65">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ln-bg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-0.5"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch intro
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
