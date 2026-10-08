---
brief_id: 53
publish_date: 2026-10-08
week: 00
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 53: How to turn one long video into Shorts, Reels and TikToks

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
| Working H1 | How to turn one long video into Shorts, Reels and TikToks |
| Slug | `/resources/how-to/long-video-to-shorts/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/long-video-to-shorts.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/long-video-to-shorts.md` |
| Research file | `research/long-video-to-shorts.md` |
| Hero image | `public/Images/howto-long-video-to-shorts.webp`, referenced as `/Images/howto-long-video-to-shorts.webp` |
| Primary query | `turn long video into shorts` |
| Secondary queries | `repurpose a podcast into YouTube Shorts and Reels`, `cut an interview into vertical clips with captions`, `how long can a YouTube Short be`, `webinar to TikTok clips` |
| SERP verdict | Clipping-tool vendors own the query with product pages; most still print the 60-second Shorts cap retired on October 15, 2024, none cite a platform help page with a date, and none mention the one-minute Content ID block on Shorts or that the TikTok length an app can post depends on the account. |
| Body length | 1,600 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

An interview, webinar, podcast or live becomes a week of vertical clips: what makes a moment stand alone, the hook in the first seconds, framing the speaker at 9:16, word-by-word captions, then publishing. The app part is Shorts autopilot and the Video editor, described only from the help center. YouTube Shorts are published by hand in YouTube Studio. Platform limits come from each platform's own pages, cited and dated.

## The research gate, before any drafting

No body copy until `research/long-video-to-shorts.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `turn long video into shorts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/long-video-to-shorts/` with a date. For a China platform, the
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

- YouTube Shorts up to three minutes, square or vertical, uploads on or after October 15, 2024 (YouTube Help)
- A Short over one minute with an active Content ID claim is blocked globally per the English help page; the French version of the same page says new Shorts under three minutes are no longer blocked automatically from September 24, 2026: publish both (YouTube Help)
- All TikTok creators can post 3-minute videos through the Content Posting API, some 5 or 10 (TikTok for Developers, updated August 4, 2026)
- Instagram reels up to 20 minutes, over 3 minutes not recommended to new audiences (Instagram, Reels feature page)
- Instagram makes low-resolution, watermarked, bordered, majority-text or already-posted reels less visible (Instagram, May 31, 2023)
- TikTok ads guidance: proposition in 3 seconds, hook in 6, captions or text overlays (TikTok Ads help, June 2025)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A table of the three destinations: max length, ratio, caption need, how hubStudio publishes it
- The step list, from the long video to the scheduled clips
- What to pick as the source video
- A QA list before anything goes out
- The existing localized captures /Images/help/shorts-autopilot-page.webp and /Images/help/shorts-autopilot-settings.webp (fr and zh siblings exist)
- TikTok labeled Beta wherever hubStudio publishing to TikTok is named

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- No amount, no "credits": the prepaid balance only, prices shown before a run
- No claim that hubStudio uploads to YouTube: the person publishes in YouTube Studio
- No app feature beyond shorts-autopilot.md, assets-library.md, youtube.md, tiktok.md, instagram.md and hubstudio-positioning.md
- No platform limit from a third-party article; no view-through or sound-off statistic without a method
- No competitor or clipping tool named, described or alluded to

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- /Images/help/shorts-autopilot-page.webp (+ .fr.webp, .zh.webp)
- /Images/help/shorts-autopilot-settings.webp (+ .fr.webp, .zh.webp)
- Hero /Images/howto-long-video-to-shorts.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-long-video-to-shorts.webp`.
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

- the publish page of the app: `/app/publish`
- the short video service: `/services/design/short-video`
- the TikTok platform page: `/solutions/platforms/tiktok`
- the Shorts autopilot help article: `/help/shorts-autopilot`
- the how-to guides: `/resources/how-to`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Turn a long video into Shorts, Reels and TikToks (48 chars) |
| Meta description | 152 chars | Cut an interview, webinar or podcast into vertical clips: the moments, the hook, 9:16 framing, word-by-word captions and each platform's length limit. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How long can a YouTube Short be?
2. How long can a TikTok be when an app posts it?
3. How long can an Instagram Reel be?
4. Can I post the same clip on all three platforms?
5. Do Shorts and Reels need burned-in captions?
6. Can I put music on a short?
7. Does hubStudio post my Shorts to YouTube?

## Notes

Captures reused from the help center (fr and zh exist). The showcase clip follows settled fallback 12. Not China-related: R4 Chinese-first search not applicable.

## Definition of done

- [ ] `research/long-video-to-shorts.md` written before drafting, every claim marked
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
- [ ] File saved as `output/long-video-to-shorts.md` with `template: howto`
