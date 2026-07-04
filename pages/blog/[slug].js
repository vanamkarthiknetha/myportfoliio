/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Container from "@/components/v2/ui/Container";
import BlogLayout from "@/components/v2/blog/BlogLayout";
import TableOfContents from "@/components/v2/blog/TableOfContents";
import PostActions from "@/components/v2/blog/PostActions";
import PostNav from "@/components/v2/blog/PostNav";
import mdxComponents from "@/components/v2/blog/mdxComponents";
import { formatDate, resolveImageSrc } from "@/components/v2/blog/format";
import { SITE_URL } from "@/components/v2/lib/constants";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export default function BlogPost({ meta, mdxSource, toc, rawContent, prev, next }) {
  const url = `${SITE_URL}/blog/${meta.slug}`;
  const cover = resolveImageSrc(meta.cover);
  const ogImage = cover
    ? cover.startsWith("http")
      ? cover
      : `${SITE_URL}${cover}`
    : `${SITE_URL}/avatars/prof_pic_trimmed.jpg`;

  return (
    <>
      <Head>
        <title>{`${meta.title} — Karthik Vanam`}</title>
        <meta name="description" content={meta.summary} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.summary} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {meta.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.summary} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="theme-color" content="#1B1F23" />
      </Head>

      <BlogLayout>
        <div className="py-8 sm:py-12">
          <Container className="max-w-5xl">
            <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12">
              {/* Left rail — table of contents (large screens only). Only the
                  TOC list scrolls; the action cluster sits below it in an
                  unclipped area so its dropdown is never cut off. */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 flex max-h-[calc(100vh-6rem)] flex-col">
                  <div className="min-h-0 overflow-y-auto pr-1">
                    <TableOfContents toc={toc} />
                  </div>
                  <div className="mt-5 shrink-0 border-t border-white/10 pt-5">
                    <PostActions
                      url={url}
                      title={meta.title}
                      rawContent={rawContent}
                      next={next}
                    />
                  </div>
                </div>
              </aside>

              {/* Article column */}
              <article className="min-w-0">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 font-mono text-[12px] lowercase tracking-tight text-ln-muted transition-colors hover:text-ln-text"
                >
                  <HiOutlineArrowLeft />
                  all writing
                </Link>

                <header className="mt-6">
              <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] tracking-tight text-ln-dim">
                <time dateTime={meta.date || undefined}>
                  {formatDate(meta.date)}
                </time>
                {meta.readingTime && (
                  <>
                    <span className="text-white/20">·</span>
                    <span>{meta.readingTime} min read</span>
                  </>
                )}
              </div>

              <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ln-text sm:text-4xl">
                {meta.title}
              </h1>

              {meta.summary && (
                <p className="mt-4 text-balance text-[15px] leading-relaxed text-ln-muted">
                  {meta.summary}
                </p>
              )}

              {meta.tags?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] tracking-tight text-ln-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Actions — visible on mobile/tablet where the left rail is hidden */}
            <PostActions
              url={url}
              title={meta.title}
              rawContent={rawContent}
              next={next}
              className="mt-6 lg:hidden"
            />

            {cover && (
              <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
                <img
                  src={cover}
                  alt={meta.title}
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="blog-prose mt-9">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>

            <PostNav prev={prev} next={next} />

            <div className="mt-10 border-t border-white/10 pt-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-mono text-[12px] lowercase tracking-tight text-ln-blue/90 transition-colors hover:text-ln-blue"
              >
                <HiOutlineArrowLeft />
                back to all writing
              </Link>
            </div>
              </article>
            </div>
          </Container>
        </div>
      </BlogLayout>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { meta, content } = getPostBySlug(params.slug);

  // Adjacent posts for the "keep reading" cards + next-post arrow. getAllPosts()
  // is newest-first, so the newer post is at index-1 and the older at index+1.
  const posts = getAllPosts();
  const i = posts.findIndex((p) => p.slug === params.slug);
  const next = i > 0 ? posts[i - 1] : null;
  const prev = i >= 0 && i < posts.length - 1 ? posts[i + 1] : null;

  // These plugins are ESM-only; importing them lazily inside getStaticProps
  // (build-time only) sidesteps CJS/ESM interop headaches in the Next bundle.
  const { serialize } = await import("next-mdx-remote/serialize");
  const { default: remarkGfm } = await import("remark-gfm");
  const { default: remarkUnwrapImages } = await import("remark-unwrap-images");
  const { default: rehypeSlug } = await import("rehype-slug");
  const { default: rehypeAutolinkHeadings } = await import(
    "rehype-autolink-headings"
  );
  const { default: rehypePrettyCode } = await import("rehype-pretty-code");

  // Collect the h2–h4 headings (with their rehype-slug ids) into `toc` for the
  // "On this page" rail. Runs last so the ids added by rehype-slug are present.
  const toc = [];
  const nodeText = (node) =>
    node.type === "text"
      ? node.value
      : (node.children || []).map(nodeText).join("");
  const rehypeCollectToc = () => (tree) => {
    const walk = (node) => {
      if (
        node.type === "element" &&
        /^h[2-4]$/.test(node.tagName || "") &&
        node.properties?.id
      ) {
        toc.push({
          depth: Number(node.tagName[1]),
          id: String(node.properties.id),
          text: nodeText(node).trim(),
        });
      }
      (node.children || []).forEach(walk);
    };
    walk(tree);
  };

  // Rewrite ```mermaid code blocks into a <mermaid> element BEFORE
  // rehype-pretty-code sees them, so they render as diagrams (client-side via
  // the Mermaid component) instead of highlighted text.
  const rehypeMermaid = () => (tree) => {
    const walk = (node) => {
      const children = node.children;
      if (!Array.isArray(children)) return;
      for (let i = 0; i < children.length; i++) {
        const pre = children[i];
        if (pre.type === "element" && pre.tagName === "pre") {
          const code = (pre.children || []).find(
            (c) => c.type === "element" && c.tagName === "code"
          );
          const cls = code?.properties?.className;
          const classes = Array.isArray(cls) ? cls : cls ? [cls] : [];
          const isMermaid = classes.some((c) =>
            String(c).toLowerCase().includes("language-mermaid")
          );
          if (code && isMermaid) {
            children[i] = {
              type: "element",
              tagName: "mermaid",
              properties: {},
              children: [{ type: "text", value: nodeText(code) }],
            };
            continue;
          }
        }
        walk(pre);
      }
    };
    walk(tree);
  };

  const mdxSource = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      // remarkUnwrapImages strips the <p> wrapper around standalone images so a
      // block-level <figure> (BlogImage) is never nested in a <p> (invalid HTML
      // → hydration mismatch).
      remarkPlugins: [remarkGfm, remarkUnwrapImages],
      rehypePlugins: [
        rehypeMermaid,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [
          rehypePrettyCode,
          {
            theme: "github-dark-dimmed",
            keepBackground: false,
            defaultLang: "plaintext",
          },
        ],
        rehypeCollectToc,
      ],
    },
  });

  return { props: { meta, mdxSource, toc, rawContent: content, prev, next } };
}
