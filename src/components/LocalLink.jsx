'use client';
import Link from 'next/link';
import { useLanguage } from './language';
import { localize } from '../lib/i18n';

// next/link che resta nella lingua corrente: su /en i percorsi interni ricevono il prefisso /en.
export default function LocalLink({ href, ...props }) {
  const { lang } = useLanguage();
  return <Link href={localize(href, lang)} {...props} />;
}
