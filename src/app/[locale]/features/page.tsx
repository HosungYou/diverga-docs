'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { FeaturesGrid } from '@/components/features/FeaturesGrid';

export default function FeaturesPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'Research Tools That Understand Researchers',
          ko: '연구자를 이해하는 연구 도구',
        }}
        subtitle={{
          en: 'A New Paradigm for AI Research Assistance',
          ko: 'AI 연구 보조의 새로운 패러다임',
        }}
        description={{
          en: 'Five core features that transform how researchers interact with AI. From persistent memory to PRISMA-compliant automation, Diverga puts researchers in control.',
          ko: '연구자가 AI와 상호작용하는 방식을 혁신하는 5가지 핵심 기능. 지속적 메모리부터 PRISMA 준수 자동화까지, Diverga는 연구자에게 통제권을 부여합니다.',
        }}
        locale={locale}
        accentColor="#44ffaa"
      />

      {/* Features Grid Section */}
      <FeaturesGrid locale={locale} />

      {/* Call to Action Section */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '연구를 시작할 준비가 되셨나요?' : 'Ready to Transform Your Research?'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? '2분 안에 Diverga를 설치하고 이 모든 기능을 활용하세요.'
                : 'Install Diverga in under 2 minutes and start using all these features.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '지금 시작하기' : 'Get Started Now'}
              </Link>
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
