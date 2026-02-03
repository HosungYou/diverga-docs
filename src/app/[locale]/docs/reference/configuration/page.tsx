'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function ConfigReferencePage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Configuration Reference', ko: '설정 레퍼런스' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
