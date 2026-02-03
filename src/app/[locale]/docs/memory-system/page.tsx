'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Brain, Database, Clock, FileText, Settings, ArrowRight, Terminal, Sparkles } from 'lucide-react';
import { DocsBreadcrumb } from '@/components/docs';

export default function MemorySystemPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Memory System',
      badge: 'NEW in v6.8',
      description: 'Research context that persists across sessions. No more re-explaining your project every time.',
      painPoint: 'The Problem',
      painPointDesc: 'Every AI session starts from scratch. You waste time re-explaining your research question, theoretical framework, and methodological choices.',
      solution: 'The Solution',
      solutionDesc: 'Diverga\'s Memory System automatically captures and retrieves relevant context, so your AI assistant remembers your research journey.',
      memoryTypes: 'Five Memory Types',
      memoryTypesDesc: 'Each type serves a specific purpose in maintaining your research context:',
      types: [
        {
          icon: FileText,
          name: 'Project Context',
          desc: 'Research question, domain, scope constraints',
          scope: 'Per project',
          duration: 'Permanent',
          color: '#ff6b6b',
        },
        {
          icon: Clock,
          name: 'Session Memory',
          desc: 'Conversation highlights, key decisions',
          scope: 'Per session',
          duration: '7 days',
          color: '#ffb347',
        },
        {
          icon: Sparkles,
          name: 'Decision Log',
          desc: 'Checkpoint selections, rationale',
          scope: 'Per project',
          duration: 'Permanent',
          color: '#ffe66d',
        },
        {
          icon: Database,
          name: 'Research Notes',
          desc: 'Findings, insights, literature notes',
          scope: 'Per project',
          duration: 'Permanent',
          color: '#4ecdc4',
        },
        {
          icon: Settings,
          name: 'Tool Preferences',
          desc: 'Analysis tools, visualization styles',
          scope: 'Global',
          duration: 'Permanent',
          color: '#95e1d3',
        },
      ],
      howItWorks: 'How It Works',
      lifecycle: [
        { stage: 'Session Start', desc: 'Relevant memories auto-loaded' },
        { stage: 'Checkpoint', desc: 'Decisions captured with context' },
        { stage: 'Session End', desc: 'Key insights saved' },
        { stage: 'Agent Complete', desc: 'Outputs summarized and stored' },
      ],
      cliCommands: 'CLI Commands',
      commands: [
        { cmd: '/memory search "keyword"', desc: 'Search across all memories' },
        { cmd: '/memory list', desc: 'List recent memories' },
        { cmd: '/memory save "note"', desc: 'Manually save a note' },
        { cmd: '/memory clear session', desc: 'Clear session memories' },
      ],
      nextSteps: 'Learn More',
    },
    ko: {
      title: '메모리 시스템',
      badge: 'v6.8 신규',
      description: '세션을 넘어 지속되는 연구 맥락. 더 이상 매번 프로젝트를 재설명할 필요가 없습니다.',
      painPoint: '문제점',
      painPointDesc: '모든 AI 세션은 처음부터 시작합니다. 연구 질문, 이론적 프레임워크, 방법론적 선택을 재설명하느라 시간을 낭비합니다.',
      solution: '해결책',
      solutionDesc: 'Diverga의 메모리 시스템은 관련 맥락을 자동으로 캡처하고 검색하여, AI 어시스턴트가 연구 여정을 기억합니다.',
      memoryTypes: '5가지 메모리 타입',
      memoryTypesDesc: '각 타입은 연구 맥락 유지에 특정 목적을 수행합니다:',
      types: [
        {
          icon: FileText,
          name: '프로젝트 맥락',
          desc: '연구 질문, 도메인, 범위 제약',
          scope: '프로젝트별',
          duration: '영구',
          color: '#ff6b6b',
        },
        {
          icon: Clock,
          name: '세션 메모리',
          desc: '대화 하이라이트, 주요 결정',
          scope: '세션별',
          duration: '7일',
          color: '#ffb347',
        },
        {
          icon: Sparkles,
          name: '결정 로그',
          desc: '체크포인트 선택, 근거',
          scope: '프로젝트별',
          duration: '영구',
          color: '#ffe66d',
        },
        {
          icon: Database,
          name: '연구 노트',
          desc: '발견, 인사이트, 문헌 노트',
          scope: '프로젝트별',
          duration: '영구',
          color: '#4ecdc4',
        },
        {
          icon: Settings,
          name: '도구 선호도',
          desc: '분석 도구, 시각화 스타일',
          scope: '전역',
          duration: '영구',
          color: '#95e1d3',
        },
      ],
      howItWorks: '작동 방식',
      lifecycle: [
        { stage: '세션 시작', desc: '관련 메모리 자동 로드' },
        { stage: '체크포인트', desc: '맥락과 함께 결정 캡처' },
        { stage: '세션 종료', desc: '주요 인사이트 저장' },
        { stage: '에이전트 완료', desc: '출력 요약 및 저장' },
      ],
      cliCommands: 'CLI 명령어',
      commands: [
        { cmd: '/memory search "키워드"', desc: '모든 메모리 검색' },
        { cmd: '/memory list', desc: '최근 메모리 나열' },
        { cmd: '/memory save "노트"', desc: '수동으로 노트 저장' },
        { cmd: '/memory clear session', desc: '세션 메모리 삭제' },
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
        <div className="flex items-start gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
            <Brain className="h-6 w-6 text-[#44ffaa]" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-display text-stellar-core">{t.title}</h1>
              <span className="px-2 py-1 text-xs font-mono uppercase bg-[#44ffaa]/20 text-[#44ffaa] border border-[#44ffaa]/30">
                {t.badge}
              </span>
            </div>
            <p className="text-stellar-dim">{t.description}</p>
          </div>
        </div>

        {/* Pain Point & Solution */}
        <section className="grid gap-4 md:grid-cols-2 mb-12" id="overview">
          <div className="p-6 bg-void-elevated border border-[#ff3366]/30">
            <h2 className="text-lg font-display text-[#ff3366] mb-2">{t.painPoint}</h2>
            <p className="text-stellar-dim text-sm">{t.painPointDesc}</p>
          </div>
          <div className="p-6 bg-void-elevated border border-[#44ffaa]/30">
            <h2 className="text-lg font-display text-[#44ffaa] mb-2">{t.solution}</h2>
            <p className="text-stellar-dim text-sm">{t.solutionDesc}</p>
          </div>
        </section>

        {/* Memory Types */}
        <section className="mb-12" id="memory-types">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.memoryTypes}</h2>
          <p className="text-stellar-dim mb-6">{t.memoryTypesDesc}</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-void-elevated border border-stellar-faint/10 hover:border-stellar-faint/30 transition-colors"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border mb-3"
                  style={{
                    backgroundColor: `${type.color}15`,
                    borderColor: `${type.color}30`,
                  }}
                >
                  <type.icon className="h-5 w-5" style={{ color: type.color }} />
                </div>
                <h3 className="font-medium text-stellar-bright mb-1">{type.name}</h3>
                <p className="text-sm text-stellar-dim mb-3">{type.desc}</p>
                <div className="flex gap-4 text-xs font-mono">
                  <span className="text-stellar-faint">
                    {locale === 'ko' ? '범위' : 'Scope'}: <span className="text-stellar-dim">{type.scope}</span>
                  </span>
                  <span className="text-stellar-faint">
                    {locale === 'ko' ? '기간' : 'Duration'}: <span className="text-stellar-dim">{type.duration}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12" id="how-it-works">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.howItWorks}</h2>

          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-6 left-6 right-6 h-px bg-gradient-to-r from-[#44ffaa] via-[#22ccff] to-[#9b59b6] hidden md:block" />

            <div className="grid gap-4 md:grid-cols-4">
              {t.lifecycle.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className="relative z-10 flex h-12 w-12 items-center justify-center bg-void-deep border-2 font-mono font-bold mb-3"
                      style={{
                        borderColor: ['#44ffaa', '#22ccff', '#ffcc22', '#9b59b6'][index],
                        color: ['#44ffaa', '#22ccff', '#ffcc22', '#9b59b6'][index],
                      }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="font-medium text-stellar-bright text-sm mb-1">{item.stage}</h3>
                    <p className="text-xs text-stellar-dim">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLI Commands */}
        <section className="mb-12" id="cli">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.cliCommands}</h2>

          <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <Terminal className="h-4 w-4 text-stellar-faint" />
              <span className="font-mono text-xs text-stellar-faint">memory-commands</span>
            </div>
            <div className="p-4 space-y-3">
              {t.commands.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <code className="font-mono text-sm text-[#44ffaa] whitespace-nowrap">{item.cmd}</code>
                  <span className="text-sm text-stellar-dim">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.nextSteps}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/${locale}/docs/memory-system/types`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#44ffaa]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
                <Database className="h-5 w-5 text-[#44ffaa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? '메모리 타입 상세' : 'Memory Types Detail'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '각 타입 심층 분석' : 'Deep dive into each type'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#44ffaa] transition-colors" />
            </Link>

            <Link
              href={`/${locale}/docs/memory-system/commands`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#22ccff]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#22ccff]/10 border border-[#22ccff]/30">
                <Terminal className="h-5 w-5 text-[#22ccff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? 'CLI 명령어 레퍼런스' : 'CLI Commands Reference'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '전체 명령어 문서' : 'Full command documentation'}
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
