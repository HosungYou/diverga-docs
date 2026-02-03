'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function SystematicReviewPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Systematic Review', ko: '체계적 문헌고찰' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
