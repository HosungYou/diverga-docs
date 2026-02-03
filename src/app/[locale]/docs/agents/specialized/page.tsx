'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function SpecializedAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Specialized Agents', ko: '전문 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
