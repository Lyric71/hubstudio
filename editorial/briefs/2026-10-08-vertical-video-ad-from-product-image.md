---
brief_id: 55
publish_date: 2026-10-08
week: 00
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 55: How to make a vertical video ad from one product image

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
| Working H1 | How to make a vertical video ad from one product image |
| Slug | `/resources/how-to/vertical-video-ad-from-product-image/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/vertical-video-ad-from-product-image.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/vertical-video-ad-from-product-image.md` |
| Research file | `research/vertical-video-ad-from-product-image.md` |
| Hero image | `public/Images/howto-vertical-video-ad-from-product-image.webp`, referenced as `/Images/howto-vertical-video-ad-from-product-image.webp` |
| Primary query | `AI video ad from product image` |
| Secondary queries | `turn a product photo into a video ad with AI`, `image to video product ad 9:16`, `Reels ad safe zone`, `TikTok in-feed ad specs`, `YouTube Shorts ad specs` |
| SERP verdict | The SERP is all tool-vendor tutorials that end at the export button: none sets the clip against each placement's own spec page, none prints a safe zone from the platform's own file, and none warns that a long render can fail after it is billed. |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

One product still becomes a 9:16 ad of a few seconds: choose start frame or start and last frame, the camera move, generated sound, length per placement, captions and an end card, then the ad specs. App steps from the help center (create-a-video, skills, assets-library) and hubstudio-positioning.md only. Placement specs from each platform's own ads help pages, cited and dated. The price of a run is shown before it runs; never an amount; a clip longer than 15 seconds can time out after billing.

## The research gate, before any drafting

No body copy until `research/vertical-video-ad-from-product-image.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI video ad from product image` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/vertical-video-ad-from-product-image/` with a date. For a China platform, the
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

- Meta Ads Guide, Instagram Reels and Facebook Reels video ads: 9:16, 1440x2560, 14% top, 35% bottom, 6% sides
- TikTok ads help center, auction in-feed (June 2026) and reservation in-feed (July 2025): 9:16, sizes, 5 to 60 s with 9 to 15 s recommended, sound required on reservation
- TikTok standard in-feed safe-zone template file (dated April 2025): 160 top, 440 bottom, 80 each side, 120 right rail over the lower 720 px on 720x1280
- Google Ads help, Shorts ads: up to 3 minutes, first 60 seconds play in the feed, under 60 s recommended; Demand Gen 5 s minimum; vertical safe zone 288 top, 672 bottom, 48 left, 192 right on 1080x1920

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- a placement table: ratio, length, safe zone, source, for Instagram Reels ads, Facebook Reels ads, TikTok in-feed ads and YouTube Shorts ads
- the step list, from picking the still to saving the MP4
- a prompt example block for the motion
- a checklist before upload
- existing localized captures only (create-a-video-studio, video-editor-social, video-editor-save, skills-catalog), each with .fr and .zh siblings
- the 15-second timeout warning from the help center, where length is chosen

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- name any tool vendor or competing app
- print a price, a rate per second or any amount
- say "credits"
- claim hubStudio buys or places ads: the ad goes up in each network's own ads manager
- invent a skill name: use the Catalog names in skills.md (Short vertical video ad, Video camera movement vocabulary, Animating a still (image to video), Video shot pacing and duration)
- cite a safe-zone inset from a third-party page

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- /Images/help/create-a-video-studio.webp (fr, zh siblings exist)
- /Images/help/skills-catalog.webp (fr, zh siblings exist)
- /Images/help/video-editor-social.webp (fr, zh siblings exist)
- /Images/help/video-editor-save.webp (fr, zh siblings exist)
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-vertical-video-ad-from-product-image.webp`.
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

- the AI video production page: `/solutions/ai-production/video`
- the ad creative service: `/services/design/ad-creative`
- the create page of the app: `/app/create`
- the all-in cost of AI video: `/resources/insights/all-in-cost-of-ai-video`
- the video tools page: `/app/video-tools`
- the TikTok platform page: `/solutions/platforms/tiktok`
- the how-to guides: `/resources/how-to`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to make an AI video ad from a product image (47 chars) |
| Meta description | 152 chars | Make a 9:16 AI video ad from one product image: start frame, camera move, sound, length, end card, plus Reels, TikTok and Shorts ad specs. (138 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI make a video ad from one product photo?
2. What length should a vertical video ad be?
3. What is the safe zone for Reels, TikTok and Shorts ads?
4. Should the ad have sound?
5. Will the label on my product stay readable?
6. What does a clip cost in hubStudio?
7. Can hubStudio run the ad for me?

## Notes

Skill names follow the help center Catalog (Short vertical video ad, Video camera movement vocabulary), not the shorter names in the piece spec. The Video editor frames for Instagram, TikTok and Facebook; Shorts uses Format, Vertical 9:16, checked against Google's template.

## Definition of done

- [ ] `research/vertical-video-ad-from-product-image.md` written before drafting, every claim marked
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
- [ ] File saved as `output/vertical-video-ad-from-product-image.md` with `template: howto`
