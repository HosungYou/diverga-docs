'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Sparkles } from 'lucide-react';

interface PlatformTabsProps {
  locale: string;
}

// Why Claude Code is the platform for Diverga
const claudeCodeAdvantages = {
  en: [
    {
      title: 'Task Tool Support',
      description: 'Execute 24 specialized agents via Task tool with proper model routing (opus/sonnet/haiku)',
    },
    {
      title: 'AskUserQuestion Tool',
      description: 'Interactive UI with clickable options for human checkpoints - not just text prompts',
    },
    {
      title: 'Tool-Level Checkpoint Enforcement',
      description: 'System blocks progression until user approves - impossible to bypass checkpoints',
    },
    {
      title: 'Parallel Agent Execution',
      description: 'Run multiple agents simultaneously for faster research workflows',
    },
  ],
  ko: [
    {
      title: 'Task Tool 지원',
      description: '24개 전문 에이전트를 Task tool로 실행, 적절한 모델 라우팅 (opus/sonnet/haiku)',
    },
    {
      title: 'AskUserQuestion Tool',
      description: '클릭 가능한 옵션이 있는 인터랙티브 UI - 텍스트 프롬프트가 아닌 진정한 체크포인트',
    },
    {
      title: '도구 수준 체크포인트 강제',
      description: '사용자 승인 전까지 시스템이 진행을 차단 - 체크포인트 우회 불가능',
    },
    {
      title: '병렬 에이전트 실행',
      description: '여러 에이전트를 동시에 실행하여 연구 워크플로우 가속화',
    },
  ],
};

const installSteps = {
  en: [
    {
      title: 'Install Claude Code',
      commands: [
        '# macOS / Linux (Recommended)',
        'curl -fsSL https://claude.ai/install.sh | bash',
        '',
        '# macOS (Homebrew)',
        'brew install --cask claude-code',
        '',
        '# Windows',
        'winget install Anthropic.ClaudeCode',
      ],
    },
    {
      title: 'Add Diverga Plugin',
      commands: [
        '# Run these inside Claude Code',
        '/plugin marketplace add https://github.com/HosungYou/Diverga',
        '/plugin install diverga',
      ],
    },
    {
      title: 'Configure Diverga',
      commands: ['/diverga:setup'],
    },
  ],
  ko: [
    {
      title: 'Claude Code 설치',
      commands: [
        '# macOS / Linux (권장)',
        'curl -fsSL https://claude.ai/install.sh | bash',
        '',
        '# macOS (Homebrew)',
        'brew install --cask claude-code',
        '',
        '# Windows',
        'winget install Anthropic.ClaudeCode',
      ],
    },
    {
      title: 'Diverga 플러그인 추가',
      commands: [
        '# Claude Code 내부에서 실행',
        '/plugin marketplace add https://github.com/HosungYou/Diverga',
        '/plugin install diverga',
      ],
    },
    {
      title: 'Diverga 설정',
      commands: ['/diverga:setup'],
    },
  ],
};

function TerminalBlock({
  commands,
  stepIndex,
  copiedStep,
  onCopy,
}: {
  commands: string[];
  stepIndex: number;
  copiedStep: number | null;
  onCopy: (text: string, step: number) => void;
}) {
  const copyableCommands = commands.filter(
    (cmd) => cmd && !cmd.startsWith('#') && !cmd.startsWith('{') && !cmd.startsWith('}') && !cmd.includes('"')
  );
  const copyText = copyableCommands.join('\n');

  return (
    <div className="void-terminal overflow-hidden">
      <div className="void-terminal-header">
        <div className="flex items-center gap-2">
          <div className="void-terminal-dot void-terminal-dot-red" />
          <div className="void-terminal-dot void-terminal-dot-yellow" />
          <div className="void-terminal-dot void-terminal-dot-green" />
        </div>
        <span className="text-micro text-stellar-faint ml-4">terminal</span>
      </div>
      <div className="p-4 relative group">
        <pre className="font-mono text-caption text-stellar-bright overflow-x-auto whitespace-pre-wrap">
          {commands.map((cmd, i) => {
            const isComment = cmd.startsWith('#');
            const isEmpty = !cmd.trim();
            const isJson = cmd.startsWith('{') || cmd.startsWith('}') || cmd.includes('"');

            if (isEmpty) return <br key={i} />;

            return (
              <div key={i} className={isComment ? 'text-stellar-faint/60' : ''}>
                {!isComment && !isJson && (
                  <span className="text-tscore-creative">$ </span>
                )}
                {cmd}
              </div>
            );
          })}
        </pre>
        {copyableCommands.length > 0 && (
          <button
            onClick={() => onCopy(copyText, stepIndex)}
            className="absolute top-3 right-3 p-2 bg-void-elevated border border-stellar-faint/20 hover:border-stellar-dim opacity-0 group-hover:opacity-100 transition-all"
          >
            {copiedStep === stepIndex ? (
              <Check className="h-4 w-4 text-checkpoint-complete" />
            ) : (
              <Copy className="h-4 w-4 text-stellar-dim" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export function PlatformTabs({ locale }: PlatformTabsProps) {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = locale === 'ko' ? installSteps.ko : installSteps.en;

  return (
    <div className="space-y-6">
      {/* Claude Code Recommendation Banner */}
      <div className="void-card p-4 border-checkpoint-complete/50 bg-checkpoint-complete/5">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-xl">⭐</span>
          <p className="text-caption text-checkpoint-complete font-medium">
            {locale === 'ko'
              ? 'Diverga v11.0은 Claude Code 전용입니다'
              : 'Diverga v11.0 is Claude Code exclusive'}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-8">
          {(locale === 'ko' ? claudeCodeAdvantages.ko : claudeCodeAdvantages.en).map((adv, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-checkpoint-complete mt-0.5">✓</span>
              <div>
                <span className="text-caption text-stellar-bright font-medium">{adv.title}</span>
                <p className="text-micro text-stellar-dim">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Installation Steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-6"
      >
        {steps.map((step, index) => (
          <div key={index} className="void-card p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 flex items-center justify-center bg-tscore-creative/10 border border-tscore-creative/30 shrink-0">
                <span className="font-mono text-lg font-bold text-tscore-creative">
                  {index + 1}
                </span>
              </div>
              <div>
                <h3 className="void-heading-3 text-stellar-core">
                  {step.title}
                </h3>
              </div>
            </div>
            <div className="ml-14">
              <TerminalBlock
                commands={step.commands}
                stepIndex={index}
                copiedStep={copiedStep}
                onCopy={copyToClipboard}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default PlatformTabs;
