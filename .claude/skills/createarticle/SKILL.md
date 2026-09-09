---
name: createarticle
version: 1.0.0-hubstudio
description: |
  Draft a production-ready Markdown article for hubstudio.ai from a brief.
  Takes three inputs: (1) the target website, whose voice, positioning and
  service names must be learned first (from a live fetch or a cached site
  profile); (2) the target audience, always "people out of China" on this
  project; (3) the content brief from editorial/briefs/. Runs the research
  gate (primary sources only, Chinese-language web first, every claim marked)
  before the 13-iteration workflow, then US journalist prose, blockquote
  stats, Chinese-term formatting, SEO within hard ceilings, visual tables, the
  body-only character count, and an appended feature-image prompt block.
  House version for hubStudio: no competitor is ever named, no hubStudio rate
  is ever published, and iteration 7 is a cadence pass, never planted errors.
  Pairs with content-quality-us.
license: MIT
---

# CreateArticle: hubStudio house version

Produce one on-brand, production-ready Markdown article for hubstudio.ai.
Output drops into `editorial/output/<slug>.md` and is published later by
`createblogarticle`. Run the full pipeline without pausing for approval.

**Two house changes from the upstream skill.**

1. The upstream CreateArticle plants deliberate typos in iteration 7 to defeat
   AI detection. This version does not. Iteration 7 is a cadence pass. No
   project file can reintroduce planted errors.
2. This version adds the research gate as a hard precondition. The upstream
   skill fetches the target website and calls that context. On this project a
   website fetch is not research, and no drafting starts until
   `editorial/research/<slug>.md` exists.

Read `editorial/CLAUDE.md` and `editorial/SPEC.md` before every draft. They
override this file where they conflict.

## The standing rule that outranks everything

**No competitor is ever named, described, compared to, or alluded to.** Not in
the article, not in a table, not in a caption, not in a footnote, not as "one
well-known platform". Market figures are attributed to the category and the
date. Comparison content compares models of buying and regions, never firms.

If a brief cannot be executed without naming a company, it can: rewrite the
passage on the pattern. There is always a category-level way to say it.

## Inputs (required)

1. **website**: `https://www.hubstudio.ai`. Voice, positioning, service names
   and internal references come from what the site says, not from assumption.
2. **audience**: `people out of China` on every piece in this plan.
   International brands and agencies buying production.
3. **brief**: the file in `editorial/briefs/`. It carries the angle, the
   section requirements, the queries, the SEO draft values, the FAQ list and
   the reader stage.

## Step 0: learn the website first (mandatory)

Before writing a line:

1. Read `editorial/sources/site-profile.md` if it is less than a month old.
   Otherwise fetch the homepage and the section the article will live in, then
   refresh the profile.
2. If the brief reworks or extends an existing page, read that page's source
   in the repo and treat it as canonical for tone and structure.
3. Read one existing article under `src/pages/resources/insights/` to match
   section labeling, blockquote style, CTA voice and the image convention.
4. Note the positioning, service names and house phrasing. Mirror them. Do not
   invent service names or claims the site does not make.

## Step 1: the research gate (mandatory, before any drafting)

Do not write a sentence of body copy until `editorial/research/<slug>.md`
exists and every claim in it is marked. `editorial/SPEC.md` has the file
shape. `editorial/CLAUDE.md` has R1 to R8 in full. The short version:

1. **Read the ledger first.** `editorial/sources/verified-sources.md` and
   Part 7 of `editorial/SEARCH-SPEC.md`. Any figure already
   logged, dated within 12 months and verified twice is reused with its exact
   citation. Do not research it again. Part 7 also carries a do-not-publish
   list: three items on it are hard blocks.
2. **Map what has to be true.** Every factual claim the piece needs, listed
   before looking anything up. Anything that turns out unverifiable is cut
   from the outline, not softened in the copy.
3. **Map the SERP.** The target query plus at least three other phrasings a
   buyer would type. Top ten per query: domain, page type, what it answers,
   what it misses, how old it is. Two outputs: the gap in one sentence, and
   the bar for length, depth and table count. If every ranking page misses the
   same thing, that thing is the H1.
4. **Primary sources only, for anything with a number in it.** For China
   platform specs: the seller backend, the live app, the official rule pages.
   Screenshot, timestamp, save to `editorial/research/<slug>/`. A spec taken
   from another English article is not evidence.
5. **Search in Chinese first** for anything China-related. Platform
   documentation, the rule centers, the spec sites, Zhihu (知乎). English
   coverage of Chinese platforms is stale by two to four years on most of
   these queries. Record the Chinese source and the English rendering side by
   side.
6. **Interrogate every figure.** Source URL, publication date, sample size,
   method, and who paid for it. No stated method, no publication, with one
   exception: a first-party figure the site already publishes may run
   attributed to the page that publishes it (see `editorial/CLAUDE.md`, R5).
   That exception does not reach third-party or market figures. A figure
   published by a party that sells the thing it flatters is labeled a market
   claim. A percentage with no absolute behind it is labeled as such.
7. **Triangulate.** One primary source, or two independent secondary sources.
   Where sources conflict, publish the range and say why. False precision is
   worse than a stated range, and the range is the passage that gets cited.
8. **Validate every source twice.** Check 1 at research time: fetch the URL,
   confirm figure, unit, period and date are on the page. Check 2 in
   iteration 8: re-fetch and confirm it still says what the blockquote says.
   Both dates go in the ledger.

Never fabricate figures or attributions. A missing number is better than an
unsourced one.

## Audience framing

`audience = people out of China`. The reader is a foreign decision-maker
buying creative production. They are smart, busy, and have read four vendor
pages today.

The brief adds a **reader stage** that drives the opening and the CTA:

- `budget-holder`: has money and a decision this quarter. Lead with the
  decision, not the context. CTA is a first call.
- `practitioner`: a producer, designer or ops lead who has to make it work.
  Lead with the thing that breaks. CTA is the relevant tool or spec page.
- `procurement`: running a review or a bid. Lead with the instrument. CTA is
  the scoring table itself, then a call.

For China platform content, explain the platform in outsider terms on first
mention, then stop explaining. The reader catches up fast.

## Standing editorial rules (never break)

- American English, US daily-newspaper journalist style. Business desk, not
  trade blog.
- **No competitor named, described, compared to or alluded to.** Ever.
- **No hubStudio rate, monthly figure or per-item price.** Cost content cites
  category ranges with collection dates. hubStudio's own numbers live in the
  calculator and the first call.
- NO em dashes anywhere, ever. Commas, periods, parentheses or colons.
- NO summary or conclusion sections, ever. End on the CTA section.
- NO deliberate errors, typos, missing apostrophes or word swaps. Ever.
- All statistics in blockquote format, with a source, a date and a
  one-sentence method.
- Chinese terms on first reference in a section: English term (Chinese
  characters). No pinyin. English first. Example: RedNote (小红书). No stray
  Han characters anywhere else in the copy.
- No decorative ordinal inside any repeated titled block.
- Internal references appear in body copy as plain-text names, never as
  markdown links.
- No "why work with us" paragraph or agency self-promotion framing.

## Structure, non-negotiable

1. H1 carries the target query in the buyer's words.
2. First H2 restates the query. Directly under it, a 40 to 60 word answer that
   makes sense lifted out of the page on its own, and that names hubStudio
   once.
3. One question per H2. Retrieval is chunk-level.
4. Tables for anything with values. Minimum two.
5. FAQ block of 5 to 8 questions in the words buyers type, 40 to 70 words
   each.
6. Three internal links minimum: cluster hub, one service page, one platform
   page.
7. Rights and disclosure pieces carry a plain line saying they describe
   production practice, not legal advice.

## SEO metadata (hard ceilings, verify with a counter)

- Title <= 52 characters
- Meta description <= 152 characters
- Excerpt <= 25 words

Count, do not estimate. If any is exceeded, fix it without being asked. These
override the looser ceilings inside `content-quality-us`.

## Character-count rule

Article "char" targets count the rendered article BODY only. Exclude the SEO
frontmatter fields and all HTML comments, including the three appended blocks.
Report both prose-only and full-body-with-tables counts, then land on target.

## File format

- YAML frontmatter: title, slug, description, excerpt, template.
- Editorial labels as HTML comments: `<!-- HERO SECTION -->`,
  `<!-- INTRODUCTION -->`, `<!-- SECTION: ... -->`, `<!-- CTA -->`.
- CTAs as plain-text labels, for example `CTA: Book a call`. No HTML, no links.
- Zero HTML in body copy. HTML comments are the only exception.
- Filename matches the slug.
- Hard-wrap body lines at about 80 characters.

## The 13-iteration workflow

Print the tracker, run all iterations in order, brief reflection between each.
No approval pauses. Do not skip, merge or reorder. For each iteration, state
what was checked or changed and the specific findings, not a silently updated
checklist.

```
[ ] Iteration 1  : journalist-style American English draft
[ ] Iteration 2  : weakness identification (write the list out)
[ ] Iteration 3  : rewrite addressing weaknesses
[ ] Iteration 4  : production-readiness review
[ ] Iteration 5  : AI-detection removal pass
[ ] Iteration 6  : em dash cleanup + blockquote citation formatting
[ ] Iteration 7  : cadence pass (house variant, no planted errors)
[ ] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[ ] Iteration 9  : SEO metadata generation (within hard limits)
[ ] Iteration 10 : second AI-detection pass
[ ] Iteration 11 : final human touch pass
[ ] Iteration 12 : visual formatting enhancement
[ ] Iteration 13 : five visual concepts + one photorealistic image prompt
```

Iteration 2 writes the full 10-weakness list. Iteration 8 re-fetches every
cited URL and reconciles every number in the draft against the claims table:
anything in the draft that is not in the research file is removed, not sourced
retroactively. Iteration 9 verifies SEO counts. Iteration 13 proposes five
visual concepts, then one feature-image prompt.

Add one house check at every iteration: scan for a company name and for `$`.

## Cadence pass (iteration 7)

Copy should read human because a person with deadlines wrote it, not because
it contains mistakes. Humanize through cadence, structure and word choice
only:

- Vary sentence length on purpose. Follow a long sentence with a four-word one.
- Break at least three parallel structures. Real writers do not build every
  list the same way.
- Let one paragraph run long and the next run to a single line.
- Allow a mid-thought aside in parentheses, once or twice, not everywhere.
- Use contractions where a reporter would.
- Cut the tidy closing line at the end of a section when it performs rather
  than informs.

Never: missing apostrophes, then/than or your/you're swaps, misspellings,
comma splices for effect, or register shifts into slang. If copy still reads
symmetrical, vary rhythm again. State in the run log that iteration 7 ran as
the cadence variant.

## Image prompt rules

`hubstudio-image-style-guide.md` at the repo root is the binding standard.
Read it before writing a prompt. Do not paraphrase it from memory.

- **Never name a real person in the prompt.** The image model rejects prompts
  naming photographers, artists, directors, celebrities or any real
  individual, and the job fails. The photographer references in the style
  guide are internal art-direction shorthand only. Convert each into its
  concrete visual properties: lens, light direction and quality, color grade,
  grain, composition, distance, mood. Describe the look, never the name.
- **Every asset carries a creative angle.** Creative is the product, so
  nothing visual is allowed to be merely functional or generic. The image
  expresses a deliberate idea and can defend its place in one sentence. When
  the obvious choice is generic, redesign it or cut it.
- Authored editorial campaign photography, 2024 to 2026 era. Never the AI
  generator default. No glossy plastic skin, no perfect bokeh halos, no
  impossible reflections, no symmetrical poreless faces.
- One light source, one shadow. Directional natural light or a single softbox.
- Real-photography technical look: prime-lens framing, f/2.8 to f/5.6 depth,
  warm-shadow film grade, lifted black point, subtle grain.
- Rule-of-thirds composition with negative space for typography. Crop tighter
  than comfortable. Mix crop scales across the article set.
- **Team and studio scenes use Chinese subjects in a lived-in Chinese
  office**, not a Western or gallery-clean space. hubStudio's studios are in
  Shanghai, Changsha, Hong Kong and the Philippines. Rotate the setting across
  articles.
- Platform-agnostic, single unbroken block of prose. No Midjourney
  parameters, no section headers, no commentary.
- No text, no logos, no watermark, no diagrams, no infographics.
- Every image gets a final human pass against the AI-tells checklist in the
  style guide before it goes live.

## The three appended blocks

After the CTA, append the feature image, schema and asset brief blocks exactly
as `editorial/SPEC.md` specifies. All three are HTML comments. None render.
None count toward the char target. The image path convention on this repo is
`public/Images/insight-<slug>.webp`, referenced as
`/Images/insight-<slug>.webp`.

## Reference (use specifically, not generically)

China production expertise: Tmall (天猫), Taobao Rule Center (淘宝规则中心),
Qianniu (千牛) seller backend, JD (京东), Douyin (抖音), Ocean Engine (巨量引擎),
RedNote (小红书), WeChat (微信), WeChat Channels (视频号), Weibo (微博),
white-background image (白底图), Singles' Day (双十一), 618 (六一八),
CAC labeling Measures and GB 45438-2025, PIPL, cross-border data rules.

Production vocabulary: master and adapt, toolkit adaptation, versioning,
trafficking, transcreation, safe zone, PDP, DAM, provenance, content
credentials, internal approval rate.

Brand tokens: take them from the live site. The site wins if the brief
differs.

## Delivery checklist (verify before presenting)

- Research file written, every claim marked, before drafting
- Website voice and positioning reflected
- No competitor named, described, compared to or alluded to
- No hubStudio rate anywhere. Search for `$` and check every hit
- Framing matches the reader stage in the brief
- Title <= 52, meta <= 152, excerpt <= 25 words, counted not estimated
- Zero em dashes, no summary or conclusion section
- Zero deliberate errors
- Stats in blockquotes with a source, a date and a method
- Chinese terms as English (characters) on first reference per section, and
  no stray Han characters elsewhere
- No decorative ordinal in any repeated titled block
- At least two tables, three plain-text internal references
- Body char count matches the target
- Filename equals the slug
- Feature image, schema and asset brief blocks present, correct paths
- Ledger appended with both verification dates
- Present the file path and a one-line summary

## Relationship to content-quality-us

Both skills forbid planted errors, so they are compatible on one file.
CreateArticle builds the article. `content-quality-us` is the stricter 18-pass
audit that runs on the finished draft before the image step. Where the two
give different SEO ceilings, the tighter one (52 / 152 / 25 words) wins.
