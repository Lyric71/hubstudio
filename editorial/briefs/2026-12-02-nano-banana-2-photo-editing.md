---
brief_id: 112
publish_date: 2026-12-02
week: 08
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 112: Nano Banana 2 for editing the photos you already have

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
| Working H1 | Nano Banana 2 for editing the photos you already have |
| Slug | `/resources/how-to/nano-banana-2-photo-editing/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/nano-banana-2-photo-editing.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/nano-banana-2-photo-editing.md` |
| Research file | `research/nano-banana-2-photo-editing.md` |
| Hero image | `public/Images/howto-nano-banana-2-photo-editing.webp`, referenced as `/Images/howto-nano-banana-2-photo-editing.webp` |
| Primary query | `Nano Banana 2 photo editing` |
| Secondary queries | `Nano Banana 2 edit image prompt`, `Gemini 3.1 Flash Image editing`, `Nano Banana 2 vs Nano Banana Pro editing`, `edit product photo with Nano Banana 2`, `Nano Banana 2 multiple reference images` |
| SERP verdict | Google's launch post and developer docs rank beside prompt-list pages and reseller playgrounds; they show generation from scratch, while the editing case (a real product or team photo that has to stay the same thing after the edit) gets one paragraph and no check list. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Most brand pictures already exist. Nano Banana 2 is the fast, dependable engine for changing one without remaking it: a background, a season, a prop, a crop to a new shape, a second picture merged in. The method is to name the change, protect the rest, feed the right sources (up to four) and check what an edit tends to drift: label text, logo, color, hands. Distinct from the two Nano Banana pages already live: one prompts from scratch, the other works in Gemini on Nano Banana Pro; this one edits existing photos inside a production flow and says when to step up.

## The research gate, before any drafting

No body copy until `research/nano-banana-2-photo-editing.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Nano Banana 2 photo editing` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/nano-banana-2-photo-editing/` with a date. For a China platform, the
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

- Engine facts: Google's Nano Banana 2 launch post (26 February 2026, logged in the ledger as a maker claim) and the Gemini API image docs, read on the research date
- Edit leaderboard position only as the ledger logs it: two public blind-vote boards, date and vote count stated, overlapping intervals said plainly, no single best verdict
- App facts: create-an-image.md and skills.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A capability table from Google only (the 26 February 2026 launch post and the Gemini API image generation and editing docs): edit by instruction, several reference images, in-image text translation and localization, 512px to 4K, SynthID with C2PA; each row with its source
- What the maker states as limits, quoted from Google's own pages
- In the app, per the help center and the engine list: Nano Banana 2 does text to image, edit an image and upscale and restore; takes up to four source images per edit; renders at 512px (draft), 1K, 2K or 4K; returns PNG; offers the ten shapes from square to vertical 9:16 and ultra-wide 21:9; the result follows the shape of the first source unless Shape is changed
- Source images are resized in the browser to 1,536 pixels on the long side at most before they are sent, which also removes their metadata: start from the best file and keep the original in the Assets Library
- Five edits with prompt blocks: a new background behind a product, a seasonal restyle, a removed prop or passer-by, a second product merged into one scene from two sources, a re-crop to 9:16 with the scene extended
- A drift check after every edit: label and packaging text, logo, product color, proportions, hands and faces; the fix for each
- When to step up: Nano Banana Pro for the most faithful edits and legible type, the FLUX.1 Kontext engines (one source) to change exactly what is named, a mask on the ChatGPT Image engines to lock an area, Seedream for a native 4K upscale
- Improve with AI rewrites the prompt for the chosen engine; the Precise image edits skill in the Catalog; History keeps every run with its prompt and engine
- The price shown before the run; a failed run is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but Google for an engine capability
- Repeat the Nano Banana Pro walkthrough or the prompting frameworks already published: link them
- Claim a mask, inpainting brush or transparent background on Nano Banana 2 in the app
- Name resellers, playgrounds or tool vendors
- Print a price or a ranking verdict
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Capability table, per Google, with a source column
- Drift check table: what to inspect, what goes wrong, the fix
- Engine choice table for edits: Nano Banana 2, Nano Banana Pro, FLUX.1 Kontext, ChatGPT Image with a mask
- Five prompt blocks
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-nano-banana-2-photo-editing.webp`.
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

- Nano Banana prompting guide: `/resources/how-to/nano-banana-prompting-guide`
- Nano Banana Pro photo editing: `/resources/how-to/nano-banana-pro-photo-editing`
- FLUX.1 Kontext editing guide: `/resources/how-to/flux-kontext-editing-guide`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Image studio: `/app/create`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Nano Banana 2 Photo Editing: A Working Guide (44 chars) |
| Meta description | 152 chars | Edit the photos you already have with Nano Banana 2: name the change, protect the rest, feed up to four sources, then check text, logo and color. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can Nano Banana 2 edit an existing photo?
2. How many images can Nano Banana 2 combine in one edit?
3. What is the difference between Nano Banana 2 and Nano Banana Pro for editing?
4. How do I keep my product unchanged when editing with Nano Banana 2?
5. Can Nano Banana 2 change the text on a label?
6. What resolution does Nano Banana 2 output?

## Notes

Google's own pages only for the engine. Distinct from nano-banana-prompting-guide (generation frameworks) and nano-banana-pro-photo-editing (Pro, in Gemini): link both. Help: create-an-image.md.

## Definition of done

- [ ] `research/nano-banana-2-photo-editing.md` written before drafting, every claim marked
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
- [ ] File saved as `output/nano-banana-2-photo-editing.md` with `template: howto`
