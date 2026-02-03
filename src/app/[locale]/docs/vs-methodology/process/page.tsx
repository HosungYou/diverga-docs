'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function VSProcessPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'VS Process', ko: 'VS 프로세스' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
