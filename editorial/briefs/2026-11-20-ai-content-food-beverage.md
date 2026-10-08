---
brief_id: 101
publish_date: 2026-11-20
week: 06
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 101: AI content for food and beverage brands

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
| Working H1 | AI content for food and beverage brands |
| Slug | `/resources/insights/ai-content-food-beverage/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-food-beverage.md` |
| Research file | `research/ai-content-food-beverage.md` |
| Hero image | `public/Images/insight-ai-content-food-beverage.webp`, referenced as `/Images/insight-ai-content-food-beverage.webp` |
| Primary query | `AI food photography` |
| Secondary queries | `AI food photography for brands`, `AI generated food images advertising rules`, `AI beverage product photography`, `AI packaging images food` |
| SERP verdict | Single-purpose food-photo apps and prompt pages from model resellers rank, aimed at restaurants and menus; none deals with the brand problems: packaging fidelity, appetite appeal that does not overstate the product, and the claims and labeling rules regulators set for food and alcohol advertising. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

In food and beverage the picture sits close to a claim: portion, ingredients, freshness. Generate the table, the light and the season; keep the pack and the product true; never show what is not in the box. With the regulators' own rules on food claims and alcohol advertising in the US and the EU, and two case studies.

## The research gate, before any drafting

No body copy until `research/ai-content-food-beverage.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI food photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-food-beverage/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FDA, FTC and TTB pages, each with its date
- EUR-Lex texts for 1924/2006 and 1169/2011
- Any market adoption figure only with a stated method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Appetite appeal without overstatement: what generation does well (steam, condensation, light, setting) and what it gets wrong (pack text, portion size, ingredients the product does not contain)
- A packaging fidelity checklist: label text, nutrition panel, color, shape
- US: FDA rules on food labeling and claims; the FTC on food advertising; TTB rules for alcohol advertising (27 CFR Parts 4, 5 and 7), each from its own pages
- EU: Regulation (EC) No 1924/2006 on nutrition and health claims and Regulation (EU) No 1169/2011 on food information, from EUR-Lex
- Case studies, only as written in src/data/case-studies.ts: 1834 Gin (a 46-second brand film made with AIGC and CGI, from zero assets to omnichannel content in three weeks) and L'infuseur (a seasonal library in two weeks, trained on the brand's aesthetic codes)
- The three ways to work: the studio for launches; the app for seasonal variants (Image studio edits from source pictures, the Lifestyle product scene skill)
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Show or describe an ingredient or portion the product does not contain
- Name a food or drink brand outside the case studies, or any tool vendor
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, generate, shoot, mixed
- Rules table by market: the rule, the regulator page, what it means for an image
- Case-study strip with two links
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-food-beverage.webp`.
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

- 1834 Gin case study: `/work/1834-gin`
- L'infuseur case study: `/work/linfuseur`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- packaging design service: `/services/design/packaging-merch-design`
- holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Food and Beverage Brands (39 chars) |
| Meta description | 152 chars | Where AI fits in food and beverage content: appetite appeal without overstatement, packaging fidelity, and the US and EU claims and alcohol ad rules. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can food brands use AI-generated images in ads?
2. Is AI food photography realistic enough for packaging?
3. What are the rules for food advertising images?
4. Can I use AI images to advertise alcohol?
5. How do I keep my packaging accurate in AI images?
6. Do I need to disclose AI-generated food images?

## Notes

Category Production. Regulators' own pages only; case studies 1834-gin and linfuseur as written.

## Definition of done

- [ ] `research/ai-content-food-beverage.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-food-beverage.md` with `template: insight`
