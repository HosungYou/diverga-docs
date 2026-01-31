import type { ExtendedAgentContent } from '../types';

export const i2Content: ExtendedAgentContent = {
  agentId: 'I2',
  vsProcess: {
    type: 'ENHANCED_3_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Manual Screening Avoidance', ko: '수동 스크리닝 회피' },
        purpose: {
          en: 'Avoid inconsistent human screening with fatigue-induced errors',
          ko: '피로로 인한 오류가 있는 일관성 없는 수동 스크리닝 회피'
        },
        example: 'Reading 500 abstracts manually over 3 days with decreasing attention'
      },
      {
        number: 2,
        title: { en: 'PRISMA 6-Dimension AI Screening', ko: 'PRISMA 6차원 AI 스크리닝' },
        purpose: {
          en: 'Apply systematic inclusion/exclusion criteria via LLM',
          ko: 'LLM을 통한 체계적 포함/제외 기준 적용'
        }
      },
      {
        number: 3,
        title: { en: 'Confidence Calibration & Edge Cases', ko: '신뢰도 보정 및 경계 사례' },
        purpose: {
          en: 'Handle borderline papers with escalation to human review',
          ko: '인간 검토로 에스컬레이션하여 경계 논문 처리'
        }
      },
    ],
  },
  tScoreReference: {
    ranges: [
      {
        range: '0.80-1.00',
        label: { en: 'Manual Screening (Avoid)', ko: '수동 스크리닝 (피하세요)' },
        examples: ['Single reviewer reading abstracts', 'Inconsistent criteria application']
      },
      {
        range: '0.60-0.79',
        label: { en: 'Dual Manual', ko: '이중 수동' },
        examples: ['Two reviewers with disagreement resolution']
      },
      {
        range: '0.40-0.59',
        label: { en: 'AI-Assisted', ko: 'AI 보조' },
        examples: ['AI pre-screening with human verification']
      },
      {
        range: '0.20-0.39',
        label: { en: 'AI-Primary', ko: 'AI 주도' },
        examples: ['AI screening with human edge-case review']
      },
      {
        range: '0.00-0.19',
        label: { en: 'Full AI Pipeline (Optimal)', ko: '전체 AI 파이프라인 (최적)' },
        examples: ['6-dimension PRISMA screening with calibrated confidence']
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'papers_list',
        description: { en: 'Deduplicated paper list from I1 with titles and abstracts', ko: 'I1의 제목과 초록이 포함된 중복 제거 논문 목록' }
      },
      {
        name: 'inclusion_criteria',
        description: { en: 'PICO/SPIDER-based inclusion criteria', ko: 'PICO/SPIDER 기반 포함 기준' }
      },
      {
        name: 'exclusion_criteria',
        description: { en: 'Explicit exclusion criteria with examples', ko: '예시가 포함된 명시적 제외 기준' }
      },
    ],
    optional: [
      {
        name: 'llm_provider',
        description: { en: 'Groq (default, cheap), Claude (accurate), Ollama (local)', ko: 'Groq (기본값, 저렴), Claude (정확), Ollama (로컬)' }
      },
      {
        name: 'confidence_threshold',
        description: { en: 'Minimum confidence for auto-decision (default: 0.85)', ko: '자동 결정을 위한 최소 신뢰도 (기본값: 0.85)' }
      },
      {
        name: 'project_type',
        description: { en: 'systematic_review (90% threshold) or knowledge_repository (50%)', ko: 'systematic_review (90% 임계값) 또는 knowledge_repository (50%)' }
      },
    ],
  },
  outputFormat: {
    sections: [
      {
        title: 'Screening Results',
        content: { en: 'Include/exclude decision with 6-dimension scores per paper', ko: '논문별 6차원 점수가 포함된 포함/제외 결정' }
      },
      {
        title: 'Edge Cases',
        content: { en: 'Papers requiring human review with reasoning', ko: '이유와 함께 인간 검토가 필요한 논문' }
      },
      {
        title: 'Inter-rater Reliability',
        content: { en: 'Simulated IRR metrics for audit trail', ko: '감사 추적을 위한 시뮬레이션된 IRR 지표' }
      },
    ],
    example: `{
  "total_screened": 2834,
  "included": 312,
  "excluded": 2402,
  "edge_cases": 120,
  "screening_dimensions": {
    "population": {"match_rate": 0.94},
    "intervention": {"match_rate": 0.89},
    "comparison": {"match_rate": 0.92},
    "outcome": {"match_rate": 0.87},
    "study_design": {"match_rate": 0.91},
    "language": {"match_rate": 0.99}
  },
  "estimated_irr": 0.94,
  "cost": "$0.28 (Groq)"
}`
  },
  creativityMechanisms: [
    {
      name: 'Multi-Provider Escalation',
      applicationTiming: { en: 'Phase 2-3: Start cheap, escalate for edge cases', ko: '2-3단계: 저렴하게 시작, 경계 사례는 에스컬레이션' },
      usageExample: { en: 'Groq for 80% clear cases ($0.01/100), Claude for 20% borderline ($0.15/100)', ko: '명확한 80% 사례는 Groq ($0.01/100), 경계 20%는 Claude ($0.15/100)' }
    },
    {
      name: 'Dimension-Weighted Scoring',
      applicationTiming: { en: 'Phase 2: Weight dimensions by research question', ko: '2단계: 연구 질문에 따라 차원 가중치 부여' },
      usageExample: { en: 'For intervention studies, weight "Intervention" and "Outcome" at 2x', ko: '개입 연구의 경우 "개입"과 "결과"에 2배 가중치' }
    },
    {
      name: 'Batch Calibration',
      applicationTiming: { en: 'Phase 3: Calibrate on first 50 papers', ko: '3단계: 처음 50편 논문으로 보정' },
      usageExample: { en: 'Human reviews first 50, AI learns threshold calibration for remaining 2800', ko: '인간이 처음 50편 검토, AI가 나머지 2800편에 대한 임계값 보정 학습' }
    },
  ],
  checkpoints: [
    {
      id: 'SCH_SCREENING_CRITERIA',
      description: { en: 'Inclusion/exclusion criteria validated before screening begins', ko: '스크리닝 시작 전 포함/제외 기준 검증' }
    },
  ],
  codeTemplates: [
    {
      language: 'bash',
      title: { en: 'Run AI Screening with Groq', ko: 'Groq로 AI 스크리닝 실행' },
      code: `# Screen papers using Groq (cheapest option)
python scholarag_cli.py screen \\
  --project projects/2025-01-31_AI-Learning \\
  --llm-provider groq \\
  --model llama-3.3-70b-versatile \\
  --confidence-threshold 0.85

# Review edge cases
python scholarag_cli.py review-edge-cases \\
  --project projects/2025-01-31_AI-Learning`
    },
    {
      language: 'bash',
      title: { en: 'Hybrid Screening with Escalation', ko: '에스컬레이션을 통한 하이브리드 스크리닝' },
      code: `# Two-stage screening: Groq for clear cases, Claude for borderline
python scholarag_cli.py screen \\
  --project projects/2025-01-31_AI-Learning \\
  --primary-provider groq \\
  --escalation-provider claude \\
  --escalation-threshold 0.70

# Cost estimate:
# 2834 papers × 80% clear @ $0.01/100 = $0.23
# 2834 papers × 20% borderline @ $0.15/100 = $0.85
# Total: ~$1.08`
    },
    {
      language: 'python',
      title: { en: 'Programmatic Screening', ko: '프로그래밍 방식 스크리닝' },
      code: `from scholarag.screening import PRISMAScreener

screener = PRISMAScreener(
    llm_provider="groq",
    model="llama-3.3-70b-versatile",
    inclusion_criteria={
        "population": "K-12 students or higher education",
        "intervention": "AI-based tutoring or chatbot",
        "outcome": "Learning outcomes, engagement, or satisfaction",
        "study_design": "Empirical study (experimental, quasi, correlational)",
        "language": "English or Korean"
    },
    exclusion_criteria=[
        "Opinion pieces or editorials",
        "Studies without learning outcome measures",
        "Non-educational AI applications"
    ]
)

results = await screener.screen_batch(papers, batch_size=50)

print(f"Included: {results.included_count}")
print(f"Excluded: {results.excluded_count}")
print(f"Edge cases: {results.edge_case_count}")
print(f"Estimated IRR: {results.inter_rater_reliability}")`
    },
  ],
  references: [
    'Page, M. J., et al. (2021). PRISMA 2020 statement. BMJ, 372.',
    'O\'Mara-Eves, A., et al. (2015). Using text mining for study identification in systematic reviews. Systematic Reviews.',
    'Marshall, I. J., & Wallace, B. C. (2019). Toward systematic review automation. Journal of Biomedical Informatics.',
    'Tsou, A. Y., et al. (2020). Machine learning for screening prioritization in systematic reviews. Systematic Reviews.',
  ],
  exampleWorkflow: {
    before: {
      en: 'Two reviewers screening 500 abstracts: 40 hours total, 78% initial agreement, 3-day delay (T-0.88)',
      ko: '두 명의 검토자가 500개 초록 스크리닝: 총 40시간, 78% 초기 일치, 3일 지연 (T-0.88)'
    },
    after: {
      en: 'AI screening 2834 papers: 45 minutes, 94% simulated IRR, 120 edge cases for human review (T-0.15)',
      ko: 'AI가 2834편 논문 스크리닝: 45분, 94% 시뮬레이션 IRR, 인간 검토를 위한 120개 경계 사례 (T-0.15)'
    },
  },

  // NEW FIELDS: User-friendly content
  quickSummary: {
    oneLiner: {
      en: 'AI-powered PRISMA screening that never gets tired',
      ko: '절대 지치지 않는 AI 기반 PRISMA 스크리닝'
    },
    bestFor: [
      { en: 'High-volume abstract screening (500+ papers)', ko: '대량 초록 스크리닝 (500편 이상)' },
      { en: 'Consistent application of inclusion/exclusion criteria', ko: '포함/제외 기준의 일관된 적용' },
      { en: 'Budget-conscious systematic reviews', ko: '예산을 고려한 체계적 리뷰' },
    ],
    notFor: [
      { en: 'Full-text screening (abstracts only)', ko: '전문 스크리닝 (초록만 해당)' },
      { en: 'Highly nuanced qualitative judgments', ko: '매우 미묘한 질적 판단' },
    ],
    timeToResult: '30-60 minutes for 2000+ papers'
  },

  useCases: [
    {
      title: { en: 'Cost-Effective Meta-Analysis Screening', ko: '비용 효율적인 메타분석 스크리닝' },
      scenario: {
        en: 'PhD student with limited budget needs to screen 3,000 papers for dissertation meta-analysis',
        ko: '제한된 예산의 박사과정 학생이 학위논문 메타분석을 위해 3,000편 논문 스크리닝 필요'
      },
      outcome: {
        en: 'Groq screening completed in 40 minutes for $0.30 total, 285 papers included, 94% consistency',
        ko: 'Groq 스크리닝 40분 만에 총 $0.30에 완료, 285편 논문 포함, 94% 일관성'
      },
      discipline: 'Education',
      complexity: 'beginner'
    },
    {
      title: { en: 'High-Stakes Medical Review', ko: '고위험 의료 리뷰' },
      scenario: {
        en: 'Cochrane review team needs maximum accuracy for clinical guideline development',
        ko: 'Cochrane 리뷰 팀이 임상 가이드라인 개발을 위해 최대 정확도 필요'
      },
      outcome: {
        en: 'Claude-based screening with 0.95 confidence threshold, all edge cases flagged for dual human review',
        ko: 'Claude 기반 스크리닝 0.95 신뢰도 임계값, 모든 경계 사례 이중 인간 검토를 위해 플래그'
      },
      discipline: 'Healthcare',
      complexity: 'advanced'
    },
    {
      title: { en: 'Privacy-Sensitive Institutional Review', ko: '개인정보 민감 기관 검토' },
      scenario: {
        en: 'Government agency cannot send paper data to external APIs for security reasons',
        ko: '정부 기관이 보안상의 이유로 논문 데이터를 외부 API로 보낼 수 없음'
      },
      outcome: {
        en: 'Ollama with local llama3.2 model, all processing on-premises, zero data transmission',
        ko: '로컬 llama3.2 모델이 있는 Ollama, 모든 처리 온프레미스, 데이터 전송 없음'
      },
      discipline: 'Policy Research',
      complexity: 'intermediate'
    },
    {
      title: { en: 'Rapid Scoping Review', ko: '신속 범위 검토' },
      scenario: {
        en: 'Conference deadline in 1 week, need quick screening of 1,500 papers on emerging topic',
        ko: '학회 마감 1주일 전, 새로운 주제에 대한 1,500편 논문의 빠른 스크리닝 필요'
      },
      outcome: {
        en: '50% inclusion threshold (knowledge_repository mode), completed in 25 minutes, 890 papers for RAG building',
        ko: '50% 포함 임계값 (knowledge_repository 모드), 25분 만에 완료, RAG 구축을 위한 890편 논문'
      },
      discipline: 'Interdisciplinary',
      complexity: 'beginner'
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'Screen my papers using the cheapest LLM option',
        ko: '가장 저렴한 LLM 옵션으로 내 논문을 스크리닝해주세요'
      },
      context: {
        en: 'Use when budget is primary concern and accuracy can tolerate ~90% consistency',
        ko: '예산이 주요 관심사이고 정확도가 ~90% 일관성을 허용할 수 있을 때 사용'
      },
      expectedResponse: {
        en: 'I2 uses Groq with llama-3.3-70b-versatile at $0.01 per 100 papers',
        ko: 'I2가 Groq와 llama-3.3-70b-versatile을 100편당 $0.01에 사용'
      }
    },
    {
      prompt: {
        en: 'I need maximum screening accuracy for a Cochrane-style review',
        ko: 'Cochrane 스타일 리뷰를 위해 최대 스크리닝 정확도가 필요합니다'
      },
      context: {
        en: 'Use for high-stakes medical or policy reviews requiring audit trail',
        ko: '감사 추적이 필요한 고위험 의료 또는 정책 리뷰에 사용'
      },
      expectedResponse: {
        en: 'I2 uses Claude with 0.95 confidence threshold, all borderline cases flagged for human review',
        ko: 'I2가 Claude를 0.95 신뢰도 임계값으로 사용, 모든 경계 사례 인간 검토를 위해 플래그'
      }
    },
    {
      prompt: {
        en: 'Show me the edge cases that need human review',
        ko: '인간 검토가 필요한 경계 사례를 보여주세요'
      },
      context: {
        en: 'Use after screening to review papers with low confidence scores',
        ko: '낮은 신뢰도 점수를 가진 논문을 검토하기 위해 스크리닝 후 사용'
      },
      expectedResponse: {
        en: 'I2 presents papers below confidence threshold with dimension-by-dimension reasoning',
        ko: 'I2가 신뢰도 임계값 이하의 논문을 차원별 추론과 함께 제시'
      }
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'You have 200+ papers to screen and limited reviewer time', ko: '200편 이상의 논문을 스크리닝해야 하고 검토자 시간이 제한적일 때' },
      { en: 'You need consistent criteria application across all papers', ko: '모든 논문에 걸쳐 일관된 기준 적용이 필요할 때' },
      { en: 'You want audit trail with documented reasoning per paper', ko: '논문별 문서화된 추론과 함께 감사 추적을 원할 때' },
    ],
    dontUseWhen: [
      { en: 'You need full-text screening (I2 works on abstracts only)', ko: '전문 스크리닝이 필요할 때 (I2는 초록에서만 작동)' },
      { en: 'Your inclusion criteria are highly subjective or interpretive', ko: '포함 기준이 매우 주관적이거나 해석적일 때' },
      { en: 'You have fewer than 50 papers (manual may be faster)', ko: '50편 미만의 논문이 있을 때 (수동이 더 빠를 수 있음)' },
    ],
    alternativeAgents: [
      { agentId: 'B1', condition: { en: 'For designing screening criteria before AI application', ko: 'AI 적용 전 스크리닝 기준 설계 시' } },
      { agentId: 'D4', condition: { en: 'For quality appraisal of included studies (post-screening)', ko: '포함된 연구의 품질 평가 시 (스크리닝 후)' } },
    ]
  },

  persona: {
    archetype: 'The Efficient Screener',
    personality: {
      en: 'Tireless, consistent, and transparent. Applies the same criteria to paper #1 and paper #2834 with identical precision. Always explains its reasoning and flags uncertainty.',
      ko: '지치지 않고 일관되며 투명함. 논문 #1과 논문 #2834에 동일한 정밀도로 같은 기준을 적용. 항상 추론을 설명하고 불확실성을 플래그.'
    },
    voiceSample: {
      en: '"I screen with the same attention at 3 AM as at 9 AM. No coffee breaks, no fatigue, no drift. Just consistent, documented decisions on every single paper."',
      ko: '"저는 오전 3시에도 오전 9시와 같은 주의력으로 스크리닝합니다. 커피 휴식도, 피로도, 드리프트도 없습니다. 모든 논문에 대해 일관되고 문서화된 결정만 있습니다."'
    },
    motto: {
      en: 'Same criteria, every paper, every time',
      ko: '같은 기준, 모든 논문, 매번'
    },
    catchphrase: {
      en: 'I never get screening fatigue.',
      ko: '저는 스크리닝 피로를 느끼지 않습니다.'
    }
  },

  journey: {
    startState: {
      en: 'Researcher facing 2,800 abstracts with two weeks to screen and no second reviewer',
      ko: '2,800개 초록을 2주 안에 스크리닝해야 하고 두 번째 검토자가 없는 연구자'
    },
    transformation: [
      { en: 'Inclusion/exclusion criteria structured into 6 PRISMA dimensions', ko: '포함/제외 기준이 6개 PRISMA 차원으로 구조화됨' },
      { en: 'AI screens all papers with dimension-by-dimension scoring', ko: 'AI가 차원별 점수로 모든 논문 스크리닝' },
      { en: 'High-confidence decisions auto-accepted (85%+ confidence)', ko: '고신뢰도 결정 자동 수락 (85%+ 신뢰도)' },
      { en: 'Edge cases (120 papers) flagged for human review', ko: '경계 사례 (120편) 인간 검토를 위해 플래그' },
    ],
    endState: {
      en: '312 included papers with documented reasoning, 94% simulated inter-rater reliability, completed in 45 minutes',
      ko: '문서화된 추론이 있는 312편 포함 논문, 94% 시뮬레이션 평가자 간 신뢰도, 45분 만에 완료'
    },
    timeEstimate: '30-60 minutes for 2000+ papers'
  },

  analogies: [
    {
      metaphor: {
        en: 'The Tireless Librarian',
        ko: '지치지 않는 사서'
      },
      explanation: {
        en: 'Imagine a librarian who can read and categorize 2,800 book summaries in an hour, applying the exact same criteria to the last book as the first, never needing a break, and writing down why each book does or doesnt belong on the shelf.',
        ko: '한 시간에 2,800개의 책 요약을 읽고 분류할 수 있는 사서를 상상해보세요. 첫 번째 책과 마지막 책에 정확히 같은 기준을 적용하고, 휴식이 필요 없으며, 각 책이 왜 선반에 있어야 하는지 또는 없어야 하는지를 기록합니다.'
      }
    },
    {
      metaphor: {
        en: 'Quality Control on an Assembly Line',
        ko: '조립 라인의 품질 관리'
      },
      explanation: {
        en: 'Like automated quality control that checks every product against specifications, I2 checks every paper against your PRISMA criteria - same standards, zero variance, documented results.',
        ko: '모든 제품을 사양에 대해 확인하는 자동화된 품질 관리처럼, I2는 PRISMA 기준에 대해 모든 논문을 확인합니다 - 같은 표준, 제로 편차, 문서화된 결과.'
      }
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Use the first 50 papers as calibration set - have a human review them, then compare with AI decisions to tune confidence threshold',
        ko: '처음 50편 논문을 보정 세트로 사용 - 인간이 검토하게 한 다음 AI 결정과 비교하여 신뢰도 임계값 조정'
      },
      source: { en: 'Screening Calibration Guide', ko: '스크리닝 보정 가이드' },
      difficulty: 'intermediate'
    },
    {
      tip: {
        en: 'For knowledge_repository mode (50% threshold), set confidence to 0.70 to include more borderline papers for RAG',
        ko: 'knowledge_repository 모드 (50% 임계값)의 경우 신뢰도를 0.70으로 설정하여 RAG를 위해 더 많은 경계 논문 포함'
      },
      source: { en: 'Project Type Optimization', ko: '프로젝트 유형 최적화' },
      difficulty: 'beginner'
    },
    {
      tip: {
        en: 'Weight "Outcome" dimension 2x for meta-analyses focused on effect sizes - this catches studies without clear effect reporting early',
        ko: '효과 크기에 초점을 맞춘 메타분석의 경우 "결과" 차원에 2배 가중치 - 명확한 효과 보고가 없는 연구를 조기에 잡아냄'
      },
      source: { en: 'Meta-Analysis Best Practices', ko: '메타분석 모범 사례' },
      difficulty: 'advanced'
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Core Screening', ko: '핵심 스크리닝' } },
    { type: 'quick', label: { en: 'Fast Batch Processing', ko: '빠른 배치 처리' } },
    { type: 'popular', label: { en: 'Most Cost-Effective', ko: '가장 비용 효율적' } },
  ],

  faq: [
    {
      question: {
        en: 'Which LLM provider should I use for screening?',
        ko: '스크리닝에 어떤 LLM 제공자를 사용해야 하나요?'
      },
      answer: {
        en: 'Groq (llama-3.3-70b-versatile) for most cases: $0.01/100 papers, ~90% accuracy. Claude for high-stakes reviews: $0.15/100 papers, ~95% accuracy. Ollama for privacy-sensitive work: free, local processing.',
        ko: '대부분의 경우 Groq (llama-3.3-70b-versatile): 100편당 $0.01, ~90% 정확도. 고위험 리뷰에는 Claude: 100편당 $0.15, ~95% 정확도. 개인정보 민감 작업에는 Ollama: 무료, 로컬 처리.'
      }
    },
    {
      question: {
        en: 'What are the 6 PRISMA screening dimensions?',
        ko: '6개 PRISMA 스크리닝 차원은 무엇인가요?'
      },
      answer: {
        en: 'Population, Intervention/Exposure, Comparison, Outcome, Study Design, and Language. Each paper is scored 0-1 on each dimension, with configurable weights. Papers passing all required dimensions are included.',
        ko: '모집단, 개입/노출, 비교, 결과, 연구 설계, 언어. 각 논문은 각 차원에서 0-1로 점수가 매겨지며 가중치 구성 가능. 모든 필수 차원을 통과한 논문이 포함됨.'
      }
    },
    {
      question: {
        en: 'How do I handle edge cases after screening?',
        ko: '스크리닝 후 경계 사례를 어떻게 처리하나요?'
      },
      answer: {
        en: 'Run `scholarag_cli.py review-edge-cases` to see papers below confidence threshold. Each shows dimension scores and AI reasoning. You can include/exclude manually, and the decision is logged for audit trail.',
        ko: '`scholarag_cli.py review-edge-cases`를 실행하여 신뢰도 임계값 이하의 논문을 확인. 각각 차원 점수와 AI 추론을 표시. 수동으로 포함/제외할 수 있으며 결정은 감사 추적을 위해 기록됨.'
      }
    },
  ],
};
