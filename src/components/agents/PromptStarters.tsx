'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, ChevronDown, Zap } from 'lucide-react';
import type { PromptStarter } from '@/lib/data/types';

interface PromptStartersProps {
  promptStarters: PromptStarter[];
  locale: 'en' | 'ko';
}

const difficultyColors = {
  beginner: { color: '#6bcb77', label: { en: 'Beginner', ko: '초급' } },
  intermediate: { color: '#ff8844', label: { en: 'Intermediate', ko: '중급' } },
  advanced: { color: '#ff3366', label: { en: 'Advanced', ko: '고급' } },
};

export function PromptStarters({ promptStarters, locale }: PromptStartersProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentLocale, setCurrentLocale] = useState<'en' | 'ko'>(locale);

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // Infer difficulty from prompt complexity
  const getDifficulty = (prompt: string): 'beginner' | 'intermediate' | 'advanced' => {
    const length = prompt.length;
    if (length < 100) return 'beginner';
    if (length < 200) return 'intermediate';
    return 'advanced';
  };

  return (
    <div className="space-y-6">
      {/* Language toggle */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-stellar-core font-display">
          {locale === 'ko' ? '즉시 사용 가능한 프롬프트' : 'Ready-to-Use Prompts'}
        </h3>
        <div className="flex rounded-lg bg-void-surface border border-stellar-faint/20 p-1">
          {(['en', 'ko'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLocale(lang)}
              className={`
                px-3 py-1.5 rounded text-xs font-mono font-bold transition-all duration-200
                ${currentLocale === lang
                  ? 'bg-tscore-creative text-void-deep shadow-glow-sm'
                  : 'text-stellar-faint hover:text-stellar-bright'
                }
              `}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt cards in staggered grid */}
      <div className="space-y-4">
        {promptStarters.map((starter, index) => {
          const difficulty = getDifficulty(starter.prompt[currentLocale]);
          const diffConfig = difficultyColors[difficulty];
          const isExpanded = expandedIndex === index;
          const isCopied = copiedIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: `${diffConfig.color}20` }}
              />

              <div className="relative rounded-xl bg-void-elevated border border-stellar-faint/20 overflow-hidden">
                {/* Header */}
                <div
                  className="px-5 py-4 border-b border-stellar-faint/10"
                  style={{
                    background: `linear-gradient(90deg, ${diffConfig.color}08, transparent)`
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      {/* Difficulty badge */}
                      <div className="flex items-center gap-2">
                        <div
                          className="px-2 py-1 rounded text-xs font-mono font-bold border"
                          style={{
                            backgroundColor: `${diffConfig.color}20`,
                            color: diffConfig.color,
                            borderColor: `${diffConfig.color}40`
                          }}
                        >
                          {diffConfig.label[locale]}
                        </div>
                        <span className="text-xs text-stellar-faint font-mono">
                          #{index + 1}
                        </span>
                      </div>

                      {/* Context hint */}
                      <p className="text-sm text-stellar-dim leading-relaxed">
                        {starter.context[currentLocale]}
                      </p>
                    </div>

                    {/* Copy button */}
                    <motion.button
                      onClick={() => handleCopy(starter.prompt[currentLocale], index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-shrink-0 p-2.5 rounded-lg bg-void-surface border border-stellar-faint/20 hover:border-tscore-creative/50 transition-all group/btn"
                    >
                      <AnimatePresence mode="wait">
                        {isCopied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                          >
                            <Check className="w-4 h-4 text-tscore-creative" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 1 }}
                            exit={{ scale: 0, rotate: 180 }}
                          >
                            <Copy className="w-4 h-4 text-stellar-faint group-hover/btn:text-tscore-creative transition-colors" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>

                {/* Prompt text */}
                <div className="px-5 py-4">
                  <div className="relative">
                    <div
                      className="absolute -left-2 top-0 bottom-0 w-1 rounded-full"
                      style={{ backgroundColor: `${diffConfig.color}60` }}
                    />
                    <pre className="pl-3 font-mono text-sm text-stellar-bright leading-relaxed whitespace-pre-wrap">
                      {starter.prompt[currentLocale]}
                    </pre>
                  </div>
                </div>

                {/* Expandable expected response */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full px-5 py-3 flex items-center justify-between bg-void-surface/50 hover:bg-void-surface transition-colors border-t border-stellar-faint/10"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-tscore-balanced" />
                    <span className="text-xs font-mono text-stellar-faint">
                      {locale === 'ko' ? '예상 응답 보기' : 'Expected Response'}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stellar-faint transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-void-deep border-t border-stellar-faint/10">
                        <p className="text-sm text-stellar-dim leading-relaxed">
                          {starter.expectedResponse[currentLocale]}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
