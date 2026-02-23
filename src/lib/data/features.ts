import { LocalizedString } from './types';

export interface FeatureItem {
  id: string;
  slug: string;
  name: LocalizedString;
  shortName: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  icon: string;
  color: string;
  bgColor: string;
  accentColor: string;
  isNew?: boolean;
  badge?: LocalizedString;
  keywords: string[];
}

export interface MemoryType {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  scope: LocalizedString;
  duration: LocalizedString;
  color: string;
  icon: string;
  examples: LocalizedString[];
}

export interface CheckpointType {
  level: 'REQUIRED' | 'RECOMMENDED' | 'OPTIONAL';
  color: string;
  icon: string;
  name: LocalizedString;
  description: LocalizedString;
  examples: LocalizedString[];
}

export interface TransformationMode {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  riskLevel: LocalizedString;
  patternsIncluded: string[];
  useCase: LocalizedString;
}

export interface PatternCategory {
  id: string;
  name: LocalizedString;
  count: number;
  patterns: string[];
}

// Main features data
export const features: FeatureItem[] = [
  {
    id: 'memory-system',
    slug: 'memory-system',
    name: {
      en: 'Memory System',
      ko: '메모리 시스템',
    },
    shortName: {
      en: 'Memory',
      ko: '메모리',
    },
    description: {
      en: 'Research context that persists across sessions',
      ko: '세션을 넘어 지속되는 연구 맥락',
    },
    longDescription: {
      en: 'Never re-explain your research context again. Diverga remembers your project decisions, theoretical frameworks, and methodology choices across sessions.',
      ko: '다시는 연구 맥락을 재설명할 필요가 없습니다. Diverga는 세션을 넘어 프로젝트 결정, 이론적 프레임워크, 방법론 선택을 기억합니다.',
    },
    icon: '🧠',
    color: '#9b59b6',
    bgColor: 'rgba(155, 89, 182, 0.1)',
    accentColor: '#a855f7',
    isNew: false,
    badge: {
      en: 'Since v6.8',
      ko: 'v6.8부터',
    },
    keywords: ['memory', 'context', 'persistence', 'session', 'recall'],
  },
  {
    id: 'vs-methodology',
    slug: 'vs-methodology',
    name: {
      en: 'VS Methodology',
      ko: 'VS 방법론',
    },
    shortName: {
      en: 'VS Method',
      ko: 'VS 방법론',
    },
    description: {
      en: 'Break free from AI mode collapse with creative alternatives',
      ko: 'AI 모드 붕괴를 벗어나 창의적 대안을 제시',
    },
    longDescription: {
      en: 'VS (Variable Sampling) methodology forces AI to present diverse options across the typicality spectrum, from modal (T=1.0) to divergent (T=0.0) choices.',
      ko: 'VS (Variable Sampling) 방법론은 AI가 모달(T=1.0)부터 발산적(T=0.0) 선택까지 전형성 스펙트럼에 걸친 다양한 옵션을 제시하도록 강제합니다.',
    },
    icon: '🎯',
    color: '#22ccff',
    bgColor: 'rgba(34, 204, 255, 0.1)',
    accentColor: '#06b6d4',
    keywords: ['vs', 'methodology', 'tscore', 'typicality', 'divergent', 'creative'],
  },
  {
    id: 'checkpoints',
    slug: 'checkpoints',
    name: {
      en: 'Human Checkpoint System',
      ko: '휴먼 체크포인트 시스템',
    },
    shortName: {
      en: 'Checkpoints',
      ko: '체크포인트',
    },
    description: {
      en: 'Critical decisions stay in human hands',
      ko: '중요한 결정은 인간의 손에',
    },
    longDescription: {
      en: 'Unlike autonomous AI systems, Diverga stops at critical research junctures and asks for your explicit approval. You maintain control over paradigm selection, theoretical frameworks, and methodological choices.',
      ko: '자율 AI 시스템과 달리, Diverga는 중요한 연구 분기점에서 멈추고 명시적 승인을 요청합니다. 패러다임 선택, 이론적 프레임워크, 방법론적 선택에 대한 통제권을 유지합니다.',
    },
    icon: '🛑',
    color: '#ff3366',
    bgColor: 'rgba(255, 51, 102, 0.1)',
    accentColor: '#f43f5e',
    keywords: ['checkpoint', 'human', 'control', 'approval', 'decision'],
  },
  {
    id: 'systematic-review',
    slug: 'systematic-review',
    name: {
      en: 'Systematic Review Automation',
      ko: '체계적 문헌고찰 자동화',
    },
    shortName: {
      en: 'PRISMA',
      ko: 'PRISMA',
    },
    description: {
      en: 'PRISMA 2020 compliant literature review pipeline',
      ko: 'PRISMA 2020 준수 문헌고찰 파이프라인',
    },
    longDescription: {
      en: 'The I-category pipeline provides automated paper retrieval from Semantic Scholar, OpenAlex, and arXiv. AI-assisted screening, deduplication, and RAG-powered synthesis following PRISMA 2020 guidelines.',
      ko: 'I-카테고리 파이프라인으로 Semantic Scholar, OpenAlex, arXiv에서 자동 논문 검색을 제공합니다. PRISMA 2020 가이드라인을 따르는 AI 지원 스크리닝, 중복 제거, RAG 기반 종합을 수행합니다.',
    },
    icon: '📚',
    color: '#44ffaa',
    bgColor: 'rgba(68, 255, 170, 0.1)',
    accentColor: '#10b981',
    keywords: ['systematic', 'review', 'prisma', 'literature', 'scholarag'],
  },
  {
    id: 'humanization',
    slug: 'humanization',
    name: {
      en: 'Humanization Pipeline',
      ko: '휴먼화 파이프라인',
    },
    shortName: {
      en: 'Humanize',
      ko: '휴먼화',
    },
    description: {
      en: 'Transform AI text into natural academic writing',
      ko: 'AI 텍스트를 자연스러운 학술 문체로 변환',
    },
    longDescription: {
      en: 'Detect and transform 28 categories of AI writing patterns while preserving 100% of citations, statistics, and academic rigor. Four transformation layers: Conservative, Balanced, Aggressive, and Custom.',
      ko: '인용, 통계, 학술적 엄밀성을 100% 보존하면서 28개 카테고리의 AI 작성 패턴을 감지하고 변환합니다. 4개 변환 레이어: 보수적, 균형적, 적극적, 맞춤형.',
    },
    icon: '✍️',
    color: '#ff8844',
    bgColor: 'rgba(255, 136, 68, 0.1)',
    accentColor: '#f97316',
    keywords: ['humanization', 'writing', 'academic', 'transform', 'natural'],
  },
  {
    id: 'mcp-checkpoints',
    slug: 'mcp-checkpoints',
    name: {
      en: 'MCP Runtime Checkpoints',
      ko: 'MCP 런타임 체크포인트',
    },
    shortName: {
      en: 'MCP Checkpoints',
      ko: 'MCP 체크포인트',
    },
    description: {
      en: 'Real-time checkpoint validation via MCP server protocol',
      ko: 'MCP 서버 프로토콜을 통한 실시간 체크포인트 검증',
    },
    longDescription: {
      en: 'Checkpoints are now enforced at the MCP runtime level, providing consistent validation across all supported platforms. The SCH_* checkpoint system ensures PRISMA compliance at every pipeline stage.',
      ko: '체크포인트가 MCP 런타임 수준에서 적용되어 모든 지원 플랫폼에서 일관된 검증을 제공합니다. SCH_* 체크포인트 시스템이 모든 파이프라인 단계에서 PRISMA 준수를 보장합니다.',
    },
    icon: '🔌',
    color: '#3b82f6',
    bgColor: 'rgba(59, 130, 246, 0.1)',
    accentColor: '#2563eb',
    isNew: true,
    badge: {
      en: 'NEW in v8.2',
      ko: 'v8.2 신규',
    },
    keywords: ['mcp', 'checkpoint', 'runtime', 'validation', 'protocol'],
  },
  {
    id: 'cross-platform',
    slug: 'cross-platform',
    name: {
      en: 'Cross-Platform Support',
      ko: '크로스 플랫폼 지원',
    },
    shortName: {
      en: 'Cross-Platform',
      ko: '크로스 플랫폼',
    },
    description: {
      en: 'Works with Claude Code, Codex CLI, and OpenCode',
      ko: 'Claude Code, Codex CLI, OpenCode에서 동작',
    },
    longDescription: {
      en: 'Diverga is no longer limited to a single platform. Install on Claude Code, Codex CLI, or OpenCode and get the same 44-agent research experience with automatic model tier mapping for each platform.',
      ko: 'Diverga는 더 이상 단일 플랫폼에 한정되지 않습니다. Claude Code, Codex CLI, OpenCode에 설치하면 각 플랫폼에 맞는 자동 모델 티어 매핑으로 동일한 44개 에이전트 연구 경험을 제공합니다.',
    },
    icon: '🌐',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.1)',
    accentColor: '#7c3aed',
    isNew: true,
    badge: {
      en: 'NEW in v8.3',
      ko: 'v8.3 신규',
    },
    keywords: ['cross-platform', 'claude-code', 'codex', 'opencode', 'multi-platform'],
  },
  {
    id: 'dual-directory',
    slug: 'dual-directory',
    name: {
      en: 'Dual Directory Structure',
      ko: '이중 디렉토리 구조',
    },
    shortName: {
      en: 'Dual Dir',
      ko: '이중 디렉토리',
    },
    description: {
      en: 'Separate .research/ and research/ directories for config vs output',
      ko: '설정과 출력을 위한 .research/ 및 research/ 디렉토리 분리',
    },
    longDescription: {
      en: 'The new dual directory structure separates configuration (.research/) from research outputs (research/). This keeps your git-tracked configs clean while research data lives alongside your project.',
      ko: '새로운 이중 디렉토리 구조는 설정(.research/)과 연구 출력(research/)을 분리합니다. git 추적 설정을 깔끔하게 유지하면서 연구 데이터는 프로젝트와 함께 저장됩니다.',
    },
    icon: '📂',
    color: '#059669',
    bgColor: 'rgba(5, 150, 105, 0.1)',
    accentColor: '#047857',
    isNew: true,
    badge: {
      en: 'NEW in v8.4',
      ko: 'v8.4 신규',
    },
    keywords: ['directory', 'structure', 'dual', 'config', 'output', 'organization'],
  },
  {
    id: 'agent-teams',
    slug: 'agent-teams',
    name: {
      en: 'Agent Teams',
      ko: '에이전트 팀',
    },
    shortName: {
      en: 'Teams',
      ko: '팀',
    },
    description: {
      en: 'Parallel multi-agent coordination for complex research tasks',
      ko: '복잡한 연구 작업을 위한 병렬 다중 에이전트 조율',
    },
    longDescription: {
      en: 'Agent Teams enables parallel coordination of multiple specialized agents working on different aspects of a research task simultaneously, dramatically reducing time for complex workflows.',
      ko: '에이전트 팀은 여러 전문 에이전트가 연구 작업의 다양한 측면을 동시에 작업하도록 병렬 조율을 가능하게 하여 복잡한 워크플로우의 소요 시간을 대폭 줄입니다.',
    },
    icon: '👥',
    color: '#d946ef',
    bgColor: 'rgba(217, 70, 239, 0.1)',
    accentColor: '#c026d3',
    isNew: true,
    badge: {
      en: 'NEW in v8.5',
      ko: 'v8.5 신규',
    },
    keywords: ['agent-teams', 'parallel', 'coordination', 'multi-agent', 'collaboration'],
  },
  {
    id: 'mcp-architecture',
    slug: 'mcp-architecture',
    name: {
      en: 'MCP Server Architecture',
      ko: 'MCP 서버 아키텍처',
    },
    shortName: {
      en: 'MCP Architecture',
      ko: 'MCP 아키텍처',
    },
    description: {
      en: 'Modular 3-server split with 16 tools, SQLite WAL backend for ACID-safe parallel execution',
      ko: '16개 도구를 갖춘 모듈형 3-서버 분할, ACID 안전 병렬 실행을 위한 SQLite WAL 백엔드',
    },
    longDescription: {
      en: 'Diverga v9.0 introduces a modular 3-server MCP architecture (checkpoint, memory, comm) with 16 specialized tools. SQLite WAL backend ensures ACID-safe parallel agent coordination with automatic migration from YAML.',
      ko: 'Diverga v9.0은 16개의 전문 도구를 갖춘 모듈형 3-서버 MCP 아키텍처(체크포인트, 메모리, 통신)를 도입합니다. SQLite WAL 백엔드는 YAML에서 자동 마이그레이션과 함께 ACID 안전 병렬 에이전트 조율을 보장합니다.',
    },
    icon: '🏗️',
    color: '#06b6d4',
    bgColor: 'rgba(6, 182, 212, 0.1)',
    accentColor: '#0891b2',
    isNew: true,
    badge: {
      en: 'NEW in v9.0',
      ko: 'v9.0 신규',
    },
    keywords: ['mcp', 'architecture', 'server', 'sqlite', 'modular', 'backend', 'parallel'],
  },
  {
    id: 'journal-intelligence',
    slug: 'journal-intelligence',
    name: {
      en: 'Journal Intelligence',
      ko: '저널 인텔리전스',
    },
    shortName: {
      en: 'Journal Intel',
      ko: '저널 인텔',
    },
    description: {
      en: 'Real-time journal matching powered by OpenAlex API',
      ko: 'OpenAlex API 기반 실시간 저널 매칭',
    },
    longDescription: {
      en: 'G1 Journal Matcher now connects to OpenAlex and Crossref APIs for live metrics including h-index, citation counts, publication trends, and OA status. Interactive checkpoints let you set priorities and select target journals with real data.',
      ko: 'G1 저널 매칭이 OpenAlex와 Crossref API에 연결되어 h-index, 인용 수, 출판 트렌드, OA 현황 등 실시간 메트릭을 제공합니다. 인터랙티브 체크포인트로 우선순위를 설정하고 실제 데이터로 대상 저널을 선택할 수 있습니다.',
    },
    icon: '📊',
    color: '#f59e0b',
    bgColor: 'rgba(245, 158, 11, 0.1)',
    accentColor: '#d97706',
    isNew: true,
    badge: {
      en: 'NEW in v10.3',
      ko: 'v10.3 신규',
    },
    keywords: ['journal', 'openalex', 'metrics', 'submission', 'impact-factor', 'matching'],
  },
];

// Memory System types data
export const memoryTypes: MemoryType[] = [
  {
    id: 'project',
    name: {
      en: 'Project Context',
      ko: '프로젝트 맥락',
    },
    description: {
      en: 'Persistent storage for project-level information',
      ko: '프로젝트 수준 정보를 위한 영구 저장소',
    },
    scope: {
      en: 'Project-wide',
      ko: '프로젝트 전체',
    },
    duration: {
      en: 'Permanent',
      ko: '영구',
    },
    color: '#FF6B6B',
    icon: '📁',
    examples: [
      { en: 'Research question and hypothesis', ko: '연구 질문과 가설' },
      { en: 'Theoretical framework selection', ko: '이론적 프레임워크 선택' },
      { en: 'Methodological approach', ko: '방법론적 접근' },
    ],
  },
  {
    id: 'session',
    name: {
      en: 'Session Memory',
      ko: '세션 메모리',
    },
    description: {
      en: 'Temporary storage for current session context',
      ko: '현재 세션 맥락을 위한 임시 저장소',
    },
    scope: {
      en: 'Current session',
      ko: '현재 세션',
    },
    duration: {
      en: '7 days',
      ko: '7일',
    },
    color: '#FFB347',
    icon: '⏱️',
    examples: [
      { en: 'Current task progress', ko: '현재 작업 진행 상황' },
      { en: 'Active conversation context', ko: '활성 대화 맥락' },
      { en: 'Temporary decisions', ko: '임시 결정사항' },
    ],
  },
  {
    id: 'decision',
    name: {
      en: 'Decision Log',
      ko: '결정 로그',
    },
    description: {
      en: 'Record of all critical decisions with rationale',
      ko: '근거와 함께 모든 중요 결정의 기록',
    },
    scope: {
      en: 'All checkpoints',
      ko: '모든 체크포인트',
    },
    duration: {
      en: 'Permanent',
      ko: '영구',
    },
    color: '#FFE66D',
    icon: '📋',
    examples: [
      { en: 'Framework selection with T-Score', ko: 'T-Score와 함께한 프레임워크 선택' },
      { en: 'Methodology approval', ko: '방법론 승인' },
      { en: 'Variable operationalization', ko: '변수 조작화' },
    ],
  },
  {
    id: 'research',
    name: {
      en: 'Research Notes',
      ko: '연구 노트',
    },
    description: {
      en: 'Findings, insights, and literature connections',
      ko: '발견, 통찰, 문헌 연결',
    },
    scope: {
      en: 'Knowledge base',
      ko: '지식 베이스',
    },
    duration: {
      en: 'Permanent',
      ko: '영구',
    },
    color: '#4ECDC4',
    icon: '📝',
    examples: [
      { en: 'Key findings from literature', ko: '문헌에서의 핵심 발견' },
      { en: 'Research gaps identified', ko: '식별된 연구 갭' },
      { en: 'Methodological insights', ko: '방법론적 통찰' },
    ],
  },
  {
    id: 'tool',
    name: {
      en: 'Tool Preferences',
      ko: '도구 선호도',
    },
    description: {
      en: 'User preferences for tools and outputs',
      ko: '도구와 출력에 대한 사용자 선호도',
    },
    scope: {
      en: 'User-wide',
      ko: '사용자 전체',
    },
    duration: {
      en: 'Permanent',
      ko: '영구',
    },
    color: '#95E1D3',
    icon: '⚙️',
    examples: [
      { en: 'Preferred statistical software', ko: '선호하는 통계 소프트웨어' },
      { en: 'Output format preferences', ko: '출력 형식 선호도' },
      { en: 'Language and locale settings', ko: '언어 및 로케일 설정' },
    ],
  },
];

// Checkpoint types data
export const checkpointTypes: CheckpointType[] = [
  {
    level: 'REQUIRED',
    color: '#ff3366',
    icon: '🔴',
    name: {
      en: 'Required Checkpoint',
      ko: '필수 체크포인트',
    },
    description: {
      en: 'System STOPS and waits for explicit approval. Cannot proceed without human decision.',
      ko: '시스템이 멈추고 명시적 승인을 기다립니다. 인간의 결정 없이는 진행할 수 없습니다.',
    },
    examples: [
      { en: 'Research paradigm selection', ko: '연구 패러다임 선택' },
      { en: 'Theoretical framework choice', ko: '이론적 프레임워크 선택' },
      { en: 'Major methodology decisions', ko: '주요 방법론 결정' },
    ],
  },
  {
    level: 'RECOMMENDED',
    color: '#ff8844',
    icon: '🟠',
    name: {
      en: 'Recommended Checkpoint',
      ko: '권장 체크포인트',
    },
    description: {
      en: 'System PAUSES and strongly suggests review. Can proceed with explicit skip command.',
      ko: '시스템이 일시 정지하고 검토를 강력히 권장합니다. 명시적 건너뛰기 명령으로 진행 가능합니다.',
    },
    examples: [
      { en: 'Analysis plan verification', ko: '분석 계획 검증' },
      { en: 'Quality assessment review', ko: '품질 평가 검토' },
      { en: 'Intermediate results check', ko: '중간 결과 확인' },
    ],
  },
  {
    level: 'OPTIONAL',
    color: '#ffcc22',
    icon: '🟡',
    name: {
      en: 'Optional Checkpoint',
      ko: '선택적 체크포인트',
    },
    description: {
      en: 'System ASKS but can be auto-skipped. For preferences and minor decisions.',
      ko: '시스템이 묻지만 자동 건너뛰기 가능합니다. 선호도와 사소한 결정을 위한 것입니다.',
    },
    examples: [
      { en: 'Visualization preferences', ko: '시각화 선호도' },
      { en: 'Output format selection', ko: '출력 형식 선택' },
      { en: 'Minor workflow adjustments', ko: '사소한 워크플로우 조정' },
    ],
  },
];

// Humanization transformation modes
export const transformationModes: TransformationMode[] = [
  {
    id: 'conservative',
    name: {
      en: 'Conservative',
      ko: '보수적',
    },
    description: {
      en: 'Minimal changes, journal-submission ready',
      ko: '최소한의 변경, 저널 투고 준비 완료',
    },
    riskLevel: {
      en: 'High-risk patterns only',
      ko: '고위험 패턴만',
    },
    patternsIncluded: ['excessive_hedging', 'ai_filler_phrases', 'list_dependency'],
    useCase: {
      en: 'Peer-reviewed journal submissions where detection risk is high',
      ko: '탐지 위험이 높은 동료 심사 저널 투고용',
    },
  },
  {
    id: 'balanced',
    name: {
      en: 'Balanced',
      ko: '균형적',
    },
    description: {
      en: 'Standard transformation for most use cases',
      ko: '대부분의 사용 사례를 위한 표준 변환',
    },
    riskLevel: {
      en: 'Medium + High-risk patterns',
      ko: '중+고위험 패턴',
    },
    patternsIncluded: ['all_conservative', 'formulaic_openings', 'passive_overuse', 'generic_transitions'],
    useCase: {
      en: 'General academic writing, research reports, dissertations',
      ko: '일반 학술 작성, 연구 보고서, 학위논문',
    },
  },
  {
    id: 'aggressive',
    name: {
      en: 'Aggressive',
      ko: '적극적',
    },
    description: {
      en: 'Maximum humanization with style transformation',
      ko: '스타일 변환과 함께 최대 휴먼화',
    },
    riskLevel: {
      en: 'All patterns',
      ko: '모든 패턴',
    },
    patternsIncluded: ['all_balanced', 'personal_voice', 'sentence_variety', 'natural_flow'],
    useCase: {
      en: 'Informal writing, blog posts, internal documents',
      ko: '비공식 작성, 블로그 포스트, 내부 문서',
    },
  },
];

// Humanization pattern categories
export const patternCategories: PatternCategory[] = [
  {
    id: 'content',
    name: { en: 'Content Patterns', ko: '내용 패턴' },
    count: 6,
    patterns: ['excessive_examples', 'unnecessary_definitions', 'over_explanation', 'list_dependency', 'redundant_summaries', 'filler_content'],
  },
  {
    id: 'language',
    name: { en: 'Language Patterns', ko: '언어 패턴' },
    count: 6,
    patterns: ['ai_filler_phrases', 'generic_transitions', 'formulaic_openings', 'repetitive_structures', 'unnatural_phrasing', 'vocab_limitations'],
  },
  {
    id: 'style',
    name: { en: 'Style Patterns', ko: '스타일 패턴' },
    count: 6,
    patterns: ['passive_overuse', 'sentence_monotony', 'paragraph_uniformity', 'tone_inconsistency', 'formality_mismatch', 'voice_absence'],
  },
  {
    id: 'communication',
    name: { en: 'Communication Patterns', ko: '커뮤니케이션 패턴' },
    count: 3,
    patterns: ['over_qualification', 'excessive_politeness', 'unnecessary_disclaimers'],
  },
  {
    id: 'hedging',
    name: { en: 'Hedging Patterns', ko: '헤징 패턴' },
    count: 3,
    patterns: ['excessive_hedging', 'certainty_markers', 'confidence_inconsistency'],
  },
  {
    id: 'academic',
    name: { en: 'Academic Patterns', ko: '학술 패턴' },
    count: 6,
    patterns: ['citation_integration', 'argument_flow', 'evidence_presentation', 'critical_analysis', 'synthesis_quality', 'contribution_clarity'],
  },
  {
    id: 'structural',
    name: {
      en: 'Structural Patterns (S7-S10)',
      ko: '구조 패턴 (S7-S10)',
    },
    count: 4,
    patterns: [
      'enumeration_as_prose',
      'repetitive_paragraph_openers',
      'formulaic_section_structure',
      'hypothesis_checklist',
    ],
  },
];

// PRISMA pipeline stages
export const prismaPipelineStages = [
  {
    id: 'I0',
    name: { en: 'Orchestrator', ko: '오케스트레이터' },
    agent: 'I0-ReviewPipelineOrchestrator',
    description: {
      en: 'Pipeline coordination and stage management with MCP runtime checkpoints',
      ko: 'MCP 런타임 체크포인트를 통한 파이프라인 조정 및 단계 관리',
    },
    hasCheckpoint: false,
  },
  {
    id: 'I1',
    name: { en: 'Paper Retrieval', ko: '논문 검색' },
    agent: 'I1-PaperRetrievalAgent',
    description: {
      en: 'Database fetching from Semantic Scholar, OpenAlex, arXiv with API key validation',
      ko: 'API 키 검증과 함께 Semantic Scholar, OpenAlex, arXiv에서 데이터베이스 검색',
    },
    hasCheckpoint: true,
    checkpointId: 'SCH_DATABASE_SELECTION',
  },
  {
    id: 'I2',
    name: { en: 'Screening', ko: '스크리닝' },
    agent: 'I2-ScreeningAssistant',
    description: {
      en: 'PRISMA 2020 screening with configurable LLM (Groq/Claude/Ollama)',
      ko: '설정 가능한 LLM(Groq/Claude/Ollama)을 사용한 PRISMA 2020 스크리닝',
    },
    hasCheckpoint: true,
    checkpointId: 'SCH_SCREENING_CRITERIA',
  },
  {
    id: 'I3',
    name: { en: 'RAG Builder', ko: 'RAG 빌더' },
    agent: 'I3-RAGBuilder',
    description: {
      en: 'ChromaDB vector database construction with local embeddings',
      ko: '로컬 임베딩을 사용한 ChromaDB 벡터 데이터베이스 구성',
    },
    hasCheckpoint: true,
    checkpointId: 'SCH_RAG_READINESS',
  },
];

// Database support info
export const supportedDatabases = [
  {
    id: 'semantic-scholar',
    name: 'Semantic Scholar',
    openAccessRate: '~40%',
    apiEndpoint: 'https://api.semanticscholar.org/graph/v1/paper/search',
    requiresKey: false,
    logo: '/images/databases/semantic-scholar.svg',
  },
  {
    id: 'openalex',
    name: 'OpenAlex',
    openAccessRate: '~50%',
    apiEndpoint: 'https://api.openalex.org/works',
    requiresKey: false,
    logo: '/images/databases/openalex.svg',
  },
  {
    id: 'arxiv',
    name: 'arXiv',
    openAccessRate: '100%',
    apiEndpoint: 'http://export.arxiv.org/api/query',
    requiresKey: false,
    logo: '/images/databases/arxiv.svg',
  },
];

// Memory CLI commands
export const memoryCommands = [
  {
    command: '/diverga:memory search',
    description: {
      en: 'Search memories by keyword or topic',
      ko: '키워드나 주제로 메모리 검색',
    },
    example: '/diverga:memory search "메타분석 방법론"',
  },
  {
    command: '/diverga:memory list',
    description: {
      en: 'List all stored memories for current project',
      ko: '현재 프로젝트의 모든 저장된 메모리 나열',
    },
    example: '/diverga:memory list --type=decision',
  },
  {
    command: '/diverga:memory add',
    description: {
      en: 'Manually add a memory entry',
      ko: '메모리 항목 수동 추가',
    },
    example: '/diverga:memory add --type=research "Key finding: ..."',
  },
  {
    command: '/diverga:memory recall',
    description: {
      en: 'Recall specific memory by ID',
      ko: 'ID로 특정 메모리 불러오기',
    },
    example: '/diverga:memory recall mem_abc123',
  },
  {
    command: '/diverga:memory clear',
    description: {
      en: 'Clear session memories (preserves permanent)',
      ko: '세션 메모리 지우기 (영구 메모리 보존)',
    },
    example: '/diverga:memory clear --type=session',
  },
  {
    command: '/diverga:memory export',
    description: {
      en: 'Export memories to JSON/Markdown',
      ko: '메모리를 JSON/Markdown으로 내보내기',
    },
    example: '/diverga:memory export --format=md',
  },
  {
    command: '/diverga:memory import',
    description: {
      en: 'Import memories from backup',
      ko: '백업에서 메모리 가져오기',
    },
    example: '/diverga:memory import backup.json',
  },
];

// Helper function to get feature by slug
export function getFeatureBySlug(slug: string): FeatureItem | undefined {
  return features.find((f) => f.slug === slug);
}

// Helper function to get localized feature text
export function getLocalizedFeature(feature: FeatureItem, locale: string) {
  return {
    name: feature.name[locale as keyof LocalizedString] || feature.name.en,
    shortName: feature.shortName[locale as keyof LocalizedString] || feature.shortName.en,
    description: feature.description[locale as keyof LocalizedString] || feature.description.en,
    longDescription: feature.longDescription[locale as keyof LocalizedString] || feature.longDescription.en,
    badge: feature.badge ? feature.badge[locale as keyof LocalizedString] || feature.badge.en : undefined,
  };
}
