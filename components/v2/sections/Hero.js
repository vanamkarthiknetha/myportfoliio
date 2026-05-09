/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/v2/ui/Container";
import SocialLinks from "@/components/v2/ui/SocialLinks";
import { ROLES, SOCIAL_LINKS } from "@/components/v2/lib/constants";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center pt-28 sm:pt-32"
    >
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem] xl:text-[5rem]"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Karthik
              </span>
              .
              <br />
              <span className="text-white/85">I build </span>
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                bold
              </span>
              <span className="text-white/85"> products </span>
              <span className="bg-gradient-to-r from-cyan-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                end-to-end
              </span>
              <span className="text-white/85">.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 flex h-7 items-center gap-3 text-sm font-medium text-white/60"
            >
              <span className="h-px w-10 bg-white/20" />
              <span className="font-mono text-cyan-300">$</span>
              <span className="overflow-hidden">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block text-white/85"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/60 sm:text-lg"
            >
              Full-stack engineer crafting performant, beautiful, and impactful
              products at the intersection of web, AI, and voice.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#experience"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">View my work</span>
                <svg
                  className="relative z-10 transition-transform group-hover:translate-x-1"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-white/85 backdrop-blur transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
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
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5 xl:col-span-5"
          >
            <div className="relative mx-auto w-fit max-w-[22rem] sm:max-w-[26rem]">
              <div
                className="absolute -inset-10 rounded-full bg-cyan-400/25 blur-3xl"
                aria-hidden
              />
              <div
                className="absolute -inset-6 -rotate-6 rounded-[2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-400/30 blur-2xl"
                aria-hidden
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/60 via-violet-400/40 to-fuchsia-400/50 p-[1.5px] shadow-[0_30px_80px_-20px_rgba(34,211,238,0.4)]">
                  <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-[#0a0b14]">
                    <img
                      src="/avatars/prof_pic_trimmed.jpg"
                      alt="Karthik Vanam"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 hidden items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur-xl shadow-lg sm:flex sm:-right-6">
                  <span className="text-cyan-300">●</span>
                  Hyderabad, IN
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
