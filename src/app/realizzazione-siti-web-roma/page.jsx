import ServicePage from '../../components/ServicePage';
import { getServiceMetadata } from '../../data/pageMetadata';
export async function generateMetadata() { return getServiceMetadata('realizzazione-siti-web-roma'); }
export default function Page() { return <ServicePage slug="realizzazione-siti-web-roma" />; }
