# Research: rednote-note-cover-specs

| Field | Value |
|---|---|
| Brief | 07 |
| Target query | xiaohongshu image size note cover dimensions |
| Gap statement (one sentence) | Every ranking page prints 3:4 and 1080x1440 as if it were one settled number, and not one of them tells the designer that the same file is rendered three different ways across the feed, the profile grid and search, or that the published image counts, video durations and video file caps disagree by up to a factor of ten. |
| Research time spent | About 80 minutes active, Chinese-language web first, plus four primary-access attempts on platform-owned surfaces |
| Written | 2026-09-10 |
| Method | Modal value per deviation 7 in `../CLAUDE.md`, decided 2026-09-10. Not primary. |

## Method notice, binding on the writer

Nothing in this file was read from a seller backend, a creator backend or an
official platform rule page. Every number below is the most commonly published
figure across independent sources, with the count of sources that gave it.

Never present any value here as verified, as official, or as read from the
platform. Every spec row on the finished page carries its `Sources agreeing`
count and its `consensus` or `contested` label, and the page opens with the
disclaimer block in `../SPEC.md`.

## R3 primary-access attempts, and what they returned

Four platform-owned surfaces were fetched unauthenticated on 2026-09-10.

| Surface | URL | Result |
|---|---|---|
| Creator centre | creator.xiaohongshu.com | HTTP 200, about 19.6 KB, a JavaScript application shell. No spec text in the served body |
| Advertiser centre | ad.xiaohongshu.com | HTTP 200, about 19 KB, same shell pattern. No spec text |
| Help centre | www.xiaohongshu.com/help | HTTP 200, about 97.7 KB. The served body is a script and stylesheet manifest plus a login reference. The only occurrences of 1080 and 1440 in the file are CSS media-query breakpoints, not specifications |
| Seller and creator school | school.xiaohongshu.com | HTTP 200, about 72.7 KB, same shell pattern. One occurrence of 1440, again a stylesheet value |

The finding is the same wall documented for the two ecommerce rule centres in
`china-ecommerce-content-pack.md`, in a slightly different shape. Those rule
centres redirect. RedNote serves a 200 and an empty application shell. Either
way, no open request reaches a rule body, and no spec value on this page can be
attributed to the platform.

One published English guide states the same thing independently: that the
platform has never published a creator-facing image specification document, and
that every size and safe-zone figure in circulation is a measured working figure
rather than a platform commitment. That page is quarantined below and cannot be
named, but the observation matches the four fetches.

## R4. Chinese-language web first

Searched in Chinese before English, per R4. Search strings are recorded here in
romanized form. The romanization table at the foot maps every term.

- `xiaohongshu biji fengmian chicun bili guifan`
- `xiaohongshu fengmian shouye xinxiliu geren zhuye caijian xianshi qubie`
- `xiaohongshu geren zhuye jiugongge fengmian zhongxin caijian sousuoye`
- `xiaohongshu biji zui duo ji zhang tupian shangchuan xianzhi`
- `xiaohongshu shipin biji guige shichang shangxian fenbianlv wenjian daxiao`
- `xiaohongshu shoutu xinxiliu suoluetu caijian dian kai biji wanzheng xianshi`

What the Chinese web gave that the English web did not: the crop mechanism.
Chinese design and tool pages argue about what the feed actually does to the
first image. English pages almost all skip the question and print a single
recommended size. The disagreement is the article.

What the Chinese web did not give: a primary source. Not one page linked to a
reachable platform rule. Several are visibly restating each other, and two of
the highest-agreement values trace back through near-identical tables.

## R2. SERP map

Query: `xiaohongshu image size note cover dimensions` (run in Chinese as
`xiaohongshu biji fengmian chicun bili guifan`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | xiaohongshu.oimi.ai | Tool vendor blog | Recommended cover ratio and two pixel sizes | No counts, no file caps, no video, no crop model, no source | 2026-05-13 |
| 2 | yjz.ai | AI tool blog | Seeding-note image sizes and layout advice | Commerce framing only, no crop model | 2026 |
| 3 | autoxhs.cn | Tool vendor blog | Ratio table with star ratings, single and multi-image sizes | No safe-area pixels, no per-surface crop measurements | 2026-08-16 |
| 4 | resouci.com | Studio blog | The fullest single table found: cover, carousel, video, avatar, safe areas | No crop model, no source, no method | 2026-08-01 |
| 5 | secaiyun.com | Design vendor doc | Near-identical table to the above, plus dpi and video duration | Same. The two tables agree so closely that independence is doubtful | 2026-05-30 |
| 6 | b1y.ren | Tool vendor guide | Sizes plus a title-bar occlusion figure | Gives no maximum image count | 2026-06-11 |
| 7 | focalflow.app | Tool vendor blog | Cover and inner-page sizes, seeding layout | Returned HTTP 403 to a direct fetch, only the result snippet was readable | 2026 |
| 8 | jiandan.link | Design tool blog | Cover specification walkthrough | Tool marketing, no source | 2026 |

Query: `rednote image size` (English)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | linkbloom.ai | Tool vendor resource | Ratio table, safe zone as a percentage, a one-ratio-per-note rule | No image count, no file cap, no video specs | 2026-07-14, updated 2026-09-03 |
| 2 | aspectratio.tools | Calculator site, two pages | Ratio recommendation and a feed-area comparison | DNS resolution failed on direct fetch, snippet only | Undated |
| 3 | insmind.com | Tool vendor blog | Template sizes for photos and video | 2025 vintage, no crop model | 2025 |
| 4 | allplatforms.io | Marketer spec roundup | States the platform publishes no creator-facing spec document | Returned HTTP 403 to a direct fetch, snippet only | 2026 |
| 5 | lemon8-app.com | Social post | Posting walkthrough and sizes | User post, no method | Undated |
| 6 | hashmeta.com | Agency blog | Editing and composition advice, title-bar occlusion | Agency page, standing rule bars naming it | Undated |
| 7 | recapo.ai | Tool landing page | A cover maker fixed at one ratio | Product page, not a spec | Undated |

Query: `xiaohongshu cover size` plus the crop phrasing
(`xiaohongshu fengmian shouye xinxiliu geren zhuye caijian xianshi qubie`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | tudingai.cn | AI tool blog, three separate pages | The only source found that describes feed, profile grid, external share and search as four different crops, with a centre safe square in pixels | Single publisher across all three pages, so the search-crop claim has one origin | 2026-06-02 |
| 2 | pictech.cc | Tool vendor blog | Asserts the feed itself centre-crops the first image to 1:1 | Contradicts the profile-grid account above. No method | 2025-10-22 |
| 3 | zhuanlan.zhihu.com | Practitioner explainer | Feed at 3:4, profile list centre-cropped to 1:1 | Self-published, undated body | Undated |
| 4 | tapcrop.com | Tool vendor guide | Sizes, and an instruction to check thumbnail crops in both feed and profile before publishing | Never says what the crop is | Undated |
| 5 | designkit.cn | Design tool article | Cover template advice | Template marketing | Undated |

Query: `xiaohongshu note dimensions` for counts and caps
(`xiaohongshu biji zui duo ji zhang tupian shangchuan xianzhi`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | shankongmao.com | Seller-tool content page | A maximum image count per note | Contradicts the 2026 spec tables outright | Undated |
| 2 | zhuanlan.zhihu.com | Community question set | The same lower count | Self-published, restated across the thread | Undated |
| 3 | ixunke.com | Seller-education article | Long-form note features | Feature announcement, not a spec | Undated |
| 4 | biaojixia.com | Tool vendor spec page | Product-image rules and over-marketing rejections | Rejection reasons without the rule that sets them | Undated |
| 5 | yx.jiayisiyu.com | Placement-agency blog | Seeding-note image sizes | Agency page, no method | Undated |

Query: `rednote video specs`
(`xiaohongshu shipin biji guige shichang shangxian fenbianlv wenjian daxiao`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | biqiusoft.com | Marketing-service blog | Full image and video table with a duration and a file band | Service marketing, no source | 2025-05-28 |
| 2 | aiyongtech.com | Seller-tool blog | A different duration ceiling and a file cap ten times smaller | Directly contradicts the row above | 2025-09-24 |
| 3 | blog.csdn.net | Developer blog | An upload duration figure | 2023 vintage, restated since | 2023 |
| 4 | secaiyun.com | Design vendor doc | A third duration figure inside the image table | Same page as above, so not independent of it | 2026-05-30 |
| 5 | filmora.wondershare.com | Software vendor guide | Video creation walkthrough | Editing tutorial, not a spec | Undated |

**The bar:** the ranking pages run roughly 800 to 2,000 words, carry one table,
print a single recommended size, and cite nothing. Two of the fullest tables are
close to identical, which means the field's apparent agreement is partly an
echo. Nothing in either language publishes a per-surface crop model, a source
count, or an honest statement of where the published figures disagree. The bar
to beat is 1,600 words with a spec table carrying a source count and a
confidence label per row, a separate crop table by surface, and a dated
changelog. Two tables clears the field. Three with counts wins it.

**The gap, in one sentence:** Every ranking page prints 3:4 and 1080x1440 as if
it were one settled number, and not one of them tells the designer that the same
file is rendered three different ways across the feed, the profile grid and
search, or that the published image counts, video durations and video file caps
disagree by up to a factor of ten.

**H1 consequence:** the ranking pages all miss the crop model, so the crop model
is the spine of the page, not the pixel size.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved in the spec table below.

1. RedNote accepts more than one cover ratio, and one of them is treated by
   every reference as the default.
2. There is a recommended pixel size attached to that default ratio.
3. A note carries more than one image, and there is a stated ceiling on how
   many.
4. There is a file size limit per image, and a separate one for video.
5. A video note has its own ratio, resolution, duration ceiling and format list.
6. The cover is rendered differently in the feed from how it appears once the
   note is opened, and that difference is a crop, not a scale.
7. The profile grid applies a further, different crop.
8. Search results apply a further crop again.
9. There is a text safe area, expressible either in pixels or as a percentage of
   the frame.
10. Some part of the cover is occluded by platform interface chrome rather than
    cropped away, and occluded is not the same problem as cropped.
11. These values are published somewhere reachable without a login.

Item 11 is false. Items 1, 2, 3, 4, 5, 9 and 10 are answerable as modal values.
Items 6, 7 and 8 are the contested core and the reason this page is worth
writing.

## SPEC TABLE

Every value is a modal published figure, not a platform reading. `Sources
agreeing` counts independent domains observed to carry that value. A value
carried by one domain is `contested`, never `consensus`, whatever its
plausibility.

| Spec | Modal value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Default cover ratio | 3:4 vertical | 3:4 on every source that names a default. 1:1 and 4:3 named as accepted alternates, never as the default | 14 of 14 | consensus |
| Cover pixel dimensions at 3:4 | 1080x1440 | 1080x1440 dominant. 1242x1656 and 1242x1660 offered as a higher-density variant. 900x1200 given once as a floor | 13 for 1080x1440, 3 for the 1242-wide variant | consensus on 1080x1440 |
| Square alternate | 1:1 at 1080x1080 | Unanimous where a square size is given at all | 7 | consensus |
| Landscape alternate | 4:3 | Pixel rendering splits: 1080x810, 1200x900 and 1440x1080 all appear | 5 name 4:3, of which 3 say 1080x810 | contested on pixels, consensus on the ratio |
| Ratios that get force-cropped | 2:3 and taller | Reported once, as forced back to 3:4 | 1 | contested |
| Mixing ratios inside one note | Not supported in practice, all images one size | Stated as a rule by one source, as strong advice by two more | 3 | contested |
| Maximum images per note | 18 | 18 on the 2026 spec tables, 9 on the older seller-education pages. No source explains the change or dates it | 3 for 18, 2 for 9 | contested |
| Image file size cap | 20 MB per image | 20 MB as the stated ceiling. Working recommendations far below it: 5 MB, and 300 to 800 KB | 4 for 20 MB | consensus on the ceiling, advisory below it |
| Image formats | JPG and PNG | Unanimous. One source adds a colour-space instruction of sRGB rather than Adobe RGB | 5 | consensus |
| Video note ratio | Vertical, 9:16 or 3:4 | 9:16 at 1080x1920 is modal for the video frame. 3:4 at 1080x1440 is modal for the video cover. Two sources recommend 3:4 for the frame itself | 5 for a 9:16 frame, 4 for a 3:4 cover | consensus on vertical, contested on which vertical |
| Video resolution floor | 1080p recommended, 720p floor | 720p floor given by two, 1080p recommended by four | 4 | consensus |
| Video duration ceiling | 15 minutes | 5 minutes, 15 minutes and 30 minutes all published. One source gives 5 minutes as the safe working length and 15 minutes as the ceiling in the same breath | 3 for 15 minutes, 2 for 5 minutes, 1 for 30 minutes | contested |
| Video file size cap | 500 MB | 50 MB, 200 to 500 MB, and 500 MB. A tenfold spread | 2 for 500 MB, 1 for a 200 to 500 MB band, 1 for 50 MB | contested |
| Video formats | MP4 and MOV | MP4 unanimous. MOV named by two | 3 | consensus |
| Feed rendering of the cover | The 3:4 card renders in full in the two-column feed, with platform chrome laid over the lower part of it | Three incompatible accounts. See the crop table below | 4 for the full-card account, 4 for the occlusion account, 2 for a hard 1:1 feed crop | contested |
| Profile grid rendering | Centre 1:1 square lifted out of the cover | Unanimous among the sources that mention the grid at all. Most English guides never mention it | 4 | consensus among sources that address it |
| Search results rendering | Cards forced to 1:1 or 4:3 in some layouts | One publisher only | 1 | contested |
| Text safe area, bottom | Reserve the lower part of the frame for platform chrome | 150 px, 180 px, 200 px, about 144 px, and 15 to 20 percent of frame height. Converted to a 1440 px tall canvas, the spread is roughly 144 px to 288 px | 8 sources reserve the bottom, no two agree on the figure | contested |
| Text safe area, centre | Keep the subject and the headline inside the centre 1080x1080 square of a 1080x1440 cover | Given in pixels by one, as "centre the subject" by six more, as "top 75 percent of frame" by four | 1 for the pixel square, 7 for the principle | contested on the number, consensus on the principle |
| Avatar | 400x400 minimum, 800x800 recommended, circular crop | 400x400 modal, 300x300 minimum given once | 4 for 400x400, 1 for 300x300 | consensus |
| Profile background | 1080x810 at 4:3 | 1080x810 twice, 1125x630 once | 2 | contested |

## R1 and R5. Claims table

Confidence is one of: primary, triangulated, single-source, unverified, modal.
`modal` is the deviation 7 category: a most-commonly-published value with a
source count, publishable only under the disclaimer block.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Four platform-owned surfaces return HTTP 200 and a JavaScript application shell to an unauthenticated fetch, with no specification text in the served body | creator.xiaohongshu.com, ad.xiaohongshu.com, www.xiaohongshu.com/help, school.xiaohongshu.com | fetched 2026-09-10 | 4 surfaces | Direct unauthenticated fetch, response size and body content recorded, numeric hits traced to CSS breakpoints | nobody, own observation | primary |
| No open source reaches an official RedNote image specification, and one published guide states the platform has never issued a creator-facing image spec document | The four fetches above, plus one English marketer roundup quarantined below | 2026-09-10 | n/a | Own fetches, corroborated by one independent published statement | mixed | primary as an observation |
| The published field agrees on the default cover ratio and its pixel size and disagrees on almost everything else | 20 independent domains across five queries, Chinese first | 2025 to 2026 | 20 domains | Every figure recorded per domain, then tallied. No averaging | tool and design vendors on their own content pages | modal, per row |
| Two of the fullest Chinese spec tables are close to identical in structure and values | Two 2026 design and studio pages listed in the SERP map | 2026-05-30 and 2026-08-01 | 2 pages | Read side by side, row by row | vendors | triangulated as an observation about the field, and it lowers the weight of both |
| The maximum image count per note is published as both 18 and 9, with no source dating the change | 3 sources for 18, 2 for 9 | 2026 tables against undated seller-education pages | 5 | Counted per domain | vendors | modal, contested |
| Published video duration ceilings span 5 minutes to 30 minutes and file caps span 50 MB to 500 MB | 4 sources carrying a video table | 2023 to 2026 | 4 | Counted per domain | vendors | modal, contested |
| The feed, the profile grid and search apply different treatments to the same cover file | 10 sources touching the question, in three incompatible camps | 2025 to 2026 | 10 | Grouped by mechanism claimed, not by value | vendors | modal, contested, and the disagreement is the finding |
| The lower part of a cover is unusable, whether because it is cropped or because interface chrome sits over it | 8 sources reserve the bottom of the frame | 2026 | 8 | Compared the instruction, not the figure | vendors | triangulated as an instruction, contested as a number |

## The crop question, in detail

This is the highest-value row and the one a designer loses money on. Sources do
not agree on the mechanism, not just on the number. Three camps, and they are
mutually exclusive.

| Camp | What it claims happens to the first image | Sources | Consequence if it is right and you designed for another camp |
|---|---|---|---|
| Full card | The two-column feed renders the whole 3:4 cover. The profile grid is where the centre 1:1 crop happens | 4 | You centre everything and waste the top and bottom thirds of every feed card |
| Occlusion | The feed renders the whole 3:4 cover, then lays the title and author bar over roughly the lower 15 to 20 percent. Nothing is cropped, the bottom is covered | 4 | You put the headline low, it survives the crop, and it sits under the chrome |
| Hard feed crop | The feed itself lifts a centre 1:1 square out of the first image whatever its uploaded ratio | 2 | You put the headline in the top third for feed impact, and the feed cuts it off entirely |

The camps agree on exactly one instruction, and it is the only crop guidance
this research can support: put the headline and the subject inside the centre
square of the cover. That instruction is safe under all three mechanisms. Every
figure attached to it is not.

Note the asymmetry the writer must carry. Under the occlusion camp the lower
band is covered but the pixels exist, so a background can run into it. Under the
hard-crop camp those pixels are gone. Advice written for one camp fails in the
other, and no open source resolves which is live in the app today. This is a
capture question, not a search question.

## Cleared for use

Ready to paste. Each blockquote carries its method line. Every one of them
states that the value is modal and not a platform reading.

**1. The platform surfaces are open URLs with no specification behind them.**
The strongest thing this page has, because it is a primary observation and it
explains why every other page contradicts the next one.

> Four platform-owned RedNote surfaces, the creator centre, the advertiser
> centre, the help centre and the seller and creator school, each returned a
> normal 200 response and a JavaScript application shell to an unauthenticated
> request on 10 September 2026. No specification text was served. The only pixel
> values in the delivered help-centre file were stylesheet breakpoints.
> Source: direct unauthenticated fetches of four platform-owned surfaces, 10
> September 2026, response size and body content recorded per request. Primary
> observation, not a specification.

**2. The default cover, as the modal published value.**

> The most commonly published RedNote cover format is a 3:4 vertical frame at
> 1080x1440 pixels. Fourteen of fourteen independent sources that name a default
> name 3:4, and thirteen give 1080x1440 as its pixel size, with a higher-density
> 1242-pixel-wide variant appearing on three.
> Source: 20 independent published references in Chinese and English collected
> 10 September 2026, counted per domain and reported as the most commonly
> published figure, not as a value read from the platform.

**3. The image count does not agree with itself.**

> Published sources do not agree on how many images one RedNote note carries.
> Three 2026 specification tables give 18. Two undated seller-education pages
> give 9. No source dates the change or explains it, so the honest reading is a
> range rather than a number.
> Source: five independent published references collected 10 September 2026,
> counted per domain, range published rather than averaged. Not a platform
> reading.

**4. The video specs are the widest spread on the page.**

> Published RedNote video note limits span a factor of ten. Duration ceilings
> appear as 5 minutes, 15 minutes and 30 minutes across four sources, and file
> caps appear as 50 MB, a 200 to 500 MB band, and 500 MB. Only the vertical
> orientation is agreed.
> Source: four independent published references carrying a video table,
> collected 10 September 2026, every published figure recorded and the full
> spread reported. Modal values, not platform readings.

**5. The crop disagreement, which is the point of the page.**

> Ten published sources describe what RedNote does to a note cover, and they
> split into three incompatible accounts: that the feed shows the full 3:4 card
> and the profile grid takes a centre 1:1 crop, that the feed shows the full card
> with interface chrome laid over the lower 15 to 20 percent, and that the feed
> itself lifts a centre 1:1 square out of the first image. Four sources back the
> first, four the second and two the third.
> Source: ten independent published references collected 10 September 2026,
> grouped by the mechanism each claims rather than by the numbers attached to it.
> No open source resolves which is live in the app.

**6. The one instruction that survives every account.**

> Whichever of the three published accounts of RedNote cover cropping is
> correct, one instruction holds under all of them: keep the headline, the face
> and the product inside the centre square of the cover, which is the middle
> 1080x1080 pixels of a 1080x1440 frame. It is the only region that survives a
> centre crop, a grid crop and an interface overlay alike.
> Source: derived from the three published crop accounts collected 10 September
> 2026 by taking the region common to all of them. A safe intersection, not a
> platform rule.

**7. The safe area is a direction, not a figure.**

> Eight published sources tell designers to keep the lower part of a RedNote
> cover clear, and no two give the same figure. Reserved depths appear as about
> 144 pixels, 150 pixels, 180 pixels, 200 pixels, and as 15 to 20 percent of
> frame height, which on a 1440-pixel-tall cover is roughly 216 to 288 pixels.
> Source: eight independent published references collected 10 September 2026,
> every reserved depth converted to a common 1080x1440 canvas before comparison.
> Range published, not averaged, and not read from the platform.

**8. The absence itself is a finding.**

> Across five buyer phrasings in Chinese and English, no page publishes a source
> count, a confidence label, or a per-surface crop model for RedNote covers. Two
> of the fullest Chinese specification tables are close to identical row by row,
> so the field's apparent agreement is in part an echo rather than independent
> corroboration.
> Source: five queries run 10 September 2026, Chinese first, every returned
> result classified by page type, by what it answers and by what it cites.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any spec value on this page stated as official, verified, confirmed, or read from the platform** | Deviation 7 permits the modal value and forbids exactly this framing. Every row travels with its source count and its confidence label or it does not go on the page |
| **Any spec value attributed to a RedNote rule page, help article or creator document** | Four platform surfaces were fetched and none served a specification. Citing one would be a fabricated citation |
| **A single number for maximum images per note** | 18 against 9, five sources, no dating. Publish the range and say the sources split |
| **A single number for video duration or video file size** | 5, 15 and 30 minutes, and 50 MB against 500 MB. A tenfold spread is not a spec, it is a warning |
| **A single number for the bottom safe area** | Five different figures across eight sources. Publish the range, and publish the centre-square intersection as the working instruction |
| **The search-results crop as a stated behaviour** | One publisher, across three of its own pages. One source is not a mode. It may appear as "one published account reports", never as a spec row with a value |
| **Any claim that a ratio is rejected at upload** | No source observed a rejection. The pages describe cropping and display, not upload validation. Rejection reasons on the finished page must be written as what practitioners report, never as platform enforcement |
| **Any engagement, click-through or reach figure attached to a ratio** | Several sources claim 3:4 gets more feed area, more clicks or better algorithmic treatment. The area claim is geometry and is fine as geometry. The click and algorithm claims carry no sample, no period and no method, and are published by sellers of cover-design tools |
| **A hubStudio rate, per-asset price or monthly figure** | Standing rule |

### Quarantined domains

Every source below is a tool vendor, design vendor, agency, marketplace blog or
community post. None may be named, linked, described or alluded to on the page.
The platform itself may be named. Counts are the number of distinct spec values
each domain contributed to the tally.

| Domain | What it published | Count contributed | Why it is quarantined |
|---|---|---|---|
| secaiyun.com | Full 2026 image and video table, dated 2026-05-30 | 11 | Design vendor content page, no rule link, no method, and near-identical to another table below |
| resouci.com | Full 2026 image and video table, dated 2026-08-01 | 12 | Studio blog, no rule link, and its independence from the row above is doubtful |
| autoxhs.cn | Cover ratio table with star ratings, 2026-08-16 | 6 | Tool vendor, no rule link, no crop measurements |
| tudingai.cn (three pages) | The only per-surface crop account with pixel safe areas, 2026-06-02 | 8 | AI tool vendor. Three pages from one publisher are one source, not three |
| b1y.ren | Sizes plus a title-bar occlusion percentage, 2026-06-11 | 9 | Tool vendor guide, no rule link |
| tapcrop.com | Sizes and a check-your-thumbnails instruction, undated | 5 | Tool vendor, undated, never states the crop |
| focalflow.app | Cover and inner-page sizes, 2026 | 4 | Tool vendor. Returned 403 to a direct fetch, snippet only, so its values carry less weight than the fetched pages |
| pictech.cc | The hard feed-crop account, 2025-10-22 | 4 | Tool vendor blog, no method, and the sole clear origin of the most consequential claim on the page |
| biqiusoft.com | Image and video table, 2025-05-28 | 10 | Marketing-service seller, no rule link |
| aiyongtech.com | A contradicting video duration and file cap, 2025-09-24 | 7 | Seller-tool blog, no method, already quarantined under brief 28 |
| shankongmao.com | The lower image count | 1 | Seller-tool content page, undated |
| biaojixia.com | Product-image rules and over-marketing rejections | 2 | Tool vendor spec page, already quarantined under brief 28 |
| yjz.ai, jiandan.link, designkit.cn, recapo.ai, insmind.com, oimi.ai, linkbloom.ai, allplatforms.io, aspectratio.tools | Cover size guides and calculators, 2025 to 2026 | 1 to 5 each | Tool and template vendors. Two of them were unreachable to a direct fetch and contributed snippet values only |
| zhuanlan.zhihu.com, blog.csdn.net, lemon8-app.com | Community and self-published posts | 1 to 3 each | Self-published, undated bodies, and the developer post is a 2023 vintage restated since |
| hashmeta.com, yx.jiayisiyu.com, ixunke.com | Agency and placement-agency pages | 1 to 2 each | Adjacent sellers. Standing rule bars naming them |
| filmora.wondershare.com | Video creation walkthrough | 1 | Software vendor tutorial, not a spec |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| A 3:4 cover occupies about 33 percent more feed area than a 1:1 square at the same column width | Two English tool pages | The arithmetic is correct as geometry and may be stated as geometry, in the article's own words, without citing either page. As a published claim it fails: no method, seller-published |
| 3:4 covers are favoured hardest by the recommendation pool, or convert best | Chinese tool pages | Algorithm and conversion claims with no sample, no period and no method, published by sellers of cover tools |
| Text on a cover should be held to 10 to 15 characters | Two Chinese tool pages | Design advice presented as a spec. It may appear as production practice, never as a platform figure |
| Minimum body font of 60 px on a 1080x1440 canvas, or a 48 pt equivalent | Two sources, different units, no conversion given | Two figures in incompatible units from two vendors. Not a mode |
| 72 to 150 dpi for note images | One Chinese table | dpi is meaningless for a screen-delivered raster at a fixed pixel size. Publishing it would propagate a category error |
| A 3-second looping dynamic video cover at 1080x1920 | One Chinese table | Single-source, and no other reference mentions the feature at all |
| Video resolution "720p minimum" as a platform floor | Two sources | Reads as encoder advice, not a stated platform floor. May appear as practice |
| Profile background at 1125x630 | One source | Single-source, and it contradicts the 1080x810 given twice |
| Avatar minimum 300x300 | One source | Single-source against 400x400 on four |
| Any statement that 2:3 or taller covers are force-cropped back to 3:4 | One source | Found once. Plausible and useful, but one source is not a mode. It may be written as one published account, or cut |
| Any RedNote figure carried over from brief 13 | `sources/verified-sources.md`, do-not-publish row logged 2026-09-09 | That row blocks the 1080x1440 cover and the 10 percent safe area as taken from secondary design blogs. Deviation 7 now permits the cover size as a modal value with its count. The 10 percent safe area does not survive: the figure is one of five in circulation, and the range goes on the page instead |

## Screenshot inventory

Nothing captured. The four unauthenticated fetches are recorded in the claims
table as observations with URLs, dates and response behaviour, which is what R3
needs for a negative finding. The captures below are the ones that would lift
these rows from modal to primary. Save to `research/rednote-note-cover-specs/`
with the date in the filename and the app version noted in the file itself.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| xhs-shell-creator-2026-09-10.png | The creator centre returning an application shell with no spec text to an unauthenticated request | not yet | creator.xiaohongshu.com |
| xhs-shell-help-2026-09-10.png | The help centre response body, with the only pixel values visibly inside stylesheet breakpoints | not yet | www.xiaohongshu.com/help |
| xhs-feed-3x4-cover.png | One known 1080x1440 cover as it renders in the two-column discovery feed, with the visible card boundary and the chrome overlay measured against the uploaded file | not yet | Live app, feed, version and device recorded |
| xhs-opened-note-same-file.png | The same note opened, showing the full uploaded frame, so the feed card and the opened note can be diffed pixel for pixel | not yet | Live app, note detail |
| xhs-profile-grid-same-file.png | The same cover in the author profile grid, showing exactly which region the grid keeps | not yet | Live app, profile |
| xhs-search-results-same-file.png | The same cover in a search results layout, which is the row currently held by one publisher | not yet | Live app, search |
| xhs-upload-panel-limits.png | The publish panel at the moment of adding images, showing the image-count ceiling the app itself enforces, which settles the 18 against 9 split | not yet | Live app, publish flow |
| xhs-video-upload-limits.png | The video publish panel showing the duration and file size the app accepts or refuses | not yet | Live app, video publish flow |
| xhs-rejection-notice.png | Any real rejection or restriction notice on a note, to replace reported rejection reasons with observed ones | not yet | Live app, notifications |

The three same-file captures, feed, opened note and profile grid, taken from one
upload in one session, are the single highest-value asset in this brief. They
settle a question ten published pages cannot agree on, and they are the reason
the page can claim proof.

## Romanization table

No Han characters and no full-width punctuation appear in this file, per the
project rule. Every Chinese term needed for this brief is mapped here so the
writer never has to reach for the characters.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Xiaohongshu | RedNote | The platform. RedNote on every reference on the page |
| biji | note | The unit of content, an image set or a video plus caption |
| fengmian | cover | The first image, which is what the feed renders |
| shoutu | first image | Used interchangeably with cover in Chinese sources |
| chicun | dimensions | The pixel size |
| bili | ratio | The aspect ratio |
| guifan | specification | The class of document nobody can reach |
| xinxiliu | feed | The discovery stream |
| shuanglie pubuliu | two-column waterfall | The feed layout, staggered cards of unequal height |
| geren zhuye | profile page | The author's own page, where the grid crop happens |
| jiugongge | nine-square grid | The profile grid layout |
| caijian | crop | The operation in dispute |
| zhongxin caijian | centre crop | The specific crop the grid is said to apply |
| anquan qu | safe area | The region kept clear of interface chrome |
| suoluetu | thumbnail | The feed card image |
| sousuo ye | search page | The surface with the thinnest evidence |
| shipin biji | video note | A note whose body is a video |
| shichang | duration | The video length ceiling in dispute |
| fenbianlv | resolution | Pixel resolution of the video frame |
| wenjian daxiao | file size | The cap in dispute |
| shangchuan | upload | The publish action |
| touxiang | avatar | The circular profile image |
| zhongcao | seeding | Influencer-led product recommendation content, the commercial format on this platform |
| guize zhongxin | rule centre | The gated surface pattern seen on the ecommerce platforms |

## R8. Reconciliation (filled after drafting)

Reconciled 2026-09-10, after drafting and after the quality pass.

**All eight cleared blockquotes shipped** with their attributions unchanged, each
carrying its domain count, its languages, the collection date, and a statement
that the value is modal, a primary observation, or a derived intersection.

**The disclaimer block from SPEC.md runs after the opening answer** with NN = 20
and the date 10 September 2026. Two words were substituted because RedNote is a
social platform rather than a marketplace: "creator backend" for "seller
backend" and "creator account" for "your own seller backend". The meaning and
the structure are otherwise verbatim.

**The H1 and meta description were changed from the brief, because both were
false under this method.** The working H1 read "verified against the live app"
and the draft meta said "verified against the live app with a changelog". No
live-app capture was taken. The H1 now reads "and the crop nobody agrees on" and
the meta names the 20-source count instead.

**Every hard block held.** Maximum images per note is published as the 18
against 9 range with the age split noted, never as one figure. Video duration,
video file size and the bottom safe area are each published as ranges. The
search crop appears only as "a single publisher reports" and never as a spec
row. No ratio is described as rejected at upload. No engagement, click or
algorithm claim attaches to 3:4.

**The three crop accounts are published as competing accounts**, with counts
(four, four, two), a consequences column, and the asymmetry between covering and
cropping spelled out. The centre-square instruction is labeled as a derived safe
intersection in its source line, in the body copy after it, and in the FAQ.

**Two practical recommendations were added, both derived from cleared ranges and
labeled as derived.** Keep text out of the lowest 288 pixels, which clears the
largest published bottom reservation. Export video as vertical 1080p MP4 under
50 MB and five minutes, which sits inside the tightest published figure on every
contested video row. Neither introduces a new figure.

**The echo finding shipped.** Two of the fullest Chinese tables are near
identical row by row, and the page says that some of the field's agreement is
copying rather than corroboration.

**The brief's changelog requirement is met** by a dated changelog section placed
last before the FAQ, since the file must end on the CTA.

**The brief's third link does not exist.** /resources/specs was replaced by the
short video design service page, which covers the video note half.

**Open at publish time.** No live-app capture was taken. One set of feed,
profile grid and search captures of a single test cover would resolve the crop
question outright, and it is the most valuable capture in the China spec
cluster.
