---
brief_id: 93
publish_date: 2026-11-10
week: 05
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 93: How to make a product video with generated sound

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
| Working H1 | How to make a product video with generated sound |
| Slug | `/resources/how-to/product-video-with-sound/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/product-video-with-sound.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/product-video-with-sound.md` |
| Research file | `research/product-video-with-sound.md` |
| Hero image | `public/Images/howto-product-video-with-sound.webp`, referenced as `/Images/howto-product-video-with-sound.webp` |
| Primary query | `AI video with sound` |
| Secondary queries | `AI video generator with audio`, `add sound to AI video`, `AI product video with sound effects`, `native audio AI video` |
| SERP verdict | Model resellers and aggregator pages rank with lists of engines that make audio; none shows how to write sound into a product prompt, when generated sound beats a music bed, or the rights question on music. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Sound is part of the prompt, not a later step. Name the effect, the ambience, and whether there is music or silence, and the engine composes it with the picture. For product video that means the click, the pour, the room, and knowing when to leave a captioned feed clip silent. Taught with Generate sound in the Video studio and music in the Video editor.

## The research gate, before any drafting

No body copy until `research/product-video-with-sound.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI video with sound` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/product-video-with-sound/` with a date. For a China platform, the
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

- App behavior: create-a-video.md and assets-library.md
- Platform muting rules: TikTok and Instagram help pages, dated, if the article states more than the help center does
- Any sound-off viewing figure only from a platform's own page with its date and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Three kinds of sound (effects tied to an action, ambience, voice) and what generated sound does poorly: an exact line, a brand jingle, licensed music
- Writing sound into the prompt: effects in their own sentence, silence asked for explicitly
- In the app, per the help center: the Generate sound option shows only when the engine and the mode offer sound; on some engines sound costs more per second; Kling 2.6 offers sound in Pro mode only; Seedance 1.0 Pro Fast has none; Wan 3.0 has no switch
- Reference to video with sound files on the engines that take them (Wan 3.0, Seedance 2.0 and 2.5, Grok Imagine 1.5, MiniMax H3), per the help center
- Music after the render: the Video editor's Sound panel (level of each clip, music from the computer or the library, start point, fade out) and the rule: use only music you hold the rights to, since TikTok and Instagram mute or block unlicensed music
- Captions for sound-off viewing: word-by-word captions in the Video editor
- Three worked prompts: a pour, a mechanical click, an ambient lifestyle scene

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a music library, an audio tool or a reseller
- Claim voice cloning or lip sync in the app
- Print a price per second
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: engine, sound option, note (from the help center)
- Prompt anatomy with a sound line
- Three prompt blocks
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-product-video-with-sound.webp`.
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

- AI sound for video: `/resources/insights/ai-sound-for-video`
- Video studio: `/app/create`
- word-by-word captions guide: `/resources/how-to/word-by-word-video-captions`
- animate a product photo: `/resources/how-to/animate-product-photo`
- short video service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make a Product Video with Generated Sound (48 chars) |
| Meta description | 152 chars | Write sound into the prompt: effects, ambience, silence. Which engines generate audio, when to add music instead, and the rights rule on music. (143 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI generate video with sound?
2. How do I add sound effects to an AI video?
3. Which AI video generators create audio?
4. Can I add my own music to an AI-generated video?
5. Why was my video muted on Instagram or TikTok?
6. Does generated sound cost more?

## Notes

Help: create-a-video.md (Generate sound), assets-library.md (Sound and Captions panels).

## Definition of done

- [ ] `research/product-video-with-sound.md` written before drafting, every claim marked
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
- [ ] File saved as `output/product-video-with-sound.md` with `template: howto`
