'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function CheckpointWorkflowPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Workflow Integration', ko: '워크플로우 통합' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
