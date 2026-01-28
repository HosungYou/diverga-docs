"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Shield,
  Hand,
  Pause,
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ArrowRight,
  Users,
  Lightbulb,
  BookOpen,
  Sparkles,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Human Checkpoints',
    subtitle: 'You Decide. Diverga Assists.',
    philosophy: '"Human decisions remain with humans. AI handles what\'s beyond human scope."',

    // Section 2: Why Checkpoints Exist
    whyTitle: 'Why Checkpoints Exist',
    whyDescription: 'Human Checkpoints ensure you maintain full control over critical research decisions while Diverga handles the complex analysis work.',
    whyPoints: [
      { icon: 'shield', text: 'AI never makes decisions for you - every critical choice requires your approval' },
      { icon: 'check', text: 'All decisions are documented for transparency and reproducibility' },
      { icon: 'file', text: 'Complete audit trail for your research methodology section' },
    ],

    // Section 3: Checkpoint Levels
    levelsTitle: 'Checkpoint Levels',
    levelsDescription: 'Understanding the three levels helps you know when to expect a checkpoint and how to respond.',
    levels: [
      {
        level: 'REQUIRED',
        icon: '🔴',
        behavior: 'System STOPS immediately',
        description: 'Cannot proceed without your explicit approval. These are foundational research decisions.',
        canSkip: 'No',
        color: 'red',
      },
      {
        level: 'RECOMMENDED',
        icon: '🟠',
        behavior: 'System PAUSES',
        description: 'Strongly suggests your review before continuing. Important but not critical.',
        canSkip: 'No',
        color: 'amber',
      },
      {
        level: 'OPTIONAL',
        icon: '🟡',
        behavior: 'System ASKS',
        description: 'Offers you a choice with sensible defaults if you prefer to skip.',
        canSkip: 'Yes',
        color: 'yellow',
      },
    ],

    // Section 4: When You Will See Checkpoints
    whenTitle: 'When You Will See Checkpoints',
    whenDescription: 'Checkpoints appear at key moments in your research journey:',
    journeyStages: [
      { stage: 'Starting', checkpoint: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', decision: 'Approve research question' },
      { stage: 'Theory', checkpoint: 'CP_THEORY_SELECTION', level: 'REQUIRED', decision: 'Choose theoretical framework' },
      { stage: 'Paradigm', checkpoint: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', decision: 'Select research paradigm' },
      { stage: 'Design', checkpoint: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', decision: 'Approve research design' },
      { stage: 'Meta-Analysis', checkpoint: 'CP_META_GATE', level: 'REQUIRED', decision: 'Confirm meta-analysis approach' },
      { stage: 'Analysis', checkpoint: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', decision: 'Review analysis strategy' },
    ],

    // Section 5: How to Respond
    respondTitle: 'How to Respond to Checkpoints',
    respondDescription: 'When a checkpoint appears, you have several options:',
    responses: [
      { command: 'approve / 승인', description: 'Accept the current proposal and proceed', icon: 'check' },
      { command: 'reject / 수정', description: 'Request changes or modifications', icon: 'x' },
      { command: 'explain / 설명해줘', description: 'Get more detailed explanation before deciding', icon: 'help' },
      { command: 'alternatives / 대안', description: 'See other options (VS methodology)', icon: 'list' },
    ],

    // Section 6: Real-World Scenarios
    scenariosTitle: 'Real-World Scenarios',
    scenariosDescription: 'See how checkpoints work in practice:',
    scenarios: [
      {
        title: 'Theoretical Framework Selection',
        context: 'You\'re researching AI adoption in education',
        checkpoint: 'CP_THEORY_SELECTION',
        level: 'REQUIRED',
        situation: 'The system suggests TAM (T=0.92) as the obvious choice, but VS methodology presents alternatives.',
        options: [
          'TAM (T=0.92) - Modal/Predictable',
          'Self-Determination Theory + TAM (T=0.6) - Emerging',
          'Cognitive Load Theory + Adaptive Ecosystem (T=0.4) - Novel',
        ],
        yourRole: 'You decide which framework best fits your research context and contribution goals.',
      },
      {
        title: 'Ethics Review',
        context: 'Planning research involving human participants',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        level: 'REQUIRED',
        situation: 'Before proceeding with data collection design, ethical considerations must be reviewed.',
        options: [
          'IRB protocol requirements identified',
          'Informed consent procedures specified',
          'Data privacy measures proposed',
        ],
        yourRole: 'You approve the ethical framework and ensure it meets your institutional requirements.',
      },
      {
        title: 'Low T-Score Warning',
        context: 'Considering a highly experimental theoretical approach',
        checkpoint: 'CP_THEORY_SELECTION',
        level: 'REQUIRED',
        situation: 'A T-Score below 0.3 indicates an experimental approach requiring strong justification.',
        options: [
          'Proceed with awareness of justification burden',
          'Choose a more established alternative',
          'Request hybrid approach combining established and novel',
        ],
        yourRole: 'You acknowledge the risk and decide whether the innovation potential is worth the extra scrutiny.',
      },
    ],

    // Section 7: Key Checkpoints Reference
    referenceTitle: 'Key Checkpoints Reference',
    referenceDescription: 'Quick reference for the most important checkpoints:',
    referenceTable: [
      { id: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', when: 'Finalizing research question', decision: 'Approve research question and scope' },
      { id: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', when: 'Choosing methodology', decision: 'Select research paradigm (positivist, interpretivist, etc.)' },
      { id: 'CP_THEORY_SELECTION', level: 'REQUIRED', when: 'Selecting framework', decision: 'Choose theoretical framework from VS alternatives' },
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', when: 'Design complete', decision: 'Approve full research design and ethics' },
      { id: 'CP_META_GATE', level: 'REQUIRED', when: 'Starting meta-analysis', decision: 'Confirm meta-analysis strategy and ES hierarchy' },
      { id: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', when: 'Before analysis', decision: 'Review statistical analysis plan' },
      { id: 'CP_INTEGRATION_STRATEGY', level: 'RECOMMENDED', when: 'Mixed methods', decision: 'Review integration approach' },
      { id: 'CP_RESPONSE_APPROVAL', level: 'RECOMMENDED', when: 'Peer review', decision: 'Approve reviewer response letter' },
      { id: 'CP_VISUALIZATION_PREFERENCE', level: 'OPTIONAL', when: 'Creating diagrams', decision: 'Choose visualization style' },
    ],

    // Section 8: Decision Audit Trail
    auditTitle: 'Decision Audit Trail',
    auditDescription: 'Every checkpoint interaction is automatically documented:',
    auditFeatures: [
      'Timestamp and checkpoint ID for each decision',
      'Your choice with rationale (if provided)',
      'VS alternatives that were considered',
      'T-Score information for theory/framework choices',
    ],
    auditBenefit: 'This audit trail can be directly incorporated into your methodology section, supporting transparency and reproducibility requirements.',

    // Section 9: Connection to VS Methodology
    vsTitle: 'Connection to VS Methodology',
    vsDescription: 'Human Checkpoints are the final phase (Phase 5) of the VS Methodology process:',
    vsPhases: [
      { phase: 1, name: 'Modal Awareness', description: 'Identify predictable/obvious choices' },
      { phase: 2, name: 'Long-tail Sampling', description: 'Explore less common alternatives' },
      { phase: 3, name: 'Context Matching', description: 'Evaluate against your specific context' },
      { phase: 4, name: 'Differentiated Presentation', description: 'Present options with T-Scores' },
      { phase: 5, name: 'Human Checkpoint', description: 'YOU make the final decision', highlight: true },
    ],
    vsLink: 'Learn more about VS Methodology',

    // Section 10: CTA
    ctaTitle: 'Ready to Experience Human Checkpoints?',
    ctaDescription: 'Start your research journey with full control over every critical decision.',
    ctaButtons: {
      agents: 'Browse 40 Agents',
      workflows: 'View Workflows',
      start: 'Get Started',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '인간 체크포인트',
    subtitle: '결정은 당신이, 지원은 Diverga가',
    philosophy: '"인간이 할 일은 인간이, AI는 인간의 범주를 벗어난 것을 수행"',

    // Section 2: Why Checkpoints Exist
    whyTitle: '체크포인트가 존재하는 이유',
    whyDescription: '인간 체크포인트는 Diverga가 복잡한 분석 작업을 처리하는 동안 중요한 연구 결정에 대한 완전한 통제권을 유지하도록 보장합니다.',
    whyPoints: [
      { icon: 'shield', text: 'AI는 결코 당신을 대신해 결정하지 않습니다 - 모든 중요한 선택에는 승인이 필요합니다' },
      { icon: 'check', text: '모든 결정은 투명성과 재현성을 위해 문서화됩니다' },
      { icon: 'file', text: '연구 방법론 섹션을 위한 완전한 감사 추적 제공' },
    ],

    // Section 3: Checkpoint Levels
    levelsTitle: '체크포인트 수준',
    levelsDescription: '세 가지 수준을 이해하면 언제 체크포인트를 예상하고 어떻게 응답할지 알 수 있습니다.',
    levels: [
      {
        level: 'REQUIRED',
        icon: '🔴',
        behavior: '시스템이 즉시 멈춤',
        description: '명시적 승인 없이는 진행할 수 없습니다. 이것은 기초적인 연구 결정입니다.',
        canSkip: '불가',
        color: 'red',
      },
      {
        level: 'RECOMMENDED',
        icon: '🟠',
        behavior: '시스템이 일시정지',
        description: '계속하기 전에 검토를 강력히 권장합니다. 중요하지만 필수는 아닙니다.',
        canSkip: '불가',
        color: 'amber',
      },
      {
        level: 'OPTIONAL',
        icon: '🟡',
        behavior: '시스템이 질문',
        description: '건너뛰기를 원하면 합리적인 기본값과 함께 선택을 제공합니다.',
        canSkip: '가능',
        color: 'yellow',
      },
    ],

    // Section 4: When You Will See Checkpoints
    whenTitle: '체크포인트가 나타나는 시점',
    whenDescription: '체크포인트는 연구 여정의 핵심 순간에 나타납니다:',
    journeyStages: [
      { stage: '시작', checkpoint: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', decision: '연구 질문 승인' },
      { stage: '이론', checkpoint: 'CP_THEORY_SELECTION', level: 'REQUIRED', decision: '이론적 프레임워크 선택' },
      { stage: '패러다임', checkpoint: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', decision: '연구 패러다임 선택' },
      { stage: '설계', checkpoint: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', decision: '연구 설계 승인' },
      { stage: '메타분석', checkpoint: 'CP_META_GATE', level: 'REQUIRED', decision: '메타분석 접근법 확인' },
      { stage: '분석', checkpoint: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', decision: '분석 전략 검토' },
    ],

    // Section 5: How to Respond
    respondTitle: '체크포인트에 응답하는 방법',
    respondDescription: '체크포인트가 나타나면 여러 옵션이 있습니다:',
    responses: [
      { command: 'approve / 승인', description: '현재 제안을 수락하고 진행', icon: 'check' },
      { command: 'reject / 수정', description: '변경 또는 수정 요청', icon: 'x' },
      { command: 'explain / 설명해줘', description: '결정 전 더 자세한 설명 받기', icon: 'help' },
      { command: 'alternatives / 대안', description: '다른 옵션 보기 (VS 방법론)', icon: 'list' },
    ],

    // Section 6: Real-World Scenarios
    scenariosTitle: '실제 시나리오',
    scenariosDescription: '체크포인트가 실제로 어떻게 작동하는지 확인하세요:',
    scenarios: [
      {
        title: '이론적 프레임워크 선택',
        context: '교육에서의 AI 채택을 연구 중',
        checkpoint: 'CP_THEORY_SELECTION',
        level: 'REQUIRED',
        situation: '시스템이 TAM(T=0.92)을 명백한 선택으로 제안하지만, VS 방법론은 대안을 제시합니다.',
        options: [
          'TAM (T=0.92) - 모달/예측 가능',
          '자기결정이론 + TAM (T=0.6) - 부상중',
          '인지부하이론 + 적응적 생태계 (T=0.4) - 새로움',
        ],
        yourRole: '연구 맥락과 기여 목표에 가장 적합한 프레임워크를 결정합니다.',
      },
      {
        title: '윤리 검토',
        context: '인간 참여자가 포함된 연구 계획',
        checkpoint: 'CP_METHODOLOGY_APPROVAL',
        level: 'REQUIRED',
        situation: '데이터 수집 설계를 진행하기 전에 윤리적 고려사항을 검토해야 합니다.',
        options: [
          'IRB 프로토콜 요구사항 확인',
          '동의서 절차 지정',
          '데이터 개인정보 보호 조치 제안',
        ],
        yourRole: '윤리적 프레임워크를 승인하고 기관 요구사항을 충족하는지 확인합니다.',
      },
      {
        title: '낮은 T-Score 경고',
        context: '매우 실험적인 이론적 접근법 고려 중',
        checkpoint: 'CP_THEORY_SELECTION',
        level: 'REQUIRED',
        situation: '0.3 미만의 T-Score는 강력한 정당화가 필요한 실험적 접근법을 나타냅니다.',
        options: [
          '정당화 부담을 인식하고 진행',
          '더 확립된 대안 선택',
          '확립된 것과 새로운 것을 결합한 하이브리드 접근법 요청',
        ],
        yourRole: '위험을 인정하고 혁신 잠재력이 추가 검토의 가치가 있는지 결정합니다.',
      },
    ],

    // Section 7: Key Checkpoints Reference
    referenceTitle: '주요 체크포인트 참조',
    referenceDescription: '가장 중요한 체크포인트에 대한 빠른 참조:',
    referenceTable: [
      { id: 'CP_RESEARCH_DIRECTION', level: 'REQUIRED', when: '연구 질문 확정 시', decision: '연구 질문 및 범위 승인' },
      { id: 'CP_PARADIGM_SELECTION', level: 'REQUIRED', when: '방법론 선택 시', decision: '연구 패러다임 선택 (실증주의, 해석주의 등)' },
      { id: 'CP_THEORY_SELECTION', level: 'REQUIRED', when: '프레임워크 선택 시', decision: 'VS 대안에서 이론적 프레임워크 선택' },
      { id: 'CP_METHODOLOGY_APPROVAL', level: 'REQUIRED', when: '설계 완료 시', decision: '전체 연구 설계 및 윤리 승인' },
      { id: 'CP_META_GATE', level: 'REQUIRED', when: '메타분석 시작 시', decision: '메타분석 전략 및 ES 계층 확인' },
      { id: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', when: '분석 전', decision: '통계 분석 계획 검토' },
      { id: 'CP_INTEGRATION_STRATEGY', level: 'RECOMMENDED', when: '혼합방법', decision: '통합 접근법 검토' },
      { id: 'CP_RESPONSE_APPROVAL', level: 'RECOMMENDED', when: '동료 심사', decision: '리뷰어 응답 서신 승인' },
      { id: 'CP_VISUALIZATION_PREFERENCE', level: 'OPTIONAL', when: '다이어그램 생성', decision: '시각화 스타일 선택' },
    ],

    // Section 8: Decision Audit Trail
    auditTitle: '결정 감사 추적',
    auditDescription: '모든 체크포인트 상호작용은 자동으로 문서화됩니다:',
    auditFeatures: [
      '각 결정에 대한 타임스탬프 및 체크포인트 ID',
      '근거와 함께 선택 사항 (제공된 경우)',
      '고려된 VS 대안',
      '이론/프레임워크 선택에 대한 T-Score 정보',
    ],
    auditBenefit: '이 감사 추적은 방법론 섹션에 직접 통합될 수 있어 투명성 및 재현성 요구사항을 지원합니다.',

    // Section 9: Connection to VS Methodology
    vsTitle: 'VS 방법론과의 연결',
    vsDescription: '인간 체크포인트는 VS 방법론 프로세스의 마지막 단계(5단계)입니다:',
    vsPhases: [
      { phase: 1, name: '모달 인식', description: '예측 가능/명백한 선택 식별' },
      { phase: 2, name: '롱테일 샘플링', description: '덜 일반적인 대안 탐색' },
      { phase: 3, name: '맥락 매칭', description: '특정 맥락에 대해 평가' },
      { phase: 4, name: '차별화된 제시', description: 'T-Score와 함께 옵션 제시' },
      { phase: 5, name: '인간 체크포인트', description: '당신이 최종 결정', highlight: true },
    ],
    vsLink: 'VS 방법론 자세히 알아보기',

    // Section 10: CTA
    ctaTitle: '인간 체크포인트를 체험할 준비가 되셨나요?',
    ctaDescription: '모든 중요한 결정에 대한 완전한 통제권으로 연구 여정을 시작하세요.',
    ctaButtons: {
      agents: '40개 에이전트 보기',
      workflows: '워크플로우 보기',
      start: '시작하기',
    },
  },
};

const levelColors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-800 border-red-300',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800 border-amber-300',
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  },
};

const whyIcons: Record<string, React.ReactNode> = {
  shield: <Shield className="h-5 w-5" />,
  check: <CheckCircle2 className="h-5 w-5" />,
  file: <FileText className="h-5 w-5" />,
};

const responseIcons: Record<string, React.ReactNode> = {
  check: <CheckCircle2 className="h-5 w-5 text-emerald-500" />,
  x: <AlertTriangle className="h-5 w-5 text-amber-500" />,
  help: <HelpCircle className="h-5 w-5 text-blue-500" />,
  list: <Sparkles className="h-5 w-5 text-purple-500" />,
};

export default function CheckpointsPage() {
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

        {/* Section 1: Hero - Dark with traffic light */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 rounded-[32px]
            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
            shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]
            border border-gray-700"
        >
          {/* Traffic light visualization */}
          <div className="flex justify-center mb-8 gap-6">
            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0,
              }}
            >
              <div className="w-16 h-16 rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)]
                flex items-center justify-center text-white font-bold text-2xl">
                🔴
              </div>
              <span className="text-xs font-bold text-red-300 uppercase tracking-wider">Required</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.6)]
                flex items-center justify-center text-white font-bold text-2xl">
                🟠
              </div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Recommended</span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-3"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <div className="w-16 h-16 rounded-full bg-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.6)]
                flex items-center justify-center text-white font-bold text-2xl">
                🟡
              </div>
              <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">Optional</span>
            </motion.div>
          </div>

          <div className="flex justify-center mb-6">
            <motion.div
              className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600
                shadow-[0_8px_24px_rgba(217,119,6,0.4)]"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Hand className="h-10 w-10 text-white" />
            </motion.div>
          </div>
          <h1 className="text-h1 font-bold text-white mb-4">{t.title}</h1>
          <p className="text-2xl text-gold-400 font-bold mb-4">{t.subtitle}</p>
          <p className="text-lg text-gray-300 italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section 2: Why Checkpoints Exist */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-diverga-100">
              <Shield className="h-5 w-5 text-diverga-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.whyTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.whyDescription}</p>

          <div className="space-y-4">
            {t.whyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
                className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  {whyIcons[point.icon]}
                </div>
                <p className="text-[var(--foreground)] pt-2">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 3: Checkpoint Levels (Traffic Light) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
              <Pause className="h-5 w-5 text-amber-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.levelsTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.levelsDescription}</p>

          <div className="grid gap-6 sm:grid-cols-3">
            {t.levels.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`rounded-[20px] p-6 relative overflow-hidden
                  ${level.color === 'red' ? 'bg-gradient-to-br from-red-50 to-red-100' : ''}
                  ${level.color === 'amber' ? 'bg-gradient-to-br from-amber-50 to-amber-100' : ''}
                  ${level.color === 'yellow' ? 'bg-gradient-to-br from-yellow-50 to-yellow-100' : ''}
                  shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]
                  hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)]
                  border-2
                  ${level.color === 'red' ? 'border-red-200 hover:border-red-300' : ''}
                  ${level.color === 'amber' ? 'border-amber-200 hover:border-amber-300' : ''}
                  ${level.color === 'yellow' ? 'border-yellow-200 hover:border-yellow-300' : ''}
                  transition-all duration-300`}
              >
                {/* Glowing icon */}
                <motion.div
                  className="text-5xl mb-4 relative inline-block"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                >
                  {level.icon}
                  <motion.div
                    className={`absolute inset-0 blur-xl -z-10
                      ${level.color === 'red' ? 'bg-red-400' : ''}
                      ${level.color === 'amber' ? 'bg-amber-400' : ''}
                      ${level.color === 'yellow' ? 'bg-yellow-400' : ''}`}
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>

                <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-bold mb-4
                  shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                  ${level.color === 'red' ? 'bg-red-500 text-white' : ''}
                  ${level.color === 'amber' ? 'bg-amber-500 text-white' : ''}
                  ${level.color === 'yellow' ? 'bg-yellow-500 text-white' : ''}`}>
                  {level.level}
                </div>

                <p className={`font-bold mb-3 text-lg ${levelColors[level.color].text}`}>{level.behavior}</p>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{level.description}</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold
                  ${level.canSkip === 'Yes' || level.canSkip === '가능' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700'}`}>
                  {level.canSkip === 'Yes' || level.canSkip === '가능' ? '✓' : '✕'}
                  <span>{locale === 'ko' ? '건너뛰기: ' : 'Skip: '}{level.canSkip}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 4: When You Will See Checkpoints */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100">
              <BookOpen className="h-5 w-5 text-teal-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.whenTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.whenDescription}</p>

          <div className="overflow-x-auto rounded-[20px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] border border-gray-100">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    {locale === 'ko' ? '단계' : 'Stage'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    {locale === 'ko' ? '체크포인트' : 'Checkpoint'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    {locale === 'ko' ? '수준' : 'Level'}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    {locale === 'ko' ? '결정' : 'Decision'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.journeyStages.map((stage, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-b border-gray-100 last:border-b-0 hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent transition-all duration-200 cursor-default"
                    whileHover={{ x: 4 }}
                  >
                    <td className="px-6 py-4 font-bold text-gray-900">{stage.stage}</td>
                    <td className="px-6 py-4 font-mono text-sm text-diverga-600 font-semibold">{stage.checkpoint}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold
                        shadow-[0_2px_8px_rgba(0,0,0,0.1)]
                        ${stage.level === 'REQUIRED' ? 'bg-red-500 text-white' : 'bg-amber-500 text-white'}`}>
                        <span className="text-base">{stage.level === 'REQUIRED' ? '🔴' : '🟠'}</span>
                        {stage.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{stage.decision}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 5: How to Respond */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
              <HelpCircle className="h-5 w-5 text-blue-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.respondTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.respondDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.responses.map((response, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + index * 0.1 }}
                className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                  {responseIcons[response.icon]}
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold text-diverga-600">{response.command}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{response.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 6: Real-World Scenarios */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
              <Lightbulb className="h-5 w-5 text-purple-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.scenariosTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.scenariosDescription}</p>

          <div className="space-y-6">
            {t.scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + index * 0.1 }}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
              >
                <div className="bg-[var(--muted)] px-5 py-3 border-b border-[var(--border)]">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-semibold text-[var(--foreground)]">{scenario.title}</h3>
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                      scenario.level === 'REQUIRED' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {scenario.level === 'REQUIRED' ? '🔴' : '🟠'} {scenario.checkpoint}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">{scenario.context}</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                      {locale === 'ko' ? '상황:' : 'Situation:'}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">{scenario.situation}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--foreground)] mb-2">
                      {locale === 'ko' ? '옵션:' : 'Options:'}
                    </p>
                    <ul className="space-y-1">
                      {scenario.options.map((option, optIndex) => (
                        <li key={optIndex} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                          <span className="text-diverga-500">•</span>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-4">
                    <p className="text-sm font-medium text-emerald-800">
                      {locale === 'ko' ? '🎯 당신의 역할:' : '🎯 Your Role:'}
                    </p>
                    <p className="text-sm text-emerald-700 mt-1">{scenario.yourRole}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section 7: Key Checkpoints Reference */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              <FileText className="h-5 w-5 text-gray-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.referenceTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.referenceDescription}</p>

          <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
            <table className="w-full border-collapse bg-[var(--card)]">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--muted)]">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    {locale === 'ko' ? '체크포인트 ID' : 'Checkpoint ID'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    {locale === 'ko' ? '수준' : 'Level'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    {locale === 'ko' ? '언제' : 'When'}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-[var(--foreground)]">
                    {locale === 'ko' ? '결정 내용' : 'Decision'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.referenceTable.map((row, index) => (
                  <tr key={index} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--muted)]/50 transition-colors">
                    <td className="px-4 py-3 font-mono text-sm text-diverga-600">{row.id}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${
                        row.level === 'REQUIRED'
                          ? 'bg-red-100 text-red-700'
                          : row.level === 'RECOMMENDED'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {row.level === 'REQUIRED' ? '🔴' : row.level === 'RECOMMENDED' ? '🟠' : '🟡'} {row.level}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[var(--muted-foreground)]">{row.when}</td>
                    <td className="px-4 py-3 text-sm text-[var(--foreground)]">{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 8: Decision Audit Trail */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
              <FileText className="h-5 w-5 text-cyan-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.auditTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.auditDescription}</p>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6">
            <ul className="space-y-3 mb-6">
              {t.auditFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--foreground)]">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-lg bg-cyan-50 border border-cyan-200 p-4">
              <p className="text-sm text-cyan-800">{t.auditBenefit}</p>
            </div>
          </div>
        </motion.section>

        {/* Section 9: Connection to VS Methodology */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <Users className="h-5 w-5 text-emerald-600" />
            </div>
            <h2 className="text-h2 font-bold text-[var(--foreground)]">{t.vsTitle}</h2>
          </div>
          <p className="text-lg text-[var(--muted-foreground)] mb-6">{t.vsDescription}</p>

          <div className="space-y-3">
            {t.vsPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85 + index * 0.1 }}
                className={`flex gap-4 ${phase.highlight ? 'scale-105 origin-left' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                    phase.highlight
                      ? 'bg-diverga-500 text-white ring-4 ring-diverga-200'
                      : 'bg-[var(--muted)] text-[var(--muted-foreground)]'
                  }`}>
                    {phase.phase}
                  </div>
                </div>
                <div className={`flex-1 rounded-xl border p-4 ${
                  phase.highlight
                    ? 'border-diverga-300 bg-diverga-50'
                    : 'border-[var(--border)] bg-[var(--card)]'
                }`}>
                  <h3 className={`font-semibold mb-1 ${phase.highlight ? 'text-diverga-700' : 'text-[var(--foreground)]'}`}>
                    {phase.name}
                  </h3>
                  <p className={`text-sm ${phase.highlight ? 'text-diverga-600' : 'text-[var(--muted-foreground)]'}`}>
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href={`/${locale}/docs/vs-methodology`}
              className="inline-flex items-center gap-2 text-diverga-600 hover:text-diverga-700 font-medium"
            >
              {t.vsLink}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.section>

        {/* Section 10: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <div className="rounded-2xl bg-gradient-to-br from-diverga-500 to-teal-500 p-8 text-white">
            <h2 className="text-h2 font-bold mb-2">{t.ctaTitle}</h2>
            <p className="text-diverga-100 mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/agents`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-diverga-600 hover:bg-diverga-50 transition-colors"
              >
                {t.ctaButtons.agents}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/workflows`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {t.ctaButtons.workflows}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
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
