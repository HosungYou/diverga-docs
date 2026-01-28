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
          <div className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1">
            {[
              { id: 'mac' as Platform, icon: Apple, label: 'macOS' },
              { id: 'windows' as Platform, icon: Windows, label: 'Windows' },
              { id: 'linux' as Platform, icon: Linux, label: 'Linux' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setPlatform(p.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
                  platform === p.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <p.icon className="h-4 w-4" />
                {p.label}
              </button>
            ))}
          </div>

          {/* Command */}
          <div className="relative rounded-lg bg-gray-100 border border-gray-200 p-4">
            <pre className="font-mono text-sm text-gray-900 overflow-x-auto">
              <span className="text-indigo-600">$</span> {installCommands[platform]}
            </pre>
            <button
              onClick={() => copyToClipboard(installCommands[platform], 1)}
              className="absolute top-3 right-3 p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {copiedStep === 1 ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-gray-600" />
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
          <div className="relative rounded-lg bg-gray-100 border border-gray-200 p-4">
            <pre className="font-mono text-sm text-gray-900">
              <span className="text-indigo-600">$</span> /plugin marketplace add https://github.com/HosungYou/Diverga
            </pre>
            <button
              onClick={() => copyToClipboard('/plugin marketplace add https://github.com/HosungYou/Diverga', 2)}
              className="absolute top-3 right-3 p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {copiedStep === 2 ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-gray-600" />
              )}
            </button>
          </div>
          <div className="relative rounded-lg bg-gray-100 border border-gray-200 p-4">
            <pre className="font-mono text-sm text-gray-900">
              <span className="text-indigo-600">$</span> /plugin install diverga
            </pre>
            <button
              onClick={() => copyToClipboard('/plugin install diverga', 3)}
              className="absolute top-3 right-3 p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              {copiedStep === 3 ? (
                <Check className="h-4 w-4 text-green-600" />
              ) : (
                <Copy className="h-4 w-4 text-gray-600" />
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
        <div className="relative rounded-lg bg-gray-100 border border-gray-200 p-4">
          <pre className="font-mono text-sm text-gray-900">
            <span className="text-indigo-600">$</span> /diverga:setup
          </pre>
          <button
            onClick={() => copyToClipboard('/diverga:setup', 4)}
            className="absolute top-3 right-3 p-2 rounded-md bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {copiedStep === 4 ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <Copy className="h-4 w-4 text-gray-600" />
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
          <p className="text-sm text-gray-600">
            {locale === 'ko'
              ? '연구 주제를 설명하기만 하면 Diverga가 자동으로 적절한 에이전트를 선택합니다:'
              : 'Just describe your research topic and Diverga will automatically select the appropriate agents:'}
          </p>
          <div className="rounded-lg bg-gray-100 border border-gray-200 p-4">
            <pre className="font-mono text-sm text-gray-900 whitespace-pre-wrap">
              {locale === 'ko'
                ? '"AI 채택에 관한 메타분석을 수행하고 싶어요"'
                : '"I want to conduct a meta-analysis on AI adoption in education"'}
            </pre>
          </div>
          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-4">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
              <div className="text-sm text-emerald-900">
                <p className="font-semibold mb-2">
                  {locale === 'ko' ? '자동 감지:' : 'Auto-detected:'}
                </p>
                <ul className="space-y-1">
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
    <div className="min-h-screen">
      {/* Hero Section with Light Aurora Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50 border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 py-16 sm:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-600 text-center max-w-2xl mx-auto"
          >
            {t('description')}
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-12 sm:py-16">

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-all duration-200"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h2>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="pl-16">{step.content}</div>
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
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50/30 p-8 sm:p-12">
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 mb-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900">
                    <Hand className="h-7 w-7 text-white" />
                  </div>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                >
                  {t('checkpoint.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-xl font-medium text-indigo-600 mb-3"
                >
                  {t('checkpoint.subtitle')}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85 }}
                  className="text-gray-600 max-w-2xl mx-auto"
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
                <p className="text-sm font-medium text-gray-900 mb-4 text-center">
                  {t('checkpoint.exampleTitle')}
                </p>

                {/* Animated checkpoint card */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 150 }}
                  className="rounded-xl border-2 border-red-200 bg-white shadow-lg overflow-hidden max-w-2xl mx-auto"
                >
                  {/* Header */}
                  <div className="bg-red-500 px-6 py-4 flex items-center gap-3">
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
                        className="group relative rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:shadow-sm cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 border border-gray-300 text-xs font-bold text-gray-700 group-hover:bg-indigo-100 group-hover:border-indigo-400 group-hover:text-indigo-700 transition-colors">
                            {index + 1}
                          </div>
                          <p className="text-sm text-gray-900 font-medium">
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
                      <p className="text-sm text-gray-600 mb-3 text-center">
                        {t('checkpoint.promptQuestion')}
                      </p>

                      {/* Response animation */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.8, type: "spring" }}
                        className="relative rounded-lg bg-gray-100 border border-gray-200 p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-xs text-gray-600 font-mono">
                            {locale === 'ko' ? '당신의 응답:' : 'Your response:'}
                          </span>
                        </div>
                        <pre className="font-mono text-sm text-emerald-700">
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
                          className="mt-3 flex items-center gap-2 text-emerald-600"
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
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-all hover:shadow-md"
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {locale === 'ko' ? '다음 단계' : "What's Next?"}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`/${locale}/agents`}
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white hover:bg-gray-800 transition-all hover:shadow-md"
            >
              {locale === 'ko' ? '40개 에이전트 탐색' : 'Explore 40 Agents'}
              <ChevronRight className="h-5 w-5" />
            </a>
            <a
              href={`/${locale}/workflows`}
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-all hover:shadow-sm"
            >
              {locale === 'ko' ? '워크플로우 가이드 보기' : 'View Workflow Guides'}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
