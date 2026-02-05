'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  CheckSquare,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Shield,
  Clock,
  FileText,
} from 'lucide-react';

const content = {
  en: {
    back: 'Back to Agents',
    title: 'Category F: Quality Assurance Agents',
    subtitle: 'Methodological rigor, reproducibility, and research integrity',
    description: 'Quality agents ensure research integrity through systematic consistency checks, reporting guideline compliance, reproducibility audits, and bias detection. F4 adapts between quantitative QRP detection and qualitative trustworthiness assessment.',

    // Core principle
    principleTitle: 'Core Principle',
    principleText: 'Ensure defensibility and transparency across all research paradigms',

    // Agents
    agents: [
      {
        id: 'F1',
        name: 'Internal Consistency Checker',
        icon: 'checkSquare',
        color: '#e74c3c',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Standard',
        purpose: 'Verify logical consistency, alignment between research question, theory, methods, and conclusions',
        triggers: {
          en: ['consistency', 'coherence', 'alignment', 'internal consistency'],
          ko: ['일관성', '정합성', '내적 일관성', '논리적 일관성'],
        },
        capabilities: [
          'RQ-hypothesis-method alignment verification',
          'Theory-analysis-interpretation consistency',
          'Terminology consistency across manuscript',
          'Logical flow validation',
          'Cross-referencing accuracy (citations, tables, figures)',
          'Detect contradictory claims',
        ],
        vsProcess: 'Systematic checklist approach with contextual interpretation',
        example: {
          input: '"RQ: How does AI affect learning? Method: Survey on teacher perceptions"',
          output: '❌ Misalignment detected: RQ asks about learner outcomes, but method measures teacher perceptions. Recommendation: Align RQ to "teacher perceptions of AI impact" OR change method to measure learner outcomes directly.',
        },
      },
      {
        id: 'F2',
        name: 'Checklist Manager',
        icon: 'fileText',
        color: '#c0392b',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'None',
        checkpointLevel: 'Advisory',
        vsLevel: 'Light VS Applied',
        purpose: 'Apply reporting guidelines with context-adaptive checking (not mechanical)',
        triggers: {
          en: ['checklist', 'PRISMA', 'CONSORT', 'STROBE', 'COREQ', 'GRAMMS', 'reporting guidelines'],
          ko: ['체크리스트', '보고 기준', 'PRISMA', 'CONSORT', 'COREQ'],
        },
        capabilities: [
          'PRISMA 2020 (Systematic Reviews)',
          'CONSORT (Randomized Trials)',
          'STROBE (Observational Studies)',
          'COREQ (Qualitative Research)',
          'GRAMMS (Meta-Analysis of Observational Studies)',
          'Context-specific guideline recommendations',
        ],
        vsProcess: 'Phase 1: Identify research design | Phase 2: Select appropriate guideline | Phase 3: Context-adaptive checking (not mechanical)',
        example: {
          input: '"Meta-analysis of 15 RCTs on AI tutoring"',
          output: 'Recommended guidelines: PRISMA 2020 (required) + CONSORT extension for abstracts. Key items: Flow diagram (item 16), Risk of bias assessment (item 17), Effect of interventions (item 20). Light VS: Also consider GRADE for evidence quality.',
        },
        checklistTypes: [
          { name: 'PRISMA 2020', paradigm: 'Systematic Review', items: 27 },
          { name: 'CONSORT', paradigm: 'RCT', items: 25 },
          { name: 'STROBE', paradigm: 'Observational', items: 22 },
          { name: 'COREQ', paradigm: 'Qualitative', items: 32 },
          { name: 'GRAMMS', paradigm: 'Meta-Analysis (Obs)', items: 7 },
        ],
      },
      {
        id: 'F3',
        name: 'Reproducibility Auditor',
        icon: 'fileCheck',
        color: '#d35400',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_REPRODUCIBILITY_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Light VS Applied',
        purpose: 'Comprehensive transparency assessment avoiding superficial checks',
        triggers: {
          en: ['reproducibility', 'replication', 'OSF', 'open science', 'transparency', 'data sharing'],
          ko: ['재현성', '반복가능성', '오픈사이언스', '데이터 공유'],
        },
        capabilities: [
          'OSF project setup guidance',
          'Data/code sharing protocols',
          'Preregistration compatibility check',
          'Materials documentation standards',
          'Computational reproducibility (code review)',
          'Transparency audit (reporting completeness)',
        ],
        vsProcess: 'Light VS: Avoids superficial checklists, performs in-depth practical reproducibility analysis',
        example: {
          input: '"Uploaded SPSS syntax to OSF"',
          output: 'Reproducibility gaps: ✅ Code shared | ❌ Raw data missing | ❌ Variable labels unclear | ❌ SPSS version not specified | ⚠️ README lacks execution instructions. Recommendation: Add codebook, specify software versions, write step-by-step README.',
        },
      },
      {
        id: 'F4',
        name: 'Bias & Trustworthiness Detector',
        icon: 'alertTriangle',
        color: '#e67e22',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_BIAS_REVIEW',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: 'Full VS 5-Phase',
        purpose: 'Paradigm-adaptive quality assessment: QRP detection (quant) + trustworthiness (qual)',
        triggers: {
          en: ['bias', 'p-hacking', 'HARKing', 'trustworthiness', 'credibility', 'transferability', 'dependability', 'confirmability', 'reflexivity'],
          ko: ['편향', 'p-해킹', '신뢰성', '전이가능성', '확증가능성'],
        },
        capabilities: [
          'Quantitative QRP Detection: p-hacking, HARKing, selective reporting, data peeking',
          'Qualitative Trustworthiness: credibility, transferability, dependability, confirmability',
          'Sampling bias identification',
          'Measurement bias detection',
          'Researcher positionality assessment (qual)',
          'Member checking validation (qual)',
        ],
        vsProcess: 'Full VS 5-Phase: Avoids generic bias lists, delivers research-specific analysis adapted to paradigm',
        example: {
          input: '"Tested 12 hypotheses, reported 3 significant results (p < .05)"',
          output: '⚠️ Multiple testing concern: With 12 tests at α=.05, expect ~1 false positive. Did you use: Bonferroni correction? FDR control? Preregistered hypotheses? | VS alternatives: A) Apply α=.004 correction | B) Report effect sizes with CIs | C) Distinguish exploratory vs. confirmatory analyses',
        },
        trustworthinessCriteria: [
          { criterion: 'Credibility', quant: 'Internal validity', qual: 'Member checking, triangulation' },
          { criterion: 'Transferability', quant: 'External validity', qual: 'Thick description, context' },
          { criterion: 'Dependability', quant: 'Reliability', qual: 'Audit trail, consistency' },
          { criterion: 'Confirmability', quant: 'Objectivity', qual: 'Reflexivity, data-driven' },
        ],
      },
      {
        id: 'F5',
        name: 'Humanization Verifier',
        icon: 'shield',
        color: '#f39c12',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: 'Standard',
        purpose: 'Ensure humanization transformation preserves meaning, citations, and statistical accuracy',
        triggers: {
          en: ['verify humanization', 'check transformation', 'validate changes', 'humanization quality'],
          ko: ['휴먼화 검증', 'AI 텍스트 확인', '변환 검증'],
        },
        capabilities: [
          'Citation integrity check (no hallucinated citations)',
          'Statistical accuracy verification (numbers unchanged)',
          'Meaning preservation validation',
          'Terminology consistency (academic terms retained)',
          'Structural coherence (logical flow maintained)',
          'Compare before/after transformations',
        ],
        vsProcess: 'Systematic comparison with focus on academic integrity preservation',
        example: {
          input: 'Before: "The results revealed a statistically significant difference (p < .001, d = 0.82)" | After: "The results showed a significant difference (p < .001, d = 0.82)"',
          output: '✅ Citation integrity: Maintained | ✅ Statistics: Accurate (p-value, effect size unchanged) | ✅ Meaning: Preserved | ⚠️ Minor: "revealed" → "showed" (acceptable simplification) | Verdict: PASS',
        },
      },
    ],

    // Checkpoint integration
    checkpointTitle: 'Checkpoint Integration',
    checkpointDescription: 'Quality agents enforce research integrity gates:',
    checkpoints: [
      { id: 'CP_REPRODUCIBILITY_APPROVAL', level: 'RECOMMENDED', agent: 'F3', description: 'Open science materials complete, practical reproducibility verified' },
      { id: 'CP_BIAS_REVIEW', level: 'RECOMMENDED', agent: 'F4', description: 'QRP screening passed (quant) OR trustworthiness established (qual)' },
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'F5', description: 'Transformation integrity confirmed, citations/statistics accurate' },
    ],

    // Paradigm adaptation
    paradigmTitle: 'F4: Paradigm-Adaptive Quality Assessment',
    paradigmDescription: 'F4 adapts quality criteria based on research paradigm:',
    paradigmAdaptation: [
      {
        paradigm: 'Quantitative',
        focus: 'QRP Detection',
        criteria: ['p-hacking', 'HARKing', 'Selective reporting', 'Data peeking', 'Multiple testing'],
        tools: 'p-curve analysis, specification curve, multiverse analysis',
      },
      {
        paradigm: 'Qualitative',
        focus: 'Trustworthiness',
        criteria: ['Credibility', 'Transferability', 'Dependability', 'Confirmability', 'Reflexivity'],
        tools: 'Member checking, triangulation, audit trails, thick description',
      },
      {
        paradigm: 'Mixed Methods',
        focus: 'Integration Quality',
        criteria: ['Both QRP + Trustworthiness', 'Integration coherence', 'Meta-inferences'],
        tools: 'Legitimation framework, joint displays',
      },
    ],

    // Typical workflow
    workflowTitle: 'Typical Quality Assurance Workflow',
    workflowSteps: [
      { agent: 'F1', action: 'Check internal consistency', checkpoint: 'None', parallel: false },
      { agent: 'F2', action: 'Apply reporting guidelines', checkpoint: 'None', parallel: false },
      { agent: 'F3 + F4', action: 'Reproducibility + Bias review', checkpoint: 'CP_REPRODUCIBILITY_APPROVAL + CP_BIAS_REVIEW', parallel: true },
      { agent: 'F5', action: 'Verify humanization (if used)', checkpoint: 'CP_HUMANIZATION_VERIFY', parallel: false },
    ],

    // CTA
    ctaTitle: 'Ensure Research Integrity',
    ctaDescription: 'Use Category F agents to strengthen methodological rigor and transparency.',
    ctaButton: 'Explore Category G: Communication',
  },
  ko: {
    back: '에이전트로 돌아가기',
    title: '카테고리 F: 품질 보증 에이전트',
    subtitle: '방법론적 엄격성, 재현성, 연구 진실성',
    description: '품질 에이전트는 체계적 일관성 검사, 보고 지침 준수, 재현성 감사, 편향 탐지를 통해 연구 진실성을 보장합니다. F4는 양적 QRP 탐지와 질적 신뢰성 평가 사이를 적응합니다.',

    principleTitle: '핵심 원칙',
    principleText: '모든 연구 패러다임에 걸쳐 방어 가능성과 투명성 보장',

    agents: [
      {
        id: 'F1',
        name: '내적 일관성 검사자',
        icon: 'checkSquare',
        color: '#e74c3c',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: '없음',
        checkpointLevel: '자문',
        vsLevel: '표준',
        purpose: '연구 질문, 이론, 방법, 결론 간 논리적 일관성 및 정렬 검증',
        triggers: {
          en: ['consistency', 'coherence', 'alignment', 'internal consistency'],
          ko: ['일관성', '정합성', '내적 일관성', '논리적 일관성'],
        },
        capabilities: [
          'RQ-가설-방법 정렬 검증',
          '이론-분석-해석 일관성',
          '원고 전반 용어 일관성',
          '논리적 흐름 검증',
          '상호 참조 정확성 (인용, 표, 그림)',
          '모순된 주장 감지',
        ],
        vsProcess: '맥락적 해석을 통한 체계적 체크리스트 접근',
        example: {
          input: '"RQ: AI가 학습에 어떤 영향을 미치나? 방법: 교사 인식 설문조사"',
          output: '❌ 불일치 감지: RQ는 학습자 결과를 묻지만, 방법은 교사 인식을 측정. 권장사항: RQ를 "AI 영향에 대한 교사 인식"으로 정렬 또는 학습자 결과를 직접 측정하도록 방법 변경.',
        },
      },
      {
        id: 'F2',
        name: '체크리스트 관리자',
        icon: 'fileText',
        color: '#c0392b',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: '없음',
        checkpointLevel: '자문',
        vsLevel: '경량 VS 적용',
        purpose: '맥락 적응형 검사로 보고 지침 적용 (기계적이지 않음)',
        triggers: {
          en: ['checklist', 'PRISMA', 'CONSORT', 'STROBE', 'COREQ', 'GRAMMS', 'reporting guidelines'],
          ko: ['체크리스트', '보고 기준', 'PRISMA', 'CONSORT', 'COREQ'],
        },
        capabilities: [
          'PRISMA 2020 (체계적 문헌고찰)',
          'CONSORT (무작위 대조 시험)',
          'STROBE (관찰 연구)',
          'COREQ (질적 연구)',
          'GRAMMS (관찰 연구 메타분석)',
          '맥락별 지침 권장사항',
        ],
        vsProcess: '1단계: 연구 설계 식별 | 2단계: 적절한 지침 선택 | 3단계: 맥락 적응형 검사 (기계적이지 않음)',
        example: {
          input: '"AI 튜터링에 대한 15개 RCT 메타분석"',
          output: '권장 지침: PRISMA 2020 (필수) + 초록용 CONSORT 확장. 주요 항목: 흐름도 (항목 16), 비뚤림 위험 평가 (항목 17), 중재 효과 (항목 20). 경량 VS: 근거 품질을 위한 GRADE도 고려.',
        },
        checklistTypes: [
          { name: 'PRISMA 2020', paradigm: '체계적 문헌고찰', items: 27 },
          { name: 'CONSORT', paradigm: 'RCT', items: 25 },
          { name: 'STROBE', paradigm: '관찰 연구', items: 22 },
          { name: 'COREQ', paradigm: '질적 연구', items: 32 },
          { name: 'GRAMMS', paradigm: '메타분석 (관찰)', items: 7 },
        ],
      },
      {
        id: 'F3',
        name: '재현성 감사자',
        icon: 'fileCheck',
        color: '#d35400',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_REPRODUCIBILITY_APPROVAL',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '경량 VS 적용',
        purpose: '피상적 검사를 피하는 포괄적 투명성 평가',
        triggers: {
          en: ['reproducibility', 'replication', 'OSF', 'open science', 'transparency', 'data sharing'],
          ko: ['재현성', '반복가능성', '오픈사이언스', '데이터 공유'],
        },
        capabilities: [
          'OSF 프로젝트 설정 안내',
          '데이터/코드 공유 프로토콜',
          '사전등록 호환성 확인',
          '자료 문서화 표준',
          '계산적 재현성 (코드 검토)',
          '투명성 감사 (보고 완전성)',
        ],
        vsProcess: '경량 VS: 피상적 체크리스트 회피, 심층 실용적 재현성 분석 수행',
        example: {
          input: '"OSF에 SPSS 구문 업로드"',
          output: '재현성 격차: ✅ 코드 공유됨 | ❌ 원시 데이터 누락 | ❌ 변수 레이블 불명확 | ❌ SPSS 버전 명시 안 됨 | ⚠️ README에 실행 지침 부족. 권장사항: 코드북 추가, 소프트웨어 버전 명시, 단계별 README 작성.',
        },
      },
      {
        id: 'F4',
        name: '편향 및 신뢰성 탐지자',
        icon: 'alertTriangle',
        color: '#e67e22',
        model: 'Sonnet',
        tier: 'MEDIUM',
        checkpoint: 'CP_BIAS_REVIEW',
        checkpointLevel: 'RECOMMENDED',
        vsLevel: '전체 VS 5단계',
        purpose: '패러다임 적응형 품질 평가: QRP 탐지 (양적) + 신뢰성 (질적)',
        triggers: {
          en: ['bias', 'p-hacking', 'HARKing', 'trustworthiness', 'credibility', 'transferability', 'dependability', 'confirmability', 'reflexivity'],
          ko: ['편향', 'p-해킹', '신뢰성', '전이가능성', '확증가능성'],
        },
        capabilities: [
          '양적 QRP 탐지: p-해킹, HARKing, 선택적 보고, 데이터 엿보기',
          '질적 신뢰성: 신뢰도, 전이가능성, 의존가능성, 확증가능성',
          '표집 편향 식별',
          '측정 편향 탐지',
          '연구자 위치성 평가 (질적)',
          '멤버 체킹 검증 (질적)',
        ],
        vsProcess: '전체 VS 5단계: 일반적 편향 목록 회피, 패러다임에 적응된 연구별 분석 제공',
        example: {
          input: '"12개 가설 검정, 3개 유의미한 결과 보고 (p < .05)"',
          output: '⚠️ 다중 검정 우려: α=.05에서 12개 검정 시 ~1개 가양성 예상. 사용 여부: Bonferroni 보정? FDR 통제? 사전등록된 가설? | VS 대안: A) α=.004 보정 적용 | B) 신뢰구간과 함께 효과크기 보고 | C) 탐색적 vs. 확증적 분석 구분',
        },
        trustworthinessCriteria: [
          { criterion: '신뢰도', quant: '내적 타당도', qual: '멤버 체킹, 삼각측정' },
          { criterion: '전이가능성', quant: '외적 타당도', qual: '상세한 기술, 맥락' },
          { criterion: '의존가능성', quant: '신뢰성', qual: '감사 추적, 일관성' },
          { criterion: '확증가능성', quant: '객관성', qual: '성찰성, 데이터 기반' },
        ],
      },
      {
        id: 'F5',
        name: '휴먼화 검증자',
        icon: 'shield',
        color: '#f39c12',
        model: 'Haiku',
        tier: 'LOW',
        checkpoint: 'CP_HUMANIZATION_VERIFY',
        checkpointLevel: 'OPTIONAL',
        vsLevel: '표준',
        purpose: '휴먼화 변환이 의미, 인용, 통계 정확성을 보존하는지 보장',
        triggers: {
          en: ['verify humanization', 'check transformation', 'validate changes', 'humanization quality'],
          ko: ['휴먼화 검증', 'AI 텍스트 확인', '변환 검증'],
        },
        capabilities: [
          '인용 무결성 확인 (환각된 인용 없음)',
          '통계 정확성 검증 (숫자 변경 안 됨)',
          '의미 보존 검증',
          '용어 일관성 (학술 용어 유지)',
          '구조적 일관성 (논리적 흐름 유지)',
          '변환 전후 비교',
        ],
        vsProcess: '학술 진실성 보존에 초점을 둔 체계적 비교',
        example: {
          input: '변환 전: "결과는 통계적으로 유의미한 차이를 드러냈다 (p < .001, d = 0.82)" | 변환 후: "결과는 유의미한 차이를 보였다 (p < .001, d = 0.82)"',
          output: '✅ 인용 무결성: 유지됨 | ✅ 통계: 정확 (p-값, 효과크기 변경 안 됨) | ✅ 의미: 보존됨 | ⚠️ 경미: "드러냈다" → "보였다" (허용 가능한 단순화) | 판정: 통과',
        },
      },
    ],

    checkpointTitle: '체크포인트 통합',
    checkpointDescription: '품질 에이전트는 연구 진실성 게이트를 강제합니다:',
    checkpoints: [
      { id: 'CP_REPRODUCIBILITY_APPROVAL', level: 'RECOMMENDED', agent: 'F3', description: '오픈 사이언스 자료 완료, 실용적 재현성 검증됨' },
      { id: 'CP_BIAS_REVIEW', level: 'RECOMMENDED', agent: 'F4', description: 'QRP 스크리닝 통과 (양적) 또는 신뢰성 확립 (질적)' },
      { id: 'CP_HUMANIZATION_VERIFY', level: 'OPTIONAL', agent: 'F5', description: '변환 무결성 확인, 인용/통계 정확' },
    ],

    paradigmTitle: 'F4: 패러다임 적응형 품질 평가',
    paradigmDescription: 'F4는 연구 패러다임에 따라 품질 기준을 적응합니다:',
    paradigmAdaptation: [
      {
        paradigm: '양적',
        focus: 'QRP 탐지',
        criteria: ['p-해킹', 'HARKing', '선택적 보고', '데이터 엿보기', '다중 검정'],
        tools: 'p-curve 분석, specification curve, multiverse 분석',
      },
      {
        paradigm: '질적',
        focus: '신뢰성',
        criteria: ['신뢰도', '전이가능성', '의존가능성', '확증가능성', '성찰성'],
        tools: '멤버 체킹, 삼각측정, 감사 추적, 상세한 기술',
      },
      {
        paradigm: '혼합방법',
        focus: '통합 품질',
        criteria: ['QRP + 신뢰성 둘 다', '통합 일관성', '메타 추론'],
        tools: '정당화 프레임워크, 통합 디스플레이',
      },
    ],

    workflowTitle: '일반적인 품질 보증 워크플로',
    workflowSteps: [
      { agent: 'F1', action: '내적 일관성 확인', checkpoint: '없음', parallel: false },
      { agent: 'F2', action: '보고 지침 적용', checkpoint: '없음', parallel: false },
      { agent: 'F3 + F4', action: '재현성 + 편향 검토', checkpoint: 'CP_REPRODUCIBILITY_APPROVAL + CP_BIAS_REVIEW', parallel: true },
      { agent: 'F5', action: '휴먼화 검증 (사용 시)', checkpoint: 'CP_HUMANIZATION_VERIFY', parallel: false },
    ],

    ctaTitle: '연구 진실성 보장',
    ctaDescription: '카테고리 F 에이전트를 사용하여 방법론적 엄격성과 투명성을 강화하세요.',
    ctaButton: '카테고리 G 탐색: 커뮤니케이션',
  },
};

// Icon mapping
const agentIcons: Record<string, React.ReactNode> = {
  checkSquare: <CheckSquare className="h-6 w-6" />,
  fileText: <FileText className="h-6 w-6" />,
  fileCheck: <FileCheck className="h-6 w-6" />,
  alertTriangle: <AlertTriangle className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
};

const checkpointIcons: Record<string, React.ReactNode> = {
  REQUIRED: <AlertCircle className="h-4 w-4" />,
  RECOMMENDED: <AlertCircle className="h-4 w-4" />,
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } as any },
};

export default function QualityAgentsPage() {
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
              background: 'radial-gradient(ellipse at center top, rgba(231, 76, 60, 0.15) 0%, transparent 50%)',
            }}
          />

          <div
            className="inline-flex h-16 w-16 items-center justify-center border mb-6 relative z-10"
            style={{
              backgroundColor: 'rgba(231, 76, 60, 0.15)',
              borderColor: 'rgba(231, 76, 60, 0.3)',
              color: '#e74c3c',
            }}
          >
            <ShieldCheck className="h-8 w-8" />
          </div>

          <h1 className="void-heading-1 text-stellar-core mb-4">{t.title}</h1>
          <p className="void-heading-3 mb-4" style={{ color: '#e74c3c' }}>{t.subtitle}</p>
          <p className="text-body-lg text-stellar-dim max-w-3xl mx-auto">{t.description}</p>

          {/* Core Principle */}
          <div
            className="mt-8 p-6 border inline-block relative z-10"
            style={{
              backgroundColor: 'rgba(231, 76, 60, 0.1)',
              borderColor: 'rgba(231, 76, 60, 0.2)',
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
                      color: agent.tier === 'MEDIUM' ? '#45b7d1' : '#95a5a6',
                      borderColor: agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.3)' : 'rgba(149, 165, 166, 0.3)',
                      backgroundColor: agent.tier === 'MEDIUM' ? 'rgba(69, 183, 209, 0.1)' : 'rgba(149, 165, 166, 0.1)',
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
                        color: agent.checkpointLevel === 'RECOMMENDED' ? '#f39c12' : '#e67e22',
                        borderColor: agent.checkpointLevel === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.3)' : 'rgba(230, 126, 34, 0.3)',
                        backgroundColor: agent.checkpointLevel === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.1)' : 'rgba(230, 126, 34, 0.1)',
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

              {/* Checklist Types (F2 only) */}
              {agent.id === 'F2' && 'checklistTypes' in agent && agent.checklistTypes && (
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '지원하는 체크리스트' : 'Supported Checklists'}
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {agent.checklistTypes.map((checklist, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-void-deep/50 border border-stellar-faint/10"
                      >
                        <div>
                          <div className="font-mono font-bold text-stellar-core">{checklist.name}</div>
                          <div className="text-xs text-stellar-dim">{checklist.paradigm}</div>
                        </div>
                        <div
                          className="px-2 py-1 text-xs font-mono border"
                          style={{
                            color: agent.color,
                            borderColor: `${agent.color}30`,
                            backgroundColor: `${agent.color}10`,
                          }}
                        >
                          {checklist.items} items
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trustworthiness Criteria (F4 only) */}
              {agent.id === 'F4' && 'trustworthinessCriteria' in agent && agent.trustworthinessCriteria && (
                <div className="mb-6 relative z-10">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-stellar-faint mb-3">
                    {locale === 'ko' ? '신뢰성 기준 (양적 vs 질적)' : 'Trustworthiness Criteria (Quant vs Qual)'}
                  </h4>
                  <div className="grid gap-2">
                    {agent.trustworthinessCriteria.map((criterion, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-void-deep/50 border border-stellar-faint/10"
                      >
                        <div className="font-mono font-bold text-stellar-core">{criterion.criterion}</div>
                        <div className="flex gap-4 text-xs">
                          <div className="text-stellar-dim">
                            <span className="text-stellar-faint">Quant:</span> {criterion.quant}
                          </div>
                          <div className="text-stellar-dim">
                            <span className="text-stellar-faint">Qual:</span> {criterion.qual}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
              style={{ backgroundColor: 'rgba(231, 76, 60, 0.15)' }}
            >
              <AlertCircle className="h-5 w-5" style={{ color: '#e74c3c' }} />
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
                    color: cp.level === 'RECOMMENDED' ? '#f39c12' : '#e67e22',
                    borderColor: cp.level === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.3)' : 'rgba(230, 126, 34, 0.3)',
                    backgroundColor: cp.level === 'RECOMMENDED' ? 'rgba(243, 156, 18, 0.1)' : 'rgba(230, 126, 34, 0.1)',
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
                        color: '#44ffaa',
                        borderColor: 'rgba(68, 255, 170, 0.3)',
                        backgroundColor: 'rgba(68, 255, 170, 0.1)',
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

        {/* Paradigm Adaptation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="void-heading-2 text-stellar-core mb-4">{t.paradigmTitle}</h2>
          <p className="text-body-lg text-stellar-dim mb-6">{t.paradigmDescription}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {t.paradigmAdaptation.map((paradigm, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-void-elevated border border-stellar-faint/10"
              >
                <h3 className="font-mono font-bold text-stellar-core mb-2">{paradigm.paradigm}</h3>
                <div
                  className="inline-block px-3 py-1 font-mono text-xs border mb-4"
                  style={{
                    color: '#e67e22',
                    borderColor: 'rgba(230, 126, 34, 0.3)',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                  }}
                >
                  {paradigm.focus}
                </div>
                <div className="space-y-2 mb-4">
                  {paradigm.criteria.map((criterion, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-stellar-dim">
                      <span className="text-stellar-core mt-1">•</span>
                      <span>{criterion}</span>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-stellar-faint">
                  <span className="uppercase tracking-wider">{locale === 'ko' ? '도구:' : 'Tools:'}</span>{' '}
                  {paradigm.tools}
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
                {step.checkpoint !== 'None' && step.checkpoint !== '없음' && (
                  <div
                    className="px-3 py-1 text-xs font-mono border whitespace-nowrap"
                    style={{
                      color: '#e74c3c',
                      borderColor: 'rgba(231, 76, 60, 0.3)',
                      backgroundColor: 'rgba(231, 76, 60, 0.1)',
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
              background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.15) 0%, rgba(68, 255, 170, 0.15) 100%)',
              borderColor: 'rgba(231, 76, 60, 0.3)',
            }}
          >
            <h2 className="void-heading-2 text-stellar-core mb-2">{t.ctaTitle}</h2>
            <p className="text-body text-stellar-dim mb-6">{t.ctaDescription}</p>
            <Link
              href={`/${locale}/docs/agents/communication`}
              className="void-btn void-btn-accent inline-flex items-center gap-2"
            >
              {t.ctaButton}
              <ShieldCheck className="h-5 w-5" />
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
