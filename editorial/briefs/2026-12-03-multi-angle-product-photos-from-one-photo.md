---
brief_id: 113
publish_date: 2026-12-03
week: 08
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 113: How to make a multi-angle product set from one photo

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
| Working H1 | How to make a multi-angle product set from one photo |
| Slug | `/resources/how-to/multi-angle-product-photos-from-one-photo/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/multi-angle-product-photos-from-one-photo.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/multi-angle-product-photos-from-one-photo.md` |
| Research file | `research/multi-angle-product-photos-from-one-photo.md` |
| Hero image | `public/Images/howto-multi-angle-product-photos-from-one-photo.webp`, referenced as `/Images/howto-multi-angle-product-photos-from-one-photo.webp` |
| Primary query | `AI product photos from different angles` |
| Secondary queries | `generate product image from another angle`, `AI product photo side view from front photo`, `multiple angles of a product from one image`, `AI product image set for listing` |
| SERP verdict | App landing pages promise every angle from a single upload and show clean demos; none says what the engine cannot know (the back, the base, the side you never shot), how to feed it a second view, or when a generated angle stops being the real product on a marketplace listing. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

One photo shows one side. An engine asked for another angle has to guess what it never saw, so a believable three-quarter view is easy and an accurate back is not. The method: plan the set by what each angle must prove, generate only the angles the source supports, feed a second photo for the sides it does not, keep the product identical across the set, and check every frame against the real thing before a marketplace sees it.

## The research gate, before any drafting

No body copy until `research/multi-angle-product-photos-from-one-photo.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI product photos from different angles` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/multi-angle-product-photos-from-one-photo/` with a date. For a China platform, the
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

- App behavior: create-an-image.md, create-a-video.md, skills.md, campaigns.md and assets-library.md in the help center
- Marketplace image rules: link the existing spec and policy pages; no rule restated without its marketplace page
- Any figure on how many images a listing should carry only from the marketplace's own help page, dated

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A planning table: angle (front, three-quarter, side, back, top, detail, in use), what the source photo supports, what the engine would have to invent, and the call (generate, feed another photo, or shoot)
- Edit an image with up to four source pictures on the engines that take them (ChatGPT Image 2 and 2.5, Nano Banana 2 and Pro, Seedream 4.5 and 5.0 Pro); FLUX.1 Kontext and Muse Image take one
- Prompt blocks per angle that name the camera position, keep the light, the surface and the scale fixed, and say what must not change
- Set consistency: the same background, light direction and shadow across every frame; Images per run (1 to 10) on the ChatGPT Image engines to pick from several takes
- A fidelity check per frame: proportions, label and logo, seams and ports, color against the source, the parts the engine had to invent
- Marketplace line: listing images must show the actual product; link the marketplace policy and Amazon spec pages rather than restating their rules
- An optional turntable: a start frame in the Video studio and the animate a product photo guide
- Skills from the Catalog: E-commerce packshot and Precise image edits; Improve with AI; History to rerun a prompt; the Assets Library to keep the set together, and Campaigns to group it

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Promise an accurate view of a side the source never showed
- Claim 3D reconstruction, a 360 viewer or a spin set export in the app
- Name a product photo app or tool vendor
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Angle planning table
- Fidelity check table per frame
- Prompt blocks for three angles
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-multi-angle-product-photos-from-one-photo.webp`.
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

- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- white background packshot guide: `/resources/how-to/ai-white-background-packshot`
- Nano Banana Pro photo editing: `/resources/how-to/nano-banana-pro-photo-editing`
- animate a product photo: `/resources/how-to/animate-product-photo`
- Amazon product image requirements: `/resources/insights/amazon-product-image-requirements`
- marketplace policies for AI product images: `/resources/insights/marketplace-policies-ai-product-images`
- Image studio: `/app/create`
- eCommerce design service: `/services/design/ecommerce`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | Multi-Angle Product Photos From One Photo (41 chars) |
| Meta description | 152 chars | Make a multi-angle product set from one photo: what an engine can and cannot infer, when to feed a second view, prompts per angle and a fidelity check. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI generate other angles of a product from one photo?
2. How accurate is an AI-generated back view of a product?
3. How do I keep a product identical across several AI images?
4. Can I use AI-generated angles on Amazon listings?
5. How many product photos should a listing have?
6. Can I make a 360 product spin with AI?

## Notes

Help: create-an-image.md (Edit an image, Images per run), create-a-video.md (Start image). Reuse the existing localized Image studio capture.

## Definition of done

- [ ] `research/multi-angle-product-photos-from-one-photo.md` written before drafting, every claim marked
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
- [ ] File saved as `output/multi-angle-product-photos-from-one-photo.md` with `template: howto`
