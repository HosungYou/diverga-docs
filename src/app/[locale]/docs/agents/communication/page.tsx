'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function CommunicationAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Communication Agents', ko: '커뮤니케이션 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
