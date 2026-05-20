#!/usr/bin/env bash
# Temporary batch script: generate all TikTok platform page images in parallel.
# Removed after use; not committed.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "/tmp/gen-${1%.*}.log" 2>&1 &
}

GEN "tt-hero.jpg" "1:1" \
"A close editorial portrait of a young creator filming themselves on a phone mounted to a tripod, ring light reflection just visible in the eye, soft warm window daylight from camera-right, navy fabric backdrop falling out of focus, 50mm prime, f/2.8, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds with the face on the right third, negative space top-left"

GEN "tt-roots.jpg" "16:9" \
"A wide editorial photograph of a vertical-content production studio at golden hour, two operators side by side at vertical reference monitors reviewing a short-form video timeline, soft warm window daylight from the left, navy console, exposed brick wall in soft focus behind, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the right"

GEN "tt-algorithm.jpg" "5:4" \
"A wide overhead studio still of a long printed timeline laid across a warm wood table, dozens of small vertical-format frame thumbnails arranged in clusters, each cluster annotated with a hand-written hashtag on coloured tape, soft north-facing daylight, a coffee cup at one edge, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "tt-authentic.jpg" "5:4" \
"A close handheld still of a young creator filming a UGC-style product unboxing on a sunlit kitchen counter, phone held vertically with the back of the device visible, one hand framing the shot, the product on the counter in soft afternoon light, warm shadows, 35mm prime, f/2.8, Kodak Gold grade, subtle film grain, rule of thirds with the figure on the right"

GEN "tt-trends.jpg" "5:4" \
"A wide editorial still of a strategist at a studio whiteboard taping printed screenshots of trending sounds and challenges in a horizontal sequence, marker arrows linking the clusters, soft window daylight from camera-left, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "tt-hybrid-main.jpg" "5:4" \
"A producer at a wide reference monitor reviewing a vertical grid of TikTok video variants side by side, each frame showing the same creator in a slightly different setting, soft daylight from an unseen window, neutral concrete studio with one potted plant and a printed brief on the desk, 35mm prime, f/4, warm shadow film grade, Portra 400, lifted blacks, subtle film grain"

GEN "tt-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand swiping a vertical phone screen showing a TikTok-style short-form video frame with warm cinematic colour, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

GEN "tt-p1-brief.jpg" "4:3" \
"A creative strategist and a brand lead at a long studio table, soft daylight from a tall window on the right, the table covered in printed vertical-format screenshots, a single one-page brief in the middle, two pens and a small notebook, no laptops, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "tt-p2-direction.jpg" "4:3" \
"A storyboard wall in a daylit studio, a single column of vertical frame sketches pinned in sequence top to bottom, a printed mood strip and a colour swatch taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain, rule of thirds with negative space on the right"

GEN "tt-p3-aigc.jpg" "4:3" \
"A motion designer at a calibrated workstation in a darkened studio, the main reference monitor showing a single warm cinematic vertical frame, a side panel showing a grid of small generated vertical thumbnails, hands on a graphics tablet, warm glow from one desk lamp, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "tt-p4-launch.jpg" "4:3" \
"A young media operator at a daylit studio desk reviewing a printed posting schedule beside a calibrated vertical monitor showing a short-form analytics dashboard with engagement curves, soft daylight from a window on the left, one ceramic cup of coffee, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "tt-p5-adapt.jpg" "4:3" \
"A colourist at a calibrated grading suite, the main vertical reference monitor showing a warm short-form film frame, waveform and vectorscope panels glowing on a smaller side monitor, hands on a precision grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

GEN "tt-sample-arlen.jpg" "1:1" \
"A close cinematic still of a young creator holding a small skincare product up to soft window daylight, eyes off-camera, one hand resting near the jaw, warm cream knit sweater, navy soft-focus backdrop, 85mm prime, f/2.8, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain, no logo visible"

GEN "tt-sample-briar.jpg" "1:1" \
"A handheld lifestyle still of two friends laughing while preparing breakfast on a sunlit kitchen counter, one cracking an egg, the other holding a phone vertically filming, warm afternoon side light, 35mm prime, f/2.8, Kodak Gold grade, warm shadows, subtle film grain"

GEN "tt-sample-callan.jpg" "1:1" \
"A low-angle cinematic still of a chestnut leather sneaker stepping onto wet city pavement at dusk, single warm street lamp source from camera-right, soft reflection in the puddle, no other people visible, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "tt-sample-dane.jpg" "1:1" \
"A clean tabletop product still of a matte black wireless earbuds case on a warm sand-coloured concrete surface, a hand entering the frame from camera-right placing one earbud beside the case, soft daylight from camera-left, neutral background, 50mm prime, f/4, Fuji 400H grade, lifted blacks, subtle film grain, negative space top-left"

GEN "tt-sample-elin.jpg" "1:1" \
"A close cinematic still of a dancer in a warm studio mid-spin, motion-blurred fabric, soft single softbox from camera-left, deep navy backdrop falling into shadow, 85mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

echo "All 17 TikTok generation jobs launched. Waiting on completion..."
wait
echo "TikTok batch done. Logs in /tmp/gen-tt-*.log"
