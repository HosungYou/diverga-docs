'use client';

import { motion } from 'framer-motion';
import { X, Check, TrendingUp } from 'lucide-react';

interface MemoryComparisonTableProps {
  locale: string;
}

interface ComparisonRow {
  feature: { en: string; ko: string };
  before: { en: string; ko: string };
  after: { en: string; ko: string };
}

export function MemoryComparisonTable({ locale }: MemoryComparisonTableProps) {
  const rows: ComparisonRow[] = [
    {
      feature: { en: 'Context Setup', ko: '컨텍스트 설정' },
      before: {
        en: 'Re-explain research every session (5-10 min)',
        ko: '매 세션마다 연구 재설명 (5-10분)',
      },
      after: {
        en: 'Auto-loaded from Priority Context (<1 sec)',
        ko: 'Priority Context에서 자동 로드 (<1초)',
      },
    },
    {
      feature: { en: 'Session Continuity', ko: '세션 연속성' },
      before: {
        en: 'Lost decisions from previous sessions',
        ko: '이전 세션의 결정 손실',
      },
      after: {
        en: 'Working Memory preserves last 7 days',
        ko: 'Working Memory가 최근 7일 보존',
      },
    },
    {
      feature: { en: 'Literature Notes', ko: '문헌 노트' },
      before: {
        en: 'Scattered across chat history',
        ko: '채팅 기록 전체에 분산',
      },
      after: {
        en: 'Organized in Manual Archive (permanent)',
        ko: 'Manual Archive에 정리 (영구)',
      },
    },
    {
      feature: { en: 'Search & Recall', ko: '검색 및 회상' },
      before: {
        en: 'Manual scrolling through conversations',
        ko: '대화 내역 수동 스크롤',
      },
      after: {
        en: 'FTS5 full-text search (<10ms)',
        ko: 'FTS5 전문 검색 (<10ms)',
      },
    },
    {
      feature: { en: 'Cross-Project Context', ko: '프로젝트 간 컨텍스트' },
      before: {
        en: 'Isolated per project',
        ko: '프로젝트별로 격리',
      },
      after: {
        en: 'Shared via notepad_read across projects',
        ko: 'notepad_read로 프로젝트 간 공유',
      },
    },
    {
      feature: { en: 'Memory Overhead', ko: '메모리 오버헤드' },
      before: {
        en: 'Token-heavy context repetition',
        ko: '토큰 소모가 큰 컨텍스트 반복',
      },
      after: {
        en: '~50KB storage, minimal token usage',
        ko: '~50KB 저장, 최소 토큰 사용',
      },
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="font-display text-heading-2 text-stellar-core">
          {locale === 'ko' ? '변화의 크기' : 'The Impact'}
        </h2>
        <p className="mt-4 text-body text-stellar-dim">
          {locale === 'ko'
            ? '메모리 시스템 도입 전후 비교'
            : 'Before and after Memory System implementation'}
        </p>
      </motion.div>

      {/* Comparison Table */}
      <div className="overflow-hidden border border-stellar-faint/10">
        {/* Table Header */}
        <div className="grid grid-cols-3 border-b border-stellar-faint/10 bg-void-surface">
          <div className="p-4 font-mono text-micro uppercase text-stellar-dim">
            {locale === 'ko' ? '기능' : 'Feature'}
          </div>
          <div className="border-l border-stellar-faint/10 p-4 font-mono text-micro uppercase text-checkpoint-required">
            {locale === 'ko' ? '이전' : 'Before'}
          </div>
          <div className="border-l border-stellar-faint/10 p-4 font-mono text-micro uppercase text-tscore-creative">
            {locale === 'ko' ? '이후' : 'After'}
          </div>
        </div>

        {/* Table Rows */}
        {rows.map((row, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="grid grid-cols-3 border-b border-stellar-faint/10 bg-void-elevated transition-colors hover:bg-void-surface"
          >
            {/* Feature */}
            <div className="flex items-center p-4">
              <span className="font-mono text-sm text-stellar-core">
                {locale === 'ko' ? row.feature.ko : row.feature.en}
              </span>
            </div>

            {/* Before */}
            <div className="flex items-start gap-3 border-l border-stellar-faint/10 p-4">
              <X className="h-4 w-4 flex-shrink-0 text-checkpoint-required" />
              <span className="text-caption text-stellar-dim">
                {locale === 'ko' ? row.before.ko : row.before.en}
              </span>
            </div>

            {/* After */}
            <div className="flex items-start gap-3 border-l border-stellar-faint/10 p-4">
              <Check className="h-4 w-4 flex-shrink-0 text-tscore-creative" />
              <span className="text-caption text-stellar-core">
                {locale === 'ko' ? row.after.ko : row.after.en}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Impact Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {[
          {
            label: locale === 'ko' ? '시간 절약' : 'Time Saved',
            value: '5-10 min',
            subtext: locale === 'ko' ? '세션당' : 'per session',
          },
          {
            label: locale === 'ko' ? '토큰 절약' : 'Tokens Saved',
            value: '~2K',
            subtext: locale === 'ko' ? '세션당' : 'per session',
          },
          {
            label: locale === 'ko' ? '컨텍스트 유지' : 'Context Retention',
            value: '100%',
            subtext: locale === 'ko' ? '세션 간' : 'across sessions',
          },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="border border-tscore-creative/30 bg-void-elevated p-6 text-center"
          >
            <div className="mb-2 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-tscore-creative" />
            </div>
            <div className="font-mono text-2xl font-bold text-tscore-creative">
              {stat.value}
            </div>
            <div className="mt-1 text-micro text-stellar-core">{stat.label}</div>
            <div className="mt-1 text-micro text-stellar-dim">{stat.subtext}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonial-style Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-l-4 border-tscore-creative bg-void-elevated p-6"
      >
        <p className="text-body italic text-stellar-core">
          {locale === 'ko'
            ? '"더 이상 연구 맥락을 반복 설명하지 않아도 됩니다. Diverga가 제 연구 여정의 모든 단계를 기억합니다."'
            : '"No more repeating my research context. Diverga remembers every step of my research journey."'}
        </p>
        <p className="mt-3 text-caption text-stellar-dim">
          {locale === 'ko'
            ? '— 교육학 박사과정 연구자'
            : '— PhD Researcher in Education'}
        </p>
      </motion.div>
    </div>
  );
}
