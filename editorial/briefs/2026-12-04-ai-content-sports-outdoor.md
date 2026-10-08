---
brief_id: 115
publish_date: 2026-12-04
week: 08
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 115: AI content for sports and outdoor brands

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
| Working H1 | AI content for sports and outdoor brands |
| Slug | `/resources/insights/ai-content-sports-outdoor/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-sports-outdoor.md` |
| Research file | `research/ai-content-sports-outdoor.md` |
| Hero image | `public/Images/insight-ai-content-sports-outdoor.webp`, referenced as `/Images/insight-ai-content-sports-outdoor.webp` |
| Primary query | `AI sports product photography` |
| Secondary queries | `AI images for outdoor gear brands`, `AI generated action shots for sports brands`, `AI product photography for sportswear`, `outdoor brand content production AI` |
| SERP verdict | Prompt pages and generic product-photo apps rank with stock-looking action shots; none covers what this category gets wrong (bodies in motion, gear worn correctly, technical detail on fabric and soles) or the claim rules that bite outdoor brands: performance claims that need substantiation, environmental claims, and showing a risky activity safely. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

Sports and outdoor sell performance, and the picture is part of the claim. Generate the place, the weather and the season; keep the product, its technical details and the way it is worn true; never show performance or protection the product does not deliver, or a risk the brand would not endorse. With the regulators' own rules on substantiation and environmental claims in the US, the EU and the UK, and three case studies.

## The research gate, before any drafting

No body copy until `research/ai-content-sports-outdoor.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI sports product photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-sports-outdoor/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC substantiation and Green Guides pages, each with its date
- EUR-Lex texts for Directive (EU) 2024/825 and Directive 2005/29/EC, with application dates
- ASA CAP Code safety rules, from asa.org.uk, dated
- Any market adoption figure only with a stated method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What generation does well (terrain, weather, light, season, crowds at a distance) and what it gets wrong (limbs and grip in motion, straps, buckles and laces, a helmet worn wrong, logos on moving fabric, sole patterns)
- A gear fidelity checklist: technical fabric texture, seams and zips, logo placement, colorways, sole and tread, fit on the body
- An asset list per channel: product page, marketplace, paid social, retail and catalog, seasonal campaigns
- US: the FTC on substantiation of objective product claims and the Green Guides (16 CFR Part 260) for environmental claims, each from ftc.gov
- EU: Directive (EU) 2024/825 on empowering consumers for the green transition (generic environmental claims) and the Unfair Commercial Practices Directive, from EUR-Lex, with application dates
- UK: the CAP Code rules on safety and harmful practices, from the ASA's own pages
- Case studies, only as written in src/data/case-studies.ts: Camper (a limited global library turned into a full set of product, lifestyle and video content for China's Gen Z), the European DIY retailer (thousands of basic product shots turned into seasonal lifestyle imagery across catalog, eCommerce and store) and the global fashion brand (a custom virtual model library, product shots into styled looks)
- The three ways to work: the studio for launches and athlete or ambassador content; the app for seasonal and terrain variants (Image studio edits from source pictures, the Lifestyle product scene skill, image to video from a packshot in the Video studio)
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Show protection, waterproofing or performance the product does not have
- Generate a real athlete's likeness or a team's marks
- Name a sports or outdoor brand outside the case studies, or any tool vendor
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, generate, shoot, mixed
- Rules table by market: the rule, the regulator page, what it means for an image
- Gear fidelity checklist
- Case-study strip with three links
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-sports-outdoor.webp`.
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

- Camper case study: `/work/camper`
- European DIY retailer case study: `/work/diy-european-retailer`
- global fashion brand case study: `/work/global-fashion-brand`
- AI content for fashion and apparel brands: `/resources/insights/ai-content-fashion-apparel`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Sports and Outdoor Brands (40 chars) |
| Meta description | 152 chars | Where AI fits in sports and outdoor content: terrain and season generated, gear kept true, and the US, EU and UK rules on performance and green claims. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can sports brands use AI-generated action images?
2. Is AI good enough for technical outdoor gear photos?
3. How do I keep logos and fabric detail accurate in AI images?
4. What are the rules for environmental claims in outdoor ads?
5. Can AI images show athletes using my product?
6. Do I need to disclose AI-generated sports images?

## Notes

Category Production. Regulators' own pages only; case studies camper, diy-european-retailer and global-fashion-brand as written.

## Definition of done

- [ ] `research/ai-content-sports-outdoor.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-sports-outdoor.md` with `template: insight`
