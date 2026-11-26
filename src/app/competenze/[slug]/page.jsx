import { getRequestLanguage } from '../../../data/pageMetadata';
import { alternatesFor } from '../../../lib/i18n';
import { notFound } from 'next/navigation';
import { expertise } from '../../../data/expertise';
import ExpertisePage from '../../../components/ExpertisePage';
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lang = await getRequestLanguage();
  const item = expertise.find(entry => entry.slug === slug);
  return item ? { title: item.title[lang], description: item.short[lang], alternates: alternatesFor(`/competenze/${slug}`, lang) } : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  if (!expertise.some(item => item.slug === slug)) notFound();
  return <ExpertisePage slug={slug} />;
}
