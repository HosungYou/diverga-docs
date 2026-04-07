# Diverga Documentation Website

<div align="center">

[![Version](https://img.shields.io/badge/version-3.0.0-7c3aed?style=flat-square)](https://github.com/HosungYou/diverga-docs)
[![Diverga](https://img.shields.io/badge/Diverga-v12.0.1-violet?style=flat-square)](https://github.com/HosungYou/Diverga)
[![Live](https://img.shields.io/badge/live-diverga--docs.vercel.app-0969da?style=flat-square)](https://diverga-docs.vercel.app)

**"Beyond Modal Answers"** | **"뻔한 답을 넘어서"**

Documentation website for [Diverga](https://github.com/HosungYou/Diverga) — 24 specialized research methodology agents.

**Claude Code Exclusive** — Requires [Claude Code](https://claude.ai/code) from Anthropic.

[Live Site](https://diverga-docs.vercel.app) · [한국어](https://diverga-docs.vercel.app/ko)

</div>

---

## Overview

Diverga는 연구자를 위한 24개 전문 에이전트 Claude Code 플러그인입니다. VS(Verbalized Sampling) 방법론을 통해 AI 모드 붕괴를 방지하고 창의적이고 방어 가능한 연구 선택을 안내합니다.

### Features

- **24 Research Agents** - 9개 카테고리, 양적/질적/혼합 연구 전 과정 지원
- **VS Methodology** - T-Score 기반 모드 붕괴 방지
- **Human Checkpoints** - 중요 결정은 항상 인간이 승인
- **VS Arena** - 5개 페르소나 방법론 토론 오케스트레이터
- **Humanization Pipeline** - G5 → G6 → F5 자연스러운 학술 문체
- **Systematic Review** - PRISMA 2020 자동화 파이프라인
- **Bilingual** - 영어/한국어 완벽 지원

---

## Installation (Claude Code)

```bash
# Inside Claude Code
/plugin marketplace add https://github.com/HosungYou/Diverga
/plugin install diverga
/diverga:setup
```

---

## Agent Categories

| Category | Name | Agents | Description |
|----------|------|--------|-------------|
| **A** | Foundation | 3 | Research question, theory, paradigm |
| **B** | Literature & Evidence | 2 | Literature review, quality appraisal |
| **C** | Study Design | 4 | Quantitative, qualitative, mixed methods, meta-analysis |
| **D** | Data Collection | 2 | Interviews, observation, measurement instruments |
| **E** | Analysis | 3 | Statistical, qualitative coding, mixed integration |
| **F** | Quality & Validation | 1 | Humanization verification |
| **G** | Publication | 4 | Journal matching, writing, humanization, audit |
| **I** | Systematic Review | 4 | PRISMA pipeline: retrieval, screening, RAG |
| **X** | Cross-Cutting | 1 | Research integrity, ethics, bias detection |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16.1 | React framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling (OKLCH colors) |
| next-intl | Internationalization |
| Framer Motion | Animations |
| Fuse.js | Fuzzy search |
| Vercel | Deployment |

---

## Quick Start (docs site dev)

```bash
# Clone
git clone https://github.com/HosungYou/diverga-docs.git
cd diverga-docs

# Install
pnpm install

# Development
pnpm dev

# Build
pnpm build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
src/
├── app/[locale]/          # Pages (i18n routing)
│   ├── agents/            # Agent catalog & detail
│   ├── docs/              # Documentation pages
│   └── features/          # Feature pages
├── components/            # React components
├── lib/data/              # 24 agents + 9 categories
└── i18n/                  # Locale config
messages/
├── en.json                # English
└── ko.json                # Korean
```

---

## Deployment

Automatically deployed to Vercel on push to `main` branch.

**Production**: https://diverga-docs.vercel.app

---

## Related Projects

- [Diverga](https://github.com/HosungYou/Diverga) - The main plugin repository (v12.0.1)

---

## License

MIT © [Hosung You](https://github.com/HosungYou)
