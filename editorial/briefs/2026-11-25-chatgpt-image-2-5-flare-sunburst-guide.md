---
brief_id: 105
publish_date: 2026-11-25
week: 07
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 105: ChatGPT Image 2.5 Flare and Sunburst: fast renders and precise edits

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
| Working H1 | ChatGPT Image 2.5 Flare and Sunburst: fast renders and precise edits |
| Slug | `/resources/how-to/chatgpt-image-2-5-flare-sunburst-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/chatgpt-image-2-5-flare-sunburst-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/chatgpt-image-2-5-flare-sunburst-guide.md` |
| Research file | `research/chatgpt-image-2-5-flare-sunburst-guide.md` |
| Hero image | `public/Images/howto-chatgpt-image-2-5-flare-sunburst-guide.webp`, referenced as `/Images/howto-chatgpt-image-2-5-flare-sunburst-guide.webp` |
| Primary query | `ChatGPT Image 2.5 prompts` |
| Secondary queries | `gpt image 2.5 flare vs sunburst`, `gpt-image-2.5 prompting guide`, `gpt image 2.5 transparent background`, `gpt image 2.5 edit with reference images`, `chatgpt image 2.5 vs chatgpt image 2` |
| SERP verdict | Resellers and API aggregators rank with launch-week explainers that restate OpenAI's announcement and their own price tables; none tests the two variants on product work, none says when Flare's speed is enough and when Sunburst's edit precision earns its wait, and none gives a QA list for an edited product image. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Two variants, two jobs. Flare is the everyday renderer: fast, follows a written brief, writes legible type. Sunburst is the editor: give it up to four pictures and it changes what the brief names and keeps the rest. Both cut a subject out on a transparent background, which ChatGPT Image 2 cannot. Taught on product work (a packshot, a transparent cut-out, a label change, a scene swap) with OpenAI's own documentation as the only source for capabilities.

## The research gate, before any drafting

No body copy until `research/chatgpt-image-2-5-flare-sunburst-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `ChatGPT Image 2.5 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/chatgpt-image-2-5-flare-sunburst-guide/` with a date. For a China platform, the
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

- OpenAI: the GPT Image 2.5 model pages, the image generation guide, the API reference and the release notes, dated
- App facts: create-an-image.md (engine table, options, Background, Mask, Images per run) and choosing-a-model.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The two variants as OpenAI names and describes them, from OpenAI's own model pages, image generation guide and release notes, with the release date as OpenAI states it
- A capability table sourced from OpenAI, then a second table of what the app offers per the help center: text to image and edit, up to 4 source images, quality Low, Medium, High, Extra high and Max, resolution 1K, 2K or 4K (up to 3840 px), Panorama 3:1 and Tall 1:3 among the shapes, PNG, JPG or WebP, 1 to 10 images a run, a mask on an edit, Background Auto, Opaque or Transparent
- Transparent background: on the 2.5 engines only, with PNG or WebP; ChatGPT Image 2 cannot cut a subject out
- When to pick which: Flare for drafts, series and text-heavy layouts; Sunburst for edits that must leave the product and the rest of the frame untouched; ChatGPT Image 2 and FLUX.1 Kontext as the alternatives already covered on their own pages
- Five product prompts with the variant for each: a white-background packshot, a transparent cut-out for a layout, a label text change on an existing photo, a scene swap that keeps the product, a series of ten from one run
- Edit discipline: name the change, state what stays, quote the text to write, use the mask for the area that may change, one change per pass
- Source images are resized in the browser to 1,536 pixels on the long side before they are sent: feed a close-up of a label as its own source picture
- Improve with AI rewrites the prompt for the chosen engine; the price of each run is shown before it runs and a failed run is not charged
- A QA list for an edited product image: label text, logo, color, edges of a cut-out, shadow, what changed that should not have

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but OpenAI for a capability, a limit or a release date
- Repeat a latency or quality comparison unless OpenAI publishes it, attributed to OpenAI
- Name resellers, API aggregators or tool vendors
- Print a price, a relative price or any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Flare and Sunburst table, per OpenAI
- App options table from the help center
- Five prompt blocks
- QA list for an edited product image
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-chatgpt-image-2-5-flare-sunburst-guide.webp`.
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

- ChatGPT Image 2 product prompting guide: `/resources/how-to/chatgpt-image-2-product-prompting-guide`
- FLUX.1 Kontext editing guide: `/resources/how-to/flux-kontext-editing-guide`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- engines page: `/app/engines`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | ChatGPT Image 2.5 Flare and Sunburst Prompts (44 chars) |
| Meta description | 152 chars | How to prompt ChatGPT Image 2.5 Flare for fast renders and Sunburst for precise edits: packshots, transparent cut-outs, label changes, scene swaps. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between GPT Image 2.5 Flare and Sunburst?
2. How do I write a prompt for ChatGPT Image 2.5?
3. Can ChatGPT Image 2.5 make a transparent background?
4. How many reference images can GPT Image 2.5 edit at once?
5. Is ChatGPT Image 2.5 better than ChatGPT Image 2 for product photos?
6. What resolution can ChatGPT Image 2.5 render?

## Notes

OpenAI's own docs only. Both variants are in the app (help center engine table). Distinct from brief 60 (ChatGPT Image 2): links it rather than repeating it.

## Definition of done

- [ ] `research/chatgpt-image-2-5-flare-sunburst-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/chatgpt-image-2-5-flare-sunburst-guide.md` with `template: howto`
