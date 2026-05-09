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

const CATEGORY_META = {
  AI: {
    accent: "from-pink-400/30 to-pink-400/0",
    glow: "rgba(244,114,182,0.35)",
  },
  Languages: {
    accent: "from-cyan-400/30 to-cyan-400/0",
    glow: "rgba(34,211,238,0.35)",
  },
  Frontend: {
    accent: "from-violet-400/30 to-violet-400/0",
    glow: "rgba(167,139,250,0.35)",
  },
  Backend: {
    accent: "from-emerald-400/30 to-emerald-400/0",
    glow: "rgba(52,211,153,0.30)",
  },
  "Cloud & DevOps": {
    accent: "from-amber-300/30 to-amber-300/0",
    glow: "rgba(251,191,36,0.30)",
  },
  "Databases & Services": {
    accent: "from-fuchsia-400/30 to-fuchsia-400/0",
    glow: "rgba(232,121,249,0.30)",
  },
  "Tools & Platforms": {
    accent: "from-sky-400/30 to-sky-400/0",
    glow: "rgba(56,189,248,0.30)",
  },
};

const Skills = () => {
  const categories = SKILLS_ORDER.filter((c) => skills[c]);
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="My toolkit."
          description="The stack I reach for — from typed front-ends to real-time backends to data plumbing."
        />

        <div className="mt-14 grid auto-rows-[minmax(220px,_auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => {
            const meta = CATEGORY_META[cat] || CATEGORY_META.Languages;
            return (
              <motion.div
                key={cat}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
              >
                <GlassCard className="h-full p-5 sm:p-6">
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br opacity-50 blur-3xl ${meta.accent}`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-white">
                        {cat}
                      </h3>
                      <span className="text-[11px] font-mono text-white/40">
                        {String(skills[cat].skills.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skills[cat].skills.map((s) => {
                        const label = skillLabel(s);
                        const slug = skillSlug(s);
                        return (
                          <div
                            key={label}
                            className="group/skill flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[12.5px] font-medium text-white/75 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
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
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
