import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

/**
 * Blog content loader.
 *
 * Posts live as `.mdx` files in /content/blog. Everything in here runs ONLY at
 * build time (inside getStaticProps / getStaticPaths), so `fs` is safe and never
 * ships to the browser — which is exactly what we want with `output: 'export'`.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

/** Read one post: normalized frontmatter (`meta`) + raw MDX body (`content`). */
export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(BLOG_DIR, `${realSlug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  const meta = {
    slug: realSlug,
    title: data.title ?? realSlug,
    date: data.date ? new Date(data.date).toISOString() : null,
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover ?? null,
    draft: Boolean(data.draft),
    readingTime: Math.max(1, Math.round(stats.minutes)),
  };

  return { meta, content };
}

/**
 * All published posts, newest first. Every `.mdx` in content/blog is published
 * in dev AND production alike — no localhost-only gating. `draft: true` is an
 * optional escape hatch that excludes a post everywhere (an unfinished draft you
 * simply don't want on the site yet).
 */
export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .filter((meta) => !meta.draft)
    .sort((a, b) => {
      // Newest first; deterministic tie-break by slug when dates match.
      const da = a.date || "";
      const db = b.date || "";
      if (da !== db) return da < db ? 1 : -1;
      return a.slug < b.slug ? -1 : 1;
    });
}

/** Sorted, de-duplicated list of every tag used across posts. */
export function getAllTags() {
  const tags = new Set();
  getAllPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort((a, b) => a.localeCompare(b));
}
