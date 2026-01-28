import type { ExtendedAgentContent } from '../types';

export const c2Content: ExtendedAgentContent = {
  agentId: 'C2',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Phenomenology Default Avoidance', ko: '현상학 기본 회피' },
        purpose: { en: 'Avoid always recommending phenomenology', ko: '항상 현상학을 추천하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Methodology Matching', ko: '방법론 매칭' },
        purpose: { en: 'Match design to research question type', ko: '연구 질문 유형에 설계 매칭' }
      },
      {
        number: 3,
        title: { en: 'Tradition Exploration', ko: '전통 탐색' },
        purpose: { en: 'Explore narrative, case study, ethnography, grounded theory', ko: '내러티브, 사례연구, 민족지학, 근거이론 탐색' }
      },
      {
        number: 4,
        title: { en: 'Rigor Planning', ko: '엄격성 계획' },
        purpose: { en: 'Plan trustworthiness criteria', ko: '신뢰성 기준 계획' }
      },
      {
        number: 5,
        title: { en: 'Design Articulation', ko: '설계 명시' },
        purpose: { en: 'Articulate complete qualitative design', ko: '완전한 질적 설계 명시' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Qualitative design approval required', ko: '질적 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Qualitative research question', ko: '질적 연구 질문' }
      },
      {
        name: 'paradigm',
        description: { en: 'Philosophical stance from A5', ko: 'A5에서의 철학적 입장' }
      },
    ],
  },
  references: ['Creswell, J. W., & Poth, C. N. (2018). Qualitative Inquiry and Research Design.'],
};
