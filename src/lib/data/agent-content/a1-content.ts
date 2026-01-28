import type { ExtendedAgentContent } from '../types';

export const a1Content: ExtendedAgentContent = {
  agentId: 'A1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Modal Question Identification', ko: '모달 질문 식별' }, purpose: { en: 'Identify the most predictable research questions AI would suggest', ko: 'AI가 제안할 가장 예측 가능한 연구 질문 식별' }, example: '"How does technology affect learning outcomes?"' },
      { number: 2, title: { en: 'Long-tail Exploration', ko: '롱테일 탐색' }, purpose: { en: 'Generate unconventional alternatives from the typicality spectrum', ko: '전형성 스펙트럼에서 비관습적 대안 생성' } },
      { number: 3, title: { en: 'Feasibility Assessment', ko: '실현 가능성 평가' }, purpose: { en: 'Evaluate whether creative alternatives are researchable', ko: '창의적 대안이 연구 가능한지 평가' } },
      { number: 4, title: { en: 'T-Score Calibration', ko: 'T-Score 보정' }, purpose: { en: 'Assign typicality scores and present spectrum of options', ko: '전형성 점수 할당 및 옵션 스펙트럼 제시' } },
      { number: 5, title: { en: 'Differentiated Recommendation', ko: '차별화된 추천' }, purpose: { en: 'Present final recommendation with justification', ko: '정당화와 함께 최종 추천 제시' } },
    ],
  },
  tScoreReference: {
    ranges: [
      { range: '0.80-1.00', label: { en: 'Modal (Avoid)', ko: '모달 (피하세요)' }, examples: ['Does X improve Y?', 'What is the impact of Z?'] },
      { range: '0.60-0.79', label: { en: 'Established', ko: '확립됨' }, examples: ['How does X mediate the relationship between Y and Z?'] },
      { range: '0.40-0.59', label: { en: 'Emerging', ko: '새로운' }, examples: ['What mechanisms underlie X in context Y?'] },
      { range: '0.20-0.39', label: { en: 'Creative', ko: '창의적' }, examples: ['How does X reconstitute Y through Z?'] },
      { range: '0.00-0.19', label: { en: 'Innovative (Caution)', ko: '혁신적 (주의)' }, examples: ['Paradigm-challenging questions'] },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_topic', description: { en: 'General area of interest', ko: '관심 분야' } },
      { name: 'research_field', description: { en: 'Academic discipline', ko: '학문 분야' } },
    ],
    optional: [
      { name: 'existing_question', description: { en: 'Draft research question to refine', ko: '정제할 초안 연구 질문' } },
      { name: 'framework_preference', description: { en: 'FINER, PICO, or SPIDER', ko: 'FINER, PICO 또는 SPIDER' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Modal Analysis', content: { en: 'Identifies top 3 most predictable questions', ko: '가장 예측 가능한 상위 3개 질문 식별' } },
      { title: 'Alternative Spectrum', content: { en: '5-7 questions across T-Score range', ko: 'T-Score 범위에 걸친 5-7개 질문' } },
      { title: 'Recommendation', content: { en: 'Top pick with T-Score and justification', ko: 'T-Score 및 정당화와 함께 최고 추천' } },
    ],
  },
  checkpoints: [
    { id: 'CP_RESEARCH_DIRECTION', description: { en: 'Human must approve final research question', ko: '인간이 최종 연구 질문을 승인해야 함' } },
  ],
  creativityMechanisms: [
    { name: 'Reverse Brainstorming', applicationTiming: { en: 'Phase 1: List questions to avoid', ko: '1단계: 피해야 할 질문 목록' }, usageExample: { en: '"What would GPT-4 suggest as #1?" → avoid that', ko: '"GPT-4가 1위로 제안할 것은?" → 그것을 피하세요' } },
    { name: 'Domain Transplant', applicationTiming: { en: 'Phase 2: Borrow from adjacent fields', ko: '2단계: 인접 분야에서 차용' }, usageExample: { en: 'Apply network theory from physics to education', ko: '물리학의 네트워크 이론을 교육에 적용' } },
  ],
  references: [
    'Hulley, S. B., et al. (2013). Designing Clinical Research. FINER criteria.',
    'Richardson, W. S., et al. (1995). The well-built clinical question. ACP Journal Club.',
    'Cooke, A., Smith, D., & Booth, A. (2012). Beyond PICO: The SPIDER tool.',
  ],
  exampleWorkflow: {
    before: { en: 'How does AI affect student learning outcomes? (T-0.92)', ko: 'AI는 학생 학습 결과에 어떤 영향을 미치는가? (T-0.92)' },
    after: { en: 'How do AI-mediated epistemic negotiations reshape collaborative knowledge construction in asynchronous learning? (T-0.35)', ko: 'AI 매개 인식론적 협상은 비동기 학습에서 협력적 지식 구성을 어떻게 재구성하는가? (T-0.35)' },
  },
};
