---
brief_id: 96
publish_date: 2026-11-13
week: 05
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 96: AI content for fashion and apparel brands

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Industry page (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | AI content for fashion and apparel brands |
| Slug | `/resources/insights/ai-content-fashion-apparel/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-fashion-apparel.md` |
| Research file | `research/ai-content-fashion-apparel.md` |
| Hero image | `public/Images/insight-ai-content-fashion-apparel.webp`, referenced as `/Images/insight-ai-content-fashion-apparel.webp` |
| Primary query | `AI fashion product photography` |
| Secondary queries | `AI model photography clothing`, `flat lay to on-model AI`, `AI generated fashion models ecommerce`, `AI apparel product images` |
| SERP verdict | Flat-lay-to-model apps rank with speed and diversity claims; none deals with fit fidelity (drape, length, size on the body), color accuracy against returns, the disclosure rules that now reach synthetic models, or France's retouched-photo label. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

Fashion buyers send back what does not match. So the test for AI apparel content is fidelity, not looks: color, print scale, drape, length and fit on a stated size. Generate the model, the setting and the season; keep the garment true. With the disclosure rules that now reach synthetic models.

## The research gate, before any drafting

No body copy until `research/ai-content-fashion-apparel.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI fashion product photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-fashion-apparel/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Apparel return rates only from official statistics or a peer-reviewed study with method; otherwise cut
- Decree 2017-738 text and date in force: legifrance.gouv.fr
- Amazon synthetic-performer rule: Seller Central help; New York GBL 396-b: the statute

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Formats (on-model, flat lay, ghost mannequin, detail, video): which suit generation and which need a real capture
- A fidelity checklist: color, print scale, drape, hem length, fit on a stated size, logo and care label
- Disclosure: Amazon's synthetic-performer keyword, New York GBL section 396-b, and France's retouched-photo label (decree 2017-738 on Légifrance), stating from the text alone whether it reaches a generated model
- Case studies, only as written in src/data/case-studies.ts: the global fashion brand (an in-house AI studio, a custom virtual model library, product shots into styled looks, a team trained to run it) and Camper (Mediterranean identity reworked for China's Gen Z, a full China-ready set of images and video)
- Casting across sizes and ages as a production choice, without invented results
- The three ways to work: the studio builds model libraries; the app serves teams producing their own variants (edit with up to four source pictures, the Consistent character across images skill)

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Invent a client, a result or a figure
- Name a fashion brand outside the case studies, or any tool vendor or agency
- Claim the app trains models or holds a model library: that is the studio
- Cite an apparel return rate without a stated method
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Format decision table
- Fidelity checklist
- Disclosure table by market
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-fashion-apparel.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- global fashion brand case study: `/work/global-fashion-brand`
- Camper case study: `/work/camper`
- consistent character guide: `/resources/how-to/consistent-character-ai-images-video`
- product photography cost per SKU: `/resources/insights/product-photography-cost-per-sku`
- eCommerce design service: `/services/design/ecommerce`
- marketplace policies on AI product images: `/resources/insights/marketplace-policies-ai-product-images`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Fashion and Apparel Brands (41 chars) |
| Meta description | 152 chars | AI fashion content judged on fidelity: color, drape and fit on a stated size. Which formats to generate, which to shoot, and the synthetic model rules. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI put my clothes on a model?
2. Is AI fashion photography accurate enough for ecommerce?
3. Do I have to disclose AI models in fashion ads?
4. Can AI turn a flat lay into an on-model photo?
5. Will AI images increase returns?
6. Can AI show clothes on different body sizes?

## Notes

Category Production. No invented client: only global-fashion-brand and camper, as written.

## Definition of done

- [ ] `research/ai-content-fashion-apparel.md` written before drafting, every claim marked
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
- [ ] Any case reference taken from `src/data/case-studies.ts`, nothing invented
- [ ] File saved as `output/ai-content-fashion-apparel.md` with `template: insight`
