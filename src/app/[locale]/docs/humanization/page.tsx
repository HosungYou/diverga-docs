'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function HumanizationPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Humanization', ko: '휴먼화' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
