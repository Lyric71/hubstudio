---
brief_id: 98
publish_date: 2026-11-17
week: 06
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 98: How to upscale and restore an old product photo

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
| Working H1 | How to upscale and restore an old product photo |
| Slug | `/resources/how-to/upscale-restore-product-photo/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/upscale-restore-product-photo.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/upscale-restore-product-photo.md` |
| Research file | `research/upscale-restore-product-photo.md` |
| Hero image | `public/Images/howto-upscale-restore-product-photo.webp`, referenced as `/Images/howto-upscale-restore-product-photo.webp` |
| Primary query | `upscale product photo AI` |
| Secondary queries | `AI image upscaler for product photos`, `restore old product photos`, `increase resolution of a product image`, `upscale image to 4K` |
| SERP verdict | Upscaler apps and freelancer gigs rank with multiplier claims (2x to 16x); none explains what an upscale can invent, when restoration crosses into changing the product, or which source to start from. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

An upscale re-renders; it does not recover. It can sharpen and clean, and it can also invent: label text, stitching, a new edge. So the method is control: start from the best source, ask for restoration and not change, check the label and the edges, keep the original. Taught with Upscale & restore in the Image studio.

## The research gate, before any drafting

No body copy until `research/upscale-restore-product-photo.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `upscale product photo AI` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/upscale-restore-product-photo/` with a date. For a China platform, the
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

- App behavior: create-an-image.md and assets-library.md
- Marketplace minimum sizes: link the spec pages rather than restating them without a source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- What upscaling does and what it invents; when to reshoot instead
- The Upscale & restore job: one source image, the prompt optional (the box reads Anything to add? (optional)); it re-renders the picture larger, sharper and free of compression noise without changing what is in it
- Engines that upscale in the app: Nano Banana 2, Nano Banana Pro, Seedream 4.5 and Seedream 5.0 Pro; Seedream renders natively up to 4K and is the pick for a 4K upscale
- Source images are resized in the browser to 1,536 pixels on the long side at most before they are sent, which also removes their metadata: what that means for the source you pick
- Improve with AI returns a careful restoration note for an upscale; the Catalog skill Upscaling and restoration
- The check after the run (label text, edges, texture, color), then the free Image editor for light and color
- Keep the original in the Assets Library and save the result as a new version
- The price shown before the run; a failed run is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Claim a multiplier (2x, 4x, 16x) for the app: it renders to sizes
- Promise the upscale recovers detail the original never held
- Name an upscaler app
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Table: engine, resolutions, upscale (from the help center)
- Check table: what to inspect after the upscale and the fix
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-upscale-restore-product-photo.webp`.
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

- Image studio: `/app/create`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- retouching at volume: `/resources/insights/retouch-at-volume-qa-pipeline`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Upscale and Restore an Old Product Photo (47 chars) |
| Meta description | 152 chars | Upscale a low-resolution product photo without inventing detail: pick the source, ask for restoration, check labels and edges, keep the original. (145 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I upscale a product photo without losing quality?
2. Can AI restore an old product photo?
3. Does AI upscaling add fake details?
4. How do I make a product image 4K?
5. Can I upscale a blurry product photo for Amazon?
6. What resolution should a product photo be?

## Notes

Help: create-an-image.md (Upscale & restore). Reuse the existing localized Image studio capture.

## Definition of done

- [ ] `research/upscale-restore-product-photo.md` written before drafting, every claim marked
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
- [ ] File saved as `output/upscale-restore-product-photo.md` with `template: howto`
