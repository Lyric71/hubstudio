---
brief_id: 61
publish_date: 2026-10-08
week: 00
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 61: How to make an AI image with text people can read

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
| Working H1 | How to make an AI image with text people can read |
| Slug | `/resources/how-to/readable-text-in-ai-images/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/readable-text-in-ai-images.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/readable-text-in-ai-images.md` |
| Research file | `research/readable-text-in-ai-images.md` |
| Hero image | `public/Images/howto-readable-text-in-ai-images.webp`, referenced as `/Images/howto-readable-text-in-ai-images.webp` |
| Primary query | `AI image with text` |
| Secondary queries | `AI image generator text accurate`, `how to add text to AI images`, `AI poster with readable text` |
| SERP verdict | Tool landing pages, vendor blogs and forum threads rank; none gives a rule for when to render text in the image and when to overlay it, none cites what the engine makers themselves document, and none carries a proofing checklist. |
| Body length | 1,500 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Text inside a generated image (a poster headline, a label, a sign) used to come out garbled; current engines render it, within limits their makers state themselves. When to render text in the image and when to add it afterwards in the Image editor (text, logo, watermark) for exact brand type, legal lines and translations. Engine claims only from the makers' own documentation (OpenAI, Google, Black Forest Labs, ByteDance) for engines offered in the app. Localizing text for other languages as a use case, global.

## The research gate, before any drafting

No body copy until `research/readable-text-in-ai-images.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `AI image with text` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/readable-text-in-ai-images/` with a date. For a China platform, the
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

- OpenAI prompting guide, April 21, 2026: put literal text in quotes or ALL CAPS, spell tricky words letter by letter, medium or high quality for small text
- OpenAI image generation guide, read October 8, 2026: GPT Image models can still struggle with precise text placement and clarity
- Google DeepMind Nano Banana Pro model page, read October 8, 2026: may struggle with accurate spelling; translation may struggle with grammar, spelling, cultural nuances or idiomatic phrases
- Google Gemini API image generation documentation, last updated October 6, 2026: 15 languages listed for best performance
- ByteDance Seed, July 8, 2026: Seedream 5.0 Pro renders over ten languages, still room to improve in finer-grained text rendering

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- A decision table: render in the image against overlay in the Image editor
- Prompt example blocks quoting the exact text, a font description and the placement
- A proofing checklist: spelling, kerning and spacing, numbers, legal lines, logo, size at final placement
- A table of which engines in the app document text rendering, with the maker caveat and the source
- The Legible text inside an image skill from the Catalog and the Image editor Text and Picture panels, described only from src/content/help
- Localizing the text for other markets as a use case, with the maker caveat on translation

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name or allude to any competitor; engine makers offered inside the app are not competitors
- Print any price, rate or amount, hubStudio or engine maker
- Claim the Image editor loads a custom brand font: the help center does not document it
- Rank engines on text quality: report what each maker documents, nothing more
- Say credits; the app runs on a prepaid balance

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Hero image: public/Images/howto-readable-text-in-ai-images.webp
- Existing localized captures only: /Images/help/image-editor-draw.webp (a caption on a picture) if the publish step embeds one
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-readable-text-in-ai-images.webp`.
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

- How-to guides: `/resources/how-to`
- Assets Library page: `/app/library`
- Image editor page: `/app/image-tools`
- engines page: `/app/engines`
- ad creative design service: `/services/design/ad-creative`
- transcreation article: `/resources/insights/transcreation-as-a-production-line`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | AI image with text: how to make it readable (43 chars) |
| Meta description | 152 chars | Text inside an AI image: when the engine can render it, when to add it in an editor, prompt blocks, a proofing checklist and what each maker documents. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. Can AI image generators spell text correctly?
2. Which AI image generator is best for text?
3. How do I get exact words into an AI image?
4. Should I add text to an AI image afterwards instead?
5. Can AI translate the text inside an image?
6. Can I use my brand font in an AI image?

## Notes

Working H1 "How to put readable text inside an AI image" amended so the H1 carries the primary query (SPEC.md, SEO). Brief link "/app/library with the Image editor" amended: the Image editor has its own page at /app/image-tools; both are linked. The Catalog skill is named "Legible text inside an image" in the help center, so the body uses that name.

## Definition of done

- [ ] `research/readable-text-in-ai-images.md` written before drafting, every claim marked
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
- [ ] File saved as `output/readable-text-in-ai-images.md` with `template: howto`
