"use client";

import { useState, useEffect, useCallback } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2, XCircle, HelpCircle, Sparkles, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

// ==================== EXISTING DEMOS DATA ====================

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

// ==================== CHECKPOINT DEMO DATA ====================

type CheckpointState = 'intro' | 'context' | 'analysis' | 'checkpoint' | 'decision-made' | 'explanation';
type DecisionType = 'approve' | 'reject' | 'explain' | null;

const checkpointContent = {
  intro: {
    en: {
      title: 'Experience Human-AI Collaboration',
      description: 'See how Diverga keeps you in control at critical research decisions. Click "Start Simulation" to begin.',
      buttonText: 'Start Simulation',
    },
    ko: {
      title: '인간-AI 협업 체험하기',
      description: 'Diverga가 중요한 연구 결정에서 어떻게 당신을 통제권에 두는지 확인하세요. "시뮬레이션 시작"을 클릭하여 시작하세요.',
      buttonText: '시뮬레이션 시작',
    },
  },
  context: {
    en: {
      userMessage: 'I want to study how AI chatbots affect language learning outcomes in higher education.',
      systemNote: 'Research context detected. Analyzing your request...',
    },
    ko: {
      userMessage: '고등교육에서 AI 챗봇이 언어 학습 성과에 어떤 영향을 미치는지 연구하고 싶습니다.',
      systemNote: '연구 맥락이 감지되었습니다. 요청을 분석 중...',
    },
  },
  analysis: {
    en: {
      agentId: 'A2-TheoryFrameworkAdvisor',
      lines: [
        '> Analyzing research question...',
        '> Detecting paradigm: Quantitative',
        '> Scanning theory database...',
        '> Calculating typicality scores...',
        '> Generating divergent options...',
      ],
    },
    ko: {
      agentId: 'A2-이론프레임워크자문자',
      lines: [
        '> 연구 질문 분석 중...',
        '> 패러다임 감지: 양적 연구',
        '> 이론 데이터베이스 스캔 중...',
        '> 전형성 점수 계산 중...',
        '> 발산적 옵션 생성 중...',
      ],
    },
  },
  checkpoint: {
    en: {
      title: 'CHECKPOINT: CP_THEORY_SELECTION',
      subtitle: 'Critical Decision Point',
      modalWarning: '[Modal Awareness] TAM (T=0.92) and UTAUT (T=0.85) are overused in this domain.',
      options: [
        {
          id: 'A',
          name: 'Self-Determination Theory + TAM',
          tscore: 0.6,
          category: 'Established',
          description: 'Adds intrinsic motivation dimensions',
          color: 'emerald',
        },
        {
          id: 'B',
          name: 'Cognitive Load Theory + Adaptive Ecosystem',
          tscore: 0.4,
          category: 'Emerging',
          recommended: true,
          description: 'Novel for AI-learning context',
          color: 'teal',
        },
        {
          id: 'C',
          name: 'Neuroplasticity-Based Learning',
          tscore: 0.2,
          category: 'Experimental',
          description: 'Highly innovative, opens new directions',
          color: 'purple',
        },
      ],
      question: 'Which theoretical direction would you like to proceed with?',
      approveText: 'Approve Direction B',
      rejectText: 'Reject All',
      explainText: 'Explain More',
    },
    ko: {
      title: '체크포인트: CP_THEORY_SELECTION',
      subtitle: '중요 결정 지점',
      modalWarning: '[모달 인식] TAM (T=0.92)과 UTAUT (T=0.85)는 이 분야에서 과다 사용됩니다.',
      options: [
        {
          id: 'A',
          name: '자기결정이론 + TAM',
          tscore: 0.6,
          category: '확립됨',
          description: '내재적 동기 차원 추가',
          color: 'emerald',
        },
        {
          id: 'B',
          name: '인지부하이론 + 적응적 생태계',
          tscore: 0.4,
          category: '신흥',
          recommended: true,
          description: 'AI-학습 맥락에서 새로움',
          color: 'teal',
        },
        {
          id: 'C',
          name: '신경가소성 기반 학습',
          tscore: 0.2,
          category: '실험적',
          description: '매우 혁신적, 새로운 방향 개척',
          color: 'purple',
        },
      ],
      question: '어떤 이론적 방향으로 진행하시겠습니까?',
      approveText: '방향 B 승인',
      rejectText: '모두 거부',
      explainText: '더 설명',
    },
  },
  responses: {
    approve: {
      en: {
        title: 'Decision Confirmed',
        message: 'Excellent choice! Direction B: Cognitive Load Theory + Adaptive Ecosystem has been selected.',
        detail: 'This framework will help explain how AI chatbots can reduce extraneous cognitive load while adapting to learner needs. I will now proceed to operationalize the constructs and suggest measurement instruments.',
        nextStep: 'Next: Variable operationalization with Agent A3-VariableDesigner',
      },
      ko: {
        title: '결정 확인됨',
        message: '훌륭한 선택입니다! 방향 B: 인지부하이론 + 적응적 생태계가 선택되었습니다.',
        detail: '이 프레임워크는 AI 챗봇이 학습자 필요에 적응하면서 외재적 인지 부하를 줄일 수 있는 방법을 설명하는 데 도움이 됩니다. 이제 구성개념을 조작화하고 측정 도구를 제안하겠습니다.',
        nextStep: '다음: 에이전트 A3-변수설계자와 변수 조작화',
      },
    },
    reject: {
      en: {
        title: 'Options Rejected',
        message: 'Understood. You have rejected all suggested directions.',
        detail: 'Let me explore alternative theoretical frameworks. Would you like me to:\n\n1. Search for theories from adjacent disciplines (psychology, neuroscience)?\n2. Analyze recent publications for emerging frameworks?\n3. Consider a multi-theory integration approach?',
        nextStep: 'Awaiting your guidance for alternative exploration',
      },
      ko: {
        title: '옵션 거부됨',
        message: '이해했습니다. 제안된 모든 방향을 거부하셨습니다.',
        detail: '대안적 이론 프레임워크를 탐색하겠습니다. 다음 중 원하시는 것을 선택해주세요:\n\n1. 인접 학문(심리학, 신경과학)에서 이론 검색?\n2. 최근 출판물에서 신흥 프레임워크 분석?\n3. 다중 이론 통합 접근 고려?',
        nextStep: '대안 탐색을 위한 안내를 기다리고 있습니다',
      },
    },
    explain: {
      en: {
        title: 'Detailed Explanation',
        message: 'Let me provide more context on these theoretical options.',
        detail: '**Direction B: Cognitive Load Theory + Adaptive Ecosystem**\n\nCognitive Load Theory (Sweller, 1988) explains how learning is affected by the demands on working memory. Combined with Adaptive Ecosystem theory, this framework:\n\n• Explains WHY some AI chatbots fail (excessive intrinsic load)\n• Predicts WHEN adaptation helps (reducing extraneous load)\n• Measures HOW learning improves (germane load optimization)\n\nT-Score of 0.4 means this approach is novel enough to contribute new knowledge while having sufficient theoretical grounding for publication.',
        nextStep: 'Ready to proceed when you make your decision',
      },
      ko: {
        title: '상세 설명',
        message: '이론적 옵션에 대한 더 많은 맥락을 제공하겠습니다.',
        detail: '**방향 B: 인지부하이론 + 적응적 생태계**\n\n인지부하이론(Sweller, 1988)은 작업 기억에 대한 요구가 학습에 어떤 영향을 미치는지 설명합니다. 적응적 생태계 이론과 결합하면 이 프레임워크는:\n\n• 일부 AI 챗봇이 왜 실패하는지 설명 (과도한 내재적 부하)\n• 적응이 언제 도움이 되는지 예측 (외재적 부하 감소)\n• 학습이 어떻게 향상되는지 측정 (관련 부하 최적화)\n\nT-점수 0.4는 이 접근법이 출판을 위한 충분한 이론적 기반을 가지면서도 새로운 지식에 기여할 만큼 충분히 새롭다는 것을 의미합니다.',
        nextStep: '결정을 내리시면 진행할 준비가 되어 있습니다',
      },
    },
  },
  educational: {
    en: {
      checkpointExplainer: 'This checkpoint ensures YOU make the critical theoretical decisions, not the AI.',
      humanCentered: 'Human-Centered AI: You remain in control of your research direction.',
      divergentThinking: 'The T-Score helps you understand how conventional or innovative each option is.',
    },
    ko: {
      checkpointExplainer: '이 체크포인트는 AI가 아닌 당신이 중요한 이론적 결정을 내리도록 보장합니다.',
      humanCentered: '인간 중심 AI: 연구 방향에 대한 통제권은 당신에게 있습니다.',
      divergentThinking: 'T-점수는 각 옵션이 얼마나 전통적인지 또는 혁신적인지 이해하는 데 도움이 됩니다.',
    },
  },
};

// ==================== TYPEWRITER HOOK ====================

function useTypewriter(text: string, speed: number = 30, startTyping: boolean = true) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!startTyping) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, startTyping]);

  return { displayedText, isComplete };
}

// ==================== CONFETTI COMPONENT ====================

function Confetti({ show }: { show: boolean }) {
  if (!show) return null;

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.5,
    duration: 1.5 + Math.random() * 1,
    color: ['#6366f1', '#14b8a6', '#f59e0b', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: `${piece.x}vw`, opacity: 1, rotate: 0 }}
          animate={{
            y: '100vh',
            opacity: 0,
            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeOut',
          }}
          className="absolute w-3 h-3 rounded-sm"
          style={{ backgroundColor: piece.color }}
        />
      ))}
    </div>
  );
}

// ==================== CHECKPOINT DEMO COMPONENT ====================

function CheckpointDemo({ locale }: { locale: 'en' | 'ko' }) {
  const [state, setState] = useState<CheckpointState>('intro');
  const [decision, setDecision] = useState<DecisionType>(null);
  const [analysisLine, setAnalysisLine] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const content = checkpointContent;
  const analysisLines = content.analysis[locale].lines;

  // Reset function
  const resetDemo = useCallback(() => {
    setState('intro');
    setDecision(null);
    setAnalysisLine(0);
    setShowConfetti(false);
  }, []);

  // Analysis line progression
  useEffect(() => {
    if (state === 'analysis' && analysisLine < analysisLines.length) {
      const timer = setTimeout(() => {
        setAnalysisLine((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (state === 'analysis' && analysisLine >= analysisLines.length) {
      const timer = setTimeout(() => setState('checkpoint'), 800);
      return () => clearTimeout(timer);
    }
  }, [state, analysisLine, analysisLines.length]);

  // Handle decision
  const handleDecision = (type: DecisionType) => {
    setDecision(type);
    if (type === 'approve') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    if (type === 'explain') {
      setState('explanation');
    } else {
      setState('decision-made');
    }
  };

  // Proceed from intro
  const startSimulation = () => {
    setState('context');
    setTimeout(() => setState('analysis'), 2000);
  };

  const getTScoreColor = (tscore: number) => {
    if (tscore >= 0.7) return 'text-orange-500 bg-orange-100 dark:bg-orange-900/30';
    if (tscore >= 0.4) return 'text-blue-500 bg-blue-100 dark:bg-blue-900/30';
    if (tscore >= 0.2) return 'text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30';
    return 'text-purple-500 bg-purple-100 dark:bg-purple-900/30';
  };

  return (
    <div className="relative">
      <Confetti show={showConfetti} />

      {/* Main Demo Container */}
      <div className="rounded-2xl border border-[var(--border)] bg-gray-900 overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-4 text-xs font-mono text-gray-400">
            diverga-research-assistant
          </span>
          {state !== 'intro' && (
            <button
              onClick={resetDemo}
              className="ml-auto flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
              aria-label={locale === 'ko' ? '재시작' : 'Restart'}
            >
              <RotateCcw className="h-3 w-3" />
              {locale === 'ko' ? '재시작' : 'Restart'}
            </button>
          )}
        </div>

        {/* Content Area */}
        <div className="p-6 min-h-[480px]">
          <AnimatePresence mode="wait">
            {/* INTRO STATE */}
            {state === 'intro' && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center justify-center h-[420px] text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6 p-4 rounded-full bg-diverga-500/20"
                >
                  <Sparkles className="h-12 w-12 text-diverga-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {content.intro[locale].title}
                </h3>
                <p className="text-gray-400 max-w-md mb-8">
                  {content.intro[locale].description}
                </p>
                <button
                  onClick={startSimulation}
                  className="inline-flex items-center gap-2 rounded-xl bg-diverga-500 px-6 py-3 font-semibold text-white hover:bg-diverga-600 transition-all hover:scale-105"
                >
                  <Play className="h-5 w-5" />
                  {content.intro[locale].buttonText}
                </button>
              </motion.div>
            )}

            {/* CONTEXT STATE */}
            {state === 'context' && (
              <motion.div
                key="context"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* User Message */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                    U
                  </div>
                  <div className="bg-gray-800 rounded-xl px-4 py-3 max-w-lg">
                    <p className="text-gray-200">{content.context[locale].userMessage}</p>
                  </div>
                </div>

                {/* System Processing */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-sm font-mono">{content.context[locale].systemNote}</span>
                </motion.div>
              </motion.div>
            )}

            {/* ANALYSIS STATE */}
            {state === 'analysis' && (
              <motion.div
                key="analysis"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Agent Badge */}
                <div className="inline-flex items-center gap-2 bg-diverga-500/20 text-diverga-400 px-3 py-1.5 rounded-lg">
                  <div className="h-2 w-2 rounded-full bg-diverga-400 animate-pulse" />
                  <span className="text-sm font-mono">{content.analysis[locale].agentId}</span>
                </div>

                {/* Analysis Lines */}
                <div className="font-mono text-sm space-y-2">
                  {analysisLines.slice(0, analysisLine).map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-gray-400"
                    >
                      {line}
                    </motion.div>
                  ))}
                  {analysisLine < analysisLines.length && (
                    <span className="inline-block w-2 h-4 bg-teal-400 animate-pulse" />
                  )}
                </div>
              </motion.div>
            )}

            {/* CHECKPOINT STATE */}
            {state === 'checkpoint' && (
              <motion.div
                key="checkpoint"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-6"
              >
                {/* Checkpoint Header */}
                <motion.div
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(239, 68, 68, 0.4)',
                        '0 0 0 20px rgba(239, 68, 68, 0)',
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/50 px-4 py-2 rounded-xl mb-4"
                  >
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono font-bold text-red-400">
                      {content.checkpoint[locale].title}
                    </span>
                  </motion.div>
                  <p className="text-gray-400 text-sm">{content.checkpoint[locale].subtitle}</p>
                </motion.div>

                {/* Modal Warning */}
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-3">
                  <p className="text-orange-400 text-sm font-mono">
                    {content.checkpoint[locale].modalWarning}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {content.checkpoint[locale].options.map((option, i) => (
                    <motion.div
                      key={option.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className={cn(
                        "relative p-4 rounded-xl border transition-all",
                        option.recommended
                          ? "border-teal-500/50 bg-teal-500/10"
                          : "border-gray-700 bg-gray-800/50"
                      )}
                    >
                      {option.recommended && (
                        <span className="absolute -top-2 right-3 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {locale === 'ko' ? '추천' : 'Recommended'}
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg font-bold text-white">
                              {locale === 'ko' ? '방향' : 'Direction'} {option.id}:
                            </span>
                            <span className="text-gray-300">{option.name}</span>
                          </div>
                          <p className="text-gray-500 text-sm">{option.description}</p>
                        </div>
                        <div className={cn(
                          "flex-shrink-0 px-2 py-1 rounded-lg text-xs font-mono",
                          getTScoreColor(option.tscore)
                        )}>
                          T={option.tscore.toFixed(1)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Question */}
                <p className="text-gray-300 text-center">
                  {content.checkpoint[locale].question}
                </p>

                {/* Decision Buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('approve')}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-semibold text-white hover:bg-emerald-600 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    {content.checkpoint[locale].approveText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('reject')}
                    className="inline-flex items-center gap-2 rounded-xl bg-red-500/20 border border-red-500/50 px-5 py-2.5 font-semibold text-red-400 hover:bg-red-500/30 transition-colors"
                  >
                    <XCircle className="h-5 w-5" />
                    {content.checkpoint[locale].rejectText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDecision('explain')}
                    className="inline-flex items-center gap-2 rounded-xl bg-gray-700 px-5 py-2.5 font-semibold text-gray-200 hover:bg-gray-600 transition-colors"
                  >
                    <HelpCircle className="h-5 w-5" />
                    {content.checkpoint[locale].explainText}
                  </motion.button>
                </div>

                {/* Educational Note */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-diverga-500/10 border border-diverga-500/30 rounded-xl p-3 text-center"
                >
                  <p className="text-diverga-400 text-sm">
                    {content.educational[locale].checkpointExplainer}
                  </p>
                </motion.div>
              </motion.div>
            )}

            {/* DECISION MADE STATE */}
            {(state === 'decision-made' || state === 'explanation') && decision && (
              <motion.div
                key="response"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Response Header */}
                <div className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-xl",
                  decision === 'approve'
                    ? "bg-emerald-500/20 border border-emerald-500/50"
                    : decision === 'reject'
                    ? "bg-red-500/20 border border-red-500/50"
                    : "bg-blue-500/20 border border-blue-500/50"
                )}>
                  {decision === 'approve' && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
                  {decision === 'reject' && <XCircle className="h-5 w-5 text-red-400" />}
                  {decision === 'explain' && <HelpCircle className="h-5 w-5 text-blue-400" />}
                  <span className={cn(
                    "font-semibold",
                    decision === 'approve' ? "text-emerald-400" :
                    decision === 'reject' ? "text-red-400" : "text-blue-400"
                  )}>
                    {content.responses[decision][locale].title}
                  </span>
                </div>

                {/* Response Content */}
                <div className="space-y-4">
                  <p className="text-white text-lg">
                    {content.responses[decision][locale].message}
                  </p>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                    <pre className="whitespace-pre-wrap text-gray-300 text-sm font-sans">
                      {content.responses[decision][locale].detail}
                    </pre>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400 text-sm">
                    <ArrowRight className="h-4 w-4" />
                    {content.responses[decision][locale].nextStep}
                  </div>
                </div>

                {/* Back to checkpoint for explanation */}
                {state === 'explanation' && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => {
                      setState('checkpoint');
                      setDecision(null);
                    }}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    {locale === 'ko' ? '체크포인트로 돌아가기' : 'Back to checkpoint'}
                  </motion.button>
                )}

                {/* Human-centered reminder */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-diverga-500/10 to-teal-500/10 border border-diverga-500/30 rounded-xl p-4"
                >
                  <p className="text-gray-300 text-sm text-center">
                    {content.educational[locale].humanCentered}
                  </p>
                </motion.div>

                {/* Restart button */}
                <div className="text-center pt-4">
                  <button
                    onClick={resetDemo}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="h-4 w-4" />
                    {locale === 'ko' ? '다시 체험하기' : 'Try Again'}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ==================== MAIN PAGE COMPONENT ====================

export default function PlaygroundPage() {
  const locale = useLocale() as 'en' | 'ko';
  const [activeTab, setActiveTab] = useState<'demos' | 'checkpoint'>('checkpoint');
  const [selectedDemo, setSelectedDemo] = useState(demos[0]);
  const [showOutput, setShowOutput] = useState(false);

  const handleRun = () => {
    setShowOutput(false);
    setTimeout(() => setShowOutput(true), 500);
  };

  const tabs = [
    {
      id: 'checkpoint' as const,
      label: { en: 'Checkpoint Demo', ko: '체크포인트 데모' },
      description: { en: 'Interactive simulation', ko: '인터랙티브 시뮬레이션' }
    },
    {
      id: 'demos' as const,
      label: { en: 'Example Outputs', ko: '예시 출력' },
      description: { en: 'Pre-built examples', ko: '미리 준비된 예시' }
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
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
              ? 'Diverga의 인간 중심 AI 연구 지원을 직접 체험해보세요'
              : 'Experience Diverga\'s human-centered AI research assistance firsthand'}
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl border border-[var(--border)] bg-[var(--card)] p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-6 py-3 rounded-lg font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-diverga-500 text-white"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                )}
              >
                <span className="block">{tab.label[locale]}</span>
                <span className="block text-xs opacity-70">{tab.description[locale]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'checkpoint' && (
            <motion.div
              key="checkpoint"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CheckpointDemo locale={locale} />
            </motion.div>
          )}

          {activeTab === 'demos' && (
            <motion.div
              key="demos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-8 lg:grid-cols-3"
            >
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
                          ? "border-diverga-500 bg-diverga-50 dark:bg-diverga-950/50"
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
                    <span className="text-xs font-mono text-diverga-600 bg-diverga-100 dark:bg-diverga-900/50 px-2 py-1 rounded">
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
                    className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        {locale === 'ko' ? '응답' : 'Response'}
                      </span>
                    </div>
                    <pre className="whitespace-pre-wrap text-sm text-emerald-800 dark:text-emerald-200 font-mono">
                      {selectedDemo.output[locale]}
                    </pre>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
