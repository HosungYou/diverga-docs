import type { ExtendedAgentContent } from '../types';

export const g1Content: ExtendedAgentContent = {
  agentId: 'G1',
  quickSummary: {
    oneLiner: {
      en: 'The Journal Navigator: Matches your manuscript to the best-fit journals, not just high-IF ones',
      ko: '저널 네비게이터: 단순히 고-IF 저널이 아니라 가장 적합한 저널에 원고를 매칭'
    },
    bestFor: [
      { en: 'Finding journals that match your research scope', ko: '연구 범위와 일치하는 저널 찾기' },
      { en: 'Balancing impact factor with acceptance probability', ko: '영향 지수와 승인 확률의 균형 맞추기' },
      { en: 'Considering open access and turnaround time', ko: '오픈 액세스 및 처리 시간 고려' },
      { en: 'Identifying realistic submission targets', ko: '현실적인 제출 대상 식별' },
      { en: 'Planning cascading submission strategies', ko: '단계적 제출 전략 계획' }
    ],
    notFor: [
      { en: 'Improving manuscript quality', ko: '원고 품질 향상' },
      { en: 'Formatting references', ko: '참고 문헌 형식 지정' },
      { en: 'Statistical analysis consultation', ko: '통계 분석 상담' }
    ],
    timeToResult: '15-25 minutes (for 5 journal recommendations)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You have a complete manuscript ready for submission', ko: '제출 준비가 완료된 완성 원고가 있을 때' },
      { en: 'You need realistic journal targets beyond "top-tier only"', ko: '"최상위만" 추천하는 것 이상의 현실적인 저널 대상이 필요할 때' },
      { en: 'You want to consider acceptance rates and review timelines', ko: '승인률과 리뷰 타임라인을 고려하고 싶을 때' },
      { en: 'You are planning a multi-journal submission strategy', ko: '다중 저널 제출 전략을 계획할 때' }
    ],
    dontUseWhen: [
      { en: 'Manuscript is not yet complete', ko: '원고가 아직 완성되지 않았을 때' },
      { en: 'You only want to submit to one specific journal', ko: '특정 저널 하나에만 제출하고 싶을 때' },
      { en: 'You need help improving manuscript quality first', ko: '먼저 원고 품질 향상에 대한 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'G2', condition: { en: 'For improving manuscript communication', ko: '원고 커뮤니케이션 향상을 위해' } },
      { agentId: 'F2', condition: { en: 'For ensuring reporting guideline compliance', ko: '보고 지침 준수 보장을 위해' } },
      { agentId: 'G3', condition: { en: 'For handling peer review feedback', ko: '동료 리뷰 피드백 처리를 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Emily Wong',
        field: { en: 'Education', ko: '교육학' }
      },
      challenge: {
        en: 'Initially aimed only at top-tier journals but faced repeated rejections due to scope mismatch',
        ko: '초기에는 최상위 저널만을 목표로 했지만 범위 불일치로 반복적인 거부에 직면'
      },
      solution: {
        en: 'G1-JournalNavigator identified 5 mid-tier journals with better scope fit and 30-40% acceptance rates',
        ko: 'G1-저널네비게이터가 더 나은 범위 적합성과 30-40% 승인률을 가진 5개 중간 저널을 식별'
      },
      outcome: {
        en: 'Accepted at second-choice journal with 8-week turnaround; paper now cited 23 times',
        ko: '8주 처리 기간으로 두 번째 선택 저널에 승인; 현재 논문 23회 인용'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '5 journals ranked, accepted on 2nd submission, 8-week review cycle' }
      ]
    }
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'High-IF Default Avoidance', ko: '고-IF 기본 회피' },
        purpose: { en: 'Avoid only recommending top-tier journals', ko: '최고급 저널만 추천하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Fit Assessment', ko: '적합성 평가' },
        purpose: { en: 'Match manuscript scope to journal aims', ko: '원고 범위를 저널 목표에 매칭' }
      },
      {
        number: 3,
        title: { en: 'Strategic Recommendation', ko: '전략적 추천' },
        purpose: { en: 'Consider turnaround time, OA, and acceptance rates', ko: '처리 시간, OA, 승인률 고려' }
      },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'manuscript_abstract', description: { en: 'Abstract or summary of paper', ko: '논문 초록 또는 요약' } },
      { name: 'research_field', description: { en: 'Academic discipline', ko: '학문 분야' } },
    ],
    optional: [
      { name: 'timeline', description: { en: 'Publication deadline if any', ko: '출판 마감일(있는 경우)' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Top Matches', content: { en: '5 journals ranked by fit', ko: '적합성별 상위 5개 저널' } },
      { title: 'Impact Metrics', content: { en: 'IF, CiteScore, acceptance rate', ko: 'IF, CiteScore, 승인률' } },
      { title: 'Strategy Notes', content: { en: 'Submission tips for each journal', ko: '각 저널의 투고 팁' } },
    ],
  },
};
