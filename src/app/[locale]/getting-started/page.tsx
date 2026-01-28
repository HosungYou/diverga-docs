"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Terminal,
  Download,
  Settings,
  Rocket,
  Check,
  Copy,
  ChevronRight,
  Apple,
  MonitorIcon as Windows,
  Monitor as Linux,
  Hand,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type Platform = 'mac' | 'windows' | 'linux';

const installCommands = {
  mac: 'brew install anthropics/tap/claude-code',
  windows: 'winget install Anthropic.ClaudeCode',
  linux: 'curl -fsSL https://claude.ai/install.sh | bash',
};

// Terminal-style command component
function TerminalCommand({
  command,
  step,
  copiedStep,
  onCopy,
}: {
  command: string;
  step: number;
  copiedStep: number | null;
  onCopy: (text: string, step: number) => void;
}) {
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
        <pre className="font-mono text-caption text-stellar-bright overflow-x-auto">
          <span className="text-tscore-creative">$</span> {command}
        </pre>
        <button
          onClick={() => onCopy(command, step)}
          className="absolute top-3 right-3 p-2 bg-void-elevated border border-stellar-faint/20 hover:border-stellar-dim opacity-0 group-hover:opacity-100 transition-all"
        >
          {copiedStep === step ? (
            <Check className="h-4 w-4 text-checkpoint-complete" />
          ) : (
            <Copy className="h-4 w-4 text-stellar-dim" />
          )}
        </button>
      </div>
    </div>
  );
}

// Progress step indicator
function StepIndicator({
  currentStep,
  totalSteps,
  locale,
}: {
  currentStep: number;
  totalSteps: number;
  locale: string;
}) {
  return (
    <div className="void-card p-4 mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="void-label text-stellar-dim">
          {locale === 'ko' ? '설치 진행도' : 'Installation Progress'}
        </span>
        <span className="font-mono text-micro text-stellar-faint">
          {currentStep} / {totalSteps}
        </span>
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: totalSteps }).map((_, i) => {
          let colorClass = 'bg-stellar-muted';
          if (i < currentStep) {
            // Completed steps use T-Score gradient colors
            const progressPercent = (i / (totalSteps - 1)) * 100;
            if (progressPercent >= 75) colorClass = 'bg-tscore-modal';
            else if (progressPercent >= 50) colorClass = 'bg-tscore-typical';
            else if (progressPercent >= 25) colorClass = 'bg-tscore-balanced';
            else colorClass = 'bg-tscore-creative';
          }
          return (
            <motion.div
              key={i}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`flex-1 h-2 ${colorClass} transition-colors duration-300`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function GettingStartedPage() {
  const t = useTranslations('gettingStarted');
  const locale = useLocale();
  const [platform, setPlatform] = useState<Platform>('mac');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      icon: Download,
      title: t('step1.title'),
      description: t('step1.description'),
      category: 'a', // Research Design - Coral
      content: (
        <div className="space-y-4">
          {/* Platform tabs */}
          <div className="inline-flex bg-void-surface border border-stellar-faint/20 p-1">
            {[
              { id: 'mac' as Platform, icon: Apple, label: 'macOS' },
              { id: 'windows' as Platform, icon: Windows, label: 'Windows' },
              { id: 'linux' as Platform, icon: Linux, label: 'Linux' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 font-mono text-micro uppercase tracking-wider transition-all",
                  platform === p.id
                    ? "bg-void-elevated text-stellar-core border border-stellar-faint/30"
                    : "text-stellar-dim hover:text-stellar-bright"
                )}
              >
                <p.icon className="h-4 w-4" />
                {p.label}
              </button>
            ))}
          </div>

          {/* Command */}
          <TerminalCommand
            command={installCommands[platform]}
            step={1}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>
      ),
    },
    {
      icon: Terminal,
      title: t('step2.title'),
      description: t('step2.description'),
      category: 'b', // Literature Review - Gold
      content: (
        <div className="space-y-3">
          <TerminalCommand
            command="/plugin marketplace add https://github.com/HosungYou/Diverga"
            step={2}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
          <TerminalCommand
            command="/plugin install diverga"
            step={3}
            copiedStep={copiedStep}
            onCopy={copyToClipboard}
          />
        </div>
      ),
    },
    {
      icon: Settings,
      title: t('step3.title'),
      description: t('step3.description'),
      category: 'c', // Methodology - Emerald
      content: (
        <TerminalCommand
          command="/diverga:setup"
          step={4}
          copiedStep={copiedStep}
          onCopy={copyToClipboard}
        />
      ),
    },
    {
      icon: Rocket,
      title: t('step4.title'),
      description: t('step4.description'),
      category: 'd', // Analysis - Sapphire
      content: (
        <div className="space-y-4">
          <p className="text-caption text-stellar-dim">
            {locale === 'ko'
              ? '연구 주제를 설명하기만 하면 Diverga가 자동으로 적절한 에이전트를 선택합니다:'
              : 'Just describe your research topic and Diverga will automatically select the appropriate agents:'}
          </p>
          <div className="void-terminal overflow-hidden">
            <div className="void-terminal-header">
              <div className="flex items-center gap-2">
                <div className="void-terminal-dot void-terminal-dot-red" />
                <div className="void-terminal-dot void-terminal-dot-yellow" />
                <div className="void-terminal-dot void-terminal-dot-green" />
              </div>
              <span className="text-micro text-stellar-faint ml-4">input</span>
            </div>
            <div className="p-4">
              <pre className="font-mono text-caption text-stellar-bright whitespace-pre-wrap">
                {locale === 'ko'
                  ? '"AI 채택에 관한 메타분석을 수행하고 싶어요"'
                  : '"I want to conduct a meta-analysis on AI adoption in education"'}
              </pre>
            </div>
          </div>
          <div className="void-card border-checkpoint-complete/30 p-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-checkpoint-complete mt-0.5 shrink-0" />
              <div className="text-caption">
                <p className="font-mono text-checkpoint-complete uppercase tracking-wider mb-2">
                  {locale === 'ko' ? '자동 감지:' : 'Auto-detected:'}
                </p>
                <ul className="space-y-1 text-stellar-dim">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-category-c" />
                    C5-MetaAnalysisMaster {locale === 'ko' ? '활성화' : 'activated'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-category-b" />
                    B1-SystematicLiteratureScout {locale === 'ko' ? '대기중' : 'queued'}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-checkpoint-required animate-pulse" />
                    CP_META_GATE {locale === 'ko' ? '체크포인트 예정' : 'checkpoint ready'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-void-deep">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-void-surface via-void-deep to-void-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-tscore-creative/5 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-24">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="void-badge void-badge-tscore">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-tscore-creative" />
              {locale === 'ko' ? '시작 가이드' : 'Getting Started'}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="void-display text-stellar-core text-center mb-6"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-stellar-dim text-center max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 py-12 sm:py-16">
        {/* Progress Indicator */}
        <StepIndicator currentStep={4} totalSteps={4} locale={locale} />

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="void-card p-8 hover:shadow-glow-sm transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                {/* Step number with category color */}
                <div className={`w-12 h-12 flex items-center justify-center category-bg-${step.category} border border-stellar-faint/20 shrink-0`}>
                  <span className={`font-mono text-lg font-bold category-text-${step.category}`}>
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="void-heading-3 text-stellar-core mb-2">
                    {step.title}
                  </h2>
                  <p className="text-body text-stellar-dim">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="pl-18 ml-[72px]">{step.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Checkpoint Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <div className="void-card p-8 sm:p-12 border-checkpoint-required/20">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 mb-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center bg-checkpoint-required/20 border border-checkpoint-required/30">
                    <Hand className="h-7 w-7 text-checkpoint-required" />
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="void-heading-2 text-stellar-core mb-2"
                >
                  {t('checkpoint.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-body-lg font-mono text-checkpoint-required mb-3"
                >
                  {t('checkpoint.subtitle')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                  className="text-body text-stellar-dim max-w-2xl mx-auto"
                >
                  {t('checkpoint.description')}
                </motion.p>
              </div>

              {/* Checkpoint Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="mb-6"
              >
                <p className="font-mono text-micro uppercase tracking-wider text-stellar-dim mb-4 text-center">
                  {t('checkpoint.exampleTitle')}
                </p>

                {/* Animated checkpoint card */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 150 }}
                  className="void-card border-checkpoint-required/50 overflow-hidden max-w-2xl mx-auto"
                >
                  {/* Header */}
                  <div className="bg-checkpoint-required/20 px-6 py-4 flex items-center gap-3 border-b border-checkpoint-required/30">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-4 h-4 rounded-full bg-checkpoint-required"
                    />
                    <div>
                      <div className="font-mono text-caption font-bold text-checkpoint-required uppercase tracking-wider">
                        {t('checkpoint.prompt')}
                      </div>
                      <div className="text-micro text-stellar-dim mt-0.5">
                        {t('checkpoint.promptSubtitle')}
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="p-6 space-y-3">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.1 + index * 0.15 }}
                        className="group relative void-card p-4 transition-all hover:border-tscore-creative/50 hover:shadow-glow-sm cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-void-surface border border-stellar-faint/30 font-mono text-micro font-bold text-stellar-dim group-hover:bg-tscore-creative/10 group-hover:border-tscore-creative/50 group-hover:text-tscore-creative transition-colors">
                            {index + 1}
                          </div>
                          <p className="text-caption text-stellar-bright font-medium">
                            {t(`checkpoint.promptOptions.${index}`)}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                      className="pt-4 border-t border-stellar-faint/20"
                    >
                      <p className="text-caption text-stellar-dim mb-3 text-center">
                        {t('checkpoint.promptQuestion')}
                      </p>

                      {/* Response animation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, type: "spring" }}
                        className="void-terminal overflow-hidden"
                      >
                        <div className="void-terminal-header">
                          <div className="flex items-center gap-2">
                            <div className="void-terminal-dot void-terminal-dot-green animate-pulse" />
                          </div>
                          <span className="text-micro text-stellar-faint ml-2">
                            {locale === 'ko' ? '당신의 응답:' : 'Your response:'}
                          </span>
                        </div>
                        <div className="p-4">
                          <pre className="font-mono text-caption text-checkpoint-complete">
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2, duration: 0.5 }}
                            >
                              {t('checkpoint.responseExample')}
                            </motion.span>
                          </pre>
                          <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.3 }}
                            className="mt-3 flex items-center gap-2 text-checkpoint-complete"
                          >
                            <Check className="h-4 w-4" />
                            <span className="font-mono text-micro uppercase tracking-wider">
                              {locale === 'ko' ? '승인됨 - 계속 진행 중...' : 'Approved - continuing...'}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Trust message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-checkpoint-complete/10 border border-checkpoint-complete/30">
                  <Sparkles className="h-5 w-5 text-checkpoint-complete" />
                  <p className="font-mono text-caption text-checkpoint-complete uppercase tracking-wider">
                    {t('checkpoint.trustMessage')}
                  </p>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 }}
                className="text-center"
              >
                <a
                  href={`/${locale}/docs/checkpoints`}
                  className="void-btn void-btn-primary"
                >
                  {t('checkpoint.learnMore')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="void-divider-glow my-16" />

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <h2 className="void-heading-2 text-stellar-core mb-6">
            {locale === 'ko' ? '다음 단계' : "What's Next?"}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`/${locale}/agents`}
              className="void-btn void-btn-accent"
            >
              {locale === 'ko' ? '40개 에이전트 탐색' : 'Explore 40 Agents'}
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={`/${locale}/workflows`}
              className="void-btn void-btn-primary"
            >
              {locale === 'ko' ? '워크플로우 가이드 보기' : 'View Workflow Guides'}
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
