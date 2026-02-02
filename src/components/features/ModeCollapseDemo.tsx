'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Sparkles } from 'lucide-react';
import { TScoreBar } from '@/components/visualization/TScoreSpectrum';

interface ModeCollapseDemoProps {
  locale: string;
}

interface Recommendation {
  label: string;
  labelKo: string;
  score: number;
  description: string;
  descriptionKo: string;
}

const traditionalRecommendations: Recommendation[] = [
  {
    label: 'TAM',
    labelKo: 'TAM',
    score: 0.92,
    description: 'Technology Acceptance Model - Most common AI suggestion',
    descriptionKo: '기술수용모델 - 가장 흔한 AI 제안',
  },
];

const divergaRecommendations: Recommendation[] = [
  {
    label: 'TAM',
    labelKo: 'TAM',
    score: 0.92,
    description: 'Traditional choice, well-validated',
    descriptionKo: '전통적 선택, 검증됨',
  },
  {
    label: 'UTAUT',
    labelKo: 'UTAUT',
    score: 0.85,
    description: 'Comprehensive framework',
    descriptionKo: '포괄적 프레임워크',
  },
  {
    label: 'Hybrid',
    labelKo: '하이브리드',
    score: 0.55,
    description: 'Custom combination',
    descriptionKo: '맞춤형 조합',
  },
  {
    label: 'SDT+TAM',
    labelKo: 'SDT+TAM',
    score: 0.38,
    description: 'Novel integration',
    descriptionKo: '참신한 통합',
  },
  {
    label: 'Novel',
    labelKo: '새로운 이론',
    score: 0.18,
    description: 'High differentiation',
    descriptionKo: '높은 차별화',
  },
];

export function ModeCollapseDemo({ locale }: ModeCollapseDemoProps) {
  const [activeView, setActiveView] = useState<'traditional' | 'diverga'>(
    'traditional'
  );

  const getColor = (score: number) => {
    if (score >= 0.8) return '#ff3366';
    if (score >= 0.6) return '#ff8844';
    if (score >= 0.4) return '#ffcc22';
    if (score >= 0.2) return '#44ffaa';
    return '#22ccff';
  };

  return (
    <div className="relative w-full py-12">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 font-bold text-stellar-core">
          {locale === 'ko' ? '모달 붕괴 vs Diverga' : 'Mode Collapse vs Diverga'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? '전통적인 AI와 Diverga의 추천 방식을 비교해보세요'
            : 'Compare how traditional AI and Diverga provide recommendations'}
        </p>
      </motion.div>

      {/* Toggle Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 flex justify-center gap-4"
      >
        <button
          onClick={() => setActiveView('traditional')}
          className={`flex items-center gap-2 border px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
            activeView === 'traditional'
              ? 'border-tscore-modal bg-tscore-modal/10 text-tscore-modal'
              : 'border-stellar-faint/20 text-stellar-dim hover:border-stellar-faint/40'
          }`}
        >
          <AlertTriangle className="h-4 w-4" />
          {locale === 'ko' ? '전통적 AI' : 'Traditional AI'}
        </button>
        <button
          onClick={() => setActiveView('diverga')}
          className={`flex items-center gap-2 border px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
            activeView === 'diverga'
              ? 'border-tscore-creative bg-tscore-creative/10 text-tscore-creative'
              : 'border-stellar-faint/20 text-stellar-dim hover:border-stellar-faint/40'
          }`}
        >
          <Sparkles className="h-4 w-4" />
          Diverga
        </button>
      </motion.div>

      {/* Comparison View */}
      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          {activeView === 'traditional' ? (
            <motion.div
              key="traditional"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Traditional AI View */}
              <div className="relative overflow-hidden border border-tscore-modal/30 bg-void-elevated p-8">
                {/* Warning Badge */}
                <div className="mb-6 inline-flex items-center gap-2 border border-tscore-modal/40 bg-tscore-modal/10 px-3 py-1.5">
                  <AlertTriangle className="h-4 w-4 text-tscore-modal" />
                  <span className="font-mono text-xs uppercase tracking-wider text-tscore-modal">
                    {locale === 'ko' ? '모달 붕괴 경고' : 'Mode Collapse'}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-xl font-bold text-stellar-core">
                  {locale === 'ko'
                    ? '단일 추천: 모두가 제안하는 것'
                    : 'Single Recommendation: What Everyone Suggests'}
                </h3>
                <p className="mb-6 text-caption text-stellar-dim">
                  {locale === 'ko'
                    ? '대부분의 AI는 가장 빈번한 답변만 제공합니다'
                    : 'Most AI tools only provide the most frequent answer'}
                </p>

                {/* Single Recommendation Card */}
                <div className="space-y-4">
                  {traditionalRecommendations.map((rec, index) => (
                    <motion.div
                      key={rec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className="border border-tscore-modal/20 bg-void-surface p-4"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <span className="font-display text-lg font-bold text-stellar-core">
                              {locale === 'ko' ? rec.labelKo : rec.label}
                            </span>
                            <span
                              className="font-mono text-xs"
                              style={{ color: getColor(rec.score) }}
                            >
                              T-{rec.score.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-caption text-stellar-dim">
                            {locale === 'ko'
                              ? rec.descriptionKo
                              : rec.description}
                          </p>
                        </div>
                        <div className="ml-4 w-32">
                          <TScoreBar score={rec.score} width={128} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Problem Explanation */}
                <div className="mt-6 border-t border-tscore-modal/20 pt-6">
                  <p className="text-caption text-stellar-dim">
                    <span className="font-bold text-tscore-modal">
                      {locale === 'ko' ? '문제점:' : 'Problem:'}
                    </span>{' '}
                    {locale === 'ko'
                      ? '창의적 대안을 탐색할 기회 없음. 기존 연구와 차별화 어려움.'
                      : 'No opportunity to explore creative alternatives. Hard to differentiate from existing research.'}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="diverga"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Diverga View */}
              <div className="relative overflow-hidden border border-tscore-creative/30 bg-void-elevated p-8">
                {/* Success Badge */}
                <div className="mb-6 inline-flex items-center gap-2 border border-tscore-creative/40 bg-tscore-creative/10 px-3 py-1.5">
                  <Sparkles className="h-4 w-4 text-tscore-creative" />
                  <span className="font-mono text-xs uppercase tracking-wider text-tscore-creative">
                    {locale === 'ko' ? '스펙트럼 탐색' : 'Spectrum Exploration'}
                  </span>
                </div>

                <h3 className="mb-2 font-display text-xl font-bold text-stellar-core">
                  {locale === 'ko'
                    ? '다중 옵션: T-Score 스펙트럼'
                    : 'Multiple Options: T-Score Spectrum'}
                </h3>
                <p className="mb-6 text-caption text-stellar-dim">
                  {locale === 'ko'
                    ? 'Diverga는 모달부터 발산적 영역까지 전체 스펙트럼을 제공합니다'
                    : 'Diverga provides the full spectrum from modal to divergent'}
                </p>

                {/* Multiple Recommendation Cards */}
                <div className="space-y-3">
                  {divergaRecommendations.map((rec, index) => (
                    <motion.div
                      key={rec.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      className="border bg-void-surface p-4 transition-all duration-300 hover:border-stellar-faint/40"
                      style={{
                        borderColor: `${getColor(rec.score)}30`,
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="mb-2 flex items-center gap-3">
                            <span className="font-display text-base font-bold text-stellar-core">
                              {locale === 'ko' ? rec.labelKo : rec.label}
                            </span>
                            <span
                              className="font-mono text-xs"
                              style={{ color: getColor(rec.score) }}
                            >
                              T-{rec.score.toFixed(2)}
                            </span>
                          </div>
                          <p className="text-caption text-stellar-dim">
                            {locale === 'ko'
                              ? rec.descriptionKo
                              : rec.description}
                          </p>
                        </div>
                        <div className="ml-4 w-32">
                          <TScoreBar score={rec.score} width={128} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefit Explanation */}
                <div className="mt-6 border-t border-tscore-creative/20 pt-6">
                  <p className="text-caption text-stellar-dim">
                    <span className="font-bold text-tscore-creative">
                      {locale === 'ko' ? '해결책:' : 'Solution:'}
                    </span>{' '}
                    {locale === 'ko'
                      ? '연구자가 안전한 선택부터 차별화된 접근까지 맥락에 맞는 옵션을 선택할 수 있습니다.'
                      : 'Researchers can choose context-appropriate options from safe choices to differentiated approaches.'}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-auto mt-8 max-w-3xl border border-tscore-divergent/30 bg-void-elevated/50 p-6 backdrop-blur-sm"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: '#22ccff' }}
            />
          </div>
          <div>
            <h4 className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-tscore-divergent">
              {locale === 'ko' ? '왜 중요한가?' : 'Why It Matters'}
            </h4>
            <p className="text-caption leading-relaxed text-stellar-dim">
              {locale === 'ko'
                ? '모달 붕괴는 AI가 항상 같은 답변만 제공하게 만듭니다. Diverga는 전체 T-Score 스펙트럼을 탐색하여 연구자가 맥락에 맞는 최적의 선택을 할 수 있도록 합니다.'
                : 'Mode collapse makes AI always provide the same answer. Diverga explores the full T-Score spectrum, enabling researchers to make optimal context-appropriate choices.'}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
