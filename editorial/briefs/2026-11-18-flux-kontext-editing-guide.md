---
brief_id: 99
publish_date: 2026-11-18
week: 06
slot: engine
slot_job: Engine guide
template: howto
cluster: Engine guides
content_type: Engine guide
status: not_started
---

# BRIEF 99: FLUX.1 Kontext for image editing: a working guide

Run with the CreateArticle skill. Read `../CLAUDE.md` (its "Wave two" section
first) and `../SPEC.md`. They override any conflicting rule inside the skill.

**Standing rule.** No competitor is ever named, described, compared to, or alluded to. Market figures are attributed to the category and the date, never to a company. Comparison content compares models of buying and regions, never firms.

## CreateArticle inputs

| Input | Value |
|---|---|
| website | https://www.hubstudio.ai |
| audience | people out of China |
| reader stage | practitioner |
| family | Engine guide (`template: howto` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | FLUX.1 Kontext for image editing: a working guide |
| Slug | `/resources/how-to/flux-kontext-editing-guide/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/flux-kontext-editing-guide.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/flux-kontext-editing-guide.md` |
| Research file | `research/flux-kontext-editing-guide.md` |
| Hero image | `public/Images/howto-flux-kontext-editing-guide.webp`, referenced as `/Images/howto-flux-kontext-editing-guide.webp` |
| Primary query | `flux kontext prompts` |
| Secondary queries | `flux kontext pro vs max`, `flux kontext edit prompt examples`, `flux kontext character consistency`, `flux kontext change text in image` |
| SERP verdict | Black Forest Labs' own prompting docs rank near the top, surrounded by node-workflow tutorials and reseller guides; none applies the maker's rules to product edits (background swaps, colorways, label text) or says how Pro and Max differ for that work. |
| Body length | 1,800 words (body only, per the char-count rule) |
| Slot requirement | A capability table sourced from the maker, prompt examples, a QA list |

## The angle

Kontext edits by instruction: name what changes, say what stays. Its failures come from vague verbs and from asking for too much in one pass. Apply Black Forest Labs' own prompting rules to product work (background swaps, colorways, prop removal, text on packaging) in short, successive passes.

## The research gate, before any drafting

No body copy until `research/flux-kontext-editing-guide.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `flux kontext prompts` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/flux-kontext-editing-guide/` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
- App facts come only from `hubstudio-positioning.md` and the help center
  (`src/content/help/`). Screens reuse the existing localized captures (help
  center images and `src/data/app-shots.ts`), never a new capture of a
  feature the help center does not document.
- Engine capabilities come from the maker's own documentation, never from a
  reseller or an aggregator. Limits inside the app come from the help center.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check `../sources/verified-sources.md` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

- BFL docs: the Kontext prompting guide and the model pages for Pro and Max
- App facts: create-an-image.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Black Forest Labs' editing prompt rules from docs.bfl.ai: be specific, state what to preserve, quote the text to change, go step by step
- Pro and Max as Black Forest Labs describes them
- In the app, per the help center: FLUX.1 Kontext Pro and Max do text to image and edit, from one source image, Standard quality, PNG or JPG; they change exactly what you name and keep the rest
- Five product edits with prompts: a background swap, a colorway, a removed prop, new packaging text, a relight
- Iterating: edit, check, edit the result again; History to reuse a prompt
- When another edit engine in the app fits better: several source pictures (up to four on engines that take them), or a mask on the ChatGPT Image engines

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Cite any source but Black Forest Labs for a capability
- Name node tools, resellers or tool vendors
- Print a price
- Use an em dash

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Edit prompt table: edit, weak prompt, strong prompt
- Pro and Max table, per Black Forest Labs
- Five prompt blocks
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-flux-kontext-editing-guide.webp`.
  `hubstudio-image-style-guide.md` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. A capability table sourced from the maker, prompt examples, a QA list. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

- Nano Banana Pro photo editing: `/resources/how-to/nano-banana-pro-photo-editing`
- readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- product photo to lifestyle image: `/resources/how-to/product-photo-to-lifestyle-image`
- engines page: `/app/engines`
- AI image production: `/solutions/ai-production/image`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | FLUX.1 Kontext Prompts for Image Editing (40 chars) |
| Meta description | 152 chars | How to prompt FLUX.1 Kontext Pro and Max for product edits: name the change, protect the rest, quote the text, iterate. Five worked examples. (141 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I write a FLUX Kontext prompt?
2. What is the difference between FLUX.1 Kontext Pro and Max?
3. Can FLUX Kontext change text in an image?
4. How do I keep the rest of the image unchanged in Kontext?
5. Can FLUX Kontext change a product background?
6. Can Kontext edit several images at once?

## Notes

Black Forest Labs' own docs only. FLUX.1 Kontext Pro and Max are in the app.

## Definition of done

- [ ] `research/flux-kontext-editing-guide.md` written before drafting, every claim marked
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
- [ ] File saved as `output/flux-kontext-editing-guide.md` with `template: howto`
