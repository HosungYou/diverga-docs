import type { ExtendedAgentContent } from '../types';

export const g4Content: ExtendedAgentContent = {
  agentId: 'G4',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Template Selection', ko: '템플릿 선택' },
        purpose: { en: 'Choose OSF, AsPredicted, or RR template', ko: 'OSF, AsPredicted 또는 RR 템플릿 선택' }
      },
      {
        number: 2,
        title: { en: 'Hypothesis Specification', ko: '가설 명세' },
        purpose: { en: 'Document all specific predictions', ko: '모든 구체적 예측 문서화' }
      },
      {
        number: 3,
        title: { en: 'Analysis Plan', ko: '분석 계획' },
        purpose: { en: 'Specify exact analysis procedures', ko: '정확한 분석 절차 명세' }
      },
    ],
  },
  checkpoints: [
    {
      id: 'CP_PREREGISTRATION_APPROVAL',
      description: { en: 'Preregistration should be reviewed for completeness', ko: '사전등록 완전성 검토 필요' }
    }
  ],
  inputRequirements: {
    required: [
      { name: 'research_design', description: { en: 'Complete study design', ko: '완전한 연구 설계' } },
      { name: 'hypotheses', description: { en: 'Specific testable hypotheses', ko: '구체적인 검증 가능한 가설' } },
      { name: 'analysis_plan', description: { en: 'Planned statistical analyses', ko: '계획된 통계 분석' } },
    ],
  },
  references: ['Nosek, B. A., et al. (2018). The preregistration revolution. PNAS.'],
};
