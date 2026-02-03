'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function QualityAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Quality Agents', ko: '품질 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
