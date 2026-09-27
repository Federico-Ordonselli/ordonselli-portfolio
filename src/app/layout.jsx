import { getRequestLanguage } from '../data/pageMetadata';
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
    metadataBase: new URL('https://ordonselli.info'),
    title: { default: lang === 'it' ? 'Federico Ordonselli — Sviluppatore web' : 'Federico Ordonselli — Web Developer', template: '%s · Federico Ordonselli' },
    description: lang === 'it' ? 'Siti web, applicazioni e strumenti su misura. Federico Ordonselli, sviluppatore web a Roma: React, Next.js, TypeScript e progetti concreti.' : 'Thoughtful websites, web apps and custom tools. Federico Ordonselli, web developer in Rome: React, Next.js, TypeScript and real projects.',
    authors: [{ name: 'Federico Ordonselli' }],
    icons: { icon: '/favicon.svg' },
    openGraph: { type: 'website', locale: lang === 'it' ? 'it_IT' : 'en_US', alternateLocale: lang === 'it' ? 'en_US' : 'it_IT', siteName: 'Federico Ordonselli', images: ['/og-image.png'] },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
};
}
export const viewport = { themeColor: '#f6f5f0' };
export default async function RootLayout({ children }) {
  const lang = await getRequestLanguage();
  return <html lang={lang}><body><SiteShell initialLang={lang}>{children}</SiteShell></body></html>;
}
