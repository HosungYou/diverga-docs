import type { ExtendedAgentContent } from '../types';

export const e5Content: ExtendedAgentContent = {
  agentId: 'E5',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Main Finding Identification', ko: '주요 결과 식별' }, purpose: { en: 'Identify key findings to stress-test', ko: '스트레스 테스트할 핵심 결과 식별' } },
      { number: 2, title: { en: 'Robustness Strategy', ko: '강건성 전략' }, purpose: { en: 'Design alternative specifications', ko: '대안적 명세 설계' } },
      { number: 3, title: { en: 'Sensitivity Testing', ko: '민감도 테스트' }, purpose: { en: 'Test findings under varying assumptions', ko: '다양한 가정 하에서 결과 테스트' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'main_findings', description: { en: 'Primary analysis results', ko: '1차 분석 결과' } },
      { name: 'analysis_decisions', description: { en: 'Methodological choices made', ko: '방법론적 선택' } },
    ],
  },
};
