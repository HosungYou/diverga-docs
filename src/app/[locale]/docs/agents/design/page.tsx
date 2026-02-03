'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function DesignAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Design Agents', ko: '설계 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
