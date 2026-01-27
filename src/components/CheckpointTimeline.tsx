"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Circle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getAgentById } from '@/lib/data/agents';
import { checkpointInfo } from '@/lib/data/workflows';
import type { WorkflowStage } from '@/lib/data/types';

interface CheckpointTimelineProps {
  stages: WorkflowStage[];
  locale: 'en' | 'ko';
}

export default function CheckpointTimeline({ stages, locale }: CheckpointTimelineProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getCheckpointLevel = (checkpointId?: string) => {
    if (!checkpointId) return null;
    return checkpointInfo[checkpointId as keyof typeof checkpointInfo]?.level || null;
  };

  const getCheckpointColor = (level: string | null) => {
    switch (level) {
      case 'REQUIRED':
        return {
          bg: 'bg-red-500/10',
          border: 'border-red-500',
          text: 'text-red-600 dark:text-red-400',
          glow: 'shadow-[0_0_20px_rgba(239,68,68,0.3)]'
        };
      case 'RECOMMENDED':
        return {
          bg: 'bg-amber-500/10',
          border: 'border-amber-500',
          text: 'text-amber-600 dark:text-amber-400',
          glow: 'shadow-[0_0_20px_rgba(245,158,11,0.3)]'
        };
      case 'OPTIONAL':
        return {
          bg: 'bg-teal-500/10',
          border: 'border-teal-500',
          text: 'text-teal-600 dark:text-teal-400',
          glow: 'shadow-[0_0_20px_rgba(20,184,166,0.3)]'
        };
      default:
        return {
          bg: 'bg-diverga-500/5',
          border: 'border-diverga-300',
          text: 'text-diverga-600 dark:text-diverga-400',
          glow: ''
        };
    }
  };

  const getCheckpointIcon = (level: string | null) => {
    switch (level) {
      case 'REQUIRED':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'RECOMMENDED':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative">
      {/* Timeline Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h2 className="text-h3 font-bold text-[var(--foreground)] mb-2">
          {locale === 'ko' ? '워크플로우 타임라인' : 'Workflow Timeline'}
        </h2>
        <p className="text-sm text-[var(--muted-foreground)]">
          {locale === 'ko'
            ? '각 단계를 클릭하여 체크포인트 세부 정보 확인'
            : 'Click each stage to view checkpoint details'}
        </p>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center gap-6 mb-8 flex-wrap"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span className="text-xs font-medium text-[var(--muted-foreground)]">
            {locale === 'ko' ? '필수' : 'Required'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-500"></div>
          <span className="text-xs font-medium text-[var(--muted-foreground)]">
            {locale === 'ko' ? '권장' : 'Recommended'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <span className="text-xs font-medium text-[var(--muted-foreground)]">
            {locale === 'ko' ? '선택사항' : 'Optional'}
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-4">
        {/* Vertical connecting line */}
        <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-diverga-300 via-teal-300 to-gold-300 opacity-30"></div>

        {stages.map((stage, index) => {
          const agent = getAgentById(stage.agent);
          const checkpointLevel = getCheckpointLevel(stage.checkpoint);
          const colors = getCheckpointColor(checkpointLevel);
          const isExpanded = expandedIndex === index;
          const hasCheckpoint = !!stage.checkpoint;
          const cpInfo = stage.checkpoint
            ? checkpointInfo[stage.checkpoint as keyof typeof checkpointInfo]
            : null;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="relative"
            >
              <motion.button
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className={`
                  w-full text-left relative rounded-2xl border-2
                  transition-all duration-300
                  ${hasCheckpoint ? colors.border : 'border-[var(--border)]'}
                  ${hasCheckpoint ? colors.bg : 'bg-[var(--card)]'}
                  ${isExpanded && hasCheckpoint ? colors.glow : ''}
                  hover:shadow-lg
                  group
                `}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Stage Header */}
                <div className="p-5 flex items-start gap-4">
                  {/* Stage number with checkpoint indicator */}
                  <div className="flex-shrink-0">
                    <div className={`
                      relative w-12 h-12 rounded-xl flex items-center justify-center
                      font-mono font-bold text-lg
                      ${hasCheckpoint
                        ? `${colors.bg} ${colors.text} ${colors.border} border-2`
                        : 'bg-diverga-100 dark:bg-diverga-900 text-diverga-700 dark:text-diverga-300'}
                      transition-transform group-hover:scale-110
                    `}>
                      {index + 1}
                      {hasCheckpoint && (
                        <div className={`absolute -top-1 -right-1 ${colors.text}`}>
                          {getCheckpointIcon(checkpointLevel)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Stage content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="font-mono text-sm font-semibold text-diverga-600 dark:text-diverga-400">
                        {agent?.id || stage.agent}
                      </div>
                      <ChevronRight
                        className={`
                          w-5 h-5 text-[var(--muted-foreground)]
                          transition-transform flex-shrink-0
                          ${isExpanded ? 'rotate-90' : ''}
                        `}
                      />
                    </div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1 text-base">
                      {agent?.name[locale] || 'Unknown Agent'}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                      {stage.description[locale]}
                    </p>
                  </div>
                </div>

                {/* Checkpoint details (expanded) */}
                {isExpanded && hasCheckpoint && cpInfo && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-current/10"
                  >
                    <div className="p-5 pt-4 space-y-3">
                      {/* Checkpoint header */}
                      <div className={`
                        inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                        ${colors.bg} ${colors.border} border
                      `}>
                        {getCheckpointIcon(checkpointLevel)}
                        <span className={`text-xs font-bold font-mono uppercase ${colors.text}`}>
                          {cpInfo.level} {locale === 'ko' ? '체크포인트' : 'Checkpoint'}
                        </span>
                      </div>

                      {/* Checkpoint name */}
                      <h4 className="font-semibold text-[var(--foreground)]">
                        {cpInfo.name[locale]}
                      </h4>

                      {/* Checkpoint description */}
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {cpInfo.description[locale]}
                      </p>

                      {/* Checkpoint ID (for technical reference) */}
                      <div className="pt-2 border-t border-current/5">
                        <code className="text-xs font-mono text-[var(--muted-foreground)]">
                          {stage.checkpoint}
                        </code>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 * stages.length }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-diverga-50 dark:bg-diverga-950 border border-diverga-200 dark:border-diverga-800">
          <CheckCircle2 className="w-4 h-4 text-diverga-600 dark:text-diverga-400" />
          <span className="text-sm font-medium text-diverga-700 dark:text-diverga-300">
            {locale === 'ko'
              ? `총 ${stages.length}단계 워크플로우`
              : `${stages.length} stage workflow`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
