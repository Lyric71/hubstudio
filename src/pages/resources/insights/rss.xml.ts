/**
 * RSS 2.0 feed for /resources/insights, served at
 * https://www.hubstudio.ai/resources/insights/rss.xml
 *
 * Purpose: let LinkedIn (and any RSS-driven scheduler: Buffer, Zapier, Make,
 * IFTTT, etc.) pick up new insight articles automatically. LinkedIn no longer
 * polls RSS for personal profiles, so the practical path is a third-party
 * auto-poster reading this feed and posting to the company page; the feed is
 * also a standard discovery surface for readers and aggregators.
 *
 * Built by hand (no @astrojs/rss dependency) to honour the self-host rule.
 * Prerendered to a static file at build time. Metadata comes straight from
 * src/data/insights.ts, so a new article appears in the feed the moment it is
 * added there, no separate maintenance.
 */
import type { APIRoute } from 'astro';
import { insights } from '../../../data/insights';

export const prerender = true;

const SITE = 'https://www.hubstudio.ai';
const FEED_URL = `${SITE}/resources/insights/rss.xml`;
const INDEX_URL = `${SITE}/resources/insights`;

/** Escape the five XML predefined entities for use in element text. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** ISO date (YYYY-MM-DD) to an RFC-822 date string, as RSS pubDate wants. */
function rfc822(dateISO: string): string {
  return new Date(`${dateISO}T00:00:00Z`).toUTCString();
}

/** MIME type for an enclosure, inferred from the file extension. */
function imageType(path: string): string {
  const ext = path.split('.').pop()?.toLowerCase();
  if (ext === 'png') return 'image/png';
  if (ext === 'jpg' || ext === 'jpeg') return 'image/jpeg';
  if (ext === 'avif') return 'image/avif';
  return 'image/webp';
}

export const GET: APIRoute = () => {
  // insights is already newest-first; the newest article dates the channel.
  const lastBuild = insights.length ? rfc822(insights[0].dateISO) : new Date(0).toUTCString();

  const items = insights
    .map((i) => {
      const url = `${SITE}/resources/insights/${i.slug}`;
      const image = new URL(i.image, SITE).href;
      return `    <item>
      <title>${esc(i.title)}</title>
      <link>${esc(url)}</link>
      <guid isPermaLink="true">${esc(url)}</guid>
      <pubDate>${rfc822(i.dateISO)}</pubDate>
      <category>${esc(i.category)}</category>
      <dc:creator>${esc(i.author)}</dc:creator>
      <description>${esc(i.deck)}</description>
      <enclosure url="${esc(image)}" type="${imageType(i.image)}" length="0" />
      <media:content url="${esc(image)}" medium="image" type="${imageType(i.image)}" />
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>hubStudio Insights</title>
    <link>${esc(INDEX_URL)}</link>
    <atom:link href="${esc(FEED_URL)}" rel="self" type="application/rss+xml" />
    <description>Essays on AI-native content: AI search, creative systems, production economics, and the creative intelligence that scales them.</description>
    <language>en</language>
    <copyright>hubStudio</copyright>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <image>
      <url>${SITE}/logo/hubstudio-logo.png</url>
      <title>hubStudio Insights</title>
      <link>${esc(INDEX_URL)}</link>
    </image>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
