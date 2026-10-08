---
brief_id: 92
publish_date: 2026-11-09
week: 05
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 92: What Amazon and Google Shopping allow for AI-generated product images

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Insight (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | What Amazon and Google Shopping allow for AI-generated product images |
| Slug | `/resources/insights/marketplace-policies-ai-product-images/` |
| Publishes as | insight |
| Output file | `output/marketplace-policies-ai-product-images.md` |
| Research file | `research/marketplace-policies-ai-product-images.md` |
| Hero image | `public/Images/insight-marketplace-policies-ai-product-images.webp`, referenced as `/Images/insight-marketplace-policies-ai-product-images.webp` |
| Primary query | `AI generated product images Amazon policy` |
| Secondary queries | `Amazon AI generated images policy`, `Google Merchant Center AI generated images`, `contains-synthetic-performer Amazon`, `IPTC trainedAlgorithmicMedia Google Shopping`, `can I use AI images on Amazon` |
| SERP verdict | Amazon seller-service blogs and trade news rank on Amazon's synthetic-performer disclosure; Google's metadata rule is covered separately by feed specialists; nobody puts both in one table with what each asks of the file, plus the misrepresentation rules that apply whether or not AI was used. |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Both marketplaces allow AI images, both punish misrepresentation, and each asks something different of the file. Amazon wants a synthetic-performer keyword when a photorealistic AI person appears; Google wants the AI metadata kept. The practical result is one file workflow that writes one tag and keeps another. Primary pages only.

## The research gate, before any drafting

No body copy until `research/marketplace-policies-ai-product-images.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI generated product images Amazon policy` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/marketplace-policies-ai-product-images/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Amazon synthetic-performer requirement (keyword, field, scope, start date): sellercentral.amazon.com help, read on both check dates
- New York GBL section 396-b text and effective date: the New York State Senate's statute page
- Google's rule and the DigitalSourceType value names: Merchant Center Help and the IPTC vocabulary
- No enforcement count unless the marketplace itself publishes one

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A side-by-side table: what each marketplace allows, requires in the file, forbids, and the page that says so
- Amazon: the synthetic-performer disclosure, its exact keyword and metadata field, its scope and exclusions, the date it began, from Seller Central help; the main-image rules that still apply
- The New York synthetic performer law behind it (General Business Law section 396-b), from the statute, with its effective date
- Google: keep the IPTC DigitalSourceType metadata that marks an AI image, from Merchant Center Help; the misrepresentation policy
- What both forbid regardless of AI: an image that shows a different product, features it lacks or accessories not included
- File handling: keep the engine-written metadata; in hubStudio, download the original for a marketplace file, never the clean copy or the Image anonymizer output (both remove AI-generation markers); History keeps the prompt and engine of every render as a record
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite a seller-service blog or trade news as the source of a rule
- Name an Amazon consultancy, feed tool or vendor
- Advise stripping metadata from a marketplace file
- Claim hubStudio writes IPTC keywords, or connects to Seller Central or Merchant Center
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Side-by-side policy table
- File checklist: the tag to add, the tag to keep, what never to do
- A dated box per rule
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-marketplace-policies-ai-product-images.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Decision or answer table in the first screen, FAQ block. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- Google Merchant Center image requirements: `/resources/insights/google-merchant-center-image-requirements`
- content credentials in production: `/resources/insights/content-credentials-c2pa-in-production`
- disclosure audit trail per asset: `/resources/insights/disclosure-audit-trail-per-asset`
- Amazon platform page: `/solutions/platforms/amazon`
- US AI disclosure rules: `/resources/insights/us-ai-disclosure-rules-brands`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Product Images: Amazon and Google Shopping Rules (51 chars) |
| Meta description | 152 chars | Amazon and Google Shopping both allow AI product images. What each asks of the file: the synthetic-performer tag, the metadata to keep, what is banned. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can I use AI-generated images on Amazon?
2. Does Amazon require disclosure of AI-generated models?
3. Does Google Shopping allow AI-generated product images?
4. What is contains-synthetic-performer on Amazon?
5. Will Amazon remove my listing for AI images?
6. Should I remove AI metadata from product images?

## Notes

The marketplaces' own policy pages only. Watch row three months out (2027-02-09): both policies are new and likely to move.

## Definition of done

- [ ] `research/marketplace-policies-ai-product-images.md` written before drafting, every claim marked
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
- [ ] File saved as `output/marketplace-policies-ai-product-images.md` with `template: insight`
