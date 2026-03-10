'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Shield,
  Clock,
  Info,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category F: Quality & Validation',
    subtitle: 'Humanization verification for academic writing quality',
    description: 'Category F focuses on humanization verification, ensuring that AI-assisted writing transformations preserve meaning, citations, and statistical accuracy. F5 operates in the G5 → G6 → F5 humanization pipeline.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Preserve academic integrity during humanization transformations',

    // Agents
    agents: [
      {
        id: 'F5',
        name: 'Humanization Verifier',
        icon: 'shield',
        color: '#f39c12',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: 'Standard',
        purpose: 'Ensure humanization transformation preserves meaning, citations, and statistical accuracy',
        triggers: {
          en: ['verify humanization', 'check transformation', 'validate changes', 'humanization quality'],
          ko: ['휴먼화 검증', 'AI 텍스트 확인', '변환 검증'],
        },
        capabilities: [
          'Citation integrity check (no hallucinated citations)',
          'Statistical accuracy verification (numbers unchanged)',
          'Meaning preservation validation',
          'Terminology consistency (academic terms retained)',
          'Structural coherence (logical flow maintained)',
          'Compare before/after transformations',
        ],
        vsProcess: 'Systematic comparison with focus on academic integrity preservation',
        example: {
          input: 'Before: "The results revealed a statistically significant difference (p < .001, d = 0.82)" | After: "The results showed a significant difference (p < .001, d = 0.82)"',
          output: '✅ Citation integrity: Maintained | ✅ Statistics: Accurate (p-value, effect size unchanged) | ✅ Meaning: Preserved | ⚠️ Minor: "revealed" → "showed" (acceptable simplification) | Verdict: PASS',
        },
      },
    ],

    // Checkpoint integration
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'F5 enforces humanization integrity:',
    checkpoints: [
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'F5', description: 'Transformation integrity confirmed, citations/statistics accurate' },
    ],

    // Consolidated note
    consolidationTitle: 'Consolidated Functions (v11.0.0)',
    consolidationDescription: 'The following quality functions have been absorbed into other agents:',
    consolidationItems: [
      'Consistency checking, reporting checklists, reproducibility auditing → G2 (Publication Specialist)',
      'Bias detection, ethics, trustworthiness assessment → X1 (Research Guardian)',
    ],

    // Typical workflow
    workflowTitle: 'Humanization Pipeline',
    workflowSteps: [
      { agent: 'G5', action: 'AI detection analysis of draft text', checkpoint: 'None', parallel: false },
      { agent: 'G6', action: 'Humanization transformation applied', checkpoint: 'None', parallel: false },
      { agent: 'F5', action: 'Verify humanization preserves meaning, citations, and statistics', checkpoint: 'CP_HUMANIZATION_VERIFY', parallel: false },
    ],

    // CTA
    ctaTitle: 'Ensure Writing Integrity',
    ctaDescription: 'F5 ensures humanization transformations maintain academic rigor.',
    ctaButton: 'Explore Category G: Communication',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 F: 품질 및 검증',
    subtitle: '학술 작문 품질을 위한 휴먼화 검증',
    description: '카테고리 F는 AI 기반 작문 변환이 의미, 인용, 통계 정확성을 보존하는지 확인하는 휴먼화 검증에 집중합니다. F5는 G5 → G6 → F5 휴먼화 파이프라인에서 작동합니다.',

    principleTitle: '핵심 원칙',
    principleText: '휴먼화 변환 시 학술적 무결성 보존',

    agents: [
      {
        id: 'F5',
        name: '휴먼화 검증자',
        icon: 'shield',
        color: '#f39c12',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: '표준',
        purpose: '휴먼화 변환이 의미, 인용, 통계 정확성을 보존하는지 보장',
        triggers: {
          en: ['verify humanization', 'check transformation', 'validate changes', 'humanization quality'],
          ko: ['휴먼화 검증', 'AI 텍스트 확인', '변환 검증'],
        },
        capabilities: [
          '인용 무결성 확인 (환각된 인용 없음)',
          '통계 정확성 검증 (숫자 변경 안 됨)',
          '의미 보존 검증',
          '용어 일관성 (학술 용어 유지)',
          '구조적 일관성 (논리적 흐름 유지)',
          '변환 전후 비교',
        ],
        vsProcess: '학술 진실성 보존에 초점을 둔 체계적 비교',
        example: {
          input: '변환 전: "결과는 통계적으로 유의미한 차이를 드러냈다 (p < .001, d = 0.82)" | 변환 후: "결과는 유의미한 차이를 보였다 (p < .001, d = 0.82)"',
          output: '✅ 인용 무결성: 유지됨 | ✅ 통계: 정확 (p-값, 효과크기 변경 안 됨) | ✅ 의미: 보존됨 | ⚠️ 경미: "드러냈다" → "보였다" (허용 가능한 단순화) | 판정: 통과',
        },
      },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: 'F5는 휴먼화 무결성을 강제합니다:',
    checkpoints: [
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'F5', description: '변환 무결성 확인, 인용/통계 정확' },
    ],

    consolidationTitle: '통합된 기능 (v11.0.0)',
    consolidationDescription: '다음 품질 기능은 다른 에이전트로 흡수되었습니다:',
    consolidationItems: [
      '일관성 검사, 보고 체크리스트, 재현성 감사 → G2 (출판 전문가)',
      '편향 탐지, 윤리, 신뢰성 평가 → X1 (연구 수호자)',
    ],

    workflowTitle: '휴먼화 파이프라인',
    workflowSteps: [
      { agent: 'G5', action: '초안 텍스트의 AI 탐지 분석', checkpoint: '없음', parallel: false },
      { agent: 'G6', action: '휴먼화 변환 적용', checkpoint: '없음', parallel: false },
      { agent: 'F5', action: '의미, 인용, 통계 보존 여부 검증', checkpoint: 'CP_HUMANIZATION_VERIFY', parallel: false },
    ],

    ctaTitle: '작문 무결성 보장',
    ctaDescription: 'F5는 휴먼화 변환이 학술적 엄격성을 유지하도록 보장합니다.',
    ctaButton: '카테고리 G 탐색: 커뮤니케이션',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  shield: <Shield className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  RECOMMENDED: <AlertCircle className="h-4 w-4" />,
  OPTIONAL: <CheckCircle2 className="h-4 w-4" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function QualityAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/agents`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(243, 156, 18, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(243, 156, 18, 0.15)',
              borderColor: 'rgba(243, 156, 18, 0.3)',
              color: '#f39c12',
            }}
          >
            <ShieldCheck className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#f39c12' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(243, 156, 18, 0.1)',
              borderColor: 'rgba(243, 156, 18, 0.2)',
            }}
          >
            <p className="text-sm uppercase tracking-wider text-stellar-faint mb-2">{t.principleTitle}</p>
            <p className="text-body font-medium text-stellar-core">{t.principleText}</p>
          </div>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Agent (F5 only) */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {t.agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={itemVariants}
              className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${agent.color}15 0%, transparent 50%)`,
                }}
              />

              {/* Agent header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${agent.color}15`,
                      borderColor: `${agent.color}30`,
                      color: agent.color,
                    }}
                  >
                    {agentIcons[agent.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                      <div
                        className="px-3 py-1 font-mono text-xs font-bold border"
                        style={{
                          color: agent.color,
                          borderColor: `${agent.color}30`,
                          backgroundColor: `${agent.color}10`,
                        }}
                      >
                        {agent.id}
                      </div>
                    </div>
                    <p className="text-body text-stellar-dim">{agent.purpose}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-col items-end gap-2">
                  <div
                    className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                    style={{
                      color: '#95a5a6',
                      borderColor: 'rgba(149, 165, 166, 0.3)',
                      backgroundColor: 'rgba(149, 165, 166, 0.1)',
                    }}
                  >
                    {agent.tier} • {agent.model}
                  </div>
                  <div
                    className="px-3 py-1 font-mono text-xs border"
                    style={{
                      color: '#44ffaa',
                      borderColor: 'rgba(68, 255, 170, 0.3)',
                      backgroundColor: 'rgba(68, 255, 170, 0.1)',
                    }}
                  >
                    {agent.vsLevel}
                  </div>
                  {agent.checkpoint !== 'None' && agent.checkpoint !== '없음' && (
                    <div
                      className="flex items-center gap-2 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: '#e67e22',
                        borderColor: 'rgba(230, 126, 34, 0.3)',
                        backgroundColor: 'rgba(230, 126, 34, 0.1)',
                      }}
                    >
                      {checkpointIcons[agent.checkpointLevel]}
                      <span>{agent.checkpoint}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-6 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '역량' : 'Capabilities'}
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <span className="text-stellar-core mt-1">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS Process */}
              <div className="mb-6 p-4 bg-void-deep/50 border border-stellar-faint/10 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-2">
                  {locale === 'ko' ? 'VS 프로세스' : 'VS Process'}
                </h4>
                <p className="text-sm text-stellar-bright">{agent.vsProcess}</p>
              </div>

              {/* Example */}
              <div className="relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '예시' : 'Example'}
                </h4>
                <div className="void-terminal overflow-hidden">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '입력' : 'Input'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono">
                    {agent.example.input}
                  </div>
                </div>
                <div className="void-terminal overflow-hidden mt-3">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '출력' : 'Output'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono whitespace-pre-wrap">
                    {agent.example.output}
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                <span className="text-xs text-stellar-faint uppercase tracking-wider">
                  {locale === 'ko' ? '트리거:' : 'Triggers:'}
                </span>
                {agent.triggers.en.map((trigger, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono border"
                    style={{
                      color: agent.color,
                      borderColor: `${agent.color}30`,
                      backgroundColor: `${agent.color}08`,
                    }}
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Consolidation Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(243, 156, 18, 0.15)' }}
            >
              <Info className="h-5 w-5" style={{ color: '#f39c12' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.consolidationTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.consolidationDescription}</p>

          <div className="space-y-3">
            {t.consolidationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: '#f39c12',
                    borderColor: 'rgba(243, 156, 18, 0.3)',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                  }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm text-stellar-dim flex items-center">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Checkpoint Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(243, 156, 18, 0.15)' }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: '#f39c12' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.checkpointTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.checkpointDescription}</p>

          <div className="space-y-3">
            {t.checkpoints.map((cp, index) => (
              <motion.div
                key={cp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: '#e67e22',
                    borderColor: 'rgba(230, 126, 34, 0.3)',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                  }}
                >
                  {checkpointIcons[cp.level]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono font-bold text-stellar-core">{cp.id}</h3>
                    <span
                      className="px-2 py-0.5 text-xs font-mono border"
                      style={{
                        color: '#44ffaa',
                        borderColor: 'rgba(68, 255, 170, 0.3)',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                      }}
                    >
                      {cp.agent}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{cp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Clock className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.workflowTitle}</h2>
          </div>

          <div className="space-y-3">
            {t.workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                  style={{
                    color: '#44ffaa',
                    borderColor: 'rgba(68, 255, 170, 0.3)',
                    backgroundColor: 'rgba(68, 255, 170, 0.1)',
                  }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold text-stellar-core">{step.agent}</span>
                  </div>
                  <p className="text-sm text-stellar-dim">{step.action}</p>
                </div>
                {step.checkpoint !== 'None' && step.checkpoint !== '없음' && (
                  <div
                    className="px-3 py-1 text-xs font-mono border whitespace-nowrap"
                    style={{
                      color: '#f39c12',
                      borderColor: 'rgba(243, 156, 18, 0.3)',
                      backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    }}
                  >
                    {step.checkpoint}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(243, 156, 18, 0.15) 0%, rgba(68, 255, 170, 0.15) 100%)',
              borderColor: 'rgba(243, 156, 18, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents/communication`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <ShieldCheck className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
