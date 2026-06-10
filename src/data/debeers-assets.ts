/**
 * DeBeers project assets (hidden review page at /debeers).
 *
 * Each entry is one asset shown on the review page: an image, a title, and a
 * description. Comments are NOT stored here, they live in Vercel KV and are
 * keyed by `id` (see src/lib/debeers.ts).
 *
 * To add an asset:
 *   1. Optimise the image (see the image rule in CLAUDE.md) and drop it in
 *      public/Images/debeers/  (heroes max 2000px / ~600 KB).
 *   2. Add a record below. `id` must be unique, lowercase, hyphen-separated:
 *      it is the storage key for that asset's comments, so never reuse or
 *      rename it once comments exist.
 */

export interface DebeersAsset {
  /** Unique, stable, lowercase-kebab. Also the KV key for this asset's comments. */
  id: string;
  /** Short asset title shown above the description. */
  title: string;
  /** Root-relative path under /Images/debeers/, e.g. '/Images/debeers/key-visual.jpg'. */
  image: string;
  /** Alt text for the image (accessibility + when the file fails to load). */
  alt: string;
  /** Body description, one or more sentences. */
  description: string;
  /** Technical definition shown as a caption: format, pixel size, weight. */
  spec: string;
}

export const debeersAssets: DebeersAsset[] = [
  {
    id: 'bg-navy-leather',
    title: 'Background, navy pebbled leather',
    image: '/Images/debeers/bg-navy-leather.webp',
    alt: 'Dark navy full-grain pebbled leather shot top-down, a soft overhead spotlight pooling at center and falling off into near-black corners.',
    description:
      'Top-down navy pebbled leather with a single overhead spotlight. The lit pool sits upper-center, grain dissolving into a dark corner vignette. Built for a centred hero crop with negative space around the subject.',
    spec: 'WebP · 1600 × 900 · 155 KB',
  },
  {
    id: 'bg-brushed-metal',
    title: 'Background, brushed metal',
    image: '/Images/debeers/bg-brushed-metal.webp',
    alt: 'Vertical brushed blue-grey metal panel, satin finish, lit softly from the right with the brightest area in the upper-right.',
    description:
      'Vertical brushed blue-grey metal, satin and non-reflective. A soft light from the right ramps the panel dark-left to bright-right with the peak upper-right. The whole plane sits in gentle soft focus for a premium feel.',
    spec: 'WebP · 1600 × 900 · 20 KB',
  },
  {
    id: 'bg-royal-drape',
    title: 'Background, royal-blue drape',
    image: '/Images/debeers/bg-royal-drape.webp',
    alt: 'Softly draped deep royal-blue textured surface seen from a low top-down angle, a diagonal light streak grazing a raised ridge from the upper-left.',
    description:
      'Draped royal-blue textured leather with a diagonal light streak from the upper-left grazing the raised ridge. Crests catch the light, valleys fall to deep navy. Cinematic gradient with room for type in the lower-right.',
    spec: 'WebP · 1600 × 900 · 180 KB',
  },
];
