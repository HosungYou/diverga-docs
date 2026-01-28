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
          bg: 'bg-gradient-to-br from-red-50 to-red-100/50',
          border: 'border-red-300',
          text: 'text-red-700',
          badgeBg: 'bg-red-500',
          badgeGlow: 'shadow-lg shadow-red-500/50',
          glow: 'shadow-[0_0_30px_rgba(239,68,68,0.4)]',
          indicator: 'bg-red-500 shadow-lg shadow-red-500/50 animate-pulse'
        };
      case 'RECOMMENDED':
        return {
          bg: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
          border: 'border-amber-300',
          text: 'text-amber-700',
          badgeBg: 'bg-amber-500',
          badgeGlow: 'shadow-lg shadow-amber-500/30',
          glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
          indicator: 'bg-amber-500 shadow-lg shadow-amber-500/30'
        };
      case 'OPTIONAL':
        return {
          bg: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
          border: 'border-teal-300',
          text: 'text-teal-700',
          badgeBg: 'bg-teal-500',
          badgeGlow: 'shadow-lg shadow-teal-500/30',
          glow: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
          indicator: 'bg-teal-500 shadow-lg shadow-teal-500/30'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-white to-gray-50',
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
          <div className="w-4 h-4 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '필수' : 'Required'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/30"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '권장' : 'Recommended'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full bg-teal-500 shadow-lg shadow-teal-500/30"></div>
          <span className="text-sm font-semibold text-gray-700">
            {locale === 'ko' ? '선택사항' : 'Optional'}
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Dark gradient timeline connector */}
        <div className="absolute left-[27px] top-8 bottom-8 w-1 bg-gradient-to-b from-gray-900 via-teal-600 to-purple-600 rounded-full shadow-lg"></div>

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
                  w-full text-left relative rounded-3xl border-2 overflow-hidden
                  transition-all duration-500
                  ${hasCheckpoint ? colors.border : 'border-gray-200'}
                  ${hasCheckpoint ? colors.bg : 'bg-gradient-to-br from-white to-gray-50'}
                  ${isExpanded && hasCheckpoint ? colors.glow : 'shadow-md'}
                  hover:shadow-xl hover:scale-[1.02]
                  group backdrop-blur-sm
                `}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stage Header */}
                <div className="relative p-7 flex items-start gap-5">
                  {/* Stage number with checkpoint indicator */}
                  <div className="flex-shrink-0">
                    <div className={`
                      relative w-14 h-14 rounded-2xl flex items-center justify-center
                      font-mono font-bold text-xl
                      ${hasCheckpoint
                        ? `${colors.bg} ${colors.text} ${colors.border} border-2 ${colors.badgeGlow}`
                        : 'bg-gradient-to-br from-teal-100 to-teal-50 text-teal-700 border-2 border-teal-200'}
                      transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                    `}>
                      {index + 1}
                      {hasCheckpoint && (
                        <div className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${colors.indicator}`} />
                      )}
                    </div>
                  </div>

                  {/* Stage content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-teal-100 border border-teal-200">
                        <span className="font-mono text-sm font-bold text-teal-700">
                          {agent?.id || stage.agent}
                        </span>
                      </div>
                      <ChevronRight
                        className={`
                          w-6 h-6 text-gray-400
                          transition-all duration-300 flex-shrink-0
                          ${isExpanded ? 'rotate-90 text-teal-600' : 'group-hover:translate-x-1'}
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
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="relative border-t-2 border-gray-200"
                  >
                    {/* Glass morphism background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/50 backdrop-blur-sm" />

                    <div className="relative p-7 pt-6 space-y-4">
                      {/* Checkpoint header */}
                      <div className={`
                        inline-flex items-center gap-3 px-4 py-2.5 rounded-xl
                        ${colors.bg} ${colors.border} border-2 ${colors.badgeGlow}
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
                      <p className="text-base text-gray-700 leading-relaxed pl-4 border-l-4 border-teal-300">
                        {cpInfo.description[locale]}
                      </p>

                      {/* Checkpoint ID (for technical reference) */}
                      <div className="pt-3 border-t border-gray-200">
                        <code className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
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
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-teal-50 to-purple-50 border-2 border-teal-200
          shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
