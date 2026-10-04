/**
 * Settings password gate (`POST /api/settings/login`).
 * Its own password, separate from the calculator's: this page changes what
 * things cost, so it is a different privilege and a different cookie.
 */
import type { APIRoute } from 'astro';
import { localizedBack } from '../../../lib/referer-locale';
import { checkPassword, sessionCookie } from '../../../lib/settings-gate';

export const prerender = false;

const PAGE = '/pricing/calculator/settings';

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(localizedBack(request, PAGE, `?error=1`), 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect(localizedBack(request, PAGE, `?error=1`), 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      // Back to the page in the language it was opened in.
      Location: localizedBack(request, PAGE),
      'Set-Cookie': await sessionCookie(),
    },
  });
};
