---
brief_id: 84
publish_date: 2026-10-30
week: 03
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 84: AI content for beauty and skincare brands

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
| Working H1 | AI content for beauty and skincare brands |
| Slug | `/resources/insights/ai-content-beauty-skincare/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-beauty-skincare.md` |
| Research file | `research/ai-content-beauty-skincare.md` |
| Hero image | `public/Images/insight-ai-content-beauty-skincare.webp`, referenced as `/Images/insight-ai-content-beauty-skincare.webp` |
| Primary query | `AI content for beauty brands` |
| Secondary queries | `AI generated skincare product images`, `AI beauty product photography`, `AI models in beauty ads`, `cosmetics advertising claims rules AI images` |
| SERP verdict | Tool vendors, translation firms and market-data houses rank with adoption talk and volume promises; none says where generated imagery is risky in beauty (the on-skin result, the before and after, the retouched complexion) or how the US, the EU, the UK and China each treat it. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

In beauty the line is not generated against shot, it is atmosphere against efficacy. Texture, packaging, ingredient stories, settings and casting can be generated; anything that shows what the product does to skin is a claim, and a claim needs the proof the regulator asks for. Map which assets sit on which side, market by market, with China as one market among four.

## The research gate, before any drafting

No body copy until `research/ai-content-beauty-skincare.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI content for beauty brands` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-beauty-skincare/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FDA: the cosmetic and drug definitions (FD&C Act section 201), from the FDA page on whether a product is a cosmetic, a drug or both
- EU 655/2013: the six common criteria (legal compliance, truthfulness, evidential support, honesty, fairness, informed decision-making), from EUR-Lex
- ASA: the filters ruling and its date, from asa.org.uk
- NMPA: the cosmetics efficacy claim evaluation standard and the date it took effect, from nmpa.gov.cn
- Any adoption or market figure only from a source with a stated method; a vendor survey without one is cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: asset (packshot, texture swatch, ingredient visual, model campaign, on-skin result, before and after) against how to make it and the claim risk
- US: the FDA line between a cosmetic claim and a drug claim, from FDA's own page; the FTC on substantiation
- EU: Regulation (EC) No 1223/2009, Article 20, and the common criteria for cosmetic claims in Commission Regulation (EU) No 655/2013, from EUR-Lex
- UK: the ASA ruling and guidance on beauty filters in ads, from asa.org.uk
- China as one market: the efficacy claim evaluation rules under the Cosmetics Supervision and Administration Regulation, from NMPA (Chinese-language first), with the China beauty piece linked for depth
- Synthetic people: Amazon's synthetic-performer disclosure and New York's synthetic performer law, each from its own page
- Case studies, only as written in src/data/case-studies.ts: Noyz (a model trained on fluid physics for the mist-to-milk transformation, one master film cut for every feed), age20 (product photography into on-model campaigns across Asian markets in hours), Shiseido RQ PYOLOGY (campaign visuals and brand video holding clinical credibility and luxury appeal in China's medical aesthetics market)
- The three ways to work, with Studio + app for a brand whose regulatory reviewer approves in Validation
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Present a generated on-skin result or before and after as acceptable proof of efficacy
- Invent a client, a quote or a result beyond case-studies.ts
- Name a beauty brand other than the case-study clients, or any tool vendor or agency
- Print a hubStudio amount
- Use an em dash or Han characters

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, generated or shot or mixed, claim risk, who signs off
- Market table: US, EU, UK, China, the rule, the regulator page, what it means for an image
- Case-study strip with three links
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-beauty-skincare.webp`.
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

- beauty content production in China: `/resources/insights/beauty-content-production-china`
- Noyz case study: `/work/noyz-mylk-de-parfum`
- age20 case study: `/work/age20`
- EU AI Act labeling for brand content: `/resources/insights/eu-ai-act-labeling-brand-content`
- AI image production: `/solutions/ai-production/image`
- Studio + app: `/studio/with-the-app`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Beauty and Skincare Brands (41 chars) |
| Meta description | 152 chars | Where AI fits in beauty content: what to generate, what must be shot, and how claims rules in the US, EU, UK and China treat on-skin results. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can beauty brands use AI-generated images in ads?
2. Can I show AI-generated before and after skincare results?
3. Do AI models in beauty ads need to be disclosed?
4. Is AI skin retouching allowed in cosmetics advertising?
5. What beauty content can AI make well?
6. How do cosmetics claims rules differ in the EU and the US?

## Notes

Category Production. Not legal advice: say so on the page. Regulators' own pages only for every rule; China is one market among four, not the frame.

## Definition of done

- [ ] `research/ai-content-beauty-skincare.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-beauty-skincare.md` with `template: insight`
