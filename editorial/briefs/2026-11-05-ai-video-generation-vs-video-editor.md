---
brief_id: 90
publish_date: 2026-11-05
week: 04
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 90: AI video generation or a video editor: which job each one does

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Comparison (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | AI video generation or a video editor: which job each one does |
| Slug | `/resources/insights/ai-video-generation-vs-video-editor/` |
| Publishes as | insight, category Buying models |
| Output file | `output/ai-video-generation-vs-video-editor.md` |
| Research file | `research/ai-video-generation-vs-video-editor.md` |
| Hero image | `public/Images/insight-ai-video-generation-vs-video-editor.webp`, referenced as `/Images/insight-ai-video-generation-vs-video-editor.webp` |
| Primary query | `AI video generator vs video editor` |
| Secondary queries | `AI video generator or editor`, `do I need an AI video generator`, `generate video vs edit footage`, `AI video generation for brands` |
| SERP verdict | Vendors of each kind rank, each saying its kind is the practical one; the answer by job is missing: generation makes shots that do not exist, editing turns shots into a finished piece, and brand video needs both in sequence. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

Generation and editing are two stages of one job, not rival tools. Generation supplies shots you could not film; editing decides order, length, captions, sound and format per network. Compare them by job (product teaser, explainer, UGC-style cut, long video to shorts), show where each stage sits and what each costs by pricing model.

## The research gate, before any drafting

No body copy until `research/ai-video-generation-vs-video-editor.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI video generator vs video editor` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-video-generation-vs-video-editor/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Engine length ranges: the help center, create-a-video.md
- Category pricing models (per second, per seat), from published pages, attributed to the category and the date
- No trust or conversion figure without a stated method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A job table: job, generate, edit, both
- What generation does well and badly: shots that never existed, clips of a few seconds up to 30 depending on the engine; continuity across clips, exact on-screen text, real people
- What editing does: trims, order, captions, music, cover, a format per network
- In hubStudio, inside its facts: the Video studio (text to video, image to video, reference to video; up to 4K, up to 30 seconds on some engines, generated sound); the Video editor, free in the browser, framing a clip for an Instagram Reel, a TikTok or a Facebook reel with trims, speed, texts, word-by-word captions, music and a cover; Shorts autopilot for a long video cut into shorts
- Cost models by category: generation priced per second of clip, editing priced in time or seats; in hubStudio the render price shows before each run and the Video editor is free; no amounts
- When to brief the studio: a film with a story arc, broadcast, a launch

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any video generator, editor or vendor
- Present the Video editor as a desktop editing suite: it frames clips for social networks
- Print an amount
- Cite a time-saving figure without a method
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Job table
- Pipeline: generate, select, edit, publish, described for a diagram
- Cost model table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-video-generation-vs-video-editor.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A decision table and a when-to-choose section, no company named. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- long video to shorts guide: `/resources/how-to/long-video-to-shorts`
- Video tools: `/app/video-tools`
- all-in cost of AI video: `/resources/insights/all-in-cost-of-ai-video`
- video production service: `/services/design/video-production`
- word-by-word captions guide: `/resources/how-to/word-by-word-video-captions`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Video Generator or Video Editor: Which Job? (46 chars) |
| Meta description | 152 chars | An AI video generator makes shots that do not exist; an editor makes a finished video from shots. Which job each does, where they meet, and costs. (146 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the difference between an AI video generator and a video editor?
2. Do I need a video editor if I use an AI video generator?
3. Can an AI video generator make a full ad?
4. How long can AI-generated video clips be?
5. Is AI video generation cheaper than editing footage?
6. Can I add captions and music to an AI-generated video?

## Notes

Category Buying models. Compares ways of working, never a named tool.

## Definition of done

- [ ] `research/ai-video-generation-vs-video-editor.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-video-generation-vs-video-editor.md` with `template: insight`
