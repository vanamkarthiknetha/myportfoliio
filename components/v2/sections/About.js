/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { STATS, CGPA } from "@/components/v2/lib/constants";
import edu from "@/data/about/edu";

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Engineer who ships, designer who cares."
          description="I write code that ships, but obsess about the details that make a product feel alive. I work across the stack — from voice agents and AI pipelines to pixel-perfect interfaces."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 flex-none overflow-hidden rounded-full border border-white/10">
                  <img
                    src="/avatars/prof_pic_trimmed.jpg"
                    alt="Karthik Vanam"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ln-text">
                    Karthik Vanam
                  </p>
                  <p className="text-xs text-ln-dim">Full Stack Engineer</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-ln-muted sm:text-[16px]">
                Full Stack Engineer with{" "}
                <span className="text-ln-text">1.5+ years</span> of startup
                experience building{" "}
                <span className="text-ln-blue">scalable AI-powered products</span>{" "}
                and production-grade systems in fast-paced environments.
                Experienced in Next.js, React, Node.js, FastAPI, TypeScript,
                Voice AI, LLM integrations, AI orchestration, and real-time
                systems.
              </p>
              <p className="mt-3 text-base leading-relaxed text-ln-muted sm:text-[16px]">
                Strong focus on{" "}
                <span className="text-ln-text">full stack engineering</span>,
                scalable backend engineering, AI workflows, rapid execution,
                and product ownership.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "FastAPI", "PostgreSQL", "LiveKit", "Twilio", "Firebase"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ln-muted"
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
              <GlassCard key={s.label} className="col-span-2 p-5">
                <p className="text-3xl font-semibold tracking-tight text-ln-text">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-ln-dim">
                  {s.label}
                </p>
              </GlassCard>
            ))}
            <GlassCard className="col-span-2 p-5">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.16em] text-ln-dim">
                  Education
                </p>
                <p className="text-xs text-ln-muted">
                  CGPA <span className="text-ln-text">{CGPA}</span>
                </p>
              </div>
              {(() => {
                const branch = edu["B.Tech"].branch;
                const m = branch.match(/^(.+?)\s*\(([^)]+)\)\s*$/);
                const main = m ? m[1] : branch;
                const spec = m ? m[2] : null;
                return (
                  <p className="mt-2 text-sm font-semibold leading-snug text-ln-text">
                    B.Tech — {main}
                    {spec && <span className="text-ln-blue"> ({spec})</span>}
                  </p>
                );
              })()}
              <p className="mt-1 text-xs text-ln-muted">
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
