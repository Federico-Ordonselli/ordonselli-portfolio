import LegacyPage from '../../components/LegacyPage';
import { getPageMetadata } from '../../data/pageMetadata';
export async function generateMetadata() { return getPageMetadata('projects'); }
export default function Page() { return <LegacyPage page="projects" />; }
