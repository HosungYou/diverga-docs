import type { ExtendedAgentContent } from '../types';

export const b3Content: ExtendedAgentContent = {
  agentId: 'B3',

  // === NEW USER-FRIENDLY FIELDS ===
  persona: {
    archetype: 'The Numbers Whisperer',
    personality: {
      en: 'Fluent in statistics but never condescending. Translates intimidating formulas into plain language. Finds the story behind the numbers. Knows when Cohen\'s d is perfect and when odds ratios tell the truth better.',
      ko: '통계에 능통하지만 절대 잘난 체하지 않습니다. 위압적인 공식을 쉬운 말로 번역합니다. 숫자 뒤에 숨은 이야기를 찾습니다. Cohen\'s d가 완벽한 때와 오즈비가 진실을 더 잘 말해주는 때를 알고 있습니다.',
    },
    voiceSample: {
      en: '"Your t-value of 2.45 with n=30 per group? That converts to Cohen\'s d = 0.63—a medium effect. But wait, let me apply Hedges\' correction for your small sample. Now it\'s g = 0.61. Same story, just more honest."',
      ko: '"그룹당 n=30인 t값 2.45요? Cohen\'s d = 0.63으로 변환됩니다—중간 효과입니다. 잠깐, 소표본에 대한 Hedges 보정을 적용해 볼게요. 이제 g = 0.61입니다. 같은 이야기지만 더 정직해졌습니다."',
    },
    motto: {
      en: 'Every statistic wants to become an effect size.',
      ko: '모든 통계는 효과크기가 되고 싶어합니다.',
    },
    catchphrase: {
      en: 'p-values tell you if something happened. Effect sizes tell you if it matters.',
      ko: 'p값은 무언가 일어났는지 알려주고, 효과크기는 그것이 중요한지 알려줍니다.',
    },
  },

  quickSummary: {
    oneLiner: {
      en: 'Extracts, calculates, and converts effect sizes from any statistical format',
      ko: '모든 통계 형식에서 효과크기를 추출, 계산, 변환',
    },
    bestFor: [
      { en: 'Meta-analysis data extraction', ko: '메타분석 데이터 추출' },
      { en: 'Converting diverse statistics to common metric', ko: '다양한 통계를 공통 메트릭으로 변환' },
      { en: 'Calculating effect sizes from published data', ko: '출판된 데이터에서 효과크기 계산' },
      { en: 'Applying small-sample corrections', ko: '소표본 보정 적용' },
    ],
    notFor: [
      { en: 'Quality/risk of bias assessment (use B2)', ko: '품질/비뚤림 위험 평가 (B2 사용)' },
      { en: 'Running actual meta-analysis models', ko: '실제 메타분석 모델 실행' },
    ],
    timeToResult: '5-15 min per study',
  },

  useCases: [
    {
      title: { en: 'Mixed Statistics Conversion', ko: '혼합 통계 변환' },
      scenario: {
        en: 'A meta-analyst has 40 studies reporting effects in different formats: some have means and SDs, some report t-tests, others only give F-values or p-values with sample sizes.',
        ko: '메타분석가가 다른 형식으로 효과를 보고하는 40개 연구를 가지고 있습니다: 일부는 평균과 표준편차, 일부는 t-검정, 다른 것들은 F값이나 표본 크기와 p값만 제공합니다.',
      },
      outcome: {
        en: 'All studies converted to a common metric (Hedges\' g) with variance estimates, ready for meta-analysis software.',
        ko: '모든 연구가 분산 추정치와 함께 공통 메트릭(Hedges\' g)으로 변환되어 메타분석 소프트웨어 준비 완료.',
      },
      discipline: 'Any quantitative field',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Correlation to Standardized Mean Difference', ko: '상관관계를 표준화 평균 차이로' },
      scenario: {
        en: 'An educational researcher is conducting a meta-analysis where half the studies report correlations (r) and half report group comparisons (d).',
        ko: '교육 연구자가 절반의 연구는 상관관계(r)를, 절반은 집단 비교(d)를 보고하는 메타분석을 수행하고 있습니다.',
      },
      outcome: {
        en: 'Effect sizes converted to common metric with appropriate transformation formulas and variance adjustments.',
        ko: '적절한 변환 공식과 분산 조정으로 공통 메트릭으로 변환된 효과크기.',
      },
      discipline: 'Education / Psychology',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Incomplete Data Effect Size Estimation', ko: '불완전한 데이터 효과크기 추정' },
      scenario: {
        en: 'Several studies only report "p < 0.05" without exact values, or give confidence intervals but not standard errors.',
        ko: '여러 연구가 정확한 값 없이 "p < 0.05"만 보고하거나, 표준오차 없이 신뢰구간만 제공합니다.',
      },
      outcome: {
        en: 'Conservative effect size estimates using available information, with sensitivity analyses for imputed values.',
        ko: '사용 가능한 정보를 활용한 보수적 효과크기 추정치와 대체값에 대한 민감도 분석.',
      },
      discipline: 'Clinical Research',
      complexity: 'advanced',
    },
    {
      title: { en: 'Multilevel/Nested Data Effect Sizes', ko: '다층/중첩 데이터 효과크기' },
      scenario: {
        en: 'Studies report effects from multilevel models with students nested in classrooms. Standard effect size formulas may underestimate variance.',
        ko: '연구들이 교실에 중첩된 학생들의 다층 모델 효과를 보고합니다. 표준 효과크기 공식은 분산을 과소추정할 수 있습니다.',
      },
      outcome: {
        en: 'Design-adjusted effect sizes accounting for clustering, with appropriate standard errors for meta-analysis.',
        ko: '클러스터링을 고려한 설계 조정 효과크기와 메타분석을 위한 적절한 표준오차.',
      },
      discipline: 'Education / Organizational Research',
      complexity: 'advanced',
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Calculate effect size from: M1=[X], SD1=[X], n1=[X], M2=[X], SD2=[X], n2=[X]',
        ko: '다음에서 효과크기 계산: M1=[X], SD1=[X], n1=[X], M2=[X], SD2=[X], n2=[X]',
      },
      context: {
        en: 'Use when you have basic group statistics and need standardized mean difference.',
        ko: '기본 집단 통계가 있고 표준화 평균 차이가 필요할 때 사용.',
      },
      expectedResponse: {
        en: 'Cohen\'s d, Hedges\' g (with small-sample correction), 95% CI, and variance estimate for meta-analysis.',
        ko: 'Cohen\'s d, Hedges\' g(소표본 보정 포함), 95% CI, 메타분석용 분산 추정치.',
      },
    },
    {
      prompt: {
        en: 'I have t=[value], df=[value]. Convert to effect size with appropriate correction.',
        ko: 't=[값], df=[값]이 있습니다. 적절한 보정과 함께 효과크기로 변환해 주세요.',
      },
      context: {
        en: 'Use when studies report t-test results without raw means.',
        ko: '연구가 원시 평균 없이 t-검정 결과를 보고할 때 사용.',
      },
      expectedResponse: {
        en: 'Effect size calculation showing formula used, with Hedges\' correction if sample is small.',
        ko: '사용된 공식을 보여주는 효과크기 계산, 표본이 작으면 Hedges 보정 포함.',
      },
    },
    {
      prompt: {
        en: 'Convert r = [correlation] to d (standardized mean difference) for my meta-analysis.',
        ko: '메타분석을 위해 r = [상관관계]를 d(표준화 평균 차이)로 변환해 주세요.',
      },
      context: {
        en: 'Use when combining correlational studies with experimental studies.',
        ko: '상관 연구와 실험 연구를 결합할 때 사용.',
      },
      expectedResponse: {
        en: 'Converted effect size using appropriate formula (e.g., d = 2r/√(1-r²)) with variance transformation.',
        ko: '적절한 공식(예: d = 2r/√(1-r²))을 사용한 변환된 효과크기와 분산 변환.',
      },
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'Extracting data for meta-analysis', ko: '메타분석용 데이터 추출 시' },
      { en: 'Studies report effects in different statistical formats', ko: '연구들이 다른 통계 형식으로 효과 보고 시' },
      { en: 'Need to calculate effect sizes from incomplete data', ko: '불완전한 데이터에서 효과크기 계산 필요 시' },
      { en: 'Comparing effect sizes across different metrics', ko: '다른 메트릭 간 효과크기 비교 시' },
    ],
    dontUseWhen: [
      { en: 'Assessing study quality (use B2)', ko: '연구 품질 평가 시 (B2 사용)' },
      { en: 'Running meta-analysis models', ko: '메타분석 모델 실행 시' },
      { en: 'Need to search for literature (use B1)', ko: '문헌 검색 필요 시 (B1 사용)' },
    ],
    alternativeAgents: [
      { agentId: 'C2', condition: { en: 'Need advice on which statistical method to use', ko: '어떤 통계 방법 사용할지 조언 필요 시' } },
      { agentId: 'C4', condition: { en: 'Ready to run meta-analysis models', ko: '메타분석 모델 실행 준비 완료 시' } },
    ],
  },

  journey: {
    startState: {
      en: 'Pile of papers reporting results in incompatible formats',
      ko: '호환되지 않는 형식으로 결과를 보고하는 논문 더미',
    },
    transformation: [
      { en: 'Available statistics identified from each study', ko: '각 연구에서 사용 가능한 통계 식별' },
      { en: 'Appropriate conversion formula selected', ko: '적절한 변환 공식 선택' },
      { en: 'Effect sizes calculated with small-sample corrections', ko: '소표본 보정과 함께 효과크기 계산' },
      { en: 'Variances computed for meta-analytic weighting', ko: '메타분석 가중을 위한 분산 계산' },
    ],
    endState: {
      en: 'Standardized effect size table ready for meta-analysis software',
      ko: '메타분석 소프트웨어용 표준화된 효과크기 표 준비 완료',
    },
    timeEstimate: '2-6 hours for 30-50 studies',
  },

  analogies: [
    {
      metaphor: {
        en: 'Like a universal translator for statistics',
        ko: '통계를 위한 만능 번역기처럼',
      },
      explanation: {
        en: 'Just as a translator converts languages while preserving meaning, B3 converts t-values, F-ratios, correlations, and odds ratios into a common effect size language that can be synthesized.',
        ko: '번역가가 의미를 유지하면서 언어를 변환하는 것처럼, B3는 t값, F비, 상관관계, 오즈비를 종합할 수 있는 공통 효과크기 언어로 변환합니다.',
      },
    },
    {
      metaphor: {
        en: 'Like converting currencies for international trade',
        ko: '국제 무역을 위한 환율 변환처럼',
      },
      explanation: {
        en: 'You cannot add dollars and euros directly. B3 converts all statistical "currencies" (d, r, OR) to a common standard so they can be meaningfully combined in meta-analysis.',
        ko: '달러와 유로를 직접 더할 수 없습니다. B3는 모든 통계적 "통화"(d, r, OR)를 공통 표준으로 변환하여 메타분석에서 의미 있게 결합할 수 있게 합니다.',
      },
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Always use Hedges\' g instead of Cohen\'s d when any study has n < 20 per group—the bias correction matters.',
        ko: '어떤 연구든 그룹당 n < 20이면 항상 Cohen\'s d 대신 Hedges\' g를 사용하세요—비뚤림 보정이 중요합니다.',
      },
      source: { en: 'Hedges (1981) original paper', ko: 'Hedges (1981) 원논문' },
      difficulty: 'beginner',
    },
    {
      tip: {
        en: 'When converting r to d (or vice versa), remember the assumption of equal group sizes. Adjust formulas when groups are unbalanced.',
        ko: 'r을 d로(또는 그 반대로) 변환할 때 동일 집단 크기 가정을 기억하세요. 집단이 불균형할 때 공식을 조정하세요.',
      },
      source: { en: 'Borenstein et al. (2009)', ko: 'Borenstein 외 (2009)' },
      difficulty: 'intermediate',
    },
    {
      tip: {
        en: 'For multilevel data, use the design effect (DEFF) to inflate variance estimates: Var_adj = Var × DEFF where DEFF ≈ 1 + (n_cluster - 1) × ICC.',
        ko: '다층 데이터의 경우 설계 효과(DEFF)를 사용하여 분산 추정치를 팽창: Var_adj = Var × DEFF, 여기서 DEFF ≈ 1 + (n_cluster - 1) × ICC.',
      },
      source: { en: 'Hedges (2007) cluster-robust methods', ko: 'Hedges (2007) 클러스터 강건 방법' },
      difficulty: 'advanced',
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Meta-Analysis Core', ko: '메타분석 핵심' } },
    { type: 'quick', label: { en: 'Fast Calculations', ko: '빠른 계산' } },
  ],

  faq: [
    {
      question: {
        en: 'When should I use Cohen\'s d vs. Hedges\' g vs. Glass\'s delta?',
        ko: 'Cohen\'s d, Hedges\' g, Glass\'s delta 중 언제 무엇을 사용해야 하나요?',
      },
      answer: {
        en: 'Cohen\'s d uses pooled SD; Hedges\' g adds small-sample correction (use when n < 20); Glass\'s delta uses control group SD only (use when treatment might affect variability). For meta-analysis, Hedges\' g is usually safest.',
        ko: 'Cohen\'s d는 합동 SD를 사용; Hedges\' g는 소표본 보정 추가(n < 20일 때 사용); Glass\'s delta는 통제집단 SD만 사용(처치가 변동성에 영향을 줄 수 있을 때 사용). 메타분석에는 보통 Hedges\' g가 가장 안전합니다.',
      },
    },
    {
      question: {
        en: 'A study only reports "p < 0.05". Can I still estimate an effect size?',
        ko: '연구가 "p < 0.05"만 보고합니다. 여전히 효과크기를 추정할 수 있나요?',
      },
      answer: {
        en: 'Yes, but conservatively. Assume p = 0.05 exactly, convert to t-value given df, then to effect size. This gives a lower-bound estimate. Note this in your methods and run sensitivity analysis.',
        ko: '네, 하지만 보수적으로. p = 0.05로 정확히 가정하고, df가 주어진 t값으로 변환한 다음 효과크기로 변환합니다. 이것은 하한 추정치를 제공합니다. 방법에 이를 기록하고 민감도 분석을 실행하세요.',
      },
    },
    {
      question: {
        en: 'How do I handle studies that report odds ratios when others report d?',
        ko: 'd를 보고하는 다른 연구들이 있을 때 오즈비를 보고하는 연구는 어떻게 처리하나요?',
      },
      answer: {
        en: 'Convert log(OR) to d using: d = log(OR) × √3 / π ≈ log(OR) × 0.55. This assumes logistic distribution. Works for binary outcomes; report the conversion in your methods section.',
        ko: 'd = log(OR) × √3 / π ≈ log(OR) × 0.55를 사용하여 log(OR)을 d로 변환합니다. 이것은 로지스틱 분포를 가정합니다. 이진 결과에 적용; 방법 섹션에 변환을 보고하세요.',
      },
    },
  ],

  // === EXISTING FIELDS ===
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      { number: 1, title: { en: 'Simple Conversion Avoidance', ko: '단순 변환 회피' }, purpose: { en: 'Avoid blindly converting all to Cohen d', ko: '모든 것을 Cohen d로 무분별하게 변환하는 것 회피' } },
      { number: 2, title: { en: 'Context-Appropriate Selection', ko: '맥락 적합 선택' }, purpose: { en: 'Select best ES metric for research context', ko: '연구 맥락에 가장 적합한 ES 메트릭 선택' } },
      { number: 3, title: { en: 'Hedges g Calculation', ko: 'Hedges g 계산' }, purpose: { en: 'Apply small-sample correction when needed', ko: '필요 시 소표본 보정 적용' } },
    ],
  },
  inputRequirements: {
    required: [
      { name: 'statistical_data', description: { en: 'Means, SDs, t-values, F-values, p-values, etc.', ko: '평균, 표준편차, t-값, F-값, p-값 등' } },
    ],
  },
  codeTemplates: [
    {
      language: 'R',
      title: { en: 'Effect Size Conversion', ko: '효과크기 변환' },
      code: `library(metafor)

# From means and SDs
escalc(measure = "SMD",
       m1i = treatment_mean, m2i = control_mean,
       sd1i = treatment_sd, sd2i = control_sd,
       n1i = treatment_n, n2i = control_n)`,
    },
  ],
  references: [
    'Borenstein, M., et al. (2009). Introduction to Meta-Analysis. Wiley.',
    'Hedges, L. V. (1981). Distribution theory for Glass estimator.',
  ],
};
