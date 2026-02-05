"use client";

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Database,
  Shield,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ArrowRight,
  Calculator,
  TrendingUp,
  BarChart3,
  GitBranch,
  Layers,
  Target,
  FileCheck,
  Download,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'Meta-Analysis Pipeline',
    subtitle: 'C5-C6-C7 System: AI-Assisted Meta-Analysis with Human Oversight',
    philosophy: '"Machines calculate, researchers decide: A partnership for rigorous meta-analysis"',

    // Step 1: C5-C7 Overview
    step1Title: 'Step 1: Understanding the C5-C7 System',
    step1Description: 'The meta-analysis pipeline consists of three specialized agents working together:',
    agents: [
      {
        id: 'C5',
        name: 'Meta-Analysis Master',
        role: 'Orchestrator & Decision Authority',
        color: '#44ffaa',
        responsibilities: [
          'Overall research question interpretation',
          'Effect size hierarchy selection',
          'Meta-analytic model choice (fixed/random/MASEM)',
          'Final authority on all meta-analysis decisions',
        ],
        triggers: [
          'meta-analysis',
          'effect size synthesis',
          'pooled estimate',
          'MASEM',
        ],
      },
      {
        id: 'C6',
        name: 'Data Integrity Guard',
        role: 'Extraction & Calculation Specialist',
        color: '#22ccff',
        responsibilities: [
          'Extract effect sizes from papers (PDFs, tables, text)',
          "Calculate Hedges' g with bias correction",
          'SD recovery using multiple methods',
          'Data completeness validation',
        ],
        triggers: [
          'extract effect size',
          'calculate Hedges g',
          'SD recovery',
        ],
      },
      {
        id: 'C7',
        name: 'Error Prevention Engine',
        role: 'Validation & Quality Assurance',
        color: '#ff8844',
        responsibilities: [
          '4-Gate validation system',
          'Statistical anomaly detection',
          'Warn about common meta-analysis pitfalls',
          'Pre-publication quality checks',
        ],
        triggers: [
          'validation',
          'error check',
          'quality assurance',
        ],
      },
    ],
    relationshipDiagram: 'Agent Relationships',

    // Step 2: Starting a Meta-Analysis
    step2Title: 'Step 2: Starting a Meta-Analysis',
    step2Description: 'C5 activates automatically when you mention meta-analysis intent:',
    triggerExamples: [
      {
        userInput: 'I want to conduct a meta-analysis on AI tutoring effectiveness',
        system: 'C5 activates',
        clarifyingQuestions: [
          'What is your research question? (e.g., "Does AI tutoring improve learning outcomes?")',
          'What type of effect size do you expect? (Cohen\'s d, correlation r, odds ratio)',
          'Do you have studies identified already, or do you need help with systematic search?',
          'Are you analyzing direct effects only, or mediation/moderation relationships?',
        ],
      },
    ],
    checkpointRequired: {
      id: 'META_ANALYSIS_PROTOCOL',
      level: 'REQUIRED',
      when: 'Before data extraction begins',
      decision: 'Approve research question, ES hierarchy, and meta-analytic approach',
      cannotProceed: 'C5 will NOT proceed with extraction until you approve the protocol',
    },

    // Step 3: Data Extraction with C6
    step3Title: 'Step 3: Data Extraction with C6',
    step3Description: 'Once protocol is approved, C6 extracts effect sizes from your studies:',
    inputOptions: [
      {
        method: 'PDF Upload',
        description: 'Upload PDFs of studies',
        example: 'C6 reads tables, text, and figures using OCR + LLM',
      },
      {
        method: 'Manual Entry',
        description: 'Provide study IDs with statistics',
        example: 'Study A: M1=5.2, SD1=1.1, n1=30, M2=4.8, SD2=1.3, n2=28',
      },
      {
        method: 'CSV Import',
        description: 'Upload codebook with extracted data',
        example: 'studyID, author, year, intervention, outcome, n1, M1, SD1, n2, M2, SD2',
      },
    ],
    hedgesGExplanation: {
      title: "Hedges' g Calculation",
      description: "C6 automatically converts all effect sizes to Hedges' g (bias-corrected Cohen's d):",
      formula: 'g = d × (1 - 3/(4(n1+n2)-9))',
      whyHedgesG: [
        'Unbiased estimate for small samples',
        'Comparable across studies with different sample sizes',
        'Standard metric in education/psychology meta-analyses',
      ],
    },
    sdRecoveryMethods: [
      'SE to SD conversion: SD = SE × √n',
      't-statistic back-calculation: d = t × √(1/n1 + 1/n2)',
      'F-statistic to d: d = √(F × (n1+n2)/(n1×n2))',
      'p-value approximation (last resort, flagged by C7)',
    ],

    // Step 4: 4-Gate Validation with C7
    step4Title: 'Step 4: 4-Gate Validation with C7',
    step4Description: 'C7 runs a rigorous 4-gate validation system on extracted data:',
    gates: [
      {
        gate: 1,
        name: 'Extraction Validation',
        checks: [
          'Are all required fields present? (n, M, SD for each group)',
          'Are values within plausible ranges? (SD > 0, n ≥ 2, |g| < 5)',
          'Do reported statistics match calculated effect sizes?',
        ],
        errors: [
          'Missing SD → C7 flags for recovery method',
          'Negative SD → Data entry error',
          'Extreme g (|g| > 3) → Verify with original paper',
        ],
      },
      {
        gate: 2,
        name: 'Classification Validation',
        checks: [
          'Is the study correctly categorized by moderator variables?',
          'Does the intervention match the meta-analysis scope?',
          'Are outcome measures consistent across studies?',
        ],
        errors: [
          'Intervention mismatch → Exclude or reclassify',
          'Outcome construct drift → Flag for sensitivity analysis',
        ],
      },
      {
        gate: 3,
        name: 'Statistical Validation',
        checks: [
          'Is heterogeneity (I²) within acceptable range?',
          'Are there statistical outliers (Studentized residuals > ±3)?',
          'Is publication bias evident (funnel plot asymmetry)?',
        ],
        errors: [
          'High heterogeneity (I² > 75%) → Suggest random-effects or moderator analysis',
          'Outliers detected → Flag specific studies',
          'Publication bias → Recommend trim-and-fill or selection models',
        ],
      },
      {
        gate: 4,
        name: 'Independence Validation',
        checks: [
          'Are multiple effect sizes from the same sample correctly handled?',
          'Is nesting structure (students within classrooms) accounted for?',
          'Are dependent effect sizes modeled appropriately?',
        ],
        errors: [
          'Non-independence detected → Suggest averaging or multilevel MA',
          'Clustering ignored → Warning about Type I error inflation',
        ],
      },
    ],
    errorPatterns: [
      {
        pattern: 'SD missing for >30% of studies',
        severity: 'High',
        recommendation: 'Request authors for raw data OR use imputation methods (flagged in report)',
      },
      {
        pattern: 'All effect sizes positive (no negative effects)',
        severity: 'Medium',
        recommendation: 'Check for publication bias using Egger test, trim-and-fill',
      },
      {
        pattern: 'Extreme heterogeneity (I² > 90%)',
        severity: 'High',
        recommendation: 'Do NOT pool. Conduct subgroup analysis or narrative synthesis',
      },
    ],

    // Step 5: Orchestration and Results
    step5Title: 'Step 5: Orchestration and Results',
    step5Description: 'C5 coordinates the workflow and synthesizes findings:',
    workflow: [
      { step: 1, agent: 'C5', action: 'Define protocol', checkpoint: 'META_ANALYSIS_PROTOCOL' },
      { step: 2, agent: 'C6', action: 'Extract data from k studies' },
      { step: 3, agent: 'C7', action: 'Validate (Gates 1-2)' },
      { step: 4, agent: 'C6', action: 'Calculate Hedges g' },
      { step: 5, agent: 'C7', action: 'Validate (Gates 3-4)' },
      { step: 6, agent: 'C5', action: 'Choose meta-analytic model' },
      { step: 7, agent: 'C5', action: 'Generate forest plot, funnel plot' },
      { step: 8, agent: 'C5', action: 'Interpret results', checkpoint: 'META_ANALYSIS_RESULTS (RECOMMENDED)' },
    ],
    decisionPoints: [
      {
        decision: 'Fixed vs. Random Effects',
        context: 'When I² < 25% (low heterogeneity)',
        c5Recommendation: 'Fixed-effects model (assumes single true effect size)',
        yourChoice: 'You can override if you expect population heterogeneity',
      },
      {
        decision: 'Handling Outliers',
        context: 'When C7 flags 2 studies with extreme g values',
        c5Recommendation: 'Run sensitivity analysis (with/without outliers)',
        yourChoice: 'You decide whether to exclude permanently or report both analyses',
      },
      {
        decision: 'Publication Bias Correction',
        context: 'When funnel plot shows asymmetry (Egger p < .05)',
        c5Recommendation: 'Report both unadjusted and trim-and-fill adjusted estimates',
        yourChoice: 'You choose which to emphasize in conclusions',
      },
    ],
    checkpointResults: {
      id: 'META_ANALYSIS_RESULTS',
      level: 'RECOMMENDED',
      when: 'After pooled estimate calculated',
      decision: 'Review and approve interpretation before finalizing manuscript',
      canSkip: 'No - strongly recommended to review before writing Discussion section',
    },

    // Step 6: Export and Integration
    step6Title: 'Step 6: Export and Integration',
    step6Description: 'Export results in multiple formats for publication and reproducibility:',
    exportFormats: [
      {
        format: 'Universal Meta-Analysis Codebook',
        description: '4-layer codebook with AI provenance tracking',
        layers: [
          'Layer 1: Identifiers (studyID, author, year, DOI)',
          'Layer 2: Statistics (n, M, SD, g, SE, 95% CI)',
          'Layer 3: AI Provenance (extraction_method, confidence_score, verification_status)',
          'Layer 4: Human Verification (verified_by, verification_date, notes)',
        ],
        useCase: 'Gold standard for transparent AI-assisted meta-analysis',
      },
      {
        format: 'R Script (metafor package)',
        description: 'Ready-to-run R code for replication',
        example: `library(metafor)
res <- rma(yi = hedges_g, vi = variance,
           method = "REML",
           data = codebook)
forest(res)`,
        useCase: 'Reproducible analysis for journal submission',
      },
      {
        format: 'Stata .do file',
        description: 'Stata syntax for meta-analysis',
        example: `metan hedges_g se_g, random label(namevar=study)
metabias hedges_g se_g, egger`,
        useCase: 'For researchers using Stata',
      },
      {
        format: 'CSV for CMA/RevMan',
        description: 'Import into Comprehensive Meta-Analysis or RevMan',
        fields: 'studyID, author, year, n1, M1, SD1, n2, M2, SD2',
        useCase: 'GUI-based meta-analysis tools',
      },
    ],
    prismaIntegration: {
      title: 'PRISMA Diagram Generation',
      description: 'C5 can generate PRISMA 2020 flow diagrams showing:',
      sections: [
        'Identification: k studies from databases',
        'Screening: Excluded studies (with reasons)',
        'Eligibility: Full-text assessed',
        'Included: Final k studies in meta-analysis',
      ],
      autoGenerate: 'If you started with ScholaRAG (I0-I4), PRISMA is auto-populated',
    },

    // Code Examples
    codeExamples: {
      title: 'Code Examples',
      examples: [
        {
          language: 'R (metafor)',
          code: `library(metafor)

# Load codebook from C6 export
data <- read.csv("diverga_codebook_v2.2.csv")

# Random-effects meta-analysis
res <- rma(yi = hedges_g,
           vi = variance,
           method = "REML",
           data = data)

# Forest plot
forest(res,
       header = "Study",
       xlab = "Hedges' g")

# Funnel plot (publication bias)
funnel(res)
regtest(res)  # Egger test`,
        },
        {
          language: 'Python (metaanalysis package)',
          code: `import pandas as pd
from metaanalysis import MetaAnalysis

# Load codebook
df = pd.read_csv("diverga_codebook_v2.2.csv")

# Initialize meta-analysis
ma = MetaAnalysis(df,
                  effect_size="hedges_g",
                  variance="variance")

# Run random-effects model
results = ma.fit(method="REML")

# Generate forest plot
ma.plot_forest()

# Check heterogeneity
print(f"I²: {results.I2:.1f}%")
print(f"Q: {results.Q:.2f}, p={results.Q_pval:.3f}")`,
        },
      ],
    },

    // Common Pitfalls
    pitfalls: [
      {
        pitfall: 'Unit of Analysis Error',
        description: 'Treating multiple outcomes from the same study as independent',
        howC7Catches: 'Gate 4 flags when same studyID appears multiple times',
        solution: 'Average effect sizes within study OR use robust variance estimation',
      },
      {
        pitfall: 'Apples and Oranges',
        description: 'Pooling incompatible outcome constructs (e.g., test scores + self-efficacy)',
        howC7Catches: 'Gate 2 flags heterogeneous outcome_type values',
        solution: 'Conduct separate meta-analyses by outcome category',
      },
      {
        pitfall: 'Garbage In, Garbage Out',
        description: 'Including low-quality studies with biased effect sizes',
        howC7Catches: 'Does NOT catch this automatically (requires domain knowledge)',
        solution: 'You must quality-appraise studies before inclusion (use B2 agent)',
      },
      {
        pitfall: 'File Drawer Problem',
        description: 'Missing unpublished studies with null results',
        howC7Catches: 'Gate 3 flags funnel plot asymmetry',
        solution: 'Search grey literature, contact authors, report bias-adjusted estimates',
      },
    ],

    // CTA
    ctaTitle: 'Ready to Start Your Meta-Analysis?',
    ctaDescription: 'The C5-C6-C7 system handles the complexity while you maintain full control.',
    ctaButtons: {
      agents: 'Browse Meta-Analysis Agents',
      workflows: 'View Full Workflow',
      codebook: 'Download Codebook Template',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: '메타분석 파이프라인',
    subtitle: 'C5-C6-C7 시스템: 인간 감독과 함께하는 AI 지원 메타분석',
    philosophy: '"기계는 계산하고, 연구자는 결정한다: 엄격한 메타분석을 위한 파트너십"',

    // Step 1: C5-C7 Overview
    step1Title: '1단계: C5-C7 시스템 이해하기',
    step1Description: '메타분석 파이프라인은 함께 작동하는 세 개의 전문 에이전트로 구성됩니다:',
    agents: [
      {
        id: 'C5',
        name: '메타분석 마스터',
        role: '오케스트레이터 & 의사결정 권한',
        color: '#44ffaa',
        responsibilities: [
          '전반적인 연구 질문 해석',
          '효과크기 계층 선택',
          '메타분석 모델 선택 (고정/랜덤/MASEM)',
          '모든 메타분석 결정에 대한 최종 권한',
        ],
        triggers: [
          '메타분석',
          '효과크기 종합',
          '풀링 추정',
          'MASEM',
        ],
      },
      {
        id: 'C6',
        name: '데이터 무결성 가드',
        role: '추출 및 계산 전문가',
        color: '#22ccff',
        responsibilities: [
          '논문에서 효과크기 추출 (PDF, 표, 텍스트)',
          '편향 보정과 함께 Hedges\' g 계산',
          '다양한 방법을 사용한 SD 복구',
          '데이터 완전성 검증',
        ],
        triggers: [
          '효과크기 추출',
          'Hedges g 계산',
          'SD 복구',
        ],
      },
      {
        id: 'C7',
        name: '오류 방지 엔진',
        role: '검증 및 품질 보증',
        color: '#ff8844',
        responsibilities: [
          '4-게이트 검증 시스템',
          '통계적 이상 탐지',
          '일반적인 메타분석 함정 경고',
          '출판 전 품질 검사',
        ],
        triggers: [
          '검증',
          '오류 확인',
          '품질 보증',
        ],
      },
    ],
    relationshipDiagram: '에이전트 관계',

    // Step 2: Starting a Meta-Analysis
    step2Title: '2단계: 메타분석 시작하기',
    step2Description: '메타분석 의도를 언급하면 C5가 자동으로 활성화됩니다:',
    triggerExamples: [
      {
        userInput: 'AI 튜터링 효과에 대한 메타분석을 하고 싶어요',
        system: 'C5 활성화',
        clarifyingQuestions: [
          '연구 질문은 무엇인가요? (예: "AI 튜터링이 학습 성과를 향상시키는가?")',
          '어떤 유형의 효과크기를 예상하나요? (Cohen\'s d, 상관계수 r, 승산비)',
          '이미 연구를 확인했나요, 아니면 체계적 검색이 필요한가요?',
          '직접 효과만 분석하나요, 아니면 매개/조절 관계도 분석하나요?',
        ],
      },
    ],
    checkpointRequired: {
      id: 'META_ANALYSIS_PROTOCOL',
      level: 'REQUIRED',
      when: '데이터 추출 시작 전',
      decision: '연구 질문, ES 계층, 메타분석 접근법 승인',
      cannotProceed: '프로토콜을 승인할 때까지 C5는 추출을 진행하지 않습니다',
    },

    // Step 3: Data Extraction with C6
    step3Title: '3단계: C6를 사용한 데이터 추출',
    step3Description: '프로토콜이 승인되면 C6가 연구에서 효과크기를 추출합니다:',
    inputOptions: [
      {
        method: 'PDF 업로드',
        description: '연구 PDF 업로드',
        example: 'C6가 OCR + LLM을 사용하여 표, 텍스트, 그림을 읽습니다',
      },
      {
        method: '수동 입력',
        description: '통계와 함께 연구 ID 제공',
        example: 'Study A: M1=5.2, SD1=1.1, n1=30, M2=4.8, SD2=1.3, n2=28',
      },
      {
        method: 'CSV 가져오기',
        description: '추출된 데이터가 있는 코드북 업로드',
        example: 'studyID, author, year, intervention, outcome, n1, M1, SD1, n2, M2, SD2',
      },
    ],
    hedgesGExplanation: {
      title: "Hedges' g 계산",
      description: "C6는 모든 효과크기를 자동으로 Hedges' g (편향 보정된 Cohen's d)로 변환합니다:",
      formula: 'g = d × (1 - 3/(4(n1+n2)-9))',
      whyHedgesG: [
        '작은 표본에 대한 불편 추정',
        '다른 표본 크기의 연구 간 비교 가능',
        '교육/심리학 메타분석의 표준 지표',
      ],
    },
    sdRecoveryMethods: [
      'SE를 SD로 변환: SD = SE × √n',
      't-통계량 역계산: d = t × √(1/n1 + 1/n2)',
      'F-통계량에서 d: d = √(F × (n1+n2)/(n1×n2))',
      'p-값 근사 (최후의 수단, C7이 플래그)',
    ],

    // Step 4: 4-Gate Validation with C7
    step4Title: '4단계: C7를 사용한 4-게이트 검증',
    step4Description: 'C7은 추출된 데이터에 대해 엄격한 4-게이트 검증 시스템을 실행합니다:',
    gates: [
      {
        gate: 1,
        name: '추출 검증',
        checks: [
          '모든 필수 필드가 있나요? (각 그룹의 n, M, SD)',
          '값이 타당한 범위 내에 있나요? (SD > 0, n ≥ 2, |g| < 5)',
          '보고된 통계가 계산된 효과크기와 일치하나요?',
        ],
        errors: [
          'SD 누락 → C7이 복구 방법을 플래그',
          '음수 SD → 데이터 입력 오류',
          '극단적 g (|g| > 3) → 원본 논문으로 확인',
        ],
      },
      {
        gate: 2,
        name: '분류 검증',
        checks: [
          '조절변수에 따라 연구가 올바르게 분류되었나요?',
          '개입이 메타분석 범위와 일치하나요?',
          '결과 측정이 연구 간 일관적인가요?',
        ],
        errors: [
          '개입 불일치 → 제외 또는 재분류',
          '결과 구성 드리프트 → 민감도 분석을 위해 플래그',
        ],
      },
      {
        gate: 3,
        name: '통계적 검증',
        checks: [
          '이질성 (I²)이 허용 범위 내에 있나요?',
          '통계적 이상치가 있나요 (스튜던트화 잔차 > ±3)?',
          '출판 편향이 명백한가요 (깔때기 그림 비대칭)?',
        ],
        errors: [
          '높은 이질성 (I² > 75%) → 랜덤 효과 또는 조절변수 분석 제안',
          '이상치 감지 → 특정 연구 플래그',
          '출판 편향 → trim-and-fill 또는 선택 모델 권장',
        ],
      },
      {
        gate: 4,
        name: '독립성 검증',
        checks: [
          '동일한 표본의 여러 효과크기가 올바르게 처리되었나요?',
          '중첩 구조(교실 내 학생)가 고려되었나요?',
          '종속 효과크기가 적절하게 모델링되었나요?',
        ],
        errors: [
          '비독립성 감지 → 평균화 또는 다층 MA 제안',
          '클러스터링 무시 → 제1종 오류 팽창 경고',
        ],
      },
    ],
    errorPatterns: [
      {
        pattern: '연구의 >30%에서 SD 누락',
        severity: '높음',
        recommendation: '저자에게 원시 데이터 요청 또는 대체 방법 사용 (보고서에 플래그)',
      },
      {
        pattern: '모든 효과크기가 양수 (음수 효과 없음)',
        severity: '중간',
        recommendation: 'Egger 검정, trim-and-fill을 사용하여 출판 편향 확인',
      },
      {
        pattern: '극심한 이질성 (I² > 90%)',
        severity: '높음',
        recommendation: '풀링하지 마세요. 하위 그룹 분석 또는 서술적 종합 수행',
      },
    ],

    // Step 5: Orchestration and Results
    step5Title: '5단계: 오케스트레이션 및 결과',
    step5Description: 'C5가 워크플로를 조정하고 결과를 종합합니다:',
    workflow: [
      { step: 1, agent: 'C5', action: '프로토콜 정의', checkpoint: 'META_ANALYSIS_PROTOCOL' },
      { step: 2, agent: 'C6', action: 'k개 연구에서 데이터 추출' },
      { step: 3, agent: 'C7', action: '검증 (게이트 1-2)' },
      { step: 4, agent: 'C6', action: 'Hedges g 계산' },
      { step: 5, agent: 'C7', action: '검증 (게이트 3-4)' },
      { step: 6, agent: 'C5', action: '메타분석 모델 선택' },
      { step: 7, agent: 'C5', action: 'Forest plot, Funnel plot 생성' },
      { step: 8, agent: 'C5', action: '결과 해석', checkpoint: 'META_ANALYSIS_RESULTS (RECOMMENDED)' },
    ],
    decisionPoints: [
      {
        decision: '고정 효과 vs. 랜덤 효과',
        context: 'I² < 25% (낮은 이질성)일 때',
        c5Recommendation: '고정 효과 모델 (단일 진정한 효과크기 가정)',
        yourChoice: '모집단 이질성이 예상되면 재정의 가능',
      },
      {
        decision: '이상치 처리',
        context: 'C7이 극단적 g 값을 가진 2개 연구를 플래그할 때',
        c5Recommendation: '민감도 분석 실행 (이상치 포함/제외)',
        yourChoice: '영구적으로 제외할지 또는 두 분석을 모두 보고할지 결정',
      },
      {
        decision: '출판 편향 보정',
        context: 'Funnel plot이 비대칭성을 보일 때 (Egger p < .05)',
        c5Recommendation: '보정되지 않은 추정치와 trim-and-fill 보정 추정치 모두 보고',
        yourChoice: '결론에서 어느 것을 강조할지 선택',
      },
    ],
    checkpointResults: {
      id: 'META_ANALYSIS_RESULTS',
      level: 'RECOMMENDED',
      when: '풀링 추정치 계산 후',
      decision: '원고 완성 전 해석 검토 및 승인',
      canSkip: '아니오 - 토론 섹션 작성 전 검토 강력 권장',
    },

    // Step 6: Export and Integration
    step6Title: '6단계: 내보내기 및 통합',
    step6Description: '출판 및 재현성을 위해 여러 형식으로 결과 내보내기:',
    exportFormats: [
      {
        format: '범용 메타분석 코드북',
        description: 'AI 출처 추적이 포함된 4-계층 코드북',
        layers: [
          '계층 1: 식별자 (studyID, author, year, DOI)',
          '계층 2: 통계 (n, M, SD, g, SE, 95% CI)',
          '계층 3: AI 출처 (extraction_method, confidence_score, verification_status)',
          '계층 4: 인간 검증 (verified_by, verification_date, notes)',
        ],
        useCase: '투명한 AI 지원 메타분석의 골드 스탠다드',
      },
      {
        format: 'R 스크립트 (metafor 패키지)',
        description: '재현을 위한 즉시 실행 가능한 R 코드',
        example: `library(metafor)
res <- rma(yi = hedges_g, vi = variance,
           method = "REML",
           data = codebook)
forest(res)`,
        useCase: '저널 제출을 위한 재현 가능한 분석',
      },
      {
        format: 'Stata .do 파일',
        description: '메타분석을 위한 Stata 구문',
        example: `metan hedges_g se_g, random label(namevar=study)
metabias hedges_g se_g, egger`,
        useCase: 'Stata 사용 연구자용',
      },
      {
        format: 'CMA/RevMan용 CSV',
        description: 'Comprehensive Meta-Analysis 또는 RevMan으로 가져오기',
        fields: 'studyID, author, year, n1, M1, SD1, n2, M2, SD2',
        useCase: 'GUI 기반 메타분석 도구',
      },
    ],
    prismaIntegration: {
      title: 'PRISMA 다이어그램 생성',
      description: 'C5는 다음을 보여주는 PRISMA 2020 흐름도를 생성할 수 있습니다:',
      sections: [
        '식별: 데이터베이스에서 k개 연구',
        '선별: 제외된 연구 (이유 포함)',
        '적격성: 전체 텍스트 평가',
        '포함: 메타분석에 포함된 최종 k개 연구',
      ],
      autoGenerate: 'ScholaRAG (I0-I4)로 시작한 경우 PRISMA가 자동으로 채워집니다',
    },

    // Code Examples
    codeExamples: {
      title: '코드 예제',
      examples: [
        {
          language: 'R (metafor)',
          code: `library(metafor)

# C6 내보내기에서 코드북 로드
data <- read.csv("diverga_codebook_v2.2.csv")

# 랜덤 효과 메타분석
res <- rma(yi = hedges_g,
           vi = variance,
           method = "REML",
           data = data)

# Forest plot
forest(res,
       header = "Study",
       xlab = "Hedges' g")

# Funnel plot (출판 편향)
funnel(res)
regtest(res)  # Egger 검정`,
        },
        {
          language: 'Python (metaanalysis 패키지)',
          code: `import pandas as pd
from metaanalysis import MetaAnalysis

# 코드북 로드
df = pd.read_csv("diverga_codebook_v2.2.csv")

# 메타분석 초기화
ma = MetaAnalysis(df,
                  effect_size="hedges_g",
                  variance="variance")

# 랜덤 효과 모델 실행
results = ma.fit(method="REML")

# Forest plot 생성
ma.plot_forest()

# 이질성 확인
print(f"I²: {results.I2:.1f}%")
print(f"Q: {results.Q:.2f}, p={results.Q_pval:.3f}")`,
        },
      ],
    },

    // Common Pitfalls
    pitfalls: [
      {
        pitfall: '분석 단위 오류',
        description: '동일한 연구의 여러 결과를 독립적으로 처리',
        howC7Catches: '게이트 4가 동일한 studyID가 여러 번 나타날 때 플래그',
        solution: '연구 내 효과크기 평균화 또는 강건한 분산 추정 사용',
      },
      {
        pitfall: '사과와 오렌지',
        description: '호환되지 않는 결과 구성 풀링 (예: 시험 점수 + 자기효능감)',
        howC7Catches: '게이트 2가 이질적인 outcome_type 값을 플래그',
        solution: '결과 범주별로 별도의 메타분석 수행',
      },
      {
        pitfall: '쓰레기 입력, 쓰레기 출력',
        description: '편향된 효과크기를 가진 저품질 연구 포함',
        howC7Catches: '자동으로 감지하지 않음 (도메인 지식 필요)',
        solution: '포함 전에 연구 품질 평가 (B2 에이전트 사용)',
      },
      {
        pitfall: '파일 서랍 문제',
        description: '결과가 없는 미발표 연구 누락',
        howC7Catches: '게이트 3이 funnel plot 비대칭성을 플래그',
        solution: '회색 문헌 검색, 저자 연락, 편향 보정 추정치 보고',
      },
    ],

    // CTA
    ctaTitle: '메타분석을 시작할 준비가 되셨나요?',
    ctaDescription: 'C5-C6-C7 시스템은 복잡성을 처리하면서 완전한 통제권을 유지합니다.',
    ctaButtons: {
      agents: '메타분석 에이전트 보기',
      workflows: '전체 워크플로우 보기',
      codebook: '코드북 템플릿 다운로드',
    },
  },
};

// Agent color utility
function getAgentColor(id: string): string {
  const colors: Record<string, string> = {
    'C5': '#44ffaa',
    'C6': '#22ccff',
    'C7': '#ff8844',
  };
  return colors[id] || '#8888aa';
}

// Gate severity colors
const gateColors: Record<number, { bg: string; border: string; text: string }> = {
  1: { bg: 'rgba(255, 51, 102, 0.1)', border: 'rgba(255, 51, 102, 0.3)', text: '#ff3366' },
  2: { bg: 'rgba(255, 136, 68, 0.1)', border: 'rgba(255, 136, 68, 0.3)', text: '#ff8844' },
  3: { bg: 'rgba(255, 204, 34, 0.1)', border: 'rgba(255, 204, 34, 0.3)', text: '#ffcc22' },
  4: { bg: 'rgba(68, 255, 170, 0.1)', border: 'rgba(68, 255, 170, 0.3)', text: '#44ffaa' },
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } as any },
};

export default function MetaAnalysisTutorialPage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
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
              background: 'radial-gradient(ellipse at center top, rgba(68, 255, 170, 0.1) 0%, transparent 50%)',
            }}
          />

          <div className="flex justify-center mb-6">
            <div
              className="flex h-20 w-20 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <BarChart3 className="h-10 w-10" style={{ color: '#44ffaa' }} />
            </div>
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#44ffaa' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
        </motion.div>

        <div className="void-divider-glow mb-16" />

        {/* Step 1: C5-C7 Overview */}
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
              <Layers className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step1Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.step1Description}</p>

          {/* Agent Cards */}
          <div className="space-y-6 mb-8">
            {t.agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div
                  className="px-5 py-3 border-b"
                  style={{
                    backgroundColor: `${agent.color}15`,
                    borderColor: `${agent.color}30`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                      style={{ backgroundColor: agent.color, color: '#050508' }}
                    >
                      {agent.id}
                    </div>
                    <div>
                      <h3 className="void-heading-3 text-stellar-core">{agent.name}</h3>
                      <p className="text-sm" style={{ color: agent.color }}>{agent.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-mono text-stellar-bright mb-3 uppercase tracking-wider">
                    {locale === 'ko' ? '책임:' : 'Responsibilities:'}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {agent.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <span style={{ color: agent.color }}>▸</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-mono text-stellar-bright mb-2 uppercase tracking-wider">
                    {locale === 'ko' ? '트리거 키워드:' : 'Trigger Keywords:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.triggers.map((trigger, i) => (
                      <span
                        key={i}
                        className="inline-flex px-3 py-1 font-mono text-xs border"
                        style={{
                          color: agent.color,
                          borderColor: `${agent.color}30`,
                          backgroundColor: `${agent.color}10`,
                        }}
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Relationship Diagram */}
          <div className="void-terminal overflow-hidden">
            <div className="void-terminal-header">
              <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                {t.relationshipDiagram}
              </span>
            </div>
            <div className="p-6 font-mono text-sm text-stellar-bright">
              <pre className="whitespace-pre-wrap">
{`┌───────────────────────────────────────────┐
│  C5: Meta-Analysis Master                 │
│  (Orchestrator & Decision Authority)      │
└───────────┬───────────────────────────────┘
            │
            ├─── delegates to ───┐
            │                    │
            ▼                    ▼
┌─────────────────────┐  ┌──────────────────┐
│  C6: Data Integrity │  │  C7: Error       │
│  Guard              │  │  Prevention      │
│  (Extract & Calc)   │  │  Engine          │
└──────────┬──────────┘  └────┬─────────────┘
           │                  │
           └──── validates ◄──┘
                (4-Gate System)`}
              </pre>
            </div>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Step 2: Starting a Meta-Analysis */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Target className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step2Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.step2Description}</p>

          {/* Trigger Example */}
          {t.triggerExamples.map((example, index) => (
            <div key={index} className="mb-6">
              <div
                className="p-4 border-l-4 mb-4"
                style={{
                  backgroundColor: 'rgba(68, 255, 170, 0.05)',
                  borderColor: '#44ffaa',
                }}
              >
                <p className="font-mono text-sm text-stellar-bright mb-2">
                  {locale === 'ko' ? '사용자 입력:' : 'User Input:'}
                </p>
                <p className="text-stellar-dim italic">"{example.userInput}"</p>
              </div>

              <div
                className="p-4 border mb-4"
                style={{
                  backgroundColor: 'rgba(255, 136, 68, 0.05)',
                  borderColor: 'rgba(255, 136, 68, 0.3)',
                }}
              >
                <p className="font-mono text-sm mb-3" style={{ color: '#ff8844' }}>
                  {locale === 'ko' ? 'C5 명확화 질문:' : 'C5 Clarifying Questions:'}
                </p>
                <ul className="space-y-2">
                  {example.clarifyingQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <span style={{ color: '#ff8844' }}>Q{i + 1}:</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Checkpoint Card */}
          <div
            className="p-6 border"
            style={{
              backgroundColor: 'rgba(255, 51, 102, 0.05)',
              borderColor: 'rgba(255, 51, 102, 0.3)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center"
                style={{ backgroundColor: '#ff3366', color: '#050508' }}
              >
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-sm" style={{ color: '#ff3366' }}>
                  🔴 {t.checkpointRequired.id}
                </p>
                <p className="text-xs text-stellar-dim uppercase tracking-wider">
                  {t.checkpointRequired.level}
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-stellar-bright">
                <span className="font-mono text-stellar-dim">{locale === 'ko' ? '언제:' : 'When:'}</span>{' '}
                {t.checkpointRequired.when}
              </p>
              <p className="text-stellar-bright">
                <span className="font-mono text-stellar-dim">{locale === 'ko' ? '결정:' : 'Decision:'}</span>{' '}
                {t.checkpointRequired.decision}
              </p>
              <p className="text-stellar-bright">
                <span className="font-mono" style={{ color: '#ff3366' }}>⚠</span>{' '}
                {t.checkpointRequired.cannotProceed}
              </p>
            </div>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Step 3: Data Extraction with C6 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Database className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step3Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.step3Description}</p>

          {/* Input Options */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            {t.inputOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <h3 className="font-mono font-bold mb-2" style={{ color: '#22ccff' }}>
                  {option.method}
                </h3>
                <p className="text-sm text-stellar-dim mb-2">{option.description}</p>
                <p className="text-xs text-stellar-faint italic">{option.example}</p>
              </motion.div>
            ))}
          </div>

          {/* Hedges' g Explanation */}
          <div className="void-terminal overflow-hidden mb-6">
            <div className="void-terminal-header">
              <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                {t.hedgesGExplanation.title}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-stellar-dim mb-4">{t.hedgesGExplanation.description}</p>
              <div
                className="p-4 font-mono text-center border mb-4"
                style={{
                  backgroundColor: 'rgba(68, 255, 170, 0.05)',
                  borderColor: 'rgba(68, 255, 170, 0.3)',
                  color: '#44ffaa',
                }}
              >
                {t.hedgesGExplanation.formula}
              </div>
              <p className="text-sm font-mono text-stellar-bright mb-2 uppercase tracking-wider">
                {locale === 'ko' ? 'Hedges\' g를 사용하는 이유:' : 'Why Hedges\' g:'}
              </p>
              <ul className="space-y-2">
                {t.hedgesGExplanation.whyHedgesG.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                    <span style={{ color: '#44ffaa' }}>✓</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SD Recovery Methods */}
          <div
            className="p-5 border"
            style={{
              backgroundColor: 'rgba(255, 136, 68, 0.05)',
              borderColor: 'rgba(255, 136, 68, 0.3)',
            }}
          >
            <p className="font-mono text-sm mb-3" style={{ color: '#ff8844' }}>
              {locale === 'ko' ? 'SD 복구 방법 (C6 자동):' : 'SD Recovery Methods (C6 Automatic):'}
            </p>
            <ul className="space-y-2">
              {t.sdRecoveryMethods.map((method, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim font-mono">
                  <span style={{ color: '#ff8844' }}>{i + 1}.</span>
                  {method}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Step 4: 4-Gate Validation with C7 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 136, 68, 0.15)' }}
            >
              <Shield className="h-5 w-5" style={{ color: '#ff8844' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step4Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.step4Description}</p>

          {/* Gates */}
          <div className="space-y-6 mb-8">
            {t.gates.map((gate, index) => (
              <motion.div
                key={gate.gate}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border overflow-hidden"
                style={{ borderColor: gateColors[gate.gate].border }}
              >
                <div
                  className="px-5 py-3 border-b"
                  style={{
                    backgroundColor: gateColors[gate.gate].bg,
                    borderColor: gateColors[gate.gate].border,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                      style={{
                        backgroundColor: gateColors[gate.gate].text,
                        color: '#050508',
                      }}
                    >
                      {gate.gate}
                    </div>
                    <h3 className="void-heading-3" style={{ color: gateColors[gate.gate].text }}>
                      {gate.name}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-mono text-stellar-bright mb-3 uppercase tracking-wider">
                    {locale === 'ko' ? '검사 항목:' : 'Checks:'}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {gate.checks.map((check, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <span style={{ color: gateColors[gate.gate].text }}>▸</span>
                        {check}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-mono text-stellar-bright mb-3 uppercase tracking-wider">
                    {locale === 'ko' ? '일반적인 오류:' : 'Common Errors:'}
                  </p>
                  <ul className="space-y-2">
                    {gate.errors.map((error, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: gateColors[gate.gate].text }} />
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Error Patterns */}
          <div className="void-terminal overflow-hidden">
            <div className="void-terminal-header">
              <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
              <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
              <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                {locale === 'ko' ? '자주 감지되는 오류 패턴' : 'Common Error Patterns Detected'}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-stellar-faint/10 bg-void-surface">
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-stellar-dim">
                      {locale === 'ko' ? '패턴' : 'Pattern'}
                    </th>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-stellar-dim">
                      {locale === 'ko' ? '심각도' : 'Severity'}
                    </th>
                    <th className="px-4 py-3 text-left font-mono text-xs uppercase tracking-wider text-stellar-dim">
                      {locale === 'ko' ? '권장사항' : 'Recommendation'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {t.errorPatterns.map((pattern, index) => (
                    <tr key={index} className="border-b border-stellar-faint/5 hover:bg-void-hover transition-colors">
                      <td className="px-4 py-3 text-sm text-stellar-bright">{pattern.pattern}</td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-flex px-2 py-0.5 font-mono text-xs"
                          style={{
                            color: pattern.severity === 'High' || pattern.severity === '높음' ? '#ff3366' : '#ffcc22',
                            backgroundColor: pattern.severity === 'High' || pattern.severity === '높음' ? 'rgba(255, 51, 102, 0.1)' : 'rgba(255, 204, 34, 0.1)',
                            border: `1px solid ${pattern.severity === 'High' || pattern.severity === '높음' ? 'rgba(255, 51, 102, 0.3)' : 'rgba(255, 204, 34, 0.3)'}`,
                          }}
                        >
                          {pattern.severity}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-stellar-dim">{pattern.recommendation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Step 5: Orchestration and Results */}
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
              <GitBranch className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step5Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.step5Description}</p>

          {/* Workflow Timeline */}
          <div className="space-y-3 mb-8">
            {t.workflow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold"
                    style={{
                      backgroundColor: getAgentColor(item.agent),
                      color: '#050508',
                    }}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 p-4 bg-void-elevated border border-stellar-faint/10">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="font-mono text-sm" style={{ color: getAgentColor(item.agent) }}>
                        {item.agent}:
                      </span>
                      <span className="ml-2 text-stellar-bright">{item.action}</span>
                    </div>
                    {item.checkpoint && (
                      <span
                        className="inline-flex px-2 py-0.5 font-mono text-xs"
                        style={{
                          color: '#ff3366',
                          backgroundColor: 'rgba(255, 51, 102, 0.1)',
                          border: '1px solid rgba(255, 51, 102, 0.3)',
                        }}
                      >
                        🔴 {item.checkpoint}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decision Points */}
          <div className="space-y-6 mb-8">
            {t.decisionPoints.map((decision, index) => (
              <div
                key={index}
                className="p-5 border"
                style={{
                  backgroundColor: 'rgba(155, 89, 182, 0.05)',
                  borderColor: 'rgba(155, 89, 182, 0.3)',
                }}
              >
                <h3 className="font-mono font-bold mb-2" style={{ color: '#9b59b6' }}>
                  {locale === 'ko' ? '결정 포인트:' : 'Decision Point:'} {decision.decision}
                </h3>
                <p className="text-sm text-stellar-dim mb-3">{decision.context}</p>
                <div className="space-y-2 text-sm">
                  <p className="text-stellar-bright">
                    <span className="font-mono" style={{ color: '#44ffaa' }}>C5 권장사항:</span>{' '}
                    {decision.c5Recommendation}
                  </p>
                  <p className="text-stellar-bright">
                    <span className="font-mono" style={{ color: '#9b59b6' }}>{locale === 'ko' ? '당신의 선택:' : 'Your Choice:'}</span>{' '}
                    {decision.yourChoice}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Results Checkpoint */}
          <div
            className="p-6 border"
            style={{
              backgroundColor: 'rgba(255, 136, 68, 0.05)',
              borderColor: 'rgba(255, 136, 68, 0.3)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-10 w-10 items-center justify-center"
                style={{ backgroundColor: '#ff8844', color: '#050508' }}
              >
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-sm" style={{ color: '#ff8844' }}>
                  🟠 {t.checkpointResults.id}
                </p>
                <p className="text-xs text-stellar-dim uppercase tracking-wider">
                  {t.checkpointResults.level}
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-stellar-bright">
                <span className="font-mono text-stellar-dim">{locale === 'ko' ? '언제:' : 'When:'}</span>{' '}
                {t.checkpointResults.when}
              </p>
              <p className="text-stellar-bright">
                <span className="font-mono text-stellar-dim">{locale === 'ko' ? '결정:' : 'Decision:'}</span>{' '}
                {t.checkpointResults.decision}
              </p>
              <p className="text-stellar-bright">
                <span className="font-mono" style={{ color: '#ff8844' }}>⚠</span>{' '}
                {t.checkpointResults.canSkip}
              </p>
            </div>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Step 6: Export and Integration */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(34, 204, 255, 0.15)' }}
            >
              <Download className="h-5 w-5" style={{ color: '#22ccff' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.step6Title}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-8">{t.step6Description}</p>

          {/* Export Formats */}
          <div className="space-y-6 mb-8">
            {t.exportFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div className="bg-void-surface px-5 py-3 border-b border-stellar-faint/10">
                  <h3 className="void-heading-3 text-stellar-core">{format.format}</h3>
                  <p className="text-sm text-stellar-dim">{format.description}</p>
                </div>
                <div className="p-5">
                  {format.layers && (
                    <ul className="space-y-2 mb-4">
                      {format.layers.map((layer, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                          <span style={{ color: '#22ccff' }}>▸</span>
                          {layer}
                        </li>
                      ))}
                    </ul>
                  )}
                  {format.example && (
                    <div className="void-terminal overflow-hidden mb-4">
                      <div className="p-4 font-mono text-sm text-stellar-bright">
                        <pre className="whitespace-pre-wrap">{format.example}</pre>
                      </div>
                    </div>
                  )}
                  {format.fields && (
                    <p className="text-sm text-stellar-dim mb-4">
                      <span className="font-mono text-stellar-bright">{locale === 'ko' ? '필드:' : 'Fields:'}</span>{' '}
                      {format.fields}
                    </p>
                  )}
                  <div
                    className="p-3 border"
                    style={{
                      backgroundColor: 'rgba(34, 204, 255, 0.05)',
                      borderColor: 'rgba(34, 204, 255, 0.2)',
                    }}
                  >
                    <p className="text-sm" style={{ color: '#22ccff' }}>
                      {locale === 'ko' ? '사용 사례:' : 'Use Case:'} {format.useCase}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PRISMA Integration */}
          <div
            className="p-6 border"
            style={{
              backgroundColor: 'rgba(68, 255, 170, 0.05)',
              borderColor: 'rgba(68, 255, 170, 0.3)',
            }}
          >
            <h3 className="font-mono font-bold mb-3" style={{ color: '#44ffaa' }}>
              {t.prismaIntegration.title}
            </h3>
            <p className="text-sm text-stellar-dim mb-4">{t.prismaIntegration.description}</p>
            <ul className="space-y-2 mb-4">
              {t.prismaIntegration.sections.map((section, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                  <span style={{ color: '#44ffaa' }}>{i + 1}.</span>
                  {section}
                </li>
              ))}
            </ul>
            <div
              className="p-3 border"
              style={{
                backgroundColor: 'rgba(255, 136, 68, 0.05)',
                borderColor: 'rgba(255, 136, 68, 0.2)',
              }}
            >
              <p className="text-sm" style={{ color: '#ff8844' }}>
                ✓ {t.prismaIntegration.autoGenerate}
              </p>
            </div>
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Code Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <FileCheck className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.codeExamples.title}</h2>
          </div>

          <div className="space-y-6">
            {t.codeExamples.examples.map((example, index) => (
              <div key={index} className="void-terminal overflow-hidden">
                <div className="void-terminal-header">
                  <div className="void-terminal-dot" style={{ backgroundColor: '#ff5f56' }} />
                  <div className="void-terminal-dot" style={{ backgroundColor: '#ffbd2e' }} />
                  <div className="void-terminal-dot" style={{ backgroundColor: '#27c93f' }} />
                  <span className="ml-3 font-mono text-xs text-stellar-faint uppercase tracking-wider">
                    {example.language}
                  </span>
                </div>
                <div className="p-6 font-mono text-sm text-stellar-bright">
                  <pre className="whitespace-pre-wrap">{example.code}</pre>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Common Pitfalls */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(255, 51, 102, 0.15)' }}
            >
              <AlertTriangle className="h-5 w-5" style={{ color: '#ff3366' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">
              {locale === 'ko' ? '일반적인 함정' : 'Common Pitfalls'}
            </h2>
          </div>

          <div className="space-y-6">
            {t.pitfalls.map((pitfall, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-void-elevated border border-stellar-faint/10 overflow-hidden"
              >
                <div className="bg-void-surface px-5 py-3 border-b border-stellar-faint/10">
                  <h3 className="void-heading-3" style={{ color: '#ff3366' }}>
                    ⚠ {pitfall.pitfall}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <p className="text-sm font-mono text-stellar-bright mb-1 uppercase tracking-wider">
                      {locale === 'ko' ? '설명:' : 'Description:'}
                    </p>
                    <p className="text-sm text-stellar-dim">{pitfall.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-stellar-bright mb-1 uppercase tracking-wider">
                      {locale === 'ko' ? 'C7이 감지하는 방법:' : 'How C7 Catches This:'}
                    </p>
                    <p className="text-sm text-stellar-dim">{pitfall.howC7Catches}</p>
                  </div>
                  <div
                    className="p-3 border"
                    style={{
                      backgroundColor: 'rgba(68, 255, 170, 0.05)',
                      borderColor: 'rgba(68, 255, 170, 0.2)',
                    }}
                  >
                    <p className="text-sm" style={{ color: '#44ffaa' }}>
                      {locale === 'ko' ? '해결책:' : 'Solution:'} {pitfall.solution}
                    </p>
                  </div>
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
              background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(34, 204, 255, 0.1) 100%)',
              borderColor: 'rgba(68, 255, 170, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/agents`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.agents}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/workflows`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.workflows}
              </Link>
              <a
                href="/assets/diverga_codebook_template_v2.2.csv"
                download
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.codebook}
                <Download className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
