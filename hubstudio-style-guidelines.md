# hubStudio — Design Guidelines (Style)

Extracted from the live site CSS (`src/styles/global.css`) and its applied use
on the home page. This is a style brief for design work: colors, type, spacing,
components, motion, and the look-and-feel rules that make a page read as
hubStudio. hubStudio is a creative production house, so the visual language is
**cinematic editorial**: confident, warm, layered, never generic.

---

## 1. Color

### Canvas (backgrounds)

| Token | Hex | Use |
| --- | --- | --- |
| Cream | `#f0ede9` | Default page background. The site is warm off-white, never pure white. |
| White | `#ffffff` | Raised surfaces: cards, panels, "light" sheets. |
| Ink | `#0e1633` | Dark sections (near-black navy-blue), used full-bleed for contrast moments. |

### Brand

| Token | Hex | Use |
| --- | --- | --- |
| Orange | `#e94e1b` | The signature accent. Primary buttons, accent words, focus rings, links, dots, glow. |
| Orange deep | `#c73e10` | Pressed / deeper orange. |
| Navy | `#1e3a8a` | Secondary brand color, used in gradients and small marks. |
| Navy deep | `#0e1f4e` | Dark "navy" sections (alternative to ink). |

### Text

| Token | Hex | Use |
| --- | --- | --- |
| Ink text | `#0a0a14` | Default body and headline text on light. |
| Mute | `#6b6b73` | Secondary text: leads, descriptions, captions, labels. |
| On-dark | `#f0ede9` | Text on ink / navy surfaces (cream, not white). |

### Lines

| Token | Value | Use |
| --- | --- | --- |
| Hairline | `rgba(10,10,20,0.08)` | Subtle dividers, white-card borders. |
| Strong | `rgba(10,10,20,0.18)` | Visible borders, cream-card outlines, stat rules. |

**Rules of thumb**
- Orange is precious. One accent per headline, used to land a key word, never to
  decorate. Avoid orange-on-orange and large orange fills beyond the orange card/tile.
- On dark surfaces text is cream (`#f0ede9`), and muted text becomes
  `rgba(240,237,233,~0.75)`.
- Saturated surfaces (orange, ink) carry a faint film grain overlay (see §7).

---

## 2. Typography

### Families

- **Sans — Inter** (400/500/600/700). All UI, body, and headlines.
- **Serif — Playfair Display, italic 500.** Used *only* for accent words inside
  headlines, never for body. This is the brand's signature contrast move.
- **Mono — JetBrains Mono, 500.** Eyebrows, chips, captions, badges, microcopy.

All fonts are self-hosted woff2 (no external CDN). Inter 600 and Playfair italic
are preloaded.

### Scale

| Token | Size | Role |
| --- | --- | --- |
| H1 | `clamp(48px, 7vw, 96px)` | Page hero headline. |
| H2 | `clamp(40px, 5vw, 72px)` | Section headlines. |
| H3 | `clamp(24px, 2.5vw, 36px)` | Card / sub-section titles. |
| H4 | `20px` | Small headings. |
| Lead | `clamp(18px, 1.4vw, 22px)` | Intro paragraph under a headline. |
| **Body** | **`17px`** | **All running prose. The one canonical body size.** |
| Small | `14px` | Captions, figure labels, microcopy, UI chrome only. |
| Eyebrow | `11px` | Section tags. |
| Button | `15px` | Button labels. |

Line heights: display `0.98`, headline `1.04`, body `1.55` (prose 1.6–1.66).

### Headline treatment

- Inter, weight **600**, letter-spacing **-0.02em**, line-height tight (~1.04).
- Hero headline pushes tighter: letter-spacing **-0.035em**, line-height **1.0**.
- **The accent word:** one or two words per headline set in Playfair Display
  *italic* — letter-spacing reset to 0. On light it stays ink-colored or turns
  orange; on the hero it turns orange. Example: "Twenty service lines, *one
  studio*." / "built for what content has *become*."
- Big numeric stats: weight 700, letter-spacing -0.04em, `tabular-nums`. A
  word-stat (e.g. "Days") instead uses Playfair italic in orange.

### Body copy rule (permanent)

Running prose is always **17px** (`--type-body`), line-height ~1.6. Never set
paragraphs to 14px — `--type-small` is reserved for captions, labels, eyebrows,
chips, and UI chrome, never for sentences meant to be read through.

### Eyebrow

Every section opens with an eyebrow: JetBrains Mono, 11px, weight 500,
letter-spacing `0.12em`, `UPPERCASE`, muted color (orange variant on dark).

---

## 3. Layout & spacing

| Token | Value |
| --- | --- |
| Container max width | `1200px` |
| Container padding | `48px` desktop / `24px` mobile |
| Section vertical padding | `160px` desktop / `96px` mobile (clamp 96–168px in practice) |
| Card gap | `24px` |
| Nav height | `72px` |

- **Generous whitespace.** Sections breathe; ~160px of vertical air on desktop.
- **Measure:** body text capped around 60ch, intros 38–60ch, summaries ~42ch.
- Grids are 12-column on desktop, collapsing to 2-up then 1-up. Bento layouts
  mix span widths (7/5/6) so tiles feel composed, not uniform.

### Sheet stacking (signature layout move)

Each section is a rounded panel that overlaps the one above it with a negative
`margin-top` (~-40 to -60px) and a top-only border-radius
(`clamp(28px, 3.6vw, 60px)` top corners, 0 bottom). A soft upward shadow sits
under each sheet. The page reads as **layered depth**, not flat stacked bands.
Sheets alternate background: light (white) → cream → light → navy → ink, etc.

---

## 4. Radius, shadow, borders

| Token | Value | Use |
| --- | --- | --- |
| Card radius | `28px` | Cards. Tiles use `clamp(20px, 2vw, 30px)`. |
| Pill radius | `999px` | Buttons, chips, tabs, badges, captions. |
| Sheet radius | `clamp(28px, 3.6vw, 60px)` top corners only | Section panels. |
| Card shadow | `0 4px 24px rgba(10,10,20,0.06)` | Resting white cards. |
| Card shadow (hi) | layered, deeper | Hover / featured cards. |
| Sheet shadow | `0 -30px 64px -36px rgba(10,10,20,0.42)` | Upward depth between sheets. |

- Corners are **soft and large**. Pills for anything interactive and small;
  28px+ for content surfaces.
- Borders are thin and low-contrast: hairline on white cards, strong on cream.
- Shadows are soft, wide, low-opacity — diffuse, never hard or dark.

---

## 5. Components

### Buttons (pill)

- Shape: pill, padding `14px 28px`, font 15px weight 600, letter-spacing -0.01em.
- Hover: lift `translateY(-4px)`. Active: `translateY(0) scale(0.96)`.
- Variants:
  - **primary** — orange fill, white text. The main CTA.
  - **primary-inverse** — white fill, orange text (for use on orange).
  - **secondary** — transparent, ink text, strong-line border.
  - **on-dark** — transparent, cream text, translucent border (for dark heroes).
  - **ghost** — transparent, no lift, turns orange on hover (inline / nav use).

### Arrow link

Inline text link: orange, weight 600, 14px, with a `→` that slides
`translateX(6px)` on hover. The standard "Explore / Read more" affordance.

### Cards & tiles

Radius 28px, four tones:
- **white** — white bg, hairline border, soft shadow. The default.
- **cream** — cream bg, strong border, no shadow.
- **orange** — orange fill, white text, grain overlay.
- **navy / ink** — dark fill, cream text, often with a corner radial-gradient glow.

Tiles support a 3D pointer tilt and a pointer-tracking radial glow; non-hovered
tiles in a grid dim to ~0.62 opacity to focus the hovered one. A large
low-opacity "ghost" icon bleeds off the bottom-right corner.

### Chip

Pill, JetBrains Mono 11px uppercase, letter-spacing 0.06em, with an optional
6px round dot in `currentColor`.

### Badge / caption

Pill on media: translucent dark ink background (`rgba(14,22,51,0.82)`) with
`backdrop-filter: blur(6px)`, cream/white mono uppercase text, often a dot.

### Tabs

Pill-shaped tab group inside a bordered cream track. Selected tab gets the ink
fill, white text, and a soft drop shadow; its dot turns orange.

### Icons

Custom-drawn SVG, `viewBox="0 0 32 32"`, stroke-based (`stroke-width` ~1.4–1.7,
round caps/joins), with a single filled accent shape in orange. Never use raw
off-the-shelf icon sets — every icon is authored for hubStudio.

---

## 6. Imagery

- Authored editorial photography, warm film grade (Portra/Kodak Gold/Fuji
  feel), single light source, lifted blacks, subtle grain. Never the "AI
  generator default" (glossy plastic skin, perfect bokeh, symmetrical faces).
- hubStudio team / office scenes feature Chinese subjects in a lived-in Chinese
  studio, not a Western minimalist set.
- Common aspect ratios: `4/5` portrait figures, `4/3` panels, `3/2` insight
  cards. Media corners follow the section radius; images sit in clipped
  rounded frames.
- Decorative offset accent block (solid orange) sits behind a key figure as a
  layered editorial frame.
- See `hubstudio-image-style-guide.md` for the binding visual standard before
  any image or asset work.

---

## 7. Texture & atmosphere

- **Film grain.** Saturated surfaces (orange cards, ink/navy sheets, hero) carry
  a faint SVG fractal-noise overlay at ~0.4–0.5 opacity, `mix-blend-mode:
  overlay`. It keeps flat color from looking digital.
- **Glow.** Dark sections use large, soft, blurred orange radial gradients
  bleeding off an edge for cinematic warmth.
- **Gradients** are used sparingly: corner radial accents on dark tiles, the
  scroll-progress bar (`orange → #ff9a5c`), hero scrims.
- **Scrims** on hero/work media: layered dark gradients so text stays legible.

---

## 8. Motion

- **Easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)` — a confident decelerate.
- **Scroll reveal:** elements start `opacity 0` + `translateY(~12–34px)`, settle
  to rest over ~400–800ms. Staggered by index (`--i * ~95ms`).
- **Hero entrance:** headline lines mask-wipe up in sequence; lead and CTAs
  fade-rise after.
- **Hover:** buttons lift, arrows slide, tiles tilt + glow, ghost icons rotate.
- **Scroll progress bar:** 3px fixed bar at the top, orange gradient fill.
- **Accessibility:** every animation is gated on `prefers-reduced-motion:
  reduce` — reveals show instantly, the hero video is hidden, transitions drop
  to near-zero. Always honor it.

---

## 9. Focus & accessibility

- Focus ring: `2px solid orange`, `outline-offset: 2px`, 4px radius.
- Visible skip-link, `.sr-only` for screen-reader-only text.
- Color contrast holds: muted text only on its matched background; on dark,
  text is cream.
- Tabs use full ARIA (`role="tab"`, `aria-selected`, `aria-controls`).

---

## 10. Voice of the visual system (do / don't)

**Do**
- Lead with warm cream, not white. Reserve pure white for raised surfaces.
- Mix one Playfair italic accent word into each headline.
- Let sections overlap as stacked sheets for depth.
- Keep one orange accent per view; let it land, not decorate.
- Use soft large radii, soft wide shadows, generous whitespace.
- Author every icon, illustration, and image for hubStudio.

**Don't**
- No 14px running prose. Body is 17px, always.
- No decorative ordinal numbers (`01`, `02`, `1`, `2`…) inside cards, tiles,
  steps, or any repeated titled block. Heading + visual order carry sequence.
- No em-dash (U+2014) anywhere — in copy, headings, alt text, or comments. Use
  a comma, colon, period, or parentheses. (En-dash `–` for numeric ranges and
  arrows `→` are fine.)
- No raw stock icon sets, no generic "AI default" imagery.
- No hard black; the darkest surface is ink `#0e1633`, darkest text `#0a0a14`.
- No external CDN assets (fonts, analytics, maps) — self-host everything.
