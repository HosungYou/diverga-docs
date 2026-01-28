import type { ExtendedAgentContent } from '../types';

export const c3Content: ExtendedAgentContent = {
  agentId: 'C3',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Sequential Default Avoidance', ko: '순차적 기본 회피' },
        purpose: { en: 'Avoid always suggesting sequential explanatory', ko: '항상 순차적 설명적 설계를 제안하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Design Type Exploration', ko: '설계 유형 탐색' },
        purpose: { en: 'Explore convergent, embedded, multiphase designs', ko: '수렴적, 내재적, 다단계 설계 탐색' }
      },
      {
        number: 3,
        title: { en: 'Morse Notation', ko: 'Morse 표기법' },
        purpose: { en: 'Apply Morse notation (QUAN→qual, QUAL+quan)', ko: 'Morse 표기법 적용' }
      },
      {
        number: 4,
        title: { en: 'Integration Strategy', ko: '통합 전략' },
        purpose: { en: 'Plan integration points and methods', ko: '통합 지점 및 방법 계획' }
      },
      {
        number: 5,
        title: { en: 'Coherence Check', ko: '일관성 검토' },
        purpose: { en: 'Verify paradigmatic coherence', ko: '패러다임적 일관성 확인' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Mixed methods design requires approval', ko: '혼합방법 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Question requiring both qual+quant', ko: '질적+양적 접근이 필요한 질문' }
      },
    ],
  },
  references: ['Creswell, J. W., & Plano Clark, V. L. (2018). Designing and Conducting Mixed Methods Research.'],
};
