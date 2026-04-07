# Changelog

All notable changes to Diverga Docs will be documented in this file.

## [3.0.0] - 2026-04-07

Catches the docs site up with Diverga core v11.1 through v12.0.1, with a parallel pass to remove zombie content and tone down marketing copy.

### BREAKING CHANGES

- `/diverga:research-orchestrator` and `/diverga:vs-arena` removed from CLI documentation. Use `/diverga:orchestrator` instead. The unified orchestrator handles Agent Teams dispatch, VS Arena debate, and subagent fallback.

### Added

- `/docs/orchestrator` page documenting the unified `/diverga:orchestrator` skill
- `/docs/agent-teams` page covering `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`, dispatch flow, and Team Dispatch Bypass (`DIVERGA_TEAM_DISPATCH=1`)
- `/docs/developer/dev-mode` page covering selective symlink dev mode (`scripts/dev.js`) and the one-command deploy pipeline (`scripts/deploy.js`)
- Combined v12.0.1 entry covering v11.1 through v12.0.1
- Researcher profile setup (2-step interview) documented in configuration page
- BYPASSED checkpoint level (Rule 7) documented in checkpoints page
- New `Orchestration` and `Developer` sections in docs navigation
- New `X: Cross-Cutting` agent category in nav (X1 Research Guardian)

### Changed

- CLI page rewritten end-to-end (1255 lines to ~150 lines). Lists 10 coordination skills, 24 agent skills, and 2 environment variables. Documents v12 unification.
- `features.ts` longDescriptions rewritten to drop marketing copy. Phrases like "Never re-explain", "dramatically reducing", "exclusively designed", and "ACID-safe parallel reliable" removed.
- Home page (`page.tsx`) and `VoidHero.tsx` CTAs reduced to direct copy ("Get started" instead of "Begin Journey", "Read the docs" instead of "Read Documentation").
- `messages/en.json` strings rewritten to remove "journey", "transform", "experience" (as a verb), and similar marketing vocabulary.
- Agent metadata for G1 (Journal Matcher), G2 (Publication Specialist), G5 (Academic Style Auditor), and A2 (Theory and Critique Architect) updated to reflect v11.1+ capabilities (live OpenAlex/Crossref pipeline, latex2omml integration, 28-category audit, A3/A6 absorption).
- Category badges in docs navigation updated from a 44-agent count to the actual 24 agents (A=3, B=2, C=4, D=2, E=3, F=1, G=4, I=4, X=1).

### Removed

- 21 zombie agent-content files (`a3`, `a4`, `a6`, `b3`, `b4`, `b5`, `c4`, `c6`, `c7`, `d1`, `d3`, `e4`, `e5`, `f1`, `f2`, `f3`, `f4`, `g3`, `g4`, `h1`, `h2`). These referenced agents that were absorbed into other agents in earlier consolidations but their content files were never deleted.
- Dead version badges from `features.ts` and `docs-navigation.ts`: `NEW in v8.2`, `NEW in v8.4`, `NEW in v8.5`, `v10.1`, `v10.3`, `v11.0`.
- Dead nav entries pointing to non-existent pages: `/docs/guides/migration`, `/docs/reference/mcp-server`, `/docs/reference/mcp-architecture`, `/docs/reference/plugin-architecture`, `/docs/advanced/agent-teams`.
- `H: Specialized` category nav entry (the H category was absorbed into C2 in v11.0; the page remains as a historical note).

### Notes

- English locale only. Korean strings (`messages/ko.json` and ko fields in data files) are unchanged and tracked as a follow-up.
- v12.0.0 architecture changes (slimmed `CLAUDE.md`, slimmed `research-coordinator`, deleted `routing.yaml`) and the `execution-context-architecture` spec are intentionally not given dedicated pages, in line with the cleanup goal of reducing low-value content.

---

## [2.2.1] - 2026-02-03

### Added
- `DocsComingSoon` component for placeholder pages with "Coming Soon" UI
- 29 placeholder pages for all documentation routes:
  - Configuration, CLI Reference, Changelog
  - Memory System: types, commands, api
  - VS Methodology: tscore, process, implementation
  - Checkpoints: types, workflow
  - Systematic Review: main, prisma, scholarag, databases
  - Humanization: main, patterns, modes
  - Agents: overview + 8 category pages (foundation, evidence, design, collection, analysis, quality, communication, specialized)
  - Reference: configuration, model-tiers

### Fixed
- All internal navigation links now functional (no more 404 errors)

---

## [2.2.0] - 2026-02-03

### Added

#### Claude-Style Documentation Site Structure
Complete redesign of `/docs` section with sidebar navigation following Anthropic's Claude docs pattern.

#### New Components (7 NEW)
| Component | Purpose |
|-----------|---------|
| `DocsSidebar.tsx` | Collapsible navigation with 25+ icon mappings |
| `DocsSearch.tsx` | Cmd+K modal search with keyboard navigation |
| `DocsBreadcrumb.tsx` | Navigation context breadcrumbs |
| `DocsTOC.tsx` | Table of Contents with scroll spy |
| `DocsLayout.tsx` | Main layout with mobile responsive support |
| `DocsCard.tsx` | Card component with hover effects |
| `DocsCategoryCard.tsx` | Grouped item cards for landing page |

#### New Documentation Pages
| Page | Path | Description |
|------|------|-------------|
| Docs Landing | `/docs` | Category grid with feature highlights |
| Installation | `/docs/installation` | Platform-specific installation guide |
| Quick Start | `/docs/quick-start` | 4-step timeline with VS checkpoint demo |
| Memory System | `/docs/memory-system` | 5 memory types, lifecycle diagram, CLI commands |

#### Navigation Data Structure
- `src/lib/data/docs-navigation.ts` with DocsNavItem, DocsSection interfaces
- 5 navigation sections: Getting Started, Core Features, Agents, Reference, Resources
- Helper functions: `flattenNavigation()`, `getBreadcrumbPath()`

### Changed
- Redesigned docs landing page with category-based organization
- Added i18n translations for docs section (en, ko)

### Technical Details
- **Build**: 185+ static pages generated successfully
- **TypeScript**: Zero compilation errors
- **Files Created**: 15 new components and pages

---

## [2.1.0] - 2026-02-02

### Added

#### Comprehensive Features Section
5 core Diverga features with dedicated detail pages:

| Feature | Path | Highlights |
|---------|------|------------|
| Memory System | `/features/memory-system` | 5 memory types, lifecycle flow, CLI demo |
| VS Methodology | `/features/vs-methodology` | T-Score spectrum, mode collapse visualization |
| Human Checkpoints | `/features/checkpoints` | Timeline, 3-tier checkpoint system |
| Systematic Review | `/features/systematic-review` | PRISMA pipeline, database support |
| Humanization | `/features/humanization` | 24 pattern categories, transformation modes |

#### New Feature Components (12 NEW)
| Component | Purpose |
|-----------|---------|
| `FeatureHero.tsx` | Storytelling hero section |
| `MemoryFlowDiagram.tsx` | Animated memory lifecycle |
| `MemoryTypeCard.tsx` | T-Score colored memory cards |
| `MemoryCLIDemo.tsx` | Interactive CLI demonstration |
| `VSProcessFlow.tsx` | 3-stage VS process visualization |
| `ModeCollapseDemo.tsx` | Before/After AI comparison |
| `CheckpointTimeline.tsx` | Research phase timeline |
| `CheckpointBadges.tsx` | Required/Recommended/Optional badges |
| `PRISMAPipeline.tsx` | I0→I1→I2→I3 agent pipeline |
| `HumanizationDemo.tsx` | Before/After text comparison |
| `PatternHeatmap.tsx` | 24 AI pattern categories |
| `TransformationModes.tsx` | Conservative/Balanced/Aggressive tabs |

---

## [2.0.0] - 2026-01-31

### Major Feature: User-Friendly Agent Documentation Enhancement

This release transforms the agent documentation from technical/academic descriptions to researcher-friendly, practical guides with memorable personas and actionable content.

### Added

#### New Type System Extensions (`src/lib/data/types.ts`)

11 new TypeScript interfaces for enhanced agent content:

| Interface | Purpose |
|-----------|---------|
| `QuickSummary` | 5-second understanding with oneLiner, bestFor, notFor, timeToResult |
| `UseCase` | Real-world scenarios with discipline and complexity levels |
| `PromptStarter` | Copy-paste ready prompts with context and expected responses |
| `DecisionHelper` | Agent selection guidance with alternatives |
| `AgentPersona` | Memorable character archetypes (archetype, personality, voiceSample, motto) |
| `Journey` | Transformation narrative (before → steps → after) |
| `SuccessStory` | Researcher testimonials with metrics |
| `Analogy` | Understanding metaphors |
| `ProTip` | Expert advice with difficulty levels |
| `Badge` | Visual classification (new, popular, essential, advanced, quick, deep) |
| `FAQ` | Common questions and answers |

#### Category I: ScholaRAG Integration Agents (4 NEW)

| Agent | Persona | Description |
|-------|---------|-------------|
| **I0** | "The Pipeline Conductor" | Scholar Agent Orchestrator - manages 7-stage ScholaRAG pipeline |
| **I1** | "The API Whisperer" | Paper Retrieval Agent - fetches from Semantic Scholar, OpenAlex, arXiv |
| **I2** | "The Efficient Screener" | Screening Assistant - PRISMA 6-dimension AI screening |
| **I3** | "The Knowledge Architect" | RAG Builder - builds ChromaDB vector database |

#### UI Components with VS Diverge Design (6 NEW)

| Component | Purpose |
|-----------|---------|
| `QuickSummaryCard.tsx` | Hero summary with best/not-for lists, time estimate |
| `PersonaCard.tsx` | Agent persona with typewriter animation, gradient mesh |
| `PromptStarters.tsx` | Copyable prompts with EN/KO toggle, copy feedback |
| `DecisionHelper.tsx` | Two-column comparison, alternative agent cards |
| `UseCaseGallery.tsx` | Discipline filters, complexity badges |
| `JourneyNarrativeSection.tsx` | Before→After transformation timeline |

### Enhanced

#### All 40 Agents Enhanced with User-Friendly Content

**Category A (Foundation)**: A1-A6 with personas like "The Socratic Sculptor", "The Theory Librarian", "The Friendly Nemesis"

**Category B (Evidence)**: B1-B5 with personas like "The Evidence Hunter", "The Numbers Whisperer"

**Category C (Design)**: C1-C7 with personas like "The Blueprint Architect", "The Depth Diver"

**Category D (Data Collection)**: D1-D4 with personas like "The Sample Sage", "The Conversation Architect"

**Category E (Analysis)**: E1-E5 with personas like "The Stats Translator", "The Pattern Finder"

**Category F (Quality)**: F1-F5 with personas like "The Consistency Checker", "The Checklist Champion"

**Category G (Communication)**: G1-G6 with personas like "The Journal Navigator", "The Natural Voice"

**Category H (Specialized)**: H1-H2 with personas like "The Cultural Immersionist", "The Change Catalyst"

### Component Integration

- Updated `AgentDetail.tsx` with new component sections
- Updated `AgentDetailSections.tsx` with FAQ, Success Stories, Pro Tips, Analogies sections
- All components conditionally render based on data availability

### Technical Details

- **Build**: 109 static pages generated successfully
- **TypeScript**: Zero compilation errors
- **Files Changed**: 44 modified, 16 created

---

## [1.2.1] - 2026-01-30

### Added
- **Claude Code Recommendation Banner**: Added feature comparison showing why Claude Code is recommended
  - Task Tool support (40 specialized agents)
  - AskUserQuestion tool (clickable UI for checkpoints)
  - Tool-level checkpoint enforcement
  - Parallel agent execution

- **Codex CLI Limitations Notice**: Added explanatory notice for Codex CLI users
  - Behavioral checkpoints (model-voluntary, not tool-enforced)
  - Main model handles all work (no dedicated agent instances)
  - Recommendation to use Claude Code for full functionality

### Changed
- **PlatformTabs Component**: Enhanced with recommendation indicators
  - Green banner for Claude Code advantages
  - Yellow notice for Codex CLI limitations
  - Visual hierarchy guiding users to recommended platform

### Related
- Diverga v6.6.3: Codex CLI SKILL.md implementation
- See: `docs/CODEX-SKILL-SYSTEM.md` for technical details

---

## [1.2.0] - 2025-01-28

### Added
- **Cross-Platform Support**: Diverga now officially supports 3 coding platforms:
  - Claude Code (Anthropic)
  - Codex CLI (OpenAI)
  - OpenCode (Community)

- **PlatformTabs Component**: New interactive component for Getting-Started page
  - Platform-specific installation steps for each coding assistant
  - Animated transitions between platforms
  - Copy-to-clipboard functionality for commands

- **Model Mapping Table**: Shows how Diverga agent tiers map to models on each platform
  | Tier | Claude Code | Codex CLI | OpenCode |
  |------|-------------|-----------|----------|
  | HIGH | claude-opus-4-5 | gpt-5.2-codex | o4-max |
  | MEDIUM | claude-sonnet-4 | gpt-4.5-turbo | o4-mini |
  | LOW | claude-haiku-3 | gpt-4o-mini | o3-mini |

- **Cross-Platform Badge**: Added to VoidHero feature badges ("Claude · Codex · OpenCode")

### Fixed
- **VoidHero Rendering Issue**: Fixed issue where Interactive Terminal section appeared before Hero
  - Added SSR fallback with gradient background and static particle dots
  - Canvas now smoothly fades in when ready
  - Added scroll-to-top on homepage load to ensure Hero is visible first

### Changed
- **Getting-Started Page**: Redesigned with platform selector at top
  - Replaced OS-based tabs (macOS/Windows/Linux) with platform-based tabs
  - Step 4 (Start Researching) remains common to all platforms
  - Added Cross-Platform Support banner

- **Translations**: Updated en.json and ko.json
  - Added platform-specific translation keys
  - Updated step descriptions for cross-platform context
  - Added model mapping translations

### Technical Details
- New file: `src/components/getting-started/PlatformTabs.tsx`
- Modified files:
  - `src/components/home/VoidHero.tsx`
  - `src/app/[locale]/page.tsx`
  - `src/app/[locale]/getting-started/page.tsx`
  - `messages/en.json`
  - `messages/ko.json`

---

## [1.0.0] - Initial Release

### Added
- 40 specialized research agents across 8 categories
- VS Methodology for preventing mode collapse
- T-Score typicality-aware recommendations
- Interactive CLI demo
- Multi-language support (English, Korean)
- Agent Network visualization
- Divergence Animation
- Human checkpoint system
