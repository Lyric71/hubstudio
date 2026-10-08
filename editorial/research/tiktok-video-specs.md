# Research: tiktok-video-specs

| Field | Value |
|---|---|
| Brief | 57 (wave two, `editorial/scripts/wave2/57-tiktok-video-specs.mjs`) |
| Target query | tiktok video specs |
| Secondary queries | tiktok video size; tiktok ad specs; tiktok safe zone; tiktok video length limit |
| Gap statement (one sentence) | The ranking guides mix organic and ad figures, print file caps and web upload limits that no TikTok page states, and treat the safe zone as either a blur or a set of borrowed pixels, while TikTok's own downloadable template files print the insets and nobody cites them. |
| Research time spent | About 2 hours 30 minutes active: 5 English SERPs classified, 4 ranking pages fetched, 13 TikTok Help Center and TikTok Ads Manager help pages rendered logged out, the help center search tried, the TikTok Studio upload page tried (login wall), 5 safe-zone template archives downloaded from TikTok's own CDN and measured |
| Written | 2026-10-08 |
| Check 1 | 2026-10-08, every TikTok surface rendered in a logged-out headless Chromium (Playwright, en-US), 7 seconds after DOM load, body text saved to `research/tiktok-video-specs/` |
| Check 2 | 2026-10-08, iteration 8, see R8 |

## Method notes

1. **Sources are TikTok's own pages only**, per the brief: the TikTok Help
   Center (support.tiktok.com, which now redirects to tiktok.com/support
   article ids), the TikTok Ads Manager help center (ads.tiktok.com/help), and
   the template files those pages link. No developer documentation, no third
   party. This is a Western platform spec page under the wave two rule:
   primary readings, no deviation 7 disclaimer, a visible reviewed date and a
   quarterly watch row.
2. **The consumer help center serves no dates.** Its articles print no "last
   updated" line. Each row from it carries the read date, October 8, 2026. The
   Ads Manager pages print "Last updated: Month Year", carried per row.
3. **The safe-zone templates are TikTok's own files.** The auction in-feed
   spec page links five zip archives served from lf-tt4b.tiktokcdn.com. The
   in-feed standard archive holds one PNG, 2880 x 5120 (a 720 x 1280 frame at
   4x) with dimension labels printed by TikTok. The anchor archive holds 12 PNGs
   (vertical, square, horizontal, 1 to 4 caption lines) and a text note. The
   standard file was measured pixel by pixel; the anchor files were read from
   the dimension labels TikTok prints on them. Values are given in the file's
   own frame and scaled linearly to 1080 x 1920. Scaling is arithmetic, not a
   TikTok statement, and the page says so.
4. **The organic help center publishes no dimension, resolution, file size,
   format or bitrate for an organic post.** Checked: Making a post, Camera
   tools, Editing posting and deleting, Editing videos and photos, TikTok
   Studio, Unable to post videos, Schedule video, About AI-generated content;
   the help center search returned no match for "aspect ratio" and nothing for
   "upload video size". The TikTok Studio web upload page sits behind a login.
   The page states this absence rather than filling it.

## R2. SERP map

Query: `tiktok video specs` (primary), 2026-10-08

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | renderforest.com | Tool vendor blog, fetched | 1080x1920, 9:16, MP4 H.264, 23 to 60 fps, Studio upload "10 GB, up to 30 minutes", API 4 GB, ads 500 MB; 11 tables, about 3,200 words; says the safe zone depends on dimensions and caption | Cites developer docs for organic numbers; no measured inset; the 10 GB and 30 minute figures are not on any TikTok help page read | 2026-06-21 |
| 2 | influencermarketinghub.com | Marketing media, fetched | Ad ratios, 720x1280 floors, 9 to 15 s, 500 MB | Cites third parties, no TikTok page; 2 tables, both off-spec (costs, demographics); no safe-zone figure | 2026-07-07 |
| 3 | stackinfluence.com | Agency blog | Video sizes | Not fetched; snippet repeats device caps | Undated |
| 4 | insense.pro | Creator platform blog | Size guide | Not fetched | 2026 in title |
| 5 | chat.project-aeon.com | Aggregated blog | Social video specs 2025 | Off-source | 2025 |
| 6 | buycoverartwork.com | Unrelated blog | Video size | Thin | Undated |
| 7 | postfa.st | Scheduling tool page | TikTok video spec card | Tool page, no TikTok citation in snippet | Undated |
| 8 | cs-spark.ex.mountain.com | Ad-tech blog | Ad specs 2026 | Ad only | 2026 |

Query: `tiktok video size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | wevideo.com | Editing tool blog | 1080x1920 | Tool vendor; device caps | Undated |
| 2 | pippit.capcut.com | Editing tool page from the platform's sibling app | Size guide | Not TikTok help; not cited | Undated |
| 3 | stackinfluence.com | Agency blog | Size guide | As above | Undated |
| 4 | influencermarketinghub.com | Marketing media | Size guide | Third-party sourcing | Undated |
| 5 | fliki.ai | AI tool tutorial | Size | Tool page | Undated |
| 6 | aiarty.com | Software vendor KB | "287.6 MB iOS, 72 MB Android" | No TikTok page carries these | Undated |
| 7 | async.com | Tool blog | Size guide 2025 | 2025 | 2025 |
| 8 | assfinet.acturis.com and dash.mainframe.outdoorvoices.com | Spam mirrors on hijacked subdomains | Copied guides | Not sources | Undated |

Query: `tiktok safe zone`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | litcommerce.com (PDF) | Commerce tool template PDF | Templates | Not TikTok's file | 2025-04 |
| 2 | my-test.valpo.edu | Spam mirror | Tips | Not a source | Undated |
| 3 | houseofmarketers.com | Agency blog | "Central 80 to 90 percent" | Not on any TikTok page | 2024 image paths |
| 4 | rocketshiphq.com | Agency blog | TikTok and Instagram safe zones | Not fetched | Undated |
| 5 | adkit.so | Safe-zone tool, fetched | In-feed top 240, bottom 660, sides 120; anchor 4 lines top 252, bottom 1014; links the TikTok auction page | The only result whose figures match TikTok's own template when scaled; does not show the file or the 1 to 3 line steps | Updated 2026-09-10 |
| 6 | nginx2.kemptechnologies.com, luckydraw.tcl.com, old.artsprofessional.co.uk | Spam mirrors, some about account safety | Off intent | Not sources | Undated |

Query: `tiktok video length limit`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | metricool.com | Social tool blog, fetched | 60 minutes upload, 10 minutes record, the sound-length rule; "30GB" file size | 30GB is on no TikTok page read; no ad lengths; 1 table | 2025-10-03 |
| 2 | adnews.com.au | Trade news | 10-minute rollout | 2022 news | 2022 |
| 3 | breakingnews.ie | News | 3-minute limit | 2021 | 2021 |
| 4 | shopify.com | Commerce platform blog | How long a TikTok can be | Not fetched | Undated |
| 5 | dtnext.in, ianslive.in | News syndication | 15-minute test | 2023 test | 2023 |
| 6 | dexerto.com | Entertainment news | Length guide | Not fetched | Undated |

Query: `tiktok ad specs`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | blog.udonis.co | Agency blog | Ad specs | "60 seconds max" for all ads, wrong for auction in-feed (10 minutes) | Undated |
| 2 | megadigital.ai | Agency blog | Ad formats | Not fetched | Undated |
| 3 | pixlee.com | UGC platform blog | Ad specs | Not fetched | Undated |
| 4 | cometly.com | Attribution tool blog | Ad specs | Not fetched | Undated |
| 5 | nestscale.com | App vendor blog | Ad specs 2025 | 2025 | 2025 |
| 6 | influee.co (three locales) | Creator platform blog | Ad specs 2026 | Not fetched | 2026 |
| 7 | thebrief.ai | Tool blog | Ad specs | Not fetched | Undated |

**The bar:** 1,500 to 3,200 words, up to 11 tables at the top, FAQ blocks of
up to 13 questions. Most pages are tool or agency content. Three spam mirrors
on hijacked subdomains appear on three of the five queries.

**The gap, in one sentence:** No ranking page separates the in-app record
limit, the upload limit and the four ad formats by TikTok source, and none
reads the insets TikTok prints on its own safe-zone template files, so every
safe-zone number in the SERP is either missing or unsourced.

## R1 and R5. Claims table

All TikTok rows: method is a primary reading of the platform's own page; who
paid: the platform, describing its own product; sample size: not applicable.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Videos recorded in TikTok can be up to 10 minutes long; videos uploaded in TikTok can be up to 60 minutes long | support.tiktok.com/en/using-tiktok/creating-videos/camera-tools (now tiktok.com/support/faq_detail?id=7581821547946580492) | No date on page; read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| If you select a sound before you record or upload, the video length is determined by the sound length | Same page | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| A web browser upload uploads the entire video; to change the length, upload in the TikTok app | support.tiktok.com/en/using-tiktok/creating-videos/making-a-post (id=7581826684085606968) | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| A photo post takes up to 35 photos | Same page | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| Up to 35 items (photos and videos) in one editing session, up to 8 overlays, one sound per post | support.tiktok.com/en/using-tiktok/creating-videos/editing-tiktok-videos-and-photos (id=7581820702974679608), FAQ | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| App troubleshooting for uploads: switch Wi-Fi and mobile data, clear the app video cache, restart app and device, update the app; a new post missing from the profile may be private | Making a post, Troubleshooting | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| Web: unable to post, refresh the page and restart the browser; not available on TikTok Mobile Web | tiktok.com/support/faq_detail?id=7078299667292756485 | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| TikTok requires creators to label AI-generated content with realistic images, audio and video; may auto label content carrying C2PA Content Credentials; an auto label cannot be removed; unlabeled AIGC may be removed | support.tiktok.com/en/using-tiktok/creating-videos/ai-generated-content (id=7636670084747893268) | Read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| The help center publishes no organic aspect ratio, resolution, file size, format or bitrate | The eight help pages above plus help center search ("aspect ratio": no match) | 2026-10-08 | 8 pages, 3 searches | Primary, by absence | n/a | primary by absence |
| The TikTok Studio web upload page is behind a login | tiktok.com/tiktokstudio/upload redirects to /login | 2026-10-08 | n/a | Observation | n/a | primary observation |
| Auction in-feed, Non-Spark: vertical 9:16 at or above 540x960 (recommended), horizontal 16:9 at or above 960x540, square 1:1 at or above 640x640; .mp4 .mov .mpeg .3gp .avi; up to 10 minutes; 500 MB or less; 516 kbps or more; captions white, uniform font, no clickable links, @ or hashtags | ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=en | Last updated June 2026; read 2026-10-08 | n/a | Primary reading | TikTok | primary |
| Spark Ads pull: .mp4 or .mov, duration no restrictions, captions from the organic post, 4 lines displayed | Same page | June 2026 | n/a | Primary reading | TikTok | primary |
| Safe zone size is set by dimension, caption length and add-ons; downloadable files: In-Feed Standard LTR, In-Feed with Anchor LTR, Arabic RTL versions | Same page | June 2026 | n/a | Primary reading | TikTok | primary |
| Reservation in-feed (Non-Spark and Spark push): same three dimensions and floors; .mp4 .mov .mpeg .3gp; 5 to 60 s, recommend 9 to 15; 500 MB or less; 2,500 kbps or more; "the longer the caption, the smaller the safe zone"; avoid transparent or white backgrounds because UI text is white; not stretched or compressed; all video creatives must have sound; no watermarks including the TikTok watermark; must not mimic the TikTok interface; captions show 4 lines, keep within 100 characters (50 CJK) to avoid See more; no links in captions | ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency?lang=en | Last updated July 2025 | n/a | Primary reading | TikTok | primary |
| TopView: vertical 9:16 at or above 540x960; .mp4 .mov .mpeg .3gp; 5 to 60 s, recommend 9 to 15; 500 MB or less; 2,500 kbps or more; two stages (3-second open screen, then in-feed), in-feed safe zone more restrictive; no plain white in the first 3 seconds; not completely silent; key text in the red areas of the preview tool should be rejected; no QR codes or contact info; caption max 100 characters; reviewed within 2 days | ads.tiktok.com/help/article/tiktok-reservation-topview?lang=en | Last updated June 2026 | n/a | Primary reading | TikTok | primary |
| Creative basics: sound or music, vertical 9:16, at least 720P, content inside the UI safe zone (recommendations, not limits) | ads.tiktok.com/help/article/creative-best-practices?lang=en | Last updated June 2025 | n/a | Primary reading of a recommendation | TikTok | primary, as recommendation |
| Ad review checklist: clear audio required for video ads; avoid prompting actions the app does not support, such as swiping up or a mouse cursor; high quality media meeting the specs; creative consistent with the landing page | ads.tiktok.com/help/article/ad-review-checklist?lang=en | Last updated February 2025 | n/a | Primary reading | TikTok | primary |
| Carousel ads (standard): 2 to 35 images; JPG, JPEG or PNG; 100 KB or less suggested; horizontal 1200x628, square 640x640, vertical 720x1280; music required, at least 2 seconds, MP3, upload up to 10M; one caption, CTA and URL for all images | ads.tiktok.com/help/article/specifications-for-carousel-ads?lang=en | Last updated September 2026 | n/a | Primary reading | TikTok | primary |
| In-feed standard template (LTR): on a 720x1280 frame, red bands top 160 px and bottom 440 px, blue side strips 80 px each, a red column 120 px wide on the right from 560 px down to the bottom band; clear area x 80 to 640, y 160 to 840, narrowed to x 80 to 520 below y 560 | Zip from the auction page, lf-tt4b.tiktokcdn.com/obj/i18nblog/tt4b_cms/en-US/5jqet0ab9qci-10e7f5Vig4uhAscNP8XPB0.zip, file In-Feed/Feed.png 2880x5120 | Downloaded 2026-10-08 | 1 file | Labels printed in the file, plus pixel scan of the shaded areas at 4x | TikTok | primary (measured from TikTok's file) |
| Same, scaled to 1080x1920: top 240, bottom 660, sides 120, right column 180 wide from y 840; clear area x 120 to 960, y 240 to 1260, narrowed to x 120 to 780 below y 840 | Arithmetic, factor 1.5 | 2026-10-08 | n/a | Linear scaling | n/a | derived |
| In-feed with anchor templates, vertical 540x960: top 126, left 60, right 60 at the top then a 120-px column from 780 px above the bottom (y 180); bottom 406, 439, 473, 507 for 1, 2, 3, 4 caption lines; TikTok's note: "The 4 versions of in-feed safe zone show how safe zone varied when clients provide different lines of copy. From one line to 4 lines." | Anchor zip from the auction page (downloaded through the page's own download control), folder "1. Vertical Feed- 540x960", feed_1 to feed_4 | 2026-10-08 | 4 files | Dimension labels printed by TikTok in each file | TikTok | primary (read from TikTok's file) |
| Same, scaled to 1080x1920: top 252, sides 120, right column 240 wide from y 360, bottom 812, 878, 946, 1014 | Arithmetic, factor 2 | 2026-10-08 | n/a | Linear scaling | n/a | derived |
| Derived box clearing every vertical template in both families on 1080x1920: x 120 to 780, y 252 to 906 (top from the anchor files, bottom from the 4-line anchor file, right from the standard file's column) | Arithmetic on the two rows above | 2026-10-08 | n/a | Intersection of the shaded areas, a composition rule, not a TikTok figure | n/a | derived |
| The standard file shades its side strips blue and the top, bottom and button column red, with no legend | In-Feed/Feed.png, pixel scan: sides RGBA 102,211,251,128; top, bottom, column 255,102,116,128 | 2026-10-08 | 1 file | Pixel scan | TikTok | primary observation |
| The Arabic RTL file mirrors the standard layout, button column on the left | In-Feed_RTL/Feed - RTL.png from the auction page | 2026-10-08 | 1 file | Viewed, labels 160, 440, 80, 120, 720 mirrored | TikTok | primary observation |
| In the anchor files the anchor is drawn as a link card ("Viewproduct") above the username; the files draw the For You furniture: username, caption, sound line, button column, nav bar | Anchor vertical files feed_1 to feed_4 | 2026-10-08 | 4 files | Viewed | TikTok | primary observation |
| Of the safe-zone results on the five SERPs, one tool page (adkit.so) prints figures that match TikTok's template when scaled; none shows the file or cites the 1 to 3 line steps | R2 tables above | 2026-10-08 | 5 SERPs | Own classification | n/a | primary observation |
| Douyin is the Chinese app from the same parent company as TikTok, a separate product with separate specs; guides quoting TikTok figures as Douyin figures are the known error on Douyin spec queries | Live insight /resources/insights/douyin-video-specs-safe-zones ("The two apps share a parent company"); ledger do-not-publish row "TikTok figures as Douyin figures", brief 05 | 2026-09-10, read 2026-10-08 | n/a | First-party page already published; ledger observation | hubStudio | first-party, site already publishes |
| hubStudio TikTok (Beta): connect own account in My Connections; one MP4, MOV or WEBM clip of 3 seconds to 10 minutes, the account may allow less; Video editor applies the 9:16 frame and shows in red where TikTok's caption, sound and buttons cover the video; caption editor keeps up to 2,200 characters; privacy, Comment, Duet, Stitch, disclosure and AI-generated label (ticked for clips rendered with AI in hubStudio); publish now or schedule; queue checked every five minutes; temporary TikTok problems retried, three attempts in all; content problems not retried, an email says what TikTok said; publish manually without a connection; publishing costs nothing; renders charged per second against the prepaid balance at the price shown | src/content/help/tiktok.md (updated 2026-10-08); hubstudio-positioning.md | 2026-10-08 | n/a | First-party help article | hubStudio | first-party, site already publishes |

## Cleared for use

> TikTok's help center says videos recorded in the app can run up to 10
> minutes and uploaded videos up to 60 minutes. Pick a sound first and the
> sound's length sets the video's length.
> Source: TikTok Help Center, Camera tools, read October 8, 2026 (the page
> carries no date). A primary reading of the platform's own page.

> Auction in-feed ads take a vertical 9:16 video at 540 by 960 pixels or more,
> 16:9 and 1:1 too, in MP4, MOV, MPEG, 3GP or AVI, up to 10 minutes, 500 MB or
> less, at 516 kbps or more.
> Source: TikTok Ads Manager help, TikTok Auction In-Feed Ads, last updated
> June 2026, read October 8, 2026. A primary reading of the spec page.

> Reservation in-feed ads and TopView run 5 to 60 seconds, with 9 to 15
> recommended, at 2,500 kbps or more, and every reservation creative must
> carry sound. TopView bans plain white in the first 3 seconds because the
> TikTok logo disappears against it.
> Source: TikTok Ads Manager help, reservation in-feed specifications (July
> 2025) and TopView specifications (June 2026), read October 8, 2026.

> On TikTok's in-feed standard template, a 720 by 1280 frame, the caption and
> buttons cover 160 pixels at the top, 440 at the bottom and a column 120
> pixels wide on the right from 560 pixels down, with 80-pixel strips marked
> on each side.
> Source: TikTok's In-Feed Standard LTR template, downloaded from the auction
> in-feed spec page (June 2026) on October 8, 2026; dimension labels in the
> file, shaded areas checked pixel by pixel.

> TikTok's anchor templates, on a 540 by 960 frame, keep 126 pixels at the top
> and 60 at each side, then give the bottom 406, 439, 473 or 507 pixels as the
> caption grows from one line to four.
> Source: TikTok's In-Feed with Anchor LTR templates, the same page, October 8,
> 2026; dimension labels printed in the four vertical files.

## Do not publish

| Item | Where it appears | Why not | Checked |
|---|---|---|---|
| Organic file size caps: 287.6 MB iOS, 72 MB Android, 500 MB web, 4 GB, 10 GB, 30 GB | Tool and agency guides on all five SERPs | No TikTok Help Center or Ads Manager page read states any of them; the web uploader is behind a login | 2026-10-08 |
| Organic minimum or maximum resolution (360 px, 720x1280, 4096 px) and frame rate (23 to 60 fps) | Tool guides; one traces to developer documentation | Not on any TikTok help page; developer documentation is out of this brief's source scope | 2026-10-08 |
| TikTok Studio upload "up to 30 minutes, under 10 GB" | One ranking guide, a SERP snippet | Behind a login; not readable | 2026-10-08 |
| "Right-side buttons cover 22 percent of the frame" | SERP snippet | No method, no source; TikTok's two template families give different column widths | 2026-10-08 |
| Third-party inset sets (130/484/44/140; about 1080x1420; central 80 to 90 percent; 108/320/60/120) | Ledger do-not-publish row from brief 32 | Not TikTok's; this page uses TikTok's own template files instead | 2026-10-08 |
| Organic caption limit and hashtag cap as a TikTok rule (2,200 characters, 5 hashtags) | hubStudio help, which states them as TikTok's rules | No TikTok page in scope read; used only as what the hubStudio caption editor does | 2026-10-08 |
| Desktop scheduling: Business Account with 10,000 followers, 15 minutes to 10 days ahead | Help center "Schedule video" (id 7078299678101477893) | Undated, older article id generation, conflicts with the TikTok Studio help page; not needed | 2026-10-08 |
| "Up to 15 posts a day" as a TikTok rule | hubStudio help | Not on a TikTok page in scope; not used | 2026-10-08 |
| Any Douyin figure | Douyin insights | Different product; the page links the Douyin insights instead of restating their numbers | 2026-10-08 |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| check1-camera-2026-10-08.txt | Camera tools, Video length section | 2026-10-08 | TikTok Help Center |
| check1-making-2026-10-08.txt | Making a post: web upload note, 35 photos, troubleshooting | 2026-10-08 | TikTok Help Center |
| check1-editing-2026-10-08.txt | Editing, posting and deleting | 2026-10-08 | TikTok Help Center |
| check1-aigc-2026-10-08.txt | About AI-generated content | 2026-10-08 | TikTok Help Center |
| check1-unable-2026-10-08.txt | Unable to post videos | 2026-10-08 | TikTok Help Center |
| check1-schedule-2026-10-08.txt | Schedule video (not used) | 2026-10-08 | TikTok Help Center |
| check1-webupload-2026-10-08.txt | TikTok Studio upload redirecting to login | 2026-10-08 | tiktok.com |
| check1-auction-2026-10-08.txt | Auction in-feed specs, June 2026 | 2026-10-08 | TikTok Ads Manager help |
| check1-reservation-2026-10-08.txt | Reservation in-feed specs, July 2025 | 2026-10-08 | TikTok Ads Manager help |
| check1-topview-2026-10-08.txt | TopView specs, June 2026 | 2026-10-08 | TikTok Ads Manager help |
| check1-bestpractices-2026-10-08.txt | Creative best practices, June 2025 | 2026-10-08 | TikTok Ads Manager help |
| check1-review-2026-10-08.txt | Ad review checklist, February 2025 | 2026-10-08 | TikTok Ads Manager help |
| check1-carousel-2026-10-08.txt, check1-carouselspec-2026-10-08.txt | Carousel ads and their specs, September 2026 | 2026-10-08 | TikTok Ads Manager help |
| template-infeed-standard-ltr-preview.png | TikTok's In-Feed Standard LTR template, flattened on gray, 540x960 preview | 2026-10-08 | Zip linked from the auction spec page |
| template-infeed-anchor-vertical-1-to-4-lines.png | TikTok's four vertical anchor templates side by side | 2026-10-08 | Zip linked from the auction spec page |
| template-anchor-instruction.txt | TikTok's note inside the anchor archive | 2026-10-08 | Same |

## Check 2, 2026-10-08 (iteration 8)

All 11 cited TikTok pages re-rendered logged out in headless Chromium, text
saved as `check2-*.txt`. Every quoted string found again: 10 and 60 minutes,
the sound rule, the whole-file web upload, 35 photos, 35 items, 8 overlays,
one sound, the AI label rules; June 2026, 540*960, up to 10 minutes, 500 MB,
516 kbps, no Spark restriction, no links, @ or hashtags (auction); July 2025,
5-60s recommend 9-15s, 2,500kbps, must have sound, the longer the caption the
smaller the safe zone, no watermarks, no mimicking the interface, 100
characters, not stretched or compressed, white background (reservation); June
2026, no plain white in the first 3 seconds, in-feed safe zone more
restrictive, "should be rejected", QR codes, not completely silent, 500 MB
(TopView); June 2025, 720P, 9:16 (best practices); February 2025, clear audio,
swiping up, landing page (review checklist); September 2026, max 35 images,
100 KB, 1200*628, 720*1280, at least 2 s music (carousel). The in-feed
standard template zip was downloaded again from the TikTok CDN: identical MD5
(6d2918b2cc2f1488c2370e2a89e368a1). Only change: the Making a post page now
renders a "Help Center / Log in" header line, no content change.

## R8. Reconciliation (filled after drafting)

Every number in the draft, checked against the claims table:

| Number in the draft | Claims table row |
|---|---|
| 10 minutes recorded, 60 uploaded; sound sets the length | Camera tools |
| 35 photos; 35 items, 8 overlays, one sound | Making a post; Editing videos and photos |
| 9:16, 16:9, 1:1 at 540x960, 960x540, 640x640; MP4, MOV, MPEG, 3GP, AVI; 10 minutes; 500 MB; 516 kbps | Auction in-feed, June 2026 |
| Spark pull: no restriction | Auction in-feed, June 2026 |
| 5 to 60 s, 9 to 15 recommended; 2,500 kbps; must have sound; 4 lines; 100 characters, 50 CJK | Reservation, July 2025 |
| 9:16 only at 540x960; 3 seconds; no plain white; not completely silent; 500 MB | TopView, June 2026 |
| 720p, 9:16 | Best practices, June 2025 |
| February 2025 checklist items | Review checklist |
| 2 to 35 images; 720x1280, 640x640, 1200x628; 100 KB; JPG, JPEG, PNG; MP3, 2 seconds | Carousel specs, September 2026 |
| 720x1280 frame; 160, 440, 120, 560, 80 | Standard template row |
| 540x960 frame; 126, 60, 406, 439, 473, 507 | Anchor template row |
| 240, 660, 120, 300 below y 840; 252, 812, 878, 946, 1014, 240 below y 360 | Scaled rows (derived) |
| Box 120 to 780, 252 to 906 | Derived box row |
| 3 seconds to 10 minutes; MP4, MOV, WEBM; 2,200 characters; five minutes; three attempts | hubStudio help row |
| October 8, 2026; January 8, 2027 | Read date; watch row |

Removed during drafting because they were not in this file: "posting isn't
available on TikTok's mobile website" (the help page's note is ambiguous, cut
in iteration 3); "a stretched or compressed video fails" (the page files it
under recommendations, rewritten as "ask for"); "per second" on render
charges (true in the help article, cut under the positioning rule on rates);
"its own accounts, its own ad platform" for Douyin (not in this file, cut);
an AI-labeling row for ads (no ads page in scope states it, cut); "the forums
name more causes" (no source, cut).
