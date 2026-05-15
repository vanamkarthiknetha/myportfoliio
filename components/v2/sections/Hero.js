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
                I build products end-to-end.
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex h-7 items-center gap-3 text-sm font-medium text-ln-muted"
            >
              <span className="h-px w-8 bg-white/15" />
              <span className="font-mono text-ln-blue">$</span>
              <span className="overflow-hidden">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="inline-block text-ln-text"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ln-muted sm:text-[17px]"
            >
              Full-stack engineer crafting performant, beautiful, and impactful
              products at the intersection of web, AI, and voice.
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-ln-surface">
                <img
                  src="/avatars/prof_pic_trimmed.jpg"
                  alt="Karthik Vanam"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 left-4 hidden items-center gap-2 rounded-md border border-white/10 bg-ln-surface px-3 py-1.5 text-[11px] font-medium text-ln-text shadow-lg sm:flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Hyderabad, IN · Open to remote
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
