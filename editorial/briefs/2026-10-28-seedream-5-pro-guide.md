---
brief_id: 81
publish_date: 2026-10-28
week: 03
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 81: Seedream 5.0 Pro for product and campaign images

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
| Working H1 | Seedream 5.0 Pro for product and campaign images |
| Slug | `/resources/how-to/seedream-5-pro-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/seedream-5-pro-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/seedream-5-pro-guide.md` |
| Research file | `research/seedream-5-pro-guide.md` |
| Hero image | `public/Images/howto-seedream-5-pro-guide.webp`, referenced as `/Images/howto-seedream-5-pro-guide.webp` |
| Primary query | `seedream 5.0 prompts` |
| Secondary queries | `seedream 5.0 pro prompt guide`, `seedream 4.5 vs 5.0`, `seedream image editing multiple reference images`, `seedream 4K upscale` |
| SERP verdict | RESELLER GUIDES. API resellers and video apps rank with prompt libraries, mostly for the Lite variant and art prompts; they rarely cite ByteDance's own Seed or Volcano Engine documentation, and none covers product work: multi-image edits that keep a product, native 4K, or the file-format limits that matter for packshots. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Seedream 5.0 Pro from ByteDance's own documentation, applied to product and campaign images: how to prompt it, how to use up to four source pictures to keep a product while changing everything around it, and when its native 4K and upscale make it the right pick. Honest about the limits that matter in production, such as JPG-only output in the app, so no transparent background.

## The research gate, before any drafting

No body copy until `research/seedream-5-pro-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `seedream 5.0 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/seedream-5-pro-guide/` with a date. For a China platform, the
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

- Seedream 5.0 Pro capabilities, resolutions and input limits as ByteDance states them: the Seed team's own pages and Volcano Engine documentation, dated
- In-app jobs, source-picture count, resolutions and formats: create-an-image.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What Seedream 5.0 Pro is and what changed from 4.5, from ByteDance's own pages only
- A prompt structure for product and campaign images (subject, setting, light, camera, finish) and how the maker says to write text inside the image
- Edit an image with up to four source pictures: the product plus a scene, a style or a second product; what to name as fixed
- Upscale and restore: Seedream re-renders up to 4K and is the pick for a 4K upscale
- Settings in the hubStudio Image studio: 2K or 4K, JPG output; for a transparent background use a ChatGPT Image engine with PNG or WebP instead
- Seedream 4.5 versus 5.0 Pro: when the older engine is enough
- Improve with AI rewrites the prompt for the chosen engine; Catalog skills (E-commerce packshot, Lifestyle product scene, Legible text inside an image) shape it
- The price shown before every run; a failed run is never charged; every render in History with prompt and engine
- Three worked prompts (a packshot, a lifestyle scene from a product photo, a campaign key visual with a headline) as text blocks

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source other than ByteDance's own documentation for engine behavior
- Name a reseller, another app or any competitor
- Claim a transparent PNG from Seedream in hubStudio
- Print any hubStudio amount
- Name an engine that is not offered in the app
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Engine table: Seedream 4.5 and 5.0 Pro against jobs, source pictures, resolution, format (from the help center)
- Prompt structure table: slot, what to write, example
- Three worked prompts as text blocks
- Existing capture: create-an-image-studio
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-seedream-5-pro-guide.webp`.
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
- ChatGPT Image 2 product prompting guide: `/resources/how-to/chatgpt-image-2-product-prompting-guide`
- Product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Nano Banana prompting guide: `/resources/how-to/nano-banana-prompting-guide`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Seedream 5.0 Pro Prompts for Product Images (43 chars) |
| Meta description | 152 chars | Prompt Seedream 5.0 Pro for product and campaign images: prompt structure, multi-image edits that keep the product, native 4K, upscale and limits. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write prompts for Seedream 5.0?
2. What is the difference between Seedream 4.5 and 5.0 Pro?
3. Can Seedream edit my product photo?
4. How many reference images can Seedream use?
5. Can Seedream render text inside an image?
6. Can Seedream make an image with a transparent background?

## Notes

Engine guide: ByteDance's own docs only. Engines named only from the in-app list.

## Definition of done

- [ ] `research/seedream-5-pro-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/seedream-5-pro-guide.md` with `template: howto`
