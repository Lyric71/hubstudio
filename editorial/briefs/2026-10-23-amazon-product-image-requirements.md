---
brief_id: 77
publish_date: 2026-10-23
week: 02
slot: spec
slot_job: Platform specs
template: spec
cluster: Platform specs
content_type: Spec page
status: not_started
---

# BRIEF 77: Amazon product image requirements for 2026

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
| Working H1 | Amazon product image requirements for 2026 |
| Slug | `/resources/insights/amazon-product-image-requirements/` |
| Publishes as | insight, category Platform specs, listed on the specs hub `/resources/specs` |
| Output file | `output/amazon-product-image-requirements.md` |
| Research file | `research/amazon-product-image-requirements.md` |
| Hero image | `public/Images/insight-amazon-product-image-requirements.webp`, referenced as `/Images/insight-amazon-product-image-requirements.webp` |
| Primary query | `amazon product image requirements` |
| Secondary queries | `amazon main image requirements white background`, `amazon image size for zoom`, `amazon product image rejected reasons`, `amazon secondary image rules`, `amazon image file name format` |
| SERP verdict | SECONDHAND. The SERP is photo-studio and tool blogs paraphrasing Seller Central, each with small disagreements (85 percent fill, minimum sizes, allowed formats) and few links to Amazon's own page; none separates the main image rules from category exceptions or explains the common suppression reasons from Amazon's text. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | Spec table with a source column, visible Reviewed date, dated changelog |

## The angle

Amazon's own Seller Central product image requirements, quoted and dated, with the main image, additional images and category exceptions kept apart, and a rejection table built from the reasons Amazon states. Visible Reviewed date, quarterly recheck.

## The research gate, before any drafting

No body copy until `research/amazon-product-image-requirements.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `amazon product image requirements` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/amazon-product-image-requirements/` with a date. For a China platform, the
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

- Every requirement: Amazon Seller Central help, Product image requirements page, quoted verbatim, URL and both check dates; if Seller Central gates the page behind a login, use the public Amazon seller help version and say which surface was read
- Category style guides: Amazon's own downloadable style guides, dated, only for the categories quoted
- hubStudio facts: create-an-image.md, skills.md, assets-library.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Main image table: background (pure white), fill of the frame, what may not appear (text, logos, watermarks, props, inset images), minimum and recommended pixels for zoom, formats, color mode, file naming, each quoted from Seller Central
- Additional images: what Amazon allows (lifestyle, infographics, size charts) and what it still forbids
- Category exceptions Amazon documents (apparel on model, for example), from Amazon's own pages
- Rejection and suppression reasons table: the reason as Amazon states it, the fix
- A visible Reviewed date and a dated changelog block at the foot
- Making compliant files in hubStudio: the E-commerce packshot skill in the Catalog shapes Improve with AI; ChatGPT Image 2 renders up to 4K with an opaque or transparent background; Edit an image changes the scene of your own product photo; the Image editor crops Square 1:1 and saves PNG or JPG at a chosen size
- One line on AI-generated product images pointing to Amazon's own policy wording if it exists at research time; otherwise say nothing about it

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Take any value from a third-party blog or tool page
- Name any seller tool, photo studio or competitor
- Claim hubStudio uploads to Amazon or connects to Seller Central
- Print a hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Main image spec table: rule, Amazon's value, source
- Additional images table: allowed, not allowed
- Rejection reasons table: reason, what Amazon says, the fix
- Changelog block, dated, updated in place
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-amazon-product-image-requirements.webp`.
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

- Amazon platform page: `/solutions/platforms/amazon`
- One product, three listings: `/resources/insights/amazon-tmall-jd-one-product-three-listings`
- AI white-background packshot: `/resources/how-to/ai-white-background-packshot`
- Ecommerce design service: `/services/design/ecommerce`
- Product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Amazon Product Image Requirements for 2026 (42 chars) |
| Meta description | 152 chars | Amazon main and additional image rules for 2026: white background, frame fill, zoom size, formats and rejection reasons, quoted from Seller Central. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What are Amazon's main image requirements?
2. What size should Amazon product images be?
3. Does the Amazon main image have to be on white?
4. Why was my Amazon image rejected or suppressed?
5. Can I add text or logos to Amazon product images?
6. Can I use AI-generated images on Amazon?

## Notes

Spec page: Amazon Seller Central help only. Watch row due 2027-01-23. AI image policy is covered in depth by the marketplace-policies piece later in the wave: keep it to one line here.

## Definition of done

- [ ] `research/amazon-product-image-requirements.md` written before drafting, every claim marked
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
- [ ] File saved as `output/amazon-product-image-requirements.md` with `template: spec`
