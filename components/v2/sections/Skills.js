/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { EXTRA_SKILLS, SKILLS_ORDER } from "@/components/v2/lib/constants";
import skillsData from "@/data/about/skills";

const skills = { ...skillsData, ...EXTRA_SKILLS };

const skillLabel = (s) => (typeof s === "string" ? s : s.label);
const skillSlug = (s) => (typeof s === "string" ? s : s.slug);

const Skills = () => {
  const categories = SKILLS_ORDER.filter((c) => skills[c]);
  return (
    <section id="skills" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="My toolkit."
          description="The stack I reach for — from typed front-ends to real-time backends to data plumbing."
        />

        <div className="mt-12 grid auto-rows-[minmax(200px,_auto)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <GlassCard className="h-full p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-[13px] lowercase tracking-tight text-ln-text">
                    {cat}
                  </h3>
                  <span className="font-mono text-[11px] text-ln-dim">
                    {String(skills[cat].skills.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {skills[cat].skills.map((s) => {
                    const label = skillLabel(s);
                    const slug = skillSlug(s);
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-[12px] tracking-tight text-ln-muted transition-colors hover:border-white/25 hover:bg-white/[0.06] hover:text-ln-text"
                      >
                        <img
                          src={`/skills/${cat}/${slug}.svg`}
                          alt=""
                          className="h-4 w-4 flex-none"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <span>{label}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
