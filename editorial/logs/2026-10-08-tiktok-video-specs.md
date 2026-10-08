# Run log: 2026-10-08, tiktok-video-specs

| Field | Value |
|---|---|
| Brief | 57 (wave two, `editorial/scripts/wave2/57-tiktok-video-specs.mjs`) |
| Slug | tiktok-video-specs |
| Research file | research/tiktok-video-specs.md |
| Output | output/tiktok-video-specs.md |
| Body word count | 2,603 with tables; 1,852 prose only (FAQ included); target 1,500 is a floor, overage is tables, sourced blockquotes and the FAQ |
| Body char count | 13,962 |
| Status reached | image_ready (steps 0 to 3; translation and publish are run by the integrator) |
| Model used at every step | Claude Opus 5.5, the most capable model in this environment; image on gpt-image-2 at high quality |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Lengths (record, upload, ads), ratio and resolution, formats, file size, bitrate, safe zone, photo posts, carousel ads, upload failures, hubStudio facts |
| R2 SERP mapped, four phrasings minimum | yes | Five queries: the primary and all four secondaries; 4 ranking pages fetched |
| R3 primary sources for every number | yes | TikTok Help Center, TikTok Ads Manager help, TikTok's own template files; hubStudio facts from the help center article |
| R4 Chinese-language web searched first | not applicable | A Western platform with readable English primary pages; Douyin is handled by linking the two existing Douyin insights, with no Douyin figure on this page |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Claims table; ads pages carry "Last updated" months, help center pages are undated and carry the read date |
| R6 triangulated, conflicts published as ranges | yes | Each figure is a single primary reading of the platform's own page; no two TikTok pages read conflict. Third-party figures that conflict with each other are logged, not printed |
| R7 research file written before drafting | yes | Written before the first draft line |
| R8 reconciled after drafting | yes | Table in the research file; six phrases removed |

**Gap statement, one sentence:** No ranking page separates the in-app record
limit, the upload limit and the four ad formats by TikTok source, and none
reads the insets TikTok prints on its own safe-zone template files.

**Research time spent:** about 2 hours 30 minutes active.

- Figures reused from the ledger: the brief 32 TikTok rows (auction in-feed, reservation, TopView, best practices) were re-read at source today, not reused blind; the page now carries the current reading.
- Claims cut because they could not be sourced: every organic file size, resolution, frame rate and web upload limit (287.6 MB, 72 MB, 500 MB web, 4 GB, 10 GB, 30 GB, 360 px, 23 to 60 fps, Studio "30 minutes"); "buttons cover 22 percent"; organic caption and hashtag caps as TikTok rules; desktop scheduling rules (undated old article).
- Conflicts published as a range rather than a single figure: none needed; the page states the absence of organic dimensions instead.
- Captures saved to `research/tiktok-video-specs/`: 14 check 1 text captures, 11 check 2 text captures, 3 template previews (standard LTR, standard RTL, anchor 1 to 4 lines) and TikTok's anchor instruction note.
- WebSearch hit the shared per-turn search limit after six queries. The help center was then navigated directly (links and its own search box) in a headless browser, which reached every page cited. No proxy or third-party reader was used.

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

- Iteration 1: full draft from the research file: hero, 50-word answer naming hubStudio once, spec table, file table, organic against ad table, safe zone section with the measured templates, failures, hubStudio (Beta), Douyin, changelog, seven FAQs, CTA.
- Iteration 2, ten weaknesses: (1) the organic against ad table carried an AI-labeling row for ads that no ads page in scope states; (2) "posting isn't available on TikTok's mobile website" rests on an ambiguous note; (3) "a stretched or compressed video fails" overstates a page that files it under recommendations; (4) the answer said "in-feed ads" up to 10 minutes, true only for auction; (5) "per second" render charge brushed against the positioning rule on rates; (6) Douyin "own accounts, own ad platform" was not in the research file; (7) the anchor was defined as a fact rather than as what the file draws; (8) the Arabic mirror was asserted before the file was viewed; (9) a closing triad ("covers ... covers ... covers") read machine-built; (10) "the forums name more causes" had no source.
- Iteration 3: all ten fixed; the RTL file was opened and confirmed mirrored; the organic against ad table rebuilt with shape and size, caption, sound and safe zone rows, all sourced.
- Iteration 4: production check: five tables, five sourced blockquotes, every figure dated, Reviewed line visible, three internal references plus the Douyin pair and the hub.
- Iteration 5: removed "simply", replaced a performative closing line, varied section openings.
- Iteration 6: zero em dashes in the file; all five blockquotes in one format (claim, then Source line with date and method).
- Iteration 7 ran as the cadence variant, not the planted-error variant: long safe-zone method paragraph followed by a two-sentence one, single-line question answer in the hubStudio section ("No connected account? Publish manually"), the closing triad broken into two sentences, contractions where a reporter would use them. No deliberate errors.
- Iteration 8: check 2 re-rendered all 11 cited pages and re-downloaded the template zip (same MD5); every quoted string present. R8 table written; six phrases removed (listed in the research file).
- Iteration 9: title 42 characters, meta 147, excerpt 24 words, counted by script.
- Iteration 10: second pass for tells: no "seamless", "leverage", "robust", "delve" or "it's not just"; one balanced sentence pair broken.
- Iteration 11: "A post missing from the profile may simply be private" rewritten to the help page's sense.
- Iteration 12: tables aligned, five columns maximum, bulleted failure list with bold lead-ins (no ordinals).
- Iteration 13: five concepts considered (a tall doorway framing a dancer, the safe zone as architecture; a gaffer taping margins on a studio monitor; a vertical contact sheet under a loupe; a stage with a proscenium cutting the top and bottom; a phone-height window in a Shanghai stairwell). Chosen: the doorway, because it says "keep the subject in the clear window" without a screen, a logo or text, and does not repeat the Douyin hero's acetate overlay.

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

- 1 to 4: newsroom register confirmed; ten weaknesses: blockquote one said "the caption and buttons cover" the top band (the top band is the For You header, rewritten as "shades"); "Size guides ... quoting something else" sharpened; "forums" claim cut; the answer paragraph re-wrapped and scoped to auction ads; the hubStudio close split; FAQ "probably capped" softened to "may have been"; the safe-zone method note moved directly under the two quotes; "we" kept for the studio voice; the changelog given every page month; the Douyin paragraph tied to the hub.
- 5 to 7: contractions checked; two stacked declaratives merged; no planted errors.
- 8: the skill's 60/156 ceilings overridden by the house 52/152/25: title 42, meta 147, excerpt 24 words. Nothing trimmed back because nothing exceeded.
- 9 to 10: one rhetorical triad left only where it is a real list (Wi-Fi, cache, restart, update is TikTok's own list).
- 11, hostile reader, ten problems fixed: freshness cue (Reviewed line plus changelog) confirmed; every table row dated; "Not published" made explicit in the organic rows so no cell looks empty; the derived box labeled as derived twice; the scaling stated as arithmetic; the blue strips explained (no legend, treated as off limits); TopView's two stages given; the 10-minute hubStudio window explained against TikTok's 60; the no-amount money rule held; Douyin warned off.
- 12: rigid bold-label passages are the failure list only (5 items) against 9 prose sections: under half.
- 13: markers hunted; none of the listed words present; one "covers x3" triad broken earlier.
- 14 to 16: read aloud; the hero kept to two sentences; one mid-page cue ("One absence matters before the tables") kept, no more added.
- 17: H1 once, ten H2s, seven H3s in the FAQ; zero em dashes; American spelling (check-draft passes); every blockquote attributed.
- 18: no repeated humanizer ("simply" removed, no "honestly", no "actually").

## Image

- Prompt used: verbatim in the FEATURE IMAGE block of `output/tiktok-video-specs.md`.
- Confirmed the prompt names no real person: yes (a film stock is named, no photographer, artist or celebrity).
- Attempts: one. Generated 1536x1024 PNG with gpt-image-2, high quality, landscape 3:2.
- AI-tells checklist run against the final frame: one light source from the left, one shadow on the inner doorway wall; skin with texture and asymmetry; motion blur on the reaching hand reads as a real shutter; no plastic gloss, no bokeh halos, no impossible reflections; no text on the equipment cases; the right two thirds is empty plaster for type; film grain and lifted blacks present. Passed.
- Saved to: `public/Images/insight-tiktok-video-specs.webp`, 1536x1024 (source width, no enlargement), webp quality 78, 49 KB. Intermediates kept in the session scratchpad only.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (TikTok and Douyin are platforms; no tool or agency named in the draft) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, brief module, log); U+2014 also stripped from the saved capture text files |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none in the draft (check-draft passes) |
| Statistics in blockquotes with source, date and method | 5 of 5 |

## Sources

- New figures added to the ledger, with both check dates: see "Ledger additions" below (integrator merges).
- Rows added to the do-not-publish log: see "Ledger additions".

## Closed in this run

- First-party figures used, each with the site page that already publishes it: hubStudio TikTok facts from `src/content/help/tiktok.md` (published as /help/tiktok) and `hubstudio-positioning.md`; no delivery or client figure.
- Spec rows published under deviation 7: none. This is a Western platform spec page: primary readings, visible Reviewed date, quarterly watch row.
- Claims cut and which section is now thinner: organic file size, resolution, frame rate and web upload limits (the file table's organic row reads "Not published" instead, and the text says why).
- Briefs amended: none; the brief module was written in this run and matches the research.
- Live articles this piece contradicts: two, listed below with the exact fix. This run may not edit `src/pages/*`, `src/data/*` or other agents' drafts, so the integrator applies them in the publish commit, with `dateModifiedISO` moved to the publish date.
- Rows added to `watch.csv`: one, below (integrator merges).
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its hero image).
- Runbook substitutions: WebSearch capped by the shared per-turn limit after six queries; the help center was navigated directly instead (its own links and search box). The TikTok Studio web uploader sits behind a login and was not read; its absence is stated on the page.
- Integration, 2026-10-08: both live fixes applied in English, page and `output/` draft together, `dateModifiedISO` 2026-10-08, and an amendment section in each research file. `meta-tiktok-against-douyin-rednote`: this log's wording and the vertical-video-ad log's, merged (FAQ, the line and blockquote on what TikTok prints, the box blockquote with x 120 to 780 and y 420 to 906, the box lead-in, the spec-table cell). `douyin-video-specs-safe-zones`: two-app box now x 120 to 780, y 288 to 906 (blockquote, box table, re-export table), rail blockquote with TikTok's 300 and 240 px right insets, caption section and both FAQ answers reworded to third-party insets against TikTok's own template.
- Integration, 2026-10-08: the two brief 32 ledger rows were amended in place as asked. The Camera tools row (10 minutes recorded, 60 uploaded) also backs youtube-shorts-specs, which had logged that figure as unpublished; that page now cites it.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 57, tiktok-video-specs)") and watch rows merged into `watch.csv`, sorted by due date.

## Ledger additions

Append to `editorial/sources/verified-sources.md` under a new heading
`### TikTok organic and ad specs, safe-zone templates (added 2026-10-08, brief 57)`:

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Videos recorded in TikTok up to 10 minutes; uploaded up to 60 minutes; a sound picked first sets the length | "TikTok Help Center, Camera tools, read October 8, 2026 (undated page)" | support.tiktok.com/en/using-tiktok/creating-videos/camera-tools (tiktok.com/support/faq_detail?id=7581821547946580492) | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 57 |
| Web upload sends the entire video, trim in the app; photo post up to 35 photos; app troubleshooting list | "TikTok Help Center, Making a post, read October 8, 2026" | support.tiktok.com/en/using-tiktok/creating-videos/making-a-post (id=7581826684085606968) | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 57 |
| Up to 35 items per editing session, 8 overlays, one sound | "TikTok Help Center, Editing TikTok videos and photos, read October 8, 2026" | support.tiktok.com/en/using-tiktok/creating-videos/editing-tiktok-videos-and-photos (id=7581820702974679608) | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 57 |
| Realistic AI content must be labeled; auto label from C2PA Content Credentials cannot be removed | "TikTok Help Center, About AI-generated content, read October 8, 2026" | support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content (id=7636670084747893268) | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 57 |
| TikTok's help center publishes no organic ratio, resolution, file size, format or bitrate; the Studio web uploader is behind a login | "eight TikTok Help Center pages and its search, October 8, 2026" | Pages above plus Unable to post videos (id=7078299667292756485); tiktok.com/tiktokstudio/upload redirects to /login | 2026-10-08 | primary by absence | 2026-10-08 | 2026-10-08 | 57 |
| Auction in-feed, reservation in-feed and TopView rows re-read: unchanged from the brief 32 rows (June 2026, July 2025, June 2026) | as brief 32 rows | as brief 32 rows | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 32, 57 |
| Reservation creative notes: no white or transparent backgrounds (white UI text), not stretched or compressed, no watermarks including TikTok's, must not mimic the interface; TopView: in-feed safe zone stricter than open screen, text in the preview tool's red areas "should be rejected", no QR codes or contact info | "TikTok Ads Manager help, reservation (July 2025) and TopView (June 2026) specifications" | ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency; .../tiktok-reservation-topview | 2025-07; 2026-06 | primary | 2026-10-08 | 2026-10-08 | 57 |
| Ad review checklist: clear audio required for video ads; no prompts for unsupported actions (swipe up, mouse cursor); creative consistent with landing page | "TikTok Ads Manager help, ad review checklist, last updated February 2025" | ads.tiktok.com/help/article/ad-review-checklist | 2025-02 | primary | 2026-10-08 | 2026-10-08 | 57 |
| Carousel ads: 2 to 35 images, JPG/JPEG/PNG, 100 KB or less suggested, 1200x628, 640x640, 720x1280; MP3 music required, 2 s or more, upload up to 10M | "TikTok Ads Manager help, Specifications for Carousel Ads, last updated September 2026" | ads.tiktok.com/help/article/specifications-for-carousel-ads | 2026-09 | primary | 2026-10-08 | 2026-10-08 | 57 |
| In-feed standard LTR template, 720x1280: shaded top 160, bottom 440, sides 80, right column 120 wide from y 560; on 1080x1920 top 240, bottom 660, sides 120, right 300 below y 840 | "TikTok's In-Feed Standard LTR template, linked from the auction in-feed spec page, downloaded October 8, 2026; labels in the file, checked pixel by pixel; 1080x1920 values scaled" | lf-tt4b.tiktokcdn.com/obj/i18nblog/tt4b_cms/en-US/5jqet0ab9qci-10e7f5Vig4uhAscNP8XPB0.zip (MD5 6d2918b2cc2f1488c2370e2a89e368a1) | 2026-10-08 | primary for the file values, derived for the scaled values | 2026-10-08 | 2026-10-08 | 57 |
| In-feed with anchor LTR templates, vertical 540x960: top 126, sides 60, right column 120 from y 180, bottom 406, 439, 473, 507 for 1 to 4 caption lines; on 1080x1920 top 252, sides 120, right 240 below y 360, bottom 812, 878, 946, 1014 | "TikTok's In-Feed with Anchor LTR templates, the same page, October 8, 2026; labels printed in the files; 1080x1920 values scaled" | Anchor zip linked from the auction in-feed page (the page's download control) | 2026-10-08 | primary for the file values, derived for the scaled values | 2026-10-08 | 2026-10-08 | 57 |
| Derived: x 120 to 780, y 252 to 906 on 1080x1920 clears every vertical TikTok in-feed template, any caption length | "derived from TikTok's template files, October 8, 2026, not a TikTok figure" | Arithmetic in research/tiktok-video-specs.md | 2026-10-08 | derived | 2026-10-08 | 2026-10-08 | 57 |

Amend two existing rows in the same commit:

- Row "No TikTok in-feed or TopView spec page prints a safe-zone inset ..."
  (brief 32): add "in page text. The template files those pages link print
  the insets; see the brief 57 template rows (2026-10-08)."
- Do-not-publish row "Any TikTok safe-zone inset (130/484/44/140; about
  1080x1420; central 80 to 90 percent; 108/320/60/120)": keep it for those
  third-party sets, and add "TikTok's own template values are cleared in the
  brief 57 rows; use those, never these."

New do-not-publish rows:

| Item | Where it appears | Why not | Checked |
|---|---|---|---|
| TikTok organic file caps 287.6 MB iOS, 72 MB Android, 500 MB web, 4 GB, 10 GB, 30 GB | Tool and agency size guides | On no TikTok Help Center or Ads Manager page; uploader behind login | 2026-10-08 |
| TikTok organic resolution floors and ceilings (360 px, 720x1280, 4096 px), 23 to 60 fps | Tool guides, some from developer docs | Not on a help page in scope | 2026-10-08 |
| "TikTok's right-side buttons cover 22 percent of the frame" | SERP snippet | No source; TikTok's own templates give 300/1080 (standard, below y 840) or 240/1080 (anchor) | 2026-10-08 |
| TikTok desktop scheduling: Business Account with 10,000 followers, 15 minutes to 10 days ahead | Help Center "Schedule video" (id 7078299678101477893) | Undated, older article generation; not used until confirmed against a current page | 2026-10-08 |

## Watch rows

```
2027-01-08,tiktok-video-specs,"Quarterly recheck of a spec page. Re-read TikTok Help Center Camera tools (10 and 60 minutes, sound rule), Making a post (35 photos, whole-file web upload), Editing videos and photos (35 items, 8 overlays) and About AI-generated content; re-read Ads Manager auction in-feed (June 2026), reservation in-feed (July 2025), TopView (June 2026), creative best practices (June 2025), ad review checklist (February 2025) and carousel specs (September 2026), noting each Last updated month; re-download the in-feed standard and anchor template zips and compare (standard MD5 6d2918b2cc2f1488c2370e2a89e368a1). Update changed rows, add a changelog line, move the Reviewed date and dateModifiedISO, then add the next quarterly row.",support.tiktok.com/en/using-tiktok/creating-videos/camera-tools; ads.tiktok.com/help/article/tiktok-auction-in-feed-ads,2026-10-08
```

## Live pages this piece contradicts

Both rest on third-party TikTok insets or on "TikTok publishes no inset",
which TikTok's own template files now disprove. Fix in the publish commit,
page and `output/` draft together, `dateModifiedISO` to the publish date, and
the French and Chinese dictionary entries of every changed sentence.

1. **/resources/insights/meta-tiktok-against-douyin-rednote**
   (`src/pages/resources/insights/meta-tiktok-against-douyin-rednote.astro`,
   `editorial/output/meta-tiktok-against-douyin-rednote.md`).
   - FAQ "How do TikTok and Douyin safe zones differ?" (schema at line 19 and
     body at line 348): replace "TikTok publishes no inset. Its help pages say
     the safe zone shrinks with caption length and supply template files
     instead, and every TikTok pixel figure in circulation is third-party."
     with "TikTok prints no inset in its page text, but the template files its
     spec pages link do: on 1080 by 1920, 240 pixels at the top, 660 at the
     bottom, 120 at each side and 300 on the right below the 840 mark, more at
     the bottom as the caption grows."
   - Line 138 and the blockquote at line 140: change "which TikTok does not
     publish as a number at all" / "TikTok does not print a safe-zone inset on
     its in-feed or TopView spec pages" to say it prints none in the page text
     and prints them on the linked template files, and drop "The pixel insets
     that circulate for TikTok come from other publishers" in favor of "most
     pixel insets in circulation are other publishers', and they disagree".
   - Blockquote at line 164: replace "TikTok adds no number, because TikTok
     publishes none: check the file against its template for the caption you
     plan to run." with "TikTok's own in-feed templates are stricter at the
     right and bottom: to clear them too, keep the box between 120 and 780
     pixels across and 420 and 906 down." (Intersection of x 108 to 972,
     y 420 to 1248 with TikTok's x 120 to 780, y 252 to 906.) Update the
     source line to add "TikTok's in-feed template files, downloaded October 8,
     2026".
2. **/resources/insights/douyin-video-specs-safe-zones**
   (`src/pages/resources/insights/douyin-video-specs-safe-zones.astro`,
   `editorial/output/douyin-video-specs-safe-zones.md`).
   - Blockquote at line 166: replace "To clear the published TikTok insets as
     well, narrow it to 108 to 940 across and 288 to 1436 down." with "To
     clear TikTok's own in-feed templates as well, narrow it to 120 to 780
     across and 288 to 906 down." and add "TikTok's in-feed template files,
     October 8, 2026" to the source line at 167.
   - FAQ "Can I upload a TikTok video to Douyin?" (lines 11 and 273) and the
     section at lines 203 to 208: the "270-pixel TikTok bottom inset" is a
     third-party figure. TikTok's own template keeps the bottom 660 pixels
     clear (812 to 1,014 with an anchor), deeper than every published Douyin
     bottom band (200 to 380). Rewrite: a caption placed to TikTok's own
     template already clears every published Douyin bottom band; what moves is
     anything placed to a third-party TikTok inset. Drop "lower than a TikTok
     layout assumes" (line 203) or reword it to "lower than the third-party
     TikTok insets assume".
   - Line 157 and 160 (rail width): add that TikTok's own template files draw
     the right column at 180 pixels on the standard file and 240 on the anchor
     file at 1080 by 1920, wider than the 100 to 140 pixels in circulation.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 42 | 52 | yes |
| Meta description | 147 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Decisions recorded

- Category: Platform specs. French slug proposed: `specs-video-tiktok`.
- 1080 by 1920 is used only as the frame the template values are scaled to,
  never as a TikTok requirement: no TikTok page in scope states it.
- hubStudio's 3-second to 10-minute window is stated as the app's own limit,
  with the 60-minute TikTok upload explained beside it; "TikTok takes 5
  hashtags at most" and "about 15 posts a day" from the hubStudio help are not
  used, because no TikTok page in scope states them.

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/tiktok-video-specs`, French address `/fr/ressources/analyses/tiktok-specifications-video-et-zones-de-securite` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/tiktok-video-specs/` and `.i18n-work/passes/zh/resources/insights/tiktok-video-specs/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

[lede] pass1 -> pass3: « TikTok publie bien sa zone de sécurité. Pas dans le texte de ses pages d’aide, mais sur les fichiers de modèles que ces pages proposent en téléchargement, en pixels » -> « TikTok publie bel et bien sa zone de sécurité, au pixel près. Non pas dans le texte de ses pages d’aide, mais sur les modèles qu’elles proposent au téléchargement. » / why: the English clause order left « en pixels » dangling at the end; split into a sharper three-beat opening.
[h2 specs] pass1 -> pass3: « Quelles sont les spécifications vidéo de TikTok en 2026 ? » -> « Vidéo TikTok : quelles spécifications en 2026 ? » / why: French press heading form, same pattern as the Douyin specs pages.
[answer box] pass1 -> pass3: « Les spécifications vidéo de TikTok pour 2026, d’après les pages de TikTok elles-mêmes : » -> « Selon ses propres pages, TikTok accepte en 2026 jusqu’à 10 minutes… » ; « hubStudio publie sur TikTok un clip… une fonction encore en bêta » -> « Dans hubStudio, la publication sur TikTok, encore en bêta, prend des clips de 3 secondes à 10 minutes » / why: noun-chain opener calqued on English; the product sentence now carries the bêta as an incise.
[review note] pass1 -> pass2: « Le centre d’aide grand public n’affiche aucune date de mise à jour : ses lignes portent donc… » -> « Faute de date de mise à jour sur le centre d’aide grand public, ses lignes portent la date de consultation. Les pages publicitaires, elles, affichent un mois » / why: causal construction and contrastive « elles » read as written French.
[absence] pass1 -> pass3: « Une absence compte avant même les tableaux » -> « Un constat s’impose avant les tableaux : » / why: literal « one absence matters » sounded translated.
[table 1] pass1 -> pass2: « Spark Ads (reprise d’un post) / Tel que publié » -> « Spark Ads (à partir d’un post) / Identique au post » / why: clearer cell wording.
[evidence 1] pass1 -> pass2: « Si l’on choisit d’abord un son, c’est la durée de ce son qui fixe celle de la vidéo » -> « Choisissez d’abord un son, et c’est sa durée qui fixe celle de la vidéo » / why: tighter, conditional imperative.
[best practices] pass1 -> pass3: « Ce qui se rapproche le plus d’une consigne… » -> « le repère le plus proche se trouve côté publicité » ; « Ce sont des recommandations » -> « Il s’agit de recommandations, pas de limites à l’import » / why: drop the English « the nearest thing » skeleton.
[table 2 / 3] pass1 -> pass2: « Son net exigé lors de la vérification » -> « Son net exigé à la modération » ; « Votre propre texte » -> « Le texte de votre choix » ; « Fichiers de modèles qui rétrécissent… » -> « Des fichiers de modèles dont la zone rétrécit quand la légende s’allonge » / why: « review » is « modération » in ad trade French; the files do not shrink, the zone does.
[evidence 2] pass1 -> pass3: long enumeration -> « … en MP4, MOV, MPEG, 3GP ou AVI : 10 minutes et 500 Mo au plus, 516 kbit/s au moins. » / why: colon and paired limits instead of a chain of « jusqu’à, pour, et ».
[reservation rules] pass1 -> pass2: « pas de filigrane, y compris celui de TikTok » -> « aucun filigrane, pas même celui de TikTok » ; « car le logo TikTok s’y fond » -> « : le logo TikTok s’y fondrait » / why: native negation, conditional states the reason as consequence.
[safe zone intro] pass1 -> pass2: « décrivent la zone de sécurité avec des mots » -> « décrivent la zone de sécurité sans la chiffrer » ; « fichiers zip auxquels renvoie » -> « archives zip liées depuis la page » / why: « avec des mots » was a calque of « in words ».
[template evidence] pass1 -> pass2: sentences now open on the frame (« Sur un cadre de 720 × 1280, le modèle… ») and the anchor margins read « la marge passe de 406 à 439, 473 puis 507 pixels » / why: French puts the setting first; the progression reads as a sequence.
[method note] pass1 -> pass3: « Cette conversion est notre calcul, une simple multiplication, et non un chiffre de TikTok » -> « Cette conversion est de notre fait : une simple multiplication, pas un chiffre de TikTok » / why: idiomatic attribution.
[safe box] pass1 -> pass2: « En superposant les deux familles, un seul cadre passe… » -> « Superposez les deux familles : un même cadre convient à tous les modèles verticaux » / why: dangling gerund removed.
[TopView] pass1 -> pass2: « TopView ajoute une seconde phase » -> « TopView se joue en deux temps » / why: native idiom.
[failures h2] pass1 -> pass2: « Pourquoi une mise en ligne échoue sur TikTok, selon TikTok » -> « Échec de mise en ligne sur TikTok : les causes selon TikTok » / why: nominal heading with colon, French press style.
[failures list] pass1 -> pass2: « L’import web a pris tout le fichier » -> « L’import web a envoyé le fichier entier » ; « Les solutions de TikTok : basculer… » -> « TikTok recommande de basculer… » ; « Le son a coupé le clip » -> (pass3) « Le son a raccourci le clip » / why: verbal constructions instead of a label plus infinitive list.
[ads review] pass1 -> pass2: « Côté publicité, les règles sont plus strictes » -> « Côté publicité, le cadre se resserre » ; « proscrit les invitations à des gestes » -> « bannit toute incitation à un geste que l’application ne gère pas » / why: stronger verbs, singular generic.
[hubStudio section] pass1 -> pass2: « montre en rouge les zones où… recouvrent l’image » -> « signale en rouge les zones que la légende, la ligne du son et les boutons de TikTok viennent masquer » ; « déjà cochée » -> « cochée d’office » ; « Reste à publier » -> « Il ne reste qu’à publier » ; « l’envoi est relancé, avec trois tentatives en tout » -> « déclenche de nouvelles tentatives, trois en tout » / why: rhythm and native verbs; labels match the app (Mes connexions, Bibliothèque de contenus, Éditeur vidéo, Duo, Collage, Publier manuellement).
[Douyin] pass1 -> pass2: « Douyin obéit à une autre fiche technique » -> « Douyin, une autre fiche technique » ; « de la même maison mère » -> « du même groupe » / why: shorter heading, natural corporate term.
[FAQ headings] pass1 -> pass3: « Quelle taille pour une vidéo TikTok ? » -> « Vidéo TikTok : quelle taille ? » ; « Quelle est la zone de sécurité TikTok en pixels ? » -> « Zone de sécurité TikTok : combien de pixels ? » ; same for in-feed and photos / why: consistent French FAQ pattern across the specs hub.
[FAQ safe zone] pass1 -> pass3: « laissez sans texte les 240 pixels du haut… plus une marge droite de 300 pixels » -> « n’écrivez rien dans les 240 pixels du haut, les 660 du bas ni les 120 de chaque côté, et portez la marge droite à 300 pixels sous la cote 840 » / why: direct instruction, no English « plus ».
[SEO] title kept at pass1: « Formats vidéo TikTok et zones de sécurité 2026 | hubStudio » (58 characters).

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass2: TikTok 视频规格与安全区（2026）| hubStudio -> 2026 年 TikTok 视频规格与安全区 | hubStudio / why: the year leads, as a Chinese headline puts it, no bracket before the pipe
[lede] pass1 -> pass3: TikTok 其实公布了安全区：不在任何帮助页面的正文里，……却几乎没有人引用。 -> TikTok 其实公布过安全区数值。它不在任何帮助页面的正文里，而是以像素标在这些页面附带的模板文件上，几乎没人引用。 / why: one long English-shaped sentence split into two, 附带 instead of 提供的
[answer] pass1 -> pass3: 根据 TikTok 自己的页面，2026 年的视频规格如下 -> 据 TikTok 官方页面，2026 年的视频规格如下 / why: 书面语 opener; 不低于 / 不超过 replace 及以上 / 及以下 in running prose
[method] pass1 -> pass2: 均于当天查阅……每行都会写明 -> 并于当天查阅……各行照录 / why: tighter written register
[absence] pass1 -> pass3: 在看表格之前，有一个缺失值得注意。 -> 看表之前，有一处空白须先交代： / why: 缺失值得注意 was a calque of "one absence matters"
[ads advice] pass1 -> pass2: 将这些列为基础要求。它们是建议，而不是上传限制。 -> 把这几条归入基本功。它们只是建议，并非上传限制。 / why: native idiom, 并非 for the contrast
[table cells] pass1 -> pass2: 与原帖相同 / 不能完全无声 / 必须配 MP3 音乐，时长 2 秒及以上 -> 沿用原帖 / 不得完全静音 / 须配 MP3 音乐，不少于 2 秒 / why: spec-sheet register (不得, 须)
[reservation rules] pass1 -> pass2: 配文在显示“查看更多”之前展示四行 -> 配文显示四行，其余收进“查看更多” / why: English "before" clause rebuilt as a Chinese sequence
[TopView quote] pass1 -> pass2: 因为 TikTok 标志在白色背景上会消失 -> 因为白底会让 TikTok 标志隐没不见 / why: verb-led cause, 白底 is the trade word
[safe zone method] pass1 -> pass3: 这一步是我们自己的计算，即直接相乘，并不是 TikTok 的数字 -> 换算是我们做的，不过是简单的乘法，并非 TikTok 的数字 / why: drops the 即 gloss, reads like an editor's aside
[safe box] pass1 -> pass3: 就有一个框能避开所有竖版模板，不管配文多长 -> 可以框出一块无论配文多长、在所有竖版模板上都不受遮挡的区域 / why: the English "clears every template" made concrete; 不管 is spoken
[organic note] pass1 -> pass2: 广告模板是 TikTok 自己画出的唯一地图……和普通帖子上的一样 -> TikTok 亲手画的唯一一张地图……与普通帖子并无二致 / why: rhythm and a firmer written close
[failures h2] pass1 -> pass3: TikTok 上传为什么失败：TikTok 自己的说法 -> TikTok 上传为何失败：看 TikTok 官方说法 / why: 为何 in a headline; pass2's 听……怎么说 was too spoken
[web upload] pass1 -> pass3: 网页上传传了整个文件。 -> 网页端把整段文件都传了上去。 / why: 传了……传 repetition removed, 网页端 is the usual term
[ads review] pass1 -> pass3: 禁止引导应用不支持的操作，例如上滑或鼠标光标 -> 不得出现应用不支持的操作提示，例如上滑手势或鼠标光标 / why: pass1 said a cursor was an "action"; now both are on-screen prompts, as in TikTok's rule
[hubStudio publishing] pass1 -> pass3: 提交帖子的人会收到一封邮件，说明 TikTok 的反馈 -> 将帖子加入队列的人会收到邮件，附上 TikTok 的反馈 / why: "queued" was lost in pass1; 共尝试三次 keeps "three attempts in all" exact
[hubStudio publishing] app labels: 我的连接, 素材库, 视频编辑器, 合拍, 拼接, 手动发布, 立即发布 / 定时发布, 测试版, from the app's zh.json
[Douyin] pass1 -> pass2: 抖音是另一份规格表 / 不要相信引用这些数字的抖音指南 -> 抖音的规格另成一套 / 引用这些数字的抖音指南也不可轻信 / why: native headline, 不可轻信 as on the Douyin pages
[FAQ size] pass1 -> pass3: 对两者来说都是稳妥的做法 -> 广告和普通帖子都能稳妥过关 / why: "both" spelled out, verb ending
[FAQ upload] pass1 -> pass2: 比计划短的视频，可能是被先选择的音乐限制了长度 -> 视频若比预期短，可能是被先选的音乐截短了 / why: conditional clause leads, as Chinese prefers

## Publish

- Page created: `src/pages/resources/insights/tiktok-video-specs.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
