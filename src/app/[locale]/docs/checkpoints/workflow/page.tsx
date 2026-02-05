'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  GitBranch,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  Terminal,
  ArrowRight,
  Zap,
  Database,
  Eye,
  Play,
  Archive,
  Bell,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Checkpoints',
    title: 'Checkpoint Workflow',
    subtitle: 'From Detection to Decision Recording',
    philosophy: '"Every checkpoint is a documented conversation between human intent and AI capability"',

    // Section 2: Workflow Stages
    stagesTitle: 'Workflow Stages',
    stagesDescription: 'Each checkpoint follows a 5-stage workflow ensuring proper human control and audit trail:',
    stages: [
      {
        stage: 1,
        name: 'Trigger Detection',
        icon: 'bell',
        color: '#ff3366',
        description: 'Agent detects checkpoint condition',
        details: [
          'Context gathered automatically from conversation history',
          'Checkpoint type identified (REQUIRED/RECOMMENDED/OPTIONAL)',
          'Relevant options prepared for presentation',
        ],
        automated: true,
      },
      {
        stage: 2,
        name: 'Context Presentation',
        icon: 'eye',
        color: '#ff8844',
        description: 'Current state summarized',
        details: [
          'Options presented clearly with T-Scores (if applicable)',
          'Recommendations highlighted based on VS methodology',
          'Relevant research context provided',
        ],
        automated: true,
      },
      {
        stage: 3,
        name: 'User Decision',
        icon: 'checkCircle',
        color: '#44ffaa',
        description: 'You make the choice',
        details: [
          'REQUIRED: Must select option before proceeding',
          'RECOMMENDED: Can accept default or choose alternative',
          'OPTIONAL: Auto-proceeds with default if no input',
        ],
        automated: false,
      },
      {
        stage: 4,
        name: 'Decision Recording',
        icon: 'database',
        color: '#22ccff',
        description: 'Choice logged with timestamp',
        details: [
          'Decision recorded in decision-log.yaml',
          'Rationale captured if provided',
          'Audit trail maintained for reproducibility',
        ],
        automated: true,
      },
      {
        stage: 5,
        name: 'Workflow Continuation',
        icon: 'play',
        color: '#9b59b6',
        description: 'Next steps initiated',
        details: [
          'Context updated with your decision',
          'Downstream agents notified of choice',
          'Research workflow continues seamlessly',
        ],
        automated: true,
      },
    ],

    // Section 3: Workflow Diagram
    diagramTitle: 'Visual Workflow',
    diagramDescription: 'See how checkpoints integrate into the research workflow:',

    // Section 4: Checkpoint Commands
    commandsTitle: 'Checkpoint Commands',
    commandsDescription: 'Manual checkpoint control and inspection:',
    commands: [
      {
        command: '/checkpoint',
        description: 'Trigger manual checkpoint',
        usage: 'Use when you want to pause and review current state',
        example: '/checkpoint',
      },
      {
        command: '/checkpoint status',
        description: 'View pending checkpoints',
        usage: 'Check if any checkpoints are waiting for your decision',
        example: '/checkpoint status',
      },
      {
        command: '/checkpoint history',
        description: 'View checkpoint log',
        usage: 'Review all past checkpoint decisions in current session',
        example: '/checkpoint history',
      },
      {
        command: '/checkpoint resume <id>',
        description: 'Resume from specific checkpoint',
        usage: 'Return to a previous decision point',
        example: '/checkpoint resume CP_THEORY_SELECTION',
      },
    ],

    // Section 5: Integration with Memory System
    memoryTitle: 'Memory System Integration',
    memoryDescription: 'Checkpoints are deeply integrated with Diverga\'s memory architecture:',
    memoryFeatures: [
      {
        title: 'decision-log.yaml',
        description: 'All checkpoint decisions stored in structured YAML format',
        location: '.diverga/memory/decision-log.yaml',
        example: `- checkpoint_id: CP_THEORY_SELECTION
  timestamp: 2024-10-15T14:30:00Z
  level: REQUIRED
  decision: Self-Determination Theory + TAM
  t_score: 0.6
  rationale: "Hybrid approach better fits context"
  alternatives_considered:
    - TAM (T=0.92)
    - Cognitive Load Theory (T=0.4)`,
      },
      {
        title: 'Session Context',
        description: 'Active decisions referenced in ongoing conversation',
        location: 'In-memory context',
        example: `Current decisions active:
- CP_PARADIGM_SELECTION: Pragmatist
- CP_THEORY_SELECTION: SDT + TAM
- CP_METHODOLOGY_APPROVAL: Mixed methods`,
      },
      {
        title: 'Audit Trail',
        description: 'Complete history available for methodology sections',
        location: '.diverga/audit/checkpoint-trail.md',
        example: `## Checkpoint Audit Trail
Research Question: [Your question]

### CP_RESEARCH_DIRECTION
**Decision:** Approved
**Date:** 2024-10-15 10:00:00
**Rationale:** Scope is appropriate...`,
      },
    ],

    // Section 6: Decision States
    statesTitle: 'Decision States',
    statesDescription: 'Checkpoints transition through these states:',
    states: [
      { state: 'PENDING', color: '#ffcc22', description: 'Checkpoint triggered, awaiting user input' },
      { state: 'ACTIVE', color: '#ff8844', description: 'User is currently reviewing options' },
      { state: 'RESOLVED', color: '#44ffaa', description: 'Decision made and recorded' },
      { state: 'ARCHIVED', color: '#8888aa', description: 'Checkpoint completed and logged to history' },
    ],

    // Section 7: Real-World Workflow Example
    exampleTitle: 'Real-World Workflow Example',
    exampleDescription: 'Complete checkpoint lifecycle from detection to resolution:',
    exampleSteps: [
      {
        step: 1,
        actor: 'User',
        action: '"I want to research AI adoption in education using TAM"',
        system: 'Context detected: Theoretical framework mentioned',
      },
      {
        step: 2,
        actor: 'A2-TheoreticalFrameworkArchitect',
        action: 'Triggers CP_THEORY_SELECTION (REQUIRED)',
        system: 'VS methodology runs: Identifies TAM as modal (T=0.92)',
      },
      {
        step: 3,
        actor: 'System',
        action: 'Presents checkpoint with alternatives',
        system: 'Shows TAM + 4 differentiated alternatives',
      },
      {
        step: 4,
        actor: 'User',
        action: 'Reviews options, asks "explain T-Scores"',
        system: 'Provides T-Score explanation',
      },
      {
        step: 5,
        actor: 'User',
        action: 'Selects: "Self-Determination Theory + TAM (T=0.6)"',
        system: 'Records decision to decision-log.yaml',
      },
      {
        step: 6,
        actor: 'System',
        action: 'Updates context, continues workflow',
        system: 'A3-VariableDesigner receives theory selection',
      },
    ],

    // Section 8: Best Practices
    practicesTitle: 'Best Practices',
    practicesDescription: 'Maximize checkpoint effectiveness:',
    practices: [
      {
        title: 'Provide Rationale',
        description: 'When making decisions, briefly explain your reasoning. This enriches the audit trail and helps your future self understand choices.',
        example: '"Approve - This framework better captures intrinsic motivation aspects"',
      },
      {
        title: 'Review Context',
        description: 'Before deciding, review the presented context and alternatives. VS methodology surfaces non-obvious options worth considering.',
        example: 'Read all T-Score options before selecting the most familiar one',
      },
      {
        title: 'Use Checkpoint History',
        description: 'Periodically review /checkpoint history to understand your decision patterns and ensure methodological consistency.',
        example: 'Check that paradigm choice aligns with earlier theory selection',
      },
      {
        title: 'Export for Papers',
        description: 'Use decision-log.yaml directly in your methodology section to demonstrate transparent decision-making process.',
        example: 'Copy checkpoint trail to "Methodological Decisions" appendix',
      },
    ],

    // Section 9: CTA
    ctaTitle: 'Master Checkpoint Workflows',
    ctaDescription: 'Explore checkpoint types and VS methodology integration',
    ctaButtons: {
      types: 'Checkpoint Types',
      checkpoints: 'Checkpoint Overview',
      vs: 'VS Methodology',
    },
  },
  ko: {
    back: '체크포인트로 돌아가기',
    title: '체크포인트 워크플로우',
    subtitle: '감지에서 결정 기록까지',
    philosophy: '"모든 체크포인트는 인간 의도와 AI 역량 간의 문서화된 대화입니다"',

    // Section 2: Workflow Stages
    stagesTitle: '워크플로우 단계',
    stagesDescription: '각 체크포인트는 적절한 인간 통제와 감사 추적을 보장하는 5단계 워크플로우를 따릅니다:',
    stages: [
      {
        stage: 1,
        name: '트리거 감지',
        icon: 'bell',
        color: '#ff3366',
        description: '에이전트가 체크포인트 조건 감지',
        details: [
          '대화 기록에서 맥락 자동 수집',
          '체크포인트 유형 식별 (REQUIRED/RECOMMENDED/OPTIONAL)',
          '제시할 관련 옵션 준비',
        ],
        automated: true,
      },
      {
        stage: 2,
        name: '맥락 제시',
        icon: 'eye',
        color: '#ff8844',
        description: '현재 상태 요약',
        details: [
          'T-Score와 함께 옵션을 명확하게 제시 (해당되는 경우)',
          'VS 방법론에 기반한 권장사항 강조',
          '관련 연구 맥락 제공',
        ],
        automated: true,
      },
      {
        stage: 3,
        name: '사용자 결정',
        icon: 'checkCircle',
        color: '#44ffaa',
        description: '선택 결정',
        details: [
          'REQUIRED: 진행 전 옵션 선택 필수',
          'RECOMMENDED: 기본값 수락 또는 대안 선택 가능',
          'OPTIONAL: 입력 없으면 기본값으로 자동 진행',
        ],
        automated: false,
      },
      {
        stage: 4,
        name: '결정 기록',
        icon: 'database',
        color: '#22ccff',
        description: '타임스탬프와 함께 선택 기록',
        details: [
          'decision-log.yaml에 결정 기록',
          '제공된 경우 근거 포착',
          '재현성을 위한 감사 추적 유지',
        ],
        automated: true,
      },
      {
        stage: 5,
        name: '워크플로우 계속',
        icon: 'play',
        color: '#9b59b6',
        description: '다음 단계 시작',
        details: [
          '결정으로 맥락 업데이트',
          '하위 에이전트에 선택 통지',
          '연구 워크플로우가 원활하게 계속됨',
        ],
        automated: true,
      },
    ],

    // Section 3: Workflow Diagram
    diagramTitle: '시각적 워크플로우',
    diagramDescription: '체크포인트가 연구 워크플로우에 어떻게 통합되는지 확인:',

    // Section 4: Checkpoint Commands
    commandsTitle: '체크포인트 명령어',
    commandsDescription: '수동 체크포인트 제어 및 검사:',
    commands: [
      {
        command: '/checkpoint',
        description: '수동 체크포인트 트리거',
        usage: '현재 상태를 일시정지하고 검토하고 싶을 때 사용',
        example: '/checkpoint',
      },
      {
        command: '/checkpoint status',
        description: '대기 중인 체크포인트 보기',
        usage: '결정을 기다리는 체크포인트가 있는지 확인',
        example: '/checkpoint status',
      },
      {
        command: '/checkpoint history',
        description: '체크포인트 로그 보기',
        usage: '현재 세션의 모든 과거 체크포인트 결정 검토',
        example: '/checkpoint history',
      },
      {
        command: '/checkpoint resume <id>',
        description: '특정 체크포인트에서 재개',
        usage: '이전 결정 지점으로 돌아가기',
        example: '/checkpoint resume CP_THEORY_SELECTION',
      },
    ],

    // Section 5: Integration with Memory System
    memoryTitle: '메모리 시스템 통합',
    memoryDescription: '체크포인트는 Diverga의 메모리 아키텍처와 깊이 통합되어 있습니다:',
    memoryFeatures: [
      {
        title: 'decision-log.yaml',
        description: '모든 체크포인트 결정이 구조화된 YAML 형식으로 저장',
        location: '.diverga/memory/decision-log.yaml',
        example: `- checkpoint_id: CP_THEORY_SELECTION
  timestamp: 2024-10-15T14:30:00Z
  level: REQUIRED
  decision: 자기결정이론 + TAM
  t_score: 0.6
  rationale: "하이브리드 접근법이 맥락에 더 적합"
  alternatives_considered:
    - TAM (T=0.92)
    - 인지부하이론 (T=0.4)`,
      },
      {
        title: '세션 맥락',
        description: '진행 중인 대화에서 활성 결정 참조',
        location: '메모리 내 맥락',
        example: `현재 활성 결정:
- CP_PARADIGM_SELECTION: 실용주의
- CP_THEORY_SELECTION: SDT + TAM
- CP_METHODOLOGY_APPROVAL: 혼합방법`,
      },
      {
        title: '감사 추적',
        description: '방법론 섹션에 사용 가능한 완전한 기록',
        location: '.diverga/audit/checkpoint-trail.md',
        example: `## 체크포인트 감사 추적
연구 질문: [귀하의 질문]

### CP_RESEARCH_DIRECTION
**결정:** 승인됨
**날짜:** 2024-10-15 10:00:00
**근거:** 범위가 적절함...`,
      },
    ],

    // Section 6: Decision States
    statesTitle: '결정 상태',
    statesDescription: '체크포인트는 다음 상태를 거칩니다:',
    states: [
      { state: 'PENDING', color: '#ffcc22', description: '체크포인트 트리거됨, 사용자 입력 대기 중' },
      { state: 'ACTIVE', color: '#ff8844', description: '사용자가 현재 옵션 검토 중' },
      { state: 'RESOLVED', color: '#44ffaa', description: '결정이 내려지고 기록됨' },
      { state: 'ARCHIVED', color: '#8888aa', description: '체크포인트 완료 및 히스토리에 기록됨' },
    ],

    // Section 7: Real-World Workflow Example
    exampleTitle: '실제 워크플로우 예시',
    exampleDescription: '감지부터 해결까지의 완전한 체크포인트 생애주기:',
    exampleSteps: [
      {
        step: 1,
        actor: '사용자',
        action: '"TAM을 사용하여 교육에서의 AI 채택을 연구하고 싶어요"',
        system: '맥락 감지됨: 이론적 프레임워크 언급',
      },
      {
        step: 2,
        actor: 'A2-이론적프레임워크설계자',
        action: 'CP_THEORY_SELECTION (REQUIRED) 트리거',
        system: 'VS 방법론 실행: TAM을 모달로 식별 (T=0.92)',
      },
      {
        step: 3,
        actor: '시스템',
        action: '대안과 함께 체크포인트 제시',
        system: 'TAM + 4개의 차별화된 대안 표시',
      },
      {
        step: 4,
        actor: '사용자',
        action: '옵션 검토, "T-Score 설명해줘" 질문',
        system: 'T-Score 설명 제공',
      },
      {
        step: 5,
        actor: '사용자',
        action: '선택: "자기결정이론 + TAM (T=0.6)"',
        system: 'decision-log.yaml에 결정 기록',
      },
      {
        step: 6,
        actor: '시스템',
        action: '맥락 업데이트, 워크플로우 계속',
        system: 'A3-변수설계자가 이론 선택 수신',
      },
    ],

    // Section 8: Best Practices
    practicesTitle: '모범 사례',
    practicesDescription: '체크포인트 효과 극대화:',
    practices: [
      {
        title: '근거 제공',
        description: '결정을 내릴 때 추론을 간략하게 설명하세요. 이것은 감사 추적을 풍부하게 하고 미래의 자신이 선택을 이해하는 데 도움이 됩니다.',
        example: '"승인 - 이 프레임워크가 내재적 동기 부여 측면을 더 잘 포착합니다"',
      },
      {
        title: '맥락 검토',
        description: '결정하기 전에 제시된 맥락과 대안을 검토하세요. VS 방법론은 고려할 가치가 있는 명백하지 않은 옵션을 제공합니다.',
        example: '가장 익숙한 것을 선택하기 전에 모든 T-Score 옵션 읽기',
      },
      {
        title: '체크포인트 히스토리 사용',
        description: '주기적으로 /checkpoint history를 검토하여 결정 패턴을 이해하고 방법론적 일관성을 보장하세요.',
        example: '패러다임 선택이 이전 이론 선택과 일치하는지 확인',
      },
      {
        title: '논문용 내보내기',
        description: 'decision-log.yaml을 방법론 섹션에서 직접 사용하여 투명한 의사결정 프로세스를 입증하세요.',
        example: '체크포인트 추적을 "방법론적 결정" 부록에 복사',
      },
    ],

    // Section 9: CTA
    ctaTitle: '체크포인트 워크플로우 마스터하기',
    ctaDescription: '체크포인트 유형 및 VS 방법론 통합 탐색',
    ctaButtons: {
      types: '체크포인트 유형',
      checkpoints: '체크포인트 개요',
      vs: 'VS 방법론',
    },
  },
};

// Icon mapping
const stageIcons: Record<string, React.ReactNode> = {
  bell: <Bell className="h-6 w-6" />,
  eye: <Eye className="h-6 w-6" />,
  checkCircle: <CheckCircle2 className="h-6 w-6" />,
  database: <Database className="h-6 w-6" />,
  play: <Play className="h-6 w-6" />,
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

export default function CheckpointWorkflowPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/checkpoints`}
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
              background: 'radial-gradient(ellipse at center top, rgba(34, 204, 255, 0.1) 0%, transparent 50%)',
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
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <GitBranch className="h-10 w-10" style={{ color: '#22ccff' }} />
            </div>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#22ccff' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 2: Workflow Stages */}
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
              <GitBranch className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.stagesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.stagesDescription}</p>

          {/* Stages with connecting lines */}
          <div className="space-y-6 relative">
            {/* Vertical connecting line */}
            <div
              className="absolute left-6 top-12 bottom-12 w-0.5"
              style={{
                background: 'linear-gradient(to bottom, #ff3366, #ff8844, #44ffaa, #22ccff, #9b59b6)',
                opacity: 0.3,
              }}
            />

            {t.stages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                {/* Stage number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="flex h-12 w-12 items-center justify-center font-mono font-bold text-lg border-2"
                    style={{
                      backgroundColor: stage.automated ? `${stage.color}20` : '#050508',
                      borderColor: stage.color,
                      color: stage.color,
                      boxShadow: `0 0 20px ${stage.color}40`,
                    }}
                  >
                    {stage.stage}
                  </div>
                </div>

                {/* Stage content */}
                <div
                  className="flex-1 p-6 border"
                  style={{
                    backgroundColor: stage.automated ? 'rgba(18, 18, 26, 1)' : 'rgba(68, 255, 170, 0.05)',
                    borderColor: stage.automated ? 'rgba(68, 68, 90, 0.3)' : 'rgba(68, 255, 170, 0.3)',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center border"
                        style={{
                          backgroundColor: `${stage.color}15`,
                          borderColor: `${stage.color}30`,
                          color: stage.color,
                        }}
                      >
                        {stageIcons[stage.icon]}
                      </div>
                      <div>
                        <h3 className="font-mono font-bold" style={{ color: stage.color }}>
                          {stage.name}
                        </h3>
                        <p className="text-sm text-stellar-dim">{stage.description}</p>
                      </div>
                    </div>
                    <span
                      className="inline-flex px-2 py-1 font-mono text-xs border"
                      style={{
                        color: stage.automated ? '#8888aa' : '#44ffaa',
                        borderColor: stage.automated ? 'rgba(136, 136, 170, 0.3)' : 'rgba(68, 255, 170, 0.3)',
                        backgroundColor: stage.automated ? 'rgba(136, 136, 170, 0.1)' : 'rgba(68, 255, 170, 0.1)',
                      }}
                    >
                      {stage.automated ? (locale === 'ko' ? '자동' : 'AUTO') : (locale === 'ko' ? '수동' : 'MANUAL')}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {stage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm text-stellar-bright">
                        <span style={{ color: stage.color }}>◆</span>
                        {detail}
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

        {/* Section 3: Checkpoint Commands */}
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
              <Terminal className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.commandsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.commandsDescription}</p>

          <div className="space-y-4">
            {t.commands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <code
                        className="font-mono text-lg font-bold"
                        style={{ color: '#44ffaa' }}
                      >
                        {cmd.command}
                      </code>
                      <p className="text-stellar-bright mt-1">{cmd.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stellar-dim mb-3">{cmd.usage}</p>
                  <div className="void-terminal overflow-hidden">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    </div>
                    <pre className="p-4 text-sm text-stellar-bright font-mono">
                      <span style={{ color: '#8888aa' }}>$</span> {cmd.example}
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Memory System Integration */}
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
              <Database className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.memoryTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.memoryDescription}</p>

          <div className="space-y-6">
            {t.memoryFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10"
              >
                <div className="bg-void-surface px-5 py-3 border-b border-stellar-faint/10">
                  <h3 className="void-heading-3 text-stellar-core">{feature.title}</h3>
                  <p className="text-sm text-stellar-dim mt-1">{feature.description}</p>
                  <code className="inline-flex px-2 py-1 mt-2 font-mono text-xs" style={{ color: '#44ffaa' }}>
                    {feature.location}
                  </code>
                </div>
                <div className="p-5">
                  <div className="void-terminal overflow-hidden">
                    <div className="void-terminal-header">
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                      <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                      <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                        {feature.title}
                      </span>
                    </div>
                    <pre className="p-4 text-xs text-stellar-bright font-mono overflow-x-auto whitespace-pre">
                      {feature.example}
                    </pre>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: Decision States */}
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
              <Clock className="h-5 w-5" style={{ color: '#ff8844' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.statesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.statesDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border"
                style={{
                  borderColor: `${state.color}30`,
                  backgroundColor: `${state.color}05`,
                }}
              >
                <div
                  className="inline-flex px-3 py-1.5 font-mono text-xs uppercase tracking-wider mb-3 border"
                  style={{
                    color: state.color,
                    borderColor: `${state.color}30`,
                    backgroundColor: `${state.color}15`,
                  }}
                >
                  {state.state}
                </div>
                <p className="text-sm text-stellar-bright">{state.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Real-World Example */}
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
              <Zap className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.exampleTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.exampleDescription}</p>

          <div className="space-y-4">
            {t.exampleSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                    style={{
                      backgroundColor: 'rgba(34, 204, 255, 0.1)',
                      color: '#22ccff',
                      border: '1px solid rgba(34, 204, 255, 0.3)',
                    }}
                  >
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span
                      className="inline-flex px-2 py-0.5 font-mono text-xs mr-2"
                      style={{
                        color: '#44ffaa',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                        border: '1px solid rgba(68, 255, 170, 0.3)',
                      }}
                    >
                      {step.actor}
                    </span>
                    <span className="text-stellar-bright">{step.action}</span>
                  </div>
                  <p className="text-sm text-stellar-dim pl-4 border-l-2 border-stellar-faint/20">
                    {step.system}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 7: Best Practices */}
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
              <CheckCircle2 className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.practicesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.practicesDescription}</p>

          <div className="space-y-4">
            {t.practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-6"
              >
                <h3 className="void-heading-3 mb-2" style={{ color: '#44ffaa' }}>
                  {practice.title}
                </h3>
                <p className="text-stellar-bright mb-3">{practice.description}</p>
                <div
                  className="p-3 border-l-4"
                  style={{
                    backgroundColor: 'rgba(68, 255, 170, 0.05)',
                    borderColor: '#44ffaa',
                  }}
                >
                  <p className="text-sm text-stellar-dim italic">
                    {locale === 'ko' ? '예시: ' : 'Example: '}{practice.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 8: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 204, 255, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/checkpoints/types`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.types}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.checkpoints}
              </Link>
              <Link
                href={`/${locale}/docs/vs-methodology`}
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.vs}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
