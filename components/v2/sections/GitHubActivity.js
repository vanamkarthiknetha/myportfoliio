import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { SOCIAL_LINKS } from "@/components/v2/lib/constants";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  { ssr: false }
);

const GITHUB_USER = "vanamkarthiknetha";

const calendarTheme = {
  light: ["#242a2f", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#242a2f", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

const GitHubActivity = () => {
  const [total, setTotal] = useState(null);

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.com/v4/${GITHUB_USER}?y=last`)
      .then((r) => r.json())
      .then((d) => {
        if (!active || !Array.isArray(d?.contributions)) return;
        setTotal(d.contributions.reduce((sum, c) => sum + (c.count || 0), 0));
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section id="activity" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Activity"
          title="Consistently shipping."
          description="A snapshot of my coding activity and commits over the past year."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <GlassCard className="p-5 sm:p-7">
            <p className="text-sm font-medium text-ln-muted">
              {total !== null
                ? `${total.toLocaleString()} contributions in the last year`
                : "Contributions in the last year"}
            </p>

            <div className="mt-5 overflow-x-auto pb-1 text-ln-muted">
              <GitHubCalendar
                username={GITHUB_USER}
                colorScheme="dark"
                theme={calendarTheme}
                blockSize={13}
                blockMargin={4}
                fontSize={13}
                showWeekdayLabels
                hideTotalCount
                style={{ color: "var(--ln-muted, #8b949e)" }}
                errorMessage="Couldn't load GitHub activity."
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-ln-muted transition-colors hover:text-ln-text"
              >
                <FaGithub className="text-base" />
                @{GITHUB_USER}
                <HiOutlineArrowTopRightOnSquare className="text-xs opacity-70 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-4 py-2 text-[13px] font-semibold text-ln-text transition-colors hover:border-white/30 hover:bg-white/[0.04]"
              >
                <FaGithub />
                View GitHub Profile
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
};

export default GitHubActivity;
