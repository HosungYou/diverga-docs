"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const demos = [
  {
    id: 'theory-selection',
    title: { en: 'Theory Selection', ko: '이론 선택' },
    input: { en: 'Help me choose a theoretical framework for AI adoption in education', ko: 'AI 교육 채택을 위한 이론적 프레임워크를 선택해주세요' },
    agent: 'A2',
    output: {
      en: `🔴 CHECKPOINT: CP_THEORY_SELECTION

Let me analyze options across the typicality spectrum:

**[Modal Awareness]**
TAM (T=0.92) and UTAUT (T=0.85) are predictable choices that most researchers default to.

**Recommended Alternatives:**

• **Direction A** (T≈0.6): Self-Determination Theory × TAM Integration
  - Adds intrinsic motivation dimensions
  - Addresses "why" not just "will they"

• **Direction B** (T≈0.4): Cognitive Load Theory + Adaptive Ecosystem ⭐
  - Novel for AI adoption context
  - Explains learning-adoption interaction

• **Direction C** (T≈0.2): Neuroplasticity-Based Technology Learning
  - Highly innovative, requires strong justification
  - Opens new research directions

Which direction would you like to proceed?`,
      ko: `🔴 체크포인트: CP_THEORY_SELECTION

전형성 스펙트럼을 가로지르는 옵션을 분석하겠습니다:

**[모달 인식]**
TAM (T=0.92)과 UTAUT (T=0.85)는 대부분의 연구자가 기본으로 선택하는 예측 가능한 선택입니다.

**권장 대안:**

• **방향 A** (T≈0.6): 자기결정이론 × TAM 통합
  - 내재적 동기 차원 추가
  - "할 것인가" 뿐만 아니라 "왜"를 다룸

• **방향 B** (T≈0.4): 인지부하이론 + 적응적 생태계 ⭐
  - AI 채택 맥락에서 새로움
  - 학습-채택 상호작용 설명

• **방향 C** (T≈0.2): 신경가소성 기반 기술 학습
  - 매우 혁신적, 강력한 정당화 필요
  - 새로운 연구 방향 개척

어떤 방향으로 진행하시겠습니까?`
    }
  },
  {
    id: 'meta-analysis',
    title: { en: 'Meta-Analysis Setup', ko: '메타분석 설정' },
    input: { en: 'I want to conduct a meta-analysis on AI-assisted learning', ko: 'AI 지원 학습에 대한 메타분석을 수행하고 싶습니다' },
    agent: 'C5',
    output: {
      en: `🎛️ META-ANALYSIS MASTER Activated

**Paradigm Detected:** Quantitative Meta-Analysis
**Pipeline Initialized:** PRISMA 2020 Compliant

**Multi-Gate Validation System Ready:**
- Gate 1: Extraction Validation ⏳
- Gate 2: ES Hierarchy Classification ⏳
- Gate 3: Hedges' g Calculation ⏳
- Gate 4: Independence Validation ⏳

**Recommended Next Steps:**
1. Define inclusion/exclusion criteria
2. Select databases (Semantic Scholar, OpenAlex, arXiv recommended)
3. Design search query strategy

🔴 CHECKPOINT: CP_META_GATE

Before proceeding, I need your approval on:
- Research question scope
- Effect size of interest (learning outcomes?)
- Timeframe for included studies

Shall we refine the research question first?`,
      ko: `🎛️ 메타분석 마스터 활성화됨

**감지된 패러다임:** 양적 메타분석
**파이프라인 초기화:** PRISMA 2020 준수

**다중 게이트 검증 시스템 준비:**
- 게이트 1: 추출 검증 ⏳
- 게이트 2: ES 계층 분류 ⏳
- 게이트 3: Hedges' g 계산 ⏳
- 게이트 4: 독립성 검증 ⏳

**권장 다음 단계:**
1. 포함/제외 기준 정의
2. 데이터베이스 선택 (Semantic Scholar, OpenAlex, arXiv 권장)
3. 검색 쿼리 전략 설계

🔴 체크포인트: CP_META_GATE

진행하기 전에 다음에 대한 승인이 필요합니다:
- 연구 질문 범위
- 관심 효과크기 (학습 성과?)
- 포함 연구의 시간 범위

먼저 연구 질문을 정제할까요?`
    }
  },
  {
    id: 'qualitative-design',
    title: { en: 'Qualitative Design', ko: '질적 연구 설계' },
    input: { en: 'I want to study the lived experiences of teachers using AI tools', ko: '교사들의 AI 도구 사용 체험을 연구하고 싶습니다' },
    agent: 'C2',
    output: {
      en: `🎭 QUALITATIVE DESIGN CONSULTANT Activated

**Paradigm Detected:** Qualitative (Phenomenological indicators)
**Key Phrase:** "lived experiences" → Phenomenology likely fit

**VS Analysis of Methodological Options:**

• **Direction A** (T≈0.7): Descriptive Phenomenology (Husserl)
  - Classic approach, well-documented
  - Focus on essence of experience

• **Direction B** (T≈0.5): Interpretive Phenomenological Analysis (IPA) ⭐
  - Balances description and interpretation
  - Growing acceptance in education research

• **Direction C** (T≈0.3): Post-Intentional Phenomenology
  - More philosophical depth
  - Requires strong methodological justification

🔴 CHECKPOINT: CP_METHODOLOGY_APPROVAL

Before we proceed, I recommend consulting A5-ParadigmWorldviewAdvisor to ensure your philosophical assumptions align with your chosen method.

Which direction interests you?`,
      ko: `🎭 질적 연구 설계 컨설턴트 활성화됨

**감지된 패러다임:** 질적 연구 (현상학적 지표)
**핵심 문구:** "체험" → 현상학적 접근 적합

**방법론적 옵션의 VS 분석:**

• **방향 A** (T≈0.7): 기술적 현상학 (후설)
  - 고전적 접근, 잘 문서화됨
  - 경험의 본질에 초점

• **방향 B** (T≈0.5): 해석적 현상학적 분석 (IPA) ⭐
  - 기술과 해석의 균형
  - 교육 연구에서 수용 증가

• **방향 C** (T≈0.3): 후기의도적 현상학
  - 더 깊은 철학적 깊이
  - 강력한 방법론적 정당화 필요

🔴 체크포인트: CP_METHODOLOGY_APPROVAL

진행하기 전에, 철학적 가정이 선택한 방법과 일치하는지 확인하기 위해 A5-패러다임세계관자문자와 상담하는 것을 권장합니다.

어떤 방향이 관심 있으신가요?`
    }
  },
];

export default function PlaygroundPage() {
  const locale = useLocale() as 'en' | 'ko';
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(false);
    setTimeout(() => setShowOutput(true), 500);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-h1 font-bold text-[var(--foreground)]"
          >
            {locale === 'ko' ? '체험하기' : 'Playground'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-[var(--muted-foreground)]"
          >
            {locale === 'ko'
              ? '미리 준비된 예시로 Diverga 에이전트 체험하기'
              : 'Experience Diverga agents with pre-built examples'}
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Demo selector */}
          <div className="lg:col-span-1">
            <h2 className="text-sm font-semibold text-[var(--muted-foreground)] uppercase tracking-wide mb-4">
              {locale === 'ko' ? '예시 선택' : 'Select Demo'}
            </h2>
            <div className="space-y-2">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => {
                    setSelectedDemo(demo);
                    setShowOutput(false);
                  }}
                  className={cn(
                    "w-full text-left rounded-xl border p-4 transition-all",
                    selectedDemo.id === demo.id
                      ? "border-diverga-500 bg-diverga-50"
                      : "border-[var(--border)] bg-[var(--card)] hover:border-diverga-300"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[var(--foreground)]">
                      {demo.title[locale]}
                    </span>
                    <span className="text-xs font-mono text-[var(--muted-foreground)]">
                      {demo.agent}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Demo display */}
          <div className="lg:col-span-2 space-y-4">
            {/* Input */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[var(--muted-foreground)]">
                  {locale === 'ko' ? '입력' : 'Input'}
                </span>
                <span className="text-xs font-mono text-diverga-600 bg-diverga-100 px-2 py-1 rounded">
                  {selectedDemo.agent}
                </span>
              </div>
              <p className="text-[var(--foreground)]">
                {selectedDemo.input[locale]}
              </p>
            </div>

            {/* Run button */}
            <button
              onClick={handleRun}
              className="inline-flex items-center gap-2 rounded-xl bg-diverga-500 px-6 py-3 font-semibold text-white hover:bg-diverga-600 transition-colors"
            >
              <Play className="h-5 w-5" />
              {locale === 'ko' ? '실행' : 'Run Demo'}
            </button>

            {/* Output */}
            {showOutput && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-700">
                    {locale === 'ko' ? '응답' : 'Response'}
                  </span>
                </div>
                <pre className="whitespace-pre-wrap text-sm text-emerald-800 font-mono">
                  {selectedDemo.output[locale]}
                </pre>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
