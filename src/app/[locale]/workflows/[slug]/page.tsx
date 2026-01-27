"use client";

import { use } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function WorkflowDetailPage({ params }: Props) {
  const { slug } = use(params);
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <Link
          href={`/${locale}/workflows`}
          className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === 'ko' ? '워크플로우로 돌아가기' : 'Back to Workflows'}
        </Link>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
          <h1 className="text-h2 font-bold text-[var(--foreground)] capitalize">
            {slug.replace('-', ' ')} Workflow
          </h1>
          <p className="mt-4 text-[var(--muted-foreground)]">
            {locale === 'ko'
              ? '이 워크플로우의 상세 가이드가 곧 제공될 예정입니다.'
              : 'Detailed guide for this workflow coming soon.'}
          </p>
        </div>
      </div>
    </div>
  );
}
