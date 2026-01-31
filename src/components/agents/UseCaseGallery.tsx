'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Microscope, Briefcase, Heart, BookOpen, ChevronDown } from 'lucide-react';
import type { UseCase } from '@/lib/data/types';

interface UseCaseGalleryProps {
  useCases: UseCase[];
  locale: 'en' | 'ko';
}

const disciplineIcons: Record<string, React.ElementType> = {
  education: GraduationCap,
  psychology: Heart,
  medicine: Microscope,
  business: Briefcase,
  default: BookOpen,
};

const complexityConfig = {
  beginner: {
    color: '#6bcb77',
    label: { en: 'Beginner', ko: '초급' },
    icon: '●',
  },
  intermediate: {
    color: '#ff8844',
    label: { en: 'Intermediate', ko: '중급' },
    icon: '●●',
  },
  advanced: {
    color: '#ff3366',
    label: { en: 'Advanced', ko: '고급' },
    icon: '●●●',
  },
};

export function UseCaseGallery({ useCases, locale }: UseCaseGalleryProps) {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Extract unique disciplines
  const disciplines = Array.from(new Set(useCases.map((uc) => uc.discipline || 'default')));

  // Filter use cases
  const filteredCases = selectedDiscipline
    ? useCases.filter((uc) => (uc.discipline || 'default') === selectedDiscipline)
    : useCases;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-2xl font-bold text-stellar-core font-display">
          {locale === 'ko' ? '실제 사용 사례' : 'Real-World Use Cases'}
        </h3>

        {/* Discipline filter tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedDiscipline(null)}
            className={`
              px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all duration-200
              ${!selectedDiscipline
                ? 'bg-tscore-creative text-void-deep shadow-glow-sm'
                : 'bg-void-surface text-stellar-faint hover:text-stellar-bright border border-stellar-faint/20'
              }
            `}
          >
            {locale === 'ko' ? '전체' : 'All'} ({useCases.length})
          </button>
          {disciplines.map((discipline) => {
            const Icon = disciplineIcons[discipline] || disciplineIcons.default;
            const count = useCases.filter((uc) => (uc.discipline || 'default') === discipline).length;

            return (
              <button
                key={discipline}
                onClick={() => setSelectedDiscipline(discipline)}
                className={`
                  px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all duration-200 flex items-center gap-2
                  ${selectedDiscipline === discipline
                    ? 'bg-tscore-creative text-void-deep shadow-glow-sm'
                    : 'bg-void-surface text-stellar-faint hover:text-stellar-bright border border-stellar-faint/20'
                  }
                `}
              >
                <Icon className="w-3.5 h-3.5" />
                {discipline.charAt(0).toUpperCase() + discipline.slice(1)} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Use case cards in masonry-style grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedDiscipline || 'all'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCases.map((useCase, index) => {
            const complexity = complexityConfig[useCase.complexity];
            const Icon = disciplineIcons[useCase.discipline || 'default'] || disciplineIcons.default;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: `${complexity.color}20` }}
                />

                <div className="relative rounded-2xl bg-void-elevated border border-stellar-faint/20 overflow-hidden h-full flex flex-col">
                  {/* Header stripe with discipline icon */}
                  <div
                    className="px-5 py-4 border-b border-stellar-faint/10 flex items-start justify-between"
                    style={{
                      background: `linear-gradient(135deg, ${complexity.color}08, transparent)`
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-void-surface">
                        <Icon className="w-4 h-4 text-tscore-creative" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stellar-core text-sm leading-tight">
                          {useCase.title[locale]}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Complexity badge */}
                  <div className="px-5 pt-4">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${complexity.color}15`,
                        color: complexity.color,
                        borderColor: `${complexity.color}30`
                      }}
                    >
                      <span>{complexity.icon}</span>
                      <span>{complexity.label[locale]}</span>
                    </div>
                  </div>

                  {/* Scenario */}
                  <div className="px-5 py-4 flex-1">
                    <p className="text-sm text-stellar-dim leading-relaxed">
                      {useCase.scenario[locale]}
                    </p>
                  </div>

                  {/* Expandable outcome */}
                  <div className="border-t border-stellar-faint/10">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="w-full px-5 py-3 flex items-center justify-between bg-void-surface/50 hover:bg-void-surface transition-colors"
                    >
                      <span className="text-xs font-mono text-stellar-faint">
                        {locale === 'ko' ? '결과 보기' : 'View Outcome'}
                      </span>
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
                            <div className="flex items-start gap-2">
                              <div
                                className="w-1 h-full rounded-full flex-shrink-0 mt-1"
                                style={{ backgroundColor: `${complexity.color}60` }}
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <div
                                    className="w-2 h-2 rounded-full animate-glow-pulse"
                                    style={{ backgroundColor: complexity.color }}
                                  />
                                  <span className="text-xs font-mono font-bold" style={{ color: complexity.color }}>
                                    {locale === 'ko' ? '성과' : 'Outcome'}
                                  </span>
                                </div>
                                <p className="text-sm text-stellar-bright leading-relaxed">
                                  {useCase.outcome[locale]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {filteredCases.length === 0 && (
        <div className="text-center py-12">
          <p className="text-stellar-faint">
            {locale === 'ko' ? '해당 분야의 사용 사례가 없습니다.' : 'No use cases found for this discipline.'}
          </p>
        </div>
      )}
    </div>
  );
}
