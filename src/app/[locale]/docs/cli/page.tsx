'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function CLIReferencePage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'CLI Reference', ko: 'CLI 레퍼런스' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
