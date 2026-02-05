'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Zap, MessageSquare, Brain, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { DocsBreadcrumb } from '@/components/docs';

export default function QuickStartPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'Quick Start',
      description: 'Get your first agent running in under 5 minutes.',
      step1Title: 'Start a Research Conversation',
      step1Desc: 'Simply describe your research topic or question:',
      step1Example: 'I want to explore how AI tutoring systems affect student creativity in K-12 education.',
      step2Title: 'Diverga Responds with VS Options',
      step2Desc: 'Instead of a single "obvious" answer, you\'ll get creative alternatives:',
      step3Title: 'Make Your Choice',
      step3Desc: 'Select the option that best fits your research context:',
      step3Example: 'approve option 2',
      step4Title: 'Continue Your Research',
      step4Desc: 'The agent proceeds with your selected direction, maintaining context throughout your session.',
      keyFeatures: 'Key Features You Just Experienced',
      features: [
        {
          title: 'VS Methodology',
          desc: 'Multiple options across the typicality spectrum (T-Score)',
        },
        {
          title: 'Human Checkpoint',
          desc: 'You made the critical decision, not the AI',
        },
        {
          title: 'Context Persistence',
          desc: 'Your choice is remembered throughout the session',
        },
      ],
      nextSteps: 'What\'s Next?',
    },
    ko: {
      title: '빠른 시작',
      description: '5분 안에 첫 번째 에이전트를 실행하세요.',
      step1Title: '연구 대화 시작하기',
      step1Desc: '연구 주제나 질문을 간단히 설명하세요:',
      step1Example: 'K-12 교육에서 AI 튜터링 시스템이 학생 창의성에 미치는 영향을 탐구하고 싶습니다.',
      step2Title: 'Diverga가 VS 옵션으로 응답',
      step2Desc: '단일 "뻔한" 답변 대신 창의적 대안을 받게 됩니다:',
      step3Title: '선택하기',
      step3Desc: '연구 맥락에 가장 적합한 옵션을 선택하세요:',
      step3Example: '옵션 2 승인',
      step4Title: '연구 계속하기',
      step4Desc: '에이전트가 선택한 방향으로 진행하며, 세션 내내 맥락을 유지합니다.',
      keyFeatures: '방금 경험한 핵심 기능',
      features: [
        {
          title: 'VS 방법론',
          desc: '전형성 스펙트럼(T-Score)에 걸친 다양한 옵션',
        },
        {
          title: '휴먼 체크포인트',
          desc: 'AI가 아닌 당신이 중요한 결정을 내렸습니다',
        },
        {
          title: '맥락 지속성',
          desc: '선택 사항이 세션 내내 기억됩니다',
        },
      ],
      nextSteps: '다음 단계',
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
        <div className="flex items-center gap-4 mb-8">
          <div className="flex h-12 w-12 items-center justify-center bg-[#ffcc22]/10 border border-[#ffcc22]/30">
            <Zap className="h-6 w-6 text-[#ffcc22]" />
          </div>
          <div>
            <h1 className="text-3xl font-display text-stellar-core">{t.title}</h1>
            <p className="text-stellar-dim">{t.description}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-12 mb-16">
          {/* Connector line */}
          <div className="absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b from-[#44ffaa]/50 via-[#22ccff]/50 to-[#9b59b6]/50" />

          {/* Step 1 */}
          <section id="step-1">
            <div className="flex gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-[#44ffaa] text-void-deep font-mono font-bold">
                1
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display text-stellar-bright mb-2">{t.step1Title}</h2>
                <p className="text-stellar-dim mb-4">{t.step1Desc}</p>

                <div className="bg-void-elevated border border-stellar-faint/10 p-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-stellar-faint mt-0.5" />
                    <p className="text-stellar-bright italic">{t.step1Example}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section id="step-2">
            <div className="flex gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-[#22ccff] text-void-deep font-mono font-bold">
                2
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display text-stellar-bright mb-2">{t.step2Title}</h2>
                <p className="text-stellar-dim mb-4">{t.step2Desc}</p>

                <div className="bg-void-absolute border border-stellar-faint/10 overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-void-surface border-b border-stellar-faint/10">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 font-mono text-xs text-stellar-faint">A2-TheoryFramework</span>
                  </div>

                  <div className="p-4 font-mono text-sm space-y-4">
                    <div className="text-[#ff3366]">🔴 CP_THEORY_SELECTION</div>
                    <div className="text-stellar-dim">
                      {locale === 'ko' ? '이론적 프레임워크를 선택하세요' : 'Choose your theoretical framework'}
                    </div>
                    <div className="space-y-2 pl-4">
                      <div className="text-stellar-bright">
                        <span className="text-[#ff3366]">[0]</span> Technology Acceptance Model (T=0.92) - Modal
                      </div>
                      <div className="text-stellar-bright">
                        <span className="text-[#ffcc22]">[1]</span> Self-Determination Theory + TAM (T=0.6) - Emerging
                      </div>
                      <div className="text-stellar-bright">
                        <span className="text-[#44ffaa]">[2]</span> Cognitive Load Theory + Creativity (T=0.35) - Novel
                      </div>
                    </div>
                    <div className="text-stellar-dim mt-4">
                      {locale === 'ko'
                        ? '어떤 프레임워크가 연구 맥락에 맞나요?'
                        : 'Which framework fits your research context?'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section id="step-3">
            <div className="flex gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-[#9b59b6] text-white font-mono font-bold">
                3
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display text-stellar-bright mb-2">{t.step3Title}</h2>
                <p className="text-stellar-dim mb-4">{t.step3Desc}</p>

                <div className="bg-void-elevated border border-[#9b59b6]/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[#44ffaa] font-mono">&gt;</span>
                    <span className="text-stellar-bright font-mono">{t.step3Example}</span>
                    <span className="animate-pulse text-stellar-bright">_</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section id="step-4">
            <div className="flex gap-6">
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center bg-[#44ffaa] text-void-deep font-mono font-bold">
                4
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-display text-stellar-bright mb-2">{t.step4Title}</h2>
                <p className="text-stellar-dim">{t.step4Desc}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Key Features */}
        <section className="mb-12" id="features">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.keyFeatures}</h2>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-[#44ffaa]" />
                  <h3 className="font-medium text-stellar-bright">{feature.title}</h3>
                </div>
                <p className="text-sm text-stellar-dim">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-xl font-display text-stellar-bright mb-6">{t.nextSteps}</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/docs/vs-methodology"
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#22ccff]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#22ccff]/10 border border-[#22ccff]/30">
                <Sparkles className="h-5 w-5 text-[#22ccff]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? 'VS 방법론 이해하기' : 'Understand VS Methodology'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? 'T-Score와 창의적 대안' : 'T-Scores and creative alternatives'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#22ccff] transition-colors" />
            </Link>

            <Link
              href="/docs/memory-system"
              className="group flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10 hover:border-[#44ffaa]/30 transition-all"
            >
              <div className="flex h-10 w-10 items-center justify-center bg-[#44ffaa]/10 border border-[#44ffaa]/30">
                <Brain className="h-5 w-5 text-[#44ffaa]" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-stellar-bright">
                  {locale === 'ko' ? '메모리 시스템 알아보기' : 'Explore Memory System'}
                </h3>
                <p className="text-xs text-stellar-faint">
                  {locale === 'ko' ? '세션 간 맥락 지속성' : 'Context persistence across sessions'}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-[#44ffaa] transition-colors" />
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
