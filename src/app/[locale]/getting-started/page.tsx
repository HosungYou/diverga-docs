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
      content: (
        <div className="space-y-4">
          {/* Platform tabs */}
          <div className="flex gap-2 border-b border-[var(--border)]">
            {[
              { id: 'mac' as Platform, icon: Apple, label: 'macOS' },
              { id: 'windows' as Platform, icon: Windows, label: 'Windows' },
              { id: 'linux' as Platform, icon: Linux, label: 'Linux' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 -mb-[2px] transition-colors",
                  platform === p.id
                    ? "border-diverga-500 text-diverga-600"
                    : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                <p.icon className="h-4 w-4" />
                {p.label}
              </button>
            ))}
          </div>

          {/* Command */}
          <div className="relative rounded-lg bg-gray-900 p-4">
            <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
              <span className="text-teal-400">$</span> {installCommands[platform]}
            </pre>
            <button
              onClick={() => copyToClipboard(installCommands[platform], 1)}
              className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {copiedStep === 1 ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      ),
    },
    {
      icon: Terminal,
      title: t('step2.title'),
      description: t('step2.description'),
      content: (
        <div className="space-y-3">
          <div className="relative rounded-lg bg-gray-900 p-4">
            <pre className="font-mono text-sm text-gray-300">
              <span className="text-teal-400">$</span> /plugin marketplace add https://github.com/HosungYou/Diverga
            </pre>
            <button
              onClick={() => copyToClipboard('/plugin marketplace add https://github.com/HosungYou/Diverga', 2)}
              className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {copiedStep === 2 ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
          <div className="relative rounded-lg bg-gray-900 p-4">
            <pre className="font-mono text-sm text-gray-300">
              <span className="text-teal-400">$</span> /plugin install diverga
            </pre>
            <button
              onClick={() => copyToClipboard('/plugin install diverga', 3)}
              className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              {copiedStep === 3 ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      ),
    },
    {
      icon: Settings,
      title: t('step3.title'),
      description: t('step3.description'),
      content: (
        <div className="relative rounded-lg bg-gray-900 p-4">
          <pre className="font-mono text-sm text-gray-300">
            <span className="text-teal-400">$</span> /diverga:setup
          </pre>
          <button
            onClick={() => copyToClipboard('/diverga:setup', 4)}
            className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {copiedStep === 4 ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      ),
    },
    {
      icon: Rocket,
      title: t('step4.title'),
      description: t('step4.description'),
      content: (
        <div className="space-y-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            {locale === 'ko'
              ? '연구 주제를 설명하기만 하면 Diverga가 자동으로 적절한 에이전트를 선택합니다:'
              : 'Just describe your research topic and Diverga will automatically select the appropriate agents:'}
          </p>
          <div className="rounded-lg bg-gray-900 p-4">
            <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
              {locale === 'ko'
                ? '"AI 채택에 관한 메타분석을 수행하고 싶어요"'
                : '"I want to conduct a meta-analysis on AI adoption in education"'}
            </pre>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-500 mt-0.5" />
              <div className="text-sm text-emerald-800">
                <p className="font-semibold">
                  {locale === 'ko' ? '자동 감지:' : 'Auto-detected:'}
                </p>
                <ul className="mt-1 space-y-1">
                  <li>• C5-MetaAnalysisMaster {locale === 'ko' ? '활성화' : 'activated'}</li>
                  <li>• B1-SystematicLiteratureScout {locale === 'ko' ? '대기중' : 'queued'}</li>
                  <li>• 🔴 CP_META_GATE {locale === 'ko' ? '체크포인트 예정' : 'checkpoint ready'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 font-bold text-[var(--foreground)]"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-[var(--muted-foreground)]"
          >
            {t('description')}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-diverga-100">
                    <step.icon className="h-6 w-6 text-diverga-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-diverga-600">
                        {locale === 'ko' ? `단계 ${index + 1}` : `Step ${index + 1}`}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-[var(--foreground)]">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-[var(--muted-foreground)]">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">{step.content}</div>
              </div>
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
          <div className="rounded-3xl border-2 border-diverga-200 bg-gradient-to-br from-diverga-50 via-white to-teal-50 p-8 sm:p-12 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-diverga-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 mb-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-diverga-500 to-teal-500 shadow-lg">
                    <Hand className="h-7 w-7 text-white" />
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-2"
                >
                  {t('checkpoint.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl font-medium text-diverga-600 mb-3"
                >
                  {t('checkpoint.subtitle')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                  className="text-[var(--muted-foreground)] max-w-2xl mx-auto"
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
                <p className="text-sm font-medium text-[var(--foreground)] mb-4 text-center">
                  {t('checkpoint.exampleTitle')}
                </p>

                {/* Animated checkpoint card */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 150 }}
                  className="rounded-2xl border-2 border-red-300 bg-white shadow-xl overflow-hidden max-w-2xl mx-auto"
                >
                  {/* Traffic light header */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 flex items-center gap-3">
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
                      className="text-2xl"
                    >
                      🔴
                    </motion.div>
                    <div>
                      <div className="font-mono text-sm font-bold text-white">
                        {t('checkpoint.prompt')}
                      </div>
                      <div className="text-xs text-red-100 mt-0.5">
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
                        className="group relative rounded-xl border-2 border-gray-200 bg-gray-50 p-4 transition-all hover:border-diverga-400 hover:bg-diverga-50 hover:shadow-md cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white border-2 border-gray-300 text-xs font-bold text-gray-600 group-hover:border-diverga-500 group-hover:text-diverga-600 transition-colors">
                            {index + 1}
                          </div>
                          <p className="text-sm text-[var(--foreground)] font-medium">
                            {t(`checkpoint.promptOptions.${index}`)}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                      className="pt-4 border-t border-gray-200"
                    >
                      <p className="text-sm text-[var(--muted-foreground)] mb-3 text-center">
                        {t('checkpoint.promptQuestion')}
                      </p>

                      {/* Response animation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, type: "spring" }}
                        className="relative rounded-lg bg-gray-900 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs text-gray-400 font-mono">
                            {locale === 'ko' ? '당신의 응답:' : 'Your response:'}
                          </span>
                        </div>
                        <pre className="font-mono text-sm text-emerald-400">
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
                          className="mt-3 flex items-center gap-2 text-emerald-400"
                        >
                          <Check className="h-4 w-4" />
                          <span className="text-xs font-medium">
                            {locale === 'ko' ? '승인됨 - 계속 진행 중...' : 'Approved - continuing...'}
                          </span>
                        </motion.div>
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
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300 px-6 py-3">
                  <Sparkles className="h-5 w-5 text-emerald-600" />
                  <p className="text-sm font-semibold text-emerald-700">
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
                  className="inline-flex items-center gap-2 rounded-xl bg-diverga-500 px-6 py-3 text-base font-semibold text-white hover:bg-diverga-600 transition-all hover:shadow-lg hover:scale-105"
                >
                  {t('checkpoint.learnMore')}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4">
            {locale === 'ko' ? '다음 단계' : "What's Next?"}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`/${locale}/agents`}
              className="inline-flex items-center gap-2 rounded-xl bg-diverga-500 px-6 py-3 text-base font-semibold text-white hover:bg-diverga-600 transition-colors"
            >
              {locale === 'ko' ? '40개 에이전트 탐색' : 'Explore 40 Agents'}
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={`/${locale}/workflows`}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-6 py-3 text-base font-semibold text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            >
              {locale === 'ko' ? '워크플로우 가이드 보기' : 'View Workflow Guides'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
