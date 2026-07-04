/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import GlassCard from "@/components/v2/ui/GlassCard";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { formatDate, resolveImageSrc } from "@/components/v2/blog/format";

const BlogCard = ({ post, index = 0 }) => {
  const { slug, title, summary, date, tags = [], cover, readingTime } = post;
  return (
    <motion.li
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link href={`/blog/${slug}`} className="block h-full">
        <GlassCard className="flex h-full flex-col p-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-white/5">
            {cover ? (
              <img
                src={resolveImageSrc(cover)}
                alt={title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-ln-blue/15 via-ln-surface-2 to-ln-bg" />
            )}
          </div>

          <div className="flex flex-1 flex-col p-2 pt-4">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-tight text-ln-dim">
              <time dateTime={date || undefined}>{formatDate(date)}</time>
              {readingTime && (
                <>
                  <span className="text-white/20">·</span>
                  <span>{readingTime} min read</span>
                </>
              )}
            </div>

            <h3 className="mt-2 text-base font-semibold text-ln-text transition-colors group-hover:text-ln-blue">
              {title}
            </h3>

            {summary && (
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ln-muted">
                {summary}
              </p>
            )}

            {tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] tracking-tight text-ln-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-mono text-[12px] lowercase tracking-tight text-ln-blue/90 transition-colors group-hover:text-ln-blue">
              read post
              <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </GlassCard>
      </Link>
    </motion.li>
  );
};

export default BlogCard;
