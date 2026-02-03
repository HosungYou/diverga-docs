'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function PRISMAPipelinePage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'PRISMA Pipeline', ko: 'PRISMA 파이프라인' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
