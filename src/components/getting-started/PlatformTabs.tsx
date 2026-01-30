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
  warning?: string;
  warningKo?: string;
  installSteps: {
    title: string;
    titleKo: string;
    commands: string[];
    commandsKo?: string[];
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
        commandsKo: [
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
          '# Run these inside Claude Code',
          '/plugin marketplace add https://github.com/HosungYou/Diverga',
          '/plugin install diverga',
        ],
        commandsKo: [
          '# Claude Code 내부에서 실행',
          '/plugin marketplace add https://github.com/HosungYou/Diverga',
          '/plugin install diverga',
        ],
      },
      {
        title: 'Configure Diverga',
        titleKo: 'Diverga 설정',
        commands: ['/diverga:setup'],
        commandsKo: ['/diverga:setup'],
      },
    ],
    setupCommand: '/diverga:setup',
  },
  {
    id: 'codex-cli',
    name: 'Codex CLI',
    icon: '⚡',
    description: 'OpenAI\'s CLI (gpt-5.2-codex, gpt-5.1-codex-mini)',
    descriptionKo: 'OpenAI CLI (gpt-5.2-codex, gpt-5.1-codex-mini)',
    warning: 'Run installation in a REGULAR terminal, NOT inside Codex CLI. IMPORTANT: AGENTS.md must be configured (Step 3) for Diverga agents to work in Codex sessions.',
    warningKo: '설치는 일반 터미널에서 실행하세요. 중요: Diverga 에이전트가 작동하려면 AGENTS.md 설정(3단계)이 필요합니다.',
    installSteps: [
      {
        title: 'Install Codex CLI',
        titleKo: 'Codex CLI 설치',
        commands: [
          '# Install Codex CLI first',
          'npm install -g @openai/codex',
          '',
          '# Or using Homebrew',
          'brew install openai/tap/codex',
        ],
        commandsKo: [
          '# Codex CLI 먼저 설치',
          'npm install -g @openai/codex',
          '',
          '# 또는 Homebrew 사용',
          'brew install openai/tap/codex',
        ],
      },
      {
        title: '⚠️ Install Diverga (Choose ONE method)',
        titleKo: '⚠️ Diverga 설치 (방법 중 하나 선택)',
        commands: [
          '# Option A: Quick Install (shell script)',
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-multi-cli.sh | bash -s -- --codex',
          '',
          '# Option B: Configured Install (interactive TUI)',
          'npx @diverga/codex-setup',
        ],
        commandsKo: [
          '# 옵션 A: 빠른 설치 (쉘 스크립트)',
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-multi-cli.sh | bash -s -- --codex',
          '',
          '# 옵션 B: 맞춤 설치 (인터랙티브 TUI)',
          'npx @diverga/codex-setup',
        ],
      },
      {
        title: 'Configure AGENTS.md Loading',
        titleKo: 'AGENTS.md 로딩 설정',
        commands: [
          '# Option A: Project-level (create codex.json in project root)',
          '{ "agents": ".codex/AGENTS.md" }',
          '',
          '# Option B: Global config (~/.codex/config.json)',
          '{ "agents": "~/.codex/diverga/.codex/AGENTS.md" }',
          '',
          '# Option C: Command-line flag',
          'codex --agents-file .codex/AGENTS.md',
        ],
        commandsKo: [
          '# 옵션 A: 프로젝트 레벨 (프로젝트 루트에 codex.json 생성)',
          '{ "agents": ".codex/AGENTS.md" }',
          '',
          '# 옵션 B: 전역 설정 (~/.codex/config.json)',
          '{ "agents": "~/.codex/diverga/.codex/AGENTS.md" }',
          '',
          '# 옵션 C: 명령줄 플래그',
          'codex --agents-file .codex/AGENTS.md',
        ],
      },
      {
        title: 'Start Codex CLI and Use',
        titleKo: 'Codex CLI 시작 후 사용',
        commands: [
          '# Start Codex CLI',
          'codex',
          '',
          '# Agents activate automatically with keywords',
          '> "I want to conduct a meta-analysis"',
        ],
        commandsKo: [
          '# Codex CLI 시작',
          'codex',
          '',
          '# 키워드로 에이전트 자동 활성화',
          '> "메타분석을 수행하고 싶습니다"',
        ],
      },
    ],
    setupCommand: 'npx @diverga/codex-setup',
  },
  {
    id: 'opencode',
    name: 'OpenCode',
    icon: '🌐',
    description: 'Provider-agnostic (75+ models supported)',
    descriptionKo: 'Provider-agnostic (75+ 모델 지원)',
    warning: 'Run installation in a REGULAR terminal (Terminal.app, iTerm, VS Code terminal), NOT inside OpenCode.',
    warningKo: '설치는 일반 터미널(Terminal.app, iTerm, VS Code 터미널)에서 실행하세요. OpenCode 내부에서 실행하지 마세요.',
    installSteps: [
      {
        title: 'Install OpenCode',
        titleKo: 'OpenCode 설치',
        commands: [
          '# Install OpenCode CLI',
          'brew install anomalyco/tap/opencode',
          '',
          '# Or quick install',
          'curl -fsSL https://opencode.ai/install | bash',
        ],
        commandsKo: [
          '# OpenCode CLI 설치',
          'brew install anomalyco/tap/opencode',
          '',
          '# 또는 빠른 설치',
          'curl -fsSL https://opencode.ai/install | bash',
        ],
      },
      {
        title: '⚠️ Install Diverga',
        titleKo: '⚠️ Diverga 설치',
        commands: [
          '# Run this in a regular terminal, NOT inside OpenCode',
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-multi-cli.sh | bash -s -- --opencode',
        ],
        commandsKo: [
          '# 일반 터미널에서 실행 (OpenCode 내부 아님)',
          'curl -sSL https://raw.githubusercontent.com/HosungYou/Diverga/main/scripts/install-multi-cli.sh | bash -s -- --opencode',
        ],
      },
      {
        title: 'Start OpenCode and Use',
        titleKo: 'OpenCode 시작 후 사용',
        commands: [
          '# Start OpenCode',
          'opencode',
          '',
          '# Agents activate automatically with keywords',
          '> "I want to conduct a meta-analysis"',
        ],
        commandsKo: [
          '# OpenCode 시작',
          'opencode',
          '',
          '# 키워드로 에이전트 자동 활성화',
          '> "메타분석을 수행하고 싶습니다"',
        ],
      },
    ],
    setupCommand: 'curl -sSL ... | bash -s -- --opencode',
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

      {/* Platform Warning */}
      {currentPlatform.warning && (
        <div className="void-card p-4 border-checkpoint-required/50 bg-checkpoint-required/5">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <p className="text-caption text-checkpoint-required">
              {locale === 'ko' ? currentPlatform.warningKo : currentPlatform.warning}
            </p>
          </div>
        </div>
      )}

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
          {currentPlatform.installSteps.map((step, index) => {
            const commands = locale === 'ko' && step.commandsKo ? step.commandsKo : step.commands;
            return (
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
                    commands={commands}
                    stepIndex={index}
                    copiedStep={copiedStep}
                    onCopy={copyToClipboard}
                  />
                </div>
              </div>
            );
          })}
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
                <td className="py-2 px-3 font-mono text-micro">gpt-5.2-codex</td>
                <td className="py-2 px-3 font-mono text-micro text-stellar-faint">
                  {locale === 'ko' ? 'provider 설정' : 'per provider'}
                </td>
              </tr>
              <tr className="border-b border-stellar-faint/10">
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-category-c" />
                    MEDIUM
                  </span>
                </td>
                <td className="py-2 px-3 font-mono text-micro">sonnet</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-5.1-codex</td>
                <td className="py-2 px-3 font-mono text-micro text-stellar-faint">
                  {locale === 'ko' ? 'provider 설정' : 'per provider'}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-3">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-category-e" />
                    LOW
                  </span>
                </td>
                <td className="py-2 px-3 font-mono text-micro">haiku</td>
                <td className="py-2 px-3 font-mono text-micro">gpt-5.1-codex-mini</td>
                <td className="py-2 px-3 font-mono text-micro text-stellar-faint">
                  {locale === 'ko' ? 'provider 설정' : 'per provider'}
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 text-micro text-stellar-faint">
            {locale === 'ko'
              ? '* OpenCode는 provider-agnostic (75+ 모델 지원). /connect 명령으로 provider 설정'
              : '* OpenCode is provider-agnostic (75+ models). Use /connect to configure provider'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlatformTabs;
