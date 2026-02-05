# Diverga Documentation v2.3.0 Release Notes

**릴리즈 날짜:** 2026년 2월 5일
**배포 URL:** https://diverga-docs-wfl9.vercel.app/

---

## 🎉 주요 업데이트 요약

이번 v2.3.0 릴리즈는 Diverga 문서 사이트의 **가장 대규모 업데이트**입니다.

| 항목 | 수치 |
|------|------|
| 변경된 파일 | 59개 |
| 추가된 코드 | 31,127줄 |
| 새로운 문서 페이지 | 29개 |
| 새로운 컴포넌트 | 9개 |
| 튜토리얼 | 2개 |
| 지원 언어 | 영어/한국어 |

---

## 📚 Phase 1: 네비게이션 링크 검증

모든 사이드바 및 문서 내 링크가 올바르게 작동하는지 검증 완료.
- `/${locale}${href}` 패턴 사용 확인
- 404 오류 없음 확인

---

## 📖 Phase 2: 29개 플레이스홀더 페이지 → 전체 콘텐츠

기존 `DocsComingSoon` 플레이스홀더를 모두 완전한 문서로 교체했습니다.

### Memory System (메모리 시스템) - 3 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/memory-system/types` | 3계층 컨텍스트 시스템 (Priority/Working/Project) |
| `/docs/memory-system/commands` | 12개 CLI 명령어 상세 문서화 |
| `/docs/memory-system/api` | 15개 MCP 도구 API 레퍼런스 |

### VS Methodology (VS 방법론) - 3 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/vs-methodology/tscore` | T-Score 시스템, 시각적 스펙트럼 |
| `/docs/vs-methodology/process` | 5단계 VS 프로세스 상세 설명 |
| `/docs/vs-methodology/implementation` | 에이전트-VS 매트릭스 |

### Agents (에이전트) - 9 페이지

| 페이지 | 카테고리 | 에이전트 수 |
|--------|----------|-------------|
| `/docs/agents` | 개요 | 44개 전체 |
| `/docs/agents/foundation` | A: 연구 기초 | 6개 (A1-A6) |
| `/docs/agents/evidence` | B: 근거 합성 | 5개 (B1-B5) |
| `/docs/agents/design` | C: 연구 설계 | 7개 (C1-C7) |
| `/docs/agents/collection` | D: 데이터 수집 | 4개 (D1-D4) |
| `/docs/agents/analysis` | E: 분석 | 5개 (E1-E5) |
| `/docs/agents/quality` | F: 품질 보증 | 5개 (F1-F5) |
| `/docs/agents/communication` | G: 커뮤니케이션 | 6개 (G1-G6) |
| `/docs/agents/specialized` | H/I: 전문 | 5개 (H1-H2, I0-I3) |

**각 에이전트 페이지 포함 내용:**
- 에이전트 카드 (아이콘, 이름, 티어 배지)
- VS 방법론 수준 (Full/Enhanced/Light)
- 체크포인트 요구사항 (🔴/🟠/🟡)
- 트리거 키워드 (영어/한국어)
- 입력/출력 예시
- 역량 목록

### Checkpoints (체크포인트) - 2 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/checkpoints/types` | 4가지 심각도 수준 (REQUIRED/RECOMMENDED/OPTIONAL/ADVISORY) |
| `/docs/checkpoints/workflow` | 5단계 체크포인트 워크플로우 |

### Systematic Review (체계적 문헌고찰) - 4 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/systematic-review` | 7단계 PRISMA 2020 파이프라인 개요 |
| `/docs/systematic-review/prisma` | PRISMA 2020 준수, AI-PRISMA 6차원 스크리닝 |
| `/docs/systematic-review/scholarag` | ScholaRAG CLI 명령어, 프로젝트 구조 |
| `/docs/systematic-review/databases` | Semantic Scholar, OpenAlex, arXiv 통합 |

### Humanization (휴먼화) - 3 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/humanization` | G5→G6→F5 파이프라인 개요 |
| `/docs/humanization/patterns` | 24개 AI 작문 패턴 카테고리 |
| `/docs/humanization/modes` | Conservative/Balanced/Aggressive 모드 |

### Reference (레퍼런스) - 5 페이지

| 페이지 | 내용 |
|--------|------|
| `/docs/configuration` | 설정 파일 가이드 |
| `/docs/cli` | CLI 명령어 레퍼런스 |
| `/docs/reference/configuration` | 상세 설정 스키마 |
| `/docs/reference/model-tiers` | 44개 에이전트 티어 매트릭스 |
| `/docs/changelog` | v5.0 ~ v8.0 버전 히스토리 |

---

## 🎨 Phase 3: Memory System 페이지 재설계

### 새로운 인터랙티브 컴포넌트 (4개)

```
src/components/features/memory/
├── MemoryArchitectureDiagram.tsx   # 3계층 인터랙티브 시각화
├── MemoryCommandPlayground.tsx     # 라이브 CLI 데모 (타이핑 애니메이션)
├── MemoryFlowAnimation.tsx         # 애니메이션 라이프사이클
├── MemoryComparisonTable.tsx       # Before/After 비교 테이블
└── index.ts
```

**MemoryArchitectureDiagram 특징:**
- Priority/Working/Project 3계층 시각화
- 호버 시 상세 정보 확장
- 색상 코딩 (#ff6b6b, #f39c12, #9b59b6)

**MemoryCommandPlayground 특징:**
- 터미널 스타일 UI (macOS 헤더)
- 문자 단위 타이핑 애니메이션
- Play/Reset 컨트롤
- 3개 데모 명령어

**MemoryFlowAnimation 특징:**
- 5단계 라이프사이클 (Capture → Store → Index → Prune)
- 펄싱 아이콘 애니메이션
- 성능 통계 카드

**MemoryComparisonTable 특징:**
- 6개 기능 비교 (Before/After)
- 영향 통계 (5-10분 절약, ~2K 토큰)

---

## 📝 Phase 4: 튜토리얼 시스템

### 튜토리얼 컴포넌트 라이브러리 (5개)

```
src/components/tutorials/
├── types.ts              # TypeScript 인터페이스
├── StepIndicator.tsx     # 진행률 표시기
├── CodeBlock.tsx         # 구문 강조 코드 블록
├── GifPlayer.tsx         # GIF/이미지 뷰어
├── TutorialCard.tsx      # 튜토리얼 미리보기 카드
├── TutorialLayout.tsx    # 튜토리얼 페이지 래퍼
└── index.ts
```

### 튜토리얼 페이지 (3개)

#### 1. 튜토리얼 허브 (`/docs/tutorials`)
- 사용 가능한 튜토리얼 목록
- 난이도 배지 (Beginner/Advanced)
- 예상 소요 시간

#### 2. Quick Start Tutorial (`/docs/tutorials/quick-start`)
**대상:** 신규 사용자
**소요 시간:** 10분
**난이도:** Beginner 🟢

| 단계 | 내용 |
|------|------|
| 1 | Prerequisites - Claude Code 설치 확인 |
| 2 | Installation - GitHub 클론 또는 마켓플레이스 |
| 3 | First Skill - `/diverga-help` 실행 |
| 4 | First Agent - A1 Research Question Refiner |
| 5 | Understanding Checkpoints - 3가지 체크포인트 유형 |
| 6 | Next Steps - 추가 학습 링크 |

#### 3. Meta-Analysis Pipeline Tutorial (`/docs/tutorials/meta-analysis`)
**대상:** 메타분석 연구자
**소요 시간:** 45분
**난이도:** Advanced 🟠

| 단계 | 내용 |
|------|------|
| 1 | C5-C7 Overview - 에이전트 역할 및 관계 |
| 2 | Starting a Meta-Analysis - 트리거 및 체크포인트 |
| 3 | Data Extraction with C6 - Hedges' g 계산, SD 복구 |
| 4 | 4-Gate Validation with C7 - 검증 게이트 상세 |
| 5 | Orchestration and Results - C5 조정 워크플로우 |
| 6 | Export and Integration - R/Stata/CSV 내보내기 |

---

## 🧭 Phase 5: 네비게이션 업데이트

### 추가된 Tutorials 섹션

```typescript
{
  id: 'tutorials',
  title: { en: 'Tutorials', ko: '튜토리얼' },
  items: [
    {
      id: 'tutorials-overview',
      title: { en: 'All Tutorials', ko: '모든 튜토리얼' },
      href: '/docs/tutorials',
      icon: 'graduation-cap',
    },
    {
      id: 'quick-start-tutorial',
      title: { en: 'Quick Start', ko: '빠른 시작' },
      href: '/docs/tutorials/quick-start',
      badge: { text: 'Beginner', color: '#44ffaa' },
    },
    {
      id: 'meta-analysis-tutorial',
      title: { en: 'Meta-Analysis Pipeline', ko: '메타분석 파이프라인' },
      href: '/docs/tutorials/meta-analysis',
      badge: { text: 'Advanced', color: '#f39c12' },
    },
  ],
}
```

---

## 🔧 기술적 세부사항

### 디자인 시스템
- **Void Design System** 완전 준수
- 색상: `void-deep`, `void-elevated`, `stellar-core`, `stellar-dim`
- 애니메이션: Framer Motion 스크롤 트리거

### 국제화
- 모든 페이지 영어/한국어 이중 언어 지원
- `useLocale()` 훅으로 동적 콘텐츠 전환

### 빌드 검증
- ✅ `pnpm build` 성공
- ✅ 191+ 정적 페이지 생성
- ✅ TypeScript 오류 없음

---

## 🚀 배포 정보

| 항목 | 값 |
|------|-----|
| 브랜치 | `main` |
| 커밋 | `69f0b9f` |
| 플랫폼 | Vercel |
| URL | https://diverga-docs-wfl9.vercel.app/ |

---

## 📋 다음 릴리즈 예정 (v2.4.0)

- [ ] 비디오 튜토리얼 섹션
- [ ] ScholaRAG 워크플로우 튜토리얼
- [ ] Humanization 파이프라인 튜토리얼
- [ ] 검색 기능 개선
- [ ] 다크/라이트 모드 토글

---

## 🙏 기여자

- **Claude Opus 4.5** - 문서 작성 및 컴포넌트 개발
- **Hosung You** - 프로젝트 관리 및 검토

---

**Full Changelog:** [v2.2.1...v2.3.0](https://github.com/HosungYou/diverga-docs/compare/1def3ed...69f0b9f)
