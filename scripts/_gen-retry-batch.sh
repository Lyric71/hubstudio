#!/usr/bin/env bash
# Temporary retry batch for the 10 images that timed out on the first pass.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "/tmp/gen-retry-${1%.*}.log" 2>&1 &
}

GEN "meta-sample-aluna.jpg" "1:1" \
"A close studio macro of a frosted glass skincare bottle with a single droplet rolling down the side, set on a soft sand-toned ceramic surface, single softbox from camera-right, deep negative space at the top, 100mm macro prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain, authored editorial campaign photography"

GEN "meta-sample-evren.jpg" "1:1" \
"A clean tabletop product still of a matte cream leather handbag on a warm travertine surface, soft daylight from camera-left, neutral cream background, a hand entering the frame placing a small pair of sunglasses next to the bag, 50mm prime, f/4, Fuji 400H grade, lifted blacks, subtle film grain, negative space top-left"

GEN "meta-sample-fynn.jpg" "1:1" \
"A close cinematic still of a young couple sharing a moment on a sunlit park bench in early autumn, soft warm sidelight, both in neutral knitwear, one with a phone resting on their lap, leaves on the bench, 85mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain, rule of thirds"

GEN "tt-hero.jpg" "1:1" \
"A close editorial portrait of a young creator filming themselves on a phone mounted to a tripod, ring light reflection just visible in the eye, soft warm window daylight from camera-right, navy fabric backdrop falling out of focus, 50mm prime, f/2.8, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds with the face on the right third, negative space top-left"

GEN "tt-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand swiping a vertical phone screen showing a TikTok-style short-form video frame with warm cinematic colour, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

GEN "tt-p4-launch.jpg" "4:3" \
"A young media operator at a daylit studio desk reviewing a printed posting schedule beside a calibrated vertical monitor showing a short-form analytics dashboard with engagement curves, soft daylight from a window on the left, one ceramic cup of coffee, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "tt-sample-briar.jpg" "1:1" \
"A handheld lifestyle still of two friends laughing while preparing breakfast on a sunlit kitchen counter, one cracking an egg, the other holding a phone vertically filming, warm afternoon side light, 35mm prime, f/2.8, Kodak Gold grade, warm shadows, subtle film grain"

GEN "tt-sample-dane.jpg" "1:1" \
"A clean tabletop product still of a matte black wireless earbuds case on a warm sand-coloured concrete surface, a hand entering the frame from camera-right placing one earbud beside the case, soft daylight from camera-left, neutral background, 50mm prime, f/4, Fuji 400H grade, lifted blacks, subtle film grain, negative space top-left"

GEN "tt-sample-elin.jpg" "1:1" \
"A close cinematic still of a dancer in a warm studio mid-spin, motion-blurred fabric, soft single softbox from camera-left, deep navy backdrop falling into shadow, 85mm prime, f/2.8, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "li-sample-brent.jpg" "1:1" \
"A clean editorial still of a printed annual report and a leather notebook stacked on a warm oak desk, a black pen resting on top, soft daylight from camera-left, deep negative space on the right, 50mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

echo "All 10 retry jobs launched. Waiting on completion..."
wait
echo "Retry batch done. Logs in /tmp/gen-retry-*.log"
