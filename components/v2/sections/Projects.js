/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import Badge from "@/components/v2/ui/Badge";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import projects from "@/data/projects/projects";

const ProjectCard = ({ name, data, index }) => {
  const liveValid = data.live && data.live !== "/404";
  const codeValid = data.code && data.code !== "/404";
  const imgSrc = data.img ? `/projects/${data.img}` : `/projects/${name}.png`;
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.55, delay: index * 0.06 }}
    >
      <GlassCard className="flex h-full flex-col p-4 sm:p-5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
          <img
            src={imgSrc}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80" />
          {data.tag && (
            <div className="absolute right-3 top-3">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-400/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-100 backdrop-blur">
                {data.tag}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
            <div className="flex flex-wrap gap-1.5">
              {data.techstack.split(",").slice(0, 3).map((t) => (
                <span
                  key={t.trim()}
                  className="rounded-full border border-white/15 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/85 backdrop-blur"
                >
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-2 pt-5">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/55">
            {data.desc}
          </p>

          <div className="mt-auto flex items-center gap-2 pt-5">
            {liveValid ? (
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[12px] font-semibold text-black transition-transform hover:-translate-y-0.5"
              >
                Live demo
                <HiOutlineArrowTopRightOnSquare className="text-sm" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-white/40">
                Demo offline
              </span>
            )}
            {codeValid && (
              <a
                href={data.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-semibold text-white/85 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              >
                <FaGithub />
                Code
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.li>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="What I've shipped."
            description="Products and projects I've shipped — at work and on my own time."
          />
          <a
            href="https://github.com/vanamkarthiknetha"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
          >
            <FaGithub />
            All on GitHub
          </a>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {Object.keys(projects).map((key, idx) => (
            <ProjectCard
              key={key}
              name={key}
              data={projects[key]}
              index={idx}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
