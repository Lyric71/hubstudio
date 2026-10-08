---
brief_id: 73
publish_date: 2026-10-20
week: 02
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 73: Pinterest pin specs for 2026

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
| Working H1 | Pinterest pin specs for 2026 |
| Slug | `/resources/insights/pinterest-pin-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/pinterest-pin-specs.md` |
| Research file | `research/pinterest-pin-specs.md` |
| Hero image | `public/Images/insight-pinterest-pin-specs.webp`, referenced as `/Images/insight-pinterest-pin-specs.webp` |
| Primary query | `pinterest pin size` |
| Secondary queries | `pinterest pin size 2026`, `pinterest video pin specs`, `pinterest carousel pin size`, `pinterest ad specs` |
| SERP verdict | UNCITED CONSENSUS. Scheduler and tool blogs agree on 1000 x 1500 at 2:3 and then invent named formats (long pins, infographic pins, idea pins) with sizes nobody sources; few link Pinterest's own Help Center or Business specs, and the retired formats are still listed as current. |
| Body length | 1,400 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Only what Pinterest itself publishes, in its Help Center and Business ads specs, dated, with retired formats flagged as retired. Then the plain production note: the hubStudio app makes and exports Pinterest files but does not publish to Pinterest, so you upload them yourself.

## The research gate, before any drafting

No body copy until `research/pinterest-pin-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `pinterest pin size` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/pinterest-pin-specs/` with a date. For a China platform, the
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

- Every ratio, size, file and length limit: Pinterest Help Center and Pinterest Business ad specs, dated, both check dates in the ledger
- hubStudio facts: create-an-image.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table for standard pins: ratio, recommended size, file types, file size limit, from Pinterest's own pages
- Video pins, carousel pins and collections ads: ratio, length and file limits from Pinterest Business specs
- What Pinterest says happens to pins taller than its recommended ratio (truncation in feed), quoted
- Formats that are retired or renamed, flagged as such with the Pinterest page that says so
- A visible Reviewed date and a dated changelog block at the foot
- Plainly: hubStudio does not publish to Pinterest; the files are made and downloaded, then pinned by you
- Making the files in hubStudio: in the Image studio pick a portrait Shape; in the Image editor use Free crop and read the pixel size shown, then set the width in Save (PNG, JPG or WEBP); for video, the Video editor's Vertical 9:16 frame

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog
- Claim hubStudio publishes or schedules to Pinterest, or has a Pinterest preset in the Image editor
- List invented pin types or sizes that Pinterest does not publish
- Print a hubStudio amount
- Name any competitor or tool
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: pin type, ratio, recommended pixels, file limits, source page
- Video and carousel table: ratio, length, file limits, source page
- Retired formats table: name, status, source
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-pinterest-pin-specs.webp`.
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

- Image editor: `/app/image-tools`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- Social media design service: `/services/design/social-media`
- Ecommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Pinterest Pin Specs for 2026 (28 chars) |
| Meta description | 152 chars | Pinterest standard, video and carousel pin sizes, ratios and file limits for 2026, read from Pinterest's own Help Center and Business specs. (140 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should a Pinterest pin be?
2. What aspect ratio does Pinterest use?
3. What happens if my pin is too tall?
4. What are the Pinterest video pin specs?
5. How many images can a Pinterest carousel have?
6. Can I schedule Pinterest pins from hubStudio?

## Notes

Spec page: Pinterest Help Center and Pinterest Business only. Watch row due 2027-01-20. There is no Pinterest platform page on the site: link the service pages instead.

## Definition of done

- [ ] `research/pinterest-pin-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/pinterest-pin-specs.md` with `template: spec`
