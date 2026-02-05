'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Settings,
  FileJson,
  FileText,
  Database,
  CheckCircle2,
  AlertCircle,
  Clock,
  Wrench,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Reference',
    title: 'Configuration Reference',
    subtitle: 'Complete reference for all configuration files, schemas, and parameters',
    description: 'Diverga stores configuration in project worktree directories (.omc/) to maintain project-specific settings and avoid global pollution. This reference covers all configuration schemas, file structures, and MCP tool parameters.',

    // Sections
    sections: [
      {
        id: 'project-memory',
        icon: 'database',
        color: '#9b59b6',
        title: 'Project Memory (project-memory.json)',
        description: 'Persistent project information stored at {worktree}/.omc/project-memory.json',
        schema: {
          techStack: 'string - Technology stack description (e.g., "Next.js 14, TypeScript, Tailwind")',
          build: 'string - Build command (e.g., "pnpm build")',
          conventions: 'string - Code conventions and style guide',
          structure: 'string - Project structure description',
          notes: 'array - Categorized notes with {category: string, content: string, timestamp: string}',
          directives: 'array - Persistent user instructions with {directive: string, context?: string, priority: "high" | "normal", timestamp: string}',
        },
        example: {
          techStack: 'Next.js 14, TypeScript, Tailwind CSS, Framer Motion',
          build: 'pnpm build',
          conventions: 'ESLint, Prettier, strict TypeScript',
          structure: 'App Router, src/ directory, component-based',
          notes: [
            {
              category: 'build',
              content: 'Use pnpm for all package management',
              timestamp: '2024-01-15T10:30:00Z',
            },
          ],
          directives: [
            {
              directive: 'Always use TypeScript strict mode',
              priority: 'high',
              timestamp: '2024-01-10T09:00:00Z',
            },
          ],
        },
        tools: [
          {
            name: 'project_memory_read',
            params: [
              { name: 'section', type: '"all" | "techStack" | "build" | "conventions" | "structure" | "notes" | "directives"', required: false, default: '"all"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_write',
            params: [
              { name: 'memory', type: 'object', required: true, description: 'Memory object with fields to write' },
              { name: 'merge', type: 'boolean', required: false, default: 'true', description: 'Merge with existing or replace entirely' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_add_note',
            params: [
              { name: 'category', type: 'string', required: true, description: 'Note category (e.g., "build", "test", "deploy")' },
              { name: 'content', type: 'string', required: true, description: 'Note content' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_add_directive',
            params: [
              { name: 'directive', type: 'string', required: true, description: 'Persistent user directive' },
              { name: 'context', type: 'string', required: false, description: 'Optional context for the directive' },
              { name: 'priority', type: '"high" | "normal"', required: false, default: '"normal"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'notepad',
        icon: 'fileText',
        color: '#45b7d1',
        title: 'Notepad (notepad.md)',
        description: 'Session memory stored at {worktree}/.omc/notepad.md',
        structure: `# PRIORITY CONTEXT
[Always loaded at session start, max 500 chars]
Critical project information that survives compaction

# WORKING MEMORY
[Timestamped entries, auto-pruned after 7 days]
- [2024-01-15 10:30] Recent decision made
- [2024-01-14 14:20] Bug fix note

# MANUAL
[Never auto-pruned, survives all compaction]
Important permanent notes`,
        sections: [
          {
            name: 'Priority Context',
            maxSize: '500 chars',
            persistence: 'Always loaded',
            pruning: 'Never pruned',
            usage: 'Critical project info, current sprint goals',
          },
          {
            name: 'Working Memory',
            maxSize: 'Unlimited',
            persistence: '7 days',
            pruning: 'Auto-pruned after 7 days',
            usage: 'Recent decisions, temporary notes',
          },
          {
            name: 'Manual',
            maxSize: 'Unlimited',
            persistence: 'Permanent',
            pruning: 'Never pruned',
            usage: 'Important permanent notes, architectural decisions',
          },
        ],
        tools: [
          {
            name: 'notepad_read',
            params: [
              { name: 'section', type: '"all" | "priority" | "working" | "manual"', required: false, default: '"all"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_priority',
            params: [
              { name: 'content', type: 'string', required: true, description: 'Content to write (max 500 chars recommended)' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_working',
            params: [
              { name: 'content', type: 'string', required: true, description: 'Content to add as timestamped entry' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_manual',
            params: [
              { name: 'content', type: 'string', required: true, description: 'Content to add as permanent entry' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_prune',
            params: [
              { name: 'daysOld', type: 'number', required: false, default: '7', description: 'Prune entries older than N days' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_stats',
            params: [
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'state-files',
        icon: 'fileJson',
        color: '#44ffaa',
        title: 'State Files (state/*.json)',
        description: 'Mode-specific state files stored at {worktree}/.omc/state/',
        modes: [
          {
            mode: 'autopilot',
            file: 'autopilot-state.json',
            description: 'Full autonomous execution from idea to working code',
            fields: {
              active: 'boolean - Is autopilot currently running',
              task_description: 'string - Original user request',
              started_at: 'string - ISO timestamp',
              iteration: 'number - Current iteration',
              max_iterations: 'number - Maximum iterations allowed',
              current_phase: '"planning" | "execution" | "verification" | "completion"',
              error: 'string | null - Error message if failed',
              completed_at: 'string | null - ISO timestamp when completed',
            },
          },
          {
            mode: 'ralph',
            file: 'ralph-state.json',
            description: 'Self-referential loop until task completion',
            fields: {
              active: 'boolean - Is ralph currently running',
              task_description: 'string - Original user request',
              started_at: 'string - ISO timestamp',
              iteration: 'number - Current iteration',
              max_iterations: 'number - Maximum iterations allowed',
              error: 'string | null - Error message if failed',
            },
          },
          {
            mode: 'ultrawork',
            file: 'ultrawork-state.json',
            description: 'Maximum parallelism with parallel agent orchestration',
            fields: {
              active: 'boolean - Is ultrawork currently running',
              task_description: 'string - Original user request',
              started_at: 'string - ISO timestamp',
              parallel_tasks: 'array - List of parallel task IDs',
            },
          },
          {
            mode: 'ultrapilot',
            file: 'ultrapilot-state.json',
            description: 'Parallel autopilot with file ownership partitioning',
            fields: {
              active: 'boolean - Is ultrapilot currently running',
              task_description: 'string - Original user request',
              started_at: 'string - ISO timestamp',
              file_assignments: 'object - File-to-agent mapping',
              parallel_agents: 'array - List of parallel agent IDs',
            },
          },
          {
            mode: 'ecomode',
            file: 'ecomode-state.json',
            description: 'Token-efficient execution using Haiku and Sonnet',
            fields: {
              active: 'boolean - Is ecomode currently running',
              model_routing: 'object - Model selection strategy',
              token_budget: 'number - Remaining token budget',
            },
          },
        ],
        tools: [
          {
            name: 'state_read',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_write',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'active', type: 'boolean', required: false },
              { name: 'task_description', type: 'string', required: false },
              { name: 'started_at', type: 'string', required: false, description: 'ISO timestamp' },
              { name: 'completed_at', type: 'string', required: false, description: 'ISO timestamp' },
              { name: 'iteration', type: 'number', required: false },
              { name: 'max_iterations', type: 'number', required: false },
              { name: 'current_phase', type: 'string', required: false },
              { name: 'error', type: 'string', required: false },
              { name: 'state', type: 'object', required: false, description: 'Additional custom fields' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_clear',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_list_active',
            params: [
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_get_status',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: false, description: 'Specific mode or all modes' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'checkpoint-config',
        icon: 'checkCircle2',
        color: '#ff6b6b',
        title: 'Checkpoint Configuration',
        description: 'Human-in-the-loop decision points configuration',
        schema: {
          checkpoints: {
            CP_RESEARCH_DIRECTION: {
              severity: '"REQUIRED" | "RECOMMENDED" | "OPTIONAL"',
              timeout: 'number | null - Seconds to wait, null = wait indefinitely',
              message: 'string - Message shown to user',
              default_action: '"proceed" | "block" - Action if timeout expires',
            },
          },
        },
        severityLevels: [
          {
            level: 'REQUIRED',
            color: '#ff6b6b',
            description: 'Must be approved before proceeding',
            behavior: 'Block execution until user responds',
            timeout: 'null (wait indefinitely)',
          },
          {
            level: 'RECOMMENDED',
            color: '#f39c12',
            description: 'Should be reviewed but can timeout',
            behavior: 'Ask for approval, proceed after timeout',
            timeout: '300 seconds (5 minutes)',
          },
          {
            level: 'OPTIONAL',
            color: '#45b7d1',
            description: 'Advisory only, no blocking',
            behavior: 'Show notification, continue immediately',
            timeout: '0 seconds',
          },
        ],
        example: `checkpoints:
  CP_RESEARCH_DIRECTION:
    severity: REQUIRED
    timeout: null
    message: "Research question finalized. Approve to continue?"

  CP_METHODOLOGY_APPROVAL:
    severity: RECOMMENDED
    timeout: 300
    message: "Methodology selected. Review recommended."
    default_action: proceed

  CP_VISUALIZATION_PREFERENCE:
    severity: OPTIONAL
    timeout: 0
    message: "Visual format available for review."`,
      },
    ],

    // Best practices
    bestPracticesTitle: 'Configuration Best Practices',
    bestPractices: [
      {
        title: 'Use Project Memory for Permanent Decisions',
        description: 'Store technology choices, architecture decisions, and team conventions in project-memory.json. These persist across sessions and survive context compaction.',
        icon: 'database',
      },
      {
        title: 'Notepad Priority Context for Current Sprint',
        description: 'Keep Priority Context (max 500 chars) updated with current sprint goals, active features, and critical blockers. This loads at every session start.',
        icon: 'fileText',
      },
      {
        title: 'Working Memory for Temporary Notes',
        description: 'Use Working Memory for recent decisions, bug fixes, and temporary notes. These auto-prune after 7 days to prevent clutter.',
        icon: 'clock',
      },
      {
        title: 'Manual Section for Architectural Decisions',
        description: 'Document major architectural decisions, breaking changes, and migration plans in the Manual section. These never auto-prune.',
        icon: 'wrench',
      },
      {
        title: 'State Files are Automatic',
        description: 'Don\'t manually edit state files unless debugging. Skills and execution modes manage these automatically.',
        icon: 'alertCircle',
      },
    ],

    // File locations
    locationsTitle: 'File Locations',
    locationsDescription: 'All configuration stored in project worktree under .omc/ directory',
    locations: [
      { path: '{worktree}/.omc/project-memory.json', description: 'Persistent project information' },
      { path: '{worktree}/.omc/notepad.md', description: 'Session memory with three sections' },
      { path: '{worktree}/.omc/state/*.json', description: 'Mode-specific state files' },
      { path: '{worktree}/.omc/plans/*.md', description: 'Planning documents (ralplan, plan)' },
      { path: '{worktree}/.omc/research/*.md', description: 'Research outputs (research skill)' },
      { path: '{worktree}/.omc/logs/*.log', description: 'Audit logs and execution traces' },
    ],

    // CTA
    ctaTitle: 'Master Your Configuration',
    ctaDescription: 'Understand all configuration files to optimize your Diverga workflow.',
    ctaButton: 'Explore MCP Tools Reference',
  },
  ko: {
    back: '레퍼런스로 돌아가기',
    title: '설정 레퍼런스',
    subtitle: '모든 설정 파일, 스키마 및 매개변수에 대한 완전한 레퍼런스',
    description: 'Diverga는 프로젝트별 설정을 유지하고 전역 오염을 피하기 위해 프로젝트 작업트리 디렉토리(.omc/)에 설정을 저장합니다. 이 레퍼런스는 모든 설정 스키마, 파일 구조 및 MCP 도구 매개변수를 다룹니다.',

    sections: [
      {
        id: 'project-memory',
        icon: 'database',
        color: '#9b59b6',
        title: '프로젝트 메모리 (project-memory.json)',
        description: '{worktree}/.omc/project-memory.json에 저장된 영구 프로젝트 정보',
        schema: {
          techStack: 'string - 기술 스택 설명 (예: "Next.js 14, TypeScript, Tailwind")',
          build: 'string - 빌드 명령 (예: "pnpm build")',
          conventions: 'string - 코드 규칙 및 스타일 가이드',
          structure: 'string - 프로젝트 구조 설명',
          notes: 'array - {category: string, content: string, timestamp: string}를 가진 분류된 노트',
          directives: 'array - {directive: string, context?: string, priority: "high" | "normal", timestamp: string}를 가진 영구 사용자 지시사항',
        },
        example: `{
  "techStack": "Next.js 14, TypeScript, Tailwind CSS, Framer Motion",
  "build": "pnpm build",
  "conventions": "ESLint, Prettier, 엄격한 TypeScript",
  "structure": "App Router, src/ 디렉토리, 컴포넌트 기반",
  "notes": [
    {
      "category": "build",
      "content": "모든 패키지 관리에 pnpm 사용",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "directives": [
    {
      "directive": "항상 TypeScript strict 모드 사용",
      "priority": "high",
      "timestamp": "2024-01-10T09:00:00Z"
    }
  ]
}`,
        tools: [
          {
            name: 'project_memory_read',
            params: [
              { name: 'section', type: '"all" | "techStack" | "build" | "conventions" | "structure" | "notes" | "directives"', required: false, default: '"all"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_write',
            params: [
              { name: 'memory', type: 'object', required: true, description: '작성할 필드가 포함된 메모리 객체' },
              { name: 'merge', type: 'boolean', required: false, default: 'true', description: '기존 항목과 병합하거나 완전히 교체' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_add_note',
            params: [
              { name: 'category', type: 'string', required: true, description: '노트 카테고리 (예: "build", "test", "deploy")' },
              { name: 'content', type: 'string', required: true, description: '노트 내용' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'project_memory_add_directive',
            params: [
              { name: 'directive', type: 'string', required: true, description: '영구 사용자 지시사항' },
              { name: 'context', type: 'string', required: false, description: '지시사항에 대한 선택적 컨텍스트' },
              { name: 'priority', type: '"high" | "normal"', required: false, default: '"normal"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'notepad',
        icon: 'fileText',
        color: '#45b7d1',
        title: '노트패드 (notepad.md)',
        description: '{worktree}/.omc/notepad.md에 저장된 세션 메모리',
        structure: `# PRIORITY CONTEXT
[세션 시작 시 항상 로드됨, 최대 500자]
압축에서 살아남는 중요한 프로젝트 정보

# WORKING MEMORY
[타임스탬프 항목, 7일 후 자동 정리]
- [2024-01-15 10:30] 최근 결정 사항
- [2024-01-14 14:20] 버그 수정 노트

# MANUAL
[절대 자동 정리되지 않음, 모든 압축에서 살아남음]
중요한 영구 노트`,
        sections: [
          {
            name: '우선순위 컨텍스트',
            maxSize: '500자',
            persistence: '항상 로드됨',
            pruning: '절대 정리되지 않음',
            usage: '중요한 프로젝트 정보, 현재 스프린트 목표',
          },
          {
            name: '작업 메모리',
            maxSize: '무제한',
            persistence: '7일',
            pruning: '7일 후 자동 정리',
            usage: '최근 결정 사항, 임시 노트',
          },
          {
            name: '수동',
            maxSize: '무제한',
            persistence: '영구',
            pruning: '절대 정리되지 않음',
            usage: '중요한 영구 노트, 아키텍처 결정',
          },
        ],
        tools: [
          {
            name: 'notepad_read',
            params: [
              { name: 'section', type: '"all" | "priority" | "working" | "manual"', required: false, default: '"all"' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_priority',
            params: [
              { name: 'content', type: 'string', required: true, description: '작성할 내용 (최대 500자 권장)' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_working',
            params: [
              { name: 'content', type: 'string', required: true, description: '타임스탬프 항목으로 추가할 내용' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_write_manual',
            params: [
              { name: 'content', type: 'string', required: true, description: '영구 항목으로 추가할 내용' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_prune',
            params: [
              { name: 'daysOld', type: 'number', required: false, default: '7', description: 'N일보다 오래된 항목 정리' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'notepad_stats',
            params: [
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'state-files',
        icon: 'fileJson',
        color: '#44ffaa',
        title: '상태 파일 (state/*.json)',
        description: '{worktree}/.omc/state/에 저장된 모드별 상태 파일',
        modes: [
          {
            mode: 'autopilot',
            file: 'autopilot-state.json',
            description: '아이디어에서 작동하는 코드까지 완전 자율 실행',
            fields: {
              active: 'boolean - 오토파일럿이 현재 실행 중인지',
              task_description: 'string - 원래 사용자 요청',
              started_at: 'string - ISO 타임스탬프',
              iteration: 'number - 현재 반복',
              max_iterations: 'number - 허용되는 최대 반복',
              current_phase: '"planning" | "execution" | "verification" | "completion"',
              error: 'string | null - 실패 시 오류 메시지',
              completed_at: 'string | null - 완료 시 ISO 타임스탬프',
            },
          },
          {
            mode: 'ralph',
            file: 'ralph-state.json',
            description: '작업 완료까지 자기 참조 루프',
            fields: {
              active: 'boolean - ralph가 현재 실행 중인지',
              task_description: 'string - 원래 사용자 요청',
              started_at: 'string - ISO 타임스탬프',
              iteration: 'number - 현재 반복',
              max_iterations: 'number - 허용되는 최대 반복',
              error: 'string | null - 실패 시 오류 메시지',
            },
          },
          {
            mode: 'ultrawork',
            file: 'ultrawork-state.json',
            description: '병렬 에이전트 오케스트레이션을 통한 최대 병렬성',
            fields: {
              active: 'boolean - ultrawork가 현재 실행 중인지',
              task_description: 'string - 원래 사용자 요청',
              started_at: 'string - ISO 타임스탬프',
              parallel_tasks: 'array - 병렬 작업 ID 목록',
            },
          },
          {
            mode: 'ultrapilot',
            file: 'ultrapilot-state.json',
            description: '파일 소유권 분할을 통한 병렬 오토파일럿',
            fields: {
              active: 'boolean - ultrapilot이 현재 실행 중인지',
              task_description: 'string - 원래 사용자 요청',
              started_at: 'string - ISO 타임스탬프',
              file_assignments: 'object - 파일-에이전트 매핑',
              parallel_agents: 'array - 병렬 에이전트 ID 목록',
            },
          },
          {
            mode: 'ecomode',
            file: 'ecomode-state.json',
            description: 'Haiku와 Sonnet을 사용한 토큰 효율적 실행',
            fields: {
              active: 'boolean - ecomode가 현재 실행 중인지',
              model_routing: 'object - 모델 선택 전략',
              token_budget: 'number - 남은 토큰 예산',
            },
          },
        ],
        tools: [
          {
            name: 'state_read',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_write',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'active', type: 'boolean', required: false },
              { name: 'task_description', type: 'string', required: false },
              { name: 'started_at', type: 'string', required: false, description: 'ISO 타임스탬프' },
              { name: 'completed_at', type: 'string', required: false, description: 'ISO 타임스탬프' },
              { name: 'iteration', type: 'number', required: false },
              { name: 'max_iterations', type: 'number', required: false },
              { name: 'current_phase', type: 'string', required: false },
              { name: 'error', type: 'string', required: false },
              { name: 'state', type: 'object', required: false, description: '추가 사용자 정의 필드' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_clear',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: true },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_list_active',
            params: [
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
          {
            name: 'state_get_status',
            params: [
              { name: 'mode', type: '"autopilot" | "ultrapilot" | "swarm" | "pipeline" | "ralph" | "ultrawork" | "ultraqa" | "ecomode" | "ralplan"', required: false, description: '특정 모드 또는 모든 모드' },
              { name: 'workingDirectory', type: 'string', required: false, default: 'process.cwd()' },
            ],
          },
        ],
      },
      {
        id: 'checkpoint-config',
        icon: 'checkCircle2',
        color: '#ff6b6b',
        title: '체크포인트 설정',
        description: '휴먼-인-더-루프 의사결정 지점 설정',
        schema: {
          checkpoints: {
            CP_RESEARCH_DIRECTION: {
              severity: '"REQUIRED" | "RECOMMENDED" | "OPTIONAL"',
              timeout: 'number | null - 대기 시간(초), null = 무한 대기',
              message: 'string - 사용자에게 표시되는 메시지',
              default_action: '"proceed" | "block" - 타임아웃 만료 시 작업',
            },
          },
        },
        severityLevels: [
          {
            level: 'REQUIRED',
            color: '#ff6b6b',
            description: '진행하기 전에 승인되어야 함',
            behavior: '사용자가 응답할 때까지 실행 차단',
            timeout: 'null (무한 대기)',
          },
          {
            level: 'RECOMMENDED',
            color: '#f39c12',
            description: '검토해야 하지만 타임아웃 가능',
            behavior: '승인 요청, 타임아웃 후 진행',
            timeout: '300초 (5분)',
          },
          {
            level: 'OPTIONAL',
            color: '#45b7d1',
            description: '자문만, 차단 없음',
            behavior: '알림 표시, 즉시 계속',
            timeout: '0초',
          },
        ],
        example: `checkpoints:
  CP_RESEARCH_DIRECTION:
    severity: REQUIRED
    timeout: null
    message: "연구 질문이 확정되었습니다. 계속하려면 승인하세요?"

  CP_METHODOLOGY_APPROVAL:
    severity: RECOMMENDED
    timeout: 300
    message: "방법론이 선택되었습니다. 검토를 권장합니다."
    default_action: proceed

  CP_VISUALIZATION_PREFERENCE:
    severity: OPTIONAL
    timeout: 0
    message: "검토 가능한 시각적 형식이 있습니다."`,
      },
    ],

    bestPracticesTitle: '설정 모범 사례',
    bestPractices: [
      {
        title: '영구 결정에는 프로젝트 메모리 사용',
        description: '기술 선택, 아키텍처 결정 및 팀 규칙을 project-memory.json에 저장하세요. 이는 세션 간에 유지되며 컨텍스트 압축에서 살아남습니다.',
        icon: 'database',
      },
      {
        title: '현재 스프린트에는 노트패드 우선순위 컨텍스트',
        description: '우선순위 컨텍스트(최대 500자)를 현재 스프린트 목표, 활성 기능 및 중요한 차단 요소로 업데이트하세요. 이는 모든 세션 시작 시 로드됩니다.',
        icon: 'fileText',
      },
      {
        title: '임시 노트에는 작업 메모리',
        description: '최근 결정 사항, 버그 수정 및 임시 노트에 작업 메모리를 사용하세요. 이는 혼란을 방지하기 위해 7일 후 자동으로 정리됩니다.',
        icon: 'clock',
      },
      {
        title: '아키텍처 결정에는 수동 섹션',
        description: '수동 섹션에 주요 아키텍처 결정, 주요 변경 사항 및 마이그레이션 계획을 문서화하세요. 이는 절대 자동 정리되지 않습니다.',
        icon: 'wrench',
      },
      {
        title: '상태 파일은 자동',
        description: '디버깅이 아닌 한 상태 파일을 수동으로 편집하지 마세요. 스킬과 실행 모드가 이를 자동으로 관리합니다.',
        icon: 'alertCircle',
      },
    ],

    locationsTitle: '파일 위치',
    locationsDescription: '모든 설정이 .omc/ 디렉토리 아래 프로젝트 작업트리에 저장됨',
    locations: [
      { path: '{worktree}/.omc/project-memory.json', description: '영구 프로젝트 정보' },
      { path: '{worktree}/.omc/notepad.md', description: '세 개의 섹션이 있는 세션 메모리' },
      { path: '{worktree}/.omc/state/*.json', description: '모드별 상태 파일' },
      { path: '{worktree}/.omc/plans/*.md', description: '계획 문서 (ralplan, plan)' },
      { path: '{worktree}/.omc/research/*.md', description: '연구 출력 (research 스킬)' },
      { path: '{worktree}/.omc/logs/*.log', description: '감사 로그 및 실행 추적' },
    ],

    ctaTitle: '설정 마스터하기',
    ctaDescription: '모든 설정 파일을 이해하여 Diverga 워크플로를 최적화하세요.',
    ctaButton: 'MCP 도구 레퍼런스 탐색',
  },
};

// Icon mapping
const sectionIcons: Record<string, React.ReactNode> = {
  database: <Database className="h-6 w-6" />,
  fileText: <FileText className="h-6 w-6" />,
  fileJson: <FileJson className="h-6 w-6" />,
  checkCircle2: <CheckCircle2 className="h-6 w-6" />,
};

const bestPracticeIcons: Record<string, React.ReactNode> = {
  database: <Database className="h-5 w-5" />,
  fileText: <FileText className="h-5 w-5" />,
  clock: <Clock className="h-5 w-5" />,
  wrench: <Wrench className="h-5 w-5" />,
  alertCircle: <AlertCircle className="h-5 w-5" />,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function ConfigReferencePage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/reference`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(155, 89, 182, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(155, 89, 182, 0.15)',
              borderColor: 'rgba(155, 89, 182, 0.3)',
              color: '#9b59b6',
            }}
          >
            <Settings className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#9b59b6' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Configuration Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16 mb-16"
        >
          {t.sections.map((section) => (
            <motion.section key={section.id} variants={itemVariants} id={section.id}>
              <div className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden">
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-50"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${section.color}15 0%, transparent 50%)`,
                  }}
                />

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${section.color}15`,
                      borderColor: `${section.color}30`,
                      color: section.color,
                    }}
                  >
                    {sectionIcons[section.icon]}
                  </div>
                  <div className="flex-1">
                    <h2 className="void-heading-2 text-stellar-core mb-2">{section.title}</h2>
                    <p className="text-body text-stellar-dim">{section.description}</p>
                  </div>
                </div>

                {/* Schema */}
                {section.schema && (
                  <div className="mb-6 relative z-10">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '스키마' : 'Schema'}
                    </h3>
                    <div className="void-terminal overflow-hidden">
                      <div className="void-terminal-header">
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                        <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                          {locale === 'ko' ? '타입 정의' : 'Type Definition'}
                        </span>
                      </div>
                      <div className="p-4 text-sm font-mono text-stellar-bright space-y-1">
                        {Object.entries(section.schema).map(([key, value]) => (
                          <div key={key}>
                            <span style={{ color: '#44ffaa' }}>{key}</span>
                            <span className="text-stellar-faint">: </span>
                            <span className="text-stellar-dim">
                              {typeof value === 'object' ? JSON.stringify(value, null, 2) : (value as string)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Structure */}
                {section.structure && (
                  <div className="mb-6 relative z-10">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '구조' : 'Structure'}
                    </h3>
                    <div className="void-terminal overflow-hidden">
                      <div className="void-terminal-header">
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                        <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                          notepad.md
                        </span>
                      </div>
                      <pre className="p-4 text-sm font-mono text-stellar-bright whitespace-pre-wrap">
                        {section.structure}
                      </pre>
                    </div>
                  </div>
                )}

                {/* Sections table */}
                {section.sections && (
                  <div className="mb-6 relative z-10 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-stellar-faint/20">
                          <th className="text-left py-3 px-4 font-mono uppercase tracking-wider text-stellar-faint">
                            {locale === 'ko' ? '섹션' : 'Section'}
                          </th>
                          <th className="text-left py-3 px-4 font-mono uppercase tracking-wider text-stellar-faint">
                            {locale === 'ko' ? '최대 크기' : 'Max Size'}
                          </th>
                          <th className="text-left py-3 px-4 font-mono uppercase tracking-wider text-stellar-faint">
                            {locale === 'ko' ? '유지 기간' : 'Persistence'}
                          </th>
                          <th className="text-left py-3 px-4 font-mono uppercase tracking-wider text-stellar-faint">
                            {locale === 'ko' ? '사용' : 'Usage'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.sections.map((sec, i) => (
                          <tr key={i} className="border-b border-stellar-faint/10">
                            <td className="py-3 px-4 font-mono text-stellar-core">{sec.name}</td>
                            <td className="py-3 px-4 text-stellar-dim">{sec.maxSize}</td>
                            <td className="py-3 px-4 text-stellar-dim">{sec.persistence}</td>
                            <td className="py-3 px-4 text-stellar-dim">{sec.usage}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Modes */}
                {section.modes && (
                  <div className="mb-6 relative z-10 space-y-4">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '모드' : 'Modes'}
                    </h3>
                    {section.modes.map((mode) => (
                      <div key={mode.mode} className="p-4 bg-void-deep/50 border border-stellar-faint/10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono font-bold text-stellar-core">{mode.mode}</span>
                          <span className="text-xs font-mono text-stellar-faint">{mode.file}</span>
                        </div>
                        <p className="text-sm text-stellar-dim mb-3">{mode.description}</p>
                        <div className="space-y-1 text-xs font-mono">
                          {Object.entries(mode.fields).map(([key, value]) => (
                            <div key={key}>
                              <span style={{ color: '#44ffaa' }}>{key}</span>
                              <span className="text-stellar-faint">: </span>
                              <span className="text-stellar-dim">{value as string}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Severity levels */}
                {section.severityLevels && (
                  <div className="mb-6 relative z-10 space-y-3">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '심각도 수준' : 'Severity Levels'}
                    </h3>
                    {section.severityLevels.map((level) => (
                      <div
                        key={level.level}
                        className="flex items-start gap-4 p-4 border"
                        style={{
                          backgroundColor: `${level.color}10`,
                          borderColor: `${level.color}30`,
                        }}
                      >
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                          style={{
                            color: level.color,
                            borderColor: `${level.color}50`,
                            backgroundColor: `${level.color}20`,
                          }}
                        >
                          {level.level.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-mono font-bold text-stellar-core mb-1">{level.level}</h4>
                          <p className="text-sm text-stellar-dim mb-2">{level.description}</p>
                          <div className="grid gap-2 sm:grid-cols-2 text-xs">
                            <div>
                              <span className="text-stellar-faint">{locale === 'ko' ? '동작:' : 'Behavior:'} </span>
                              <span className="text-stellar-bright">{level.behavior}</span>
                            </div>
                            <div>
                              <span className="text-stellar-faint">{locale === 'ko' ? '타임아웃:' : 'Timeout:'} </span>
                              <span className="text-stellar-bright">{level.timeout}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Example */}
                {section.example && typeof section.example === 'string' && (
                  <div className="mb-6 relative z-10">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '예시' : 'Example'}
                    </h3>
                    <div className="void-terminal overflow-hidden">
                      <div className="void-terminal-header">
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                        <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                          config.yaml
                        </span>
                      </div>
                      <pre className="p-4 text-sm font-mono text-stellar-bright whitespace-pre-wrap">
                        {section.example}
                      </pre>
                    </div>
                  </div>
                )}

                {section.example && typeof section.example === 'object' && !Array.isArray(section.example) && (
                  <div className="mb-6 relative z-10">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? '예시' : 'Example'}
                    </h3>
                    <div className="void-terminal overflow-hidden">
                      <div className="void-terminal-header">
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                        <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                        <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                          project-memory.json
                        </span>
                      </div>
                      <pre className="p-4 text-sm font-mono text-stellar-bright whitespace-pre-wrap">
                        {JSON.stringify(section.example, null, 2)}
                      </pre>
                    </div>
                  </div>
                )}

                {/* MCP Tools */}
                {section.tools && (
                  <div className="relative z-10">
                    <h3 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                      {locale === 'ko' ? 'MCP 도구' : 'MCP Tools'}
                    </h3>
                    <div className="space-y-4">
                      {section.tools.map((tool) => (
                        <div key={tool.name} className="p-4 bg-void-deep/50 border border-stellar-faint/10">
                          <h4 className="font-mono font-bold text-stellar-core mb-3">{tool.name}</h4>
                          <div className="space-y-2">
                            {tool.params.map((param, i) => (
                              <div key={i} className="flex items-start gap-3 text-sm">
                                <span
                                  className={`font-mono ${param.required ? 'text-stellar-core' : 'text-stellar-dim'}`}
                                >
                                  {param.name}
                                  {param.required && <span style={{ color: '#ff6b6b' }}>*</span>}
                                </span>
                                <span className="text-stellar-faint">:</span>
                                <div className="flex-1">
                                  <div className="text-stellar-bright font-mono text-xs mb-1">{param.type}</div>
                                  {param.description && (
                                    <div className="text-stellar-dim text-xs">{param.description}</div>
                                  )}
                                  {param.default && (
                                    <div className="text-stellar-faint text-xs">
                                      {locale === 'ko' ? '기본값:' : 'Default:'} {param.default}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-6">{t.bestPracticesTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: 'rgba(68, 255, 170, 0.15)',
                      borderColor: 'rgba(68, 255, 170, 0.3)',
                      color: '#44ffaa',
                    }}
                  >
                    {bestPracticeIcons[practice.icon]}
                  </div>
                  <h3 className="flex-1 text-body font-bold text-stellar-core">{practice.title}</h3>
                </div>
                <p className="text-sm text-stellar-dim">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* File Locations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.locationsTitle}</h2>
          <p className="text-body text-stellar-dim mb-6">{t.locationsDescription}</p>
          <div className="space-y-2">
            {t.locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 bg-void-elevated border border-stellar-faint/10"
              >
                <span className="font-mono text-sm text-stellar-core">{loc.path}</span>
                <span className="text-stellar-faint">—</span>
                <span className="text-sm text-stellar-dim">{loc.description}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(68, 255, 170, 0.15) 100%)',
              borderColor: 'rgba(155, 89, 182, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/reference/mcp-tools`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <Settings className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
