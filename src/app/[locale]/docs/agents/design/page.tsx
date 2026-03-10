'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { DocsBreadcrumb } from '@/components/docs';
import {
  Cpu,
  MessageSquare,
  GitMerge,
  Network,
} from 'lucide-react';

export default function DesignAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Category C: Design Agents',
      description:
        'Paradigm-specific design consultation and meta-analysis orchestration with multi-gate validation — 4 agents',
      paradigmCoverage: 'Paradigm Coverage',
      paradigmDesc:
        'Paradigm-specific (C1 Quantitative, C2 Qualitative, C3 Mixed Methods), Meta-analysis (C5 — now includes effect size extraction, data integrity, and error prevention)',
      metaSystemTitle: 'C5 Meta-Analysis Master (v11.0)',
      metaSystemDesc:
        'Based on V7 GenAI meta-analysis lessons learned: Consolidated single-agent architecture with decision authority, data integrity validation, and error prevention (formerly C5/C6/C7).',
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
          name: 'Quantitative Design & Sampling',
          icon: Cpu,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'Creative quantitative design options with sampling strategies and experimental materials development',
          capabilities: [
            'Enhanced VS 3-Phase methodology',
            'RCT and quasi-experimental designs',
            'Survey design (cross-sectional, longitudinal)',
            'Factorial designs (between, within, mixed)',
            'Power analysis and sample size calculation',
            'Randomization and sampling strategies',
            'Treatment protocol and control condition design (formerly C4)',
            'Manipulation check design and fidelity monitoring (formerly C4)',
          ],
          triggers: {
            en: '"experimental design", "RCT", "quasi-experimental", "survey design", "power analysis", "experimental materials", "treatment design"',
            ko: '"실험 설계", "RCT", "준실험", "조사 설계", "검정력 분석", "실험 자료", "처치 설계"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'Enhanced VS 3-Phase',
        },
        {
          id: 'C2',
          name: 'Qualitative Design',
          icon: MessageSquare,
          tier: 'HIGH',
          model: 'Opus',
          purpose: 'Comprehensive qualitative research design across major traditions, including ethnography and action research',
          capabilities: [
            'Enhanced VS 3-Phase methodology',
            'Phenomenology (descriptive, hermeneutic)',
            'Grounded theory (Straussian, Glaserian, Constructivist)',
            'Case study design (single, multiple, embedded)',
            'Narrative inquiry',
            'Ethnography and participatory action research',
            'Sample size justification for qualitative',
          ],
          triggers: {
            en: '"qualitative design", "phenomenology", "grounded theory", "case study", "ethnography", "action research"',
            ko: '"질적 연구 설계", "현상학", "근거이론", "사례연구", "문화기술지", "실행연구"',
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
          id: 'C5',
          name: 'Meta-Analysis Master',
          icon: Network,
          tier: 'HIGH',
          model: 'Opus',
          purpose:
            'Multi-gate validation workflow orchestration with effect size extraction, data integrity, error prevention, and sensitivity analysis',
          capabilities: [
            'Multi-gate validation (4 gates)',
            'Phase-based orchestration (7 phases)',
            'ES hierarchy enforcement',
            'Pre-test exclusion protocol',
            "Hedges' g pooling and effect size extraction (formerly B3)",
            'Heterogeneity analysis (I², τ², Q-statistic)',
            'Publication bias assessment',
            "Data integrity validation and Hedges' g calculation with SD recovery (formerly C6)",
            'Error prevention, anomaly detection, and pre-test pattern detection (formerly C7)',
            'Sensitivity analysis and robustness checks',
          ],
          triggers: {
            en: '"meta-analysis", "pooled effect", "heterogeneity", "effect size synthesis", "effect size", "data extraction", "error prevention"',
            ko: '"메타분석", "메타 분석", "통합 효과", "이질성", "효과크기", "데이터 추출", "오류 방지"',
          },
          checkpoints: [
            '🔴 CP_META_GATE (any gate failure)',
            '🔴 META_TIER3_REVIEW (data completeness < 40%)',
            '🟠 META_ANOMALY_REVIEW (|g| > 3.0)',
            '🟠 META_PRETEST_CONFIRM (ambiguous classification)',
          ],
          vsMode: 'Full VS 5-Phase',
          authorityModel: 'Decision Authority',
          relatedAgents: ['B1', 'B2'],
        },
      ],
    },
    ko: {
      title: 'Category C: 설계 에이전트',
      description: '패러다임별 설계 컨설팅 및 다중 게이트 검증을 통한 메타분석 오케스트레이션 — 4개 에이전트',
      paradigmCoverage: '패러다임 범위',
      paradigmDesc:
        '패러다임별 (C1 양적, C2 질적, C3 혼합방법), 메타분석 (C5 — 효과크기 추출, 데이터 무결성, 오류 방지 포함)',
      metaSystemTitle: 'C5 메타분석 마스터 (v11.0)',
      metaSystemDesc:
        'V7 GenAI 메타분석 교훈 기반: 의사결정 권한, 데이터 무결성 검증, 오류 방지를 통합한 단일 에이전트 아키텍처 (기존 C5/C6/C7).',
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
          name: '양적 설계 및 표집',
          icon: Cpu,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '표집 전략과 실험 자료 개발을 포함한 창의적인 양적 설계 옵션',
          capabilities: [
            'VS 3단계 강화 방법론',
            'RCT 및 준실험 설계',
            '조사 설계 (횡단, 종단)',
            '요인 설계 (피험자 간, 피험자 내, 혼합)',
            '검정력 분석 및 표본 크기 계산',
            '무작위 배정 및 표집 전략',
            '처치 프로토콜 및 통제 조건 설계 (기존 C4)',
            '조작 점검 설계 및 충실도 모니터링 (기존 C4)',
          ],
          triggers: {
            en: '"experimental design", "RCT", "quasi-experimental", "survey design", "power analysis", "experimental materials", "treatment design"',
            ko: '"실험 설계", "RCT", "준실험", "조사 설계", "검정력 분석", "실험 자료", "처치 설계"',
          },
          checkpoints: ['🔴 CP_METHODOLOGY_APPROVAL'],
          vsMode: 'VS 3단계 강화',
        },
        {
          id: 'C2',
          name: '질적 설계',
          icon: MessageSquare,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '문화기술지 및 실행연구를 포함한 주요 전통에 걸친 포괄적 질적 연구 설계',
          capabilities: [
            'VS 3단계 강화 방법론',
            '현상학 (기술적, 해석학적)',
            '근거이론 (Straussian, Glaserian, 구성주의)',
            '사례연구 설계 (단일, 다중, 내장형)',
            '내러티브 탐구',
            '문화기술지 및 참여적 실행연구',
            '질적 연구 표본 크기 정당화',
          ],
          triggers: {
            en: '"qualitative design", "phenomenology", "grounded theory", "case study", "ethnography", "action research"',
            ko: '"질적 연구 설계", "현상학", "근거이론", "사례연구", "문화기술지", "실행연구"',
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
          id: 'C5',
          name: '메타분석 마스터',
          icon: Network,
          tier: 'HIGH',
          model: 'Opus',
          purpose: '효과크기 추출, 데이터 무결성, 오류 방지, 민감도 분석을 포함한 다중 게이트 검증 워크플로우 오케스트레이션',
          capabilities: [
            '다중 게이트 검증 (4개 게이트)',
            '단계별 오케스트레이션 (7단계)',
            'ES 계층 구조 강제',
            '사전검사 제외 프로토콜',
            "Hedges' g 통합 및 효과크기 추출 (기존 B3)",
            '이질성 분석 (I², τ², Q-통계)',
            '출판 편향 평가',
            "데이터 무결성 검증 및 Hedges' g 계산과 SD 복원 (기존 C6)",
            '오류 방지, 이상 탐지, 사전검사 패턴 탐지 (기존 C7)',
            '민감도 분석 및 견고성 검증',
          ],
          triggers: {
            en: '"meta-analysis", "pooled effect", "heterogeneity", "effect size synthesis", "effect size", "data extraction", "error prevention"',
            ko: '"메타분석", "메타 분석", "통합 효과", "이질성", "효과크기", "데이터 추출", "오류 방지"',
          },
          checkpoints: [
            '🔴 CP_META_GATE (게이트 실패 시)',
            '🔴 META_TIER3_REVIEW (데이터 완전성 < 40%)',
            '🟠 META_ANOMALY_REVIEW (|g| > 3.0)',
            '🟠 META_PRETEST_CONFIRM (모호한 분류)',
          ],
          vsMode: '전체 VS 5단계',
          authorityModel: '의사결정 권한',
          relatedAgents: ['B1', 'B2'],
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
              <div className="mb-2">│ C5-MetaAnalysisMaster (Consolidated v11.0)      │</div>
              <div className="mb-2">│   └─ Multi-gate validation (4 gates)            │</div>
              <div className="mb-2">│   └─ Phase-based orchestration (7 phases)       │</div>
              <div className="mb-2">│   └─ ES hierarchy enforcement                   │</div>
              <div className="mb-2">│   └─ Effect size extraction (ex-B3)             │</div>
              <div className="mb-2">│   └─ Hedges&apos; g calc + SD recovery (ex-C6)      │</div>
              <div className="mb-2">│   └─ Error prevention + anomaly detect (ex-C7)  │</div>
              <div className="mb-2">│   └─ Sensitivity analysis                       │</div>
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
              ? 'Category C agents (4 agents) use Enhanced VS 3-Phase methodology for paradigm-specific designs (C1/C2/C3) and Full VS 5-Phase for meta-analysis (C5). C5 now consolidates the former C5/C6/C7 three-tier architecture into a single agent with decision authority, data integrity validation, and error prevention. Experimental materials (formerly C4) are now part of C1.'
              : 'Category C 에이전트(4개)는 패러다임별 설계(C1/C2/C3)에 VS 3단계 강화 방법론을, 메타분석(C5)에 전체 VS 5단계를 사용합니다. C5는 기존 C5/C6/C7 3계층 아키텍처를 의사결정 권한, 데이터 무결성 검증, 오류 방지를 갖춘 단일 에이전트로 통합했습니다. 실험 자료(기존 C4)는 이제 C1에 포함됩니다.'}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
