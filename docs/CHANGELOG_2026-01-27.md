# Diverga Docs 업데이트 기록 (2026-01-27)

## 사용자 피드백 및 구현 내역

### 피드백 1: T-0.42의 의미 명확화

**원본 피드백**: "Void Cartography T-0.42가 뜻하는 바가 뭐지?"

**해결 내용**:
- T-Score는 AI 출력의 "전형성(typicality)"을 0.0~1.0 스케일로 측정
- T-0.42는 "창의적 범위(Creative Range)"에 해당
- 대부분의 AI 출력은 T-0.8+ (모달/전형적)에 집중됨
- Diverga는 Long-tail (T-0.2~0.5)을 탐험하도록 설계됨

| T-Score | 분류 | 설명 |
|---------|------|------|
| 0.8-1.0 | Modal | 가장 예측 가능한 응답 |
| 0.6-0.8 | Typical | 일반적인 AI 응답 |
| 0.4-0.6 | Balanced | 균형 잡힌 접근 |
| 0.2-0.4 | Creative | 창의적 범위 (T-0.42) |
| 0.0-0.2 | Divergent | 발산적/참신한 접근 |

**구현 위치**: 랜딩 페이지 하단 배지, TScoreSpectrum 컴포넌트

---

### 피드백 2: 에이전트 수 수정 (27개 → 40개)

**원본 피드백**: "에이전트 27개는 어떤 문서를 근거로 구성되어있지? 총 40개인데?"

**조사 결과**:
- 기존 AgentNetwork는 하드코딩된 가짜 데이터 사용
- 실제 에이전트 정의: `/src/lib/data/agents.ts` (40개)

**수정된 에이전트 분포**:
| 카테고리 | 이름 | 에이전트 수 |
|----------|------|-------------|
| A | Foundation (기초 설계) | 6개 |
| B | Evidence (문헌·근거) | 5개 |
| C | Design & Meta (설계·메타) | 7개 |
| D | Data Collection (자료 수집) | 4개 |
| E | Analysis (분석) | 5개 |
| F | Quality (품질 관리) | 5개 |
| G | Communication (커뮤니케이션) | 6개 |
| H | Specialized (특수) | 2개 |
| **합계** | | **40개** |

**수정된 파일**:
- `src/components/visualization/AgentNetwork.tsx`: 실제 agents.ts에서 데이터 import
- `src/app/[locale]/page.tsx`: "27 Agents" → "40 Agents" 텍스트 수정

---

### 피드백 3: Interactive Terminal에 Groq LLM 연결

**원본 피드백**: "Interactive Terminal는 실제 무료 LLM을 이용해서 연결할 수 있는지? Groq가 걸맞을 것 같은데"

**구현 내용**:

1. **API 라우트 생성**: `/src/app/api/diverga/route.ts`
   - Groq API 연동 (llama-3.3-70b-versatile 모델)
   - 환경 변수: `GROQ_API_KEY` (Vercel에 등록 완료)
   - Demo 모드: API 키 없을 때 정적 응답 제공

2. **InteractiveCLI 업데이트**: `/src/components/cli/InteractiveCLI.tsx`
   - 실제 API 호출 기능 추가
   - 40개 에이전트 이름 매핑
   - 에이전트 컨텍스트 유지 (후속 질문 지원)

3. **지원 명령어**:
   ```bash
   help              # 도움말 표시
   agents            # 40개 에이전트 목록
   run <agent_id>    # 에이전트 실행 (예: run a1, run a6)
   ask <question>    # 질문하기
   clear             # 화면 지우기
   ```

4. **에이전트별 시스템 프롬프트**:
   - A1: Research Question Refiner (FINER/PICO/SPIDER)
   - A2: Theoretical Framework Architect (VS 방법론)
   - A3: Devil's Advocate (Reviewer 2 시뮬레이션)
   - A6: Conceptual Framework Visualizer
   - B1: Systematic Literature Scout (PRISMA)
   - C5: Meta-Analysis Master
   - G3: Peer Review Strategist

**Vercel 환경 변수 설정**: ✅ GROQ_API_KEY 등록 완료

---

### 피드백 4: A6 Conceptual Framework 예시 (Nano Banana)

**원본 피드백**: "A6-conceptual-framework-visualizer를 실제로 사용하는 예시를 보여줄 수 있는지 실제 Nanobanana를 호출해서 예시 이미지를 생성"

**구현 내용**:

1. **Nano Banana 조사**:
   - Google의 이미지 생성 API (Gemini 3 Pro Image)
   - 가격: ~$0.02/이미지 (Standard), ~$0.12/이미지 (Pro 4K)
   - 현재 API 키 없음 → 정적 SVG 시각화로 대체

2. **ConceptualFramework 컴포넌트 생성**:
   - 파일: `/src/components/visualization/ConceptualFramework.tsx`
   - 인터랙티브 SVG 개념적 프레임워크 다이어그램
   - 변수 관계 시각화 (Independent → Mediators → Dependent)
   - T-Score 표시 및 색상 코딩

3. **AI in Education 예시 데이터**:
   ```typescript
   {
     researchQuestion: "How does AI-powered adaptive tutoring influence
                        the development of metacognitive skills?",
     variables: {
       independent: ["AI Tutoring Intervention", "Personalization Level",
                     "Feedback Frequency"],
       mediators: ["Metacognitive Awareness", "Self-Monitoring",
                   "Strategy Selection"],
       dependent: ["Learning Outcomes", "Transfer Ability",
                   "Autonomous Learning"]
     },
     theoreticalFramework: "Integrated Self-Regulated Learning &
                            Cognitive Load Theory",
     tScore: 0.42
   }
   ```

4. **워크플로우 추가**:
   - 파일: `/src/lib/data/workflows.ts`
   - 새 워크플로우: `a6-ai-education`
   - URL: `/workflows/a6-ai-education`

**수정된 파일**:
- `src/components/visualization/ConceptualFramework.tsx` (신규)
- `src/components/visualization/index.ts` (export 추가)
- `src/lib/data/workflows.ts` (A6 예시 워크플로우 추가)
- `src/lib/data/types.ts` (WorkflowExample 타입 추가)
- `src/app/[locale]/workflows/[slug]/page.tsx` (A6 섹션 추가)

---

### 피드백 5: 내부 페이지 Void Cartography 디자인 적용

**원본 피드백**: "랜딩 페이지가 아닌 다른 내부 페이지는 디자인 Theme이 적용되지 않음"

**수정된 페이지** (9개):

| 페이지 | 주요 변경사항 |
|--------|--------------|
| `/agents` | Void 배경, 별빛 색상, 모션 애니메이션, 검색 UI |
| `/agents/[agentId]` | T-Score 강조, Tier 색상, 카테고리 색상 |
| `/docs` | 다크 테마, 글로우 효과, 카테고리 색상 |
| `/docs/checkpoints` | 트래픽 라이트 시각화, void-terminal 스타일 |
| `/docs/vs-methodology` | T-Score 시각화, 5단계 타임라인 |
| `/workflows` | 시각적 흐름도, 카테고리 진행 표시 |
| `/workflows/[slug]` | 진행 표시기, 터미널 프리뷰 |
| `/getting-started` | TerminalCommand 컴포넌트, 단계 표시기 |
| `/playground` | 터미널 미학, 글로우 효과 |

**공통 디자인 요소**:
- 배경: `bg-void-deep` (#050508)
- 텍스트: `text-stellar-core`, `text-stellar-bright`, `text-stellar-dim`
- 테두리: `border-stellar-faint/10`
- 카드: `void-card` 클래스
- 터미널: `void-terminal`, `void-terminal-header`
- 애니메이션: Framer Motion 사용

---

## 기술적 수정 사항

### TypeScript 오류 수정
- Framer Motion `itemVariants` 타입 오류
- `ease: [0.16, 1, 0.3, 1]` → `ease: "easeOut" as const`
- 영향 파일: `checkpoints/page.tsx`, `vs-methodology/page.tsx`

### 보안 수정
- Groq API 키 하드코딩 제거
- 환경 변수 전용으로 변경: `process.env.GROQ_API_KEY`
- Demo 모드 폴백 추가

---

## 배포 정보

- **커밋**: `614d5a1`
- **브랜치**: `main`
- **GitHub**: https://github.com/HosungYou/diverga-docs
- **Vercel**: 자동 배포 완료
- **환경 변수**: `GROQ_API_KEY` ✅ 설정 완료

---

---

## UX 개선 피드백 (Phase 2)

### 피드백 6: VoidHero T-Score 설명 강화

**원본 피드백**: "T-0.42 배지 옆에 설명 추가 필요"

**구현 내용**:
- VoidHero.tsx의 TScoreIndicator 컴포넌트 확장
- T-Score 배지 아래에 설명 텍스트 추가
- 영문: "Anti-modal yet feasible"
- 한국어: "뻔하지 않으면서도 실현 가능한 영역"
- Feature badges "27 Agents" → "40 Agents" 수정

**수정된 파일**: `src/components/home/VoidHero.tsx`

---

### 피드백 7: TScoreSpectrum 호버 정보 확장

**원본 피드백**: "T-Score Spectrum 호버 시 연구자 친화적 설명 필요"

**구현 내용**:

1. **DataPoint 인터페이스 확장**:
   ```typescript
   interface DataPoint {
     label: string;
     score: number;
     description?: string;
     strengths?: string;      // 장점
     risks?: string;          // 위험
     bestFor?: string;        // 적합한 연구
   }
   ```

2. **향상된 툴팁 정보**:
   - TAM (T-0.92): "검증이 잘 되어있고 리뷰어 수용도가 높음" / "기존 문헌과 차별화가 어려움"
   - UTAUT (T-0.78): "다양한 조절변수 설명 가능" / "복잡성이 높아 분석 어려움"
   - Activity Theory (T-0.45): "맥락적 분석에 강함" / "양적 연구에 적용 어려움"
   - ANT (T-0.28): "혁신적 관점 제공" / "높은 전문성 요구"

3. **아이콘 기반 표시**:
   - `+` 장점 (strengths)
   - `!` 위험 (risks)
   - `→` 적합한 연구 (bestFor)

**수정된 파일**: `src/components/visualization/TScoreSpectrum.tsx`

---

### 피드백 8: DivergenceAnimation 인터랙티브 개선

**원본 피드백**: "VS Methodology in Action에 호버/클릭/순차 애니메이션 추가"

**구현 내용**:

1. **Branch 데이터 구조 확장**:
   ```typescript
   interface Branch {
     angle: number;
     length: number;
     label: string;
     labelKo: string;
     color: string;
     tScore: number;
     description: string;      // 설명
     examples: string[];       // 예시
     recommendations: string;  // 권장사항
   }
   ```

2. **5개 방향 정의**:
   | 방향 | T-Score | 색상 | 설명 |
   |------|---------|------|------|
   | Divergent | 0.15 | #22ccff | 기존 가정에 도전하는 역발상적 접근 |
   | Creative | 0.35 | #44ffaa | 기존 이론의 새로운 조합과 신선한 관점 |
   | Balanced | 0.50 | #ffcc22 | 의미 있는 추가로 확립된 프레임워크 확장 |
   | Typical | 0.72 | #ff8844 | 잘 검증된 프레임워크를 새로운 맥락에 적용 |
   | Modal | 0.92 | #ff3366 | AI가 가장 예측 가능하게 추천; 모드 붕괴 위험 |

3. **인터랙션 기능**:
   - **Auto-play**: 3초 간격 순차 하이라이트
   - **Hover**: 해당 방향 강조 + 상세 패널 표시
   - **Click**: 선택 고정 + auto-play 일시정지
   - **Center Click**: 선택 해제 + auto-play 재개

4. **상세 패널 정보**:
   - 설명 (description)
   - 예시 태그 (examples)
   - 권장 사항 (recommendations)

**수정된 파일**: `src/components/visualization/DivergenceAnimation.tsx` (전면 재작성)

---

### 피드백 9: Interactive Terminal 자연어 대화 지원

**원본 피드백**: "명령어 없이 자연어로 대화 가능하게"

**구현 내용**:

1. **InteractiveCLI 자연어 처리**:
   - 알 수 없는 명령어 → 자연어로 처리
   - `callDivergaAPI('chat', undefined, input)` 호출
   - 예: "이론적 프레임워크를 추천해줘" → AI 응답

2. **개선된 UX**:
   - placeholder: "연구에 대해 무엇이든 물어보세요..." / "Ask anything about research..."
   - 환영 메시지에 사용 예시 추가:
     ```
     Examples:
     "이론적 프레임워크 추천해줘"
     "What is T-Score?"
     "run a1" - Research Question Refiner
     ```

3. **API 라우트 확장**:
   - `command: 'chat'` 처리 추가
   - CHAT_SYSTEM 프롬프트 정의
   - Demo 모드 지원

**수정된 파일**:
- `src/components/cli/InteractiveCLI.tsx`
- `src/app/api/diverga/route.ts`

---

### 피드백 10: AgentCard 다크 테마 적용

**원본 피드백**: "Agent Catalog의 밝은 배경을 void 테마로 변경"

**구현 내용**:

1. **색상 변환**:
   | 이전 | 이후 |
   |------|------|
   | `bg-white` | `bg-void-elevated` |
   | `text-gray-900` | `text-stellar-core` |
   | `text-gray-600` | `text-stellar-dim` |
   | `border-gray-200` | `border-stellar-faint/20` |
   | `hover:shadow-md` | `hover:shadow-glow-sm` |

2. **Tier 배지 다크 테마**:
   ```typescript
   const tierColors = {
     HIGH: 'bg-void-surface text-[#9b59b6] border-[#9b59b6]/30',    // Opus
     MEDIUM: 'bg-void-surface text-[#4d96ff] border-[#4d96ff]/30', // Sonnet
     LOW: 'bg-void-surface text-[#8888aa] border-[#8888aa]/30',    // Haiku
   };
   ```

3. **Checkpoint 인디케이터**:
   - REQUIRED: 🔴
   - RECOMMENDED: 🟠
   - OPTIONAL: 🟡

**수정된 파일**: `src/components/agents/AgentCard.tsx`

---

### 피드백 11: CheckpointTimeline 다크 테마 및 컨텐츠 확장

**원본 피드백**: "Workflow 페이지 CheckpointTimeline 개선 (Research Orchestrator 기반)"

**구현 내용**:

1. **다크 테마 색상 체계**:
   ```typescript
   const getCheckpointColors = (level: string) => {
     switch (level) {
       case 'REQUIRED':
         return {
           bg: 'bg-void-surface',
           border: 'border-checkpoint-required/40',
           text: 'text-checkpoint-required',
           indicator: 'bg-checkpoint-required',
           glow: 'shadow-[0_0_10px_rgba(255,51,102,0.3)]'
         };
       // ... RECOMMENDED, OPTIONAL
     }
   };
   ```

2. **확장된 체크포인트 정보**:
   ```typescript
   const extendedCheckpointInfo = {
     CP_RESEARCH_DIRECTION: {
       orchestratorRule: 'System must halt and wait for human confirmation',
       humanTasks: [
         'Verify research question clarity',
         'Confirm scope is appropriate',
         'Approve theoretical direction'
       ],
       exampleScenario: 'Before A2 proceeds, researcher must confirm...'
     }
   };
   ```

3. **드롭다운 컨텐츠 개선**:
   - Orchestrator Rule 박스
   - Human Tasks 체크리스트
   - Example Scenario 하이라이트
   - 확장 시 글로우 효과

**수정된 파일**: `src/components/CheckpointTimeline.tsx`

---

## 파일 변경 요약 (전체)

```
Phase 1 (17 files):
- src/app/api/diverga/route.ts (신규)
- src/components/visualization/ConceptualFramework.tsx (신규)
- src/app/[locale]/agents/page.tsx
- src/app/[locale]/docs/checkpoints/page.tsx
- src/app/[locale]/docs/page.tsx
- src/app/[locale]/docs/vs-methodology/page.tsx
- src/app/[locale]/getting-started/page.tsx
- src/app/[locale]/page.tsx
- src/app/[locale]/playground/page.tsx
- src/app/[locale]/workflows/[slug]/page.tsx
- src/app/[locale]/workflows/page.tsx
- src/components/agents/AgentDetail.tsx
- src/components/cli/InteractiveCLI.tsx
- src/components/visualization/AgentNetwork.tsx
- src/components/visualization/index.ts
- src/lib/data/types.ts
- src/lib/data/workflows.ts

Phase 2 (6 files):
- src/components/home/VoidHero.tsx
- src/components/visualization/TScoreSpectrum.tsx
- src/components/visualization/DivergenceAnimation.tsx (전면 재작성)
- src/components/cli/InteractiveCLI.tsx
- src/app/api/diverga/route.ts
- src/components/agents/AgentCard.tsx
- src/components/CheckpointTimeline.tsx
```
