---
brief_id: 74
publish_date: 2026-10-21
week: 02
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 74: Kling 3.0 for product video: prompts, camera moves, lengths

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
| Working H1 | Kling 3.0 for product video: prompts, camera moves, lengths |
| Slug | `/resources/how-to/kling-3-product-video-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/kling-3-product-video-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/kling-3-product-video-guide.md` |
| Research file | `research/kling-3-product-video-guide.md` |
| Hero image | `public/Images/howto-kling-3-product-video-guide.webp`, referenced as `/Images/howto-kling-3-product-video-guide.webp` |
| Primary query | `kling 3.0 prompts` |
| Secondary queries | `kling 3.0 prompt guide`, `kling camera movement prompts`, `kling 3.0 vs kling 2.6`, `kling 3.0 video length`, `AI product video prompt` |
| SERP verdict | RESELLER-WRITTEN. The ranking guides come from API resellers and video apps, built around ready-to-copy prompt lists for people and cinematic scenes; they rarely link the maker's own documentation, and none deals with product video, where the object has to stay the same object for the whole clip. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Kling 3.0 from the maker's own documentation, applied to product video: how to write the shot so the product stays consistent, which camera moves hold up, and how to pick a length from 3 to 15 seconds. Honest about the boundary: in the hubStudio app the Kling engines take a prompt only, so when the clip must show your exact product from a photo, the guide says which start-frame engines to switch to.

## The research gate, before any drafting

No body copy until `research/kling-3-product-video-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `kling 3.0 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/kling-3-product-video-guide/` with a date. For a China platform, the
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

- Kling 3.0 capabilities and limits as the maker states them: Kling AI's own site, user guide and release notes, dated
- In-app lengths, modes, frame sizes and sound: create-a-video.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What Kling 3.0 is and what changed from 2.6 and 2.5 Turbo, from the maker's own pages only
- A prompt structure for product shots: the product described precisely (material, color, label, scale), the surface, one light source, one camera move, the pace
- Camera move vocabulary the maker documents (push in, pull out, pan, tilt, orbit, tracking) with what each does to a product and which to avoid on reflective or labeled products
- Length choice: the app offers 3 to 15 seconds on Kling 3.0, and 5 or 10 seconds on Kling 2.6 and 2.5 Turbo; what each length suits
- Settings in the hubStudio video studio: Mode Standard or Pro (sharper), frame size 720p, 1080p or 4K on Kling 3.0 (frame size does not change the price), shape, optional generated sound; on Kling 2.6 sound comes with Pro only
- The boundary: Kling engines in the app are prompt only; for a clip that opens on your product photo, use a start-frame engine such as Veo 3.1 Fast, Seedance 2.0 or Wan 3.0
- Improve with AI rewrites the prompt for this engine, length and sound choice; Catalog skills Video camera movement vocabulary and Video shot pacing and duration shape the rewrite
- Price per second shown before the render; a render is charged only when it succeeds; every clip saved in History with prompt and engine
- Three worked product prompts (a bottle, a shoe, a watch) as plain text blocks, each with what to expect

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source other than the maker's own documentation for engine behavior
- Name a reseller, another app or any competitor
- Claim image-to-video or reference input for Kling inside hubStudio
- Print a price per second or any hubStudio amount
- Name an engine that is not offered in the app
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Engine table: Kling 3.0, 2.6, 2.5 Turbo against length, mode, frame size, sound (from the help center)
- Camera move table: move, prompt wording, what it does to a product, risk
- Three worked prompts as text blocks
- Existing capture: create-a-video-studio
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-kling-3-product-video-guide.webp`.
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

- Engines in the hubStudio app: `/app/engines`
- The all-in cost of AI video: `/resources/insights/all-in-cost-of-ai-video`
- Vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- Short video service: `/services/design/short-video`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Kling 3.0 Prompts for Product Video (35 chars) |
| Meta description | 152 chars | Kling 3.0 prompts that keep a product consistent: shot structure, camera moves that hold up, lengths from 3 to 15 seconds, and when to switch engines. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a good Kling 3.0 prompt?
2. How long can a Kling 3.0 video be?
3. What camera movements work in Kling?
4. What is the difference between Kling 3.0 and Kling 2.6?
5. Can Kling make a video from my product photo?
6. Does Kling 3.0 generate sound?

## Notes

Engine guide: maker's own docs only. Engines named only from the in-app list in hubstudio-positioning.md. Kling in the app is prompt only (create-a-video.md).

## Definition of done

- [ ] `research/kling-3-product-video-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/kling-3-product-video-guide.md` with `template: howto`
