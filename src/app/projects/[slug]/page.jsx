import { getRequestLanguage } from '../../../data/pageMetadata';
import { notFound } from 'next/navigation';
import { getCaseStudy } from '../../../data/caseStudies';
import CaseStudyPage from '../../../components/CaseStudyPage';
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lang = await getRequestLanguage();
  const item = getCaseStudy(slug);
  return item ? { title: item.title, description: item.intro[lang], alternates: { canonical: `/projects/${slug}` } } : {};
}
export default async function Page({ params }) {
  const { slug } = await params;
  if (!getCaseStudy(slug)) notFound();
  return <CaseStudyPage slug={slug} />;
}
