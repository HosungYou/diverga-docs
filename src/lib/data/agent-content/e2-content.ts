import type { ExtendedAgentContent } from '../types';

export const e2Content: ExtendedAgentContent = {
  agentId: 'E2',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Descriptive Coding Avoidance', ko: '기술적 코딩 회피' }, purpose: { en: 'Move beyond surface-level descriptive codes', ko: '표면적 기술 코드를 넘어서기' } },
      { number: 2, title: { en: 'Coding Approach Selection', ko: '코딩 접근법 선택' }, purpose: { en: 'Choose thematic, GT, or narrative analysis', ko: '주제적, GT 또는 내러티브 분석 선택' } },
      { number: 3, title: { en: 'Cycle Planning', ko: '주기 계획' }, purpose: { en: 'Plan first and second cycle coding', ko: '1차 및 2차 주기 코딩 계획' } },
      { number: 4, title: { en: 'Theoretical Sensitivity', ko: '이론적 민감성' }, purpose: { en: 'Apply theoretical lens during coding', ko: '코딩 중 이론적 렌즈 적용' } },
      { number: 5, title: { en: 'Theme Development', ko: '주제 개발' }, purpose: { en: 'Move from codes to themes to theory', ko: '코드에서 주제로, 주제에서 이론으로' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'qualitative_data', description: { en: 'Interview transcripts or field notes', ko: '인터뷰 전사본 또는 현장 노트' } },
      { name: 'methodology', description: { en: 'Qualitative approach from C2', ko: 'C2에서의 질적 접근법' } },
    ],
  },
  references: ['Saldaña, J. (2021). The Coding Manual for Qualitative Researchers.'],
};
