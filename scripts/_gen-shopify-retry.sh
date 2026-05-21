#!/usr/bin/env bash
# Retry-until-success for Shopify images that keep hitting transient
# "fetch failed" network errors during polling. Each image gets up to 8
# attempts. Pass image keys as args (hybrid-main p3-aigc p5-adapt). Removed
# after use.
set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p scripts/.genlogs

prompt_hybrid_main="A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in creative studio, the screen showing an online store product detail page beside a grid of paid advertising creative variants arranged in columns, the desk scattered with tea mugs, a boba cup and blank sticky notes, plain studio walls with no posters or lettering, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screen."
ar_hybrid_main="1:1"

prompt_p3_aigc="A Chinese retoucher at a calibrated workstation in a lived-in creative studio, the main monitor showing a single online store product-page hero image of a styled product, a side panel showing a grid of small catalog product thumbnails, hands resting on a graphics tablet, a tea mug and tangled cables on the desk, plain studio walls with no posters or lettering, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screens."
ar_p3_aigc="4:3"

prompt_p5_adapt="A Chinese colorist at a calibrated grading suite in a lived-in creative studio, the main reference monitor showing an online store product-page image paused on a styled product still with the storefront price and gallery thumbnails visible at the screen edges, control panels glowing on a smaller side monitor, a tea mug beside the grading panel, plain studio walls with no posters or lettering, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screen."
ar_p5_adapt="4:3"

for key in "$@"; do
  var="${key//-/_}"
  prompt_var="prompt_${var}"
  ar_var="ar_${var}"
  prompt="${!prompt_var}"
  ar="${!ar_var}"
  out="shopify-${key}.jpg"
  ok=0
  for attempt in 1 2 3 4 5 6 7 8; do
    node scripts/generate-image.mjs "$prompt" \
      --quality=high --resolution=1k --aspect-ratio="$ar" \
      --out="public/Images/$out" > "scripts/.genlogs/${out%.*}.log" 2>&1
    if [ $? -eq 0 ]; then echo "OK (attempt $attempt): $out"; ok=1; break; fi
    echo "attempt $attempt failed: $out"
    sleep 4
  done
  [ "$ok" -eq 0 ] && echo "GAVE UP after 8 attempts: $out"
done
echo "Retry run complete."
