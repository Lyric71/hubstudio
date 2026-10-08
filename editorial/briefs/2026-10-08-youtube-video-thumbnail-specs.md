---
brief_id: 62
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 62: YouTube thumbnail size and video specs for 2026

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Platform specs (`template: spec` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | YouTube thumbnail size and video specs for 2026 |
| Slug | `/resources/insights/youtube-video-thumbnail-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/youtube-video-thumbnail-specs.md` |
| Research file | `research/youtube-video-thumbnail-specs.md` |
| Hero image | `public/Images/insight-youtube-video-thumbnail-specs.webp`, referenced as `/Images/insight-youtube-video-thumbnail-specs.webp` |
| Primary query | `youtube thumbnail size 2026` |
| Secondary queries | `youtube video specs`, `youtube recommended upload settings`, `youtube banner size`, `youtube video resolution` |
| SERP verdict | Page one is tool-vendor and design-blog spec sheets: most still print 1280x720 and a 2MB cap as the thumbnail rule while YouTube Help now recommends 3840x2160 with a 50MB desktop limit, banner guides print a 1546x423 safe area YouTube does not publish, and none cites the Help Center page per row or covers the verification gate, the 4:5 replacement on vertical videos or the A/B test downscale. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Long-form video specs (the recommended upload encoding settings, the 16:9 resolution ladder, aspect ratio handling, size and length limits), custom thumbnail rules (size, ratio, file size by device, formats, the phone verification requirement), the channel banner and profile picture, all read from YouTube Help Center pages only, each row with its source page. Visible "Reviewed October 8, 2026". Primary readings, so no deviation 7 disclaimer.

## The research gate, before any drafting

No body copy until `research/youtube-video-thumbnail-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `youtube thumbnail size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/youtube-video-thumbnail-specs/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- A Western network's or marketplace's own help, business or policy pages are
  readable and therefore primary: no deviation 7 disclaimer, but a visible
  Reviewed date on the page and a `watch.csv` row three months out for the
  quarterly recheck. A China platform keeps deviation 7 where its rule text
  is gated.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- YouTube Help, custom thumbnails: 3840x2160 for videos, minimum width 640; JPG or PNG; 2MB on mobile, 50MB on desktop; 16:9; account must be verified
- YouTube Help, custom thumbnails: vertical videos with 16:9 custom thumbnails replaced by an auto-generated 4:5 thumbnail on home, explore and subscriptions
- YouTube Help, A/B test: a thumbnail under 1280x720 downscales every test thumbnail to 854x480
- YouTube Help, encoding settings: MP4, H.264 High Profile, AAC-LC or Opus, 48kHz; bitrates per resolution (1080p 8 and 12 Mbps SDR, 4K 35 to 45 and 53 to 68 Mbps)
- YouTube Help, resolution: 16:9 ladder from 426x240 to 7680x4320
- YouTube Help, longer than 15 minutes: 256GB or 12 hours, whichever is less; over 15 minutes needs verification
- YouTube Help, channel branding: banner 2048x1152 minimum, 2560x1440 recommended, safe area 1235x338 at the minimum, 6MB; profile picture JPG GIF BMP PNG, 15MB, renders at 98x98; watermark 150x150 minimum, under 1MB

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A video spec table with a source column
- A thumbnail spec table with a source column
- A channel art table (banner, profile picture, watermark) with a source column
- The thumbnail safe area for text: YouTube publishes none, the duration badge observed on the live site, the banner safe area as YouTube publishes it
- Common failures, each taken from an official YouTube Help page
- How hubStudio fits: the YouTube module (video, title and description, then Publish interactively in YouTube Studio), the Channel tab kit at 2560x1440 and 800x800, a thumbnail made in the Image studio and finished in the Image editor; facts only from src/content/help/youtube.md, create-an-image.md, assets-library.md and hubstudio-positioning.md
- A dated changelog block

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name or describe any spec-sheet publisher, tool vendor or scheduling product
- Print 1280x720 or 2MB as the current YouTube thumbnail recommendation
- Print 1546x423 as a YouTube safe area: YouTube publishes 1235x338 at the minimum banner size
- Print GIF or BMP as YouTube thumbnail formats: the Help page names JPG and PNG
- Claim hubStudio uploads to YouTube, connects to a YouTube account, schedules on YouTube or sets a thumbnail
- Print a price, an amount or the word credits

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Hero image: public/Images/insight-youtube-video-thumbnail-specs.webp
- App shots reused from src/data/app-shots.ts: youtube, youtubeChannel
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-youtube-video-thumbnail-specs.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Spec table with a source column, visible Reviewed date, dated changelog. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- video production service: `/services/design/video-production`
- YouTube help article: `/help/youtube`
- Assets Library page: `/app/library`
- YouTube Shorts specs: `/resources/insights/youtube-shorts-specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | YouTube Thumbnail Size 2026: Video and Banner Specs (51 chars) |
| Meta description | 152 chars | YouTube thumbnail, video and banner specs read from YouTube Help: 3840x2160 thumbnails, upload encoding settings, banner safe area, and what breaks. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the YouTube thumbnail size in 2026?
2. Why can't I upload a custom thumbnail on YouTube?
3. What is the maximum thumbnail file size on YouTube?
4. What resolution should I upload to YouTube?
5. What are YouTube's recommended upload settings?
6. What size is a YouTube banner and where is the safe area?
7. How long can a YouTube video be?

## Notes

Primary Western spec page: Reviewed date visible, watch row 2027-01-08 for the quarterly recheck. Author Erik Lindström (Film Director). Companion: youtube-shorts-specs, published the same day.

## Definition of done

- [ ] `research/youtube-video-thumbnail-specs.md` written before drafting, every claim marked
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
- [ ] Reviewed date visible on the page, dated changelog present
- [ ] `watch.csv` row added three months out for the quarterly recheck
- [ ] File saved as `output/youtube-video-thumbnail-specs.md` with `template: spec`
