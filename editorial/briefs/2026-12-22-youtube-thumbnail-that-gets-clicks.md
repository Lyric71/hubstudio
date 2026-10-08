---
brief_id: 131
publish_date: 2026-12-22
week: 11
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 131: How to make a YouTube thumbnail people click

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
| Working H1 | How to make a YouTube thumbnail people click |
| Slug | `/resources/how-to/youtube-thumbnail-that-gets-clicks/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/youtube-thumbnail-that-gets-clicks.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/youtube-thumbnail-that-gets-clicks.md` |
| Research file | `research/youtube-thumbnail-that-gets-clicks.md` |
| Hero image | `public/Images/howto-youtube-thumbnail-that-gets-clicks.webp`, referenced as `/Images/howto-youtube-thumbnail-that-gets-clicks.webp` |
| Primary query | `how to make a YouTube thumbnail` |
| Secondary queries | `youtube thumbnail ideas that get clicks`, `youtube thumbnail design tips`, `AI youtube thumbnail`, `how to test youtube thumbnails`, `how much text on a youtube thumbnail` |
| SERP verdict | Template sites and creator blogs rank with style lists (big faces, arrows, red circles) and no evidence; none uses YouTube's own guidance and tools: impressions click-through rate as YouTube defines it, the A/B test of titles and thumbnails, the policy on misleading thumbnails, or how small the picture really shows. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A thumbnail is read at the size of a fingernail, next to a title, in under a second. Design for that size: one subject, one idea, a few words at most that add to the title, contrast that survives a dark and a light theme, nothing under the duration badge, and a promise the video keeps. Then let YouTube's own A/B test choose between three. Made in the Image studio, finished in the Image editor; the sizes and file rules live on the thumbnail specs page.

## The research gate, before any drafting

No body copy until `research/youtube-thumbnail-that-gets-clicks.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how to make a YouTube thumbnail` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/youtube-thumbnail-that-gets-clicks/` with a date. For a China platform, the
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

- YouTube Help pages on custom thumbnails, on impressions and click-through rate, and on the A/B test of titles and thumbnails, dated; reuse the brief 62 ledger rows
- Any typical click-through range only as YouTube itself publishes it, dated
- App behavior: create-an-image.md, assets-library.md (Image editor), skills.md, youtube.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Design for the real size: the small views where a thumbnail shows (search, home, suggested, phone), the duration badge in the bottom right corner (the hubStudio capture logged for brief 62, labeled an observation, not a YouTube rule), and a check at small size before export
- What earns a click: one subject, a face or the product large, three or four words at most that add to the title rather than repeat it, strong contrast, a series look a subscriber recognizes
- YouTube's own guidance from YouTube Help: custom thumbnails and the policy on misleading thumbnails, impressions and impressions click-through rate as YouTube defines them, and the A/B test of up to three titles and thumbnails (ledger rows from brief 62)
- Making it in the Image studio: a 16:9 shape; the ChatGPT Image engines for legible words; Edit an image with a frame of the video or a portrait as the source (up to four sources on the engines that take several); the Catalog skill Legible text inside an image
- Finishing in the Image editor, free: Crop with the Wide 16:9 format, Text for exact words, Picture for a logo, then save as a copy or a new version
- Prompt examples in prompt blocks: a talking-head video, a product reveal, a before and after, a list video, a tutorial
- Where it goes: the YouTube module hands the video, title and description to YouTube Studio, where the thumbnail is added by hand (the publishing steps in youtube.md)
- AI disclosure: YouTube treats AI used for a thumbnail as production assistance, not content to disclose (ledger, brief 62)
- Sizes and file rules: one pointer to the YouTube thumbnail specs page, no restatement

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Restate thumbnail sizes beyond one pointer to the specs page
- Publish a click-through benchmark that YouTube or a study with a method does not give
- Claim hubStudio uploads thumbnails or reads YouTube Analytics
- Name a thumbnail template site or a creator
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Small-size checklist table: what to check, at what size, the fix
- Thumbnail patterns table: video type, subject, words, what to avoid
- Five prompt blocks
- Existing localized captures create-an-image-studio.webp and youtube-publish.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-youtube-thumbnail-that-gets-clicks.webp`.
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

- YouTube thumbnail and video specs: `/resources/insights/youtube-video-thumbnail-specs`
- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- measuring creative performance: `/resources/insights/measure-creative-performance`
- YouTube help in hubStudio: `/help/youtube`
- Image editor: `/app/image-tools`
- short video service: `/services/design/short-video`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make a YouTube Thumbnail People Click (44 chars) |
| Meta description | 152 chars | Design a YouTube thumbnail for the size it is seen at: one subject, a few words that add to the title, nothing under the badge, then let YouTube test. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I make a YouTube thumbnail that gets clicks?
2. How many words should a YouTube thumbnail have?
3. Can I make a YouTube thumbnail with AI?
4. How do I test which YouTube thumbnail works best?
5. What makes a YouTube thumbnail misleading?
6. Do I need to disclose an AI-generated YouTube thumbnail?

## Notes

Help: create-an-image.md, assets-library.md, youtube.md. Sizes live on youtube-video-thumbnail-specs; this page is design and testing. Reuse existing localized captures.

## Definition of done

- [ ] `research/youtube-thumbnail-that-gets-clicks.md` written before drafting, every claim marked
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
- [ ] File saved as `output/youtube-thumbnail-that-gets-clicks.md` with `template: howto`
