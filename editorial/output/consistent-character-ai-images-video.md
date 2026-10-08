---
title: How to Keep a Consistent Character in AI Images
slug: consistent-character-ai-images-video
description: Keep a mascot, model or presenter the same across AI images and video: reference sheet, fixed descriptor, reference limits per engine, drift check.
excerpt: One face in every image and clip: build a reference sheet, reuse a fixed description, feed references within each engine's limit, then check for drift.
template: howto
---

<!-- HERO SECTION -->

# How to keep a consistent character across AI images and video

A character drifts because every render is a fresh draw. It holds when the
same pictures and the same words go into every run, the clips start from
approved stills, and someone checks the face before anything ships.

<!-- INTRODUCTION -->

## How do you keep a consistent character in AI images and video?

Lock the character before you make anything: a reference sheet of approved
angles, a fixed description pasted word for word into every prompt, and
reference images fed to an engine whose maker documents them. Render the stills
first, animate them from a start frame, then check face, outfit and
proportions. In the hubStudio app, the image and video studios take those
references directly.

Start by splitting the character in two: what never moves, and what each new
picture is allowed to change.

| Element | Lock in every run | May vary by scene |
|---|---|---|
| Face | Bone structure, eye color and shape, brows, nose, skin tone, marks such as a mole or a scar | Expression |
| Hair | Color, length, parting, hairline | Movement from wind or action |
| Body | Build, height, head-to-body proportion | Pose, gesture, action |
| Outfit | The signature garment, its colors, where a logo sits | A coat or apron added for a scene, if approved |
| Age | Apparent age | Nothing |
| Style | Rendering style of an illustrated mascot: line weight, palette, shading | Nothing |
| Scene | Nothing | Setting, light, time of day, lens, camera angle |

Anything you leave off the lock column, the engine decides for you, and not
the same way twice.

<!-- SECTION: Why characters drift -->

## Why does an AI character change between images?

Because words leave room. "Short dark hair" can come back as a bob in one run
and a crop in the next, and both obey the prompt. Swap a synonym, reorder the
sentence or add a new scene detail, and the engine reads the whole description
fresh.

Video adds time. A clip that opens on the right face has several seconds in
which to wander, and a fast camera move or a turn of the head gives it the
chance. Even the makers say so. ByteDance's own launch post for Seedance 2.0
lists "room for optimization regarding multi-subject consistency" among the
model's open issues.

So the fix is mechanical. The engine needs pictures to look at and the same
words every time. Then a person has to check what comes back.

<!-- SECTION: The method -->

## How do you build a consistent character, step by step?

Nine steps, in this order. The create page shows where each studio sits in the
app.

- **Build the reference sheet.** Five pictures of the character, one file
  each: front, three-quarter, profile, full length, and a face close-up.
  Plain background, flat even light, the signature outfit, nothing in the
  hands. Google's Gemini documentation describes the same move as a "360
  view": render one angle at a time and "include previously generated images
  in subsequent prompts to maintain consistency." Keep the angles as separate
  files rather than one grid, because the image studio resizes every upload
  to 1,536 pixels on its long side, and a face in a nine-panel grid arrives
  tiny.
- **Write the fixed descriptor.** Fifty to eighty words that name every
  locked row in the table above. Paste it unchanged at the top of every
  prompt. Never paraphrase it, and never edit it mid-project.
- **Teach the rewrite.** Improve with AI rewrites everything in the box,
  descriptor included, so check that the description comes back intact, and
  click Undo when it does not. The Catalog skill Consistent character across
  images exists to keep the same person or mascot recognizable across a
  series; add it so every rewrite follows it. The Skills help article shows
  where it lives. An admin can also write the descriptor into a team skill,
  opened by a "When:" line so it joins only the rewrites that mention the
  character.
- **File the set.** One Assets Library folder for the sheet and the
  descriptor, tagged with the character's name. Otherwise someone pulls last
  month's face out of History.
- **Render the stills with references attached.** In the image studio, pick
  Edit an image, attach the sheet pictures the engine takes (four on most
  engines, the face close-up first), and write the scene under the
  descriptor. The result takes the shape of the first picture attached, so
  set Shape yourself.
- **Approve the stills.** Send them for validation before any video exists.
  A clip made from an unapproved still inherits its flaws.
- **Animate from a start frame.** In the video studio, open What the render
  is fed, pick Start image, and attach the approved still. The clip opens on
  it. Add a last frame on the engines that take one when the move must end on
  a known pose.
- **Use references for the shots you cannot start from a still.** A wide
  shot in a new place, or the character walking in mid-clip. Pick
  References instead. The form makes you choose: an engine given a frame
  ignores references. Files fed to a render are billed like a download when
  it succeeds, a small charge against your prepaid balance.
- Then run the drift check below on every image and clip before it goes
  out.

<!-- SECTION: Prompt example -->

## What does a consistent-character prompt look like?

Two blocks: the descriptor, which never changes, and the scene, which always
does. The character below is invented for this guide.

```prompt
CHARACTER (paste unchanged in every run):
Mara, a woman in her early thirties. Oval face, warm olive skin, dark brown
almond-shaped eyes, straight black brows, a small mole above the left corner
of the mouth. Shoulder-length straight black hair parted on the left, tucked
behind the right ear. Slim build. Rust-colored wool overshirt, open, over a
white crew-neck T-shirt; dark indigo jeans; no jewelry. The attached pictures
show this same woman: the first is her face, the others her outfit and build.

SCENE (changes every run):
Mara stands behind a bakery counter at eight in the morning, reaching for a
paper bag. Soft window light from camera left, 35mm lens, waist-up framing,
eye level. Calm, half smile.
```

For the clip, the approved bakery still goes in as the start image. The
character block stays on top, unchanged, and the scene block describes motion
only:

```prompt
SCENE (video, start image attached):
She lifts the paper bag, turns a quarter toward the window and smiles.
Slow push-in, no cut. Ambient room sound, a coffee machine in the distance.
```

Say what each attached picture is for. Several makers document the habit:
Alibaba's Wan documentation has prompts call them "Image 1" and "Image 2", and
a MiniMax example reads "have the character in Image 2 sing."

<!-- SECTION: Engines and references -->

## Which AI engines support reference images?

The makers' own documentation, read on October 8, 2026, against what the
hubStudio app takes per engine. The app column comes from the Create an image
help article and the Create a video help article; the engines page lists
every engine by maker. The app's limit can sit below the maker's, so plan
the sheet around the app's number. This is the table worth bookmarking; the
rest of the page is method.

| Engine (maker) | What the maker's documentation says | What the app takes |
|---|---|---|
| Nano Banana Pro (Google) | Up to 14 reference images, up to 5 of them characters | Up to 4 source pictures per edit |
| Nano Banana 2 (Google) | Up to 14 in all; up to 4 character images and 10 object images per request | Up to 4 source pictures per edit |
| ChatGPT Image 2 (OpenAI) | Up to 16 input images on the edit endpoint, each read at high fidelity | Up to 4 source pictures per edit |
| FLUX.1 Kontext Pro and Max (Black Forest Labs) | One input image; holds character consistency across repeated edits | 1 source picture |
| Seedream 4.5 and 5.0 Pro (ByteDance) | 4.5 preserves the reference's facial features; 5.0 Pro fuses several reference pictures; no count on the pages read | Up to 4 source pictures per edit |
| Veo 3.1 Fast (Google) | Up to 3 reference images of a person, character or product; the clip must run 8 seconds | Start and last frame, or up to 3 reference pictures |
| Seedance 2.0 (ByteDance) | Up to 9 images, 3 video clips and 3 audio clips | Start and last frame, or 9 pictures, 3 clips, 1 sound file |
| Seedance 2.5 (ByteDance) | "Understands reference videos more precisely"; no count on the page read | Start and last frame, or 30 pictures, 10 clips, 2 sound files |
| Grok Imagine 1.5 (xAI) | Up to 7 reference images, at 720p at most | Start image, or 7 pictures and 1 sound file |
| Wan 3.0 (Alibaba) | Multiple reference images, videos and audio; no count on the page read | Start and last frame, or 10 pictures, 5 clips, 1 sound file |
| MiniMax H3 (MiniMax) | Mixed image, video and audio references in one instruction; no count on the page read | Start and last frame, or 9 pictures, 3 clips, 1 sound file |
| Kling 2.5 Turbo, 2.6 and 3.0 (KlingAI); Gemini Omni Flash (Google) | Not covered: the app runs them from words alone | Prompt only: no frame, no references |

> Google's Gemini API documentation lets Nano Banana 2 take up to 4 character
> images and up to 10 object images in one request, and Nano Banana Pro up to
> 5 character images and 6 object images, out of 14 reference images in all.
> Google's February 2026 launch post for Nano Banana 2 put it at five
> characters and 14 objects "in a single workflow", a count across several
> steps rather than one request.
> Source: Google AI for Developers, image generation documentation, last
> updated October 2026, and the Google blog, February 2026; maker documentation.

> Google's documentation says Veo 3.1 accepts up to 3 reference images of a
> person, character or product "to preserve the subject's appearance in the
> output video", and fixes a reference-image clip at 8 seconds.
> Source: Google AI for Developers, Veo documentation, last updated September
> 2026; maker documentation.

> ByteDance says Seedance 2.0 takes up to 9 images, 3 video clips and 3 audio
> clips in a single request.
> Source: ByteDance Seed, Seedance 2.0 launch post, February 2026; maker claim.

> xAI's documentation allows up to 7 reference images per reference-to-video
> request, at a maximum resolution of 720p. OpenAI's API reference lets its GPT
> Image models take up to 16 images in one edit. Black Forest Labs documents
> FLUX.1 Kontext as editing from a single input image.
> Source: xAI documentation, last updated September 2026; OpenAI API reference
> and Black Forest Labs documentation, both read October 2026; maker
> documentation.

A higher limit is room, not a target. What helps is clean, well-lit angles of
one person and nothing else in the frame. Alibaba's Wan documentation asks
that a reference used for a main character "contain only a single character,"
and that is good practice on any engine. The how-to guides go deeper on single
engines.

<!-- SECTION: Image to video or references -->

## Image to video or reference to video: which keeps a character better?

A start frame wins whenever the shot can begin on a picture you have already
approved. Google's documentation says Veo "uses the input image as the initial
frame," so the first frame is your approved face. References cover the rest,
mostly shots where the character turns up somewhere no approved still
exists.

| Method | What the engine does | Use it for | Watch for |
|---|---|---|---|
| Start image | Opens the clip on your still | Close-ups, dialogue, a product in hand | Drift late in the clip: keep moves small |
| Start and last frame | Renders the movement between two stills | A turn, a sit-down, a walk between two approved poses | Both stills must already match |
| References | Imitates the pictures without locking the first frame | Wide shots, new locations, an entrance mid-clip | Lower ceilings on some engines: 720p on Grok Imagine 1.5, 8 seconds on Veo 3.1 |
| Prompt only | Invents the character from words | Nothing that recurs | A new face every time |

Alibaba's Model Studio documentation adds a chaining trick for longer
sequences: "Setting the last frame of one clip as the first frame of the next
creates seamless transitions." The same logic works in the app without a
frame grab: short clips, each opening on an approved still, give the face
fewer seconds to wander.

<!-- SECTION: Drift checklist -->

## What should you check for character drift?

Look at every image and clip at full size, side by side with the front view
of the reference sheet. On a clip, pause near the end and check the face
there, not just in the opening frame.

| Check | What drift looks like | Fix |
|---|---|---|
| Face shape | Jaw wider, cheeks rounder, face younger | Re-run with the face close-up attached first |
| Eyes and brows | Color shifts, eyes set wider, brows arched | Name them in the descriptor, unchanged |
| Marks | The mole moves sides or disappears | State its side and place in words |
| Hair | Parting flips, length changes, hairline moves | Attach the three-quarter view |
| Skin tone | Lighter or darker than the sheet under scene light | Name the skin tone and the light direction |
| Outfit | Collar changes, buttons appear, the logo jumps | Attach the full-length view; describe the garment exactly |
| Proportions | Head too large for the body, height changes against props | Attach the full-length view; give a height |
| Hands | Extra or fused fingers, jewelry that was never there | Re-render; keep hands out of tight close-ups |
| Style (mascot) | Line weight, palette or shading changes | Attach a style frame; lock the rendering style in words |
| Voice (video with sound) | A different voice from one clip to the next | Use the same engine and a sound reference where the engine takes one |

When something fails, fix the input and re-run. Do not patch a face by hand
in one frame and hope the next clip matches it. Send what passes for
validation, so a second person signs off on the face before anything
publishes.

<!-- SECTION: Rights -->

## Can you use a real person as a character reference?

Only with their written consent, for the uses you name. This section
describes production practice, not legal advice.

A real presenter, model or employee used as a reference becomes the face of
every image and clip you make with it, for as long as the files exist, in
places nobody planned when the first picture was taken. Get a signed release
before the first render that names the person, the uses, the media, the term
and what happens to the reference pictures when the term ends. The AI brand
ambassadors insight maps the clauses such a release needs.

Keep the signed release in the same folder as the reference sheet.

> ByteDance states that anyone who wants to use real human portraits as
> subject references for Seedance 2.0 video needs "identity verification or
> prior legal authorization."
> Source: ByteDance Seed, Seedance 2.0 launch post, February 2026; maker
> statement.

Some engines also limit who can appear. Google's Veo documentation sets person
generation to adults only for image to video, first and last frame, and
reference image runs. An invented mascot or presenter avoids the question,
which is one reason brands build one. The AI avatars insight covers when a
synthetic presenter is the better choice.

<!-- SECTION: FAQ -->

## Consistent character AI: questions buyers ask

### How do I keep the same character in AI images?

Build a reference sheet of five angles, write a fixed description of the
face, hair, build and outfit, and paste it unchanged into every prompt. Then
use an engine's edit or reference mode and attach the sheet pictures every
time. Approve one hero still first and treat it as the master for everything
that follows.

### How many reference images should I use for a consistent character?

As many clean angles as the engine accepts, and only angles that show the
character alone. In hubStudio most image engines take up to four source
pictures per edit, so a front view, a three-quarter view, a full length and a
face close-up fill it.
Google documents up to five character images for Nano Banana Pro through its
own API.

### How do I keep a character consistent in AI video?

Start each clip from an approved still rather than from words. Attach it as
the start image, keep the camera move small and the clip short, and keep the
character description on top with only the motion described below it. For
shots no still covers, switch to references and attach the sheet. Then check a
late frame of the clip against the reference sheet.

### Is image to video or reference to video better for consistency?

Image to video, whenever the shot can open on a picture you have approved,
because the first frame is that picture. Reference to video is for new
settings and entrances where no still exists. You cannot mix them in one
render in hubStudio: an engine given a frame ignores the references, so the
form asks you to choose.

### Do reference images make a render cost more?

In hubStudio the price sits next to the button before every run and follows
the engine and the settings you pick. Files fed to a video render are billed
like a download once the render succeeds, and on some engines attaching a
reference clip lowers the price of the whole render. A run that fails is not
charged.

### Why does my AI character's face change between images?

Because each render is a new draw and words leave room. A paraphrased
description, a new synonym or a busy reference picture lets the engine read
the character fresh. Lock the description word for word, attach clean
single-person references every time, and fix drift by changing the input
rather than retouching one output.

### Can I use a real person as an AI character reference?

Yes, with their written consent for the specific uses, media and term, signed
before the first render. Some makers add their own rules: ByteDance asks for
identity verification or prior legal authorization for real portraits, and
Google's Veo generates adults only in reference runs. This is production
practice, not legal advice.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/howto-consistent-character-ai-images-video.webp
- Reference:  /Images/howto-consistent-character-ai-images-video.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial still life photographed on a full-frame camera with a 50mm prime
lens at f/4, looking down at a steep angle onto a worn wooden desk in a
lived-in Chinese design studio in Changsha, late afternoon. A printed photo
contact sheet lies flat on the desk, a strict regular grid of equal-sized
frames in straight rows and columns with even white gutters, the frames small
portraits of the same young
Chinese woman with shoulder-length straight black hair and an open rust-colored
wool overshirt over a white T-shirt, shown from the front, three-quarter,
profile and full length, identical styling in every frame. An art director's
hand, slightly weathered, short unpolished nails, holds a small black
photographer's loupe over one portrait; a red grease pencil has circled two
frames and left a small tick beside a third. Around the sheet: a glass of
green tea with a chipped rim, a roll of white artist tape, a folded printed
brief turned away from the camera, a few pencil shavings. One light source
only: warm window light from camera left raking low across the desk, one
clear shadow of the hand and loupe falling to the right, paper fibers and
desk grain visible. Rule-of-thirds composition with the loupe on the left
third and quiet dark negative space on the right for typography, cropped
tighter than comfortable so the contact sheet runs off the frame edge.
Warm-shadow color film look, slightly desaturated mid-tones, lifted black
point, fine visible film grain, natural skin texture with knuckle creases and
small asymmetries. No text, no letters, no logos, no watermark, no screens.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting (rendered by HowtoLayout)
FAQPage: yes, 7 questions
Breadcrumb: Home > How-to > How to keep a consistent character across AI images and video
Author: Cyril Drouin
datePublished: 2026-10-08
-->

<!-- ASSET BRIEF
TABLES:
  Lock and vary table (element, lock, may vary), first screen.
  Engine reference table (engine, maker documentation, what the app takes),
    maker pages read 2026-10-08, app column from the help center.
  Method table (start image, start and last frame, references, prompt only).
  Drift checklist (check, what drift looks like, fix).
CHARTS: none.
SCREENSHOTS: reuse existing localized captures only, no new capture:
  /Images/help/create-an-image-studio.webp beside the step on rendering stills;
  /Images/help/create-a-video-studio.webp beside the start-frame step;
  /Images/help/skills-catalog.webp beside the skill step.
DOWNLOADS: none.
PROMPT BLOCKS: the two code blocks render as preformatted prompt examples.
INTERNAL LINKS:
  create page -> /app/create
  engines page -> /app/engines
  AI avatars insight -> /resources/insights/ai-avatars-brand-content
  AI brand ambassadors insight -> /resources/insights/ai-brand-ambassadors-what-you-sign
  how-to guides -> /resources/how-to
  Create an image help article -> /help/create-an-image
  Create a video help article -> /help/create-a-video
  Skills help article -> /help/skills
FIRST-PARTY FIGURES: app limits per engine (source pictures, frames,
  references, the 1,536 pixel resize) from /help/create-an-image and
  /help/create-a-video; no other first-party figure.
RESEARCH FILE: editorial/research/consistent-character-ai-images-video.md
-->
