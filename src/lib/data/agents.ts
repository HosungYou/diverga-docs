import { Agent } from './types';

export const agents: Agent[] = [
  // Category A: Foundation (3 agents)
  {
    id: "A1",
    slug: "research-question-refiner",
    name: { en: "Research Question Refiner", ko: "연구 질문 정제자" },
    category: "A",
    icon: "🎯",
    tier: "HIGH",
    model: "opus",
    vsLevel: "ENHANCED",
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
    slug: "theory-critique-architect",
    name: { en: "Theory & Critique Architect", ko: "이론 및 비판 설계자" },
    category: "A",
    icon: "🏛️",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs theoretical frameworks with VS methodology. Includes self-critique mode (absorbed from A3) and conceptual framework visualization (absorbed from A6).",
      ko: "VS 방법론을 사용하여 이론적 프레임워크를 설계하고, 내장된 자기 비판 모드(리뷰어 2 시뮬레이션)와 개념적 프레임워크 시각화 기능을 제공합니다."
    },
    purpose: {
      en: "Guide selection of theoretical frameworks with T-Score awareness, presenting alternatives across the typicality spectrum.",
      ko: "T-Score 인식과 함께 이론적 프레임워크 선택을 안내하고, 전형성 스펙트럼에 걸친 대안을 제시합니다."
    },
    triggers: {
      en: "theoretical framework, theory, conceptual model, framework selection, devil's advocate, critique, counterargument, conceptual framework, diagram, visualize",
      ko: "이론적 프레임워크, 이론, 비판, 반론, 개념적 프레임워크, 다이어그램"
    },
    relatedAgents: ["A1", "A5"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "CP_THEORY_SELECTION", level: "REQUIRED" }
  },
  {
    id: "A5",
    slug: "paradigm-worldview-advisor",
    name: { en: "Paradigm & Worldview Advisor", ko: "패러다임 및 세계관 자문자" },
    category: "A",
    icon: "🌐",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
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

  // Category B: Literature & Evidence (2 agents)
  {
    id: "B1",
    slug: "literature-scout",
    name: { en: "Literature Scout", ko: "문헌 탐색자" },
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
      en: "Design search strategies and manage systematic review workflows.",
      ko: "포괄적인 검색 전략을 설계하고 체계적 검토 워크플로우를 관리합니다."
    },
    triggers: {
      en: "systematic review, literature search, PRISMA, database search, scoping review",
      ko: "체계적 문헌고찰, 문헌 검색, PRISMA, 데이터베이스 검색"
    },
    relatedAgents: ["B2", "C5"],
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
    relatedAgents: ["B1", "C5"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },

  // Category C: Study Design (4 agents)
  {
    id: "C1",
    slug: "quantitative-design-sampling",
    name: { en: "Quantitative Design & Sampling", ko: "양적 설계 및 표집" },
    category: "C",
    icon: "📈",
    tier: "HIGH",
    model: "opus",
    vsLevel: "ENHANCED",
    description: {
      en: "Designs RCTs, quasi-experimental, survey, and correlational studies with VS alternatives. Includes experimental materials development, treatment protocols, sampling strategy, and power analysis.",
      ko: "VS 대안과 함께 RCT, 준실험, 설문조사 및 상관관계 연구를 설계합니다. 실험 자료 개발, 처치 프로토콜, 표집 전략, 검정력 분석을 포함합니다."
    },
    purpose: {
      en: "Guide quantitative research design choices with creative alternatives.",
      ko: "창의적인 대안과 함께 양적 연구 설계 선택을 안내합니다."
    },
    triggers: {
      en: "quantitative design, RCT, experimental design, survey design, power analysis, sampling, sample size, intervention materials, treatment protocol",
      ko: "양적 연구 설계, RCT, 실험 설계, 설문 설계, 검정력 분석, 표집, 표본 크기, 중재 자료"
    },
    relatedAgents: ["D4", "E1"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },
  {
    id: "C2",
    slug: "qualitative-design",
    name: { en: "Qualitative Design", ko: "질적 연구 설계" },
    category: "C",
    icon: "🎭",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Designs phenomenology, grounded theory, case study, narrative inquiry, ethnographic, and action research studies.",
      ko: "현상학, 근거이론, 사례연구, 내러티브 탐구, 민족지학, 실행연구를 설계합니다."
    },
    purpose: {
      en: "Guide qualitative research design with methodological rigor and creativity.",
      ko: "방법론적 엄격성과 창의성으로 질적 연구 설계를 안내합니다."
    },
    triggers: {
      en: "qualitative design, phenomenology, grounded theory, case study, narrative, ethnography, fieldwork, action research, PAR, CBPR",
      ko: "질적 연구 설계, 현상학, 근거이론, 사례연구, 내러티브, 민족지학, 현장연구, 실행연구"
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
    id: "C5",
    slug: "meta-analysis-master",
    name: { en: "Meta-Analysis Master", ko: "메타분석 마스터" },
    category: "C",
    icon: "🎛️",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Orchestrates meta-analysis workflows with multi-gate validation, effect size extraction (Cohen's d, Hedges' g, r, OR), data integrity checks, error prevention, and sensitivity analysis.",
      ko: "다중 게이트 검증, 효과크기 추출(Cohen's d, Hedges' g, r, OR), 데이터 무결성 검사, 오류 방지, 민감도 분석을 통해 메타분석 워크플로우를 조율합니다."
    },
    purpose: {
      en: "Run meta-analysis projects with multi-gate validation.",
      ko: "엄격한 검증과 함께 포괄적인 메타분석 프로젝트를 이끕니다."
    },
    triggers: {
      en: "meta-analysis, pooled effect, heterogeneity, forest plot, effect size, Cohen's d, Hedges' g, data integrity, sensitivity analysis",
      ko: "메타분석, 통합 효과, 이질성, 효과크기, 데이터 무결성, 민감도 분석"
    },
    relatedAgents: ["B1", "B2"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_META_GATE", level: "REQUIRED" }
  },

  // Category D: Data Collection (2 agents)
  {
    id: "D2",
    slug: "data-collection-specialist",
    name: { en: "Data Collection Specialist", ko: "데이터 수집 전문가" },
    category: "D",
    icon: "🎤",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Designs interview protocols, focus group guides, observation protocols, field notes templates, and transcription strategies.",
      ko: "인터뷰 프로토콜, 포커스 그룹 가이드, 관찰 프로토콜, 현장 노트 템플릿, 전사 전략을 설계합니다."
    },
    purpose: {
      en: "Create rigorous qualitative data collection instruments.",
      ko: "엄격한 질적 데이터 수집 도구를 생성합니다."
    },
    triggers: {
      en: "interview, focus group, interview protocol, transcription, observation, field notes",
      ko: "인터뷰, 포커스 그룹, 관찰, 현장 노트, 전사"
    },
    relatedAgents: ["C2", "E2"],
    paradigms: ["qualitative", "mixed"]
  },
  {
    id: "D4",
    slug: "measurement-instrument-developer",
    name: { en: "Measurement Instrument Developer", ko: "측정 도구 개발자" },
    category: "D",
    icon: "📋",
    tier: "HIGH",
    model: "opus",
    vsLevel: "ENHANCED",
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
    relatedAgents: ["C1", "E1"],
    paradigms: ["quantitative"],
    checkpoint: { id: "CP_METHODOLOGY_APPROVAL", level: "REQUIRED" }
  },

  // Category E: Analysis (3 agents)
  {
    id: "E1",
    slug: "quantitative-analysis-codegen",
    name: { en: "Quantitative Analysis & Code Gen", ko: "양적 분석 및 코드 생성" },
    category: "E",
    icon: "📊",
    tier: "HIGH",
    model: "opus",
    vsLevel: "FULL",
    description: {
      en: "Guides statistical analysis selection, assumption testing, and interpretation. Generates R, Python, SPSS, Stata, and Mplus analysis code. Includes sensitivity and robustness checks.",
      ko: "통계 분석 선택, 가정 검정, 해석을 안내합니다. R, Python, SPSS, Stata, Mplus 분석 코드를 생성합니다. 민감도 분석 및 강건성 검토를 포함합니다."
    },
    purpose: {
      en: "Select and apply appropriate statistical methods with rigor.",
      ko: "엄격하게 적절한 통계 방법을 선택하고 적용합니다."
    },
    triggers: {
      en: "statistical analysis, ANOVA, regression, SEM, R code, Python code, SPSS syntax, sensitivity analysis",
      ko: "통계 분석, ANOVA, 회귀, SEM, R 코드, Python 코드, 민감도 분석"
    },
    relatedAgents: ["C1", "E3"],
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

  // Category F: Quality & Validation (1 agent)
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

  // Category G: Publication & Communication (4 agents)
  {
    id: "G1",
    slug: "journal-matcher",
    name: { en: "Journal Matcher", ko: "저널 매칭자" },
    category: "G",
    icon: "📰",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "LIGHT",
    description: {
      en: "Real-time journal matching pipeline using OpenAlex and Crossref. Three stages with two checkpoints (CP_JOURNAL_PRIORITIES, CP_JOURNAL_SELECTION) hand the final decision back to the researcher.",
      ko: "범위, 영향력 지수 및 원고 적합성에 따라 대상 저널을 추천합니다."
    },
    purpose: {
      en: "Match manuscripts with target journals using live metrics, not static lists.",
      ko: "출판을 위해 원고를 적절한 저널과 매칭합니다."
    },
    triggers: {
      en: "journal, submission, impact factor, academic journal, publication, submit",
      ko: "저널 매칭, 투고처, 대상 저널, 영향력 지수"
    },
    relatedAgents: ["G2"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "G2",
    slug: "publication-specialist",
    name: { en: "Publication Specialist", ko: "출판 전문가" },
    category: "G",
    icon: "✍️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Writes abstracts and plain language summaries. Handles peer review responses, preregistration (OSF, AsPredicted), reporting checklists (PRISMA, CONSORT, STROBE), and reproducibility audits. Generates Word documents with native equations via the latex2omml converter.",
      ko: "초록, 쉬운 언어 요약을 작성합니다. 동료 심사 전략, 응답 서신, 사전등록(OSF/AsPredicted), 보고 체크리스트(PRISMA/CONSORT/STROBE), 재현성 감사를 수행합니다."
    },
    purpose: {
      en: "Produce publication-ready outputs from manuscript drafts.",
      ko: "다양한 청중에게 연구 결과를 명확하게 전달합니다."
    },
    triggers: {
      en: "abstract, plain language, press release, summary, peer review, revision, pre-registration, OSF, PRISMA, CONSORT, reproducibility, word document, latex equation",
      ko: "학술 글쓰기, 원고, 초록, 동료 심사, 리뷰어 응답, 사전등록, 체크리스트, 재현성"
    },
    relatedAgents: ["G1", "G5"],
    paradigms: ["quantitative", "qualitative", "mixed"]
  },
  {
    id: "G5",
    slug: "academic-style-auditor",
    name: { en: "Academic Style Auditor", ko: "학술 스타일 감사자" },
    category: "G",
    icon: "🔎",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "LIGHT",
    description: {
      en: "Detects AI writing patterns across 28 categories. Includes a LaTeX syntax validation pass (X1-X6) for math-heavy manuscripts. Provides probability scoring and risk classification.",
      ko: "24개 카테고리에서 AI 글쓰기 패턴을 탐지하고 확률 점수화 및 위험 분류를 제공합니다."
    },
    purpose: {
      en: "Identify AI-generated text patterns before humanization.",
      ko: "휴먼화 전 AI 생성 텍스트 패턴을 식별합니다."
    },
    triggers: {
      en: "writing quality, style audit, pattern check, writing review, academic style check, latex validation",
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
    vsLevel: "ENHANCED",
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

  // Category I: Systematic Review (4 agents)
  {
    id: "I0",
    slug: "review-pipeline-orchestrator",
    name: { en: "SR Pipeline Orchestrator", ko: "SR 파이프라인 오케스트레이터" },
    category: "I",
    icon: "🎼",
    tier: "HIGH",
    model: "opus",
    vsLevel: "ENHANCED",
    description: {
      en: "Orchestrates the complete 7-stage PRISMA systematic review pipeline, coordinating I1→I2→I3 agents with MCP runtime checkpoints.",
      ko: "MCP 런타임 체크포인트와 함께 7단계 PRISMA 체계적 문헌고찰 파이프라인 전체를 조율하고 I1→I2→I3 에이전트를 조정합니다."
    },
    purpose: {
      en: "Serve as the single entry point for systematic literature reviews, managing all SCH_* checkpoints and agent coordination.",
      ko: "체계적 문헌고찰의 단일 진입점으로서 모든 SCH_* 체크포인트와 에이전트 조정을 관리합니다."
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
    vsLevel: "LIGHT",
    description: {
      en: "Retrieves papers from Semantic Scholar, OpenAlex, and arXiv APIs with automatic deduplication by DOI/title. Validates API keys before retrieval.",
      ko: "Semantic Scholar, OpenAlex, arXiv API에서 논문을 수집하고 DOI/제목으로 자동 중복 제거합니다. 검색 전 API 키를 검증합니다."
    },
    purpose: {
      en: "Execute multi-database paper retrieval with 40-50% open access PDF URL availability and API key validation.",
      ko: "API 키 검증과 함께 40-50% 오픈 액세스 PDF URL 가용성으로 다중 데이터베이스 논문 검색을 실행합니다."
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
    vsLevel: "LIGHT",
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
      en: "Builds ChromaDB vector database with local embeddings (all-MiniLM-L6-v2). Includes parallel document processing for high-throughput PDF handling. Zero-cost stack.",
      ko: "로컬 임베딩(all-MiniLM-L6-v2)으로 ChromaDB 벡터 데이터베이스를 구축합니다. 대용량 PDF 처리를 위한 병렬 문서 처리를 포함합니다. 무비용 스택."
    },
    purpose: {
      en: "Create searchable vector database from screened papers for literature synthesis queries.",
      ko: "문헌 종합 쿼리를 위해 스크리닝된 논문에서 검색 가능한 벡터 데이터베이스를 생성합니다."
    },
    triggers: {
      en: "build RAG, vector database, ChromaDB, PDF embeddings, literature synthesis, batch PDF, parallel processing",
      ko: "RAG 구축, 벡터 데이터베이스, PDF 임베딩, 문헌 종합, 병렬 처리"
    },
    relatedAgents: ["I0", "I2"],
    paradigms: ["quantitative", "qualitative", "mixed"],
    checkpoint: { id: "SCH_RAG_READINESS", level: "RECOMMENDED" }
  },

  // Category X: Cross-Cutting (1 agent)
  {
    id: "X1",
    slug: "research-guardian",
    name: { en: "Research Guardian", ko: "연구 수호자" },
    category: "X",
    icon: "🛡️",
    tier: "MEDIUM",
    model: "sonnet",
    vsLevel: "ENHANCED",
    description: {
      en: "Ensures research integrity through ethical review (IRB, consent, privacy) and bias detection (p-hacking, HARKing, QRPs). Provides trustworthiness assessment.",
      ko: "윤리적 검토(IRB, 동의, 개인정보)와 편향 탐지(p-해킹, HARKing, QRP)를 통해 연구 무결성을 보장합니다. 신뢰성 평가를 제공합니다."
    },
    purpose: {
      en: "Guard research integrity across ethical standards and methodological rigor.",
      ko: "윤리적 기준과 방법론적 엄격성 전반에서 연구 무결성을 수호합니다."
    },
    triggers: {
      en: "ethics, IRB, informed consent, bias detection, p-hacking, HARKing, trustworthiness, research integrity",
      ko: "윤리, IRB, 동의서, 편향 탐지, p-해킹, 연구 무결성"
    },
    relatedAgents: ["C1", "C2", "B2"],
    paradigms: ["quantitative", "qualitative", "mixed"]
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
