---
brief_id: 94
publish_date: 2026-11-11
week: 05
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 94: Seedance 2.5 for product and social video

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
| Working H1 | Seedance 2.5 for product and social video |
| Slug | `/resources/how-to/seedance-2-5-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/seedance-2-5-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/seedance-2-5-guide.md` |
| Research file | `research/seedance-2-5-guide.md` |
| Hero image | `public/Images/howto-seedance-2-5-guide.webp`, referenced as `/Images/howto-seedance-2-5-guide.webp` |
| Primary query | `seedance prompts` |
| Secondary queries | `seedance 2.5 prompt guide`, `seedance 2.5 reference video`, `seedance 2.0 vs 2.5`, `seedance multi shot prompt` |
| SERP verdict | Reseller and aggregator platforms rank with prompt formulas that mostly agree (subject, action, scene, camera, audio, under a hundred words) but cite nothing from ByteDance; none handles references in volume or the 30-second ceiling for product work. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Seedance 2.5 is the engine for long, referenced clips: up to 30 seconds, and in the app up to 30 pictures, 10 clips and 2 sound files. That changes the prompt: bind the references first, then direct time shot by shot. From ByteDance's own documentation, applied to products, with 1.0 Pro Fast and 2.0 placed beside it.

## The research gate, before any drafting

No body copy until `research/seedance-2-5-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `seedance prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/seedance-2-5-guide/` with a date. For a China platform, the
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

- Model capabilities and prompt guidance: ByteDance Seed pages and Volcano Engine or BytePlus model docs
- App limits: create-a-video.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What Seedance 2.5 is and what changed from 2.0, from ByteDance's own pages (Seed, Volcano Engine or BytePlus model docs, Chinese-language first)
- The three Seedance engines in the app, per the help center: 1.0 Pro Fast (2 to 12 seconds, start image, no sound); 2.0 (4 to 15 seconds, up to 4K, start and last frame or references up to 9 pictures, 3 clips, 1 sound file); 2.5 (4 to 30 seconds, 480p to 1080p, start and last frame or references up to 30 pictures, 10 clips, 2 sound files, Adaptive shape)
- Prompt structure per ByteDance's docs, and how its docs say to refer to each reference in the prompt
- Long clips: a clip over 15 seconds can time out after being billed, and the form warns; when to split instead
- Three worked prompts: a product reference turntable, a multi-shot social ad, a UGC-style vertical
- Failure modes and fixes: rushed motion from a second action, packaging drift, conflicting references

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite a reseller or an aggregator
- Use any app limit not in the help center, or any model capability not on ByteDance's pages
- Print a price
- Use an em dash or Han characters (romanize Chinese source names)

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Three-engine table: length, resolution, inputs, sound
- Prompt anatomy with reference binding
- Three prompt blocks
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-seedance-2-5-guide.webp`.
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

- Kling 3.0 product video guide: `/resources/how-to/kling-3-product-video-guide`
- Veo 3.1 Fast guide: `/resources/how-to/veo-3-1-fast-guide`
- vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- engines page: `/app/engines`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Seedance 2.5 Prompts for Product and Social Video (49 chars) |
| Meta description | 152 chars | How to prompt Seedance 2.5: reference binding, shot-by-shot timing up to 30 seconds, sound, and where 1.0 Pro Fast and 2.0 fit, with three examples. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a Seedance prompt?
2. What is new in Seedance 2.5?
3. How long can a Seedance 2.5 video be?
4. How many reference images can Seedance use?
5. Seedance 2.0 or 2.5: which should I use?
6. Does Seedance generate sound?

## Notes

ByteDance's own documentation only. Seedance 1.0 Pro Fast, 2.0 and 2.5 are in the app.

## Definition of done

- [ ] `research/seedance-2-5-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/seedance-2-5-guide.md` with `template: howto`
