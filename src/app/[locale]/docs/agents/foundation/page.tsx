'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function FoundationAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Foundation Agents', ko: '기초 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
