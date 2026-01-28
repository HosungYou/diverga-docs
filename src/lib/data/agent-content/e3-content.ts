import type { ExtendedAgentContent } from '../types';

export const e3Content: ExtendedAgentContent = {
  agentId: 'E3',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      { number: 1, title: { en: 'Parallel Reporting Avoidance', ko: '병렬 보고 회피' }, purpose: { en: 'Avoid just reporting qual and quant separately', ko: '질적과 양적을 단순히 별도로 보고하는 것 회피' } },
      { number: 2, title: { en: 'Integration Strategy Design', ko: '통합 전략 설계' }, purpose: { en: 'Design meaningful integration points', ko: '의미 있는 통합 지점 설계' } },
      { number: 3, title: { en: 'Joint Display Creation', ko: '공동 디스플레이 생성' }, purpose: { en: 'Create visual representations of integration', ko: '통합의 시각적 표현 생성' } },
      { number: 4, title: { en: 'Data Transformation', ko: '데이터 변환' }, purpose: { en: 'Quantitize qual or qualitize quant', ko: '질적 양화 또는 양적 질화' } },
      { number: 5, title: { en: 'Meta-Inference Development', ko: '메타 추론 개발' }, purpose: { en: 'Develop integrated conclusions', ko: '통합된 결론 개발' } },
    ],
  },
  checkpoints: [{ id: 'CP_INTEGRATION_STRATEGY', description: { en: 'Integration approach should be reviewed', ko: '통합 접근법 검토 필요' } }],
  inputRequirements: {
    required: [
      { name: 'quantitative_findings', description: { en: 'Analyzed quant results', ko: '분석된 양적 결과' } },
      { name: 'qualitative_findings', description: { en: 'Analyzed qual themes', ko: '분석된 질적 주제' } },
    ],
  },
  references: ['Fetters, M. D., Curry, L. A., & Creswell, J. W. (2013). Achieving Integration in Mixed Methods Designs.'],
};
