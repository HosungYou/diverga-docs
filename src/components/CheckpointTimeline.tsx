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
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-700',
          badgeBg: 'bg-red-500',
          badgeGlow: '',
          glow: '',
          indicator: 'bg-red-500'
        };
      case 'RECOMMENDED':
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-700',
          badgeBg: 'bg-amber-500',
          badgeGlow: '',
          glow: '',
          indicator: 'bg-amber-500'
        };
      case 'OPTIONAL':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-200',
          text: 'text-teal-700',
          badgeBg: 'bg-teal-500',
          badgeGlow: '',
          glow: '',
          indicator: 'bg-teal-500'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-200',
          text: 'text-gray-700',
          badgeBg: 'bg-gray-500',
          badgeGlow: '',
          glow: '',
          indicator: 'bg-gray-400'
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
        className="mb-10 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          {locale === 'ko' ? '워크플로우 타임라인' : 'Workflow Timeline'}
        </h2>
        <p className="text-base text-gray-600">
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
        className="flex items-center justify-center gap-8 mb-12 flex-wrap"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '필수' : 'Required'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full bg-amber-500"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '권장' : 'Recommended'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full bg-teal-500"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '선택사항' : 'Optional'}
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Clean timeline connector */}
        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gray-200"></div>

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
                  w-full text-left relative rounded-xl border overflow-hidden
                  transition-all duration-200
                  ${hasCheckpoint ? colors.border : 'border-gray-200'}
                  ${hasCheckpoint ? colors.bg : 'bg-white'}
                  shadow-sm hover:shadow-md
                  group
                `}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Stage Header */}
                <div className="relative p-6 flex items-start gap-5">
                  {/* Stage number with checkpoint indicator */}
                  <div className="flex-shrink-0">
                    <div className={`
                      relative w-12 h-12 rounded-lg flex items-center justify-center
                      font-mono font-bold text-lg
                      ${hasCheckpoint
                        ? `${colors.bg} ${colors.text} ${colors.border} border`
                        : 'bg-gray-50 text-gray-700 border border-gray-200'}
                      transition-all duration-200
                    `}>
                      {index + 1}
                      {hasCheckpoint && (
                        <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full ${colors.indicator}`} />
                      )}
                    </div>
                  </div>

                  {/* Stage content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-50 border border-gray-200">
                        <span className="font-mono text-sm font-bold text-gray-700">
                          {agent?.id || stage.agent}
                        </span>
                      </div>
                      <ChevronRight
                        className={`
                          w-5 h-5 text-gray-400
                          transition-all duration-200 flex-shrink-0
                          ${isExpanded ? 'rotate-90 text-gray-600' : 'group-hover:translate-x-1'}
                        `}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {agent?.name[locale] || 'Unknown Agent'}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
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
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="relative border-t border-gray-200 bg-gray-50"
                  >
                    <div className="relative p-6 pt-5 space-y-4">
                      {/* Checkpoint header */}
                      <div className={`
                        inline-flex items-center gap-3 px-4 py-2 rounded-lg
                        ${colors.bg} ${colors.border} border
                      `}>
                        <div className={`w-2 h-2 rounded-full ${colors.indicator}`} />
                        <span className={`text-sm font-bold font-mono uppercase ${colors.text} tracking-wide`}>
                          {cpInfo.level} {locale === 'ko' ? '체크포인트' : 'Checkpoint'}
                        </span>
                      </div>

                      {/* Checkpoint name */}
                      <h4 className="font-bold text-xl text-gray-900">
                        {cpInfo.name[locale]}
                      </h4>

                      {/* Checkpoint description */}
                      <p className="text-base text-gray-700 leading-relaxed pl-4 border-l-4 border-gray-300">
                        {cpInfo.description[locale]}
                      </p>

                      {/* Checkpoint ID (for technical reference) */}
                      <div className="pt-3 border-t border-gray-200">
                        <code className="text-xs font-mono text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
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
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-gray-200
          shadow-sm transition-all duration-200">
          <CheckCircle2 className="w-5 h-5 text-teal-600" />
          <span className="text-base font-bold text-gray-800">
            {locale === 'ko'
              ? `총 ${stages.length}단계 워크플로우`
              : `${stages.length} stage workflow`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
