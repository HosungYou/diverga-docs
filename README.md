# Diverga Documentation Website

<div align="center">

**"Beyond Modal Answers"** | **"뻔한 답을 넘어서"**

Documentation website for [Diverga](https://github.com/HosungYou/Diverga) - 40 specialized research methodology agents.

**Cross-Platform Support**: Claude Code · Codex CLI · OpenCode

[Live Site](https://diverga-docs.vercel.app) · [한국어](https://diverga-docs.vercel.app/ko)

</div>

---

## Overview

Diverga는 연구자를 위한 40개 전문 에이전트 플러그인입니다. Claude Code, Codex CLI, OpenCode 등 다양한 AI 코딩 어시스턴트에서 사용할 수 있습니다.

### Features

- **40 Research Agents** - 8개 카테고리, 양적/질적/혼합 연구 지원
- **Cross-Platform** - Claude Code, Codex CLI, OpenCode 지원
- **Bilingual** - 영어/한국어 완벽 지원
- **Interactive Catalog** - 검색, 필터링, 상세 정보
- **Getting Started Guide** - 플랫폼별 설치 가이드
- **Research Workflows** - 연구 패러다임별 에이전트 조합
- **Demo Playground** - 실제 에이전트 출력 예시

---

## Supported Platforms

| Platform | Provider | Install Guide |
|----------|----------|---------------|
| **Claude Code** | Anthropic | `/plugin install diverga` |
| **Codex CLI** | OpenAI | `git clone` + setup script |
| **OpenCode** | Community | Plugin directory copy |

### Model Mapping

Diverga automatically maps agent tiers to the best available models:

| Tier | Claude Code | Codex CLI | OpenCode |
|------|-------------|-----------|----------|
| HIGH | claude-opus-4-5 | gpt-5.2-codex | o4-max |
| MEDIUM | claude-sonnet-4 | gpt-4.5-turbo | o4-mini |
| LOW | claude-haiku-3 | gpt-4o-mini | o3-mini |

---

## Agent Categories

| Category | Name | Agents | Description |
|----------|------|--------|-------------|
| **A** | Foundation | 6 | Research question, theory, ethics |
| **B** | Evidence | 5 | Literature review, quality appraisal |
| **C** | Design & Meta-Analysis | 7 | Quantitative, qualitative, mixed methods, meta-analysis |
| **D** | Data Collection | 4 | Sampling, measurement, observation |
| **E** | Analysis | 5 | Statistical, qualitative coding, mixed integration |
| **F** | Quality | 5 | Checklists, bias detection, reproducibility |
| **G** | Communication | 6 | Writing, journal matching, visualization |
| **H** | Specialized | 2 | Ethnography, action research |

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

## Quick Start

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
│   ├── getting-started/   # Installation guide
│   ├── workflows/         # Research workflows
│   └── playground/        # Demo examples
├── components/            # React components
├── lib/data/              # 40 agents + 8 categories
└── i18n/                  # Locale config
messages/
├── en.json                # English
└── ko.json                # Korean
docs/
├── PRD.md                 # Product requirements
├── SPEC.md                # Technical specification
├── DESIGN.md              # Design system
└── CONTRIBUTING.md        # Contribution guide
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [PRD](docs/PRD.md) | Product Requirements Document |
| [SPEC](docs/SPEC.md) | Technical Specification |
| [DESIGN](docs/DESIGN.md) | Design System (OKLCH colors, typography) |
| [CONTRIBUTING](docs/CONTRIBUTING.md) | How to contribute |
| [ROADMAP](ROADMAP.md) | Completed & planned features |

---

## Deployment

Automatically deployed to Vercel on push to `main` branch.

**Production**: https://diverga-docs.vercel.app

---

## Related Projects

- [Diverga](https://github.com/HosungYou/Diverga) - The main plugin repository
- [oh-my-claudecode](https://github.com/anthropics/claude-code) - Claude Code CLI

---

## License

MIT © [Hosung You](https://github.com/HosungYou)
