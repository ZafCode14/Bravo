import {LocalePrefix} from 'next-intl/routing';

const localePrefix = 'as-needed' satisfies LocalePrefix;

// A list of all locales that are supported
const locales = ['en', 'ar', 'fr'] as const;

export { localePrefix, locales }