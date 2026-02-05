import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

// Next.js 16: proxy.ts replaces middleware.ts
export default createMiddleware(routing);

export const config = {
  // Match all paths except _next, api, _vercel, and static files
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
