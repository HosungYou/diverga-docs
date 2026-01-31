/**
 * INTEGRATION EXAMPLE: Agent Detail Page with New Components
 *
 * This file demonstrates how to integrate all 6 new components
 * into an agent detail page for optimal user experience.
 *
 * Location: src/app/[locale]/agents/[slug]/page.tsx (example)
 */

'use client';

import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  QuickSummaryCard,
  PersonaCard,
  PromptStarters,
  DecisionHelper,
  UseCaseGallery,
  JourneyNarrativeSection,
} from '@/components/agents';

import type { Agent, ExtendedAgentContent } from '@/lib/data/types';

interface AgentDetailPageProps {
  agent: Agent;
  extendedContent: ExtendedAgentContent;
  relatedAgents: Agent[];
  categoryColor: string;
}

export default function AgentDetailPageExample({
  agent,
  extendedContent,
  relatedAgents,
  categoryColor,
}: AgentDetailPageProps) {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="bg-void-deep min-h-screen">
      {/* Hero Section (existing AgentDetail header) */}
      <div className="relative py-16 sm:py-20 bg-void-surface overflow-hidden border-b border-stellar-faint/10">
        {/* ... existing hero content ... */}
      </div>

      {/* Main Content */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 space-y-20">

          {/*
            SECTION 1: Quick Summary (5-second rule)
            Always show first - most important for user orientation
          */}
          {extendedContent.quickSummary && (
            <section>
              <QuickSummaryCard
                quickSummary={extendedContent.quickSummary}
                locale={locale}
              />
            </section>
          )}

          {/*
            SECTION 2: Agent Persona (Emotional Connection)
            Show early to humanize the agent before technical details
          */}
          {extendedContent.persona && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '에이전트 페르소나' : 'Meet Your Agent'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '이 에이전트의 성격과 작동 방식을 이해하세요'
                    : 'Understand the personality and working style of this agent'}
                </p>
              </div>
              <PersonaCard
                persona={extendedContent.persona}
                locale={locale}
                themeColor={categoryColor}
              />
            </motion.section>
          )}

          {/*
            SECTION 3: Decision Helper (Right Agent?)
            Help users decide if this is the right agent BEFORE investing time
          */}
          {extendedContent.decisionHelper && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '올바른 선택인가요?' : 'Is This the Right Agent?'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '언제 이 에이전트를 사용해야 하는지 확인하세요'
                    : 'Check when you should (and shouldn\'t) use this agent'}
                </p>
              </div>
              <DecisionHelper
                decisionHelper={extendedContent.decisionHelper}
                locale={locale}
                agents={relatedAgents}
              />
            </motion.section>
          )}

          {/*
            SECTION 4: Prompt Starters (Get Started Fast)
            Show AFTER decision is made - users committed to using this agent
          */}
          {extendedContent.promptStarters && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '시작하기' : 'Get Started'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '이 프롬프트를 복사해서 바로 시작하세요'
                    : 'Copy these prompts and start immediately'}
                </p>
              </div>
              <PromptStarters
                promptStarters={extendedContent.promptStarters}
                locale={locale}
              />
            </motion.section>
          )}

          {/*
            SECTION 5: Use Case Gallery (Social Proof)
            Real-world examples build trust and show practical applications
          */}
          {extendedContent.useCases && extendedContent.useCases.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '실제 사용 사례' : 'Real-World Success Stories'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '다른 연구자들이 이 에이전트를 어떻게 사용했는지 확인하세요'
                    : 'See how other researchers have used this agent'}
                </p>
              </div>
              <UseCaseGallery
                useCases={extendedContent.useCases}
                locale={locale}
              />
            </motion.section>
          )}

          {/*
            SECTION 6: Journey Narrative (The Big Picture)
            Show last - storytelling recap of the entire transformation
          */}
          {extendedContent.journey && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <JourneyNarrativeSection
                journey={extendedContent.journey}
                locale={locale}
              />
            </motion.section>
          )}

          {/*
            SECTION 7: Technical Details (Existing AgentDetailSections)
            Show AFTER emotional/practical sections - for deep divers only
          */}
          {extendedContent.vsProcess && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '기술 세부사항' : 'Technical Details'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '에이전트의 내부 작동 방식을 깊이 이해하세요'
                    : 'Deep dive into how this agent works internally'}
                </p>
              </div>
              {/* AgentDetailSections component (existing) */}
            </motion.section>
          )}

          {/*
            SECTION 8: Related Agents (Next Steps)
            Show at the end - help users explore further
          */}
          {relatedAgents.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-stellar-core font-display mb-2">
                  {locale === 'ko' ? '관련 에이전트' : 'Related Agents'}
                </h2>
                <p className="text-stellar-dim">
                  {locale === 'ko'
                    ? '다른 에이전트도 확인해보세요'
                    : 'Explore other agents that might help'}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Existing related agent cards */}
              </div>
            </motion.section>
          )}

        </div>
      </div>
    </div>
  );
}

/**
 * SAMPLE DATA STRUCTURE
 *
 * This shows what the extendedContent object should look like
 * for a complete agent documentation page.
 */

const exampleExtendedContent: ExtendedAgentContent = {
  agentId: 'C4-MetaAnalyst',

  // 1. Quick Summary (REQUIRED - 5-second rule)
  quickSummary: {
    oneLiner: {
      en: 'Transform scattered studies into systematic, publication-ready insights',
      ko: '흩어진 연구들을 체계적이고 출판 가능한 통찰로 변환',
    },
    bestFor: [
      { en: 'Synthesizing 20+ studies with effect sizes', ko: '효과크기가 있는 20개 이상의 연구 종합' },
      { en: 'MASEM (Meta-Analytic Structural Equation Modeling)', ko: 'MASEM (메타분석 구조방정식 모델링)' },
      { en: 'Publication bias detection and correction', ko: '출판 편향 탐지 및 보정' },
    ],
    notFor: [
      { en: 'Fewer than 10 studies (insufficient power)', ko: '10개 미만의 연구 (검정력 부족)' },
      { en: 'Qualitative synthesis (use B4-EvidenceSynthesizer)', ko: '질적 종합 (B4-EvidenceSynthesizer 사용)' },
      { en: 'Single-study meta-analysis (conceptual error)', ko: '단일 연구 메타분석 (개념적 오류)' },
    ],
    timeToResult: '3-7 days',
  },

  // 2. Persona (RECOMMENDED - builds emotional connection)
  persona: {
    archetype: 'The Evidence Synthesizer',
    personality: {
      en: 'Methodical, pattern-driven, and obsessed with statistical rigor. I see the forest AND the trees, connecting dots across dozens of studies to reveal the truth hidden in aggregate data.',
      ko: '체계적이고, 패턴 중심적이며, 통계적 엄격성에 집착합니다. 숲도 보고 나무도 보며, 수십 개의 연구를 연결하여 집합 데이터에 숨겨진 진실을 드러냅니다.',
    },
    voiceSample: {
      en: 'Let me help you see the bigger picture by pooling these 47 correlation matrices into a single, powerful meta-analytic model...',
      ko: '47개의 상관관계 행렬을 하나의 강력한 메타분석 모델로 풀링하여 큰 그림을 보여드리겠습니다...',
    },
    motto: {
      en: 'One study tells a story. A meta-analysis reveals the truth.',
      ko: '한 연구는 이야기를 말하고, 메타분석은 진실을 드러냅니다.',
    },
    catchphrase: {
      en: '# Aggregate. Validate. Synthesize. Repeat.',
      ko: '# 집계. 검증. 종합. 반복.',
    },
  },

  // 3. Decision Helper (RECOMMENDED - prevents misuse)
  decisionHelper: {
    useWhen: [
      { en: 'You have 20+ primary studies with extractable effect sizes', ko: '추출 가능한 효과크기가 있는 20개 이상의 일차 연구' },
      { en: 'Studies measure similar constructs with comparable methods', ko: '연구가 유사한 방법으로 유사한 구성개념을 측정' },
      { en: 'You need to detect publication bias or moderator effects', ko: '출판 편향 또는 조절효과를 탐지해야 함' },
      { en: 'Journal requires PRISMA 2020 compliance for systematic reviews', ko: '저널이 체계적 고찰에 PRISMA 2020 준수를 요구' },
    ],
    dontUseWhen: [
      { en: 'You have fewer than 10 studies (meta-analysis lacks power)', ko: '10개 미만의 연구 (메타분석 검정력 부족)' },
      { en: 'Studies use incompatible effect size metrics (Hedge\'s g vs. odds ratios)', ko: '연구가 호환되지 않는 효과크기 지표 사용 (Hedge\'s g vs. 오즈비)' },
      { en: 'You need narrative synthesis without quantitative pooling', ko: '양적 풀링 없는 내러티브 종합이 필요한 경우' },
    ],
    alternativeAgents: [
      {
        agentId: 'B4-EvidenceSynthesizer',
        condition: { en: 'For narrative synthesis when quantitative pooling is not feasible', ko: '양적 풀링이 불가능할 때 내러티브 종합용' },
      },
      {
        agentId: 'C3-EffectSizeExpert',
        condition: { en: 'For single-study effect size calculation and interpretation', ko: '단일 연구 효과크기 계산 및 해석용' },
      },
    ],
  },

  // 4. Prompt Starters (HIGHLY RECOMMENDED - reduces friction)
  promptStarters: [
    {
      prompt: {
        en: 'I have 30 studies on AI tutoring effectiveness. Can you help me run a meta-analysis to determine the overall effect size on learning outcomes?',
        ko: 'AI 튜터링 효과에 대한 30개의 연구가 있습니다. 학습 결과에 대한 전체 효과크기를 결정하기 위해 메타분석을 도와주실 수 있나요?',
      },
      context: {
        en: 'When you have extracted effect sizes (Cohen\'s d, r, or odds ratios) from multiple studies',
        ko: '여러 연구에서 효과크기(Cohen\'s d, r, 또는 오즈비)를 추출한 경우',
      },
      expectedResponse: {
        en: 'The agent will: (1) Check data format, (2) Recommend fixed vs. random effects model, (3) Run heterogeneity analysis (Q-statistic, I²), (4) Generate forest plot and funnel plot for publication bias.',
        ko: '에이전트는: (1) 데이터 형식 확인, (2) 고정 vs. 무선 효과 모델 권장, (3) 이질성 분석 실행(Q-통계량, I²), (4) 출판 편향을 위한 포레스트 플롯과 퍼널 플롯 생성.',
      },
    },
    {
      prompt: {
        en: 'Can you perform a Two-Stage Meta-Analytic SEM on these correlation matrices? I want to test a mediation model: X → M → Y.',
        ko: '이 상관관계 행렬에 대해 2단계 메타분석 SEM을 수행해 주시겠습니까? X → M → Y 매개 모델을 테스트하고 싶습니다.',
      },
      context: {
        en: 'When you have correlation matrices from multiple studies and want to test a structural model',
        ko: '여러 연구의 상관관계 행렬이 있고 구조 모델을 테스트하려는 경우',
      },
      expectedResponse: {
        en: 'The agent will: (1) Pool correlation matrices using weighted averaging, (2) Run SEM on pooled matrix, (3) Test mediation hypothesis with bootstrapped confidence intervals, (4) Provide fit indices (CFI, RMSEA, SRMR).',
        ko: '에이전트는: (1) 가중 평균을 사용해 상관관계 행렬 풀링, (2) 풀링된 행렬에서 SEM 실행, (3) 부트스트랩 신뢰구간으로 매개 가설 검정, (4) 적합도 지수 제공(CFI, RMSEA, SRMR).',
      },
    },
  ],

  // 5. Use Cases (RECOMMENDED - social proof)
  useCases: [
    {
      title: {
        en: 'Educational Technology Meta-Analysis',
        ko: '교육 기술 메타분석',
      },
      scenario: {
        en: 'A PhD student wanted to synthesize 45 RCT studies on whether AI chatbots improve language learning outcomes. Studies reported effect sizes in different formats (Cohen\'s d, Hedge\'s g, correlation r).',
        ko: 'AI 챗봇이 언어 학습 결과를 개선하는지에 대한 45개의 RCT 연구를 종합하려는 박사 과정 학생. 연구들은 서로 다른 형식(Cohen\'s d, Hedge\'s g, 상관관계 r)으로 효과크기를 보고했습니다.',
      },
      outcome: {
        en: 'Converted all effect sizes to standardized mean difference (Hedge\'s g), identified overall effect (g = 0.42, p < .001), detected moderate heterogeneity (I² = 58%), and found moderator effects: synchronous interaction (g = 0.67) > asynchronous (g = 0.28).',
        ko: '모든 효과크기를 표준화된 평균 차이(Hedge\'s g)로 변환, 전체 효과 확인(g = 0.42, p < .001), 중간 수준의 이질성 탐지(I² = 58%), 조절효과 발견: 동기적 상호작용(g = 0.67) > 비동기적(g = 0.28).',
      },
      discipline: 'education',
      complexity: 'advanced',
    },
    {
      title: {
        en: 'MASEM for Mediation Analysis',
        ko: '매개 분석을 위한 MASEM',
      },
      scenario: {
        en: 'A researcher had 28 studies with correlation matrices testing whether self-efficacy mediates the relationship between AI feedback and academic performance (X → M → Y).',
        ko: '자기효능감이 AI 피드백과 학업 성취 간 관계를 매개하는지 테스트하는 상관관계 행렬이 있는 28개 연구를 보유한 연구자(X → M → Y).',
      },
      outcome: {
        en: 'Pooled correlation matrix (N = 8,340), confirmed mediation: indirect effect β = 0.18 (95% CI [0.12, 0.24]), direct effect β = 0.09 (ns). Self-efficacy fully mediates AI feedback → performance.',
        ko: '풀링된 상관관계 행렬(N = 8,340), 매개 확인: 간접효과 β = 0.18 (95% CI [0.12, 0.24]), 직접효과 β = 0.09 (유의하지 않음). 자기효능감이 AI 피드백 → 성취를 완전 매개.',
      },
      discipline: 'psychology',
      complexity: 'advanced',
    },
  ],

  // 6. Journey Narrative (OPTIONAL - emotional storytelling)
  journey: {
    startState: {
      en: 'You have 30 PDFs scattered across Mendeley, each reporting correlation matrices in different table formats. You know meta-analysis is the answer, but extracting and pooling data manually would take weeks.',
      ko: 'Mendeley에 흩어진 30개의 PDF가 있고, 각각 다른 표 형식으로 상관관계 행렬을 보고합니다. 메타분석이 답이라는 것을 알지만, 수동으로 데이터를 추출하고 풀링하는 데 몇 주가 걸릴 것입니다.',
    },
    transformation: [
      {
        en: 'Upload PDFs. The agent uses OCR + LLM to extract correlation matrices, validates against author-reported N and variable names.',
        ko: 'PDF를 업로드합니다. 에이전트는 OCR + LLM을 사용해 상관관계 행렬을 추출하고, 저자가 보고한 N과 변수 이름으로 검증합니다.',
      },
      {
        en: 'Choose meta-analytic approach: Traditional (effect size pooling) or MASEM (correlation pooling). Agent recommends based on research question.',
        ko: '메타분석 접근법 선택: 전통적(효과크기 풀링) 또는 MASEM(상관관계 풀링). 에이전트가 연구 질문에 따라 권장합니다.',
      },
      {
        en: 'Run analysis: Pooled correlation matrix (MASEM) or weighted mean effect size (traditional). Heterogeneity analysis, publication bias tests, moderator analysis.',
        ko: '분석 실행: 풀링된 상관관계 행렬(MASEM) 또는 가중 평균 효과크기(전통적). 이질성 분석, 출판 편향 검정, 조절변수 분석.',
      },
      {
        en: 'Generate publication-ready outputs: Forest plot, funnel plot, PRISMA flow diagram, APA-formatted results table.',
        ko: '출판 가능한 결과 생성: 포레스트 플롯, 퍼널 플롯, PRISMA 플로우 다이어그램, APA 형식 결과 표.',
      },
    ],
    endState: {
      en: 'You have a complete meta-analysis with Q-statistics (heterogeneity), I² values, forest plot, and publication bias assessment. Ready to submit to a top-tier journal.',
      ko: 'Q-통계량(이질성), I² 값, 포레스트 플롯, 출판 편향 평가가 포함된 완전한 메타분석을 보유하게 됩니다. 최상위 저널에 제출할 준비가 되었습니다.',
    },
    timeEstimate: '3-7 days',
  },

  // 7. Technical Details (existing ExtendedAgentContent fields)
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Data Extraction & Validation', ko: '데이터 추출 및 검증' },
        purpose: { en: 'Extract correlation matrices and effect sizes from PDFs using OCR + LLM', ko: 'OCR + LLM을 사용해 PDF에서 상관관계 행렬과 효과크기 추출' },
        example: 'Input: 30 PDFs → Output: Validated correlation matrices in CSV format',
      },
      {
        number: 2,
        title: { en: 'Meta-Analytic Modeling', ko: '메타분석 모델링' },
        purpose: { en: 'Pool data using fixed or random effects model, test heterogeneity', ko: '고정 또는 무선 효과 모델을 사용해 데이터 풀링, 이질성 검정' },
        example: 'Output: Pooled effect size g = 0.42, I² = 58%',
      },
      {
        number: 3,
        title: { en: 'Publication Bias & Reporting', ko: '출판 편향 및 보고' },
        purpose: { en: 'Generate forest plot, funnel plot, PRISMA diagram, APA table', ko: '포레스트 플롯, 퍼널 플롯, PRISMA 다이어그램, APA 표 생성' },
        example: 'Output: Publication-ready figures and tables in .png and .docx',
      },
    ],
  },

  // ... other technical fields (tScoreReference, inputRequirements, etc.)
};
