# Blog Thumbnail Prompt

A starter template for generating a blog **cover / thumbnail** that matches this
portfolio's design. Paste the "Prompt to give the AI" block below, then append
your blog's title + summary. The AI produces a clean, on-brand cover.

Two modes:

- **Mode A — SVG / code** (recommended). Exact palette + font, tiny file, crisp
  at any size, and it won't garble text. Use if your AI can output code.
- **Mode B — image model** (DALL·E / Midjourney / Imagen). More illustrative;
  colors approximate and text is unreliable.

---

## Clarity first (read this)

A cover has **one job: say what the post is, at a glance.** The most reliable
way to do that is **title-forward**:

> a short **title** (3–6 words) as the main element · one tiny lowercase kicker ·
> one subtle background motif · everything else empty space.

Use a purely abstract/metaphor image only if you have one strong idea. Do **not**
scatter feature words around the canvas — that reads as clutter, not meaning.

---

## Specs

- **Aspect ratio:** 16:9 · **Size:** 1600 × 900 px.
- **Background:** `#1B1F23` (same as the site) so it blends in.
- **Save:** `public/blog/<slug>/cover.svg` (or `.png` / `.webp`, < ~250 KB), then:
  ```yaml
  cover: "/blog/<slug>/cover.svg"
  ```
- **Safe zone:** keep title + focal art centered, away from the outer ~8%.

---

## Design theme (the AI must follow this)

**Palette — dark, one accent. No other colors.**

| Role            | Hex        |
| --------------- | ---------- |
| Background      | `#1B1F23`  |
| Surface         | `#1D2226` → `#222629` |
| Hairline        | `#38434F` (or white 8–12%) |
| Text (bright)   | `#E7E9EA`  |
| Text (muted)    | `#8B95A1`  |
| **Accent**      | **`#70B5F9`** (soft sky blue — the only accent) |

**Type:** Geist (sans, for the title) + Geist Mono (small lowercase labels).
Fallback: clean geometric sans / monospace.

**Mood:** quiet, engineered, editorial — minimal, lots of negative space.

**Do**

- Dark background; a single soft-blue accent used sparingly.
- A clear **title** as the focal point, or one abstract metaphor for the topic.
- Thin hairlines, a faint dot grid, generous empty space.
- At most **one** tiny lowercase mono label (a tag or kicker).

**Don't — these are the common failures, avoid them:**

- ❌ **Never draw literal spec text** — no hex codes (`#8B95A1`), color names, or
  any of these instructions rendered as text in the image.
- ❌ **No scattered feature-word labels** ("prose", "callouts", "diagrams"…).
  One idea, one label — not a word cloud.
- ❌ No multiple competing focal points; no busy diagrams.
- ❌ No photos, people, 3D/glossy, neon or rainbow gradients, drop shadows.

---

## Mode A — SVG prompt (recommended)

> **Prompt to give the AI:**
>
> Generate one self-contained **SVG, 1600×900**: a minimal, **title-forward**
> blog cover for a dark developer-portfolio.
>
> Use ONLY these colors — background `#1B1F23`, hairlines `#38434F`, text
> `#E7E9EA` / `#8B95A1`, one accent `#70B5F9`. Fonts: Geist (title) / Geist Mono
> (labels), with sans/monospace fallbacks.
>
> Layout: a short title (3–6 words, derived from the post) as the main element in
> bright text; one tiny lowercase mono kicker above it; a short blue accent rule;
> optionally one faint background motif (a subtle icon/mark for the topic) and a
> faint dot grid. Lots of negative space. Flat 2D vector.
>
> Hard rules: **do not render any hex codes, color names, or these instructions
> as text.** No scattered feature words — one title, one label. No photos, no
> gradients beyond subtle dark-on-dark, no shadows. Output only the SVG.
>
> **Blog content:**
> ```
> {{ PASTE TITLE + SUMMARY HERE }}
> ```

### Starter SVG (fill the 3 slots — this is the actual cover shape)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <rect width="1600" height="900" fill="#1B1F23"/>
  <defs>
    <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#38434F" opacity="0.3"/>
    </pattern>
  </defs>
  <rect width="1600" height="900" fill="url(#dots)"/>

  <!-- KICKER: one short lowercase tag -->
  <text x="140" y="352" font-family="'Geist Mono', ui-monospace, monospace"
        font-size="24" letter-spacing="7" fill="#8B95A1">[ {{KICKER}} ]</text>

  <!-- TITLE: 3–6 words -->
  <text x="136" y="452" font-family="'Geist', ui-sans-serif, system-ui, sans-serif"
        font-size="82" font-weight="600" fill="#E7E9EA">{{TITLE}}</text>

  <rect x="140" y="486" width="132" height="4" rx="2" fill="#70B5F9"/>

  <!-- DEK: one short muted subline -->
  <text x="141" y="548" font-family="'Geist Mono', ui-monospace, monospace"
        font-size="25" letter-spacing="1" fill="#8B95A1">{{DEK}}</text>
</svg>
```

---

## Mode B — image-model prompt

> Minimal 16:9 blog cover, flat vector, dark developer-portfolio aesthetic. Dark
> charcoal background (#1B1F23), one soft sky-blue accent (#70B5F9), thin lines,
> faint dot grid, lots of negative space. One clean abstract mark for the topic —
> **no text, no letters, no numbers**, no people, no photorealism, no gradients.
> Quiet, engineered mood. Topic: {{ PASTE TITLE + SUMMARY HERE }}

(Image models can't render text reliably, so ask for **no text** and let the
site's UI supply the title.)

---

## Example concepts (pick ONE)

- **Voice AI pipeline** → three connected nodes in a row (input → model → output).
- **Static vs dynamic** → a document glyph resolving into a rendered page.
- **A life / personal post** → a single calm shape (a horizon line, a small arc)
  with lots of empty space.

If in doubt, do less: title + one mark + empty space.
