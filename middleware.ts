import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './config';

export default createMiddleware({
  // A list of all locales that are supported by your application
  // This should match the array you defined earlier, e.g., ['en', 'fr']
  locales,

  // Determines when the locale prefix (e.g., /en, /fr) should be used in the URL
  // 'as-needed' means the prefix is added only when needed, such as when there is more than one locale
  localePrefix,

  // The default locale to fall back to if no matching locale is found
  // This is the primary language of your application, typically 'en' for English
  defaultLocale: 'en',

  // Disables automatic locale detection based on the user's browser settings or location
  // This can be useful if you want to control the locale strictly via the URL or user settings
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};