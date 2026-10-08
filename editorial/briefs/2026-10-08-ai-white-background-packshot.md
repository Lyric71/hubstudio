---
brief_id: 51
publish_date: 2026-10-08
week: 00
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 51: How to make a white-background packshot with AI

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
| Working H1 | How to make a white-background packshot with AI |
| Slug | `/resources/how-to/ai-white-background-packshot/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/ai-white-background-packshot.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/ai-white-background-packshot.md` |
| Research file | `research/ai-white-background-packshot.md` |
| Hero image | `public/Images/howto-ai-white-background-packshot.webp`, referenced as `/Images/howto-ai-white-background-packshot.webp` |
| Primary query | `AI product photo white background` |
| Secondary queries | `how to make amazon main image white background with AI`, `AI packshot white background Google Shopping requirements`, `white background product photo rejected Amazon AI generated`, `Shopify product image size white background` |
| SERP verdict | The SERP is tool vendor landing pages and blogs selling background removal; they restate Amazon secondhand, claim Google Shopping requires a white background (its Merchant Center page sets no background color), and none sets Amazon, Google and Shopify rules side by side, cites the 75 to 90 percent fill window, the January 31, 2027 size enforcement or Google's AI metadata rule. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

The main image is the one picture every listing must have, and the one with the strictest rules: no compliant main image and the listing can drop out of search or off Google surfaces. How to make one with AI that passes: the marketplace rules first, read from Amazon's, Google's and Shopify's own help pages and dated; then the method in the hubStudio app, starting from a photo of the real product (Edit an image), the E-commerce packshot skill, the transparent background option, the Image editor crop and save; then the checks.

## The research gate, before any drafting

No body copy until `research/ai-white-background-packshot.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI product photo white background` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-white-background-packshot/` with a date. For a China platform, the
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

- Amazon MAIN: pure white RGB 255, 255, 255; product as 85% of the image; 500 to 10,000 px longest side; 1,000+ enables zoom (G1881, US store, read 2026-10-08)
- Google image_link: 75 to 90 percent fill; at least 500 by 500, 1500 by 1500 recommended; 64 MP, 16 MB; AI metadata required (read 2026-10-08)
- Google: 500 by 500 for all products enforced from January 31, 2027 (Image too small help page)
- Shopify: up to 5000 by 5000 px or 25 MP, under 20 MB, 2048 by 2048 for square (read 2026-10-08)

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A rules table per marketplace: background, product fill, minimum size, what is banned (Amazon, Google Merchant Center, Shopify)
- One master file spec that clears all three, labeled as derived
- The step list in the app, using only help-center facts
- A prompt example block
- A pass/fail checklist
- Pointer to the existing insight on Tmall's white-background rule (/resources/insights/tmall-white-background-image-rules), and to the JD insight
- Google's AI image metadata rule and Amazon's synthetic performer tag scoped to photorealistic AI people
- Google's 500 by 500 enforcement date, January 31, 2027

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Do not claim the main image is the most rejected asset: no published rejection data
- Do not say Google Shopping requires a white background: the Merchant Center page sets none
- Do not do pixel arithmetic on the 85 percent fill: Amazon does not define how it is measured
- Do not describe the contents of the E-commerce packshot skill beyond the help center
- Do not claim 2,000 pixels for Amazon zoom
- No amounts, no competitor, no Tmall or JD values (pointers only)

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Hero image: howto-ai-white-background-packshot.webp
- Existing localized app captures: imageStudio, editorCrop, editorSave, skillsCatalog (src/data/app-shots.ts)
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-ai-white-background-packshot.webp`.
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

- Amazon platform page: `/solutions/platforms/amazon`
- Shopify platform page: `/solutions/platforms/shopify`
- ecommerce design service: `/services/design/ecommerce`
- the app's create page: `/app/create`
- Tmall white-background image rules: `/resources/insights/tmall-white-background-image-rules`
- JD image requirements: `/resources/insights/jd-image-requirements-vs-tmall`
- How-to guides: `/resources/how-to`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI White-Background Product Photos That Pass (44 chars) |
| Meta description | 152 chars | Make an AI product photo on a white background that passes Amazon, Google and Shopify: the rules side by side, the method in the app, the checks. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can I use an AI-generated main image on Amazon?
2. Does Google Shopping require a white background?
3. What size should a white-background product photo be?
4. How much of the frame should the product fill?
5. Do I have to label an AI product photo?
6. Can I turn a transparent PNG into a white-background image?
7. What about Tmall and JD white-background images?

## Notes

Watch row: quarterly recheck of the three marketplace pages due 2027-01-08; Google 500 by 500 enforcement on 2027-01-31.

## Definition of done

- [ ] `research/ai-white-background-packshot.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-white-background-packshot.md` with `template: howto`
