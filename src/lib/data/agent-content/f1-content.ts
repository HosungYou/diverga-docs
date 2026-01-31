import type { ExtendedAgentContent } from '../types';

export const f1Content: ExtendedAgentContent = {
  agentId: 'F1',
  quickSummary: {
    oneLiner: {
      en: 'The Consistency Checker: Ensures your paper tells one coherent story from intro to conclusion',
      ko: '일관성 검사자: 논문이 서론부터 결론까지 하나의 일관된 이야기를 전달하도록 보장'
    },
    bestFor: [
      { en: 'Final manuscript review before submission', ko: '제출 전 최종 원고 검토' },
      { en: 'Checking research questions align with methods and results', ko: '연구 질문이 방법 및 결과와 일치하는지 확인' },
      { en: 'Ensuring terminology is used consistently', ko: '용어의 일관된 사용 보장' },
      { en: 'Verifying logical flow of arguments', ko: '논증의 논리적 흐름 확인' },
      { en: 'Pre-submission quality control', ko: '제출 전 품질 관리' }
    ],
    notFor: [
      { en: 'Statistical analysis validation', ko: '통계 분석 검증' },
      { en: 'Citation formatting', ko: '인용 형식 지정' },
      { en: 'Writing style improvement', ko: '글쓰기 스타일 개선' }
    ],
    timeToResult: '15-30 minutes (for typical 6,000-word manuscript)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You have a complete manuscript draft ready', ko: '완성된 원고 초안이 준비되었을 때' },
      { en: 'You want to ensure all sections align with your research questions', ko: '모든 섹션이 연구 질문과 일치하는지 확인하고 싶을 때' },
      { en: 'Reviewers previously noted inconsistencies', ko: '리뷰어가 이전에 불일치를 지적했을 때' },
      { en: 'You are finalizing before submission', ko: '제출 전 마무리할 때' }
    ],
    dontUseWhen: [
      { en: 'Manuscript is still in early draft stage', ko: '원고가 아직 초기 초안 단계일 때' },
      { en: 'You need help with statistical methods', ko: '통계 방법에 대한 도움이 필요할 때' },
      { en: 'You want citation or formatting help', ko: '인용이나 형식에 대한 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'F2', condition: { en: 'For structured reporting guideline compliance', ko: '구조화된 보고 지침 준수를 위해' } },
      { agentId: 'F4', condition: { en: 'For detecting questionable research practices', ko: '의심스러운 연구 관행 탐지를 위해' } },
      { agentId: 'G2', condition: { en: 'For improving writing clarity and impact', ko: '글쓰기 명확성과 영향력 향상을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Sarah Chen',
        field: { en: 'Education', ko: '교육학' }
      },
      challenge: {
        en: 'Research questions in introduction focused on qualitative themes, but results reported only quantitative survey data',
        ko: '서론의 연구 질문은 질적 주제에 집중했지만, 결과는 정량적 설문조사 데이터만 보고'
      },
      solution: {
        en: 'F1-ConsistencyChecker identified the misalignment and recommended adding qualitative interview analysis',
        ko: 'F1-일관성검사자가 불일치를 식별하고 질적 인터뷰 분석 추가를 권장'
      },
      outcome: {
        en: 'Manuscript accepted after minor revisions; reviewers praised comprehensive mixed-methods approach',
        ko: '경미한 수정 후 원고 승인; 리뷰어들이 포괄적인 혼합 방법 접근을 칭찬'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '3 critical inconsistencies resolved, 25-minute review time' }
      ]
    }
  ],
  vsProcess: {
    type: 'LIGHT',
    phases: [
      { number: 1, title: { en: 'Cross-Reference Check', ko: '상호 참조 확인' }, purpose: { en: 'Verify RQ-method-results alignment', ko: 'RQ-방법-결과 정렬 확인' } },
      { number: 2, title: { en: 'Terminology Consistency', ko: '용어 일관성' }, purpose: { en: 'Check consistent use of terms', ko: '용어의 일관된 사용 확인' } },
      { number: 3, title: { en: 'Logic Flow', ko: '논리 흐름' }, purpose: { en: 'Verify argument coherence', ko: '논증 일관성 확인' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript', description: { en: 'Complete draft document', ko: '완성된 초안 문서' } },
    ],
  },
};
