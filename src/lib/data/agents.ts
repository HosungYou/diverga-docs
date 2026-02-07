import { Agent } from './types';

export const agents: Agent[] = [
  // Category A: Foundation (6 agents)
  {
    id: "A1",
    slug: "research-question-refiner",
    name: { en: "Research Question Refiner", ko: "연구 질문 정제자" },
    category: "A",
    icon: "🎯",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Refines research questions using FINER/PICO/SPIDER frameworks with VS methodology to avoid predictable questions.",
      ko: "VS 방법론을 사용하여 FINER/PICO/SPIDER 프레임워크로 연구 질문을 정제하고 예측 가능한 질문을 피합니다."
    },
    purpose: {
      en: "Help researchers formulate clear, focused, and novel research questions that avoid mode collapse.",
      ko: "연구자가 모드 붕괴를 피하면서 명확하고 집중된 새로운 연구 질문을 공식화하도록 돕습니다."
    },
    triggers: {
      en: "research question, RQ, refine question, PICO, SPIDER, FINER",
      ko: "연구 질문, 연구문제, RQ, PICO, SPIDER"
    },
    relatedAgents: ["A2", "A5"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_RESEARCH_DIRECTION", level: "REQUIRED" }
  },
  {
    id: "A2",
    slug: "theoretical-framework-architect",
    name: { en: "Theoretical Framework Architect", ko: "이론적 프레임워크 설계자" },
    category: "A",
    icon: "🏛️",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs theoretical frameworks using VS methodology to recommend creative theories beyond typical choices like TAM.",
      ko: "VS 방법론을 사용하여 TAM과 같은 전형적인 선택을 넘어 창의적인 이론을 추천하는 이론적 프레임워크를 설계합니다."
    },
    purpose: {
      en: "Guide selection of theoretical frameworks with T-Score awareness, presenting alternatives across the typicality spectrum.",
      ko: "T-Score 인식과 함께 이론적 프레임워크 선택을 안내하고, 전형성 스펙트럼에 걸친 대안을 제시합니다."
    },
    triggers: {
      en: "theoretical framework, theory, conceptual model, framework selection",
      ko: "이론적 프레임워크, 이론, 이론적 틀, 개념적 모델"
    },
    relatedAgents: ["A1", "A5", "A6"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_THEORY_SELECTION", level: "REQUIRED" }
  },
  {
    id: "A3",
    slug: "devils-advocate",
    name: { en: "Devil's Advocate", ko: "반대 의견 제시자" },
    category: "A",
    icon: "😈",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Provides critical review and counterarguments, simulating Reviewer 2 feedback to strengthen research designs.",
      ko: "비판적 검토와 반론을 제공하고, 연구 설계를 강화하기 위해 리뷰어 2 피드백을 시뮬레이션합니다."
    },
    purpose: {
      en: "Anticipate criticisms, identify weaknesses, and strengthen arguments before peer review.",
      ko: "동료 심사 전에 비판을 예측하고, 약점을 식별하며, 논거를 강화합니다."
    },
    triggers: {
      en: "devil's advocate, critique, counterargument, reviewer 2, weakness",
      ko: "반대 의견, 비판, 반론, 리뷰어, 약점"
    },
    relatedAgents: ["A2", "G3"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "A4",
    slug: "research-ethics-advisor",
    name: { en: "Research Ethics Advisor", ko: "연구 윤리 자문자" },
    category: "A",
    icon: "⚖️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Advises on IRB protocols, informed consent, privacy, and ethical considerations for human subjects research.",
      ko: "인간 대상 연구를 위한 IRB 프로토콜, 동의서, 개인정보 보호 및 윤리적 고려사항에 대해 조언합니다."
    },
    purpose: {
      en: "Ensure research meets ethical standards and regulatory requirements.",
      ko: "연구가 윤리적 기준과 규제 요구사항을 충족하도록 합니다."
    },
    triggers: {
      en: "IRB, ethics, informed consent, privacy, research ethics",
      ko: "IRB, 윤리, 동의서, 연구 윤리, 개인정보"
    },
    relatedAgents: ["C1", "C2", "D2"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "A5",
    slug: "paradigm-worldview-advisor",
    name: { en: "Paradigm & Worldview Advisor", ko: "패러다임 및 세계관 자문자" },
    category: "A",
    icon: "🌐",
    tier: "HIGH",
    model: "opus",
    vsLevel: "ENHANCED",
    description: {
      en: "Guides ontological, epistemological, and axiological foundations for research design choices.",
      ko: "연구 설계 선택을 위한 존재론적, 인식론적, 가치론적 기초를 안내합니다."
    },
    purpose: {
      en: "Help researchers articulate and align their philosophical assumptions with methodology.",
      ko: "연구자가 철학적 가정을 명확히 하고 방법론과 일치시키도록 돕습니다."
    },
    triggers: {
      en: "paradigm, ontology, epistemology, worldview, positivism, constructivism",
      ko: "패러다임, 존재론, 인식론, 세계관, 실증주의"
    },
    relatedAgents: ["A1", "A2", "C2"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_PARADIGM_SELECTION", level: "REQUIRED" }
  },
  {
    id: "A6",
    slug: "conceptual-framework-visualizer",
    name: { en: "Conceptual Framework Visualizer", ko: "개념적 프레임워크 시각화자" },
    category: "A",
    icon: "📊",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "FULL",
    description: {
      en: "Creates visual representations of conceptual frameworks, variable relationships, and theoretical models.",
      ko: "개념적 프레임워크, 변수 관계 및 이론적 모델의 시각적 표현을 생성합니다."
    },
    purpose: {
      en: "Transform abstract theoretical relationships into clear visual diagrams.",
      ko: "추상적인 이론적 관계를 명확한 시각적 다이어그램으로 변환합니다."
    },
    triggers: {
      en: "conceptual framework, diagram, visualize framework, variable relationship",
      ko: "개념적 프레임워크, 다이어그램, 프레임워크 시각화, 변수 관계"
    },
    relatedAgents: ["A2", "E3"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_VISUALIZATION_PREFERENCE", level: "OPTIONAL" }
  },

  // Category B: Evidence (5 agents)
  {
    id: "B1",
    slug: "systematic-literature-scout",
    name: { en: "Systematic Literature Scout", ko: "체계적 문헌 탐색자" },
    category: "B",
    icon: "🔍",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "FULL",
    description: {
      en: "Conducts PRISMA-compliant systematic literature searches across multiple databases.",
      ko: "여러 데이터베이스에서 PRISMA를 준수하는 체계적 문헌 검색을 수행합니다."
    },
    purpose: {
      en: "Design comprehensive search strategies and manage systematic review workflows.",
      ko: "포괄적인 검색 전략을 설계하고 체계적 검토 워크플로우를 관리합니다."
    },
    triggers: {
      en: "systematic review, literature search, PRISMA, database search, scoping review",
      ko: "체계적 문헌고찰, 문헌 검색, PRISMA, 데이터베이스 검색"
    },
    relatedAgents: ["B2", "B4", "C5"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "B2",
    slug: "evidence-quality-appraiser",
    name: { en: "Evidence Quality Appraiser", ko: "근거 품질 평가자" },
    category: "B",
    icon: "✅",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Assesses study quality using RoB, GRADE, Newcastle-Ottawa, and other appraisal tools.",
      ko: "RoB, GRADE, Newcastle-Ottawa 및 기타 평가 도구를 사용하여 연구 품질을 평가합니다."
    },
    purpose: {
      en: "Evaluate methodological quality and risk of bias in primary studies.",
      ko: "1차 연구의 방법론적 품질과 편향 위험을 평가합니다."
    },
    triggers: {
      en: "quality appraisal, RoB, risk of bias, GRADE, methodological quality",
      ko: "품질 평가, RoB, 비뚤림 위험, GRADE, 방법론적 품질"
    },
    relatedAgents: ["B1", "C5", "F4"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "B3",
    slug: "effect-size-extractor",
    name: { en: "Effect Size Extractor", ko: "효과크기 추출자" },
    category: "B",
    icon: "📐",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Calculates and converts effect sizes (Cohen's d, Hedges' g, r, OR) from various statistical outputs.",
      ko: "다양한 통계 출력에서 효과크기(Cohen's d, Hedges' g, r, OR)를 계산하고 변환합니다."
    },
    purpose: {
      en: "Extract and standardize effect sizes for meta-analysis.",
      ko: "메타분석을 위해 효과크기를 추출하고 표준화합니다."
    },
    triggers: {
      en: "effect size, Cohen's d, Hedges' g, extract effect, conversion",
      ko: "효과크기, Cohen's d, Hedges' g, 효과 추출, 변환"
    },
    relatedAgents: ["C5", "C6"],
    paradigms: ["quantitative"]
  },
  {
    id: "B4",
    slug: "research-radar",
    name: { en: "Research Radar", ko: "연구 레이더" },
    category: "B",
    icon: "📡",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Monitors emerging research trends, new publications, and citation alerts.",
      ko: "새로운 연구 동향, 신규 출판물 및 인용 알림을 모니터링합니다."
    },
    purpose: {
      en: "Keep researchers updated on relevant new publications and trends.",
      ko: "연구자들에게 관련 신규 출판물과 동향을 업데이트합니다."
    },
    triggers: {
      en: "research trends, new publications, emerging topics, citation alert",
      ko: "연구 동향, 신규 출판물, 신규 주제, 인용 알림"
    },
    relatedAgents: ["B1", "G1"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "B5",
    slug: "parallel-document-processor",
    name: { en: "Parallel Document Processor", ko: "병렬 문서 처리자" },
    category: "B",
    icon: "📚",
    tier: "HIGH",
    model: "opus",
    vsLevel: "LIGHT",
    description: {
      en: "Processes large batches of PDFs and documents in parallel with distributed workload.",
      ko: "분산 작업 부하로 대량의 PDF와 문서를 병렬 처리합니다."
    },
    purpose: {
      en: "Handle high-throughput document processing for systematic reviews.",
      ko: "체계적 검토를 위한 대용량 문서 처리를 수행합니다."
    },
    triggers: {
      en: "batch PDF, parallel processing, multiple PDFs, document extraction",
      ko: "PDF 일괄 처리, 병렬 처리, 다중 PDF, 문서 추출"
    },
    relatedAgents: ["B1", "C5", "C6"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },

  // Category C: Design & Meta-Analysis (7 agents)
  {
    id: "C1",
    slug: "quantitative-design-consultant",
    name: { en: "Quantitative Design Consultant", ko: "양적 연구 설계 컨설턴트" },
    category: "C",
    icon: "📈",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs RCTs, quasi-experimental, survey, and correlational studies with VS alternatives.",
      ko: "VS 대안과 함께 RCT, 준실험, 설문조사 및 상관관계 연구를 설계합니다."
    },
    purpose: {
      en: "Guide quantitative research design choices with creative alternatives.",
      ko: "창의적인 대안과 함께 양적 연구 설계 선택을 안내합니다."
    },
    triggers: {
      en: "quantitative design, RCT, experimental design, survey design, power analysis",
      ko: "양적 연구 설계, RCT, 실험 설계, 설문 설계, 검정력 분석"
    },
    relatedAgents: ["D1", "D4", "E1"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "C2",
    slug: "qualitative-design-consultant",
    name: { en: "Qualitative Design Consultant", ko: "질적 연구 설계 컨설턴트" },
    category: "C",
    icon: "🎭",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs phenomenology, grounded theory, case study, and narrative inquiry studies.",
      ko: "현상학, 근거이론, 사례연구 및 내러티브 탐구 연구를 설계합니다."
    },
    purpose: {
      en: "Guide qualitative research design with methodological rigor and creativity.",
      ko: "방법론적 엄격성과 창의성으로 질적 연구 설계를 안내합니다."
    },
    triggers: {
      en: "qualitative design, phenomenology, grounded theory, case study, narrative",
      ko: "질적 연구 설계, 현상학, 근거이론, 사례연구, 내러티브"
    },
    relatedAgents: ["A5", "D2", "E2"],
    paradigms: ["qualitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "C3",
    slug: "mixed-methods-design-consultant",
    name: { en: "Mixed Methods Design Consultant", ko: "혼합방법 설계 컨설턴트" },
    category: "C",
    icon: "🔀",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs sequential, convergent, embedded, and transformative mixed methods studies.",
      ko: "순차적, 수렴적, 내재적 및 변혁적 혼합방법 연구를 설계합니다."
    },
    purpose: {
      en: "Integrate quantitative and qualitative approaches with methodological coherence.",
      ko: "방법론적 일관성으로 양적 및 질적 접근법을 통합합니다."
    },
    triggers: {
      en: "mixed methods, sequential design, convergent design, integration strategy",
      ko: "혼합방법, 순차적 설계, 수렴적 설계, 통합 전략"
    },
    relatedAgents: ["C1", "C2", "E3"],
    paradigms: ["mixed"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "C4",
    slug: "experimental-materials-developer",
    name: { en: "Experimental Materials Developer", ko: "실험 자료 개발자" },
    category: "C",
    icon: "🧪",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Develops intervention materials, treatment protocols, and manipulation checks.",
      ko: "중재 자료, 처치 프로토콜 및 조작 점검을 개발합니다."
    },
    purpose: {
      en: "Create rigorous experimental materials with proper controls.",
      ko: "적절한 통제와 함께 엄격한 실험 자료를 생성합니다."
    },
    triggers: {
      en: "intervention materials, treatment protocol, manipulation check, control condition",
      ko: "중재 자료, 처치 프로토콜, 조작 점검, 통제 조건"
    },
    relatedAgents: ["C1", "D4"],
    paradigms: ["quantitative"]
  },
  {
    id: "C5",
    slug: "meta-analysis-master",
    name: { en: "Meta-Analysis Master", ko: "메타분석 마스터" },
    category: "C",
    icon: "🎛️",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Orchestrates meta-analysis workflows with multi-gate validation, ES hierarchy, and heterogeneity analysis.",
      ko: "다중 게이트 검증, ES 계층 및 이질성 분석을 통해 메타분석 워크플로우를 조율합니다."
    },
    purpose: {
      en: "Lead comprehensive meta-analysis projects with rigorous validation.",
      ko: "엄격한 검증과 함께 포괄적인 메타분석 프로젝트를 이끕니다."
    },
    triggers: {
      en: "meta-analysis, pooled effect, heterogeneity, forest plot, MASEM",
      ko: "메타분석, 통합 효과, 이질성, 포레스트 플롯, MASEM"
    },
    relatedAgents: ["B1", "B3", "C6", "C7"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_META_GATE", level: "REQUIRED" }
  },
  {
    id: "C6",
    slug: "data-integrity-guard",
    name: { en: "Data Integrity Guard", ko: "데이터 무결성 수호자" },
    category: "C",
    icon: "🛡️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Ensures data completeness, Hedges' g calculation accuracy, and SD recovery.",
      ko: "데이터 완전성, Hedges' g 계산 정확도 및 SD 복구를 보장합니다."
    },
    purpose: {
      en: "Maintain data quality throughout meta-analysis extraction.",
      ko: "메타분석 추출 전반에 걸쳐 데이터 품질을 유지합니다."
    },
    triggers: {
      en: "data extraction, PDF extract, data validation, SD recovery",
      ko: "데이터 추출, PDF 추출, 데이터 검증, SD 복구"
    },
    relatedAgents: ["C5", "C7", "B3"],
    paradigms: ["quantitative"]
  },
  {
    id: "C7",
    slug: "error-prevention-engine",
    name: { en: "Error Prevention Engine", ko: "오류 방지 엔진" },
    category: "C",
    icon: "🚨",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Detects patterns, anomalies, and common errors in meta-analysis data.",
      ko: "메타분석 데이터에서 패턴, 이상 및 일반적인 오류를 탐지합니다."
    },
    purpose: {
      en: "Prevent common meta-analysis errors through proactive detection.",
      ko: "사전 탐지를 통해 일반적인 메타분석 오류를 방지합니다."
    },
    triggers: {
      en: "error prevention, validation, data check, anomaly detection",
      ko: "오류 방지, 검증, 데이터 확인, 이상 탐지"
    },
    relatedAgents: ["C5", "C6", "F1"],
    paradigms: ["quantitative"]
  },

  // Category D: Data Collection (4 agents)
  {
    id: "D1",
    slug: "sampling-strategy-advisor",
    name: { en: "Sampling Strategy Advisor", ko: "표집 전략 자문자" },
    category: "D",
    icon: "🎲",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Advises on probability and non-probability sampling with sample size calculations.",
      ko: "표본 크기 계산과 함께 확률 및 비확률 표집에 대해 조언합니다."
    },
    purpose: {
      en: "Design appropriate sampling strategies for research goals.",
      ko: "연구 목표에 적합한 표집 전략을 설계합니다."
    },
    triggers: {
      en: "sampling, sample size, G*Power, probability sampling, purposive",
      ko: "표집, 표본 크기, G*Power, 확률 표집, 목적적"
    },
    relatedAgents: ["C1", "C2", "E1"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "D2",
    slug: "interview-focus-group-specialist",
    name: { en: "Interview & Focus Group Specialist", ko: "인터뷰 및 포커스 그룹 전문가" },
    category: "D",
    icon: "🎤",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Designs interview protocols, focus group guides, and transcription strategies.",
      ko: "인터뷰 프로토콜, 포커스 그룹 가이드 및 전사 전략을 설계합니다."
    },
    purpose: {
      en: "Create rigorous qualitative data collection instruments.",
      ko: "엄격한 질적 데이터 수집 도구를 생성합니다."
    },
    triggers: {
      en: "interview, focus group, interview protocol, transcription",
      ko: "인터뷰, 포커스 그룹, 인터뷰 프로토콜, 전사"
    },
    relatedAgents: ["C2", "E2"],
    paradigms: ["qualitative", "mixed"]
  },
  {
    id: "D3",
    slug: "observation-protocol-designer",
    name: { en: "Observation Protocol Designer", ko: "관찰 프로토콜 설계자" },
    category: "D",
    icon: "👁️",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Designs structured observation protocols, field notes templates, and coding schemes.",
      ko: "구조화된 관찰 프로토콜, 현장 노트 템플릿 및 코딩 체계를 설계합니다."
    },
    purpose: {
      en: "Create systematic observation instruments for field research.",
      ko: "현장 연구를 위한 체계적인 관찰 도구를 생성합니다."
    },
    triggers: {
      en: "observation, observation protocol, field notes, structured observation",
      ko: "관찰, 관찰 프로토콜, 현장 노트, 구조화된 관찰"
    },
    relatedAgents: ["C2", "H1"],
    paradigms: ["qualitative"]
  },
  {
    id: "D4",
    slug: "measurement-instrument-developer",
    name: { en: "Measurement Instrument Developer", ko: "측정 도구 개발자" },
    category: "D",
    icon: "📋",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Develops scales, questionnaires with validity and reliability testing protocols.",
      ko: "타당도 및 신뢰도 검사 프로토콜과 함께 척도, 설문지를 개발합니다."
    },
    purpose: {
      en: "Create psychometrically sound measurement instruments.",
      ko: "심리측정학적으로 건전한 측정 도구를 생성합니다."
    },
    triggers: {
      en: "instrument, measurement, scale development, validity, reliability",
      ko: "도구, 측정, 척도 개발, 타당도, 신뢰도"
    },
    relatedAgents: ["C1", "E1", "F4"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },

  // Category E: Analysis (5 agents)
  {
    id: "E1",
    slug: "quantitative-analysis-guide",
    name: { en: "Quantitative Analysis Guide", ko: "양적 분석 가이드" },
    category: "E",
    icon: "📊",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Guides statistical analysis selection, assumption testing, and interpretation.",
      ko: "통계 분석 선택, 가정 검정 및 해석을 안내합니다."
    },
    purpose: {
      en: "Select and apply appropriate statistical methods with rigor.",
      ko: "엄격하게 적절한 통계 방법을 선택하고 적용합니다."
    },
    triggers: {
      en: "statistical analysis, ANOVA, regression, SEM, assumptions",
      ko: "통계 분석, ANOVA, 회귀, SEM, 가정"
    },
    relatedAgents: ["C1", "E4", "E5"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_ANALYSIS_PLAN", level: "RECOMMENDED" }
  },
  {
    id: "E2",
    slug: "qualitative-coding-specialist",
    name: { en: "Qualitative Coding Specialist", ko: "질적 코딩 전문가" },
    category: "E",
    icon: "🏷️",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Conducts thematic analysis, grounded theory coding, and NVivo guidance.",
      ko: "주제 분석, 근거이론 코딩 및 NVivo 안내를 수행합니다."
    },
    purpose: {
      en: "Apply systematic qualitative analysis with methodological transparency.",
      ko: "방법론적 투명성과 함께 체계적인 질적 분석을 적용합니다."
    },
    triggers: {
      en: "qualitative coding, thematic analysis, grounded theory coding, NVivo",
      ko: "질적 코딩, 주제 분석, 근거이론 코딩, NVivo"
    },
    relatedAgents: ["C2", "D2"],
    paradigms: ["qualitative"]
  },
  {
    id: "E3",
    slug: "mixed-methods-integration",
    name: { en: "Mixed Methods Integration Specialist", ko: "혼합방법 통합 전문가" },
    category: "E",
    icon: "🔗",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Creates joint displays, data transformation, and meta-inference development.",
      ko: "공동 디스플레이, 데이터 변환 및 메타 추론 개발을 생성합니다."
    },
    purpose: {
      en: "Integrate quantitative and qualitative findings meaningfully.",
      ko: "양적 및 질적 연구 결과를 의미 있게 통합합니다."
    },
    triggers: {
      en: "mixed methods integration, joint display, meta-inference, data transformation",
      ko: "혼합방법 통합, 공동 디스플레이, 메타 추론, 데이터 변환"
    },
    relatedAgents: ["C3", "E1", "E2"],
    paradigms: ["mixed"],
    checkpoint: { id: "CP_INTEGRATION_STRATEGY", level: "RECOMMENDED" }
  },
  {
    id: "E4",
    slug: "analysis-code-generator",
    name: { en: "Analysis Code Generator", ko: "분석 코드 생성자" },
    category: "E",
    icon: "💻",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Generates R, Python, SPSS, Stata, and Mplus analysis code.",
      ko: "R, Python, SPSS, Stata 및 Mplus 분석 코드를 생성합니다."
    },
    purpose: {
      en: "Produce reproducible analysis scripts for various platforms.",
      ko: "다양한 플랫폼을 위한 재현 가능한 분석 스크립트를 생성합니다."
    },
    triggers: {
      en: "R code, Python code, SPSS syntax, analysis code, script",
      ko: "R 코드, Python 코드, SPSS 구문, 분석 코드, 스크립트"
    },
    relatedAgents: ["E1", "E2", "F3"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "E5",
    slug: "sensitivity-analysis-designer",
    name: { en: "Sensitivity Analysis Designer", ko: "민감도 분석 설계자" },
    category: "E",
    icon: "🎚️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Designs robustness checks and sensitivity analyses for meta-analysis and primary studies.",
      ko: "메타분석 및 1차 연구를 위한 강건성 검토 및 민감도 분석을 설계합니다."
    },
    purpose: {
      en: "Test the robustness of findings under alternative specifications.",
      ko: "대안적 명세 하에서 연구 결과의 강건성을 테스트합니다."
    },
    triggers: {
      en: "sensitivity analysis, robustness check, alternative specifications",
      ko: "민감도 분석, 강건성 검토, 대안적 명세"
    },
    relatedAgents: ["C5", "E1", "F4"],
    paradigms: ["quantitative"]
  },

  // Category F: Quality (5 agents)
  {
    id: "F1",
    slug: "internal-consistency-checker",
    name: { en: "Internal Consistency Checker", ko: "내적 일관성 검토자" },
    category: "F",
    icon: "🔍",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Verifies logical consistency, alignment, and coherence across research documents.",
      ko: "연구 문서 전체에서 논리적 일관성, 정렬 및 일관성을 확인합니다."
    },
    purpose: {
      en: "Ensure internal consistency throughout the research document.",
      ko: "연구 문서 전체에서 내적 일관성을 보장합니다."
    },
    triggers: {
      en: "consistency check, internal consistency, alignment, coherence",
      ko: "일관성 검토, 내적 일관성, 정렬, 일관성"
    },
    relatedAgents: ["F2", "G2"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "F2",
    slug: "checklist-manager",
    name: { en: "Checklist Manager", ko: "체크리스트 관리자" },
    category: "F",
    icon: "📝",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Manages PRISMA, CONSORT, STROBE, COREQ, and other reporting guidelines.",
      ko: "PRISMA, CONSORT, STROBE, COREQ 및 기타 보고 지침을 관리합니다."
    },
    purpose: {
      en: "Ensure compliance with relevant reporting standards.",
      ko: "관련 보고 표준 준수를 보장합니다."
    },
    triggers: {
      en: "checklist, CONSORT, STROBE, PRISMA, COREQ, reporting guideline",
      ko: "체크리스트, CONSORT, STROBE, PRISMA, COREQ, 보고 지침"
    },
    relatedAgents: ["B1", "G1"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "F3",
    slug: "reproducibility-auditor",
    name: { en: "Reproducibility Auditor", ko: "재현성 감사자" },
    category: "F",
    icon: "🔄",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Audits Open Science Framework (OSF) practices, data sharing, and reproducibility.",
      ko: "오픈 사이언스 프레임워크(OSF) 관행, 데이터 공유 및 재현성을 감사합니다."
    },
    purpose: {
      en: "Promote transparent and reproducible research practices.",
      ko: "투명하고 재현 가능한 연구 관행을 촉진합니다."
    },
    triggers: {
      en: "reproducibility, OSF, replication, open science, data sharing",
      ko: "재현성, OSF, 복제, 오픈 사이언스, 데이터 공유"
    },
    relatedAgents: ["G4", "E4"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "F4",
    slug: "bias-trustworthiness-detector",
    name: { en: "Bias & Trustworthiness Detector", ko: "편향 및 신뢰성 탐지자" },
    category: "F",
    icon: "⚠️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Detects p-hacking, HARKing, QRPs, and assesses trustworthiness criteria.",
      ko: "p-해킹, HARKing, QRP를 탐지하고 신뢰성 기준을 평가합니다."
    },
    purpose: {
      en: "Identify potential biases and questionable research practices.",
      ko: "잠재적 편향과 의심스러운 연구 관행을 식별합니다."
    },
    triggers: {
      en: "bias detection, p-hacking, HARKing, trustworthiness, QRP",
      ko: "편향 탐지, p-해킹, HARKing, 신뢰성, QRP"
    },
    relatedAgents: ["B2", "E5"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "F5",
    slug: "humanization-verifier",
    name: { en: "Humanization Verifier", ko: "휴먼화 검증자" },
    category: "F",
    icon: "✓",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Verifies citation integrity, statistical accuracy, and meaning preservation after humanization.",
      ko: "휴먼화 후 인용 무결성, 통계적 정확성 및 의미 보존을 확인합니다."
    },
    purpose: {
      en: "Ensure humanized text maintains scholarly integrity.",
      ko: "휴먼화된 텍스트가 학문적 무결성을 유지하도록 합니다."
    },
    triggers: {
      en: "humanization verify, AI text check, verification",
      ko: "휴먼화 검증, AI 텍스트 확인, 검증"
    },
    relatedAgents: ["G5", "G6"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },

  // Category G: Communication (6 agents)
  {
    id: "G1",
    slug: "journal-matcher",
    name: { en: "Journal Matcher", ko: "저널 매칭자" },
    category: "G",
    icon: "📰",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Recommends target journals based on scope, impact factor, and manuscript fit.",
      ko: "범위, 영향력 지수 및 원고 적합성에 따라 대상 저널을 추천합니다."
    },
    purpose: {
      en: "Match manuscripts with appropriate journals for publication.",
      ko: "출판을 위해 원고를 적절한 저널과 매칭합니다."
    },
    triggers: {
      en: "journal match, where to publish, target journal, impact factor",
      ko: "저널 매칭, 투고처, 대상 저널, 영향력 지수"
    },
    relatedAgents: ["G2", "F2"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "G2",
    slug: "academic-communicator",
    name: { en: "Academic Communicator", ko: "학술 커뮤니케이터" },
    category: "G",
    icon: "✍️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Writes abstracts, plain language summaries, and adapts content for different audiences.",
      ko: "초록, 쉬운 언어 요약을 작성하고 다양한 청중을 위해 콘텐츠를 조정합니다."
    },
    purpose: {
      en: "Communicate research findings clearly to various audiences.",
      ko: "다양한 청중에게 연구 결과를 명확하게 전달합니다."
    },
    triggers: {
      en: "academic writing, manuscript, write paper, abstract, plain language",
      ko: "학술 글쓰기, 원고, 논문 작성, 초록, 쉬운 언어"
    },
    relatedAgents: ["G1", "G3"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "G3",
    slug: "peer-review-strategist",
    name: { en: "Peer Review Strategist", ko: "동료 심사 전략가" },
    category: "G",
    icon: "📋",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Analyzes reviewer comments, drafts response letters, and plans revision strategy.",
      ko: "리뷰어 코멘트를 분석하고, 응답 서신을 작성하며, 수정 전략을 계획합니다."
    },
    purpose: {
      en: "Navigate peer review successfully with strategic responses.",
      ko: "전략적 응답으로 동료 심사를 성공적으로 진행합니다."
    },
    triggers: {
      en: "peer review, reviewer response, revision, rebuttal",
      ko: "동료 심사, 리뷰어 응답, 수정, 반박"
    },
    relatedAgents: ["A3", "G2"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_RESPONSE_APPROVAL", level: "RECOMMENDED" }
  },
  {
    id: "G4",
    slug: "preregistration-composer",
    name: { en: "Preregistration Composer", ko: "사전등록 작성자" },
    category: "G",
    icon: "📜",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Composes OSF, AsPredicted preregistrations and registered reports.",
      ko: "OSF, AsPredicted 사전등록 및 등록 보고서를 작성합니다."
    },
    purpose: {
      en: "Create transparent preregistrations for confirmatory research.",
      ko: "확증적 연구를 위한 투명한 사전등록을 생성합니다."
    },
    triggers: {
      en: "preregistration, OSF, AsPredicted, pre-register, registered report",
      ko: "사전등록, OSF, AsPredicted, 등록 보고서"
    },
    relatedAgents: ["F3", "C1"],
    paradigms: ["quantitative", "mixed"],
    checkpoint: { id: "CP_PREREGISTRATION_APPROVAL", level: "RECOMMENDED" }
  },
  {
    id: "G5",
    slug: "academic-style-auditor",
    name: { en: "Academic Style Auditor", ko: "학술 스타일 감사자" },
    category: "G",
    icon: "🔎",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Detects AI writing patterns across 24 categories, provides probability scoring and risk classification.",
      ko: "24개 카테고리에서 AI 글쓰기 패턴을 탐지하고 확률 점수화 및 위험 분류를 제공합니다."
    },
    purpose: {
      en: "Identify AI-generated text patterns before humanization.",
      ko: "휴먼화 전 AI 생성 텍스트 패턴을 식별합니다."
    },
    triggers: {
      en: "AI pattern, check AI writing, style audit, AI detection",
      ko: "AI 패턴, AI 글쓰기 검토, 스타일 감사, AI 탐지"
    },
    relatedAgents: ["G6", "F5"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "G6",
    slug: "academic-style-humanizer",
    name: { en: "Academic Style Humanizer", ko: "학술 스타일 휴먼화자" },
    category: "G",
    icon: "🎨",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Transforms AI patterns to natural prose while preserving citations and scholarly integrity.",
      ko: "인용과 학문적 무결성을 유지하면서 AI 패턴을 자연스러운 문장으로 변환합니다."
    },
    purpose: {
      en: "Make AI-assisted writing sound natural and human.",
      ko: "AI 지원 글쓰기를 자연스럽고 인간적으로 만듭니다."
    },
    triggers: {
      en: "humanize, humanization, natural writing, AI to human",
      ko: "휴먼화, 자연스러운 글쓰기, AI에서 인간으로"
    },
    relatedAgents: ["G5", "F5", "G2"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },

  // Category H: Specialized (2 agents)
  {
    id: "H1",
    slug: "ethnographic-research-advisor",
    name: { en: "Ethnographic Research Advisor", ko: "민족지학 연구 자문자" },
    category: "H",
    icon: "🌍",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Guides fieldwork planning, cultural immersion, thick description, and reflexivity.",
      ko: "현장 조사 계획, 문화적 몰입, 풍부한 기술 및 성찰성을 안내합니다."
    },
    purpose: {
      en: "Support rigorous ethnographic research with cultural sensitivity.",
      ko: "문화적 민감성과 함께 엄격한 민족지학적 연구를 지원합니다."
    },
    triggers: {
      en: "ethnography, fieldwork, participant observation, thick description",
      ko: "민족지학, 현장연구, 참여관찰, 풍부한 기술"
    },
    relatedAgents: ["C2", "D3", "A5"],
    paradigms: ["qualitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "H2",
    slug: "action-research-facilitator",
    name: { en: "Action Research Facilitator", ko: "실행연구 촉진자" },
    category: "H",
    icon: "🔄",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Facilitates PAR, CBPR, action cycles, and stakeholder collaboration.",
      ko: "PAR, CBPR, 실행 주기 및 이해관계자 협력을 촉진합니다."
    },
    purpose: {
      en: "Enable participatory and transformative research practices.",
      ko: "참여적이고 변혁적인 연구 관행을 가능하게 합니다."
    },
    triggers: {
      en: "action research, PAR, CBPR, participatory, practitioner research",
      ko: "실행연구, PAR, CBPR, 참여적 연구, 실천가 연구"
    },
    relatedAgents: ["C2", "A5"],
    paradigms: ["qualitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },

  // Category I: Systematic Review Automation (4 agents)
  {
    id: "I0",
    slug: "scholar-agent-orchestrator",
    name: { en: "Scholar Agent Orchestrator", ko: "학술 에이전트 오케스트레이터" },
    category: "I",
    icon: "🎼",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Orchestrates the complete 7-stage PRISMA systematic review pipeline, coordinating I1→I2→I3 agents.",
      ko: "Diverga의 7단계 PRISMA 체계적 문헌고찰 파이프라인 전체를 조율하고 I1→I2→I3 에이전트를 조정합니다."
    },
    purpose: {
      en: "Serve as the single entry point for systematic literature reviews, managing checkpoints and agent coordination.",
      ko: "체계적 문헌고찰의 단일 진입점으로서 체크포인트와 에이전트 조정을 관리합니다."
    },
    triggers: {
      en: "systematic review, literature review automation, Diverga, PRISMA pipeline",
      ko: "체계적 문헌고찰, 문헌고찰 자동화, Diverga, PRISMA 파이프라인"
    },
    relatedAgents: ["I1", "I2", "I3", "B1"],
    paradigms: ["quantitative", "mixed"],
    checkpoint: { id: "SCH_PRISMA_GENERATION", level: "OPTIONAL" }
  },
  {
    id: "I1",
    slug: "paper-retrieval-agent",
    name: { en: "Paper Retrieval Agent", ko: "논문 수집 에이전트" },
    category: "I",
    icon: "📥",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Retrieves papers from Semantic Scholar, OpenAlex, and arXiv APIs with automatic deduplication by DOI/title.",
      ko: "Semantic Scholar, OpenAlex, arXiv API에서 논문을 수집하고 DOI/제목으로 자동 중복 제거합니다."
    },
    purpose: {
      en: "Execute multi-database paper retrieval with 40-50% open access PDF URL availability.",
      ko: "40-50% 오픈 액세스 PDF URL 가용성으로 다중 데이터베이스 논문 검색을 실행합니다."
    },
    triggers: {
      en: "fetch papers, retrieve papers, database search, Semantic Scholar, OpenAlex, arXiv",
      ko: "논문 검색, 논문 수집, 데이터베이스 검색, Semantic Scholar, OpenAlex, arXiv"
    },
    relatedAgents: ["I0", "I2", "B1"],
    paradigms: ["quantitative", "mixed"],
    checkpoint: { id: "SCH_DATABASE_SELECTION", level: "REQUIRED" }
  },
  {
    id: "I2",
    slug: "screening-assistant",
    name: { en: "Screening Assistant", ko: "스크리닝 어시스턴트" },
    category: "I",
    icon: "🔬",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "AI-assisted PRISMA 6-dimension screening using Groq LLM (100x cheaper than Claude). Supports knowledge_repository (50%) and systematic_review (90%) thresholds.",
      ko: "Groq LLM을 사용한 AI 지원 PRISMA 6차원 스크리닝 (Claude보다 100배 저렴). knowledge_repository (50%)와 systematic_review (90%) 임계값을 지원합니다."
    },
    purpose: {
      en: "Screen papers against inclusion/exclusion criteria with configurable confidence thresholds.",
      ko: "구성 가능한 신뢰도 임계값으로 포함/제외 기준에 따라 논문을 스크리닝합니다."
    },
    triggers: {
      en: "screen papers, PRISMA screening, inclusion criteria, exclusion criteria, relevance screening",
      ko: "논문 스크리닝, PRISMA 스크리닝, 포함 기준, 제외 기준, 관련성 스크리닝"
    },
    relatedAgents: ["I0", "I1", "I3", "B2"],
    paradigms: ["quantitative", "mixed"],
    checkpoint: { id: "SCH_SCREENING_CRITERIA", level: "REQUIRED" }
  },
  {
    id: "I3",
    slug: "rag-builder",
    name: { en: "RAG Builder", ko: "RAG 빌더" },
    category: "I",
    icon: "🧱",
    tier: "LOW",
    model: "haiku",
    vsLevel: "LIGHT",
    description: {
      en: "Builds ChromaDB vector database with local embeddings (all-MiniLM-L6-v2). Zero-cost stack for PDF processing and RAG queries.",
      ko: "로컬 임베딩(all-MiniLM-L6-v2)으로 ChromaDB 벡터 데이터베이스를 구축합니다. PDF 처리와 RAG 쿼리를 위한 무비용 스택."
    },
    purpose: {
      en: "Create searchable vector database from screened papers for literature synthesis queries.",
      ko: "문헌 종합 쿼리를 위해 스크리닝된 논문에서 검색 가능한 벡터 데이터베이스를 생성합니다."
    },
    triggers: {
      en: "build RAG, vector database, ChromaDB, PDF embeddings, literature synthesis",
      ko: "RAG 구축, 벡터 데이터베이스, ChromaDB, PDF 임베딩, 문헌 종합"
    },
    relatedAgents: ["I0", "I2", "B5"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "SCH_RAG_READINESS", level: "RECOMMENDED" }
  }
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find(a => a.id === id);
}

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find(a => a.slug === slug);
}

export function getAgentsByCategory(categoryId: string): Agent[] {
  return agents.filter(a => a.category === categoryId);
}

export function getAgentsByParadigm(paradigm: string): Agent[] {
  return agents.filter(a => a.paradigms.includes(paradigm as any));
}

export function getAgentsByTier(tier: string): Agent[] {
  return agents.filter(a => a.tier === tier);
}
