// Lingua da URL: italiano su /, inglese su /en. Il proxy riscrive /en/* sulle stesse route
// e passa la lingua nell'header x-lang, così ogni lingua ha un URL proprio e indicizzabile.
export const SITE_URL = 'https://www.ordonselli.info';

export const isEnglishPath = path => path === '/en' || path.startsWith('/en/') || path.startsWith('/en#') || path.startsWith('/en?');

export function stripLocale(path) {
  if (!isEnglishPath(path)) return path;
  const rest = path.slice(3);
  return rest === '' ? '/' : rest.startsWith('/') ? rest : `/${rest}`;
}

// '/projects' → '/en/projects'; '/#contact' → '/en#contact'. Solo percorsi interni.
export function localize(path, lang) {
  if (lang !== 'en' || !path.startsWith('/')) return path;
  const [, pathname, suffix] = path.match(/^([^#?]*)(.*)$/);
  return (pathname === '/' ? '/en' : `/en${pathname}`) + suffix;
}

// canonical + hreflang per una pagina disponibile in entrambe le lingue.
export function alternatesFor(path, lang) {
  return { canonical: localize(path, lang), languages: { it: path, en: localize(path, 'en'), 'x-default': path } };
}
