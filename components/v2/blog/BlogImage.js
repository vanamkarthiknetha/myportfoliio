/* eslint-disable @next/next/no-img-element */
import { resolveImageSrc } from "@/components/v2/blog/format";

/**
 * Content image with optional caption. Plain <img> on purpose — the site is a
 * static export with `images.unoptimized`, so next/image buys us nothing here.
 *
 * Markdown `![alt](/src)` renders through this with just `alt`; pass an explicit
 * `caption` when you want visible caption text under the image. Google Drive
 * share links are auto-converted to a direct image URL.
 */
const BlogImage = ({ src, alt = "", caption, className = "" }) => {
  return (
    <figure className="my-7">
      <img
        src={resolveImageSrc(src)}
        alt={alt}
        loading="lazy"
        className={`w-full rounded-lg border border-white/10 bg-ln-surface ${className}`}
      />
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-[12px] tracking-tight text-ln-dim">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
