'use client';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from './LocalLink';
import Navbar from './Navbar';
import { LanguageContext } from './language';
import { getContent } from '../data/content';
import { services } from '../data/services';
import { localize, stripLocale } from '../lib/i18n';
export { useLanguage } from './language';
// La lingua arriva dal server (URL /en → inglese); ogni lingua ha i propri URL.
export default function SiteShell({ initialLang: lang, children }) {
  const pathname = stripLocale(usePathname());
  const router = useRouter();
  const data = getContent(lang);
  useEffect(() => {
    const redirectHash = () => {
      const page = window.location.hash.replace(/^#\/?/, '');
      if (['home', 'projects', 'certifications', 'hobbies', 'about'].includes(page)) router.replace(localize(page === 'home' ? '/' : `/${page}`, lang));
    };
    redirectHash();
    window.addEventListener('hashchange', redirectHash);
    return () => window.removeEventListener('hashchange', redirectHash);
  }, [router, lang]);
  // Navigazione completa: il layout server va riletto con la nuova lingua (html lang, metadata).
  function setLang(value) {
    if (value === lang) return;
    const { pathname: current, search, hash } = window.location;
    window.location.assign(localize(stripLocale(current), value) + search + hash);
  }
  return <LanguageContext.Provider value={{ lang, setLang }}>
    <div className="site-shell light-shell">
      <a className="skip-link" href="#main-content">{lang === 'it' ? 'Vai al contenuto' : 'Skip to content'}</a>
      <Navbar key={pathname} pathname={pathname} lang={lang} setLang={setLang} />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <footer className="site-footer wrap">
        <Link href="/" className="footer-name">Federico Ordonselli<span>✳</span></Link>
        <span>{data.location} · {new Date().getFullYear()}</span>
        <div>{services.map(item => <Link key={item.slug} href={`/${item.slug}`}>{item.navLabel[lang]}</Link>)}<a href={data.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={data.cv} target="_blank" rel="noreferrer">CV ↓</a></div>
      </footer>
    </div>
  </LanguageContext.Provider>;
}
