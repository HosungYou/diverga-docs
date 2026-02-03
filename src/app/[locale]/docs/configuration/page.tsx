'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function ConfigurationPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Configuration', ko: '설정' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
