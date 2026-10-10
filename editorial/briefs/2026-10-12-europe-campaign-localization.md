---
brief_id: 64
publish_date: 2026-10-12
week: 01
slot: insight
slot_job: Insight
template: insight
cluster: Insights
content_type: Insight
status: not_started
---

# BRIEF 64: Localizing one campaign for Europe: what changes in France, Germany, Spain and Italy beyond the words

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | budget-holder |
| family | Insight (`template: insight` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | Localizing one campaign for Europe: what changes in France, Germany, Spain and Italy beyond the words |
| Slug | `/resources/insights/europe-campaign-localization/` |
| Publishes as | insight |
| Output file | `output/europe-campaign-localization.md` |
| Research file | `research/europe-campaign-localization.md` |
| Hero image | `public/Images/insight-europe-campaign-localization.webp`, referenced as `/Images/insight-europe-campaign-localization.webp` |
| Primary query | `campaign localization Europe` |
| Secondary queries | `localize marketing campaign for France Germany Spain Italy`, `advertising rules by country Europe`, `EU price reduction rule 30 days advertising`, `green claims directive advertising 2026`, `transcreation vs translation advertising` |
| SERP verdict | THIN. The top results are translation-vendor blogs and cultural-tips listicles (Germans value accuracy, Spaniards like social proof) with no legal text, no dates and no format detail; none walks one campaign through four markets line by line, and none mentions the EU green-claims rules that apply from late September 2026. |
| Body length | 2,300 words (body only, per the char-count rule) |
| Slot requirement | Decision or answer table in the first screen, FAQ block |

## The angle

Take one campaign (a hero visual, a 9:16 video, a price promotion and a sustainability line) and walk it through France, Germany, Spain and Italy, asset by asset, showing exactly what has to change and why, from the regulator's own text. The words are the smallest part: the price-reduction rule, the new ban on generic green claims, mandatory language and retouching labels, the legal sales calendar and casting all move. The ranking pages give culture tips; this page gives a change list a producer can brief from.

## The research gate, before any drafting

No body copy until `research/europe-campaign-localization.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `campaign localization Europe` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/europe-campaign-localization/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Prior-price rule for price reductions: Directive 98/6/EC Article 6a as inserted by Directive (EU) 2019/2161, EUR-Lex consolidated text, quote the 30-day reference period verbatim
- Green claims: Directive (EU) 2024/825, EUR-Lex, the date from which member states apply the measures and the list of banned practices (generic environmental claims, unverified sustainability labels)
- France: Law 94-665 of 4 August 1994 (Legifrance), Decree 2017-738 on retouched commercial photographs (Legifrance), Law 2023-451 on commercial influence (Legifrance); quote the label wording
- Germany: Preisangabenverordnung 2022 unit-price rule and UWG section 5a, gesetze-im-internet.de
- Spain: Ley 34/1988 General de Publicidad, BOE consolidated text; Italy: Codice del Consumo, Normattiva; sales-period rules from each government's own page (the French soldes rule is the arrêté of 27 May 2019 on Legifrance; the official January 2027 dates were not yet published on 2026-10-10, so print the date the rule gives and label it derived)
- EU AI Act Article 50 transparency date, EUR-Lex, only as a pointer to the labeling piece

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A one-screen answer table: asset (headline, price claim, green claim, model image, video, retail date) against the four markets, with what changes in each
- The EU-wide layer first: the prior-price rule for announced price reductions (lowest price in the previous 30 days, Price Indication Directive Article 6a as amended in 2019) and the ban on generic environmental claims under Directive (EU) 2024/825, with the date its national rules apply and which of the four markets had written it into national law at drafting (on 2026-10-10: Germany and Italy yes, from 27 September 2026; France and Spain not yet)
- France: the obligation to use French in advertising (Law 94-665 of 1994, the Toubon law), the 'photographie retouchée' label on commercial photos with a reshaped body silhouette, and the influencer law of 2023 on retouched or virtual images (write the label in French with its accents on the page)
- Germany: unit-price display under the Price Indication Ordinance and the unfair-competition act on misleading omissions, stated from gesetze-im-internet.de
- Spain and Italy: the general advertising law (Ley 34/1988) and the Consumer Code (Legislative Decree 206/2005), plus how sales periods are set (free in Spain, regional in Italy, fixed by ministerial order under the Commercial Code in France)
- Casting, setting and props as a production decision, not a translation one: what is reshot or regenerated per market and what stays shared
- Formats do not change by country on the same network, so the master stays one set of shapes: say so, to stop teams rebuilding formats per market
- AI-generated visuals in Europe: one paragraph pointing to the EU AI Act labeling piece for the transparency duties from August 2026
- How the work is organized: one master, per-market versions held together (Campaigns in the hubStudio app hold one launch's files under one name; Validation sends each market's version to its local reviewer)
- A plain statement that the page describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name, describe or allude to any competitor, translation vendor, agency or tool
- Publish a hubStudio rate, a studio price or any per-market cost figure for hubStudio
- Cite a law from a law-firm blog: every legal line comes from EUR-Lex, Legifrance, gesetze-im-internet.de, BOE or Normattiva
- Generalize about national character (no 'Germans prefer', 'Italians love') without a dated, sourced survey with a method
- Cite a count of markets hubStudio works in
- Use an em dash anywhere
- Write a summary or conclusion section

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Answer table: asset row by market column (France, Germany, Spain, Italy), what changes, five columns maximum
- Legal-line table: market, rule, source text, what it changes on the asset, check date
- Retail calendar table: market, sales period rule, 2026 to 2027 dates where published by the government
- A short change list a producer can paste into a brief, as a plain bulleted block
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-europe-campaign-localization.webp`.
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

- Campaign adaptation cost per market: `/resources/insights/campaign-adaptation-cost-per-market`
- Transcreation as a production line: `/resources/insights/transcreation-as-a-production-line`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- Ad creative service: `/services/design/ad-creative`
- Campaigns in the hubStudio app: `/app/campaigns`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Campaign Localization in Europe: 4 Markets Compared (51 chars) |
| Meta description | 152 chars | One campaign in France, Germany, Spain and Italy: price and green-claim rules, language and retouching labels, sales calendars, casting and formats. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. What changes when you localize an ad campaign for Europe?
2. Is it legal to run an English-only ad in France?
3. What is the 30-day prior price rule for discounts in the EU?
4. Can I still say a product is eco-friendly in EU ads in 2026?
5. Do I need a retouched photo label in France?
6. When are the official sales periods in France, Spain and Italy?
7. Do social media formats change from one European country to another?

## Notes

Budget-holder lead: open on the decision (what gets reshot, what gets relabeled, what stays). Write French legal labels with full accents in the body. Market words, not a count of markets.

## Definition of done

- [ ] `research/europe-campaign-localization.md` written before drafting, every claim marked
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
- [ ] File saved as `output/europe-campaign-localization.md` with `template: insight`
