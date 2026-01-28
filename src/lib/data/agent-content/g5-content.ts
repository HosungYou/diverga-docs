import type { ExtendedAgentContent } from '../types';

export const g5Content: ExtendedAgentContent = {
  agentId: 'G5',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Pattern Detection', ko: '패턴 탐지' },
        purpose: { en: 'Identify AI writing patterns across 24 categories', ko: '24개 카테고리에서 AI 글쓰기 패턴 식별' }
      },
      {
        number: 2,
        title: { en: 'Probability Scoring', ko: '확률 점수화' },
        purpose: { en: 'Calculate AI-generation likelihood', ko: 'AI 생성 가능성 계산' }
      },
      {
        number: 3,
        title: { en: 'Risk Classification', ko: '위험 분류' },
        purpose: { en: 'Classify as low/medium/high risk', ko: '저/중/고위험으로 분류' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'text', description: { en: 'Text to analyze for AI patterns', ko: 'AI 패턴 분석할 텍스트' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Pattern Report', content: { en: 'Identified AI patterns by category', ko: '카테고리별 식별된 AI 패턴' } },
      { title: 'Risk Score', content: { en: 'Overall AI detection risk', ko: '전체 AI 탐지 위험' } },
      { title: 'Recommendations', content: { en: 'Specific phrases to humanize', ko: '휴먼화할 특정 구문' } },
    ],
  },
};
