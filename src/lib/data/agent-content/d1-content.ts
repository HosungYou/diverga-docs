import type { ExtendedAgentContent } from '../types';

export const d1Content: ExtendedAgentContent = {
  agentId: 'D1',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Convenience Sampling Avoidance', ko: '편의 표집 회피' },
        purpose: { en: 'Avoid defaulting to convenience sampling', ko: '편의 표집을 기본으로 하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Strategy Matching', ko: '전략 매칭' },
        purpose: { en: 'Match sampling to research design and goals', ko: '연구 설계와 목표에 표집 매칭' }
      },
      {
        number: 3,
        title: { en: 'Sample Size Calculation', ko: '표본 크기 계산' },
        purpose: { en: 'G*Power or qualitative saturation estimation', ko: 'G*Power 또는 질적 포화 추정' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'research_design',
        description: { en: 'Approved design from C1/C2/C3', ko: 'C1/C2/C3에서 승인된 설계' }
      },
      {
        name: 'population',
        description: { en: 'Target population description', ko: '대상 모집단 설명' }
      },
    ],
  },
};
