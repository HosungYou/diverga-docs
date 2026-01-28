import type { ExtendedAgentContent } from '../types';

export const c1Content: ExtendedAgentContent = {
  agentId: 'C1',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Obvious Design Avoidance', ko: '명백한 설계 회피' },
        purpose: { en: 'Avoid defaulting to simple pre-post designs', ko: '단순 사전-사후 설계를 기본으로 하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Creative Design Exploration', ko: '창의적 설계 탐색' },
        purpose: { en: 'Explore RDD, SMART, adaptive designs', ko: 'RDD, SMART, 적응형 설계 탐색' }
      },
      {
        number: 3,
        title: { en: 'Power Analysis Integration', ko: '검정력 분석 통합' },
        purpose: { en: 'Calculate sample sizes for chosen design', ko: '선택된 설계에 대한 표본 크기 계산' }
      },
      {
        number: 4,
        title: { en: 'Validity Assessment', ko: '타당도 평가' },
        purpose: { en: 'Evaluate internal and external validity threats', ko: '내적 및 외적 타당도 위협 평가' }
      },
      {
        number: 5,
        title: { en: 'Design Recommendation', ko: '설계 권장' },
        purpose: { en: 'Present T-Score ranked design options', ko: 'T-Score 순위 설계 옵션 제시' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_METHODOLOGY_APPROVAL',
      description: { en: 'Design must be approved before data collection', ko: '데이터 수집 전 설계 승인 필요' }
    }
  ],
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'Approved RQ from A1', ko: 'A1에서 승인된 RQ' }
      },
      {
        name: 'paradigm',
        description: { en: 'Confirmed from A5', ko: 'A5에서 확인됨' }
      },
    ],
  },
  references: ['Shadish, W. R., Cook, T. D., & Campbell, D. T. (2002). Experimental and Quasi-Experimental Designs.'],
};
