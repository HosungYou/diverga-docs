'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { PRISMAPipeline } from '@/components/features/PRISMAPipeline';
import { DatabaseLogos } from '@/components/features/DatabaseLogos';

export default function SystematicReviewPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'PRISMA 2020 Compliant Automation',
          ko: 'PRISMA 2020 준수 자동화',
        }}
        subtitle={{
          en: 'Pipeline Integration',
          ko: '파이프라인 통합',
        }}
        description={{
          en: 'Automate systematic literature reviews with AI-assisted screening, deduplication, and RAG-powered synthesis. Retrieve papers from Semantic Scholar, OpenAlex, and arXiv automatically.',
          ko: 'AI 지원 스크리닝, 중복 제거, RAG 기반 종합으로 체계적 문헌고찰을 자동화합니다. Semantic Scholar, OpenAlex, arXiv에서 논문을 자동으로 검색합니다.',
        }}
        locale={locale}
        accentColor="#44ffaa"
      />

      {/* Pain Point Section */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '수백 편의 논문, 자동으로 처리' : 'Process Hundreds of Papers Automatically'}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-checkpoint-required/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-checkpoint-required">
                  {locale === 'ko' ? '전통적 방식' : 'Traditional Way'}
                </div>
                <ul className="space-y-2 text-left text-stellar-dim">
                  <li>• {locale === 'ko' ? '수동 데이터베이스 검색' : 'Manual database searching'}</li>
                  <li>• {locale === 'ko' ? '수천 개의 중복 제거' : 'Deduplication of thousands'}</li>
                  <li>• {locale === 'ko' ? '하나씩 초록 스크리닝' : 'Abstract screening one by one'}</li>
                  <li>• {locale === 'ko' ? '개별 PDF 다운로드' : 'Individual PDF downloads'}</li>
                </ul>
              </div>
              <div className="border border-tscore-creative/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-tscore-creative">
                  {locale === 'ko' ? 'Diverga 방식' : 'Diverga Way'}
                </div>
                <ul className="space-y-2 text-left text-stellar-dim">
                  <li>• {locale === 'ko' ? 'API 기반 자동 검색' : 'API-based automatic retrieval'}</li>
                  <li>• {locale === 'ko' ? 'AI 중복 감지' : 'AI-powered deduplication'}</li>
                  <li>• {locale === 'ko' ? 'LLM 지원 스크리닝' : 'LLM-assisted screening'}</li>
                  <li>• {locale === 'ko' ? '자동 PDF 수집' : 'Automated PDF collection'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRISMA Pipeline */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? 'PRISMA 파이프라인' : 'PRISMA Pipeline'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '5개 전문 에이전트가 체계적 문헌고찰 자동화'
                : '5 specialized agents automate your systematic review'}
            </p>
          </motion.div>
          <PRISMAPipeline locale={locale} />
        </div>
      </section>

      {/* Database Support */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '지원 데이터베이스' : 'Supported Databases'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? 'API 접근과 PDF 가용성을 위해 최적화된 데이터베이스'
                : 'Databases optimized for API access and PDF availability'}
            </p>
          </motion.div>
          <DatabaseLogos locale={locale} />
        </div>
      </section>

      {/* Project Types */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '프로젝트 유형' : 'Project Types'}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-stellar-faint/10 bg-void-elevated p-6">
                <div className="mb-4 inline-block rounded-none bg-tscore-creative/20 px-3 py-1 font-mono text-micro text-tscore-creative">
                  knowledge_repository
                </div>
                <h3 className="font-display text-lg text-stellar-core">
                  {locale === 'ko' ? '지식 저장소' : 'Knowledge Repository'}
                </h3>
                <ul className="mt-4 space-y-2 text-caption text-stellar-dim">
                  <li>• 15,000 - 20,000 {locale === 'ko' ? '논문' : 'papers'}</li>
                  <li>• 50% {locale === 'ko' ? '관련성 임계값' : 'relevance threshold'}</li>
                  <li>• {locale === 'ko' ? '광범위한 탐색적 검토용' : 'For broad exploratory reviews'}</li>
                </ul>
              </div>
              <div className="border border-stellar-faint/10 bg-void-elevated p-6">
                <div className="mb-4 inline-block rounded-none bg-checkpoint-required/20 px-3 py-1 font-mono text-micro text-checkpoint-required">
                  systematic_review
                </div>
                <h3 className="font-display text-lg text-stellar-core">
                  {locale === 'ko' ? '체계적 문헌고찰' : 'Systematic Review'}
                </h3>
                <ul className="mt-4 space-y-2 text-caption text-stellar-dim">
                  <li>• 50 - 300 {locale === 'ko' ? '논문' : 'papers'}</li>
                  <li>• 90% {locale === 'ko' ? '관련성 임계값' : 'relevance threshold'}</li>
                  <li>• {locale === 'ko' ? '저널 출판용 엄격한 검토' : 'For rigorous journal-ready reviews'}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '체계적 문헌고찰 시작하기' : 'Start Your Systematic Review'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'I-카테고리 파이프라인이 자동으로 통합됩니다.'
                : 'The I-category pipeline integrates seamlessly.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '시작하기' : 'Get Started'}
              </Link>
              <a
                href="https://github.com/HosungYou/Diverga"
                target="_blank"
                rel="noopener noreferrer"
                className="void-btn void-btn-secondary px-8 py-3"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
