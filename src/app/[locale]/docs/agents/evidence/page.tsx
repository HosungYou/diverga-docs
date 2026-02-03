'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function EvidenceAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Evidence Agents', ko: '근거 에이전트' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
