# Diverga Documentation Website - Technical Specification

## 1. Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js (App Router) | 16.1.5 |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | Framer Motion | 11.x |
| i18n | next-intl | 3.x |
| Search | Fuse.js | 7.x |
| Icons | Lucide React | 0.x |
| Deployment | Vercel | - |

---

## 2. Project Structure

```
diverga-docs/
├── src/
│   ├── app/
│   │   └── [locale]/                 # i18n routing
│   │       ├── layout.tsx            # Root layout with providers
│   │       ├── page.tsx              # Homepage
│   │       ├── agents/
│   │       │   ├── page.tsx          # Agent catalog (search/filter)
│   │       │   └── [agentId]/
│   │       │       └── page.tsx      # Agent detail page
│   │       ├── getting-started/
│   │       │   └── page.tsx          # Installation guide
│   │       ├── workflows/
│   │       │   ├── page.tsx          # Workflow overview
│   │       │   └── [slug]/
│   │       │       └── page.tsx      # Workflow detail
│   │       ├── docs/
│   │       │   └── page.tsx          # Documentation index
│   │       └── playground/
│   │           └── page.tsx          # Static demo
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Navigation + language toggle
│   │   │   ├── Footer.tsx            # Links + branding
│   │   │   └── LanguageToggle.tsx    # EN/KO switch
│   │   ├── home/
│   │   │   ├── HeroSection.tsx       # Animated hero
│   │   │   ├── ProblemSolution.tsx   # Mode collapse explanation
│   │   │   ├── AgentCategoryGrid.tsx # 8 category cards
│   │   │   └── CTASection.tsx        # Call to action
│   │   └── agents/
│   │       ├── AgentCard.tsx         # Agent preview card
│   │       ├── AgentDetail.tsx       # Full agent info
│   │       ├── AgentFilter.tsx       # Category/paradigm filters
│   │       └── TScoreBadge.tsx       # VS level indicator
│   ├── lib/
│   │   ├── data/
│   │   │   ├── types.ts              # TypeScript interfaces
│   │   │   ├── agents.ts             # 40 agent definitions
│   │   │   └── categories.ts         # 8 categories
│   │   └── utils/
│   │       └── cn.ts                 # Tailwind class merger
│   ├── i18n/
│   │   ├── config.ts                 # Locale configuration
│   │   └── request.ts                # next-intl setup
│   ├── styles/
│   │   └── globals.css               # OKLCH theme + custom classes
│   └── middleware.ts                 # i18n routing middleware
├── messages/
│   ├── en.json                       # English translations
│   └── ko.json                       # Korean translations
├── docs/                             # Project documentation
│   ├── PRD.md
│   ├── SPEC.md
│   ├── DESIGN.md
│   └── CONTRIBUTING.md
├── public/                           # Static assets
├── tailwind.config.ts                # Tailwind + OKLCH colors
├── next.config.ts                    # Next.js + next-intl
├── vercel.json                       # Deployment config
└── package.json
```

---

## 3. Data Schema

### Agent Interface

```typescript
export interface Agent {
  id: string;                              // "A1", "B2", "C5"
  slug: string;                            // "research-question-refiner"
  name: { en: string; ko: string };
  category: string;                        // "A", "B", "C"...
  icon: string;                            // Emoji
  tier: "LOW" | "MEDIUM" | "HIGH";
  model: "haiku" | "sonnet" | "opus";
  vsLevel: "FULL" | "ENHANCED" | "LIGHT";
  description: { en: string; ko: string };
  purpose: { en: string; ko: string };
  triggers: { en: string[]; ko: string[] };
  relatedAgents: string[];
  paradigms: ("quantitative" | "qualitative" | "mixed")[];
  checkpoint: "REQUIRED" | "RECOMMENDED" | "OPTIONAL";
}
```

### Category Interface

```typescript
export interface Category {
  id: string;                              // "A", "B"...
  slug: string;                            // "foundation", "evidence"
  name: { en: string; ko: string };
  description: { en: string; ko: string };
  color: string;                           // Tailwind color class
  agentCount: number;
}
```

---

## 4. Page Specifications

### Homepage (`/`)

| Section | Component | Description |
|---------|-----------|-------------|
| Hero | `HeroSection` | Animated title + VS methodology preview |
| Problem | `ProblemSolution` | Mode Collapse problem (TAM example) |
| Solution | (in ProblemSolution) | VS methodology 3-step summary |
| Agents | `AgentCategoryGrid` | 8 category cards with agent counts |
| CTA | `CTASection` | "Start Your Research Journey" button |

### Agents Catalog (`/agents`)

| Feature | Implementation |
|---------|----------------|
| Search | Fuse.js fuzzy search on name, description, triggers |
| Filters | Category, Paradigm (quant/qual/mixed), Tier (LOW/MEDIUM/HIGH) |
| Grid | Responsive 1-2-3 column layout |
| Cards | Agent name, ID, category badge, tier indicator |

### Agent Detail (`/agents/[agentId]`)

| Section | Content |
|---------|---------|
| Header | Name, ID badge, category breadcrumb |
| Overview | 2-3 sentence description |
| When to Use | Trigger keywords and scenarios |
| Model Info | Tier, model type, VS level |
| Related | Related agent cards |

### Getting Started (`/getting-started`)

| Step | Content |
|------|---------|
| Prerequisites | Node.js 18+, macOS/Windows/Linux |
| Install Claude Code | Platform-specific commands (tabs) |
| Install Diverga | Single npm command |
| First Call | Example agent invocation |

### Human Checkpoints (`/docs/checkpoints`)

Comprehensive documentation page for the v6.0 Human Checkpoint system.

| Section | Content |
|---------|---------|
| Hero | Title, subtitle, philosophy statement |
| Why Checkpoints | Trust building - AI doesn't decide for you |
| Checkpoint Levels | Visual traffic light (🔴 REQUIRED, 🟠 RECOMMENDED, 🟡 OPTIONAL) |
| When Checkpoints Appear | Research journey map with stage → checkpoint → decision |
| How to Respond | Commands: approve, reject, explain, alternatives |
| Real-World Scenarios | 3 practical examples (Theory, Ethics, Low T-Score) |
| Key Checkpoints Reference | Full table of all checkpoint IDs |
| Decision Audit Trail | Documentation for methodology section |
| VS Methodology Connection | Phase 5 is Human Checkpoint |
| CTA | Links to agents, workflows, getting started |

**CheckpointLevel Type**:
```typescript
export type CheckpointLevel = "REQUIRED" | "RECOMMENDED" | "OPTIONAL" | null;
```

**Agent Checkpoint Interface**:
```typescript
checkpoint?: {
  id: string;          // e.g., "CP_THEORY_SELECTION"
  level: CheckpointLevel;
};
```

**Key Checkpoints**:
| ID | Level | Trigger |
|----|-------|---------|
| CP_RESEARCH_DIRECTION | REQUIRED | Finalizing research question |
| CP_PARADIGM_SELECTION | REQUIRED | Choosing methodology paradigm |
| CP_THEORY_SELECTION | REQUIRED | Selecting theoretical framework |
| CP_METHODOLOGY_APPROVAL | REQUIRED | Approving research design |
| CP_META_GATE | REQUIRED | Starting meta-analysis |
| CP_ANALYSIS_PLAN | RECOMMENDED | Before analysis execution |
| CP_INTEGRATION_STRATEGY | RECOMMENDED | Mixed methods integration |
| CP_RESPONSE_APPROVAL | RECOMMENDED | Peer review response |
| CP_VISUALIZATION_PREFERENCE | OPTIONAL | Creating diagrams |

---

## 5. i18n Strategy

```typescript
// Supported locales
const locales = ['en', 'ko'];
const defaultLocale = 'en';

// URL structure
// /en/agents/a1  (English)
// /ko/agents/a1  (Korean)
// /agents/a1     (redirects to /en/agents/a1)
```

### Translation Files

- `messages/en.json` - English UI strings
- `messages/ko.json` - Korean UI strings
- Agent data includes both languages inline

---

## 6. Build Output

```
Route (app)
├ ○ /_not-found
├ ● /[locale]                    # Homepage (en, ko)
├ ● /[locale]/agents             # Catalog (en, ko)
├ ● /[locale]/agents/[agentId]   # 40 agents × 2 languages = 80 pages
├ ● /[locale]/docs               # Documentation index
├ ● /[locale]/getting-started    # Installation guide
├ ● /[locale]/playground         # Static demo
├ ● /[locale]/workflows          # Workflow overview
└ ƒ /[locale]/workflows/[slug]   # Dynamic workflow pages

Total: 95 static pages
```

---

## 7. Deployment

| Setting | Value |
|---------|-------|
| Platform | Vercel |
| Region | US East (iad1) |
| Framework | Next.js (auto-detected) |
| Build Command | `pnpm build` |
| Output Directory | `.next` |

### vercel.json

```json
{
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```
