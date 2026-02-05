'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Terminal, Database, FileText, Settings, Code, Zap } from 'lucide-react';
import { DocsBreadcrumb } from '@/components/docs';

export default function MemoryAPIPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Memory System API',
      badge: 'MCP TOOLS',
      description: 'Complete reference for Model Context Protocol (MCP) tools that power Diverga\'s Memory System.',
      notepadTools: 'Notepad Tools',
      notepadDesc: 'Session memory at {worktree}/.omc/notepad.md',
      projectMemoryTools: 'Project Memory Tools',
      projectMemoryDesc: 'Persistent project info at {worktree}/.omc/project-memory.json',
      stateTools: 'State Management Tools',
      stateDesc: 'All state stored at {worktree}/.omc/state/{mode}-state.json',
      sections: 'Memory Sections',
      priority: 'Priority Context',
      priorityDesc: 'Always loaded on session start (max 500 chars)',
      working: 'Working Memory',
      workingDesc: 'Timestamped entries, auto-pruned after 7 days',
      manual: 'Manual Section',
      manualDesc: 'Never auto-pruned, permanent notes',
      parameters: 'Parameters',
      returns: 'Returns',
      example: 'Example',
      modes: 'Supported Modes',
    },
    ko: {
      title: '메모리 시스템 API',
      badge: 'MCP 도구',
      description: 'Diverga 메모리 시스템을 구동하는 Model Context Protocol (MCP) 도구의 완전한 레퍼런스.',
      notepadTools: 'Notepad 도구',
      notepadDesc: '세션 메모리 위치: {worktree}/.omc/notepad.md',
      projectMemoryTools: '프로젝트 메모리 도구',
      projectMemoryDesc: '영구 프로젝트 정보: {worktree}/.omc/project-memory.json',
      stateTools: '상태 관리 도구',
      stateDesc: '상태 저장 위치: {worktree}/.omc/state/{mode}-state.json',
      sections: '메모리 섹션',
      priority: 'Priority Context',
      priorityDesc: '세션 시작 시 항상 로드 (최대 500자)',
      working: 'Working Memory',
      workingDesc: '타임스탬프 엔트리, 7일 후 자동 삭제',
      manual: 'Manual Section',
      manualDesc: '자동 삭제 안 됨, 영구 노트',
      parameters: '매개변수',
      returns: '반환값',
      example: '예제',
      modes: '지원 모드',
    },
  };

  const t = content[locale];

  const notepadTools = [
    {
      name: 'notepad_read',
      desc: locale === 'ko' ? 'notepad 읽기' : 'Read notepad content',
      params: [
        { name: 'section', type: "'all' | 'priority' | 'working' | 'manual'", optional: true, desc: locale === 'ko' ? '읽을 섹션 (기본: all)' : 'Section to read (default: all)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? 'Notepad 내용 (선택한 섹션)' : 'Notepad content (selected section)',
      example: `notepad_read({ section: "priority" })`,
    },
    {
      name: 'notepad_write_priority',
      desc: locale === 'ko' ? 'Priority Context 설정 (기존 내용 대체)' : 'Set Priority Context (replaces existing)',
      params: [
        { name: 'content', type: 'string', required: true, desc: locale === 'ko' ? '쓸 내용 (500자 이하 권장)' : 'Content to write (recommend under 500 chars)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `notepad_write_priority({
  content: "Research question: How does AI improve learning?"
})`,
    },
    {
      name: 'notepad_write_working',
      desc: locale === 'ko' ? 'Working Memory에 엔트리 추가 (타임스탬프 자동)' : 'Add entry to Working Memory (timestamped)',
      params: [
        { name: 'content', type: 'string', required: true, desc: locale === 'ko' ? '추가할 내용' : 'Content to add' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `notepad_write_working({
  content: "Decided to use Two-Stage MASEM for mediation analysis"
})`,
    },
    {
      name: 'notepad_write_manual',
      desc: locale === 'ko' ? 'MANUAL 섹션에 엔트리 추가 (영구 보관)' : 'Add entry to MANUAL section (permanent)',
      params: [
        { name: 'content', type: 'string', required: true, desc: locale === 'ko' ? '추가할 내용' : 'Content to add' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `notepad_write_manual({
  content: "Always use Hedges' g for meta-analysis effect sizes"
})`,
    },
    {
      name: 'notepad_prune',
      desc: locale === 'ko' ? '오래된 Working Memory 엔트리 제거' : 'Remove old Working Memory entries',
      params: [
        { name: 'daysOld', type: 'number', optional: true, desc: locale === 'ko' ? '삭제할 날짜 임계값 (기본: 7)' : 'Age threshold in days (default: 7)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '삭제된 엔트리 수' : 'Number of entries removed',
      example: `notepad_prune({ daysOld: 14 })`,
    },
    {
      name: 'notepad_stats',
      desc: locale === 'ko' ? 'Notepad 통계 조회' : 'Get notepad statistics',
      params: [
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '크기, 엔트리 수, 가장 오래된 엔트리' : 'Size, entry count, oldest entry',
      example: `notepad_stats()`,
    },
  ];

  const projectMemoryTools = [
    {
      name: 'project_memory_read',
      desc: locale === 'ko' ? '프로젝트 메모리 읽기' : 'Read project memory',
      params: [
        { name: 'section', type: "'all' | 'techStack' | 'build' | 'conventions' | 'structure' | 'notes' | 'directives'", optional: true, desc: locale === 'ko' ? '읽을 섹션 (기본: all)' : 'Section to read (default: all)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '프로젝트 메모리 내용' : 'Project memory content',
      example: `project_memory_read({ section: "techStack" })`,
    },
    {
      name: 'project_memory_write',
      desc: locale === 'ko' ? '프로젝트 메모리 쓰기/업데이트 (병합 지원)' : 'Write/update project memory (supports merge)',
      params: [
        { name: 'memory', type: 'Record<string, any>', required: true, desc: locale === 'ko' ? '쓸 메모리 객체' : 'Memory object to write' },
        { name: 'merge', type: 'boolean', optional: true, desc: locale === 'ko' ? '기존 메모리와 병합 여부 (기본: false)' : 'Merge with existing (default: false)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `project_memory_write({
  memory: {
    techStack: ["Python", "LangChain", "Qdrant"],
    build: "pip install -r requirements.txt"
  },
  merge: true
})`,
    },
    {
      name: 'project_memory_add_note',
      desc: locale === 'ko' ? '카테고리별 노트 추가' : 'Add categorized note',
      params: [
        { name: 'category', type: 'string', required: true, desc: locale === 'ko' ? '노트 카테고리 (예: "build", "test", "deploy")' : 'Note category (e.g., "build", "test", "deploy")' },
        { name: 'content', type: 'string', required: true, desc: locale === 'ko' ? '노트 내용' : 'Note content' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `project_memory_add_note({
  category: "analysis",
  content: "Use MASEM for mediation meta-analysis"
})`,
    },
    {
      name: 'project_memory_add_directive',
      desc: locale === 'ko' ? '영구 사용자 지침 추가 (압축 방지)' : 'Add persistent user directive (survives compaction)',
      params: [
        { name: 'directive', type: 'string', required: true, desc: locale === 'ko' ? '지침 내용' : 'Directive content' },
        { name: 'context', type: 'string', optional: true, desc: locale === 'ko' ? '지침 맥락' : 'Directive context' },
        { name: 'priority', type: "'high' | 'normal'", optional: true, desc: locale === 'ko' ? '우선순위 (기본: normal)' : 'Priority (default: normal)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `project_memory_add_directive({
  directive: "Always use TypeScript strict mode",
  priority: "high"
})`,
    },
  ];

  const stateTools = [
    {
      name: 'state_read',
      desc: locale === 'ko' ? '특정 모드의 상태 읽기' : 'Read state for a specific mode',
      params: [
        { name: 'mode', type: "'autopilot' | 'ultrapilot' | 'swarm' | 'pipeline' | 'ralph' | 'ultrawork' | 'ultraqa' | 'ecomode' | 'ralplan'", required: true, desc: locale === 'ko' ? '읽을 모드' : 'Mode to read' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '상태 JSON 데이터 또는 없음' : 'State JSON data or none',
      example: `state_read({ mode: "autopilot" })`,
    },
    {
      name: 'state_write',
      desc: locale === 'ko' ? '특정 모드의 상태 쓰기 (주의해서 사용)' : 'Write state for a mode (use with caution)',
      params: [
        { name: 'mode', type: "'autopilot' | 'ultrapilot' | 'swarm' | 'pipeline' | 'ralph' | 'ultrawork' | 'ultraqa' | 'ecomode' | 'ralplan'", required: true, desc: locale === 'ko' ? '쓸 모드' : 'Mode to write' },
        { name: 'active', type: 'boolean', optional: true, desc: locale === 'ko' ? '모드 활성 상태' : 'Mode active state' },
        { name: 'iteration', type: 'number', optional: true, desc: locale === 'ko' ? '현재 반복 횟수' : 'Current iteration' },
        { name: 'max_iterations', type: 'number', optional: true, desc: locale === 'ko' ? '최대 반복 횟수' : 'Max iterations' },
        { name: 'current_phase', type: 'string', optional: true, desc: locale === 'ko' ? '현재 단계' : 'Current phase' },
        { name: 'state', type: 'Record<string, any>', optional: true, desc: locale === 'ko' ? '추가 커스텀 필드' : 'Additional custom fields' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `state_write({
  mode: "autopilot",
  active: true,
  iteration: 3,
  current_phase: "implementation"
})`,
    },
    {
      name: 'state_clear',
      desc: locale === 'ko' ? '특정 모드의 상태 삭제' : 'Clear/delete state for a mode',
      params: [
        { name: 'mode', type: "'autopilot' | 'ultrapilot' | 'swarm' | 'pipeline' | 'ralph' | 'ultrawork' | 'ultraqa' | 'ecomode' | 'ralplan'", required: true, desc: locale === 'ko' ? '삭제할 모드' : 'Mode to clear' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '성공 메시지' : 'Success message',
      example: `state_clear({ mode: "autopilot" })`,
    },
    {
      name: 'state_list_active',
      desc: locale === 'ko' ? '현재 활성 모드 나열' : 'List all currently active modes',
      params: [
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '활성 상태 파일이 있는 모드 배열' : 'Array of modes with active state files',
      example: `state_list_active()`,
    },
    {
      name: 'state_get_status',
      desc: locale === 'ko' ? '특정 모드 또는 모든 모드의 상세 상태' : 'Detailed status for a mode or all modes',
      params: [
        { name: 'mode', type: "'autopilot' | 'ultrapilot' | 'swarm' | 'pipeline' | 'ralph' | 'ultrawork' | 'ultraqa' | 'ecomode' | 'ralplan'", optional: true, desc: locale === 'ko' ? '상태 조회할 모드 (생략 시 전체)' : 'Mode to check (omit for all)' },
        { name: 'workingDirectory', type: 'string', optional: true, desc: locale === 'ko' ? '작업 디렉토리' : 'Working directory' },
      ],
      returns: locale === 'ko' ? '활성 상태, 파일 경로, 상태 내용' : 'Active status, file paths, state contents',
      example: `state_get_status({ mode: "ralph" })`,
    },
  ];

  const renderToolCard = (tool: any, color: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-colors"
    >
      {/* Tool Header */}
      <div className="p-4 border-b border-stellar-faint/10">
        <div className="flex items-center gap-3 mb-2">
          <Code className="h-5 w-5" style={{ color }} />
          <h3 className="font-mono text-lg" style={{ color }}>{tool.name}</h3>
        </div>
        <p className="text-sm text-stellar-dim">{tool.desc}</p>
      </div>

      {/* Parameters */}
      <div className="p-4 border-b border-stellar-faint/10">
        <h4 className="text-xs font-mono uppercase text-stellar-faint mb-3">{t.parameters}</h4>
        <div className="space-y-2">
          {tool.params.map((param: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <code className="font-mono text-sm text-stellar-bright">{param.name}</code>
                <code className="font-mono text-xs text-stellar-faint">{param.type}</code>
                {param.required && (
                  <span className="px-1.5 py-0.5 text-xs font-mono bg-[#ff3366]/20 text-[#ff3366] border border-[#ff3366]/30">
                    required
                  </span>
                )}
                {param.optional && (
                  <span className="px-1.5 py-0.5 text-xs font-mono bg-stellar-faint/10 text-stellar-faint border border-stellar-faint/30">
                    optional
                  </span>
                )}
              </div>
              <p className="text-xs text-stellar-dim pl-4">{param.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Returns */}
      <div className="p-4 border-b border-stellar-faint/10">
        <h4 className="text-xs font-mono uppercase text-stellar-faint mb-2">{t.returns}</h4>
        <p className="text-sm text-stellar-dim">{tool.returns}</p>
      </div>

      {/* Example */}
      <div className="p-4">
        <h4 className="text-xs font-mono uppercase text-stellar-faint mb-2">{t.example}</h4>
        <div className="bg-void-absolute border border-stellar-faint/10 p-3">
          <pre className="font-mono text-xs text-[#44ffaa] overflow-x-auto">
            {tool.example}
          </pre>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div>
      <DocsBreadcrumb locale={locale} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[#9b59b6]/10 border border-[#9b59b6]/30">
            <Terminal className="h-6 w-6 text-[#9b59b6]" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-display text-stellar-core">{t.title}</h1>
              <span className="px-2 py-1 text-xs font-mono uppercase bg-[#9b59b6]/20 text-[#9b59b6] border border-[#9b59b6]/30">
                {t.badge}
              </span>
            </div>
            <p className="text-stellar-dim">{t.description}</p>
          </div>
        </div>

        {/* Memory Sections Overview */}
        <section className="mb-12" id="sections">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.sections}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 bg-void-elevated border border-[#44ffaa]/30">
              <h3 className="font-mono text-sm text-[#44ffaa] mb-2">{t.priority}</h3>
              <p className="text-xs text-stellar-dim">{t.priorityDesc}</p>
            </div>
            <div className="p-4 bg-void-elevated border border-[#ffcc22]/30">
              <h3 className="font-mono text-sm text-[#ffcc22] mb-2">{t.working}</h3>
              <p className="text-xs text-stellar-dim">{t.workingDesc}</p>
            </div>
            <div className="p-4 bg-void-elevated border border-[#22ccff]/30">
              <h3 className="font-mono text-sm text-[#22ccff] mb-2">{t.manual}</h3>
              <p className="text-xs text-stellar-dim">{t.manualDesc}</p>
            </div>
          </div>
        </section>

        {/* Notepad Tools */}
        <section className="mb-12" id="notepad">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="h-6 w-6 text-[#44ffaa]" />
            <h2 className="text-2xl font-display text-stellar-bright">{t.notepadTools}</h2>
          </div>
          <p className="text-sm text-stellar-dim mb-6 font-mono">{t.notepadDesc}</p>

          <div className="grid gap-6 lg:grid-cols-2">
            {notepadTools.map((tool, index) => (
              <div key={index}>{renderToolCard(tool, '#44ffaa')}</div>
            ))}
          </div>
        </section>

        {/* Project Memory Tools */}
        <section className="mb-12" id="project-memory">
          <div className="flex items-center gap-3 mb-2">
            <Database className="h-6 w-6 text-[#22ccff]" />
            <h2 className="text-2xl font-display text-stellar-bright">{t.projectMemoryTools}</h2>
          </div>
          <p className="text-sm text-stellar-dim mb-6 font-mono">{t.projectMemoryDesc}</p>

          <div className="grid gap-6 lg:grid-cols-2">
            {projectMemoryTools.map((tool, index) => (
              <div key={index}>{renderToolCard(tool, '#22ccff')}</div>
            ))}
          </div>
        </section>

        {/* State Tools */}
        <section className="mb-12" id="state">
          <div className="flex items-center gap-3 mb-2">
            <Settings className="h-6 w-6 text-[#9b59b6]" />
            <h2 className="text-2xl font-display text-stellar-bright">{t.stateTools}</h2>
          </div>
          <p className="text-sm text-stellar-dim mb-6 font-mono">{t.stateDesc}</p>

          <div className="grid gap-6 lg:grid-cols-2">
            {stateTools.map((tool, index) => (
              <div key={index}>{renderToolCard(tool, '#9b59b6')}</div>
            ))}
          </div>
        </section>

        {/* Supported Modes */}
        <section id="modes">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-6 w-6 text-[#ffcc22]" />
            <h2 className="text-2xl font-display text-stellar-bright">{t.modes}</h2>
          </div>
          <div className="bg-void-absolute border border-stellar-faint/10 p-6">
            <div className="grid grid-cols-3 gap-4">
              {['autopilot', 'ultrapilot', 'swarm', 'pipeline', 'ralph', 'ultrawork', 'ultraqa', 'ecomode', 'ralplan'].map((mode) => (
                <code key={mode} className="font-mono text-sm text-[#ffcc22]">
                  {mode}
                </code>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
