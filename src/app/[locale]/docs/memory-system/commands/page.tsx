"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Terminal,
  Database,
  Search,
  Save,
  Trash2,
  FileText,
  Download,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Zap,
  Package,
  Clock,
  Brain,
} from 'lucide-react';
import { MemoryCommandPlayground } from '@/components/features/memory/MemoryCommandPlayground';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Memory Commands',
    subtitle: 'CLI commands for managing Diverga\'s memory system',
    badge: 'CLI Reference',
    philosophy: '"Control your context with precision commands"',

    // Section 1: Quick Reference
    quickRefTitle: 'Quick Reference',
    quickRefDescription: 'Essential commands for everyday memory management:',
    interactiveDemo: 'Interactive Demo',
    interactiveDemoDescription: 'Try memory commands in a live terminal simulator:',

    // Section 2: Command Categories
    categoriesTitle: 'Command Categories',
    categoriesDescription: 'Memory commands are organized into five categories:',
    categories: [
      {
        name: 'Session Commands',
        icon: 'clock',
        description: 'Manage current session state',
        color: '#22ccff',
        commands: ['/diverga:memory status', '/diverga:memory context'],
      },
      {
        name: 'Storage Commands',
        icon: 'save',
        description: 'Save and persist memory',
        color: '#44ffaa',
        commands: ['/diverga:memory decision add', '/note <text>', '/remember <text>'],
      },
      {
        name: 'Retrieval Commands',
        icon: 'search',
        description: 'Search and recall memory',
        color: '#ffcc22',
        commands: ['/diverga:memory decision list', '/diverga:memory context'],
      },
      {
        name: 'Maintenance Commands',
        icon: 'refresh',
        description: 'Clean and refresh memory',
        color: '#ff6b6b',
        commands: ['/diverga:memory clear', '/diverga:memory refresh'],
      },
      {
        name: 'Archive Commands',
        icon: 'package',
        description: 'Archive completed stages',
        color: '#9b59b6',
        commands: ['/diverga:memory archive [STAGE]', '/diverga:memory export'],
      },
    ],

    // Section 3: Detailed Commands
    detailedTitle: 'Command Details',
    detailedDescription: 'Comprehensive reference for all memory commands:',
    commands: [
      {
        command: '/diverga:memory status',
        category: 'Session',
        description: 'Display current project status and active memory',
        usage: '/diverga:memory status',
        output: 'Project name, current stage, checkpoint progress, memory health',
        example: 'Shows: Project "AI Education" | Stage: Literature Review | Checkpoint 3/7 | Memory: 12 contexts loaded',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory context',
        category: 'Session',
        description: 'Display full loaded memory context',
        usage: '/diverga:memory context [--detailed]',
        output: 'All loaded memory with timestamps and sources',
        example: 'Use --detailed flag for verbose output with decision rationale',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory init',
        category: 'Session',
        description: 'Initialize new project memory',
        usage: '/diverga:memory init',
        output: 'Creates .research/ directory structure',
        example: 'Run once at project start to set up memory system',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory decision list',
        category: 'Retrieval',
        description: 'List all checkpoint decisions',
        usage: '/diverga:memory decision list [--stage STAGE]',
        output: 'Chronological list of decisions with timestamps',
        example: 'Filter by stage: /diverga:memory decision list --stage A1',
        color: '#ffcc22',
      },
      {
        command: '/diverga:memory decision add',
        category: 'Storage',
        description: 'Manually add a decision to the log',
        usage: '/diverga:memory decision add',
        output: 'Interactive prompt to record decision',
        example: 'Use when making important methodological choices outside checkpoints',
        color: '#44ffaa',
      },
      {
        command: '/note <text>',
        category: 'Storage',
        description: 'Save quick note to Working Memory (auto-pruned 7 days)',
        usage: '/note "Found interesting paper on X"',
        output: 'Timestamped note saved to session memory',
        example: '/note "Need to explore Y theory further"',
        color: '#44ffaa',
      },
      {
        command: '/remember <text>',
        category: 'Storage',
        description: 'Save to Persistent Memory (survives compaction)',
        usage: '/remember "Critical insight about methodology"',
        output: 'Permanent note saved to project memory',
        example: '/remember "Sample size calculation: G*Power with f² = 0.15"',
        color: '#44ffaa',
      },
      {
        command: '/diverga:memory archive [STAGE]',
        category: 'Archive',
        description: 'Archive completed stage to baseline',
        usage: '/diverga:memory archive A1',
        output: 'Stage moved to .research/baselines/',
        example: 'Locks completed work and creates immutable record',
        color: '#9b59b6',
      },
      {
        command: '/diverga:memory clear',
        category: 'Maintenance',
        description: 'Clear session memory (keeps project memory)',
        usage: '/diverga:memory clear [--session|--notes]',
        output: 'Confirmation of cleared memory',
        example: 'Use --session to only clear current session, --notes for research notes',
        color: '#ff6b6b',
      },
      {
        command: '/diverga:memory refresh',
        category: 'Maintenance',
        description: 'Reload memory from files',
        usage: '/diverga:memory refresh',
        output: 'Memory refreshed from disk',
        example: 'Use after manual edits to .research/ files',
        color: '#ff6b6b',
      },
      {
        command: '/diverga:memory export',
        category: 'Archive',
        description: 'Export memory as markdown report',
        usage: '/diverga:memory export [--format markdown|json]',
        output: 'Formatted memory report',
        example: 'Creates audit-ready documentation for methodology section',
        color: '#9b59b6',
      },
      {
        command: '/diverga:memory migrate',
        category: 'Maintenance',
        description: 'Migrate from v6.8 to v7.0 memory structure',
        usage: '/diverga:memory migrate',
        output: 'Migration status and backup location',
        example: 'Only needed once when upgrading from v6.8',
        color: '#ff6b6b',
      },
    ],

    // Section 4: Usage Examples
    examplesTitle: 'Usage Examples',
    examplesDescription: 'Common workflows using memory commands:',
    examples: [
      {
        scenario: 'Starting a new research session',
        steps: [
          '/diverga:memory status → Check current project state',
          '/diverga:memory context → Review previous decisions',
          'Continue work with full context loaded',
        ],
        outcome: 'Seamless continuation without re-explaining',
      },
      {
        scenario: 'Recording important insights',
        steps: [
          '/note "Unexpected correlation between X and Y" → Quick note',
          '/remember "Key methodological decision: Use SEM instead of regression" → Permanent record',
          '/diverga:memory decision add → Log formal decision with rationale',
        ],
        outcome: 'Multi-layered memory capture for different purposes',
      },
      {
        scenario: 'Completing a research stage',
        steps: [
          '/diverga:memory decision list --stage A1 → Review stage decisions',
          '/diverga:memory archive A1 → Lock completed work',
          '/diverga:memory export --format markdown → Generate documentation',
        ],
        outcome: 'Stage archived with audit trail for manuscript',
      },
      {
        scenario: 'Troubleshooting memory issues',
        steps: [
          '/diverga:memory status → Check memory health',
          '/diverga:memory refresh → Reload from disk',
          '/diverga:memory clear --session → Clear corrupted session data',
        ],
        outcome: 'Memory system restored to clean state',
      },
    ],

    // Section 5: Memory Flags
    flagsTitle: 'Command Flags',
    flagsDescription: 'Optional flags to modify command behavior:',
    flags: [
      { flag: '--detailed', commands: ['context'], description: 'Show verbose output with full decision rationale' },
      { flag: '--stage <ID>', commands: ['decision list'], description: 'Filter results by agent stage (e.g., A1, B2)' },
      { flag: '--format <type>', commands: ['export'], description: 'Output format: markdown, json, yaml' },
      { flag: '--session', commands: ['clear'], description: 'Only clear session memory, keep project memory' },
      { flag: '--notes', commands: ['clear'], description: 'Only clear research notes, keep decisions' },
      { flag: '--force', commands: ['clear', 'archive'], description: 'Skip confirmation prompts' },
    ],

    // Section 6: Best Practices
    practicesTitle: 'Best Practices',
    practicesDescription: 'Recommendations for effective memory management:',
    practices: [
      {
        title: 'Use /note for ephemeral insights',
        description: 'Quick observations that may not be relevant long-term (auto-pruned after 7 days)',
        icon: 'clock',
      },
      {
        title: 'Use /remember for critical decisions',
        description: 'Methodological choices, key findings, and important constraints that must persist',
        icon: 'brain',
      },
      {
        title: 'Archive stages when complete',
        description: 'Create immutable records of completed work with /diverga:memory archive',
        icon: 'package',
      },
      {
        title: 'Export before major changes',
        description: 'Generate markdown reports as backup before restructuring research',
        icon: 'download',
      },
      {
        title: 'Check status regularly',
        description: 'Use /diverga:memory status to monitor memory health and loaded contexts',
        icon: 'check',
      },
    ],

    // Section 7: Memory Storage Locations
    storageTitle: 'Memory Storage',
    storageDescription: 'Where different memory types are stored:',
    storageLocations: [
      { path: '.research/project-state.yaml', content: 'Project context, research question, paradigm' },
      { path: '.research/decision-log.yaml', content: 'All checkpoint decisions with timestamps' },
      { path: '.research/sessions/', content: 'Session-specific memory (working notes, /note commands)' },
      { path: '.research/baselines/', content: 'Archived completed stages (immutable)' },
      { path: '.research/preferences.yaml', content: 'Tool preferences, output formats' },
      { path: '.research/checkpoints.yaml', content: 'Checkpoint states and progress' },
    ],

    // Section 8: CTA
    ctaTitle: 'Master Memory Management',
    ctaDescription: 'Explore advanced memory features and integration patterns.',
    ctaButtons: {
      types: 'Memory Types',
      api: 'Memory API',
      checkpoints: 'Checkpoints',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '메모리 명령어',
    subtitle: 'Diverga 메모리 시스템 관리를 위한 CLI 명령어',
    badge: 'CLI 레퍼런스',
    philosophy: '"정확한 명령으로 컨텍스트를 제어하세요"',

    // Section 1: Quick Reference
    quickRefTitle: '빠른 참조',
    quickRefDescription: '일상적인 메모리 관리를 위한 필수 명령어:',
    interactiveDemo: '인터랙티브 데모',
    interactiveDemoDescription: '라이브 터미널 시뮬레이터에서 메모리 명령어를 체험해보세요:',

    // Section 2: Command Categories
    categoriesTitle: '명령어 카테고리',
    categoriesDescription: '메모리 명령어는 5가지 카테고리로 구성됩니다:',
    categories: [
      {
        name: '세션 명령어',
        icon: 'clock',
        description: '현재 세션 상태 관리',
        color: '#22ccff',
        commands: ['/diverga:memory status', '/diverga:memory context'],
      },
      {
        name: '저장 명령어',
        icon: 'save',
        description: '메모리 저장 및 유지',
        color: '#44ffaa',
        commands: ['/diverga:memory decision add', '/note <텍스트>', '/remember <텍스트>'],
      },
      {
        name: '검색 명령어',
        icon: 'search',
        description: '메모리 검색 및 회상',
        color: '#ffcc22',
        commands: ['/diverga:memory decision list', '/diverga:memory context'],
      },
      {
        name: '유지보수 명령어',
        icon: 'refresh',
        description: '메모리 정리 및 새로고침',
        color: '#ff6b6b',
        commands: ['/diverga:memory clear', '/diverga:memory refresh'],
      },
      {
        name: '아카이브 명령어',
        icon: 'package',
        description: '완료된 단계 아카이브',
        color: '#9b59b6',
        commands: ['/diverga:memory archive [STAGE]', '/diverga:memory export'],
      },
    ],

    // Section 3: Detailed Commands
    detailedTitle: '명령어 상세',
    detailedDescription: '모든 메모리 명령어에 대한 종합 레퍼런스:',
    commands: [
      {
        command: '/diverga:memory status',
        category: '세션',
        description: '현재 프로젝트 상태 및 활성 메모리 표시',
        usage: '/diverga:memory status',
        output: '프로젝트 이름, 현재 단계, 체크포인트 진행률, 메모리 상태',
        example: '표시: 프로젝트 "AI 교육" | 단계: 문헌 검토 | 체크포인트 3/7 | 메모리: 12개 컨텍스트 로드됨',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory context',
        category: '세션',
        description: '로드된 전체 메모리 컨텍스트 표시',
        usage: '/diverga:memory context [--detailed]',
        output: '타임스탬프 및 출처가 포함된 모든 로드된 메모리',
        example: '결정 근거가 포함된 자세한 출력을 위해 --detailed 플래그 사용',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory init',
        category: '세션',
        description: '새 프로젝트 메모리 초기화',
        usage: '/diverga:memory init',
        output: '.research/ 디렉토리 구조 생성',
        example: '메모리 시스템 설정을 위해 프로젝트 시작 시 한 번 실행',
        color: '#22ccff',
      },
      {
        command: '/diverga:memory decision list',
        category: '검색',
        description: '모든 체크포인트 결정 나열',
        usage: '/diverga:memory decision list [--stage STAGE]',
        output: '타임스탬프가 포함된 결정의 시간순 목록',
        example: '단계별 필터링: /diverga:memory decision list --stage A1',
        color: '#ffcc22',
      },
      {
        command: '/diverga:memory decision add',
        category: '저장',
        description: '로그에 결정을 수동으로 추가',
        usage: '/diverga:memory decision add',
        output: '결정 기록을 위한 대화형 프롬프트',
        example: '체크포인트 외부에서 중요한 방법론적 선택을 할 때 사용',
        color: '#44ffaa',
      },
      {
        command: '/note <텍스트>',
        category: '저장',
        description: '작업 메모리에 빠른 노트 저장 (7일 후 자동 삭제)',
        usage: '/note "X에 대한 흥미로운 논문 발견"',
        output: '타임스탬프가 포함된 노트가 세션 메모리에 저장됨',
        example: '/note "Y 이론을 더 탐구할 필요 있음"',
        color: '#44ffaa',
      },
      {
        command: '/remember <텍스트>',
        category: '저장',
        description: '영구 메모리에 저장 (압축 후에도 유지)',
        usage: '/remember "방법론에 대한 중요한 인사이트"',
        output: '영구 노트가 프로젝트 메모리에 저장됨',
        example: '/remember "표본 크기 계산: G*Power with f² = 0.15"',
        color: '#44ffaa',
      },
      {
        command: '/diverga:memory archive [STAGE]',
        category: '아카이브',
        description: '완료된 단계를 베이스라인에 아카이브',
        usage: '/diverga:memory archive A1',
        output: '단계가 .research/baselines/로 이동됨',
        example: '완료된 작업을 잠그고 불변 기록 생성',
        color: '#9b59b6',
      },
      {
        command: '/diverga:memory clear',
        category: '유지보수',
        description: '세션 메모리 지우기 (프로젝트 메모리 유지)',
        usage: '/diverga:memory clear [--session|--notes]',
        output: '지워진 메모리 확인',
        example: '현재 세션만 지우려면 --session, 연구 노트는 --notes 사용',
        color: '#ff6b6b',
      },
      {
        command: '/diverga:memory refresh',
        category: '유지보수',
        description: '파일에서 메모리 다시 로드',
        usage: '/diverga:memory refresh',
        output: '디스크에서 메모리 새로고침됨',
        example: '.research/ 파일을 수동으로 편집한 후 사용',
        color: '#ff6b6b',
      },
      {
        command: '/diverga:memory export',
        category: '아카이브',
        description: '메모리를 마크다운 보고서로 내보내기',
        usage: '/diverga:memory export [--format markdown|json]',
        output: '형식화된 메모리 보고서',
        example: '방법론 섹션을 위한 감사 준비 문서 생성',
        color: '#9b59b6',
      },
      {
        command: '/diverga:memory migrate',
        category: '유지보수',
        description: 'v6.8에서 v7.0 메모리 구조로 마이그레이션',
        usage: '/diverga:memory migrate',
        output: '마이그레이션 상태 및 백업 위치',
        example: 'v6.8에서 업그레이드할 때 한 번만 필요',
        color: '#ff6b6b',
      },
    ],

    // Section 4: Usage Examples
    examplesTitle: '사용 예시',
    examplesDescription: '메모리 명령어를 사용한 일반적인 워크플로우:',
    examples: [
      {
        scenario: '새 연구 세션 시작',
        steps: [
          '/diverga:memory status → 현재 프로젝트 상태 확인',
          '/diverga:memory context → 이전 결정 검토',
          '전체 컨텍스트가 로드된 상태로 작업 계속',
        ],
        outcome: '재설명 없이 원활한 연속',
      },
      {
        scenario: '중요한 인사이트 기록',
        steps: [
          '/note "X와 Y 사이의 예상치 못한 상관관계" → 빠른 노트',
          '/remember "주요 방법론적 결정: 회귀 대신 SEM 사용" → 영구 기록',
          '/diverga:memory decision add → 근거와 함께 공식 결정 기록',
        ],
        outcome: '다른 목적을 위한 다층 메모리 캡처',
      },
      {
        scenario: '연구 단계 완료',
        steps: [
          '/diverga:memory decision list --stage A1 → 단계 결정 검토',
          '/diverga:memory archive A1 → 완료된 작업 잠금',
          '/diverga:memory export --format markdown → 문서 생성',
        ],
        outcome: '원고를 위한 감사 추적과 함께 단계 아카이브됨',
      },
      {
        scenario: '메모리 문제 해결',
        steps: [
          '/diverga:memory status → 메모리 상태 확인',
          '/diverga:memory refresh → 디스크에서 다시 로드',
          '/diverga:memory clear --session → 손상된 세션 데이터 지우기',
        ],
        outcome: '메모리 시스템이 깨끗한 상태로 복원됨',
      },
    ],

    // Section 5: Memory Flags
    flagsTitle: '명령어 플래그',
    flagsDescription: '명령어 동작을 수정하는 선택적 플래그:',
    flags: [
      { flag: '--detailed', commands: ['context'], description: '전체 결정 근거가 포함된 자세한 출력 표시' },
      { flag: '--stage <ID>', commands: ['decision list'], description: '에이전트 단계별 결과 필터링 (예: A1, B2)' },
      { flag: '--format <type>', commands: ['export'], description: '출력 형식: markdown, json, yaml' },
      { flag: '--session', commands: ['clear'], description: '세션 메모리만 지우고 프로젝트 메모리 유지' },
      { flag: '--notes', commands: ['clear'], description: '연구 노트만 지우고 결정 유지' },
      { flag: '--force', commands: ['clear', 'archive'], description: '확인 프롬프트 건너뛰기' },
    ],

    // Section 6: Best Practices
    practicesTitle: '모범 사례',
    practicesDescription: '효과적인 메모리 관리를 위한 권장사항:',
    practices: [
      {
        title: '일시적 인사이트에는 /note 사용',
        description: '장기적으로 관련이 없을 수 있는 빠른 관찰 (7일 후 자동 삭제)',
        icon: 'clock',
      },
      {
        title: '중요한 결정에는 /remember 사용',
        description: '방법론적 선택, 주요 발견, 지속되어야 하는 중요한 제약',
        icon: 'brain',
      },
      {
        title: '완료 시 단계 아카이브',
        description: '/diverga:memory archive로 완료된 작업의 불변 기록 생성',
        icon: 'package',
      },
      {
        title: '주요 변경 전 내보내기',
        description: '연구 재구성 전 백업으로 마크다운 보고서 생성',
        icon: 'download',
      },
      {
        title: '정기적으로 상태 확인',
        description: '/diverga:memory status를 사용하여 메모리 상태 및 로드된 컨텍스트 모니터링',
        icon: 'check',
      },
    ],

    // Section 7: Memory Storage Locations
    storageTitle: '메모리 저장소',
    storageDescription: '다른 메모리 타입이 저장되는 위치:',
    storageLocations: [
      { path: '.research/project-state.yaml', content: '프로젝트 컨텍스트, 연구 질문, 패러다임' },
      { path: '.research/decision-log.yaml', content: '타임스탬프가 포함된 모든 체크포인트 결정' },
      { path: '.research/sessions/', content: '세션별 메모리 (작업 노트, /note 명령)' },
      { path: '.research/baselines/', content: '아카이브된 완료 단계 (불변)' },
      { path: '.research/preferences.yaml', content: '도구 선호도, 출력 형식' },
      { path: '.research/checkpoints.yaml', content: '체크포인트 상태 및 진행률' },
    ],

    // Section 8: CTA
    ctaTitle: '메모리 관리 마스터하기',
    ctaDescription: '고급 메모리 기능 및 통합 패턴을 탐색하세요.',
    ctaButtons: {
      types: '메모리 타입',
      api: '메모리 API',
      checkpoints: '체크포인트',
    },
  },
};

// Icon mapping
const categoryIcons: Record<string, React.ReactNode> = {
  clock: <Clock className="h-5 w-5" />,
  save: <Save className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  refresh: <RefreshCw className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
};

const practiceIcons: Record<string, React.ReactNode> = {
  clock: <Clock className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
  download: <Download className="h-5 w-5" />,
  check: <CheckCircle2 className="h-5 w-5" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function MemoryCommandsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/memory-system`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Section 1: Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          {/* Glow background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(155, 89, 182, 0.15) 0%, transparent 50%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6 relative z-10"
          >
            <div
              className="flex h-20 w-20 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(155, 89, 182, 0.15)',
                borderColor: 'rgba(155, 89, 182, 0.3)',
              }}
            >
              <Terminal className="h-10 w-10" style={{ color: '#9b59b6' }} />
            </div>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="void-heading-1 text-stellar-core">{t.title}</h1>
            <span
              className="px-3 py-1 text-xs font-mono uppercase border"
              style={{
                backgroundColor: 'rgba(155, 89, 182, 0.15)',
                borderColor: 'rgba(155, 89, 182, 0.3)',
                color: '#9b59b6',
              }}
            >
              {t.badge}
            </span>
          </div>
          <p className="void-heading-3 mb-4" style={{ color: '#9b59b6' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 1.5: Interactive Demo */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(68, 255, 170, 0.15)',
                borderColor: 'rgba(68, 255, 170, 0.3)',
              }}
            >
              <Terminal className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.interactiveDemo}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.interactiveDemoDescription}</p>

          <MemoryCommandPlayground locale={locale} />
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 2: Command Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(155, 89, 182, 0.15)',
                borderColor: 'rgba(155, 89, 182, 0.3)',
              }}
            >
              <Database className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.categoriesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.categoriesDescription}</p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-5 hover:border-stellar-faint/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center border"
                    style={{
                      backgroundColor: `${category.color}15`,
                      borderColor: `${category.color}30`,
                      color: category.color,
                    }}
                  >
                    {categoryIcons[category.icon]}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-sm mb-1" style={{ color: category.color }}>
                      {category.name}
                    </h3>
                    <p className="text-xs text-stellar-dim">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  {category.commands.map((cmd, cmdIdx) => (
                    <code
                      key={cmdIdx}
                      className="block font-mono text-xs px-2 py-1 border"
                      style={{
                        backgroundColor: `${category.color}10`,
                        borderColor: `${category.color}20`,
                        color: category.color,
                      }}
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

        {/* Section 3: Detailed Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(34, 204, 255, 0.15)',
                borderColor: 'rgba(34, 204, 255, 0.3)',
              }}
            >
              <FileText className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.detailedTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.detailedDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.commands.map((cmd, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div
                  className="px-5 py-4 border-b border-stellar-faint/10 flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${cmd.color}15 0%, transparent 100%)`,
                  }}
                >
                  <code
                    className="font-mono font-bold text-lg"
                    style={{ color: cmd.color }}
                  >
                    {cmd.command}
                  </code>
                  <span
                    className="px-2 py-1 text-xs font-mono uppercase border"
                    style={{
                      backgroundColor: `${cmd.color}15`,
                      borderColor: `${cmd.color}30`,
                      color: cmd.color,
                    }}
                  >
                    {cmd.category}
                  </span>
                </div>
                <div className="p-5 space-y-4">
                  <p className="text-stellar-bright">{cmd.description}</p>

                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '사용법:' : 'Usage:'}
                    </p>
                    <code
                      className="block font-mono text-sm px-3 py-2 border"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderColor: 'rgba(68, 68, 90, 0.3)',
                        color: cmd.color,
                      }}
                    >
                      {cmd.usage}
                    </code>
                  </div>

                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '출력:' : 'Output:'}
                    </p>
                    <p className="text-sm text-stellar-dim">{cmd.output}</p>
                  </div>

                  <div
                    className="p-3 border-l-2"
                    style={{
                      backgroundColor: `${cmd.color}05`,
                      borderColor: cmd.color,
                    }}
                  >
                    <p className="text-xs font-mono text-stellar-faint uppercase tracking-wider mb-1">
                      {locale === 'ko' ? '💡 예시' : '💡 Example'}
                    </p>
                    <p className="text-sm text-stellar-bright">{cmd.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Usage Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(68, 255, 170, 0.15)',
                borderColor: 'rgba(68, 255, 170, 0.3)',
              }}
            >
              <Zap className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.examplesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.examplesDescription}</p>

          <div className="space-y-6">
            {t.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-6"
              >
                <h3 className="font-mono font-bold mb-4" style={{ color: '#44ffaa' }}>
                  {example.scenario}
                </h3>
                <div className="space-y-2 mb-4">
                  {example.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="flex items-start gap-3">
                      <div
                        className="flex h-6 w-6 shrink-0 items-center justify-center font-mono text-xs font-bold mt-0.5"
                        style={{
                          backgroundColor: 'rgba(68, 255, 170, 0.2)',
                          color: '#44ffaa',
                        }}
                      >
                        {stepIdx + 1}
                      </div>
                      <p className="text-sm text-stellar-bright">{step}</p>
                    </div>
                  ))}
                </div>
                <div
                  className="p-3 border"
                  style={{
                    backgroundColor: 'rgba(68, 255, 170, 0.05)',
                    borderColor: 'rgba(68, 255, 170, 0.2)',
                  }}
                >
                  <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-1">
                    {locale === 'ko' ? '결과:' : 'Outcome:'}
                  </p>
                  <p className="text-sm" style={{ color: '#44ffaa' }}>{example.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: Command Flags */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(255, 204, 34, 0.15)',
                borderColor: 'rgba(255, 204, 34, 0.3)',
              }}
            >
              <Terminal className="h-5 w-5" style={{ color: '#ffcc22' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.flagsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.flagsDescription}</p>

          <div className="space-y-3">
            {t.flags.map((flag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <code
                  className="font-mono text-sm px-3 py-1.5 border flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(255, 204, 34, 0.1)',
                    borderColor: 'rgba(255, 204, 34, 0.3)',
                    color: '#ffcc22',
                  }}
                >
                  {flag.flag}
                </code>
                <div className="flex-1">
                  <p className="text-sm text-stellar-bright mb-1">{flag.description}</p>
                  <p className="text-xs text-stellar-faint">
                    {locale === 'ko' ? '적용 대상:' : 'Applies to:'} {flag.commands.join(', ')}
                  </p>
                </div>
              </motion.div>
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
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(68, 255, 170, 0.15)',
                borderColor: 'rgba(68, 255, 170, 0.3)',
              }}
            >
              <CheckCircle2 className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.practicesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.practicesDescription}</p>

          <div className="space-y-4">
            {t.practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    backgroundColor: 'rgba(68, 255, 170, 0.15)',
                    borderColor: 'rgba(68, 255, 170, 0.3)',
                    color: '#44ffaa',
                  }}
                >
                  {practiceIcons[practice.icon]}
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm mb-1 text-stellar-core">{practice.title}</h3>
                  <p className="text-sm text-stellar-dim">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 7: Storage Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border"
              style={{
                backgroundColor: 'rgba(34, 204, 255, 0.15)',
                borderColor: 'rgba(34, 204, 255, 0.3)',
              }}
            >
              <Database className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.storageTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.storageDescription}</p>

          <div className="space-y-3">
            {t.storageLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col gap-2 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <code
                  className="font-mono text-sm"
                  style={{ color: '#22ccff' }}
                >
                  {location.path}
                </code>
                <p className="text-sm text-stellar-dim pl-4 border-l-2 border-stellar-faint/20">
                  {location.content}
                </p>
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
              background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.1) 0%, rgba(34, 204, 255, 0.1) 100%)',
              borderColor: 'rgba(155, 89, 182, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/memory-system/types`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.types}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/memory-system/api`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.api}
              </Link>
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.checkpoints}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
