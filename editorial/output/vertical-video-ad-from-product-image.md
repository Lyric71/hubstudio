---
title: How to make an AI video ad from a product image
slug: vertical-video-ad-from-product-image
description: Make a 9:16 AI video ad from one product image: start frame, camera move, sound, length, end card, plus Reels, TikTok and Shorts ad specs.
excerpt: One product still, one 9:16 ad: the frame, the camera move, sound, a length each placement takes, an end card, and each network's own specs.
template: howto
---


<!-- HERO SECTION -->

# How to make a vertical AI video ad from one product image

An AI video ad from a product image takes a few minutes to render. The upload
is where it breaks: a headline under the like button, a length the placement
won't take, silence where TikTok wants sound, or a render past 15 seconds
that timed out after it was billed. So start from the placement and work back.

<!-- INTRODUCTION -->

## Can AI make a video ad from one product image?

Yes. In hubStudio's video studio, attach the still as the start frame (or add
a last frame too), set the shape to 9:16, describe the camera move, switch on
generated sound and keep the clip to 15 seconds or less. Then add words and an
end card in the Video editor, inside every placement's safe zone.

<!-- SECTION: placement specs -->

## What does each placement take?

These are the four vertical placements this guide builds for. Every figure
comes from the network's own ads help page or its own downloadable file; the
TikTok platform page and the Meta platform page cover the rest of each
network. Specs reviewed October 8, 2026.

| Placement | Frame | Length | Keep clear (on the network's own frame) | Source |
|---|---|---|---|---|
| Instagram Reels ads | 9:16, 1440 x 2560 | 0 seconds to 15 minutes | 14% top, 35% bottom, 6% each side | Meta Ads Guide |
| Facebook Reels ads | 9:16, 1440 x 2560 | No maximum | 14% top, 35% bottom, 6% each side | Meta Ads Guide |
| TikTok in-feed ads | 9:16 recommended, 540 x 960 or more | Up to 10 minutes at auction; 5 to 60 seconds on reservation, 9 to 15 recommended | 160 px top, 440 bottom, 80 each side, a 120 px right rail over the lower 720 (720 x 1280 template); more at the bottom with an anchor | TikTok ads help center |
| YouTube Shorts ads | 9:16, 1080 x 1920 recommended | Up to 3 minutes; the feed plays the first 60 seconds; 5 seconds minimum on Demand Gen | 288 px top, 672 bottom, 48 left, 192 right | Google Ads Help |

> Instagram Reels video ads take 9:16 at 1440 by 2560 and run from 0 seconds
> to 15 minutes. Meta suggests leaving at least 14 percent of the top, 35
> percent of the bottom and 6 percent of each side free of text, logos and
> key elements, and its Facebook Reels page gives the same zone with no
> maximum length.
> Source: Meta Ads Guide, Instagram Reels and Facebook Reels video ad specs, Awareness objective, read October 2026. https://www.facebook.com/business/ads-guide/update/video/instagram-reels

> TikTok prints no safe-zone number on its in-feed spec page. It says the zone
> depends on the shape, the caption length and any add-ons, and it links
> template files instead. The standard in-feed file, drawn on a 720 by 1280
> frame, keeps 160 pixels at the top, 440 at the bottom and 80 on each side
> clear, plus a 120-pixel rail on the right over the lower 720 pixels.
> Source: TikTok ads help center, auction in-feed ad specifications (updated June 2026), standard safe-zone file dated April 2025, downloaded and measured October 2026. https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads

> Shorts ads can run up to 3 minutes, but only the first 60 seconds play in
> the Shorts feed, and Google recommends staying under 60. Demand Gen video
> needs at least 5 seconds. Google's vertical template on a 1080 by 1920 frame
> leaves 288 pixels at the top, 672 at the bottom, 48 on the left and 192 on
> the right.
> Source: Google Ads Help, YouTube Shorts ads asset specs, Demand Gen asset specs and About video ad specs, read October 2026. https://support.google.com/google-ads/answer/16041697

Lay the three zones over one 1080 by 1920 frame and a single box clears them
all.

> Keep words and the logo inside x 120 to 780 and y 288 to 1248 on a 1080 by
> 1920 frame, a box 660 pixels wide and 960 tall, and they clear every zone
> above. Above y 840 the box can run right to x 888.
> Source: derived October 2026 from Meta's percentages (about 269 pixels top, 672 bottom, 65 a side), TikTok's template scaled by 1.5 (240 top, 660 bottom, 120 a side, a 180-pixel rail from y 840) and Google's template, taking the largest inset on each side. Arithmetic, not a platform rule.

That box is built for standard in-feed placements. A TikTok ad that carries an
anchor, the link card TikTok draws just above the username, needs more room
at the bottom.

> TikTok's anchor templates, on a 540 by 960 frame, give the bottom 406, 439,
> 473 or 507 pixels as the caption grows from one line to four: 812 to 1,014
> pixels on a 1080 by 1920 frame. With an anchor, keep words and the logo
> inside x 120 to 780 and y 288 to 906, and drop the step to x 888.
> Source: TikTok's In-Feed with Anchor LTR templates, linked from the auction in-feed spec page (updated June 2026), downloaded October 8, 2026; dimension labels printed in the files, scaled by 2 and laid over the box above. Arithmetic on TikTok's files, not a TikTok rule.

<!-- SECTION: the frame -->

## Start frame, or start and last frame?

A start frame is enough when the ad is one move: the camera pulls back, say,
or the light slides across the bottle. The clip opens on your picture and the
engine invents what follows.

Add a last frame when the ad has to land somewhere exact, like the end card's
composition. With both pictures attached, the engine renders the movement
between them, so you finish on a framing you chose, with room left for words.

Not every engine takes a picture. The help center lists these:

| Engine | What it takes | Length | Generated sound |
|---|---|---|---|
| Veo 3.1 Fast | Start and last frame | 4, 6 or 8 seconds | Optional |
| Seedance 2.0 | Start and last frame | 4 to 15 seconds | Optional |
| Seedance 2.5 | Start and last frame | 4 to 30 seconds | Optional |
| MiniMax H3 | Start and last frame | 4 to 15 seconds | Optional |
| Wan 3.0 | Start and last frame | 2 to 30 seconds | No switch in the form |
| Grok Imagine 1.5 | Start image | 1 to 15 seconds | Optional |
| Seedance 1.0 Pro Fast | Start image | 2 to 12 seconds | No |

The Kling engines and Gemini Omni Flash take a prompt only, so they can't
start from your still. More engines arrive as they ship.

Choose the still with the crop in mind. A 9:16 frame is tall and narrow. A
packshot shot wide loses its sides, and a product that fills the frame has
nowhere to go when the camera pulls back. Give it room above and below, keep
the label large and square to the lens, and pick a photo lit from one
direction, which the engine can carry through the move. (If the still needs
reframing first, the Image editor's Crop panel has a 9:16 Story format.)

<!-- SECTION: step list -->

## How do you make the clip, step by step?

The video studio, covered on the create page of the app, handles everything
up to the render.

- **Add the skills.** In Skills, open the Catalog and add Video camera
  movement vocabulary, Animating a still (image to video) and Short vertical
  video ad to My skills. Improve with AI follows every skill you switch on.
- **Pick the engine.** Open Video and choose one from the table above.
- **Attach the still.** Under What the render is fed, pick Start image or
  Start and last frame, then Choose from the library, Upload a picture or
  Paste a link.
- **Write the scene.** In Describe your video, write a shot rather than a
  subject: what moves, where the light comes from, how the camera behaves.
  The box takes 2,500 characters. Improve with AI then rewrites it for that
  engine, that length and that sound choice.
- **Set the options.** Vertical (9:16) under Shape where the engine offers
  it, the Duration, the resolution, Generate sound, and Made for when the clip
  is for a client.
- **Read the price, then render.** The total beside Generate video is your
  setup's price per second times the length. A render that fails costs
  nothing.
- **Review and send it on.** Open large plays the clip full screen; Send for
  validation puts it in front of a teammate or a client.

<!-- SECTION: the prompt -->

## How should the motion prompt read?

One continuous move, slow enough that the label survives it. Say what stays
fixed as plainly as what moves. Engines can redraw small type on a moving
product, so ask for less motion near the label, not more.

```prompt
Vertical 9:16 product shot. A matte white serum bottle stands on a pale
stone block, label facing the camera. The camera starts close on the cap
and pulls back slowly and evenly to a medium shot, leaving clear space above
the bottle. Late-afternoon window light from the left; the bottle's shadow
lengthens a little across the stone. Fine dust drifts through the light.
The bottle, its label and its color stay exactly as in the first frame. No
new objects, no text on screen, no cuts. Soft room tone, then a single glass
chime as the move ends.
```

That last line is for Generate sound, which composes the clip's own audio.
Leave the headline out of the prompt. It goes in later, through the editor's
Text panel.

<!-- SECTION: length and cost -->

## How long should the clip be?

Nine to 15 seconds fits every placement in the table. It sits inside TikTok's
recommended window for reservation in-feed and clears the 5-second floor of
Google's Demand Gen campaigns, which serve Shorts. The Reels and Shorts
ceilings are nowhere near.

> TikTok's reservation in-feed ads run 5 to 60 seconds, with 9 to 15 seconds
> recommended, and every video creative must carry sound. Its creative
> guidance asks for the proposition in the first 3 seconds and the hook in the
> first 6.
> Source: TikTok ads help center, reservation in-feed ad specifications (updated July 2025) and creative best practices (updated June 2025), read October 2026. https://ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency

Render at 15 seconds or less. The app gives a render about five minutes, and a
clip over 15 seconds can run longer and fail after the engine has billed it.
The form says so under Duration. Wan 3.0 and MiniMax H3 are among the slower
engines: keep their clips short.

Want more than the 8 seconds Veo 3.1 Fast stops at? Render two clips from the
same still, a wide pull-back and a close detail, and join them in the Video
editor.

Video is priced per second, and the total shows before you click. On some
engines, sound costs more per second. Closing a tab doesn't cancel a render,
and Run again bills again. Budget for more than one run per keeper; the all-in cost of
AI video explains why nobody publishes how many runs a usable shot takes.

<!-- SECTION: the edit -->

## How do you add words, captions, an end card and sound?

Open the clip from History with Edit, or from the Assets Library with Edit
video. The Video editor, on the video tools page, runs in your browser and
costs nothing to use.

Start in Social. Pick Instagram, TikTok or Facebook and the Reel or Video
placement (9:16, 1080 x 1920), leave Show what the network covers on, and
click Apply the format. The red zones now sit over the preview. Shorts isn't
in that panel, so for YouTube use Format, Vertical, and hold to the box above.

- **Words.** In Text, click Add a text, set Appears at and Disappears at, and
  pick Box, Outlined or Plain. Put the claim in the first 3 seconds.
- **Captions.** These write spoken words on screen, word by word, either free
  in your browser or fast and billed, with the price shown first. A clip
  carrying only music and room tone needs Text, not Captions.
- **End card.** Hold the closing seconds on the product with the brand line
  and the offer in Text, inside the safe box. A clip rendered to a last frame
  already ends on that framing.
- **Sound.** Keep the generated audio and set Level of every clip, or add
  music under Sound. Use only music you hold rights to: TikTok and Instagram
  mute or block a video whose music they don't license.

Last, pick the frame for Cover, then Save. The editor writes a 1080p MP4 and
checks the fit for Instagram Reel, Instagram Story, Facebook and TikTok.

For the ad itself, hubStudio stops at the file. It goes up in each network's
own ads manager, and for Shorts, Google wants the video on YouTube first,
public or unlisted.

<!-- SECTION: checklist -->

## What should you check before you upload?

- 9:16, and the 1080p MP4 the Video editor wrote.
- Between 9 and 15 seconds, with no single render past 15.
- Sound on. TikTok's reservation in-feed ads require it.
- The claim inside the first 3 seconds.
- Every word and the logo inside x 120 to 780, y 288 to 1248 (y 288 to 906 on
  a TikTok ad with an anchor).
- The label reading the same in the last frame as in the first.
- Licensed music, or none.
- An end card that holds long enough to read.
- Sign-off in Validation when a client or a teammate approves the work.

<!-- SECTION: FAQ -->

## FAQ

**Can AI make a video ad from one product photo?**

Yes, if the engine takes a start frame. In hubStudio, Veo 3.1 Fast, the
Seedance engines, MiniMax H3, Wan 3.0 and Grok Imagine 1.5 open the clip on
your picture, and most of them take a last frame too. The engine animates what
the still shows, so start from a sharp photo with room around the product.

**What length should a vertical video ad be?**

Nine to 15 seconds works on all four placements. TikTok recommends 9 to 15 for
reservation in-feed ads, Shorts plays only the first 60 seconds in the feed,
and Demand Gen needs at least 5. Keep each render at 15 seconds or under,
because a longer clip can time out after the engine has billed it.

**What is the safe zone for Reels, TikTok and Shorts ads?**

Meta suggests keeping 14 percent of the top, 35 percent of the bottom and 6
percent of each side clear on Reels. TikTok's standard template and Google's Shorts
template draw their zones in pixels. On a 1080 by 1920 frame, words placed
inside x 120 to 780 and y 288 to 1248 clear all three networks. A TikTok ad
with an anchor link card needs the bottom edge at y 906.

**Should the ad have sound?**

Yes. TikTok requires sound on reservation in-feed creatives and lists it among
the basics for performance ads. Meta calls audio optional but strongly
recommended on Reels ads. Generate sound in the video studio composes the
clip's own audio, and the Video editor can lay licensed music under it.

**Will the label on my product stay readable?**

Not always. Engines can redraw small type as the product moves. Keep the label
large in the still, ask for one slow move, say the label must stay as in the
first frame, and compare the last frame with the first before you send the
clip for approval. Brand words go in the editor, never in the render.

**What does a clip cost in hubStudio?**

Video runs are priced per second, and the total shows next to the button
before you render. You pay from a prepaid balance, and a failed render isn't
charged. The exception is a clip over 15 seconds, which can time out after the
engine has billed it. The Video editor is free; its fast captions are billed,
price shown first.

**Can hubStudio run the ad for me?**

No. The app makes the file, edits it and gets it approved; the ad goes up in
each network's own ads manager. If you would rather have the studio build the
whole set, the ad creative service takes a brief, and the AI video production
page shows how the studio works on video.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/howto-vertical-video-ad-from-product-image.webp
- Reference:  /Images/howto-vertical-video-ad-from-product-image.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

A still life on a worn oak work table in a small product studio in Shanghai,
late afternoon. On the left third, a single matte white serum bottle with a
blank label stands on a pale travertine block, lit by one low window light
from the left that throws one long soft shadow to the right across the stone
and the wood. Beside it, lying flat on the table, a smartphone held in a
cheap black tripod clamp is turned sideways toward the bottle, its dark screen
off, and a paper print of the same bottle, cropped tall and narrow, is taped
to the table edge with a strip of masking tape, its corner curling. A pencil
and a folded sheet of tracing paper with faint ruled rectangles drawn on it
sit near the print. The right two thirds of the frame fall into warm shadow
and plain table surface, leaving open negative space. Shot on a 50mm prime at
f/4 from slightly above table height, tight crop that cuts the tripod clamp
at the frame edge, shallow but readable depth. Warm shadows, slightly
desaturated midtones, lifted black point, a gentle film color grade like a
warm 400-speed color negative stock, fine natural grain. Real surfaces: dust
on the oak, small chips on the stone edge, tape fibers. No text, no logos, no
people, no glowing screens, no reflections that do not match the single
window light.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (rendered by the how-to layout)
FAQPage: yes, 7 questions
Breadcrumb: Home > How-to > How to make an AI video ad from a product image
Author: Cyril Drouin
datePublished: 2026-10-08
Reviewed (specs on this page): 2026-10-08
-->

<!-- ASSET BRIEF
TABLES:
  Placement specs: placement, frame, length, keep-clear zone, source, four
  rows (Instagram Reels ads, Facebook Reels ads, TikTok in-feed ads, YouTube
  Shorts ads), every value from the platform pages in the research file.
  Image-to-video engines: engine, what it takes, length, generated sound,
  seven rows, from src/content/help/create-a-video.md.
CHARTS: none. A diagram of the combined safe box (1080 x 1920 frame, the box
  x 120 to 780, y 288 to 1248, the step to x 888 above y 840, the bottom edge
  at y 906 for a TikTok ad with an anchor) would help; it
  is drawn as an authored SVG at publish only if it follows the image style
  guide, otherwise the derived blockquote carries it alone.
SCREENSHOTS: existing localized help captures only, each with .fr.webp and
  .zh.webp siblings in public/Images/help/ and listed in
  src/i18n/localized-images.json:
  /Images/help/create-a-video-studio.webp (in the step list)
  /Images/help/skills-catalog.webp (after the step list)
  /Images/help/video-editor-social.webp (top of the edit section)
  /Images/help/video-editor-save.webp (end of the edit section)
  No new capture. The showcase clip follows settled fallback 12.
DOWNLOADS: none.
CODE BLOCK: the motion prompt renders as a preformatted block, not a quote.
INTERNAL LINKS:
  the AI video production page -> /solutions/ai-production/video
  the ad creative service -> /services/design/ad-creative
  the create page of the app -> /app/create
  the all-in cost of AI video -> /resources/insights/all-in-cost-of-ai-video
  the video tools page -> /app/video-tools
  Image editor -> /app/image-tools
  How-to guides hub (breadcrumb) -> /resources/how-to
  the TikTok platform page -> /solutions/platforms/tiktok
  the Meta platform page -> /solutions/platforms/meta
EXTERNAL SOURCES (cited in blockquotes, link at publish):
  https://www.facebook.com/business/ads-guide/update/video/instagram-reels
  https://www.facebook.com/business/ads-guide/update/video/facebook-facebook-reels
  https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads
  https://ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency
  https://ads.tiktok.com/help/article/creative-best-practices
  https://support.google.com/google-ads/answer/16041697
  https://support.google.com/google-ads/answer/13704860
  https://support.google.com/google-ads/answer/13547298
FIRST-PARTY FIGURES: none. App facts (engine lengths, the 2,500-character
  prompt, the 15-second timeout, 1080p export) come from the help center
  articles create-a-video, skills and assets-library.
TIKTOK LABEL: the page mentions TikTok only as an ad placement and a Video
  editor placement, never as hubStudio publishing; if the publish step adds a
  line about posting to TikTok from hubStudio, it carries "(Beta)".
CATEGORY: Video generation
RESEARCH FILE: editorial/research/vertical-video-ad-from-product-image.md
-->
