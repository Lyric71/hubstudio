---
title: Kling 3.0 Prompts for Product Video
slug: kling-3-product-video-guide
description: Kling 3.0 prompts for product shots: camera moves, lengths from 3 to 15 seconds, app settings, and checks for labels, shape, and reflections.
excerpt: Write a product shot for Kling, choose its camera move and duration, then check the result against the details your customer will notice before approval.
template: howto
---

<!-- HERO SECTION -->

# Kling 3.0 prompts for product video: camera moves and lengths

A bottle can look convincing while its cap changes shape halfway through
the shot. Write the product before the camera move, then inspect the whole
clip. A prompt describes an object; it does not prove that the clip matches
the product you sell.

<!-- INTRODUCTION -->

## How do you write Kling 3.0 prompts for product video?

Write Kling 3.0 prompts as a shot: describe the product’s material, shape,
and label, place it on a surface, then specify the lighting and a camera
move. In hubStudio, Kling takes a prompt only. For a clip that opens on your
actual product photo, choose an engine with a start-frame input.

| What the shot needs | Starting choice | Acceptance check |
|---|---|---|
| An invented product concept | Describe the object in a Kling prompt | Shape and materials stay coherent |
| Your photographed product at the opening | A documented start-frame engine | Opening matches the supplied image |
| A front label that stays visible | A restrained frontal shot | Lettering and label edges survive playback |
| A reflective object | Fixed lighting and a modest move | Highlights follow the surface without changing its shape |

Reviewed October 16, 2026. The settings below come from the help center and
the maker’s documentation. The prompts are proposed shot plans, not results
from a product-video test.

<!-- SECTION: maker capabilities -->

## What changed from Kling 2.6 and 2.5 Turbo?

Kling 3.0 is a video-generation model. Its maker documents broader scene
control than the earlier versions, including multi-shot generation and
element references. Check the app separately for the controls it exposes.

| Maker documentation | What it says | Consequence for a product brief |
|---|---|---|
| Kling 2.5 Turbo release | Improved prompt understanding and dynamic camera motion | Give the motion a clear purpose |
| Kling 2.6 guide | Visuals and native audio generated together | Specify the sound as part of the scene |
| Kling 3.0 guide | Flexible duration, multi-shot generation, element references | Separate model capabilities from the inputs your app exposes |

> Kling’s VIDEO 3.0 guide documents a duration range of 3 to 15 seconds
> and native speech in Chinese, English, Japanese, Korean, and Spanish.
> Source: Kling AI, February 6, 2026, model documentation, not a measured
> product-consistency test.
> https://kling.ai/quickstart/klingai-video-3-model-user-guide

Kuaishou’s September 26, 2025 release describes better prompt comprehension
and dynamic motion for 2.5 Turbo. Kling’s December 16, 2025 guide describes
2.6’s combined visual and audio generation. Sources:
https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-25-turbo-video-model-industry-leading
https://kling.ai/quickstart/klingai-video-26-audio-user-guide

These are maker claims, not evidence that a particular bottle, shoe, or
watch will render correctly.

> Native 4K video output was added to the Kling 3.0 series during the second
> quarter of 2026, according to its maker.
> Source: Kuaishou, August 19, 2026 interim-results announcement, a record
> of a feature release rather than an independent image-quality test.
> https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-technology-announces-second-quarter-and-interim-2026

Engines in the hubStudio app lists the choices. Confirm that the selected
engine takes your source image before writing a brief around that input.

<!-- SECTION: prompt structure -->

## What belongs in a product-shot prompt?

Start with the product’s visible identity. “A luxury bottle” leaves most of
the object unspecified. “A squat amber glass bottle with rounded shoulders,
a black screw cap, and a blank cream paper label” gives the shot something
concrete to preserve.

The surface belongs in the prompt too. The bottle might stand on
stone, painted wood, or a bathroom shelf. If scale matters, add a familiar
object such as a drinking glass. Avoid adding props whose movement would
distract from the product.

Now decide what moves. The product can stay still.
Set the light direction. Give the camera a move and an ending. Reserve room
in that ending for a headline if the clip needs one.

This follows the subject, movement, and scene structure in Kling’s
Text-to-Video guide, dated November 24, 2025. Its camera and lighting terms
remain useful vocabulary; its older duration examples are not the source
for the current settings table.
Source: https://kling.ai/quickstart/text-to-video-prompt-guide

If exact packaging text matters, do not treat a sentence in a prompt as an
approved label file. Keep the intended wording in the brief and compare it
with the output. Use blank labels only for these practice shots. They let
you judge the movement before attempting real packaging; they cannot replace
approved label artwork in a finished product ad.

<!-- SECTION: camera vocabulary -->

## Which camera move should you ask for?

Kling’s camera-control guide, dated August 13, 2026, recommends keeping one
main move per shot rather than combining several commands. The vocabulary
below comes from that guide. The product risks are editorial inspection
criteria, not measured failure rates.
Source: https://kling.ai/blog/kling-ai-camera-control-video-guide

| Move | Prompt wording | Intended effect | Inspect closely |
|---|---|---|---|
| Push in | Slowly move closer to the bottle | Make a detail larger in frame | Label edges and cap proportions |
| Pull back | Slowly pull back from the shoe | Reveal more of its surroundings | Product scale as the view widens |
| Pan | Pan right to bring the stationary product into view | Shift the view sideways | Whether the product stays visible |
| Tilt | Tilt upward from the base to the cap | Reveal the product’s height | Whether the reveal crops essential detail |
| Orbit | Make a shallow orbit around the object | Expose part of another side | Newly revealed surfaces and reflections |
| Track | Track alongside the moving product | Follow the product while it moves through the scene | Contact with the surface and direction of travel |
| Static | Keep the camera locked off | Hold a fixed composition | Unrequested object movement |

For a labeled bottle, start frontally. An orbit asks the render to show
surfaces that a frontal description may leave vague. On polished metal,
inspect the highlight as well as the outline: a bright reflection moving
across a bezel should not become a new ridge in the metal.

Specify whether the camera moves or the product turns. If a shoe
must remain still while the camera retreats, write that explicitly rather
than asking for a “dynamic reveal.”

<!-- SECTION: app settings -->

## What can you set in the hubStudio video studio?

Open Video and choose a Kling engine. Write in Describe your video. The
help center lists these settings. All of these engines take a prompt only
in the app.

| Engine | Length | Mode | Frame size | Generated sound |
|---|---|---|---|---|
| Kling 3.0 | 3 to 15 seconds | Standard or Pro | 720p, 1080p, or 4K | Optional |
| Kling 2.6 | 5 or 10 seconds | Standard or Pro | 720p or 1080p | Pro only |
| Kling 2.5 Turbo | 5 or 10 seconds | Standard or Pro | 720p or 1080p | Optional |

> The app’s Create a video help page lists the lengths and frame sizes
> above. It labels Pro as sharper and says Frame size does not change
> the price on the Kling engines.
> Source: hubStudio help center, updated October 12, 2026, documented
> interface options, not a comparison of rendered results.
> https://www.hubstudio.ai/help/create-a-video

Set Shape from the options the selected engine offers. Use Generate sound
only when the shot needs audio, and describe the intended ambience or
speech. For a silent edit, leave it off. The help page’s optional sound
entry for 2.5 Turbo is an app setting; it is not a claim that the underlying
model has 2.6’s native-audio architecture.

Improve with AI rewrites the prompt for the selected engine, length, and
sound choice. The Catalog includes Video camera movement vocabulary and
Video shot pacing and duration. Before generating, read what changed. The rewrite should preserve the
product description and your chosen shot.

The price per second and total appear before a Kling render. Check them
after changing the settings. A successful Kling render draws from the prepaid
balance and is saved in History with its prompt and engine. The help center
states that these renders are charged only when they succeed. Reuse prompt
loads the settings for editing; Run again starts another paid render.

<!-- SECTION: duration -->

## How long should the product shot be?

Choose the length for the action, then select it in Duration. A request for
a long shot in the prompt does not replace the form setting. These are
starting suggestions within the documented ranges, not quality thresholds.

| Suggested setting | A shot to try | What to remove if it feels crowded |
|---|---|---|
| 3 seconds on Kling 3.0 | A brief static product moment | A second action or a scene change |
| 5 seconds | A modest push toward a bottle | A simultaneous orbit |
| 10 seconds | A slow pull back that reveals the setting | Unnecessary prop movement |
| 15 seconds on Kling 3.0 | A sustained move with a deliberate ending | Any action that does not help show the product |

Try a short version of the action first. If the move
finishes early, ask for a held ending. If it rushes, simplify the shot
before extending it. Trim a held ending if the edit does not need it.

<!-- SECTION: worked prompts -->

## What do product-shot prompts look like?

These examples describe generic objects. Expected results below are the
intent of the shot, not a report of a successful render. Set the duration
in the form and keep it consistent with the prompt.

### Bottle: a restrained push in

```prompt
A squat amber glass bottle stands upright on a worn pale stone counter.
Rounded shoulders, black screw cap, blank cream paper label centered on
the front. The bottle stays still. Soft window light enters from the left.
Over five seconds, the camera slowly pushes closer from a medium view to
the label and shoulders, keeping the cap visible. The label faces forward
throughout. Quiet room ambience, no speech, no music, no added lettering.
```

The intended result is a closer view of the same bottle. Reject a cap that
widens, a label that slides, or reflections that conceal the detail the
shot was meant to show. Switch sound off if the final edit supplies audio.

### Shoe: reveal the setting

```prompt
A single off-white canvas sneaker rests on a scuffed wooden bench, toe
pointing left. Tan rubber sole, plain off-white laces, no logo or lettering.
Soft daylight from a window on the right. The shoe remains still while the
camera slowly pulls back over ten seconds, revealing the bench and a little
empty wall behind it. End with room above the shoe for a headline. No people,
no other shoes, no scene change. Silent clip.
```

The composition should widen without the shoe turning. Check the sole thickness and lace pattern
throughout, especially when the shoe becomes smaller. A good ending needs
usable empty space, not a new object appearing where the headline belongs.

### Watch: hold the dial

```prompt
A brushed steel wristwatch lies face up on a folded gray cotton cloth.
Round case, dark plain dial, simple baton hour markers, brown leather strap,
no logo or text. A broad window to the left lights the steel softly.
Keep the camera locked off for five seconds. The watch and cloth stay still;
the hands remain in the same positions. Show subtle natural surface texture,
without sparkle effects or a scene change. Silent clip.
```

The aim is a product detail rather than a demonstration of timekeeping.
Check the hands and markers as separate parts. Do not use this shot to
demonstrate the accuracy of a real watch. If an exact dial is essential,
use the actual product image as a start frame on a supporting engine and
still inspect every part of the resulting clip.

<!-- SECTION: exact product -->

## Can the clip start from your actual product photo?

Yes, with an engine that accepts a start frame. The help center lists
Veo 3.1 Fast, Seedance 2.0, and Wan 3.0 among those choices. It lists Kling
as prompt only. The maker’s image-input documentation does not describe the app’s form.

Vertical video ad from a product image covers the image-led workflow.
Choose a clean, approved source picture and a move that suits the view it
provides. A start frame supplies the opening; it does not certify the rest
of the clip as an exact product reproduction.

<!-- SECTION: quality assurance -->

## What should you reject before the clip reaches a client?

Watch the whole clip, then stop on frames where the camera or product
changes direction. Compare against the approved product information:

- Check the silhouette, seams, cap, sole, or case. No part should become a
  different design during the shot.
- Read visible lettering. A near-match is still wrong packaging text.
- Follow the reflections. Check that the apparent material and geometry
  remain coherent as the view changes.
- Inspect contact with the surface. A stationary object should not slide
  or float without a reason in the brief.
- Listen to the audio and inspect the ending. Remove unwanted speech and
  leave space for the planned edit.

When a shot fails, return to its prompt in History and change the instruction
responsible for the problem. Simplify an orbit to a fixed view if the unseen
side is being invented. In your review notes, identify the rejected version and the defect to
check in the next render.

The Short video service covers finished production when the work needs an
editor. The TikTok platform page gives the delivery context for that network;
a well-made source clip still needs to fit its intended placement. For a
production brief spanning several shots, see AI video production.

<!-- SECTION: FAQ -->

## Frequently asked questions

### How do I write a good Kling 3.0 prompt?

Describe the object precisely, then its surface, lighting, action, and
camera move. Say what stays still and where the shot ends. Start from a
simple shot whose result you can judge. In the app, review any Improve
with AI rewrite before rendering, especially changes to the product.

### How long can a Kling 3.0 video be?

The maker’s February 2026 guide and hubStudio’s October 2026 help page list
3 to 15 seconds. Choose the duration in the form as well as describing the
pace in your prompt. Use the time for a visible action or a deliberate hold;
the maximum is not a target for every shot.

### What camera movements work in Kling?

The maker documents push in, pull back, pan, tilt, tracking, orbit, and
static-camera wording. These describe intended movement, not guaranteed
results. For a product shot, begin with a move you can inspect easily.
Watch newly revealed surfaces during an orbit and check label readability
through any change of angle.

### What is the difference between Kling 3.0 and Kling 2.6?

The maker’s guide adds flexible duration, multi-shot generation, and element
references in 3.0; both versions document native audio. The app exposes its
own set of controls and lists both as prompt-only engines. Use the settings
table above for app options rather than assuming every maker-side feature
appears in the form.

### Can Kling make a video from my product photo?

The maker documents image-to-video capability, but the Kling engines in
hubStudio are prompt only according to its help center. To open on your
photo inside the app, select a supported start-frame engine, such as
Veo 3.1 Fast, Seedance 2.0, or Wan 3.0. Check the resulting product throughout
the clip, not just at the opening.

### Does Kling 3.0 generate sound?

Yes. The maker documents native audio, and the app offers optional generated
sound on Kling 3.0. Describe the ambience or speech you want and listen to
the result before approval. The app’s Kling 2.6 sound option is available
in Pro mode only. Confirm the selected settings and displayed price before
starting the render.

<!-- CTA -->

The How-to guides cover the next editing steps. Choose a product concept,
write its shot, and inspect the resulting clip in the video studio.

CTA: Create your account

<!-- FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE
Generate with generate-image-openai, gpt-image-2, high quality.
Save to: public/Images/howto-kling-3-product-video-guide.webp
Reference: /Images/howto-kling-3-product-video-guide.webp
Format: landscape 3:2 WebP, maximum 2000px wide, under 250 KB.
Alt: An amber bottle on a worn worktable beside a camera on a short slider.
IMAGE PROMPT (use verbatim):
A candid documentary photograph of a small product-video setup during an ordinary workday in a lived-in Changsha creative studio. A squat unbranded amber glass bottle with a black screw cap and completely blank cream paper label stands on the right third of a scratched gray worktable. At the lower left edge a plain black camera on a short practical metal slider is partly cropped, aimed toward the bottle, its back screen turned away and showing no interface. A loose cable and a small worn piece of pale fabric sit casually near the camera, not arranged decoratively. The visual idea is that a careful camera move must keep the same humble object intact. No people, no invented studio glamour, no luxury advertising set. One slightly uneven overcast window light from camera left, one physically plausible shadow direction, plausible amber glass refraction and modest reflections. Off-center observational framing at table height, 50mm prime-lens look at f/4, believable depth of field, warm shadows, slightly desaturated midtones, lifted black point, subtle film grain. Empty worn tabletop in the upper left provides quiet negative space. Incidental clutter and small surface wear, not artificial damage; natural imperfect placement, no immaculate symmetry, no extreme bokeh, no rendering artifacts. No text, no lettering, no logos, no watermark, no diagrams, no collage. Landscape 3:2.
-->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 6 questions
Breadcrumb: Home > How-to guides > Kling 3.0 prompts for product video
Author: Liyan Ye
datePublished: 2026-10-16
Reviewed: 2026-10-16
-->

<!-- ASSET BRIEF
TABLES: opening shot choice; maker capabilities; camera vocabulary and QA;
app settings from create-a-video.md; suggested durations within those limits.
CHARTS: none; no performance measurements claimed.
SCREENSHOTS: Existing /Images/help/create-a-video-studio.webp,
/Images/help/create-a-video-studio.fr.webp, and
/Images/help/create-a-video-studio.zh.webp inspected and excluded: monetary
amounts are visible and the capture is not a Kling selection. Embed none.
DOWNLOADS: none. Three original prompt blocks remain copyable text.
SHOWCASE: no clip embedded; settled fallback 12, hero and text instructions.
INTERNAL LINKS:
Engines in the hubStudio app -> /app/engines
Vertical video ad from a product image -> /resources/how-to/vertical-video-ad-from-product-image
Short video service -> /services/design/short-video
TikTok platform page -> /solutions/platforms/tiktok
AI video production -> /solutions/ai-production/video
How-to guides -> /resources/how-to
FIRST-PARTY FIGURES: documented engine durations and frame sizes,
src/content/help/create-a-video.md, updated 2026-10-12.
EXTERNAL SOURCES:
Kling 3.0 guide -> https://kling.ai/quickstart/klingai-video-3-model-user-guide
Kling 2.6 guide -> https://kling.ai/quickstart/klingai-video-26-audio-user-guide
Kling 2.5 Turbo release -> https://ir.kuaishou.com/news-releases/news-release-details/kling-ai-launches-25-turbo-video-model-industry-leading
Native 4K confirmation -> https://ir.kuaishou.com/news-releases/news-release-details/kuaishou-technology-announces-second-quarter-and-interim-2026
Prompt structure -> https://kling.ai/quickstart/text-to-video-prompt-guide
Camera vocabulary -> https://kling.ai/blog/kling-ai-camera-control-video-guide
RESEARCH FILE: editorial/research/kling-3-product-video-guide.md
-->
