import ServicePage from '../../components/ServicePage';
import { getServiceMetadata } from '../../data/pageMetadata';
export async function generateMetadata() { return getServiceMetadata('sviluppo-web-app'); }
export default function Page() { return <ServicePage slug="sviluppo-web-app" />; }
