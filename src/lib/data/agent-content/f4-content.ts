import type { ExtendedAgentContent } from '../types';

export const f4Content: ExtendedAgentContent = {
  agentId: 'F4',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'QRP Detection', ko: 'QRP 탐지' }, purpose: { en: 'Detect p-hacking, HARKing, cherry-picking', ko: 'p-해킹, HARKing, 체리피킹 탐지' } },
      { number: 2, title: { en: 'Trustworthiness Assessment', ko: '신뢰성 평가' }, purpose: { en: 'Apply qualitative trustworthiness criteria', ko: '질적 신뢰성 기준 적용' } },
      { number: 3, title: { en: 'Recommendations', ko: '권장사항' }, purpose: { en: 'Provide specific improvement suggestions', ko: '구체적 개선 제안 제공' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_document', description: { en: 'Manuscript or analysis results', ko: '원고 또는 분석 결과' } },
    ],
  },
  references: ['Simmons, J. P., et al. (2011). False-Positive Psychology. Psychological Science.'],
};
