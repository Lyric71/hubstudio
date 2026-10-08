---
brief_id: 69
publish_date: 2026-10-15
week: 01
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 69: Stock photos or AI-generated images for product content: cost, rights, speed

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Comparison (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Stock photos or AI-generated images for product content: cost, rights, speed |
| Slug | `/resources/insights/stock-photos-vs-ai-images/` |
| Publishes as | insight, category Buying models |
| Output file | `output/stock-photos-vs-ai-images.md` |
| Research file | `research/stock-photos-vs-ai-images.md` |
| Hero image | `public/Images/insight-stock-photos-vs-ai-images.webp`, referenced as `/Images/insight-stock-photos-vs-ai-images.webp` |
| Primary query | `stock photos vs AI images` |
| Secondary queries | `are AI generated images copyrighted`, `stock photo license for commercial use`, `can I use AI images for my products`, `AI product images vs stock photography cost` |
| SERP verdict | PARTISAN. Nearly every ranking page is written by a generator or a stock seller arguing its own side; they compare generic website imagery, not product content, and none sets out the rights position from the copyright office's own text or the fact that neither route shows your actual product. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

For product content the real question is not stock or AI but whether the picture has to show your product. Stock cannot show your SKU at all; generation from a text prompt cannot either, but editing your own product photo into a new scene can. This page compares the three ways of working (licensed stock, generated from words, generated from your own product photo) on cost structure, rights, exclusivity, speed and fidelity, without naming any library or tool.

## The research gate, before any drafting

No body copy until `research/stock-photos-vs-ai-images.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `stock photos vs AI images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/stock-photos-vs-ai-images/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Stock license cost bands by license type, from published price pages collected on a stated date, category level only, no vendor named; cut if no clean method
- US Copyright Office, Copyright and Artificial Intelligence Part 2: Copyrightability (January 2025), copyright.gov, quote the human-authorship conclusion
- Thaler v. Perlmutter appellate decision (2025), from the court's own opinion, only if needed
- Per-run price structure of the app: described, never quantified

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Decision table in the first screen: ways of working (licensed stock, text-to-image, editing your own product photo) against cost structure, rights, exclusivity, speed, product fidelity
- Stock licensing explained at category level: royalty-free versus rights-managed, standard versus extended licenses, editorial-only images, indemnity caps, no exclusivity on most licenses
- Rights in generated images from the primary text: the US Copyright Office report on copyrightability (January 2025) and the human-authorship requirement; point to the copyright and AI page
- Labeling: generated images may carry disclosure duties (EU AI Act labeling piece for Europe)
- Fidelity: a generated product must match the real one (label, color, proportions); editing your own photo keeps the product and changes the scene
- In the hubStudio app: Image studio text to image or Edit an image with up to four source pictures (engine dependent), the price shown before every run, a failed run never charged, every render in History with its prompt and engine
- When stock still wins: real events, real places, documentary images, and anything that must be a photograph of the real world

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any stock library, generator, agency or competitor
- Quote a named library's price; category-level ranges only, attributed to category and date
- Print any hubStudio amount or per-image rate, or call the money anything but a prepaid balance in real currency
- State that AI images cannot be copyrighted in all cases; say what the Copyright Office says, as production practice, not legal advice
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: way of working by criterion, five columns maximum
- Rights table: who owns what, exclusivity, indemnity, disclosure, by way of working
- Cost structure table: what you pay for (license, per run, shoot), when, and what is never charged
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-stock-photos-vs-ai-images.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A decision table and a when-to-choose section, no company named. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Copyright and AI: `/resources/copyright-and-ai`
- Shoot it or generate it: `/resources/insights/shoot-it-or-generate-it`
- Product photography cost per SKU: `/resources/insights/product-photography-cost-per-sku`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- Create in the hubStudio app: `/app/create`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Stock Photos vs AI Images for Product Content (45 chars) |
| Meta description | 152 chars | Licensed stock, AI from a prompt, or AI from your own product photo: cost structure, rights, exclusivity, speed and product fidelity, compared. (143 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Is it cheaper to use AI images or stock photos?
2. Can I copyright an AI-generated image?
3. Can I use AI-generated images commercially?
4. Can AI show my actual product?
5. Are stock photos exclusive to my brand?
6. Do I have to label AI-generated product images?

## Notes

Comparison: ways of working only, no named company. Rights section carries the not-legal-advice line.

## Definition of done

- [ ] `research/stock-photos-vs-ai-images.md` written before drafting, every claim marked
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
- [ ] File saved as `output/stock-photos-vs-ai-images.md` with `template: insight`
