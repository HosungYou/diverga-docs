import type { ExtendedAgentContent } from '../types';

export const g1Content: ExtendedAgentContent = {
  agentId: 'G1',
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
