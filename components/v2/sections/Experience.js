import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import Badge from "@/components/v2/ui/Badge";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import exp from "@/data/about/exp";

const POINTS_PREVIEW = 2;

const ExperienceCard = ({ role, data, index }) => {
  const [expanded, setExpanded] = useState(false);
  const visiblePoints = expanded
    ? data.points
    : data.points.slice(0, POINTS_PREVIEW);
  const canExpand = data.points.length > POINTS_PREVIEW;

  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="relative pl-8 sm:pl-10"
    >
      <span className="absolute left-0 top-7 flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-md" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
      </span>

      <GlassCard className="p-6 sm:p-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white sm:text-xl">
              {role}
            </h3>
            {data.org && (
              <p className="mt-0.5 font-mono text-sm text-cyan-300/90">
                @ {data.org}
              </p>
            )}
          </div>
          <div className="flex items-center gap-3 text-xs text-white/45">
            <span className="font-mono">{data.duration}</span>
            {data.type && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/30" />
                <span>{data.type}</span>
              </>
            )}
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {visiblePoints.map((p, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-white/65"
            >
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-cyan-300/70" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {canExpand && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 text-xs font-medium text-cyan-300/90 hover:text-cyan-200"
          >
            {expanded ? "Show less" : `Show ${data.points.length - POINTS_PREVIEW} more`}
          </button>
        )}

        {data.technologies && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {data.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}

        {data.links && data.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {data.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[11px] font-medium text-cyan-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-300/15"
              >
                {l.name}
                <HiOutlineArrowTopRightOnSquare className="text-[12px]" />
              </a>
            ))}
          </div>
        )}
      </GlassCard>
    </motion.li>
  );
};

const Experience = () => {
  const roles = Object.keys(exp);
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've left my fingerprints."
          description="A timeline of roles, companies, and the work I'm proudest of."
        />

        <ol className="relative mt-14 space-y-6">
          <span className="pointer-events-none absolute left-3 top-3 bottom-3 hidden w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-transparent sm:block" />
          {roles.map((role, idx) => (
            <ExperienceCard
              key={role}
              role={role}
              data={exp[role]}
              index={idx}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default Experience;
