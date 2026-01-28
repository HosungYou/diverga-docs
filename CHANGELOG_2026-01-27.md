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

## 파일 변경 요약

```
17 files changed, 2921 insertions(+), 1168 deletions(-)

신규 생성:
- src/app/api/diverga/route.ts
- src/components/visualization/ConceptualFramework.tsx

수정:
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
```
