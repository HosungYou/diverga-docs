'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import { FileSearch, ShieldCheck, Calculator, Radar, FileScan } from 'lucide-react';

export default function EvidenceAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Category B: Evidence Agents',
      description: 'Systematic evidence gathering, synthesis, quality appraisal, and parallel document processing',
      paradigmCoverage: 'Paradigm Coverage',
      paradigmDesc: 'Quantitative (B3), Qualitative (B1 meta-synthesis), Mixed (all), Document Processing (B5)',
      agents: [
        {
          id: 'B1',
          name: 'Literature Review Strategist',
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
        {
          id: 'B3',
          name: 'Effect Size Extractor',
          icon: Calculator,
          tier: 'LOW',
          model: 'Haiku',
          purpose: 'Calculate/convert effect sizes',
          capabilities: [
            'Enhanced VS 3-Phase for optimal effect size strategy',
            "Cohen's d calculation and conversion",
            "Hedges' g standardization",
            'Correlation coefficient extraction',
            'Effect size conversion algorithms',
          ],
          triggers: {
            en: '"effect size", "Cohen\'s d", "Hedges\' g", "효과크기"',
            ko: '"효과크기", "효과 크기 추출"',
          },
          checkpoints: [],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'B4',
          name: 'Research Radar',
          icon: Radar,
          tier: 'LOW',
          model: 'Haiku',
          purpose: 'Monitor new publications, trend alerts',
          capabilities: [
            'Enhanced VS 3-Phase for differentiated trend analysis',
            'Strategic research monitoring',
            'Publication alerts and notifications',
            'Emerging topic detection',
            'Research trend forecasting',
          ],
          triggers: {
            en: '"latest research", "trends", "new publications", "research developments"',
            ko: '"연구 동향", "트렌드", "최신 연구"',
          },
          checkpoints: [],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'B5',
          name: 'Parallel Document Processor',
          icon: FileScan,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'High-throughput PDF/document reading with distributed workload',
          capabilities: [
            'Batch PDF processing with parallel workers',
            'Distributed workload handling',
            'Prevents memory/context overflow errors',
            'Systematic review data extraction',
            'Large document collection management',
          ],
          triggers: {
            en: '"batch PDF", "parallel reading", "multiple documents", "large files"',
            ko: '"PDF 일괄 처리", "병렬 처리", "대량 문서"',
          },
          checkpoints: [],
          isNew: true,
        },
      ],
    },
    ko: {
      title: 'Category B: 근거 에이전트',
      description: '체계적 근거 수집, 종합, 품질 평가 및 병렬 문서 처리',
      paradigmCoverage: '패러다임 범위',
      paradigmDesc: '양적 (B3), 질적 (B1 메타통합), 혼합 (전체), 문서 처리 (B5)',
      agents: [
        {
          id: 'B1',
          name: '문헌고찰 전략가',
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
        {
          id: 'B3',
          name: '효과크기 추출기',
          icon: Calculator,
          tier: 'LOW',
          model: 'Haiku',
          purpose: '효과크기 계산/변환',
          capabilities: [
            '최적 효과크기 전략을 위한 VS 3단계 강화',
            "Cohen's d 계산 및 변환",
            "Hedges' g 표준화",
            '상관계수 추출',
            '효과크기 변환 알고리즘',
          ],
          triggers: {
            en: '"effect size", "Cohen\'s d", "Hedges\' g"',
            ko: '"효과크기", "효과 크기 추출"',
          },
          checkpoints: [],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'B4',
          name: '연구 레이더',
          icon: Radar,
          tier: 'LOW',
          model: 'Haiku',
          purpose: '신규 출판물 모니터링, 동향 알림',
          capabilities: [
            '차별화된 트렌드 분석을 위한 VS 3단계 강화',
            '전략적 연구 모니터링',
            '출판 알림 및 통지',
            '신흥 주제 탐지',
            '연구 동향 예측',
          ],
          triggers: {
            en: '"latest research", "trends", "new publications"',
            ko: '"연구 동향", "트렌드", "최신 연구"',
          },
          checkpoints: [],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'B5',
          name: '병렬 문서 처리기',
          icon: FileScan,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '분산 워크로드를 통한 고처리량 PDF/문서 읽기',
          capabilities: [
            '병렬 워커를 통한 배치 PDF 처리',
            '분산 워크로드 처리',
            '메모리/컨텍스트 오버플로 오류 방지',
            '체계적 문헌고찰 데이터 추출',
            '대용량 문서 컬렉션 관리',
          ],
          triggers: {
            en: '"batch PDF", "parallel reading", "multiple documents"',
            ko: '"PDF 일괄 처리", "병렬 처리", "대량 문서"',
          },
          checkpoints: [],
          isNew: true,
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
                      {agent.isNew && (
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
              ? 'Category B agents use Enhanced VS 3-Phase methodology to avoid automatic tool application and deliver research-specific evaluation strategies. All agents support auto-trigger via keyword detection in both English and Korean.'
              : 'Category B 에이전트는 VS 3단계 강화 방법론을 사용하여 자동 도구 적용을 피하고 연구별 평가 전략을 제공합니다. 모든 에이전트는 영어와 한국어 키워드 감지를 통한 자동 트리거를 지원합니다.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
