'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function AgentsOverviewPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Agent Overview', ko: '에이전트 개요' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
