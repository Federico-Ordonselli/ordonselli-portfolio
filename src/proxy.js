import { NextResponse } from 'next/server';
import { isEnglishPath, stripLocale } from './lib/i18n';

export function proxy(request) {
  const nonce = btoa(crypto.randomUUID());
  const dev = process.env.NODE_ENV !== 'production';
  const policy = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'", "img-src 'self' data: blob:", "font-src 'self'",
    `connect-src 'self'${dev ? ' ws: wss:' : ''}`,
    "frame-src 'self' https://open.spotify.com", "object-src 'none'", "base-uri 'self'", "form-action 'self'", "frame-ancestors 'self'",
  ].join('; ');
  const headers = new Headers(request.headers);
  headers.set('x-nonce', nonce);
  headers.set('Content-Security-Policy', policy);
  // /en/* è la versione inglese delle stesse route: la riscriviamo e passiamo la lingua in un header.
  const { pathname } = request.nextUrl;
  const english = isEnglishPath(pathname);
  headers.set('x-lang', english ? 'en' : 'it');
  // La rewrite deve restare interna (stesso host del server). Se Next la vede come esterna rifà la richiesta
  // a '/' e la lingua si perde: succede in locale con `next start -H 127.0.0.1`, che normalizza l'host in localhost.
  const target = request.nextUrl.clone();
  target.pathname = stripLocale(pathname);
  const response = english
    ? NextResponse.rewrite(target, { request: { headers } })
    : NextResponse.next({ request: { headers } });
  response.headers.set('Content-Security-Policy', policy);
  return response;
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.svg|og-image.png|certs/|cv/|robots.txt|sitemap.xml).*)'],
};
