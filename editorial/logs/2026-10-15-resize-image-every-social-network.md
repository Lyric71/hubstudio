# Run log: 2026-10-15

Scheduled draft run of 2026-10-15 00:30 (`runs/2026-10-15-draft.txt`),
model attempt 1 of the fallback chain. The working tree held no partial
work: no row stood at researched, drafted or quality_passed, and no output,
research file or hero existed for any open row. The run took row 72, the
earliest `not_started` row in `publish_date` order (2026-10-20, first in
file order on that date).

| Field | Value |
|---|---|
| Brief | 72 |
| Slug | resize-image-every-social-network |
| Research file | research/resize-image-every-social-network.md |
| Output | output/resize-image-every-social-network.md |
| Body word count | 2,334 prose only; 2,811 with tables (floor 1,700) |
| Body char count | 14,877 (check-draft.mjs, body without frontmatter and comments) |
| Status reached | image_ready |
| Model used at every step | claude-opus-5-5 (research, drafting, quality loop, review); gpt-image-2 high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Eight claim groups from the brief, the Image editor and Image studio help, and the six live spec pages |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, 45 ranking pages recorded by type, none named |
| R3 primary sources for every number | yes | Instagram Help Center, LinkedIn Help, X Help Center, Meta for Developers, Meta Ads Guide, TikTok Ads Manager help and its template file, YouTube Help; app facts from the help center only |
| R4 Chinese-language web searched first | n/a | Nothing China-related in the piece |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform documentation read directly; derived arithmetic labeled as such |
| R6 triangulated, conflicts published as ranges | yes | Link picture printed as 1200 x 630 (Meta) and 1200 x 627 (LinkedIn), both 1.91:1; vertical frames carry "no organic size printed" next to the Reels ad size |
| R7 research file written before drafting | yes | 2026-10-15, before iteration 1 |
| R8 reconciled after drafting | yes | Every number traced, see the research file |

**Gap statement, one sentence:** the ranking pages are resizer tools and
size cheat sheets that stretch or center-crop to a list of pixels (several
still print 1280 x 720 for a YouTube thumbnail, 1080 x 1080 for Instagram's
feed and 1200 x 1200 for LinkedIn, none from the networks' own pages), and
none says how to compose the master so every crop survives, that one 4:5
portrait sits inside the ranges Instagram, LinkedIn and X all show in full,
or where each network covers the picture.

**Research time spent:** about 75 minutes.

- Figures reused from the ledger: X photo help (2:1 to 3:4, 5MB, GIF JPEG
  PNG; brief 70, checks of 2026-10-14), TikTok standard in-feed template
  insets (brief 57), YouTube banner safe area (brief 62), Meta Facebook Feed
  image ad 4:5 at 1440 x 1800 (brief 66), LinkedIn image types (brief 63).
  All other network figures re-read on 2026-10-15 for check 1 and check 2.
- Claims cut because they could not be sourced: a wide X picture "takes the
  full width of the timeline", organic posts "carry the same buttons" as ads,
  networks recompressing every upload (narrowed to the two whose pages say
  so), Pinterest sizes, cheat-sheet safe-zone pixels, an organic Facebook or
  TikTok photo size, an engagement figure for portrait against square (all in
  the research file's do-not-publish list).
- Conflicts published as a range rather than a single figure: link picture
  1200 x 630 against 1200 x 627; full-screen vertical with no organic size
  printed and 1440 x 2560 for Reels ads.
- Captures saved to `research/resize-image-every-social-network/`: Instagram
  image resolution and Reel size, LinkedIn a527229 and a563309, X profile
  photo help, YouTube 72431 (rendered page and the folded size section) and
  10456525 (banner lines), Meta link shares, Page Photos, Ads Guide Instagram
  Reels and Facebook Feed image, TikTok auction in-feed specs; check 1 and
  check 2, 2026-10-15. The X photo help returned HTTP 403 to a browser
  render, curl and a fetch service on both reads; its blockquote is dated
  October 14, 2026 and rests on the two captures of that day in
  `research/x-image-video-specs/`, matched word for word.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification (write the list out)
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- 1: draft from the claims table: answer table of placements, why one 4:5
  copy works on three feeds, the master with its crop arithmetic and a prompt
  example, crop or fit with a decision table, what each network covers, the
  editor steps with two captures, saving with the third capture, checklist,
  six FAQs, CTA.
- 2: weaknesses listed: excerpt at 26 words; "no size chart prints it" (an
  unchecked SERP claim); an unsourced reason for X's wide preset; "organic
  posts carry the same buttons" (unsourced); "networks recompress what you
  send" (too broad); the lede's primary query missing from the first
  sentence; the checklist's master line unclear; no cluster hub or platform
  page in the closing references; "side by side" added to the help's "one of
  two pictures on X"; the Crop panel step not saying the size is set on save.
- 3: all fixed; excerpt cut to 24 words.
- 4: production review: the vertical-frame lead-in reworded to say Meta and
  TikTok publish ad margins.
- 5 and 6: AI tells scanned (none of the positioning file's banned words);
  zero em dashes; seven blockquotes in one format with a source and a date.
- 7: ran as the cadence variant, no planted errors: the format list broken
  out of its parallel build, the crop-or-fit pair restructured, the master
  paragraph opened on a two-word line, a parenthetical aside on WebP.
- 8: check 2, every cited page re-fetched after drafting (HTTP 200 except the
  X photo help, 403, handled as above), every quoted string found again; the
  crop-panel sentence added ("The crop sets the shape; the Save panel sets
  the size"); R8 reconciliation written.
- 9: the brief's approved title (49) and meta (152) kept; excerpt 24 words.
- 10 to 12: two FAQ claims tied back to the help ("marks the buttons in
  red", "the 4:5 copy still shows whole"); captures placed as figures, the
  prompt in a fenced prompt block, steps and checklist as lists.
- 13: five concepts (a single print being cut down by a trimmer, card mats of
  different shapes over one print, an art director's L-shaped cropping
  corners, one window seen through blinds at several openings, a phone and a
  proof side by side); the L-corners with the loose mats beside them chosen
  as the art director's own cropping tool, distinct from the trimmed, folded
  and concertina prints of the last three social how-to heroes, and set in
  Changsha to rotate from Hong Kong.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : pause, second AI-undetectable pass
[x] Iteration 10 : second human touch pass
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check
[x] Final        : fold the SEO content into the markdown
```

- 2: ten weaknesses: the lede's "none of that is a pixel problem" contradicted
  its own third item; "their own help pages say so" flat; "those are plain
  arithmetic" clumsy; "square or a mild landscape" not true for both crop
  directions; "Banners have their own trap" a performed line; "the circle
  wants the face, not the room" a not-X construction; no storage line in a
  piece that says editing is free; a closing references paragraph built as
  one chain; no transition into the editor steps; no recheck date for sizes
  that move.
- 3 and 4: all fixed; the storage line added without an amount ("counts
  toward your storage like any upload"); the recheck went to `watch.csv`.
- 11: hostile read: the checklist intro now says six lines are the editor's
  Checks and two are the reader's own.
- 12: no bold-label templates in the piece; prose dominant around two
  tables and two lists.
- 13: the closing references chain split into three sentences; the
  crop-or-fit pair already broken in the cadence pass; the 56 percent pair
  restructured with a parenthesis.
- 14: "Banners get cut differently again" replaced the performed line.
- 16: one transition added before the editor steps ("The thinking was the
  slow part.").
- 17: title 49, meta 152, excerpt 24 words (house ceiling 25 wins over the
  skill's "exactly 25"); one H1, nine H2, six H3; zero em dashes; US
  spelling.
- 18: one "just", no repeated humanizer.
- Quotes stay straight in the markdown source, as in every earlier draft;
  the publish step sets the page typography.
- Versions v1, v3 and v13 of the draft and q-v1, q-v3 and q-v16 of the
  quality pass kept in the session scratchpad, not in the repo.

## Image

- Prompt used (verbatim from the feature-image block): a young Chinese art
  director's hands pressing two L-shaped black card corners at diagonally
  opposite corners of a flat matte print of a coffee dripper, framing a tall
  crop, three card mats with tall, wide and square openings beside it, a
  Changsha studio, window light from camera right, 50mm at f/4, warm
  color-negative grade, no text.
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: two. The first drew
  T-shaped pieces placed above the dripper instead of framing it, and the
  dripper read as a real cup on the paper; the prompt in the block was
  rewritten (dripper printed flat in the photograph, L-shaped corners at
  diagonally opposite corners outlining a tall rectangle) and the second
  frame was accepted.
- AI-tells checklist run against the final frame: one window light, one
  shadow direction; ten fingers, natural knuckles, short nails, a graphite
  mark on one finger; no face; no text or legible numbers (ruler ticks only);
  no logos; mats and corners plausibly cut card with worn edges; no bokeh
  halos; lived-in background (radiator, cork board, mug).
- Saved to: public/Images/howto-resize-image-every-social-network.webp
  (1536 x 1024, 113 KB, sharp webp quality 78, no enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (resizer tools appear nowhere on the page; the research file describes ranking pages by type only) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, ledger, watch.csv, schedule) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 7 of 7 |

## Sources

- New figures added to the ledger, with both check dates: brief 72 block
  appended by `append-ledger.mjs` (re-read of the brief 54, 56, 62, 63, 66
  and 70 rows; the 4:5 overlap and the 56 percent crop arithmetic as derived
  rows), check 1 and check 2 both 2026-10-15; the X photo help keeps its
  checks of 2026-10-14.
- Rows added to the do-not-publish log: eleven, in the research file
  (cheat-sheet sizes for Instagram, LinkedIn, YouTube and Stories, Pinterest,
  invented safe-zone insets, the "central 60 percent" rule, engagement lift,
  organic Facebook and TikTok photo sizes, sizes for non-Best editor
  placements).

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: Social panel placements, Best presets at 1080 x 1350 and 1600 x 900,
  Crop formats, Save formats and size picks, the 4,096 px limit, free and in
  the browser (/help/assets-library); Image studio Shape, 4K up to 3840 px,
  Upscale and restore (/help/create-an-image).
- Spec rows published under deviation 7: none (Western networks, primary
  help pages).
- Claims cut and which section is now thinner: see the research gate list;
  Pinterest is left out of the answer table, and the vertical row prints no
  organic pixel size.
- Briefs amended because the research or the live site proved them wrong:
  none needed. The brief's app facts match the help center word for word,
  and its Pinterest note resolves under its own terms (the Pinterest page is
  not live, so it is not referenced).
- Live articles corrected because this piece contradicted them: none. The
  carousel guide's 4:5 advice, the X specs page's 1600 x 900 preset and the
  Facebook specs page's 4:5 at 1,440 x 1,800 all agree with this piece.
- Rows added to `watch.csv`: one, due 2027-01-15, the quarterly recheck of
  every size the how-to prints and of the Image editor help it relies on.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with the
  hero and the existing localized captures).
- Runbook substitutions: the rendered YouTube help page folds its size
  section, so the size lines were read from the page's static HTML and saved
  beside the render; help.x.com refuses automated reads, handled through the
  ledger checks of the previous day.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 49 | 52 | yes |
| Meta description | 152 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
