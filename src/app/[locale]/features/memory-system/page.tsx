'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { MemoryFlowDiagram } from '@/components/features/MemoryFlowDiagram';
import { MemoryTypesGrid } from '@/components/features/MemoryTypesGrid';
import { MemoryCLIDemo } from '@/components/features/MemoryCLIDemo';

export default function MemorySystemPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'Research Memory, Finally Solved',
          ko: '연구 메모리, 드디어 해결',
        }}
        subtitle={{
          en: 'NEW in v6.8.0',
          ko: 'v6.8.0 신규',
        }}
        description={{
          en: 'No more re-explaining your research context every session. Diverga remembers your project decisions, theoretical frameworks, methodology choices, and research notes—automatically.',
          ko: '더 이상 매 세션마다 연구 맥락을 재설명할 필요가 없습니다. Diverga는 프로젝트 결정, 이론적 프레임워크, 방법론 선택, 연구 노트를 자동으로 기억합니다.',
        }}
        locale={locale}
        accentColor="#9b59b6"
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
              {locale === 'ko' ? '매번 연구 질문을 다시 설명하는 데 지치셨나요?' : 'Tired of re-explaining your research every time?'}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-checkpoint-required/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-checkpoint-required">
                  {locale === 'ko' ? '이전' : 'Before'}
                </div>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '"제 연구 질문은... 그리고 이론적 프레임워크로는... 방법론은..." — 매 세션마다 반복'
                    : '"My research question is... and my theoretical framework... methodology is..." — Every. Single. Session.'}
                </p>
              </div>
              <div className="border border-tscore-creative/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-tscore-creative">
                  {locale === 'ko' ? '이후' : 'After'}
                </div>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '"이 프로젝트 컨텍스트 계속해줘" — Diverga가 나머지를 기억합니다'
                    : '"Continue with this project context" — Diverga remembers the rest'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Memory Flow Diagram */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '메모리 라이프사이클' : 'Memory Lifecycle'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '세션 전반에 걸쳐 맥락이 어떻게 캡처되고 저장되고 불러와지는지'
                : 'How context is captured, stored, and recalled across sessions'}
            </p>
          </motion.div>
          <MemoryFlowDiagram locale={locale} />
        </div>
      </section>

      {/* Memory Types Grid */}
      <MemoryTypesGrid locale={locale} />

      {/* CLI Demo */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? 'CLI로 메모리 관리' : 'Manage Memory via CLI'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '강력한 명령어로 메모리를 검색, 조회, 내보내기'
                : 'Search, recall, and export memories with powerful commands'}
            </p>
          </motion.div>
          <MemoryCLIDemo locale={locale} />
        </div>
      </section>

      {/* Technical Specs Accordion */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '기술 세부사항' : 'Technical Details'}
            </h2>
            <div className="space-y-4">
              <div className="border border-stellar-faint/10 bg-void-elevated p-6">
                <h3 className="font-mono text-sm text-stellar-core">
                  {locale === 'ko' ? '저장 및 검색' : 'Storage & Search'}
                </h3>
                <p className="mt-2 text-caption text-stellar-dim">
                  SQLite + FTS5 | Korean text indexing | Semantic search
                </p>
              </div>
              <div className="border border-stellar-faint/10 bg-void-elevated p-6">
                <h3 className="font-mono text-sm text-stellar-core">
                  {locale === 'ko' ? '플랫폼 호환성' : 'Platform Compatibility'}
                </h3>
                <p className="mt-2 text-caption text-stellar-dim">
                  Claude Code | Codex CLI | OpenCode
                </p>
              </div>
              <div className="border border-stellar-faint/10 bg-void-elevated p-6">
                <h3 className="font-mono text-sm text-stellar-core">
                  {locale === 'ko' ? '테스트 커버리지' : 'Test Coverage'}
                </h3>
                <div className="mt-2 flex items-center gap-4">
                  <div className="h-2 flex-1 bg-void-hover">
                    <div className="h-full w-[78%] bg-tscore-creative" />
                  </div>
                  <span className="font-mono text-micro text-tscore-creative">78%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '메모리 시스템 시작하기' : 'Get Started with Memory System'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'Diverga v6.8.0 이상에서 사용 가능합니다.'
                : 'Available in Diverga v6.8.0 and later.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '설치하기' : 'Install Now'}
              </Link>
              <Link
                href={`/${locale}/docs/memory-system`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '문서 보기' : 'View Documentation'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
