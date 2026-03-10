'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertTriangle } from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Specialized Methods (Merged)',
    subtitle: 'Category H has been consolidated in v11.0',
    description:
      'As of Diverga v11.0, the Specialized Research Paradigms category (H) has been fully integrated into other categories. Ethnographic research (H1) and action research (H2) capabilities are now part of C2 (Qualitative Design Specialist) in the Design category.',
    redirectLabel: 'Visit the Design category to access these capabilities:',
    redirectButton: 'Go to Design Agents',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '전문 방법론 (통합됨)',
    subtitle: '카테고리 H는 v11.0에서 통합되었습니다',
    description:
      'Diverga v11.0부터 전문 연구 패러다임 카테고리(H)는 다른 카테고리에 완전히 통합되었습니다. 민족지학 연구(H1)와 실행연구(H2) 기능은 이제 설계 카테고리의 C2(질적 설계 전문가)에 포함되어 있습니다.',
    redirectLabel: '이러한 기능에 접근하려면 설계 카테고리를 방문하세요:',
    redirectButton: '설계 에이전트로 이동',
  },
};

export default function SpecializedAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/agents`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Notice card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center top, rgba(243, 156, 18, 0.12) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className="inline-flex h-14 w-14 items-center justify-center border mb-6"
              style={{
                backgroundColor: 'rgba(243, 156, 18, 0.15)',
                borderColor: 'rgba(243, 156, 18, 0.3)',
                color: '#f39c12',
              }}
            >
              <AlertTriangle className="h-7 w-7" />
            </div>

            <h1 className="void-heading-1 text-stellar-core mb-2">{t.title}</h1>
            <p className="void-heading-3 mb-6" style={{ color: '#f39c12' }}>
              {t.subtitle}
            </p>

            <p className="text-body-lg text-stellar-dim mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="border-t border-stellar-faint/10 pt-6">
              <p className="text-sm text-stellar-faint mb-4">{t.redirectLabel}</p>
              <Link
                href={`/${locale}/docs/agents/design`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.redirectButton}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
