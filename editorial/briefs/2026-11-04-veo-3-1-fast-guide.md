---
brief_id: 88
publish_date: 2026-11-04
week: 04
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 88: Veo 3.1 Fast for product and social video

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
| Working H1 | Veo 3.1 Fast for product and social video |
| Slug | `/resources/how-to/veo-3-1-fast-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/veo-3-1-fast-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/veo-3-1-fast-guide.md` |
| Research file | `research/veo-3-1-fast-guide.md` |
| Hero image | `public/Images/howto-veo-3-1-fast-guide.webp`, referenced as `/Images/howto-veo-3-1-fast-guide.webp` |
| Primary query | `veo 3.1 prompts` |
| Secondary queries | `veo 3.1 fast vs veo 3.1`, `veo 3.1 prompt examples product`, `veo 3.1 first and last frame`, `veo 3.1 reference images` |
| SERP verdict | Reseller and aggregator blogs dominate with copy-paste prompt lists, and Google's own Cloud blog prompting guide ranks among them; few separate Fast from the full model, and none teaches product shots: label fidelity, packaging, the 8-second ceiling. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Veo 3.1 Fast is a short-clip engine: 4, 6 or 8 seconds. Write for that length: one action, one camera move, the sound named. For product work two controls matter most: a start and last frame, and up to three reference pictures. Built only from Google's own documentation and applied to products.

## The research gate, before any drafting

No body copy until `research/veo-3-1-fast-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `veo 3.1 prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/veo-3-1-fast-guide/` with a date. For a China platform, the
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

- Fast against standard model, durations, resolutions, reference image limit: Google AI for Developers and Vertex AI Veo model pages
- Prompt structure: Google Cloud's Veo 3.1 prompting guide and the Vertex AI video prompt guide
- App limits: create-a-video.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What Veo 3.1 Fast is and how it differs from the full Veo 3.1 model, as Google states it
- Google's prompt structure from its own Veo 3.1 prompting guide, rewritten with product examples
- Audio in the prompt as Google documents it: dialogue in quotes, effects and ambience named
- In the app, per the help center: 4, 6 or 8 seconds; 720p, 1080p or 4K; sound optional; a start and last frame, or up to 3 reference pictures, one or the other
- Three worked product prompts: a packshot push-in, a pour or texture shot, a vertical social opener
- Failure modes and fixes: label drift, extra hands, packaging that morphs
- The price per second shown before the render; on some engines sound costs more per second
- A pointer to the Veo 3 studio review for the studio's view of the engine family

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any non-Google source for a capability or a limit
- Name a reseller, an aggregator or a tool vendor
- Compare against engines that are not in the app
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Prompt anatomy table: element, product example, why it matters
- Settings table in the app: length, resolution, sound, inputs
- Three prompt blocks
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-veo-3-1-fast-guide.webp`.
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

- Veo 3 studio review: `/resources/insights/veo-3-studio-review`
- AI sound for video: `/resources/insights/ai-sound-for-video`
- engines page: `/app/engines`
- Kling 3.0 product video guide: `/resources/how-to/kling-3-product-video-guide`
- YouTube Shorts specs: `/resources/insights/youtube-shorts-specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Veo 3.1 Fast Prompts for Product and Social Video (49 chars) |
| Meta description | 152 chars | How to prompt Veo 3.1 Fast for product clips: shot structure, sound in the prompt, start and last frame, reference pictures, and three worked examples. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a good Veo 3.1 prompt?
2. What is the difference between Veo 3.1 and Veo 3.1 Fast?
3. How long can a Veo 3.1 video be?
4. Can Veo 3.1 use a start and end frame?
5. Does Veo 3.1 generate sound?
6. How do I keep my product consistent in Veo 3.1?

## Notes

Google's own documentation only. Only engines offered in the app are named.

## Definition of done

- [ ] `research/veo-3-1-fast-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/veo-3-1-fast-guide.md` with `template: howto`
