/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import GlassCard from "@/components/v2/ui/GlassCard";
import SectionHeading from "@/components/v2/ui/SectionHeading";
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <GlassCard className="flex h-full flex-col p-4">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={imgSrc}
            alt={name}
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {data.tag && (
            <div className="absolute right-3 top-3 z-10">
              <span className="inline-block whitespace-nowrap rounded-md border border-ln-blue/40 bg-ln-bg/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ln-blue backdrop-blur">
                {data.tag}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-2 pt-5">
          <h3 className="text-base font-semibold text-ln-text transition-colors group-hover:text-ln-blue">
            {name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ln-muted">
            {data.desc}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {data.techstack.split(",").map((t) => (
              <span
                key={t.trim()}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[11px] font-medium text-ln-muted"
              >
                {t.trim()}
              </span>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-2 pt-5">
            {liveValid ? (
              <a
                href={data.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-ln-blue px-3.5 py-1.5 text-[12px] font-semibold text-ln-bg transition-colors hover:bg-ln-blue-hover"
              >
                Live demo
                <HiOutlineArrowTopRightOnSquare className="text-sm" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-ln-dim">
                Demo offline
              </span>
            )}
            {codeValid && (
              <a
                href={data.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-3.5 py-1.5 text-[12px] font-semibold text-ln-text transition-colors hover:border-white/30 hover:bg-white/[0.04]"
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
    <section id="projects" className="relative scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="What I've shipped."
          description="Products and projects I've shipped — at work and on my own time."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
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
