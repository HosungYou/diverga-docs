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
      { range: 'T > 0.7', label: 'Modal', description: 'Highly predictable, overused options', color: 'tscore-modal' },
      { range: 'T 0.4-0.7', label: 'Established', description: 'Well-validated, commonly accepted', color: 'tscore-established' },
      { range: 'T 0.2-0.4', label: 'Emerging', description: 'Innovative but grounded in literature', color: 'tscore-emerging' },
      { range: 'T < 0.2', label: 'Experimental', description: 'Novel approaches requiring justification', color: 'tscore-experimental' },
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
      },
      {
        level: 'ENHANCED',
        description: '3-phase process (awareness, sampling, presentation)',
        agents: 'A4, A6, B2, B3, C1, C2',
      },
      {
        level: 'LIGHT',
        description: 'Basic modal awareness without full sampling',
        agents: 'D1-D4, E1-E5, F1-F5',
      },
    ],

    // Example
    exampleTitle: 'VS in Action',
    exampleInput: 'Help me choose a theoretical framework for AI adoption in education',
    exampleOutput: `🔴 CHECKPOINT: CP_THEORY_SELECTION

[Modal Awareness]
TAM (T=0.92) and UTAUT (T=0.85) are predictable choices.

Recommended Alternatives:

• Direction A (T≈0.6): Self-Determination Theory × TAM
  - Adds intrinsic motivation dimensions
  - Addresses "why" not just "will they"

• Direction B (T≈0.4): Cognitive Load Theory + Adaptive Ecosystem ⭐
  - Novel for AI adoption context
  - Explains learning-adoption interaction

• Direction C (T≈0.2): Neuroplasticity-Based Technology Learning
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
      { range: 'T > 0.7', label: '모달', description: '매우 예측 가능, 과다 사용된 옵션', color: 'tscore-modal' },
      { range: 'T 0.4-0.7', label: '확립됨', description: '잘 검증되고 일반적으로 수용됨', color: 'tscore-established' },
      { range: 'T 0.2-0.4', label: '부상중', description: '혁신적이지만 문헌에 기반', color: 'tscore-emerging' },
      { range: 'T < 0.2', label: '실험적', description: '정당화가 필요한 새로운 접근법', color: 'tscore-experimental' },
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
      },
      {
        level: 'ENHANCED',
        description: '3단계 프로세스 (인식, 샘플링, 제시)',
        agents: 'A4, A6, B2, B3, C1, C2',
      },
      {
        level: 'LIGHT',
        description: '전체 샘플링 없이 기본 모달 인식',
        agents: 'D1-D4, E1-E5, F1-F5',
      },
    ],

    // Example
    exampleTitle: 'VS 실제 작동',
    exampleInput: 'AI 교육 채택을 위한 이론적 프레임워크를 선택해주세요',
    exampleOutput: `🔴 체크포인트: CP_THEORY_SELECTION

[모달 인식]
TAM (T=0.92)과 UTAUT (T=0.85)는 예측 가능한 선택입니다.

권장 대안:

• 방향 A (T≈0.6): 자기결정이론 × TAM
  - 내재적 동기 차원 추가
  - "할 것인가" 뿐만 아니라 "왜"를 다룸

• 방향 B (T≈0.4): 인지부하이론 + 적응적 생태계 ⭐
  - AI 채택 맥락에서 새로움
  - 학습-채택 상호작용 설명

• 방향 C (T≈0.2): 신경가소성 기반 기술 학습
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

const tscoreColors: Record<string, string> = {
  'tscore-modal': 'bg-red-100 text-red-700 border-red-300',
  'tscore-established': 'bg-blue-100 text-blue-700 border-blue-300',
  'tscore-emerging': 'bg-emerald-100 text-emerald-700 border-emerald-300',
  'tscore-experimental': 'bg-purple-100 text-purple-700 border-purple-300',
};

const tscoreBarColors: Record<string, string> = {
  'tscore-modal': 'bg-red-500',
  'tscore-established': 'bg-blue-500',
  'tscore-emerging': 'bg-emerald-500',
  'tscore-experimental': 'bg-purple-500',
};

export default function VSMethodologyPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
          className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-h1 font-bold text-[var(--foreground)]">{t.title}</h1>
          <p className="mt-4 text-xl text-[var(--muted-foreground)]">{t.subtitle}</p>
        </motion.div>

        {/* Problem Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.problemTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.problemDescription}</p>

          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <p className="text-sm text-red-600 mb-2">{t.problemExample}</p>
            <div className="flex items-center gap-3 mb-4">
              <ArrowRight className="h-5 w-5 text-red-500" />
              <span className="text-xl font-bold text-red-700">{t.problemResponse}</span>
            </div>
            <p className="text-sm text-red-700">{t.problemExplanation}</p>
          </div>
        </motion.section>

        {/* T-Score Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-diverga-100">
              <TrendingUp className="h-5 w-5 text-diverga-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.tscoreTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.tscoreDescription}</p>

          {/* T-Score Visualization with gradient bars */}
          <div className="rounded-[20px] bg-white p-8 mb-8
            shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]
            border border-gray-100">
            <div className="space-y-6">
              {t.tscoreRanges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + index * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <div className="w-28 text-sm font-mono font-bold text-gray-700">
                    {item.range}
                  </div>
                  <div className="flex-1">
                    <div className="h-10 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                      <motion.div
                        className={`h-full relative ${tscoreBarColors[item.color]}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${100 - index * 25}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      >
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-xl text-sm font-bold shadow-md ${tscoreColors[item.color]}`}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* T-Score Legend with hover effects */}
          <div className="grid gap-4 sm:grid-cols-2">
            {t.tscoreRanges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`rounded-[16px] p-5 ${tscoreColors[item.color]} border-2 cursor-default
                  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)]
                  transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-base">{item.label}</span>
                  <span className="text-sm font-mono font-bold px-2 py-1 rounded-lg bg-white/50">{item.range}</span>
                </div>
                <p className="text-sm leading-relaxed font-medium">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Solution Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <Lightbulb className="h-5 w-5 text-emerald-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.solutionTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)]">{t.solutionDescription}</p>
        </motion.section>

        {/* VS Process Section - 5-Phase Timeline with Glass Effect */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-h2 font-bold text-[var(--foreground)] mb-12 text-center">{t.processTitle}</h2>

          <div className="relative">
            {/* Animated connector line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-diverga-200 via-diverga-400 to-diverga-600 rounded-full"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-8">
              {t.phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.15, type: "spring", stiffness: 100 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="flex gap-6 relative"
                >
                  {/* Phase number with glow */}
                  <div className="flex-shrink-0 relative z-10">
                    <motion.div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl font-bold text-xl
                        shadow-[0_8px_16px_rgba(20,184,166,0.3)]
                        ${phase.number === 5
                          ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-white ring-4 ring-gold-200'
                          : 'bg-gradient-to-br from-diverga-400 to-diverga-600 text-white'}`}
                      animate={{
                        boxShadow: phase.number === 5
                          ? [
                              '0 8px 16px rgba(217,119,6,0.3)',
                              '0 12px 24px rgba(217,119,6,0.5)',
                              '0 8px 16px rgba(217,119,6,0.3)',
                            ]
                          : undefined,
                      }}
                      transition={{
                        duration: 2,
                        repeat: phase.number === 5 ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    >
                      {phase.number}
                    </motion.div>

                    {/* Animated connector dots */}
                    {index < t.phases.length - 1 && (
                      <div className="absolute left-1/2 top-16 -translate-x-1/2 flex flex-col gap-2 py-4">
                        {[0, 1, 2].map((dotIndex) => (
                          <motion.div
                            key={dotIndex}
                            className="w-2 h-2 rounded-full bg-diverga-400"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: dotIndex * 0.2 + index * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phase card with glass effect */}
                  <div className={`flex-1 rounded-[20px] p-6 backdrop-blur-sm
                    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]
                    hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]
                    border transition-all duration-300
                    ${phase.number === 5
                      ? 'bg-gradient-to-br from-gold-50/90 to-white/90 border-gold-200 hover:border-gold-400'
                      : 'bg-white/90 border-gray-100 hover:border-diverga-200'}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className={`font-bold text-lg
                        ${phase.number === 5 ? 'text-transparent bg-clip-text bg-gradient-to-r from-gold-700 to-diverga-600' : 'text-[var(--foreground)]'}`}>
                        {phase.title}
                      </h3>
                      {phase.number === 5 && (
                        <motion.span
                          className="text-gold-500"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          ⭐
                        </motion.span>
                      )}
                    </div>
                    <p className={`leading-relaxed ${phase.number === 5 ? 'text-gray-800 font-medium' : 'text-[var(--muted-foreground)]'}`}>
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* VS Levels Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-h2 font-bold text-[var(--foreground)] mb-6">{t.levelsTitle}</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.levels.map((level) => (
              <div
                key={level.level}
                className={`rounded-xl border p-5 ${
                  level.level === 'FULL'
                    ? 'border-emerald-300 bg-emerald-50'
                    : level.level === 'ENHANCED'
                    ? 'border-cyan-300 bg-cyan-50'
                    : 'border-[var(--border)] bg-[var(--card)]'
                }`}
              >
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-3 ${
                  level.level === 'FULL'
                    ? 'bg-emerald-200 text-emerald-800'
                    : level.level === 'ENHANCED'
                    ? 'bg-cyan-200 text-cyan-800'
                    : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                }`}>
                  {level.level}
                </div>
                <p className="text-sm text-[var(--foreground)] mb-2">{level.description}</p>
                <p className="text-xs font-mono text-[var(--muted-foreground)]">{level.agents}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Example Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-h2 font-bold text-[var(--foreground)] mb-6">{t.exampleTitle}</h2>

          <div className="space-y-4">
            {/* Input */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="text-sm font-medium text-[var(--muted-foreground)] mb-2">Input</div>
              <p className="text-[var(--foreground)]">{t.exampleInput}</p>
            </div>

            {/* Output */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">A2 Response</span>
              </div>
              <pre className="whitespace-pre-wrap text-sm text-emerald-800 font-mono">
                {t.exampleOutput}
              </pre>
            </div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100">
              <Sparkles className="h-5 w-5 text-gold-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.benefitsTitle}</h2>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <ul className="space-y-3">
              {t.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--foreground)]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="rounded-2xl bg-gradient-to-br from-diverga-500 to-teal-500 p-8 text-white">
            <h2 className="text-h2 font-bold mb-2">{t.ctaTitle}</h2>
            <p className="text-diverga-100 mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/agents?tier=all&paradigm=all&category=A`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-diverga-600 hover:bg-diverga-50 transition-colors"
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
