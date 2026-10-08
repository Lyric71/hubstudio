---
brief_id: 110
publish_date: 2026-12-01
week: 08
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 110: How to make on-model photos from flat lays with AI

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
| Working H1 | How to make on-model photos from flat lays with AI |
| Slug | `/resources/how-to/on-model-photos-from-flat-lay/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/on-model-photos-from-flat-lay.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/on-model-photos-from-flat-lay.md` |
| Research file | `research/on-model-photos-from-flat-lay.md` |
| Hero image | `public/Images/howto-on-model-photos-from-flat-lay.webp`, referenced as `/Images/howto-on-model-photos-from-flat-lay.webp` |
| Primary query | `AI on model photos from flat lay` |
| Secondary queries | `flat lay to model AI`, `AI fashion model from product photo`, `turn flat lay into model photo`, `AI clothing on model generator`, `AI virtual model for apparel` |
| SERP verdict | Flat-lay-to-model apps rank with seconds-per-image and cost-per-image claims and a three-click workflow; none says how to shoot the flat lay so the garment survives, how to state size and fit in the prompt, how to keep one model across a collection, or how to check the result against the garment before it goes on a product page. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

The garment is the product; the model is generated. So the work is in the inputs and the check: a flat lay shot for color and detail, close-ups fed as their own pictures, a prompt that states the model, the size worn and what of the garment must not change, one model reference reused across the collection, and a side-by-side check before upload. Taught with Edit an image in the Image studio.

## The research gate, before any drafting

No body copy until `research/on-model-photos-from-flat-lay.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI on model photos from flat lay` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/on-model-photos-from-flat-lay/` with a date. For a China platform, the
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

- App behavior: create-an-image.md, create-a-video.md, skills.md and assets-library.md in the help center
- Any conversion or return figure for on-model against flat-lay images only from a study with sample and method; otherwise cut

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Shooting the flat lay for this use: even light, true color with a reference card, the whole garment uncropped, close-ups of print, label, texture and hardware; front and back
- The source pack: flat lay, a detail close-up and a model reference picture (up to four source pictures on engines that take them: ChatGPT Image 2 and 2.5, Nano Banana 2 and Pro, Seedream 4.5 and 5.0 Pro); source images are resized to 1,536 pixels on the long side, so a print detail goes in as its own picture
- The prompt: the model (build, age range, pose, setting), the size worn and the fit intended, then what stays (color, print scale, length, neckline, buttons, logo), one change per pass
- The same model across a collection: one reference picture reused and the Consistent character across images skill
- Back views, details and a short clip: the same model reference, then image to video in the video studio for a few seconds of movement
- The fit and color check: a table comparing the result with the flat lay (color, print scale, length, drape, details), and the fix for each
- Marketplace rules for apparel images: link the Amazon and Shopify spec pages rather than restating them
- Disclosure for synthetic models: point to the fashion industry piece for the rules
- Case reference only as written in src/data/case-studies.ts: the global fashion brand (an automated workflow turning flat product shots into styled, on-model imagery; a virtual model library for its target demographics)

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Promise exact fit or drape from a flat lay
- Name a flat-lay-to-model app or tool vendor
- Repeat seconds-per-image or cost-per-image claims
- Print a price or any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Flat lay shooting checklist
- Source pack table: picture, why it is there
- Prompt blocks: front view, back view, a second pose with the same model
- Fit and color check table
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-on-model-photos-from-flat-lay.webp`.
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

- AI content for fashion and apparel brands: `/resources/insights/ai-content-fashion-apparel`
- global fashion brand case study: `/work/global-fashion-brand`
- consistent character in AI images and video: `/resources/how-to/consistent-character-ai-images-video`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make On-Model Photos from Flat Lays with AI (50 chars) |
| Meta description | 152 chars | Turn flat lays into on-model photos with AI: shoot the flat lay for color and detail, state size and fit, keep one model across a collection, check it. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI put my clothes on a model from a flat lay photo?
2. How do I keep the garment color accurate on an AI model?
3. How do I use the same AI model for a whole collection?
4. Can AI show how a garment fits?
5. Can I use AI on-model photos on Amazon?
6. Do I need to disclose AI-generated models?

## Notes

Help: create-an-image.md (Edit an image, sources), create-a-video.md, skills.md. Reuse the existing localized Image studio capture. Distinct from brief 96 (fashion industry page): this is the method.

## Definition of done

- [ ] `research/on-model-photos-from-flat-lay.md` written before drafting, every claim marked
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
- [ ] File saved as `output/on-model-photos-from-flat-lay.md` with `template: howto`
