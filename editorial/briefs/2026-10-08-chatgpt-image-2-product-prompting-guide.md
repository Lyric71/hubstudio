---
brief_id: 60
publish_date: 2026-10-08
week: 00
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 60: ChatGPT Image 2 prompts for product images: a working guide

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
| Working H1 | ChatGPT Image 2 prompts for product images: a working guide |
| Slug | `/resources/how-to/chatgpt-image-2-product-prompting-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/chatgpt-image-2-product-prompting-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/chatgpt-image-2-product-prompting-guide.md` |
| Research file | `research/chatgpt-image-2-product-prompting-guide.md` |
| Hero image | `public/Images/howto-chatgpt-image-2-product-prompting-guide.webp`, referenced as `/Images/howto-chatgpt-image-2-product-prompting-guide.webp` |
| Primary query | `chatgpt image 2 prompts` |
| Secondary queries | `gpt-image-2 prompt guide`, `chatgpt image product photography prompts`, `gpt image 2 editing` |
| SERP verdict | The SERP is prompt libraries and tool-reseller blogs from April to October 2026: long lists of prompts, specs restated secondhand and often wrong (resolution "up to 2K", "up to 10 reference images", masks described as black and white), none says that OpenAI labels transparency on gpt-image-2 a preview and files the model under earlier models, none logs a test run, and none carries a QA list for a product image. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

The engine's documented capabilities and limits from OpenAI's own pages only (the image generation guide, the gpt-image-2 model page, the API reference and OpenAI's prompting guide): sizes, quality levels, editing with reference images and masks, transparent backgrounds, text rendering. Then a product-shot prompt method with real examples, each behavior claim backed by a run logged in the research file (six runs, 8 October 2026, scratch outputs only). In hubStudio the engine is ChatGPT Image 2 in the Image studio; Improve with AI rewrites the prompt for the chosen engine.

## The research gate, before any drafting

No body copy until `research/chatgpt-image-2-product-prompting-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `chatgpt image 2 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/chatgpt-image-2-product-prompting-guide/` with a date. For a China platform, the
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

- gpt-image-2 sizes: edges multiples of 16, max edge 3840 px, ratio up to 3:1, 655,360 to 8,294,400 total pixels (OpenAI image generation guide, read 2026-10-08)
- Above 2560 by 1440 is experimental (OpenAI prompting guide and image generation guide, read 2026-10-08)
- Quality low, medium, high, auto for gpt-image-2; xhigh and max on the 2.5 models only (guide and API reference, read 2026-10-08)
- Up to 16 input images on the edits endpoint; n between 1 and 10; prompt up to 32,000 characters (API reference, read 2026-10-08)
- Transparent background on gpt-image-2 is preview (API reference, prompting guide); the API returned "Transparent background is not supported for this model." on 2026-10-08
- Masking is prompt-based guidance and may not follow the exact shape (image generation guide)
- Four documented limitations: latency up to 2 minutes, text placement, consistency, composition control (image generation guide)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A spec table: capability, value, source (OpenAI documentation, and the hubStudio help center for the app column)
- A prompt formula
- At least three prompt example blocks for product work: packshot, lifestyle, text on pack
- A when-to-choose-another-engine section naming only engines offered in the app, without disparaging
- A QA list
- The logged test runs: what we asked, what came back

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Do not claim transparent backgrounds work on ChatGPT Image 2: OpenAI labels them preview and the API refused the request on 8 October 2026
- Do not say a mask leaves the rest of the frame pixel-identical: OpenAI calls masking prompt-based guidance, and the logged run moved pixels outside the mask
- Do not quote leaderboard ranks: the ledger row has no second check
- Do not print any price, OpenAI token rates included, and no hubStudio amount
- Do not name a reseller, a prompt library or any other company; engine makers offered in the app are fine
- Do not describe Skills catalog contents beyond the help center

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Hero image: public/Images/howto-chatgpt-image-2-product-prompting-guide.webp
- Existing localized app captures: imageStudio, explore (src/data/app-shots.ts)
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-chatgpt-image-2-product-prompting-guide.webp`.
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

- the engines page: `/app/engines`
- the app's create page: `/app/create`
- our Nano Banana prompting guide: `/resources/how-to/nano-banana-prompting-guide`
- the 2026 model roster: `/resources/insights/the-2026-model-roster`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | ChatGPT Image 2 Prompts for Product Images (42 chars) |
| Meta description | 152 chars | OpenAI's documented specs for ChatGPT Image 2, a prompt formula for packshots, lifestyle shots and text on pack, six logged test runs and a QA list. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can ChatGPT Image 2 make a transparent background?
2. How many reference images can ChatGPT Image 2 take?
3. What is the maximum resolution of ChatGPT Image 2?
4. Can ChatGPT Image 2 put readable text on a product label?
5. Does a mask keep the rest of the image unchanged?
6. Should I use ChatGPT Image 2 or ChatGPT Image 2.5?
7. Do ChatGPT Image 2 images carry AI metadata?

## Notes

Working H1 from the plan ("ChatGPT Image 2 for product images: a prompting guide") rewritten so it carries the primary query.

## Definition of done

- [ ] `research/chatgpt-image-2-product-prompting-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/chatgpt-image-2-product-prompting-guide.md` with `template: howto`
