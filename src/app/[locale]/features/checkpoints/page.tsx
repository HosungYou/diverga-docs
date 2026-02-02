'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FeatureHero } from '@/components/features/FeatureHero';
import { CheckpointTimeline } from '@/components/features/CheckpointTimeline';
import { CheckpointBadges } from '@/components/features/CheckpointBadges';

export default function CheckpointsPage() {
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-void-deep pt-16">
      {/* Hero Section */}
      <FeatureHero
        title={{
          en: 'Critical Decisions Stay in Human Hands',
          ko: '중요한 결정은 인간의 손에',
        }}
        subtitle={{
          en: 'Human Checkpoint System',
          ko: '휴먼 체크포인트 시스템',
        }}
        description={{
          en: 'Unlike autonomous AI systems that make decisions for you, Diverga stops at critical research junctures and asks for your explicit approval. You maintain control over paradigm selection, theoretical frameworks, and methodological choices.',
          ko: '자율적으로 결정을 내리는 AI 시스템과 달리, Diverga는 중요한 연구 분기점에서 멈추고 명시적 승인을 요청합니다. 패러다임 선택, 이론적 프레임워크, 방법론적 선택에 대한 통제권을 유지합니다.',
        }}
        locale={locale}
        accentColor="#ff3366"
      />

      {/* Philosophy Section */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-16">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '"연구의 중요한 결정은 연구자의 몫"' : '"The critical decisions of research belong to the researcher"'}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-checkpoint-required/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-checkpoint-required">
                  {locale === 'ko' ? '자율 AI의 위험' : 'The Risk of Autonomous AI'}
                </div>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? 'AI가 패러다임, 프레임워크, 방법론을 자동으로 선택하면 연구자의 학문적 정체성이 사라집니다.'
                    : 'When AI automatically chooses paradigms, frameworks, and methods, the researcher\'s scholarly identity disappears.'}
                </p>
              </div>
              <div className="border border-tscore-creative/30 bg-void-elevated p-6">
                <div className="mb-4 font-mono text-micro uppercase text-tscore-creative">
                  {locale === 'ko' ? 'Diverga의 약속' : 'Diverga\'s Promise'}
                </div>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '중요한 순간에 멈추고 묻습니다. 연구자가 방향을 결정하고, AI가 실행합니다.'
                    : 'We stop and ask at critical moments. The researcher decides direction; AI executes.'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checkpoint Types */}
      <CheckpointBadges locale={locale} />

      {/* Research Timeline */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '연구 라이프사이클의 체크포인트' : 'Checkpoints Across the Research Lifecycle'}
            </h2>
            <p className="mt-4 text-body text-stellar-dim">
              {locale === 'ko'
                ? '연구의 각 단계에서 적절한 수준의 인간 통제'
                : 'Appropriate levels of human control at each stage of research'}
            </p>
          </motion.div>
          <CheckpointTimeline locale={locale} />
        </div>
      </section>

      {/* Example Interaction */}
      <section className="border-t border-stellar-faint/10 bg-void-surface py-20">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '체크포인트 상호작용 예시' : 'Example Checkpoint Interaction'}
            </h2>
            <div className="border border-stellar-faint/10 bg-void-absolute p-6">
              {/* Terminal Header */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-checkpoint-required" />
                <div className="h-3 w-3 rounded-full bg-checkpoint-recommended" />
                <div className="h-3 w-3 rounded-full bg-checkpoint-optional" />
                <span className="ml-4 font-mono text-micro text-stellar-faint">checkpoint-demo</span>
              </div>
              {/* Checkpoint Output */}
              <div className="space-y-4 font-mono text-sm">
                <div className="text-checkpoint-required">
                  🔴 CP_THEORY_SELECTION
                </div>
                <div className="text-stellar-dim">
                  {locale === 'ko' ? '이론적 프레임워크를 선택하세요' : 'Choose your theoretical framework'}
                </div>
                <div className="space-y-2 pl-4">
                  <div className="text-stellar-bright">[0] Technology Acceptance Model (T=0.92) - Modal</div>
                  <div className="text-stellar-bright">[1] Self-Determination Theory + TAM (T=0.6) - Emerging</div>
                  <div className="text-stellar-bright">[2] Activity Theory + Communities (T=0.4) - Novel</div>
                </div>
                <div className="mt-4 text-stellar-dim">
                  {locale === 'ko' ? '어떤 프레임워크가 연구 맥락에 맞나요?' : 'Which framework fits your research context?'}
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-tscore-creative">&gt;</span>
                  <span className="text-stellar-core">approve option 2</span>
                  <span className="animate-cursor-blink text-stellar-core">_</span>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-caption text-stellar-faint">
              {locale === 'ko'
                ? '당신이 방향을 결정합니다. AI는 명령을 기다립니다.'
                : 'You decide the direction. AI waits for your command.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-stellar-faint/10 bg-void-deep py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-heading-2 text-stellar-core">
              {locale === 'ko' ? '통제권을 유지하세요' : 'Stay in Control'}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-stellar-dim">
              {locale === 'ko'
                ? '모든 Diverga 에이전트에는 적절한 체크포인트가 내장되어 있습니다.'
                : 'Every Diverga agent has appropriate checkpoints built in.'}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-primary px-8 py-3"
              >
                {locale === 'ko' ? '에이전트 탐색' : 'Explore Agents'}
              </Link>
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-secondary px-8 py-3"
              >
                {locale === 'ko' ? '체크포인트 문서' : 'Checkpoint Docs'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
