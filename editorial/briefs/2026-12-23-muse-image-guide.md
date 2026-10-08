---
brief_id: 133
publish_date: 2026-12-23
week: 11
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 133: Muse Image 1.0 for low-cost drafts from long prompts

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Engine guide (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Muse Image 1.0 for low-cost drafts from long prompts |
| Slug | `/resources/how-to/muse-image-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/muse-image-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/muse-image-guide.md` |
| Research file | `research/muse-image-guide.md` |
| Hero image | `public/Images/howto-muse-image-guide.webp`, referenced as `/Images/howto-muse-image-guide.webp` |
| Primary query | `Muse Image prompts` |
| Secondary queries | `Meta Muse Image`, `Muse Image 1.0 prompt examples`, `Muse Image edit a photo`, `AI image engine for drafts` |
| SERP verdict | THIN. A new engine: Meta's own announcement and documentation, news write-ups and aggregator model pages that list it without guidance; nobody shows how to use it inside a production flow, as the drafting engine whose chosen direction moves to a finishing engine. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Muse Image 1.0 sits at the lowest price level of the app's image engines, reasons about long prompts, and renders around 2 to 3 megapixels whatever the shape. That makes it a drafting engine: write the full brief, explore layouts and scenes at the lowest price level, then take the chosen direction to an engine built for the final file. Meta's own documentation for the prompting, the app's catalog and help center for the limits.

## The research gate, before any drafting

No body copy until `research/muse-image-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Muse Image prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/muse-image-guide/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.
- Engine capabilities come from the maker's own documentation, never from a
  reseller or an aggregator. Limits inside the app come from the help center.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Meta's own announcement and documentation for Muse Image 1.0, dated
- App facts: create-an-image.md (engine table, prompt length, jobs) and the engine card in Explore (explore.md)
- Price level: the image section of the Model benchmarks page, a relative level from $ to $$$$, never a figure

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Meta's own description of Muse Image 1.0 and its prompting guidance, from Meta's own pages only
- In the app, per the catalog and the help center: text to image and edit; one source image per edit; a single quality setting (Standard); ten shapes, square, landscape 5:4, 4:3 and 3:2, widescreen 16:9, ultra-wide 21:9, portrait 4:5, 3:4 and 2:3, vertical 9:16; around 2 to 3 megapixels whatever the shape; PNG; no Upscale & restore job
- The app describes it as the least expensive image engine by a wide margin: say so as a price level read from the image section of the Model benchmarks page, never as a figure
- Long prompts: the prompt box takes up to 4,000 characters; how to structure a long brief (subject, setting, light, layout, room for copy, what must not appear) so the engine's reasoning has something to work with
- Meta describes blending several photos into one scene; in the app an edit takes one source image, so a blend there means one combined source picture, or an engine that takes up to four
- The drafting flow: several runs at once, each in its own tab; pick the direction; Reuse prompt; then move to a finishing engine: Seedream 5.0 Pro for native 4K, a ChatGPT Image engine for text inside the picture, Nano Banana Pro or FLUX.1 Kontext for exact edits, Upscale & restore on an engine that offers it
- Four prompt examples, each with what the draft settled and what the final engine changed: a product scene, a social layout with room for copy, a seasonal background, an edit of one product photo
- The price shown before every run; a failed run is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but Meta for a capability
- Print a price or a per-image figure, alone or as a comparison
- Claim Muse Image upscales or takes several source images in the app
- Call it fast: neither the catalog nor the help center says so
- Name resellers or aggregator sites
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Engine facts table from the help center: jobs, source images, quality, shapes, format
- Draft to final table: what Muse settles, which engine finishes it, why
- Four prompt blocks
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-muse-image-guide.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A capability table sourced from the maker, prompt examples, a QA list. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Seedream 5.0 Pro guide: `/resources/how-to/seedream-5-pro-guide`
- ChatGPT Image 2 product prompting guide: `/resources/how-to/chatgpt-image-2-product-prompting-guide`
- FLUX.1 Kontext editing guide: `/resources/how-to/flux-kontext-editing-guide`
- model benchmarks: `/resources/insights/ai-model-benchmarks`
- one AI engine or several: `/resources/insights/one-ai-engine-or-several`
- engines page: `/app/engines`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Muse Image 1.0 Prompts for Low-Cost Drafts (42 chars) |
| Meta description | 152 chars | How to prompt Meta's Muse Image 1.0 as a drafting engine: long briefs, ten shapes, one-photo edits, and when to move a pick to a finishing engine. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a prompt for Muse Image 1.0?
2. What is Meta's Muse Image good for?
3. Can Muse Image edit a photo?
4. What resolution does Muse Image 1.0 render?
5. Is Muse Image good enough for final product images?
6. Which shapes does Muse Image support?

## Notes

Meta's own pages only. Muse Image 1.0 (Meta) is in the app. The H1 says drafts, not fast drafts: the catalog blurb speaks of price, long prompts and resolution, never of speed. The engine blurb also says the file comes back as WebP while the form and the help center list PNG; the page names PNG only.

## Definition of done

- [ ] `research/muse-image-guide.md` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to `sources/verified-sources.md`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for `$` and check every hit
- [ ] No Han characters in the article: Chinese names romanized (deviation 6)
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center
- [ ] File saved as `output/muse-image-guide.md` with `template: howto`
