"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Lightbulb, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'VS Methodology',
    subtitle: 'Variance Sampling: Breaking Free from Mode Collapse',

    // Problem Section
    problemTitle: 'The Problem: Mode Collapse',
    problemDescription: 'When you ask AI for theoretical frameworks, you often get the same predictable answers every time.',
    problemExample: 'Example: "Suggest a theory for technology adoption research"',
    problemResponse: 'TAM (Technology Acceptance Model)',
    problemExplanation: 'TAM appears in ~40% of technology adoption studies. While valid, this "modal answer" limits research diversity and theoretical innovation.',

    // T-Score Section
    tscoreTitle: 'Understanding T-Score (Typicality)',
    tscoreDescription: 'T-Score measures how "typical" or predictable a response is. Higher scores indicate more common, expected answers.',
    tscoreRanges: [
      { range: 'T > 0.7', label: 'Modal', description: 'Highly predictable, overused options', color: 'modal' },
      { range: 'T 0.4-0.7', label: 'Established', description: 'Well-validated, commonly accepted', color: 'typical' },
      { range: 'T 0.2-0.4', label: 'Emerging', description: 'Innovative but grounded in literature', color: 'creative' },
      { range: 'T < 0.2', label: 'Experimental', description: 'Novel approaches requiring justification', color: 'divergent' },
    ],

    // Solution Section
    solutionTitle: 'The Solution: Variance Sampling',
    solutionDescription: 'VS methodology actively samples across the typicality spectrum, presenting options from modal to experimental.',

    // VS Process
    processTitle: 'VS 5-Phase Process',
    phases: [
      {
        number: 1,
        title: 'Modal Awareness',
        description: 'Identify the most common/predictable responses (T > 0.7) and explicitly acknowledge them as "obvious choices".',
      },
      {
        number: 2,
        title: 'Long-tail Sampling',
        description: 'Deliberately explore less common alternatives from the distribution tail (T < 0.5).',
      },
      {
        number: 3,
        title: 'Context Matching',
        description: 'Evaluate each option against the specific research context, not just general popularity.',
      },
      {
        number: 4,
        title: 'Differentiated Presentation',
        description: 'Present 3-4 options across the T-Score spectrum with clear trade-offs for each.',
      },
      {
        number: 5,
        title: 'Human Checkpoint',
        description: 'Require explicit researcher approval before proceeding with any theoretical choice.',
      },
    ],

    // VS Levels
    levelsTitle: 'VS Implementation Levels',
    levels: [
      {
        level: 'FULL',
        description: 'Complete 5-phase process for critical decisions',
        agents: 'A1, A2, A3, B1',
        tScore: 0.25,
      },
      {
        level: 'ENHANCED',
        description: '3-phase process (awareness, sampling, presentation)',
        agents: 'A4, A6, B2, B3, C1, C2',
        tScore: 0.45,
      },
      {
        level: 'LIGHT',
        description: 'Basic modal awareness without full sampling',
        agents: 'D1-D4, E1-E5, F1-F5',
        tScore: 0.65,
      },
    ],

    // Example
    exampleTitle: 'VS in Action',
    exampleInput: 'Help me choose a theoretical framework for AI adoption in education',
    exampleOutput: `CHECKPOINT: CP_THEORY_SELECTION

[Modal Awareness]
TAM (T=0.92) and UTAUT (T=0.85) are predictable choices.

Recommended Alternatives:

  Direction A (T=0.6): Self-Determination Theory x TAM
  - Adds intrinsic motivation dimensions
  - Addresses "why" not just "will they"

  Direction B (T=0.4): Cognitive Load Theory + Adaptive Ecosystem
  - Novel for AI adoption context
  - Explains learning-adoption interaction

  Direction C (T=0.2): Neuroplasticity-Based Technology Learning
  - Highly innovative, requires strong justification

Which direction would you like to proceed?`,

    // Benefits
    benefitsTitle: 'Benefits of VS Methodology',
    benefits: [
      'Breaks free from predictable, overused theories',
      'Presents options across the innovation spectrum',
      'Maintains scientific rigor while encouraging creativity',
      'Empowers researchers with informed choices',
      'Documents decision rationale for transparency',
    ],

    // CTA
    ctaTitle: 'Ready to Try VS?',
    ctaDescription: 'Explore our agents that implement VS methodology.',
    ctaButton: 'Browse VS Agents',
  },
  ko: {
    back: '문서로 돌아가기',
    title: 'VS 방법론',
    subtitle: 'Variance Sampling: Mode Collapse에서 벗어나기',

    // Problem Section
    problemTitle: '문제: Mode Collapse',
    problemDescription: 'AI에게 이론적 프레임워크를 물으면 매번 같은 예측 가능한 답변을 받게 됩니다.',
    problemExample: '예시: "기술 채택 연구를 위한 이론을 제안해줘"',
    problemResponse: 'TAM (기술수용모델)',
    problemExplanation: 'TAM은 기술 채택 연구의 약 40%에 등장합니다. 유효하지만, 이 "모달 답변"은 연구 다양성과 이론적 혁신을 제한합니다.',

    // T-Score Section
    tscoreTitle: 'T-Score (전형성) 이해하기',
    tscoreDescription: 'T-Score는 응답이 얼마나 "전형적"이거나 예측 가능한지를 측정합니다. 높은 점수는 더 흔하고 예상되는 답변을 나타냅니다.',
    tscoreRanges: [
      { range: 'T > 0.7', label: '모달', description: '매우 예측 가능, 과다 사용된 옵션', color: 'modal' },
      { range: 'T 0.4-0.7', label: '확립됨', description: '잘 검증되고 일반적으로 수용됨', color: 'typical' },
      { range: 'T 0.2-0.4', label: '부상중', description: '혁신적이지만 문헌에 기반', color: 'creative' },
      { range: 'T < 0.2', label: '실험적', description: '정당화가 필요한 새로운 접근법', color: 'divergent' },
    ],

    // Solution Section
    solutionTitle: '해결책: Variance Sampling',
    solutionDescription: 'VS 방법론은 전형성 스펙트럼 전체를 적극적으로 샘플링하여 모달에서 실험적까지의 옵션을 제시합니다.',

    // VS Process
    processTitle: 'VS 5단계 프로세스',
    phases: [
      {
        number: 1,
        title: '모달 인식',
        description: '가장 일반적/예측 가능한 응답(T > 0.7)을 식별하고 "명백한 선택"으로 명시적으로 인정합니다.',
      },
      {
        number: 2,
        title: '롱테일 샘플링',
        description: '분포 꼬리(T < 0.5)에서 덜 일반적인 대안을 의도적으로 탐색합니다.',
      },
      {
        number: 3,
        title: '맥락 매칭',
        description: '일반적인 인기도가 아닌 특정 연구 맥락에 대해 각 옵션을 평가합니다.',
      },
      {
        number: 4,
        title: '차별화된 제시',
        description: 'T-Score 스펙트럼 전체에 걸쳐 각각의 명확한 장단점과 함께 3-4개의 옵션을 제시합니다.',
      },
      {
        number: 5,
        title: '인간 체크포인트',
        description: '이론적 선택을 진행하기 전에 연구자의 명시적 승인을 요구합니다.',
      },
    ],

    // VS Levels
    levelsTitle: 'VS 구현 수준',
    levels: [
      {
        level: 'FULL',
        description: '중요한 결정을 위한 완전한 5단계 프로세스',
        agents: 'A1, A2, A3, B1',
        tScore: 0.25,
      },
      {
        level: 'ENHANCED',
        description: '3단계 프로세스 (인식, 샘플링, 제시)',
        agents: 'A4, A6, B2, B3, C1, C2',
        tScore: 0.45,
      },
      {
        level: 'LIGHT',
        description: '전체 샘플링 없이 기본 모달 인식',
        agents: 'D1-D4, E1-E5, F1-F5',
        tScore: 0.65,
      },
    ],

    // Example
    exampleTitle: 'VS 실제 작동',
    exampleInput: 'AI 교육 채택을 위한 이론적 프레임워크를 선택해주세요',
    exampleOutput: `체크포인트: CP_THEORY_SELECTION

[모달 인식]
TAM (T=0.92)과 UTAUT (T=0.85)는 예측 가능한 선택입니다.

권장 대안:

  방향 A (T=0.6): 자기결정이론 x TAM
  - 내재적 동기 차원 추가
  - "할 것인가" 뿐만 아니라 "왜"를 다룸

  방향 B (T=0.4): 인지부하이론 + 적응적 생태계
  - AI 채택 맥락에서 새로움
  - 학습-채택 상호작용 설명

  방향 C (T=0.2): 신경가소성 기반 기술 학습
  - 매우 혁신적, 강력한 정당화 필요

어떤 방향으로 진행하시겠습니까?`,

    // Benefits
    benefitsTitle: 'VS 방법론의 장점',
    benefits: [
      '예측 가능하고 과다 사용된 이론에서 벗어남',
      '혁신 스펙트럼 전체에 걸친 옵션 제시',
      '창의성을 장려하면서 과학적 엄밀성 유지',
      '정보에 입각한 선택으로 연구자 역량 강화',
      '투명성을 위한 결정 근거 문서화',
    ],

    // CTA
    ctaTitle: 'VS를 사용해 볼 준비가 되셨나요?',
    ctaDescription: 'VS 방법론을 구현하는 에이전트를 탐색하세요.',
    ctaButton: 'VS 에이전트 보기',
  },
};

// T-Score colors from design system
const tscoreColors: Record<string, { text: string; bg: string; bar: string }> = {
  modal: { text: '#ff3366', bg: 'rgba(255, 51, 102, 0.1)', bar: '#ff3366' },
  typical: { text: '#ff8844', bg: 'rgba(255, 136, 68, 0.1)', bar: '#ff8844' },
  creative: { text: '#44ffaa', bg: 'rgba(68, 255, 170, 0.1)', bar: '#44ffaa' },
  divergent: { text: '#22ccff', bg: 'rgba(34, 204, 255, 0.1)', bar: '#22ccff' },
};

// Helper to get T-Score color
function getTScoreColor(score: number): string {
  if (score >= 0.8) return '#ff3366';
  if (score >= 0.6) return '#ff8844';
  if (score >= 0.4) return '#ffcc22';
  if (score >= 0.2) return '#44ffaa';
  return '#22ccff';
}

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function VSMethodologyPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          {/* T-Score Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-stellar-faint/20 bg-void-surface/50 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#44ffaa' }} />
            <span className="font-mono text-xs uppercase tracking-widest text-stellar-faint">
              Creative Range
            </span>
            <span className="font-mono text-sm text-stellar-dim">T-0.42</span>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="text-body-lg text-stellar-dim max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Problem Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 51, 102, 0.15)' }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: '#ff3366' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.problemTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.problemDescription}</p>

          <div
            className="p-6 border"
            style={{
              backgroundColor: 'rgba(255, 51, 102, 0.05)',
              borderColor: 'rgba(255, 51, 102, 0.2)',
            }}
          >
            <p className="font-mono text-sm mb-2" style={{ color: '#ff3366' }}>{t.problemExample}</p>
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5" style={{ color: '#ff3366' }} />
              <span className="void-heading-3" style={{ color: '#ff3366' }}>{t.problemResponse}</span>
            </div>
            <p className="text-body text-stellar-dim">{t.problemExplanation}</p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* T-Score Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <TrendingUp className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.tscoreTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.tscoreDescription}</p>

          {/* T-Score Visualization */}
          <div className="bg-void-elevated border border-stellar-faint/10 p-8 mb-8">
            <div className="space-y-6">
              {t.tscoreRanges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-24 font-mono text-sm font-bold text-stellar-dim">
                    {item.range}
                  </div>
                  <div className="flex-1">
                    <div className="h-8 bg-void-surface border border-stellar-faint/10 overflow-hidden">
                      <motion.div
                        className="h-full"
                        style={{ backgroundColor: tscoreColors[item.color].bar }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - index * 25}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                  <div
                    className="px-3 py-1.5 font-mono text-xs uppercase tracking-wider border"
                    style={{
                      color: tscoreColors[item.color].text,
                      backgroundColor: tscoreColors[item.color].bg,
                      borderColor: `${tscoreColors[item.color].text}30`,
                    }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* T-Score Legend Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {t.tscoreRanges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 border transition-all duration-300"
                style={{
                  backgroundColor: tscoreColors[item.color].bg,
                  borderColor: `${tscoreColors[item.color].text}30`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="font-mono font-bold"
                    style={{ color: tscoreColors[item.color].text }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="font-mono text-sm px-2 py-1 bg-void-deep/50"
                    style={{ color: tscoreColors[item.color].text }}
                  >
                    {item.range}
                  </span>
                </div>
                <p className="text-body text-stellar-dim leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Lightbulb className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.solutionTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim">{t.solutionDescription}</p>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* VS Process Section - 5-Phase Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-12 text-center">{t.processTitle}</h2>

          <div className="relative">
            {/* Connector line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(180deg, rgba(68, 255, 170, 0.2) 0%, rgba(34, 204, 255, 0.2) 100%)',
              }}
            />

            <div className="space-y-6">
              {t.phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ x: 4 }}
                  className="flex gap-6 relative"
                >
                  {/* Phase number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div
                      className="flex h-16 w-16 items-center justify-center font-mono text-xl font-bold"
                      style={{
                        backgroundColor: phase.number === 5 ? '#9b59b6' : '#44ffaa',
                        color: '#050508',
                        boxShadow: `0 0 20px ${phase.number === 5 ? 'rgba(155, 89, 182, 0.3)' : 'rgba(68, 255, 170, 0.3)'}`,
                      }}
                    >
                      {phase.number}
                    </div>
                  </div>

                  {/* Phase card */}
                  <div
                    className="flex-1 p-6 border transition-all duration-300"
                    style={{
                      backgroundColor: phase.number === 5 ? 'rgba(155, 89, 182, 0.05)' : 'rgba(18, 18, 26, 1)',
                      borderColor: phase.number === 5 ? 'rgba(155, 89, 182, 0.3)' : 'rgba(68, 68, 90, 0.3)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <h3
                        className="void-heading-3"
                        style={{ color: phase.number === 5 ? '#9b59b6' : '#f0f0f5' }}
                      >
                        {phase.title}
                      </h3>
                      {phase.number === 5 && (
                        <span
                          className="px-2 py-0.5 font-mono text-xs uppercase"
                          style={{
                            color: '#9b59b6',
                            backgroundColor: 'rgba(155, 89, 182, 0.1)',
                            border: '1px solid rgba(155, 89, 182, 0.3)',
                          }}
                        >
                          Human Decision
                        </span>
                      )}
                    </div>
                    <p className="text-body text-stellar-dim leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* VS Levels Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-6">{t.levelsTitle}</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.levels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="px-3 py-1 font-mono text-xs uppercase tracking-wider"
                    style={{
                      color: level.level === 'FULL' ? '#44ffaa' : level.level === 'ENHANCED' ? '#22ccff' : '#8888aa',
                      backgroundColor: level.level === 'FULL' ? 'rgba(68, 255, 170, 0.1)' : level.level === 'ENHANCED' ? 'rgba(34, 204, 255, 0.1)' : 'rgba(136, 136, 170, 0.1)',
                      border: `1px solid ${level.level === 'FULL' ? 'rgba(68, 255, 170, 0.3)' : level.level === 'ENHANCED' ? 'rgba(34, 204, 255, 0.3)' : 'rgba(136, 136, 170, 0.3)'}`,
                    }}
                  >
                    {level.level}
                  </div>
                  {/* T-Score indicator */}
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: getTScoreColor(level.tScore) }}
                    />
                    <span className="font-mono text-xs text-stellar-faint">
                      T-{level.tScore.toFixed(2)}
                    </span>
                  </div>
                </div>
                <p className="text-body text-stellar-dim mb-3">{level.description}</p>
                <p className="font-mono text-xs text-stellar-faint">{level.agents}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Example Section - Terminal Style */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-6">{t.exampleTitle}</h2>

          <div className="space-y-4">
            {/* Input */}
            <div className="bg-void-elevated border border-stellar-faint/10 p-4">
              <div className="font-mono text-xs uppercase tracking-wider text-stellar-faint mb-2">Input</div>
              <p className="text-stellar-bright">{t.exampleInput}</p>
            </div>

            {/* Output - Terminal style */}
            <div className="void-terminal overflow-hidden">
              <div className="void-terminal-header">
                <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                  A2 Response
                </span>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#44ffaa' }} />
                  <span className="font-mono text-xs" style={{ color: '#44ffaa' }}>Active</span>
                </div>
              </div>
              <div className="p-4 void-terminal-content">
                <pre className="whitespace-pre-wrap font-mono text-sm text-stellar-bright">
                  {t.exampleOutput}
                </pre>
              </div>
            </div>
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
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 204, 34, 0.15)' }}
            >
              <Sparkles className="h-5 w-5" style={{ color: '#ffcc22' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.benefitsTitle}</h2>
          </div>

          <div className="bg-void-elevated border border-stellar-faint/10 p-6">
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {t.benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#44ffaa' }} />
                  <span className="text-stellar-bright">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
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
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/agents?tier=all&paradigm=all&category=A`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
