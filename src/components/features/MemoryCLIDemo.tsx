'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { memoryCommands } from '@/lib/data/features';
import Link from 'next/link';

interface MemoryCLIDemoProps {
  locale: string;
}

interface OutputLine {
  text: string;
  type: 'command' | 'output' | 'success' | 'info';
  delay?: number;
}

const commandOutputs: Record<string, OutputLine[]> = {
  search: [
    { text: '$ /diverga:memory search "메타분석 방법론"', type: 'command' },
    { text: '', type: 'output', delay: 300 },
    { text: 'Searching memories...', type: 'info', delay: 500 },
    { text: '', type: 'output', delay: 300 },
    { text: '✓ Found 3 relevant memories:', type: 'success', delay: 400 },
    { text: '', type: 'output', delay: 100 },
    { text: '[1] Decision Log (2024-01-15)', type: 'output', delay: 100 },
    { text: '    "Selected Two-Stage SEM for mediation analysis"', type: 'info', delay: 100 },
    { text: '    Context: Meta-analysis methodology choice', type: 'info', delay: 100 },
    { text: '', type: 'output', delay: 100 },
    { text: '[2] Research Notes (2024-01-12)', type: 'output', delay: 100 },
    { text: '    "효과크기 변환: Cohen\'s d → Fisher\'s Z"', type: 'info', delay: 100 },
    { text: '    Tags: meta-analysis, effect-size', type: 'info', delay: 100 },
    { text: '', type: 'output', delay: 100 },
    { text: '[3] Project Context (2024-01-10)', type: 'output', delay: 100 },
    { text: '    "Research Question: How does AI improve learning?"', type: 'info', delay: 100 },
    { text: '    Framework: Technology Acceptance Model', type: 'info', delay: 100 },
  ],
  list: [
    { text: '$ /diverga:memory list --type=decision', type: 'command' },
    { text: '', type: 'output', delay: 300 },
    { text: 'Decision Logs for current project:', type: 'info', delay: 400 },
    { text: '', type: 'output', delay: 200 },
    { text: '┌─────────────────────────────────────────────────┐', type: 'output', delay: 50 },
    { text: '│ ID        │ Date       │ Decision             │', type: 'output', delay: 50 },
    { text: '├─────────────────────────────────────────────────┤', type: 'output', delay: 50 },
    { text: '│ dec_001   │ 2024-01-15 │ Theoretical Framework│', type: 'output', delay: 50 },
    { text: '│           │            │ (TAM, T-Score: 0.85) │', type: 'info', delay: 50 },
    { text: '│ dec_002   │ 2024-01-16 │ Analysis Method      │', type: 'output', delay: 50 },
    { text: '│           │            │ (Meta-SEM, T=0.45)   │', type: 'info', delay: 50 },
    { text: '│ dec_003   │ 2024-01-18 │ Quality Threshold    │', type: 'output', delay: 50 },
    { text: '│           │            │ (≥90%, T=1.0)        │', type: 'info', delay: 50 },
    { text: '└─────────────────────────────────────────────────┘', type: 'output', delay: 50 },
    { text: '', type: 'output', delay: 100 },
    { text: '✓ 3 decision logs found', type: 'success', delay: 200 },
  ],
  recall: [
    { text: '$ /diverga:memory recall dec_002', type: 'command' },
    { text: '', type: 'output', delay: 300 },
    { text: 'Recalling memory dec_002...', type: 'info', delay: 400 },
    { text: '', type: 'output', delay: 300 },
    { text: '╔═══════════════════════════════════════════════╗', type: 'output', delay: 50 },
    { text: '║ Decision Log: dec_002                         ║', type: 'success', delay: 50 },
    { text: '╠═══════════════════════════════════════════════╣', type: 'output', delay: 50 },
    { text: '║ Date: 2024-01-16 15:30:00                     ║', type: 'info', delay: 50 },
    { text: '║ Checkpoint: RESEARCH_METHOD_SELECTION         ║', type: 'info', delay: 50 },
    { text: '║ T-Score: 0.45 (Balanced)                      ║', type: 'info', delay: 50 },
    { text: '╠═══════════════════════════════════════════════╣', type: 'output', delay: 50 },
    { text: '║ Decision: Two-Stage Meta-Analytic SEM        ║', type: 'output', delay: 50 },
    { text: '║                                               ║', type: 'output', delay: 50 },
    { text: '║ Rationale:                                    ║', type: 'output', delay: 50 },
    { text: '║ • Allows for mediation analysis               ║', type: 'info', delay: 50 },
    { text: '║ • Handles multiple effect sizes               ║', type: 'info', delay: 50 },
    { text: '║ • Better than traditional meta-analysis       ║', type: 'info', delay: 50 },
    { text: '║                                               ║', type: 'output', delay: 50 },
    { text: '║ Alternatives Considered:                      ║', type: 'output', delay: 50 },
    { text: '║ 1. Traditional meta-analysis (T=1.0)          ║', type: 'info', delay: 50 },
    { text: '║ 2. MASEM pooled correlation (T=0.45) ← chosen ║', type: 'success', delay: 50 },
    { text: '║ 3. Individual patient data (T=0.2)            ║', type: 'info', delay: 50 },
    { text: '╚═══════════════════════════════════════════════╝', type: 'output', delay: 50 },
  ],
  export: [
    { text: '$ /diverga:memory export --format=md', type: 'command' },
    { text: '', type: 'output', delay: 300 },
    { text: 'Exporting memories to Markdown...', type: 'info', delay: 400 },
    { text: '', type: 'output', delay: 300 },
    { text: '[1/5] Exporting Project Context... ✓', type: 'output', delay: 200 },
    { text: '[2/5] Exporting Session Memories... ✓', type: 'output', delay: 200 },
    { text: '[3/5] Exporting Decision Logs... ✓', type: 'output', delay: 200 },
    { text: '[4/5] Exporting Research Notes... ✓', type: 'output', delay: 200 },
    { text: '[5/5] Exporting Tool Preferences... ✓', type: 'output', delay: 200 },
    { text: '', type: 'output', delay: 200 },
    { text: '✓ Successfully exported to:', type: 'success', delay: 300 },
    { text: '  .diverga/exports/memories_2024-01-20.md', type: 'info', delay: 100 },
    { text: '', type: 'output', delay: 100 },
    { text: 'Summary:', type: 'output', delay: 100 },
    { text: '  - Project Context: 1 entry', type: 'info', delay: 50 },
    { text: '  - Session Memories: 7 entries', type: 'info', delay: 50 },
    { text: '  - Decision Logs: 3 entries', type: 'info', delay: 50 },
    { text: '  - Research Notes: 12 entries', type: 'info', delay: 50 },
    { text: '  - Tool Preferences: 5 entries', type: 'info', delay: 50 },
    { text: '', type: 'output', delay: 100 },
    { text: 'Total: 28 memory entries exported', type: 'success', delay: 100 },
  ],
};

export function MemoryCLIDemo({ locale }: MemoryCLIDemoProps) {
  const [activeTab, setActiveTab] = useState('search');
  const [displayedLines, setDisplayedLines] = useState<OutputLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  // Type out command output
  useEffect(() => {
    setDisplayedLines([]);
    setIsTyping(true);

    const lines = commandOutputs[activeTab] || [];
    let currentIndex = 0;
    let totalDelay = 0;

    const typeNextLine = () => {
      if (currentIndex < lines.length) {
        const line = lines[currentIndex];
        const lineDelay = line.delay || 50;
        totalDelay += lineDelay;

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line]);
          currentIndex++;
          typeNextLine();
        }, lineDelay);
      } else {
        setIsTyping(false);
      }
    };

    typeNextLine();
  }, [activeTab]);

  const getLineColor = (type: OutputLine['type']) => {
    switch (type) {
      case 'command':
        return 'text-tscore-divergent';
      case 'success':
        return 'text-tscore-creative';
      case 'info':
        return 'text-stellar-dim';
      default:
        return 'text-stellar-core';
    }
  };

  const tabs = [
    { id: 'search', label: { en: 'Search', ko: '검색' }, icon: '🔍' },
    { id: 'list', label: { en: 'List', ko: '목록' }, icon: '📋' },
    { id: 'recall', label: { en: 'Recall', ko: '불러오기' }, icon: '💾' },
    { id: 'export', label: { en: 'Export', ko: '내보내기' }, icon: '📤' },
  ];

  return (
    <section className="py-12">
      {/* Section header */}
      <div className="mb-8 text-center">
        <h2 className="font-display text-heading-2 text-stellar-core mb-4">
          {locale === 'ko' ? 'CLI 명령어 데모' : 'CLI Commands Demo'}
        </h2>
        <p className="text-body text-stellar-dim max-w-3xl mx-auto">
          {locale === 'ko'
            ? 'Diverga CLI를 통해 메모리를 검색, 관리, 내보내기 할 수 있습니다.'
            : 'Search, manage, and export memories through the Diverga CLI.'}
        </p>
      </div>

      {/* Terminal container */}
      <div className="max-w-4xl mx-auto">
        <div className="void-terminal overflow-hidden">
          {/* Terminal header */}
          <div className="void-terminal-header">
            <div className="void-terminal-dot void-terminal-dot-red" />
            <div className="void-terminal-dot void-terminal-dot-yellow" />
            <div className="void-terminal-dot void-terminal-dot-green" />
            <span className="ml-4 font-mono text-micro text-stellar-faint">
              diverga-cli — memory
            </span>
            {isTyping && (
              <span className="ml-2 animate-pulse text-feature-memory">●</span>
            )}
          </div>

          {/* Tab navigation */}
          <div className="flex border-b border-stellar-faint/20 bg-void-surface">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 font-mono text-caption transition-colors ${
                  activeTab === tab.id
                    ? 'text-feature-memory border-b-2 border-feature-memory bg-feature-memory/10'
                    : 'text-stellar-dim hover:text-stellar-core hover:bg-void-elevated'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{locale === 'ko' ? tab.label.ko : tab.label.en}</span>
              </button>
            ))}
          </div>

          {/* Terminal content */}
          <div
            ref={terminalRef}
            className="void-terminal-content void-scrollbar"
            style={{ height: '400px' }}
          >
            <AnimatePresence mode="wait">
              {displayedLines.map((line, i) => (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                  className={`whitespace-pre-wrap font-mono text-sm ${getLineColor(line.type)}`}
                >
                  {line.text}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing cursor */}
            {isTyping && (
              <motion.span
                className="inline-block w-2 h-4 bg-feature-memory ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </div>

        {/* Command reference */}
        <div className="mt-6 border border-stellar-faint/20 bg-void-elevated p-6">
          <h3 className="font-display text-lg text-stellar-core mb-4">
            {locale === 'ko' ? '사용 가능한 명령어' : 'Available Commands'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {memoryCommands.map((cmd, i) => {
              const localizedDesc = cmd.description[locale as keyof typeof cmd.description] || cmd.description.en;
              return (
                <div key={i} className="border-l-2 border-feature-memory/30 pl-3">
                  <code className="text-caption text-tscore-creative font-mono">
                    {cmd.command}
                  </code>
                  <p className="text-micro text-stellar-dim mt-1">
                    {localizedDesc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/playground`}
            className="inline-flex items-center gap-3 border border-feature-memory/30 px-6 py-3 font-display text-caption uppercase tracking-widest text-feature-memory hover:border-feature-memory hover:shadow-glow-memory transition-all duration-300"
          >
            <span>{locale === 'ko' ? '플레이그라운드에서 사용해보기' : 'Try in Playground'}</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
