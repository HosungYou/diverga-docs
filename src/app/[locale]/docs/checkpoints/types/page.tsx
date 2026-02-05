"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  AlertCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  Shield,
  Database,
  BarChart3,
  FileSearch,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Checkpoint Types',
    subtitle: 'Color-Coded Severity System',
    philosophy: '"Every checkpoint is a human decision point—never let AI decide alone"',

    // Section 1: Severity Levels
    severityTitle: 'Checkpoint Severity Levels',
    severityDescription: 'Diverga uses a color-coded system to indicate the importance and required action for each checkpoint.',
    severityLevels: [
      {
        level: 'REQUIRED',
        color: '#ff5f56',
        icon: 'alert-circle',
        emoji: '🔴',
        description: 'Critical decision points',
        rules: [
          'Must have explicit user confirmation',
          'Cannot be bypassed or auto-approved',
          'Blocks progress until resolved',
          'Typically affects research direction or validity',
        ],
        examples: [
          'CP_RESEARCH_DIRECTION',
          'META_ANALYSIS_PROTOCOL',
          'SCH_DATABASE_SELECTION',
          'CP_PARADIGM_SELECTION',
        ],
      },
      {
        level: 'RECOMMENDED',
        color: '#ffbd2e',
        icon: 'alert-triangle',
        emoji: '🟠',
        description: 'Important but can proceed with defaults',
        rules: [
          'User should review but can accept defaults',
          'Auto-proceeds after timeout with notification',
          'Default choices are methodologically sound',
          'Can be revisited later without major rework',
        ],
        examples: [
          'CP_METHODOLOGY_APPROVAL',
          'SCH_RAG_READINESS',
          'CP_SAMPLE_SIZE_CONFIRMATION',
          'CP_VISUALIZATION_STYLE',
        ],
      },
      {
        level: 'OPTIONAL',
        color: '#ffcc22',
        icon: 'info',
        emoji: '🟡',
        description: 'Informational checkpoints',
        rules: [
          'User awareness only',
          'Auto-proceeds without intervention',
          'Logged for audit trail',
          'Useful for progress tracking',
        ],
        examples: [
          'CP_PROGRESS_UPDATE',
          'CP_INTERMEDIATE_RESULTS',
          'CP_AGENT_COMPLETION',
          'CP_STAGE_TRANSITION',
        ],
      },
      {
        level: 'ADVISORY',
        color: '#22ccff',
        icon: 'lightbulb',
        emoji: '🔵',
        description: 'System recommendations',
        rules: [
          'No user action required',
          'Logged for audit trail',
          'Provides optimization suggestions',
          'Can be safely ignored without consequences',
        ],
        examples: [
          'CP_OPTIMIZATION_SUGGESTION',
          'CP_ALTERNATIVE_METHOD',
          'CP_PERFORMANCE_TIP',
          'CP_BEST_PRACTICE_REMINDER',
        ],
      },
    ],

    // Section 2: Checkpoint Categories
    categoriesTitle: 'Checkpoint Categories',
    categoriesDescription: 'Checkpoints are organized into 6 thematic categories based on research workflow stages.',
    categories: [
      {
        name: 'Research Direction',
        icon: 'shield',
        color: '#00cec9',
        description: 'Fundamental decisions about research scope, questions, and paradigm',
        checkpoints: [
          { name: 'CP_RESEARCH_DIRECTION', severity: 'required', description: 'Approve research question and scope' },
          { name: 'CP_PARADIGM_SELECTION', severity: 'required', description: 'Choose ontological/epistemological stance' },
          { name: 'CP_FRAMEWORK_SELECTION', severity: 'required', description: 'Select theoretical framework with T-Score' },
        ],
      },
      {
        name: 'Methodology',
        icon: 'database',
        color: '#9b59b6',
        description: 'Method selection, sampling, and research design decisions',
        checkpoints: [
          { name: 'CP_METHODOLOGY_APPROVAL', severity: 'recommended', description: 'Approve quantitative/qualitative/mixed design' },
          { name: 'CP_SAMPLE_SIZE_CONFIRMATION', severity: 'recommended', description: 'Confirm calculated sample size' },
          { name: 'CP_INSTRUMENT_VALIDATION', severity: 'required', description: 'Validate measurement instruments' },
        ],
      },
      {
        name: 'Data',
        icon: 'database',
        color: '#44ffaa',
        description: 'Data collection, quality, and preprocessing decisions',
        checkpoints: [
          { name: 'CP_DATA_QUALITY_CHECK', severity: 'required', description: 'Review missing data and outliers' },
          { name: 'CP_PREPROCESSING_STRATEGY', severity: 'recommended', description: 'Approve data cleaning approach' },
          { name: 'CP_VARIABLE_CODING', severity: 'required', description: 'Confirm variable coding scheme' },
        ],
      },
      {
        name: 'Analysis',
        icon: 'bar-chart',
        color: '#ffcc22',
        description: 'Statistical/qualitative analysis strategy and assumptions',
        checkpoints: [
          { name: 'CP_ANALYSIS_STRATEGY', severity: 'required', description: 'Approve statistical/qualitative analysis plan' },
          { name: 'CP_ASSUMPTION_VIOLATIONS', severity: 'required', description: 'Address violated statistical assumptions' },
          { name: 'CP_EFFECT_SIZE_INTERPRETATION', severity: 'recommended', description: 'Review practical significance' },
        ],
      },
      {
        name: 'ScholaRAG',
        icon: 'file-search',
        color: '#22ccff',
        description: 'Systematic review automation and PRISMA compliance',
        checkpoints: [
          { name: 'SCH_DATABASE_SELECTION', severity: 'required', description: 'Select databases for literature search' },
          { name: 'SCH_SCREENING_CRITERIA', severity: 'required', description: 'Define inclusion/exclusion criteria' },
          { name: 'SCH_RAG_READINESS', severity: 'recommended', description: 'Verify PDF collection completeness' },
          { name: 'SCH_QUALITY_GATES', severity: 'advisory', description: 'PRISMA compliance validation' },
        ],
      },
      {
        name: 'Quality',
        icon: 'check-circle',
        color: '#ff5f56',
        description: 'Validity, reliability, ethics, and reproducibility',
        checkpoints: [
          { name: 'CP_ETHICS_REVIEW', severity: 'required', description: 'Confirm IRB approval/exemption' },
          { name: 'CP_VALIDITY_THREATS', severity: 'required', description: 'Address internal/external validity threats' },
          { name: 'CP_REPRODUCIBILITY_CHECK', severity: 'recommended', description: 'Ensure analysis reproducibility' },
        ],
      },
    ],

    // Section 3: Severity Decision Matrix
    matrixTitle: 'Severity Decision Matrix',
    matrixDescription: 'How to determine which severity level applies to a decision point:',
    matrixRows: [
      {
        question: 'Does this affect research validity or conclusions?',
        required: 'Yes',
        recommended: 'Indirectly',
        optional: 'No',
        advisory: 'No',
      },
      {
        question: 'Can it be changed later without major rework?',
        required: 'No',
        recommended: 'Yes, with effort',
        optional: 'Yes, easily',
        advisory: 'N/A',
      },
      {
        question: 'Is there a safe default choice?',
        required: 'No',
        recommended: 'Yes',
        optional: 'Yes',
        advisory: 'N/A',
      },
      {
        question: 'Does it require domain expertise?',
        required: 'Yes',
        recommended: 'Partially',
        optional: 'No',
        advisory: 'No',
      },
    ],

    // Section 4: Example Workflow
    workflowTitle: 'Checkpoint Workflow Example',
    workflowDescription: 'How checkpoints appear in a typical research session:',
    workflowSteps: [
      {
        step: 1,
        severity: 'required',
        checkpoint: 'CP_RESEARCH_DIRECTION',
        prompt: 'You are starting a new study. Do you approve this research question: "How does AI improve learning outcomes?"',
        userAction: 'User reviews and approves',
        systemAction: 'Stores decision in .research/decision-log.yaml',
      },
      {
        step: 2,
        severity: 'required',
        checkpoint: 'CP_PARADIGM_SELECTION',
        prompt: 'Based on your research question, Diverga recommends a Positivist paradigm with quasi-experimental design. Approve?',
        userAction: 'User reviews alternatives and approves',
        systemAction: 'Updates .research/project-state.yaml',
      },
      {
        step: 3,
        severity: 'recommended',
        checkpoint: 'CP_SAMPLE_SIZE_CONFIRMATION',
        prompt: 'G*Power recommends n=128 for 80% power. Accept this sample size?',
        userAction: 'User accepts default (or modifies)',
        systemAction: 'Logs decision, proceeds with 30s timeout',
      },
      {
        step: 4,
        severity: 'optional',
        checkpoint: 'CP_PROGRESS_UPDATE',
        prompt: 'Stage 1 complete: Research design approved. Moving to Stage 2: Data collection.',
        userAction: 'No action needed',
        systemAction: 'Auto-proceeds, logs progress',
      },
      {
        step: 5,
        severity: 'advisory',
        checkpoint: 'CP_OPTIMIZATION_SUGGESTION',
        prompt: 'Tip: Consider using Bootstrapping for robust standard errors with your sample size.',
        userAction: 'Can ignore or adopt',
        systemAction: 'Logged for reference, no blocking',
      },
    ],

    // Section 5: Checkpoint Lifecycle
    lifecycleTitle: 'Checkpoint Lifecycle',
    lifecycleDescription: 'Every checkpoint follows a standard lifecycle from creation to resolution:',
    lifecycleStages: [
      { stage: 'Triggered', description: 'Agent detects decision point, creates checkpoint entry' },
      { stage: 'Presented', description: 'User sees checkpoint with context and options' },
      { stage: 'Pending', description: 'Waiting for user response (REQUIRED) or timeout (RECOMMENDED)' },
      { stage: 'Resolved', description: 'User approves/rejects or system auto-proceeds' },
      { stage: 'Logged', description: 'Decision recorded in .research/decision-log.yaml with timestamp' },
    ],

    // Section 6: Best Practices
    practicesTitle: 'Best Practices',
    practicesDescription: 'Guidelines for effective checkpoint design and usage:',
    practices: [
      {
        title: 'Clear Context',
        description: 'Every checkpoint should explain WHY the decision matters and WHAT the consequences are.',
      },
      {
        title: 'Actionable Choices',
        description: 'Present 2-4 concrete options with T-Scores, not open-ended questions.',
      },
      {
        title: 'Audit Trail',
        description: 'Always log decisions with timestamps and rationale for methodology documentation.',
      },
      {
        title: 'Avoid Checkpoint Fatigue',
        description: 'Use REQUIRED sparingly—only for truly critical decisions. Batch minor decisions.',
      },
      {
        title: 'Progressive Disclosure',
        description: 'Start with high-level checkpoints, drill down only if user wants more detail.',
      },
    ],

    // Section 7: CTA
    ctaTitle: 'Ready to Implement Checkpoints?',
    ctaDescription: 'Learn how checkpoints integrate into your research workflow.',
    ctaButtons: {
      workflow: 'Checkpoint Workflow',
      overview: 'Overview',
      start: 'Get Started',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '체크포인트 유형',
    subtitle: '색상 코드 심각도 시스템',
    philosophy: '"모든 체크포인트는 인간의 결정 지점—AI가 혼자 결정하게 하지 마세요"',

    // Section 1: Severity Levels
    severityTitle: '체크포인트 심각도 수준',
    severityDescription: 'Diverga는 각 체크포인트의 중요도와 필요한 조치를 나타내기 위해 색상 코드 시스템을 사용합니다.',
    severityLevels: [
      {
        level: 'REQUIRED (필수)',
        color: '#ff5f56',
        icon: 'alert-circle',
        emoji: '🔴',
        description: '중요한 결정 지점',
        rules: [
          '명시적인 사용자 확인 필수',
          '우회 또는 자동 승인 불가',
          '해결될 때까지 진행 차단',
          '일반적으로 연구 방향 또는 타당도에 영향',
        ],
        examples: [
          'CP_RESEARCH_DIRECTION',
          'META_ANALYSIS_PROTOCOL',
          'SCH_DATABASE_SELECTION',
          'CP_PARADIGM_SELECTION',
        ],
      },
      {
        level: 'RECOMMENDED (권장)',
        color: '#ffbd2e',
        icon: 'alert-triangle',
        emoji: '🟠',
        description: '중요하지만 기본값으로 진행 가능',
        rules: [
          '사용자가 검토해야 하지만 기본값 수락 가능',
          '알림과 함께 타임아웃 후 자동 진행',
          '기본 선택은 방법론적으로 건전함',
          '주요 재작업 없이 나중에 재검토 가능',
        ],
        examples: [
          'CP_METHODOLOGY_APPROVAL',
          'SCH_RAG_READINESS',
          'CP_SAMPLE_SIZE_CONFIRMATION',
          'CP_VISUALIZATION_STYLE',
        ],
      },
      {
        level: 'OPTIONAL (선택)',
        color: '#ffcc22',
        icon: 'info',
        emoji: '🟡',
        description: '정보 제공 체크포인트',
        rules: [
          '사용자 인식만 필요',
          '개입 없이 자동 진행',
          '감사 추적을 위해 기록',
          '진행 상황 추적에 유용',
        ],
        examples: [
          'CP_PROGRESS_UPDATE',
          'CP_INTERMEDIATE_RESULTS',
          'CP_AGENT_COMPLETION',
          'CP_STAGE_TRANSITION',
        ],
      },
      {
        level: 'ADVISORY (권고)',
        color: '#22ccff',
        icon: 'lightbulb',
        emoji: '🔵',
        description: '시스템 권장사항',
        rules: [
          '사용자 조치 불필요',
          '감사 추적을 위해 기록',
          '최적화 제안 제공',
          '결과 없이 안전하게 무시 가능',
        ],
        examples: [
          'CP_OPTIMIZATION_SUGGESTION',
          'CP_ALTERNATIVE_METHOD',
          'CP_PERFORMANCE_TIP',
          'CP_BEST_PRACTICE_REMINDER',
        ],
      },
    ],

    // Section 2: Checkpoint Categories
    categoriesTitle: '체크포인트 카테고리',
    categoriesDescription: '체크포인트는 연구 워크플로우 단계에 따라 6가지 주제별 카테고리로 구성됩니다.',
    categories: [
      {
        name: '연구 방향',
        icon: 'shield',
        color: '#00cec9',
        description: '연구 범위, 질문, 패러다임에 대한 기본 결정',
        checkpoints: [
          { name: 'CP_RESEARCH_DIRECTION', severity: 'required', description: '연구 질문 및 범위 승인' },
          { name: 'CP_PARADIGM_SELECTION', severity: 'required', description: '존재론적/인식론적 입장 선택' },
          { name: 'CP_FRAMEWORK_SELECTION', severity: 'required', description: 'T-Score와 함께 이론적 프레임워크 선택' },
        ],
      },
      {
        name: '방법론',
        icon: 'database',
        color: '#9b59b6',
        description: '방법 선택, 샘플링, 연구 설계 결정',
        checkpoints: [
          { name: 'CP_METHODOLOGY_APPROVAL', severity: 'recommended', description: '양적/질적/혼합 설계 승인' },
          { name: 'CP_SAMPLE_SIZE_CONFIRMATION', severity: 'recommended', description: '계산된 표본 크기 확인' },
          { name: 'CP_INSTRUMENT_VALIDATION', severity: 'required', description: '측정 도구 검증' },
        ],
      },
      {
        name: '데이터',
        icon: 'database',
        color: '#44ffaa',
        description: '데이터 수집, 품질, 전처리 결정',
        checkpoints: [
          { name: 'CP_DATA_QUALITY_CHECK', severity: 'required', description: '결측치 및 이상치 검토' },
          { name: 'CP_PREPROCESSING_STRATEGY', severity: 'recommended', description: '데이터 정제 접근법 승인' },
          { name: 'CP_VARIABLE_CODING', severity: 'required', description: '변수 코딩 체계 확인' },
        ],
      },
      {
        name: '분석',
        icon: 'bar-chart',
        color: '#ffcc22',
        description: '통계/질적 분석 전략 및 가정',
        checkpoints: [
          { name: 'CP_ANALYSIS_STRATEGY', severity: 'required', description: '통계/질적 분석 계획 승인' },
          { name: 'CP_ASSUMPTION_VIOLATIONS', severity: 'required', description: '위반된 통계 가정 처리' },
          { name: 'CP_EFFECT_SIZE_INTERPRETATION', severity: 'recommended', description: '실질적 유의성 검토' },
        ],
      },
      {
        name: 'ScholaRAG',
        icon: 'file-search',
        color: '#22ccff',
        description: '체계적 문헌고찰 자동화 및 PRISMA 준수',
        checkpoints: [
          { name: 'SCH_DATABASE_SELECTION', severity: 'required', description: '문헌 검색용 데이터베이스 선택' },
          { name: 'SCH_SCREENING_CRITERIA', severity: 'required', description: '포함/제외 기준 정의' },
          { name: 'SCH_RAG_READINESS', severity: 'recommended', description: 'PDF 수집 완전성 확인' },
          { name: 'SCH_QUALITY_GATES', severity: 'advisory', description: 'PRISMA 준수 검증' },
        ],
      },
      {
        name: '품질',
        icon: 'check-circle',
        color: '#ff5f56',
        description: '타당도, 신뢰도, 윤리, 재현성',
        checkpoints: [
          { name: 'CP_ETHICS_REVIEW', severity: 'required', description: 'IRB 승인/면제 확인' },
          { name: 'CP_VALIDITY_THREATS', severity: 'required', description: '내적/외적 타당도 위협 처리' },
          { name: 'CP_REPRODUCIBILITY_CHECK', severity: 'recommended', description: '분석 재현성 보장' },
        ],
      },
    ],

    // Section 3: Severity Decision Matrix
    matrixTitle: '심각도 결정 매트릭스',
    matrixDescription: '결정 지점에 어떤 심각도 수준이 적용되는지 결정하는 방법:',
    matrixRows: [
      {
        question: '연구 타당도 또는 결론에 영향을 미치나요?',
        required: '예',
        recommended: '간접적으로',
        optional: '아니오',
        advisory: '아니오',
      },
      {
        question: '주요 재작업 없이 나중에 변경할 수 있나요?',
        required: '아니오',
        recommended: '예, 노력으로',
        optional: '예, 쉽게',
        advisory: '해당 없음',
      },
      {
        question: '안전한 기본 선택이 있나요?',
        required: '아니오',
        recommended: '예',
        optional: '예',
        advisory: '해당 없음',
      },
      {
        question: '도메인 전문 지식이 필요한가요?',
        required: '예',
        recommended: '부분적으로',
        optional: '아니오',
        advisory: '아니오',
      },
    ],

    // Section 4: Example Workflow
    workflowTitle: '체크포인트 워크플로우 예시',
    workflowDescription: '일반적인 연구 세션에서 체크포인트가 나타나는 방법:',
    workflowSteps: [
      {
        step: 1,
        severity: 'required',
        checkpoint: 'CP_RESEARCH_DIRECTION',
        prompt: '새로운 연구를 시작합니다. 이 연구 질문을 승인하시나요: "AI가 학습 결과를 어떻게 개선하나요?"',
        userAction: '사용자가 검토하고 승인',
        systemAction: '.research/decision-log.yaml에 결정 저장',
      },
      {
        step: 2,
        severity: 'required',
        checkpoint: 'CP_PARADIGM_SELECTION',
        prompt: '연구 질문에 따라 Diverga는 준실험 설계의 실증주의 패러다임을 권장합니다. 승인하시나요?',
        userAction: '사용자가 대안을 검토하고 승인',
        systemAction: '.research/project-state.yaml 업데이트',
      },
      {
        step: 3,
        severity: 'recommended',
        checkpoint: 'CP_SAMPLE_SIZE_CONFIRMATION',
        prompt: 'G*Power는 80% 검정력을 위해 n=128을 권장합니다. 이 표본 크기를 수락하시나요?',
        userAction: '사용자가 기본값 수락 (또는 수정)',
        systemAction: '결정 기록, 30초 타임아웃으로 진행',
      },
      {
        step: 4,
        severity: 'optional',
        checkpoint: 'CP_PROGRESS_UPDATE',
        prompt: '1단계 완료: 연구 설계 승인됨. 2단계로 이동: 데이터 수집.',
        userAction: '조치 불필요',
        systemAction: '자동 진행, 진행 상황 기록',
      },
      {
        step: 5,
        severity: 'advisory',
        checkpoint: 'CP_OPTIMIZATION_SUGGESTION',
        prompt: '팁: 표본 크기에 대한 견고한 표준 오차를 위해 부트스트래핑 사용 고려.',
        userAction: '무시하거나 채택 가능',
        systemAction: '참조를 위해 기록, 차단 없음',
      },
    ],

    // Section 5: Checkpoint Lifecycle
    lifecycleTitle: '체크포인트 생명주기',
    lifecycleDescription: '모든 체크포인트는 생성부터 해결까지 표준 생명주기를 따릅니다:',
    lifecycleStages: [
      { stage: '트리거됨', description: '에이전트가 결정 지점을 감지하고 체크포인트 항목 생성' },
      { stage: '제시됨', description: '사용자가 컨텍스트 및 옵션과 함께 체크포인트 확인' },
      { stage: '대기 중', description: '사용자 응답 대기 (REQUIRED) 또는 타임아웃 (RECOMMENDED)' },
      { stage: '해결됨', description: '사용자가 승인/거부하거나 시스템이 자동 진행' },
      { stage: '기록됨', description: '타임스탬프와 함께 .research/decision-log.yaml에 결정 기록' },
    ],

    // Section 6: Best Practices
    practicesTitle: '모범 사례',
    practicesDescription: '효과적인 체크포인트 설계 및 사용을 위한 가이드라인:',
    practices: [
      {
        title: '명확한 컨텍스트',
        description: '모든 체크포인트는 결정이 중요한 이유와 결과가 무엇인지 설명해야 합니다.',
      },
      {
        title: '실행 가능한 선택',
        description: '개방형 질문이 아닌 T-Score와 함께 2-4개의 구체적인 옵션을 제시합니다.',
      },
      {
        title: '감사 추적',
        description: '방법론 문서화를 위해 항상 타임스탬프 및 근거와 함께 결정을 기록합니다.',
      },
      {
        title: '체크포인트 피로 방지',
        description: 'REQUIRED는 진정으로 중요한 결정에만 사용합니다. 사소한 결정은 일괄 처리합니다.',
      },
      {
        title: '점진적 공개',
        description: '상위 수준 체크포인트로 시작하여 사용자가 원하는 경우에만 세부 정보로 드릴다운합니다.',
      },
    ],

    // Section 7: CTA
    ctaTitle: '체크포인트 구현 준비가 되셨나요?',
    ctaDescription: '체크포인트가 연구 워크플로우에 어떻게 통합되는지 알아보세요.',
    ctaButtons: {
      workflow: '체크포인트 워크플로우',
      overview: '개요',
      start: '시작하기',
    },
  },
};

// Severity level icons
const severityIcons: Record<string, React.ReactNode> = {
  'alert-circle': <AlertCircle className="h-6 w-6" />,
  'alert-triangle': <AlertTriangle className="h-6 w-6" />,
  'info': <Info className="h-6 w-6" />,
  'lightbulb': <Lightbulb className="h-6 w-6" />,
};

// Category icons
const categoryIcons: Record<string, React.ReactNode> = {
  'shield': <Shield className="h-5 w-5" />,
  'database': <Database className="h-5 w-5" />,
  'bar-chart': <BarChart3 className="h-5 w-5" />,
  'file-search': <FileSearch className="h-5 w-5" />,
  'check-circle': <CheckCircle2 className="h-5 w-5" />,
};

// Severity badge helper
const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'required': return '#ff5f56';
    case 'recommended': return '#ffbd2e';
    case 'optional': return '#ffcc22';
    case 'advisory': return '#22ccff';
    default: return '#888';
  }
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

export default function CheckpointTypesPage() {
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
              background: 'radial-gradient(ellipse at center top, rgba(255, 95, 86, 0.15) 0%, transparent 50%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-2 mb-6 relative z-10"
          >
            <div className="flex h-16 w-16 items-center justify-center text-3xl">🔴</div>
            <div className="flex h-16 w-16 items-center justify-center text-3xl">🟠</div>
            <div className="flex h-16 w-16 items-center justify-center text-3xl">🟡</div>
            <div className="flex h-16 w-16 items-center justify-center text-3xl">🔵</div>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#ff5f56' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 1: Severity Levels */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.severityTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.severityDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.severityLevels.map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="bg-void-elevated border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: `${level.color}40`,
                  boxShadow: `inset 0 1px 0 0 rgba(240, 240, 245, 0.05)`,
                }}
              >
                <div
                  className="px-5 py-4 border-b flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${level.color}15 0%, transparent 100%)`,
                    borderColor: `${level.color}20`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{level.emoji}</div>
                    <div>
                      <h3 className="void-heading-3 text-stellar-core">{level.level}</h3>
                      <p className="text-sm text-stellar-dim">{level.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '규칙:' : 'Rules:'}
                    </p>
                    <ul className="space-y-1.5">
                      {level.rules.map((rule, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-sm text-stellar-bright">
                          <span style={{ color: level.color }}>◆</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '예시:' : 'Examples:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {level.examples.map((example, eIdx) => (
                        <code
                          key={eIdx}
                          className="inline-flex px-2 py-1 font-mono text-xs border"
                          style={{
                            backgroundColor: `${level.color}10`,
                            borderColor: `${level.color}30`,
                            color: level.color,
                          }}
                        >
                          {example}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 2: Checkpoint Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.categoriesTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.categoriesDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div
                  className="px-4 py-3 border-b border-stellar-faint/10 flex items-center gap-3"
                  style={{
                    background: `linear-gradient(135deg, ${category.color}15 0%, transparent 100%)`,
                  }}
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center border border-stellar-faint/20"
                    style={{ backgroundColor: `${category.color}20`, color: category.color }}
                  >
                    {categoryIcons[category.icon]}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-stellar-core">{category.name}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-stellar-dim mb-3">{category.description}</p>
                  <div className="space-y-2">
                    {category.checkpoints.map((cp, cpIdx) => (
                      <div key={cpIdx} className="flex items-start gap-2">
                        <div
                          className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                          style={{ backgroundColor: getSeverityColor(cp.severity) }}
                        />
                        <div className="flex-1 min-w-0">
                          <code
                            className="text-xs font-mono block truncate"
                            style={{ color: category.color }}
                          >
                            {cp.name}
                          </code>
                          <p className="text-xs text-stellar-faint">{cp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 3: Severity Decision Matrix */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.matrixTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.matrixDescription}</p>

          <div className="overflow-x-auto">
            <table className="w-full border border-stellar-faint/10">
              <thead>
                <tr className="bg-void-elevated">
                  <th className="border border-stellar-faint/10 px-4 py-3 text-left text-xs font-mono text-stellar-dim uppercase">
                    {locale === 'ko' ? '질문' : 'Question'}
                  </th>
                  <th className="border border-stellar-faint/10 px-4 py-3 text-center text-xs font-mono uppercase" style={{ color: '#ff5f56' }}>
                    🔴 Required
                  </th>
                  <th className="border border-stellar-faint/10 px-4 py-3 text-center text-xs font-mono uppercase" style={{ color: '#ffbd2e' }}>
                    🟠 Recommended
                  </th>
                  <th className="border border-stellar-faint/10 px-4 py-3 text-center text-xs font-mono uppercase" style={{ color: '#ffcc22' }}>
                    🟡 Optional
                  </th>
                  <th className="border border-stellar-faint/10 px-4 py-3 text-center text-xs font-mono uppercase" style={{ color: '#22ccff' }}>
                    🔵 Advisory
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.matrixRows.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-void-elevated/50' : ''}>
                    <td className="border border-stellar-faint/10 px-4 py-3 text-sm text-stellar-bright">
                      {row.question}
                    </td>
                    <td className="border border-stellar-faint/10 px-4 py-3 text-sm text-center text-stellar-dim">
                      {row.required}
                    </td>
                    <td className="border border-stellar-faint/10 px-4 py-3 text-sm text-center text-stellar-dim">
                      {row.recommended}
                    </td>
                    <td className="border border-stellar-faint/10 px-4 py-3 text-sm text-center text-stellar-dim">
                      {row.optional}
                    </td>
                    <td className="border border-stellar-faint/10 px-4 py-3 text-sm text-center text-stellar-dim">
                      {row.advisory}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Example Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.workflowTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.workflowDescription}</p>

          <div className="space-y-4">
            {t.workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                    style={{
                      backgroundColor: getSeverityColor(step.severity),
                      color: '#050508',
                    }}
                  >
                    {step.step}
                  </div>
                </div>
                <div
                  className="flex-1 p-4 border"
                  style={{
                    backgroundColor: `${getSeverityColor(step.severity)}05`,
                    borderColor: `${getSeverityColor(step.severity)}20`,
                  }}
                >
                  <code
                    className="text-xs font-mono font-bold block mb-2"
                    style={{ color: getSeverityColor(step.severity) }}
                  >
                    {step.checkpoint}
                  </code>
                  <p className="text-sm text-stellar-bright mb-2 italic">"{step.prompt}"</p>
                  <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-stellar-faint/10">
                    <div>
                      <p className="text-xs font-mono text-stellar-dim uppercase mb-1">
                        {locale === 'ko' ? '사용자 조치:' : 'User Action:'}
                      </p>
                      <p className="text-xs text-stellar-faint">{step.userAction}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono text-stellar-dim uppercase mb-1">
                        {locale === 'ko' ? '시스템 조치:' : 'System Action:'}
                      </p>
                      <p className="text-xs text-stellar-faint">{step.systemAction}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: Checkpoint Lifecycle */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.lifecycleTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.lifecycleDescription}</p>

          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {t.lifecycleStages.map((stage, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center mx-auto mb-2 border border-stellar-faint/20"
                    style={{
                      backgroundColor: 'rgba(0, 206, 201, 0.15)',
                      color: '#00cec9',
                    }}
                  >
                    <span className="font-mono font-bold text-xs">{index + 1}</span>
                  </div>
                  <p className="text-xs font-mono font-bold text-stellar-core mb-1">{stage.stage}</p>
                  <p className="text-xs text-stellar-faint max-w-[100px]">{stage.description}</p>
                </motion.div>
                {index < t.lifecycleStages.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-stellar-faint mx-2" />
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.practicesTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.practicesDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.practices.map((practice, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-stellar-faint/20"
                  style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)', color: '#44ffaa' }}
                >
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm mb-1 text-stellar-core">{practice.title}</h3>
                  <p className="text-sm text-stellar-dim">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 7: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 95, 86, 0.1) 0%, rgba(255, 189, 46, 0.1) 100%)',
              borderColor: 'rgba(255, 95, 86, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/checkpoints/workflow`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.workflow}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.overview}
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
