import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ro', 'es', 'fr', 'de'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static assets, API routes, and anything with a dot (like `.css`, `.png`)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Auto-detect language
  const acceptLanguage = request.headers.get('accept-language');
  let preferredLocale = 'en'; // default
  
  if (acceptLanguage) {
    // Simple naive parser for accept-language header
    const parsed = acceptLanguage.split(',')[0].split('-')[0].toLowerCase();
    if (locales.includes(parsed)) {
      preferredLocale = parsed;
    }
  }

  // Check if there is an explicit generic save cookie (optional, but good practice)
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    preferredLocale = savedLocale;
  }

  request.nextUrl.pathname = `/${preferredLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};
