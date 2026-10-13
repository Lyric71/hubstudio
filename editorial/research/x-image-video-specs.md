# Research: x-image-video-specs

| Field | Value |
|---|---|
| Brief | 70 (wave two, `editorial/scripts/wave2/70-x-image-video-specs.mjs`) |
| Target query | X image size 2026 |
| Gap statement (one sentence) | The ranking size guides cite no X page, print a 1200 x 675 "recommended" post size and per-layout crop ratios for two, three and four pictures that appear on no X page, and miss that X's own pages disagree with each other on WebP, GIF weight and video length. |
| Research time spent | about 1 hour 40 minutes active (five SERP phrasings, 11 X pages captured from four X surfaces, cross-reading the help center against the developer docs and the ads specs, hubStudio help cross-check) |
| Written | 2026-10-14 |

Western platform: X's Help Center, X's ads creative specs (served on
help.x.com under Business and Advertising, which is where
business.x.com/en/help/campaign-setup/creative-ad-specifications lands), X's
developer documentation (docs.x.com) and X's own blog are readable without a
login, so every number below is primary. No deviation 7 disclaimer applies
(`editorial/CLAUDE.md`, Wave two). R4 (Chinese-language web first) does not
apply: X is not a China platform, and its own pages are the primary source.

**Method.** A plain fetch of help.x.com returns 403 (a browser challenge), so
every page was rendered logged out in headless Chromium (Playwright, en-US,
eight-second settle, a second try after a challenge page), every collapsed
question on the page was clicked open one at a time, and the `innerText` was
saved with the URL, the HTTP status and the capture time in a header. Captures
are in `research/x-image-video-specs/` with the suffix `check1-2026-10-14`
(check 2: `check2-2026-10-14`). Long dashes in captured text were replaced by
a spaced hyphen when saved (settled 2026-10-08).

**Dates.** X Help Center articles and the docs.x.com pages show no
publication or update date in the rendered page. Each row therefore carries
"undated, read 2026-10-14", the same convention the ledger already uses for X
(brief 65). The two X blog posts carry their own dates.

## R2. SERP map

Search run 2026-10-14 (US results). Ages as shown in each title or snippet.
Page types are described by category, never by company.

Query: X image size 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | design app blog | size guide | banner, profile, post | cites no X page; 1200 x 675 as "the" post size | 2026 in title |
| 2 | scheduler blog | all-network size guide | sizes for nine networks | X rows unsourced, no video limits | 2026 in title |
| 3 | social tool blog | size guide | dimensions and ratios | no source per row | 2026 in title |
| 4 | social tool blog | size guide | profile, header, post | no X citation | 2026 in title |
| 5 | design app template page | single size page | 1200 x 675 | everything else | 2026 in title |
| 6 | screenshot tool blog | size guide | all dimensions | sources, video | 2026 in title |
| 7 | file converter guide | size guide | profile, header, cards | sources, ads | 2026 in title |
| 8 | screenshot tool blog | all-network cheat sheet | sizes | sources | 2026 in title |

Query: twitter image size 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | ecommerce social tool blog | image and video guide | sizes | sources; mixes ads and organic | 2026 in title |
| 2 | scheduler blog | size guide for brands | sizes | no X page cited | 2026 in title |
| 3 | resizer tool blog | complete guide | sizes, "WebP allowed" | does not note that X's consumer help omits WebP | 2026 in title |
| 4 | social tool blog | size guide | sizes | sources | 2026 in title |
| 5 | posting tool page | header size tool | header | everything else | 2026 in title |
| 6 | design app template page | single size page | 1200 x 675 | sources | 2026 in title |
| 7 | file converter guide | size guide | cards | sources | 2026 in title |
| 8 | screenshot tool blog | size guide | dimensions | sources | 2026 in title |
| 9 | size directory | spec sheet | profile, header, post | sources | 2026 in title |
| 10 | image tool blog | size guide | card dimensions | sources | 2026 in title |

Query: x post image aspect ratio multiple images crop

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | design app blog | size guide | multi-image ratios 7:8, 4:7, 2:1 | none of those ratios is on an X page | 2026 in title |
| 2 | scheduler blog | size guide | multi-image advice | X source | 2026 in title |
| 3 | influencer marketing blog | size guide | post and ad sizes | sources | 2026 in title |
| 4 | tech how-to blog | "stop X cropping" | crop tips | X source; pre-2021 saliency crop advice | undated |
| 5 | scheduler blog | post dimensions | sizes | sources | 2026 in title |
| 6 | AI posting tool blog | aspect ratios | ratios | sources | 2026 in title |
| 7 | posting tool page | post size | 1200 x 675 | sources | updated September 2026 |
| 8 | batch crop tool | tool page | cropping | not about X | undated |
| 9 | visuals tool blog | sizing guide | header, post, ads | sources; 2025 | 2025 in title |

Query: x video length and size limit 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | social kit page | video size | dimensions and limits | sources | 2026 in title |
| 2 | video tool blog | length limits | 140 seconds, Premium | the API's 20-minute cap, the three Premium figures | 2026 in title |
| 3 | posting tool page | video size | 1280 x 720 | sources | updated September 2026 |
| 4 | video compressor blog | upload limits | size and length | sources | 2026 in title |
| 5 | video tool blog | size limits | max size and length | sources | 2026 in title |
| 6 | ratio calculator blog | specs guide | specs | sources | 2026 in title |
| 7 | posting tool docs | video specs | API-flavored specs | the help center values | 2026 in title |
| 8 | posting tool blog | quick reference | specs | sources | 2026 in title |
| 9 | engagement tool blog | length limits | lengths | sources | undated |

Query: x header photo size 1500x500 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | design studio article | header safe zones | 1500 x 500, 60 px | X source | 2026 in title |
| 2 | archive tool blog | size guide | all dimensions | sources | 2026 in title |
| 3 | influencer marketing blog | size guide | header | sources | 2026 in title |
| 4 | posting tool page | header size | 1500 x 500 | sources; "5MB" header cap not on X | updated September 2026 |
| 5 | posting tool page | post size | post | header | updated September 2026 |
| 6 | image tool blog | 2026 guide | post, header, profile | sources | 2026 in title |
| 7 | social tool blog | size guide | dimensions | sources | 2026 in title |
| 8 | tool page | header size tool | header | sources | 2026 in title |
| 9 | crop app blog | complete guide | posts, profiles | sources | 2026 in title |

**The bar:** 1,000 to 2,500 words, two to five tables, no citations to X in
any of the top results.
**The gap, in one sentence:** No ranking page cites X, so none notices that
X's help, developer docs and Premium page give three different video caps,
that WebP is in the docs but not the help, or that the multi-picture crop
ratios everyone prints are not X's.

## R1. What has to be true (mapped before looking anything up)

1. What image files X takes, and how heavy (photo, GIF).
2. What shapes a single post photo shows uncropped.
3. How many pictures fit in one post, and how X lays out two, three or four.
4. Video: files, length, weight, resolution and shape, for a standard
   account and for Premium.
5. Profile photo and header sizes and files.
6. Ads: image, video, vertical video, carousel specs, kept apart from organic.
7. hubStudio: what the X module posts, its file rules, the Image editor's X
   presets, what is charged.

Outcome of item 3: X publishes the four-item limit and the single-photo rule,
not the multi-picture layout. The layout ratios were cut from the outline
(see Do not publish), and the brief was amended at its source.

## R1 and R5. Claims table

Who paid: none of these are studies; they are X's own documentation. Sample
size and method: not applicable (platform rules, read directly). "Help" =
help.x.com, "Docs" = docs.x.com, "Ads specs" = the X Ads creative specs article.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| A single photo with a standard aspect ratio between 2:1 and 3:4 displays in full; what you see in the composer is what you get | help.x.com/en/using-x/posting-gifs-and-pictures | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Photos up to 5MB; animated GIFs up to 5MB on mobile and 15MB on web; GIF, JPEG and PNG accepted; BMP, TIFF and other formats not accepted; photos scaled automatically for display | same | undated, read 2026-10-14 | n/a | read directly (FAQ "What are the size and file type requirements?") | n/a | primary |
| Photos and GIFs do not count toward the character limit; a GIF that does not loop shows as a static image; on iOS, once two or more photos are selected, tap and hold a photo to drag and reorder it | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| A post holds up to 4 media items (for example 2 photos, 1 GIF and 1 video); a post holds up to 280 characters; longer posts (Premium) up to 4,000 characters | help.x.com/en/using-x/how-to-post | undated, read 2026-10-14 | n/a | read directly | n/a | primary; 4,000 conflicts with the Premium page (25,000), not used on the page |
| API: up to 4 photos, 1 animated GIF or 1 video in a Post; images JPG, PNG, GIF, WEBP up to 5 MB; animated GIF up to 15 MB; GIF recommended up to 1280 x 1080, 350 frames, 300 million pixels | docs.x.com/x-api/media/quickstart/best-practices; docs.x.com/x-api/posts/create-post | undated, read 2026-10-14 | n/a | read directly | n/a | primary; WebP conflicts with the help center list (GIF, JPEG, PNG), both printed |
| API post video, default account: 0.5 seconds to 20 minutes, 8 GB; Premium or verified: 0.5 seconds to 125 minutes, 16 GB; "Post-video caps match the X app"; recommended H264 High Profile, 30 or 60 fps, 1280 x 720, 720 x 1280 or 720 x 720, AAC LC; subscribed users get 1080p playback, unsubscribed 720p; advanced: 32 x 32 to 1280 x 1024, 1:3 to 3:1, 60 fps or less; a video over the user's cap is refused at Post create with "This user is not allowed to post a video longer than N minutes." even after a successful finalize. No container named for organic video (the ads specs name MP4 or MOV) | docs.x.com/x-api/media/quickstart/best-practices | undated, read 2026-10-14 | n/a | read directly | n/a | primary; conflicts with the help center video article, both printed with their surface named |
| Web upload, not subscribed: videos up to 140 seconds, 512MB; Premium: shorter than 4 hours at 1080p, 16GB; 2 to 4 hours at 720p, 16GB | help.x.com/en/using-x/x-videos | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Web upload: minimum 32 x 32, maximum 1920 x 1200 (and 1200 x 1900), aspect 1:2.39 to 2.39:1, maximum 40 fps, maximum 25 Mbps | same (FAQ "What are the limitations on video resolutions and aspect ratios that can be uploaded on the web?") | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Videos 60 seconds or shorter loop; videos do not count toward the character limit; uploads downloadable by Premium subscribers unless "Allow video to be downloaded" is switched off while composing, and the setting cannot be changed later | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Premium: video uploads "up to ~3 hours long and up to 8GB file size (1080p)", on x.com and X for iOS only; longer posts up to 25,000 characters | help.x.com/en/using-x/x-premium | undated, read 2026-10-14 | n/a | read directly | n/a | primary; conflicts with x-videos (under 4 hours, 16GB) and the docs (125 minutes, 16 GB) |
| Header photo ("banner") recommended 1500 x 500; profile photo recommended 400 x 400; profile and header in JPG, GIF or PNG; no animated GIF for profile or header; bio 160 characters | help.x.com/en/managing-your-account/how-to-customize-your-profile | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Profile photo: JPEG, GIF or PNG, maximum 2MB, recommended 400 x 400; header recommended 1500 x 500; on some monitors and browsers 60 pixels at the top and bottom of the header could be cropped | help.x.com/en/managing-your-account/common-issues-when-uploading-profile-photo | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Ads: not every format is open to self-serve advertisers ("Check with your Account Manager or file a support ticket"); post copy 280 characters, each link takes 23 | help.x.com/en/business-and-advertising/creative-ad-specifications (reached from business.x.com/en/help/campaign-setup/creative-ad-specifications) | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Image ads: PNG and JPEG recommended, no BMP or TIFF, an uploaded GIF renders static, max 5MB; ratios 4:5 at 1440 x 1800, 2:3 at 1080 x 1620, 1:1 at 1080 x 1080, 1.91:1 at 2064 x 1080, 16:9 at 1920 x 1080, 9:16 at 1080 x 1920 | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Video ads: MP4 or MOV; 1 GB max, under 30 MB strongly recommended; 15 seconds or less recommended, up to 2:20 supported (select advertisers can request up to 10 minutes); 29.97 or 30 fps, up to 60; H264, AAC LC; logo persistent in the upper left if used; captions or text overlays strongly recommended; thumbnail PNG or JPEG, 5MB; loops under 60 seconds; standalone video 1200 x 1200 for 1:1 and 1920 x 1080 for 16:9 recommended | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Vertical video ads: 9:16 recommended; max 1080 x 1920, min 720 x 1280; under 15 seconds recommended, up to 2:20; max 60 fps; max 25 Mbps, target 5 to 10 Mbps | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| Carousel ads: 2 to 6 slides, images or videos, one aspect ratio per carousel; 800 x 418 (1.91:1) or 800 x 800 (1:1) recommended for image carousels; website title 70 characters, 50 to avoid truncation | same | undated, read 2026-10-14 | n/a | read directly | n/a | primary |
| X began cropping images with a saliency algorithm in 2018; in 2021 it began showing standard aspect ratio photos in full on iOS and Android without that crop, launched it to everyone, and added a true preview in the composer | blog.x.com/engineering/en_us/topics/insights/2021/sharing-learnings-about-our-image-cropping-algorithm | May 19, 2021 | n/a | read directly | n/a | primary (X's own blog) |
| "What you see is what you get" in the composer; exceptions possible for photos that are not a standard size or are really long or wide | blog.x.com/en_us/topics/product/2020/transparency-image-cropping | October 1, 2020 | n/a | read directly | n/a | primary (X's own blog) |
| hubStudio X module: a post or a thread; Text only, + Image, + 2 to 4 pictures; X takes no video from hubStudio yet; JPG, PNG, WebP and GIF up to 5 MB each; an animated GIF up to 15 MB goes out alone; 280 characters a post as X counts them; Image editor Social panel for X: Post, wide (16:9, shown whole), Post, square, Post, portrait, One of two; crop or fit over a blurred background; see how X crops it beside other pictures; editing free; publish now or schedule, up to 20 accounts; queue checked every five minutes; three attempts on a temporary error; each post sent to X through hubStudio is charged, price shown before sending; posting by hand costs nothing; Publish manually opens X's composer | src/content/help/x.md | help updated 2026-10-08 | n/a | first-party product documentation | n/a | primary (first-party) |
| Image editor Social panel X placements: Post, wide (1600 x 900, Best), Post, square, Post, portrait, One of two, Header photo, Profile photo, Link card; "Show what the network covers" draws in dashed lines the crop of one of two pictures on X | src/content/help/assets-library.md | help in repo 2026-10-14 | n/a | first-party product documentation | n/a | primary (first-party) |

## Cleared for use

> X's help center says a single photo with a standard aspect ratio, anywhere
> from 2:1 to 3:4, displays in full, and that what you see in the composer is
> what you get on X. Read directly from the help article, which carries no
> date.
> Source: X Help Center, "How to post photos or GIFs on X," read October 14,
> 2026. https://help.x.com/en/using-x/posting-gifs-and-pictures

> X's help center caps photos at 5MB and animated GIFs at 5MB on mobile and
> 15MB on the web, and lists GIF, JPEG and PNG as the accepted files. X's
> developer documentation lists JPG, PNG, GIF and WEBP for the API.
> Source: X Help Center, "How to post photos or GIFs on X," and X developer
> documentation, "Media best practices," read October 14, 2026.

> Three X pages give three ceilings for a long video. The web upload help
> says up to 140 seconds and 512MB without a subscription, and under four
> hours at 1080p, 16GB, with one. The Premium page says about three hours and
> 8GB at 1080p. The developer docs say 20 minutes and 8 GB by default, 125
> minutes and 16 GB with Premium, through the API.
> Source: X Help Center, "How to share and watch videos on X" and "About X
> Premium"; X developer documentation, "Media best practices"; read October
> 14, 2026.

> X's ads specs recommend video ads of 15 seconds or less, support up to two
> minutes 20 seconds, cap the file at 1 GB and strongly recommend staying
> under 30 MB.
> Source: X Help Center, "X Ads creative specs," read October 14, 2026.
> https://help.x.com/en/business-and-advertising/creative-ad-specifications

> X's profile help recommends a 1500 by 500 header and a 400 by 400 profile
> photo, caps the profile photo at 2MB, and warns that 60 pixels at the top
> and bottom of the header could be cropped on some screens.
> Source: X Help Center, "Help with uploading a profile photo," read October
> 14, 2026.

## Do not publish

| Claim | Where seen | Why it does not clear |
|---|---|---|
| 1200 x 675 is X's recommended post image size | most size guides in the SERP | No X page read gives it. X gives a ratio window (2:1 to 3:4) for a single photo, no pixel size |
| Two pictures at 7:8, three at 7:8 plus 4:7, four as 2:1 cells | size guides, search snippet | Not on any X page read (help, docs, blog). X publishes no multi-picture layout. Cut; the page says X does not publish it |
| X crops multi-picture posts "from the center" | size guide | Not on an X page. The 2021 blog describes the old saliency crop for single photos only. Cut as a claim; the page gives centering as production practice, not as X's rule |
| Header image 5MB cap | header size pages | No X page gives a header file cap. Cut |
| Link card 1200 x 628 or 1200 x 630 | size guides | X's cards documentation could not be reached (docs.x.com cards URL returned 404 on 2026-10-14). Cut, no link card row |
| Android app caps Premium uploads at 10 minutes | video tool blog | Not on an X page read. Cut |
| 1600 x 900 is X's recommendation | some guides | X gives none. 1600 x 900 is the hubStudio Image editor's preset (marked Best in the app), and is printed only as that |
| Premium prices | help.x.com/en/using-x/x-premium | Not a spec; another company's price list. Never printed |
| Longer posts: 4,000 against 25,000 characters | How to Post against About X Premium | Out of scope for an image and video page; not used |
| API flag to disclose AI-generated media | docs.x.com create-post | A one-line parameter with no stated rule behind it; outside this page's scope |
| Video bitrate table (2048K landscape) against "Minimum Video Bitrate: 5,000 kbps" | docs.x.com best practices | The page contradicts itself; bitrate is not needed for a practitioner spec table. Cut |

## Screenshot inventory

Text captures of the rendered pages, saved 2026-10-14 to
`research/x-image-video-specs/`. No app capture taken: the hubStudio section
reuses the help center's existing localized captures (`/Images/help/x-brief.webp`,
`/Images/help/x-knobs.webp`).

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| help-gifs-pictures-check1-2026-10-14.txt | How to post photos or GIFs on X, FAQ answers opened | 2026-10-14 | X Help Center |
| help-how-to-post-check1-2026-10-14.txt | How to Post (4 media items, 280 characters) | 2026-10-14 | X Help Center |
| help-x-videos-check1-2026-10-14.txt | How to share and watch videos on X, FAQ answers opened | 2026-10-14 | X Help Center |
| help-x-premium-check1-2026-10-14.txt | About X Premium (longer video uploads) | 2026-10-14 | X Help Center |
| help-customize-profile-check1-2026-10-14.txt | How to customize your profile | 2026-10-14 | X Help Center |
| help-profile-photo-issues-check1-2026-10-14.txt | Help with uploading a profile photo | 2026-10-14 | X Help Center |
| biz-creative-ad-specs-check1-2026-10-14.txt | X Ads creative specs | 2026-10-14 | X Help Center, Business and Advertising |
| docs-media-best-practices-check1-2026-10-14.txt | Media best practices (API limits) | 2026-10-14 | X developer documentation |
| docs-create-post-check1-2026-10-14.txt | Create Posts (media attachments) | 2026-10-14 | X developer documentation |
| blog-2021-cropping-learnings-check1-2026-10-14.txt | Sharing learnings about our image cropping algorithm, May 19, 2021 | 2026-10-14 | X engineering blog |
| blog-2020-transparency-cropping-check1-2026-10-14.txt | Transparency around image cropping, October 1, 2020 | 2026-10-14 | X product blog |

## R8. Reconciliation (filled after drafting)

Check 2 ran 2026-10-14 in iteration 8: all 11 cited pages re-rendered the
same way (files `*-check2-2026-10-14.txt`) and searched for the exact strings
the draft relies on, 79 strings in all. Every one matched. How to Post served
the browser challenge twice and was read on the next attempt. No page had
changed between the two reads.

Every number in the draft, against the claims table:

| Draft figure | Claims row |
|---|---|
| Single photo 2:1 to 3:4 shown in full; composer is what you get | posting-gifs-and-pictures |
| Photo 5MB; GIF 5MB mobile, 15MB web; GIF, JPEG, PNG; no BMP or TIFF; non-looping GIF static; no character cost; iOS reorder | posting-gifs-and-pictures |
| API: JPG, PNG, GIF, WEBP; GIF 15 MB; 1280 x 1080 and 350 frames | docs best practices |
| Up to 4 media items, mixed; 280 characters | how-to-post |
| API: 4 photos, or 1 GIF, or 1 video | docs create-post and best practices |
| Web video: 140 seconds, 512MB; Premium under 4 hours 1080p, 2 to 4 hours 720p, 16GB; 32 x 32 to 1920 x 1200 (or 1200 x 1900); 1:2.39 to 2.39:1; 40 fps; 25 Mbps; 60-second loop; download setting fixed | x-videos |
| Premium page: about 3 hours, 8GB, 1080p, x.com and iOS only | x-premium |
| API video: 20 minutes and 8 GB default; 125 minutes and 16 GB Premium; 32 x 32 to 1280 x 1024; 1:3 to 3:1; 60 fps; H.264, AAC; 1280 x 720, 720 x 720; 720p playback without a subscription; "Post-video caps match the X app"; the 403 message | docs best practices |
| MP4 as the safe export | ads specs (MP4 or MOV); organic pages name no container, stated as such |
| Header 1500 x 500; profile 400 x 400; JPG, GIF, PNG; no animated GIF; 2MB profile; 60 px header crop | customize-profile, profile-photo-issues |
| Image ads: PNG or JPEG, GIF static, 5MB, six shapes with pixels | ads specs |
| Video ads: MP4 or MOV, 1 GB, under 30 MB, 15 seconds, 2:20, 10 minutes on request, H264, AAC LC, 1200 x 1200 and 1920 x 1080, logo upper left, captions | ads specs |
| Vertical video ads: 9:16, 720 x 1280 to 1080 x 1920, under 15 seconds, 2:20, 25 Mbps | ads specs |
| Carousel ads: 2 to 6 slides, one ratio, 800 x 418 and 800 x 800 | ads specs |
| Ad copy 280, link 23; self-serve note | ads specs |
| Saliency crop from 2018; 2021 full display on iOS and Android, launched to everyone, composer preview | X engineering blog, May 19, 2021 |
| Exceptions for very long or wide photos, focal point | X blog, October 1, 2020 |
| hubStudio: formats, 5 MB and 15 MB, 280 counter, presets incl. 1600 x 900 Best and One of two, dashed crop overlay, free editing, 20 accounts, five-minute queue, three attempts, no video to X, Publish manually, X post charged with price shown, posting by hand free | help x.md, assets-library.md |

Removed or never drafted: the multi-picture layout ratios, 1200 x 675 as X's
size, a header file cap, a link card size, the Android Premium cap (all in Do
not publish). The 1600 x 900 figure appears only as the hubStudio preset.
"Leave room on every side" and "load every picture before you judge" are
printed as production practice, labeled as not X's spec.
