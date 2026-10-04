# hubStudio

Astro static site, deployed to Vercel. Canonical host: https://www.hubstudio.ai
(the apex hubstudio.ai 301-redirects to www).

## Positioning (PERMANENT)

The site sells two offers: the **hubStudio app** (self-serve, at
`https://hubstudio.bearingbridge.com`) first, and the **hubStudio studio**
second, presented as three ways to work: Use the app, Studio + app, Studio
only. `hubstudio-positioning.md` (repo root) is binding for every page: the
locked names, the only app facts allowed, and the money language (a prepaid
balance in real currency, never "credits", never an amount). App links come
from `src/lib/links.ts`; the choice is rendered by `WaysToWork.astro`, the
closing by `DualCta.astro`, app screens by `AppShot.astro` with the real
captures in `src/data/app-shots.ts`. hub4You is retired: never mention it.

## Stack

- **Framework:** Astro 6.x (static site generation)
- **Styling:** Tailwind CSS 4.x (via `@tailwindcss/vite`)
- **Language:** TypeScript, strict mode
- **Deployment:** Vercel (`@astrojs/vercel` adapter)
- **Sitemap:** `@astrojs/sitemap`
- **Email:** Resend
- **Screenshots / visual checks:** Playwright

## Testing

- Run `npm run build` before committing to catch build errors.
- Run `npm run check` (`astro check`) for TypeScript validation.
- Do NOT take Playwright screenshots or run a visual QA pass after a task by
  default. It is slow and not wanted. Only capture screenshots / verify
  responsive at 375px, 768px, 1280px when the user explicitly asks for it.

## Publishing jobs leave no TODO (PERMANENT)

No publishing job (the editorial draft and publish runs, a help sync, the
notification email) leaves a TODO behind: no TODO, FIXME or TBD marker, no
"open items" or "for a person" list, no "Phase 2" deferral. Every item is
closed inside the run that found it, or the row is blocked and does not
publish. The full rule and its settled fallbacks are in `editorial/CLAUDE.md`,
"No TODO leaves a run". `scripts/check-content-todo.mjs` (`npm run
content:todo`) runs in `prebuild` and fails the build on a marker in published
content: the insights pages, `src/data/insights.ts`, `src/content/help/` and
`editorial/output/`. Code comments in application source are out of its scope.

## Git conventions

- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `style:`.
- Branch naming: `feature/description`, `fix/description`.
- Always run build before pushing.
- The `prepare-commit-msg` hook prepends an `MMDD-HHMM` timestamp to
  editor-driven commits. It does not replace the conventional-commit subject -
  type the conventional subject and the hook prepends to it
  (`0516-1637 feat: add contact form`). A bare `git commit` with no typed
  subject yields just a timestamp, which is not conventional; commit with
  `-m "feat: …"` (the hook leaves `-m` alone) when the subject matters.

## Performance / deployment constraints

- Self-host everything. No external CDN dependencies.
- Pick analytics that fits the audience (Vercel Analytics or a self-hosted,
  privacy-friendly option).
- If the site must serve a region with a restrictive firewall, avoid any
  blocked third-party service (Google Fonts, Analytics, Maps, reCAPTCHA, Tag
  Manager). Self-host fonts as woff2 in `/public/fonts`.

## Image optimization rule

Every raster image (`.jpg`, `.jpeg`, `.png`, `.webp`) added under
`public/Images/` must be optimized before it ships. SVG and AVIF are exempt.
Targets: heroes max 2000px wide / under ~600 KB, inline 1600px / under ~250 KB,
thumbnails under ~80 KB.

## Body text size (PERMANENT)

Running body copy, the paragraph-level prose inside a section (descriptions,
explanatory paragraphs, card body text, FAQ answers), uses `var(--type-body)`
(17px) with a line-height around 1.6 to 1.66. This is the one canonical body
size: the reference is the body paragraphs on the studio / "who we are" page.

Never set running body paragraphs to `var(--type-small)` (14px).
`--type-small` is reserved for captions, figure labels, eyebrows, chips,
microcopy, and UI chrome, never for sentences a reader is meant to read
through. When a section's prose looks "denser" than the studio page, it is
almost certainly mis-sized to `--type-small`: correct it to `--type-body`.
No exceptions, every page, every locale.

## No numbers in cards (PERMANENT)

Never print a decorative ordinal numeral (`01`, `02`, `03`, …, or a bare `1`,
`2`, `3`) inside a card or any repeated content block: card grids, step
lists, feature rows, "how it works" sequences, accordion rows. The heading and
the visual order carry the sequence; a numeral label never appears. This holds
regardless of whether the block uses the `.card` class, an `<article>`, an
`<li>`, or a plain `<div>`: if it is a repeated titled block, no number.
Browser-native `<ol>` numbering counts too: suppress it in these blocks. When
building or editing any such component, ship it numberless from the start; when
reviewing existing pages, strip any numeral you find. No exceptions.

## Insights distribution (PERMANENT)

Every insight published in `src/data/insights.ts` must surface in two places,
never one:

1. **The home page.** `src/pages/index.astro` takes the first four entries of
   the array as its lead plus grid, so the array stays newest first and the
   order stays in sync with `dateISO`. Publishing a newer article pushes the
   oldest of the four off automatically. Never hard-code a slug there.
2. **Every relevant insights layer.** An insights layer is the "further
   reading" band rendered by `src/components/InsightsLayer.astro`. Which pages
   carry one, and which categories each one claims, live in
   `src/data/insight-placements.ts`. Selection is by category and date, not by a
   hand-written slug list, so a new article reaches the right pages the moment
   it is added to the insights array.

When publishing an insight, the job is not finished until you have checked its
`category` against every placement in `insight-placements.ts` and confirmed the
article lands on the pages where a buyer would want it. If the category is new,
either add it to the placements that should claim it or add a placement, then
render `<InsightsLayer placement="<key>" />` on that page. If an article is
genuinely relevant to a page whose categories do not catch it, pin it with the
placement's `pinned` field, and keep `pinned` to one slug so new work still
surfaces. When a layer claims categories that answer different questions (cost
versus buying model), set `balance: true` so a burst of articles in one
category cannot push the other off the layer. The test: every article in the
home page's newest four must also appear on at least one layer.

Layers currently live on `/app`, `/studio`, `/pricing`, `/solutions/brands`,
`/solutions/agencies`, `/solutions/ai-production/video`,
`/solutions/ai-production/image`, `/studio/ai-excellence`,
`/services/design/ecommerce` and `/services/design/social-media`. The component
is self-contained (its own container, tokens and type) so it drops into any
page; pick the `tone` that contrasts with the section above it.

## DeBeers review page (PERMANENT)

`/debeers` is a hidden, password-gated asset-review page. These rules are
binding for it and any page built on the same pattern.

- **Hidden and private.** Server-rendered (`prerender = false`), gated by a
  password checked server-side in [`src/lib/debeers.ts`](../src/lib/debeers.ts)
  that sets a signed `httpOnly` session cookie via `/api/debeers/login`. Never
  downgrade to a client-side-only gate. The page is `noindex`, excluded from the
  sitemap (`astro.config.mjs` filter) and disallowed in `robots.txt`, and never
  appears in the nav. Secrets (`DEBEERS_PASSWORD`, `DEBEERS_SESSION_SECRET`)
  belong in env vars; KV creds in `KV_REST_API_URL` / `KV_REST_API_TOKEN`.
- **Asset records** live in `src/data/debeers-assets.ts`, one typed entry each:
  `id`, `title`, `image` (grid thumbnail), optional `full` (enlarge preview),
  optional `original` (download), `alt`, `description`, `spec`. The `id` is also
  the Vercel KV key for that asset's comments, so it is stable: never rename or
  reuse an `id` once comments exist.
- **Three image tiers, never confused.**
  - `image`: optimized thumbnail in `public/Images/debeers/` (≤2000px), grid only.
  - `full`: full-resolution file for click-to-enlarge (lighter webp is fine
    here; it is only a preview).
  - `original`: the untouched model output before any optimization (the source
    PNG). **The Download button MUST serve `original`** (falling back to `full`,
    then `image`). Never let download hand back the optimized thumbnail.
- **Originals and previews stay un-optimized.** Both `full` and `original` live
  in `public/debeers-full/`, deliberately OUTSIDE `public/Images/` so neither the
  pre-commit optimizer nor `optimize-images-batch.mjs` (both scoped to
  `public/Images/`) ever downsizes or re-compresses them. Never move either under
  `public/Images/`, and never point `original`/`full` at an optimized thumbnail.
- **All tiers must match.** `image`, `full`, and `original` are the same picture
  at three fidelities, all derived from ONE generation. Never pair a thumbnail
  with a different original. When regenerating an asset, rebuild all three from
  the new source PNG in one pass.
- **Comments** are stored in Vercel KV (Upstash REST, plain `fetch`), one Redis
  list per asset id; anyone with the password can post. Deleting an asset's
  comments means deleting its `debeers:comments:<id>` key.
- Asset images still obey the image style guide below and are produced with
  `scripts/generate-image*.mjs`.

## Image generation: OpenAI only (PERMANENT)

Every image is generated by calling the OpenAI Images API directly
(`https://api.openai.com/v1/images/generations`, model `gpt-image-2`), through the
portable `generate-image-openai` skill or this repo's copies of it,
`scripts/generate-image.mjs` and `scripts/edit-image.mjs` (`npm run gen`,
`npm run edit`, plus the `:max` wrappers). The key is `OPENAI_API_KEY` in `.env`.

WaveSpeed is retired. Never reintroduce `api.wavespeed.ai`, a `WAVESPEED_API_KEY`,
or the `wavespeed` npm package, as a provider, a fallback, or a one-off script.
No other image provider gets added without the user asking for it by name.

Image generation is an editorial CLI tool. Never call the image API from client
code or from a public API route: it bills per request, so an open route is an
open tab on the account.

## Image style guide (MANDATORY)

`hubstudio-image-style-guide.md` (repo root) is the binding visual standard for
every image AND every asset that ships on the site. The rule fires whenever you
generate, source, select, crop, retouch, design, or replace any visual: photos
and campaign images (heroes, case studies, process shots, team portraits,
lifestyle, concept art) AND every other asset: SVG icons, illustrations, logos
and marks, diagrams, backgrounds, textures, dividers, favicons, animation.

Non-negotiables from that guide:

- **Creative is the product, so every asset carries a creative angle.** Nothing
  visual is allowed to be merely functional or generic. Each asset, SVGs
  included, expresses a deliberate idea, is authored by one hand for
  hubStudio, and can defend its place in one sentence. No off-the-shelf icon
  sets used raw, no stock/library defaults dropped in to fill space. When the
  obvious choice is generic, redesign it or cut it.
- Authored editorial campaign photography (2024–2026 era), never the "AI
  generator default." No glossy plastic skin, no perfect bokeh halos, no
  impossible reflections, no symmetrical poreless faces.
- One light source, one shadow. Directional natural light or a single softbox.
- Real-photography technical look: prime-lens framing, f/2.8–f/5.6 depth,
  warm-shadow film grade (Portra 400 / Kodak Gold / Fuji 400H), lifted black
  point, subtle film grain on all hero images.
- Rule-of-thirds composition with negative space for typography; mix crop
  scales across a page; crop tighter than comfortable.
- Anchor each brief to a named photographer reference plus a concrete lighting
  condition, not a style adjective.
- Every image gets a final human pass against the AI-tells checklist before it
  goes live.

Read the full file before any image work and follow it; do not paraphrase from
memory. Treat it like the Translation rules: a permanent project standard.

## Every page ships in French and Chinese (PERMANENT)

All languages are updated with every change. Every new or changed English
page ships, in the same commit, with:

1. its **French slug** in `src/i18n/routes.ts` (native French, lowercase,
   hyphens, accents stripped, never changed once live: a 301 in `vercel.json`
   if it ever must move);
2. its **French and Chinese dictionaries** (`src/i18n/dict/<fr|zh>/`), every
   new sentence translated with the **three passes** of `/deep-translate`,
   on its own page and on every page that lists it (home, insights index,
   insights layers);
3. **localized screenshots** (`x.fr.webp`, `x.zh.webp`, listed in
   `src/i18n/localized-images.json`) for every capture of the app it shows;
4. a passing **`npm run i18n:local -- check`** (reads the pages from a dev
   server it starts itself when none runs) and **`npm run i18n:guard`**
   (offline; also runs in `prebuild` and fails the build on an English page
   without a French address, a non-native slug or an empty translation).

The procedure, the commands, the house rules and the three passes are in
`src/i18n/TRANSLATING.md`; the settled terms in `src/i18n/glossary/fr.md` and
`zh.md`. A change whose translation cannot be finished does not ship: no
English-only page goes live, no English pasted into a dictionary, no marker
left behind. The editorial publish run applies all of this to every article
(`editorial/CLAUDE.md`).

## i18n architecture

English `.astro` pages at the root are the only page sources. French lives at
a native slug under `/fr`, Chinese at `/zh` + the English path. A French or
Chinese page is the English page rendered, then rewritten by the middleware
(`src/middleware.ts`, engine in `src/i18n/core.ts`, shared word for word with
the bearingbridge.com repository) from English-keyed dictionaries:

- `src/i18n/routes.ts`: every English page and its French address
  (`FR_PATHS`, built from the `ARTICLES`, `HOWTOS`, `HELP`, `DESIGN`,
  `PLATFORMS`, `WORK` and `TEAM` maps), plus `ON_DEMAND`, the server-rendered
  pages, whose French and Chinese routes are the small files under
  `src/pages/fr` and `src/pages/zh`. Every other translation is served by the
  prerendered catch-all `src/pages/[locale]/[...path].astro`.
- `src/i18n/paths.ts`: locale detection, `pathIn`, hreflang alternates.
- `src/i18n/dict/<fr|zh>/pages/<page-id>.json`, `common.json` (a sentence on
  three pages or more), `js.json` (client scripts), `server.json` (API
  answers). Filled by `npm run i18n:local -- extract` and the translator's
  bench `npm run i18n:tx` (pending, show, build).
- `data-no-i18n` opts a subtree out of translation, `data-no-localize` a link
  out of address localization.

## Translation rules (MANDATORY)

The single source of truth for any non-English work. Output must read like a
native journalist in the target language wrote it originally, not like a
translated English page.

**When the rule fires:** any time you edit, draft, translate, or fix content in
`src/pages/<locale>/` or `src/i18n/dict/`, any non-English string in `src/i18n/`, or any
non-English alt text, meta description, OpenGraph copy, slug label, button
label, form label, error message, microcopy, blog post, email, or caption. It
does NOT fire for code, identifiers, file paths, console logs, code comments,
commit messages, or PR descriptions.

**Core principles:**

1. **Native translation, not literal translation.** Write as a native speaker
   would naturally express the idea. Adapt idioms and cultural references.
   Prioritize natural flow over word-for-word fidelity. Match register (formal,
   casual, professional) to the audience. Use locale-specific conventions for
   dates, currency, units, punctuation, quotation marks, number formatting.
2. **Improve the existing locale page, do NOT retranslate from English.** Start
   from the current target-language page. Treat the existing translation as the
   baseline; preserve what works. Only modify sections that are awkward,
   outdated, inaccurate, or missing. Never regenerate the full page from
   English: that destroys prior editorial work. If the English source has new
   content missing in the target page, add ONLY the missing parts and translate
   them natively, keeping the rest untouched. The existing locale page is
   editorial state, not draft state.
3. **Native journalistic register per language.** Target the register of a
   serious daily/business paper in that market, not literal Anglo-translation.
   (FR: Le Monde / Les Echos. ES: El País. ZH: 财经 / 36氪. DE: FAZ /
   Handelsblatt.)

**Workflow per edit (mandatory order):**

1. Open the existing target-language page first. Read it in full.
2. Compare against the English source ONLY to identify gaps or outdated parts.
3. Per section: reads naturally and accurate → leave it. Reads awkward or
   machine-translated → rewrite natively. Missing → translate natively.
4. Preserve existing terminology unless clearly wrong. Consistency beats
   personal preference.
5. Keep page structure intact (headings, anchors, IDs, frontmatter, metadata,
   slugs, ARIA labels, schema markup) unless explicitly asked to change it.
6. Do not change SEO-sensitive elements (title, meta description, H1, slugs)
   without flagging it first.

**Three passes for any new or rewritten section** (`/deep-translate`, as
`src/i18n/TRANSLATING.md` runs it with pass files; the two steps below are
its first two passes, and a third, the native editor's finish, follows):

- *Step 1: Humanized translation.* Translate from English, hit the native
  journalistic register, match register to audience, apply locale conventions
  for dates/currency/units/numbers/punctuation/quotation marks.
- *Step 2: Native rewrite (mandatory, even when Step 1 looks fine).* Treat
  Step 1's output as a draft that is not native enough. Do NOT look back at the
  English source. Work only from the target-language draft. Restructure
  sentences, switch idioms to native equivalents, swap weak verbs for strong
  native ones, drop English-shaped clauses and noun chains, replace nominal
  constructions with verbal ones where the target language prefers verbs, use
  the language's natural rhythm and connectors, vary sentence length the way a
  native journalist would. Use the `humanizer` skill for the AI-writing tells
  to strip (see the note at the end of the em dash rule below).

**Diacritics (never optional):** never ship unaccented copy. FR:
`é è ê à â ç ù û ü ô î ï ÿ`, capitals keep accents. ES: `á é í ó ú ñ ü`,
opening `¿` and `¡` mandatory. DE: `ä ö ü ß`, use `ß` correctly, never
substitute `ss` to dodge the character. PT: `á à â ã é ê í ó ô õ ú ç`.

**Punctuation per locale:** ZH uses full-width punctuation `。， 、：；！？""''（）`,
no half-width Latin punctuation inside Chinese sentences (numbers and Latin
product names stay half-width). FR uses guillemets `« »` with non-breaking
spaces, and a non-breaking space before `: ; ! ?`. ES needs opening `¿` and
`¡`. DE uses `„…"` quotes where typesetting allows.

**No Chinese characters outside Chinese content (permanent).** Han characters
(CJK ideographs) and Chinese full-width punctuation `。， 、：；！？""''（）` may
appear ONLY in `zh-*` locale content. Never let a Han character or full-width
mark leak into English, French, Spanish, German, Portuguese, or any other
non-Chinese page, string, slug, alt text, meta tag, label, or microcopy: this
includes stray characters from copy-paste, machine translation, or fallback
text. Non-Chinese copy uses that language's own script and punctuation only.

**Locale variant defaults:** Chinese → simplified (zh-CN) unless the path
indicates traditional. French → metropolitan. Spanish → neutral peninsular.
German → standard de-DE.

**Brand and product names:** names conventionally kept in English in the target
market stay in their canonical English form. Do not translate them, do not
invent localized versions, do not retitle-case them. "hubStudio" keeps its
canonical casing everywhere.

**Every change reaches every locale (replaces the old single-locale
default).** An English change is translated in the same change: extract, then
translate the new or changed sentences in French and Chinese, as "Every page
ships in French and Chinese" says. There is no English-only edit to offer to
propagate later.

**Slug localisation (permanent).** Every page slug under a non-English locale
must be in that locale's language. No English slugs under `/fr/`, `/de/`, etc.
Form: lowercase, hyphen-separated, no spaces or underscores. Strip diacritics
for URL safety (`entrée` → `entree`, `réalisations` → `realisations`); the page
CONTENT keeps accents, only the slug strips them. DE: `ä→ae ö→oe ü→ue ß→ss`.
ES: `ñ→n`, accents → unaccented vowel. `localizePath` and any hreflang
`<link rel="alternate">` must map between native slugs, never blindly prefix
`/<locale>/` onto the English path. When editing a non-English page already
shipped with an English slug, do NOT silently rename it: flag the mismatch and
propose a redirect from old slug to new.

## No em-dash, ever (permanent)

The em-dash character (Unicode U+2014, the long dash, named here by codepoint
so this rule file stays clean) is banned everywhere in this repo: rendered
page content, headings, meta titles and descriptions, alt text, microcopy,
button and form labels, every locale, plus code comments, JSDoc, CSS comments,
HTML comments, section markers, commit-adjacent docs, and Markdown files. No
exceptions, no "just this once."

When you would reach for an em-dash, do one of these instead:

- a comma, for a parenthetical or appositive aside;
- a colon, when what follows explains or lists;
- a period, splitting into two sentences (often the strongest fix);
- parentheses, for a true aside;
- restructure the sentence so no dash is needed.

This is also an AI-writing tell: stripping it makes copy read as human-authored.
The `humanizer` skill carries the wider set of tells (29 patterns, version
2.5.1, the same text the sibling repos keep as `HUMANIZER.md`). There is no
`HUMANIZER.md` in this repo on purpose: its worked examples quote the banned
character, which this rule does not allow in a Markdown file. Settled
2026-10-02 after two editorial runs found the old file reference pointing
nowhere; use the skill and do not raise the missing file again.

Allowed and untouched: the hyphen-minus `-` (compounds, ranges in code), the
en-dash `–` in numeric ranges (`2024–2026`, `60–80%`), and arrows (`→`). Only
U+2014 is banned. Before committing, grep staged files for U+2014 and confirm
zero matches.

## SEO / redirects

- `trailingSlash: 'never'` so Vercel strips trailing slashes before redirects.
- Use `status: 301` for permanent moves. Never downgrade to 302, never remove a
  301 after recrawl, never chain redirects.
- See `reusable-website-starter.md` §6–7 for the sitemap `serialize` hook,
  llms-full.txt generator, IndexNow submission, and the redirect/migration
  pattern when those become relevant.
