'use client';
import Link from './LocalLink';
import { useLanguage } from './language';
import { getService } from '../data/services';
import { getContent } from '../data/content';

// Pagina servizio: riusa il layout di ExpertisePage (.detail-*) e i passi di .process-steps.
export default function ServicePage({ slug }) {
  const { lang } = useLanguage();
  const en = lang === 'en';
  const item = getService(slug);
  const data = getContent(lang);
  const mail = `mailto:${data.email}?subject=${encodeURIComponent(item.mailSubject[lang])}`;
  const projects = data.projects.web.filter(project => item.projects.includes(project.title));
  return <article className="expertise-detail service-detail wrap">
    <Link href="/#selected-work" className="text-link">← {en ? 'Back to the portfolio' : 'Torna al portfolio'}</Link>
    <p className="mono detail-eyebrow">{item.eyebrow[lang]}</p>
    <h1>{item.title[lang]}</h1>
    <p className="detail-intro">{item.intro[lang]}</p>
    <div className="hero-actions"><a className="cta cta-dark" href={mail}>{item.cta[lang]} <span aria-hidden="true">↗</span></a><Link className="text-link" href="/projects">{en ? 'See all projects' : 'Guarda tutti i progetti'} <span aria-hidden="true">↗</span></Link></div>

    <div className="detail-points">{item.points[lang].map(([title, text], i) => <section key={title}><span className="mono">0{i + 1}</span><h2>{title}</h2><p>{text}</p></section>)}</div>

    <h2 className="detail-projects-title">{en ? 'Work I’ve delivered' : 'Lavori realizzati'}</h2>
    <div className="detail-projects">{projects.map(project => <div key={project.title}><h3>{project.title}</h3><p>{project.desc}</p><Link className="text-link" href={project.caseStudy ?? `/projects#${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{project.caseStudy ? (en ? 'Read the case study' : 'Leggi l’approfondimento') : (en ? 'View project card' : 'Vai alla scheda')} ↗</Link></div>)}</div>

    <h2 className="detail-projects-title service-steps-title">{en ? 'How we’d work together' : 'Come lavoreremo insieme'}</h2>
    <ol className="process-steps">{item.steps[lang].map(([title, text], index) => <li key={title}>
      <div className="process-step-top"><span className="mono">0{index + 1} / 03</span><span aria-hidden="true">{index === 0 ? '✳' : index === 1 ? '↗' : '✓'}</span></div>
      <h3>{title}</h3><p>{text}</p>
    </li>)}</ol>

    <div className="detail-contact"><div><h2>{en ? 'How much does it cost?' : 'Quanto costa?'}</h2><p className="detail-intro">{en ? 'It depends on pages, features and content. Tell me what you need and you’ll get a clear, no-obligation quote.' : 'Dipende da pagine, funzioni e contenuti. Raccontami cosa ti serve e ricevi un preventivo chiaro e senza impegno.'}</p></div><a className="cta cta-dark" href={mail}>{item.cta[lang]} ↗</a></div>
  </article>;
}
