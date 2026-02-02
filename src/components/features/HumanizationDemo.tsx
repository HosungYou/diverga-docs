'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface HumanizationDemoProps {
  locale: string;
}

const aiText = {
  en: `This study aims to investigate the impact of AI-powered chatbots on language learning outcomes. It is important to note that while previous research has shown promising results, there are several limitations that need to be considered. In order to address these gaps, we employed a comprehensive methodology that leverages state-of-the-art natural language processing techniques. The findings suggest that AI chatbots can significantly enhance speaking proficiency, although further research is needed to validate these results.`,
  ko: `본 연구는 AI 기반 챗봇이 언어 학습 결과에 미치는 영향을 조사하는 것을 목표로 합니다. 이전 연구들이 유망한 결과를 보여주었지만 고려해야 할 몇 가지 한계점이 있다는 점에 주목할 필요가 있습니다. 이러한 격차를 해결하기 위해 우리는 최첨단 자연어 처리 기술을 활용하는 포괄적인 방법론을 채택했습니다. 연구 결과는 AI 챗봇이 말하기 능력을 크게 향상시킬 수 있음을 시사하지만, 이러한 결과를 검증하기 위해서는 추가 연구가 필요합니다.`,
};

const humanizedText = {
  en: `We examined how AI chatbots affect language learning outcomes. While prior studies yielded promising results, methodological gaps remained. Using advanced natural language processing, we found that chatbots substantially improved speaking proficiency (d = 0.78, p < .001). However, contextual factors moderated these effects.`,
  ko: `우리는 AI 챗봇이 언어 학습 결과에 어떻게 영향을 미치는지 조사했습니다. 선행 연구들이 긍정적 결과를 보였지만, 방법론적 공백이 남아있었습니다. 고급 자연어 처리를 활용하여, 챗봇이 말하기 능력을 실질적으로 향상시켰음을 발견했습니다 (d = 0.78, p < .001). 그러나 맥락적 요인들이 이러한 효과를 조절했습니다.`,
};

interface PatternHighlight {
  pattern: string;
  patternKo: string;
  start: number;
  end: number;
  type: 'remove' | 'improve';
}

const aiPatterns: PatternHighlight[] = [
  { pattern: 'This study aims to', patternKo: '본 연구는...목표로 합니다', start: 0, end: 19, type: 'remove' },
  { pattern: 'It is important to note that', patternKo: '주목할 필요가 있다는 점', start: 109, end: 137, type: 'remove' },
  { pattern: 'In order to', patternKo: '하기 위해', start: 263, end: 274, type: 'improve' },
  { pattern: 'leverages state-of-the-art', patternKo: '최첨단...활용', start: 334, end: 360, type: 'remove' },
  { pattern: 'further research is needed', patternKo: '추가 연구가 필요', start: 482, end: 508, type: 'remove' },
];

export function HumanizationDemo({ locale }: HumanizationDemoProps) {
  const [view, setView] = useState<'ai' | 'humanized'>('ai');

  const text = view === 'ai' ? aiText[locale as 'en' | 'ko'] : humanizedText[locale as 'en' | 'ko'];

  const renderHighlightedText = () => {
    if (view === 'humanized') {
      return <span className="text-stellar-core leading-relaxed">{text}</span>;
    }

    const textToRender = aiText[locale as 'en' | 'ko'];
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    // Sort patterns by start position
    const sortedPatterns = [...aiPatterns].sort((a, b) => a.start - b.start);

    sortedPatterns.forEach((pattern, idx) => {
      // Add text before pattern
      if (pattern.start > lastIndex) {
        parts.push(
          <span key={`text-${idx}`} className="text-stellar-core">
            {textToRender.substring(lastIndex, pattern.start)}
          </span>
        );
      }

      // Add highlighted pattern
      parts.push(
        <motion.span
          key={`pattern-${idx}`}
          initial={{ backgroundColor: 'transparent' }}
          animate={{ backgroundColor: 'rgba(255, 51, 102, 0.15)' }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="relative inline-block px-1 py-0.5"
        >
          <span className="relative z-10 text-tscore-modal">
            {textToRender.substring(pattern.start, pattern.end)}
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: idx * 0.1 + 0.2, duration: 0.3 }}
            className="absolute bottom-0 left-0 right-0 h-px bg-tscore-modal origin-left"
          />
        </motion.span>
      );

      lastIndex = pattern.end;
    });

    // Add remaining text
    if (lastIndex < textToRender.length) {
      parts.push(
        <span key="text-end" className="text-stellar-core">
          {textToRender.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  };

  return (
    <section className="py-12">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center"
      >
        <h2 className="mb-4 font-display text-heading-2 text-stellar-core">
          {locale === 'ko' ? 'AI 텍스트 vs 휴먼화된 텍스트' : 'AI Text vs Humanized Text'}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-stellar-dim">
          {locale === 'ko'
            ? 'AI 패턴을 감지하고 자연스러운 학술 문체로 변환하는 과정을 확인하세요'
            : 'See how AI patterns are detected and transformed into natural academic writing'}
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
          onClick={() => setView('ai')}
          className={`flex items-center gap-2 border px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
            view === 'ai'
              ? 'border-tscore-modal bg-tscore-modal/10 text-tscore-modal'
              : 'border-stellar-faint/20 text-stellar-dim hover:border-stellar-faint/40'
          }`}
        >
          <AlertTriangle className="h-4 w-4" />
          {locale === 'ko' ? 'AI 텍스트' : 'AI Text'}
        </button>
        <button
          onClick={() => setView('humanized')}
          className={`flex items-center gap-2 border px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-300 ${
            view === 'humanized'
              ? 'border-feature-humanize bg-feature-humanize/10 text-feature-humanize'
              : 'border-stellar-faint/20 text-stellar-dim hover:border-stellar-faint/40'
          }`}
        >
          <CheckCircle2 className="h-4 w-4" />
          {locale === 'ko' ? '휴먼화' : 'Humanized'}
        </button>
        <button
          onClick={() => setView(view === 'ai' ? 'humanized' : 'ai')}
          className="flex items-center gap-2 border border-stellar-faint/20 bg-void-elevated px-4 py-3 text-stellar-dim hover:border-stellar-faint/40 hover:text-stellar-core transition-all duration-300"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </motion.div>

      {/* Comparison View */}
      <div className="mx-auto max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="relative overflow-hidden border p-8"
              style={{
                borderColor: view === 'ai' ? 'rgba(255, 51, 102, 0.3)' : 'rgba(255, 136, 68, 0.3)',
                backgroundColor: view === 'ai' ? 'rgba(255, 51, 102, 0.05)' : 'rgba(255, 136, 68, 0.05)',
              }}
            >
              {/* Badge */}
              <div
                className="mb-6 inline-flex items-center gap-2 border px-3 py-1.5"
                style={{
                  borderColor: view === 'ai' ? 'rgba(255, 51, 102, 0.4)' : 'rgba(255, 136, 68, 0.4)',
                  backgroundColor: view === 'ai' ? 'rgba(255, 51, 102, 0.1)' : 'rgba(255, 136, 68, 0.1)',
                }}
              >
                {view === 'ai' ? (
                  <AlertTriangle className="h-4 w-4 text-tscore-modal" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 text-feature-humanize" />
                )}
                <span
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: view === 'ai' ? '#ff3366' : '#ff8844' }}
                >
                  {view === 'ai'
                    ? locale === 'ko'
                      ? 'AI 패턴 감지됨'
                      : 'AI Patterns Detected'
                    : locale === 'ko'
                      ? '자연스러운 학술 문체'
                      : 'Natural Academic Style'}
                </span>
              </div>

              {/* Text Content */}
              <div className="text-body leading-relaxed">
                {renderHighlightedText()}
              </div>

              {/* Statistics */}
              <div className="mt-6 border-t pt-6" style={{ borderColor: view === 'ai' ? 'rgba(255, 51, 102, 0.2)' : 'rgba(255, 136, 68, 0.2)' }}>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div>
                    <div className="mb-1 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                      {locale === 'ko' ? '단어 수' : 'Words'}
                    </div>
                    <div className="font-display text-xl font-bold text-stellar-core">
                      {view === 'ai' ? '97' : '68'}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                      {locale === 'ko' ? 'AI 패턴' : 'AI Patterns'}
                    </div>
                    <div className="font-display text-xl font-bold" style={{ color: view === 'ai' ? '#ff3366' : '#44ffaa' }}>
                      {view === 'ai' ? '5' : '0'}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                      {locale === 'ko' ? '간결성' : 'Conciseness'}
                    </div>
                    <div className="font-display text-xl font-bold text-stellar-core">
                      {view === 'ai' ? '-30%' : '100%'}
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-mono text-micro uppercase tracking-widest text-stellar-faint">
                      {locale === 'ko' ? '인용 보존' : 'Citations'}
                    </div>
                    <div className="font-display text-xl font-bold text-feature-humanize">
                      100%
                    </div>
                  </div>
                </div>
              </div>

              {/* Explanation */}
              {view === 'ai' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 border-t border-tscore-modal/20 pt-6"
                >
                  <p className="text-caption text-stellar-dim">
                    <span className="font-bold text-tscore-modal">
                      {locale === 'ko' ? '감지된 패턴:' : 'Detected Patterns:'}
                    </span>{' '}
                    {locale === 'ko'
                      ? '목적 문구 (aims to), 헤징 과다 (important to note), 필러 문구 (in order to), AI 전문 용어 (state-of-the-art), 연구 클리셰 (further research is needed)'
                      : 'Purpose phrases (aims to), Excessive hedging (important to note), Filler phrases (in order to), AI jargon (state-of-the-art), Research clichés (further research is needed)'}
                  </p>
                </motion.div>
              )}

              {view === 'humanized' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 border-t pt-6"
                  style={{ borderColor: 'rgba(255, 136, 68, 0.2)' }}
                >
                  <p className="text-caption text-stellar-dim">
                    <span className="font-bold text-feature-humanize">
                      {locale === 'ko' ? '개선 사항:' : 'Improvements:'}
                    </span>{' '}
                    {locale === 'ko'
                      ? '직접적인 문장 구조, 헤징 제거, 불필요한 한정어 삭제, 구체적 통계 추가 (d = 0.78, p < .001), 간결한 표현 유지'
                      : 'Direct sentence structure, Removed hedging, Eliminated unnecessary qualifiers, Added specific statistics (d = 0.78, p < .001), Maintained concise expression'}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mx-auto mt-8 max-w-4xl border border-feature-humanize/30 bg-feature-humanize/5 p-6"
      >
        <div className="flex items-start gap-4">
          <span className="text-3xl" role="img" aria-label="writing">
            ✍️
          </span>
          <div className="flex-1">
            <h3 className="mb-2 font-display text-lg text-stellar-core">
              {locale === 'ko' ? '100% 학술적 엄밀성 보존' : '100% Academic Rigor Preserved'}
            </h3>
            <p className="text-caption leading-relaxed text-stellar-dim">
              {locale === 'ko'
                ? '휴먼화 과정에서 모든 인용, 통계, 방법론적 세부사항이 완벽하게 보존됩니다. 패턴만 변환되고 내용은 그대로 유지됩니다.'
                : 'All citations, statistics, and methodological details are perfectly preserved during humanization. Only patterns are transformed, content remains intact.'}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
