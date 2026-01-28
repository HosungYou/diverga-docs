import type { ExtendedAgentContent } from '../types';

export const c7Content: ExtendedAgentContent = {
  agentId: 'C7',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Pattern Detection', ko: '패턴 탐지' },
        purpose: { en: 'Detect common meta-analysis errors', ko: '일반적인 메타분석 오류 탐지' }
      },
      {
        number: 2,
        title: { en: 'Anomaly Flagging', ko: '이상 플래깅' },
        purpose: { en: 'Flag statistical anomalies', ko: '통계적 이상 플래그' }
      },
      {
        number: 3,
        title: { en: 'Prevention Protocols', ko: '방지 프로토콜' },
        purpose: { en: 'Apply error prevention checks', ko: '오류 방지 검사 적용' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'meta_analysis_data',
        description: { en: 'Complete meta-analysis dataset', ko: '완전한 메타분석 데이터셋' }
      },
    ],
  },
};
