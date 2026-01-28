import type { ExtendedAgentContent } from '../types';

export const c5Content: ExtendedAgentContent = {
  agentId: 'C5',
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
