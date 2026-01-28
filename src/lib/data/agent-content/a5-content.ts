import type { ExtendedAgentContent } from '../types';

export const a5Content: ExtendedAgentContent = {
  agentId: 'A5',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Default Paradigm Detection', ko: '기본 패러다임 탐지' }, purpose: { en: 'Identify if researcher is defaulting to positivism without reflection', ko: '연구자가 반성 없이 실증주의를 기본으로 하는지 식별' } },
      { number: 2, title: { en: 'Paradigmatic Alternatives', ko: '패러다임적 대안' }, purpose: { en: 'Present full range of philosophical positions', ko: '철학적 입장의 전체 범위 제시' } },
      { number: 3, title: { en: 'Alignment Verification', ko: '정렬 확인' }, purpose: { en: 'Ensure ontology, epistemology, methodology coherence', ko: '존재론, 인식론, 방법론 일관성 확인' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal', ko: '모달' }, examples: ['Post-positivism (default for most quantitative)'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['Constructivism', 'Pragmatism'] },
      { range: '0.40-0.59', label: { en: 'Balanced', ko: '균형' }, examples: ['Critical Realism', 'Transformative'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['Post-structuralism', 'Indigenous Research'] },
      { range: '0.00-0.19', label: { en: 'Innovative', ko: '혁신적' }, examples: ['New Materialism', 'Posthumanism'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Approved research question', ko: '승인된 연구 질문' } },
      { name: 'methodology_type', description: { en: 'Quantitative, qualitative, or mixed', ko: '양적, 질적 또는 혼합' } },
    ],
  },
  checkpoints: [
    { id: 'CP_PARADIGM_SELECTION', description: { en: 'Paradigm choice determines downstream agent pathway', ko: '패러다임 선택이 하위 에이전트 경로를 결정' } },
  ],
  references: [
    'Creswell, J. W., & Poth, C. N. (2018). Qualitative Inquiry and Research Design.',
    'Lincoln, Y. S., & Guba, E. G. (1985). Naturalistic Inquiry.',
  ],
};
