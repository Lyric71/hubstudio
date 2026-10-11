# Run log: 2026-10-11

| Field | Value |
|---|---|
| Brief | 66 (wave two, `scripts/wave2/66-facebook-post-specs.mjs`) |
| Slug | facebook-post-specs |
| Research file | research/facebook-post-specs.md |
| Output | output/facebook-post-specs.md |
| Body word count | 2,475 with tables; 1,949 prose only (check-draft.mjs) |
| Body char count | 12,882 (check-draft.mjs, frontmatter and HTML comments excluded) |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5) for research, drafting and the quality loop; gpt-image-2 at high quality for the hero. No cheaper path offered or taken. |

Run: the 12:30 scheduled draft run (`logs/runs/2026-10-11-draft.txt`). The
00:30 draft and 04:00 publish runs reached no model provider. The 08:49
catch-up run had already taken row 65 (plan-week-social-posts) to
image_ready; its files were left untouched. This run took the next row in
`publish_date` order still `not_started`, row 66, dated 2026-10-13. No
output, research or image for the slug existed on disk or in git (the only
commit touching the slug, 926575c, added the brief and its module).

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Feed image, feed video, carousel, link, Reels, Stories, safe zones, organic against ads, hubStudio limits |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, 47 results classified, one fetched in full |
| R3 primary sources for every number | yes | 21 Meta captures: Ads Guide (8), Business Help Center (2), Facebook Help Center (3), Meta newsroom (1), Meta for Developers (7) |
| R4 Chinese-language web searched first | n/a | Western network, global market; no China value on the page |
| R5 every figure interrogated (date, sample, method, who paid) | yes | All rows are Meta's own pages, undated except the newsroom post (June 17, 2025) and the Help Center update (September 2025) |
| R6 triangulated, conflicts published as ranges | yes | Two Meta conflicts printed as both figures |
| R7 research file written before drafting | yes | Row set to researched before the first line of body copy |
| R8 reconciled after drafting | yes | verify-numbers.mjs: 40 distinct numbers, 0 missing |

**Gap statement, one sentence:** the ranking pages repeat 1080 x 1350 and
1200 x 630 without saying which Meta page they come from, and the one that
cites Meta covers images only: none states the limits for a page post sent
by a publishing tool, none says every Facebook video has been a reel since
September 2025, and none prints the conflict inside Meta's own Facebook
Stories safe-zone figures.

**Research time spent:** about 2 hours 15 minutes active.

- Figures reused from the ledger: the brief 32 rows for Facebook Feed video,
  Facebook Reels video and Facebook Stories video ads (re-read, unchanged,
  "66" added to Used in through the new rows); the brief 54 Business Help
  aspect-ratio row; the brief 32 and 56 safe-zone article row; the brief 65
  negative finding on a Facebook post text limit.
- Claims cut because they could not be sourced: an organic photo pixel size
  (1080 x 1350, 2048 px), a cap on photos per organic page post, organic
  Story video length beyond the API's figure. The page states each as
  unpublished by Meta rather than printing a number.
- Conflicts published as both figures: Facebook Stories safe zone (14% and
  250 px top, 20% and 340 px bottom on the video and carousel pages, against
  14 / 35 / 6 on the image page, with the pixel arithmetic shown); Facebook
  Stories API video length (3 to 90 seconds in the table, 60 seconds in the
  limitations; the page says build to 60); Facebook Stories carousel ad (1:1
  ratio beside 1080 x 1920 resolution).
- Captures saved to `research/facebook-post-specs/`: 21 check 1 and 18
  check 2 text captures. Ads Guide and developer pages served to a crawler
  user agent; Help Center and Business Help Center pages rendered logged out
  in headless Chromium because the plain fetch returns a title only.

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

- Iteration 1: draft from the research file in the Instagram spec page's
  structure: answer first, Reviewed line, spec table, organic against ads,
  Reels, safe zone, link preview, carousels, hubStudio, changelog, FAQ, CTA.
- Iteration 2, weaknesses: (1) "building at 1,440 by 1,800 covers both" was
  an unqualified claim; (2) "one of the few Facebook spec pages written in
  plain sentences" an unmeasured comparison; (3) "under 10 MB" and "under 8
  MB" drifted from Meta's "can not exceed"; (4) "agree for once" read as
  snark; (5) the hubStudio section lacked the practitioner's PNG tip Meta
  gives; (6) "firm" used twice for different ideas; (7) "Ads are fixed" was
  ambiguous; (8) the organic-against-ads opener was one long sentence; (9)
  "last year" would go stale on a page updated in place; (10) the advice to
  build to the organic limit closed on a tidy line.
- Iteration 3: each weakness fixed (wording in the R8 section of the
  research file).
- Iteration 4: production check: three tables, six sourced blockquotes,
  Reviewed line, changelog, six FAQ answers inside 40 to 70 words, five
  internal references as plain text.
- Iteration 5: stock phrasing searched and removed; none of the banned words
  present.
- Iteration 6: zero em dashes; every blockquote ends on a Source line with
  a read date.
- Iteration 7 ran as the cadence variant, not the planted-error variant:
  sentence length varied ("Build to 60." after a long sentence), the parallel
  "Its ads guide ... Its developer pages ..." lead broken by the third clause,
  a one-line paragraph ("Look at the fourth row.") after a dense table.
  Zero deliberate errors.
- Iteration 8, check 2: all 18 cited URLs fetched again. The ten developer,
  newsroom and help pages came back with identical text; the eight Ads Guide
  pages differed only in the rotating call-to-action button list, with every
  spec line identical. R8 reconciliation: every number traced to a claims row;
  the recheck year added to R8 with the watch row.
- Iteration 9: title 40 characters, meta 148, excerpt 24 words.
- Iteration 10: second pass found no stock transitions; "Here Meta's
  developer page ... answers in plain sentences" rewritten.
- Iteration 11: final read for a practitioner in a hurry.
- Iteration 12: tables aligned, five columns maximum; no ordinals anywhere.
- Iteration 13, five concepts: three prints cut to different proportions
  (rejected: the Instagram page uses it); a phone on a stand (rejected:
  screens and UI text); a contact sheet with grease-pencil crop marks; a
  transparency on a light table with a loupe; a vertical print on a studio
  wall with masking tape laid across its top and bottom margins (chosen: it
  is the safe zone, the page's distinctive finding, made physical).

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

- Passes 1 to 7: the ten wording fixes listed under createarticle iteration
  2 applied as one edit set (versions kept in the session scratchpad as v1
  and v2).
- Pass 8: SEO fields kept at the brief's approved values, inside the house
  ceilings; nothing trimmed.
- Pass 11, hostile reader: maintenance signals present (Reviewed line,
  dated changelog, next recheck date); cost question answered (publishing
  free, renders charged to the prepaid balance at the price shown first);
  the 90-second reel figure the reader has seen elsewhere is explained
  rather than ignored.
- Pass 12: no bold-label template blocks; the page is prose, tables and
  blockquotes.
- Pass 13: jargon search empty; no "not just X, it's Y"; the lead's three
  sets of rules kept because they are the page's actual finding.
- Passes 14 to 16: the tidy closer "It fits the ad as well." merged into the
  sentence before it; one transition kept ("Look at the fourth row.").
- Pass 17: H1, ten H2s, no H3; no anchor links; zero em dashes; American
  spelling.
- Pass 18: "outright", "roomier" and "for once" each checked as one-offs;
  "for once" removed.
- check-draft.mjs: all hard checks passed.

## Image

- Prompt used (verbatim from the feature-image block): the editorial
  documentary photograph of a hand laying masking tape across the top and
  bottom margins of a tall street-scene print on a plaster wall in a
  Changsha studio, single window light, 50mm at f/4, color negative grade,
  lifted blacks, fine grain, no text.
- Confirmed the prompt names no real person: yes.
- Attempts: attempt 1 rejected on the AI-tells checklist (scribbled
  almost-words on the price cards inside the print, faint lettering on the
  tape core). The prompt was amended in the draft ("no signs, price cards or
  labels", "a plain unprinted cardboard core") and attempt 2 generated.
- AI-tells checklist on attempt 2: no lettering anywhere, hand anatomy
  correct at full crop (four fingers and thumb, nails and knuckles natural),
  one light source from the right with one shadow, no reflections, no bokeh
  circles, natural paper curl, grain present.
- Saved to: `public/Images/insight-facebook-post-specs.webp`, 1536 x 1024,
  67 KB (sharp, quality 78). The intermediate PNGs stay in the session
  scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (Meta is the platform the page documents; no other company appears) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, brief, module, ledger, watch file) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; the file ends on the CTA and the three blocks |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none in the draft |
| Statistics in blockquotes with source, date and method | six blockquotes, each with a Source line and a read date |

## Sources

- New figures added to the ledger, with both check dates: 14 rows under
  "Facebook post, Reel and Story specs" (added 2026-10-11, brief 66), check
  1 and check 2 both 2026-10-11, appended by `append-ledger.mjs`.
- Rows added to the do-not-publish log: six (organic photo sizes, 90-second
  app reels, 30 or 120-second Stories, invented Story safe areas, link
  preview tiers, 600 x 600 carousel minimum).

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. hubStudio facts come from `src/content/help/facebook.md`,
  `src/content/help/assets-library.md` and `hubstudio-positioning.md`.
- Spec rows published under deviation 7: none. Western network, readable
  official pages, every row primary for its scope; no disclaimer block.
- Claims cut and which section is now thinner: organic photo pixel size and
  organic photo count per post (the spec table and the carousel section say
  Meta publishes neither).
- Briefs amended because the research or the live site proved them wrong:
  brief 66 and its module. The SERP verdict "UNCITED ... none separates" no
  longer holds (one ranking page, updated October 9, 2026, links its image
  figures to Meta and splits organic from paid, images only); the verdict and
  angle now say so. The statistics line pointed organic figures at the Meta
  Business Help Center, which prints ad guidance only; it now names the
  Facebook Help Center and Meta for Developers. No later brief repeats either
  error (searched every module in `scripts/wave2/`).
  `generate-briefs.mjs --check` reports no difference.
- Live articles corrected because this piece contradicted them: none. The
  Facebook figures on `meta-tiktok-against-douyin-rednote` (Facebook Feed
  video 4:5 at 1440 by 1800, Facebook Reels no maximum, Facebook Stories 1
  second to 3 minutes, 14 / 35 / 6 for Reels and Instagram Stories) match
  today's reading; the Facebook statements on the Meta platform page and the
  vertical-video how-to describe hubStudio's editor and agree with the help
  center.
- Rows added to `watch.csv`: 2027-01-13, facebook-post-specs, the quarterly
  recheck of every Meta figure and both conflicts.
- Settled fallbacks applied: 4 (length over the brief's target: 1,949 prose
  words against a 1,500 floor, made of six sourced blockquotes, the FAQ and
  the Reviewed and changelog lines; prose not padded, no citation cut); 12
  (no showcase clip; the page ships with its hero and existing localized
  captures named in the asset brief).
- Runbook substitutions: text captures of the served or rendered pages stand
  in for screenshots, as on the Instagram spec pages.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 40 characters | 52 | yes |
| Meta description | 148 characters | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
