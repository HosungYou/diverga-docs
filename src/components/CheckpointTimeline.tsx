"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertTriangle, Circle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { getAgentById } from '@/lib/data/agents';
import { checkpointInfo } from '@/lib/data/workflows';
import type { WorkflowStage } from '@/lib/data/types';

interface CheckpointTimelineProps {
  stages: WorkflowStage[];
  locale: 'en' | 'ko';
}

// Extended checkpoint info with orchestrator rules
const extendedCheckpointInfo: Record<string, {
  orchestratorRule: { en: string; ko: string };
  humanTasks: { en: string; ko: string }[];
  exampleScenario?: { en: string; ko: string };
  warningOnSkip?: { en: string; ko: string };
}> = {
  CP_RESEARCH_DIRECTION: {
    orchestratorRule: {
      en: 'System must halt execution and wait for explicit human confirmation',
      ko: '시스템이 실행을 중지하고 명시적 인간 확인을 기다려야 함'
    },
    humanTasks: [
      { en: 'Verify research question clarity', ko: '연구 질문의 명확성 검증' },
      { en: 'Confirm scope is appropriate', ko: '범위의 적절성 확인' },
      { en: 'Approve theoretical direction', ko: '이론적 방향 승인' }
    ],
    exampleScenario: {
      en: 'Before A2 (Theoretical Framework Architect) proceeds, researcher must confirm which theoretical direction to pursue from the presented alternatives.',
      ko: 'A2(이론적 프레임워크 설계자)가 진행하기 전, 연구자는 제시된 대안 중 어떤 이론적 방향을 추구할지 확인해야 합니다.'
    }
  },
  CP_THEORY_SELECTION: {
    orchestratorRule: {
      en: 'Critical decision point requiring human approval of theoretical framework',
      ko: '이론적 프레임워크에 대한 인간 승인이 필요한 중요 결정 지점'
    },
    humanTasks: [
      { en: 'Review T-Score implications', ko: 'T-Score 함의 검토' },
      { en: 'Assess theoretical fit', ko: '이론적 적합성 평가' },
      { en: 'Consider alternative frameworks', ko: '대안 프레임워크 고려' }
    ],
    exampleScenario: {
      en: 'Researcher selects between TAM (T-0.92) and Actor-Network Theory (T-0.28) based on research goals and differentiation needs.',
      ko: '연구자는 연구 목표와 차별화 필요성에 따라 TAM(T-0.92)과 행위자-네트워크 이론(T-0.28) 중에서 선택합니다.'
    }
  },
  CP_PARADIGM_SELECTION: {
    orchestratorRule: {
      en: 'This determines which agent pathway (C1, C2, or C3) the workflow follows',
      ko: '이것은 워크플로우가 따르는 에이전트 경로(C1, C2 또는 C3)를 결정합니다'
    },
    humanTasks: [
      { en: 'Evaluate research question fit', ko: '연구 질문 적합성 평가' },
      { en: 'Consider available resources', ko: '가용 자원 고려' },
      { en: 'Review ontological assumptions', ko: '존재론적 가정 검토' }
    ],
    exampleScenario: {
      en: 'Based on A5 (Paradigm Advisor) recommendations, researcher selects the methodological paradigm that aligns with their worldview and research goals.',
      ko: 'A5(패러다임 자문자) 권장사항에 기반하여, 연구자는 자신의 세계관과 연구 목표에 맞는 방법론적 패러다임을 선택합니다.'
    }
  },
  CP_METHODOLOGY_APPROVAL: {
    orchestratorRule: {
      en: 'Final verification before data collection begins',
      ko: '데이터 수집 시작 전 최종 확인'
    },
    humanTasks: [
      { en: 'Verify research design completeness', ko: '연구 설계 완전성 확인' },
      { en: 'Confirm ethical approval status', ko: '윤리 승인 상태 확인' },
      { en: 'Review instrument validity', ko: '도구 타당성 검토' }
    ]
  },
  CP_ANALYSIS_PLAN: {
    orchestratorRule: {
      en: 'Skip allowed with warning: "Analysis proceeded without explicit review"',
      ko: '경고와 함께 건너뛰기 허용: "명시적 검토 없이 분석 진행됨"'
    },
    humanTasks: [
      { en: 'Verify statistical approach appropriateness', ko: '통계적 접근법 적절성 검증' },
      { en: 'Review sample size justification', ko: '표본 크기 정당성 검토' }
    ],
    warningOnSkip: {
      en: 'Proceeding without review may affect analysis validity',
      ko: '검토 없이 진행하면 분석 타당성에 영향을 줄 수 있습니다'
    }
  },
  CP_INTEGRATION_STRATEGY: {
    orchestratorRule: {
      en: 'Recommended pause for mixed methods integration review',
      ko: '혼합방법 통합 검토를 위해 일시 정지 권장'
    },
    humanTasks: [
      { en: 'Review joint display design', ko: '공동 디스플레이 설계 검토' },
      { en: 'Verify integration coherence', ko: '통합 일관성 확인' }
    ]
  },
  CP_META_GATE: {
    orchestratorRule: {
      en: 'Multi-gate validation required before proceeding to synthesis',
      ko: '합성 진행 전 다중 게이트 검증 필요'
    },
    humanTasks: [
      { en: 'Verify data completeness', ko: '데이터 완전성 확인' },
      { en: 'Check effect size accuracy', ko: '효과크기 정확도 확인' },
      { en: 'Review heterogeneity assessment', ko: '이질성 평가 검토' }
    ]
  },
  CP_VISUALIZATION_PREFERENCE: {
    orchestratorRule: {
      en: 'Optional configuration for visualization output style',
      ko: '시각화 출력 스타일에 대한 선택적 구성'
    },
    humanTasks: [
      { en: 'Select visualization format', ko: '시각화 형식 선택' },
      { en: 'Configure style preferences', ko: '스타일 기본 설정 구성' }
    ]
  }
};

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
          bg: 'bg-void-surface',
          border: 'border-checkpoint-required/40',
          text: 'text-checkpoint-required',
          badgeBg: 'bg-checkpoint-required',
          indicator: 'bg-checkpoint-required',
          glow: 'shadow-[0_0_10px_rgba(255,51,102,0.3)]'
        };
      case 'RECOMMENDED':
        return {
          bg: 'bg-void-surface',
          border: 'border-checkpoint-recommended/40',
          text: 'text-checkpoint-recommended',
          badgeBg: 'bg-checkpoint-recommended',
          indicator: 'bg-checkpoint-recommended',
          glow: 'shadow-[0_0_10px_rgba(255,136,68,0.3)]'
        };
      case 'OPTIONAL':
        return {
          bg: 'bg-void-surface',
          border: 'border-checkpoint-optional/40',
          text: 'text-checkpoint-optional',
          badgeBg: 'bg-checkpoint-optional',
          indicator: 'bg-checkpoint-optional',
          glow: 'shadow-[0_0_10px_rgba(255,204,34,0.3)]'
        };
      default:
        return {
          bg: 'bg-void-elevated',
          border: 'border-stellar-faint/20',
          text: 'text-stellar-dim',
          badgeBg: 'bg-stellar-faint',
          indicator: 'bg-stellar-faint',
          glow: ''
        };
    }
  };

  const getCheckpointIcon = (level: string | null) => {
    switch (level) {
      case 'REQUIRED':
        return <span className="text-sm">🔴</span>;
      case 'RECOMMENDED':
        return <span className="text-sm">🟠</span>;
      case 'OPTIONAL':
        return <span className="text-sm">🟡</span>;
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
        <h2 className="void-heading-2 text-stellar-core mb-3">
          {locale === 'ko' ? '워크플로우 타임라인' : 'Workflow Timeline'}
        </h2>
        <p className="text-base text-stellar-dim">
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
          <div className="w-3 h-3 rounded-full bg-checkpoint-required"></div>
          <span className="text-sm font-medium text-stellar-dim">
            {locale === 'ko' ? '필수' : 'Required'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-checkpoint-recommended"></div>
          <span className="text-sm font-medium text-stellar-dim">
            {locale === 'ko' ? '권장' : 'Recommended'}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-checkpoint-optional"></div>
          <span className="text-sm font-medium text-stellar-dim">
            {locale === 'ko' ? '선택사항' : 'Optional'}
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Timeline connector line */}
        <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-stellar-faint/20"></div>

        {stages.map((stage, index) => {
          const agent = getAgentById(stage.agent);
          const checkpointLevel = getCheckpointLevel(stage.checkpoint);
          const colors = getCheckpointColor(checkpointLevel);
          const isExpanded = expandedIndex === index;
          const hasCheckpoint = !!stage.checkpoint;
          const cpInfo = stage.checkpoint
            ? checkpointInfo[stage.checkpoint as keyof typeof checkpointInfo]
            : null;
          const extCpInfo = stage.checkpoint
            ? extendedCheckpointInfo[stage.checkpoint]
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
                  ${hasCheckpoint ? colors.border : 'border-stellar-faint/20'}
                  ${hasCheckpoint ? colors.bg : 'bg-void-elevated'}
                  ${hasCheckpoint && isExpanded ? colors.glow : ''}
                  hover:border-stellar-faint/40
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
                        : 'bg-void-surface text-stellar-dim border border-stellar-faint/20'}
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
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-void-deep border border-stellar-faint/20">
                        <span className="font-mono text-sm font-bold text-stellar-bright">
                          {agent?.id || stage.agent}
                        </span>
                      </div>
                      <ChevronRight
                        className={`
                          w-5 h-5 text-stellar-faint
                          transition-all duration-200 flex-shrink-0
                          ${isExpanded ? 'rotate-90 text-stellar-dim' : 'group-hover:translate-x-1'}
                        `}
                      />
                    </div>
                    <h3 className="font-bold text-stellar-core mb-2 text-lg">
                      {agent?.name[locale] || 'Unknown Agent'}
                    </h3>
                    <p className="text-base text-stellar-dim leading-relaxed">
                      {stage.description[locale]}
                    </p>
                  </div>
                </div>

                {/* Checkpoint details (expanded) */}
                <AnimatePresence>
                  {isExpanded && hasCheckpoint && cpInfo && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="border-t border-stellar-faint/20 bg-void-surface"
                    >
                      <div className="p-6 space-y-5">
                        {/* Checkpoint level badge */}
                        <div className={`
                          inline-flex items-center gap-3 px-4 py-2 rounded-lg border
                          ${colors.bg} ${colors.border}
                        `}>
                          <div className={`w-2 h-2 rounded-full ${colors.indicator}`} />
                          <span className={`text-sm font-bold font-mono uppercase tracking-wide ${colors.text}`}>
                            {cpInfo.level} {locale === 'ko' ? '체크포인트' : 'Checkpoint'}
                          </span>
                        </div>

                        {/* Checkpoint name */}
                        <h4 className="font-bold text-xl text-stellar-core">
                          {cpInfo.name[locale]}
                        </h4>

                        {/* Orchestrator rule */}
                        {extCpInfo?.orchestratorRule && (
                          <div className="p-3 bg-void-elevated rounded-lg border border-stellar-faint/10">
                            <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
                              Orchestrator Rule
                            </span>
                            <p className="mt-1 text-sm text-stellar-dim">
                              {extCpInfo.orchestratorRule[locale]}
                            </p>
                          </div>
                        )}

                        {/* Human tasks checklist */}
                        {extCpInfo?.humanTasks && (
                          <div>
                            <span className="font-mono text-micro text-stellar-faint uppercase tracking-wider">
                              {locale === 'ko' ? '확인 사항' : 'Review Checklist'}
                            </span>
                            <ul className="mt-2 space-y-2">
                              {extCpInfo.humanTasks.map((task, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-tscore-creative flex-shrink-0" />
                                  {task[locale]}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Example scenario */}
                        {extCpInfo?.exampleScenario && (
                          <div className="p-4 bg-void-elevated/50 rounded-lg border-l-2 border-tscore-creative">
                            <span className="font-mono text-micro text-tscore-creative uppercase tracking-wider">
                              {locale === 'ko' ? '예시 시나리오' : 'Example Scenario'}
                            </span>
                            <p className="mt-2 text-sm text-stellar-dim leading-relaxed">
                              {extCpInfo.exampleScenario[locale]}
                            </p>
                          </div>
                        )}

                        {/* Warning on skip (for RECOMMENDED) */}
                        {extCpInfo?.warningOnSkip && (
                          <div className="p-3 bg-checkpoint-recommended/10 rounded-lg border border-checkpoint-recommended/30">
                            <span className="font-mono text-micro text-checkpoint-recommended uppercase tracking-wider">
                              {locale === 'ko' ? '건너뛰기 경고' : 'Skip Warning'}
                            </span>
                            <p className="mt-1 text-sm text-checkpoint-recommended">
                              {extCpInfo.warningOnSkip[locale]}
                            </p>
                          </div>
                        )}

                        {/* Checkpoint ID */}
                        <div className="pt-3 border-t border-stellar-faint/10">
                          <code className="text-xs font-mono text-stellar-faint bg-void-elevated px-2 py-1 rounded">
                            {stage.checkpoint}
                          </code>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-void-elevated border border-stellar-faint/20
          transition-all duration-200">
          <CheckCircle2 className="w-5 h-5 text-tscore-creative" />
          <span className="text-base font-bold text-stellar-core">
            {locale === 'ko'
              ? `총 ${stages.length}단계 워크플로우`
              : `${stages.length} stage workflow`}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
