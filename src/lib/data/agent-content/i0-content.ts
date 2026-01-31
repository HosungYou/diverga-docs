import type { ExtendedAgentContent } from '../types';

export const i0Content: ExtendedAgentContent = {
  agentId: 'I0',
  vsProcess: {
    type: 'FULL_5_PHASE',
    phases: [
      {
        number: 1,
        title: { en: 'Manual Process Avoidance', ko: '수동 프로세스 회피' },
        purpose: {
          en: 'Avoid traditional manual literature review workflows',
          ko: '전통적인 수동 문헌 검토 워크플로우 회피'
        },
        example: 'Manual database searching, spreadsheet tracking, ad-hoc screening'
      },
      {
        number: 2,
        title: { en: 'Pipeline Architecture Design', ko: '파이프라인 아키텍처 설계' },
        purpose: {
          en: 'Design optimal 7-stage PRISMA 2020 compliant workflow',
          ko: 'PRISMA 2020 준수 최적의 7단계 워크플로우 설계'
        }
      },
      {
        number: 3,
        title: { en: 'Agent Orchestration Planning', ko: '에이전트 오케스트레이션 계획' },
        purpose: {
          en: 'Coordinate I1-I3 agents for parallel/sequential execution',
          ko: '병렬/순차 실행을 위한 I1-I3 에이전트 조정'
        }
      },
      {
        number: 4,
        title: { en: 'Checkpoint Validation', ko: '체크포인트 검증' },
        purpose: {
          en: 'Validate stage completion before transitions',
          ko: '전환 전 단계 완료 검증'
        }
      },
      {
        number: 5,
        title: { en: 'Pipeline Execution & Monitoring', ko: '파이프라인 실행 및 모니터링' },
        purpose: {
          en: 'Execute full pipeline with real-time progress tracking',
          ko: '실시간 진행 상황 추적으로 전체 파이프라인 실행'
        }
      },
    ],
  },
  tScoreReference: {
    ranges: [
      {
        range: '0.80-1.00',
        label: { en: 'Traditional (Avoid)', ko: '전통적 (피하세요)' },
        examples: ['Manual database searching', 'Spreadsheet-based tracking']
      },
      {
        range: '0.60-0.79',
        label: { en: 'Semi-Automated', ko: '반자동화' },
        examples: ['Reference manager with manual screening']
      },
      {
        range: '0.40-0.59',
        label: { en: 'Automated Core', ko: '핵심 자동화' },
        examples: ['API-based retrieval with manual quality check']
      },
      {
        range: '0.20-0.39',
        label: { en: 'Full Pipeline', ko: '전체 파이프라인' },
        examples: ['ScholaRAG systematic_review mode']
      },
      {
        range: '0.00-0.19',
        label: { en: 'AI-Native (Optimal)', ko: 'AI 네이티브 (최적)' },
        examples: ['Full 7-stage orchestration with parallel agents']
      },
    ],
  },
  inputRequirements: {
    required: [
      {
        name: 'research_question',
        description: { en: 'PICO/SPIDER formatted research question', ko: 'PICO/SPIDER 형식의 연구 질문' }
      },
      {
        name: 'project_type',
        description: { en: 'knowledge_repository (50% threshold) or systematic_review (90% threshold)', ko: 'knowledge_repository (50% 임계값) 또는 systematic_review (90% 임계값)' }
      },
    ],
    optional: [
      {
        name: 'target_paper_count',
        description: { en: 'Expected number of papers (default: 50-300 for systematic review)', ko: '예상 논문 수 (기본값: 체계적 리뷰의 경우 50-300)' }
      },
      {
        name: 'llm_provider',
        description: { en: 'Groq (default), Claude, or Ollama for screening', ko: '스크리닝용 Groq (기본값), Claude 또는 Ollama' }
      },
    ],
  },
  outputFormat: {
    sections: [
      {
        title: 'Pipeline Status',
        content: { en: 'Current stage, progress percentage, estimated time remaining', ko: '현재 단계, 진행률, 예상 남은 시간' }
      },
      {
        title: 'Stage Results',
        content: { en: 'Detailed output from each completed stage', ko: '완료된 각 단계의 상세 출력' }
      },
      {
        title: 'PRISMA Flow Diagram',
        content: { en: 'Auto-generated PRISMA 2020 compliant flow diagram', ko: '자동 생성된 PRISMA 2020 준수 흐름도' }
      },
    ],
    example: `{
  "stage": 5,
  "stage_name": "RAG Building",
  "progress": 72,
  "papers_processed": 156,
  "total_papers": 217,
  "prisma_metrics": {
    "identified": 4521,
    "screened": 892,
    "eligible": 312,
    "included": 217
  }
}`
  },
  creativityMechanisms: [
    {
      name: 'Parallel Agent Dispatch',
      applicationTiming: { en: 'Stage 1-2: Run I1 across all databases simultaneously', ko: '1-2단계: 모든 데이터베이스에서 I1 동시 실행' },
      usageExample: { en: 'Semantic Scholar + OpenAlex + arXiv in parallel = 3x faster retrieval', ko: 'Semantic Scholar + OpenAlex + arXiv 병렬 = 3배 빠른 검색' }
    },
    {
      name: 'Adaptive Screening',
      applicationTiming: { en: 'Stage 3: Adjust LLM provider based on accuracy/cost tradeoff', ko: '3단계: 정확도/비용 트레이드오프에 따라 LLM 제공자 조정' },
      usageExample: { en: 'Start with Groq (cheap), escalate to Claude for borderline cases', ko: 'Groq (저렴)으로 시작, 경계 사례는 Claude로 에스컬레이션' }
    },
    {
      name: 'Progressive RAG Building',
      applicationTiming: { en: 'Stage 5: Build RAG incrementally as PDFs download', ko: '5단계: PDF 다운로드 시 점진적으로 RAG 구축' },
      usageExample: { en: 'Start querying with 50% of papers while remaining 50% process', ko: '나머지 50% 처리 중 50%의 논문으로 쿼리 시작' }
    },
  ],
  checkpoints: [
    {
      id: 'SCH_DATABASE_SELECTION',
      description: { en: 'Databases selected and API keys validated before retrieval', ko: '검색 전 데이터베이스 선택 및 API 키 검증' }
    },
    {
      id: 'SCH_SCREENING_CRITERIA',
      description: { en: 'Inclusion/exclusion criteria defined per PRISMA 2020', ko: 'PRISMA 2020에 따른 포함/제외 기준 정의' }
    },
    {
      id: 'SCH_PRISMA_GENERATION',
      description: { en: 'PRISMA flow diagram auto-generated and validated', ko: 'PRISMA 흐름도 자동 생성 및 검증' }
    },
  ],
  codeTemplates: [
    {
      language: 'bash',
      title: { en: 'Initialize ScholaRAG Project', ko: 'ScholaRAG 프로젝트 초기화' },
      code: `# Initialize a new systematic review project
python scholarag_cli.py init \\
  --name "AI-Learning-Outcomes" \\
  --question "How do AI tutors affect learning outcomes in K-12?" \\
  --domain education \\
  --type systematic_review

# Check project status
python scholarag_cli.py status projects/2025-01-31_AI-Learning-Outcomes`
    },
    {
      language: 'bash',
      title: { en: 'Run Full Pipeline', ko: '전체 파이프라인 실행' },
      code: `# Execute all 7 stages automatically
python scholarag_cli.py run-pipeline \\
  --project projects/2025-01-31_AI-Learning-Outcomes \\
  --llm-provider groq \\
  --parallel-downloads 5

# Monitor progress
python scholarag_cli.py status projects/2025-01-31_AI-Learning-Outcomes --watch`
    },
    {
      language: 'python',
      title: { en: 'Programmatic Pipeline Control', ko: '프로그래밍 방식 파이프라인 제어' },
      code: `from scholarag import Pipeline, ProjectConfig

config = ProjectConfig(
    name="AI-Learning-Outcomes",
    research_question="How do AI tutors affect learning outcomes in K-12?",
    project_type="systematic_review",
    databases=["semantic_scholar", "openalex", "arxiv"],
    llm_provider="groq"
)

pipeline = Pipeline(config)
pipeline.run_async(parallel_agents=True)

# Check intermediate results
print(pipeline.get_prisma_metrics())
# {'identified': 4521, 'screened': 892, 'eligible': 312, 'included': 217}`
    },
  ],
  references: [
    'Page, M. J., et al. (2021). PRISMA 2020 statement. BMJ, 372.',
    'Gusenbauer, M., & Haddaway, N. R. (2020). Which academic search systems are suitable for systematic reviews?',
    'Tsafnat, G., et al. (2014). Systematic review automation technologies. Systematic Reviews.',
    'Marshall, I. J., & Wallace, B. C. (2019). Toward systematic review automation. Journal of Biomedical Informatics.',
  ],
  exampleWorkflow: {
    before: {
      en: 'Manual process: 200+ hours across 6 months, 3 researchers, inconsistent screening (T-0.95)',
      ko: '수동 프로세스: 6개월에 걸쳐 200시간 이상, 연구원 3명, 일관성 없는 스크리닝 (T-0.95)'
    },
    after: {
      en: 'ScholaRAG pipeline: 4-8 hours, single researcher, 94% screening consistency, PRISMA-compliant (T-0.15)',
      ko: 'ScholaRAG 파이프라인: 4-8시간, 연구원 1명, 94% 스크리닝 일관성, PRISMA 준수 (T-0.15)'
    },
  },

  // NEW FIELDS: User-friendly content
  quickSummary: {
    oneLiner: {
      en: 'Conducts your entire systematic literature review on autopilot',
      ko: '전체 체계적 문헌 검토를 자동 조종으로 수행'
    },
    bestFor: [
      { en: 'PRISMA 2020 compliant systematic reviews', ko: 'PRISMA 2020 준수 체계적 리뷰' },
      { en: 'Meta-analyses requiring 50-500 papers', ko: '50-500편 논문이 필요한 메타분석' },
      { en: 'Researchers with limited coding experience', ko: '코딩 경험이 제한된 연구자' },
      { en: 'Time-sensitive literature reviews', ko: '시간이 촉박한 문헌 리뷰' },
    ],
    notFor: [
      { en: 'Quick ad-hoc literature searches (<20 papers)', ko: '빠른 임시 문헌 검색 (<20편)' },
      { en: 'Narrative reviews without systematic methodology', ko: '체계적 방법론 없는 서술적 리뷰' },
    ],
    timeToResult: '4-8 hours (vs. 200+ hours manual)'
  },

  useCases: [
    {
      title: { en: 'Education Meta-Analysis', ko: '교육 메타분석' },
      scenario: {
        en: 'PhD student needs to conduct systematic review on AI tutoring effectiveness for dissertation',
        ko: '박사과정 학생이 학위논문을 위해 AI 튜터링 효과에 대한 체계적 리뷰 수행 필요'
      },
      outcome: {
        en: 'Retrieved 4,521 papers, screened to 217 included studies, generated PRISMA diagram in 6 hours',
        ko: '4,521편 논문 검색, 217편 포함 연구로 스크리닝, 6시간 만에 PRISMA 다이어그램 생성'
      },
      discipline: 'Education',
      complexity: 'intermediate'
    },
    {
      title: { en: 'Healthcare Scoping Review', ko: '의료 범위 검토' },
      scenario: {
        en: 'Research team mapping telemedicine adoption barriers across 50 countries',
        ko: '50개국의 원격의료 도입 장벽을 매핑하는 연구팀'
      },
      outcome: {
        en: 'Knowledge repository with 15,000+ papers, 50% inclusion threshold, RAG-powered thematic analysis',
        ko: '15,000편 이상 논문의 지식 저장소, 50% 포함 임계값, RAG 기반 주제 분석'
      },
      discipline: 'Healthcare',
      complexity: 'advanced'
    },
    {
      title: { en: 'Psychology Rapid Review', ko: '심리학 신속 리뷰' },
      scenario: {
        en: 'Journal submission deadline in 2 weeks, need evidence synthesis on anxiety interventions',
        ko: '2주 후 저널 제출 마감, 불안 개입에 대한 증거 종합 필요'
      },
      outcome: {
        en: 'Completed 7-stage pipeline in 8 hours, 89 included studies, manuscript-ready results table',
        ko: '8시간 만에 7단계 파이프라인 완료, 89편 포함 연구, 원고 준비 결과 표'
      },
      discipline: 'Psychology',
      complexity: 'beginner'
    },
    {
      title: { en: 'Cross-Disciplinary Synthesis', ko: '학제간 종합' },
      scenario: {
        en: 'Grant proposal requires evidence from education, psychology, and HCI on learning analytics',
        ko: '연구비 제안서에 학습 분석에 대한 교육, 심리학, HCI 분야의 증거 필요'
      },
      outcome: {
        en: 'Unified RAG across 3 disciplines, 340 papers, cross-domain theme extraction',
        ko: '3개 분야에 걸친 통합 RAG, 340편 논문, 도메인 간 주제 추출'
      },
      discipline: 'Interdisciplinary',
      complexity: 'advanced'
    },
  ],

  promptStarters: [
    {
      prompt: {
        en: 'I want to conduct a PRISMA 2020 systematic literature review on [topic]',
        ko: '[주제]에 대한 PRISMA 2020 체계적 문헌 검토를 수행하고 싶습니다'
      },
      context: {
        en: 'Use when starting a new systematic review project from scratch',
        ko: '처음부터 새로운 체계적 리뷰 프로젝트를 시작할 때 사용'
      },
      expectedResponse: {
        en: 'I0 will initialize project, ask clarifying questions, then coordinate I1-I3 for execution',
        ko: 'I0이 프로젝트를 초기화하고, 명확화 질문을 하고, 실행을 위해 I1-I3을 조정합니다'
      }
    },
    {
      prompt: {
        en: 'Run the full ScholaRAG pipeline for my project [project_name]',
        ko: '내 프로젝트 [project_name]에 대해 전체 ScholaRAG 파이프라인을 실행해주세요'
      },
      context: {
        en: 'Use after project initialization to execute all 7 stages automatically',
        ko: '프로젝트 초기화 후 7단계 모두 자동 실행 시 사용'
      },
      expectedResponse: {
        en: 'I0 dispatches agents in optimal order, monitors checkpoints, reports progress',
        ko: 'I0이 최적의 순서로 에이전트를 파견하고, 체크포인트를 모니터링하고, 진행 상황을 보고합니다'
      }
    },
    {
      prompt: {
        en: 'Check the status of my systematic review and what stage I am in',
        ko: '내 체계적 리뷰의 상태와 현재 어떤 단계인지 확인해주세요'
      },
      context: {
        en: 'Use to get current pipeline progress and any blocking issues',
        ko: '현재 파이프라인 진행 상황 및 차단 문제 확인 시 사용'
      },
      expectedResponse: {
        en: 'I0 reports stage number, papers processed, estimated time, any checkpoint blockers',
        ko: 'I0이 단계 번호, 처리된 논문, 예상 시간, 체크포인트 차단 요인을 보고합니다'
      }
    },
  ],

  decisionHelper: {
    useWhen: [
      { en: 'You need a complete systematic literature review workflow', ko: '완전한 체계적 문헌 검토 워크플로우가 필요할 때' },
      { en: 'You want PRISMA 2020 compliance without manual tracking', ko: '수동 추적 없이 PRISMA 2020 준수를 원할 때' },
      { en: 'You have 50-500 papers to process and limited time', ko: '50-500편의 논문을 처리해야 하고 시간이 제한적일 때' },
      { en: 'You need reproducible, auditable search methodology', ko: '재현 가능하고 감사 가능한 검색 방법론이 필요할 때' },
    ],
    dontUseWhen: [
      { en: 'You only need to find a few specific papers (use B1 instead)', ko: '특정 논문 몇 편만 찾으면 될 때 (대신 B1 사용)' },
      { en: 'You are doing narrative review without systematic methodology', ko: '체계적 방법론 없이 서술적 리뷰를 할 때' },
      { en: 'Your topic is too narrow (<20 expected papers)', ko: '주제가 너무 좁을 때 (예상 논문 <20편)' },
    ],
    alternativeAgents: [
      { agentId: 'B1', condition: { en: 'For manual systematic search strategy design', ko: '수동 체계적 검색 전략 설계 시' } },
      { agentId: 'B4', condition: { en: 'For qualitative evidence synthesis only', ko: '질적 증거 종합만 필요 시' } },
      { agentId: 'C4', condition: { en: 'For meta-analysis statistical methods only', ko: '메타분석 통계 방법만 필요 시' } },
    ]
  },

  persona: {
    archetype: 'The Pipeline Conductor',
    personality: {
      en: 'Calm, methodical, and reassuring. Transforms overwhelming literature review tasks into manageable automated stages. Always provides clear progress updates and next steps.',
      ko: '차분하고 체계적이며 안심시켜주는 성격. 압도적인 문헌 검토 작업을 관리 가능한 자동화 단계로 변환. 항상 명확한 진행 상황 업데이트와 다음 단계를 제공.'
    },
    voiceSample: {
      en: '"Let me handle the complexity. You focus on your research questions, and I will coordinate the entire pipeline from search to synthesis."',
      ko: '"복잡한 것은 제가 처리하겠습니다. 연구 질문에 집중하시면, 검색부터 종합까지 전체 파이프라인을 제가 조정하겠습니다."'
    },
    motto: {
      en: 'From overwhelming to automated in 7 stages',
      ko: '압도적인 것에서 7단계 자동화로'
    },
    catchphrase: {
      en: 'Your PRISMA-compliant review, on autopilot.',
      ko: 'PRISMA 준수 리뷰, 자동 조종으로.'
    }
  },

  journey: {
    startState: {
      en: 'Researcher facing 10,000+ papers with no clear process and 6-month timeline',
      ko: '명확한 프로세스 없이 10,000편 이상의 논문과 6개월 일정에 직면한 연구자'
    },
    transformation: [
      { en: 'Stage 1-2: Research question refined, databases selected, search executed in parallel', ko: '1-2단계: 연구 질문 정제, 데이터베이스 선택, 병렬 검색 실행' },
      { en: 'Stage 3: 4,000+ papers deduplicated to 2,500 unique records', ko: '3단계: 4,000편 이상 논문이 2,500개 고유 레코드로 중복 제거' },
      { en: 'Stage 4: AI screening reduces to 300 eligible papers with 94% inter-rater reliability', ko: '4단계: AI 스크리닝으로 94% 평가자 간 신뢰도로 300편의 적격 논문으로 축소' },
      { en: 'Stage 5-6: PDFs downloaded, RAG built, ready for synthesis queries', ko: '5-6단계: PDF 다운로드, RAG 구축, 종합 쿼리 준비 완료' },
      { en: 'Stage 7: PRISMA flow diagram auto-generated, manuscript-ready', ko: '7단계: PRISMA 흐름도 자동 생성, 원고 준비 완료' },
    ],
    endState: {
      en: 'Complete systematic review with 217 included studies, RAG-powered insights, and publication-ready PRISMA diagram',
      ko: '217편 포함 연구, RAG 기반 통찰력, 출판 준비 완료 PRISMA 다이어그램이 포함된 완전한 체계적 리뷰'
    },
    timeEstimate: '4-8 hours total pipeline execution'
  },

  analogies: [
    {
      metaphor: {
        en: 'Air Traffic Controller for Literature',
        ko: '문헌을 위한 항공 교통 관제사'
      },
      explanation: {
        en: 'Just as air traffic control coordinates hundreds of planes landing safely, I0 coordinates thousands of papers through 7 stages to your final included set - no crashes, no missed connections.',
        ko: '항공 교통 관제가 수백 대의 비행기가 안전하게 착륙하도록 조정하듯이, I0은 수천 편의 논문을 7단계를 거쳐 최종 포함 세트까지 조정합니다 - 충돌도 없고, 연결 누락도 없습니다.'
      }
    },
    {
      metaphor: {
        en: 'Assembly Line for Research',
        ko: '연구를 위한 조립 라인'
      },
      explanation: {
        en: 'Like a car assembly line where each station adds value, each pipeline stage transforms raw search results into polished, synthesized evidence - fully automated, quality controlled.',
        ko: '각 스테이션이 가치를 추가하는 자동차 조립 라인처럼, 각 파이프라인 단계는 원시 검색 결과를 세련되고 종합된 증거로 변환합니다 - 완전 자동화, 품질 관리.'
      }
    },
  ],

  proTips: [
    {
      tip: {
        en: 'Start with knowledge_repository mode (50% threshold) for initial exploration, then switch to systematic_review (90% threshold) for final analysis',
        ko: '초기 탐색에는 knowledge_repository 모드 (50% 임계값)로 시작하고, 최종 분석에는 systematic_review (90% 임계값)로 전환'
      },
      source: { en: 'ScholaRAG Best Practices Guide', ko: 'ScholaRAG 모범 사례 가이드' },
      difficulty: 'intermediate'
    },
    {
      tip: {
        en: 'Use Groq (llama-3.3-70b) for initial screening at $0.01/100 papers, then escalate borderline cases to Claude for higher accuracy',
        ko: '초기 스크리닝에 Groq (llama-3.3-70b)를 $0.01/100편으로 사용하고, 경계 사례는 더 높은 정확도를 위해 Claude로 에스컬레이션'
      },
      source: { en: 'Cost Optimization Strategy', ko: '비용 최적화 전략' },
      difficulty: 'advanced'
    },
    {
      tip: {
        en: 'Always run the full pipeline once with a narrow search first to validate your criteria before scaling up',
        ko: '확장하기 전에 기준을 검증하기 위해 먼저 좁은 검색으로 전체 파이프라인을 한 번 실행'
      },
      source: { en: 'Systematic Review Methodology', ko: '체계적 리뷰 방법론' },
      difficulty: 'beginner'
    },
  ],

  badges: [
    { type: 'essential', label: { en: 'Core Orchestrator', ko: '핵심 오케스트레이터' } },
    { type: 'popular', label: { en: 'Most Used in Category I', ko: '카테고리 I에서 가장 많이 사용' } },
    { type: 'deep', label: { en: 'Full Pipeline Control', ko: '전체 파이프라인 제어' } },
  ],

  faq: [
    {
      question: {
        en: 'How long does the full pipeline take?',
        ko: '전체 파이프라인은 얼마나 걸리나요?'
      },
      answer: {
        en: 'Typically 4-8 hours for 50-300 papers in systematic_review mode. This compares to 200+ hours for manual review. The bottleneck is usually PDF downloading, which runs in parallel.',
        ko: 'systematic_review 모드에서 50-300편 논문의 경우 일반적으로 4-8시간입니다. 이는 수동 리뷰의 200시간 이상과 비교됩니다. 병목은 보통 병렬로 실행되는 PDF 다운로드입니다.'
      }
    },
    {
      question: {
        en: 'What if my field has low open-access availability?',
        ko: '내 분야의 오픈 액세스 가용성이 낮으면 어떻게 하나요?'
      },
      answer: {
        en: 'ScholaRAG achieves ~50-60% PDF retrieval success across Semantic Scholar, OpenAlex, and arXiv. For remaining papers, you can manually add PDFs or use institutional access. The RAG still functions with partial coverage.',
        ko: 'ScholaRAG는 Semantic Scholar, OpenAlex, arXiv 전반에서 ~50-60% PDF 검색 성공률을 달성합니다. 나머지 논문은 수동으로 PDF를 추가하거나 기관 액세스를 사용할 수 있습니다. RAG는 부분 커버리지로도 작동합니다.'
      }
    },
    {
      question: {
        en: 'Can I pause and resume the pipeline?',
        ko: '파이프라인을 일시 중지하고 다시 시작할 수 있나요?'
      },
      answer: {
        en: 'Yes! Each stage saves its state to the project folder. Run `scholarag_cli.py status` to see current progress, then `scholarag_cli.py resume` to continue from where you left off.',
        ko: '네! 각 단계는 상태를 프로젝트 폴더에 저장합니다. `scholarag_cli.py status`를 실행하여 현재 진행 상황을 확인하고, `scholarag_cli.py resume`으로 중단한 곳에서 계속할 수 있습니다.'
      }
    },
  ],
};
