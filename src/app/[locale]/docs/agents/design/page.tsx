'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import {
  Cpu,
  MessageSquare,
  GitMerge,
  Beaker,
  Network,
  Shield,
  AlertTriangle,
} from 'lucide-react';

export default function DesignAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Category C: Design Agents',
      description:
        'Paradigm-specific design consultation and meta-analysis orchestration with multi-gate validation',
      paradigmCoverage: 'Paradigm Coverage',
      paradigmDesc:
        'Paradigm-specific (C1 Quantitative, C2 Qualitative, C3 Mixed Methods), Experimental focus (C4), Meta-analysis focus (C5/C6/C7)',
      metaSystemTitle: 'C5/C6/C7 Meta-Analysis System (v6.3)',
      metaSystemDesc:
        'Based on V7 GenAI meta-analysis lessons learned: Three-agent architecture with decision authority, service provision, and advisory roles.',
      metaArchitecture: 'Meta-Analysis Architecture',
      metaGates: 'Multi-Gate Validation (C5)',
      metaGatesDesc: 'Four-gate validation workflow ensures data integrity:',
      gates: [
        { id: 1, name: 'Extraction Validation', desc: 'Verify data completeness and accuracy' },
        {
          id: 2,
          name: 'Classification Validation',
          desc: 'ES Hierarchy enforcement (pre-test exclusion)',
        },
        {
          id: 3,
          name: 'Statistical Validation',
          desc: "Hedges' g calculation with SD recovery",
        },
        {
          id: 4,
          name: 'Independence Validation',
          desc: 'Ensure statistical independence, exclude pre-tests',
        },
      ],
      metaCheckpoints: 'Meta-Analysis Checkpoints',
      agents: [
        {
          id: 'C1',
          name: 'Quantitative Design Consultant',
          icon: Cpu,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'Creative quantitative design options avoiding obvious experimental designs',
          capabilities: [
            'Enhanced VS 3-Phase methodology',
            'RCT and quasi-experimental designs',
            'Survey design (cross-sectional, longitudinal)',
            'Factorial designs (between, within, mixed)',
            'Power analysis and sample size calculation',
            'Randomization strategies',
          ],
          triggers: {
            en: '"experimental design", "RCT", "quasi-experimental", "survey design", "power analysis"',
            ko: '"실험 설계", "RCT", "준실험", "조사 설계", "검정력 분석"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'C2',
          name: 'Qualitative Design Consultant',
          icon: MessageSquare,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'Comprehensive qualitative research design across major traditions',
          capabilities: [
            'Enhanced VS 3-Phase methodology',
            'Phenomenology (descriptive, hermeneutic)',
            'Grounded theory (Straussian, Glaserian, Constructivist)',
            'Case study design (single, multiple, embedded)',
            'Narrative inquiry',
            'Sample size justification for qualitative',
          ],
          triggers: {
            en: '"qualitative design", "phenomenology", "grounded theory", "case study"',
            ko: '"질적 연구 설계", "현상학", "근거이론", "사례연구"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'C3',
          name: 'Mixed Methods Design Consultant',
          icon: GitMerge,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'Sequential, concurrent, and embedded mixed methods designs',
          capabilities: [
            'Sequential designs (explanatory, exploratory)',
            'Convergent parallel designs',
            'Embedded designs',
            'Transformative frameworks',
            'Morse notation support (QUAL→quan, QUAN+qual)',
            'Integration timing and weighting decisions',
          ],
          triggers: {
            en: '"mixed methods", "sequential design", "convergent", "QUAL", "QUAN"',
            ko: '"혼합방법", "혼합 연구", "순차적 설계", "통합"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'Standard',
        },
        {
          id: 'C4',
          name: 'Experimental Materials Developer',
          icon: Beaker,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: 'Treatment and control conditions with manipulation checks',
          capabilities: [
            'Treatment protocol design',
            'Control condition specification',
            'Manipulation check design',
            'Fidelity monitoring protocols',
            'Pilot testing recommendations',
          ],
          triggers: {
            en: '"experimental materials", "treatment design", "manipulation check", "intervention"',
            ko: '"실험 자료", "처치 설계", "조작 점검", "중재"',
          },
          checkpoints: [],
          vsMode: 'Standard',
        },
        {
          id: 'C5',
          name: 'Meta-Analysis Master',
          icon: Network,
          tier: 'HIGH',
          model: 'Opus',
          purpose:
            'Multi-gate validation workflow orchestration with decision authority',
          capabilities: [
            'Multi-gate validation (4 gates)',
            'Phase-based orchestration (7 phases)',
            'ES hierarchy enforcement',
            'Pre-test exclusion protocol',
            "Hedges' g pooling",
            'Heterogeneity analysis (I², τ², Q-statistic)',
            'Publication bias assessment',
          ],
          triggers: {
            en: '"meta-analysis", "pooled effect", "heterogeneity", "effect size synthesis"',
            ko: '"메타분석", "메타 분석", "통합 효과", "이질성"',
          },
          checkpoints: [
            '🔴 CP_META_GATE (any gate failure)',
            '🔴 META_TIER3_REVIEW (data completeness < 40%)',
            '🟠 META_ANOMALY_REVIEW (|g| > 3.0)',
            '🟠 META_PRETEST_CONFIRM (ambiguous classification)',
          ],
          vsMode: 'Full VS 5-Phase',
          authorityModel: 'Decision Authority',
        },
        {
          id: 'C6',
          name: 'Data Integrity Guard',
          icon: Shield,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose:
            'Data completeness validation, Hedges\' g calculation, SD recovery',
          capabilities: [
            "Hedges' g calculation with small-sample correction",
            'SD recovery strategies (4-tier hierarchy)',
            'Data completeness assessment',
            'Version tracking and audit trail',
            'Integration with C5 gate validation',
          ],
          triggers: {
            en: '"data extraction", "Hedges g", "SD recovery", "effect size calculation"',
            ko: '"데이터 추출", "헤지스 g", "표준편차 복원", "효과크기 계산"',
          },
          checkpoints: [],
          vsMode: 'Standard',
          authorityModel: 'Service Provider',
        },
        {
          id: 'C7',
          name: 'Error Prevention Engine',
          icon: AlertTriangle,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: 'Pattern detection, anomaly alerts, error prevention',
          capabilities: [
            'Pre-test pattern detection',
            'Anomaly detection (|g| > 3.0)',
            'Error taxonomy (5 categories)',
            'Pre-extraction warnings',
            'Data quality alerts',
            'Advisory recommendations to C5',
          ],
          triggers: {
            en: '"error prevention", "validation", "data check", "anomaly detection"',
            ko: '"오류 방지", "검증", "데이터 확인", "이상 탐지"',
          },
          checkpoints: [],
          vsMode: 'Standard',
          authorityModel: 'Advisory',
        },
      ],
    },
    ko: {
      title: 'Category C: 설계 에이전트',
      description: '패러다임별 설계 컨설팅 및 다중 게이트 검증을 통한 메타분석 오케스트레이션',
      paradigmCoverage: '패러다임 범위',
      paradigmDesc:
        '패러다임별 (C1 양적, C2 질적, C3 혼합방법), 실험 중심 (C4), 메타분석 중심 (C5/C6/C7)',
      metaSystemTitle: 'C5/C6/C7 메타분석 시스템 (v6.3)',
      metaSystemDesc:
        'V7 GenAI 메타분석 교훈 기반: 의사결정 권한, 서비스 제공, 자문 역할을 가진 3-에이전트 아키텍처.',
      metaArchitecture: '메타분석 아키텍처',
      metaGates: '다중 게이트 검증 (C5)',
      metaGatesDesc: '4단계 게이트 검증 워크플로우로 데이터 무결성 보장:',
      gates: [
        { id: 1, name: '추출 검증', desc: '데이터 완전성 및 정확성 확인' },
        { id: 2, name: '분류 검증', desc: 'ES 계층 구조 강제 (사전검사 제외)' },
        { id: 3, name: '통계 검증', desc: "Hedges' g 계산 및 SD 복원" },
        { id: 4, name: '독립성 검증', desc: '통계적 독립성 보장, 사전검사 제외' },
      ],
      metaCheckpoints: '메타분석 체크포인트',
      agents: [
        {
          id: 'C1',
          name: '양적 설계 컨설턴트',
          icon: Cpu,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '명백한 실험 설계를 피하는 창의적인 양적 설계 옵션',
          capabilities: [
            'VS 3단계 강화 방법론',
            'RCT 및 준실험 설계',
            '조사 설계 (횡단, 종단)',
            '요인 설계 (피험자 간, 피험자 내, 혼합)',
            '검정력 분석 및 표본 크기 계산',
            '무작위 배정 전략',
          ],
          triggers: {
            en: '"experimental design", "RCT", "quasi-experimental"',
            ko: '"실험 설계", "RCT", "준실험", "조사 설계"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'C2',
          name: '질적 설계 컨설턴트',
          icon: MessageSquare,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '주요 전통에 걸친 포괄적 질적 연구 설계',
          capabilities: [
            'VS 3단계 강화 방법론',
            '현상학 (기술적, 해석학적)',
            '근거이론 (Straussian, Glaserian, 구성주의)',
            '사례연구 설계 (단일, 다중, 내장형)',
            '내러티브 탐구',
            '질적 연구 표본 크기 정당화',
          ],
          triggers: {
            en: '"qualitative design", "phenomenology", "grounded theory"',
            ko: '"질적 연구 설계", "현상학", "근거이론"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'C3',
          name: '혼합방법 설계 컨설턴트',
          icon: GitMerge,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '순차적, 동시적, 내장형 혼합방법 설계',
          capabilities: [
            '순차적 설계 (설명적, 탐색적)',
            '수렴적 병렬 설계',
            '내장형 설계',
            '변혁적 프레임워크',
            'Morse 표기법 지원 (QUAL→quan, QUAN+qual)',
            '통합 시점 및 가중치 결정',
          ],
          triggers: {
            en: '"mixed methods", "sequential design", "convergent"',
            ko: '"혼합방법", "혼합 연구", "순차적 설계"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: '표준',
        },
        {
          id: 'C4',
          name: '실험 자료 개발자',
          icon: Beaker,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: '조작 점검을 포함한 처치 및 통제 조건',
          capabilities: [
            '처치 프로토콜 설계',
            '통제 조건 명세',
            '조작 점검 설계',
            '충실도 모니터링 프로토콜',
            '파일럿 테스트 권장사항',
          ],
          triggers: {
            en: '"experimental materials", "treatment design"',
            ko: '"실험 자료", "처치 설계", "조작 점검"',
          },
          checkpoints: [],
          vsMode: '표준',
        },
        {
          id: 'C5',
          name: '메타분석 마스터',
          icon: Network,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '의사결정 권한을 가진 다중 게이트 검증 워크플로우 오케스트레이션',
          capabilities: [
            '다중 게이트 검증 (4개 게이트)',
            '단계별 오케스트레이션 (7단계)',
            'ES 계층 구조 강제',
            '사전검사 제외 프로토콜',
            "Hedges' g 통합",
            '이질성 분석 (I², τ², Q-통계)',
            '출판 편향 평가',
          ],
          triggers: {
            en: '"meta-analysis", "pooled effect", "heterogeneity"',
            ko: '"메타분석", "메타 분석", "통합 효과"',
          },
          checkpoints: [
            '🔴 CP_META_GATE (게이트 실패 시)',
            '🔴 META_TIER3_REVIEW (데이터 완전성 < 40%)',
            '🟠 META_ANOMALY_REVIEW (|g| > 3.0)',
            '🟠 META_PRETEST_CONFIRM (모호한 분류)',
          ],
          vsMode: '전체 VS 5단계',
          authorityModel: '의사결정 권한',
        },
        {
          id: 'C6',
          name: '데이터 무결성 가드',
          icon: Shield,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: '데이터 완전성 검증, Hedges\' g 계산, SD 복원',
          capabilities: [
            "소표본 보정을 포함한 Hedges' g 계산",
            'SD 복원 전략 (4단계 계층)',
            '데이터 완전성 평가',
            '버전 추적 및 감사 추적',
            'C5 게이트 검증과의 통합',
          ],
          triggers: {
            en: '"data extraction", "Hedges g", "SD recovery"',
            ko: '"데이터 추출", "헤지스 g", "표준편차 복원"',
          },
          checkpoints: [],
          vsMode: '표준',
          authorityModel: '서비스 제공자',
        },
        {
          id: 'C7',
          name: '오류 방지 엔진',
          icon: AlertTriangle,
          tier: 'MEDIUM',
          model: 'Sonnet',
          purpose: '패턴 탐지, 이상 경고, 오류 방지',
          capabilities: [
            '사전검사 패턴 탐지',
            '이상 탐지 (|g| > 3.0)',
            '오류 분류체계 (5가지 범주)',
            '추출 전 경고',
            '데이터 품질 알림',
            'C5에 대한 자문 권장사항',
          ],
          triggers: {
            en: '"error prevention", "validation", "data check"',
            ko: '"오류 방지", "검증", "데이터 확인"',
          },
          checkpoints: [],
          vsMode: '표준',
          authorityModel: '자문',
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

  const getAuthorityColor = (authority?: string) => {
    switch (authority) {
      case 'Decision Authority':
      case '의사결정 권한':
        return '#e74c3c';
      case 'Service Provider':
      case '서비스 제공자':
        return '#3498db';
      case 'Advisory':
      case '자문':
        return '#f39c12';
      default:
        return undefined;
    }
  };

  const categoryColor = '#f39c12'; // Orange for Category C

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

        {/* Meta-Analysis System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: categoryColor }}>
            {t.metaSystemTitle}
          </h2>
          <p className="text-stellar-dim mb-6">{t.metaSystemDesc}</p>

          {/* Architecture Diagram */}
          <div className="p-6 bg-void-surface border border-stellar-faint/10 font-mono text-sm mb-6">
            <div className="text-stellar-faint mb-2">{t.metaArchitecture}</div>
            <div className="text-stellar-bright">
              <div className="mb-2">┌─────────────────────────────────────────────────┐</div>
              <div className="mb-2">│ C5-MetaAnalysisMaster (Orchestrator)            │</div>
              <div className="mb-2">│   └─ Multi-gate validation (4 gates)            │</div>
              <div className="mb-2">│   └─ Phase-based orchestration (7 phases)       │</div>
              <div className="mb-2">│   └─ ES hierarchy enforcement                   │</div>
              <div className="mb-2">│                                                 │</div>
              <div className="mb-2">│ C6-DataIntegrityGuard (Service Provider)        │</div>
              <div className="mb-2">│   └─ Hedges&apos; g calculation                       │</div>
              <div className="mb-2">│   └─ SD recovery strategies (4 levels)          │</div>
              <div className="mb-2">│   └─ Version tracking                           │</div>
              <div className="mb-2">│                                                 │</div>
              <div className="mb-2">│ C7-ErrorPreventionEngine (Advisory)             │</div>
              <div className="mb-2">│   └─ Pattern detection (pre-test, anomaly)     │</div>
              <div className="mb-2">│   └─ Error taxonomy (5 categories)              │</div>
              <div className="mb-2">│   └─ Pre-extraction warnings                    │</div>
              <div>└─────────────────────────────────────────────────┘</div>
            </div>
          </div>

          {/* Multi-Gate Validation */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3" style={{ color: categoryColor }}>
              {t.metaGates}
            </h3>
            <p className="text-stellar-dim mb-4">{t.metaGatesDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.gates.map((gate) => (
                <div
                  key={gate.id}
                  className="p-4 bg-void-surface border border-stellar-faint/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="flex h-8 w-8 items-center justify-center border font-mono font-bold"
                      style={{
                        color: categoryColor,
                        borderColor: `${categoryColor}40`,
                        backgroundColor: `${categoryColor}10`,
                      }}
                    >
                      {gate.id}
                    </div>
                    <h4 className="font-semibold text-stellar-core">{gate.name}</h4>
                  </div>
                  <p className="text-sm text-stellar-dim">{gate.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Agents */}
        <div className="space-y-8">
          {t.agents.map((agent, index) => {
            const Icon = agent.icon;
            const tierColor = getTierColor(agent.tier);
            const authorityColor = getAuthorityColor(agent.authorityModel);

            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
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
                      {agent.authorityModel && (
                        <span
                          className="px-2 py-0.5 text-xs font-mono uppercase border"
                          style={{
                            color: authorityColor,
                            borderColor: `${authorityColor}40`,
                            backgroundColor: `${authorityColor}10`,
                          }}
                        >
                          {agent.authorityModel}
                        </span>
                      )}
                    </div>
                    <p className="text-stellar-dim mb-3">{agent.purpose}</p>
                    <div className="flex items-center gap-4 text-sm flex-wrap">
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
                      <code className="text-xs bg-void-surface px-2 py-1 text-[#44ffaa] font-mono break-words">
                        {agent.triggers.en}
                      </code>
                    </div>
                    <div>
                      <span className="text-xs text-stellar-faint uppercase mb-1 block">
                        한국어
                      </span>
                      <code className="text-xs bg-void-surface px-2 py-1 text-[#44ffaa] font-mono break-words">
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
          transition={{ delay: 1.2 }}
          className="mt-12 p-6 bg-void-surface border border-stellar-faint/10"
        >
          <p className="text-sm text-stellar-faint">
            {locale === 'en'
              ? 'Category C agents use Enhanced VS 3-Phase methodology for paradigm-specific designs (C1/C2/C3) and Full VS 5-Phase for meta-analysis (C5). The C5/C6/C7 system implements a three-tier architecture: C5 as Decision Authority, C6 as Service Provider, and C7 as Advisory. All agents support auto-trigger via keyword detection in both English and Korean.'
              : 'Category C 에이전트는 패러다임별 설계(C1/C2/C3)에 VS 3단계 강화 방법론을, 메타분석(C5)에 전체 VS 5단계를 사용합니다. C5/C6/C7 시스템은 3계층 아키텍처를 구현합니다: C5는 의사결정 권한, C6는 서비스 제공자, C7은 자문 역할. 모든 에이전트는 영어와 한국어 키워드 감지를 통한 자동 트리거를 지원합니다.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
