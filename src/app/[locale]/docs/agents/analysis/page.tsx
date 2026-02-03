'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function AnalysisAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Analysis Agents', ko: '분석 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
