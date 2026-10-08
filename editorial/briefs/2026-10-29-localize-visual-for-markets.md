---
brief_id: 82
publish_date: 2026-10-29
week: 03
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 82: How to localize one visual for several markets

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
| Working H1 | How to localize one visual for several markets |
| Slug | `/resources/how-to/localize-visual-for-markets/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/localize-visual-for-markets.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/localize-visual-for-markets.md` |
| Research file | `research/localize-visual-for-markets.md` |
| Hero image | `public/Images/howto-localize-visual-for-markets.webp`, referenced as `/Images/howto-localize-visual-for-markets.webp` |
| Primary query | `localize images for different markets` |
| Secondary queries | `image localization`, `translate text in image`, `adapt ad creative for different countries`, `localize product images for international markets` |
| SERP verdict | CONCEPTUAL. Localization vendors and image-translation tools rank with 'why it matters' essays (colors, symbols, right-to-left layouts) and a pitch; none gives a production method: what to keep in a master, what to render per market, and how to keep text editable. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Build the visual to be localized before you make it: a clean master with no words in it, text added per market as an editable layer, and casting or setting changed only where the market needs it. This guide is the production method, shown in the hubStudio app, with the cases where rendering the text into the image is the better call.

## The research gate, before any drafting

No body copy until `research/localize-visual-for-markets.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `localize images for different markets` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/localize-visual-for-markets/` with a date. For a China platform, the
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

- No market statistic required; any text-expansion figure needs a published source with method, or is cut
- App facts: create-an-image.md, assets-library.md (Image editor Text, Save), skills.md, campaigns.md, validation.md

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- The decision in the first screen: text as an overlay versus text rendered in the image, as a table (edit cost, legibility, languages, when to use)
- The clean master: render or edit without words; leave space for the longest language (French and German run longer than English, Chinese shorter): say so as a layout rule, not a statistic
- Overlay route: the free Image editor's Text panel (font, size, outline or soft shadow) per market, saved as a copy whose name you set per market
- Rendered route: the ChatGPT Image engines write legible text inside the picture; the Legible text inside an image skill shapes Improve with AI; check every character
- Casting and setting: Edit an image with source pictures to change the scene or the person per market while keeping the product
- Legal lines that change by market (language requirements, retouching labels, price-claim wording) as a pointer to the Europe localization piece
- Keep each market's versions under one Campaign; send each version to that market's reviewer through Validation
- Fonts that carry accents and non-Latin scripts: check diacritics and Chinese characters render before saving

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any localization vendor, image-translation tool or competitor
- Print character-expansion percentages unless a dated, methodical source is found; otherwise state the layout rule only
- Print a hubStudio amount
- Use Han characters in the English body; describe Chinese layouts in words
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Overlay versus rendered table
- Per-market change list table: element (headline, legal line, casting, setting, product), keep or change, how
- Existing captures: image-editor-draw, image-editor-save
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-localize-visual-for-markets.webp`.
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

- Readable text in AI images: `/resources/how-to/readable-text-in-ai-images`
- Transcreation as a production line: `/resources/insights/transcreation-as-a-production-line`
- Localizing one campaign for Europe: `/resources/insights/europe-campaign-localization`
- Consistent character in AI images and video: `/resources/how-to/consistent-character-ai-images-video`
- Campaigns: `/app/campaigns`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Localize One Visual for Several Markets (46 chars) |
| Meta description | 152 chars | Localize one visual for several markets: a clean master, text as an editable layer or rendered in, casting and setting per market, legal lines checked. (151 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I localize an image for different countries?
2. Should I put text in the image or add it on top?
3. Can AI translate the text inside an image?
4. What should change in a visual from one market to another?
5. How do I keep localized versions organized?
6. Do fonts support accents and Chinese characters?

## Notes

The Europe localization piece (id 64, October 12) publishes before this one: link it. If it is not live at drafting, the reference stays plain text per settled fallback 5.

## Definition of done

- [ ] `research/localize-visual-for-markets.md` written before drafting, every claim marked
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
- [ ] File saved as `output/localize-visual-for-markets.md` with `template: howto`
