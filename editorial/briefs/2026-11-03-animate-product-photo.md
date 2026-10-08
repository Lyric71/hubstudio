---
brief_id: 86
publish_date: 2026-11-03
week: 04
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 86: How to animate a still product photo

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
| Working H1 | How to animate a still product photo |
| Slug | `/resources/how-to/animate-product-photo/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/animate-product-photo.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/animate-product-photo.md` |
| Research file | `research/animate-product-photo.md` |
| Hero image | `public/Images/howto-animate-product-photo.webp`, referenced as `/Images/howto-animate-product-photo.webp` |
| Primary query | `animate product photo AI` |
| Secondary queries | `image to video product`, `turn product photo into video`, `product photo to video AI`, `start and end frame AI video` |
| SERP verdict | Single-purpose animator tools and app-store listings rank with feature pages; none explains why a product warps in motion, which engines take a start frame or a start and last frame, or how to keep a label readable through a camera move. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Animating a still breaks in one place: the product drifts. The fix is control: an engine that takes a start frame, or a start and a last frame; the camera moves, the product does not; one move per clip; short lengths; a label check on the last frame. Taught in the Video studio with its real options.

## The research gate, before any drafting

No body copy until `research/animate-product-photo.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `animate product photo AI` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/animate-product-photo/` with a date. For a China platform, the
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

- Engine lengths, resolutions and inputs: the help center, create-a-video.md, read on the draft date
- No market statistic is needed; any figure used carries a source and a method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Which jobs suit image to video (a slow push-in, a turntable feel, light moving across a surface, steam, a pour) and which do not (hands handling the product, text that must stay readable through big motion)
- In the Video studio, under What the render is fed: Start image, or Start and last frame on the engines that take both; attach the frame with Choose from the library, Upload a picture or Paste a link
- Which engines in the app take a frame, per the help center: Veo 3.1 Fast, Wan 3.0, Seedance 2.0 and 2.5 and MiniMax H3 take a start and last frame; Seedance 1.0 Pro Fast and Grok Imagine 1.5 a start image; the Kling engines run from a prompt only in the app
- The prompt as a shot: what moves, where the light comes from, what the camera does; one move per clip; Improve with AI and the Catalog skill Animating a still (image to video)
- Length and the timeout: a clip over 15 seconds can fail after being billed, and the form warns; keep product clips short
- The price per second shown before the render; a failed render is not charged, with the long-clip exception stated
- After the render: the Video editor frames it for a Reel or a TikTok with the network's zones and saves it to the Assets Library
- A fidelity checklist: logo, label, color and proportion on the first, middle and last frame

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim a Kling engine takes a start frame in the app
- Name an animator app, a plugin or a tool vendor
- Print a price per second or any amount
- Promise a count of engines: say more ship over time
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: engine, length, start image or start and last frame, sound (from the help center)
- Fidelity checklist table: frame, what to check, the fix
- Existing localized app capture of the Video studio (create-a-video-studio.webp)
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-animate-product-photo.webp`.
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

- vertical video ad from a product image: `/resources/how-to/vertical-video-ad-from-product-image`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Video studio: `/app/create`
- motion design service: `/services/design/motion-design`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Animate a Still Product Photo with AI (44 chars) |
| Meta description | 152 chars | Turn a product photo into a short clip without the product warping: start and last frames, one camera move per shot, short lengths and a frame check. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I turn a product photo into a video?
2. Why does my product change shape when I animate it?
3. What is start and end frame in AI video?
4. How long should an animated product clip be?
5. Can I animate a product photo with text on the label?
6. Which AI video engine is best for animating a product photo?

## Notes

Reuse the existing localized Video studio captures; no new capture of an undocumented feature.

## Definition of done

- [ ] `research/animate-product-photo.md` written before drafting, every claim marked
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
- [ ] File saved as `output/animate-product-photo.md` with `template: howto`
