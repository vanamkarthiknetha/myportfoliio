import { useEffect, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";

/**
 * "On this page" rail. `toc` is `[{ depth, id, text }]` extracted at build time
 * (see getStaticProps in pages/blog/[slug].js), so the ids match rehype-slug's
 * heading anchors exactly. Highlights the heading nearest the top as you scroll.
 */
const TableOfContents = ({ toc = [] }) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const headings = toc
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      // Active band sits just below the fixed navbar.
      { rootMargin: "-88px 0px -68% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  if (!toc.length) return null;

  return (
    <nav aria-label="Table of contents" className="text-[13px]">
      <p className="mb-4 flex items-center gap-2 font-semibold text-ln-text">
        <HiBars3BottomLeft className="text-ln-dim" />
        On this page
      </p>

      <ul className="space-y-2.5">
        {toc.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.depth - 2) * 0.9}rem` }}
            >
              <a
                href={`#${item.id}`}
                className={`block leading-snug tracking-tight transition-colors ${
                  isActive
                    ? "font-semibold text-ln-text"
                    : "text-ln-dim hover:text-ln-muted"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
