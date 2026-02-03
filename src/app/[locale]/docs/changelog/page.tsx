'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function ChangelogPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Changelog', ko: '변경 로그' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
