'use client';

import { useLocale } from 'next-intl';
import { DocsLayout } from '@/components/docs';

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  return (
    <DocsLayout locale={locale}>
      {children}
    </DocsLayout>
  );
}
