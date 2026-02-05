"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Zap,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to VS Methodology',
    title: 'T-Score System',
    subtitle: 'Measuring Typicality',
    philosophy: '"Break free from mode collapse with creative alternatives"',

    // Section 2: What is T-Score
    whatTitle: 'What is T-Score?',
    whatDescription: 'T-Score (Typicality Score) measures how common or typical a choice is in your research field. It ranges from 0 (experimental/novel) to 1.0 (modal/predictable).',
    whatPoints: [
      { icon: 'chart', text: 'Quantifies how typical a theoretical framework or methodological choice is' },
      { icon: 'target', text: 'Helps you understand the novelty-risk tradeoff' },
      { icon: 'lightbulb', text: 'Guides you toward balanced innovation vs. safety' },
    ],

    // Section 3: T-Score Range Table
    rangeTitle: 'T-Score Ranges',
    rangeDescription: 'Understanding what each T-Score range means for your research decisions:',
    ranges: [
      {
        score: '≥ 0.7',
        label: 'Common',
        meaning: 'Highly typical, safe but limited novelty',
        color: 'red',
        icon: '🔴',
        advice: 'Safe for replication, limited contribution potential',
      },
      {
        score: '0.4-0.7',
        label: 'Moderate',
        meaning: 'Balanced risk-novelty',
        color: 'orange',
        icon: '🟠',
        advice: 'Sweet spot for most research - established yet differentiated',
      },
      {
        score: '0.2-0.4',
        label: 'Innovative',
        meaning: 'Novel, requires strong justification',
        color: 'yellow',
        icon: '🟡',
        advice: 'High contribution potential, needs solid rationale',
      },
      {
        score: '< 0.2',
        label: 'Experimental',
        meaning: 'Highly novel, high risk/reward',
        color: 'green',
        icon: '🟢',
        advice: 'Breakthrough potential but substantial justification burden',
      },
    ],

    // Section 4: Visual T-Score Spectrum
    spectrumTitle: 'T-Score Spectrum',
    spectrumDescription: 'Visual representation of typicality levels:',

    // Section 5: VS Process Stages
    processTitle: 'VS Process with T-Scores',
    processDescription: 'How T-Scores fit into the 5-phase VS Methodology:',
    vsPhases: [
      { phase: 1, name: 'Context & Modal Identification', description: 'Identify the most typical choice (T ≥ 0.7)' },
      { phase: 2, name: 'Divergent Exploration', description: 'Explore 3 alternative directions with varying T-Scores' },
      { phase: 3, name: 'Human Selection', description: 'YOU choose based on T-Score and research goals', highlight: true },
    ],

    // Section 6: Example Scenario
    exampleTitle: 'Real-World Example',
    exampleDescription: 'Theory selection for AI adoption in education study:',
    scenario: {
      context: 'Research Question: How do educators adopt AI tools in classrooms?',
      options: [
        {
          theory: 'Technology Acceptance Model (TAM)',
          tscore: 0.92,
          label: 'Modal/Predictable',
          rationale: 'Most common choice in technology adoption research',
          pros: 'Well-established, easy to justify',
          cons: 'Limited novelty, saturated field',
        },
        {
          theory: 'Self-Determination Theory + TAM',
          tscore: 0.6,
          label: 'Safe Differentiated',
          rationale: 'Emerging integration gaining traction',
          pros: 'Balance of novelty and safety',
          cons: 'Moderate justification needed',
        },
        {
          theory: 'Cognitive Load Theory + Adaptive Ecosystems',
          tscore: 0.4,
          label: 'Balanced Novelty',
          rationale: 'Novel integration with theoretical grounding',
          pros: 'Strong contribution potential',
          cons: 'Requires thorough literature support',
          recommended: true,
        },
        {
          theory: 'Neuroplasticity-Based Learning Framework',
          tscore: 0.2,
          label: 'Experimental',
          rationale: 'Highly novel interdisciplinary approach',
          pros: 'Breakthrough potential',
          cons: 'High justification burden, risky for early-career',
        },
      ],
    },

    // Section 7: When to Use Each Level
    whenTitle: 'Choosing Your T-Score Level',
    whenDescription: 'Strategic guidance for different research contexts:',
    guidance: [
      {
        level: 'High T-Score (≥ 0.7)',
        when: 'Early career, replication studies, limited time/resources',
        icon: 'shield',
        color: 'red',
      },
      {
        level: 'Moderate T-Score (0.4-0.7)',
        when: 'Most dissertations, mainstream journals, balanced contribution',
        icon: 'target',
        color: 'orange',
      },
      {
        level: 'Low T-Score (0.2-0.4)',
        when: 'Established researchers, top-tier journals, strong rationale',
        icon: 'lightbulb',
        color: 'yellow',
      },
      {
        level: 'Very Low T-Score (< 0.2)',
        when: 'Paradigm shifts, interdisciplinary breakthroughs, high risk tolerance',
        icon: 'zap',
        color: 'green',
      },
    ],

    // Section 8: T-Score Warnings
    warningsTitle: 'T-Score Warnings',
    warningsDescription: 'What Diverga tells you when T-Scores indicate risk:',
    warnings: [
      {
        threshold: 'T > 0.85',
        warning: 'Very typical choice - consider differentiation',
        recommendation: 'Ask for VS alternatives to increase novelty',
      },
      {
        threshold: 'T < 0.3',
        warning: 'Experimental approach - strong justification required',
        recommendation: 'Ensure you have extensive literature support and clear rationale',
      },
      {
        threshold: 'T < 0.15',
        warning: 'Highly experimental - high risk for early-career researchers',
        recommendation: 'Consult advisor, consider hybrid approach with higher T-Score',
      },
    ],

    // Section 9: Connection to Human Checkpoints
    checkpointTitle: 'T-Scores at Checkpoints',
    checkpointDescription: 'When you reach a Human Checkpoint (e.g., CP_THEORY_SELECTION), Diverga presents options with T-Scores so you can make informed decisions.',
    checkpointLink: 'Learn about Human Checkpoints',

    // Section 10: CTA
    ctaTitle: 'Experience T-Score Guided Research',
    ctaDescription: 'Start using VS Methodology to get creative, T-Score ranked alternatives for your research decisions.',
    ctaButtons: {
      vsMethodology: 'VS Methodology Overview',
      agents: 'Browse Agents',
      start: 'Get Started',
    },
  },
  ko: {
    back: 'VS 방법론으로 돌아가기',
    title: 'T-Score 시스템',
    subtitle: '전형성 측정',
    philosophy: '"모드 붕괴에서 벗어나 창의적인 대안을 찾으세요"',

    // Section 2: What is T-Score
    whatTitle: 'T-Score란 무엇인가?',
    whatDescription: 'T-Score (전형성 점수)는 연구 분야에서 선택이 얼마나 일반적이거나 전형적인지 측정합니다. 0 (실험적/새로움)부터 1.0 (모달/예측 가능)까지 범위입니다.',
    whatPoints: [
      { icon: 'chart', text: '이론적 프레임워크 또는 방법론적 선택이 얼마나 전형적인지 정량화' },
      { icon: 'target', text: '새로움-위험 트레이드오프를 이해하도록 도움' },
      { icon: 'lightbulb', text: '균형 잡힌 혁신 대 안전성으로 안내' },
    ],

    // Section 3: T-Score Range Table
    rangeTitle: 'T-Score 범위',
    rangeDescription: '각 T-Score 범위가 연구 결정에 대해 의미하는 바:',
    ranges: [
      {
        score: '≥ 0.7',
        label: '일반적',
        meaning: '매우 전형적, 안전하지만 새로움 제한적',
        color: 'red',
        icon: '🔴',
        advice: '재현에 안전, 제한된 기여 잠재력',
      },
      {
        score: '0.4-0.7',
        label: '중간',
        meaning: '위험-새로움 균형',
        color: 'orange',
        icon: '🟠',
        advice: '대부분의 연구에 최적 - 확립되었지만 차별화됨',
      },
      {
        score: '0.2-0.4',
        label: '혁신적',
        meaning: '새로움, 강력한 정당화 필요',
        color: 'yellow',
        icon: '🟡',
        advice: '높은 기여 잠재력, 견고한 근거 필요',
      },
      {
        score: '< 0.2',
        label: '실험적',
        meaning: '매우 새로움, 높은 위험/보상',
        color: 'green',
        icon: '🟢',
        advice: '돌파구 잠재력이지만 상당한 정당화 부담',
      },
    ],

    // Section 4: Visual T-Score Spectrum
    spectrumTitle: 'T-Score 스펙트럼',
    spectrumDescription: '전형성 수준의 시각적 표현:',

    // Section 5: VS Process Stages
    processTitle: 'T-Score를 사용한 VS 프로세스',
    processDescription: 'T-Score가 5단계 VS 방법론에 어떻게 적용되는지:',
    vsPhases: [
      { phase: 1, name: '맥락 및 모달 식별', description: '가장 전형적인 선택 식별 (T ≥ 0.7)' },
      { phase: 2, name: '발산적 탐색', description: '다양한 T-Score로 3가지 대안 방향 탐색' },
      { phase: 3, name: '인간 선택', description: 'T-Score와 연구 목표에 따라 선택', highlight: true },
    ],

    // Section 6: Example Scenario
    exampleTitle: '실제 사례',
    exampleDescription: '교육에서 AI 채택 연구를 위한 이론 선택:',
    scenario: {
      context: '연구 질문: 교육자들은 교실에서 AI 도구를 어떻게 채택하는가?',
      options: [
        {
          theory: '기술 수용 모델 (TAM)',
          tscore: 0.92,
          label: '모달/예측 가능',
          rationale: '기술 채택 연구에서 가장 일반적인 선택',
          pros: '잘 확립됨, 정당화 쉬움',
          cons: '제한된 새로움, 포화된 분야',
        },
        {
          theory: '자기결정이론 + TAM',
          tscore: 0.6,
          label: '안전한 차별화',
          rationale: '주목받고 있는 신흥 통합',
          pros: '새로움과 안전성의 균형',
          cons: '중간 정당화 필요',
        },
        {
          theory: '인지부하이론 + 적응적 생태계',
          tscore: 0.4,
          label: '균형 잡힌 새로움',
          rationale: '이론적 근거를 가진 새로운 통합',
          pros: '강력한 기여 잠재력',
          cons: '철저한 문헌 지원 필요',
          recommended: true,
        },
        {
          theory: '신경가소성 기반 학습 프레임워크',
          tscore: 0.2,
          label: '실험적',
          rationale: '매우 새로운 학제간 접근법',
          pros: '돌파구 잠재력',
          cons: '높은 정당화 부담, 초기 경력자에게 위험',
        },
      ],
    },

    // Section 7: When to Use Each Level
    whenTitle: 'T-Score 수준 선택',
    whenDescription: '다양한 연구 맥락에 대한 전략적 지침:',
    guidance: [
      {
        level: '높은 T-Score (≥ 0.7)',
        when: '초기 경력, 재현 연구, 제한된 시간/자원',
        icon: 'shield',
        color: 'red',
      },
      {
        level: '중간 T-Score (0.4-0.7)',
        when: '대부분의 학위논문, 주류 저널, 균형 잡힌 기여',
        icon: 'target',
        color: 'orange',
      },
      {
        level: '낮은 T-Score (0.2-0.4)',
        when: '확립된 연구자, 최상위 저널, 강력한 근거',
        icon: 'lightbulb',
        color: 'yellow',
      },
      {
        level: '매우 낮은 T-Score (< 0.2)',
        when: '패러다임 전환, 학제간 돌파구, 높은 위험 감수',
        icon: 'zap',
        color: 'green',
      },
    ],

    // Section 8: T-Score Warnings
    warningsTitle: 'T-Score 경고',
    warningsDescription: 'T-Score가 위험을 나타낼 때 Diverga가 알려주는 것:',
    warnings: [
      {
        threshold: 'T > 0.85',
        warning: '매우 전형적인 선택 - 차별화 고려',
        recommendation: 'VS 대안을 요청하여 새로움 증가',
      },
      {
        threshold: 'T < 0.3',
        warning: '실험적 접근법 - 강력한 정당화 필요',
        recommendation: '광범위한 문헌 지원과 명확한 근거 확보',
      },
      {
        threshold: 'T < 0.15',
        warning: '매우 실험적 - 초기 경력 연구자에게 높은 위험',
        recommendation: '지도교수와 상담, 더 높은 T-Score의 하이브리드 접근법 고려',
      },
    ],

    // Section 9: Connection to Human Checkpoints
    checkpointTitle: '체크포인트에서의 T-Score',
    checkpointDescription: '인간 체크포인트 (예: CP_THEORY_SELECTION)에 도달하면 Diverga는 T-Score와 함께 옵션을 제시하여 정보에 입각한 결정을 내릴 수 있습니다.',
    checkpointLink: '인간 체크포인트 알아보기',

    // Section 10: CTA
    ctaTitle: 'T-Score 기반 연구 경험',
    ctaDescription: 'VS 방법론을 사용하여 연구 결정에 대한 창의적이고 T-Score로 순위가 매겨진 대안을 얻으세요.',
    ctaButtons: {
      vsMethodology: 'VS 방법론 개요',
      agents: '에이전트 보기',
      start: '시작하기',
    },
  },
};

// T-Score color utility
function getTScoreColor(score: number): string {
  if (score >= 0.7) return '#ff3366';
  if (score >= 0.4) return '#ff8844';
  if (score >= 0.2) return '#ffcc22';
  return '#44ffaa';
}

// Range colors
const rangeColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  red: {
    bg: 'rgba(255, 51, 102, 0.1)',
    border: 'rgba(255, 51, 102, 0.3)',
    text: '#ff3366',
    glow: 'rgba(255, 51, 102, 0.2)',
  },
  orange: {
    bg: 'rgba(255, 136, 68, 0.1)',
    border: 'rgba(255, 136, 68, 0.3)',
    text: '#ff8844',
    glow: 'rgba(255, 136, 68, 0.2)',
  },
  yellow: {
    bg: 'rgba(255, 204, 34, 0.1)',
    border: 'rgba(255, 204, 34, 0.3)',
    text: '#ffcc22',
    glow: 'rgba(255, 204, 34, 0.2)',
  },
  green: {
    bg: 'rgba(68, 255, 170, 0.1)',
    border: 'rgba(68, 255, 170, 0.3)',
    text: '#44ffaa',
    glow: 'rgba(68, 255, 170, 0.2)',
  },
};

const whatIcons: Record<string, React.ReactNode> = {
  chart: <BarChart3 className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  lightbulb: <Lightbulb className="h-5 w-5" />,
};

const guidanceIcons: Record<string, React.ReactNode> = {
  shield: <CheckCircle2 className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  lightbulb: <Lightbulb className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as any },
};

export default function TScorePage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/vs-methodology`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Section 1: Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          {/* Subtle glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(68, 255, 170, 0.1) 0%, transparent 50%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div
              className="flex h-20 w-20 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Sparkles className="h-10 w-10" style={{ color: '#44ffaa' }} />
            </div>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#44ffaa' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 2: What is T-Score */}
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
            <h2 className="void-heading-2 text-stellar-core">{t.whatTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.whatDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.whatPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)', color: '#44ffaa' }}
                >
                  {whatIcons[point.icon]}
                </div>
                <p className="text-stellar-bright pt-2">{point.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 3: T-Score Range Table */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 136, 68, 0.15)' }}
            >
              <BarChart3 className="h-5 w-5" style={{ color: '#ff8844' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.rangeTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.rangeDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.ranges.map((range, index) => (
              <motion.div
                key={range.score}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-void-elevated border transition-all duration-300 relative overflow-hidden"
                style={{
                  borderColor: rangeColors[range.color].border,
                  boxShadow: `inset 0 1px 0 0 rgba(240, 240, 245, 0.05)`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at center, ${rangeColors[range.color].glow} 0%, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div className="text-3xl mb-4">{range.icon}</div>

                  <div
                    className="inline-flex px-4 py-1.5 font-mono text-sm uppercase tracking-wider mb-2 border"
                    style={{
                      color: rangeColors[range.color].text,
                      borderColor: rangeColors[range.color].border,
                      backgroundColor: rangeColors[range.color].bg,
                    }}
                  >
                    {range.score}
                  </div>

                  <h3
                    className="font-mono text-lg font-bold mb-2"
                    style={{ color: rangeColors[range.color].text }}
                  >
                    {range.label}
                  </h3>

                  <p className="text-body text-stellar-bright mb-3 leading-relaxed">{range.meaning}</p>
                  <p className="text-sm text-stellar-dim italic">{range.advice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Visual T-Score Spectrum */}
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
              <Sparkles className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.spectrumTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.spectrumDescription}</p>

          {/* Gradient spectrum visualization */}
          <div className="relative h-32 bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, #44ffaa 0%, #ffcc22 33%, #ff8844 66%, #ff3366 100%)',
                opacity: 0.3,
              }}
            />

            {/* Score markers */}
            <div className="absolute inset-0 flex items-center justify-between px-6">
              {[
                { score: '0.0', label: locale === 'ko' ? '실험적' : 'Experimental', color: '#44ffaa', pos: '0%' },
                { score: '0.2', label: '', color: '#ffcc22', pos: '20%' },
                { score: '0.4', label: locale === 'ko' ? '혁신적' : 'Innovative', color: '#ff8844', pos: '40%' },
                { score: '0.7', label: locale === 'ko' ? '중간' : 'Moderate', color: '#ff8844', pos: '70%' },
                { score: '1.0', label: locale === 'ko' ? '일반적' : 'Common', color: '#ff3366', pos: '100%' },
              ].map((marker, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center"
                  style={{ position: 'absolute', left: marker.pos }}
                >
                  <div
                    className="w-1 h-8 mb-2"
                    style={{ backgroundColor: marker.color }}
                  />
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: marker.color }}
                  >
                    {marker.score}
                  </span>
                  {marker.label && (
                    <span
                      className="text-xs mt-1 text-center"
                      style={{ color: marker.color }}
                    >
                      {marker.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: VS Process Stages */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <Target className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.processTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.processDescription}</p>

          <div className="space-y-3">
            {t.vsPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-4 ${phase.highlight ? 'scale-105 origin-left' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                    style={{
                      backgroundColor: phase.highlight ? '#44ffaa' : 'rgba(136, 136, 170, 0.1)',
                      color: phase.highlight ? '#050508' : '#8888aa',
                      border: phase.highlight ? 'none' : '1px solid rgba(136, 136, 170, 0.2)',
                      boxShadow: phase.highlight ? '0 0 20px rgba(68, 255, 170, 0.3)' : 'none',
                    }}
                  >
                    {phase.phase}
                  </div>
                </div>
                <div
                  className="flex-1 p-4 border"
                  style={{
                    backgroundColor: phase.highlight ? 'rgba(68, 255, 170, 0.05)' : 'rgba(18, 18, 26, 1)',
                    borderColor: phase.highlight ? 'rgba(68, 255, 170, 0.3)' : 'rgba(68, 68, 90, 0.3)',
                  }}
                >
                  <h3
                    className="font-mono font-bold mb-1"
                    style={{ color: phase.highlight ? '#44ffaa' : '#f0f0f5' }}
                  >
                    {phase.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: phase.highlight ? '#f0f0f5' : '#8888aa' }}
                  >
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Example Scenario */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <Lightbulb className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.exampleTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.exampleDescription}</p>

          {/* Context */}
          <div className="bg-void-elevated border border-stellar-faint/10 p-4 mb-6">
            <p className="text-stellar-bright font-medium">{t.scenario.context}</p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {t.scenario.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-void-elevated border p-5 ${option.recommended ? 'ring-2 ring-[#44ffaa]' : ''}`}
                style={{
                  borderColor: getTScoreColor(option.tscore),
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="void-heading-3 text-stellar-core mb-1">{option.theory}</h3>
                    <p className="text-sm text-stellar-dim">{option.rationale}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="px-3 py-1 font-mono text-sm font-bold border"
                      style={{
                        color: getTScoreColor(option.tscore),
                        borderColor: getTScoreColor(option.tscore),
                        backgroundColor: `${getTScoreColor(option.tscore)}20`,
                      }}
                    >
                      T={option.tscore}
                    </div>
                    <span
                      className="text-xs font-mono"
                      style={{ color: getTScoreColor(option.tscore) }}
                    >
                      {option.label}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-stellar-dim mb-1">
                      {locale === 'ko' ? '장점' : 'Pros'}
                    </p>
                    <p className="text-sm text-stellar-bright">{option.pros}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-stellar-dim mb-1">
                      {locale === 'ko' ? '단점' : 'Cons'}
                    </p>
                    <p className="text-sm text-stellar-bright">{option.cons}</p>
                  </div>
                </div>

                {option.recommended && (
                  <div
                    className="mt-4 p-3 border flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgba(68, 255, 170, 0.1)',
                      borderColor: 'rgba(68, 255, 170, 0.3)',
                    }}
                  >
                    <Sparkles className="h-5 w-5" style={{ color: '#44ffaa' }} />
                    <span className="text-sm font-medium" style={{ color: '#44ffaa' }}>
                      {locale === 'ko' ? '⭐ 권장 선택: 균형 잡힌 새로움' : '⭐ Recommended: Balanced Novelty'}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 7: When to Use Each Level */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Target className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.whenTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.whenDescription}</p>

          <div className="space-y-4">
            {t.guidance.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{
                    backgroundColor: rangeColors[guide.color].bg,
                    color: rangeColors[guide.color].text,
                  }}
                >
                  {guidanceIcons[guide.icon]}
                </div>
                <div>
                  <h3
                    className="font-mono font-bold mb-1"
                    style={{ color: rangeColors[guide.color].text }}
                  >
                    {guide.level}
                  </h3>
                  <p className="text-sm text-stellar-bright">{guide.when}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 8: T-Score Warnings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 136, 68, 0.15)' }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: '#ff8844' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.warningsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.warningsDescription}</p>

          <div className="space-y-4">
            {t.warnings.map((warning, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-stellar-dim flex-shrink-0 mt-1" />
                  <div>
                    <div
                      className="inline-flex px-2 py-1 font-mono text-xs mb-2 border"
                      style={{
                        color: '#ff8844',
                        borderColor: 'rgba(255, 136, 68, 0.3)',
                        backgroundColor: 'rgba(255, 136, 68, 0.1)',
                      }}
                    >
                      {warning.threshold}
                    </div>
                    <p className="text-stellar-bright font-medium mb-2">{warning.warning}</p>
                    <p className="text-sm text-stellar-dim">{warning.recommendation}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 9: Connection to Human Checkpoints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <CheckCircle2 className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.checkpointTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.checkpointDescription}</p>

          <Link
            href={`/${locale}/docs/checkpoints`}
            className="void-nav-link inline-flex items-center gap-2"
          >
            {t.checkpointLink}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 10: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
              borderColor: 'rgba(68, 255, 170, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/vs-methodology`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.vsMethodology}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.agents}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.start}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
