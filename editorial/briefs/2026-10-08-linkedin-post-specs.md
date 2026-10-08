---
brief_id: 63
publish_date: 2026-10-08
week: 00
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 63: LinkedIn image, video and document post specs for 2026

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
| Working H1 | LinkedIn image, video and document post specs for 2026 |
| Slug | `/resources/insights/linkedin-post-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/linkedin-post-specs.md` |
| Research file | `research/linkedin-post-specs.md` |
| Hero image | `public/Images/insight-linkedin-post-specs.webp`, referenced as `/Images/insight-linkedin-post-specs.webp` |
| Primary query | `linkedin image size 2026` |
| Secondary queries | `linkedin video specs`, `linkedin document post size`, `linkedin carousel pdf`, `linkedin company page banner size` |
| SERP verdict | Size-guide blogs and tool vendors rank; none cites the LinkedIn Help Center article it copies, most mix ad specs into organic posts (1200 x 627 is the link-preview spec, 1200 x 1200 the square ad), and the company cover is split three ways (1128 x 191, 4200 x 700, 1512 x 256) because the help page changed around August 2026. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Organic post specs (single image, multi-image, video, document), company page images, and ad specs (single image, video, document), from LinkedIn Help Center and LinkedIn Marketing Solutions pages only, each row with its source and the page age LinkedIn shows. Where two LinkedIn pages disagree (video length, MOV support), print both and say which is newer. Visible Reviewed October 8, 2026. Primary, so no deviation 7 disclaimer.

## The research gate, before any drafting

No body copy until `research/linkedin-post-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `linkedin image size 2026` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/linkedin-post-specs/` with a date. For a China platform, the
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

- LinkedIn Help Center: a527229 photos, a564109 media file types, a548372 video troubleshooting, a1311816 Page video specs, a518909 and a523054 documents, a563309 Page images, a568217 and a549049 profile images, a528176 post length
- LinkedIn Marketing Solutions help: a426534 single image ads, a424737 video ads, a493903 document ads, a726534 document ad best practices; business.linkedin.com ad spec pages as a second read

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Organic spec table with source column
- Ads spec table with source column
- Company page table with source column
- What crops in the feed on mobile: the 4:5 ceiling, multi-image layout, link-image padding, vertical ads mobile only, cover trimming
- Common failures from official help: document checklist, ProRes, iCloud, layered PDFs, mixed page sizes, logo on dark backgrounds
- How hubStudio publishes to LinkedIn profiles and company pages: pictures and carousels (2 to 8 slides), scheduling, Draft with AI, no video from the app yet; facts only from src/content/help/linkedin.md and hubstudio-positioning.md
- A dated changelog block

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite a third-party size guide as the source of any number
- Name a size-guide publisher, scheduler or design tool
- Claim hubStudio publishes documents, PDFs or video to LinkedIn
- Print a price or say credits
- Use an em dash or Han characters

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Organic spec table
- Company page and profile image table
- Ads spec table
- Changelog block
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-linkedin-post-specs.webp`.
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

- LinkedIn platform page: `/solutions/platforms/linkedin`
- social media design service: `/services/design/social-media`
- publishing page of the app: `/app/publish`
- presentation design service: `/services/design/presentation-design`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | LinkedIn Image, Video and Document Specs 2026 (45 chars) |
| Meta description | 152 chars | LinkedIn post, company page and ad specs for 2026, from LinkedIn Help Center pages only: image sizes, video limits, PDF documents, mobile crops. (144 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What is the best image size for a LinkedIn post in 2026?
2. What size is the LinkedIn company page banner?
3. How long can a LinkedIn video be?
4. What size should a LinkedIn carousel PDF be?
5. Can I post MOV files on LinkedIn?
6. What is the LinkedIn character limit for a post?
7. Can hubStudio publish carousels to a LinkedIn company page?

## Notes

Quarterly recheck due 2027-01-08 (watch row). Company cover changed to 1512 x 256 on the help page about two months before 2026-10-08.

## Definition of done

- [ ] `research/linkedin-post-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/linkedin-post-specs.md` with `template: spec`
