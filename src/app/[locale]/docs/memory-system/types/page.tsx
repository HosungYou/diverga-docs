"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Database,
  Clock,
  FileText,
  Lightbulb,
  Settings,
  Brain,
  FolderTree,
  Search,
  ArrowRight,
  CheckCircle2,
  Zap,
  Package,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Memory Types',
    subtitle: '5 Types of Context-Aware Memory',
    philosophy: '"Context that persists, decisions that compound, insights that accumulate"',

    // Section 2: 3-Layer Context System
    layersTitle: '3-Layer Context System',
    layersDescription: 'Memory is automatically loaded and injected at three levels to ensure agents always have the context they need.',
    layers: [
      {
        layer: 'Layer 1: Keywords',
        icon: 'search',
        description: 'Auto-load context with triggers like "my research", "연구 진행"',
        example: 'User says "my research" → Project Context automatically loaded',
        color: 'teal',
      },
      {
        layer: 'Layer 2: Task Tool',
        icon: 'zap',
        description: 'Auto-injects context to agents via Task tool delegation',
        example: 'Agent receives Project Context in system prompt automatically',
        color: 'cyan',
      },
      {
        layer: 'Layer 3: CLI',
        icon: 'package',
        description: 'Explicit memory commands via CLI',
        example: '/diverga:memory context → View current memory state',
        color: 'blue',
      },
    ],

    // Section 3: Memory Types Grid
    typesTitle: 'Five Memory Types',
    typesDescription: 'Each memory type serves a specific purpose in maintaining research continuity and context.',
    types: [
      {
        name: 'Project Context',
        icon: 'brain',
        description: 'Research question, paradigm, methodology, and theoretical framework',
        color: '#00cec9',
        storage: '.research/project-state.yaml',
        autoLoaded: true,
        examples: [
          'Research question and objectives',
          'Selected paradigm (positivist, interpretivist, etc.)',
          'Chosen theoretical framework with T-Score',
          'Research design approach',
        ],
      },
      {
        name: 'Session Memory',
        icon: 'clock',
        description: 'Current session state, active tasks, and in-progress work',
        color: '#22ccff',
        storage: '.research/sessions/session-{id}.yaml',
        autoLoaded: true,
        examples: [
          'Active agent tasks and status',
          'Current analysis stage',
          'In-progress calculations',
          'Session-specific variables',
        ],
      },
      {
        name: 'Decision Log',
        icon: 'file-text',
        description: 'All human checkpoint decisions with timestamps and rationale',
        color: '#9b59b6',
        storage: '.research/decision-log.yaml',
        autoLoaded: true,
        examples: [
          'Checkpoint approvals/rejections',
          'Selected alternatives with T-Scores',
          'Decision timestamps',
          'Rationale and justifications',
        ],
      },
      {
        name: 'Research Notes',
        icon: 'lightbulb',
        description: 'Accumulated insights, findings, and observations',
        color: '#ffcc22',
        storage: '.research/notes/',
        autoLoaded: false,
        examples: [
          'Key findings from literature',
          'Pattern observations',
          'Methodological insights',
          'Future research directions',
        ],
      },
      {
        name: 'Tool Preferences',
        icon: 'settings',
        description: 'Visualization styles, output formats, and tool configurations',
        color: '#44ffaa',
        storage: '.research/preferences.yaml',
        autoLoaded: true,
        examples: [
          'Preferred visualization style',
          'Output format (APA, Chicago, etc.)',
          'Language preferences (EN/KO)',
          'Agent behavior settings',
        ],
      },
    ],

    // Section 4: Project Structure
    structureTitle: 'Project Structure',
    structureDescription: 'Memory is organized in a .research/ directory within your project:',
    structureNote: 'All memory files are version-controlled and can be committed to git for team collaboration.',

    // Section 5: Context Keywords
    keywordsTitle: 'Context Keywords (Auto-Trigger)',
    keywordsDescription: 'When you use these keywords, relevant memory is automatically loaded:',
    keywordGroups: [
      {
        category: 'Project Reference',
        keywords: ['my research', 'this study', 'our project', '내 연구', '이 연구', '연구 진행'],
        loads: ['Project Context', 'Decision Log'],
      },
      {
        category: 'Session Continuity',
        keywords: ['continue', 'resume', 'where were we', '계속', '이어서', '어디까지'],
        loads: ['Session Memory', 'Active Tasks'],
      },
      {
        category: 'Decision Reference',
        keywords: ['we decided', 'I chose', 'previously selected', '결정했던', '선택했던'],
        loads: ['Decision Log', 'Checkpoint History'],
      },
      {
        category: 'Insight Recall',
        keywords: ['findings', 'insights', 'observations', '발견', '인사이트', '관찰'],
        loads: ['Research Notes'],
      },
    ],

    // Section 6: Memory Benefits
    benefitsTitle: 'Why Memory Matters',
    benefitsDescription: 'Context-aware memory provides critical advantages for research workflows:',
    benefits: [
      {
        icon: 'check',
        title: 'No Repetition',
        description: 'Never re-explain your research context—it\'s always available to agents',
      },
      {
        icon: 'check',
        title: 'Consistent Decisions',
        description: 'Past decisions inform future choices, ensuring methodological consistency',
      },
      {
        icon: 'check',
        title: 'Audit Trail',
        description: 'Complete decision history for your methodology section',
      },
      {
        icon: 'check',
        title: 'Team Collaboration',
        description: 'Version-controlled memory enables team members to stay synchronized',
      },
      {
        icon: 'check',
        title: 'Session Resilience',
        description: 'Resume work seamlessly after interruptions or context window limits',
      },
    ],

    // Section 7: Memory Commands
    commandsTitle: 'Memory Commands',
    commandsDescription: 'Explicit CLI commands to interact with memory:',
    commands: [
      { command: '/diverga:memory context', description: 'View current loaded memory state' },
      { command: '/diverga:memory refresh', description: 'Reload memory from files' },
      { command: '/diverga:memory clear', description: 'Clear session memory (keeps project memory)' },
      { command: '/diverga:memory export', description: 'Export memory as markdown report' },
    ],

    // Section 8: CTA
    ctaTitle: 'Ready to Experience Context-Aware Memory?',
    ctaDescription: 'Start your research with memory that persists across sessions and agents.',
    ctaButtons: {
      checkpoints: 'Explore Checkpoints',
      agents: 'Browse Agents',
      start: 'Get Started',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '메모리 타입',
    subtitle: '5가지 컨텍스트 인식 메모리',
    philosophy: '"지속되는 컨텍스트, 축적되는 결정, 누적되는 인사이트"',

    // Section 2: 3-Layer Context System
    layersTitle: '3계층 컨텍스트 시스템',
    layersDescription: '메모리는 세 가지 수준에서 자동으로 로드되고 주입되어 에이전트가 항상 필요한 컨텍스트를 갖도록 보장합니다.',
    layers: [
      {
        layer: '레이어 1: 키워드',
        icon: 'search',
        description: '"내 연구", "연구 진행"과 같은 트리거로 컨텍스트 자동 로드',
        example: '사용자가 "내 연구"라고 하면 → 프로젝트 컨텍스트 자동 로드',
        color: 'teal',
      },
      {
        layer: '레이어 2: Task 도구',
        icon: 'zap',
        description: 'Task 도구 위임을 통해 에이전트에게 컨텍스트 자동 주입',
        example: '에이전트가 시스템 프롬프트에서 프로젝트 컨텍스트를 자동으로 받음',
        color: 'cyan',
      },
      {
        layer: '레이어 3: CLI',
        icon: 'package',
        description: 'CLI를 통한 명시적 메모리 명령',
        example: '/diverga:memory context → 현재 메모리 상태 보기',
        color: 'blue',
      },
    ],

    // Section 3: Memory Types Grid
    typesTitle: '5가지 메모리 타입',
    typesDescription: '각 메모리 타입은 연구 연속성과 컨텍스트 유지를 위한 특정 목적을 제공합니다.',
    types: [
      {
        name: '프로젝트 컨텍스트',
        icon: 'brain',
        description: '연구 질문, 패러다임, 방법론, 이론적 프레임워크',
        color: '#00cec9',
        storage: '.research/project-state.yaml',
        autoLoaded: true,
        examples: [
          '연구 질문 및 목표',
          '선택된 패러다임 (실증주의, 해석주의 등)',
          'T-Score와 함께 선택된 이론적 프레임워크',
          '연구 설계 접근법',
        ],
      },
      {
        name: '세션 메모리',
        icon: 'clock',
        description: '현재 세션 상태, 활성 작업, 진행 중인 작업',
        color: '#22ccff',
        storage: '.research/sessions/session-{id}.yaml',
        autoLoaded: true,
        examples: [
          '활성 에이전트 작업 및 상태',
          '현재 분석 단계',
          '진행 중인 계산',
          '세션별 변수',
        ],
      },
      {
        name: '결정 로그',
        icon: 'file-text',
        description: '타임스탬프 및 근거가 포함된 모든 인간 체크포인트 결정',
        color: '#9b59b6',
        storage: '.research/decision-log.yaml',
        autoLoaded: true,
        examples: [
          '체크포인트 승인/거부',
          'T-Score와 함께 선택된 대안',
          '결정 타임스탬프',
          '근거 및 정당화',
        ],
      },
      {
        name: '연구 노트',
        icon: 'lightbulb',
        description: '축적된 인사이트, 발견, 관찰',
        color: '#ffcc22',
        storage: '.research/notes/',
        autoLoaded: false,
        examples: [
          '문헌의 주요 발견',
          '패턴 관찰',
          '방법론적 인사이트',
          '향후 연구 방향',
        ],
      },
      {
        name: '도구 선호도',
        icon: 'settings',
        description: '시각화 스타일, 출력 형식, 도구 구성',
        color: '#44ffaa',
        storage: '.research/preferences.yaml',
        autoLoaded: true,
        examples: [
          '선호하는 시각화 스타일',
          '출력 형식 (APA, Chicago 등)',
          '언어 선호도 (EN/KO)',
          '에이전트 동작 설정',
        ],
      },
    ],

    // Section 4: Project Structure
    structureTitle: '프로젝트 구조',
    structureDescription: '메모리는 프로젝트 내 .research/ 디렉토리에 구성됩니다:',
    structureNote: '모든 메모리 파일은 버전 관리되며 팀 협업을 위해 git에 커밋할 수 있습니다.',

    // Section 5: Context Keywords
    keywordsTitle: '컨텍스트 키워드 (자동 트리거)',
    keywordsDescription: '이러한 키워드를 사용하면 관련 메모리가 자동으로 로드됩니다:',
    keywordGroups: [
      {
        category: '프로젝트 참조',
        keywords: ['my research', 'this study', 'our project', '내 연구', '이 연구', '연구 진행'],
        loads: ['프로젝트 컨텍스트', '결정 로그'],
      },
      {
        category: '세션 연속성',
        keywords: ['continue', 'resume', 'where were we', '계속', '이어서', '어디까지'],
        loads: ['세션 메모리', '활성 작업'],
      },
      {
        category: '결정 참조',
        keywords: ['we decided', 'I chose', 'previously selected', '결정했던', '선택했던'],
        loads: ['결정 로그', '체크포인트 기록'],
      },
      {
        category: '인사이트 회상',
        keywords: ['findings', 'insights', 'observations', '발견', '인사이트', '관찰'],
        loads: ['연구 노트'],
      },
    ],

    // Section 6: Memory Benefits
    benefitsTitle: '메모리가 중요한 이유',
    benefitsDescription: '컨텍스트 인식 메모리는 연구 워크플로우에 중요한 이점을 제공합니다:',
    benefits: [
      {
        icon: 'check',
        title: '반복 없음',
        description: '연구 컨텍스트를 다시 설명할 필요 없음—에이전트에게 항상 제공됩니다',
      },
      {
        icon: 'check',
        title: '일관된 결정',
        description: '과거 결정이 미래 선택을 알려주어 방법론적 일관성 보장',
      },
      {
        icon: 'check',
        title: '감사 추적',
        description: '방법론 섹션을 위한 완전한 결정 기록',
      },
      {
        icon: 'check',
        title: '팀 협업',
        description: '버전 관리 메모리로 팀원이 동기화 유지',
      },
      {
        icon: 'check',
        title: '세션 복원력',
        description: '중단 또는 컨텍스트 창 제한 후 원활하게 작업 재개',
      },
    ],

    // Section 7: Memory Commands
    commandsTitle: '메모리 명령',
    commandsDescription: '메모리와 상호작용하는 명시적 CLI 명령:',
    commands: [
      { command: '/diverga:memory context', description: '현재 로드된 메모리 상태 보기' },
      { command: '/diverga:memory refresh', description: '파일에서 메모리 다시 로드' },
      { command: '/diverga:memory clear', description: '세션 메모리 지우기 (프로젝트 메모리 유지)' },
      { command: '/diverga:memory export', description: '메모리를 마크다운 보고서로 내보내기' },
    ],

    // Section 8: CTA
    ctaTitle: '컨텍스트 인식 메모리를 체험할 준비가 되셨나요?',
    ctaDescription: '세션과 에이전트 간에 지속되는 메모리로 연구를 시작하세요.',
    ctaButtons: {
      checkpoints: '체크포인트 탐색',
      agents: '에이전트 보기',
      start: '시작하기',
    },
  },
};

// Memory type icons
const typeIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="h-6 w-6" />,
  clock: <Clock className="h-6 w-6" />,
  'file-text': <FileText className="h-6 w-6" />,
  lightbulb: <Lightbulb className="h-6 w-6" />,
  settings: <Settings className="h-6 w-6" />,
};

const layerIcons: Record<string, React.ReactNode> = {
  search: <Search className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  package: <Package className="h-5 w-5" />,
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

export default function MemoryTypesPage() {
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
              background: 'radial-gradient(ellipse at center top, rgba(0, 206, 201, 0.15) 0%, transparent 50%)',
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6 relative z-10"
          >
            <div
              className="flex h-20 w-20 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 206, 201, 0.15)' }}
            >
              <Database className="h-10 w-10" style={{ color: '#00cec9' }} />
            </div>
          </motion.div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#00cec9' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 2: 3-Layer Context System */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 206, 201, 0.15)' }}
            >
              <FolderTree className="h-5 w-5" style={{ color: '#00cec9' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.layersTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.layersDescription}</p>

          <div className="space-y-4">
            {t.layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                    style={{
                      backgroundColor: '#00cec9',
                      color: '#050508',
                      boxShadow: '0 0 20px rgba(0, 206, 201, 0.3)',
                    }}
                  >
                    {index + 1}
                  </div>
                </div>
                <div
                  className="flex-1 p-4 border"
                  style={{
                    backgroundColor: 'rgba(0, 206, 201, 0.05)',
                    borderColor: 'rgba(0, 206, 201, 0.2)',
                  }}
                >
                  <h3 className="font-mono font-bold mb-2" style={{ color: '#00cec9' }}>
                    {layer.layer}
                  </h3>
                  <p className="text-sm text-stellar-bright mb-2">{layer.description}</p>
                  <div className="flex items-start gap-2 mt-3 pt-3 border-t border-stellar-faint/10">
                    <span className="text-xs font-mono text-stellar-dim">Example:</span>
                    <code className="text-xs font-mono" style={{ color: '#22ccff' }}>
                      {layer.example}
                    </code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 3: Memory Types Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(0, 206, 201, 0.15)' }}
            >
              <Database className="h-5 w-5" style={{ color: '#00cec9' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.typesTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.typesDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.types.map((type, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: `inset 0 1px 0 0 rgba(240, 240, 245, 0.05)`,
                }}
              >
                <div
                  className="px-5 py-4 border-b border-stellar-faint/10 flex items-center justify-between"
                  style={{
                    background: `linear-gradient(135deg, ${type.color}15 0%, transparent 100%)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
                      style={{ backgroundColor: `${type.color}20`, color: type.color }}
                    >
                      {typeIcons[type.icon]}
                    </div>
                    <div>
                      <h3 className="void-heading-3 text-stellar-core">{type.name}</h3>
                      <p className="text-sm text-stellar-dim">{type.description}</p>
                    </div>
                  </div>
                  {type.autoLoaded && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: '#44ffaa',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
                        borderColor: 'rgba(68, 255, 170, 0.3)',
                      }}
                    >
                      <Zap className="h-3 w-3" />
                      Auto-loaded
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="mb-4">
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '저장 위치:' : 'Storage:'}
                    </p>
                    <code
                      className="text-sm font-mono px-3 py-1 border"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        color: type.color,
                        borderColor: 'rgba(68, 68, 90, 0.3)',
                      }}
                    >
                      {type.storage}
                    </code>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase tracking-wider mb-2">
                      {locale === 'ko' ? '예시:' : 'Examples:'}
                    </p>
                    <ul className="space-y-1.5">
                      {type.examples.map((example, exIdx) => (
                        <li key={exIdx} className="flex items-start gap-2 text-sm text-stellar-bright">
                          <span style={{ color: type.color }}>◆</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 4: Project Structure */}
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
              <FolderTree className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.structureTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.structureDescription}</p>

          <div className="void-terminal overflow-hidden mb-4">
            <div className="void-terminal-header">
              <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                .research/ Directory Structure
              </span>
            </div>
            <div className="p-6 font-mono text-sm">
              <pre className="text-stellar-bright leading-relaxed">
                <code>
{`.research/
├── baselines/
│   ├── baseline-001.yaml
│   └── baseline-002.yaml
├── changes/
│   ├── change-001.yaml
│   └── change-002.yaml
├── sessions/
│   ├── session-20250205-143022.yaml
│   └── session-20250205-153145.yaml
├── notes/
│   ├── literature-notes.md
│   └── methodological-insights.md
├── project-state.yaml
├── decision-log.yaml
├── preferences.yaml
└── checkpoints.yaml`}
                </code>
              </pre>
            </div>
          </div>

          <div
            className="p-4 border"
            style={{
              backgroundColor: 'rgba(34, 204, 255, 0.05)',
              borderColor: 'rgba(34, 204, 255, 0.2)',
            }}
          >
            <p className="text-sm" style={{ color: '#22ccff' }}>{t.structureNote}</p>
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: Context Keywords */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 204, 34, 0.15)' }}
            >
              <Search className="h-5 w-5" style={{ color: '#ffcc22' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.keywordsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.keywordsDescription}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.keywordGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 p-5"
              >
                <h3 className="font-mono font-bold text-sm mb-3" style={{ color: '#ffcc22' }}>
                  {group.category}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase mb-1.5">Keywords:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.keywords.map((keyword, kIdx) => (
                        <span
                          key={kIdx}
                          className="inline-flex px-2 py-0.5 font-mono text-xs border"
                          style={{
                            backgroundColor: 'rgba(255, 204, 34, 0.1)',
                            borderColor: 'rgba(255, 204, 34, 0.3)',
                            color: '#ffcc22',
                          }}
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-stellar-dim uppercase mb-1.5">Loads:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.loads.map((load, lIdx) => (
                        <span
                          key={lIdx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 font-mono text-xs border"
                          style={{
                            backgroundColor: 'rgba(0, 206, 201, 0.1)',
                            borderColor: 'rgba(0, 206, 201, 0.3)',
                            color: '#00cec9',
                          }}
                        >
                          <Zap className="h-3 w-3" />
                          {load}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Memory Benefits */}
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
            <h2 className="void-heading-2 text-stellar-core">{t.benefitsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.benefitsDescription}</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {t.benefits.map((benefit, index) => (
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
                  <h3 className="font-mono font-bold text-sm mb-1 text-stellar-core">{benefit.title}</h3>
                  <p className="text-sm text-stellar-dim">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 7: Memory Commands */}
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
              <Package className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.commandsTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.commandsDescription}</p>

          <div className="space-y-3">
            {t.commands.map((cmd, index) => (
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
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                    borderColor: 'rgba(155, 89, 182, 0.3)',
                    color: '#9b59b6',
                  }}
                >
                  {cmd.command}
                </code>
                <p className="text-sm text-stellar-dim">{cmd.description}</p>
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
              background: 'linear-gradient(135deg, rgba(0, 206, 201, 0.1) 0%, rgba(34, 204, 255, 0.1) 100%)',
              borderColor: 'rgba(0, 206, 201, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.checkpoints}
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
