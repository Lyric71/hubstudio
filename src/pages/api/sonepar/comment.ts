/**
 * Sonepar comment endpoint (`POST /api/sonepar/comment`).
 * Requires a valid session cookie (same gate as the page). Appends one comment
 * to an asset's list in Vercel KV. JS submits with `Accept: application/json`
 * and reads the stored comment back; a plain form post is answered with a 303
 * to /sonepar#<assetId>.
 */
import type { APIRoute } from 'astro';
import { addComment, isAuthed, kvConfigured } from '../../../lib/sonepar';
import { soneparAssets } from '../../../data/sonepar-assets';

export const prerender = false;

const MAX_NAME = 80;
const MAX_BODY = 2000;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

  const fail = (status: number, error: string) =>
    wantsJson
      ? new Response(JSON.stringify({ ok: false, error }), {
          status,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(error, { status });

  if (!(await isAuthed(request))) {
    return fail(401, 'Your session has expired. Reload the page and sign in again.');
  }

  if (!kvConfigured()) {
    return fail(503, 'Comments are not configured yet (KV storage is not connected).');
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'We could not read your comment. Please try again.');
  }

  const assetId = ((form.get('assetId') as string) ?? '').trim();
  const name = ((form.get('name') as string) ?? '').trim().slice(0, MAX_NAME);
  const body = ((form.get('body') as string) ?? '').trim().slice(0, MAX_BODY);

  if (!soneparAssets.some((a) => a.id === assetId)) {
    return fail(422, 'Unknown asset.');
  }
  if (!name || !body) {
    return fail(422, 'Please add your name and a comment.');
  }

  let stored;
  try {
    stored = await addComment(assetId, name, body);
  } catch {
    return fail(502, 'We could not save your comment. Please try again.');
  }

  return wantsJson
    ? new Response(JSON.stringify({ ok: true, comment: stored }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      })
    : redirect(`/sonepar#asset-${assetId}`, 303);
};
