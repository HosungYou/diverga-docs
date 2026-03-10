import type { ExtendedAgentContent } from '../types';

export const x1Content: ExtendedAgentContent = {
  agentId: 'X1',
  quickSummary: {
    oneLiner: {
      en: 'Research integrity guardian combining ethics review and bias detection',
      ko: '윤리 검토와 편향 탐지를 결합한 연구 무결성 수호자',
    },
    bestFor: [
      { en: 'IRB protocol review', ko: 'IRB 프로토콜 검토' },
      { en: 'Bias and QRP detection', ko: '편향 및 QRP 탐지' },
      { en: 'Research integrity assessment', ko: '연구 무결성 평가' },
    ],
    notFor: [
      { en: 'Statistical analysis', ko: '통계 분석' },
      { en: 'Literature searching', ko: '문헌 검색' },
    ],
    timeToResult: '5-15 min',
  },
  badges: [{ type: 'new' }, { type: 'essential' }],
};
