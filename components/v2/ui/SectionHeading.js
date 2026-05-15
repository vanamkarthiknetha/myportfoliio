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
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ln-blue">
          <span className="h-1 w-6 rounded-full bg-ln-blue" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ln-text sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-balance text-sm leading-relaxed text-ln-muted sm:text-[15px]">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
