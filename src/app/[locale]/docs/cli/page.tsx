'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Terminal,
  Zap,
  Brain,
  BookOpen,
  Sparkles,
  FileText,
  CheckCircle,
  ArrowRight,
  Code,
  Search,
  MessageSquare,
  Database,
  Eye,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Docs',
    title: 'CLI Reference',
    subtitle: 'Complete guide to Diverga CLI commands and skills',
    philosophy: '"Just say what you need. Diverga understands research context."',

    // Section 1: Overview
    overviewTitle: 'CLI Overview',
    overviewDescription: 'Diverga CLI provides two ways to interact: direct commands and auto-detected triggers.',
    overviewPoints: [
      { icon: 'terminal', label: 'Direct Commands', text: 'Invoke with /skill-name (e.g., /a1, /memory)' },
      { icon: 'zap', label: 'Auto-Detection', text: 'Keywords trigger agents automatically' },
      { icon: 'brain', label: 'Context-Aware', text: 'Agents understand research context from conversation' },
    ],

    // Section 2: Core Commands
    coreTitle: 'Core Commands',
    coreDescription: 'Essential commands for research orchestration and memory management',
    coreCommands: [
      {
        command: '/diverga',
        alias: '/diverga-help',
        description: 'Show main help and available agents',
        category: 'Help',
        color: '#44ffaa',
        example: '/diverga',
      },
      {
        command: '/diverga-research-orchestrator',
        alias: null,
        description: 'Full research orchestrator with 44 agents',
        category: 'Orchestration',
        color: '#9b59b6',
        example: '/diverga-research-orchestrator',
      },
      {
        command: '/memory',
        alias: null,
        description: 'Open Memory HUD (session state, checkpoints)',
        category: 'Memory',
        color: '#22ccff',
        example: '/memory',
      },
      {
        command: '/note',
        alias: null,
        description: 'Save to Working Memory (auto-pruned after 7 days)',
        category: 'Memory',
        color: '#22ccff',
        example: '/note "Research question needs refinement"',
      },
      {
        command: '/remember',
        alias: null,
        description: 'Save to Persistent Memory (never auto-pruned)',
        category: 'Memory',
        color: '#22ccff',
        example: '/remember "User prefers PRISMA 2020 over PRISMA-P"',
      },
      {
        command: '/checkpoint',
        alias: null,
        description: 'Manual checkpoint (save decision point)',
        category: 'Memory',
        color: '#22ccff',
        example: '/checkpoint',
      },
    ],

    // Section 3: Agent Commands
    agentTitle: 'Agent Invocation Commands',
    agentDescription: 'Direct agent calls for specific research tasks',
    agentCategories: [
      {
        category: 'A',
        name: 'Foundation',
        color: '#ff6b6b',
        agents: [
          { command: '/a1', name: 'Research Question Refiner', trigger: 'research question' },
          { command: '/a2', name: 'Theoretical Framework Architect', trigger: 'theoretical framework' },
          { command: '/a3', name: 'Devil\'s Advocate', trigger: 'criticism, weakness' },
          { command: '/a4', name: 'Research Ethics Advisor', trigger: 'ethics, IRB' },
          { command: '/a5', name: 'Paradigm & Worldview Advisor', trigger: 'paradigm, ontology' },
        ],
      },
      {
        category: 'B',
        name: 'Evidence',
        color: '#4ecdc4',
        agents: [
          { command: '/b1', name: 'Systematic Literature Scout', trigger: 'literature review' },
          { command: '/b2', name: 'Evidence Quality Appraiser', trigger: 'quality appraisal' },
          { command: '/b3', name: 'Effect Size Extractor', trigger: 'effect size, Cohen\'s d' },
          { command: '/b4', name: 'Research Radar', trigger: 'latest research' },
          { command: '/b5', name: 'Parallel Document Processor', trigger: 'batch PDF, multiple documents' },
        ],
      },
      {
        category: 'C',
        name: 'Design & Meta-Analysis',
        color: '#45b7d1',
        agents: [
          { command: '/c1', name: 'Quantitative Design Consultant', trigger: 'RCT, experimental design' },
          { command: '/c2', name: 'Qualitative Design Consultant', trigger: 'phenomenology, grounded theory' },
          { command: '/c3', name: 'Mixed Methods Design Consultant', trigger: 'mixed methods' },
          { command: '/c5', name: 'Meta-Analysis Master', trigger: 'meta-analysis' },
          { command: '/c6', name: 'Data Integrity Guard', trigger: 'data extraction, validation' },
          { command: '/c7', name: 'Error Prevention Engine', trigger: 'error prevention' },
        ],
      },
      {
        category: 'D',
        name: 'Data Collection',
        color: '#96ceb4',
        agents: [
          { command: '/d1', name: 'Sampling Strategy Advisor', trigger: 'sampling, sample size' },
        ],
      },
      {
        category: 'E',
        name: 'Analysis',
        color: '#dda0dd',
        agents: [
          { command: '/e2', name: 'Qualitative Coding Specialist', trigger: 'coding, themes' },
          { command: '/e3', name: 'Mixed Methods Integration', trigger: 'integration, joint display' },
          { command: '/e4', name: 'Analysis Code Generator', trigger: 'R code, Python code' },
          { command: '/e5', name: 'Sensitivity Analysis Designer', trigger: 'sensitivity analysis' },
        ],
      },
      {
        category: 'F',
        name: 'Quality',
        color: '#f0e68c',
        agents: [
          { command: '/f2', name: 'Checklist Manager', trigger: 'checklist, PRISMA, CONSORT' },
          { command: '/f3', name: 'Reproducibility Auditor', trigger: 'reproducibility, OSF' },
          { command: '/f4', name: 'Bias & Trustworthiness Detector', trigger: 'bias, p-hacking' },
          { command: '/f5', name: 'Humanization Verifier', trigger: 'verify humanization' },
        ],
      },
      {
        category: 'G',
        name: 'Communication',
        color: '#87ceeb',
        agents: [
          { command: '/g1', name: 'Journal Matcher', trigger: 'journal, submission' },
          { command: '/g5', name: 'Academic Style Auditor', trigger: 'AI patterns, audit' },
          { command: '/g6', name: 'Academic Style Humanizer', trigger: 'humanize, transform' },
        ],
      },
      {
        category: 'H',
        name: 'Specialized',
        color: '#ffa07a',
        agents: [
          { command: '/h2', name: 'Action Research Facilitator', trigger: 'action research' },
        ],
      },
      {
        category: 'I',
        name: 'Systematic Review',
        color: '#9b59b6',
        agents: [
          { command: '/i0', name: 'Pipeline Orchestrator', trigger: 'systematic review, PRISMA' },
          { command: '/i1', name: 'Paper Retrieval Agent', trigger: 'fetch papers, database search' },
          { command: '/i2', name: 'Screening Assistant', trigger: 'screening, inclusion criteria' },
          { command: '/i3', name: 'RAG Builder', trigger: 'build RAG, vector database' },
        ],
      },
    ],

    // Section 4: Humanization Pipeline
    humanizationTitle: 'Humanization Pipeline',
    humanizationDescription: 'Transform AI-generated academic text into natural scholarly prose',
    humanizationCommands: [
      {
        command: '/g5',
        name: 'Academic Style Auditor',
        description: 'Analyze AI patterns in text (modal verbs, hedging, transition density)',
        color: '#87ceeb',
        example: '/g5 "Analyze this draft for AI patterns"',
      },
      {
        command: '/g6',
        name: 'Academic Style Humanizer',
        description: 'Transform text while preserving scholarly integrity',
        color: '#87ceeb',
        example: '/g6 "Humanize this abstract"',
      },
      {
        command: '/humanize',
        name: 'Full Pipeline',
        description: 'G5 audit → G6 transformation → F5 verification',
        color: '#9b59b6',
        example: '/humanize "Full humanization pipeline"',
      },
    ],

    // Section 5: Systematic Review Commands
    scholarTitle: 'Systematic Review Commands',
    scholarDescription: 'PRISMA 2020 systematic literature review automation',
    scholarCommands: [
      {
        command: '/scholarag',
        name: 'Pipeline Help',
        description: 'Show pipeline stages and usage',
        color: '#9b59b6',
        example: '/scholarag',
      },
      {
        command: '/i0',
        name: 'Pipeline Orchestrator',
        description: 'Coordinate 7-stage PRISMA pipeline',
        color: '#9b59b6',
        example: '/i0 "Start systematic review on AI in education"',
      },
      {
        command: '/i1',
        name: 'Paper Retrieval',
        description: 'Fetch from Semantic Scholar, OpenAlex, arXiv',
        color: '#9b59b6',
        example: '/i1 "Retrieve papers on chatbots AND language learning"',
      },
      {
        command: '/i2',
        name: 'Screening Assistant',
        description: 'AI-powered PRISMA screening with Groq/Claude',
        color: '#9b59b6',
        example: '/i2 "Screen 500 papers with 90% threshold"',
      },
      {
        command: '/i3',
        name: 'RAG Builder',
        description: 'Build vector database from screened PDFs',
        color: '#9b59b6',
        example: '/i3 "Build RAG from 150 included papers"',
      },
    ],

    // Section 6: Auto-Triggers
    triggersTitle: 'Auto-Detection Triggers',
    triggersDescription: 'Keywords that automatically invoke agents',
    triggerGroups: [
      {
        name: 'Foundation',
        color: '#ff6b6b',
        triggers: [
          { keyword: 'research question', agent: 'A1-ResearchQuestionRefiner' },
          { keyword: 'theoretical framework', agent: 'A2-TheoreticalFrameworkArchitect' },
          { keyword: 'criticism, weakness', agent: 'A3-DevilsAdvocate' },
          { keyword: 'ethics, IRB', agent: 'A4-ResearchEthicsAdvisor' },
        ],
      },
      {
        name: 'Evidence & Analysis',
        color: '#4ecdc4',
        triggers: [
          { keyword: 'literature review', agent: 'B1-SystematicLiteratureScout' },
          { keyword: 'meta-analysis', agent: 'C5-MetaAnalysisMaster' },
          { keyword: 'effect size, Cohen\'s d', agent: 'B3-EffectSizeExtractor' },
          { keyword: 'bias, p-hacking', agent: 'F4-BiasTrustworthinessDetector' },
        ],
      },
      {
        name: 'Systematic Review',
        color: '#9b59b6',
        triggers: [
          { keyword: 'systematic review, PRISMA', agent: 'I0-ScholarAgentOrchestrator' },
          { keyword: 'fetch papers', agent: 'I1-PaperRetrievalAgent' },
          { keyword: 'screening, inclusion criteria', agent: 'I2-ScreeningAssistant' },
        ],
      },
      {
        name: 'Humanization',
        color: '#87ceeb',
        triggers: [
          { keyword: 'humanize, AI patterns', agent: 'G5/G6-HumanizationPipeline' },
          { keyword: 'transform, make natural', agent: 'G6-AcademicStyleHumanizer' },
        ],
      },
    ],

    // Section 7: Usage Examples
    examplesTitle: 'Usage Examples',
    examplesDescription: 'Common workflows and command patterns',
    examples: [
      {
        title: 'Start a Systematic Review',
        icon: 'search',
        color: '#9b59b6',
        steps: [
          { text: 'Say: "I want to do a systematic review on AI in education"' },
          { text: 'I0 auto-triggers → asks about research question, databases' },
          { text: 'Or: /i0 "Start systematic review pipeline"' },
        ],
      },
      {
        title: 'Refine Research Question',
        icon: 'brain',
        color: '#ff6b6b',
        steps: [
          { text: 'Say: "Help me refine my research question"' },
          { text: 'A1 auto-triggers → FINER criteria analysis' },
          { text: 'Or: /a1 "Refine: Does AI improve learning?"' },
        ],
      },
      {
        title: 'Humanize AI Text',
        icon: 'sparkles',
        color: '#87ceeb',
        steps: [
          { text: '/g5 "Audit this abstract for AI patterns"' },
          { text: 'Review audit results' },
          { text: '/g6 "Transform while preserving citations"' },
          { text: '/f5 "Verify transformation quality"' },
        ],
      },
      {
        title: 'Meta-Analysis Setup',
        icon: 'database',
        color: '#45b7d1',
        steps: [
          { text: 'Say: "I need to do a meta-analysis on effect sizes"' },
          { text: 'C5 auto-triggers → asks about effect size type, model' },
          { text: '/c6 "Validate extracted data"' },
          { text: '/c7 "Check for errors and anomalies"' },
        ],
      },
    ],

    // Section 8: Tips
    tipsTitle: 'Usage Tips',
    tips: [
      'You don\'t need to memorize commands - just describe your research task naturally',
      'Agents detect context: saying "literature review" triggers B1 automatically',
      'Use /memory to check session state and checkpoint history',
      'Parallel execution: independent agents run simultaneously (e.g., A1+A2+A5)',
      'Checkpoints enforce human decisions - agents pause for approval at key points',
      '/note for temporary notes, /remember for permanent project context',
    ],

    // Section 9: CTA
    ctaTitle: 'Ready to Use CLI?',
    ctaDescription: 'Explore agents, checkpoints, and VS methodology',
    ctaButtons: {
      agents: 'View All Agents',
      checkpoints: 'Checkpoint System',
      quickstart: 'Quick Start Guide',
    },
  },
  ko: {
    back: '문서로 돌아가기',
    title: 'CLI 레퍼런스',
    subtitle: 'Diverga CLI 명령어 및 스킬 완전 가이드',
    philosophy: '"필요한 것을 말하세요. Diverga가 연구 맥락을 이해합니다."',

    // Section 1: Overview
    overviewTitle: 'CLI 개요',
    overviewDescription: 'Diverga CLI는 두 가지 상호작용 방식을 제공합니다: 직접 명령어와 자동 감지 트리거.',
    overviewPoints: [
      { icon: 'terminal', label: '직접 명령어', text: '/skill-name으로 호출 (예: /a1, /memory)' },
      { icon: 'zap', label: '자동 감지', text: '키워드가 에이전트를 자동으로 트리거' },
      { icon: 'brain', label: '맥락 인식', text: '에이전트가 대화에서 연구 맥락 이해' },
    ],

    // Section 2: Core Commands
    coreTitle: '핵심 명령어',
    coreDescription: '연구 오케스트레이션 및 메모리 관리를 위한 필수 명령어',
    coreCommands: [
      {
        command: '/diverga',
        alias: '/diverga-help',
        description: '메인 도움말 및 사용 가능한 에이전트 표시',
        category: '도움말',
        color: '#44ffaa',
        example: '/diverga',
      },
      {
        command: '/diverga-research-orchestrator',
        alias: null,
        description: '44개 에이전트를 갖춘 전체 연구 오케스트레이터',
        category: '오케스트레이션',
        color: '#9b59b6',
        example: '/diverga-research-orchestrator',
      },
      {
        command: '/memory',
        alias: null,
        description: 'Memory HUD 열기 (세션 상태, 체크포인트)',
        category: '메모리',
        color: '#22ccff',
        example: '/memory',
      },
      {
        command: '/note',
        alias: null,
        description: 'Working Memory에 저장 (7일 후 자동 삭제)',
        category: '메모리',
        color: '#22ccff',
        example: '/note "연구 질문 정제 필요"',
      },
      {
        command: '/remember',
        alias: null,
        description: 'Persistent Memory에 저장 (영구 저장)',
        category: '메모리',
        color: '#22ccff',
        example: '/remember "사용자는 PRISMA-P보다 PRISMA 2020 선호"',
      },
      {
        command: '/checkpoint',
        alias: null,
        description: '수동 체크포인트 (결정 지점 저장)',
        category: '메모리',
        color: '#22ccff',
        example: '/checkpoint',
      },
    ],

    // Section 3: Agent Commands
    agentTitle: '에이전트 호출 명령어',
    agentDescription: '특정 연구 작업을 위한 직접 에이전트 호출',
    agentCategories: [
      {
        category: 'A',
        name: '기초',
        color: '#ff6b6b',
        agents: [
          { command: '/a1', name: '연구질문정제사', trigger: '연구 질문' },
          { command: '/a2', name: '이론적프레임워크설계자', trigger: '이론적 프레임워크' },
          { command: '/a3', name: '반대논변자', trigger: '비판, 약점' },
          { command: '/a4', name: '연구윤리조언자', trigger: '윤리, IRB' },
          { command: '/a5', name: '패러다임세계관조언자', trigger: '패러다임, 존재론' },
        ],
      },
      {
        category: 'B',
        name: '증거',
        color: '#4ecdc4',
        agents: [
          { command: '/b1', name: '체계적문헌정찰자', trigger: '문헌 고찰' },
          { command: '/b2', name: '증거품질평가자', trigger: '품질 평가' },
          { command: '/b3', name: '효과크기추출자', trigger: '효과 크기, Cohen\'s d' },
          { command: '/b4', name: '연구레이더', trigger: '최신 연구' },
          { command: '/b5', name: '병렬문서처리자', trigger: '배치 PDF, 다중 문서' },
        ],
      },
      {
        category: 'C',
        name: '설계 및 메타분석',
        color: '#45b7d1',
        agents: [
          { command: '/c1', name: '양적설계컨설턴트', trigger: 'RCT, 실험 설계' },
          { command: '/c2', name: '질적설계컨설턴트', trigger: '현상학, 근거이론' },
          { command: '/c3', name: '혼합방법설계컨설턴트', trigger: '혼합 방법' },
          { command: '/c5', name: '메타분석마스터', trigger: '메타분석' },
          { command: '/c6', name: '데이터무결성가드', trigger: '데이터 추출, 검증' },
          { command: '/c7', name: '오류예방엔진', trigger: '오류 예방' },
        ],
      },
      {
        category: 'D',
        name: '데이터 수집',
        color: '#96ceb4',
        agents: [
          { command: '/d1', name: '표집전략조언자', trigger: '표집, 표본 크기' },
        ],
      },
      {
        category: 'E',
        name: '분석',
        color: '#dda0dd',
        agents: [
          { command: '/e2', name: '질적코딩전문가', trigger: '코딩, 주제' },
          { command: '/e3', name: '혼합방법통합자', trigger: '통합, 공동 디스플레이' },
          { command: '/e4', name: '분석코드생성자', trigger: 'R 코드, Python 코드' },
          { command: '/e5', name: '민감도분석설계자', trigger: '민감도 분석' },
        ],
      },
      {
        category: 'F',
        name: '품질',
        color: '#f0e68c',
        agents: [
          { command: '/f2', name: '체크리스트관리자', trigger: '체크리스트, PRISMA, CONSORT' },
          { command: '/f3', name: '재현성감사자', trigger: '재현성, OSF' },
          { command: '/f4', name: '편향신뢰성탐지자', trigger: '편향, p-해킹' },
          { command: '/f5', name: '휴먼화검증자', trigger: '휴먼화 검증' },
        ],
      },
      {
        category: 'G',
        name: '커뮤니케이션',
        color: '#87ceeb',
        agents: [
          { command: '/g1', name: '저널매처', trigger: '저널, 투고' },
          { command: '/g5', name: '학술스타일감사자', trigger: 'AI 패턴, 감사' },
          { command: '/g6', name: '학술스타일휴먼화자', trigger: '휴먼화, 변환' },
        ],
      },
      {
        category: 'H',
        name: '특수',
        color: '#ffa07a',
        agents: [
          { command: '/h2', name: '실행연구촉진자', trigger: '실행 연구' },
        ],
      },
      {
        category: 'I',
        name: '체계적 문헌고찰',
        color: '#9b59b6',
        agents: [
          { command: '/i0', name: '파이프라인 오케스트레이터', trigger: '체계적 문헌고찰, PRISMA' },
          { command: '/i1', name: '논문수집에이전트', trigger: '논문 가져오기, 데이터베이스 검색' },
          { command: '/i2', name: '스크리닝어시스턴트', trigger: '스크리닝, 포함 기준' },
          { command: '/i3', name: 'RAG빌더', trigger: 'RAG 구축, 벡터 데이터베이스' },
        ],
      },
    ],

    // Section 4: Humanization Pipeline
    humanizationTitle: '휴먼화 파이프라인',
    humanizationDescription: 'AI 생성 학술 텍스트를 자연스러운 학술 산문으로 변환',
    humanizationCommands: [
      {
        command: '/g5',
        name: '학술스타일감사자',
        description: '텍스트의 AI 패턴 분석 (모달 동사, 헤징, 전환 밀도)',
        color: '#87ceeb',
        example: '/g5 "이 초안에서 AI 패턴 분석"',
      },
      {
        command: '/g6',
        name: '학술스타일휴먼화자',
        description: '학술적 무결성을 유지하면서 텍스트 변환',
        color: '#87ceeb',
        example: '/g6 "이 초록 휴먼화"',
      },
      {
        command: '/humanize',
        name: '전체 파이프라인',
        description: 'G5 감사 → G6 변환 → F5 검증',
        color: '#9b59b6',
        example: '/humanize "전체 휴먼화 파이프라인"',
      },
    ],

    // Section 5: Systematic Review Commands
    scholarTitle: '체계적 문헌고찰 명령어',
    scholarDescription: 'PRISMA 2020 체계적 문헌고찰 자동화',
    scholarCommands: [
      {
        command: '/scholarag',
        name: '파이프라인 도움말',
        description: '파이프라인 단계 및 사용법 표시',
        color: '#9b59b6',
        example: '/scholarag',
      },
      {
        command: '/i0',
        name: '파이프라인 오케스트레이터',
        description: '7단계 PRISMA 파이프라인 조정',
        color: '#9b59b6',
        example: '/i0 "교육에서 AI에 대한 체계적 문헌고찰 시작"',
      },
      {
        command: '/i1',
        name: '논문 수집',
        description: 'Semantic Scholar, OpenAlex, arXiv에서 가져오기',
        color: '#9b59b6',
        example: '/i1 "챗봇 AND 언어 학습에 대한 논문 검색"',
      },
      {
        command: '/i2',
        name: '스크리닝 어시스턴트',
        description: 'Groq/Claude를 사용한 AI 기반 PRISMA 스크리닝',
        color: '#9b59b6',
        example: '/i2 "90% 임계값으로 500개 논문 스크리닝"',
      },
      {
        command: '/i3',
        name: 'RAG 빌더',
        description: '스크리닝된 PDF에서 벡터 데이터베이스 구축',
        color: '#9b59b6',
        example: '/i3 "포함된 150개 논문에서 RAG 구축"',
      },
    ],

    // Section 6: Auto-Triggers
    triggersTitle: '자동 감지 트리거',
    triggersDescription: '에이전트를 자동으로 호출하는 키워드',
    triggerGroups: [
      {
        name: '기초',
        color: '#ff6b6b',
        triggers: [
          { keyword: '연구 질문', agent: 'A1-연구질문정제사' },
          { keyword: '이론적 프레임워크', agent: 'A2-이론적프레임워크설계자' },
          { keyword: '비판, 약점', agent: 'A3-반대논변자' },
          { keyword: '윤리, IRB', agent: 'A4-연구윤리조언자' },
        ],
      },
      {
        name: '증거 및 분석',
        color: '#4ecdc4',
        triggers: [
          { keyword: '문헌 고찰', agent: 'B1-체계적문헌정찰자' },
          { keyword: '메타분석', agent: 'C5-메타분석마스터' },
          { keyword: '효과 크기, Cohen\'s d', agent: 'B3-효과크기추출자' },
          { keyword: '편향, p-해킹', agent: 'F4-편향신뢰성탐지자' },
        ],
      },
      {
        name: '체계적 문헌고찰',
        color: '#9b59b6',
        triggers: [
          { keyword: '체계적 문헌고찰, PRISMA', agent: 'I0-스콜라에이전트오케스트레이터' },
          { keyword: '논문 가져오기', agent: 'I1-논문수집에이전트' },
          { keyword: '스크리닝, 포함 기준', agent: 'I2-스크리닝어시스턴트' },
        ],
      },
      {
        name: '휴먼화',
        color: '#87ceeb',
        triggers: [
          { keyword: '휴먼화, AI 패턴', agent: 'G5/G6-휴먼화파이프라인' },
          { keyword: '변환, 자연스럽게', agent: 'G6-학술스타일휴먼화자' },
        ],
      },
    ],

    // Section 7: Usage Examples
    examplesTitle: '사용 예시',
    examplesDescription: '일반적인 워크플로우 및 명령어 패턴',
    examples: [
      {
        title: '체계적 문헌고찰 시작',
        icon: 'search',
        color: '#9b59b6',
        steps: [
          { text: '말하기: "교육에서 AI에 대한 체계적 문헌고찰을 하고 싶어요"' },
          { text: 'I0 자동 트리거 → 연구 질문, 데이터베이스에 대해 질문' },
          { text: '또는: /i0 "체계적 문헌고찰 파이프라인 시작"' },
        ],
      },
      {
        title: '연구 질문 정제',
        icon: 'brain',
        color: '#ff6b6b',
        steps: [
          { text: '말하기: "연구 질문을 정제하는 데 도움을 주세요"' },
          { text: 'A1 자동 트리거 → FINER 기준 분석' },
          { text: '또는: /a1 "정제: AI가 학습을 개선하나요?"' },
        ],
      },
      {
        title: 'AI 텍스트 휴먼화',
        icon: 'sparkles',
        color: '#87ceeb',
        steps: [
          { text: '/g5 "이 초록에서 AI 패턴 감사"' },
          { text: '감사 결과 검토' },
          { text: '/g6 "인용을 유지하면서 변환"' },
          { text: '/f5 "변환 품질 검증"' },
        ],
      },
      {
        title: '메타분석 설정',
        icon: 'database',
        color: '#45b7d1',
        steps: [
          { text: '말하기: "효과 크기에 대한 메타분석을 해야 해요"' },
          { text: 'C5 자동 트리거 → 효과 크기 유형, 모델에 대해 질문' },
          { text: '/c6 "추출된 데이터 검증"' },
          { text: '/c7 "오류 및 이상치 확인"' },
        ],
      },
    ],

    // Section 8: Tips
    tipsTitle: '사용 팁',
    tips: [
      '명령어를 외울 필요 없음 - 연구 작업을 자연스럽게 설명하세요',
      '에이전트가 맥락 감지: "문헌 고찰"이라고 말하면 B1이 자동으로 트리거됩니다',
      '/memory를 사용하여 세션 상태 및 체크포인트 기록 확인',
      '병렬 실행: 독립적인 에이전트는 동시에 실행 (예: A1+A2+A5)',
      '체크포인트가 인간 결정 강제 - 에이전트가 주요 지점에서 승인을 기다립니다',
      '임시 메모는 /note, 영구 프로젝트 컨텍스트는 /remember',
    ],

    // Section 9: CTA
    ctaTitle: 'CLI를 사용할 준비가 되셨나요?',
    ctaDescription: '에이전트, 체크포인트, VS 방법론 탐색',
    ctaButtons: {
      agents: '모든 에이전트 보기',
      checkpoints: '체크포인트 시스템',
      quickstart: '빠른 시작 가이드',
    },
  },
};

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  terminal: <Terminal className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  brain: <Brain className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function CLIReferencePage() {
  const locale = useLocale() as 'en' | 'ko';
  const t = content[locale];

  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          href={`/${locale}/docs`}
          className="void-nav-link inline-flex items-center gap-2 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.back}
        </Link>

        {/* Section 1: Hero */}
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

          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div
                className="flex h-16 w-16 items-center justify-center border border-stellar-faint/20"
                style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)', color: '#44ffaa' }}
              >
                <Terminal className="h-8 w-8" />
              </div>
            </div>

            <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
            <p className="void-heading-3 mb-4" style={{ color: '#44ffaa' }}>{t.subtitle}</p>
            <p className="text-body-lg text-stellar-dim italic max-w-2xl mx-auto">{t.philosophy}</p>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 1: Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.overviewTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.overviewDescription}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.overviewPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20 mb-4"
                  style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)', color: '#44ffaa' }}
                >
                  {iconMap[point.icon]}
                </div>
                <h3 className="font-mono font-bold text-stellar-core mb-2">{point.label}</h3>
                <p className="text-sm text-stellar-dim">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 2: Core Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.coreTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.coreDescription}</p>

          <div className="space-y-3">
            {t.coreCommands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-5 bg-void-elevated border border-stellar-faint/10"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <code
                        className="font-mono font-bold text-lg px-3 py-1 border"
                        style={{
                          color: cmd.color,
                          borderColor: `${cmd.color}30`,
                          backgroundColor: `${cmd.color}10`,
                        }}
                      >
                        {cmd.command}
                      </code>
                      {cmd.alias && (
                        <span className="text-sm text-stellar-faint font-mono">or {cmd.alias}</span>
                      )}
                    </div>
                    <p className="text-stellar-bright mb-2">{cmd.description}</p>
                    <code className="text-xs text-stellar-faint font-mono">{cmd.example}</code>
                  </div>
                  <div
                    className="shrink-0 px-3 py-1 text-xs font-mono uppercase tracking-wider border"
                    style={{
                      color: cmd.color,
                      borderColor: `${cmd.color}30`,
                      backgroundColor: `${cmd.color}10`,
                    }}
                  >
                    {cmd.category}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 3: Agent Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.agentTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.agentDescription}</p>

          <div className="space-y-8">
            {t.agentCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.05 }}
                className="p-6 bg-void-elevated border"
                style={{ borderColor: `${category.color}30` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center font-mono font-bold text-lg border"
                    style={{
                      color: category.color,
                      borderColor: `${category.color}30`,
                      backgroundColor: `${category.color}15`,
                    }}
                  >
                    {category.category}
                  </div>
                  <h3 className="void-heading-3 text-stellar-core">{category.name}</h3>
                </div>

                <div className="space-y-2">
                  {category.agents.map((agent, agentIndex) => (
                    <div
                      key={agentIndex}
                      className="flex items-start gap-4 p-3 border border-stellar-faint/10 hover:border-stellar-faint/20 transition-colors"
                    >
                      <code
                        className="shrink-0 font-mono font-bold px-2 py-1 text-sm"
                        style={{ color: category.color }}
                      >
                        {agent.command}
                      </code>
                      <div className="flex-1">
                        <p className="text-stellar-bright mb-1">{agent.name}</p>
                        <p className="text-xs text-stellar-faint font-mono">
                          <span className="text-stellar-dim">Trigger: </span>
                          {agent.trigger}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 4: Humanization Pipeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(135, 206, 235, 0.15)' }}
            >
              <Sparkles className="h-5 w-5" style={{ color: '#87ceeb' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.humanizationTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.humanizationDescription}</p>

          <div className="space-y-4">
            {t.humanizationCommands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border"
                style={{ borderColor: `${cmd.color}30` }}
              >
                <div className="flex items-start gap-4">
                  <code
                    className="shrink-0 font-mono font-bold text-lg px-3 py-1 border"
                    style={{
                      color: cmd.color,
                      borderColor: `${cmd.color}30`,
                      backgroundColor: `${cmd.color}10`,
                    }}
                  >
                    {cmd.command}
                  </code>
                  <div className="flex-1">
                    <h3 className="font-bold text-stellar-core mb-1">{cmd.name}</h3>
                    <p className="text-stellar-dim mb-2">{cmd.description}</p>
                    <code className="text-xs text-stellar-faint font-mono">{cmd.example}</code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 5: ScholaRAG Commands */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.15)' }}
            >
              <BookOpen className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.scholarTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.scholarDescription}</p>

          <div className="space-y-3">
            {t.scholarCommands.map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="p-5 bg-void-elevated border"
                style={{ borderColor: `${cmd.color}30` }}
              >
                <div className="flex items-start gap-4">
                  <code
                    className="shrink-0 font-mono font-bold text-lg px-3 py-1 border"
                    style={{
                      color: cmd.color,
                      borderColor: `${cmd.color}30`,
                      backgroundColor: `${cmd.color}10`,
                    }}
                  >
                    {cmd.command}
                  </code>
                  <div className="flex-1">
                    <h3 className="font-bold text-stellar-core mb-1">{cmd.name}</h3>
                    <p className="text-stellar-dim mb-2">{cmd.description}</p>
                    <code className="text-xs text-stellar-faint font-mono">{cmd.example}</code>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 6: Auto-Triggers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.triggersTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.triggersDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.triggerGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-5 bg-void-elevated border"
                style={{ borderColor: `${group.color}30` }}
              >
                <h3
                  className="font-mono font-bold mb-4"
                  style={{ color: group.color }}
                >
                  {group.name}
                </h3>
                <div className="space-y-3">
                  {group.triggers.map((trigger, tIndex) => (
                    <div key={tIndex} className="flex flex-col gap-1">
                      <code className="text-xs font-mono text-stellar-bright">
                        {trigger.keyword}
                      </code>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-stellar-faint" />
                        <span className="text-xs text-stellar-dim">{trigger.agent}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 7: Usage Examples */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.examplesTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-8">{t.examplesDescription}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border"
                style={{ borderColor: `${example.color}30` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center border"
                    style={{
                      color: example.color,
                      borderColor: `${example.color}30`,
                      backgroundColor: `${example.color}15`,
                    }}
                  >
                    {iconMap[example.icon]}
                  </div>
                  <h3 className="void-heading-3 text-stellar-core">{example.title}</h3>
                </div>
                <ol className="space-y-2">
                  {example.steps.map((step, sIndex) => (
                    <li key={sIndex} className="flex items-start gap-2">
                      <span
                        className="shrink-0 flex h-5 w-5 items-center justify-center text-xs font-bold border"
                        style={{
                          color: example.color,
                          borderColor: `${example.color}30`,
                        }}
                      >
                        {sIndex + 1}
                      </span>
                      <span className="text-sm text-stellar-dim pt-0.5">{step.text}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Section Divider */}
        <div className="border-b border-stellar-faint/10 mb-16" />

        {/* Section 8: Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="flex h-10 w-10 items-center justify-center border border-stellar-faint/20"
              style={{ backgroundColor: 'rgba(68, 255, 170, 0.15)' }}
            >
              <CheckCircle className="h-5 w-5" style={{ color: '#44ffaa' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.tipsTitle}</h2>
          </div>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {t.tips.map((tip, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-void-elevated border border-stellar-faint/10"
              >
                <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#44ffaa' }} />
                <span className="text-stellar-bright">{tip}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Section Divider */}
        <div className="void-divider-glow mb-16" />

        {/* Section 9: CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 border"
            style={{
              background: 'linear-gradient(135deg, rgba(68, 255, 170, 0.1) 0%, rgba(155, 89, 182, 0.1) 100%)',
              borderColor: 'rgba(68, 255, 170, 0.2)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={`/${locale}/docs/agents`}
                className="void-btn void-btn-accent inline-flex items-center gap-2"
              >
                {t.ctaButtons.agents}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href={`/${locale}/docs/checkpoints`}
                className="void-btn void-btn-primary inline-flex items-center gap-2"
              >
                {t.ctaButtons.checkpoints}
              </Link>
              <Link
                href={`/${locale}/getting-started`}
                className="void-btn void-btn-ghost inline-flex items-center gap-2"
              >
                {t.ctaButtons.quickstart}
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
