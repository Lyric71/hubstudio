---
brief_id: 108
publish_date: 2026-11-27
week: 07
slot: industry
slot_job: Industry page
template: insight
cluster: Industries
content_type: Industry page
status: not_started
---

# BRIEF 108: AI content for home and furniture brands

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
| Working H1 | AI content for home and furniture brands |
| Slug | `/resources/insights/ai-content-home-furniture/` |
| Publishes as | insight, category Production |
| Output file | `output/ai-content-home-furniture.md` |
| Research file | `research/ai-content-home-furniture.md` |
| Hero image | `public/Images/insight-ai-content-home-furniture.webp`, referenced as `/Images/insight-ai-content-home-furniture.webp` |
| Primary query | `AI furniture product photography` |
| Secondary queries | `AI room scenes for furniture`, `AI virtual staging furniture ecommerce`, `AI lifestyle images home decor`, `furniture fabric variants AI images`, `AI images for furniture catalog` |
| SERP verdict | Furniture-photo apps and AI staging vendors rank with cost multiples and satisfaction percentages that state no method; none deals with what returns hinge on in this category (true scale in the room, the exact fabric and finish, props that are not for sale) or with the claim rules on materials and origin that a room scene or caption can trip. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | Asset list per channel, the category's claim rules, a case reference only from src/data/case-studies.ts |

## The angle

Furniture is big, slow to ship and sold on how it looks in a room, so the room is where generation pays: one product photo, many rooms, seasons and styles per market, without a set build. The risks are scale, finish and props. Keep the piece true to size and fabric, never imply what is not in the box, and keep material and origin claims inside the rules. With the European DIY retailer case.

## The research gate, before any drafting

No body copy until `research/ai-content-home-furniture.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI furniture product photography` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-content-home-furniture/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- FTC Green Guides and the Made in USA rule: ftc.gov and eCFR, dated
- Directive (EU) 2024/825 text and dates of transposition and application: EUR-Lex
- UK CMA Green Claims Code: gov.uk, dated
- Marketplace rules on props and accessories: the Amazon and Google Merchant Center pages
- Any return-rate figure for furniture bought online only from a study with sample and method

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Where generation pays: room scenes, seasonal sets, style variants per market, colorway and fabric variants from one hero photo; where a shoot or a 3D model still wins (exact dimensions, configurators, hundreds of finishes)
- A fidelity checklist for the category: scale against the room and against a person, fabric weave and color, wood grain and finish, hardware, legs and joints, cushions and seams
- Props and the room: what appears in a scene that is not sold with the item, and the marketplaces' own rules on showing accessories not included
- An asset list per channel: product page (white background, room scene, detail, dimensions graphic), marketplace, Pinterest, Instagram, catalog print, paid social; with the spec pages linked
- Claim rules a room scene or caption can trip, from the regulators' own pages: US FTC Green Guides (16 CFR Part 260) on environmental claims and the Made in USA labeling rule (16 CFR Part 323); EU Directive (EU) 2024/825 on empowering consumers for the green transition, with its date of application; UK CMA Green Claims Code
- Case study only as written in src/data/case-studies.ts: the European DIY retailer (thousands of SKUs given lifestyle context from basic, often low-resolution product shots; seasonal promotional calendars covered without reshoots; catalog, eCommerce and store kept consistent)
- The three ways to work: the studio for a full collection or catalog; the app for seasonal rooms and variants (Image studio edits from up to four source pictures, the Lifestyle product scene skill, Upscale & restore for a low-resolution source)
- A line stating the piece describes production practice, not legal advice

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Show or imply a size, material, finish or included item the product does not have
- Repeat cost multiples or satisfaction percentages from vendor pages
- Name a furniture or home brand outside the case study, or any tool vendor
- Print an amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

- Decision table: asset, generate, shoot, 3D, mixed
- Fidelity checklist for furniture
- Asset list per channel
- Rules table by market: rule, regulator page, what it means for an image or caption
- Case-study strip with one link
- Feature image: see `../SPEC.md`, saved as `public/Images/insight-ai-content-home-furniture.webp`.
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

- European DIY retailer case study: `/work/diy-european-retailer`
- generated photos or 3D renders: `/resources/insights/generated-photos-vs-3d-renders`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- Pinterest pin specs: `/resources/insights/pinterest-pin-specs`
- eCommerce design service: `/services/design/ecommerce`
- localize one visual for several markets: `/resources/how-to/localize-visual-for-markets`

## CTA

Final section only. CTA label: **Send a brief**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI Content for Home and Furniture Brands (40 chars) |
| Meta description | 152 chars | Where AI fits in furniture and home content: room scenes and variants from one photo, true scale and fabric, props not for sale, and the claim rules. (149 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI create room scenes for furniture product photos?
2. How do I keep furniture to scale in AI images?
3. Can AI show my sofa in different fabrics?
4. Can I show props in a room scene that are not for sale?
5. Do AI furniture images increase returns?
6. What claims can I make about sustainable furniture in ads?

## Notes

Category Production. Regulators' own pages only; case study diy-european-retailer as written.

## Definition of done

- [ ] `research/ai-content-home-furniture.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-content-home-furniture.md` with `template: insight`
