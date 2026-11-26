import { headers } from 'next/headers';
import { getRequestLanguage } from '../data/pageMetadata';
import { SITE_URL } from '../lib/i18n';
import { services } from '../data/services';
import { getContent } from '../data/content';
import SiteShell from '../components/SiteShell';
import '../index.css';
import '../showcase.css';
import '../process.css';
import '../inner-pages.css';
import '../case-study.css';
import '../toolkit.css';
import '../interface-lab.css';
import '../motion.css';

export async function generateMetadata() {
  const lang = await getRequestLanguage();
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: lang === 'it' ? 'Realizzazione siti web e web app a Roma | Federico Ordonselli' : 'Web Developer in Rome — Websites & Web Apps | Federico Ordonselli', template: '%s · Federico Ordonselli' },
    description: lang === 'it' ? 'Web developer freelance a Roma. Realizzo siti web professionali e web app su misura per aziende, professionisti e attività: veloci, bilingui e facili da aggiornare.' : 'Freelance web developer in Rome. I build professional websites and custom web apps for businesses, professionals and creatives: fast, bilingual and easy to update.',
    authors: [{ name: 'Federico Ordonselli' }],
    icons: { icon: '/favicon.svg' },
    openGraph: { type: 'website', locale: lang === 'it' ? 'it_IT' : 'en_US', alternateLocale: lang === 'it' ? 'en_US' : 'it_IT', siteName: 'Federico Ordonselli', images: ['/og-image.png'] },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};
}
export const viewport = { themeColor: '#f6f5f0' };
// Dati strutturati: chi sono, dove lavoro e quali servizi offro (schema.org Person + Service).
function structuredData(lang) {
  const data = getContent(lang);
  const person = `${SITE_URL}/#person`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person', '@id': person, name: 'Federico Ordonselli',
        jobTitle: lang === 'it' ? 'Sviluppatore web freelance' : 'Freelance Web Developer',
        url: SITE_URL, image: `${SITE_URL}/og-image.png`,
        workLocation: { '@type': 'City', name: 'Roma' },
        address: { '@type': 'PostalAddress', addressLocality: 'Roma', addressCountry: 'IT' },
        knowsLanguage: ['it', 'en'],
        knowsAbout: ['Next.js', 'React', 'TypeScript', 'Sanity', 'Java', 'Spring Boot', 'PostgreSQL'],
        sameAs: [data.github, data.linkedin],
      },
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: 'Federico Ordonselli', inLanguage: ['it', 'en'], publisher: { '@id': person } },
      ...services.map(item => ({
        '@type': 'Service', name: item.jsonLdName, serviceType: 'Web Development',
        description: item.description[lang], provider: { '@id': person },
        areaServed: { '@type': 'City', name: 'Roma' }, url: `${SITE_URL}/${item.slug}`,
      })),
    ],
  };
}

export default async function RootLayout({ children }) {
  const lang = await getRequestLanguage();
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const jsonLd = JSON.stringify(structuredData(lang)).replace(/</g, '\\u003c');
  return <html lang={lang}><body>
    <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: jsonLd }} />
    <SiteShell initialLang={lang}>{children}</SiteShell>
  </body></html>;
}
