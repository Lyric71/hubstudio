/**
 * DeBeers password gate (`POST /api/debeers/login`).
 * Validates the shared password and, on success, sets the signed httpOnly
 * session cookie before returning the visitor to /debeers. A wrong password
 * sends them back to /debeers?error=1 with no cookie. Server-rendered on
 * demand (Vercel function); the rest of the site stays static.
 */
import type { APIRoute } from 'astro';
import { checkPassword, sessionCookie } from '../../../lib/debeers';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect('/debeers?error=1', 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect('/debeers?error=1', 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: '/debeers',
      'Set-Cookie': await sessionCookie(),
    },
  });
};
