---
brief_id: 83
publish_date: 2026-10-29
week: 03
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 83: Google Merchant Center image requirements for 2026

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
| Working H1 | Google Merchant Center image requirements for 2026 |
| Slug | `/resources/insights/google-merchant-center-image-requirements/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/google-merchant-center-image-requirements.md` |
| Research file | `research/google-merchant-center-image-requirements.md` |
| Hero image | `public/Images/insight-google-merchant-center-image-requirements.webp`, referenced as `/Images/insight-google-merchant-center-image-requirements.webp` |
| Primary query | `google shopping image requirements` |
| Secondary queries | `google merchant center image size`, `google shopping image size 2026`, `merchant center image disapproved`, `google shopping lifestyle image requirements` |
| SERP verdict | Feed-tool vendors and agency blogs hold the top ten, each repeating one list of minimum size, file cap and formats with no date; a few report the 500 x 500 minimum from January 31, 2027, almost none separates image_link, additional_image_link and lifestyle_image_link, and none puts Google's AI image metadata rule next to the size rules. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

The page that maps every rule to the attribute it governs (image_link, additional_image_link, lifestyle_image_link) and to the disapproval it triggers, carries the January 31, 2027 minimum-size change with Google's own wording and date, and states Google's rule on AI-generated product images: keep the metadata the engine wrote. Read from Merchant Center Help only, with a visible Reviewed date.

## The research gate, before any drafting

No body copy until `research/google-merchant-center-image-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `google shopping image requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/google-merchant-center-image-requirements/` with a date. For a China platform, the
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

- Minimum, recommended and maximum image size, file size cap and formats: Merchant Center Help, the image_link attribute page (support.google.com/merchants/answer/6324350), read on check 1 and check 2
- The 500 x 500 pixel minimum from January 31, 2027: Google's own Merchant Center announcement or help text with its date; the vendor posts reporting it are leads, not sources
- Additional and lifestyle image rules: the Merchant Center Help pages for additional_image_link and lifestyle_image_link
- The generative AI rule and the DigitalSourceType value names: Merchant Center Help image requirements, and the IPTC NewsCodes digital source type vocabulary for the exact values
- Product fill or framing figures only if Google's own page prints one; the 75 to 90 percent figure on vendor blogs is cut unless Google states it

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A spec table per attribute (image_link, additional_image_link, lifestyle_image_link): minimum size, recommended size, file size cap, accepted formats, background rule
- The minimum-size change Google announced for January 31, 2027, in Google's words, with the date of the announcement and what happens to a product that misses it
- What gets an image disapproved, each tied to the Merchant Center Help page that states it: promotional overlays, watermarks, borders, placeholder or generic images, several products in a main image, an image that misrepresents the product
- Google's rule on generative AI images in Merchant Center, quoted: keep the IPTC DigitalSourceType tag (trainedAlgorithmicMedia, or the composite value for an AI background on a real photo) that marks the file, never strip it
- Google's own automatic image improvements in Merchant Center, only as Google describes them
- Any separate rule Merchant Center Help states for apparel and for variants
- How the hubStudio app fits, inside its facts: renders up to 4K in the Image studio, a transparent background on the ChatGPT Image engines, the free Image editor to crop; for a feed, download the original file, never the clean copy or the Image anonymizer output, because both remove the AI-generation markers Google asks you to keep
- A visible Reviewed date under the H1 and a dated changelog block at the foot

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite anything but Merchant Center Help, Google Ads Help or Google's own announcements for a number
- Recommend the Image anonymizer or Download clean copy for a file bound for a product feed
- Claim hubStudio connects to Merchant Center or submits a feed: it does neither
- Present the 2027 minimum as enforced before January 31, 2027
- Name a feed tool, a plugin, a photo app or an agency
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Spec table: attribute, minimum size, recommended size, file cap, formats
- Disapproval table: what Google rejects, the policy page that says so, the fix
- Dated box: the January 31, 2027 minimum-size change
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-google-merchant-center-image-requirements.webp`.
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

- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- Shopify product image sizes: `/resources/insights/shopify-product-image-sizes`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- eCommerce design service: `/services/design/ecommerce`
- Image studio: `/app/create`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Google Merchant Center Image Requirements 2026 (46 chars) |
| Meta description | 152 chars | Google Shopping image rules per attribute: sizes, file caps, formats, what gets disapproved, the 500 px minimum from January 2027 and the AI image rule. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What size should Google Shopping images be?
2. Why was my Google Merchant Center image disapproved?
3. Can I use AI-generated images in Google Shopping?
4. What is the minimum image size for Google Merchant Center in 2027?
5. Do Google Shopping images need a white background?
6. What is a lifestyle image in Merchant Center?

## Notes

Primary sources only: Merchant Center Help and Google's own announcements. Watch rows: the quarterly recheck due 2027-01-29, and the 500 x 500 enforcement date 2027-01-31 (rewrite the dated box once it is in force).

## Definition of done

- [ ] `research/google-merchant-center-image-requirements.md` written before drafting, every claim marked
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
- [ ] File saved as `output/google-merchant-center-image-requirements.md` with `template: spec`
