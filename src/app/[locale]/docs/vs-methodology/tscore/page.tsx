'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function TScorePage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'T-Score System', ko: 'T-Score 시스템' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
