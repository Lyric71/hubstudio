---
brief_id: 141
publish_date: 2026-12-31
week: 12
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 141: How to make an animated logo or text intro

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
| Working H1 | How to make an animated logo or text intro |
| Slug | `/resources/how-to/animated-logo-intro/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/animated-logo-intro.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/animated-logo-intro.md` |
| Research file | `research/animated-logo-intro.md` |
| Hero image | `public/Images/howto-animated-logo-intro.webp`, referenced as `/Images/howto-animated-logo-intro.webp` |
| Primary query | `animated logo intro AI` |
| Secondary queries | `logo animation with AI`, `AI logo reveal video`, `text intro for a video`, `animated logo for Reels and TikTok` |
| SERP verdict | Logo-reveal template sites and generator apps rank; none deals with the failure that matters to a brand: an engine asked to draw the logo redraws it, letterforms and proportions included, so the clip ends on a mark that is almost yours. |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Never ask an engine to draw your logo; give it the real one. Place the logo on its background in the Image editor at the clip's shape, use that picture as the last frame, and let the engine render the movement that lands on it, so the clip ends on the true mark. Words go on in the Video editor as text, not as generated letters. Then trim, add music and save for the network.

## The research gate, before any drafting

No body copy until `research/animated-logo-intro.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `animated logo intro AI` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/animated-logo-intro/` with a date. For a China platform, the
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

- App behavior: create-a-video.md (Start and last frame) and assets-library.md (the Image editor's Crop and Picture panels, the Video editor's Text, Sound and Social panels)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Why a generated logo fails: letterforms, spacing and proportions redrawn; link the readable text piece
- Prepare the frame in the Image editor: a background picture cropped to the clip's shape (Wide 16:9 or Story 9:16), the logo added under Picture (a PNG with a transparent background works best), placed with the nine Place it squares, its Opacity set
- Start and last frame in the Video studio: the logo frame as the last frame for a reveal, or as the start frame for an outro; engines that take a start and last frame per the help center: Veo 3.1 Fast, Wan 3.0, Seedance 2.0 and 2.5, MiniMax H3; a short length; sound optional
- Prompt the movement, not the mark: what moves, the light, the camera; three prompt examples: a light sweep, pieces assembling, a slow push in
- A text intro: words added in the Video editor's Text panel (Box, Outlined or Plain, font, size, color, Appears at and Disappears at) over a generated background clip
- Finishing: trims, music you have the rights to, the Social panel for Reels, TikTok or Facebook, save as MP4
- Rights: animate only a logo you own or are licensed to use
- A check: the last frame matches the source logo, colors and edges hold, the words read on a phone

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Prompt an engine to draw or spell the logo
- Promise a template library or a logo maker in the app
- Name a logo, template or motion app
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Step table: frame, engine setting, prompt, check
- Three prompt blocks
- Existing localized captures image-editor-crop.webp and create-a-video-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-animated-logo-intro.webp`.
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

- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- animate a still product photo: `/resources/how-to/animate-product-photo`
- Veo 3.1 Fast guide: `/resources/how-to/veo-3-1-fast-guide`
- Video editor and Shorts autopilot: `/app/video-tools`
- motion design service: `/services/design/motion-design`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make an Animated Logo Intro With AI (42 chars) |
| Meta description | 152 chars | Animate your logo without the AI redrawing it: the real logo as the last frame, movement from the engine, words added as text, then music and format. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI animate my logo?
2. How do I make a logo reveal video?
3. Why does AI change my logo?
4. How long should a logo intro be?
5. How do I add an animated text intro to a video?
6. Can I use an animated logo on Reels and TikTok?

## Notes

Help: create-a-video.md (Start and last frame) and assets-library.md (Image editor, Video editor). The Video editor has no picture overlay: the logo enters through the frame, the words through Text. Reuse the existing localized captures.

## Definition of done

- [ ] `research/animated-logo-intro.md` written before drafting, every claim marked
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
- [ ] File saved as `output/animated-logo-intro.md` with `template: howto`
