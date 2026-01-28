import type { ExtendedAgentContent } from '../types';

export const b4Content: ExtendedAgentContent = {
  agentId: 'B4',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Simple Tracking Avoidance', ko: '단순 추적 회피' }, purpose: { en: 'Go beyond keyword alerts', ko: '키워드 알림을 넘어서' } },
      { number: 2, title: { en: 'Strategic Monitoring', ko: '전략적 모니터링' }, purpose: { en: 'Identify emerging methodological trends', ko: '새로운 방법론적 동향 식별' } },
      { number: 3, title: { en: 'Differentiated Reports', ko: '차별화된 보고서' }, purpose: { en: 'Highlight creative research directions', ko: '창의적 연구 방향 강조' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_field', description: { en: 'Field to monitor', ko: '모니터링할 분야' } },
      { name: 'keywords', description: { en: 'Core keywords for tracking', ko: '추적을 위한 핵심 키워드' } },
    ],
  },
};
