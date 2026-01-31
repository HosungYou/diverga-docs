import type { ExtendedAgentContent } from '../types';

export const b2Content: ExtendedAgentContent = {
  agentId: 'B2',

  // === NEW USER-FRIENDLY FIELDS ===
  persona: {
    archetype: 'The Methodological Judge',
    personality: {
      en: 'Fair but demanding. Examines every study with the rigor of a courtroom judge weighing evidence. Never harsh, but always thorough. Celebrates well-designed studies while noting every methodological weakness.',
      ko: '공정하지만 까다롭습니다. 법정 판사가 증거를 평가하듯 모든 연구를 엄격하게 검토합니다. 결코 가혹하지 않지만 항상 철저합니다. 잘 설계된 연구를 칭찬하면서도 모든 방법론적 약점을 기록합니다.',
    },
    voiceSample: {
      en: '"This RCT has excellent allocation concealment, but look at the attrition rate—23% dropout with no intention-to-treat analysis. That moves us from low to moderate risk of bias."',
      ko: '"이 RCT는 배정 은폐가 훌륭하지만, 탈락률을 보세요—23% 탈락에 치료의향분석이 없습니다. 이로 인해 비뚤림 위험이 낮음에서 중간으로 이동합니다."',
    },
    motto: {
      en: 'Quality evidence deserves quality assessment.',
      ko: '양질의 증거는 양질의 평가를 받을 자격이 있습니다.',
    },
    catchphrase: {
      en: 'Trust, but verify. Then verify again.',
      ko: '신뢰하되 검증하세요. 그리고 다시 검증하세요.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Assesses study quality using the right tool for each research design',
      ko: '각 연구 설계에 적합한 도구로 연구 품질 평가',
    },
    bestFor: [
      { en: 'Risk of bias assessment', ko: '비뚤림 위험 평가' },
      { en: 'GRADE certainty ratings', ko: 'GRADE 확실성 등급' },
      { en: 'Study quality appraisal', ko: '연구 품질 평가' },
      { en: 'Evidence synthesis quality tables', ko: '증거 종합 품질 표' },
    ],
    notFor: [
      { en: 'Initial literature screening', ko: '초기 문헌 스크리닝' },
      { en: 'Effect size calculation', ko: '효과크기 계산' },
    ],
    timeToResult: '15-30 min per study',
  },

  useCases: [
    {
      title: { en: 'RCT Risk of Bias Assessment', ko: 'RCT 비뚤림 위험 평가' },
      scenario: {
        en: 'A meta-analyst has 34 randomized controlled trials on cognitive behavioral therapy for depression. Each needs systematic risk of bias assessment.',
        ko: '메타분석가가 우울증 인지행동치료에 대한 34개 무작위 대조 시험을 보유하고 있습니다. 각각 체계적인 비뚤림 위험 평가가 필요합니다.',
      },
      outcome: {
        en: 'Complete RoB 2 assessments with domain-level judgments, supporting quotes from papers, and an overall risk summary table.',
        ko: '도메인 수준 판단, 논문 인용 근거, 전체 위험 요약 표가 포함된 RoB 2 평가 완료.',
      },
      discipline: 'Clinical Psychology',
      complexity: 'advanced',
    },
    {
      title: { en: 'Observational Study Quality Assessment', ko: '관찰 연구 품질 평가' },
      scenario: {
        en: 'An epidemiology team is reviewing cohort studies on workplace interventions. They need appropriate quality assessment that accounts for confounding.',
        ko: '역학팀이 직장 중재에 관한 코호트 연구를 검토하고 있습니다. 교란을 설명하는 적절한 품질 평가가 필요합니다.',
      },
      outcome: {
        en: 'ROBINS-I assessments for each cohort study, with attention to selection bias and confounding domains.',
        ko: '선택 비뚤림 및 교란 도메인에 주의를 기울인 각 코호트 연구의 ROBINS-I 평가.',
      },
      discipline: 'Public Health / Epidemiology',
      complexity: 'advanced',
    },
    {
      title: { en: 'Mixed-Methods Quality Appraisal', ko: '혼합방법 품질 평가' },
      scenario: {
        en: 'A nursing researcher is conducting a mixed-methods systematic review. Studies include qualitative interviews, surveys, and intervention studies.',
        ko: '간호학 연구자가 혼합방법 체계적 문헌고찰을 수행하고 있습니다. 연구에는 질적 인터뷰, 설문조사, 중재 연구가 포함됩니다.',
      },
      outcome: {
        en: 'MMAT (Mixed Methods Appraisal Tool) assessments tailored to each design type, with integration quality scores.',
        ko: '각 설계 유형에 맞춤화된 MMAT(혼합방법 평가 도구) 평가와 통합 품질 점수.',
      },
      discipline: 'Health Sciences / Nursing',
      complexity: 'intermediate',
    },
    {
      title: { en: 'GRADE Evidence Certainty', ko: 'GRADE 증거 확실성' },
      scenario: {
        en: 'A Cochrane review team needs to rate the certainty of evidence for each outcome using GRADE methodology.',
        ko: 'Cochrane 리뷰팀이 GRADE 방법론을 사용하여 각 결과에 대한 증거 확실성을 평가해야 합니다.',
      },
      outcome: {
        en: 'Summary of Findings table with GRADE ratings (High/Moderate/Low/Very Low), footnotes explaining downgrades.',
        ko: 'GRADE 등급(높음/중간/낮음/매우 낮음)이 포함된 연구결과 요약표, 등급 하향 설명 각주.',
      },
      discipline: 'Evidence-Based Medicine',
      complexity: 'advanced',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Assess risk of bias for this RCT using RoB 2. Here is the methods section: [paste methods]',
        ko: 'RoB 2를 사용하여 이 RCT의 비뚤림 위험을 평가해 주세요. 방법 섹션입니다: [방법 붙여넣기]',
      },
      context: {
        en: 'Use when you have an RCT and need systematic bias assessment.',
        ko: 'RCT가 있고 체계적인 비뚤림 평가가 필요할 때 사용.',
      },
      expectedResponse: {
        en: 'Domain-by-domain RoB 2 assessment with judgments (Low/Some concerns/High) and supporting evidence from the text.',
        ko: '도메인별 RoB 2 평가와 판단(낮음/일부 우려/높음) 및 텍스트 근거.',
      },
    },
    {
      prompt: {
        en: 'Which quality appraisal tool should I use for [study design]? I have [number] studies to assess.',
        ko: '[연구 설계]에 어떤 품질 평가 도구를 사용해야 하나요? 평가할 연구가 [개수]개 있습니다.',
      },
      context: {
        en: 'Use when uncertain which assessment tool matches your study designs.',
        ko: '어떤 평가 도구가 연구 설계에 맞는지 불확실할 때 사용.',
      },
      expectedResponse: {
        en: 'Recommendation of appropriate tool (RoB 2, ROBINS-I, JBI, MMAT, etc.) with rationale and step-by-step guide.',
        ko: '적절한 도구(RoB 2, ROBINS-I, JBI, MMAT 등) 추천과 근거 및 단계별 가이드.',
      },
    },
    {
      prompt: {
        en: 'Create a GRADE Summary of Findings table for these outcomes: [list outcomes with effect estimates]',
        ko: '다음 결과에 대한 GRADE 연구결과 요약표를 만들어 주세요: [효과 추정치와 함께 결과 나열]',
      },
      context: {
        en: 'Use when you have pooled effect estimates and need to rate evidence certainty.',
        ko: '통합 효과 추정치가 있고 증거 확실성을 평가해야 할 때 사용.',
      },
      expectedResponse: {
        en: 'Formatted SoF table with GRADE ratings, absolute effects, and footnotes explaining any downgrades or upgrades.',
        ko: 'GRADE 등급, 절대 효과, 등급 하향/상향 설명 각주가 포함된 형식화된 SoF 표.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Conducting systematic review or meta-analysis', ko: '체계적 문헌고찰 또는 메타분석 수행 시' },
      { en: 'Need to assess study quality/risk of bias', ko: '연구 품질/비뚤림 위험 평가 필요 시' },
      { en: 'Creating GRADE evidence profiles', ko: 'GRADE 증거 프로필 생성 시' },
      { en: 'Appraising mixed study designs', ko: '혼합 연구 설계 평가 시' },
    ],
    dontUseWhen: [
      { en: 'Still in search/screening phase', ko: '아직 검색/스크리닝 단계일 때' },
      { en: 'Need to extract effect sizes (use B3)', ko: '효과크기 추출 필요 시 (B3 사용)' },
      { en: 'Doing narrative review without quality assessment', ko: '품질 평가 없는 서술적 리뷰 수행 시' },
    ],
    alternativeAgents: [
      { agentId: 'B3', condition: { en: 'Need to extract/calculate effect sizes', ko: '효과크기 추출/계산 필요 시' } },
      { agentId: 'D1', condition: { en: 'Need broader bias detection beyond study quality', ko: '연구 품질 외 더 넓은 비뚤림 탐지 필요 시' } },
    ],
  },

  journey: {
    startState: {
      en: 'Stack of studies with unknown quality and uncertain evidence',
      ko: '품질 미상, 증거 불확실한 연구 더미',
    },
    transformation: [
      { en: 'Study designs identified and matched to appropriate tools', ko: '연구 설계 식별 및 적절한 도구에 매칭' },
      { en: 'Each study assessed domain-by-domain', ko: '각 연구를 도메인별로 평가' },
      { en: 'Quality ratings assigned with transparent rationale', ko: '투명한 근거와 함께 품질 등급 부여' },
      { en: 'GRADE certainty applied to pooled evidence', ko: '통합 증거에 GRADE 확실성 적용' },
    ],
    endState: {
      en: 'Evidence quality table ready for results section with defensible ratings',
      ko: '방어 가능한 등급이 포함된 결과 섹션용 증거 품질 표 준비 완료',
    },
    timeEstimate: '4-12 hours depending on study count',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a judge in a courtroom',
        ko: '법정의 판사처럼',
      },
      explanation: {
        en: 'Just as a judge weighs evidence, considers testimony reliability, and makes reasoned verdicts, B2 examines each study methodological rigor, notes weaknesses, and delivers fair quality judgments.',
        ko: '판사가 증거를 평가하고, 증언의 신뢰성을 고려하며, 합리적인 판결을 내리는 것처럼, B2는 각 연구의 방법론적 엄격성을 검토하고, 약점을 기록하며, 공정한 품질 판단을 내립니다.',
      },
    },
    {
      metaphor: {
        en: 'Like a restaurant health inspector',
        ko: '식당 위생 검사관처럼',
      },
      explanation: {
        en: 'A health inspector uses standardized checklists, looks for specific problems (like contamination risks), and grades establishments. Similarly, B2 uses validated tools to assess research "hygiene"—are proper controls in place? Is bias contamination minimized?',
        ko: '위생 검사관은 표준화된 체크리스트를 사용하고, 특정 문제(오염 위험 등)를 찾으며, 시설에 등급을 매깁니다. 마찬가지로 B2는 검증된 도구를 사용하여 연구 "위생"을 평가합니다—적절한 통제가 있는가? 비뚤림 오염이 최소화되었는가?',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Always have two independent raters assess quality, then resolve disagreements by consensus or third rater.',
        ko: '항상 두 명의 독립적인 평가자가 품질을 평가한 후 합의 또는 제3 평가자로 불일치를 해결하세요.',
      },
      source: { en: 'Cochrane Handbook Chapter 8', ko: 'Cochrane Handbook 8장' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'Use domain-level judgments, not overall scores. "Low risk of bias" overall can hide critical issues in specific domains.',
        ko: '전체 점수가 아닌 도메인 수준 판단을 사용하세요. 전체 "비뚤림 위험 낮음"이 특정 도메인의 심각한 문제를 숨길 수 있습니다.',
      },
      source: { en: 'RoB 2 development team guidance', ko: 'RoB 2 개발팀 지침' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For GRADE, downgrade for imprecision when 95% CI crosses both "no effect" and "minimally important difference" thresholds.',
        ko: 'GRADE에서 95% CI가 "효과 없음"과 "최소 중요 차이" 임계값을 모두 교차할 때 정밀성 부족으로 등급을 하향하세요.',
      },
      source: { en: 'GRADE Working Group criteria', ko: 'GRADE 워킹그룹 기준' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Required for Meta-Analysis', ko: '메타분석 필수' } },
    { type: 'advanced', label: { en: 'Expert-Level Appraisal', ko: '전문가 수준 평가' } },
  ],

  faq: [
    {
      question: {
        en: 'Should I use RoB 2 or the original RoB tool?',
        ko: 'RoB 2와 원래 RoB 도구 중 무엇을 사용해야 하나요?',
      },
      answer: {
        en: 'Use RoB 2 (published 2019) for new reviews—it is the current Cochrane standard. The original tool is outdated. RoB 2 assesses bias at the outcome level and has clearer signaling questions.',
        ko: '새 리뷰에는 RoB 2(2019년 출판)를 사용하세요—현재 Cochrane 표준입니다. 원래 도구는 구식입니다. RoB 2는 결과 수준에서 비뚤림을 평가하고 더 명확한 신호 질문이 있습니다.',
      },
    },
    {
      question: {
        en: 'How do I handle studies with multiple outcomes in quality assessment?',
        ko: '품질 평가에서 여러 결과가 있는 연구를 어떻게 처리하나요?',
      },
      answer: {
        en: 'Assess quality separately for each outcome of interest. A study can be high risk for one outcome (e.g., self-reported) but low risk for another (e.g., objective measure).',
        ko: '관심 있는 각 결과에 대해 품질을 별도로 평가하세요. 한 연구가 한 결과(예: 자가 보고)에서는 고위험이지만 다른 결과(예: 객관적 측정)에서는 저위험일 수 있습니다.',
      },
    },
    {
      question: {
        en: 'When should I use GRADE versus just RoB?',
        ko: 'GRADE와 RoB 중 언제 무엇을 사용해야 하나요?',
      },
      answer: {
        en: 'RoB assesses individual study quality. GRADE assesses certainty across all studies for a specific outcome. Use both: RoB first for each study, then GRADE to synthesize certainty across the evidence body.',
        ko: 'RoB는 개별 연구 품질을 평가합니다. GRADE는 특정 결과에 대한 모든 연구의 확실성을 평가합니다. 둘 다 사용하세요: 먼저 각 연구에 RoB, 그 다음 증거 전체의 확실성을 종합하는 GRADE.',
      },
    },
  ],

  // === EXISTING FIELDS ===
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Automatic Tool Avoidance', ko: '자동 도구 회피' }, purpose: { en: 'Avoid blindly applying RoB2 to all studies', ko: '모든 연구에 RoB2를 무분별하게 적용하는 것 회피' } },
      { number: 2, title: { en: 'Context-Adaptive Selection', ko: '맥락 적응 선택' }, purpose: { en: 'Match appraisal tool to study design', ko: '연구 설계에 맞는 평가 도구 매칭' } },
      { number: 3, title: { en: 'Graded Assessment', ko: '등급화된 평가' }, purpose: { en: 'Apply GRADE for evidence certainty', ko: '증거 확실성을 위한 GRADE 적용' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'study_list', description: { en: 'List of studies to appraise', ko: '평가할 연구 목록' } },
      { name: 'study_designs', description: { en: 'Design type of each study', ko: '각 연구의 설계 유형' } },
    ],
  },
  references: [
    'Sterne, J. A. C., et al. (2019). RoB 2: Risk of bias tool. BMJ.',
    'Guyatt, G. H., et al. (2008). GRADE guidelines. BMJ.',
  ],
};
