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

// Tint metrics (300–500ms, 1M+, 99.9%+, 3×, 10,000+ …) without touching the
// data. A token only qualifies if it starts with a digit AND carries a
// unit/suffix/range/grouping — so bare numbers ("382 Communications", the "2"
// in "OAuth2") and words that merely contain "ms" ("systems") are left alone.
const METRIC_RE = /(\d[\d.,]*(?:\s?[–-]\s?\d[\d.,]*)?(?:ms|×|x|%|M|K|k)?\+?)/g;
const isMetric = (t) =>
  /^\d/.test(t) && /(ms|×|x|%|[MKk]|[–-]\d|,\d|\+)/.test(t);

const highlightMetrics = (text) =>
  text.split(METRIC_RE).map((part, i) =>
    part && isMetric(part) ? (
      <span key={i} className="font-medium text-amber-300/90">
        {part}
      </span>
    ) : (
      part
    )
  );

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
        <span className="relative h-2.5 w-2.5 rounded-full border-2 border-ln-blue bg-ln-bg" />
      </span>

      <GlassCard className="p-5 sm:p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <h3 className="text-base font-semibold text-ln-text sm:text-lg">
              {role}
            </h3>
            {data.org && (
              <p className="mt-0.5 text-sm text-ln-blue">@ {data.org}</p>
            )}
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-tight text-ln-dim">
            <span>{data.duration}</span>
            {data.type && (
              <>
                <span className="h-1 w-1 rounded-full bg-ln-dim/60" />
                <span>{data.type}</span>
              </>
            )}
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {visiblePoints.map((p, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-ln-muted"
            >
              <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ln-dim" />
              <span>{highlightMetrics(p)}</span>
            </li>
          ))}
        </ul>

        {canExpand && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 font-mono text-[11px] lowercase tracking-tight text-ln-blue/90 transition-colors hover:text-ln-blue"
          >
            {expanded ? "show less" : `show ${data.points.length - POINTS_PREVIEW} more`}
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
          <div className="mt-4 flex flex-wrap gap-2">
            {data.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ln-blue/40 bg-ln-blue/10 px-3 py-1 text-[11px] font-semibold text-ln-blue transition-colors hover:border-ln-blue hover:bg-ln-blue/15"
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
    <section id="experience" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've left my fingerprints."
          description="A timeline of roles, companies, and the work I'm proudest of."
        />

        <ol className="relative mt-12 space-y-5">
          <span className="pointer-events-none absolute left-3 top-3 bottom-3 hidden w-px bg-white/10 sm:block" />
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
