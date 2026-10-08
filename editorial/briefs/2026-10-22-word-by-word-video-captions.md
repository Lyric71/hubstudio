---
brief_id: 75
publish_date: 2026-10-22
week: 02
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 75: How to add word-by-word captions to a video

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
| Working H1 | How to add word-by-word captions to a video |
| Slug | `/resources/how-to/word-by-word-video-captions/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/word-by-word-video-captions.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/word-by-word-video-captions.md` |
| Research file | `research/word-by-word-video-captions.md` |
| Hero image | `public/Images/howto-word-by-word-video-captions.webp`, referenced as `/Images/howto-word-by-word-video-captions.webp` |
| Primary query | `add captions to video` |
| Secondary queries | `word by word captions`, `karaoke style captions`, `auto captions for reels and tiktok`, `how to make an SRT file`, `captions safe zone tiktok` |
| SERP verdict | TOOL LANDING PAGES. The SERP is caption-generator landing pages selling upload, transcribe, export; none covers placement against the network's own buttons, correcting names and jargon, burned-in captions versus a subtitle file, or keeping the audio private. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Word-by-word captions are easy to make and easy to get wrong: they land under the network's buttons, misspell the product name, or go out burned in when a subtitle file was needed. This guide does it properly in the hubStudio Video editor, including the free route where the speech model runs in your own browser and nothing is sent.

## The research gate, before any drafting

No body copy until `research/word-by-word-video-captions.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `add captions to video` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/word-by-word-video-captions/` with a date. For a China platform, the
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

- WCAG 2.2 success criterion 1.2.2 Captions (Prerecorded): W3C, quoted
- Network caption features and safe areas: TikTok and Instagram help pages, dated, only if used
- Every app behavior: assets-library.md (Video editor, Captions) and shorts-autopilot.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Burned-in captions versus a subtitle file (SRT): when each is right; the editor does both (Download as SRT)
- Two ways to make them: Free, in your browser (speech model Quick about 40 MB, Balanced about 80 MB, Accurate about 250 MB, downloaded once; nothing sent, nothing billed) or Fast, billed (a few seconds, priced per minute of sound with the price shown before you start)
- Language spoken, or Detect it
- The five looks: Classic, Karaoke (the word said lights up), One word, Boxed, Highlight; Words at once, Size, Height on the screen, colors, font, capitals
- Correct every line under The words: names, product terms, numbers
- Placement: the Social panel shows in red what Instagram, TikTok or Facebook covers, with a dashed safe area; the Checks offer Move the captions into the safe area
- Many short clips at once: Shorts autopilot captions each short word by word in one of the same five looks, with a hook line over the first seconds
- Accessibility in one paragraph: captions for prerecorded video under WCAG 2.2 success criterion 1.2.2, from the W3C's own text
- Save as MP4 in 1080p or 720p to the Assets Library or download; the original stays

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any caption tool or competitor
- Print the unsourced 'most people watch without sound' statistic; any viewing-habit figure needs a network's own page or a survey with a method
- Print a price per minute or any hubStudio amount
- Claim the Video editor publishes to YouTube or LinkedIn video
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: free in browser versus fast billed (speed, privacy, cost model, best for)
- Table: the five caption looks and where each works
- Existing help captures: video-editor-social, video-editor-save, shorts-autopilot-settings
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-word-by-word-video-captions.webp`.
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

- Video editor and Shorts autopilot: `/app/video-tools`
- Long video to shorts: `/resources/how-to/long-video-to-shorts`
- TikTok video specs: `/resources/insights/tiktok-video-specs`
- Instagram Reels and Stories specs: `/resources/insights/instagram-reels-stories-specs`
- Short video service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Add Word-by-Word Captions to a Video (43 chars) |
| Meta description | 152 chars | Add word-by-word captions to Reels and TikToks: free in-browser or fast transcription, five looks, safe-zone placement, corrections and SRT export. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I add word-by-word captions to a video?
2. Can I add captions to a video for free?
3. How do I make karaoke-style captions?
4. Where should captions go on a TikTok or Reel?
5. How do I get an SRT file from my video?
6. Are auto captions accurate enough to publish?
7. Can I caption a video in another language?

## Notes

Help sources: assets-library.md (Video editor: Social, Captions, Save), shorts-autopilot.md. The Video editor targets Instagram, TikTok and Facebook in its Social panel.

## Definition of done

- [ ] `research/word-by-word-video-captions.md` written before drafting, every claim marked
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
- [ ] File saved as `output/word-by-word-video-captions.md` with `template: howto`
