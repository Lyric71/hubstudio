---
brief_id: 114
publish_date: 2026-12-03
week: 08
slot: comparison
slot_job: Comparison
template: insight
cluster: Comparisons
content_type: Comparison
status: not_started
---

# BRIEF 114: A freelancer, an agency or an app for product photos

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
| Working H1 | A freelancer, an agency or an app for product photos |
| Slug | `/resources/insights/freelancer-agency-or-app-product-photos/` |
| Publishes as | insight, category Buying models |
| Output file | `output/freelancer-agency-or-app-product-photos.md` |
| Research file | `research/freelancer-agency-or-app-product-photos.md` |
| Hero image | `public/Images/insight-freelancer-agency-or-app-product-photos.webp`, referenced as `/Images/insight-freelancer-agency-or-app-product-photos.webp` |
| Primary query | `who should make my product photos` |
| Secondary queries | `hire a product photographer or use AI`, `product photography agency vs freelancer`, `AI product photo app vs photographer`, `outsource product photography` |
| SERP verdict | Marketplace gig pages, photographer blogs and app landing pages rank, each arguing for itself; none decides by the catalog (SKU count, how often it changes, how exact the product must be) or covers what decides the second year: who owns the files, how revisions are billed, and who answers when a marketplace rejects an image. |
| Body length | 2,000 words (body only, per the char-count rule) |
| Slot requirement | A decision table and a when-to-choose section, no company named |

## The angle

The choice follows the catalog, not the price list. A freelancer fits a short run with a clear shot list; an agency fits a launch that needs direction, models and sets; an app fits a catalog that changes every week and a team that can judge its own output. Most brands end up mixing them: shoot the hero once, make the variants in an app, call the agency for the launch. Compared by job, contract and risk, never by firm.

## The research gate, before any drafting

No body copy until `research/freelancer-agency-or-app-product-photos.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `who should make my product photos` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/freelancer-agency-or-app-product-photos/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Photographer pay: the official occupational wage survey for photographers in at least one market, with its year and method
- Per-image and day rates: published rate cards by category, dated, logged in the ledger (reuse the logged per-asset card rows with their labels)
- Any outsourcing share or satisfaction figure only from a survey with sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: criterion (SKU count, refresh rate, exactness required, models or sets, internal skill, timeline, revision rounds) against freelancer, agency, app, and a mix
- Cost by pricing model, by category and date only: day rates, per-image rates, project fees, pay-per-run; published rate cards and official wage data, never a named firm
- The contract side: who owns the files and the raw shoot, usage terms and territory, model releases, revision rounds, reshoot clauses
- Risk: who fixes a marketplace rejection, who keeps the source files, what happens when the freelancer is unavailable
- The mix in practice: the hero shot once, variants and seasonal scenes made from it in the app
- How hubStudio fits, inside its facts: the app (Image studio edits from source pictures, the E-commerce packshot and Lifestyle product scene skills, the Assets Library with versions, Validation for approvals) or the studio for launches, presented as Use the app, Studio + app, Studio only
- Pointers to the per-SKU cost piece and to the week of social content cost piece

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a freelance marketplace, agency, photographer or app
- Quote a rate card that is not dated and attributed to its category
- Print a hubStudio amount
- Present the studio as the only serious option
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table by criterion
- Pricing model table: how each charges, what drives the bill, what is extra
- Contract checklist table
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-freelancer-agency-or-app-product-photos.webp`.
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

- product photography cost per SKU: `/resources/insights/product-photography-cost-per-sku`
- the cost of a week of social content: `/resources/insights/cost-of-social-content-week`
- in-house studio or outsourced production: `/resources/insights/in-house-studio-vs-outsourced-production`
- shoot it or generate it: `/resources/insights/shoot-it-or-generate-it`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Freelancer, Agency or App for Product Photos (44 chars) |
| Meta description | 152 chars | Who should make your product photos: decide by SKU count, refresh rate and exactness, then by contract, file ownership and who fixes a rejection. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Should I hire a freelance photographer or an agency for product photos?
2. Is an AI app good enough for product photos?
3. How much does product photography cost per image?
4. Who owns the product photos a photographer takes?
5. Can I mix photography and AI for one catalog?
6. What should a product photography contract include?

## Notes

Category Buying models. Compares ways of working, never a named firm or tool. Distinct from cost-of-social-content-week (social, cost) and product-photography-cost-per-sku (cost): this one decides who, by catalog and contract.

## Definition of done

- [ ] `research/freelancer-agency-or-app-product-photos.md` written before drafting, every claim marked
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
- [ ] File saved as `output/freelancer-agency-or-app-product-photos.md` with `template: insight`
