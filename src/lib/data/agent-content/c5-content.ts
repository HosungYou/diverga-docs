import type { ExtendedAgentContent } from '../types';

export const c5Content: ExtendedAgentContent = {
  agentId: 'C5',
  quickSummary: {
    oneLiner: {
      en: 'Meta-analysis strategist avoiding blind pooling and assessing heterogeneity',
      ko: '무분별한 풀링을 피하고 이질성을 평가하는 메타분석 전략가'
    },
    bestFor: [
      { en: 'Selecting meta-analytic models (fixed, random, mixed effects)', ko: '메타분석 모델 선택 (고정, 랜덤, 혼합 효과)' },
      { en: 'Heterogeneity assessment and explanation (I², Tau²)', ko: '이질성 평가 및 설명 (I², Tau²)' },
      { en: 'Moderator and subgroup analysis planning', ko: '조절 및 하위집단 분석 계획' },
      { en: 'Publication bias detection (funnel plots, trim-and-fill, p-curve)', ko: '출판 편향 탐지 (깔때기 그림, 트림앤필, p-곡선)' },
      { en: 'MASEM (Meta-Analytic SEM) guidance', ko: 'MASEM (메타분석 구조방정식) 안내' }
    ],
    notFor: [
      { en: 'Primary data collection designs (use C1 or C2)', ko: '1차 데이터 수집 설계 (C1 또는 C2 사용)' },
      { en: 'Literature screening (use B1 or B2)', ko: '문헌 스크리닝 (B1 또는 B2 사용)' },
      { en: 'Effect size extraction (use B3)', ko: '효과크기 추출 (B3 사용)' }
    ],
    timeToResult: '3-5 hours'
  },
  persona: {
    archetype: 'The Meta Strategist',
    personality: {
      en: 'Skeptical, heterogeneity-aware, and bias-conscious. Questions simple pooling, explores variance.',
      ko: '회의적이고 이질성을 인식하며 편향을 의식하는 성격. 단순 풀링에 의문을 제기하고 분산을 탐색.'
    },
    voiceSample: {
      en: "I² = 78% means we can't just pool these effects—let's explore moderators like intervention duration and participant age to explain this heterogeneity.",
      ko: "I² = 78%는 이러한 효과를 단순히 풀링할 수 없다는 의미입니다. 중재 기간과 참여자 연령 같은 조절 변수를 탐색하여 이 이질성을 설명해봅시다."
    },
    motto: {
      en: 'Question pooling, explain variance',
      ko: '풀링에 의문을 제기하고, 분산을 설명하라'
    }
  },
  decisionHelper: {
    useWhen: [
      { en: 'You are synthesizing effect sizes from multiple studies', ko: '여러 연구의 효과크기를 합성할 때' },
      { en: 'You need to model between-study heterogeneity', ko: '연구 간 이질성을 모델링해야 할 때' },
      { en: 'Publication bias assessment is required', ko: '출판 편향 평가가 필요할 때' },
      { en: 'You want to identify moderators of effects', ko: '효과의 조절 변수를 식별하고 싶을 때' }
    ],
    dontUseWhen: [
      { en: 'You are collecting primary data', ko: '1차 데이터를 수집할 때' },
      { en: 'You need to screen literature (use B1/B2 first)', ko: '문헌을 스크리닝해야 할 때 (먼저 B1/B2 사용)' },
      { en: 'Effect sizes are not yet extracted (use B3 first)', ko: '효과크기가 아직 추출되지 않았을 때 (먼저 B3 사용)' }
    ],
    alternativeAgents: [
      { agentId: 'B3', condition: { en: 'When effect size extraction is needed', ko: '효과크기 추출이 필요할 때' } },
      { agentId: 'C6', condition: { en: 'When data validation is needed', ko: '데이터 검증이 필요할 때' } },
      { agentId: 'C7', condition: { en: 'When error detection is needed', ko: '오류 탐지가 필요할 때' } }
    ]
  },
  badges: [{ type: 'advanced' }, { type: 'deep' }],
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Simple Pooling Avoidance', ko: '단순 풀링 회피' },
        purpose: { en: 'Avoid blindly pooling all effect sizes', ko: '모든 효과크기를 무분별하게 풀링하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Model Selection', ko: '모델 선택' },
        purpose: { en: 'Choose fixed vs random vs mixed effects', ko: '고정 vs 랜덤 vs 혼합 효과 선택' }
      },
      {
        number: 3,
        title: { en: 'Heterogeneity Analysis', ko: '이질성 분석' },
        purpose: { en: 'Assess and explain between-study variance', ko: '연구 간 분산 평가 및 설명' }
      },
      {
        number: 4,
        title: { en: 'Moderator Analysis', ko: '조절 분석' },
        purpose: { en: 'Identify sources of heterogeneity', ko: '이질성의 원인 식별' }
      },
      {
        number: 5,
        title: { en: 'Publication Bias Assessment', ko: '출판 편향 평가' },
        purpose: { en: 'Funnel plot, trim-and-fill, p-curve', ko: '깔때기 그림, 트림앤필, p-곡선' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_META_GATE',
      description: { en: 'Multi-gate validation before synthesis', ko: '합성 전 다중 게이트 검증' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'effect_sizes',
        description: { en: 'Extracted effect sizes from B3', ko: 'B3에서 추출된 효과크기' }
      },
      {
        name: 'study_characteristics',
        description: { en: 'Moderator variables for each study', ko: '각 연구의 조절 변수' }
      },
    ],
  },
  codeTemplates: [
    {
      language: 'R',
      title: { en: 'Random Effects Meta-Analysis', ko: '랜덤 효과 메타분석' },
      code: `library(metafor)

# Random effects model
res <- rma(yi, vi, data = dat, method = "REML")
summary(res)

# Forest plot
forest(res, slab = dat$study)

# Heterogeneity
print(paste("I² =", round(res$I2, 1), "%"))`,
    }
  ],
  references: [
    'Borenstein, M., et al. (2009). Introduction to Meta-Analysis.',
    'Higgins, J. P. T., & Green, S. (2011). Cochrane Handbook for Systematic Reviews.',
  ],
};
