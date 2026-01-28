import type { ExtendedAgentContent } from '../types';

export const b3Content: ExtendedAgentContent = {
  agentId: 'B3',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Simple Conversion Avoidance', ko: '단순 변환 회피' }, purpose: { en: 'Avoid blindly converting all to Cohen d', ko: '모든 것을 Cohen d로 무분별하게 변환하는 것 회피' } },
      { number: 2, title: { en: 'Context-Appropriate Selection', ko: '맥락 적합 선택' }, purpose: { en: 'Select best ES metric for research context', ko: '연구 맥락에 가장 적합한 ES 메트릭 선택' } },
      { number: 3, title: { en: 'Hedges g Calculation', ko: 'Hedges g 계산' }, purpose: { en: 'Apply small-sample correction when needed', ko: '필요 시 소표본 보정 적용' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'statistical_data', description: { en: 'Means, SDs, t-values, F-values, p-values, etc.', ko: '평균, 표준편차, t-값, F-값, p-값 등' } },
    ],
  },
  codeTemplates: [
    {
      language: 'R',
      title: { en: 'Effect Size Conversion', ko: '효과크기 변환' },
      code: `library(metafor)

# From means and SDs
escalc(measure = "SMD",
       m1i = treatment_mean, m2i = control_mean,
       sd1i = treatment_sd, sd2i = control_sd,
       n1i = treatment_n, n2i = control_n)`,
    },
  ],
  references: [
    'Borenstein, M., et al. (2009). Introduction to Meta-Analysis. Wiley.',
    'Hedges, L. V. (1981). Distribution theory for Glass estimator.',
  ],
};
