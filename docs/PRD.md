# Diverga Documentation Website - Product Requirements Document

## Executive Summary

Diverga는 Claude Code를 위한 40개 연구 방법론 에이전트 플러그인입니다. 이 문서화 웹사이트는 Claude Code를 처음 사용하는 연구자들도 쉽게 이해할 수 있도록 시각적이고 직관적인 인터페이스를 제공합니다.

**배포 URL**: https://diverga-docs.vercel.app
**언어**: 영어/한국어 이중 지원

---

## 1. Problem Statement

연구자들이 Diverga와 Claude Code를 사용하려 할 때 직면하는 문제:

| 문제 | 설명 |
|------|------|
| **진입 장벽** | Claude Code가 무엇인지 모름 (개발자 도구로 인식) |
| **에이전트 과부하** | 40개 에이전트 중 어떤 것을 사용해야 하는지 혼란 |
| **VS 방법론 이해 부족** | T-Score, Mode Collapse 등 개념이 낯설음 |
| **설치 두려움** | 터미널 명령어에 대한 거부감 |

---

## 2. Target Users

| 사용자 유형 | 특성 | 니즈 |
|------------|------|------|
| **Primary** | 사회과학 연구자 (교육학, 심리학, 경영학) | 코딩 없이 연구 지원 받기 |
| **Secondary** | 대학원생 | 체계적 문헌고찰, 메타분석 학습 |
| **Tertiary** | 연구 방법론 강사 | 수업 자료로 활용 |

---

## 3. Success Metrics

| 지표 | 목표 |
|------|------|
| 설치 완료율 | 시작한 사용자의 80%가 첫 에이전트 호출까지 도달 |
| 페이지 체류 시간 | Getting Started 페이지 평균 8분 이상 |
| 언어 전환율 | 한국어 사용자 40% 이상 |
| Playground 사용률 | 방문자의 30%가 데모 체험 |

---

## 4. Feature Priority

### P0 (Must Have) ✅ Completed

- [x] 랜딩 페이지 - Diverga 소개 및 가치 제안
- [x] 에이전트 카탈로그 - 40개 에이전트 검색/필터링
- [x] Getting Started - 단계별 설치 가이드
- [x] 한/영 이중 언어 지원
- [x] 모바일 반응형 디자인

### P1 (Should Have) 🔄 In Progress

- [ ] 워크플로우 가이드 - 연구 유형별 에이전트 조합 상세화
- [ ] VS 방법론 설명 페이지 - T-Score 시각화
- [ ] 문서 검색 기능 (API endpoint)
- [ ] 다크 모드

### P2 (Nice to Have) 📋 Planned

- [x] Static Demo Playground - 미리 준비된 예시로 에이전트 체험
- [ ] 블로그/튜토리얼 섹션
- [ ] 뉴스레터 구독

---

## 5. User Journeys

### Journey 1: 처음 방문한 연구자

```
Landing → "What is this?" → How It Works → Getting Started → First Agent Call
```

### Journey 2: 특정 연구 방법 찾는 사용자

```
Landing → Agents → Filter by "Meta-Analysis" → C5 Agent Detail → Try It
```

### Journey 3: 한국어 사용자

```
Landing → Language Toggle (KO) → 시작하기 → 설치 완료
```

---

## 6. User Decisions Log

| 항목 | 선택 | 근거 |
|-----|------|------|
| 도메인 | diverga-docs.vercel.app | Vercel 무료 서브도메인 |
| Playground | Static Demo | API 비용 없이 즉시 체험 가능 |
| 디자인 | VS Diverge 기반 커스텀 | OKLCH 컬러 시스템 + Diverga 브랜딩 |
| 배포 리전 | US East (iad1) | Vercel Free Plan 호환 |

---

## 7. Out of Scope (v1.0)

- 사용자 인증/계정 시스템
- 실시간 API 호출 (Playground)
- 커뮤니티 포럼
- 다국어 확장 (영어/한국어 외)
