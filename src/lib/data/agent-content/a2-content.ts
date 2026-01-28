import type { ExtendedAgentContent } from '../types';

export const a2Content: ExtendedAgentContent = {
  agentId: 'A2',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Modal Theory Detection', ko: '모달 이론 탐지' }, purpose: { en: 'Identify overused theories in the field', ko: '분야에서 과다 사용된 이론 식별' }, example: 'TAM (T-0.92), UTAUT (T-0.85)' },
      { number: 2, title: { en: 'Long-tail Theory Mining', ko: '롱테일 이론 마이닝' }, purpose: { en: 'Discover underutilized theoretical frameworks', ko: '과소 활용된 이론적 프레임워크 발굴' } },
      { number: 3, title: { en: 'Cross-domain Synthesis', ko: '교차 영역 종합' }, purpose: { en: 'Combine theories from different disciplines', ko: '다른 분야의 이론 결합' } },
      { number: 4, title: { en: 'Framework Alignment', ko: '프레임워크 정렬' }, purpose: { en: 'Ensure theory fits research question and paradigm', ko: '이론이 연구 질문 및 패러다임에 맞는지 확인' } },
      { number: 5, title: { en: 'Differentiated Presentation', ko: '차별화된 프레젠테이션' }, purpose: { en: 'Present options across T-Score spectrum', ko: 'T-Score 스펙트럼에 걸친 옵션 제시' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal (Overused)', ko: '모달 (과다 사용)' }, examples: ['TAM', 'UTAUT', 'TPB'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['Social Cognitive Theory', 'Self-Determination Theory'] },
      { range: '0.40-0.59', label: { en: 'Balanced', ko: '균형' }, examples: ['Hybrid TAM+SDT', 'Activity Theory'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['Actor-Network Theory', 'Threshold Concepts'] },
      { range: '0.00-0.19', label: { en: 'Innovative', ko: '혁신적' }, examples: ['New Materialism', 'Quantum Cognition'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Approved research question from A1', ko: 'A1에서 승인된 연구 질문' } },
      { name: 'research_field', description: { en: 'Academic discipline', ko: '학문 분야' } },
    ],
    optional: [
      { name: 'existing_theory', description: { en: 'Currently considered theory', ko: '현재 고려 중인 이론' } },
      { name: 'differentiation_goal', description: { en: 'Level of novelty desired', ko: '원하는 참신성 수준' } },
    ],
  },
  checkpoints: [
    { id: 'CP_THEORY_SELECTION', description: { en: 'Human must select theoretical framework from presented options', ko: '인간이 제시된 옵션에서 이론적 프레임워크를 선택해야 함' } },
  ],
  creativityMechanisms: [
    { name: 'Theory Transplanting', applicationTiming: { en: 'Phase 2: Apply theories from distant fields', ko: '2단계: 먼 분야의 이론 적용' }, usageExample: { en: 'Ecological systems theory in digital learning', ko: '디지털 학습에서의 생태 체계 이론' } },
    { name: 'Inversion', applicationTiming: { en: 'Phase 3: What if the opposite theory applies?', ko: '3단계: 반대 이론이 적용되면?' }, usageExample: { en: 'Instead of adoption → resistance theory', ko: '채택 대신 → 저항 이론' } },
  ],
  references: [
    'Davis, F. D. (1989). Perceived usefulness. MIS Quarterly.',
    'Deci, E. L., & Ryan, R. M. (2000). Self-determination theory. American Psychologist.',
    'Latour, B. (2005). Reassembling the Social. Oxford University Press.',
  ],
  exampleWorkflow: {
    before: { en: 'Using TAM to study chatbot adoption (T-0.92)', ko: 'TAM을 사용하여 챗봇 채택 연구 (T-0.92)' },
    after: { en: 'Integrating Self-Regulated Learning + Cognitive Load Theory for AI tutoring (T-0.42)', ko: '자기조절학습 + 인지부하이론을 AI 튜터링에 통합 (T-0.42)' },
  },
};
