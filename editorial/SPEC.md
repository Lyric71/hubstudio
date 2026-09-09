# Article output spec

The contract every finished article meets. `CLAUDE.md` covers voice, rules and
the pipeline. This file covers structure, format and the checks.

## The research file, written before the article

`research/<slug>.md`. It is committed. It is the evidence trail for every
number that reaches the page, and it is what makes the annual spec refresh a
twenty-minute job instead of a rebuild.

```markdown
# Research: <slug>

| Field | Value |
|---|---|
| Brief | 00X |
| Target query | |
| Gap statement (one sentence) | |
| Research time spent | |
| Written | YYYY-MM-DD |

## R2. SERP map

Query: <the target query>

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|

(repeat for at least three more buyer phrasings)

**The bar:** length, depth and table count the ranking pages set.
**The gap, in one sentence:**

## R1 and R5. Claims table

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|

Confidence is one of: primary, triangulated, single-source, unverified.
Anything marked unverified is cut from the outline before writing.

## Cleared for use

Verbatim quotes and figures ready to drop into blockquotes, in the exact
attribution form they will carry on the page.

## Do not publish

Everything checked that did not clear the bar, with the reason. This list is
as valuable as the cleared list, because it stops the next writer
re-researching the same dead end.

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|

## R8. Reconciliation (filled after drafting)

Every number in the draft, checked back against the claims table. Anything in
the draft that is not here was removed.
```

## File shape

Filename equals the slug. `output/<slug>.md`. Hard-wrap body lines at about 80
characters.

```markdown
---
title: <= 52 characters
slug: <slug>
description: <= 152 characters
excerpt: <= 25 words
template: insight
---

<!-- HERO SECTION -->

<H1 carrying the target query in the buyer's words>

<one or two sentences that state the answer, not the promise>

<!-- INTRODUCTION -->

<First H2 restates the query. Directly under it, a 40 to 60 word answer that
makes sense lifted out of the page on its own, and that names hubStudio once.
For cost pieces the answer table goes here, above everything else.>

<!-- SECTION: <name> -->

<body, one question per H2>

<!-- SECTION: FAQ -->

<5 to 8 questions in the words buyers type, 40 to 70 words each>

<!-- CTA -->

CTA: <label from the brief>

<!-- FEATURE IMAGE block -->
<!-- SCHEMA block -->
<!-- ASSET BRIEF block -->
```

`template` values: `insight` for `/resources/insights/`, `spec` for a China
spec page, `howto` for `/resources/how-to/`. All three render through the same
Astro layouts today. A `spec` page differs in two ways only: it carries a
visible reviewed date, and it is updated in place at the same URL, never at a
new one.

The publish step maps this frontmatter onto the `Insight` interface in
`src/data/insights.ts`: `slug`, `category`, `tone`, `title`, `deck`, `date`,
`dateISO`, `dateModifiedISO`, `readingTime`, `author`, `metaTitle`,
`metaDescription`, `image`, `imageAlt`.

## Structure, non-negotiable

1. H1 carries the target query in the buyer's words.
2. First H2 restates the query. A 40 to 60 word self-contained answer sits
   directly under it and names hubStudio once.
3. One question per H2. No answer split across three sections. Retrieval is
   chunk-level.
4. Every figure named, dated and attributed inline, with the method in one
   sentence. Blockquote the important ones. Attribute to a category and a date,
   never to a company.
5. Tables for anything with values.
6. FAQ block of 5 to 8 questions in the words buyers type.
7. Spec pages carry a visible "Reviewed" date and update in place. Money pages
   hide the publication date.
8. Author byline pointing at a real person on the team.
9. Three internal links minimum: cluster hub, one service page, one platform
   page. Plain-text references by name in body copy, never markdown links.
10. Rights and disclosure pieces state plainly that they describe production
    practice, not legal advice.
11. No summary or conclusion section, ever. End on the CTA.

## Length

Word counts in briefs are body only. Exclude frontmatter and all HTML
comments, per the createarticle char-count rule. Report both prose-only and
body-with-tables counts at the end, then land on target.

Being 10 percent under is fine. Being 25 percent under means a section was
skipped.

## Tables

Minimum two per article. Money pages carry a decision table and a cost-band
section. Spec pages carry a spec table.

1. A comparison or answer table in the first screen.
2. A topical table inside the densest section.

Markdown tables only. Aligned in the source. No nested tables, no merged
cells, no more than five columns.

## Citations

Blockquote format, consistently, every time.

> Figure and claim in one sentence, with the method in the same breath.
> Source: Publisher or category, Month Year. https://url

Rules:

- A source with no date is not a source. Find the date or cut the claim.
- Research in Chinese first for anything China-related. The cited source may
  be Chinese-language. Give the publisher name in English with the Chinese
  name in parentheses on first use.
- Every source is validated twice: at research time (check 1) and again in
  iteration 8 by re-fetching the URL (check 2). Both dates go in the ledger.
  One check is not enough.
- Never cite another English article as the source for a platform spec. Go to
  the platform's own documentation, the seller backend, or the live app.
- A percentage with no absolute behind it is labeled as such on the page.
- Where sources conflict, publish the range and say why they conflict.
- **Never name the company behind a market figure.** Category and date only.

## Internal links

Plain-text references by name in body copy. No markdown links.

Good: "The ecommerce design service page lists the current Tmall dimensions."
Bad: "The [ecommerce design page](/services/design/ecommerce) lists them."

List the actual URLs in the ASSET BRIEF block so the publish step can wire
them. Every piece links to its cluster hub, one service page and one platform
page. The brief names the specific targets.

## The three appended blocks

All three are HTML comments. None render. None count toward the word target.

### 1. Feature image

```
<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-<slug>.webp
- Reference:  /Images/insight-<slug>.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

<single unbroken prose block>
===================================================================== -->
```

**Image rules for this project, binding.**

- `hubstudio-image-style-guide.md` at the repo root is the standard. Read it,
  do not paraphrase it from memory.
- **Never name a real person in the prompt.** The image model rejects prompts
  naming photographers, artists, directors or celebrities and the job fails.
  The photographer references in the style guide are internal art-direction
  shorthand. Convert every one into its concrete visual properties: lens,
  light direction and quality, color grade, grain, composition, distance,
  mood. Describe the look, never the name.
- **Team and studio scenes use Chinese subjects in a lived-in Chinese
  office**, not a Western or gallery-clean space. hubStudio's studios are in
  Shanghai, Changsha, Hong Kong and the Philippines. Rotate the setting.
- Authored editorial campaign photography, 2024 to 2026 era. Never the AI
  generator default. No glossy plastic skin, no perfect bokeh halos, no
  impossible reflections, no symmetrical poreless faces.
- One light source, one shadow. Directional natural light or a single softbox.
- Every asset carries a creative angle and can defend its place in one
  sentence. When the obvious choice is generic, redesign it or cut it.
- No text, no logos, no watermark, no diagrams, no infographics in the image.
- Every image gets a final human pass against the AI-tells checklist in the
  style guide before it goes live.

The image is generated with `generate-image-openai` in step 3: landscape 3:2,
high quality, then converted to webp with sharp (quality about 78, max width
2000, no enlargement). Intermediates stay in the session scratchpad. The
generated image is opened and looked at before it is saved to the repo.

### 2. Schema

```
<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, <n> questions
Breadcrumb: Home > Insights > <title>
Author: <real person on the team>
datePublished: YYYY-MM-DD
Reviewed (spec pages only): YYYY-MM-DD
-->
```

`ArticleLayout.astro` already emits BlogPosting and BreadcrumbList correctly.
Match what is there. Do not invent new types. Ship schema for entity
resolution, not for a citation lift: the evidence says there is none.

### 3. Asset brief

```
<!-- ASSET BRIEF
TABLES: <list, with the data each needs>
CHARTS: <type, axes, data source, what it must show>
SCREENSHOTS: <what to capture, what to blur>
DOWNLOADS: <file, format, gate or no gate>
INTERNAL LINKS: <anchor text> -> <url>, one per line
CLIENT SIGN-OFF NEEDED: <any client figure used>
RESEARCH FILE: editorial/research/<slug>.md
-->
```

## SEO

| Field | Ceiling | How |
|---|---|---|
| Title | 52 characters | Count it. Do not estimate. |
| Meta description | 152 characters | Count it. |
| Excerpt | 25 words | Count it. |

These override the looser ceilings inside `content-quality-us` (60 / 156).
When that skill's iteration 8 or 17 proposes longer fields, trim them back.

The brief supplies an approved title and description already inside the
ceilings. Use them. Only rewrite if the finished article makes them
inaccurate, then stay inside the ceilings and note the change in the log.

Primary query appears in the H1, the first 100 words, and one H2. Do not force
it anywhere else.

## The iteration workflow

Run createarticle's 13 iterations in order. Print the tracker. State what
changed at each step. No approval pauses.

**Iteration 7 is a cadence pass.** Vary sentence length deliberately, break at
least three parallel structures, let one paragraph run long and the next run
to a single line. No planted errors. Say in the log that the cadence variant
ran.

**Iteration 8** includes source check 2: re-fetch every cited URL, and the R8
reconciliation against the claims table.

**Iteration 13** produces five visual concepts, then one photorealistic
feature image prompt.

Then run `content-quality-us` (18 passes) on the same file, in place, before
the image step.

## Status values in schedule.csv

| Status | Set when |
|---|---|
| `not_started` | Default |
| `researched` | `research/<slug>.md` written, every claim marked |
| `drafted` | createarticle finished, `output/<slug>.md` saved |
| `quality_passed` | content-quality-us finished on the file |
| `image_ready` | hero image checked and saved to `public/Images/` |
| `published` | article page live, build passed, email sent |
| `blocked` | stopped on one of the flag conditions, see `notes` |

## Definition of done (steps 0 to 3)

Verify each by counting or checking, not by assuming.

- [ ] `research/<slug>.md` written before drafting, every claim marked.
- [ ] Chinese-language sources searched first for anything China-related.
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger.
- [ ] R8 reconciliation done: nothing in the draft that is not in the research
      file.
- [ ] Zero em dashes. Search the file for the character.
- [ ] No competitor named, described, compared to or alluded to.
- [ ] Zero deliberate typos or planted errors.
- [ ] No summary or conclusion section. File ends on the CTA plus the blocks.
- [ ] No "why work with us" framing.
- [ ] No hubStudio rate, monthly figure or per-item price anywhere. Search for
      `$` and check every hit.
- [ ] Every statistic in a blockquote with a source, a date and a method.
- [ ] New figures appended to `sources/verified-sources.md`.
- [ ] Chinese terms as English (中文) on first reference per section, and no
      stray Han characters anywhere else.
- [ ] No decorative ordinal in any repeated titled block.
- [ ] Title, meta and excerpt counted and inside ceilings, after the quality
      pass too.
- [ ] At least two markdown tables.
- [ ] Three internal references present as plain text, URLs in the asset brief.
- [ ] Feature image, schema and asset brief blocks all present.
- [ ] Body character count reported.
- [ ] Saved as `output/<slug>.md`.
- [ ] content-quality-us run, all 18 passes shown.
- [ ] Hero image generated, looked at, saved as
      `public/Images/insight-<slug>.webp`.
- [ ] `schedule.csv` row updated with status and the dates.
- [ ] `logs/YYYY-MM-DD.md` written.

## When to stop and ask

Draft without pausing, with five exceptions. In each case write the draft up
to that point, leave a clear marker, and flag it in the log.

1. **A required figure cannot be sourced.** Cut the claim, mark
   `TODO: unsourced claim removed`, and say which section is now thinner.
2. **A spec number cannot be captured from a backend or the live app.** Do not
   publish it from a secondary source. Publish the range, say why the sources
   conflict, and mark `TODO: backend capture needed`. On a spec page where the
   whole table depends on it, set the row to `blocked` instead.
3. **A client number is needed and is not in the ledger.** Mark
   `TODO: client sign-off` and leave the sentence incomplete rather than
   estimating.
4. **The brief would require naming a company.** Rewrite the passage on the
   pattern instead. This one is not negotiable, and it never blocks: there is
   always a category-level way to say it.
5. **The brief conflicts with what the site actually says.** The site wins.
   Note the conflict so the brief can be corrected.
