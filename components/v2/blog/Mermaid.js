import { useEffect, useId, useState } from "react";

/**
 * Renders a Mermaid diagram from a ```mermaid code block.
 *
 * Rendering is client-side and the `mermaid` library (~large) is loaded lazily
 * via dynamic import, so it only ships to posts that actually contain a diagram
 * — pages without one never pay for it. On the server / first paint we render a
 * small placeholder (which matches on hydration), then swap in the SVG on mount.
 */

let mermaidPromise;

function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then((mod) => {
      const mermaid = mod.default;
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "dark",
        fontFamily: "inherit",
        themeVariables: {
          background: "#1D2226",
          primaryColor: "#222629",
          primaryBorderColor: "#38434F",
          primaryTextColor: "#E7E9EA",
          secondaryColor: "#1D2226",
          tertiaryColor: "#1B1F23",
          lineColor: "#8B95A1",
          textColor: "#B0B5BB",
        },
      });
      return mermaid;
    });
  }
  return mermaidPromise;
}

const toText = (children) => {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(toText).join("");
  if (children?.props?.children) return toText(children.props.children);
  return "";
};

const Mermaid = ({ children }) => {
  const code = toText(children).trim();
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const rawId = useId();
  const id = `mmd-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

  useEffect(() => {
    let cancelled = false;
    if (!code) return;
    loadMermaid()
      .then((mermaid) => mermaid.render(id, code))
      .then(({ svg }) => {
        if (!cancelled) setSvg(svg);
      })
      .catch((e) => {
        if (!cancelled) setError(e?.message || "Failed to render diagram.");
      });
    return () => {
      cancelled = true;
    };
  }, [code, id]);

  if (error) {
    return (
      <figure className="my-7">
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-rose-300/80">
          Diagram error
        </p>
        <pre className="overflow-x-auto rounded-lg border border-rose-400/30 bg-rose-400/[0.06] p-4 text-[13px] text-ln-muted">
          <code>{code}</code>
        </pre>
      </figure>
    );
  }

  if (!svg) {
    return (
      <div className="my-7 flex min-h-[8rem] items-center justify-center rounded-lg border border-white/10 bg-ln-surface font-mono text-[12px] tracking-tight text-ln-dim">
        rendering diagram…
      </div>
    );
  }

  return (
    <figure
      className="my-7 flex justify-center overflow-x-auto rounded-lg border border-white/10 bg-ln-surface p-4 [&_svg]:h-auto [&_svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default Mermaid;
