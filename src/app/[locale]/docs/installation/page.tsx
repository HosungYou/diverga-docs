'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Download, Terminal, CheckCircle, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { DocsBreadcrumb } from '@/components/docs';

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-void-surface transition-colors"
      title="Copy"
    >
      {copied ? (
        <Check className="h-4 w-4 text-[#44ffaa]" />
      ) : (
        <Copy className="h-4 w-4 text-stellar-faint" />
      )}
    </button>
  );
}

export default function InstallationPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Installation',
      description: 'Get Diverga set up on your preferred platform in under 2 minutes.',
      prerequisites: 'Prerequisites',
      prereqItems: [
        'Node.js 18+ or Python 3.9+',
        'Claude Code, Codex CLI, or OpenCode installed',
        'Anthropic API key (for Claude Code)',
      ],
      step1Title: 'Step 1: Install the Plugin',
      step1Desc: 'Choose your platform and run the installation command:',
      step2Title: 'Step 2: Run Setup',
      step2Desc: 'Configure Diverga for your research needs:',
      step3Title: 'Step 3: Verify Installation',
      step3Desc: 'Check that everything is working:',
      nextSteps: 'Next Steps',
      nextStepsDesc: 'Now that Diverga is installed, try these:',
    },
    ko: {
      title: '설치',
      description: '2분 안에 원하는 플랫폼에 Diverga를 설정하세요.',
      prerequisites: '사전 요구사항',
      prereqItems: [
        'Node.js 18+ 또는 Python 3.9+',
        'Claude Code, Codex CLI, 또는 OpenCode 설치됨',
        'Anthropic API 키 (Claude Code용)',
      ],
      step1Title: '1단계: 플러그인 설치',
      step1Desc: '플랫폼을 선택하고 설치 명령을 실행하세요:',
      step2Title: '2단계: 설정 실행',
      step2Desc: '연구 필요에 맞게 Diverga를 구성하세요:',
      step3Title: '3단계: 설치 확인',
      step3Desc: '모든 것이 작동하는지 확인하세요:',
      nextSteps: '다음 단계',
      nextStepsDesc: 'Diverga가 설치되었으니, 다음을 시도해 보세요:',
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
        <div className="flex items-center gap-4 mb-6">
          <div className="flex h-12 w-12 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
            <Download className="h-6 w-6 text-[#44ffaa]" />
          </div>
          <div>
            <h1 className="text-3xl font-display text-stellar-core">{t.title}</h1>
            <p className="text-stellar-dim">{t.description}</p>
          </div>
        </div>

        {/* Prerequisites */}
        <section className="mb-12" id="prerequisites">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.prerequisites}</h2>
          <div className="bg-void-elevated border border-stellar-faint/10 p-6">
            <ul className="space-y-3">
              {t.prereqItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-[#44ffaa]" />
                  <span className="text-stellar-dim">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Step 1 */}
        <section className="mb-12" id="install">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.step1Title}</h2>
          <p className="text-stellar-dim mb-4">{t.step1Desc}</p>

          <div className="space-y-4">
            {/* Claude Code */}
            <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
                <span className="font-mono text-sm text-stellar-faint">Claude Code</span>
                <CopyButton text="claude plugins:add diverga" />
              </div>
              <pre className="p-4 font-mono text-sm text-stellar-bright overflow-x-auto">
                <code>claude plugins:add diverga</code>
              </pre>
            </div>

            {/* Codex CLI */}
            <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
                <span className="font-mono text-sm text-stellar-faint">Codex CLI</span>
                <CopyButton text="codex install diverga" />
              </div>
              <pre className="p-4 font-mono text-sm text-stellar-bright overflow-x-auto">
                <code>codex install diverga</code>
              </pre>
            </div>

            {/* OpenCode */}
            <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
                <span className="font-mono text-sm text-stellar-faint">OpenCode</span>
                <CopyButton text="opencode ext install diverga" />
              </div>
              <pre className="p-4 font-mono text-sm text-stellar-bright overflow-x-auto">
                <code>opencode ext install diverga</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-12" id="setup">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.step2Title}</h2>
          <p className="text-stellar-dim mb-4">{t.step2Desc}</p>

          <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <span className="font-mono text-sm text-stellar-faint">Setup Command</span>
              <CopyButton text="/diverga:setup" />
            </div>
            <pre className="p-4 font-mono text-sm text-stellar-bright">
              <code>/diverga:setup</code>
            </pre>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-12" id="verify">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.step3Title}</h2>
          <p className="text-stellar-dim mb-4">{t.step3Desc}</p>

          <div className="bg-void-elevated border border-stellar-faint/10 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
              <span className="font-mono text-sm text-stellar-faint">Verify</span>
              <CopyButton text="/diverga:help" />
            </div>
            <pre className="p-4 font-mono text-sm text-stellar-bright">
              <code>/diverga:help</code>
            </pre>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-8" id="next-steps">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.nextSteps}</h2>
          <p className="text-stellar-dim mb-4">{t.nextStepsDesc}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/${locale}/docs/quick-start`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#44ffaa]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
                <Terminal className="h-5 w-5 text-[#44ffaa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? '빠른 시작 가이드' : 'Quick Start Guide'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '첫 번째 에이전트 실행하기' : 'Run your first agent'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#44ffaa] transition-colors" />
            </Link>

            <Link
              href={`/${locale}/agents`}
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#22ccff]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#22ccff]/10 border border-[#22ccff]/30">
                <CheckCircle className="h-5 w-5 text-[#22ccff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '40개 전문 에이전트 보기' : 'Browse 40 specialized agents'}
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
