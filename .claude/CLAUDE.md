# hubStudio

Astro static site, deployed to Vercel. Canonical host: https://www.hubstudio.ai
(the apex hubstudio.ai 301-redirects to www).

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
`2`, `3`) inside a card or any repeated content block — card grids, step
lists, feature rows, "how it works" sequences, accordion rows. The heading and
the visual order carry the sequence; a numeral label never appears. This holds
regardless of whether the block uses the `.card` class, an `<article>`, an
`<li>`, or a plain `<div>` — if it is a repeated titled block, no number.
Browser-native `<ol>` numbering counts too: suppress it in these blocks. When
building or editing any such component, ship it numberless from the start; when
reviewing existing pages, strip any numeral you find. No exceptions.

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
  - `image` — optimized thumbnail in `public/Images/debeers/` (≤2000px), grid only.
  - `full` — full-resolution file for click-to-enlarge (lighter webp is fine
    here; it is only a preview).
  - `original` — the untouched model output before any optimization (the source
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

## Image style guide (MANDATORY)

`hubstudio-image-style-guide.md` (repo root) is the binding visual standard for
every image AND every asset that ships on the site. The rule fires whenever you
generate, source, select, crop, retouch, design, or replace any visual: photos
and campaign images (heroes, case studies, process shots, team portraits,
lifestyle, concept art) AND every other asset — SVG icons, illustrations, logos
and marks, diagrams, backgrounds, textures, dividers, favicons, animation.

Non-negotiables from that guide:

- **Creative is the product, so every asset carries a creative angle.** Nothing
  visual is allowed to be merely functional or generic. Each asset — SVGs
  included — expresses a deliberate idea, is authored by one hand for
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

## i18n architecture

English at the root, every other locale under a prefix, with **native-language
slugs per locale** (not the English slug with a prefix slapped on).

- `src/i18n/ui.ts`: shared chrome strings (header, footer, meta) per locale.
  English is the source of truth for key names; every locale defines the same
  keys. Page-level content stays inside each locale's `.astro` file.
- `src/i18n/utils.ts`: `getLocaleFromUrl`, `stripLocale`, `localizePath`,
  `useTranslations`. Portable: keep as-is across projects.
- `src/i18n/page-slugs.ts`: per-locale EN<->native slug maps. Add an entry
  here whenever a page ships in a new locale.
- `src/pages/index.astro` etc.: EN pages at root.
- `src/pages/fr/<native-slug>.astro`: FR pages with native slugs.

`localizePath(path, locale)` round-trips a URL in either direction using the
slug maps; unknown slugs fall back to the locale home so the language switcher
never 404s.

## Translation rules (MANDATORY)

The single source of truth for any non-English work. Output must read like a
native journalist in the target language wrote it originally, not like a
translated English page.

**When the rule fires:** any time you edit, draft, translate, or fix content in
`src/pages/<locale>/`, any non-English string in `src/i18n/`, or any
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

**Two-step rewrite for any new or rewritten section:**

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
  native journalist would. See `HUMANIZER.md` for the AI-writing tells to strip.

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

**Single-locale default: no auto-translate.** When the user requests a content
change, edit ONLY the file(s) they referenced. Do not propagate the same change
to other locales until the user explicitly says so (e.g. "translate this",
"do all locales", "propagate"). When editing the English version, end with a
one-line offer to propagate. Shared infrastructure changes (CSS, shared
components, route helpers, layout files, `astro.config.mjs`) are global by
nature and exempt from this.

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
See `HUMANIZER.md` for the wider set of tells.

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
