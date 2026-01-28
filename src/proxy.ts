import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

// Next.js 16: proxy.ts replaces middleware.ts
// Using default export as recommended by next-intl
export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(en|ko)/:path*']
};
