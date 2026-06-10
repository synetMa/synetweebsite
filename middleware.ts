import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for public folders, api, admin panels, next static assets etc.
  matcher: ['/', '/(fr|en|ar)/:path*', '/((?!api|admin|_next|_vercel|.*\\..*).*)']
};
