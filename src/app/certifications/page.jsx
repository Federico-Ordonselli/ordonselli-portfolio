import LegacyPage from '../../components/LegacyPage';
import { getPageMetadata } from '../../data/pageMetadata';
export async function generateMetadata() { return getPageMetadata('certifications'); }
export default function Page() { return <LegacyPage page="certifications" />; }
