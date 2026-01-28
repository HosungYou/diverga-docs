import type { ExtendedAgentContent } from '../types';

export const a3Content: ExtendedAgentContent = {
  agentId: 'A3',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Predictable Criticism Avoidance', ko: '예측 가능한 비판 회피' }, purpose: { en: 'Identify obvious criticisms any reviewer would raise', ko: '모든 리뷰어가 제기할 명백한 비판 식별' } },
      { number: 2, title: { en: 'Deep Vulnerability Mining', ko: '심층 취약점 마이닝' }, purpose: { en: 'Find non-obvious design weaknesses', ko: '비명백한 설계 약점 발견' } },
      { number: 3, title: { en: 'Alternative Explanation Generation', ko: '대안적 설명 생성' }, purpose: { en: 'Generate creative counter-explanations', ko: '창의적 반론 생성' } },
      { number: 4, title: { en: 'Strength Assessment', ko: '강점 평가' }, purpose: { en: 'Identify what makes the design robust', ko: '설계를 견고하게 만드는 요소 식별' } },
      { number: 5, title: { en: 'Prioritized Recommendations', ko: '우선순위 권장사항' }, purpose: { en: 'Rank improvements by impact', ko: '영향력별 개선사항 순위' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Current research design document', ko: '현재 연구 설계 문서' } },
    ],
    optional: [
      { name: 'target_journal', description: { en: 'Target journal for calibrating critique level', ko: '비판 수준 보정을 위한 대상 저널' } },
    ],
  },
  creativityMechanisms: [
    { name: 'Reviewer 2 Simulation', applicationTiming: { en: 'Phase 1: Simulate the harshest reviewer', ko: '1단계: 가장 엄격한 리뷰어 시뮬레이션' }, usageExample: { en: '"What would a hostile methodologist say?"', ko: '"적대적 방법론자가 뭐라고 할까?"' } },
    { name: 'Paradigm Flip', applicationTiming: { en: 'Phase 3: View from opposing paradigm', ko: '3단계: 반대 패러다임에서 관찰' }, usageExample: { en: 'Critique quantitative from qualitative lens', ko: '질적 렌즈에서 양적 비판' } },
  ],
  references: [
    'Schwab, A. (2005). The dark side of reviewing. Academy of Management Learning & Education.',
  ],
};
