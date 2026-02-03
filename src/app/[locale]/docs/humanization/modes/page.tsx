'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function TransformationModesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Transformation Modes', ko: '변환 모드' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
