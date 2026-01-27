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

        {/* What's Next */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
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
