#!/usr/bin/env bash
# Temporary batch script: generate all JD platform page images in parallel.
# 18 images, jd-* naming, every frame shows a visible JD UI surface (product
# detail page, flagship store, Jingzhuntong ad library, 618 festival venue
# page); team scenes use Chinese subjects in a lived-in Shanghai studio, all
# on-screen work content in Chinese (Chinese-market platform). Removed after use.
set -u
cd "$(dirname "$0")/.." || exit 1

GEN() {
  # $1 = out filename, $2 = aspect ratio, $3 = prompt
  # Idempotent: skip if a non-trivial file already exists, so re-running the
  # script only fills the gaps left by failed jobs.
  local out="public/Images/$1"
  if [ -f "$out" ] && [ "$(wc -c < "$out" 2>/dev/null || echo 0)" -gt 20000 ]; then
    echo "skip $1 (already generated)"
    return 0
  fi
  node scripts/generate-image.mjs "$3" \
    --quality=high \
    --resolution=1k \
    --aspect-ratio="$2" \
    --out="$out" \
    > "/tmp/gen-${1%.*}.log" 2>&1 &
}

# Hero
GEN "jd-hero.jpg" "1:1" \
"A close editorial portrait of a hand holding a phone vertically in warm rim light, the phone screen filled with a Chinese marketplace product detail page, a large product photograph at the top, a thin red top bar, a row of small thumbnail images beneath the photo, a bold red price line, a row of small product-variant swatches, and two stacked call-to-action buttons in red and orange near the bottom, all on-screen text in Chinese, deep warm falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 50mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds, negative space top-right"

# Why shot
GEN "jd-roots.jpg" "16:9" \
"A wide editorial photograph of two Chinese designers at a daylit table in a lived-in Shanghai creative studio, four open laptops lined up along the table, each screen showing a different Chinese marketplace interface, a product detail page with a long scrolling description, a brand flagship-store homepage with a wide banner and a product-tile grid, an advertising creative library of small preview cards, and a red festival venue page with a coupon-tile grid, the desk cluttered with tea mugs, a boba cup, sticky notes and tangled cables, all on-screen text in Chinese, soft golden daylight from a tall window on the right, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Lane B: Product content
GEN "jd-product.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen filled with a Chinese marketplace product detail page, a large product photograph at the top, a bold red price line, a row of small product-variant swatches, two stacked red call-to-action buttons, and a long scrolling description below with infographic panels and usage-scene images, all on-screen text in Chinese, a ceramic tea mug and a stack of sticky notes beside the laptop, soft north-facing daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Lane C: Store content
GEN "jd-store.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a Chinese marketplace brand flagship-store homepage, a wide editorial brand banner at the top, a row of category tabs beneath it and a grid of shoppable product tiles below, a thin red top navigation bar, all on-screen text in Chinese, a boba cup and a printed layout sketch beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane D: Ad creative
GEN "jd-ads.jpg" "5:4" \
"A close editorial still of a wide calibrated monitor on a lived-in Shanghai studio desk showing an advertising creative library for a Chinese marketplace, a grid of small ad preview cards in mixed shapes, search-result ad cards, full-screen app-splash frames and banner thumbnails, a left filter panel and a top toolbar, all on-screen text in Chinese, a printed media plan annotated in pencil and a boba cup beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane E: Campaign
GEN "jd-campaign.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a Chinese marketplace festival venue page, a bold red festival banner across the top, a countdown timer strip, a grid of coupon tiles and a row of festival-dressed product cards below, all on-screen text in Chinese, a printed festival calendar and a tea mug beside the laptop, soft daylight from a window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

echo "Wave 1 launched (6 jobs). Waiting..."
wait
echo "Wave 1 done."

# Partnership main and inset
GEN "jd-hybrid-main.jpg" "5:4" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in Shanghai creative studio, the screen showing an advertising creative library for a Chinese marketplace, columns of detail-page previews, flagship-store layouts, ad cards and red festival assets arranged in a grid, all on-screen text in Chinese, the desk scattered with tea mugs, a boba cup, sticky notes and a printed brief, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "jd-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the screen showing a single Chinese marketplace product detail page, a large product photograph, a thumbnail row, a bold red price line and two stacked red call-to-action buttons at the bottom, on-screen text in Chinese, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process steps
GEN "jd-p1-brief.jpg" "4:3" \
"A Chinese creative director and a Chinese brand lead at a long table in a lived-in Shanghai studio, an open laptop between them showing a Chinese marketplace flagship-store layout, printed product detail pages and a red festival venue-page screenshot spread across the table, tea mugs, sticky notes and a one-page brief, all on-screen and printed text in Chinese, soft daylight from a tall window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "jd-p2-direction.jpg" "4:3" \
"A storyboard wall in a lived-in Shanghai studio, four columns of frame sketches pinned in sequence, each column headed by a short printed paper label, each column anchored by a printed mock, a product detail page, a flagship-store homepage, an advertising preview card and a red festival venue page, sticky notes and a printed colour strip taped beside, printed labels in Chinese, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "jd-p3-aigc.jpg" "4:3" \
"A Chinese motion designer at a calibrated workstation in a lived-in Shanghai studio, the main monitor showing a single Chinese marketplace detail-page hero module being retouched, a side panel showing a grid of small generated product-variation thumbnails, hands on a graphics tablet, a tea mug and tangled cables on the desk, all on-screen text in Chinese, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "jd-p4-launch.jpg" "4:3" \
"A Chinese media buyer at a daylit desk in a lived-in Shanghai studio, a calibrated monitor showing a Chinese marketplace advertising campaign dashboard with a list of live ad placements and a performance chart, all on-screen text in Chinese, a printed launch checklist annotated in pencil beside the keyboard, a boba cup and sticky notes on the desk, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

echo "Wave 2 launched (6 jobs). Waiting..."
wait
echo "Wave 2 done."

GEN "jd-p5-adapt.jpg" "4:3" \
"A Chinese colourist at a calibrated grading suite in a lived-in Shanghai studio, the main reference monitor showing a warm Chinese marketplace lifestyle product photograph paused inside a product detail page layout with a red price line and call-to-action buttons visible at the screen edges, variation panels glowing on a smaller side monitor, a tea mug beside the grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

# Proof gallery samples
GEN "jd-sample-detail.jpg" "1:1" \
"A close editorial still of a phone propped on a warm wood desk, the screen filled with a Chinese marketplace product detail page scrolled to the long description, an infographic panel and a usage-scene image stacked down the page, all on-screen text in Chinese, soft daylight from camera-left, 50mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "jd-sample-main.jpg" "1:1" \
"A close cinematic still of a hand holding a phone vertically, the screen showing a Chinese marketplace product detail page, a large main product photograph at the top, a row of small thumbnail images, a bold red price line and a row of product-variant swatches, all on-screen text in Chinese, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, subtle film grain"

GEN "jd-sample-store.jpg" "1:1" \
"A close editorial still of a phone propped on a warm oak desk, the screen showing a Chinese marketplace brand flagship-store homepage, a wide brand banner, a row of category tabs and a grid of shoppable product tiles, all on-screen text in Chinese, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "jd-sample-kuaiche.jpg" "1:1" \
"A close editorial still of a phone screen showing Chinese marketplace search results, a sponsored product card at the top of the list with a small grey ad label, a product photograph, a bold red price and a buy button, a list of further product cards below, all on-screen text in Chinese, set on a warm wood desk, soft daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "jd-sample-618.jpg" "1:1" \
"A close cinematic still of a hand holding a phone vertically, the screen filled by a Chinese marketplace festival venue page, a bold red festival banner at the top, a countdown timer strip and a grid of coupon tiles below, all on-screen text in Chinese, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, subtle film grain"

echo "Wave 3 launched (6 jobs). Waiting..."
wait
echo "JD batch done. Logs in /tmp/gen-jd-*.log"
