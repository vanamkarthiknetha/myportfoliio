import { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  HiOutlineMagnifyingGlass,
  HiXMark,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import SectionHeading from "@/components/v2/ui/SectionHeading";
import BlogLayout from "@/components/v2/blog/BlogLayout";
import BlogCard from "@/components/v2/blog/BlogCard";
import { fadeUp, viewportOnce } from "@/components/v2/lib/motion";
import { SITE_URL } from "@/components/v2/lib/constants";
import { getAllPosts, getAllTags } from "@/lib/blog";

const PER_PAGE = 6;

export default function BlogIndex({ posts, tags }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState(null);
  const [page, setPage] = useState(1);

  // Search (title + summary + tags) combined with the tag filter. All
  // client-side over metadata that's already in the page — no fetching.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeTag && !p.tags.includes(activeTag)) return false;
      if (!q) return true;
      return `${p.title} ${p.summary} ${p.tags.join(" ")}`
        .toLowerCase()
        .includes(q);
    });
  }, [posts, activeTag, query]);

  // Any change to the result set jumps back to page 1.
  useEffect(() => {
    setPage(1);
  }, [query, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const goToPage = (p) => {
    setPage(p);
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filtering = Boolean(query.trim() || activeTag);

  const title = "Writing — Karthik Vanam";
  const description =
    "Writing by Karthik Vanam — on engineering and AI, and on life, learning, and the things in between.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#1B1F23" />
      </Head>

      <BlogLayout>
        <section className="py-10 sm:py-14">
          <Container>
            <SectionHeading
              eyebrow="Writing"
              title="Notes on code, craft & life."
              description="Half engineering — AI systems, the things I ship, what breaks and why. Half everything else — what I'm learning, reading, and figuring out beyond the editor. No cadence promised; I write when something's worth keeping."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-4"
            >
              {/* Search */}
              <div className="relative max-w-md">
                <HiOutlineMagnifyingGlass className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ln-dim" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search posts…"
                  aria-label="Search posts"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-10 text-sm text-ln-text outline-none transition-colors placeholder:text-ln-dim focus:border-ln-blue/50 focus:bg-white/[0.05]"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ln-dim transition-colors hover:text-ln-text"
                  >
                    <HiXMark />
                  </button>
                )}
              </div>

              {/* Tag filter */}
              {tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <FilterChip
                    label="all"
                    active={activeTag === null}
                    onClick={() => setActiveTag(null)}
                  />
                  {tags.map((tag) => (
                    <FilterChip
                      key={tag}
                      label={tag}
                      active={activeTag === tag}
                      onClick={() =>
                        setActiveTag(activeTag === tag ? null : tag)
                      }
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Result count */}
            {posts.length > 0 && (
              <p className="mt-6 font-mono text-[12px] tracking-tight text-ln-dim">
                {filtered.length === 0
                  ? "no results"
                  : `${filtered.length} ${
                      filtered.length === 1 ? "post" : "posts"
                    }${filtering ? " found" : ""}`}
              </p>
            )}

            {/* Grid */}
            {pageItems.length > 0 ? (
              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {pageItems.map((post, idx) => (
                  <BlogCard key={post.slug} post={post} index={idx} />
                ))}
              </ul>
            ) : (
              <p className="mt-10 font-mono text-sm text-ln-dim">
                {posts.length === 0
                  ? "No posts yet — check back soon."
                  : "Nothing matches — try a different search or tag."}
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                current={currentPage}
                total={totalPages}
                onChange={goToPage}
              />
            )}
          </Container>
        </section>
      </BlogLayout>
    </>
  );
}

const FilterChip = ({ label, active, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-3 py-1 font-mono text-[12px] lowercase tracking-tight transition-colors ${
      active
        ? "border-ln-blue/60 bg-ln-blue/10 text-ln-blue"
        : "border-white/10 bg-white/[0.03] text-ln-muted hover:border-white/20 hover:text-ln-text"
    }`}
  >
    {label}
  </button>
);

/** Page numbers with ellipsis: 1 … 4 5 6 … 20 */
function pageList(current, total) {
  const out = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || (p >= current - 1 && p <= current + 1)) {
      out.push(p);
    } else if (out[out.length - 1] !== "…") {
      out.push("…");
    }
  }
  return out;
}

const Pagination = ({ current, total, onChange }) => (
  <nav
    aria-label="Pagination"
    className="mt-10 flex items-center justify-center gap-1.5"
  >
    <PageArrow
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
      label="Previous page"
    >
      <HiChevronLeft />
    </PageArrow>

    {pageList(current, total).map((p, i) =>
      p === "…" ? (
        <span key={`gap-${i}`} className="px-1 text-ln-dim">
          …
        </span>
      ) : (
        <button
          key={p}
          type="button"
          onClick={() => onChange(p)}
          aria-current={p === current ? "page" : undefined}
          className={`inline-flex h-8 min-w-[2rem] items-center justify-center rounded-full px-2.5 font-mono text-[12px] transition-colors ${
            p === current
              ? "bg-ln-blue text-ln-bg"
              : "border border-white/10 bg-white/[0.03] text-ln-muted hover:border-white/20 hover:text-ln-text"
          }`}
        >
          {p}
        </button>
      )
    )}

    <PageArrow
      disabled={current === total}
      onClick={() => onChange(current + 1)}
      label="Next page"
    >
      <HiChevronRight />
    </PageArrow>
  </nav>
);

const PageArrow = ({ children, disabled, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ln-muted transition-colors hover:border-white/20 hover:text-ln-text disabled:cursor-not-allowed disabled:opacity-40"
  >
    {children}
  </button>
);

export function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      tags: getAllTags(),
    },
  };
}
