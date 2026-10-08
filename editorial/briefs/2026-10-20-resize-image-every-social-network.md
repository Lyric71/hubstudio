---
brief_id: 72
publish_date: 2026-10-20
week: 02
slot: howto
slot_job: How-to
template: howto
cluster: How-to
content_type: How-to guide
status: not_started
---

# BRIEF 72: How to resize one visual for every social network

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
| Working H1 | How to resize one visual for every social network |
| Slug | `/resources/how-to/resize-image-every-social-network/` |
| Publishes as | how-to guide: `src/pages/resources/how-to/resize-image-every-social-network.astro` on HowtoLayout plus an entry in `src/data/howtos.ts` |
| Output file | `output/resize-image-every-social-network.md` |
| Research file | `research/resize-image-every-social-network.md` |
| Hero image | `public/Images/howto-resize-image-every-social-network.webp`, referenced as `/Images/howto-resize-image-every-social-network.webp` |
| Primary query | `resize image for social media` |
| Secondary queries | `social media image sizes all platforms`, `crop one image for instagram linkedin x`, `resize image without cropping for instagram`, `social media safe zones for text` |
| SERP verdict | TOOL PAGES. The SERP is free resizer tools and their landing copy; they stretch or center-crop to a size list and say nothing about composing the master so the crops work, about where each network covers the picture with its own buttons, or about keeping text out of those zones. |
| Body length | 1,700 words (body only, per the char-count rule) |
| Slot requirement | A step sequence, a prompt example, a checklist the reader can use today |

## The angle

Resizing is a composition problem, not a pixel problem. Make one master with room around the subject, then frame it per placement: crop to fill where the subject survives, fit it whole over a blurred copy where it does not, and keep words out of the zones each network covers. Shown in the hubStudio Image editor, which is free and works in the browser.

## The research gate, before any drafting

No body copy until `research/resize-image-every-social-network.md` exists and every claim in it is
marked. Follow R1 to R7 in `../CLAUDE.md`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for `resize image for social media` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to `research/resize-image-every-social-network/` with a date. For a China platform, the
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

- Every placement size: from the published specs pages (Instagram, LinkedIn, TikTok, YouTube) and the Image editor's Social panel in assets-library.md
- No engagement statistic for portrait versus square unless a network's own business page publishes it

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

- Compose the master first: subject off-center with margin on every side; in the Image studio pick the Shape and leave negative space
- Placement table: network, placement, ratio, pixels, taken from the specs pages and the Image editor's Social panel (Instagram Feed portrait 1080 x 1350 Best; X Post wide 1600 x 900 Best; LinkedIn Post portrait 1080 x 1350 Best)
- Crop to fill versus Fit it whole (blurred picture or a plain color around it): when to use each
- Show what the network covers: red zones for buttons, name and caption, dashed lines for the profile grid and X's two-picture crop; keep words and logo out
- The Checks: shape, sharpness for the size, accepted format, file weight against the network's limit, words under the buttons, words large enough to read on a phone
- Crop presets for networks without a Social preset: Story 9:16 for TikTok and Stories, Wide 16:9 for YouTube, Link 1.91:1 for Facebook and LinkedIn links
- Save: PNG, JPG or WEBP, size presets, Save a copy in the Assets Library (the name says the network and size) or Save as a new version; the original stays
- Editing is free and nothing leaves the computer until you save; a picture over 4,096 pixels on its long side is edited at 4,096

## Do not

- Name, describe, compare to or allude to any competitor.
- Publish a hubStudio rate, monthly figure or per-item price.
- Write a summary or conclusion section. End on the CTA.
- Use an em dash anywhere.
- Print a decorative ordinal inside any repeated titled block.
- Name any resizer or design tool
- Claim the Image editor has a Social preset for Facebook, TikTok, YouTube or Pinterest: its Social panel covers Instagram, X and LinkedIn
- Copy pixel sizes from third-party pages: take them from the specs pages and the networks' own help
- Print a hubStudio amount
- Use an em dash or numbered cards

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Existing app
captures may be placed in the body as markdown images,
`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go
in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of
`scripts/publish-draft.mjs`). Nothing else is embedded.

- Placement table: network, placement, ratio, pixels, how to frame it
- Crop or fit decision table: subject type, crop to fill or fit whole, why
- Existing help captures: image-editor-social, image-editor-crop, image-editor-save
- Feature image: see `../SPEC.md`, saved as `public/Images/howto-resize-image-every-social-network.webp`.
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

- Image editor: `/app/image-tools`
- Instagram post sizes for 2026: `/resources/insights/instagram-post-sizes-2026`
- LinkedIn post specs: `/resources/insights/linkedin-post-specs`
- TikTok video specs: `/resources/insights/tiktok-video-specs`
- YouTube video thumbnail specs: `/resources/insights/youtube-video-thumbnail-specs`

## CTA

Final section only. CTA label: **Create your account**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | How to Resize One Visual for Every Social Network (49 chars) |
| Meta description | 152 chars | Compose one master, then crop or fit it for Instagram, LinkedIn, X, TikTok and YouTube with the right ratio, pixels and safe zones, free in the browser. (152 chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

1. How do I resize one image for all social media platforms?
2. How do I post a full picture on Instagram without cropping it?
3. What is the best image size for Instagram, LinkedIn and X?
4. Where should I keep text on a social media image?
5. Should I save social images as JPG, PNG or WebP?
6. Does resizing an image lower its quality?

## Notes

Link the Facebook, X and Pinterest specs pages (facebook-post-specs, x-image-video-specs, pinterest-pin-specs) when they are live at drafting; otherwise they stay plain text per settled fallback 5.

## Definition of done

- [ ] `research/resize-image-every-social-network.md` written before drafting, every claim marked
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
- [ ] File saved as `output/resize-image-every-social-network.md` with `template: howto`
