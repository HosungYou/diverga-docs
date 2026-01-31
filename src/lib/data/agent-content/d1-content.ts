import type { ExtendedAgentContent } from '../types';

export const d1Content: ExtendedAgentContent = {
  agentId: 'D1',
  quickSummary: {
    oneLiner: {
      en: 'Strategic sampling advisor that matches your sampling strategy to research design and avoids convenience sampling pitfalls',
      ko: '연구 설계에 맞는 표집 전략을 제안하고 편의 표집의 함정을 피하도록 돕는 전략적 표집 어드바이저',
    },
    bestFor: [
      { en: 'Determining appropriate sampling method for your research design', ko: '연구 설계에 적합한 표집 방법 결정' },
      { en: 'Calculating sample size using G*Power for quantitative studies', ko: '양적 연구를 위한 G*Power 표본 크기 계산' },
      { en: 'Estimating saturation thresholds for qualitative studies', ko: '질적 연구의 포화 임계값 추정' },
      { en: 'Designing stratified or cluster sampling strategies', ko: '층화 또는 집락 표집 전략 설계' },
      { en: 'Justifying sampling decisions in methodology section', ko: '연구방법론 섹션에서 표집 결정 정당화' },
    ],
    notFor: [
      { en: 'Running the actual data collection (see D2-D4)', ko: '실제 데이터 수집 실행 (D2-D4 참고)' },
      { en: 'Analyzing collected data (see E1-E5)', ko: '수집된 데이터 분석 (E1-E5 참고)' },
      { en: 'Writing the full methodology section (see F2)', ko: '전체 연구방법론 섹션 작성 (F2 참고)' },
    ],
    timeToResult: '30-60 minutes',
  },
  useCases: [
    {
      title: { en: 'Multi-School Sampling', ko: '다중 학교 표집' },
      scenario: {
        en: 'Educational intervention study needs representative sample from diverse schools',
        ko: '다양한 학교에서 대표성 있는 표본이 필요한 교육 개입 연구',
      },
      outcome: {
        en: 'Multi-stage cluster sampling with school stratification',
        ko: '학교 층화를 포함한 다단계 집락 표집',
      },
      discipline: 'Education',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Qualitative Saturation', ko: '질적 포화' },
      scenario: {
        en: 'Grounded theory study exploring nurses\' burnout experiences - how many interviews needed?',
        ko: '간호사 소진 경험을 탐색하는 근거이론 연구 - 몇 명의 인터뷰가 필요한가?',
      },
      outcome: {
        en: '12-15 interviews with saturation monitoring',
        ko: '포화 모니터링과 함께 12-15개 인터뷰',
      },
      discipline: 'Nursing',
      complexity: 'beginner',
    },
    {
      title: { en: 'G*Power Analysis', ko: 'G*Power 분석' },
      scenario: {
        en: 'Quasi-experimental design comparing online vs. face-to-face learning with convenience sample',
        ko: '편의 표집으로 온라인과 대면 학습을 비교하는 유사실험 설계',
      },
      outcome: {
        en: 'Sample size calculation with effect size d=0.5',
        ko: '효과크기 d=0.5로 표본 크기 계산',
      },
      discipline: 'Educational Technology',
      complexity: 'intermediate',
    },
    {
      title: { en: 'Sequential Sampling', ko: '순차적 표집' },
      scenario: {
        en: 'Mixed methods study needing purposive sample for qualitative phase and random sample for quantitative phase',
        ko: '질적 단계에는 목적 표집, 양적 단계에는 무선 표집이 필요한 혼합 방법 연구',
      },
      outcome: {
        en: 'Qual→Quant integration with dual sampling strategy',
        ko: '이중 표집 전략으로 질적→양적 통합',
      },
      discipline: 'Psychology',
      complexity: 'advanced',
    },
  ],
  promptStarters: [
    {
      context: {
        en: 'Quantitative study with specific effect size expectation',
        ko: '특정 효과크기 기대치가 있는 양적 연구',
      },
      prompt: {
        en: 'I\'m planning a pretest-posttest control group design to test whether AI tutoring improves math achievement. Based on similar studies, I expect Cohen\'s d = 0.5. How many students do I need per group for 80% power?',
        ko: 'AI 튜터링이 수학 성취도를 향상시키는지 테스트하기 위한 사전-사후 통제집단 설계를 계획하고 있습니다. 유사한 연구를 바탕으로 Cohen\'s d = 0.5를 기대합니다. 80% 검정력을 위해 집단당 몇 명의 학생이 필요한가요?',
      },
      expectedResponse: {
        en: 'G*Power calculation walkthrough, sample size recommendation (n=64 per group), attrition buffer suggestion (recruit 15% more), randomization strategy',
        ko: 'G*Power 계산 과정, 표본 크기 권장 (집단당 n=64), 이탈 완충 제안 (15% 더 모집), 무선화 전략',
      },
    },
    {
      context: {
        en: 'Qualitative study uncertain about saturation',
        ko: '포화에 대해 불확실한 질적 연구',
      },
      prompt: {
        en: 'I want to interview teachers about their experiences with inclusive education using phenomenological approach. How do I know when I\'ve interviewed enough people?',
        ko: '현상학적 접근을 사용하여 통합교육에 대한 교사들의 경험을 인터뷰하고 싶습니다. 충분한 사람들을 인터뷰했는지 어떻게 알 수 있나요?',
      },
      expectedResponse: {
        en: 'Theoretical saturation explanation, recommendation for 12-15 interviews with ongoing analysis, data saturation criteria (3 consecutive interviews with no new themes)',
        ko: '이론적 포화 설명, 지속적 분석과 함께 12-15개 인터뷰 권장, 데이터 포화 기준 (새로운 주제가 없는 연속 3개 인터뷰)',
      },
    },
    {
      context: {
        en: 'Avoiding convenience sampling in quasi-experimental design',
        ko: '유사실험 설계에서 편의 표집 피하기',
      },
      prompt: {
        en: 'I can only access students from 3 schools for my intervention study (not random assignment). How can I make my sampling more rigorous than just "whoever is available"?',
        ko: '개입 연구를 위해 3개 학교의 학생들에만 접근할 수 있습니다(무선 배정 아님). "가능한 사람 아무나" 수준보다 더 엄격한 표집을 어떻게 할 수 있나요?',
      },
      expectedResponse: {
        en: 'Stratified purposive sampling within schools, matching strategy for treatment/control groups, propensity score weighting recommendation, documentation of selection criteria',
        ko: '학교 내 층화 목적 표집, 처치/통제 집단 매칭 전략, 성향 점수 가중치 권장, 선택 기준 문서화',
      },
    },
  ],
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Convenience Sampling Avoidance', ko: '편의 표집 회피' },
        purpose: { en: 'Avoid defaulting to convenience sampling', ko: '편의 표집을 기본으로 하는 것 회피' }
      },
      {
        number: 2,
        title: { en: 'Strategy Matching', ko: '전략 매칭' },
        purpose: { en: 'Match sampling to research design and goals', ko: '연구 설계와 목표에 표집 매칭' }
      },
      {
        number: 3,
        title: { en: 'Sample Size Calculation', ko: '표본 크기 계산' },
        purpose: { en: 'G*Power or qualitative saturation estimation', ko: 'G*Power 또는 질적 포화 추정' }
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'research_design',
        description: { en: 'Approved design from C1/C2/C3', ko: 'C1/C2/C3에서 승인된 설계' }
      },
      {
        name: 'population',
        description: { en: 'Target population description', ko: '대상 모집단 설명' }
      },
    ],
  },
};
