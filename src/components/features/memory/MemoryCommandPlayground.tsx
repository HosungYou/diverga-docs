'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Terminal, Play, RotateCcw } from 'lucide-react';

interface MemoryCommandPlaygroundProps {
  locale: string;
}

interface Command {
  input: string;
  output: string[];
  delay?: number;
}

export function MemoryCommandPlayground({ locale }: MemoryCommandPlaygroundProps) {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showOutput, setShowOutput] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const commands: Command[] = [
    {
      input: 'notepad_write_priority("Research: AI chatbots for language learning effectiveness")',
      output: [
        '✓ Priority context saved',
        '→ Will auto-load on next session',
        '',
        'Tip: Keep under 500 chars for optimal loading',
      ],
    },
    {
      input: 'notepad_write_working("Today: Completed meta-analysis of 15 RCT studies")',
      output: [
        '✓ Working memory updated',
        '→ Auto-pruned after 7 days',
        '',
        'Timestamp: 2025-02-05T10:30:00Z',
      ],
    },
    {
      input: 'notepad_read(section: "all")',
      output: [
        '=== PRIORITY CONTEXT ===',
        'Research: AI chatbots for language learning effectiveness',
        '',
        '=== WORKING MEMORY (3 entries) ===',
        '[2025-02-05] Completed meta-analysis of 15 RCT studies',
        '[2025-02-04] Effect size: d = 0.68 (moderate)',
        '[2025-02-03] Started PRISMA screening',
        '',
        '=== MANUAL ARCHIVE (12 entries) ===',
        'Sociocultural theory supports conversational AI design...',
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const command = commands[currentCommand];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < command.input.length) {
        setTypedText(command.input.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => {
            if (currentCommand < commands.length - 1) {
              setCurrentCommand(currentCommand + 1);
              setTypedText('');
              setShowOutput(false);
            } else {
              setIsPlaying(false);
            }
          }, 2000);
        }, 500);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [isPlaying, currentCommand]);

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentCommand(0);
    setTypedText('');
    setShowOutput(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentCommand(0);
    setTypedText('');
    setShowOutput(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-stellar-dim">
          <Terminal className="h-4 w-4" />
          <span className="font-mono text-micro">
            {locale === 'ko' ? 'CLI 명령어 데모' : 'CLI Command Demo'}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className="flex items-center gap-2 border border-stellar-faint/20 bg-void-elevated px-3 py-1.5 text-micro text-stellar-core transition-colors hover:bg-void-surface disabled:opacity-50"
          >
            <Play className="h-3 w-3" />
            {locale === 'ko' ? '재생' : 'Play'}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 border border-stellar-faint/20 bg-void-elevated px-3 py-1.5 text-micro text-stellar-core transition-colors hover:bg-void-surface"
          >
            <RotateCcw className="h-3 w-3" />
            {locale === 'ko' ? '리셋' : 'Reset'}
          </button>
        </div>
      </div>

      <div className="border border-stellar-faint/10 bg-[#0a0a0a] p-6 font-mono text-sm">
        <div className="mb-4 flex items-center gap-2 border-b border-stellar-faint/10 pb-4">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-micro text-stellar-dim">
            {locale === 'ko' ? '터미널' : 'terminal'}
          </span>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-[#9b59b6]">$</span>
            <div className="flex-1">
              <span className="text-stellar-core">{typedText}</span>
              {isPlaying && !showOutput && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block h-4 w-2 bg-stellar-core"
                />
              )}
            </div>
          </div>

          {showOutput && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="ml-4 space-y-1"
            >
              {commands[currentCommand].output.map((line, idx) => (
                <div
                  key={idx}
                  className={
                    line.startsWith('✓')
                      ? 'text-[#27c93f]'
                      : line.startsWith('→')
                      ? 'text-[#9b59b6]'
                      : line.startsWith('===')
                      ? 'text-[#ffbd2e]'
                      : line.startsWith('[')
                      ? 'text-stellar-dim'
                      : 'text-stellar-faint'
                  }
                >
                  {line || '\u00A0'}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <div className="border border-stellar-faint/10 bg-void-elevated p-4">
        <h4 className="mb-2 font-mono text-micro uppercase text-stellar-core">
          {locale === 'ko' ? '주요 명령어' : 'Key Commands'}
        </h4>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            { cmd: 'notepad_read', desc: locale === 'ko' ? '메모리 읽기' : 'Read memory' },
            { cmd: 'notepad_write_priority', desc: locale === 'ko' ? '우선순위 저장' : 'Save priority' },
            { cmd: 'notepad_write_working', desc: locale === 'ko' ? '작업 메모리 저장' : 'Save working' },
            { cmd: 'notepad_write_manual', desc: locale === 'ko' ? '수동 아카이브 저장' : 'Save manual' },
          ].map((item) => (
            <div key={item.cmd} className="flex items-center justify-between gap-2 text-micro">
              <span className="font-mono text-tscore-creative">{item.cmd}</span>
              <span className="text-stellar-dim">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
