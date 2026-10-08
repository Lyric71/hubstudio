---
brief_id: 124
publish_date: 2026-12-15
week: 10
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 124: How to make a packaging mockup with AI

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
| Working H1 | How to make a packaging mockup with AI |
| Slug | `/resources/how-to/ai-packaging-mockup/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/ai-packaging-mockup.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/ai-packaging-mockup.md` |
| Research file | `research/ai-packaging-mockup.md` |
| Hero image | `public/Images/howto-ai-packaging-mockup.webp`, referenced as `/Images/howto-ai-packaging-mockup.webp` |
| Primary query | `AI packaging mockup` |
| Secondary queries | `packaging mockup generator`, `how to put a label on a product mockup`, `AI box and bottle mockup`, `packaging design visualization AI`, `product label mockup` |
| SERP verdict | Template mockup libraries and generator apps rank; templates fit only the shapes they ship, generators redraw the label and lose the text, and none says which method fits which job, how to keep the artwork exact, or when a mockup may not stand in for a product photo. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

A mockup has one job: show the real artwork on a believable pack before it is printed. Generation is good at the pack, the material and the scene, and bad at copying a label letter for letter. So feed it the flat artwork as a source picture, ask it to wrap rather than redraw, check every word against the file, and keep a mockup out of any listing that sells the product as photographed. Taught with Edit an image in the Image studio.

## The research gate, before any drafting

No body copy until `research/ai-packaging-mockup.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI packaging mockup` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/ai-packaging-mockup/` with a date. For a China platform, the
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

- App behavior: create-an-image.md (jobs, engines, source pictures, mask, transparent background), assets-library.md (Image editor), skills.md, campaigns.md, validation.md
- Engine text and editing claims only from the makers' own documentation, dated
- Marketplace main-image rules: link the spec and policy pages rather than restating them

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Three methods and when each wins: a template mockup, a 3D render, a generated mockup from the flat artwork; a short decision table
- The run in the Image studio: Edit an image with the flat label or dieline and a reference of the pack shape as source pictures (up to four on the engines that take several; FLUX.1 Kontext Pro and Max take one); the instruction names what to wrap and what must stay exact
- Engine choice from the help center: the ChatGPT Image engines follow long briefs, write legible text and take a mask that protects the rest of the first image; Transparent background on the ChatGPT Image 2.5 engines, in PNG or WebP; Nano Banana 2 and Pro and Seedream edit from up to four sources; Seedream renders natively up to 4K
- Prompt examples in prompt blocks: a folding carton, a bottle with a wrap-around label, a stand-up pouch, a can, a shelf scene
- A fidelity checklist: every word against the artwork file, logo geometry, color against the reference, barcode and legal text, the curve of a label on a round pack, the shadow and contact with the surface
- What to do with text a model gets wrong: place the exact words or the logo afterward in the Image editor (Text and Picture panels), or run a new edit on the passage that failed; the Catalog skill Legible text inside an image
- Mockup against product photo: a mockup serves decks, retail sell-in, concept pages and pre-launch tests; a marketplace main image must show the product as sold
- Keep the artwork, the mockups and the approved version together: a campaign for the pack, versions in the Assets Library, Validation for the client's sign-off
- The price shown before the run; a failed run is not charged

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name a mockup template site or generator app
- Promise letter-perfect text from any engine
- Suggest a mockup as a marketplace main image
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Method decision table: template, 3D render, generated
- Fidelity checklist table: what to check, how, the fix
- Five prompt blocks
- Existing localized capture create-an-image-studio.webp
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-ai-packaging-mockup.webp`.
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

- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- keep the product exact in AI images: `/resources/how-to/keep-product-accurate-ai-images`
- generated photos or 3D renders: `/resources/insights/generated-photos-vs-3d-renders`
- marketplace policies for AI product images: `/resources/insights/marketplace-policies-ai-product-images`
- Image studio: `/app/create`
- packaging design service: `/services/design/packaging-merch-design`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Make a Packaging Mockup with AI (38 chars) |
| Meta description | 152 chars | Put your real label on a believable box, bottle or pouch with AI: feed the flat artwork, ask it to wrap, check every word, and know when not to use it. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI make a packaging mockup from my label design?
2. How do I put my logo on a product mockup with AI?
3. Why does AI get the text on my packaging wrong?
4. Can I use an AI mockup as a product photo on Amazon?
5. What file should I upload for a packaging mockup?
6. Can AI make a mockup with a transparent background?

## Notes

Help: create-an-image.md, assets-library.md (Image editor), skills.md. Reuse the existing localized Image studio capture.

## Definition of done

- [ ] `research/ai-packaging-mockup.md` written before drafting, every claim marked
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
- [ ] File saved as `output/ai-packaging-mockup.md` with `template: howto`
