import type { ExtendedAgentContent } from '../types';

export const b1Content: ExtendedAgentContent = {
  agentId: 'B1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Default Strategy Avoidance', ko: '기본 전략 회피' }, purpose: { en: 'Avoid basic keyword-only search strategies', ko: '기본 키워드 전용 검색 전략 회피' } },
      { number: 2, title: { en: 'Multi-method Search Design', ko: '다중 방법 검색 설계' }, purpose: { en: 'Combine Boolean, citation, snowball, pearl-growing', ko: 'Boolean, 인용, 스노볼, 진주 성장 결합' } },
      { number: 3, title: { en: 'Database Selection', ko: '데이터베이스 선택' }, purpose: { en: 'Select optimal databases for topic', ko: '주제에 최적인 데이터베이스 선택' } },
      { number: 4, title: { en: 'Search Execution Plan', ko: '검색 실행 계획' }, purpose: { en: 'Create reproducible search protocol', ko: '재현 가능한 검색 프로토콜 생성' } },
      { number: 5, title: { en: 'PRISMA Documentation', ko: 'PRISMA 문서화' }, purpose: { en: 'Document search in PRISMA 2020 format', ko: 'PRISMA 2020 형식으로 검색 문서화' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_question', description: { en: 'Refined research question', ko: '정제된 연구 질문' } },
      { name: 'review_type', description: { en: 'Systematic, scoping, meta-synthesis, etc.', ko: '체계적, 범위, 메타 합성 등' } },
    ],
  },
  outputFormat: {
    sections: [
      { title: 'Search Strategy', content: { en: 'Boolean queries per database', ko: '데이터베이스별 Boolean 쿼리' } },
      { title: 'Inclusion/Exclusion', content: { en: 'PICO/SPIDER-based criteria', ko: 'PICO/SPIDER 기반 기준' } },
      { title: 'PRISMA Flow', content: { en: 'Identification → Screening → Eligibility → Included', ko: '식별 → 스크리닝 → 적격성 → 포함' } },
    ],
  },
  references: [
    'Page, M. J., et al. (2021). PRISMA 2020 statement. BMJ.',
    'Booth, A. (2016). Searching for qualitative research. Qualitative Health Research.',
  ],
};
