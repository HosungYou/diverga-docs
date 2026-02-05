'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FeatureHero } from '@/components/features/FeatureHero';
import { MemoryTypesGrid } from '@/components/features/MemoryTypesGrid';
import { MemoryArchitectureDiagram } from '@/components/features/memory/MemoryArchitectureDiagram';
import { MemoryCommandPlayground } from '@/components/features/memory/MemoryCommandPlayground';
import { MemoryFlowAnimation } from '@/components/features/memory/MemoryFlowAnimation';
import { MemoryComparisonTable } from '@/components/features/memory/MemoryComparisonTable';

export default function MemorySystemPage() {
  const locale = useLocale();
  const [sessionCount, setSessionCount] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Counter animation for hero
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const increment = 500 / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 500) {
        setSessionCount(500);
        clearInterval(timer);
      } else {
        setSessionCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Enhanced Hero Section with Particle Background */}
      <div className="relative overflow-hidden">
        {/* Animated particle background */}
        <motion.div
          style={{ opacity }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#9b59b6]/10 via-transparent to-transparent" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-[#9b59b6]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

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

        {/* Counter Stats */}
        <div className="relative z-10 -mt-8 pb-16">
          <div className="mx-auto max-w-4xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="border border-[#9b59b6]/30 bg-void-elevated/80 p-8 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="font-mono text-5xl font-bold text-[#9b59b6]">
                  {sessionCount}+
                </div>
                <div className="mt-2 text-body text-stellar-dim">
                  {locale === 'ko'
                    ? '연구 세션이 메모리 시스템으로 강화됨'
                    : 'research sessions powered by Memory System'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Comparison Section - Replaces Pain Point */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <MemoryComparisonTable locale={locale} />
        </div>
      </section>

      {/* 3-Layer Architecture Section */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '3계층 메모리 아키텍처' : '3-Layer Memory Architecture'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '각 레이어는 고유한 수명 주기와 목적을 가진 지능적 메모리 시스템'
                : 'Intelligent memory system with distinct lifecycle and purpose for each layer'}
            </p>
          </motion.div>
          <MemoryArchitectureDiagram locale={locale} />
        </div>
      </section>

      {/* Memory Flow Animation */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
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
                ? '캡처부터 저장, 검색까지 완전 자동화된 메모리 관리 프로세스'
                : 'Fully automated memory management from capture to retrieval'}
            </p>
          </motion.div>
          <MemoryFlowAnimation locale={locale} />
        </div>
      </section>

      {/* Memory Types Grid */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <MemoryTypesGrid locale={locale} />
        </div>
      </section>

      {/* CLI Playground */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
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
                ? '강력한 MCP 도구로 메모리를 제어하고 쿼리'
                : 'Control and query memory with powerful MCP tools'}
            </p>
          </motion.div>
          <MemoryCommandPlayground locale={locale} />
        </div>
      </section>

      {/* Enhanced Technical Specs */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '기술 사양' : 'Technical Specifications'}
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-stellar-faint/10 bg-void-elevated p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-stellar-core">
                {locale === 'ko' ? '저장 시스템' : 'Storage System'}
              </h3>
              <div className="space-y-3 text-caption text-stellar-dim">
                <div className="flex justify-between">
                  <span>{locale === 'ko' ? '엔진' : 'Engine'}</span>
                  <span className="font-mono text-tscore-creative">SQLite + FTS5</span>
                </div>
                <div className="flex justify-between">
                  <span>{locale === 'ko' ? '검색 속도' : 'Search Speed'}</span>
                  <span className="font-mono text-tscore-creative">&lt;10ms</span>
                </div>
                <div className="flex justify-between">
                  <span>{locale === 'ko' ? '저장 위치' : 'Location'}</span>
                  <span className="font-mono text-tscore-creative">.omc/notepad.md</span>
                </div>
                <div className="flex justify-between">
                  <span>{locale === 'ko' ? '한글 지원' : 'Korean Support'}</span>
                  <span className="font-mono text-tscore-creative">Full tokenization</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border border-stellar-faint/10 bg-void-elevated p-6"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-stellar-core">
                {locale === 'ko' ? 'MCP 도구' : 'MCP Tools'}
              </h3>
              <div className="space-y-2 text-caption text-stellar-dim">
                {[
                  'notepad_read',
                  'notepad_write_priority',
                  'notepad_write_working',
                  'notepad_write_manual',
                  'notepad_prune',
                  'notepad_stats',
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#9b59b6]" />
                    <span className="font-mono">{tool}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-stellar-faint/10 bg-void-elevated p-6 md:col-span-2"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-stellar-core">
                {locale === 'ko' ? '플랫폼 호환성' : 'Platform Compatibility'}
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { name: 'Claude Code', status: 'Full Support' },
                  { name: 'Codex CLI', status: 'Full Support' },
                  { name: 'OpenCode', status: 'Experimental' },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className="border border-stellar-faint/10 bg-void-deep p-4 text-center"
                  >
                    <div className="font-mono text-sm text-stellar-core">
                      {platform.name}
                    </div>
                    <div className="mt-1 text-micro text-stellar-dim">
                      {platform.status}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
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
            <h2 className="font-display text-heading-2">
              <span className="bg-gradient-to-r from-[#9b59b6] to-[#3498db] bg-clip-text text-transparent">
                {locale === 'ko' ? '메모리 시스템 시작하기' : 'Get Started with Memory System'}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? 'Diverga v6.8.0 이상에서 사용 가능합니다.'
                : 'Available in Diverga v6.8.0 and later.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/getting-started`}
                className="group relative overflow-hidden border border-[#9b59b6] bg-[#9b59b6] px-8 py-3 font-mono text-sm text-white transition-all hover:bg-[#8e44ad]"
              >
                <span className="relative z-10">
                  {locale === 'ko' ? '설치하기' : 'Install Now'}
                </span>
              </Link>
              <Link
                href={`/${locale}/docs/memory-system`}
                className="border border-stellar-faint/20 bg-void-elevated px-8 py-3 font-mono text-sm text-stellar-core transition-all hover:bg-void-surface"
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
