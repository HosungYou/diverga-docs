'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  BarChart3,
  Code2,
  FileText,
  GitMerge,
  Shield,
  Activity,
  AlertCircle,
  CheckCircle2,
  Clock,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category E: Analysis Agents',
    subtitle: 'Paradigm-appropriate analytical strategies and implementation',
    description: 'Analysis agents provide comprehensive support for quantitative, qualitative, and mixed methods data analysis. They generate executable code, guide statistical decisions, and ensure robust analytical practices across all research paradigms.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Paradigm-specific analysis strategies with reproducible code generation',

    // Agents
    agents: [
      {
        id: 'E1',
        name: 'Quantitative Analysis Guide',
        icon: 'barChart3',
        color: '#1abc9c',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_ANALYSIS_PLAN',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Guide statistical analysis selection, assumption checking, and interpretation for quantitative research',
        triggers: {
          en: ['statistical analysis', 'ANOVA', 'regression', 'SEM', 't-test', 'chi-square', 'multilevel modeling'],
          ko: ['통계 분석', '회귀', '분산분석', '구조방정식', 't검정', '카이제곱', '다층모형'],
        },
        capabilities: [
          'Descriptive statistics and exploratory data analysis',
          'Inferential statistics (t-test, ANOVA, regression, SEM)',
          'Assumption checking (normality, homogeneity, independence)',
          'Effect size calculation and interpretation',
          'Multilevel and longitudinal modeling',
          'Meta-analysis techniques',
        ],
        vsProcess: 'Phase 1: Understand research design and data structure | Phase 2: Modal analysis awareness (e.g., t-test/ANOVA dominance) | Phase 3: Present differentiated analytical strategies with rationale',
        example: {
          input: '"Compare learning outcomes across 3 groups with pre-post measures"',
          output: 'Modal (T≈0.8): Repeated measures ANOVA | Direction A (T≈0.5): ANCOVA with pretest covariate | Direction B (T≈0.3): Growth curve modeling with group × time interaction | Recommended: ANCOVA controls for baseline differences, SEM for mediation paths',
        },
      },
      {
        id: 'E2',
        name: 'Qualitative Coding Specialist',
        icon: 'fileText',
        color: '#16a085',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Systematic coding strategy development for thematic analysis, grounded theory, and other qualitative approaches',
        triggers: {
          en: ['qualitative coding', 'thematic analysis', 'coding', 'NVivo', 'ATLAS.ti', 'MAXQDA', 'grounded theory coding'],
          ko: ['질적 코딩', '주제 분석', '코딩', 'NVivo', '근거이론 코딩'],
        },
        capabilities: [
          'Codebook development (deductive, inductive, hybrid)',
          'Thematic analysis (Braun & Clarke framework)',
          'Grounded theory coding (open, axial, selective)',
          'Content analysis and discourse analysis',
          'Saturation assessment strategies',
          'CAQDAS software guidance (NVivo, ATLAS.ti, MAXQDA)',
        ],
        vsProcess: 'Phase 1: Identify coding approach | Phase 2: Avoid mechanical coding, encourage interpretive depth | Phase 3: Present coding strategies with theoretical grounding',
        example: {
          input: '"Code interview data about teacher AI experiences"',
          output: 'Approach A (T≈0.6): Thematic analysis with 6-phase process | Approach B (T≈0.4): Grounded theory - open coding for emergent concepts | Approach C (T≈0.2): Critical discourse analysis examining power dynamics | Codebook structure: Descriptive → Interpretive → Pattern codes',
        },
      },
      {
        id: 'E3',
        name: 'Mixed Methods Integration Specialist',
        icon: 'gitMerge',
        color: '#0ea57a',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_INTEGRATION_STRATEGY',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Design integration strategies for combining quantitative and qualitative data to generate meta-inferences',
        triggers: {
          en: ['mixed methods integration', 'joint display', 'meta-inference', 'data transformation', 'convergence', 'divergence'],
          ko: ['혼합방법 통합', '통합 분석', '메타추론', '데이터 변환', '수렴', '발산'],
        },
        capabilities: [
          'Joint display creation (comparison, integration, synthesis)',
          'Data transformation (quantitizing, qualitizing)',
          'Convergence/divergence analysis',
          'Meta-inference development',
          'Integration timing (concurrent vs. sequential)',
          'Legitimation strategies for mixed methods',
        ],
        vsProcess: 'Phase 1: Assess integration purpose | Phase 2: Identify modal integration (simple side-by-side) | Phase 3: Present creative integration strategies with methodological rigor',
        example: {
          input: '"Integrate survey data (N=300) and interview data (n=20) on AI attitudes"',
          output: 'Strategy A (T≈0.6): Joint display comparing themes to scale scores | Strategy B (T≈0.4): Quantitize themes → cluster analysis → qual explanation of clusters | Strategy C (T≈0.2): Configurational analysis (QCA) blending both strands | Meta-inference: How do lived experiences explain statistical patterns?',
        },
      },
      {
        id: 'E4',
        name: 'Analysis Code Generator',
        icon: 'code2',
        color: '#0d9488',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'None',
        vsLevel: 'Light VS Applied',
        purpose: 'Generate executable analysis code in R, Python, SPSS, Stata, Mplus, and CAQDAS software',
        triggers: {
          en: ['R code', 'Python code', 'SPSS syntax', 'Stata code', 'Mplus', 'analysis script', 'code generation'],
          ko: ['R 코드', 'Python 코드', 'SPSS', 'Stata', '분석 코드', '코드 생성'],
        },
        capabilities: [
          'R syntax (tidyverse, lavaan, lme4, psych)',
          'Python code (pandas, statsmodels, scipy, scikit-learn)',
          'SPSS syntax (GLM, MIXED, PROCESS macro)',
          'Stata commands (reg, xtmixed, sem)',
          'Mplus syntax (SEM, LCA, multilevel)',
          'NVivo/ATLAS.ti query generation',
        ],
        vsProcess: 'Modal code pattern awareness (e.g., basic lm() in R) → Present alternative implementations with best practices',
        example: {
          input: '"Generate R code for ANCOVA with group and pretest covariate"',
          output: 'library(car)\nmodel <- lm(posttest ~ group + pretest, data = df)\nAnova(model, type = 3)\nsummary(model)\n# Assumptions\nshapiro.test(residuals(model))\nleveneTest(posttest ~ group, data = df)\n# Effect size\nlibrary(effectsize)\neta_squared(model)',
        },
      },
      {
        id: 'E5',
        name: 'Sensitivity Analysis Designer',
        icon: 'shield',
        color: '#0c8c7f',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS Applied',
        purpose: 'Design robustness checks and sensitivity analyses to validate findings across analytical decisions',
        triggers: {
          en: ['sensitivity analysis', 'robustness check', 'specification curve', 'analytical decisions', 'multiverse analysis'],
          ko: ['민감도 분석', '강건성 검증', '분석 결정', '다중우주 분석'],
        },
        capabilities: [
          'Outlier influence analysis',
          'Model specification alternatives',
          'Assumption relaxation strategies',
          'Multiverse/specification curve analysis',
          'Subgroup analysis planning',
          'Meta-analysis sensitivity (leave-one-out, trim-and-fill)',
        ],
        vsProcess: 'Modal sensitivity awareness (e.g., simple outlier removal) → Extended analysis strategy presentation',
        example: {
          input: '"Check if regression results hold under different specifications"',
          output: 'Sensitivity Tests:\n1. Outlier influence: Cook\'s D, DFBETAS\n2. Model variations: Linear, quadratic, log-transformed DV\n3. Covariate robustness: +/- control variables\n4. Subgroup analysis: By gender, experience level\n5. Specification curve: Test all reasonable models, plot β distribution\nResult interpretation: Findings robust if effect direction/significance consistent across 80%+ specs',
        },
      },
    ],

    // Checkpoint integration
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'Analysis agents use checkpoints to ensure methodological rigor:',
    checkpoints: [
      { id: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', agent: 'E1', description: 'Statistical analysis plan approved before execution' },
      { id: 'CP_INTEGRATION_STRATEGY', level: 'RECOMMENDED', agent: 'E3', description: 'Mixed methods integration strategy confirmed' },
    ],

    // Typical workflow
    workflowTitle: 'Typical Analysis Workflow',
    workflowSteps: [
      { agent: 'E1 / E2', action: 'Select analysis approach (paradigm-specific)', checkpoint: 'CP_ANALYSIS_PLAN', parallel: false },
      { agent: 'E4', action: 'Generate executable code', checkpoint: 'None', parallel: false },
      { agent: 'E5', action: 'Design sensitivity analysis', checkpoint: 'None', parallel: false },
      { agent: 'E3', action: 'Integration strategy (if mixed methods)', checkpoint: 'CP_INTEGRATION_STRATEGY', parallel: false },
    ],

    // Paradigm matrix
    paradigmTitle: 'Paradigm Coverage',
    paradigmDescription: 'Analysis agents adapt to your research paradigm:',
    paradigms: [
      { name: 'Quantitative', agents: ['E1', 'E4', 'E5'], description: 'Statistical analysis, code generation, robustness checks' },
      { name: 'Qualitative', agents: ['E2', 'E4', 'E5'], description: 'Coding strategies, CAQDAS support, trustworthiness' },
      { name: 'Mixed Methods', agents: ['E1', 'E2', 'E3', 'E4', 'E5'], description: 'Full pipeline with integration strategies' },
    ],

    // Code generation examples
    codeTitle: 'Multi-Language Code Generation',
    codeDescription: 'E4 generates production-ready code across platforms:',
    codeExamples: [
      { language: 'R', framework: 'tidyverse, lavaan, lme4', description: 'Statistical modeling and visualization' },
      { language: 'Python', framework: 'pandas, statsmodels, scipy', description: 'Data analysis and machine learning' },
      { language: 'SPSS', framework: 'Syntax', description: 'Point-and-click alternative with reproducibility' },
      { language: 'Stata', framework: 'Command syntax', description: 'Panel data and econometric models' },
      { language: 'Mplus', framework: 'SEM syntax', description: 'Structural equation modeling, LCA, multilevel' },
      { language: 'NVivo', framework: 'Query language', description: 'Qualitative coding and retrieval' },
    ],

    // CTA
    ctaTitle: 'Rigorous Data Analysis',
    ctaDescription: 'Category E agents ensure methodologically sound analysis across all paradigms.',
    ctaButton: 'Explore Category F: Quality',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 E: 분석 에이전트',
    subtitle: '패러다임에 적합한 분석 전략 및 구현',
    description: '분석 에이전트는 양적, 질적, 혼합방법 데이터 분석을 위한 포괄적 지원을 제공합니다. 실행 가능한 코드를 생성하고, 통계적 의사결정을 안내하며, 모든 연구 패러다임에서 강건한 분석 관행을 보장합니다.',

    principleTitle: '핵심 원칙',
    principleText: '재현 가능한 코드 생성을 통한 패러다임별 분석 전략',

    agents: [
      {
        id: 'E1',
        name: '양적 분석 가이드',
        icon: 'barChart3',
        color: '#1abc9c',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_ANALYSIS_PLAN',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '향상된 VS 3단계',
        purpose: '양적 연구를 위한 통계 분석 선택, 가정 검증, 해석 안내',
        triggers: {
          en: ['statistical analysis', 'ANOVA', 'regression', 'SEM', 't-test', 'chi-square', 'multilevel modeling'],
          ko: ['통계 분석', '회귀', '분산분석', '구조방정식', 't검정', '카이제곱', '다층모형'],
        },
        capabilities: [
          '기술통계 및 탐색적 데이터 분석',
          '추론통계 (t검정, ANOVA, 회귀, SEM)',
          '가정 검증 (정규성, 등분산성, 독립성)',
          '효과크기 계산 및 해석',
          '다층 및 종단 모델링',
          '메타분석 기법',
        ],
        vsProcess: '1단계: 연구 설계 및 데이터 구조 이해 | 2단계: 모달 분석 인식 (예: t검정/ANOVA 우세) | 3단계: 근거와 함께 차별화된 분석 전략 제시',
        example: {
          input: '"사전-사후 측정이 있는 3개 그룹의 학습 성과 비교"',
          output: '모달 (T≈0.8): 반복측정 ANOVA | 방향 A (T≈0.5): 사전검사 공변량을 사용한 ANCOVA | 방향 B (T≈0.3): 그룹 × 시간 상호작용을 가진 성장곡선 모델링 | 권장사항: ANCOVA는 기저선 차이를 통제, SEM으로 매개경로 분석',
        },
      },
      {
        id: 'E2',
        name: '질적 코딩 전문가',
        icon: 'fileText',
        color: '#16a085',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: '없음',
        checkpointLevel: '자문',
        vsLevel: '향상된 VS 3단계',
        purpose: '주제 분석, 근거이론 및 기타 질적 접근법을 위한 체계적 코딩 전략 개발',
        triggers: {
          en: ['qualitative coding', 'thematic analysis', 'coding', 'NVivo', 'ATLAS.ti', 'MAXQDA', 'grounded theory coding'],
          ko: ['질적 코딩', '주제 분석', '코딩', 'NVivo', '근거이론 코딩'],
        },
        capabilities: [
          '코드북 개발 (연역적, 귀납적, 혼합)',
          '주제 분석 (Braun & Clarke 프레임워크)',
          '근거이론 코딩 (개방, 축, 선택 코딩)',
          '내용 분석 및 담론 분석',
          '포화 평가 전략',
          'CAQDAS 소프트웨어 안내 (NVivo, ATLAS.ti, MAXQDA)',
        ],
        vsProcess: '1단계: 코딩 접근법 식별 | 2단계: 기계적 코딩 회피, 해석적 깊이 장려 | 3단계: 이론적 근거와 함께 코딩 전략 제시',
        example: {
          input: '"교사 AI 경험에 대한 인터뷰 데이터 코딩"',
          output: '접근법 A (T≈0.6): 6단계 프로세스를 가진 주제 분석 | 접근법 B (T≈0.4): 근거이론 - 창발적 개념을 위한 개방 코딩 | 접근법 C (T≈0.2): 권력 역학을 검토하는 비판적 담론 분석 | 코드북 구조: 기술적 → 해석적 → 패턴 코드',
        },
      },
      {
        id: 'E3',
        name: '혼합방법 통합 전문가',
        icon: 'gitMerge',
        color: '#0ea57a',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_INTEGRATION_STRATEGY',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '향상된 VS 3단계',
        purpose: '메타추론 생성을 위한 양적 및 질적 데이터 결합 통합 전략 설계',
        triggers: {
          en: ['mixed methods integration', 'joint display', 'meta-inference', 'data transformation', 'convergence', 'divergence'],
          ko: ['혼합방법 통합', '통합 분석', '메타추론', '데이터 변환', '수렴', '발산'],
        },
        capabilities: [
          '공동 디스플레이 생성 (비교, 통합, 종합)',
          '데이터 변환 (양적화, 질적화)',
          '수렴/발산 분석',
          '메타추론 개발',
          '통합 시점 (동시 vs. 순차)',
          '혼합방법 정당성 전략',
        ],
        vsProcess: '1단계: 통합 목적 평가 | 2단계: 모달 통합 식별 (단순 병치) | 3단계: 방법론적 엄격성을 가진 창의적 통합 전략 제시',
        example: {
          input: '"AI 태도에 대한 설문조사 데이터(N=300)와 인터뷰 데이터(n=20) 통합"',
          output: '전략 A (T≈0.6): 주제를 척도 점수와 비교하는 공동 디스플레이 | 전략 B (T≈0.4): 주제 양적화 → 군집 분석 → 군집의 질적 설명 | 전략 C (T≈0.2): 두 가닥을 혼합하는 구성적 분석(QCA) | 메타추론: 체험이 통계적 패턴을 어떻게 설명하는가?',
        },
      },
      {
        id: 'E4',
        name: '분석 코드 생성기',
        icon: 'code2',
        color: '#0d9488',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: '없음',
        checkpointLevel: '없음',
        vsLevel: '경량 VS 적용',
        purpose: 'R, Python, SPSS, Stata, Mplus 및 CAQDAS 소프트웨어에서 실행 가능한 분석 코드 생성',
        triggers: {
          en: ['R code', 'Python code', 'SPSS syntax', 'Stata code', 'Mplus', 'analysis script', 'code generation'],
          ko: ['R 코드', 'Python 코드', 'SPSS', 'Stata', '분석 코드', '코드 생성'],
        },
        capabilities: [
          'R 구문 (tidyverse, lavaan, lme4, psych)',
          'Python 코드 (pandas, statsmodels, scipy, scikit-learn)',
          'SPSS 구문 (GLM, MIXED, PROCESS 매크로)',
          'Stata 명령 (reg, xtmixed, sem)',
          'Mplus 구문 (SEM, LCA, 다층)',
          'NVivo/ATLAS.ti 쿼리 생성',
        ],
        vsProcess: '모달 코드 패턴 인식 (예: R의 기본 lm()) → 모범 사례와 함께 대안 구현 제시',
        example: {
          input: '"그룹과 사전검사 공변량을 사용한 ANCOVA R 코드 생성"',
          output: 'library(car)\nmodel <- lm(posttest ~ group + pretest, data = df)\nAnova(model, type = 3)\nsummary(model)\n# 가정 검증\nshapiro.test(residuals(model))\nleveneTest(posttest ~ group, data = df)\n# 효과크기\nlibrary(effectsize)\neta_squared(model)',
        },
      },
      {
        id: 'E5',
        name: '민감도 분석 설계자',
        icon: 'shield',
        color: '#0c8c7f',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: '없음',
        checkpointLevel: '자문',
        vsLevel: '경량 VS 적용',
        purpose: '분석 결정 전반에 걸쳐 발견사항을 검증하기 위한 강건성 검사 및 민감도 분석 설계',
        triggers: {
          en: ['sensitivity analysis', 'robustness check', 'specification curve', 'analytical decisions', 'multiverse analysis'],
          ko: ['민감도 분석', '강건성 검증', '분석 결정', '다중우주 분석'],
        },
        capabilities: [
          '이상치 영향 분석',
          '모델 명세 대안',
          '가정 완화 전략',
          '다중우주/명세 곡선 분석',
          '하위그룹 분석 계획',
          '메타분석 민감도 (leave-one-out, trim-and-fill)',
        ],
        vsProcess: '모달 민감도 인식 (예: 단순 이상치 제거) → 확장된 분석 전략 제시',
        example: {
          input: '"회귀 결과가 다른 명세에서 유지되는지 확인"',
          output: '민감도 테스트:\n1. 이상치 영향: Cook\'s D, DFBETAS\n2. 모델 변형: 선형, 이차, 로그 변환 DV\n3. 공변량 강건성: +/- 통제 변수\n4. 하위그룹 분석: 성별, 경험 수준별\n5. 명세 곡선: 모든 합리적 모델 테스트, β 분포 플롯\n결과 해석: 효과 방향/유의성이 80%+ 명세에서 일관되면 발견사항 강건함',
        },
      },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: '분석 에이전트는 방법론적 엄격성을 보장하기 위해 체크포인트를 사용합니다:',
    checkpoints: [
      { id: 'CP_ANALYSIS_PLAN', level: 'RECOMMENDED', agent: 'E1', description: '실행 전 통계 분석 계획 승인됨' },
      { id: 'CP_INTEGRATION_STRATEGY', level: 'RECOMMENDED', agent: 'E3', description: '혼합방법 통합 전략 확인됨' },
    ],

    workflowTitle: '일반적인 분석 워크플로',
    workflowSteps: [
      { agent: 'E1 / E2', action: '분석 접근법 선택 (패러다임별)', checkpoint: 'CP_ANALYSIS_PLAN', parallel: false },
      { agent: 'E4', action: '실행 가능한 코드 생성', checkpoint: '없음', parallel: false },
      { agent: 'E5', action: '민감도 분석 설계', checkpoint: '없음', parallel: false },
      { agent: 'E3', action: '통합 전략 (혼합방법인 경우)', checkpoint: 'CP_INTEGRATION_STRATEGY', parallel: false },
    ],

    paradigmTitle: '패러다임 커버리지',
    paradigmDescription: '분석 에이전트는 연구 패러다임에 적응합니다:',
    paradigms: [
      { name: '양적', agents: ['E1', 'E4', 'E5'], description: '통계 분석, 코드 생성, 강건성 검사' },
      { name: '질적', agents: ['E2', 'E4', 'E5'], description: '코딩 전략, CAQDAS 지원, 신뢰성' },
      { name: '혼합방법', agents: ['E1', 'E2', 'E3', 'E4', 'E5'], description: '통합 전략을 가진 전체 파이프라인' },
    ],

    codeTitle: '다중 언어 코드 생성',
    codeDescription: 'E4는 플랫폼 전반에 걸쳐 프로덕션 준비 코드를 생성합니다:',
    codeExamples: [
      { language: 'R', framework: 'tidyverse, lavaan, lme4', description: '통계 모델링 및 시각화' },
      { language: 'Python', framework: 'pandas, statsmodels, scipy', description: '데이터 분석 및 머신러닝' },
      { language: 'SPSS', framework: 'Syntax', description: '재현성을 가진 포인트 앤 클릭 대안' },
      { language: 'Stata', framework: 'Command syntax', description: '패널 데이터 및 계량경제 모델' },
      { language: 'Mplus', framework: 'SEM syntax', description: '구조방정식 모델링, LCA, 다층' },
      { language: 'NVivo', framework: 'Query language', description: '질적 코딩 및 검색' },
    ],

    ctaTitle: '엄격한 데이터 분석',
    ctaDescription: '카테고리 E 에이전트는 모든 패러다임에서 방법론적으로 건전한 분석을 보장합니다.',
    ctaButton: '카테고리 F 탐색: 품질',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  barChart3: <BarChart3 className="h-6 w-6" />,
  fileText: <FileText className="h-6 w-6" />,
  gitMerge: <GitMerge className="h-6 w-6" />,
  code2: <Code2 className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  RECOMMENDED: <CheckCircle2 className="h-4 w-4" />,
  OPTIONAL: <CheckCircle2 className="h-4 w-4" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as any as any
    }
  },
};

export default function AnalysisAgentsPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs/agents`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          className="text-center mb-16 px-8 py-16 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center top, rgba(26, 188, 156, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(26, 188, 156, 0.15)',
              borderColor: 'rgba(26, 188, 156, 0.3)',
              color: '#1abc9c',
            }}
          >
            <Activity className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#1abc9c' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(26, 188, 156, 0.1)',
              borderColor: 'rgba(26, 188, 156, 0.2)',
            }}
          >
            <p className="text-sm uppercase tracking-wider text-stellar-faint mb-2">{t.principleTitle}</p>
            <p className="text-body font-medium text-stellar-core">{t.principleText}</p>
          </div>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Agents */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12 mb-16"
        >
          {t.agents.map((agent) => (
            <motion.div
              key={agent.id}
              variants={itemVariants}
              className="p-8 bg-void-elevated border border-stellar-faint/10 relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${agent.color}15 0%, transparent 50%)`,
                }}
              />

              {/* Agent header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center border"
                    style={{
                      backgroundColor: `${agent.color}15`,
                      borderColor: `${agent.color}30`,
                      color: agent.color,
                    }}
                  >
                    {agentIcons[agent.icon]}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                      <div
                        className="px-3 py-1 font-mono text-xs font-bold border"
                        style={{
                          color: agent.color,
                          borderColor: `${agent.color}30`,
                          backgroundColor: `${agent.color}10`,
                        }}
                      >
                        {agent.id}
                      </div>
                    </div>
                    <p className="text-body text-stellar-dim">{agent.purpose}</p>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-col items-end gap-2">
                  <div
                    className="px-3 py-1 font-mono text-xs uppercase tracking-wider border"
                    style={{
                      color: agent.tier === 'HIGH' ? '#9b59b6' : agent.tier === 'MEDIUM' ? '#45b7d1' : '#f39c12',
                      borderColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.3)' : agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                      backgroundColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.1)' : agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                    }}
                  >
                    {agent.tier} • {agent.model}
                  </div>
                  <div
                    className="px-3 py-1 font-mono text-xs border"
                    style={{
                      color: '#44ffaa',
                      borderColor: 'rgba(68, 255, 170, 0.3)',
                      backgroundColor: 'rgba(68, 255, 170, 0.1)',
                    }}
                  >
                    {agent.vsLevel}
                  </div>
                  {agent.checkpoint !== 'None' && agent.checkpoint !== '없음' && (
                    <div
                      className="flex items-center gap-2 px-3 py-1 font-mono text-xs border"
                      style={{
                        color: agent.checkpointLevel === 'REQUIRED' ? '#ff6b6b' : '#f39c12',
                        borderColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                        backgroundColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                      }}
                    >
                      {checkpointIcons[agent.checkpointLevel]}
                      <span>{agent.checkpoint}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mb-6 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '역량' : 'Capabilities'}
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {agent.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <span className="text-stellar-core mt-1">•</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* VS Process */}
              <div className="mb-6 p-4 bg-void-deep/50 border border-stellar-faint/10 relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-2">
                  {locale === 'ko' ? 'VS 프로세스' : 'VS Process'}
                </h4>
                <p className="text-sm text-stellar-bright">{agent.vsProcess}</p>
              </div>

              {/* Example */}
              <div className="relative z-10">
                <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                  {locale === 'ko' ? '예시' : 'Example'}
                </h4>
                <div className="void-terminal overflow-hidden">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '입력' : 'Input'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono">
                    {agent.example.input}
                  </div>
                </div>
                <div className="void-terminal overflow-hidden mt-3">
                  <div className="void-terminal-header">
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                    <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                    <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                      {locale === 'ko' ? '출력' : 'Output'}
                    </span>
                  </div>
                  <div className="p-4 text-sm text-stellar-bright font-mono whitespace-pre-wrap">
                    {agent.example.output}
                  </div>
                </div>
              </div>

              {/* Triggers */}
              <div className="mt-6 flex flex-wrap gap-2 relative z-10">
                <span className="text-xs text-stellar-faint uppercase tracking-wider">
                  {locale === 'ko' ? '트리거:' : 'Triggers:'}
                </span>
                {agent.triggers.en.map((trigger, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono border"
                    style={{
                      color: agent.color,
                      borderColor: `${agent.color}30`,
                      backgroundColor: `${agent.color}08`,
                    }}
                  >
                    {trigger}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Checkpoint Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(26, 188, 156, 0.15)' }}
            >
              <CheckCircle2 className="h-5 w-5" style={{ color: '#1abc9c' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.checkpointTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.checkpointDescription}</p>

          <div className="space-y-3">
            {t.checkpoints.map((cp, index) => (
              <motion.div
                key={cp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center border"
                  style={{
                    color: '#f39c12',
                    borderColor: 'rgba(243, 156, 18, 0.3)',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                  }}
                >
                  {checkpointIcons[cp.level]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-mono font-bold text-stellar-core">{cp.id}</h3>
                    <span
                      className="px-2 py-0.5 text-xs font-mono border"
                      style={{
                        color: '#1abc9c',
                        borderColor: 'rgba(26, 188, 156, 0.3)',
                        backgroundColor: 'rgba(26, 188, 156, 0.1)',
                      }}
                    >
                      {cp.agent}
                    </span>
                  </div>
                  <p className="text-sm text-stellar-dim">{cp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Paradigm Coverage */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.paradigmTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.paradigmDescription}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.paradigms.map((paradigm, index) => (
              <motion.div
                key={paradigm.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <h3 className="font-bold text-stellar-core mb-3">{paradigm.name}</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {paradigm.agents.map((agent) => (
                    <span
                      key={agent}
                      className="px-2 py-1 text-xs font-mono border"
                      style={{
                        color: '#1abc9c',
                        borderColor: 'rgba(26, 188, 156, 0.3)',
                        backgroundColor: 'rgba(26, 188, 156, 0.1)',
                      }}
                    >
                      {agent}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-stellar-dim">{paradigm.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Code Generation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(26, 188, 156, 0.15)' }}
            >
              <Code2 className="h-5 w-5" style={{ color: '#1abc9c' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.codeTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.codeDescription}</p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.codeExamples.map((example, index) => (
              <motion.div
                key={example.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <h3 className="font-mono font-bold text-stellar-core mb-1">{example.language}</h3>
                <p className="text-xs text-stellar-faint mb-2">{example.framework}</p>
                <p className="text-sm text-stellar-dim">{example.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Workflow */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <Clock className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.workflowTitle}</h2>
          </div>

          <div className="space-y-3">
            {t.workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center border font-mono font-bold text-sm"
                  style={{
                    color: '#44ffaa',
                    borderColor: 'rgba(68, 255, 170, 0.3)',
                    backgroundColor: 'rgba(68, 255, 170, 0.1)',
                  }}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold text-stellar-core">{step.agent}</span>
                    {step.parallel && (
                      <span
                        className="px-2 py-0.5 text-xs font-mono border"
                        style={{
                          color: '#22ccff',
                          borderColor: 'rgba(34, 204, 255, 0.3)',
                          backgroundColor: 'rgba(34, 204, 255, 0.1)',
                        }}
                      >
                        {locale === 'ko' ? '병렬' : 'Parallel'}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stellar-dim">{step.action}</p>
                </div>
                <div
                  className="px-3 py-1 text-xs font-mono border"
                  style={{
                    color: step.checkpoint === 'None' || step.checkpoint === '없음' ? '#666' : '#f39c12',
                    borderColor: step.checkpoint === 'None' || step.checkpoint === '없음' ? 'rgba(102, 102, 102, 0.3)' : 'rgba(243, 156, 18, 0.3)',
                    backgroundColor: step.checkpoint === 'None' || step.checkpoint === '없음' ? 'rgba(102, 102, 102, 0.1)' : 'rgba(243, 156, 18, 0.1)',
                  }}
                >
                  {step.checkpoint}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(26, 188, 156, 0.15) 0%, rgba(68, 255, 170, 0.15) 100%)',
              borderColor: 'rgba(26, 188, 156, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents/quality`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <Activity className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
