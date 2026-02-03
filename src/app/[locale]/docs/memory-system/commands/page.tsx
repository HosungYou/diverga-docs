'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function MemoryCommandsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'CLI Commands', ko: 'CLI 명령어' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
