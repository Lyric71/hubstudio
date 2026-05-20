#!/usr/bin/env bash
# Temporary batch script: generate all Meta platform page images in parallel.
# Removed after use; not committed.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  # $1 = out filename, $2 = aspect ratio, $3 = prompt
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "/tmp/gen-${1%.*}.log" 2>&1 &
}

# Hero
GEN "meta-hero.jpg" "1:1" \
"A close editorial portrait of a creative director scrolling a phone showing a paused Reels frame, one hand cradling the phone, warm rim light catching the screen and the side of the face, deep navy falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 50mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds composition, negative space top-right"

GEN "meta-roots.jpg" "16:9" \
"A wide editorial photograph of an open-plan creative studio in late afternoon, two designers reviewing a wall of pinned Reels storyboards and Facebook ad mockups, soft golden daylight from a tall window on the right, warm wood floor, navy linen sofa in the foreground, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Facebook feature
GEN "meta-fb.jpg" "5:4" \
"A close cinematic still of two friends in their late thirties on a sunlit balcony, one holding a phone showing a Facebook community post, the other leaning in pointing at the screen, soft late-afternoon side light, warm shadows on a navy linen tablecloth, a half-finished espresso between them, 50mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain, no logo visible, rule of thirds with the figures on the right third"

# Instagram feature
GEN "meta-ig.jpg" "5:4" \
"A vertical-format editorial still life of a phone held in one hand, the screen showing a fashion Reels frame with a model in cream linen on a sand backdrop, the holding hand resting on a textured travertine surface, soft daylight from camera-left, deep negative space on the right, 85mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

# Testing/variation feature
GEN "meta-testing.jpg" "5:4" \
"A wide overhead studio shot of a contact sheet pinned to a cork board, twenty small variations of the same skincare bottle hero photograph laid out in a grid, each frame with a slightly different colour grade and crop, soft window daylight from camera-left, warm shadows, 50mm prime, f/4, Portra 400 grade, lifted black point, subtle film grain"

# Cultural relevance feature
GEN "meta-cultural.jpg" "5:4" \
"A wide editorial still of a designer at a daylit studio desk arranging printed cultural reference tear-sheets from three markets side by side, each labelled with a small mono-spaced caption strip, a paper coffee cup at the edge of the frame, no laptop visible, soft north-facing daylight, 35mm prime, f/4, Kodak Gold grade, warm shadows, subtle film grain"

# Hybrid main and inset
GEN "meta-hybrid-main.jpg" "5:4" \
"A producer at a wide reference monitor reviewing a grid of Facebook and Instagram ad creative variations side by side, soft daylight from an unseen window on the left, neutral concrete studio with one potted olive plant and a printed brief on the desk, 35mm prime, f/4, warm shadow film grade, Portra 400, lifted blacks, subtle film grain"

GEN "meta-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the phone screen showing a single Reels frame with warm cinematic colour, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process step images
GEN "meta-p1-brief.jpg" "4:3" \
"A creative director and a brand lead at a long studio table, soft daylight from a tall window on the right, the table covered in printed Facebook and Instagram screenshots, a single one-page brief in the middle, two pens and an open notebook, no laptops, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "meta-p2-direction.jpg" "4:3" \
"A storyboard wall in a daylit studio, two columns of frame-by-frame sketches pinned in sequence, one column labelled Feed in mono-spaced print, the other Reels, fabric swatches and a small printed colour strip taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain, rule of thirds with negative space on the right"

GEN "meta-p3-aigc.jpg" "4:3" \
"A motion designer at a calibrated workstation in a darkened studio, the main reference monitor showing a single warm cinematic ad frame, a side panel showing a grid of small generated variation thumbnails, hands on a graphics tablet, warm glow from one desk lamp, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "meta-p4-launch.jpg" "4:3" \
"A media buyer at a daylit studio desk reviewing a printed media plan beside a calibrated monitor showing a campaign dashboard with bar charts, soft daylight from a window on the left, one ceramic cup of tea, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "meta-p5-adapt.jpg" "4:3" \
"A colourist at a calibrated grading suite, the main reference monitor showing a warm cinematic still for a Reels frame, waveform and vectorscope panels glowing on a smaller side monitor, hands on a precision grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

# Proof gallery samples — invented brand names
GEN "meta-sample-aluna.jpg" "1:1" \
"A close studio macro of a frosted glass skincare bottle with a single droplet rolling down the side, set on a soft sand-toned ceramic surface, single softbox from camera-right, deep negative space at the top, 100mm macro prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain, authored editorial campaign photography"

GEN "meta-sample-corren.jpg" "1:1" \
"A film still of a model in a wide camel linen coat seen from behind, walking through a warm-lit corridor with terracotta walls, motion-blurred at the hips, soft daylight from one tall window ahead, 35mm prime, f/2.8, Kodak Gold grade, warm shadows, subtle film grain, rule of thirds with the figure on the left third"

GEN "meta-sample-davos.jpg" "1:1" \
"A low-angle cinematic still of a hand pouring espresso from a moka pot into a small ceramic cup on a warm wood breakfast table, morning daylight from a window on the right, deep shadow on the left, 50mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "meta-sample-evren.jpg" "1:1" \
"A clean tabletop product still of a matte cream leather handbag on a warm travertine surface, soft daylight from camera-left, neutral cream background, a hand entering the frame placing a small pair of sunglasses next to the bag, 50mm prime, f/4, Fuji 400H grade, lifted blacks, subtle film grain, negative space top-left"

GEN "meta-sample-fynn.jpg" "1:1" \
"A close cinematic still of a young couple sharing a moment on a sunlit park bench in early autumn, soft warm sidelight, both in neutral knitwear, one with a phone resting on their lap, leaves on the bench, 85mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain, rule of thirds"

echo "All 17 Meta generation jobs launched. Waiting on completion..."
wait
echo "Meta batch done. Logs in /tmp/gen-meta-*.log"
