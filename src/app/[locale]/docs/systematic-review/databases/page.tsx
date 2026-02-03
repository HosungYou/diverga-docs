'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function DatabasesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Supported Databases', ko: '지원 데이터베이스' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
