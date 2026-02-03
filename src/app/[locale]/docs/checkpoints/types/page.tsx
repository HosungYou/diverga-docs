'use client';

import { useLocale } from 'next-intl';
import { DocsComingSoon } from '@/components/docs';

export default function CheckpointTypesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const titles = { en: 'Checkpoint Types', ko: '체크포인트 유형' };
  return <DocsComingSoon locale={locale} title={titles[locale]} />;
}
