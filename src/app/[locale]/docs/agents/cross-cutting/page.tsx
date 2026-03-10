'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Shield,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category X: Cross-Cutting',
    subtitle: 'Research Integrity',
    description:
      'Category X provides research integrity oversight across all stages of the research lifecycle.',

    principleTitle: 'Core Principle',
    principleText:
      'Proactive integrity — detect ethical issues and methodological bias before they compromise research quality',

    agents: [
      {
        id: 'X1',
        name: 'Research Guardian',
        icon: 'shield',
        color: '#44bbaa',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose:
          'Guards research integrity through ethical review and bias detection',
        triggers: {
          en: ['ethics', 'IRB', 'bias', 'p-hacking', 'HARKing', 'integrity', 'trustworthiness'],
          ko: ['윤리', 'IRB', '편향', 'p-해킹', 'HARKing', '무결성', '신뢰성'],
        },
        capabilities: [
          'IRB protocol review and compliance guidance',
          'Informed consent template generation and review',
          'P-hacking detection across statistical analyses',
          'HARKing (Hypothesizing After Results are Known) identification',
          'Questionable Research Practice (QRP) screening',
          'Research trustworthiness assessment',
        ],
        vsProcess:
          'Phase 1: Identify integrity risks in current research stage | Phase 2: Evaluate severity and evidence | Phase 3: Generate actionable recommendations with citations to ethical guidelines',
        example: {
          input:
            '"Check my analysis for potential p-hacking before I write up results"',
          output:
            'Detected: 3 unreported outcome measures, 2 post-hoc subgroup analyses not in preregistration, 1 outlier exclusion without documented criteria | Recommendation: Report all outcomes, label post-hoc analyses explicitly, establish outlier criteria a priori | Risk level: MODERATE — addressable with transparent reporting',
        },
      },
    ],

    workflowTitle: 'When to Invoke X1',
    workflowText:
      'X1 can be invoked at any research stage — before data collection (ethical review), during analysis (bias detection), or before submission (integrity assessment). It has no prerequisite checkpoints and serves as an entry-point agent that can be called at any time.',

    integrationTitle: 'Integration with Other Categories',
    integrationPoints: [
      'Category C (Design): Works with C1/C2 for design-stage ethics review and methodology validation',
      'Category B (Evidence): Collaborates with B2 for quality appraisal and critical evaluation',
      'Category G (Communication): Supports G2 for publication integrity and reporting compliance',
    ],

    ctaTitle: 'Protect Research Integrity',
    ctaDescription:
      'Use X1 Research Guardian proactively — the earlier integrity issues are caught, the easier they are to resolve.',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 X: 범분야',
    subtitle: '연구 무결성',
    description:
      '카테고리 X는 연구 생애주기의 모든 단계에서 연구 무결성 감독을 제공합니다.',

    principleTitle: '핵심 원칙',
    principleText:
      '사전적 무결성 — 연구 품질을 훼손하기 전에 윤리적 문제와 방법론적 편향을 감지',

    agents: [
      {
        id: 'X1',
        name: '연구 수호자',
        icon: 'shield',
        color: '#44bbaa',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: '없음',
        checkpointLevel: 'Advisory',
        vsLevel: '향상된 VS 3단계',
        purpose: '윤리 검토 및 편향 감지를 통한 연구 무결성 보호',
        triggers: {
          en: ['ethics', 'IRB', 'bias', 'p-hacking', 'HARKing', 'integrity', 'trustworthiness'],
          ko: ['윤리', 'IRB', '편향', 'p-해킹', 'HARKing', '무결성', '신뢰성'],
        },
        capabilities: [
          'IRB 프로토콜 검토 및 준수 지침',
          '동의서 템플릿 생성 및 검토',
          '통계 분석 전반의 p-해킹 감지',
          'HARKing (결과 확인 후 가설 설정) 식별',
          '의심스러운 연구 관행(QRP) 스크리닝',
          '연구 신뢰성 평가',
        ],
        vsProcess:
          '1단계: 현재 연구 단계에서 무결성 위험 식별 | 2단계: 심각도 및 증거 평가 | 3단계: 윤리 지침을 인용한 실행 가능한 권장사항 생성',
        example: {
          input: '"결과를 작성하기 전에 내 분석에서 잠재적 p-해킹 확인"',
          output:
            '감지됨: 보고되지 않은 결과 측정 3개, 사전등록에 없는 사후 하위그룹 분석 2개, 문서화된 기준 없는 이상치 제외 1개 | 권장사항: 모든 결과 보고, 사후 분석 명시적 표시, 이상치 기준 사전 설정 | 위험 수준: 중간 — 투명한 보고로 해결 가능',
        },
      },
    ],

    workflowTitle: 'X1 호출 시점',
    workflowText:
      'X1은 어떤 연구 단계에서든 호출할 수 있습니다 — 데이터 수집 전(윤리 검토), 분석 중(편향 감지), 또는 투고 전(무결성 평가). 전제조건 체크포인트가 없으며 언제든 호출할 수 있는 진입점 에이전트입니다.',

    integrationTitle: '다른 카테고리와의 통합',
    integrationPoints: [
      '카테고리 C (설계): C1/C2와 함께 설계 단계 윤리 검토 및 방법론 검증',
      '카테고리 B (근거): B2와 협력하여 품질 평가 및 비판적 평가',
      '카테고리 G (커뮤니케이션): G2와 함께 출판 무결성 및 보고 준수 지원',
    ],

    ctaTitle: '연구 무결성 보호',
    ctaDescription:
      'X1 연구 수호자를 사전에 활용하세요 — 무결성 문제를 일찍 발견할수록 해결이 쉬워집니다.',
  },
};

const iconMap = {
  shield: Shield,
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any,
  },
};

export default function CrossCuttingAgentsPage() {
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
              background:
                'radial-gradient(ellipse at center top, rgba(68, 187, 170, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(68, 187, 170, 0.15)',
              borderColor: 'rgba(68, 187, 170, 0.3)',
              color: '#44bbaa',
            }}
          >
            <Shield className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#44bbaa' }}>
            {t.subtitle}
          </p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">
            {t.description}
          </p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(68, 187, 170, 0.1)',
              borderColor: 'rgba(68, 187, 170, 0.2)',
            }}
          >
            <p className="text-sm uppercase tracking-wider text-stellar-faint mb-2">
              {t.principleTitle}
            </p>
            <p className="text-body font-medium text-stellar-core">
              {t.principleText}
            </p>
          </div>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Agents */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {t.agents.map((agent) => {
            const Icon = iconMap[agent.icon as keyof typeof iconMap];
            return (
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
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="void-heading-3 text-stellar-core">
                          {agent.name}
                        </h3>
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
                      <p className="text-body text-stellar-dim">
                        {agent.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                      style={{
                        color: '#45b7d1',
                        borderColor: 'rgba(69, 183, 209, 0.3)',
                        backgroundColor: 'rgba(69, 183, 209, 0.1)',
                      }}
                    >
                      {agent.tier} &bull; {agent.model}
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
                  </div>
                </div>

                {/* Capabilities */}
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '역량' : 'Capabilities'}
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {agent.capabilities.map((cap, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-stellar-dim"
                      >
                        <span className="text-stellar-core mt-1">&bull;</span>
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
                  <p className="text-sm text-stellar-bright">
                    {agent.vsProcess}
                  </p>
                </div>

                {/* Example */}
                <div className="relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '예시' : 'Example'}
                  </h4>
                  <div className="void-terminal overflow-hidden">
                    <div className="void-terminal-header">
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#ff5f56' }}
                      />
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#ffbd2e' }}
                      />
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#27c93f' }}
                      />
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
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#ff5f56' }}
                      />
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#ffbd2e' }}
                      />
                      <div
                        className="void-terminal-dot"
                        style={{ backgroundColor: '#27c93f' }}
                      />
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
            );
          })}
        </motion.section>

        <div className="void-divider-glow mb-16" />

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
              style={{ backgroundColor: 'rgba(68, 187, 170, 0.15)' }}
            >
              <AlertCircle
                className="h-5 w-5"
                style={{ color: '#44bbaa' }}
              />
            </div>
            <h2 className="void-heading-2 text-stellar-core">
              {t.workflowTitle}
            </h2>
          </div>
          <p className="text-body-lg text-stellar-dim leading-relaxed">
            {t.workflowText}
          </p>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 187, 170, 0.15)' }}
            >
              <CheckCircle2
                className="h-5 w-5"
                style={{ color: '#44bbaa' }}
              />
            </div>
            <h2 className="void-heading-2 text-stellar-core">
              {t.integrationTitle}
            </h2>
          </div>
          <div className="space-y-3">
            {t.integrationPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <CheckCircle2
                  className="h-5 w-5 shrink-0 mt-0.5"
                  style={{ color: '#44bbaa' }}
                />
                <p className="text-sm text-stellar-dim">{point}</p>
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
              background:
                'linear-gradient(135deg, rgba(68, 187, 170, 0.15) 0%, rgba(68, 255, 170, 0.10) 100%)',
              borderColor: 'rgba(68, 187, 170, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">
              {t.ctaTitle}
            </h2>
            <p className="text-body text-stellar-dim">{t.ctaDescription}</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
