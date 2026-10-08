---
brief_id: 54
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 54: Instagram post and carousel sizes for 2026

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Platform specs (`template: spec` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Instagram post and carousel sizes for 2026 |
| Slug | `/resources/insights/instagram-post-sizes-2026/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/instagram-post-sizes-2026.md` |
| Research file | `research/instagram-post-sizes-2026.md` |
| Hero image | `public/Images/insight-instagram-post-sizes-2026.webp`, referenced as `/Images/insight-instagram-post-sizes-2026.webp` |
| Primary query | `instagram post size 2026` |
| Secondary queries | `instagram carousel size`, `instagram portrait size 1080x1350`, `instagram profile grid crop` |
| SERP verdict | Template-driven size guides from design and scheduling tool blogs own the SERP, March to December 2025 and 2026; they repeat each other, cite no Instagram page, print a grid tile size Instagram never published, and none separates what the Instagram app accepts (1.91:1 to 3:4, 20 slides) from what the Content Publishing API accepts (4:5 to 1.91:1, JPEG, 8 MB, 10 items). |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

The feed post and carousel specs from Instagram's and Meta's own help, business and developer pages only: aspect ratios, the 1080-pixel width rule, carousel count, file types and limits, the profile grid (where Instagram publishes no tile ratio, the page says so), and the split between the Instagram app and the Content Publishing API that every publishing tool, hubStudio included, goes through. Reviewed October 8, 2026, visible on the page.

## The research gate, before any drafting

No body copy until `research/instagram-post-sizes-2026.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `instagram post size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/instagram-post-sizes-2026/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- A Western network's or marketplace's own help, business or policy pages are
  readable and therefore primary: no deviation 7 disclaimer, but a visible
  Reviewed date on the page and a `watch.csv` row three months out for the
  quarterly recheck. A China platform keeps deviation 7 where its rule text
  is gated.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Instagram Help Center: photos kept at original resolution between 320 and 1080 pixels wide when the ratio is between 1.91:1 and 3:4 (height 566 to 1440 at 1080 wide); larger photos sized down to 1080 wide
- Instagram Help Center: up to 20 photos and videos in one carousel post; the orientation chosen applies to every item
- Instagram Platform docs: JPEG only, 8 MB, 4:5 to 1.91:1, 320 to 1440 wide; carousels 10 items; 100 API-published posts per 24 hours
- Meta Ads Guide: Instagram feed image ads 4:5, 1440 x 1800, 30 MB; carousel ads 2 to 10 cards

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A spec table: format, ratio, recommended size, limits, source
- A crop and safe area section, including what Instagram does not publish about the profile grid
- Common upload failures from official help and the API error reference
- How to make each format in hubStudio: Image editor Social panel, publishing to Instagram professional accounts (feed, Story, Reel, carousels), from hubstudio-positioning.md and src/content/help/instagram.md
- A dated changelog at the foot (before the FAQ, since the file ends on the CTA)
- RedNote cover specs referenced as the China counterpart
- A visible "Reviewed October 8, 2026" line

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- No blog figure for any spec, including the grid tile size
- No deviation 7 disclaimer: these are primary readings of readable official pages
- No competitor or third-party tool named
- No hubStudio price or amount; publishing to Instagram costs nothing to use, renders are charged from the prepaid balance
- No claim that the app supports anything outside the help center (no API, no brand kit)

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Hero image: public/Images/insight-instagram-post-sizes-2026.webp
- Reuse the existing Image editor Social panel capture (help center) if the publish step wants an in-body image
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-instagram-post-sizes-2026.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Spec table with a source column, visible Reviewed date, dated changelog. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Meta platform page: `/solutions/platforms/meta`
- social media design service: `/services/design/social-media`
- publishing page of the hubStudio app: `/app/publish`
- RedNote note and cover specs: `/resources/insights/rednote-note-cover-specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Instagram Post Size 2026: Feed, Carousel, Grid (46 chars) |
| Meta description | 152 chars | Instagram post sizes from Instagram's own pages: ratios from 1.91:1 to 3:4, 1080 pixels wide, 20-slide carousels, and the tighter API limits. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the best size for an Instagram post in 2026?
2. Can I post a 3:4 photo on Instagram?
3. How many photos can you put in an Instagram carousel?
4. Do all slides in an Instagram carousel have to be the same size?
5. What size is the Instagram profile grid?
6. Why does my scheduled Instagram post get rejected?
7. What size should an Instagram Story be?

## Notes

Western platform spec: primary readings of Instagram Help Center, Instagram Platform developer docs and Meta Ads Guide pages, read 2026-10-08. Watch row due 2027-01-08 for the quarterly recheck.

## Definition of done

- [ ] `research/instagram-post-sizes-2026.md` written before drafting, every claim marked
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
- [ ] Reviewed date visible on the page, dated changelog present
- [ ] `watch.csv` row added three months out for the quarterly recheck
- [ ] File saved as `output/instagram-post-sizes-2026.md` with `template: spec`
