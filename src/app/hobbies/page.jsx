import LegacyPage from '../../components/LegacyPage';
import { getPageMetadata } from '../../data/pageMetadata';
export async function generateMetadata() { return getPageMetadata('hobbies'); }
export default function Page() { return <LegacyPage page="hobbies" />; }
