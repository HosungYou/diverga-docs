# Agent Documentation UI Components

**Version:** 2.0
**Design System:** VS Diverge (T-Score 0.30-0.40)
**Framework:** Next.js + React + TypeScript + Framer Motion
**Status:** Production-ready

## Overview

Six new user-friendly components designed to transform technical agent documentation into emotionally engaging, memorable experiences. Following VS Diverge principles, these components avoid modal (predictable) patterns while maintaining usability through progressive disclosure and the 5-second rule.

---

## Components

### 1. QuickSummaryCard

**Purpose:** 5-second hero area for instant understanding

**Props:**
```typescript
interface QuickSummaryCardProps {
  quickSummary: QuickSummary;
  locale: 'en' | 'ko';
}
```

**Features:**
- **Dramatic one-liner** with gradient accent bar
- **Best For** section with green checkmarks and positive vibe
- **Not Suitable For** section with red warnings and muted colors
- **Time estimate** with animated progress bar
- Ambient gradient glow effects
- Staggered animation reveals

**Design Choices:**
- Asymmetric layout with side accent bar (T-Score: 0.35)
- Dual-column comparison (Best/Not) for quick decision-making
- Animated progress bar for visual engagement
- Glassmorphism with ambient glows

**Usage:**
```tsx
import { QuickSummaryCard } from '@/components/agents';

<QuickSummaryCard
  quickSummary={{
    oneLiner: { en: "Turn chaos into insight", ko: "혼돈을 통찰로" },
    bestFor: [
      { en: "Large datasets", ko: "대규모 데이터셋" }
    ],
    notFor: [
      { en: "Simple queries", ko: "단순 쿼리" }
    ],
    timeToResult: "2-4 hours"
  }}
  locale="en"
/>
```

---

### 2. PersonaCard

**Purpose:** Humanize agents with personality, voice, and archetype

**Props:**
```typescript
interface PersonaCardProps {
  persona: AgentPersona;
  locale: 'en' | 'ko';
  themeColor: string; // Hex color for agent's category
}
```

**Features:**
- **Archetype name** with serif font emphasis (designer touch)
- **Voice sample** with typewriter animation on hover
- **Motto** in quote style with oversized quotation mark
- **Expandable personality** description
- Radial gradient mesh background
- Pulsing category color dot

**Design Choices:**
- Serif font for archetype (creative typography, T-Score: 0.38)
- Typewriter effect creates anticipation and engagement
- Oversized decorative quote mark (editorial aesthetic)
- Speech bubble UI for voice sample

**Usage:**
```tsx
import { PersonaCard } from '@/components/agents';

<PersonaCard
  persona={{
    archetype: "The Pattern Detective",
    personality: { en: "Methodical yet curious...", ko: "체계적이면서도..." },
    voiceSample: { en: "Let's uncover the hidden patterns...", ko: "숨겨진 패턴을..." },
    motto: { en: "Data speaks, I listen", ko: "데이터는 말하고, 나는 듣는다" }
  }}
  locale="en"
  themeColor="#ff6b6b"
/>
```

---

### 3. PromptStarters

**Purpose:** Copy-paste ready prompts with context and expected responses

**Props:**
```typescript
interface PromptStartersProps {
  promptStarters: PromptStarter[];
  locale: 'en' | 'ko';
}
```

**Features:**
- **Language toggle** (EN/KO) with active state highlighting
- **Copy button** with animated check icon feedback
- **Difficulty badges** (beginner/intermediate/advanced) auto-detected
- **Collapsible expected response** (progressive disclosure)
- Staggered grid layout (alternating left/right entry animations)
- Glow effects on hover based on difficulty color

**Design Choices:**
- Prompt displayed in monospace font with side accent bar
- Expected response hidden by default (5-second rule)
- Copy animation gives instant feedback (T-Score: 0.32)
- Color-coded difficulty creates visual hierarchy

**Usage:**
```tsx
import { PromptStarters } from '@/components/agents';

<PromptStarters
  promptStarters={[
    {
      prompt: { en: "Analyze this dataset...", ko: "데이터셋 분석..." },
      context: { en: "When you have...", ko: "다음과 같은 경우..." },
      expectedResponse: { en: "The agent will...", ko: "에이전트는..." }
    }
  ]}
  locale="en"
/>
```

---

### 4. DecisionHelper

**Purpose:** Two-column comparison for agent selection decisions

**Props:**
```typescript
interface DecisionHelperProps {
  decisionHelper: DecisionHelper;
  locale: 'en' | 'ko';
  agents?: Agent[]; // For alternative agent mini-cards
}
```

**Features:**
- **Two-column layout**: Green "Use This Agent" vs Yellow "Consider Alternatives"
- **Alternative agents** with hover-reveal detailed reasons
- **Mobile accordion** format for small screens
- Checklist UI with animated dots
- Glow effects based on column color (green/yellow)

**Design Choices:**
- Dual-column creates clear comparison (T-Score: 0.30)
- Color psychology: green (go), yellow (caution)
- Alternative agent cards with progressive disclosure on hover
- Mini-cards show icon, ID, name, and condition

**Usage:**
```tsx
import { DecisionHelper } from '@/components/agents';

<DecisionHelper
  decisionHelper={{
    useWhen: [
      { en: "Complex datasets", ko: "복잡한 데이터셋" }
    ],
    dontUseWhen: [
      { en: "Simple queries", ko: "단순 쿼리" }
    ],
    alternativeAgents: [
      { agentId: "C2-StatisticalAdvisor", condition: { en: "For simpler analysis", ko: "더 간단한 분석" } }
    ]
  }}
  locale="en"
  agents={allAgents}
/>
```

---

### 5. UseCaseGallery

**Purpose:** Filterable real-world scenario showcase

**Props:**
```typescript
interface UseCaseGalleryProps {
  useCases: UseCase[];
  locale: 'en' | 'ko';
}
```

**Features:**
- **Discipline filter tabs** with icons (education, psychology, medicine, business)
- **Complexity badges** with visual dots (●, ●●, ●●●)
- **Expandable outcome** (collapsible for progressive disclosure)
- Masonry-style grid layout
- AnimatePresence for smooth filter transitions
- Glow effects based on complexity color

**Design Choices:**
- Icon-based discipline filtering (visual first, T-Score: 0.34)
- Complexity shown via both color and dot pattern
- Outcome hidden by default (progressive disclosure)
- Staggered card animations on filter change

**Usage:**
```tsx
import { UseCaseGallery } from '@/components/agents';

<UseCaseGallery
  useCases={[
    {
      title: { en: "Meta-Analysis of Learning", ko: "학습 메타분석" },
      scenario: { en: "A researcher wanted...", ko: "연구자가..." },
      outcome: { en: "Successfully analyzed...", ko: "성공적으로 분석..." },
      discipline: "education",
      complexity: "intermediate"
    }
  ]}
  locale="en"
/>
```

---

### 6. JourneyNarrativeSection

**Purpose:** Storytelling UI for transformation before → steps → after

**Props:**
```typescript
interface JourneyNarrativeSectionProps {
  journey: Journey;
  locale: 'en' | 'ko';
}
```

**Features:**
- **Timeline visualization** with connecting gradient line
- **Before state** (red, modal T-Score)
- **Transformation steps** (gradient progression cyan → green)
- **After state** (green, creative T-Score) with rotating target icon
- Time estimate footer
- Viewport-triggered animations (scrollytelling)

**Design Choices:**
- Vertical timeline with alternating left/right cards (T-Score: 0.40)
- Color gradient represents T-Score journey: modal (red) → creative (green)
- Oversized timeline nodes for visual prominence
- Scrollytelling with viewport-based animation triggers
- Rotating target icon in final state adds dynamism

**Usage:**
```tsx
import { JourneyNarrativeSection } from '@/components/agents';

<JourneyNarrativeSection
  journey={{
    startState: { en: "Struggling with...", ko: "어려움을 겪고..." },
    transformation: [
      { en: "First, the agent...", ko: "먼저, 에이전트가..." },
      { en: "Then, it processes...", ko: "그런 다음, 처리..." }
    ],
    endState: { en: "Now you have...", ko: "이제 당신은..." },
    timeEstimate: "3-5 hours"
  }}
  locale="en"
/>
```

---

## Design System

### Color Palette (from tailwind.config.ts)

**Void Spectrum (Backgrounds):**
- `void-absolute`: #000000
- `void-deep`: #050508
- `void-surface`: #0a0a0f
- `void-elevated`: #12121a

**Stellar Spectrum (Text):**
- `stellar-core`: #ffffff
- `stellar-bright`: #f0f0f5
- `stellar-dim`: #8888aa
- `stellar-faint`: #44445a

**T-Score Spectrum (Accents):**
- `tscore-modal`: #ff3366 (predictable)
- `tscore-typical`: #ff8844
- `tscore-balanced`: #ffcc22
- `tscore-creative`: #44ffaa (ideal)
- `tscore-divergent`: #22ccff (too unusual)

### Typography

**Font Families:**
- `font-sans`: IBM Plex Sans / Pretendard
- `font-display`: Space Mono / JetBrains Mono
- `font-mono`: JetBrains Mono / Fira Code

**Font Sizes:**
- `text-display-xl`: 3rem → 7rem (responsive)
- `text-heading-1`: 2rem → 3.5rem
- `text-body`: 1rem (1.7 line-height)
- `text-micro`: 0.75rem (0.05em letter-spacing)

### Animations

**Built-in:**
- `animate-fade-in`: fadeIn 0.5s
- `animate-slide-up`: slideUp 0.6s cubic-bezier
- `animate-glow-pulse`: glowPulse 3s infinite

**Custom (in components):**
- Typewriter effect (PersonaCard)
- Staggered reveals (QuickSummaryCard)
- Viewport-triggered (JourneyNarrativeSection)

### Shadows

- `shadow-glow-sm`: 0 0 10px rgba(68, 255, 170, 0.1)
- `shadow-glow`: 0 0 20px rgba(68, 255, 170, 0.15)
- `shadow-glow-lg`: 0 0 40px rgba(68, 255, 170, 0.2)
- `shadow-glow-xl`: 0 0 60px rgba(68, 255, 170, 0.25)

---

## VS Diverge Principles Applied

### 1. Avoid Modal (T < 0.20)
- **No** default system fonts (Arial, Roboto, Inter)
- **No** purple gradients on white
- **No** cookie-cutter card layouts

### 2. Target Creative Range (T = 0.30-0.40)
- Asymmetric layouts (QuickSummaryCard accent bar)
- Unexpected interactions (PersonaCard typewriter)
- Diagonal flow in timeline (JourneyNarrativeSection)
- Editorial typography (serif for archetypes)

### 3. Progressive Disclosure
- Expected responses hidden (PromptStarters)
- Outcome collapsed by default (UseCaseGallery)
- Personality expandable (PersonaCard)

### 4. 5-Second Rule
- One-liner visible immediately (QuickSummaryCard)
- Difficulty badges surface-level (PromptStarters)
- Timeline before/after states visible (JourneyNarrativeSection)

### 5. Emotional Engagement
- Voice samples create personality connection
- Color psychology in DecisionHelper (green/yellow)
- Transformation narrative in JourneyNarrativeSection
- Animated feedback (copy button, glow effects)

---

## Integration Example

```tsx
import {
  QuickSummaryCard,
  PersonaCard,
  PromptStarters,
  DecisionHelper,
  UseCaseGallery,
  JourneyNarrativeSection
} from '@/components/agents';

export default function AgentPage({ agent, extendedContent }) {
  const locale = useLocale() as 'en' | 'ko';

  return (
    <div className="space-y-16">
      {/* Hero Summary (5-second rule) */}
      {extendedContent?.quickSummary && (
        <QuickSummaryCard
          quickSummary={extendedContent.quickSummary}
          locale={locale}
        />
      )}

      {/* Persona Connection */}
      {extendedContent?.persona && (
        <PersonaCard
          persona={extendedContent.persona}
          locale={locale}
          themeColor={agent.categoryColor}
        />
      )}

      {/* Decision Support */}
      {extendedContent?.decisionHelper && (
        <DecisionHelper
          decisionHelper={extendedContent.decisionHelper}
          locale={locale}
          agents={allAgents}
        />
      )}

      {/* Practical Examples */}
      {extendedContent?.promptStarters && (
        <PromptStarters
          promptStarters={extendedContent.promptStarters}
          locale={locale}
        />
      )}

      {/* Real-World Proof */}
      {extendedContent?.useCases && (
        <UseCaseGallery
          useCases={extendedContent.useCases}
          locale={locale}
        />
      )}

      {/* Transformation Story */}
      {extendedContent?.journey && (
        <JourneyNarrativeSection
          journey={extendedContent.journey}
          locale={locale}
        />
      )}
    </div>
  );
}
```

---

## Performance Considerations

### Bundle Size
- Framer Motion: ~60KB gzipped
- All 6 components: ~25KB total
- Total impact: ~85KB (acceptable for improved UX)

### Animation Performance
- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `height` where possible (except collapsible sections)
- `will-change` applied sparingly in Framer Motion

### Lazy Loading
```tsx
import dynamic from 'next/dynamic';

const JourneyNarrativeSection = dynamic(
  () => import('@/components/agents').then(mod => mod.JourneyNarrativeSection),
  { ssr: false }
);
```

---

## Accessibility

### Keyboard Navigation
- All interactive elements focusable
- Copy buttons: `Enter` or `Space` to activate
- Expandable sections: `Enter` or `Space` to toggle

### Screen Readers
- Semantic HTML (`<button>`, `<nav>`, `<article>`)
- ARIA labels for icon-only buttons
- Focus indicators visible (outline on `:focus-visible`)

### Color Contrast
- All text meets WCAG AA (4.5:1 for normal text)
- Icon-only buttons have tooltips

---

## Browser Support

- Chrome/Edge: 100+
- Firefox: 95+
- Safari: 15+
- Mobile: iOS 15+, Android Chrome 100+

**Required features:**
- CSS Grid
- CSS Custom Properties
- Intersection Observer (for viewport animations)
- `navigator.clipboard` API (for copy buttons)

---

## Future Enhancements

### v2.1 (Planned)
- [ ] SuccessStory component (testimonials with metrics)
- [ ] Analogy component (metaphor-based explanations)
- [ ] ProTip component (expert tips with difficulty badges)
- [ ] FAQ component (searchable Q&A)
- [ ] Badge system (New/Popular/Essential visual markers)

### v2.2 (Ideas)
- [ ] Interactive T-Score slider (let users adjust creativity level)
- [ ] Agent comparison table (side-by-side feature matrix)
- [ ] Workflow visualizer (Mermaid-style agent chains)
- [ ] Code playground (live prompt testing with syntax highlighting)

---

## File Locations

```
/Volumes/External SSD/Projects/diverga-docs/src/components/agents/
├── QuickSummaryCard.tsx
├── PersonaCard.tsx
├── PromptStarters.tsx
├── DecisionHelper.tsx
├── UseCaseGallery.tsx
├── JourneyNarrativeSection.tsx
├── index.ts (barrel export)
└── README.md (this file)
```

---

## Credits

**Design System:** VS Diverge (Variable-Surprise Divergent Thinking)
**Designer:** Hosung You
**Implementation:** Claude Code (Opus 4.5)
**Framework:** Next.js 16.1.5 + React 19 + TypeScript 5
**Animation:** Framer Motion 12.29.2
**Icons:** Lucide React 0.563.0

**Design Principles:**
- T-Score targeting (0.30-0.40 creative range)
- Progressive disclosure (5-second rule)
- Emotional engagement (persona, storytelling)
- Accessibility-first (WCAG AA)
- Performance-conscious (GPU-accelerated animations)

---

**Last Updated:** 2025-01-31
**Version:** 2.0.0
**Status:** Production-ready
