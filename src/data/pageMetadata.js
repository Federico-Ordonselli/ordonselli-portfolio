import { cookies } from 'next/headers';

export async function getRequestLanguage() {
  return (await cookies()).get('lang')?.value === 'it' ? 'it' : 'en';
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
  return { title, description, alternates: { canonical: `/${page}` } };
}
