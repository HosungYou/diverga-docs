'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';

export default function JournalIntelligencePage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'Real-Time Journal Matching',
          ko: '실시간 저널 매칭',
        }}
        subtitle={{
          en: 'OpenAlex + Crossref Integration',
          ko: 'OpenAlex + Crossref 통합',
        }}
        description={{
          en: 'G1 Journal Matcher connects to OpenAlex and Crossref APIs for live metrics — h-index, citation trends, open access status — with checkpoint-based pipeline for informed journal selection.',
          ko: 'G1 저널 매칭이 OpenAlex와 Crossref API에 연결되어 실시간 메트릭(h-index, 인용 트렌드, OA 상태)과 체크포인트 기반 파이프라인으로 정보에 입각한 저널 선택을 지원합니다.',
        }}
        locale={locale}
        accentColor="#f59e0b"
      />

      {/* MCP Tools Section */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '6가지 MCP 도구' : '6 MCP Tools'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? 'OpenAlex와 Crossref API를 통한 실시간 저널 데이터 접근'
                : 'Real-time journal data access via OpenAlex and Crossref APIs'}
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                tool: 'journal_search_by_field',
                label: {
                  en: 'Search journals by research field',
                  ko: '연구 분야별 저널 검색',
                },
              },
              {
                tool: 'journal_metrics',
                label: {
                  en: 'Real-time h-index, citations, OA',
                  ko: '실시간 h-index, 인용, OA',
                },
              },
              {
                tool: 'journal_publication_trends',
                label: {
                  en: 'Year-over-year trends',
                  ko: '연도별 추세',
                },
              },
              {
                tool: 'journal_editor_info',
                label: {
                  en: 'Top authors & editors',
                  ko: '주요 저자 및 에디터',
                },
              },
              {
                tool: 'journal_compare',
                label: {
                  en: 'Side-by-side comparison',
                  ko: '나란히 비교',
                },
              },
              {
                tool: 'journal_special_issues',
                label: {
                  en: 'Special issues & CFP',
                  ko: '특별호 및 CFP',
                },
              },
            ].map((item, index) => (
              <motion.div
                key={item.tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-2 border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <span
                  className="font-mono text-micro"
                  style={{ color: '#f59e0b' }}
                >
                  {item.tool}
                </span>
                <span className="text-caption text-stellar-dim">
                  {locale === 'ko' ? item.label.ko : item.label.en}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '작동 방식' : 'How It Works'}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  step: '01',
                  title: { en: 'Field Analysis', ko: '분야 분석' },
                  description: {
                    en: 'Analyze your abstract and methodology to identify research field and journal candidates via OpenAlex API',
                    ko: '초록과 방법론을 분석하여 OpenAlex API를 통해 연구 분야 및 저널 후보 식별',
                  },
                },
                {
                  step: '02',
                  title: { en: 'Priority Selection', ko: '우선순위 선택' },
                  description: {
                    en: 'Choose your priorities: Impact Factor, Publication Speed, Open Access, Scope Fit, or Balanced',
                    ko: '우선순위 선택: 영향력 지표, 출판 속도, 오픈 액세스, 범위 적합성, 균형 추천',
                  },
                },
                {
                  step: '03',
                  title: { en: 'Data-Driven Decision', ko: '데이터 기반 결정' },
                  description: {
                    en: 'Compare real-time metrics, publication trends, and editorial profiles for your final journal selection',
                    ko: '실시간 메트릭, 출판 트렌드, 편집 프로필을 비교하여 최종 저널 선택',
                  },
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative border border-stellar-faint/10 bg-void-elevated p-6"
                >
                  <div
                    className="absolute -top-3 left-4 bg-void-elevated px-2 font-mono text-micro"
                    style={{ color: '#f59e0b' }}
                  >
                    {item.step}
                  </div>
                  <h3 className="mt-2 font-display text-lg text-stellar-core">
                    {locale === 'ko' ? item.title.ko : item.title.en}
                  </h3>
                  <p className="mt-2 text-caption text-stellar-dim">
                    {locale === 'ko' ? item.description.ko : item.description.en}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkpoint Pipeline */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '체크포인트 파이프라인' : 'Checkpoint Pipeline'}
            </h2>
            <p className="mb-12 text-center text-body text-stellar-dim">
              {locale === 'ko'
                ? '저널 선택 과정에서 사용자 판단을 수집하는 체크포인트'
                : 'Checkpoints that collect user judgment during journal selection'}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  id: 'CP_JOURNAL_PRIORITIES',
                  badge: 'recommended',
                  description: {
                    en: 'Select ranking criteria before journal comparison',
                    ko: '저널 비교 전 순위 기준 선택',
                  },
                },
                {
                  id: 'CP_JOURNAL_SELECTION',
                  badge: 'recommended',
                  description: {
                    en: 'Choose target journal with real-time data',
                    ko: '실시간 데이터로 타겟 저널 선택',
                  },
                },
              ].map((checkpoint, index) => (
                <motion.div
                  key={checkpoint.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-stellar-faint/10 bg-void-elevated p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="font-mono text-sm font-semibold"
                      style={{ color: '#f59e0b' }}
                    >
                      {checkpoint.id}
                    </span>
                    <span
                      className="rounded px-2 py-0.5 font-mono text-micro"
                      style={{
                        backgroundColor: 'rgba(245, 158, 11, 0.15)',
                        color: '#f59e0b',
                      }}
                    >
                      {checkpoint.badge}
                    </span>
                  </div>
                  <p className="text-caption text-stellar-dim">
                    {locale === 'ko'
                      ? checkpoint.description.ko
                      : checkpoint.description.en}
                  </p>
                </motion.div>
              ))}
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
              {locale === 'ko' ? '완벽한 저널을 찾으세요' : 'Find Your Perfect Journal'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'Diverga의 G1 저널 매칭 에이전트와 실시간 OpenAlex 및 Crossref 데이터를 활용하여 최적의 저널을 선택하세요.'
                : "Leverage Diverga's G1 Journal Matcher agent with real-time OpenAlex and Crossref data to select the optimal journal for your research."}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '시작하기' : 'Get Started'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
