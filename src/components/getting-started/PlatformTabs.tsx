'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Copy, Terminal, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

export type PlatformType = 'claude-code' | 'codex-cli' | 'opencode';

interface PlatformTabsProps {
  locale: string;
}

interface PlatformConfig {
  id: PlatformType;
  name: string;
  icon: string;
  description: string;
  descriptionKo: string;
  installSteps: {
    title: string;
    titleKo: string;
    commands: string[];
  }[];
  setupCommand: string;
}

const platforms: PlatformConfig[] = [
  {
    id: 'claude-code',
    name: 'Claude Code',
    icon: '🤖',
    description: 'Anthropic\'s official CLI for Claude (Recommended)',
    descriptionKo: 'Anthropic 공식 Claude CLI (권장)',
    installSteps: [
      {
        title: 'Install Claude Code',
        titleKo: 'Claude Code 설치',
        commands: [
          '# macOS',
          'brew install anthropics/tap/claude-code',
          '',
          '# Windows',
          'winget install Anthropic.ClaudeCode',
          '',
          '# Linux',
          'curl -fsSL https://claude.ai/install.sh | bash',
        ],
      },
      {
        title: 'Add Diverga Plugin',
        titleKo: 'Diverga 플러그인 추가',
        commands: [
          '/plugin marketplace add https://github.com/HosungYou/Diverga',
          '/plugin install diverga',
        ],
      },
      {
        title: 'Configure Diverga',
        titleKo: 'Diverga 설정',
        commands: ['/diverga:setup'],
      },
    ],
    setupCommand: '/diverga:setup',
  },
  {
    id: 'codex-cli',
    name: 'Codex CLI',
    icon: '⚡',
    description: 'OpenAI\'s command-line interface',
    descriptionKo: 'OpenAI 명령줄 인터페이스',
    installSteps: [
      {
        title: 'Install Codex CLI (if not installed)',
        titleKo: 'Codex CLI 설치 (미설치 시)',
        commands: ['npm install -g @openai/codex-cli'],
      },
      {
        title: 'Install Diverga (Choose Method)',
        titleKo: 'Diverga 설치 (방법 선택)',
        commands: [
          '# Method 1: Interactive TUI (Recommended)',
          'npx @diverga/codex-setup',
          '',
          '# Method 2: One-line Script',
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-codex.sh | bash',
        ],
      },
      {
        title: 'Verify Installation',
        titleKo: '설치 확인',
        commands: [
          '# List all 40 agents',
          'diverga-codex list',
          '',
          '# Show agent details',
          'diverga-codex agent A1',
        ],
      },
    ],
    setupCommand: 'diverga-codex setup',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    icon: '🌐',
    description: 'Community-driven open coding assistant',
    descriptionKo: '커뮤니티 기반 오픈 코딩 어시스턴트',
    installSteps: [
      {
        title: 'Install OpenCode (if not installed)',
        titleKo: 'OpenCode 설치 (미설치 시)',
        commands: ['npm install -g opencode'],
      },
      {
        title: 'Install Diverga (One-line)',
        titleKo: 'Diverga 설치 (원라인)',
        commands: [
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-opencode.sh | bash',
        ],
      },
      {
        title: 'Start Using',
        titleKo: '사용 시작',
        commands: [
          '# List all agents',
          'opencode "diverga:list"',
          '',
          '# Show agent details',
          'opencode "diverga:agent A1"',
        ],
      },
    ],
    setupCommand: 'opencode "diverga:list"',
  },
];

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
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('claude-code');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform)!;

  return (
    <div className="space-y-6">
      {/* Platform Selector */}
      <div className="void-card p-4">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-4 w-4 text-tscore-creative" />
          <span className="font-mono text-micro uppercase tracking-wider text-stellar-dim">
            {locale === 'ko' ? '플랫폼 선택' : 'Select Platform'}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={cn(
                'flex items-center gap-3 px-4 py-3 border transition-all',
                selectedPlatform === platform.id
                  ? 'bg-void-elevated border-tscore-creative/50 shadow-glow-sm'
                  : 'bg-void-surface border-stellar-faint/20 hover:border-stellar-dim'
              )}
            >
              <span className="text-xl">{platform.icon}</span>
              <div className="text-left">
                <div
                  className={cn(
                    'font-mono text-caption font-medium',
                    selectedPlatform === platform.id
                      ? 'text-tscore-creative'
                      : 'text-stellar-bright'
                  )}
                >
                  {platform.name}
                </div>
                <div className="text-micro text-stellar-faint">
                  {locale === 'ko' ? platform.descriptionKo : platform.description}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Platform-specific Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPlatform}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {currentPlatform.installSteps.map((step, index) => (
            <div key={index} className="void-card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-tscore-creative/10 border border-tscore-creative/30 shrink-0">
                  <span className="font-mono text-lg font-bold text-tscore-creative">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="void-heading-3 text-stellar-core">
                    {locale === 'ko' ? step.titleKo : step.title}
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
      </AnimatePresence>

      {/* Model Mapping Info */}
      <div className="void-card p-6 border-stellar-faint/30">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="h-4 w-4 text-category-c" />
          <span className="font-mono text-micro uppercase tracking-wider text-stellar-dim">
            {locale === 'ko' ? '모델 매핑 정보' : 'Model Mapping Info'}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-caption">
            <thead>
              <tr className="border-b border-stellar-faint/20">
                <th className="text-left py-2 px-3 font-mono text-stellar-dim">
                  {locale === 'ko' ? '에이전트 티어' : 'Agent Tier'}
                </th>
                <th className="text-left py-2 px-3 font-mono text-stellar-dim">Claude Code</th>
                <th className="text-left py-2 px-3 font-mono text-stellar-dim">Codex CLI</th>
                <th className="text-left py-2 px-3 font-mono text-stellar-dim">OpenCode</th>
              </tr>
            </thead>
            <tbody className="text-stellar-bright">
              <tr className="border-b border-stellar-faint/10">
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-category-a" />
                    HIGH
                  </span>
                </td>
                <td className="py-2 px-3 font-mono text-micro">opus</td>
                <td className="py-2 px-3 font-mono text-micro">o1</td>
                <td className="py-2 px-3 font-mono text-micro">o1</td>
              </tr>
              <tr className="border-b border-stellar-faint/10">
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-category-c" />
                    MEDIUM
                  </span>
                </td>
                <td className="py-2 px-3 font-mono text-micro">sonnet</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-4</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-4</td>
              </tr>
              <tr>
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-category-e" />
                    LOW
                  </span>
                </td>
                <td className="py-2 px-3 font-mono text-micro">haiku</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-3.5-turbo</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-3.5-turbo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlatformTabs;
