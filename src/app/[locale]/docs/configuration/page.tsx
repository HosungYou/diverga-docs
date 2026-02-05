'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Settings, FileCode, Database, Terminal, Key, ArrowRight, Copy, Check, FileText, Folder } from 'lucide-react';
import { useState } from 'react';
import { DocsBreadcrumb } from '@/components/docs';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-void-surface transition-colors"
      title="Copy"
    >
      {copied ? (
        <Check className="h-4 w-4 text-[#44ffaa]" />
      ) : (
        <Copy className="h-4 w-4 text-stellar-faint" />
      )}
    </button>
  );
}

export default function ConfigurationPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Configuration',
      description: 'Configure Diverga for your research workflow with configuration files, environment variables, and memory systems.',
      overview: 'Overview',
      overviewDesc: 'Diverga uses a multi-layered configuration system to maintain context across sessions and projects. Understanding these files helps you customize behavior and persist research decisions.',
      configFiles: 'Configuration Files',
      configFilesDesc: 'Four core files control Diverga\'s behavior and memory:',
      files: [
        {
          icon: FileText,
          name: 'CLAUDE.md',
          location: 'Project root',
          purpose: 'Project-specific instructions for Claude Code',
          contains: 'Agent triggers, workflow patterns, domain knowledge',
          scope: 'Per project',
          color: '#ff6b6b',
        },
        {
          icon: FileCode,
          name: 'AGENTS.md',
          location: 'Project root (auto-generated)',
          purpose: 'Hierarchical codebase documentation',
          contains: 'File summaries, architecture notes, component relationships',
          scope: 'Per project',
          color: '#44ffaa',
        },
        {
          icon: Database,
          name: 'project-memory.json',
          location: '.omc/project-memory.json',
          purpose: 'Persistent project context',
          contains: 'Tech stack, build commands, conventions, directives',
          scope: 'Per project',
          color: '#22ccff',
        },
        {
          icon: Terminal,
          name: 'notepad.md',
          location: '.omc/notepad.md',
          purpose: 'Session memory and working notes',
          contains: 'Priority context, working memory, manual notes',
          scope: 'Per session',
          color: '#ffcc22',
        },
      ],
      envVars: 'Environment Variables',
      envVarsDesc: 'API keys and configuration for external services:',
      envVarsList: [
        {
          name: 'ANTHROPIC_API_KEY',
          required: true,
          purpose: 'Claude API access (required for all agent operations)',
          example: 'sk-ant-api03-...',
        },
        {
          name: 'GROQ_API_KEY',
          required: false,
          purpose: 'Groq LLM for ScholaRAG screening (budget-friendly alternative)',
          example: 'gsk_...',
        },
        {
          name: 'OPENAI_API_KEY',
          required: false,
          purpose: 'OpenAI API for embeddings and optional agents',
          example: 'sk-proj-...',
        },
      ],
      claudeMd: 'CLAUDE.md Structure',
      claudeMdDesc: 'The CLAUDE.md file defines project-specific behavior and agent triggers:',
      claudeMdExample: `# CLAUDE.md

## Project Overview
This project uses ScholaRAG for systematic literature reviews
in education research.

## Agent Triggers
- "systematic review" → I0-ScholarAgentOrchestrator
- "meta-analysis" → C4-MetaAnalyst
- "literature search" → B1-LiteratureScout

## Research Context
- Domain: Educational Technology
- Methodology: PRISMA 2020
- Analysis: Meta-analytic structural equation modeling`,
      projectMemory: 'Project Memory Schema',
      projectMemoryDesc: 'The project-memory.json file stores structured project context:',
      projectMemoryExample: `{
  "techStack": {
    "languages": ["Python", "TypeScript"],
    "frameworks": ["Next.js", "FastAPI"],
    "databases": ["PostgreSQL", "ChromaDB"]
  },
  "build": {
    "install": "pnpm install",
    "dev": "pnpm dev",
    "build": "pnpm build",
    "test": "pytest tests/"
  },
  "conventions": {
    "codeStyle": "Black formatter, 100 char line length",
    "naming": "snake_case for Python, camelCase for TypeScript",
    "imports": "Absolute imports from src/"
  },
  "directives": [
    {
      "directive": "Always use TypeScript strict mode",
      "priority": "high",
      "context": "Type safety is critical for research data"
    }
  ]
}`,
      notepadStructure: 'Notepad Structure',
      notepadStructureDesc: 'The notepad.md file maintains session memory with three sections:',
      notepadExample: `# Priority Context (always loaded, max 500 chars)
Research question: How do AI chatbots improve language learning?
Stage: PRISMA screening (Stage 3)
Database: Semantic Scholar + OpenAlex (N=342 papers)

# Working Memory (auto-pruned after 7 days)
[2025-02-05T10:30:00Z] Excluded 23 papers for non-English
[2025-02-05T11:15:00Z] Identified 5 high-impact papers (>100 citations)
[2025-02-05T14:20:00Z] Changed inclusion criteria: added "speaking skills"

# MANUAL (never auto-pruned)
Key finding: Chatbot effectiveness depends on feedback immediacy
Important papers: Smith (2023), Lee (2024) - both use similar frameworks`,
      installation: 'Setup & Installation',
      installationDesc: 'Configure Diverga after installation:',
      setupSteps: [
        {
          step: '1. Run setup wizard',
          command: '/diverga:setup',
          desc: 'Interactive configuration for checkpoints, HUD, and language',
        },
        {
          step: '2. Set API keys',
          command: 'export ANTHROPIC_API_KEY=sk-ant-...',
          desc: 'Add to .env file or shell profile',
        },
        {
          step: '3. Initialize project',
          command: '/diverga:deepinit',
          desc: 'Generate AGENTS.md and initialize project memory',
        },
      ],
      bestPractices: 'Best Practices',
      bestPracticesDesc: 'Recommendations for effective configuration:',
      practices: [
        'Keep CLAUDE.md concise - focus on project-specific patterns',
        'Use Priority Context for critical session state (research stage, current task)',
        'Add directives for non-obvious conventions (e.g., "Never use pandas.append()")',
        'Review notepad.md regularly and promote insights to project-memory.json',
        'Version control CLAUDE.md and AGENTS.md, but .gitignore .omc/',
      ],
      nextSteps: 'Learn More',
    },
    ko: {
      title: '설정',
      description: '설정 파일, 환경 변수, 메모리 시스템으로 연구 워크플로우에 맞게 Diverga를 구성하세요.',
      overview: '개요',
      overviewDesc: 'Diverga는 세션과 프로젝트 간 맥락을 유지하기 위해 다층 설정 시스템을 사용합니다. 이러한 파일을 이해하면 동작을 사용자 지정하고 연구 결정을 영구 보존할 수 있습니다.',
      configFiles: '설정 파일',
      configFilesDesc: '네 가지 핵심 파일이 Diverga의 동작과 메모리를 제어합니다:',
      files: [
        {
          icon: FileText,
          name: 'CLAUDE.md',
          location: '프로젝트 루트',
          purpose: 'Claude Code를 위한 프로젝트별 지침',
          contains: '에이전트 트리거, 워크플로우 패턴, 도메인 지식',
          scope: '프로젝트별',
          color: '#ff6b6b',
        },
        {
          icon: FileCode,
          name: 'AGENTS.md',
          location: '프로젝트 루트 (자동 생성)',
          purpose: '계층적 코드베이스 문서화',
          contains: '파일 요약, 아키텍처 노트, 컴포넌트 관계',
          scope: '프로젝트별',
          color: '#44ffaa',
        },
        {
          icon: Database,
          name: 'project-memory.json',
          location: '.omc/project-memory.json',
          purpose: '영구 프로젝트 맥락',
          contains: '기술 스택, 빌드 명령, 규칙, 지시사항',
          scope: '프로젝트별',
          color: '#22ccff',
        },
        {
          icon: Terminal,
          name: 'notepad.md',
          location: '.omc/notepad.md',
          purpose: '세션 메모리 및 작업 노트',
          contains: '우선순위 맥락, 작업 메모리, 수동 노트',
          scope: '세션별',
          color: '#ffcc22',
        },
      ],
      envVars: '환경 변수',
      envVarsDesc: '외부 서비스를 위한 API 키 및 설정:',
      envVarsList: [
        {
          name: 'ANTHROPIC_API_KEY',
          required: true,
          purpose: 'Claude API 액세스 (모든 에이전트 작업에 필수)',
          example: 'sk-ant-api03-...',
        },
        {
          name: 'GROQ_API_KEY',
          required: false,
          purpose: 'ScholaRAG 스크리닝용 Groq LLM (저렴한 대안)',
          example: 'gsk_...',
        },
        {
          name: 'OPENAI_API_KEY',
          required: false,
          purpose: '임베딩 및 선택적 에이전트용 OpenAI API',
          example: 'sk-proj-...',
        },
      ],
      claudeMd: 'CLAUDE.md 구조',
      claudeMdDesc: 'CLAUDE.md 파일은 프로젝트별 동작과 에이전트 트리거를 정의합니다:',
      claudeMdExample: `# CLAUDE.md

## 프로젝트 개요
이 프로젝트는 교육 연구에서 체계적 문헌고찰을 위해
ScholaRAG를 사용합니다.

## 에이전트 트리거
- "체계적 문헌고찰" → I0-ScholarAgentOrchestrator
- "메타분석" → C4-MetaAnalyst
- "문헌 검색" → B1-LiteratureScout

## 연구 맥락
- 영역: 교육공학
- 방법론: PRISMA 2020
- 분석: 메타분석적 구조방정식 모델링`,
      projectMemory: '프로젝트 메모리 스키마',
      projectMemoryDesc: 'project-memory.json 파일은 구조화된 프로젝트 맥락을 저장합니다:',
      projectMemoryExample: `{
  "techStack": {
    "languages": ["Python", "TypeScript"],
    "frameworks": ["Next.js", "FastAPI"],
    "databases": ["PostgreSQL", "ChromaDB"]
  },
  "build": {
    "install": "pnpm install",
    "dev": "pnpm dev",
    "build": "pnpm build",
    "test": "pytest tests/"
  },
  "conventions": {
    "codeStyle": "Black 포매터, 100자 라인 길이",
    "naming": "Python은 snake_case, TypeScript는 camelCase",
    "imports": "src/에서 절대 import"
  },
  "directives": [
    {
      "directive": "항상 TypeScript strict 모드 사용",
      "priority": "high",
      "context": "연구 데이터에 타입 안전성 중요"
    }
  ]
}`,
      notepadStructure: '노트패드 구조',
      notepadStructureDesc: 'notepad.md 파일은 세 섹션으로 세션 메모리를 유지합니다:',
      notepadExample: `# Priority Context (항상 로드됨, 최대 500자)
연구 질문: AI 챗봇이 언어 학습을 어떻게 개선하는가?
단계: PRISMA 스크리닝 (Stage 3)
데이터베이스: Semantic Scholar + OpenAlex (N=342 papers)

# Working Memory (7일 후 자동 삭제)
[2025-02-05T10:30:00Z] 비영어 논문 23개 제외
[2025-02-05T11:15:00Z] 고영향 논문 5개 식별 (인용 >100)
[2025-02-05T14:20:00Z] 포함 기준 변경: "말하기 기술" 추가

# MANUAL (자동 삭제 안 됨)
주요 발견: 챗봇 효과성은 피드백 즉시성에 의존
중요 논문: Smith (2023), Lee (2024) - 둘 다 유사 프레임워크 사용`,
      installation: '설정 및 설치',
      installationDesc: '설치 후 Diverga 구성:',
      setupSteps: [
        {
          step: '1. 설정 마법사 실행',
          command: '/diverga:setup',
          desc: '체크포인트, HUD, 언어에 대한 대화형 구성',
        },
        {
          step: '2. API 키 설정',
          command: 'export ANTHROPIC_API_KEY=sk-ant-...',
          desc: '.env 파일 또는 셸 프로파일에 추가',
        },
        {
          step: '3. 프로젝트 초기화',
          command: '/diverga:deepinit',
          desc: 'AGENTS.md 생성 및 프로젝트 메모리 초기화',
        },
      ],
      bestPractices: '모범 사례',
      bestPracticesDesc: '효과적인 구성을 위한 권장사항:',
      practices: [
        'CLAUDE.md는 간결하게 - 프로젝트별 패턴에 집중',
        'Priority Context는 중요한 세션 상태에 사용 (연구 단계, 현재 작업)',
        '자명하지 않은 규칙에 대한 지시사항 추가 (예: "pandas.append() 사용 금지")',
        'notepad.md를 정기적으로 검토하고 인사이트를 project-memory.json으로 승격',
        'CLAUDE.md와 AGENTS.md는 버전 관리, 하지만 .omc/는 .gitignore',
      ],
      nextSteps: '더 알아보기',
    },
  };

  const t = content[locale];

  return (
    <div>
      <DocsBreadcrumb locale={locale} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
            <Settings className="h-6 w-6 text-[#44ffaa]" />
          </div>
          <div>
            <h1 className="text-3xl font-display text-stellar-core">{t.title}</h1>
            <p className="text-stellar-dim">{t.description}</p>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12" id="overview">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.overview}</h2>
          <p className="text-stellar-dim">{t.overviewDesc}</p>
        </section>

        {/* Configuration Files */}
        <section className="mb-12" id="config-files">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.configFiles}</h2>
          <p className="text-stellar-dim mb-6">{t.configFilesDesc}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.files.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center border flex-shrink-0"
                    style={{
                      backgroundColor: `${file.color}15`,
                      borderColor: `${file.color}30`,
                    }}
                  >
                    <file.icon className="h-5 w-5" style={{ color: file.color }} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm text-stellar-bright">{file.name}</h3>
                    <p className="text-xs text-stellar-faint">{file.location}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-stellar-faint">{locale === 'ko' ? '목적' : 'Purpose'}:</span>
                    <p className="text-stellar-dim">{file.purpose}</p>
                  </div>
                  <div>
                    <span className="text-stellar-faint">{locale === 'ko' ? '포함' : 'Contains'}:</span>
                    <p className="text-stellar-dim">{file.contains}</p>
                  </div>
                  <div className="pt-2 border-t border-stellar-faint/10">
                    <span className="text-xs font-mono text-stellar-faint">
                      {locale === 'ko' ? '범위' : 'Scope'}: {file.scope}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Environment Variables */}
        <section className="mb-12" id="env-vars">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.envVars}</h2>
          <p className="text-stellar-dim mb-6">{t.envVarsDesc}</p>

          <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <Key className="h-4 w-4 text-stellar-faint" />
              <span className="font-mono text-xs text-stellar-faint">.env</span>
            </div>
            <div className="divide-y divide-stellar-faint/10">
              {t.envVarsList.map((envVar, index) => (
                <div key={index} className="p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <code className="font-mono text-sm text-[#44ffaa]">{envVar.name}</code>
                    <span
                      className={`px-2 py-0.5 text-xs font-mono uppercase border ${
                        envVar.required
                          ? 'bg-[#ff3366]/10 text-[#ff3366] border-[#ff3366]/30'
                          : 'bg-stellar-faint/10 text-stellar-faint border-stellar-faint/30'
                      }`}
                    >
                      {envVar.required ? (locale === 'ko' ? '필수' : 'REQUIRED') : (locale === 'ko' ? '선택' : 'OPTIONAL')}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim mb-2">{envVar.purpose}</p>
                  <code className="text-xs font-mono text-stellar-faint">{envVar.example}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLAUDE.md Structure */}
        <section className="mb-12" id="claude-md">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.claudeMd}</h2>
          <p className="text-stellar-dim mb-4">{t.claudeMdDesc}</p>

          <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <span className="font-mono text-xs text-stellar-faint">CLAUDE.md</span>
              <CopyButton text={t.claudeMdExample} />
            </div>
            <pre className="p-4 font-mono text-xs text-stellar-dim overflow-x-auto">
              <code>{t.claudeMdExample}</code>
            </pre>
          </div>
        </section>

        {/* Project Memory Schema */}
        <section className="mb-12" id="project-memory">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.projectMemory}</h2>
          <p className="text-stellar-dim mb-4">{t.projectMemoryDesc}</p>

          <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <span className="font-mono text-xs text-stellar-faint">.omc/project-memory.json</span>
              <CopyButton text={t.projectMemoryExample} />
            </div>
            <pre className="p-4 font-mono text-xs text-stellar-dim overflow-x-auto">
              <code>{t.projectMemoryExample}</code>
            </pre>
          </div>
        </section>

        {/* Notepad Structure */}
        <section className="mb-12" id="notepad">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.notepadStructure}</h2>
          <p className="text-stellar-dim mb-4">{t.notepadStructureDesc}</p>

          <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <span className="font-mono text-xs text-stellar-faint">.omc/notepad.md</span>
              <CopyButton text={t.notepadExample} />
            </div>
            <pre className="p-4 font-mono text-xs text-stellar-dim overflow-x-auto whitespace-pre-wrap">
              <code>{t.notepadExample}</code>
            </pre>
          </div>
        </section>

        {/* Setup & Installation */}
        <section className="mb-12" id="installation">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.installation}</h2>
          <p className="text-stellar-dim mb-6">{t.installationDesc}</p>

          <div className="space-y-4">
            {t.setupSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[#44ffaa]/30 bg-[#44ffaa]/10 font-mono text-sm text-[#44ffaa]"
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-stellar-bright mb-2">{step.step}</h3>
                  <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden mb-2">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-void-surface border-b border-stellar-faint/10">
                      <span className="font-mono text-xs text-stellar-faint">Command</span>
                      <CopyButton text={step.command} />
                    </div>
                    <pre className="px-3 py-2 font-mono text-xs text-stellar-bright">
                      <code>{step.command}</code>
                    </pre>
                  </div>
                  <p className="text-xs text-stellar-dim">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12" id="best-practices">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.bestPractices}</h2>
          <p className="text-stellar-dim mb-4">{t.bestPracticesDesc}</p>

          <div className="bg-void-elevated border border-[#44ffaa]/30 p-6">
            <ul className="space-y-3">
              {t.practices.map((practice, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-[#44ffaa]/30 bg-[#44ffaa]/10 mt-0.5">
                    <Check className="h-3 w-3 text-[#44ffaa]" />
                  </div>
                  <span className="text-sm text-stellar-dim">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.nextSteps}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/${locale}/docs/memory-system`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#44ffaa]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
                <Database className="h-5 w-5 text-[#44ffaa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? '메모리 시스템' : 'Memory System'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '메모리 타입 및 사용법' : 'Memory types and usage'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#44ffaa] transition-colors" />
            </Link>

            <Link
              href={`/${locale}/docs/cli`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#22ccff]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#22ccff]/10 border border-[#22ccff]/30">
                <Terminal className="h-5 w-5 text-[#22ccff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? 'CLI 레퍼런스' : 'CLI Reference'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '명령어 및 옵션' : 'Commands and options'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#22ccff] transition-colors" />
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
