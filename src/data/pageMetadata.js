import { headers } from 'next/headers';
import { alternatesFor } from '../lib/i18n';
import { getService } from './services';

export async function getRequestLanguage() {
  return (await headers()).get('x-lang') === 'en' ? 'en' : 'it';
}

const pages = {
  about: { en: ['About', 'Meet Federico Ordonselli, a frontend developer in Rome. Background, skills and qualifications.'], it: ['Chi sono', 'Conosci Federico Ordonselli, sviluppatore frontend a Roma. Percorso, competenze e formazione.'] },
  projects: { en: ['Projects', 'Explore Federico’s web applications, data projects and custom tools.'], it: ['Progetti', 'Scopri le applicazioni web, i progetti di analisi dati e gli strumenti su misura di Federico.'] },
  certifications: { en: ['Certifications', 'Training and certificates in cybersecurity, data analysis and development.'], it: ['Certificazioni', 'Formazione e attestati in sicurezza informatica, analisi dei dati e sviluppo.'] },
  hobbies: { en: ['Hobbies', 'Outside work: 3D printing, electronics, video games and music.'], it: ['Hobby', 'Fuori dal lavoro: stampa 3D, elettronica, videogiochi e musica.'] },
};
export async function getPageMetadata(page) {
  const lang = await getRequestLanguage();
  const [title, description] = pages[page][lang];
  return { title, description, alternates: alternatesFor(`/${page}`, lang) };
}

export async function getServiceMetadata(slug) {
  const lang = await getRequestLanguage();
  const item = getService(slug);
  return { title: item.metaTitle[lang], description: item.description[lang], alternates: alternatesFor(`/${slug}`, lang) };
}
