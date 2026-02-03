'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function ModelTiersPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Model Tiers', ko: '모델 티어' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
