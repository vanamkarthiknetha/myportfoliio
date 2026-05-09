/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { STATS } from "@/components/v2/lib/constants";
import edu from "@/data/about/edu";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineer who ships, designer who cares."
          description="I write code that ships, but obsess about the details that make a product feel alive. I work across the stack — from voice agents and AI pipelines to pixel-perfect interfaces."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 flex-none">
                  <div
                    className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 via-violet-400 to-fuchsia-400 blur-md opacity-70"
                    aria-hidden
                  />
                  <div className="relative h-14 w-14 overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 p-[1.5px]">
                    <img
                      src="/avatars/prof_pic_trimmed.jpg"
                      alt="Karthik Vanam"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-300/90">
                    Hyderabad, India · IST
                  </p>
                  <p className="text-xs text-white/45">
                    Open to remote
                  </p>
                </div>
              </div>
              <p className="mt-7 text-base leading-relaxed text-white/70 sm:text-[17px]">
                Full Stack Engineer with{" "}
                <span className="text-white/90">1.5+ years</span> of startup
                experience building{" "}
                <span className="text-cyan-300">scalable AI-powered products</span>{" "}
                and production-grade systems in fast-paced environments.
                Experienced in Next.js, React, Node.js, FastAPI, TypeScript,
                Voice AI, LLM integrations, AI orchestration, and real-time
                systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-[17px]">
                Strong focus on{" "}
                <span className="text-white/90">full stack engineering</span>,
                scalable backend engineering, AI workflows, rapid execution,
                and product ownership.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "LiveKit", "Twilio", "Firebase"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {STATS.map((s) => (
              <GlassCard key={s.label} className="p-5">
                <p className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-white/45">
                  {s.label}
                </p>
              </GlassCard>
            ))}
            <GlassCard className="col-span-2 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Education
              </p>
              {(() => {
                const branch = edu["B.Tech"].branch;
                const m = branch.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
                const main = m ? m[1] : branch;
                const spec = m ? m[2] : null;
                return (
                  <p className="mt-2 text-sm font-semibold leading-snug text-white">
                    B.Tech — {main}
                    {spec && (
                      <span className="text-cyan-300/85"> ({spec})</span>
                    )}
                  </p>
                );
              })()}
              <p className="mt-1 text-xs text-white/55">
                {edu["B.Tech"].inst_name} · {edu["B.Tech"].duration}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
