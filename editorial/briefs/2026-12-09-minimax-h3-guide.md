---
brief_id: 119
publish_date: 2026-12-09
week: 09
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 119: MiniMax H3 for product and social video

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
| Working H1 | MiniMax H3 for product and social video |
| Slug | `/resources/how-to/minimax-h3-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/minimax-h3-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/minimax-h3-guide.md` |
| Research file | `research/minimax-h3-guide.md` |
| Hero image | `public/Images/howto-minimax-h3-guide.webp`, referenced as `/Images/howto-minimax-h3-guide.webp` |
| Primary query | `MiniMax H3 prompts` |
| Secondary queries | `MiniMax H3 image to video`, `MiniMax H3 2K video`, `MiniMax H3 reference video`, `MiniMax H3 prompt examples` |
| SERP verdict | MiniMax's launch post and API docs rank next to reseller playgrounds and prompt lists; none applies the maker's guidance to product work (a packshot that must stay identical, a vertical clip for a feed, a reference clip for the motion) or says how to plan around slow renders. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

MiniMax H3 is the sharp one: 2K, sound, and references of every kind. It is also slow, so the craft is to prompt it right the first time on short clips: open on the real packshot, describe one camera move and one action, feed a reference clip for the motion you want, and keep the product unchanged. The maker's own guidance, applied to product and social clips.

## The research gate, before any drafting

No body copy until `research/minimax-h3-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `MiniMax H3 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/minimax-h3-guide/` with a date. For a China platform, the
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

- MiniMax H3 launch post (31 July 2026, logged in the ledger as a maker claim) and MiniMax's API documentation, read on the research date
- Leaderboard positions only as the ledger logs them: two public blind-vote boards, text to video and image to video separately, date and vote count stated, no single best verdict
- App facts: create-a-video.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A capability table from MiniMax only (the 31 July 2026 launch post and MiniMax's API docs): length, resolution, sound, mixed references, the limits it states
- MiniMax's own prompting guidance for camera movement and action, quoted from its docs, applied to product clips
- In the app, per the help center and the engine list: 4 to 15 seconds; 768p (draft) or 2K; sound optional; widescreen 16:9, vertical 9:16, square, landscape 4:3, portrait 3:4 and cinemascope 21:9; a start frame, a start and last frame, or references: up to 9 pictures (JPG, PNG, WebP, HEIC or HEIF, up to 30 MB each), 3 clips (MP4 up to 50 MB, 2 to 15 seconds) and 1 sound file (MP3 or WAV up to 15 MB, 2 to 15 seconds)
- Renders are slow: a render gets about five minutes, so keep clips short; draft at 768p, finish at 2K; start the next render while one runs
- Five product and social clips with prompt blocks: a packshot reveal from a start frame, a start-to-end frame transition, a vertical feed loop, a motion borrowed from a reference clip, a clip with generated sound
- A QA list: product shape and label across frames, logo, hands, the first and last frame for a loop, sound that fits
- When another engine fits better: longer single shots on Wan 3.0 or Seedance 2.5 (up to 30 seconds), shorter fast drafts elsewhere; History to rerun a prompt
- The price shown before the render; a failed render is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but MiniMax for a capability
- State released weights: the maker calls them planned
- Name resellers, playgrounds or tool vendors
- Print a price or the relative price of 768p
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Capability table, per MiniMax, with a source column
- Input limits table from the help center
- Five prompt blocks
- QA list
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-minimax-h3-guide.webp`.
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

- Seedance 2.5 guide: `/resources/how-to/seedance-2-5-guide`
- Wan 3.0 guide: `/resources/how-to/wan-3-guide`
- animate a product photo: `/resources/how-to/animate-product-photo`
- product video with sound: `/resources/how-to/product-video-with-sound`
- engines page: `/app/engines`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | MiniMax H3 Prompts for Product and Social Video (47 chars) |
| Meta description | 152 chars | Prompt MiniMax H3 for product and social clips: open on the packshot, one move and one action, references for motion, short clips for slow renders. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a MiniMax H3 prompt?
2. How long can a MiniMax H3 video be?
3. Does MiniMax H3 generate sound?
4. Can MiniMax H3 turn a product image into a video?
5. What references can I give MiniMax H3?
6. Why does MiniMax H3 take so long to render?

## Notes

MiniMax's own pages only for the engine. MiniMax H3 is in the app. Help: create-a-video.md.

## Definition of done

- [ ] `research/minimax-h3-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/minimax-h3-guide.md` with `template: howto`
