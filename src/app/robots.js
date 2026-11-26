import { SITE_URL } from '../lib/i18n';
// OAI-SearchBot (ricerca di ChatGPT) è esplicito anche se già coperto da '*'.
export default function robots() {
  return { rules: [{ userAgent: '*', allow: '/' }, { userAgent: 'OAI-SearchBot', allow: '/' }], sitemap: `${SITE_URL}/sitemap.xml` };
}
