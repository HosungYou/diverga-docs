'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function VSImplementationPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Implementation Levels', ko: '구현 수준' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
