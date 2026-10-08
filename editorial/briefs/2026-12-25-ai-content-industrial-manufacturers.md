---
brief_id: 136
publish_date: 2026-12-25
week: 11
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 136: AI content for industrial and B2B manufacturers

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
| Working H1 | AI content for industrial and B2B manufacturers |
| Slug | `/resources/insights/ai-content-industrial-manufacturers/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-industrial-manufacturers.md` |
| Research file | `research/ai-content-industrial-manufacturers.md` |
| Hero image | `public/Images/insight-ai-content-industrial-manufacturers.webp`, referenced as `/Images/insight-ai-content-industrial-manufacturers.webp` |
| Primary query | `AI product images for manufacturers` |
| Secondary queries | `AI product photography for industrial equipment`, `AI images from CAD files`, `AI content for B2B manufacturing marketing`, `AI visuals for trade shows and dealer catalogs` |
| SERP verdict | Rendering studios and general AI image apps rank, aimed at consumer products; none deals with what a manufacturer has to protect: exact geometry from engineering files, safety signs and certification marks that must never be generated, documentation that falls under product law, and engineers who sign off. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

A manufacturer's product is specified to the millimeter, and its pictures sit close to a specification. Generate the setting: the plant, the site, the market, the season. Keep the machine true by working from CAD exports, renders or real photos, and never let a model draw a safety sign, a rating plate or a certification mark. With the EU and US rules that touch industrial visuals, the date the EU Machinery Regulation applies, and the case studies that fit.

## The research gate, before any drafting

No body copy until `research/ai-content-industrial-manufacturers.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI product images for manufacturers` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-industrial-manufacturers/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- EUR-Lex text of Regulation (EU) 2023/1230: its date of application and the article on instructions in digital form
- ISO 7010 and ANSI Z535: scope as stated on the standards bodies' own pages, no paywalled text quoted
- CE marking: the European Commission's own CE marking pages
- FTC Made in USA pages and 16 CFR Part 323 on ecfr.gov
- Any B2B buyer-behavior figure only from a survey with sample and method; none from a vendor's marketing

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Where generation helps and where it must not: application scenes, plant and site settings, trade-show and LinkedIn visuals, market versions; never geometry, dimensions, rating plates, safety signs or certification marks
- Working from engineering files: CAD exports and renders as source pictures, the studio route described on the manufacturers solution page, engineers approving every asset in Validation, a fix returned as a new version
- Safety signs and marks: standard safety symbols come from the standard (ISO 7010 internationally, ANSI Z535 in the US), placed from approved artwork, never generated; the CE marking shown only as the product carries it, per the European Commission's own pages
- EU: Regulation (EU) 2023/1230 on machinery, its date of application and what it says about instructions in digital form, from EUR-Lex
- US: the FTC on advertising claims and the Made in USA Labeling Rule (16 CFR Part 323), from the FTC's own pages and ecfr.gov
- Case references only as written in src/data/case-studies.ts: premium-suv (a manufacturer's new SUV shown in fifteen markets with generated environments and no vehicle logistics) and hisense (a self-serve content platform with custom-trained models, live in eight weeks); no industrial equipment client is in the case studies, so none is claimed
- The three ways to work, as the manufacturers page puts them: most manufacturers start with Studio only and add the app when marketing makes its own posts; the app has no DAM, PIM or ERP connector
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Describe generating a safety sign, rating plate or certification mark
- Name a manufacturer outside the case studies, a CAD or rendering vendor, or any tool
- Claim a DAM, PIM or ERP connector
- Print an amount; a case study figure runs only as written on its page
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, generate, from engineering files, shoot, mixed
- Rules table by market: the rule, the page, what it means for an image
- Case-study strip with two links
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-industrial-manufacturers.webp`.
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

- manufacturers solution page: `/solutions/manufacturers`
- premium SUV case study: `/work/premium-suv`
- HiSense case study: `/work/hisense`
- generated photos or 3D renders: `/resources/insights/generated-photos-vs-3d-renders`
- automotive content without shipping a car: `/resources/insights/automotive-content-without-shipping-a-car`
- LinkedIn post specs: `/resources/insights/linkedin-post-specs`
- ebook and digital reports service: `/services/design/ebook-digital-reports`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Industrial and B2B Manufacturers (47 chars) |
| Meta description | 152 chars | Where AI fits in manufacturer content: generate the setting, keep the machine true from CAD, never generate safety signs or marks. EU and US rules. (147 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can manufacturers use AI-generated product images?
2. Can AI make product images from CAD files?
3. Can AI images show safety signs or CE marks?
4. How do we keep technical details accurate in AI visuals?
5. What does the EU Machinery Regulation change for instructions?
6. Do we need to disclose AI-generated images in B2B marketing?

## Notes

Category Production. Regulators' and standards bodies' own pages only; case studies premium-suv and hisense as written; the manufacturers solution page is the main internal link.

## Definition of done

- [ ] `research/ai-content-industrial-manufacturers.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-industrial-manufacturers.md` with `template: insight`
