# Diverga Documentation Enhancement Changelog

**Date**: 2026-01-28
**Commit**: 9a6822d
**Reference Commit**: c425625 (before changes)

---

## User Feedback Summary

The following 5 major feedback areas were addressed in this update:

### 1. Landing Page Redesign
**Feedback**: "Void Cartography" label at T-0.42 is unclear to researchers. The tagline "40 specialized agents orchestrating systematic literature review" doesn't reflect Diverga's unique value.

### 2. VS Methodology Visualization - Circle Size
**Feedback**: T-values (0.35, 0.72, 0.50, etc.) are barely visible in the spectrum visualization circles (12px size too small).

### 3. Agent Detail Pages - Missing Content
**Feedback**: Agent detail pages show minimal content compared to rich SKILL.md files. Missing: VS Process details, T-Score Reference Tables, Input/Output Requirements, Example Workflows, Checkpoints, Creativity Mechanisms, Code Templates, References.

### 4. Workflow Pages Enhancement
**Feedback**:
- Agent Category Progression Flow (A→B→C→D→E) box lacks information
- Workflow Progress bar doesn't show step details on hover
- Terminal preview doesn't explain what A, B, C letters mean

### 5. A6 Workflow Page - Nanobanana Integration
**Feedback**:
- Title is "AI in Education" instead of "Conceptual Framework Visualization"
- No actual Nanobanana rendering example
- Missing workflow procedure documentation

---

## Implementation Details

### Phase 1: Quick Fixes (2026-01-28)

#### 1.1 Landing Page Text Updates
**File**: `src/components/home/VoidHero.tsx`

| Element | Before | After |
|---------|--------|-------|
| T-Score Label | "Void Cartography" | "Anti-modal yet feasible" |
| Description | "Anti-modal yet feasible" | "Where creative research escapes mode collapse" |
| Main Tagline (EN) | "40 specialized agents orchestrating systematic literature review" | "Beyond predictable AI recommendations. Diverge from the obvious." |
| Main Tagline (KO) | - | "뻔한 AI 추천을 넘어서. 명백한 것에서 벗어나세요." |
| Subtitle (EN) | - | "40 research agents preventing mode collapse through VS methodology." |
| Subtitle (KO) | - | "40개의 연구 에이전트가 VS 방법론으로 모드 붕괴를 방지합니다." |

#### 1.2 VS Methodology Circle Size Increase
**File**: `src/components/visualization/TScoreSpectrum.tsx`

| Property | Before | After |
|----------|--------|-------|
| Circle Size | `h-3 w-3` (12px) | `h-10 w-10` (40px) |
| Hover Scale | `scale: 1.5` | `scale: 1.3` |
| Inner Content | None | T-score value displayed (`point.score.toFixed(2)`) |
| Text Style | - | `font-mono text-[10px] font-bold text-void-deep` |

#### 1.3 A6 Workflow Rename
**File**: `src/lib/data/workflows.ts`

| Property | Before | After |
|----------|--------|-------|
| ID | `a6-ai-education` | `a6-conceptual-framework` |
| Slug | `a6-ai-education` | `a6-conceptual-framework` |
| Name (EN) | "A6 Example: AI in Education" | "A6: Conceptual Framework Visualization" |
| Name (KO) | "A6 예시: 교육에서의 AI" | "A6: 개념적 프레임워크 시각화" |
| Description (EN) | - | "Generate academic conceptual framework diagrams using Nanobanana (Gemini Image)" |
| Description (KO) | - | "Nanobanana(Gemini 이미지)를 사용한 학술 개념적 프레임워크 다이어그램 생성" |

---

### Phase 2: Workflow Page Enhancements (2026-01-28)

#### 2.1 Category Progression Flow Tooltips
**File**: `src/app/[locale]/workflows/page.tsx`

Added `categoryInfo` constant with complete category details:
- Category letter (A-H)
- English and Korean names
- English and Korean descriptions
- List of agents in each category

Added hover tooltips to category circles showing:
- Category full name
- Category description
- Agent list (e.g., "A1, A2, A3, A4, A5, A6")

#### 2.2 Progress Bar Hover States
**File**: `src/app/[locale]/workflows/[slug]/page.tsx`

Added interactive tooltips on progress bar segments:
- Step number
- Agent name (localized)
- Stage description
- Checkpoint indicator (if applicable)

#### 2.3 Terminal Timeline Enhancement
**File**: `src/app/[locale]/workflows/[slug]/page.tsx`

Added `categoryNames` constant and hover tooltips on letter indicators:
- Shows full category name on hover
- Shows agent ID

---

### Phase 3: A6 Nanobanana Integration (2026-01-28)

#### 3.1 NanobananaDemoBlock Component
**File**: `src/components/visualization/NanobananaDemoBlock.tsx` (NEW)

Created comprehensive demo component with:

1. **Research Context Card**:
   - Research question display
   - Variable structure (Independent → Mediators → Dependent)
   - Theoretical framework and T-Score badge

2. **Workflow Procedure** (5 Steps):
   - Step 1: Define Research Context
   - Step 2: Generate ASCII Blueprint
   - Step 3: Create Nanobanana Prompt
   - Step 4: Call Gemini API
   - Step 5: Quality Review (Checkpoint)

3. **Generated Framework Preview**:
   - Placeholder for generated image
   - Variable relationship visualization

4. **Code Template Section**:
   - Python code with Gemini API integration
   - Copy button functionality
   - Syntax highlighted display

#### 3.2 Integration
**Files Modified**:
- `src/components/visualization/index.ts` - Added export
- `src/app/[locale]/workflows/[slug]/page.tsx` - Integrated for a6-conceptual-framework workflow

---

### Phase 4: Agent Detail Pages Enhancement (2026-01-28)

#### 4.1 Extended Agent Content Type
**File**: `src/lib/data/types.ts`

Added new interfaces:
```typescript
interface BilingualText { en: string; ko: string; }
interface VSPhase { number: number; title: BilingualText; purpose: BilingualText; example?: string; }
interface TScoreRange { range: string; label: BilingualText; examples: string[]; }
interface ExtendedAgentContent {
  vsProcess?: { phases: VSPhase[] };
  tScoreReference?: { ranges: TScoreRange[] };
  inputRequirements?: { required: {...}[]; optional: {...}[] };
  outputFormat?: { sections: {...}[]; example?: string };
  creativityMechanisms?: {...}[];
  checkpoints?: {...}[];
  codeTemplates?: {...}[];
  references?: string[];
  exampleWorkflow?: {...};
}
```

#### 4.2 AgentDetailSections Component
**File**: `src/components/agents/AgentDetailSections.tsx` (NEW)

Created collapsible sections component with:
- VS Process Timeline (animated phases)
- T-Score Reference Card (color-coded ranges)
- Input/Output Requirements (styled lists)
- Creativity Mechanisms (card grid)
- Checkpoints (color-coded by level)
- Code Templates (syntax display with language tags)
- References (academic citations)
- Example Workflow (research context)

#### 4.3 Agent Content Files (40 total)
**Directory**: `src/lib/data/agent-content/` (NEW)

Created individual content files for all 40 agents:

| Category | Files |
|----------|-------|
| A (Foundation) | a1-content.ts, a2-content.ts, a3-content.ts, a4-content.ts, a5-content.ts, a6-content.ts |
| B (Evidence) | b1-content.ts, b2-content.ts, b3-content.ts, b4-content.ts, b5-content.ts |
| C (Design & Meta) | c1-content.ts, c2-content.ts, c3-content.ts, c4-content.ts, c5-content.ts, c6-content.ts, c7-content.ts |
| D (Data Collection) | d1-content.ts, d2-content.ts, d3-content.ts, d4-content.ts |
| E (Analysis) | e1-content.ts, e2-content.ts, e3-content.ts, e4-content.ts, e5-content.ts |
| F (Quality) | f1-content.ts, f2-content.ts, f3-content.ts, f4-content.ts, f5-content.ts |
| G (Communication) | g1-content.ts, g2-content.ts, g3-content.ts, g4-content.ts, g5-content.ts, g6-content.ts |
| H (Specialized) | h1-content.ts, h2-content.ts |

**Index file**: `src/lib/data/agent-content/index.ts`
- Imports all 40 content files
- Exports `getAgentContent(agentId)` function

#### 4.4 Integration into Agent Detail Pages
**Files Modified**:
- `src/app/[locale]/agents/[agentId]/page.tsx` - Added getAgentContent import and prop passing
- `src/components/agents/AgentDetail.tsx` - Added extendedContent prop and AgentDetailSections rendering

---

## Files Summary

### Files Modified (9)
1. `src/app/[locale]/agents/[agentId]/page.tsx`
2. `src/app/[locale]/workflows/[slug]/page.tsx`
3. `src/app/[locale]/workflows/page.tsx`
4. `src/components/agents/AgentDetail.tsx`
5. `src/components/home/VoidHero.tsx`
6. `src/components/visualization/TScoreSpectrum.tsx`
7. `src/components/visualization/index.ts`
8. `src/lib/data/types.ts`
9. `src/lib/data/workflows.ts`

### Files Created (43)
1. `src/components/agents/AgentDetailSections.tsx`
2. `src/components/visualization/NanobananaDemoBlock.tsx`
3. `src/lib/data/agent-content/index.ts`
4. `src/lib/data/agent-content/a1-content.ts` through `h2-content.ts` (40 files)

---

## Build Verification

- **TypeScript**: Compiled successfully
- **Static Pages Generated**: 101 pages
- **Build Time**: ~10 seconds

---

## Deployment

- **Platform**: Vercel
- **URL**: https://diverga-docs-wfl9.vercel.app
- **Auto-deploy**: Triggered on push to main branch

---

## Next Steps (Potential)

1. Generate actual Nanobanana image using Gemini API (user provided API key)
2. Add more detailed content to agent files based on full SKILL.md extraction
3. Implement interactive workflow simulation
4. Add search functionality for agent content
