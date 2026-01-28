import type { ExtendedAgentContent } from '../types';

export const d3Content: ExtendedAgentContent = {
  agentId: 'D3',
  vsProcess: {
    type: 'LIGHT',
    phases: [
      {
        number: 1,
        title: { en: 'Protocol Design', ko: '프로토콜 설계' },
        purpose: { en: 'Design structured observation protocol', ko: '구조화된 관찰 프로토콜 설계' }
      },
      {
        number: 2,
        title: { en: 'Coding Scheme', ko: '코딩 체계' },
        purpose: { en: 'Develop observation coding categories', ko: '관찰 코딩 범주 개발' }
      },
      {
        number: 3,
        title: { en: 'Field Notes Template', ko: '현장 노트 템플릿' },
        purpose: { en: 'Create systematic field notes structure', ko: '체계적 현장 노트 구조 생성' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'observation_context',
        description: { en: 'Setting and participants to observe', ko: '관찰할 환경 및 참가자' }
      },
    ],
  },
};
