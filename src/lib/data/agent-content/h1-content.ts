import type { ExtendedAgentContent } from '../types';

export const h1Content: ExtendedAgentContent = {
  agentId: 'H1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Surface Observation Avoidance', ko: '표면 관찰 회피' },
        purpose: { en: 'Move beyond tourist-like observation', ko: '관광객 같은 관찰을 넘어서기' }
      },
      {
        number: 2,
        title: { en: 'Cultural Immersion Planning', ko: '문화적 몰입 계획' },
        purpose: { en: 'Plan deep engagement with community', ko: '커뮤니티와의 깊은 관여 계획' }
      },
      {
        number: 3,
        title: { en: 'Thick Description Strategy', ko: '풍부한 기술 전략' },
        purpose: { en: 'Plan Geertzian thick description approach', ko: 'Geertz식 풍부한 기술 접근 계획' }
      },
      {
        number: 4,
        title: { en: 'Reflexivity Protocol', ko: '성찰성 프로토콜' },
        purpose: { en: 'Build researcher positionality awareness', ko: '연구자 위치성 인식 구축' }
      },
      {
        number: 5,
        title: { en: 'Exit Strategy', ko: '종료 전략' },
        purpose: { en: 'Plan ethical disengagement from field', ko: '현장에서의 윤리적 이탈 계획' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Ethnographic design requires ethics approval', ko: '민족지학적 설계는 윤리 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Ethnographic research question', ko: '민족지학적 연구 질문' } },
      { name: 'field_site', description: { en: 'Description of cultural setting', ko: '문화적 환경 설명' } },
    ],
  },
  references: [
    'Geertz, C. (1973). The Interpretation of Cultures.',
    'Hammersley, M., & Atkinson, P. (2019). Ethnography: Principles in Practice.'
  ],
};
