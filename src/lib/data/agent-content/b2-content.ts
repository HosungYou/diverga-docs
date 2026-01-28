import type { ExtendedAgentContent } from '../types';

export const b2Content: ExtendedAgentContent = {
  agentId: 'B2',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Automatic Tool Avoidance', ko: '자동 도구 회피' }, purpose: { en: 'Avoid blindly applying RoB2 to all studies', ko: '모든 연구에 RoB2를 무분별하게 적용하는 것 회피' } },
      { number: 2, title: { en: 'Context-Adaptive Selection', ko: '맥락 적응 선택' }, purpose: { en: 'Match appraisal tool to study design', ko: '연구 설계에 맞는 평가 도구 매칭' } },
      { number: 3, title: { en: 'Graded Assessment', ko: '등급화된 평가' }, purpose: { en: 'Apply GRADE for evidence certainty', ko: '증거 확실성을 위한 GRADE 적용' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'study_list', description: { en: 'List of studies to appraise', ko: '평가할 연구 목록' } },
      { name: 'study_designs', description: { en: 'Design type of each study', ko: '각 연구의 설계 유형' } },
    ],
  },
  references: [
    'Sterne, J. A. C., et al. (2019). RoB 2: Risk of bias tool. BMJ.',
    'Guyatt, G. H., et al. (2008). GRADE guidelines. BMJ.',
  ],
};
