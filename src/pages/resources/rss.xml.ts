/**
 * English feed of every insight and how-to guide, served at
 * https://www.hubstudio.ai/resources/rss.xml
 * Built by src/lib/resources-feed.ts; prerendered to a static file.
 */
import type { APIRoute } from 'astro';
import { resourcesFeedResponse } from '../../lib/resources-feed';

export const prerender = true;

export const GET: APIRoute = () => resourcesFeedResponse('en');
