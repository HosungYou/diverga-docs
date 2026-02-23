import type { ExtendedAgentContent } from '../types';

export const g1Content: ExtendedAgentContent = {
  agentId: 'G1',
  quickSummary: {
    oneLiner: {
      en: 'The Journal Navigator: Real-time journal matching with OpenAlex API — live metrics, not static data',
      ko: '저널 네비게이터: OpenAlex API 기반 실시간 저널 매칭 — 정적 데이터가 아닌 라이브 메트릭'
    },
    bestFor: [
      { en: 'Finding journals that match your research scope with live data', ko: '실시간 데이터로 연구 범위와 일치하는 저널 찾기' },
      { en: 'Comparing journal metrics side by side (h-index, citations, OA)', ko: '저널 메트릭 나란히 비교 (h-index, 인용, OA)' },
      { en: 'Analyzing publication trends over years', ko: '연도별 출판 트렌드 분석' },
      { en: 'Identifying realistic submission targets with real acceptance data', ko: '실제 데이터로 현실적인 투고 대상 식별' },
      { en: 'Planning cascading submission strategies', ko: '단계적 제출 전략 계획' }
    ],
    notFor: [
      { en: 'Improving manuscript quality', ko: '원고 품질 향상' },
      { en: 'Formatting references', ko: '참고 문헌 형식 지정' },
      { en: 'Statistical analysis consultation', ko: '통계 분석 상담' }
    ],
    timeToResult: '15-25 minutes (for 5 journal recommendations with live metrics)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You have a complete manuscript ready for submission', ko: '제출 준비가 완료된 완성 원고가 있을 때' },
      { en: 'You need realistic journal targets beyond "top-tier only"', ko: '"최상위만" 추천하는 것 이상의 현실적인 저널 대상이 필요할 때' },
      { en: 'You want to compare journals with real-time metrics', ko: '실시간 메트릭으로 저널을 비교하고 싶을 때' },
      { en: 'You want to see publication trends and OA status', ko: '출판 트렌드와 OA 현황을 보고 싶을 때' },
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
  badges: [{ type: 'essential' }, { type: 'new' }],
  checkpoints: [
    {
      id: 'CP_JOURNAL_PRIORITIES',
      description: {
        en: 'After API data collection, before ranking — confirms user priorities (IF, speed, OA, scope fit)',
        ko: 'API 데이터 수집 후, 순위 배정 전 — 사용자 우선순위 확인 (IF, 속도, OA, 범위 적합성)'
      }
    },
    {
      id: 'CP_JOURNAL_SELECTION',
      description: {
        en: 'After comparison table presented — user selects target journal(s) from real-time data',
        ko: '비교 테이블 제시 후 — 사용자가 실시간 데이터에서 대상 저널 선택'
      }
    }
  ],
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
        en: 'G1 used OpenAlex live metrics to identify 5 mid-tier journals with better scope fit and verified 30-40% acceptance rates',
        ko: 'G1이 OpenAlex 실시간 메트릭을 사용하여 더 나은 범위 적합성과 검증된 30-40% 승인률을 가진 5개 중간 저널을 식별'
      },
      outcome: {
        en: 'Accepted at second-choice journal with 8-week turnaround; paper now cited 23 times',
        ko: '8주 처리 기간으로 두 번째 선택 저널에 승인; 현재 논문 23회 인용'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '5 journals ranked with live data, accepted on 2nd submission, 8-week review cycle' }
      ]
    }
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'High-IF Default Avoidance', ko: '고-IF 기본 회피' },
        purpose: { en: 'Avoid only recommending top-tier journals; use real metrics from OpenAlex', ko: '최고급 저널만 추천하는 것 회피; OpenAlex 실시간 메트릭 활용' }
      },
      {
        number: 2,
        title: { en: 'Live Data Assessment', ko: '실시간 데이터 평가' },
        purpose: { en: 'Match manuscript scope to journal aims using publication trends and citation data', ko: '출판 트렌드와 인용 데이터를 사용하여 원고 범위를 저널 목표에 매칭' }
      },
      {
        number: 3,
        title: { en: 'Strategic Recommendation', ko: '전략적 추천' },
        purpose: { en: 'Consider turnaround time, OA status, h-index, and acceptance rates from live API', ko: 'API에서 처리 시간, OA 현황, h-index, 승인률 고려' }
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
      { name: 'priorities', description: { en: 'Ranking preference: IF, speed, OA, scope fit', ko: '순위 우선순위: IF, 속도, OA, 범위 적합성' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Top Matches', content: { en: '5 journals ranked by fit with live OpenAlex metrics', ko: 'OpenAlex 실시간 메트릭으로 적합성별 상위 5개 저널' } },
      { title: 'Real-Time Comparison', content: { en: 'Side-by-side table: h-index, citations, works count, OA status', ko: '나란히 비교 테이블: h-index, 인용 수, 논문 수, OA 현황' } },
      { title: 'Publication Trends', content: { en: 'Year-over-year publication and citation trends', ko: '연도별 출판 및 인용 트렌드' } },
      { title: 'Strategy Notes', content: { en: 'Submission tips and cover letter template for each journal', ko: '각 저널의 투고 팁과 커버 레터 템플릿' } },
    ],
  },
};
