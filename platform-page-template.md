# Platform Page Template

The canonical content structure for a `/solutions/platforms/<name>` page,
extracted from [`src/pages/solutions/platforms/meta.astro`](src/pages/solutions/platforms/meta.astro).
Use it to build or rewrite any platform page (TikTok, LinkedIn, YouTube,
Pinterest, Snap, X, Xiaohongshu, Douyin, WeChat, etc.).

`meta.astro` is the reference implementation. The layout, CSS and client
script are platform-agnostic: copy them verbatim and change only the
frontmatter data and the section copy. This file documents what to change
and the rules that govern the copy.

## The one rule that drives every page

**The page is about what hubStudio DOES for the platform, never about what
the platform is.** No "Facebook is the relationship platform", no audience
sociology, no platform history. Every section answers "what work do we ship
into this platform, and how." If a sentence would still be true if hubStudio
did not exist, cut it or rewrite it.

## Content rules (all mandatory)

1. **What we do, not what the platform is.** See above.
2. **No clients, ever.** Never list, name or imply a client anywhere: not in
   the why-section, not as sample captions, not in FAQ answers. Sample frames
   are labelled by service type only (`Organic · IG Feed`), never by brand.
3. **Service lanes are the spine.** The work is organised into service lanes
   (Meta uses four: Content, Ad creative, UGC, Avatar). Each lane is one
   `coverage[]` entry and one alternating feature row. Pick the lanes that
   genuinely apply to the platform; 3 to 5 is the workable range.
4. **Every image contains a visible screenshot of one of that platform's
   own products.** Each `alt` text names the exact UI shown (Reels side rail,
   Feed grid, Stories chrome, Ads Manager library, Business Suite planner).
   The generation prompt must demand that UI explicitly. No exceptions.
5. **Team scenes use Chinese subjects in a lived-in Chinese office.** Real
   Shanghai studio: tea mugs, boba cups, sticky notes, tangled cables,
   cluttered desks. Never Western or Aesop-clean. See the
   `chinese-staff-and-office-in-imagery` memory.
6. **Language of the on-screen work content follows the platform's market.**
   Western platform (Meta, TikTok global, LinkedIn, YouTube, Pinterest, X):
   all visible work content, UI text, sticky notes and printouts in English.
   Chinese platform (Douyin, Xiaohongshu, WeChat, Bilibili): on-screen work
   content in Chinese, and the page copy itself follows the Translation
   rules in `CLAUDE.md`.
7. **Repo standards apply.** No em-dash (U+2014). No decorative numerals
   inside cards or repeated blocks. Running body copy at `var(--type-body)`.
   `hubStudio` keeps its canonical lowercase-h casing.

## Page architecture: 8 sections

| # | Section | Background | Purpose |
|---|---------|-----------|---------|
| S1 | `hero` | dark `--ink` | Platform name, the promise, the lanes named |
| – | `cbar` | – | Print calibration colour bar (divider) |
| S2 | `why` | dark `--ink` | What we ship into the platform + stats |
| S3 | `cover` | `--paper` | The service lanes, one alternating row each |
| S4 | `proof` | white | Contact sheet of sample frames |
| S5 | `source` | `--navy` | Partnership model: authored creative, AI volume |
| S6 | `craft` | `--paper` | Process, 5-step pinned-scroll sequence |
| S7 | `faq` | `--paper` | Sticky intro + accordion |
| S8 | `end` | dark `--ink` | Closing CTA + colour bar |

Section order, classes, markup, CSS and the `<script>` block are fixed.
Copy them from `meta.astro` unchanged.

## Frontmatter data model

Everything platform-specific lives in these consts. This is the only part
you author per platform.

### `colourBar` — shared, never edit
Fixed 10-swatch print calibration bar. Copy verbatim.

### `stats` — exactly 3
```ts
{ from: 0, to: <number>, suffix: '<%|+|h|x|''>', label: '<short>', note: '<one line>' }
```
Animated count-up. Keep them about the work (lanes shipped, variants per
concept, brief-to-first-cut hours). No invented performance metrics, no
client outcomes.

### `samples` — 5 contact-sheet frames
```ts
{ src: '/Images/<platform>-sample-<id>.jpg', kind: '<Lane> · <Surface>', alt: '<...>' }
```
`kind` is service-type + surface only (`Ad creative · Reels`). No brand
names. `alt` must name the visible platform UI in the frame.

### `coverage` — the service lanes (3 to 5)
```ts
{
  fig: '<B|C|D|E>',           // figure letter, sequential
  label: '<Lane>',            // 'Content', 'Ad creative', 'UGC', 'Avatar'
  heading: '<Lane>. <hook>.', // e.g. 'Content. Organic feed, Reels and Stories.'
  image: '/Images/<platform>-<lane>.jpg',
  alt: '<names the visible platform UI>',
  lead: '<one-sentence what-we-do summary>',
  body: ['<para: the work>', '<para: the studio discipline>'],
  tags: ['<8 in-scope chips>'],
}
```
Each entry renders as one alternating feature row. The heading is always
`Lane. Hook.` and describes a hubStudio service, never a platform feature.

### `credentials` — 4 trust chips
```ts
['Private GPU infra', 'NDA & DPA', 'EU AI Act', 'Data sovereignty']
```
Infrastructure and compliance only. Reusable as-is across platforms.

### `processSteps` — exactly 5
```ts
{
  short: '<Brief|Direction|AIGC|Launch|Adapt>',
  tier: '<Where it is won|The rest is execution>', // first 2 won, last 3 execution
  title: '<sentence>.',
  body: '<one paragraph>',
  image: '/Images/<platform>-p<1-5>-<short>.jpg',
  alt: '<names the visible platform UI>',
}
```

### `faqs` — about 8 to 10
```ts
{ q: '<question>', a: '<answer>', link?: { match: '<substring>', href: '<path>' } }
```
First three FAQs explain the service lanes ("What exactly do you produce for
X?", then one per distinctive lane). Remaining FAQs cover volume,
consistency, turnaround, paid placements, the AI-tell finishing pass,
white-label, and asset/model ownership. No client references.

### `faqSchema` — derived, never edit
Builds `FAQPage` JSON-LD from `faqs`. Copy verbatim.

## Per-section copy blueprint

**S1 Hero.** Kicker `Platform / <Name>`. Three-line `h1`, middle line in
`.serif` (orange italic), naming the lanes-into-one-brief idea. `hero__tag`:
the lanes as a short list with the last in `<em>`. `hero__lead`: two
paragraphs, first names every lane and what it is, second is the
one-brief-many-variants promise. CTAs: `Send the brief` + `See the work`.
`hero__meta`: `Hong Kong + Shanghai / <platform>-native creative under one director`.

**S2 Why.** `h2` "What we ship into `<Name>`". Two stacked paragraphs: first
lists the lanes end to end, second is the single-creative-direction point.
**Delete any client roster.** Wide shot + figcaption. Stats block: a serif
pull-quote summarising the lanes, then the 3 `stats`.

**S3 Coverage.** `h2` "`<N>` lanes, one brand line" (`N` matches
`coverage.length`). One alternating feature row per lane.

**S4 Proof.** `h2` "Selected frames". `band__note` says the frames are
authored work sized for the surface. 3-column contact sheet of `samples`.

**S5 Partnership.** `h2` "Authored creative, AI volume". Lead: the brands
compounding results run an authored process with AIGC inside it. Body:
hubStudio sits between technical and creative. `credentials` chips.
Infra/sovereignty paragraph. Quiet closing line.

**S6 Process.** `h2` "One brief, every placement". Lede + the
"first two steps win it, the rest is execution" note. 5 `processSteps`.

**S7 FAQ.** Sticky intro `h2` "Before the first call" + CTA. Accordion.

**S8 Close.** `h2` "Send the `<Name>` brief. Back in 48 hours". CTA pair.

## `<Layout>` meta

```astro
<Layout
  title="<Platform> AIGC: <what we make> at Scale"
  description="AIGC for <Platform>. <lanes>, produced inside a working studio. One brief, every placement."
>
```
Do not flag SEO elements as changed when creating a new page; only flag if
rewriting an existing one (per `CLAUDE.md` SEO rule).

## Image plan per platform

Reference: `meta.astro` ships 18 images. Same set per platform.

| Slot | File | Aspect | Visible platform UI |
|------|------|--------|---------------------|
| Hero | `<p>-hero.jpg` | 1:1 | A phone screen showing the platform's primary surface |
| Why shot | `<p>-roots.jpg` | 16:9 | Several screens, one per lane's surface |
| Lane × N | `<p>-<lane>.jpg` | 1:1 | That lane's surface on a screen |
| Samples × 5 | `<p>-sample-<id>.jpg` | 1:1 | The exact surface named in `kind` |
| Partnership | `<p>-hybrid-main.jpg` / `-inset.jpg` | 1:1 | Ads/creative library; a single frame |
| Process × 5 | `<p>-p<1-5>-<short>.jpg` | 4:3 | The platform UI relevant to that step |

Generate with `scripts/generate-image.mjs` (`npm run gen`). Every prompt:

- Anchored to a concrete lighting condition + composition, per
  `hubstudio-image-style-guide.md` (read it before any image work).
- States the exact platform UI element required, in plain terms the model
  can render (icon rails, grids, progress bars), not fragile interface text.
- Team scenes: Chinese subjects, lived-in Shanghai studio, screens at
  natural proportional scale, all on-screen work content in the market
  language (rule 6).
- Never names a real person (the model rejects the prompt). Describe the
  look: lens, light direction, grade, grain, distance.

## Apply-to-new-platform checklist

1. Copy `meta.astro` to `src/pages/solutions/platforms/<name>.astro`.
2. Decide the service lanes for this platform (3 to 5). Rewrite `coverage`.
3. Rewrite `stats`, `samples`, `processSteps`, `faqs` per the blueprint.
4. Update every section's copy: kicker, hero, why, proof, partnership,
   process, FAQ, close. Keep it all what-we-do.
5. Confirm zero client references anywhere.
6. Rewrite every `alt` to name a visible UI from this platform's products.
7. Generate the 18 images; verify each shows the platform UI and team
   scenes follow rules 5 and 6.
8. Update `<Layout>` title/description.
9. `npm run check` and `npm run build`. Grep staged files for U+2014.
