import { expertise } from '../data/expertise';
import { caseStudies } from '../data/caseStudies';
import { services } from '../data/services';
import { SITE_URL, localize } from '../lib/i18n';

// Ogni pagina bilingue compare in italiano (/) e in inglese (/en), con le alternative hreflang.
export default function sitemap() {
  const bilingual = ['/', ...services.map(item => `/${item.slug}`), '/projects', '/about', '/certifications', '/hobbies', ...caseStudies.map(item => `/projects/${item.slug}`), ...expertise.map(item => `/competenze/${item.slug}`)];
  const url = path => SITE_URL + (path === '/' ? '' : path);
  const languages = path => ({ it: url(path), en: url(localize(path, 'en')) });
  return [
    ...bilingual.flatMap(path => ['it', 'en'].map(lang => ({ url: url(localize(path, lang)), alternates: { languages: languages(path) } }))),
    { url: url('/compagnia/privacy') },
  ];
}
