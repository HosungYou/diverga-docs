'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function ScholaRAGPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'ScholaRAG Integration', ko: 'ScholaRAG 통합' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
