---
brief_id: 140
publish_date: 2026-12-30
week: 12
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 140: Gemini Omni Flash for social video from a written brief

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
| Working H1 | Gemini Omni Flash for social video from a written brief |
| Slug | `/resources/how-to/gemini-omni-flash-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/gemini-omni-flash-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/gemini-omni-flash-guide.md` |
| Research file | `research/gemini-omni-flash-guide.md` |
| Hero image | `public/Images/howto-gemini-omni-flash-guide.webp`, referenced as `/Images/howto-gemini-omni-flash-guide.webp` |
| Primary query | `Gemini Omni Flash video` |
| Secondary queries | `Gemini Omni Flash prompts`, `Gemini video generation prompt examples`, `Gemini Omni Flash or Veo`, `text to video from a long prompt` |
| SERP verdict | THIN. Google's own announcement and developer documentation rank beside news coverage and aggregator model pages; none treats the engine as what it is in production: a language model that answers in video, best at following a long written brief, prompt only, and billed after the render. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Gemini Omni Flash reasons about the brief before it renders, so it rewards a long, precise prompt. In the app it is prompt only: it cannot be fed your product photo, so it fits scenes where nothing has to match a real object (openers, moods, b-roll, explainer scenes) and hands over to an engine fed a start image when the product must be exact. It is billed on its maker's token meter, so the price arrives with the clip.

## The research gate, before any drafting

No body copy until `research/gemini-omni-flash-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Gemini Omni Flash video` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/gemini-omni-flash-guide/` with a date. For a China platform, the
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

- Google's own model page and prompting documentation for Gemini Omni Flash, dated
- App facts: create-a-video.md (the engine table and Engines priced after the run) and assets-library.md (The Video editor)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Google's own description of the model and its prompting guidance, from Google's own documentation only, including whether Google labels it a preview
- In the app, per the catalog and the help center: 4, 6 or 8 seconds (6 by default), 720p, widescreen 16:9 or vertical 9:16, optional sound, prompt only; the prompt box takes up to 2,500 characters
- Billing after the render: the engine list reads priced per token, the price line reads Priced once the clip is back, and the exact cost appears on the tab and in the Usage log; how a team keeps control (the daily spending limit per person, a short first test)
- Writing the brief as a shot: what moves, where the light comes from, how the camera behaves, the sound, the shape; four worked prompts: a vertical opener, a mood b-roll, an explainer scene, a seasonal background loop
- When to hand over: when the product must be exact, use an engine fed a start image, such as Veo 3.1 Fast from the same maker (start and last frame, or up to three reference pictures)
- Finishing in the Video editor: trims, texts, captions timed word by word, the cover, the network's format

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but Google for a capability
- Claim the app feeds it a picture or a clip
- Print a price or a per-second figure
- Name resellers or aggregator sites
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Engine facts table from the help center: length, resolution, shapes, sound, what it can be fed, how it is priced
- Hand-over table: the job, Gemini Omni Flash or an engine fed a start image, why
- Four prompt blocks
- Existing localized capture create-a-video-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-gemini-omni-flash-guide.webp`.
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

- Veo 3.1 Fast guide: `/resources/how-to/veo-3-1-fast-guide`
- animate a still product photo: `/resources/how-to/animate-product-photo`
- word-by-word video captions: `/resources/how-to/word-by-word-video-captions`
- text to video or image to video: `/resources/insights/text-to-video-vs-image-to-video`
- engines page: `/app/engines`
- AI video production: `/solutions/ai-production/video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Gemini Omni Flash Video: A Working Guide (40 chars) |
| Meta description | 152 chars | How to brief Gemini Omni Flash for social video: long prompts, 4 to 8 second clips, 16:9 or 9:16, prompt only, priced after the render. Four examples. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a prompt for Gemini Omni Flash video?
2. How long can a Gemini Omni Flash video be?
3. Can Gemini Omni Flash animate my product photo?
4. Why is the price of a Gemini Omni Flash clip shown after the render?
5. Does Gemini Omni Flash make sound?
6. When should I use Veo 3.1 Fast instead of Gemini Omni Flash?

## Notes

Google's own docs only. Gemini Omni Flash (Google) is in the app, prompt only and priced after the render. The H1 dropped product video: in the app the engine takes no picture, so it cannot show the actual product.

## Definition of done

- [ ] `research/gemini-omni-flash-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/gemini-omni-flash-guide.md` with `template: howto`
