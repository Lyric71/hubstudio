---
brief_id: 67
publish_date: 2026-10-14
week: 01
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 67: How to make a carousel post people swipe through, on Instagram and LinkedIn

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
| Working H1 | How to make a carousel post people swipe through, on Instagram and LinkedIn |
| Slug | `/resources/how-to/carousel-post-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/carousel-post-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/carousel-post-guide.md` |
| Research file | `research/carousel-post-guide.md` |
| Hero image | `public/Images/howto-carousel-post-guide.webp`, referenced as `/Images/howto-carousel-post-guide.webp` |
| Primary query | `how to make a carousel post` |
| Secondary queries | `instagram carousel size`, `linkedin carousel post how to`, `linkedin document post vs image carousel`, `how many slides in an instagram carousel` |
| SERP verdict | TOOL-LED. The top pages are carousel-maker vendors teaching their own editor, several dated 2021 to 2023; they treat a LinkedIn carousel as a PDF only and skip why people stop swiping (a first slide that does not promise the next, inconsistent crops between slides). |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Carousels fail on slide one and on the crop, not on the template. This guide starts with the swipe logic (a cover that promises, one idea per slide, a last slide that asks), then the two networks' own rules, and is honest about the LinkedIn split: a PDF document post and a multi-picture post are different formats, and the hubStudio app publishes the picture kind.

## The research gate, before any drafting

No body copy until `research/carousel-post-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `how to make a carousel post` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/carousel-post-guide/` with a date. For a China platform, the
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

- Instagram carousel item count, ratios and video length: Instagram Help Center, dated
- LinkedIn document post file types, page and size limits, and multi-image post limits: LinkedIn Help, dated
- hubStudio facts: instagram.md, linkedin.md, assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Swipe logic: cover slide, one idea per slide, consistent framing, a closing slide with one ask
- Instagram's own carousel rules (number of items, ratios, mixed photo and video) from the Instagram Help Center
- LinkedIn's document post (PDF) and multi-image post, from LinkedIn Help, with the difference stated plainly
- In hubStudio: Instagram and LinkedIn carousels of 2 to 8 slides when rendered; or pick slides from the Assets Library or upload them; each slide keeps its own pencil into the Image editor
- Image editor Social panel: Instagram Feed portrait 1080 x 1350 marked Best, the dashed Profile grid crop; LinkedIn Post, portrait 1080 x 1350; Apply the format, then Save and use it in the post
- LinkedIn takes JPG, PNG and GIF pictures, not WebP, up to 10 MB each, through hubStudio; Instagram pictures are turned into JPEG on the way out
- The LinkedIn module has no document format: a PDF carousel is posted on LinkedIn directly
- Picture versions: each render, edit or upload is kept as a version; Use this version brings a set back

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any carousel maker, design tool or competitor
- Claim hubStudio publishes LinkedIn document (PDF) posts
- Print engagement statistics for carousels unless the network's own page publishes them with a date
- Print a hubStudio amount
- Number the slides advice as cards
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: network, carousel kind, slides, ratio, file rules, how it is published (hubStudio or by hand)
- Slide plan table: slide role, what it says, what it shows
- Existing help captures: instagram-picture, instagram-picture-edit, image-editor-social
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-carousel-post-guide.webp`.
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

- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- LinkedIn post specs: `/resources/insights/linkedin-post-specs`
- LinkedIn platform page: `/solutions/platforms/linkedin`
- Publishing in the hubStudio app: `/app/publish`
- Social media design service: `/services/design/social-media`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make a Carousel Post People Swipe Through (48 chars) |
| Meta description | 152 chars | Build Instagram and LinkedIn carousels that hold the swipe: a cover that promises, one idea per slide, the right ratio, and the PDF or picture split. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I make a carousel post on Instagram?
2. How do I post a carousel on LinkedIn?
3. What size should carousel slides be?
4. How many slides can a carousel have?
5. Should a LinkedIn carousel be a PDF or images?
6. Can I mix photos and videos in one carousel?

## Notes

Help sources: instagram.md, linkedin.md, facebook.md (carousel of 2 to 8 when rendered, up to 10 pictures per post), assets-library.md.

## Definition of done

- [ ] `research/carousel-post-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/carousel-post-guide.md` with `template: howto`
