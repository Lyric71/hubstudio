// editorial/scripts/wave2/54-instagram-post-sizes-2026.mjs
export default {
  id: '54',
  date: '2026-10-08',
  family: 'spec',
  template: 'spec',
  brief: true,
  status: 'not_started',
  cluster: 'Platform specs',
  contentType: 'Spec page',
  readerStage: 'practitioner',
  slug: 'instagram-post-sizes-2026',
  h1: 'Instagram post and carousel sizes for 2026',
  query: 'instagram post size 2026',
  secondary: [
    'instagram carousel size',
    'instagram portrait size 1080x1350',
    'instagram profile grid crop',
  ],
  verdict:
    'Template-driven size guides from design and scheduling tool blogs own the SERP, March to December 2025 and 2026; they repeat each other, cite no Instagram page, print a grid tile size Instagram never published, and none separates what the Instagram app accepts (1.91:1 to 3:4, 20 slides) from what the Content Publishing API accepts (4:5 to 1.91:1, JPEG, 8 MB, 10 items).',
  words: 1500,
  angle:
    'The feed post and carousel specs from Instagram\'s and Meta\'s own help, business and developer pages only: aspect ratios, the 1080-pixel width rule, carousel count, file types and limits, the profile grid (where Instagram publishes no tile ratio, the page says so), and the split between the Instagram app and the Content Publishing API that every publishing tool, hubStudio included, goes through. Reviewed October 8, 2026, visible on the page.',
  mustInclude: [
    'A spec table: format, ratio, recommended size, limits, source',
    'A crop and safe area section, including what Instagram does not publish about the profile grid',
    'Common upload failures from official help and the API error reference',
    'How to make each format in hubStudio: Image editor Social panel, publishing to Instagram professional accounts (feed, Story, Reel, carousels), from hubstudio-positioning.md and src/content/help/instagram.md',
    'A dated changelog at the foot (before the FAQ, since the file ends on the CTA)',
    'RedNote cover specs referenced as the China counterpart',
    'A visible "Reviewed October 8, 2026" line',
  ],
  doNot: [
    'No blog figure for any spec, including the grid tile size',
    'No deviation 7 disclaimer: these are primary readings of readable official pages',
    'No competitor or third-party tool named',
    'No hubStudio price or amount; publishing to Instagram costs nothing to use, renders are charged from the prepaid balance',
    'No claim that the app supports anything outside the help center (no API, no brand kit)',
  ],
  stats: [
    'Instagram Help Center: photos kept at original resolution between 320 and 1080 pixels wide when the ratio is between 1.91:1 and 3:4 (height 566 to 1440 at 1080 wide); larger photos sized down to 1080 wide',
    'Instagram Help Center: up to 20 photos and videos in one carousel post; the orientation chosen applies to every item',
    'Instagram Platform docs: JPEG only, 8 MB, 4:5 to 1.91:1, 320 to 1440 wide; carousels 10 items; 100 API-published posts per 24 hours',
    'Meta Ads Guide: Instagram feed image ads 4:5, 1440 x 1800, 30 MB; carousel ads 2 to 10 cards',
  ],
  assets: [
    'Hero image: public/Images/insight-instagram-post-sizes-2026.webp',
    'Reuse the existing Image editor Social panel capture (help center) if the publish step wants an in-body image',
  ],
  links: [
    ['Meta platform page', '/solutions/platforms/meta'],
    ['social media design service', '/services/design/social-media'],
    ['publishing page of the hubStudio app', '/app/publish'],
    ['RedNote note and cover specs', '/resources/insights/rednote-note-cover-specs'],
  ],
  seoTitle: 'Instagram Post Size 2026: Feed, Carousel, Grid',
  seoDesc:
    'Instagram post sizes from Instagram\'s own pages: ratios from 1.91:1 to 3:4, 1080 pixels wide, 20-slide carousels, and the tighter API limits.',
  faqs: [
    'What is the best size for an Instagram post in 2026?',
    'Can I post a 3:4 photo on Instagram?',
    'How many photos can you put in an Instagram carousel?',
    'Do all slides in an Instagram carousel have to be the same size?',
    'What size is the Instagram profile grid?',
    'Why does my scheduled Instagram post get rejected?',
    'What size should an Instagram Story be?',
  ],
  cta: 'Create your account',
  notes:
    'Western platform spec: primary readings of Instagram Help Center, Instagram Platform developer docs and Meta Ads Guide pages, read 2026-10-08. Watch row due 2027-01-08 for the quarterly recheck.',
};
