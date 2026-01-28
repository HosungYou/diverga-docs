'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';

interface HistoryItem {
  type: 'input' | 'output' | 'error' | 'checkpoint';
  content: string;
}

const DEMO_COMMANDS: Record<string, { en: string; ko: string }> = {
  'help': {
    en: `
DIVERGA CLI v6.0 - Available Commands

  diverga init              Initialize new research project
  diverga agents            List all available agents
  diverga run <agent>       Execute specific agent
  diverga status            Show project status
  diverga tscore <topic>    Display T-Score distribution
  diverga checkpoint        List pending checkpoints
  clear                     Clear terminal

For more info: https://diverga.dev/docs
`,
    ko: `
DIVERGA CLI v6.0 - 사용 가능한 명령어

  diverga init              새 연구 프로젝트 초기화
  diverga agents            사용 가능한 에이전트 목록
  diverga run <agent>       특정 에이전트 실행
  diverga status            프로젝트 상태 확인
  diverga tscore <topic>    T-Score 분포 표시
  diverga checkpoint        대기 중인 체크포인트 목록
  clear                     터미널 지우기

자세한 정보: https://diverga.dev/docs
`,
  },
  'diverga init': {
    en: `
Initializing Diverga project...

✓ Created config.yaml
✓ Initialized agent registry (27 agents ready)
✓ Set up research context
✓ Configured VS methodology (FULL mode)

Project initialized successfully.
Run 'diverga agents' to see available agents.
`,
    ko: `
Diverga 프로젝트 초기화 중...

✓ config.yaml 생성됨
✓ 에이전트 레지스트리 초기화됨 (27개 에이전트 준비)
✓ 연구 맥락 설정됨
✓ VS 방법론 구성됨 (FULL 모드)

프로젝트가 성공적으로 초기화되었습니다.
'diverga agents'를 실행하여 사용 가능한 에이전트를 확인하세요.
`,
  },
  'diverga agents': {
    en: `
┌─────────────────────────────────────────────────────────────┐
│                    DIVERGA AGENT REGISTRY                   │
├──────────┬──────────────────────┬───────────┬──────────────┤
│ Category │ Agent                │ T-Score   │ Status       │
├──────────┼──────────────────────┼───────────┼──────────────┤
│ A        │ Research Question    │ T-0.35    │ ● Ready      │
│ A        │ Theoretical Frame    │ T-0.42    │ ● Ready      │
│ A        │ Devil's Advocate     │ T-0.28    │ ● Ready      │
│ B        │ Literature Scout     │ T-0.45    │ ● Ready      │
│ B        │ Evidence Appraiser   │ T-0.38    │ ● Ready      │
│ C        │ Quant Design         │ T-0.40    │ ● Ready      │
│ C        │ Qual Design          │ T-0.32    │ ● Ready      │
│ ...      │ ...                  │ ...       │ ...          │
└──────────┴──────────────────────┴───────────┴──────────────┘

27 agents ready. Use 'diverga run <agent-id>' to execute.
`,
    ko: `
┌─────────────────────────────────────────────────────────────┐
│                    DIVERGA 에이전트 레지스트리                │
├──────────┬──────────────────────┬───────────┬──────────────┤
│ 카테고리  │ 에이전트              │ T-Score   │ 상태         │
├──────────┼──────────────────────┼───────────┼──────────────┤
│ A        │ 연구 질문 설계         │ T-0.35    │ ● 준비       │
│ A        │ 이론적 프레임워크      │ T-0.42    │ ● 준비       │
│ A        │ 악마의 변호인          │ T-0.28    │ ● 준비       │
│ B        │ 문헌 탐색             │ T-0.45    │ ● 준비       │
│ B        │ 근거 평가             │ T-0.38    │ ● 준비       │
│ C        │ 양적 설계             │ T-0.40    │ ● 준비       │
│ C        │ 질적 설계             │ T-0.32    │ ● 준비       │
│ ...      │ ...                  │ ...       │ ...          │
└──────────┴──────────────────────┴───────────┴──────────────┘

27개 에이전트 준비됨. 'diverga run <agent-id>'로 실행하세요.
`,
  },
  'diverga run a2': {
    en: `
[A2-TheoreticalFramework] Starting execution...

● CHECKPOINT: CP_THEORY_SELECTION
  This is a REQUIRED checkpoint. Agent cannot proceed without approval.

Analyzing theoretical frameworks for AI adoption study...
├─ Scanning literature corpus
├─ Identifying key theories
└─ Applying VS methodology (T-Score analysis)

[Modal Awareness] TAM (T=0.92), UTAUT (T=0.85) are predictable choices.

Presenting alternatives across typicality spectrum:

  ○ Direction A (T=0.38): Self-Determination Theory × TAM
    Rationale: Intrinsic motivation explains sustained adoption

  ○ Direction B (T=0.42): Activity Theory Framework
    Rationale: Captures tool-mediated learning dynamics

  ○ Direction C (T=0.55): Social Cognitive Theory
    Rationale: Balances individual and environmental factors

⚠️ WAITING FOR HUMAN DECISION
   Which direction would you like to explore?
   Reply with: A, B, or C
`,
    ko: `
[A2-이론적프레임워크] 실행 시작...

● 체크포인트: CP_THEORY_SELECTION
  필수 체크포인트입니다. 승인 없이 진행할 수 없습니다.

AI 도입 연구를 위한 이론적 프레임워크 분석 중...
├─ 문헌 코퍼스 스캔 중
├─ 핵심 이론 식별 중
└─ VS 방법론 적용 중 (T-Score 분석)

[모달 인식] TAM (T=0.92), UTAUT (T=0.85)는 예측 가능한 선택입니다.

전형성 스펙트럼 전반에 걸친 대안 제시:

  ○ 방향 A (T=0.38): 자기결정이론 × TAM
    근거: 내재적 동기가 지속적 도입을 설명함

  ○ 방향 B (T=0.42): 활동이론 프레임워크
    근거: 도구 매개 학습 역학을 포착함

  ○ 방향 C (T=0.55): 사회인지이론
    근거: 개인과 환경 요인의 균형

⚠️ 인간의 결정 대기 중
   어떤 방향을 탐구하시겠습니까?
   답변: A, B, 또는 C
`,
  },
};

interface InteractiveCLIProps {
  height?: number;
  initialCommands?: string[];
}

export function InteractiveCLI({ height = 400, initialCommands = [] }: InteractiveCLIProps) {
  const locale = useLocale();
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'output',
      content: locale === 'ko'
        ? 'DIVERGA CLI v6.0 - "help"를 입력하여 사용 가능한 명령어를 확인하세요\n'
        : 'DIVERGA CLI v6.0 - Type "help" for available commands\n'
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Run initial commands
  useEffect(() => {
    if (initialCommands.length > 0) {
      initialCommands.forEach((cmd, i) => {
        setTimeout(() => handleCommand(cmd), i * 2000);
      });
    }
  }, []);

  const typeOutput = useCallback(async (output: string) => {
    setIsTyping(true);
    const lines = output.split('\n');

    for (let i = 0; i < lines.length; i++) {
      await new Promise((r) => setTimeout(r, 20 + Math.random() * 15));
      setHistory((prev) => {
        const newHistory = [...prev];
        if (newHistory[newHistory.length - 1]?.type === 'output') {
          newHistory[newHistory.length - 1] = {
            type: 'output',
            content: lines.slice(0, i + 1).join('\n'),
          };
        }
        return newHistory;
      });
    }
    setIsTyping(false);
  }, []);

  const handleCommand = useCallback(async (cmd: string) => {
    const command = cmd.trim().toLowerCase();

    // Add to history
    setHistory((prev) => [...prev, { type: 'input', content: `$ ${cmd}` }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (command === 'clear') {
      setHistory([{
        type: 'output',
        content: locale === 'ko'
          ? 'DIVERGA CLI v6.0\n'
          : 'DIVERGA CLI v6.0\n'
      }]);
      return;
    }

    const response = DEMO_COMMANDS[command];
    if (response) {
      setHistory((prev) => [...prev, { type: 'output', content: '' }]);
      await typeOutput(response[locale as 'en' | 'ko']);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'error',
          content: locale === 'ko'
            ? `명령어를 찾을 수 없습니다: ${command}\n"help"를 입력하여 사용 가능한 명령어를 확인하세요.`
            : `Command not found: ${command}\nType "help" for available commands.`
        },
      ]);
    }
  }, [locale, typeOutput]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div
      className="void-terminal overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="void-terminal-header">
        <div className="void-terminal-dot void-terminal-dot-red" />
        <div className="void-terminal-dot void-terminal-dot-yellow" />
        <div className="void-terminal-dot void-terminal-dot-green" />
        <span className="ml-4 font-mono text-micro text-stellar-faint">
          diverga-cli — {locale === 'ko' ? '터미널' : 'terminal'}
        </span>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="void-terminal-content void-scrollbar"
        style={{ height }}
      >
        <AnimatePresence initial={false}>
          {history.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              className={`whitespace-pre-wrap font-mono text-sm ${
                item.type === 'input'
                  ? 'text-tscore-divergent'
                  : item.type === 'error'
                  ? 'text-tscore-modal'
                  : item.type === 'checkpoint'
                  ? 'text-tscore-balanced'
                  : 'text-stellar-dim'
              }`}
            >
              {item.content}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input line */}
        <form onSubmit={handleSubmit} className="mt-2 flex items-center">
          <span className="void-terminal-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            className="ml-2 flex-1 bg-transparent font-mono text-sm text-stellar-core outline-none"
            placeholder={isTyping ? '' : (locale === 'ko' ? '명령어 입력...' : 'Enter command...')}
            autoFocus
          />
          <span className="void-terminal-cursor" />
        </form>
      </div>
    </div>
  );
}
