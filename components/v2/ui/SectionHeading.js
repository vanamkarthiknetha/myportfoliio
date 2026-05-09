import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/90 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-balance text-sm leading-relaxed text-white/55 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
