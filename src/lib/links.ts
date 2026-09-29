/**
 * The two doors of the site, in one place.
 *
 * The app lives on its own host; every "Create your account" and "Sign in" on
 * hubstudio.ai points here, so a host change is a one-line edit. The studio
 * door is the brief form on /contact.
 */
export const APP_URL = 'https://hubstudio.bearingbridge.com';
export const APP_SIGNUP = `${APP_URL}/signup`;
export const APP_SIGNIN = `${APP_URL}/login`;

/** The studio brief: the contact form, pre-set to a studio request. */
export const BRIEF_URL = '/contact';

/** The app's own help center, rendered on this site. */
export const HELP_URL = '/help';
