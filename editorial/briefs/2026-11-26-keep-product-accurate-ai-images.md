---
brief_id: 106
publish_date: 2026-11-26
week: 07
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 106: How to keep the product exact in AI images

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
| Working H1 | How to keep the product exact in AI images |
| Slug | `/resources/how-to/keep-product-accurate-ai-images/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/keep-product-accurate-ai-images.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/keep-product-accurate-ai-images.md` |
| Research file | `research/keep-product-accurate-ai-images.md` |
| Hero image | `public/Images/howto-keep-product-accurate-ai-images.webp`, referenced as `/Images/howto-keep-product-accurate-ai-images.webp` |
| Primary query | `keep product accurate in AI images` |
| Secondary queries | `AI product image wrong logo`, `AI changes my product`, `product fidelity AI image generation`, `keep packaging text accurate AI`, `AI product photo color accuracy` |
| SERP verdict | Editing-app blogs rank with a checklist that ends in their own fix button; none explains why a product drifts (text to image invents it, a small source loses the label, one prompt asks for too much), none sets the method upstream of the fix, and none ties fidelity to the marketplace rules that punish a picture that misrepresents the product. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A product drifts for three reasons: it was described instead of shown, the source was too small to carry the detail, or one run was asked to change too much. So start from the real photo, feed the detail as its own picture, name what must stay, change one thing per pass, and check against the original before anything ships. Taught with Edit an image in the Image studio.

## The research gate, before any drafting

No body copy until `research/keep-product-accurate-ai-images.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `keep product accurate in AI images` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/keep-product-accurate-ai-images/` with a date. For a China platform, the
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

- App behavior: create-an-image.md, skills.md, assets-library.md and validation.md in the help center
- Marketplace misrepresentation rules: link the Amazon, Google Merchant Center and marketplace policy pages rather than restating them without a source

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Why products drift: text to image invents the product; an edit keeps it only as well as the source and the prompt protect it
- The source pack: a clean front photo, an angle, and a close-up of the label or logo as separate source pictures (up to four on engines that take them); source images are resized to 1,536 pixels on the long side in the browser, so a label shot from afar loses its text
- The prompt: name the change, list what stays (shape, proportions, color, label text quoted, logo, materials), one change per pass
- Engines suited to keeping a product, per the help center: the FLUX.1 Kontext engines change exactly what you name and keep the rest (one source); Nano Banana 2 is dependable on an existing photo; the ChatGPT Image engines take a mask whose transparent area marks what may change; ChatGPT Image 2.5 Sunburst is tuned for precise edits
- The Catalog skills Precise image edits, E-commerce packshot and Lifestyle product scene; a team skill written by an admin holding the product facts that never change
- A fidelity check table: shape and proportions, color, logo, label text, pattern, material and texture, parts and accessories, scale against the scene; the fix for each (rerun the edit, mask the area, shoot a better source)
- What the free Image editor can fix (light, color, crop, a logo placed over) and what it must not be used to fake
- Sign-off: Send for validation to the person who owns the product; keep the original and the result as versions in the Assets Library
- Why it matters beyond looks: the marketplaces' rules against images that show a different product, features it lacks or accessories not included

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Promise that any engine keeps a product exact every time
- Recommend repainting label text by hand in the editor to pass a check
- Name an editing app or tool vendor
- Print a price or any hubStudio amount
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Drift causes table: cause, symptom, prevention
- Fidelity check table: what to compare, how, the fix
- Prompt blocks: a weak and a strong edit instruction
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-keep-product-accurate-ai-images.webp`.
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

- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- on-brand images with skills: `/resources/how-to/on-brand-images-with-skills`
- marketplace policies for AI product images: `/resources/insights/marketplace-policies-ai-product-images`
- retouching at volume: `/resources/insights/retouch-at-volume-qa-pipeline`
- Image studio: `/app/create`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Keep the Product Exact in AI Images (42 chars) |
| Meta description | 152 chars | Why AI changes your product and how to stop it: start from the real photo, feed the label as its own source, name what stays, edit in passes, check. (148 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Why does AI change my product in generated images?
2. How do I keep my logo accurate in AI images?
3. Can AI keep the text on my packaging?
4. Which AI engine is best for keeping a product unchanged?
5. How do I check an AI product image before publishing?
6. Is it legal to sell with AI product images that differ from the product?

## Notes

Help: create-an-image.md (Edit an image, Mask, source resizing), skills.md, assets-library.md, validation.md. Reuse the existing localized Image studio capture.

## Definition of done

- [ ] `research/keep-product-accurate-ai-images.md` written before drafting, every claim marked
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
- [ ] File saved as `output/keep-product-accurate-ai-images.md` with `template: howto`
