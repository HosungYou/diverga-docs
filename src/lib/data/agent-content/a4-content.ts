import type { ExtendedAgentContent } from '../types';

export const a4Content: ExtendedAgentContent = {
  agentId: 'A4',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Generic Ethics Avoidance', ko: '일반 윤리 회피' }, purpose: { en: 'Skip cookie-cutter ethics checklists', ko: '천편일률적 윤리 체크리스트 건너뛰기' } },
      { number: 2, title: { en: 'Context-Specific Analysis', ko: '맥락 특정 분석' }, purpose: { en: 'Identify ethical issues unique to this research', ko: '이 연구에 고유한 윤리적 문제 식별' } },
      { number: 3, title: { en: 'Actionable Recommendations', ko: '실행 가능한 권장사항' }, purpose: { en: 'Provide specific IRB-ready guidance', ko: 'IRB 준비 가능한 구체적 지침 제공' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Study design involving human subjects', ko: '인간 대상 연구 설계' } },
      { name: 'participant_population', description: { en: 'Target participant demographics', ko: '대상 참가자 인구통계' } },
    ],
  },
  checkpoints: [
    { id: 'CP_METHODOLOGY_APPROVAL', description: { en: 'Ethics review must be completed before data collection', ko: '데이터 수집 전 윤리 검토 완료 필요' } },
  ],
  references: [
    'Belmont Report (1979). Ethical Principles and Guidelines.',
    'APA Ethics Code (2017). Ethical Principles of Psychologists.',
  ],
};
