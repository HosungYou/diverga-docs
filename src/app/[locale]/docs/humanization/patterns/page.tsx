'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function AIPatternsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'AI Pattern Detection', ko: 'AI 패턴 감지' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
