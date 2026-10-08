---
brief_id: 116
publish_date: 2026-12-07
week: 09
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 116: How product images get picked in AI shopping answers

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
| Working H1 | How product images get picked in AI shopping answers |
| Slug | `/resources/insights/product-images-ai-shopping-answers/` |
| Publishes as | insight |
| Output file | `output/product-images-ai-shopping-answers.md` |
| Research file | `research/product-images-ai-shopping-answers.md` |
| Hero image | `public/Images/insight-product-images-ai-shopping-answers.webp`, referenced as `/Images/insight-product-images-ai-shopping-answers.webp` |
| Primary query | `product images in AI shopping results` |
| Secondary queries | `how AI shopping assistants choose product images`, `Google AI Mode shopping product images`, `ChatGPT shopping product feed image`, `optimize product images for AI search`, `product structured data image AI Overviews` |
| SERP verdict | GEO agencies and feed-tool blogs rank with checklists that assert image ranking factors no assistant has published; none separates what is documented (the feed fields, the structured data, the image rules each surface reads) from what is guessed, or says where an answer's picture actually comes from. |
| Body length | 2,200 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

No AI shopping surface publishes how it weighs a picture. What is documented is where the picture comes from: the merchant feed, the product page's structured data, the image rules each program sets. So the work is plumbing, not tricks: one main image that meets every surface's rules, additional images that answer the questions a shopper asks, the same picture in the feed and on the page, and nothing that misrepresents the product. Primary documentation only, and a plain line on what is not known.

## The research gate, before any drafting

No body copy until `research/product-images-ai-shopping-answers.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `product images in AI shopping results` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/product-images-ai-shopping-answers/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Google Merchant Center Help image requirements and Search Central product structured data docs, each dated on both check dates
- OpenAI's product feed specification, dated
- Microsoft Merchant Center image requirements, dated
- Any share-of-shoppers figure for AI shopping only from a survey with sample, method and funder stated; a figure from a party selling AI search services labeled a market claim

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- An answer table in the first screen: surface (Google's AI shopping experiences in Search, ChatGPT shopping, Microsoft Copilot shopping, and any other assistant only if it publishes merchant documentation), where its product data and images come from, the image fields it documents, the source page
- Google: Merchant Center image_link and additional_image_link requirements, and Search Central's product structured data image property, from Google's own help and developer pages
- OpenAI: the merchant product feed specification and its image fields, from OpenAI's own documentation, dated
- Microsoft: Microsoft Merchant Center image requirements, from Microsoft's own help
- A documented versus not documented table: what each maker says it reads, and what no maker has published (any weighting of image quality, style or count)
- What a merchant controls: a compliant main image, additional images by question (scale, use, detail, what is in the box), consistency between feed and page, alt text and file names as page hygiene
- Misrepresentation rules apply whatever the surface: link the marketplace policy piece
- How hubStudio fits, inside its facts: the studio for catalog image programs; in the app, packshots and lifestyle scenes from source pictures, the Image editor to crop to each surface's shape, the Assets Library with versions

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- State an image ranking factor no maker has published
- Cite a GEO agency, feed tool or SEO blog as the source of a rule
- Promise visibility in any AI answer
- Claim hubStudio connects to Merchant Center or any merchant feed
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table by surface
- Documented versus not documented table
- Image set plan: the main image and the additional images by shopper question
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-product-images-ai-shopping-answers.webp`.
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

- Google Merchant Center image requirements: `/resources/insights/google-merchant-center-image-requirements`
- marketplace policies for AI product images: `/resources/insights/marketplace-policies-ai-product-images`
- AI search content systems: `/resources/insights/ai-search-content-systems`
- GEO vs SEO: `/resources/insights/geo-vs-seo`
- multi-angle product set from one photo: `/resources/how-to/multi-angle-product-photos-from-one-photo`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Product Images in AI Shopping Answers (37 chars) |
| Meta description | 152 chars | Where AI shopping answers get their product pictures: feed fields, structured data and image rules per surface, what is documented and what is guessed. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do AI shopping assistants choose product images?
2. Does Google AI Mode use my Merchant Center images?
3. How do I get my products into ChatGPT shopping results?
4. Do image quality or style affect AI shopping rankings?
5. Should my feed image match the image on my product page?
6. Can I use AI-generated product images in shopping feeds?

## Notes

Makers' own documentation only. Watch row three months out (2027-03-07): these surfaces and their feed specs are new and moving. Distinct from ai-search-content-systems and geo-vs-seo (text and pages): this one is the picture.

## Definition of done

- [ ] `research/product-images-ai-shopping-answers.md` written before drafting, every claim marked
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
- [ ] File saved as `output/product-images-ai-shopping-answers.md` with `template: insight`
