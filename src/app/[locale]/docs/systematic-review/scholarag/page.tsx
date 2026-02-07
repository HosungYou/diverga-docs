'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ScholaRAGRedirectPage() {
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(`/${locale}/docs/systematic-review/databases`);
    }, 3000);
    return () => clearTimeout(timer);
  }, [locale, router]);

  return (
    <div className="min-h-screen bg-void-deep flex items-center justify-center py-16">
      <div className="text-center max-w-lg mx-auto px-6">
        <div className="mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center border border-[#00bcd4]/30 mb-6" style={{ backgroundColor: 'rgba(0, 188, 212, 0.15)' }}>
            <ArrowRight className="h-8 w-8 text-[#00bcd4]" />
          </div>
          <h1 className="void-heading-2 text-stellar-core mb-4">
            {locale === 'ko' ? '이 페이지가 이동되었습니다' : 'This Page Has Moved'}
          </h1>
          <p className="text-body text-stellar-dim mb-6">
            {locale === 'ko'
              ? 'ScholaRAG CLI 문서가 데이터베이스 및 파이프라인 페이지로 통합되었습니다. 3초 후 자동으로 이동합니다.'
              : 'The ScholaRAG CLI documentation has been merged into the Databases & Pipeline page. You will be redirected automatically in 3 seconds.'}
          </p>
          <Link
            href={`/${locale}/docs/systematic-review/databases`}
            className="void-btn void-btn-accent inline-flex items-center gap-2"
          >
            {locale === 'ko' ? '데이터베이스 및 파이프라인으로 이동' : 'Go to Databases & Pipeline'}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="w-48 h-1 bg-void-elevated overflow-hidden">
            <div className="h-full bg-[#00bcd4] animate-pulse" style={{ width: '100%', animation: 'shrink 3s linear forwards' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
