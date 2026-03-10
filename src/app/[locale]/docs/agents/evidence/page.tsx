'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import { FileSearch, ShieldCheck } from 'lucide-react';

export default function EvidenceAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Category B: Evidence Agents',
      description: 'Systematic evidence gathering, synthesis, and quality appraisal — 2 agents',
      paradigmCoverage: 'Paradigm Coverage',
      paradigmDesc: 'Qualitative (B1 meta-synthesis), Quantitative (B2 quality assessment). Effect size extraction is now handled by C5 (Meta-Analysis Master). Document processing is now handled by I3 (RAG Builder).',
      agents: [
        {
          id: 'B1',
          name: 'Literature Scout',
          icon: FileSearch,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: 'PRISMA workflows, qualitative search',
          capabilities: [
            'Comprehensive support for multiple review methodologies',
            'PRISMA 2020 integration for systematic reviews',
            'Meta-synthesis for qualitative literature',
            'Search strategy optimization',
          ],
          triggers: {
            en: '"literature review", "systematic review", "PRISMA"',
            ko: '"문헌고찰", "체계적 문헌고찰", "문헌 검색"',
          },
          checkpoints: [],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'B2',
          name: 'Evidence Quality Appraiser',
          icon: ShieldCheck,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: 'Risk of Bias (RoB), GRADE assessment',
          capabilities: [
            'Enhanced VS 3-Phase methodology',
            'Context-adaptive quality assessment',
            'GRADE evidence grading',
            'Risk of Bias (RoB) tools',
            'Newcastle-Ottawa Scale',
          ],
          triggers: {
            en: '"quality appraisal", "risk of bias", "RoB", "GRADE"',
            ko: '"품질 평가", "비뚤림 평가", "편향 위험"',
          },
          checkpoints: [],
          vsMode: 'Enhanced VS 3-Phase',
        },
      ],
    },
    ko: {
      title: 'Category B: 근거 에이전트',
      description: '체계적 근거 수집, 종합, 품질 평가 — 2개 에이전트',
      paradigmCoverage: '패러다임 범위',
      paradigmDesc: '질적 (B1 메타통합), 양적 (B2 품질 평가). 효과크기 추출은 이제 C5 (메타분석 마스터)에서 처리합니다. 문서 처리는 이제 I3 (RAG 빌더)에서 처리합니다.',
      agents: [
        {
          id: 'B1',
          name: '문헌 탐색자',
          icon: FileSearch,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: 'PRISMA 워크플로우, 질적 검색',
          capabilities: [
            '다양한 문헌고찰 방법론 지원',
            '체계적 문헌고찰을 위한 PRISMA 2020 통합',
            '질적 문헌의 메타통합',
            '검색 전략 최적화',
          ],
          triggers: {
            en: '"literature review", "systematic review", "PRISMA"',
            ko: '"문헌고찰", "체계적 문헌고찰", "문헌 검색"',
          },
          checkpoints: [],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'B2',
          name: '근거 품질 평가자',
          icon: ShieldCheck,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: '비뚤림 위험도(RoB), GRADE 평가',
          capabilities: [
            'VS 3단계 강화 방법론',
            '맥락 적응형 품질 평가',
            'GRADE 근거 등급화',
            '비뚤림 위험도(RoB) 도구',
            'Newcastle-Ottawa 척도',
          ],
          triggers: {
            en: '"quality appraisal", "risk of bias", "RoB", "GRADE"',
            ko: '"품질 평가", "비뚤림 평가", "편향 위험"',
          },
          checkpoints: [],
          vsMode: 'VS 3단계 강화',
        },
      ],
    },
  };

  const t = content[locale];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'HIGH':
        return '#ff6b6b';
      case 'MEDIUM':
        return '#ffd93d';
      case 'LOW':
        return '#6bcf7f';
      default:
        return '#44ffaa';
    }
  };

  const categoryColor = '#27ae60'; // Green for Category B

  return (
    <div className="min-h-screen bg-void-dark text-stellar-bright">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <DocsBreadcrumb locale={locale} />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4" style={{ color: categoryColor }}>
            {t.title}
          </h1>
          <p className="text-xl text-stellar-dim">{t.description}</p>
        </motion.div>

        {/* Paradigm Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-lg font-semibold mb-2" style={{ color: categoryColor }}>
            {t.paradigmCoverage}
          </h2>
          <p className="text-stellar-dim">{t.paradigmDesc}</p>
        </motion.div>

        {/* Agents */}
        <div className="space-y-8">
          {t.agents.map((agent, index) => {
            const Icon = agent.icon;
            const tierColor = getTierColor(agent.tier);

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-6 hover:border-stellar-faint/20 transition-colors"
              >
                {/* Agent Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center border"
                    style={{
                      backgroundColor: `${categoryColor}15`,
                      borderColor: `${categoryColor}30`,
                    }}
                  >
                    <Icon className="h-6 w-6" style={{ color: categoryColor }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-stellar-core">
                        {agent.id} - {agent.name}
                      </h3>
                      {'isNew' in agent && (agent as any).isNew && (
                        <span className="px-2 py-0.5 text-xs font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-stellar-dim mb-3">{agent.purpose}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-stellar-faint">Tier:</span>
                        <span
                          className="px-2 py-0.5 font-mono text-xs border"
                          style={{
                            color: tierColor,
                            borderColor: `${tierColor}40`,
                            backgroundColor: `${tierColor}10`,
                          }}
                        >
                          {agent.tier}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-stellar-faint">Model:</span>
                        <span className="text-stellar-dim font-mono">{agent.model}</span>
                      </div>
                      {agent.vsMode && (
                        <div className="flex items-center gap-2">
                          <span className="text-stellar-faint">VS Mode:</span>
                          <span className="text-[#44ffaa] font-mono text-xs">
                            {agent.vsMode}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-stellar-bright mb-2">
                    {locale === 'en' ? 'Capabilities' : '기능'}
                  </h4>
                  <ul className="space-y-1">
                    {agent.capabilities.map((capability, i) => (
                      <li key={i} className="text-sm text-stellar-dim flex items-start gap-2">
                        <span style={{ color: categoryColor }}>▸</span>
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Triggers */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-stellar-bright mb-2">
                    {locale === 'en' ? 'Auto-Trigger Keywords' : '자동 트리거 키워드'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <span className="text-xs text-stellar-faint uppercase mb-1 block">
                        English
                      </span>
                      <code className="text-xs bg-void-surface px-2 py-1 text-[#44ffaa] font-mono">
                        {agent.triggers.en}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-stellar-faint uppercase mb-1 block">
                        한국어
                      </span>
                      <code className="text-xs bg-void-surface px-2 py-1 text-[#44ffaa] font-mono">
                        {agent.triggers.ko}
                      </code>
                    </div>
                  </div>
                </div>

                {/* Checkpoints */}
                {agent.checkpoints && agent.checkpoints.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-stellar-bright mb-2">
                      {locale === 'en' ? 'Human Checkpoints' : '인간 체크포인트'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.checkpoints.map((checkpoint, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-void-surface border border-stellar-faint/20 text-stellar-dim font-mono"
                        >
                          {checkpoint}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 p-6 bg-void-surface border border-stellar-faint/10"
        >
          <p className="text-sm text-stellar-faint">
            {locale === 'en'
              ? 'Category B agents (2 agents) use Enhanced VS 3-Phase methodology to avoid automatic tool application and deliver research-specific evaluation strategies. Effect size extraction (formerly B3) is now in C5 (Meta-Analysis Master). Document processing (formerly B5) is now in I3 (RAG Builder). Research monitoring (formerly B4) has been removed.'
              : 'Category B 에이전트(2개)는 VS 3단계 강화 방법론을 사용하여 자동 도구 적용을 피하고 연구별 평가 전략을 제공합니다. 효과크기 추출(기존 B3)은 이제 C5(메타분석 마스터)에, 문서 처리(기존 B5)는 I3(RAG 빌더)에 통합되었습니다. 연구 모니터링(기존 B4)은 삭제되었습니다.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
