import HomePage from '../views/HomePage';
import { getRequestLanguage } from '../data/pageMetadata';
import { alternatesFor } from '../lib/i18n';
export async function generateMetadata() {
  const lang = await getRequestLanguage();
  return {
    title: { absolute: lang === 'it' ? 'Realizzazione siti web e web app a Roma | Federico Ordonselli' : 'Web Developer in Rome — Websites & Web Apps | Federico Ordonselli' },
    alternates: alternatesFor('/', lang),
  };
}
export default function Page() { return <HomePage />; }
