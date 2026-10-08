---
brief_id: 58
publish_date: 2026-10-08
week: 00
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 58: How to keep a consistent character across AI images and video

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | How-to (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to keep a consistent character across AI images and video |
| Slug | `/resources/how-to/consistent-character-ai-images-video/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/consistent-character-ai-images-video.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/consistent-character-ai-images-video.md` |
| Research file | `research/consistent-character-ai-images-video.md` |
| Hero image | `public/Images/howto-consistent-character-ai-images-video.webp`, referenced as `/Images/howto-consistent-character-ai-images-video.webp` |
| Primary query | `consistent character AI` |
| Secondary queries | `same character in AI images`, `consistent character AI video`, `character reference AI` |
| SERP verdict | Tool vendors rank with guides to their own product; none prints the reference-image limits from the engine makers' own documentation, none says a real person's face needs written consent, and few give a drift check a reviewer can run. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A brand mascot, model or presenter must look like the same person in every scene and clip. The method: a reference sheet, a fixed descriptor reused word for word, reference images within each engine's documented limit, approved stills animated from a start frame, reference to video for motion shots, and a QA pass on face, outfit and proportions. App steps only from the help center.

## The research gate, before any drafting

No body copy until `research/consistent-character-ai-images-video.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `consistent character AI` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/consistent-character-ai-images-video/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Veo 3.1 reference images, start and last frame, 8-second rule, adults only: Google Gemini API Veo documentation and the Veo 3.1 developer post
- Nano Banana 2 and Nano Banana Pro character and object image counts: Gemini API image generation documentation and Google launch posts
- GPT Image edit endpoint image count: OpenAI API reference
- FLUX.1 Kontext single input image: Black Forest Labs documentation
- Seedance 2.0 reference counts and the real-portrait authorization note: ByteDance Seed launch post
- Grok Imagine reference-to-video count and resolution: xAI documentation
- Wan reference and frame-stitching guidance: Alibaba Cloud Model Studio documentation
- App limits: create-an-image.md, create-a-video.md, skills.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A table of what to lock and what may vary
- The step list, from reference sheet to QA pass
- A prompt example block with the fixed descriptor
- A drift checklist a reviewer can run
- Which engines state reference-image support, and the limit, cited only from the makers' own pages, beside what the app takes per the help center
- Image to video with a start frame against reference to video: which one when
- Rights: a real person's likeness needs their written consent; production practice, not legal advice; link the brand ambassadors insight
- The Consistent character across images skill in the Catalog, as the help center describes it

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source other than the engine maker for a capability or a limit
- Name a tool vendor, reseller or aggregator
- Claim an app feature the help center does not document (no character lock, no training, no seed control)
- Print a price or say credits
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Lock and vary table
- Engine reference table: maker documentation against what the app takes
- Prompt example block
- Drift checklist table
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-consistent-character-ai-images-video.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A step sequence, a prompt example, a checklist the reader can use today. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- create page: `/app/create`
- engines page: `/app/engines`
- AI avatars insight: `/resources/insights/ai-avatars-brand-content`
- AI brand ambassadors insight: `/resources/insights/ai-brand-ambassadors-what-you-sign`
- how-to guides: `/resources/how-to`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Keep a Consistent Character in AI Images (47 chars) |
| Meta description | 152 chars | Keep a mascot, model or presenter the same across AI images and video: reference sheet, fixed descriptor, reference limits per engine, drift check. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I keep the same character in AI images?
2. How many reference images should I use for a consistent character?
3. How do I keep a character consistent in AI video?
4. Is image to video or reference to video better for character consistency?
5. Why does my AI character's face change between images?
6. Can I use a real person as an AI character reference?
7. Do reference images make a render cost more?

## Notes

Makers' own documentation only for engine limits. App steps only from the help center.

## Definition of done

- [ ] `research/consistent-character-ai-images-video.md` written before drafting, every claim marked
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
- [ ] File saved as `output/consistent-character-ai-images-video.md` with `template: howto`
