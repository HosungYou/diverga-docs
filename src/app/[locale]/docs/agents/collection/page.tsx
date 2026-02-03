'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function CollectionAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Collection Agents', ko: '수집 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
