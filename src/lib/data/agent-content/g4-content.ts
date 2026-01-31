import type { ExtendedAgentContent } from '../types';

export const g4Content: ExtendedAgentContent = {
  agentId: 'G4',
  quickSummary: {
    oneLiner: {
      en: 'The Pre-Registration Pro: Creates comprehensive preregistration documents for OSF, AsPredicted, or Registered Reports',
      ko: '사전등록 전문가: OSF, AsPredicted 또는 등록된 보고서를 위한 포괄적 사전등록 문서 작성'
    },
    bestFor: [
      { en: 'Preregistering confirmatory studies on OSF', ko: 'OSF에서 확증적 연구 사전등록' },
      { en: 'Creating AsPredicted quick preregistrations', ko: 'AsPredicted 빠른 사전등록 생성' },
      { en: 'Preparing Registered Report Stage 1 submissions', ko: '등록된 보고서 1단계 제출 준비' },
      { en: 'Documenting exact analysis plans before data collection', ko: '데이터 수집 전 정확한 분석 계획 문서화' },
      { en: 'Increasing research credibility and transparency', ko: '연구 신뢰성과 투명성 향상' }
    ],
    notFor: [
      { en: 'Exploratory research without specific hypotheses', ko: '특정 가설 없는 탐색적 연구' },
      { en: 'Already-collected data (use Registered Report as-a-format instead)', ko: '이미 수집된 데이터 (대신 형식으로서의 등록된 보고서 사용)' },
      { en: 'Qualitative studies (though some qualitative preregistration possible)', ko: '질적 연구 (일부 질적 사전등록 가능하지만)' }
    ],
    timeToResult: '30-60 minutes (for complete preregistration document)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You have clear hypotheses before data collection', ko: '데이터 수집 전에 명확한 가설이 있을 때' },
      { en: 'You want to prevent p-hacking or HARKing', ko: 'p-해킹 또는 HARKing을 방지하고 싶을 때' },
      { en: 'Target journal encourages or requires preregistration', ko: '목표 저널이 사전등록을 권장하거나 요구할 때' },
      { en: 'You are submitting a Registered Report', ko: '등록된 보고서를 제출할 때' }
    ],
    dontUseWhen: [
      { en: 'Data already collected (preregistration not possible)', ko: '데이터가 이미 수집됨 (사전등록 불가능)' },
      { en: 'Purely exploratory research', ko: '순수 탐색적 연구' },
      { en: 'You need help with statistical analysis methods', ko: '통계 분석 방법에 대한 도움이 필요할 때' }
    ],
    alternativeAgents: [
      { agentId: 'F3', condition: { en: 'For data sharing and reproducibility', ko: '데이터 공유 및 재현성을 위해' } },
      { agentId: 'F4', condition: { en: 'For detecting QRPs in existing research', ko: '기존 연구에서 QRP 탐지를 위해' } },
      { agentId: 'C2', condition: { en: 'For statistical analysis planning', ko: '통계 분석 계획을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Lisa Martinez',
        field: { en: 'Education', ko: '교육학' }
      },
      challenge: {
        en: 'Journal offered Registered Report format but researcher unsure how to specify analysis plan precisely',
        ko: '저널이 등록된 보고서 형식을 제공했지만 연구자는 분석 계획을 정확하게 명세하는 방법을 몰랐음'
      },
      solution: {
        en: 'G4-PreRegistrationPro created comprehensive Stage 1 RR with exact power analysis, stopping rules, and analysis code',
        ko: 'G4-사전등록전문가가 정확한 검정력 분석, 중단 규칙 및 분석 코드가 포함된 포괄적 1단계 RR 작성'
      },
      outcome: {
        en: 'Stage 1 accepted with in-principle acceptance; Stage 2 published with Open Science badge',
        ko: '원칙적 승인으로 1단계 승인; 오픈 사이언스 배지와 함께 2단계 출판'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: 'RR Stage 1 approved, IPA granted, Stage 2 published with OS badge' }
      ]
    }
  ],
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
