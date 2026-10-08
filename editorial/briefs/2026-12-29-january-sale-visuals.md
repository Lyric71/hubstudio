---
brief_id: 138
publish_date: 2026-12-29
week: 12
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 138: How to make New Year and January sale visuals

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | How-to (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | How to make New Year and January sale visuals |
| Slug | `/resources/how-to/january-sale-visuals/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/january-sale-visuals.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/january-sale-visuals.md` |
| Research file | `research/january-sale-visuals.md` |
| Hero image | `public/Images/howto-january-sale-visuals.webp`, referenced as `/Images/howto-january-sale-visuals.webp` |
| Primary query | `January sale images` |
| Secondary queries | `New Year sale banner`, `January sale social media posts`, `winter sale graphics`, `clearance sale visuals with AI` |
| SERP verdict | Template sites and stock libraries rank with festive banners; none treats January as its own season (the decorations gone, clearance and fresh-start themes), keeps the offer as editable text on a real product photo, or checks the was-price against the reference-price rules that bite hardest in a sale. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

January is not December with a new date. The decorations come down, the message turns to clearance and fresh starts, and the price claim carries more weight. Reuse the season's product photos: take the holiday scene out with an edit, set a clean winter or new-start setting, put the offer on as editable text in the Image editor, resize for every network, and check the was-price against the rules. Lunar New Year gets its own set for the markets that keep it.

## The research gate, before any drafting

No body copy until `research/january-sale-visuals.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `January sale images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/january-sale-visuals/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- Winter sale start dates: reuse the ledger citations of the holiday calendar piece (Service Public for France)
- FTC Guides Against Deceptive Pricing, 16 CFR Part 233, ecfr.gov
- EU prior-price rule: Article 6a of Directive 98/6/EC as inserted by Directive (EU) 2019/2161, EUR-Lex
- Lunar New Year 2027 date: an official calendar, such as the Hong Kong Observatory's Gregorian and lunar calendar tables
- App facts: create-an-image.md and assets-library.md (The Image editor)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The January calendar for the markets in view, from the holiday calendar piece: New Year's Day, the start of the winter sales in France and the UK, and Lunar New Year 2027 for the markets that keep it
- From December to January with one edit: take the holiday scene out of a product photo you already have and set a clean winter or new-start setting (Image studio, Edit an image, up to four source pictures, engine dependent); the product stays the product
- The offer as editable text, not baked in: the Image editor's Text panel (font, size, color, highlight behind the words, dark outline or soft shadow), so a percentage changes without a new run; when text inside the picture is wanted, link the readable text piece
- Resize for each network with the Image editor's Social panel and Crop formats, keeping the offer out of what the network covers
- Price claims, from the primary texts: the FTC Guides Against Deceptive Pricing (16 CFR Part 233) in the US, and the EU prior-price rule (the lowest price in the previous 30 days) in Europe; link the holiday visuals piece for the detail
- Lunar New Year as its own set for the markets that keep it, with color and symbol choices checked locally; link the localization piece
- A checklist before posting: product true, offer and dates right, was-price checked, words inside the safe area
- The price shown before each run; the Image editor is free

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Bake a sale percentage into a generated picture as the only version
- State a reference-price rule from a secondary source
- Name a template site, stock library or tool
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Calendar table: date, market, occasion, assets
- Before and after pair described in the ASSET BRIEF: the holiday scene, then the January scene, same product
- Existing localized captures image-editor-social.webp and image-editor-draw.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-january-sale-visuals.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A step sequence, a prompt example, a checklist the reader can use today. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- holiday visuals from product photos: `/resources/how-to/holiday-visuals-from-product-photos`
- holiday content calendar 2026: `/resources/insights/holiday-content-calendar-2026`
- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- localize one visual for several markets: `/resources/how-to/localize-visual-for-markets`
- Image editor: `/app/image-tools`
- social media design service: `/services/design/social-media`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make New Year and January Sale Visuals (45 chars) |
| Meta description | 152 chars | Turn holiday product photos into January sale visuals: take the decor out, add the offer as editable text, resize for each network, check the was-price. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I make January sale images?
2. What should a New Year sale post look like?
3. Can I reuse my holiday product photos for January sales?
4. How do I add a sale percentage to a product image?
5. What are the rules for showing a was price in a sale?
6. When do the January sales start in 2027?

## Notes

Help: create-an-image.md and assets-library.md (The Image editor). Distinct from the Black Friday piece: January's own season, the offer as editable text. Reuse the existing localized captures.

## Definition of done

- [ ] `research/january-sale-visuals.md` written before drafting, every claim marked
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
- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center
- [ ] File saved as `output/january-sale-visuals.md` with `template: howto`
