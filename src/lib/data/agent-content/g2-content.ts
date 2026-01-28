import type { ExtendedAgentContent } from '../types';

export const g2Content: ExtendedAgentContent = {
  agentId: 'G2',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Generic Abstract Avoidance', ko: '일반 초록 회피' },
        purpose: { en: 'Avoid formulaic "This study examines..." abstracts', ko: '공식적인 "이 연구는 조사한다..." 초록 회피' }
      },
      {
        number: 2,
        title: { en: 'Audience Adaptation', ko: '청중 적응' },
        purpose: { en: 'Adapt writing style to target audience', ko: '대상 청중에 글쓰기 스타일 적응' }
      },
      {
        number: 3,
        title: { en: 'Impact Statement', ko: '영향 진술' },
        purpose: { en: 'Create compelling plain language summary', ko: '설득력 있는 쉬운 언어 요약 생성' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript', description: { en: 'Complete research manuscript', ko: '완성된 연구 원고' } },
      { name: 'target_audience', description: { en: 'Academic, policy, public, etc.', ko: '학술, 정책, 대중 등' } },
    ],
  },
};
