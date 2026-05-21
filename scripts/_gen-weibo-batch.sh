#!/usr/bin/env bash
# Temporary batch script: generate all Weibo platform page images in parallel.
# 18 images, weibo-* naming, every frame shows a visible Weibo UI. Weibo is a
# Chinese platform, so all on-screen work content is in Chinese and team scenes
# use Chinese subjects in a lived-in Shanghai studio. Removed after use.
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
GEN "weibo-hero.jpg" "1:1" \
"A close editorial portrait of a hand holding a phone vertically in warm rim light, the phone screen filled with a Weibo feed post, a circular profile avatar and a name block at the top, a short line of Chinese caption text, a three-by-three nine-image grid of warm editorial photos in the middle, and a horizontal repost, comment and like row of small icons along the bottom of the card, all on-screen text in Chinese characters, deep navy falloff behind, single soft window source from camera-left, shallow depth of field at f/2.8, 50mm prime lens framing, Portra 400 film grade, lifted black point, subtle film grain, authored editorial campaign photography, rule of thirds, negative space top-right"

# Why shot
GEN "weibo-roots.jpg" "16:9" \
"A wide editorial photograph of two Chinese designers at a daylit table in a lived-in Shanghai creative studio, four open laptops lined up along the table, each screen showing a different Weibo interface, a white feed post card with a nine-image grid, a Weibo advertising creative library of small ad preview cards, a Weibo topic page with a wide banner header and a ranked trending list, and a Weibo video post, all on-screen text in Chinese characters, the desk cluttered with tea mugs, a boba cup, sticky notes and tangled cables, soft golden daylight from a tall window on the right, 35mm prime, f/4, Kodak Gold film grade, warm shadows, lifted blacks, subtle film grain, rule of thirds with negative space on the left"

# Lane B: Content
GEN "weibo-content.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen filled with a Weibo feed post, a circular profile avatar and name at the top, a short line of Chinese caption text, a three-by-three nine-image grid of warm editorial photos, and a horizontal repost, comment and like row beneath, all on-screen text in Chinese characters, a ceramic tea mug and a stack of sticky notes beside the laptop, soft north-facing daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

# Lane C: Ad creative
GEN "weibo-ads.jpg" "5:4" \
"A close editorial still of a wide calibrated monitor on a lived-in Shanghai studio desk showing a Weibo advertising creative library, a grid of small ad preview cards in mixed shapes, in-feed single-image, carousel and full-screen splash thumbnails, a left filter panel and a top toolbar, all on-screen text in Chinese characters, a printed media plan annotated in pencil and a boba cup beside the keyboard, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

# Lane D: Topic
GEN "weibo-topic.jpg" "5:4" \
"A close editorial still of a phone propped on a lived-in Shanghai studio desk, the screen showing a Weibo topic page, a wide banner header image with a hashtag title and a follower count, a ranked trending list of short text rows down one side, and a feed of post cards below, all on-screen text in Chinese characters, a leather notebook and a tea mug beside the phone, soft window daylight from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

# Lane E: Avatar
GEN "weibo-avatar.jpg" "5:4" \
"A close editorial still of an open laptop on a lived-in Shanghai studio desk, the screen showing a Weibo video post, a presenter in neutral knitwear framed to camera inside the post card, a video scrubber bar along the bottom of the clip and a horizontal repost, comment and like row beneath the post, all on-screen text in Chinese characters, sticky notes and tangled cables around the laptop, warm daylight from a window on the right, 50mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

# Partnership main and inset
GEN "weibo-hybrid-main.jpg" "5:4" \
"A wide editorial photograph of a Chinese producer at a wide reference monitor in a lived-in Shanghai creative studio, the screen showing a Weibo advertising creative library, columns of small post and ad preview cards arranged in a grid, all on-screen text in Chinese characters, the desk scattered with tea mugs, a boba cup, sticky notes and a printed brief, soft daylight from an unseen window on the left, 35mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-hybrid-inset.jpg" "1:1" \
"A close cinematic detail of a hand holding a phone vertically against a soft cream background, the screen showing a single Weibo feed post, a circular profile avatar, a short line of Chinese caption text, a three-by-three nine-image grid and a horizontal repost, comment and like row at the bottom, single warm desk lamp from camera-left, shallow depth of field at f/2.8, 85mm prime, Portra 400 grade, subtle film grain"

# Process steps
GEN "weibo-p1-brief.jpg" "4:3" \
"A Chinese creative director and a Chinese brand lead at a long table in a lived-in Shanghai studio, an open laptop between them showing a Weibo advertising dashboard of tables and bar charts, printed Weibo feed posts and a topic-page mock spread across the table, all on-screen and printed text in Chinese characters, tea mugs, sticky notes and a one-page brief, soft daylight from a tall window on the right, 35mm prime, f/4, Fuji 400H grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-p2-direction.jpg" "4:3" \
"A storyboard wall in a lived-in Shanghai studio, four columns of frame sketches pinned in sequence, each column headed by a short printed paper label, each column anchored by a printed Weibo feed post mock with a nine-image grid and a horizontal reaction row, sticky notes and a printed colour strip taped beside, soft window light from camera-left, 35mm prime, f/4, Portra 400 grade, warm shadows, subtle film grain"

GEN "weibo-p3-aigc.jpg" "4:3" \
"A Chinese motion designer at a calibrated workstation in a lived-in Shanghai studio, the main monitor showing a single Weibo nine-image grid post with on-screen text in Chinese characters, a side panel showing a grid of small generated variation thumbnails, hands on a graphics tablet, a tea mug and tangled cables on the desk, warm daylight from a window on the right, 35mm prime, f/2.8, Portra 400 grade, lifted blacks, subtle film grain"

GEN "weibo-p4-launch.jpg" "4:3" \
"A Chinese media buyer at a daylit desk in a lived-in Shanghai studio, a calibrated monitor showing a Weibo advertising campaign dashboard with bar charts and a table of live placements, all on-screen text in Chinese characters, a printed campaign calendar annotated in pencil beside the keyboard, a boba cup and sticky notes on the desk, soft daylight from a window on the left, 35mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-p5-adapt.jpg" "4:3" \
"A Chinese editor at a calibrated grading suite in a lived-in Shanghai studio, the main reference monitor showing a Weibo video post paused on a product frame with the post-card interface and the repost, comment and like row visible at the screen edges, on-screen text in Chinese characters, waveform panels glowing on a smaller side monitor, a tea mug beside the grading panel, single warm desk light, 35mm prime, f/2.8, Portra 400 grade, subtle film grain"

# Proof gallery samples
GEN "weibo-sample-feed.jpg" "1:1" \
"A close editorial still of an open laptop screen filled with a single Weibo feed post, a circular profile avatar and name block at the top, a short line of Chinese caption text, a three-by-three nine-image grid of warm editorial brand photos, and a horizontal row of small repost, comment and like icons beneath, all on-screen text in Chinese characters, set on a warm wood desk, soft daylight from camera-left, 50mm prime, f/4, Portra 400 film grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-sample-fantong.jpg" "1:1" \
"A close editorial still of a phone screen showing a Weibo timeline with an in-feed promoted post, a brand post card with a wide editorial image, a small grey promoted label under the advertiser name and a rectangular call-to-action button at the lower edge of the card, all on-screen text in Chinese characters, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Kodak Gold grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-sample-splash.jpg" "1:1" \
"A close cinematic still of a hand holding a phone vertically, the screen showing a Weibo full-screen open-screen splash ad, a single bold editorial brand image filling the screen with a small rounded skip-countdown button in the top corner and a brand logo lockup along the lower edge, all on-screen text in Chinese characters, soft cream background, single soft window light from camera-left, shallow depth of field at f/2.8, 85mm prime, Fuji 400H grade, subtle film grain"

GEN "weibo-sample-topic.jpg" "1:1" \
"A close editorial still of a phone screen showing a Weibo topic page, a wide editorial banner header with a hashtag title and a follower count, a ranked trending list of short text rows, and a feed of post cards below, all on-screen text in Chinese characters, set on a warm oak desk with a leather notebook, soft daylight from camera-left, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

GEN "weibo-sample-avatar.jpg" "1:1" \
"A close editorial still of a laptop screen showing a Weibo video post, a presenter in neutral knitwear speaking to camera inside the post card, a thin video scrubber bar across the bottom of the clip and a horizontal repost, comment and like row beneath the post, all on-screen text in Chinese characters, set on a warm wood desk, soft daylight from camera-right, 50mm prime, f/4, Portra 400 grade, warm shadows, lifted blacks, subtle film grain"

echo "All 18 Weibo generation jobs launched. Waiting on completion..."
wait
echo "Weibo batch done. Logs in /tmp/gen-weibo-*.log"
