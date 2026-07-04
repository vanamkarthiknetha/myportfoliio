/**
 * Normalize an image src so Google Drive *share* links work in <img>.
 *
 * A link like https://drive.google.com/file/d/FILE_ID/view?usp=sharing is a
 * viewer page, not the image itself. This rewrites it to Drive's direct
 * thumbnail endpoint (which returns real image bytes and takes a size param).
 * Non-Drive URLs and local paths pass through untouched. The Drive file must be
 * shared as "Anyone with the link".
 */
export function resolveImageSrc(src = "") {
  if (typeof src !== "string" || !src.includes("drive.google.com")) return src;
  // Already a direct endpoint — leave it alone.
  if (src.includes("/thumbnail?") || src.includes("uc?export")) return src;
  const match =
    src.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    src.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return match
    ? `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600`
    : src;
}

/** Client-safe date formatter (no fs import — safe to use in the browser). */
export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
