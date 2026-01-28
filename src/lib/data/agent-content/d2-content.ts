import type { ExtendedAgentContent } from '../types';

export const d2Content: ExtendedAgentContent = {
  agentId: 'D2',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Generic Protocol Avoidance', ko: '일반 프로토콜 회피' },
        purpose: { en: 'Avoid cookie-cutter interview guides', ko: '천편일률적 인터뷰 가이드 회피' }
      },
      {
        number: 2,
        title: { en: 'Probing Strategy Design', ko: '탐침 전략 설계' },
        purpose: { en: 'Design adaptive probing strategies', ko: '적응형 탐침 전략 설계' }
      },
      {
        number: 3,
        title: { en: 'Transcription Planning', ko: '전사 계획' },
        purpose: { en: 'Plan transcription and member checking', ko: '전사 및 참가자 확인 계획' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Qualitative research question', ko: '질적 연구 질문' }
      },
      {
        name: 'participant_profile',
        description: { en: 'Who will be interviewed', ko: '인터뷰 대상자' }
      },
    ],
  },
};
