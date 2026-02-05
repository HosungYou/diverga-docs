'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MessageSquare,
  FileText,
  Users,
  ClipboardCheck,
  Scan,
  Wand2,
  AlertCircle,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category G: Communication Agents',
    subtitle: 'Academic writing, dissemination, and humanization pipeline',
    description: 'Communication agents handle the entire publication lifecycle from journal selection to peer review response, with advanced humanization capabilities to transform AI-generated text into natural academic prose while preserving scholarly integrity.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Clear communication, strategic publication, and natural academic writing',

    // Agents
    agents: [
      {
        id: 'G1',
        name: 'Journal Matcher',
        icon: 'fileText',
        color: '#3498db',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS',
        purpose: 'Differentiated journal recommendation using multi-dimensional matching beyond impact factor',
        triggers: {
          en: ['journal', 'submission', 'impact factor', 'where to publish', 'target journal'],
          ko: ['저널', '투고', '학술지', '영향력 지수', '투고처'],
        },
        capabilities: [
          'Multi-dimensional journal matching (scope, methodology, paradigm)',
          'Impact factor contextualization (field-normalized metrics)',
          'Open access vs. subscription analysis',
          'Review timeline and acceptance rate data',
          'Editorial board alignment check',
        ],
        vsProcess: 'Avoid IF-centric recommendations, present differentiated options considering research paradigm, methodology fit, and strategic career goals',
        example: {
          input: '"Mixed methods study on AI in education - where should I submit?"',
          output: 'Option A (High IF): Computers & Education (IF 11.2, 15% acceptance, 6-month review) | Option B (Methodology fit): Journal of Mixed Methods Research (IF 4.5, mixed methods specialty, 3-month review) | Option C (Open access): International Journal of Educational Technology (OA, faster review, broader reach)',
        },
      },
      {
        id: 'G2',
        name: 'Academic Communicator',
        icon: 'messageSquare',
        color: '#2980b9',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Standard',
        purpose: 'Adapt research findings for different audiences (abstracts, plain language, presentations)',
        triggers: {
          en: ['abstract', 'plain language', 'presentation', 'write paper', 'manuscript'],
          ko: ['초록', '쉬운 언어', '발표', '논문 작성', '원고'],
        },
        capabilities: [
          'Abstract writing (structured, unstructured)',
          'Plain language summaries for non-specialists',
          'Conference presentation design',
          'Research poster layout',
          'Infographic generation for key findings',
        ],
        vsProcess: 'Tailor communication style to audience, balance technical precision with accessibility',
        example: {
          input: '"Write plain language summary of my RCT on AI chatbots"',
          output: 'Technical abstract (250 words) for journal | Plain language summary (150 words) for general public: "AI chatbots helped students improve speaking skills by 23%. Students practiced more often because chatbots were available 24/7 and didn\'t judge mistakes." | Key visual: Before/after speaking proficiency chart',
        },
      },
      {
        id: 'G3',
        name: 'Peer Review Strategist',
        icon: 'users',
        color: '#1f618d',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_RESPONSE_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Strategic response to peer review comments, revision planning, rebuttal drafting',
        triggers: {
          en: ['peer review', 'reviewer', 'revision', 'response letter', 'rebuttal'],
          ko: ['동료 심사', '리뷰어', '수정', '응답서', '반박'],
        },
        capabilities: [
          'Reviewer comment categorization (substantive vs. minor)',
          'Response strategy (concede, defend, clarify)',
          'Rebuttal letter drafting',
          'Revision tracking and documentation',
          'Disagreement handling with diplomatic language',
        ],
        vsProcess: 'Phase 1: Analyze reviewer intent | Phase 2: Prioritize changes | Phase 3: Draft strategic responses balancing revision effort and editorial satisfaction',
        example: {
          input: '"Reviewer 2 says my sample size is too small and theory is weak"',
          output: 'Sample size: CONCEDE - Acknowledge limitation, add power analysis post-hoc, discuss in limitations section | Theory: DEFEND - Provide additional citations, clarify theoretical contribution, add conceptual framework diagram | Strategy: Address sample size fully, strengthen theory section modestly, show responsiveness without major overhaul',
        },
      },
      {
        id: 'G4',
        name: 'Preregistration Composer',
        icon: 'clipboardCheck',
        color: '#2c3e50',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_PREREGISTRATION_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Standard',
        purpose: 'Structured preregistration templates for OSF, AsPredicted, and registered reports',
        triggers: {
          en: ['preregistration', 'pre-register', 'OSF', 'AsPredicted', 'registered report'],
          ko: ['사전등록', 'OSF', '등록보고서'],
        },
        capabilities: [
          'OSF Preregistration template completion',
          'AsPredicted 9-question format',
          'Registered Report Stage 1 protocol',
          'Analysis plan specification (prevent HARKing)',
          'Version control and timestamp documentation',
        ],
        vsProcess: 'Guide through template sections, ensure specificity to prevent post-hoc flexibility, document analysis decisions',
        example: {
          input: '"I want to preregister my RCT on AI tutoring"',
          output: 'Template: OSF Preregistration (most comprehensive) | Key sections: (1) Hypotheses: H1 (AI > control, d≥0.5), H2 (moderated by prior knowledge) | (2) Analysis plan: ANCOVA with baseline covariate, α=.05, Bonferroni correction | (3) Sample size: N=120 (G*Power, 80% power) | (4) Stopping rule: Fixed N, no interim analysis | Timestamp: Lock before data collection',
        },
      },
      {
        id: 'G5',
        name: 'Academic Style Auditor',
        icon: 'scan',
        color: '#8e44ad',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_HUMANIZATION_REVIEW',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Enhanced VS 3-Phase',
        purpose: 'Detect AI writing patterns across 24 categories with probability scoring and risk classification',
        triggers: {
          en: ['AI pattern', 'check AI writing', 'style audit', 'AI detection'],
          ko: ['AI 패턴', 'AI 글쓰기 검토', '스타일 감사'],
        },
        capabilities: [
          '24-category AI pattern detection (based on Wikipedia AI Cleanup)',
          'Probability scoring (High/Medium/Low risk)',
          'Phrase-level granularity with context preservation',
          'Academic vs. generic AI pattern differentiation',
          'Citation integrity verification',
        ],
        vsProcess: 'Phase 1: Scan for 24 pattern categories | Phase 2: Assign probability scores | Phase 3: Generate risk report with prioritized recommendations',
        example: {
          input: '"Check my methods section for AI patterns"',
          output: 'HIGH RISK: 12 instances of hedging clusters ("it is important to note that", "it should be emphasized") | MEDIUM RISK: 5 instances of unnecessary semantic intensifiers | LOW RISK: 2 instances of list-heavy structure | Recommendation: Prioritize hedging removal, moderate intensifier reduction | Citations: All intact, no hallucinated references',
        },
        patterns: [
          'Hedging clusters',
          'Unnecessary semantic intensifiers',
          'List-heavy structure',
          'Robotic neutrality',
          'Transition word overuse',
          'Passive voice dominance',
          'Generic academic phrases',
          'Repetitive sentence structure',
        ],
      },
      {
        id: 'G6',
        name: 'Academic Style Humanizer',
        icon: 'wand2',
        color: '#9b59b6',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: 'Full VS 5-Phase',
        purpose: 'Transform AI patterns into natural academic prose while preserving scholarly integrity and citations',
        triggers: {
          en: ['humanize', 'humanization', 'natural writing', 'transform', 'remove AI patterns'],
          ko: ['휴먼화', '자연스러운 글쓰기', '변환', 'AI 패턴 제거'],
        },
        capabilities: [
          'Pattern-specific transformation strategies',
          'Three modes: Conservative, Balanced, Aggressive',
          'Citation preservation and verification',
          'Meaning integrity validation',
          'Diff tracking for all changes',
        ],
        vsProcess: 'Stage 1: Parse G5 audit report | Stage 2: Generate transformation alternatives | Stage 3: Human selects mode | Stage 4: Apply transformations | Stage 5: F5 verification',
        example: {
          input: '"Humanize: It is important to note that the results demonstrate a significant effect"',
          output: 'CONSERVATIVE (high-risk only): "The results demonstrate a significant effect" (removed hedging) | BALANCED: "Results show a significant effect" (active voice + concise) | AGGRESSIVE: "Our data reveal a meaningful impact" (varied vocabulary, first person)',
        },
        modes: [
          { mode: 'Conservative', target: 'High-risk patterns only', use: 'Journal submissions' },
          { mode: 'Balanced', target: 'High + medium-risk', use: 'Most academic writing (recommended)' },
          { mode: 'Aggressive', target: 'All patterns', use: 'Blog posts, informal writing' },
        ],
      },
    ],

    // Humanization pipeline
    pipelineTitle: 'Humanization Pipeline (G5 → G6 → F5)',
    pipelineDescription: 'Three-stage process for transforming AI-generated text:',
    pipelineStages: [
      { stage: 1, agent: 'G5', name: 'Audit', description: 'Detect AI patterns, assign risk scores' },
      { stage: 2, agent: 'G6', name: 'Transform', description: 'Apply mode-specific humanization' },
      { stage: 3, agent: 'F5', name: 'Verify', description: 'Validate transformation integrity' },
    ],

    // Checkpoint integration
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'Communication agents enforce publication readiness:',
    checkpoints: [
      { id: 'CP_RESPONSE_APPROVAL', level: 'RECOMMENDED', agent: 'G3', description: 'Peer review response strategy confirmed' },
      { id: 'CP_PREREGISTRATION_APPROVAL', level: 'RECOMMENDED', agent: 'G4', description: 'Preregistration template complete and locked' },
      { id: 'CP_HUMANIZATION_REVIEW', level: 'RECOMMENDED', agent: 'G5', description: 'AI pattern audit complete' },
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'G6', description: 'Transformation verified for integrity' },
    ],

    // Typical workflow
    workflowTitle: 'Typical Publication Workflow',
    workflowSteps: [
      { agent: 'G1', action: 'Select target journal', checkpoint: 'None', parallel: false },
      { agent: 'G2', action: 'Write abstract and manuscript', checkpoint: 'None', parallel: false },
      { agent: 'G5 → G6', action: 'Audit and humanize draft', checkpoint: 'CP_HUMANIZATION_REVIEW', parallel: false },
      { agent: 'G4', action: 'Preregister if applicable', checkpoint: 'CP_PREREGISTRATION_APPROVAL', parallel: false },
      { agent: 'G3', action: 'Respond to peer review', checkpoint: 'CP_RESPONSE_APPROVAL', parallel: false },
    ],

    // Ethics note
    ethicsTitle: 'Ethics Note: Responsible AI Use',
    ethicsText: 'Humanization helps express ideas naturally—it does NOT make AI use "undetectable." Researchers must follow institutional and journal AI disclosure policies. Diverga promotes transparent AI-assisted research communication, not deception.',

    // CTA
    ctaTitle: 'Master Research Communication',
    ctaDescription: 'Use Category G agents for publication success and natural academic writing.',
    ctaButton: 'Explore Category H: Specialized',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 G: 커뮤니케이션 에이전트',
    subtitle: '학술 글쓰기, 보급, 및 휴먼화 파이프라인',
    description: '커뮤니케이션 에이전트는 저널 선택부터 동료 심사 응답까지 전체 출판 생애주기를 처리하며, AI 생성 텍스트를 학술적 무결성을 유지하면서 자연스러운 학술 문장으로 변환하는 고급 휴먼화 기능을 제공합니다.',

    principleTitle: '핵심 원칙',
    principleText: '명확한 커뮤니케이션, 전략적 출판, 자연스러운 학술 글쓰기',

    agents: [
      {
        id: 'G1',
        name: '저널 매칭',
        icon: 'fileText',
        color: '#3498db',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: '없음',
        checkpointLevel: 'Advisory',
        vsLevel: '라이트 VS',
        purpose: '영향력 지수를 넘어 다차원 매칭을 사용한 차별화된 저널 추천',
        triggers: {
          en: ['journal', 'submission', 'impact factor', 'where to publish', 'target journal'],
          ko: ['저널', '투고', '학술지', '영향력 지수', '투고처'],
        },
        capabilities: [
          '다차원 저널 매칭 (범위, 방법론, 패러다임)',
          '영향력 지수 맥락화 (분야 정규화 메트릭)',
          '오픈 액세스 vs. 구독 분석',
          '심사 기간 및 수락률 데이터',
          '편집위원회 정렬 확인',
        ],
        vsProcess: 'IF 중심 권장사항 회피, 연구 패러다임, 방법론 적합성, 전략적 경력 목표를 고려한 차별화된 옵션 제시',
        example: {
          input: '"교육에서 AI에 대한 혼합방법 연구 - 어디에 투고해야 하나요?"',
          output: '옵션 A (높은 IF): Computers & Education (IF 11.2, 15% 수락률, 6개월 심사) | 옵션 B (방법론 적합): Journal of Mixed Methods Research (IF 4.5, 혼합방법 전문, 3개월 심사) | 옵션 C (오픈 액세스): International Journal of Educational Technology (OA, 빠른 심사, 광범위한 도달)',
        },
      },
      {
        id: 'G2',
        name: '학술 커뮤니케이터',
        icon: 'messageSquare',
        color: '#2980b9',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: '없음',
        checkpointLevel: 'Advisory',
        vsLevel: '표준',
        purpose: '다양한 청중을 위한 연구 결과 적응 (초록, 쉬운 언어, 발표)',
        triggers: {
          en: ['abstract', 'plain language', 'presentation', 'write paper', 'manuscript'],
          ko: ['초록', '쉬운 언어', '발표', '논문 작성', '원고'],
        },
        capabilities: [
          '초록 작성 (구조화, 비구조화)',
          '비전문가를 위한 쉬운 언어 요약',
          '학회 발표 디자인',
          '연구 포스터 레이아웃',
          '주요 발견을 위한 인포그래픽 생성',
        ],
        vsProcess: '청중에 맞게 커뮤니케이션 스타일 조정, 기술적 정확성과 접근성 균형',
        example: {
          input: '"AI 챗봇에 대한 내 RCT의 쉬운 언어 요약 작성"',
          output: '저널용 기술 초록 (250단어) | 일반 대중용 쉬운 언어 요약 (150단어): "AI 챗봇이 학생들의 말하기 기술을 23% 향상시켰습니다. 챗봇이 24/7 사용 가능하고 실수를 판단하지 않아 학생들이 더 자주 연습했습니다." | 주요 시각: 말하기 능숙도 전후 차트',
        },
      },
      {
        id: 'G3',
        name: '동료 심사 전략가',
        icon: 'users',
        color: '#1f618d',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_RESPONSE_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '향상된 VS 3단계',
        purpose: '동료 심사 의견에 대한 전략적 응답, 수정 계획, 반박 초안',
        triggers: {
          en: ['peer review', 'reviewer', 'revision', 'response letter', 'rebuttal'],
          ko: ['동료 심사', '리뷰어', '수정', '응답서', '반박'],
        },
        capabilities: [
          '리뷰어 의견 분류 (실질적 vs. 사소한)',
          '응답 전략 (수용, 방어, 명확화)',
          '반박서 초안 작성',
          '수정 추적 및 문서화',
          '외교적 언어로 불일치 처리',
        ],
        vsProcess: '1단계: 리뷰어 의도 분석 | 2단계: 변경 우선순위 지정 | 3단계: 수정 노력과 편집 만족도 균형을 맞춘 전략적 응답 초안',
        example: {
          input: '"리뷰어 2가 내 표본 크기가 너무 작고 이론이 약하다고 합니다"',
          output: '표본 크기: 수용 - 한계 인정, 사후 검정력 분석 추가, 한계 섹션에서 논의 | 이론: 방어 - 추가 인용 제공, 이론적 기여 명확화, 개념적 프레임워크 다이어그램 추가 | 전략: 표본 크기 완전히 해결, 이론 섹션 적당히 강화, 대대적 개편 없이 반응성 보여주기',
        },
      },
      {
        id: 'G4',
        name: '사전등록 작성자',
        icon: 'clipboardCheck',
        color: '#2c3e50',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_PREREGISTRATION_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '표준',
        purpose: 'OSF, AsPredicted, 및 등록 보고서를 위한 구조화된 사전등록 템플릿',
        triggers: {
          en: ['preregistration', 'pre-register', 'OSF', 'AsPredicted', 'registered report'],
          ko: ['사전등록', 'OSF', '등록보고서'],
        },
        capabilities: [
          'OSF 사전등록 템플릿 완성',
          'AsPredicted 9질문 형식',
          '등록 보고서 1단계 프로토콜',
          '분석 계획 명세 (HARKing 방지)',
          '버전 제어 및 타임스탬프 문서화',
        ],
        vsProcess: '템플릿 섹션을 통해 안내, 사후 유연성 방지를 위한 구체성 보장, 분석 결정 문서화',
        example: {
          input: '"AI 튜터링에 대한 내 RCT를 사전등록하고 싶어요"',
          output: '템플릿: OSF 사전등록 (가장 포괄적) | 주요 섹션: (1) 가설: H1 (AI > 통제, d≥0.5), H2 (사전 지식에 의해 조절됨) | (2) 분석 계획: 기준선 공변량이 있는 ANCOVA, α=.05, Bonferroni 보정 | (3) 표본 크기: N=120 (G*Power, 80% 검정력) | (4) 중단 규칙: 고정 N, 중간 분석 없음 | 타임스탬프: 데이터 수집 전 잠금',
        },
      },
      {
        id: 'G5',
        name: '학술 스타일 감사자',
        icon: 'scan',
        color: '#8e44ad',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_HUMANIZATION_REVIEW',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '향상된 VS 3단계',
        purpose: '확률 점수 및 위험 분류를 통한 24개 카테고리의 AI 글쓰기 패턴 감지',
        triggers: {
          en: ['AI pattern', 'check AI writing', 'style audit', 'AI detection'],
          ko: ['AI 패턴', 'AI 글쓰기 검토', '스타일 감사'],
        },
        capabilities: [
          '24개 카테고리 AI 패턴 감지 (Wikipedia AI Cleanup 기반)',
          '확률 점수 (높음/중간/낮음 위험)',
          '맥락 보존을 통한 구문 수준 세분성',
          '학술 vs. 일반 AI 패턴 구분',
          '인용 무결성 검증',
        ],
        vsProcess: '1단계: 24개 패턴 카테고리 스캔 | 2단계: 확률 점수 할당 | 3단계: 우선순위화된 권장사항이 있는 위험 보고서 생성',
        example: {
          input: '"내 방법 섹션에서 AI 패턴 확인"',
          output: '높은 위험: 헤징 클러스터 12개 사례 ("주목해야 한다", "강조되어야 한다") | 중간 위험: 불필요한 의미 강화어 5개 사례 | 낮은 위험: 목록 중심 구조 2개 사례 | 권장사항: 헤징 제거 우선순위 지정, 강화어 적당히 감소 | 인용: 모두 온전, 환각 참조 없음',
        },
        patterns: [
          '헤징 클러스터',
          '불필요한 의미 강화어',
          '목록 중심 구조',
          '로봇적 중립성',
          '전환어 과다 사용',
          '수동태 지배',
          '일반적인 학술 구문',
          '반복적인 문장 구조',
        ],
      },
      {
        id: 'G6',
        name: '학술 스타일 휴먼화',
        icon: 'wand2',
        color: '#9b59b6',
        model: 'Opus',
        tier: 'HIGH',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: '전체 VS 5단계',
        purpose: '학술적 무결성과 인용을 유지하면서 AI 패턴을 자연스러운 학술 문장으로 변환',
        triggers: {
          en: ['humanize', 'humanization', 'natural writing', 'transform', 'remove AI patterns'],
          ko: ['휴먼화', '자연스러운 글쓰기', '변환', 'AI 패턴 제거'],
        },
        capabilities: [
          '패턴별 변환 전략',
          '세 가지 모드: 보수적, 균형, 공격적',
          '인용 보존 및 검증',
          '의미 무결성 검증',
          '모든 변경사항에 대한 차이 추적',
        ],
        vsProcess: '1단계: G5 감사 보고서 파싱 | 2단계: 변환 대안 생성 | 3단계: 인간이 모드 선택 | 4단계: 변환 적용 | 5단계: F5 검증',
        example: {
          input: '"휴먼화: 결과가 유의미한 효과를 보인다는 것을 주목해야 한다"',
          output: '보수적 (높은 위험만): "결과는 유의미한 효과를 보인다" (헤징 제거) | 균형: "결과는 유의미한 효과를 나타낸다" (능동태 + 간결) | 공격적: "우리 데이터는 의미 있는 영향을 드러낸다" (다양한 어휘, 1인칭)',
        },
        modes: [
          { mode: '보수적', target: '높은 위험 패턴만', use: '저널 투고' },
          { mode: '균형', target: '높음 + 중간 위험', use: '대부분의 학술 글쓰기 (권장)' },
          { mode: '공격적', target: '모든 패턴', use: '블로그 게시물, 비공식 글쓰기' },
        ],
      },
    ],

    pipelineTitle: '휴먼화 파이프라인 (G5 → G6 → F5)',
    pipelineDescription: 'AI 생성 텍스트 변환을 위한 3단계 프로세스:',
    pipelineStages: [
      { stage: 1, agent: 'G5', name: '감사', description: 'AI 패턴 감지, 위험 점수 할당' },
      { stage: 2, agent: 'G6', name: '변환', description: '모드별 휴먼화 적용' },
      { stage: 3, agent: 'F5', name: '검증', description: '변환 무결성 검증' },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: '커뮤니케이션 에이전트는 출판 준비 상태를 강제합니다:',
    checkpoints: [
      { id: 'CP_RESPONSE_APPROVAL', level: 'RECOMMENDED', agent: 'G3', description: '동료 심사 응답 전략 확인됨' },
      { id: 'CP_PREREGISTRATION_APPROVAL', level: 'RECOMMENDED', agent: 'G4', description: '사전등록 템플릿 완료 및 잠금' },
      { id: 'CP_HUMANIZATION_REVIEW', level: 'RECOMMENDED', agent: 'G5', description: 'AI 패턴 감사 완료' },
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'G6', description: '무결성을 위한 변환 검증됨' },
    ],

    workflowTitle: '일반적인 출판 워크플로',
    workflowSteps: [
      { agent: 'G1', action: '목표 저널 선택', checkpoint: '없음', parallel: false },
      { agent: 'G2', action: '초록 및 원고 작성', checkpoint: '없음', parallel: false },
      { agent: 'G5 → G6', action: '초안 감사 및 휴먼화', checkpoint: 'CP_HUMANIZATION_REVIEW', parallel: false },
      { agent: 'G4', action: '해당 시 사전등록', checkpoint: 'CP_PREREGISTRATION_APPROVAL', parallel: false },
      { agent: 'G3', action: '동료 심사 응답', checkpoint: 'CP_RESPONSE_APPROVAL', parallel: false },
    ],

    ethicsTitle: '윤리 참고사항: 책임 있는 AI 사용',
    ethicsText: '휴먼화는 아이디어를 자연스럽게 표현하는 데 도움이 되지만, AI 사용을 "감지 불가능"하게 만들지는 않습니다. 연구자는 기관 및 저널의 AI 공개 정책을 따라야 합니다. Diverga는 기만이 아닌 투명한 AI 지원 연구 커뮤니케이션을 촉진합니다.',

    ctaTitle: '연구 커뮤니케이션 마스터하기',
    ctaDescription: '출판 성공과 자연스러운 학술 글쓰기를 위해 카테고리 G 에이전트를 사용하세요.',
    ctaButton: '카테고리 H 탐색: 전문화',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  fileText: <FileText className="h-6 w-6" />,
  messageSquare: <MessageSquare className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  clipboardCheck: <ClipboardCheck className="h-6 w-6" />,
  scan: <Scan className="h-6 w-6" />,
  wand2: <Wand2 className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  RECOMMENDED: <CheckCircle2 className="h-4 w-4" />,
  OPTIONAL: <CheckCircle2 className="h-4 w-4" />,
  Advisory: <CheckCircle2 className="h-4 w-4" />,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function CommunicationAgentsPage() {
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
              background: 'radial-gradient(ellipse at center top, rgba(52, 152, 219, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.15)',
              borderColor: 'rgba(52, 152, 219, 0.3)',
              color: '#3498db',
            }}
          >
            <Sparkles className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#3498db' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(52, 152, 219, 0.1)',
              borderColor: 'rgba(52, 152, 219, 0.2)',
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
          {t.agents.map((agent, index) => (
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
                      color: agent.tier === 'HIGH' ? '#9b59b6' : '#45b7d1',
                      borderColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.3)' : 'rgba(69, 183, 209, 0.3)',
                      backgroundColor: agent.tier === 'HIGH' ? 'rgba(155, 89, 182, 0.1)' : 'rgba(69, 183, 209, 0.1)',
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
                        color: agent.checkpointLevel === 'REQUIRED' ? '#ff6b6b' : agent.checkpointLevel === 'RECOMMENDED' ? '#f39c12' : '#45b7d1',
                        borderColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : agent.checkpointLevel === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.3)' : 'rgba(69, 183, 209, 0.3)',
                        backgroundColor: agent.checkpointLevel === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : agent.checkpointLevel === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.1)' : 'rgba(69, 183, 209, 0.1)',
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

              {/* Special sections for G5 and G6 */}
              {'patterns' in agent && agent.patterns && (
                <div className="mt-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '감지 패턴 (일부)' : 'Detection Patterns (Sample)'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.patterns.map((pattern, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-mono border"
                        style={{
                          color: agent.color,
                          borderColor: `${agent.color}30`,
                          backgroundColor: `${agent.color}08`,
                        }}
                      >
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {'modes' in agent && agent.modes && (
                <div className="mt-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '변환 모드' : 'Transformation Modes'}
                  </h4>
                  <div className="space-y-2">
                    {agent.modes.map((mode, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 border border-stellar-faint/10 bg-void-deep/50"
                      >
                        <span
                          className="px-2 py-1 text-xs font-mono font-bold border"
                          style={{
                            color: agent.color,
                            borderColor: `${agent.color}30`,
                            backgroundColor: `${agent.color}10`,
                          }}
                        >
                          {mode.mode}
                        </span>
                        <div className="flex-1">
                          <p className="text-xs text-stellar-dim">
                            <span className="text-stellar-core font-medium">{mode.target}</span> • {mode.use}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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

        {/* Humanization Pipeline */}
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
              <Wand2 className="h-5 w-5" style={{ color: '#9b59b6' }} />
            </div>
            <h2 className="void-heading-2 text-stellar-core">{t.pipelineTitle}</h2>
          </div>
          <p className="text-body-lg text-stellar-dim mb-6">{t.pipelineDescription}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.pipelineStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10 text-center"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center border mb-3 font-mono font-bold"
                  style={{
                    color: '#9b59b6',
                    borderColor: 'rgba(155, 89, 182, 0.3)',
                    backgroundColor: 'rgba(155, 89, 182, 0.1)',
                  }}
                >
                  {stage.stage}
                </div>
                <div
                  className="px-2 py-1 font-mono text-xs font-bold border inline-block mb-2"
                  style={{
                    color: '#3498db',
                    borderColor: 'rgba(52, 152, 219, 0.3)',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                  }}
                >
                  {stage.agent}
                </div>
                <h3 className="text-sm font-bold text-stellar-core mb-2">{stage.name}</h3>
                <p className="text-xs text-stellar-dim">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="border-b border-stellar-faint/10 mb-16" />

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
              style={{ backgroundColor: 'rgba(243, 156, 18, 0.15)' }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: '#f39c12' }} />
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
                    color: cp.level === 'REQUIRED' ? '#ff6b6b' : cp.level === 'RECOMMENDED' ? '#f39c12' : '#45b7d1',
                    borderColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.3)' : cp.level === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.3)' : 'rgba(69, 183, 209, 0.3)',
                    backgroundColor: cp.level === 'REQUIRED' ? 'rgba(255, 107, 107, 0.1)' : cp.level === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.1)' : 'rgba(69, 183, 209, 0.1)',
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
                        color: '#3498db',
                        borderColor: 'rgba(52, 152, 219, 0.3)',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
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
                  </div>
                  <p className="text-sm text-stellar-dim">{step.action}</p>
                </div>
                {step.checkpoint !== 'None' && step.checkpoint !== '없음' && (
                  <div
                    className="px-3 py-1 text-xs font-mono border"
                    style={{
                      color: '#f39c12',
                      borderColor: 'rgba(243, 156, 18, 0.3)',
                      backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    }}
                  >
                    {step.checkpoint}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="void-divider-glow mb-16" />

        {/* Ethics Note */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div
            className="p-6 border"
            style={{
              backgroundColor: 'rgba(243, 156, 18, 0.1)',
              borderColor: 'rgba(243, 156, 18, 0.3)',
            }}
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 shrink-0" style={{ color: '#f39c12' }} />
              <div>
                <h3 className="font-bold text-stellar-core mb-2">{t.ethicsTitle}</h3>
                <p className="text-sm text-stellar-dim">{t.ethicsText}</p>
              </div>
            </div>
          </div>
        </motion.section>

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
              background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(155, 89, 182, 0.15) 100%)',
              borderColor: 'rgba(52, 152, 219, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents/specialized`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <Sparkles className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
