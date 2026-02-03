'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Construction, ArrowLeft, Home } from 'lucide-react';
import { DocsBreadcrumb } from './DocsBreadcrumb';

interface DocsComingSoonProps {
  locale: 'en' | 'ko';
  title: string;
  description?: string;
}

export function DocsComingSoon({ locale, title, description }: DocsComingSoonProps) {
  const content = {
    en: {
      comingSoon: 'Coming Soon',
      message: 'This documentation page is under construction.',
      backToDocs: 'Back to Docs',
      home: 'Home',
    },
    ko: {
      comingSoon: '준비 중',
      message: '이 문서 페이지는 작성 중입니다.',
      backToDocs: '문서로 돌아가기',
      home: '홈',
    },
  };

  const t = content[locale];

  return (
    <div>
      <DocsBreadcrumb locale={locale} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="flex h-20 w-20 items-center justify-center bg-[#ffcc22]/10 border border-[#ffcc22]/30 mb-6">
          <Construction className="h-10 w-10 text-[#ffcc22]" />
        </div>

        <h1 className="text-3xl font-display text-stellar-core mb-2">{title}</h1>

        <span className="px-3 py-1 text-sm font-mono uppercase bg-[#ffcc22]/20 text-[#ffcc22] border border-[#ffcc22]/30 mb-4">
          {t.comingSoon}
        </span>

        <p className="text-stellar-dim max-w-md mb-8">
          {description || t.message}
        </p>

        <div className="flex gap-4">
          <Link
            href={`/${locale}/docs`}
            className="flex items-center gap-2 px-4 py-2 bg-void-elevated border border-stellar-faint/20 text-stellar-dim hover:text-stellar-bright hover:border-stellar-faint/40 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.backToDocs}
          </Link>
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 px-4 py-2 bg-[#44ffaa]/10 border border-[#44ffaa]/30 text-[#44ffaa] hover:bg-[#44ffaa]/20 transition-colors"
          >
            <Home className="h-4 w-4" />
            {t.home}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
