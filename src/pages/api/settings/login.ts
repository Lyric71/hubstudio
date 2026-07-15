/**
 * Settings password gate (`POST /api/settings/login`).
 * Its own password, separate from the calculator's: this page changes what
 * things cost, so it is a different privilege and a different cookie.
 */
import type { APIRoute } from 'astro';
import { checkPassword, sessionCookie } from '../../../lib/settings-gate';

export const prerender = false;

const PAGE = '/pricing/calculator/settings';

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(`${PAGE}?error=1`, 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect(`${PAGE}?error=1`, 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: PAGE,
      'Set-Cookie': await sessionCookie(),
    },
  });
};
