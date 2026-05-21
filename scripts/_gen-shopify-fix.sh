#!/usr/bin/env bash
# Regenerate the remaining 4 Shopify images that rendered Han-character signage.
# Run SEQUENTIALLY (parallel polling failed twice with transient fetch errors).
# Prompts drop "Shanghai" and forbid wall lettering. Removed after use.
set -u
cd "$(dirname "$0")/.." || exit 1
mkdir -p scripts/.genlogs

GEN() {
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="public/Images/$1" \
    > "scripts/.genlogs/${1%.*}.log" 2>&1
  echo "done: $1"
}

GEN "shopify-ads.jpg" "1:1" \
"A close editorial still of a wide calibrated monitor on a lived-in creative studio desk, the screen split between an online store product detail page on one side and a grid of paid advertising creative variants in vertical and square shapes on the other, the product price and add-to-cart button visible in the open page, a plain printed media plan and a boba cup beside the keyboard, plain studio walls with no posters or lettering, soft daylight from a window on the left, 35mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screen."

GEN "shopify-hybrid-main.jpg" "1:1" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in creative studio, the screen showing an online store product detail page beside a grid of paid advertising creative variants arranged in columns, the desk scattered with tea mugs, a boba cup and blank sticky notes, plain studio walls with no posters or lettering, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screen."

GEN "shopify-p3-aigc.jpg" "4:3" \
"A Chinese retoucher at a calibrated workstation in a lived-in creative studio, the main monitor showing a single online store product-page hero image of a styled product, a side panel showing a grid of small catalog product thumbnails, hands resting on a graphics tablet, a tea mug and tangled cables on the desk, plain studio walls with no posters or lettering, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screens."

GEN "shopify-p5-adapt.jpg" "4:3" \
"A Chinese colorist at a calibrated grading suite in a lived-in creative studio, the main reference monitor showing an online store product-page image paused on a styled product still with the storefront price and gallery thumbnails visible at the screen edges, control panels glowing on a smaller side monitor, a tea mug beside the grading panel, plain studio walls with no posters or lettering, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain. No visible text or lettering anywhere except the English-language interface on the monitor screen."

echo "Shopify fix batch done."
