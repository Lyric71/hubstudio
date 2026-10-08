---
brief_id: 118
publish_date: 2026-12-08
week: 09
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 118: Google Performance Max and Demand Gen image specs for 2026

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
| Working H1 | Google Performance Max and Demand Gen image specs for 2026 |
| Slug | `/resources/insights/performance-max-demand-gen-image-specs/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/performance-max-demand-gen-image-specs.md` |
| Research file | `research/performance-max-demand-gen-image-specs.md` |
| Hero image | `public/Images/insight-performance-max-demand-gen-image-specs.webp`, referenced as `/Images/insight-performance-max-demand-gen-image-specs.webp` |
| Primary query | `Performance Max image specs` |
| Secondary queries | `Demand Gen image sizes`, `Performance Max asset requirements 2026`, `Google Ads image aspect ratios`, `Performance Max logo size`, `Demand Gen video specs` |
| SERP verdict | STALE AND MIXED. Agency and template blogs list ratios and pixel sizes copied from each other, blend Performance Max with Demand Gen and display, and rarely link Google Ads Help; none explains the image policy rules behind most disapprovals (overlaid text, collages, blurry or poorly cropped images) or what the two campaign types share. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Google Ads Help, read and dated, with Performance Max and Demand Gen side by side: the ratios each takes, the recommended and minimum pixels, the file limits, how many images an asset group or ad holds, the logos, the video lengths, and the image requirements that cause most disapprovals. Build one set that serves both campaign types. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/performance-max-demand-gen-image-specs.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `Performance Max image specs` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/performance-max-demand-gen-image-specs/` with a date. For a China platform, the
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

- Performance Max asset specs: Google Ads Help, dated on both check dates
- Demand Gen image and video specs: Google Ads Help, dated
- Image requirements and policy: Google Ads Help and Google Ads policies pages, dated
- hubStudio facts: create-an-image.md and assets-library.md in the help center

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Spec table, one row per asset: campaign type, ratio, recommended pixels, minimum pixels, file size limit, maximum count, source page; all from Google Ads Help
- Logos: square and landscape, sizes and limits, from Google Ads Help
- Video: the lengths and ratios each campaign type accepts, and what Google's own page says happens when an asset group has no video
- The image requirements and policies behind disapprovals: overlaid text, logos and buttons, collages, borders, blur, cropping, from Google Ads Help and the Google Ads policy pages
- One set for both: which ratios overlap, and where to keep the subject so each crop holds
- A visible Reviewed date and a dated changelog block at the foot
- How hubStudio fits, from the help center only: the Image studio renders at 16:9, 1:1, 4:5 and 9:16 among other shapes; a wide ratio the engines do not offer is cropped from a wider render in the free Image editor, which crops to any format; the Assets Library keeps every size of one visual together

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog or template site
- Mix display, App or Shopping campaign specs into the table without saying so
- Describe or compare the ad platform's own generative asset tools
- Claim hubStudio connects to Google Ads or uploads assets to it
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table with a source column, Performance Max and Demand Gen side by side
- Logo and video table
- Disapproval reasons table: the rule, what triggers it, the fix
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-performance-max-demand-gen-image-specs.webp`.
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

- Google Merchant Center image requirements: `/resources/insights/google-merchant-center-image-requirements`
- YouTube video and thumbnail specs: `/resources/insights/youtube-video-thumbnail-specs`
- resize one visual for every network: `/resources/how-to/resize-image-every-social-network`
- specs hub: `/resources/specs`
- ad creative service: `/services/design/ad-creative`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Performance Max and Demand Gen Image Specs 2026 (47 chars) |
| Meta description | 152 chars | Performance Max and Demand Gen image, logo and video specs for 2026 from Google Ads Help, side by side, with the image rules behind most disapprovals. (150 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What image sizes does Performance Max need?
2. What are the Demand Gen image specs?
3. How many images can a Performance Max asset group have?
4. What logo size does Google Ads require?
5. Why was my Performance Max image disapproved?
6. Can I use the same images for Performance Max and Demand Gen?

## Notes

Spec page: Google Ads Help and Google Ads policies only. Watch row due 2027-03-08. No value without its Google page.

## Definition of done

- [ ] `research/performance-max-demand-gen-image-specs.md` written before drafting, every claim marked
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
- [ ] File saved as `output/performance-max-demand-gen-image-specs.md` with `template: spec`
