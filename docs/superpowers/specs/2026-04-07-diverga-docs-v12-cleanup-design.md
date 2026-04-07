# diverga-docs v12 Update + Content Cleanup

**Date:** 2026-04-07
**Branch:** `docs/v12-update-and-cleanup`
**Worktree:** `/Volumes/External SSD/Projects/Diverga/diverga-docs-v12-cleanup`
**Target:** Bring `diverga-docs` from v11.0.0 to v12.0.1, while pruning excess content and reducing marketing tone.

---

## 1. Context

`diverga-docs` last shipped at v11.0.0 (commit `140ead7`). The Diverga core repo is now at v12.0.1, with significant changes:

- **v11.1.0** Hook enforcement, VS Arena (later absorbed)
- **v11.1.1** `latex2omml` (LaTeX to Word OMML, integrated into G2)
- **v11.1.2** Setup wizard fix, symlink dev guide
- **v11.2.0** Setup wizard redesigned as 2-step researcher profile interview
- **v11.3.0** Selective symlink dev mode (`scripts/dev.js`), one-command deploy pipeline (`scripts/deploy.js`), Agent Teams integration
- **v11.3.1** Plugin infrastructure fixes
- **v12.0.0 (BREAKING)** Removed `research-orchestrator` and `vs-arena` skills; unified into `/diverga:orchestrator`. Slimmed `CLAUDE.md` (16.8KB to under 5KB) and `research-coordinator` (28KB to 14KB)
- **v12.0.1** Team Dispatch Bypass (`DIVERGA_TEAM_DISPATCH=1`), Checkpoint Rule 7

GitHub Releases are already published in English for every version through v12.0.1, so no release-notes work is required for this spec.

In addition to the version gap, the docs site has accumulated zombie content and marketing-style copy that no longer reflect what Diverga actually is or does. This spec covers both updates as one branch.

## 2. Goals and Non-Goals

**Goals**
1. Reflect Diverga v12.0.1 across all data files, navigation, CLI documentation, and changelog.
2. Delete content that references agents or features no longer present in the product.
3. Reduce marketing-style copy to direct, descriptive prose.
4. Keep English locale fully consistent. Korean locale is intentionally deferred.
5. Land everything as two clean commits on `main` via fast-forward merge from the worktree branch.

**Non-Goals**
- No Korean translation pass. `messages/ko.json` and ko strings stay as-is for now.
- No new visual assets, diagrams, or screenshots.
- No release-note authoring on GitHub (already done).
- No execution-context-architecture page. The spec is too low-level for the docs site and the cleanup spirit; v12 architecture changes are summarized in changelog only.
- No new component code. All work is data, copy, and page updates.
- No deploy or Vercel verification step. Push to `main` is the final action.

## 3. Approach

Two-phase, single-branch, single-push.

**Phase 1: Cleanup** (one commit)
Delete zombie agent content, prune stale version badges, reduce marketing tone in shared data files and the home page.

**Phase 2: v12 Update** (one commit)
Sync agent metadata, rewrite the CLI page, add three new pages, update affected existing pages, write the changelog entry.

**Why two phases:** Cleanup and feature update are independent concerns. Splitting them keeps the diff readable, makes `git bisect` precise if something regresses, and lets the cleanup commit be reviewed for tone in isolation. Both phases land in the same branch and ship in one push to `main`.

## 4. Phase 1: Cleanup

### 4.1 Delete zombie agent content (21 files)

Active agents in `src/lib/data/agents.ts` (24): A1, A2, A5, B1, B2, C1, C2, C3, C5, D2, D4, E1, E2, E3, F5, G1, G2, G5, G6, I0, I1, I2, I3, X1.

Files in `src/lib/data/agent-content/` (45). Delete the 21 that have no matching active agent:

```
a3-content.ts  a4-content.ts  a6-content.ts
b3-content.ts  b4-content.ts  b5-content.ts
c4-content.ts  c6-content.ts  c7-content.ts
d1-content.ts  d3-content.ts
e4-content.ts  e5-content.ts
f1-content.ts  f2-content.ts  f3-content.ts  f4-content.ts
g3-content.ts  g4-content.ts
h1-content.ts  h2-content.ts
```

Then update `src/lib/data/agent-content/index.ts` to remove the matching exports. Grep the codebase for any residual import of the deleted modules and remove them.

Verify `src/lib/data/categories.ts` does not list deleted agent IDs in its `agents` arrays. If it does, prune them.

### 4.2 Prune stale version badges

Remove or update every dead version badge:

- `src/lib/data/features.ts`: `NEW in v8.4`, `NEW in v8.5`, `v10.3`, `v11.0` (four occurrences).
- `src/lib/data/docs-navigation.ts`: badges with `text: 'v10.1'` and `text: 'v10.3'`.

Default action: remove the badge entirely. Only retain a badge if the feature was genuinely added in v12; in that case, set it to `v12`.

### 4.3 Marketing-tone reduction

**Banned vocabulary** (remove or replace):
`revolutionize`, `unleash`, `journey`, `exclusive(ly)`, `boundless`, `dramatically`, `seamless`, `seamlessly`, `effortlessly`, `experience` (as a verb), `transform` (as a marketing verb), `never` (as a personal promise: "never re-explain"), `escape` (as in "escape mode collapse"), `ready to`, `dive in`, `unlock`.

**Retain**: concrete numbers, tool and API names, behavioral descriptions, structural language.

**Rewriting rules**

| Before | After |
| --- | --- |
| "Ready to Escape Mode Collapse?" | "Get started" |
| "Start Your Journey" | "Get started" |
| "Read Documentation" | "Read the docs" |
| "Never re-explain your research context again. Diverga remembers..." | "Persists research context across sessions." |
| "dramatically reducing time for complex workflows" | "Runs multiple agents in parallel." |
| "Diverga v11.0 is designed exclusively for Claude Code, leveraging Task tool for 24 specialized agent routing..." | "Built for Claude Code. Uses the Task tool for agent routing, AskUserQuestion for checkpoints, and PreToolUse hooks for prerequisite enforcement." |
| "ACID-safe parallel agent coordination ensures reliable multi-agent research workflows" | "SQLite WAL backend. 3 MCP servers, 16 tools." |
| "Join researchers who are exploring the long tail of methodology" | (delete; CTA section becomes minimal) |

**Files in scope (English only)**
- `src/lib/data/features.ts` (every `description` and `longDescription`)
- `src/app/[locale]/page.tsx` (the `content.en` block)
- `src/components/home/VoidHero.tsx` and any sibling hero components if they hold inline copy
- `messages/en.json` (only entries that contain banned vocabulary)
- The `description`, `longDescription`, and `purpose` fields of the 24 active agents in `src/lib/data/agents.ts`

**Out of scope**
- `messages/ko.json` and any Korean copy (deferred per Q2 answer)
- Code comments
- Component logic

### 4.4 Phase 1 commit message

```
chore(docs): prune zombie agent content and reduce marketing tone

- Delete 21 stale agent-content files (a3, a4, a6, b3-b5, c4, c6, c7,
  d1, d3, e4, e5, f1-f4, g3, g4, h1, h2) — agents removed in earlier
  consolidations but content files remained
- Prune dead version badges (v8.4, v8.5, v10.1, v10.3 NEW markers)
- Reduce marketing-style copy across features.ts, home page, and
  English messages — drop "journey", "exclusive", "dramatically",
  "never re-explain", "escape mode collapse", and similar phrases
- English locale only; Korean copy unchanged
```

## 5. Phase 2: v12 Update

### 5.1 Data file sync

| File | Change |
| --- | --- |
| `src/lib/data/agents.ts` | For each of the 24 agents, re-derive `description`, `triggers`, `vsLevel`, and `model` from the matching `skills/<id>/SKILL.md` frontmatter in the core repo. Apply tone rules from section 4.3 to English fields. |
| `src/lib/data/agent-content/{24 files}.ts` | Sync content body with the latest SKILL.md, with priority on G1 (Journal Intelligence MCP pipeline v10.0.0), G2 (`latex2omml` integration, "Word Document Generation with Native Equations" section), G5 (LaTeX syntax patterns X1-X6), and any other agent whose SKILL.md changed since v11.0.0. |
| `src/lib/data/features.ts` | Bump four `v11.0` references to `v12.0.1`. Add an `agent-teams` feature entry that reflects the v12 dispatch model. Remove `research-orchestrator` mentions if any. |
| `src/lib/data/docs-navigation.ts` | Add nav entries for the three new pages (section 5.3). Remove dead badges. Remove links to deleted pages, if any. |
| `src/lib/data/categories.ts` | Verify all `agents` arrays match the active 24. |

**Source of truth**: the core repo at `/Volumes/External SSD/Projects/Diverga/Diverga-core` on the latest commit (currently `56c43ae`, v12.0.1). Read each `skills/<id>/SKILL.md` directly.

### 5.2 CLI page rewrite

Target: `src/app/[locale]/docs/cli/page.tsx`.

Current state: contains `/diverga-research-orchestrator` references that no longer exist.

Action: complete rewrite of the command list. The rewritten page lists every active skill present in `Diverga-core/skills/` (verified: 34 directories, all listed below).

**Coordination and pipelines** (10):
```
/diverga:orchestrator           (replaces /diverga-research-orchestrator and /diverga-vs-arena)
/diverga:research-coordinator
/diverga:setup
/diverga:doctor
/diverga:humanize
/diverga:memory
/diverga:hud
/diverga:diverga
/diverga:help
/diverga:universal-ma-codebook
```

**Agent skills** (24, one per active agent):
```
/diverga:a1   /diverga:a2   /diverga:a5
/diverga:b1   /diverga:b2
/diverga:c1   /diverga:c2   /diverga:c3   /diverga:c5
/diverga:d2   /diverga:d4
/diverga:e1   /diverga:e2   /diverga:e3
/diverga:f5
/diverga:g1   /diverga:g2   /diverga:g5   /diverga:g6
/diverga:i0   /diverga:i1   /diverga:i2   /diverga:i3
/diverga:x1
```

Two environment variables documented at the bottom of the page:
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` — enables Agent Teams dispatch path
- `DIVERGA_TEAM_DISPATCH=1` — internal flag set by orchestrator on team dispatch; bypasses individual agent prerequisite checks

The page MUST NOT mention any removed command. A short paragraph at the top documents the v12 consolidation: "v12 unified `research-orchestrator` and `vs-arena` into `/diverga:orchestrator`."

### 5.3 New pages (3)

**5.3.1 `/docs/orchestrator`**
Path: `src/app/[locale]/docs/orchestrator/page.tsx`
Source: `Diverga-core/skills/orchestrator/SKILL.md`
Sections:
- What it is (one paragraph). Execution layer that receives agent IDs, decides strategy, manages lifecycle.
- What it does not do (paradigm detection lives in `research-coordinator`).
- Dispatch modes: Agent Teams, parallel subagents, sequential.
- VS Arena mode (debate persona dispatch).
- When to invoke directly vs. via natural language.

**5.3.2 `/docs/agent-teams`**
Path: `src/app/[locale]/docs/agent-teams/page.tsx`
Source: `Diverga-core/skills/orchestrator/SKILL.md` (Team Dispatch Bypass section), `Diverga-core/docs/CHECKPOINT-RULES.md` Rule 7
Sections:
- Activation: `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`
- How orchestrator dispatches a team
- Team Dispatch Bypass: why individual agent prereq checks are skipped after orchestrator approval, and how `DIVERGA_TEAM_DISPATCH=1` is set in the agent prompt or environment
- Graceful degradation when Agent Teams is not available (subagent fallback)

**5.3.3 `/docs/developer/dev-mode`**
Path: `src/app/[locale]/docs/developer/dev-mode/page.tsx`
Source: `Diverga-core/docs/DEVELOPER.md`, `Diverga-core/scripts/dev.js`, `Diverga-core/scripts/deploy.js`
Sections:
- Selective symlink dev mode: what gets linked, what is blocked from leaking
- Commands: `pnpm dev:on`, `pnpm dev:off`, `pnpm dev:status`
- One-command deploy pipeline: 6 stages (pre-flight, build/validate, version sync, git commit/tag/push, GitHub Release, cache refresh)
- When to use dev mode vs. plugin update

All three pages follow the same minimal structure: `<h1>`, short intro paragraph, two or three `<section>` blocks, one code block per section if relevant. No marketing copy. No pull quotes. No emoji headings.

### 5.4 Existing pages to update

| Page | Change |
| --- | --- |
| `src/app/[locale]/docs/quick-start/page.tsx` | Replace 4-step config wizard description with the 2-step researcher profile interview. |
| `src/app/[locale]/docs/configuration/page.tsx` | Same; remove dead config fields, document `discipline`, `experience_level`, `stats_software`, `database_access`. |
| `src/app/[locale]/docs/checkpoints/page.tsx` and `checkpoints/types/page.tsx` | Add Rule 7 (Team Dispatch Bypass). Remove or rewrite anything that contradicts current `CHECKPOINT-RULES.md`. |
| `src/app/[locale]/docs/agents/[agentId]/page.tsx` | No code change; data update via agent-content sync (5.1) flows through. Spot check G1 and G2 detail pages render correctly. |
| `src/app/[locale]/docs/changelog/page.tsx` | Add a single combined `v12.0.1 (2026-04-07)` entry covering v11.1 through v12.0.1, with a top-level **BREAKING CHANGE** banner. |

### 5.5 Changelog entry (in-page and `CHANGELOG.md`)

Add a single combined entry at the top of both `CHANGELOG.md` (repo root) and the changelog page:

```
## [v12.0.1] - 2026-04-07

### BREAKING CHANGES
- `/diverga:research-orchestrator` and `/diverga:vs-arena` removed.
  Use `/diverga:orchestrator` instead. The unified orchestrator handles
  Agent Teams dispatch, VS Arena debate, and subagent fallback.

### Added
- `/diverga:orchestrator` — unified Agent Teams orchestrator
- Agent Teams dispatch path with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`
- Team Dispatch Bypass via `DIVERGA_TEAM_DISPATCH=1`
- Checkpoint Rule 7 (Team Dispatch Bypass)
- Researcher profile setup wizard (2-step)
- Selective symlink dev mode (`scripts/dev.js`)
- One-command deploy pipeline (`scripts/deploy.js`)
- `latex2omml` integration in G2 for native Word equations
- LaTeX syntax validation patterns (X1-X6) in G5

### Removed
- `research-orchestrator` and `vs-arena` skills (merged into orchestrator)
- 4-step config wizard (replaced by 2-step researcher profile)

### Fixed
- Plugin hook duplication
- Version drift across manifests
- Hook path portability (`$HOME` instead of hardcoded paths)
```

### 5.6 Phase 2 commit message

```
feat(docs): update for Diverga v12.0.1

- Sync 24 agent metadata and content from core SKILL.md (G1 journal
  pipeline, G2 latex2omml, setup researcher profile, etc.)
- Rewrite CLI page to use /diverga:orchestrator (replaces removed
  /diverga-research-orchestrator and /diverga-vs-arena)
- Add /docs/orchestrator, /docs/agent-teams, /docs/developer/dev-mode
- Update quick-start, configuration, checkpoints pages for v12
- Add combined v12.0.1 changelog entry with BREAKING CHANGES banner
- Bump features.ts version references from v11.0 to v12.0.1
```

## 6. Validation

After each phase, run:

```
pnpm build      # must compile without errors
pnpm lint       # no new errors
```

After Phase 2, additionally verify in `pnpm dev`:
- `/en` home page renders, hero copy reflects new tone
- `/en/agents` catalog renders all 24 agents, no broken links to deleted content
- `/en/docs/cli` shows new commands, no dead `/diverga-research-orchestrator`
- `/en/docs/orchestrator` renders
- `/en/docs/agent-teams` renders
- `/en/docs/developer/dev-mode` renders
- `/en/docs/agents/g1` and `/en/docs/agents/g2` render with updated content
- `/en/docs/changelog` shows the new combined entry with breaking-change banner

If `pnpm build` fails after Phase 1, the deletion broke an import. Fix the import (most likely in `agent-content/index.ts` or a categories file) before committing Phase 1.

If `pnpm build` fails after Phase 2, fix in place; do not split into a third commit.

## 7. Worktree and Push

**Setup (already done)**
- Worktree created at `/Volumes/External SSD/Projects/Diverga/diverga-docs-v12-cleanup`
- Branch `docs/v12-update-and-cleanup` based on `main` at `140ead7`
- `pnpm install` complete
- Baseline `pnpm build` passing (175 static pages)

**Completion sequence**
1. Phase 1 commit on `docs/v12-update-and-cleanup`
2. `pnpm build` validation
3. Phase 2 commit on `docs/v12-update-and-cleanup`
4. `pnpm build` validation
5. In the main repo working dir, fast-forward merge `docs/v12-update-and-cleanup` into `main`
6. `git push origin main`
7. Remove the worktree (`git worktree remove`)
8. Delete the merged branch (`git branch -d docs/v12-update-and-cleanup`)

**Note on dirty main**: the main repo currently has uncommitted local-only state files in `.omc/`. These are session artifacts and do not affect the merge. They remain untouched.

## 8. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Deleting a zombie content file breaks an import somewhere unexpected | Run `pnpm build` immediately after Phase 1 deletions; grep the codebase for each deleted basename before committing |
| Tone reduction over-corrects and removes descriptive content | Apply rewriting rules only to entries containing banned vocabulary; leave neutral descriptions untouched |
| Agent metadata sync introduces typos in trigger strings | Source directly from frontmatter via Read tool; do not transcribe by memory |
| New page paths conflict with existing routes | Verified absent: `/docs/orchestrator`, `/docs/agent-teams`, `/docs/developer/dev-mode` are not present in the current `app/[locale]/docs/` tree |
| Korean locale becomes inconsistent with English | Accepted; tracked as follow-up. The combined changelog entry will note "English locale only; Korean follow-up pending" |
| Push to `main` is direct, no PR review | Two clean commits, both validated by `pnpm build`. Roll-forward with another commit if a regression appears post-deploy. |

## 9. Out of Scope (explicit)

- Korean translation
- New visual assets, diagrams, screenshots
- GitHub release authoring
- Vercel deploy verification
- execution-context-architecture page
- Component refactoring beyond what is necessary to remove dead imports
- Any change to `messages/ko.json`
