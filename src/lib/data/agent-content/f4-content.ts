import type { ExtendedAgentContent } from '../types';

export const f4Content: ExtendedAgentContent = {
  agentId: 'F4',
  quickSummary: {
    oneLiner: {
      en: 'The Integrity Inspector: Detects p-hacking, HARKing, and other questionable research practices',
      ko: '무결성 조사관: p-해킹, HARKing 및 기타 의심스러운 연구 관행 탐지'
    },
    bestFor: [
      { en: 'Self-auditing before submission to catch QRPs', ko: '제출 전 QRP 포착을 위한 자가 감사' },
      { en: 'Responding to reviewer concerns about research integrity', ko: '연구 무결성에 대한 리뷰어 우려에 대응' },
      { en: 'Ensuring qualitative research trustworthiness', ko: '질적 연구 신뢰성 보장' },
      { en: 'Detecting potential p-hacking or data fishing', ko: '잠재적 p-해킹 또는 데이터 낚시 탐지' },
      { en: 'Improving transparency and credibility', ko: '투명성과 신뢰성 향상' }
    ],
    notFor: [
      { en: 'Statistical analysis consultation', ko: '통계 분석 상담' },
      { en: 'Detecting plagiarism or fabrication', ko: '표절 또는 조작 탐지' },
      { en: 'General writing quality improvement', ko: '일반적인 글쓰기 품질 향상' }
    ],
    timeToResult: '25-45 minutes (for comprehensive integrity audit)'
  },
  decisionHelper: {
    useWhen: [
      { en: 'You want to ensure your research meets integrity standards', ko: '연구가 무결성 기준을 충족하는지 확인하고 싶을 때' },
      { en: 'Reviewers raised concerns about statistical practices', ko: '리뷰어가 통계적 관행에 대한 우려를 제기했을 때' },
      { en: 'You are conducting qualitative research needing trustworthiness audit', ko: '신뢰성 감사가 필요한 질적 연구를 수행할 때' },
      { en: 'You want to preemptively address potential bias concerns', ko: '잠재적 편향 우려를 선제적으로 해결하고 싶을 때' }
    ],
    dontUseWhen: [
      { en: 'You need help designing statistical analyses', ko: '통계 분석 설계에 대한 도움이 필요할 때' },
      { en: 'You want general manuscript feedback', ko: '일반적인 원고 피드백이 필요할 때' },
      { en: 'You are looking for plagiarism detection', ko: '표절 탐지를 찾을 때' }
    ],
    alternativeAgents: [
      { agentId: 'D1', condition: { en: 'For identifying specific bias types', ko: '특정 편향 유형 식별을 위해' } },
      { agentId: 'D2', condition: { en: 'For construct and external validity', ko: '구성 및 외적 타당도를 위해' } },
      { agentId: 'F3', condition: { en: 'For transparency through data sharing', ko: '데이터 공유를 통한 투명성을 위해' } }
    ]
  },
  badges: [{ type: 'essential' }],
  successStories: [
    {
      researcher: {
        name: 'Dr. Priya Sharma',
        field: { en: 'Organizational Behavior', ko: '조직 행동학' }
      },
      challenge: {
        en: 'Multiple regression models tested; unclear if final model was prespecified or selected post-hoc',
        ko: '여러 회귀 모델 테스트; 최종 모델이 사전 지정되었는지 사후 선택되었는지 불분명'
      },
      solution: {
        en: 'F4-IntegrityInspector flagged potential HARKing and recommended preregistration + sensitivity analyses',
        ko: 'F4-무결성조사관이 잠재적 HARKing을 표시하고 사전등록 + 민감도 분석을 권장'
      },
      outcome: {
        en: 'Researcher added exploratory analysis disclosure; paper accepted with strong integrity credentials',
        ko: '연구자가 탐색적 분석 공개를 추가; 강력한 무결성 자격으로 논문 승인'
      },
      metrics: [
        { label: { en: 'Results', ko: '결과' }, value: '2 QRP flags addressed, exploratory vs. confirmatory distinction added' }
      ]
    }
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'QRP Detection', ko: 'QRP 탐지' }, purpose: { en: 'Detect p-hacking, HARKing, cherry-picking', ko: 'p-해킹, HARKing, 체리피킹 탐지' } },
      { number: 2, title: { en: 'Trustworthiness Assessment', ko: '신뢰성 평가' }, purpose: { en: 'Apply qualitative trustworthiness criteria', ko: '질적 신뢰성 기준 적용' } },
      { number: 3, title: { en: 'Recommendations', ko: '권장사항' }, purpose: { en: 'Provide specific improvement suggestions', ko: '구체적 개선 제안 제공' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'research_document', description: { en: 'Manuscript or analysis results', ko: '원고 또는 분석 결과' } },
    ],
  },
  references: ['Simmons, J. P., et al. (2011). False-Positive Psychology. Psychological Science.'],
};
