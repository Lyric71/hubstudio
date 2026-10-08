// editorial/scripts/wave2/80-shopify-product-image-sizes.mjs
export default {
  id: "80",
  date: "2026-10-27",
  family: "spec",
  template: "spec",
  brief: true,
  status: "not_started",
  cluster: "Platform specs",
  contentType: "Spec page",
  readerStage: "practitioner",
  slug: "shopify-product-image-sizes",
  h1: "Shopify product image sizes for 2026",
  query: "shopify product image size",
  secondary: [
    "shopify image size 2048 x 2048",
    "shopify product image aspect ratio",
    "shopify max image size",
    "shopify product video requirements",
    "shopify image formats webp",
  ],
  verdict:
    "CONFLICTING AND DATED. App vendors and theme sellers give different maxima and file limits (3 MB against 20 MB), several pages are from 2024, and few quote the Shopify Help Center; none explains that the theme, not Shopify, decides how a non-square image is cropped.",
  words: 1400,
  angle:
    "Shopify's own Help Center values, quoted and dated, separated from what the theme decides. The size limits come from Shopify; the crop and aspect behavior comes from the theme's settings, so the page tells a team which number to build to and where to check the theme. Visible Reviewed date, quarterly recheck.",
  mustInclude: [
    "Spec table: maximum dimensions, maximum megapixels and file size, accepted formats, the recommended square size, each quoted from the Shopify Help Center",
    "Product media beyond images: video and 3D model limits from Shopify's own page",
    "Aspect ratio: why one ratio across all images of a product and of a collection; where the theme sets image crop or aspect, said generally (no named theme)",
    "Alt text and file names, from Shopify's own guidance",
    "A visible Reviewed date and a dated changelog block at the foot",
    "Making the files in hubStudio: renders up to 4K in the Image studio; the Image editor crops Square 1:1 and saves PNG, JPG or WEBP at a chosen size, with quick picks at 2048 px on the long side; Upscale and restore for older photos",
    "hubStudio does not connect to Shopify: files are downloaded and uploaded in the Shopify admin",
  ],
  doNot: [
    "Take any value from a third-party app, theme vendor or blog",
    "Name any Shopify app, theme vendor or competitor",
    "Claim a Shopify connector, sync or API in hubStudio",
    "Print a hubStudio amount",
    "Use an em dash",
  ],
  stats: [
    "Every limit: Shopify Help Center pages on product media and supported file types, quoted, URL and both check dates",
    "hubStudio facts: create-an-image.md and assets-library.md",
  ],
  assets: [
    "Spec table: media type, maximum, recommended, formats, source page",
    "Who decides what table: Shopify (limits) versus the theme (crop, ratio, zoom behavior)",
    "Changelog block, dated, updated in place",
  ],
  links: [
    ["Shopify platform page", "/solutions/platforms/shopify"],
    ["Ecommerce design service", "/services/design/ecommerce"],
    ["AI white-background packshot", "/resources/how-to/ai-white-background-packshot"],
    ["Product photo to lifestyle image", "/resources/how-to/product-photo-to-lifestyle-image"],
    ["Ecommerce website", "/solutions/platforms/ecommerce-website"],
  ],
  seoTitle: "Shopify Product Image Sizes for 2026",
  seoDesc:
    "Shopify product image sizes, limits and formats for 2026, quoted from the Shopify Help Center, with what the theme decides about crop and ratio, dated.",
  faqs: [
    "What size should Shopify product images be?",
    "What is the maximum image size on Shopify?",
    "Should Shopify product images be square?",
    "What image formats does Shopify accept?",
    "Why are my Shopify product images cropped?",
    "Can I add video to a Shopify product page?",
  ],
  cta: "Create your account",
  notes:
    "Spec page: Shopify Help Center only. Watch row due 2027-01-27.",
};
