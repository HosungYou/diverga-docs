'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function MemoryTypesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Memory Types', ko: '메모리 타입' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
