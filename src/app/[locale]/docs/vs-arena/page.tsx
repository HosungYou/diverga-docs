'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { DocsBreadcrumb } from '@/components/docs';

const personas = [
  { id: 'V1', label: 'Post-Positivist', color: '#4d96ff', tscore: '0.5–0.8', desc: { en: 'RCTs, SEM, causal inference, longitudinal designs', ko: 'RCT, SEM, 인과 추론, 종단 설계' } },
  { id: 'V2', label: 'Critical Theorist', color: '#ff3366', tscore: '0.2–0.5', desc: { en: 'Participatory action research, feminist methodology, CDA', ko: '참여 행동 연구, 페미니스트 방법론, CDA' } },
  { id: 'V3', label: 'Pragmatist', color: '#ffcc22', tscore: '0.3–0.6', desc: { en: 'Mixed methods, design-based research, implementation science', ko: '혼합 방법론, 설계 기반 연구, 실행 과학' } },
  { id: 'V4', label: 'Interpretivist', color: '#9b59b6', tscore: '0.3–0.7', desc: { en: 'Phenomenology, grounded theory, ethnography, narrative inquiry', ko: '현상학, 근거이론, 민족지학, 내러티브 탐구' } },
  { id: 'V5', label: 'Transformative', color: '#44ffaa', tscore: '0.1–0.4', desc: { en: 'Indigenous methodologies, disability justice, intersectional analysis', ko: '원주민 방법론, 장애 정의 연구, 교차성 분석' } },
];

export default function VSArenaPage() {
  const locale = useLocale() as 'en' | 'ko';

  const content = {
    en: {
      title: 'VS Arena',
      subtitle: 'Five-persona methodology debate orchestrated by the orchestrator skill.',
      badge: 'NEW in v12.0.0',
      what: {
        title: 'What is VS Arena?',
        body: 'VS Arena dispatches five epistemologically distinct personas (V1–V5) via the orchestrator. Each persona argues a methodology recommendation from its own philosophical position — post-positivist, critical, pragmatist, interpretivist, or transformative. The result is a structured synthesis with T-Scores, not a single modal guess.',
      },
      how: {
        title: 'How It Works',
        steps: [
          { step: '1', title: 'Context Collection', desc: 'Orchestrator gathers your research question, paradigm, field, and variables.' },
          { step: '2', title: 'Persona Selection', desc: '3 of 5 personas are selected based on your paradigm (always includes at least 1 contrasting perspective).' },
          { step: '3', title: 'Parallel Debate', desc: 'Personas argue simultaneously via Agent Teams or sequential subagents. Each produces a recommendation with T-Score and rationale.' },
          { step: '4', title: 'Human Selection', desc: 'You review the 3 recommendations and choose. The orchestrator does not decide for you.' },
        ],
      },
      personas: {
        title: 'The 5 Personas',
        tscore: 'T-Score range',
        strengths: 'Strengths',
        internal: 'Internal agents — dispatched by orchestrator only, not directly invocable.',
      },
      invoke: {
        title: 'How to Invoke',
        body: 'VS Arena is triggered automatically by the orchestrator when a paradigm decision point is reached, or you can invoke it directly:',
        commands: [
          { cmd: '/diverga:orchestrator', desc: 'Open orchestrator — request a VS Arena debate' },
          { cmd: 'run VS Arena for my methodology', desc: 'Natural language trigger' },
          { cmd: 'compare methods', desc: 'Triggers parallel debate mode' },
        ],
      },
      next: 'Related',
    },
    ko: {
      title: 'VS 아레나',
      subtitle: '오케스트레이터 스킬이 조율하는 5개 페르소나 방법론 토론.',
      badge: 'v12.0.0 신규',
      what: {
        title: 'VS 아레나란?',
        body: 'VS 아레나는 오케스트레이터를 통해 5개의 인식론적으로 구별된 페르소나(V1–V5)를 배치합니다. 각 페르소나는 자신의 철학적 관점 — 후기실증주의, 비판적, 실용주의, 해석주의, 변혁적 — 에서 방법론 추천을 논쟁합니다. 결과는 단일 모달 추측이 아닌 T-Score가 포함된 구조화된 합성입니다.',
      },
      how: {
        title: '작동 방식',
        steps: [
          { step: '1', title: '맥락 수집', desc: '오케스트레이터가 연구 질문, 패러다임, 분야, 변수를 수집합니다.' },
          { step: '2', title: '페르소나 선택', desc: '패러다임에 따라 5개 중 3개 페르소나가 선택됩니다 (최소 1개 대조적 관점 포함).' },
          { step: '3', title: '병렬 토론', desc: '페르소나들이 에이전트 팀 또는 순차적 서브에이전트를 통해 동시에 논쟁합니다. 각자 T-Score와 근거를 포함한 추천을 제시합니다.' },
          { step: '4', title: '인간 선택', desc: '3개 추천을 검토하고 선택합니다. 오케스트레이터가 대신 결정하지 않습니다.' },
        ],
      },
      personas: {
        title: '5개 페르소나',
        tscore: 'T-Score 범위',
        strengths: '강점',
        internal: '내부 에이전트 — 오케스트레이터만 배치 가능, 직접 호출 불가.',
      },
      invoke: {
        title: '호출 방법',
        body: 'VS 아레나는 패러다임 결정 지점에서 오케스트레이터가 자동으로 트리거하거나 직접 호출할 수 있습니다:',
        commands: [
          { cmd: '/diverga:orchestrator', desc: '오케스트레이터 열기 — VS 아레나 토론 요청' },
          { cmd: '방법론 VS 아레나 실행', desc: '자연어 트리거' },
          { cmd: '방법 비교', desc: '병렬 토론 모드 트리거' },
        ],
      },
      next: '관련 항목',
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
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">⚔️</span>
            <span className="border border-tscore-creative/30 bg-tscore-creative/10 px-2 py-0.5 font-mono text-micro text-tscore-creative">
              {t.badge}
            </span>
          </div>
          <h1 className="text-4xl font-display text-stellar-core mb-2">{t.title}</h1>
          <p className="text-stellar-dim text-lg">{t.subtitle}</p>
        </div>

        {/* What is VS Arena */}
        <section className="mb-10" id="what">
          <h2 className="text-xl font-display text-stellar-bright mb-3">{t.what.title}</h2>
          <p className="text-stellar-dim leading-relaxed">{t.what.body}</p>
        </section>

        {/* How It Works */}
        <section className="mb-10" id="how">
          <h2 className="text-xl font-display text-stellar-bright mb-5">{t.how.title}</h2>
          <div className="space-y-3">
            {t.how.steps.map((step) => (
              <div key={step.step} className="flex gap-4 p-4 bg-void-elevated border border-stellar-faint/15 rounded-lg">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-tscore-creative/10 border border-tscore-creative/30 font-mono text-sm text-tscore-creative">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-stellar-bright mb-1">{step.title}</h3>
                  <p className="text-sm text-stellar-dim">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5 Personas */}
        <section className="mb-10" id="personas">
          <h2 className="text-xl font-display text-stellar-bright mb-2">{t.personas.title}</h2>
          <p className="text-sm text-stellar-faint font-mono mb-5">{t.personas.internal}</p>
          <div className="space-y-3">
            {personas.map((p) => (
              <div
                key={p.id}
                className="flex gap-4 items-start p-4 bg-void-elevated border border-stellar-faint/15 rounded-lg"
              >
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center font-mono text-sm font-bold border rounded"
                  style={{ color: p.color, borderColor: `${p.color}40`, backgroundColor: `${p.color}10` }}
                >
                  {p.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-stellar-bright">{p.label}</span>
                    <span
                      className="font-mono text-micro px-1.5 py-0.5 border"
                      style={{ color: p.color, borderColor: `${p.color}40`, backgroundColor: `${p.color}10` }}
                    >
                      T {p.tscore}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{p.desc[locale]}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Invoke */}
        <section className="mb-10" id="invoke">
          <h2 className="text-xl font-display text-stellar-bright mb-3">{t.invoke.title}</h2>
          <p className="text-stellar-dim mb-4">{t.invoke.body}</p>
          <div className="space-y-2">
            {t.invoke.commands.map((c) => (
              <div key={c.cmd} className="flex items-center gap-4 p-3 bg-void-elevated border border-stellar-faint/15 rounded-lg">
                <code className="font-mono text-sm text-tscore-creative shrink-0">{c.cmd}</code>
                <span className="text-sm text-stellar-faint">{c.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mb-8" id="related">
          <h2 className="text-xl font-display text-stellar-bright mb-4">{t.next}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href={`/${locale}/docs/vs-methodology`}
              className="group flex items-center gap-3 p-4 bg-void-elevated border border-stellar-faint/15 hover:border-tscore-creative/30 rounded-lg transition-all"
            >
              <span className="text-xl">🎯</span>
              <div className="flex-1">
                <div className="text-sm font-medium text-stellar-bright">VS Methodology</div>
                <div className="text-xs text-stellar-faint">{locale === 'ko' ? 'T-Score 시스템 이해하기' : 'Understanding the T-Score system'}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-tscore-creative transition-colors" />
            </Link>
            <Link
              href={`/${locale}/docs/advanced/agent-teams`}
              className="group flex items-center gap-3 p-4 bg-void-elevated border border-stellar-faint/15 hover:border-tscore-creative/30 rounded-lg transition-all"
            >
              <span className="text-xl">👥</span>
              <div className="flex-1">
                <div className="text-sm font-medium text-stellar-bright">{locale === 'ko' ? '에이전트 팀' : 'Agent Teams'}</div>
                <div className="text-xs text-stellar-faint">{locale === 'ko' ? '병렬 실행 아키텍처' : 'Parallel execution architecture'}</div>
              </div>
              <ArrowRight className="h-4 w-4 text-stellar-faint group-hover:text-tscore-creative transition-colors" />
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
