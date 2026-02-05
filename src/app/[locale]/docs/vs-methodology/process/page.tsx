'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Workflow, Target, Lightbulb, CheckCircle, Users, ArrowRight } from 'lucide-react';

const content = {
  en: {
    back: 'Back to VS Methodology',
    title: 'VS 5-Phase Process',
    subtitle: 'The systematic workflow that prevents mode collapse and generates creative alternatives',

    intro: 'The VS (Variation Scoring) methodology uses a structured 5-phase process to ensure AI recommendations span the full spectrum of possibilities, from predictable to innovative. Each phase builds on the previous one to deliver context-appropriate, differentiated research options.',

    phases: [
      {
        number: 1,
        title: 'Modal Response Detection',
        icon: Target,
        description: 'Identify what 90% of AI models would typically suggest',
        details: [
          'Recognize common patterns and default recommendations',
          'Flag predictable responses (T-Score > 0.7)',
          'Explicitly acknowledge "obvious choices"',
          'Understand why these are the modal responses',
        ],
        example: {
          context: 'User asks: "What theoretical framework for technology adoption research?"',
          output: '⚠️ MODAL AWARENESS: TAM (T=0.92) and UTAUT (T=0.85) are the most predictable choices for this domain.',
        },
      },
      {
        number: 2,
        title: 'Long-Tail Exploration',
        icon: Lightbulb,
        description: 'Actively seek underrepresented perspectives and unconventional approaches',
        details: [
          'Consider minority viewpoints in the literature',
          'Explore edge cases and alternative frameworks',
          'Sample from distribution tail (T < 0.5)',
          'Include cross-disciplinary perspectives',
        ],
        example: {
          context: 'Expanding beyond modal frameworks',
          output: 'Alternative directions:\n• Self-Determination Theory x TAM (T=0.6)\n• Cognitive Load Theory + Adaptive Ecosystems (T=0.4)\n• Neuroplasticity-Based Technology Learning (T=0.2)',
        },
      },
      {
        number: 3,
        title: 'Contextual Fit Analysis',
        icon: Workflow,
        description: 'Evaluate options against specific research context',
        details: [
          'Match approach to research paradigm',
          'Consider user\'s constraints and resources',
          'Assess feasibility and defensibility',
          'Align with institutional requirements',
        ],
        example: {
          context: 'Evaluating each option for the user\'s specific context',
          output: 'Direction B (T=0.4) recommended:\n• Addresses "why" not just "will they adopt"\n• Novel for AI adoption context\n• Manageable scope for dissertation timeline',
        },
      },
      {
        number: 4,
        title: 'Differentiated Response Generation',
        icon: CheckCircle,
        description: 'Synthesize insights from phases 1-3 into actionable options',
        details: [
          'Generate response that avoids modal patterns',
          'Present 3-4 options across T-Score spectrum',
          'Ensure practical applicability',
          'Provide clear trade-offs for each option',
        ],
        example: {
          context: 'Final presentation to user',
          output: 'CHECKPOINT: CP_THEORY_SELECTION\n\nDirection A (T=0.6): Safe differentiation\nDirection B (T=0.4): Balanced novelty ⭐\nDirection C (T=0.2): Experimental',
        },
      },
      {
        number: 5,
        title: 'Meta-Cognitive Validation',
        icon: Users,
        description: 'Self-check for mode collapse and verify response quality',
        details: [
          'Verify response diversity across spectrum',
          'Confirm alignment with user\'s needs',
          'Check for unintentional modal drift',
          'Ensure human decision authority',
        ],
        example: {
          context: 'Internal validation before presenting to user',
          output: '✓ Modal patterns identified and labeled\n✓ Long-tail options included (T < 0.4)\n✓ Context-appropriate recommendations\n✓ Human checkpoint enforced',
        },
      },
    ],

    enhanced: {
      title: 'Enhanced VS (3-Phase)',
      description: 'For efficiency, some agents use a streamlined 3-phase process that combines steps while maintaining anti-modal principles.',
      phases: [
        { phase: 'Phase 1', combines: 'Modal Detection + Context', agents: 'A4, A6, B2, B3' },
        { phase: 'Phase 2', combines: 'Exploration + Analysis', agents: 'C1, C2, D1-D4' },
        { phase: 'Phase 3', combines: 'Generation + Validation', agents: 'E1-E5, F3, F4' },
      ],
      note: 'Enhanced VS maintains the core anti-modal principle while reducing iteration time from 30-60s to 15-30s.',
    },

    light: {
      title: 'Light VS',
      description: 'Minimal VS application for straightforward tasks where modal responses are acceptable.',
      features: [
        'Basic modal awareness without full sampling',
        'Single alternative to modal response',
        'Simplified context matching',
        'Used by F1, F2, F5, G1, G2 agents',
      ],
    },

    workflow: {
      title: 'VS Workflow Diagram',
      steps: [
        { from: 'User Request', to: 'Phase 1: Modal Detection', description: 'Identify predictable responses' },
        { from: 'Phase 1', to: 'Phase 2: Long-Tail Sampling', description: 'Explore alternatives' },
        { from: 'Phase 2', to: 'Phase 3: Context Analysis', description: 'Match to user needs' },
        { from: 'Phase 3', to: 'Phase 4: Response Generation', description: 'Present options' },
        { from: 'Phase 4', to: 'Phase 5: Validation', description: 'Self-check quality' },
        { from: 'Phase 5', to: 'Human Checkpoint', description: 'User decision' },
      ],
    },

    benefits: {
      title: 'Why 5 Phases?',
      items: [
        {
          phase: 'Phase 1',
          benefit: 'Transparency',
          explanation: 'Users see what the "obvious" choice would be, making informed decisions possible',
        },
        {
          phase: 'Phase 2',
          benefit: 'Creativity',
          explanation: 'Forces exploration of underrepresented options that might be better fits',
        },
        {
          phase: 'Phase 3',
          benefit: 'Practicality',
          explanation: 'Ensures recommendations are feasible given real-world constraints',
        },
        {
          phase: 'Phase 4',
          benefit: 'Actionability',
          explanation: 'Presents clear options with trade-offs, enabling confident selection',
        },
        {
          phase: 'Phase 5',
          benefit: 'Quality',
          explanation: 'Meta-cognitive validation catches mode collapse before presenting to users',
        },
      ],
    },

    cta: {
      title: 'See VS in Action',
      description: 'Explore agents that implement the full 5-phase VS process.',
      button: 'Browse Full VS Agents',
    },
  },
  ko: {
    back: 'VS 방법론으로 돌아가기',
    title: 'VS 5단계 프로세스',
    subtitle: 'Mode Collapse를 방지하고 창의적인 대안을 생성하는 체계적 워크플로우',

    intro: 'VS (Variation Scoring) 방법론은 구조화된 5단계 프로세스를 사용하여 AI 권장 사항이 예측 가능한 것부터 혁신적인 것까지 전체 스펙트럼을 포괄하도록 보장합니다. 각 단계는 이전 단계를 기반으로 구축되어 맥락에 적합하고 차별화된 연구 옵션을 제공합니다.',

    phases: [
      {
        number: 1,
        title: '모달 응답 감지',
        icon: Target,
        description: 'AI 모델의 90%가 일반적으로 제안할 내용 식별',
        details: [
          '일반적인 패턴과 기본 권장 사항 인식',
          '예측 가능한 응답 플래그 지정 (T-Score > 0.7)',
          '"명백한 선택" 명시적으로 인정',
          '이것들이 모달 응답인 이유 이해',
        ],
        example: {
          context: '사용자 질문: "기술 채택 연구를 위한 이론적 프레임워크는?"',
          output: '⚠️ 모달 인식: TAM (T=0.92)과 UTAUT (T=0.85)는 이 영역에서 가장 예측 가능한 선택입니다.',
        },
      },
      {
        number: 2,
        title: '롱테일 탐색',
        icon: Lightbulb,
        description: '과소 대표된 관점과 비전통적 접근법 적극적으로 탐색',
        details: [
          '문헌의 소수 관점 고려',
          '엣지 케이스와 대안적 프레임워크 탐색',
          '분포 꼬리에서 샘플링 (T < 0.5)',
          '학제간 관점 포함',
        ],
        example: {
          context: '모달 프레임워크를 넘어 확장',
          output: '대안 방향:\n• 자기결정이론 x TAM (T=0.6)\n• 인지부하이론 + 적응적 생태계 (T=0.4)\n• 신경가소성 기반 기술 학습 (T=0.2)',
        },
      },
      {
        number: 3,
        title: '맥락 적합성 분석',
        icon: Workflow,
        description: '특정 연구 맥락에 대한 옵션 평가',
        details: [
          '연구 패러다임에 접근법 매칭',
          '사용자의 제약 조건과 리소스 고려',
          '실현 가능성과 정당화 가능성 평가',
          '기관 요구 사항과 정렬',
        ],
        example: {
          context: '사용자의 특정 맥락에 대한 각 옵션 평가',
          output: '방향 B (T=0.4) 권장:\n• "채택할 것인가" 뿐만 아니라 "왜" 다룸\n• AI 채택 맥락에서 새로움\n• 학위 논문 일정에 관리 가능한 범위',
        },
      },
      {
        number: 4,
        title: '차별화된 응답 생성',
        icon: CheckCircle,
        description: '1-3단계의 통찰을 실행 가능한 옵션으로 종합',
        details: [
          '모달 패턴을 피하는 응답 생성',
          'T-Score 스펙트럼 전체에 걸쳐 3-4개 옵션 제시',
          '실용적 적용 가능성 보장',
          '각 옵션에 대한 명확한 장단점 제공',
        ],
        example: {
          context: '사용자에게 최종 제시',
          output: '체크포인트: CP_THEORY_SELECTION\n\n방향 A (T=0.6): 안전한 차별화\n방향 B (T=0.4): 균형 잡힌 새로움 ⭐\n방향 C (T=0.2): 실험적',
        },
      },
      {
        number: 5,
        title: '메타인지 검증',
        icon: Users,
        description: 'Mode Collapse 자체 점검 및 응답 품질 검증',
        details: [
          '스펙트럼 전체에 걸친 응답 다양성 검증',
          '사용자 요구와의 정렬 확인',
          '의도하지 않은 모달 드리프트 점검',
          '인간 결정 권한 보장',
        ],
        example: {
          context: '사용자에게 제시하기 전 내부 검증',
          output: '✓ 모달 패턴 식별 및 레이블 지정됨\n✓ 롱테일 옵션 포함됨 (T < 0.4)\n✓ 맥락 적합 권장 사항\n✓ 인간 체크포인트 시행됨',
        },
      },
    ],

    enhanced: {
      title: 'Enhanced VS (3단계)',
      description: '효율성을 위해 일부 에이전트는 반모달 원칙을 유지하면서 단계를 결합한 간소화된 3단계 프로세스를 사용합니다.',
      phases: [
        { phase: '1단계', combines: '모달 감지 + 맥락', agents: 'A4, A6, B2, B3' },
        { phase: '2단계', combines: '탐색 + 분석', agents: 'C1, C2, D1-D4' },
        { phase: '3단계', combines: '생성 + 검증', agents: 'E1-E5, F3, F4' },
      ],
      note: 'Enhanced VS는 반복 시간을 30-60초에서 15-30초로 줄이면서 핵심 반모달 원칙을 유지합니다.',
    },

    light: {
      title: 'Light VS',
      description: '모달 응답이 수용 가능한 간단한 작업을 위한 최소 VS 적용.',
      features: [
        '전체 샘플링 없이 기본 모달 인식',
        '모달 응답에 대한 단일 대안',
        '간소화된 맥락 매칭',
        'F1, F2, F5, G1, G2 에이전트에서 사용',
      ],
    },

    workflow: {
      title: 'VS 워크플로우 다이어그램',
      steps: [
        { from: '사용자 요청', to: '1단계: 모달 감지', description: '예측 가능한 응답 식별' },
        { from: '1단계', to: '2단계: 롱테일 샘플링', description: '대안 탐색' },
        { from: '2단계', to: '3단계: 맥락 분석', description: '사용자 요구에 매칭' },
        { from: '3단계', to: '4단계: 응답 생성', description: '옵션 제시' },
        { from: '4단계', to: '5단계: 검증', description: '품질 자체 점검' },
        { from: '5단계', to: '인간 체크포인트', description: '사용자 결정' },
      ],
    },

    benefits: {
      title: '왜 5단계인가?',
      items: [
        {
          phase: '1단계',
          benefit: '투명성',
          explanation: '사용자가 "명백한" 선택이 무엇인지 보고 정보에 입각한 결정을 내릴 수 있음',
        },
        {
          phase: '2단계',
          benefit: '창의성',
          explanation: '더 나은 적합성을 가질 수 있는 과소 대표된 옵션 탐색 강제',
        },
        {
          phase: '3단계',
          benefit: '실용성',
          explanation: '실제 제약 조건을 고려한 실현 가능한 권장 사항 보장',
        },
        {
          phase: '4단계',
          benefit: '실행 가능성',
          explanation: '장단점이 있는 명확한 옵션 제시로 자신 있는 선택 가능',
        },
        {
          phase: '5단계',
          benefit: '품질',
          explanation: '메타인지 검증이 사용자에게 제시하기 전에 Mode Collapse를 포착',
        },
      ],
    },

    cta: {
      title: 'VS 실제 작동 보기',
      description: '전체 5단계 VS 프로세스를 구현하는 에이전트를 탐색하세요.',
      button: '전체 VS 에이전트 보기',
    },
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } as any },
};

export default function VSProcessPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/vs-methodology`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-16"
        >
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="text-body-lg text-stellar-dim max-w-3xl">{t.subtitle}</p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 bg-void-elevated border border-stellar-faint/10"
        >
          <p className="text-body text-stellar-bright leading-relaxed">{t.intro}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* 5 Phases */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="space-y-12">
            {t.phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.number}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Connector line (except for last phase) */}
                  {index < t.phases.length - 1 && (
                    <div
                      className="absolute left-8 top-20 bottom-0 w-px -mb-12"
                      style={{
                        background: 'linear-gradient(180deg, rgba(68, 255, 170, 0.3) 0%, rgba(68, 255, 170, 0.1) 100%)',
                      }}
                    />
                  )}

                  <div className="flex gap-6">
                    {/* Phase number icon */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="flex h-16 w-16 items-center justify-center border"
                        style={{
                          backgroundColor: phase.number === 5 ? '#9b59b6' : '#44ffaa',
                          borderColor: phase.number === 5 ? '#9b59b6' : '#44ffaa',
                          color: '#050508',
                          boxShadow: `0 0 20px ${phase.number === 5 ? 'rgba(155, 89, 182, 0.3)' : 'rgba(68, 255, 170, 0.3)'}`,
                        }}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center font-mono text-xs font-bold bg-void-deep border"
                        style={{
                          color: phase.number === 5 ? '#9b59b6' : '#44ffaa',
                          borderColor: phase.number === 5 ? '#9b59b6' : '#44ffaa',
                        }}
                      >
                        {phase.number}
                      </div>
                    </div>

                    {/* Phase content */}
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="void-heading-2 text-stellar-core mb-2">{phase.title}</h3>
                        <p className="text-body text-stellar-dim">{phase.description}</p>
                      </div>

                      {/* Details */}
                      <div className="mb-6 bg-void-elevated border border-stellar-faint/10 p-5">
                        <ul className="space-y-2">
                          {phase.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div
                                className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#44ffaa' }}
                              />
                              <span className="text-body text-stellar-bright">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Example */}
                      <div
                        className="p-4 border"
                        style={{
                          backgroundColor: 'rgba(68, 255, 170, 0.05)',
                          borderColor: 'rgba(68, 255, 170, 0.2)',
                        }}
                      >
                        <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: '#44ffaa' }}>
                          {phase.example.context}
                        </div>
                        <pre className="text-sm text-stellar-bright whitespace-pre-wrap font-mono">
                          {phase.example.output}
                        </pre>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-8">{t.benefits.title}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="px-2 py-1 font-mono text-xs"
                    style={{
                      color: '#44ffaa',
                      backgroundColor: 'rgba(68, 255, 170, 0.1)',
                      border: '1px solid rgba(68, 255, 170, 0.3)',
                    }}
                  >
                    {item.phase}
                  </div>
                  <span className="font-bold text-stellar-core">{item.benefit}</span>
                </div>
                <p className="text-body text-stellar-dim leading-relaxed">{item.explanation}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Enhanced VS Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.enhanced.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.enhanced.description}</p>

          <div className="grid gap-4 sm:grid-cols-3 mb-4">
            {t.enhanced.phases.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-void-elevated border"
                style={{
                  borderColor: 'rgba(34, 204, 255, 0.3)',
                  backgroundColor: 'rgba(34, 204, 255, 0.05)',
                }}
              >
                <div className="font-mono text-sm font-bold mb-1" style={{ color: '#22ccff' }}>
                  {item.phase}
                </div>
                <div className="text-body text-stellar-bright mb-2">{item.combines}</div>
                <div className="font-mono text-xs text-stellar-faint">{item.agents}</div>
              </div>
            ))}
          </div>

          <div
            className="p-4 border"
            style={{
              backgroundColor: 'rgba(34, 204, 255, 0.05)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <p className="text-body text-stellar-dim">{t.enhanced.note}</p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Light VS Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.light.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.light.description}</p>

          <div className="bg-void-elevated border border-stellar-faint/10 p-5">
            <ul className="space-y-2">
              {t.light.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#8888aa' }} />
                  <span className="text-stellar-bright">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(34, 204, 255, 0.1) 100%)',
              borderColor: 'rgba(68, 255, 170, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.cta.title}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.cta.description}</p>
            <Link
              href={`/${locale}/agents?tier=high&paradigm=all&category=A`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.cta.button}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
