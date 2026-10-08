---
brief_id: 134
publish_date: 2026-12-24
week: 11
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 134: How to make a slideshow video from product photos

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
| Working H1 | How to make a slideshow video from product photos |
| Slug | `/resources/how-to/product-slideshow-video/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/product-slideshow-video.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/product-slideshow-video.md` |
| Research file | `research/product-slideshow-video.md` |
| Hero image | `public/Images/howto-product-slideshow-video.webp`, referenced as `/Images/howto-product-slideshow-video.webp` |
| Primary query | `product slideshow video` |
| Secondary queries | `turn product photos into a video`, `product photo video for Instagram Reels`, `product photos to TikTok video`, `make a video from product images with AI` |
| SERP verdict | Slideshow makers and template sites rank with drag-and-drop steps; none deals with what decides whether a product slideshow works on a phone: one photo per beat, movement inside each still, the network's safe zones and length, and keeping the product true when AI adds the motion. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A run of stills reads as a slide deck in a feed; give each photo a few seconds of camera movement and it reads as video. In hubStudio that takes two tools: the Video studio turns each product photo into a short clip that opens on it (Start image), and the Video editor strings the clips, adds the words, the music and the cover, and frames the result for the network. The product stays the product because every clip starts from your own photo.

## The research gate, before any drafting

No body copy until `research/product-slideshow-video.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `product slideshow video` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/product-slideshow-video/` with a date. For a China platform, the
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

- App behavior: create-a-video.md (Start image, References) and assets-library.md (The Video editor)
- Network lengths and sizes: link the spec pages rather than restating them without a source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Plan the sequence first: one photo per beat (hero, detail, in use, scale, offer), the seconds per beat, the total length per network, linked to the spec pages
- Image to video in the Video studio: Start image, or Start and last frame on engines that take both, one short clip per photo with the camera move named in the prompt; engines that take a start image per the help center: Veo 3.1 Fast, Wan 3.0, Grok Imagine 1.5, Seedance 1.0 Pro Fast, 2.0 and 2.5, MiniMax H3
- Why not References for this job: the help center says references are imitated rather than shown as they are, so the product can drift
- The Video editor takes video clips (MP4, MOV, WebM), not still pictures: say so plainly; add each clip in order with More clips, Add from the library, then trim each to its beat
- The Social panel: Instagram Reel, TikTok video or Facebook reel at 1080 x 1920, Crop to fill or Fit it whole, what the network covers, the Checks and their fix buttons
- Texts that show for a stretch of time for the product name and the offer; captions if there is speech; music you have the rights to; the cover frame
- Save to the Assets Library or download the MP4; editing is free; each clip render is priced before it runs
- A checklist before posting: product true in every clip, words inside the safe area, length within the placement, sound or captions, cover chosen

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim the Video editor takes still pictures
- Promise a one-click slideshow in the app
- Name a slideshow app, template site or tool vendor
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Sequence table: beat, photo, camera move, seconds
- Checklist table: what to check, where in the app
- Existing localized captures create-a-video-studio.webp, video-editor-format.webp and video-editor-social.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-product-slideshow-video.webp`.
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

- animate a still product photo: `/resources/how-to/animate-product-photo`
- vertical video ad from one product image: `/resources/how-to/vertical-video-ad-from-product-image`
- Instagram Reel and Story specs: `/resources/insights/instagram-reels-stories-specs`
- TikTok video specs: `/resources/insights/tiktok-video-specs`
- Video editor and Shorts autopilot: `/app/video-tools`
- short video service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make a Product Slideshow Video (37 chars) |
| Meta description | 152 chars | Turn product photos into a slideshow that reads as video on a phone: one clip per photo from a start image, then order, words, music and format. (144 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I make a video from product photos?
2. How long should a product slideshow video be?
3. Can AI animate my product photos into a video?
4. What size should a product video be for Reels and TikTok?
5. Can I add music and text to a product slideshow?
6. Will AI change my product when it animates the photo?

## Notes

Help: create-a-video.md (Start image, References) and assets-library.md (The Video editor, which takes clips only). Reuse the existing localized captures.

## Definition of done

- [ ] `research/product-slideshow-video.md` written before drafting, every claim marked
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
- [ ] File saved as `output/product-slideshow-video.md` with `template: howto`
