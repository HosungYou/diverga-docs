'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  Shield,
  Rocket,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  FileText,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Humanization',
    title: 'Transformation Modes',
    subtitle: 'Choose the right level of transformation for your writing context',

    overview: {
      title: 'Overview',
      description:
        'Diverga offers three transformation modes that balance naturalness with preservation. Each mode targets different pattern risk levels and produces different amounts of text change.',
    },

    selectionGuide: {
      title: 'Mode Selection Guide',
      question: 'Which mode should you choose?',
      factors: [
        {
          question: 'Is the draft mostly AI-generated?',
          answer: 'Use Aggressive Mode',
          icon: Rocket,
        },
        {
          question: 'Is it a mix of AI and human writing?',
          answer: 'Use Balanced Mode (Recommended)',
          icon: Shield,
        },
        {
          question: 'Is it human-edited with AI polish?',
          answer: 'Use Conservative Mode',
          icon: Zap,
        },
      ],
    },

    modes: [
      {
        name: 'Conservative Mode',
        icon: Shield,
        color: '#22ccff',
        recommended: false,
        target: 'High-risk patterns only',
        reduction: '20-35%',
        textChange: '5-15%',
        bestFor: 'Journal submissions, formal publications, final polish',
        preserves: 'Most structural elements and original phrasing',
        changes: 'Only highest-risk AI patterns',
        patterns: 'C1, C4, C5, L1-Tier1, S5, M1, M2, A1, A6',
        whenToUse: [
          'Final draft ready for submission',
          'Already human-edited content',
          'Minor AI assistance used',
          'Minimal changes desired',
        ],
        warnings: [],
      },
      {
        name: 'Balanced Mode',
        icon: Zap,
        color: '#44ffaa',
        recommended: true,
        target: 'High + medium-risk patterns',
        reduction: '35-50%',
        textChange: '15-30%',
        bestFor: 'Most academic writing, standard manuscripts',
        preserves: 'Citation integrity, key arguments, technical accuracy',
        changes: 'Medium to high-risk patterns',
        patterns: 'All HIGH + C2, C3, L2, L4, L6, S1, S3, H1, H2, A4, A5',
        whenToUse: [
          'Standard manuscript preparation',
          'Mixed AI-human drafting',
          'Typical academic writing',
          'Recommended for most cases',
        ],
        warnings: [],
      },
      {
        name: 'Aggressive Mode',
        icon: Rocket,
        color: '#ff8844',
        recommended: false,
        target: 'All patterns (24 categories)',
        reduction: '50-70%',
        textChange: '30-50%',
        bestFor: 'First drafts, AI-heavy text, blog posts',
        preserves: 'Only essential structure, citations, statistics',
        changes: 'All flagged patterns',
        patterns: 'All 24 pattern categories (C1-C6, L1-L6, S1-S6, M1-M3, H1-H3, A1-A6)',
        whenToUse: [
          'Heavily AI-generated draft',
          'First-pass transformation',
          'Blog/informal writing',
          'Maximum naturalness needed',
        ],
        warnings: [
          'May alter scholarly tone',
          'Extensive text changes',
          'Review carefully before use',
        ],
      },
    ],

    examples: {
      title: 'Before/After Examples',
      subtitle: 'See how each mode transforms the same text',
      original: 'Original Text (AI-Generated)',
      sampleText:
        'This groundbreaking research delves into the crucial role of AI chatbots in fostering language learning outcomes. The findings leverage innovative methodologies to demonstrate remarkable improvements across all measures. It is worth noting that this study serves as a paradigm shift in the realm of educational technology, highlighting the importance of these transformative tools.',
      transformations: [
        {
          mode: 'Conservative',
          result:
            'This research examines the important role of AI chatbots in supporting language learning outcomes. The findings use innovative methodologies to demonstrate substantial improvements across all measures. This study represents a notable development in educational technology, emphasizing the value of these transformative tools.',
          changes: [
            'groundbreaking → (removed)',
            'delves into → examines',
            'crucial → important',
            'fostering → supporting',
            'leverage → use',
            'remarkable → substantial',
            'It is worth noting → (removed)',
            'serves as → represents',
            'paradigm shift → notable development',
            'realm of → (removed)',
            'highlighting → emphasizing',
          ],
        },
        {
          mode: 'Balanced',
          result:
            'This research examines the important role of AI chatbots in supporting language learning outcomes. The findings demonstrate substantial improvements across all measures using innovative methodologies. This study represents a notable development in educational technology research, emphasizing the value of these tools.',
          changes: [
            'All Conservative changes PLUS:',
            'serves as → is',
            'in the realm of → in',
            'highlighting the importance → emphasizing the value',
            'transformative → (removed for objectivity)',
          ],
        },
        {
          mode: 'Aggressive',
          result:
            'This research examines AI chatbots\' role in language learning. Results show substantial improvements across measures. The study advances educational technology research.',
          changes: [
            'All Balanced changes PLUS:',
            'important → (removed, implied)',
            'supporting → in',
            'using innovative methodologies → (removed, detail reduction)',
            'represents a notable development → advances',
            'emphasizing the value of these tools → (removed)',
          ],
        },
      ],
    },

    comparison: {
      title: 'Mode Comparison Matrix',
      subtitle: 'Detailed comparison across key dimensions',
      dimensions: [
        {
          dimension: 'AI Pattern Reduction',
          conservative: '20-35%',
          balanced: '35-50%',
          aggressive: '50-70%',
        },
        {
          dimension: 'Text Change Amount',
          conservative: '5-15%',
          balanced: '15-30%',
          aggressive: '30-50%',
        },
        {
          dimension: 'Patterns Targeted',
          conservative: '9 HIGH-risk',
          balanced: '20 HIGH+MEDIUM',
          aggressive: 'All 24 patterns',
        },
        {
          dimension: 'Processing Time',
          conservative: '~30 sec/1000 words',
          balanced: '~45 sec/1000 words',
          aggressive: '~60 sec/1000 words',
        },
        {
          dimension: 'Risk Level',
          conservative: 'Minimal',
          balanced: 'Low',
          aggressive: 'Moderate',
        },
      ],
    },

    commands: {
      title: 'Command Examples',
      subtitle: 'How to invoke each mode',
      examples: [
        {
          mode: 'Conservative',
          commands: [
            '"Humanize my draft in conservative mode"',
            '"Humanize (conservative)"',
            '"Check AI patterns and apply conservative transformation"',
          ],
        },
        {
          mode: 'Balanced',
          commands: [
            '"Humanize my draft"',
            '"Humanize (balanced)"',
            '"Apply balanced humanization"',
          ],
        },
        {
          mode: 'Aggressive',
          commands: [
            '"Humanize (aggressive)"',
            '"Maximum humanization"',
            '"Apply aggressive transformation"',
          ],
        },
      ],
    },

    tips: {
      title: 'Tips for Success',
      items: [
        {
          title: 'Start Conservative',
          description:
            'Begin with conservative mode for journal submissions, then escalate if needed.',
          icon: Shield,
        },
        {
          title: 'Review After Transformation',
          description:
            'Always review transformed text before final export, especially in aggressive mode.',
          icon: CheckCircle2,
        },
        {
          title: 'Check Citations',
          description:
            'Verify all citations are preserved correctly (F5 does this automatically).',
          icon: FileText,
        },
        {
          title: 'Iterative Approach',
          description:
            'You can apply multiple modes: aggressive first, then conservative for refinement.',
          icon: TrendingUp,
        },
      ],
    },

    cta: {
      title: 'Ready to Transform Your Writing?',
      description:
        'The humanization pipeline is built into G2-AcademicCommunicator and G3-PeerReviewStrategist.',
      button: 'View Pipeline Overview',
    },
  },
  ko: {
    back: '휴먼화로 돌아가기',
    title: '변환 모드',
    subtitle: '글쓰기 맥락에 맞는 변환 수준 선택',

    overview: {
      title: '개요',
      description:
        'Diverga는 자연스러움과 보존 사이의 균형을 맞추는 3가지 변환 모드를 제공합니다. 각 모드는 다른 패턴 위험 수준을 목표로 하며 다른 양의 텍스트 변경을 생성합니다.',
    },

    selectionGuide: {
      title: '모드 선택 가이드',
      question: '어떤 모드를 선택해야 할까요?',
      factors: [
        {
          question: '초안이 대부분 AI로 생성되었나요?',
          answer: '적극적 모드 사용',
          icon: Rocket,
        },
        {
          question: 'AI와 인간 작성이 혼합되어 있나요?',
          answer: '균형적 모드 사용 (권장)',
          icon: Shield,
        },
        {
          question: '인간이 편집하고 AI로 다듬었나요?',
          answer: '보수적 모드 사용',
          icon: Zap,
        },
      ],
    },

    modes: [
      {
        name: '보수적 모드',
        icon: Shield,
        color: '#22ccff',
        recommended: false,
        target: '높은 위험 패턴만',
        reduction: '20-35%',
        textChange: '5-15%',
        bestFor: '저널 투고, 공식 출판물, 최종 다듬기',
        preserves: '대부분의 구조적 요소와 원래 표현',
        changes: '최고 위험 AI 패턴만',
        patterns: 'C1, C4, C5, L1-Tier1, S5, M1, M2, A1, A6',
        whenToUse: [
          '투고 준비된 최종 초안',
          '이미 인간이 편집한 콘텐츠',
          'AI 지원을 최소한으로 사용',
          '최소한의 변경 원함',
        ],
        warnings: [],
      },
      {
        name: '균형적 모드',
        icon: Zap,
        color: '#44ffaa',
        recommended: true,
        target: '높음 + 중간 위험 패턴',
        reduction: '35-50%',
        textChange: '15-30%',
        bestFor: '대부분의 학술 글쓰기, 표준 원고',
        preserves: '인용 무결성, 핵심 주장, 기술적 정확성',
        changes: '중간 및 높은 위험 패턴',
        patterns: '모든 높음 + C2, C3, L2, L4, L6, S1, S3, H1, H2, A4, A5',
        whenToUse: [
          '표준 원고 준비',
          'AI-인간 혼합 작성',
          '일반적인 학술 글쓰기',
          '대부분의 경우 권장',
        ],
        warnings: [],
      },
      {
        name: '적극적 모드',
        icon: Rocket,
        color: '#ff8844',
        recommended: false,
        target: '모든 패턴 (24개 카테고리)',
        reduction: '50-70%',
        textChange: '30-50%',
        bestFor: '첫 초안, AI 위주 텍스트, 블로그 게시물',
        preserves: '필수 구조, 인용, 통계만',
        changes: '모든 표시된 패턴',
        patterns: '24개 패턴 카테고리 모두 (C1-C6, L1-L6, S1-S6, M1-M3, H1-H3, A1-A6)',
        whenToUse: [
          'AI로 대량 생성된 초안',
          '첫 번째 변환',
          '블로그/비공식 글쓰기',
          '최대 자연스러움 필요',
        ],
        warnings: ['학술적 어조에 영향을 줄 수 있음', '광범위한 텍스트 변경', '사용 전 주의 깊게 검토'],
      },
    ],

    examples: {
      title: '변환 전/후 예시',
      subtitle: '각 모드가 동일한 텍스트를 어떻게 변환하는지 확인',
      original: '원본 텍스트 (AI 생성)',
      sampleText:
        '이 획기적인 연구는 AI 챗봇이 언어 학습 결과를 촉진하는 데 있어 중요한 역할을 탐구합니다. 연구 결과는 혁신적인 방법론을 활용하여 모든 측정에서 놀라운 개선을 입증합니다. 이 연구는 교육 기술의 영역에서 패러다임 전환으로 작용하며, 이러한 변혁적 도구의 중요성을 강조한다는 점을 주목할 만합니다.',
      transformations: [
        {
          mode: '보수적',
          result:
            '이 연구는 AI 챗봇이 언어 학습 결과를 지원하는 데 있어 중요한 역할을 검토합니다. 연구 결과는 혁신적인 방법론을 사용하여 모든 측정에서 상당한 개선을 입증합니다. 이 연구는 교육 기술에서 주목할 만한 발전을 나타내며, 이러한 변혁적 도구의 가치를 강조합니다.',
          changes: [
            '획기적인 → (제거)',
            '탐구합니다 → 검토합니다',
            '촉진하는 → 지원하는',
            '활용하여 → 사용하여',
            '놀라운 → 상당한',
            '주목할 만합니다 → (제거)',
            '패러다임 전환 → 주목할 만한 발전',
            '영역에서 → (제거)',
          ],
        },
        {
          mode: '균형적',
          result:
            '이 연구는 AI 챗봇이 언어 학습 결과를 지원하는 역할을 검토합니다. 결과는 혁신적인 방법론을 사용하여 모든 측정에서 상당한 개선을 보여줍니다. 이 연구는 교육 기술 연구에서 주목할 만한 발전을 나타냅니다.',
          changes: [
            '모든 보수적 변경 포함 +',
            '중요한 → (제거, 암시됨)',
            '강조합니다 → (제거)',
            '변혁적 도구 → (객관성을 위해 제거)',
          ],
        },
        {
          mode: '적극적',
          result:
            '이 연구는 AI 챗봇의 언어 학습 역할을 검토합니다. 결과는 모든 측정에서 상당한 개선을 보여줍니다. 연구는 교육 기술 연구를 발전시킵니다.',
          changes: [
            '모든 균형적 변경 포함 +',
            '혁신적인 방법론을 사용하여 → (제거, 세부사항 축소)',
            '주목할 만한 발전을 나타냅니다 → 발전시킵니다',
          ],
        },
      ],
    },

    comparison: {
      title: '모드 비교 매트릭스',
      subtitle: '주요 차원에 걸친 상세 비교',
      dimensions: [
        {
          dimension: 'AI 패턴 감소',
          conservative: '20-35%',
          balanced: '35-50%',
          aggressive: '50-70%',
        },
        {
          dimension: '텍스트 변경 양',
          conservative: '5-15%',
          balanced: '15-30%',
          aggressive: '30-50%',
        },
        {
          dimension: '목표 패턴',
          conservative: '9개 높은 위험',
          balanced: '20개 높음+중간',
          aggressive: '24개 모든 패턴',
        },
        {
          dimension: '처리 시간',
          conservative: '~30초/1000단어',
          balanced: '~45초/1000단어',
          aggressive: '~60초/1000단어',
        },
        {
          dimension: '위험 수준',
          conservative: '최소',
          balanced: '낮음',
          aggressive: '중간',
        },
      ],
    },

    commands: {
      title: '명령어 예시',
      subtitle: '각 모드를 호출하는 방법',
      examples: [
        {
          mode: '보수적',
          commands: [
            '"내 초안을 보수적 모드로 휴먼화해줘"',
            '"휴먼화 (보수적)"',
            '"AI 패턴 확인하고 보수적 변환 적용"',
          ],
        },
        {
          mode: '균형적',
          commands: ['"내 초안 휴먼화", "휴먼화 (균형적)", "균형적 휴먼화 적용"'],
        },
        {
          mode: '적극적',
          commands: ['"휴먼화 (적극적)", "최대 휴먼화", "적극적 변환 적용"'],
        },
      ],
    },

    tips: {
      title: '성공을 위한 팁',
      items: [
        {
          title: '보수적으로 시작',
          description: '저널 투고의 경우 보수적 모드로 시작한 후 필요하면 강화하세요.',
          icon: Shield,
        },
        {
          title: '변환 후 검토',
          description: '특히 적극적 모드에서는 최종 내보내기 전에 항상 변환된 텍스트를 검토하세요.',
          icon: CheckCircle2,
        },
        {
          title: '인용 확인',
          description: '모든 인용이 올바르게 보존되었는지 확인하세요 (F5가 자동으로 수행).',
          icon: FileText,
        },
        {
          title: '반복적 접근',
          description: '여러 모드를 적용할 수 있습니다: 먼저 적극적, 그 다음 보수적으로 다듬기.',
          icon: TrendingUp,
        },
      ],
    },

    cta: {
      title: '글쓰기를 변환할 준비가 되셨나요?',
      description:
        '휴먼화 파이프라인은 G2-AcademicCommunicator 및 G3-PeerReviewStrategist에 내장되어 있습니다.',
      button: '파이프라인 개요 보기',
    },
  },
};

export default function TransformationModesPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/humanization`}
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
          className="text-center mb-16"
        >
          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="text-body-lg text-stellar-dim max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.overview.title}</h2>
          <p className="text-body text-stellar-dim leading-relaxed">{t.overview.description}</p>
        </motion.section>

        {/* Selection Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.selectionGuide.title}</h2>
          <p className="text-body-lg font-semibold text-stellar-bright mb-6">
            {t.selectionGuide.question}
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {t.selectionGuide.factors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20 mb-4"
                  style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
                >
                  <factor.icon className="h-5 w-5" style={{ color: '#22ccff' }} />
                </div>
                <p className="text-body font-semibold text-stellar-core mb-2">{factor.question}</p>
                <p className="text-body text-[#44ffaa]">{factor.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Mode Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-8 text-center">
            {locale === 'ko' ? '3가지 변환 모드' : 'Three Transformation Modes'}
          </h2>
          <div className="space-y-6">
            {t.modes.map((mode, index) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border bg-void-elevated p-6"
                style={{
                  borderColor: mode.recommended
                    ? 'rgba(68, 255, 170, 0.3)'
                    : 'rgba(68, 68, 90, 0.2)',
                  backgroundColor: mode.recommended
                    ? 'rgba(68, 255, 170, 0.03)'
                    : undefined,
                }}
              >
                {/* Mode Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center border"
                      style={{
                        backgroundColor: `${mode.color}15`,
                        borderColor: `${mode.color}30`,
                      }}
                    >
                      <mode.icon className="h-6 w-6" style={{ color: mode.color }} />
                    </div>
                    <div>
                      <h3 className="void-heading-3 text-stellar-core">{mode.name}</h3>
                      <p className="text-caption text-stellar-dim">{mode.target}</p>
                    </div>
                  </div>
                  {mode.recommended && (
                    <span
                      className="px-3 py-1 font-mono text-xs uppercase border"
                      style={{
                        color: '#44ffaa',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                        borderColor: 'rgba(68, 255, 170, 0.3)',
                      }}
                    >
                      ⭐ {locale === 'ko' ? '권장' : 'Recommended'}
                    </span>
                  )}
                </div>

                {/* Mode Stats */}
                <div className="grid gap-3 md:grid-cols-3 mb-4">
                  <div className="border border-stellar-faint/10 bg-void-surface p-3">
                    <p className="text-caption text-stellar-faint mb-1">
                      {locale === 'ko' ? 'AI 패턴 감소' : 'AI Reduction'}
                    </p>
                    <p className="font-mono text-lg font-bold" style={{ color: mode.color }}>
                      {mode.reduction}
                    </p>
                  </div>
                  <div className="border border-stellar-faint/10 bg-void-surface p-3">
                    <p className="text-caption text-stellar-faint mb-1">
                      {locale === 'ko' ? '텍스트 변경' : 'Text Change'}
                    </p>
                    <p className="font-mono text-lg font-bold" style={{ color: mode.color }}>
                      {mode.textChange}
                    </p>
                  </div>
                  <div className="border border-stellar-faint/10 bg-void-surface p-3">
                    <p className="text-caption text-stellar-faint mb-1">
                      {locale === 'ko' ? '최적' : 'Best For'}
                    </p>
                    <p className="text-caption text-stellar-bright">{mode.bestFor}</p>
                  </div>
                </div>

                {/* Mode Details */}
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-caption font-semibold text-stellar-faint mb-1">
                      {locale === 'ko' ? '보존:' : 'Preserves:'}
                    </p>
                    <p className="text-body text-stellar-dim">{mode.preserves}</p>
                  </div>
                  <div>
                    <p className="text-caption font-semibold text-stellar-faint mb-1">
                      {locale === 'ko' ? '변경:' : 'Changes:'}
                    </p>
                    <p className="text-body text-stellar-dim">{mode.changes}</p>
                  </div>
                </div>

                {/* When to Use */}
                <div className="mb-4">
                  <p className="text-caption font-semibold text-stellar-faint mb-2">
                    {locale === 'ko' ? '사용 시기:' : 'When to Use:'}
                  </p>
                  <ul className="space-y-1.5">
                    {mode.whenToUse.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-body text-stellar-dim">
                        <span style={{ color: mode.color }}>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warnings */}
                {mode.warnings.length > 0 && (
                  <div
                    className="flex items-start gap-2 p-3 border"
                    style={{
                      backgroundColor: 'rgba(255, 136, 68, 0.05)',
                      borderColor: 'rgba(255, 136, 68, 0.2)',
                    }}
                  >
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#ff8844' }} />
                    <div>
                      <p className="text-caption font-semibold mb-1" style={{ color: '#ff8844' }}>
                        {locale === 'ko' ? '주의사항' : 'Warnings'}
                      </p>
                      <ul className="space-y-1">
                        {mode.warnings.map((warning, idx) => (
                          <li key={idx} className="text-caption" style={{ color: '#ff8844' }}>
                            • {warning}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Before/After Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.examples.title}</h2>
          <p className="text-body text-stellar-dim mb-8">{t.examples.subtitle}</p>

          {/* Original Text */}
          <div className="border border-stellar-faint/10 bg-void-surface p-6 mb-6">
            <p className="text-caption font-semibold text-stellar-faint mb-3">
              {t.examples.original}
            </p>
            <p className="text-body text-stellar-dim leading-relaxed">{t.examples.sampleText}</p>
          </div>

          {/* Transformations */}
          <div className="space-y-6">
            {t.examples.transformations.map((transformation, index) => (
              <motion.div
                key={transformation.mode}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stellar-faint/10 bg-void-elevated p-6"
              >
                <h3 className="font-mono font-bold text-stellar-core mb-3">
                  {transformation.mode} {locale === 'ko' ? '모드' : 'Mode'}
                </h3>
                <div className="bg-void-surface border border-stellar-faint/10 p-4 mb-4">
                  <p className="text-body text-stellar-bright leading-relaxed">
                    {transformation.result}
                  </p>
                </div>
                <div>
                  <p className="text-caption font-semibold text-stellar-faint mb-2">
                    {locale === 'ko' ? '주요 변경사항:' : 'Key Changes:'}
                  </p>
                  <ul className="space-y-1">
                    {transformation.changes.map((change, idx) => (
                      <li key={idx} className="text-caption text-stellar-dim">
                        • {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Comparison Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.comparison.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.comparison.subtitle}</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-stellar-faint/10">
              <thead>
                <tr className="bg-void-surface">
                  <th className="border border-stellar-faint/10 p-3 text-left text-caption font-semibold text-stellar-faint">
                    {locale === 'ko' ? '차원' : 'Dimension'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#22ccff]">
                    {locale === 'ko' ? '보수적' : 'Conservative'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#44ffaa]">
                    {locale === 'ko' ? '균형적' : 'Balanced'}
                  </th>
                  <th className="border border-stellar-faint/10 p-3 text-center text-caption font-semibold text-[#ff8844]">
                    {locale === 'ko' ? '적극적' : 'Aggressive'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.dimensions.map((row, index) => (
                  <tr key={index} className="border-t border-stellar-faint/10">
                    <td className="border border-stellar-faint/10 p-3 text-body text-stellar-core font-semibold">
                      {row.dimension}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center text-body text-stellar-dim">
                      {row.conservative}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center text-body text-stellar-dim">
                      {row.balanced}
                    </td>
                    <td className="border border-stellar-faint/10 p-3 text-center text-body text-stellar-dim">
                      {row.aggressive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.commands.title}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.commands.subtitle}</p>

          <div className="space-y-4">
            {t.commands.examples.map((example, index) => (
              <motion.div
                key={example.mode}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <h3 className="font-mono font-bold text-stellar-core mb-3">
                  {example.mode} {locale === 'ko' ? '모드' : 'Mode'}
                </h3>
                <div className="space-y-2">
                  {example.commands.map((cmd, idx) => (
                    <code
                      key={idx}
                      className="block bg-void-surface border border-stellar-faint/10 p-3 text-sm text-[#22ccff]"
                    >
                      {cmd}
                    </code>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-6">{t.tips.title}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.tips.items.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 border border-stellar-faint/10 bg-void-elevated p-5"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(34, 204, 255, 0.1)' }}
                >
                  <tip.icon className="h-5 w-5" style={{ color: '#22ccff' }} />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-stellar-core mb-1">{tip.title}</h3>
                  <p className="text-caption text-stellar-dim">{tip.description}</p>
                </div>
              </motion.div>
            ))}
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
              background:
                'linear-gradient(135deg, rgba(34, 204, 255, 0.1) 0%, rgba(68, 255, 170, 0.1) 100%)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.cta.title}</h2>
            <p className="text-body text-stellar-dim mb-6 max-w-2xl mx-auto">{t.cta.description}</p>
            <Link
              href={`/${locale}/docs/humanization`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.cta.button}
              <CheckCircle2 className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
