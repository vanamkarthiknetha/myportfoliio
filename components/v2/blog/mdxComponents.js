import Link from "next/link";
import Callout from "@/components/v2/blog/Callout";
import BlogImage from "@/components/v2/blog/BlogImage";
import Mermaid from "@/components/v2/blog/Mermaid";

/**
 * Component overrides handed to <MDXRemote>. We only override the elements that
 * need real behavior (links, images) plus the custom components authors can use
 * directly in MDX. Everything else (headings, lists, tables, blockquotes,
 * inline/block code) is styled globally via the `.blog-prose` scope in
 * globals.css, so the map stays small.
 */

const MDXLink = ({ href = "", children, ...rest }) => {
  const isInternal = href.startsWith("/") || href.startsWith("#");
  if (isInternal) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

// Markdown `![alt](src)` -> styled figure. `node` is injected by MDX; drop it.
const MDXImg = ({ node, ...props }) => <BlogImage {...props} />;

const mdxComponents = {
  a: MDXLink,
  img: MDXImg,
  // `mermaid` fenced code blocks are rewritten to a <mermaid> element by a
  // rehype plugin (see getStaticProps) and rendered here as a diagram.
  mermaid: Mermaid,
  // Components usable directly inside .mdx files:
  Callout,
  BlogImage,
};

export default mdxComponents;
