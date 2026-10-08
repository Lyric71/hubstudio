---
brief_id: 126
publish_date: 2026-12-16
week: 10
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 126: Grok Imagine for images and short video

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
| Working H1 | Grok Imagine for images and short video |
| Slug | `/resources/how-to/grok-imagine-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/grok-imagine-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/grok-imagine-guide.md` |
| Research file | `research/grok-imagine-guide.md` |
| Hero image | `public/Images/howto-grok-imagine-guide.webp`, referenced as `/Images/howto-grok-imagine-guide.webp` |
| Primary query | `Grok Imagine prompts` |
| Secondary queries | `grok imagine video prompts`, `grok imagine image to video`, `grok imagine video length`, `grok imagine aspect ratios`, `grok imagine video with sound` |
| SERP verdict | Consumer tips and social threads rank, aimed at the chatbot's playful modes, with xAI's own API documentation lower down; none applies the maker's documentation to brand work (product scenes, short social clips with sound) or says what the image and the video engines cannot do. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Grok Imagine is the quick sketchbook of the roster: fast image renders from a prompt alone, and short clips with sound at any whole-second length from 1 to 15 seconds, with a cheap 480p draft. Use it to explore and for short social video; know its limits in the app (no image editing or upscaling, no 5:4 or 4:5 image, no last frame), and hand finished work to an engine that does those. From xAI's own documentation and the app's own limits.

## The research gate, before any drafting

No body copy until `research/grok-imagine-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Grok Imagine prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/grok-imagine-guide/` with a date. For a China platform, the
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

- xAI docs: the image generation and video generation pages, and the reference-to-video page logged for brief 58, dated
- App facts: create-an-image.md and create-a-video.md, checked against the engines page

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- xAI's own documentation from docs.x.ai for image and video generation: what each model is for, its inputs, its prompting advice
- A capability table with an app column from the help center: Grok Imagine Image 2.0 (xAI) does text to image only, no editing and no upscaling, Low or Standard quality each at 1K or 2K, JPG; shapes square, 4:3, 3:2, 16:9, 21:9, 3:4, 2:3 and 9:16, with 5:4 and 4:5 refused by the engine and so not offered
- Grok Imagine 1.5 (xAI) in the app: 1 to 15 seconds in whole seconds, 480p draft, 720p or 1080p, shapes 16:9, 9:16, 1:1, 4:3, 3:4, 3:2 and 2:3, optional generated sound, fed a start image (no last frame) or references of up to seven pictures and one sound file
- The maker and the app read apart: xAI's API takes reference pictures for the image model while the app runs it as text to image only (ledger, 2026-10-08); xAI's reference-to-video page gave 720p as the ceiling for reference renders (ledger, brief 58), so re-read it and print the maker's value and the app's offer each with its own source
- Prompt examples in prompt blocks: two image prompts (a product hero, a lifestyle scene) and three video prompts (text to video with sound, a start image animated, references for a recurring product)
- Drafting cheap: 480p and short durations to test motion and timing, then the final at 720p or 1080p
- When another engine in the app fits better: an edit or an upscale (Nano Banana 2 and Pro, Seedream, the ChatGPT Image engines, FLUX.1 Kontext), a 4:5 feed image, a clip that must end on a set frame (engines that take a last frame), a clip longer than 15 seconds
- A QA list for both: hands and faces, the product's shape and label, motion artifacts, sound that fits the picture
- Improve with AI rewrites the prompt for the engine picked; the price is shown before the run; a failed run is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but xAI for a capability
- Describe the consumer chatbot's modes or content settings
- Name resellers or tool vendors
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Capability table: job, the image engine, the video engine, xAI's documentation, the app
- Draft-to-final table: settings for a draft, settings for a final
- Five prompt blocks
- Existing localized captures create-an-image-studio.webp and create-a-video-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-grok-imagine-guide.webp`.
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

- engines page: `/app/engines`
- consistent character in AI images and video: `/resources/how-to/consistent-character-ai-images-video`
- product video with sound: `/resources/how-to/product-video-with-sound`
- animate a product photo: `/resources/how-to/animate-product-photo`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Grok Imagine Prompts for Images and Short Video (47 chars) |
| Meta description | 152 chars | How to prompt Grok Imagine for brand work: fast image renders, 1 to 15 second clips with sound, cheap drafts, and what to hand to another engine. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a good Grok Imagine prompt?
2. How long can a Grok Imagine video be?
3. Can Grok Imagine edit an existing image?
4. Does Grok Imagine make video with sound?
5. Can Grok Imagine animate my product photo?
6. What aspect ratios does Grok Imagine support?

## Notes

xAI's own docs only. Covers both engines in the app: Grok Imagine Image 2.0 (xAI) and Grok Imagine 1.5 (xAI). App facts from the help center, which mirrors the app's image and video catalogs.

## Definition of done

- [ ] `research/grok-imagine-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/grok-imagine-guide.md` with `template: howto`
