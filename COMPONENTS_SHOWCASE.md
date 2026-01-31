# Agent Documentation Components Showcase

**Created:** 2025-01-31
**Location:** `/Volumes/External SSD/Projects/diverga-docs/src/components/agents/`
**Status:** Production-ready

---

## Visual Design Overview

### Design Philosophy: VS Diverge (T-Score 0.30-0.40)

**What makes these components different:**

1. **Asymmetry over symmetry** (avoid predictable center-alignment)
2. **Progressive disclosure** (hide complexity until needed)
3. **Emotional connection** (personality, voice, storytelling)
4. **Unexpected interactions** (typewriter, glow effects, scrollytelling)
5. **Editorial typography** (serif accents, dramatic scale changes)

---

## Component Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                    1. QuickSummaryCard                          │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ ├─ Turn chaos into crystal-clear insights               │  │
│  │    [One-liner with gradient accent bar]                  │  │
│  │                                                           │  │
│  │  ✓ Best For          │  ✗ Not For                       │  │
│  │  • Large datasets    │  • Simple queries                 │  │
│  │  • Complex analysis  │  • Quick lookups                  │  │
│  │                                                           │  │
│  │  ⏱ Time: 2-4 hours  [━━━━━━━━━━] 100%                  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                       2. PersonaCard                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ ● The Pattern Detective [serif font, prominent]          │  │
│  │ ├─ "Let's uncover the hidden patterns..." [typewriter]  │  │
│  │                                                           │  │
│  │    " Data speaks, I listen                               │  │
│  │      - and I never miss a word. "                        │  │
│  │      [oversized quote mark, italic]                      │  │
│  │                                                           │  │
│  │ [Click to expand personality description]                │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                     3. PromptStarters                           │
│  [EN | KO]  ← Language toggle                                  │
│                                                                 │
│  ┌────────────────────────────────────────────────────┐        │
│  │ [Intermediate] #1                          [Copy] │        │
│  │ When you have structured data...                   │        │
│  │                                                     │        │
│  │ ├─ Analyze this dataset for correlation patterns   │        │
│  │    between X and Y variables.                      │        │
│  │                                                     │        │
│  │ ⚡ Expected Response ▼                             │        │
│  │ [Collapsed by default, click to expand]            │        │
│  └────────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    4. DecisionHelper                            │
│  ┌──────────────────┐  ┌──────────────────┐                    │
│  │ ✓ Use This Agent │  │ ⚠ Alternatives   │                    │
│  │ [Green column]   │  │ [Yellow column]  │                    │
│  │                  │  │                  │                    │
│  │ ● Complex data   │  │ ○ Simple queries │                    │
│  │ ● Multi-variable │  │ ○ Quick lookups  │                    │
│  └──────────────────┘  └──────────────────┘                    │
│                                                                 │
│  Alternative Agents:                                            │
│  [Mini-cards with hover-reveal conditions]                     │
│  🔍 C2-StatisticalAdvisor   📊 C3-EffectSizeExpert             │
│  [Hover to see: "For simpler analysis tasks"]                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    5. UseCaseGallery                            │
│  [All (12)] [🎓 Education (5)] [🧠 Psychology (4)] [💼 Business]│
│                                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │ 🎓          │ │ 🧠          │ │ 💼          │           │
│  │ [●●] Inter. │ │ [●●●] Adv.  │ │ [●] Begin.  │           │
│  │             │ │             │ │             │           │
│  │ Meta-Analysis│ │ Mediation   │ │ Survey Data │           │
│  │ of Learning │ │ Analysis    │ │ Insights    │           │
│  │             │ │             │ │             │           │
│  │ A researcher │ │ Examining...│ │ Analyzing...│           │
│  │ wanted to... │ │             │ │             │           │
│  │             │ │             │ │             │           │
│  │ ▼ View Result│ │ ▼ View      │ │ ▼ View      │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                6. JourneyNarrativeSection                       │
│              Transformation Journey                             │
│                                                                 │
│          ╭─────╮                                               │
│          │ 🔴  │ BEFORE: Struggling with...                    │
│          ╰──┬──╯ [Red card, modal state]                       │
│             │                                                   │
│             ↓                                                   │
│          ╭─────╮                                               │
│          │ ➡ 1 │ First, the agent analyzes...                 │
│          ╰──┬──╯ [Gradient cyan]                               │
│             │                                                   │
│             ↓                                                   │
│          ╭─────╮                                               │
│          │ ➡ 2 │ Then, it processes and validates...          │
│          ╰──┬──╯ [Gradient cyan→green]                         │
│             │                                                   │
│             ↓                                                   │
│          ╭─────╮                                               │
│          │ 🎯  │ AFTER: Now you have actionable insights       │
│          ╰─────╯ [Green card, creative state, rotating icon]  │
│                                                                 │
│          ⏱ Estimated Time: 3-5 hours                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Color Psychology

### T-Score Spectrum (Modal → Creative → Divergent)

```
Modal (Predictable)     Creative (Target)      Divergent (Too Unusual)
    0.0 ────────────────── 0.35 ────────────────── 1.0
     🔴                    🟢                       🔵
   #ff3366                #44ffaa                #22ccff
```

**Applied in components:**

- **JourneyNarrativeSection:** Red (before) → Green (after) represents transformation
- **QuickSummaryCard:** Green (best for), Red (not for) creates decision clarity
- **DecisionHelper:** Green (use), Yellow (caution) follows traffic light psychology
- **UseCaseGallery:** Complexity colors: Green (easy) → Orange (medium) → Red (hard)

---

## Typography Hierarchy

```
Display XL (7rem max)  ━━━━━━━━━━━━━━  Hero headlines
Display (5rem max)     ━━━━━━━━━━━━━━  Section titles
Heading 1 (3.5rem max) ━━━━━━━━━━       Component titles
Heading 2 (2.5rem max) ━━━━━━━━         Subsection titles
Body LG (1.125rem)     ━━━━━━           Emphasized text
Body (1rem)            ━━━━             Standard text
Caption (0.875rem)     ━━━              Secondary info
Micro (0.75rem)        ━━               Badges, labels
```

**Font choices:**

- **Sans-serif (IBM Plex Sans):** Body text, UI elements
- **Monospace (JetBrains Mono):** Code, badges, labels
- **Serif accents (PersonaCard):** Archetype names for editorial touch

---

## Animation Patterns

### 1. Entrance Animations

```typescript
// Staggered reveals (QuickSummaryCard)
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: index * 0.05 }}

// Scale entrance (UseCaseGallery cards)
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ delay: index * 0.05, duration: 0.4 }}

// Viewport-triggered (JourneyNarrativeSection)
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
```

### 2. Interaction Feedback

```typescript
// Copy button (PromptStarters)
<Check className="..." /> // Rotates in with scale
transition: { scale: 0 → 1, rotate: -180deg → 0deg }

// Hover glow (All cards)
.group:hover {
  box-shadow: 0 0 20px rgba(68, 255, 170, 0.2);
}

// Typewriter effect (PersonaCard)
setInterval(() => {
  setTypedText(text.slice(0, currentIndex++))
}, 30ms)
```

### 3. Progressive Disclosure

```typescript
// Collapse/expand (PromptStarters, UseCaseGallery)
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    />
  )}
</AnimatePresence>
```

---

## Responsive Breakpoints

```
Mobile:   < 640px  (sm)  Single column, accordion UI
Tablet:   640-1024px     Two columns
Desktop:  > 1024px (lg)  Three columns, side-by-side

Specific adaptations:
- DecisionHelper: Two columns → Accordion on mobile
- UseCaseGallery: 3 columns → 2 columns → 1 column
- JourneyNarrativeSection: Alternating left/right → Center-aligned
- PromptStarters: Language toggle stays horizontal
```

---

## Accessibility Features

### Keyboard Navigation

```
Tab         → Focus next interactive element
Enter/Space → Activate button, toggle collapse
Escape      → Close expanded sections (future enhancement)
```

### Screen Reader Announcements

```tsx
<button aria-label="Copy prompt to clipboard">
  <Copy className="..." />
</button>

<div role="region" aria-label="Expected response">
  {expectedResponse}
</div>
```

### Focus Indicators

```css
.focus-visible:focus {
  outline: 2px solid #44ffaa;
  outline-offset: 2px;
}
```

---

## Performance Metrics

### Bundle Impact

| Component               | Size (gzipped) | Dependencies       |
|-------------------------|----------------|--------------------|
| QuickSummaryCard        | ~3KB           | framer-motion      |
| PersonaCard             | ~4KB           | framer-motion      |
| PromptStarters          | ~5KB           | framer-motion      |
| DecisionHelper          | ~5KB           | framer-motion      |
| UseCaseGallery          | ~4KB           | framer-motion      |
| JourneyNarrativeSection | ~5KB           | framer-motion      |
| **Total**               | **~26KB**      | + 60KB for Motion  |

**Optimization strategies:**

1. **Lazy load** non-critical components:
   ```tsx
   const JourneyNarrativeSection = dynamic(() => import('...'), { ssr: false });
   ```

2. **Code split** by route:
   - Homepage: QuickSummaryCard only
   - Agent detail page: All components

3. **Image optimization** (future):
   - Use Next.js `<Image>` for persona avatars
   - WebP format with fallback

---

## Integration Checklist

### For Each Agent Page

```tsx
// 1. Import components
import {
  QuickSummaryCard,
  PersonaCard,
  PromptStarters,
  DecisionHelper,
  UseCaseGallery,
  JourneyNarrativeSection
} from '@/components/agents';

// 2. Add extended content to agent data
const extendedContent: ExtendedAgentContent = {
  quickSummary: { /* ... */ },
  persona: { /* ... */ },
  promptStarters: [ /* ... */ ],
  decisionHelper: { /* ... */ },
  useCases: [ /* ... */ ],
  journey: { /* ... */ }
};

// 3. Render in agent page
<div className="space-y-16">
  {/* Always show QuickSummary (5-second rule) */}
  <QuickSummaryCard quickSummary={extendedContent.quickSummary} locale={locale} />

  {/* Conditional rendering based on data availability */}
  {extendedContent.persona && <PersonaCard {...} />}
  {extendedContent.decisionHelper && <DecisionHelper {...} />}
  {extendedContent.promptStarters && <PromptStarters {...} />}
  {extendedContent.useCases && <UseCaseGallery {...} />}
  {extendedContent.journey && <JourneyNarrativeSection {...} />}
</div>
```

---

## Data Creation Guide

### Quick Content Template

```typescript
// For C4-MetaAnalyst agent example:
{
  quickSummary: {
    oneLiner: {
      en: "Transform scattered studies into systematic insights",
      ko: "흩어진 연구들을 체계적인 통찰로 변환"
    },
    bestFor: [
      { en: "Synthesizing 20+ studies", ko: "20개 이상의 연구 종합" },
      { en: "Evidence-based decision making", ko: "증거 기반 의사결정" }
    ],
    notFor: [
      { en: "Single study analysis", ko: "단일 연구 분석" },
      { en: "Quick literature scans", ko: "빠른 문헌 스캔" }
    ],
    timeToResult: "3-7 days"
  },

  persona: {
    archetype: "The Evidence Synthesizer",
    personality: {
      en: "Methodical, detail-oriented, pattern-driven. I see the forest AND the trees.",
      ko: "체계적이고, 세부사항에 집중하며, 패턴 중심적. 숲도 보고 나무도 봅니다."
    },
    voiceSample: {
      en: "Let me help you see the bigger picture by connecting these 47 studies...",
      ko: "47개의 연구를 연결하여 큰 그림을 보여드리겠습니다..."
    },
    motto: {
      en: "One study tells a story. A meta-analysis reveals the truth.",
      ko: "한 연구는 이야기를 말하고, 메타분석은 진실을 드러냅니다."
    }
  },

  promptStarters: [
    {
      prompt: {
        en: "I have 30 studies on [TOPIC]. Can you help me run a meta-analysis to determine the overall effect size?",
        ko: "[주제]에 대한 30개의 연구가 있습니다. 전체 효과크기를 결정하기 위해 메타분석을 도와주실 수 있나요?"
      },
      context: {
        en: "When you have extracted correlation matrices from multiple studies",
        ko: "여러 연구에서 상관관계 행렬을 추출한 경우"
      },
      expectedResponse: {
        en: "The agent will guide you through MASEM setup, pooling strategies, and heterogeneity analysis.",
        ko: "에이전트가 MASEM 설정, 풀링 전략, 이질성 분석을 안내합니다."
      }
    }
  ],

  decisionHelper: {
    useWhen: [
      { en: "You have 20+ studies with effect sizes", ko: "효과크기가 있는 20개 이상의 연구" },
      { en: "You need publication bias analysis", ko: "출판 편향 분석이 필요한 경우" }
    ],
    dontUseWhen: [
      { en: "You have fewer than 10 studies", ko: "10개 미만의 연구" },
      { en: "Studies use incompatible metrics", ko: "연구가 호환되지 않는 지표 사용" }
    ],
    alternativeAgents: [
      {
        agentId: "B4-EvidenceSynthesizer",
        condition: { en: "For narrative synthesis without quantitative pooling", ko: "양적 풀링 없는 내러티브 종합" }
      }
    ]
  },

  useCases: [
    {
      title: { en: "Educational Technology Meta-Analysis", ko: "교육 기술 메타분석" },
      scenario: {
        en: "A researcher wanted to determine if AI tutors improve learning outcomes across 45 studies.",
        ko: "연구자가 45개 연구에서 AI 튜터가 학습 결과를 개선하는지 확인하고자 했습니다."
      },
      outcome: {
        en: "Identified overall effect size (d = 0.42), heterogeneity sources, and moderators.",
        ko: "전체 효과크기(d = 0.42), 이질성 원인, 조절변수를 확인했습니다."
      },
      discipline: "education",
      complexity: "advanced"
    }
  ],

  journey: {
    startState: {
      en: "You have 30 PDFs with correlation tables but no idea how to synthesize them.",
      ko: "상관관계 표가 있는 30개의 PDF가 있지만 종합 방법을 모릅니다."
    },
    transformation: [
      {
        en: "The agent extracts correlation matrices using OCR + LLM validation",
        ko: "에이전트가 OCR + LLM 검증을 사용해 상관관계 행렬을 추출합니다"
      },
      {
        en: "It runs Two-Stage Meta-Analytic SEM with pooled correlation matrix",
        ko: "풀링된 상관관계 행렬로 2단계 메타분석 SEM을 실행합니다"
      },
      {
        en: "Provides heterogeneity analysis, forest plots, and funnel plots",
        ko: "이질성 분석, 포레스트 플롯, 퍼널 플롯을 제공합니다"
      }
    ],
    endState: {
      en: "You have publication-ready meta-analytic results with Q-statistics and I² values.",
      ko: "Q-통계량과 I² 값이 포함된 출판 가능한 메타분석 결과를 갖게 됩니다."
    },
    timeEstimate: "3-7 days"
  }
}
```

---

## Testing Checklist

### Visual Regression Testing

```bash
# Playwright visual tests
- [ ] QuickSummaryCard renders correctly on mobile/desktop
- [ ] PersonaCard typewriter animation triggers on hover
- [ ] PromptStarters copy button shows success feedback
- [ ] DecisionHelper alternative agents expand on hover
- [ ] UseCaseGallery filters work without layout shift
- [ ] JourneyNarrativeSection timeline is vertically aligned
```

### Interaction Testing

```bash
# Manual testing checklist
- [ ] All buttons respond to keyboard (Enter/Space)
- [ ] Focus indicators are visible
- [ ] Collapse/expand animations are smooth
- [ ] Copy to clipboard works in all browsers
- [ ] Language toggle persists state correctly
- [ ] Viewport animations trigger only once
```

### Accessibility Audit

```bash
# axe DevTools or Lighthouse
- [ ] All images have alt text (future: persona avatars)
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Focus order is logical
- [ ] Screen reader announces state changes
- [ ] No keyboard traps
```

---

## Deployment

### Build Verification

```bash
cd "/Volumes/External SSD/Projects/diverga-docs"
npm run build
# ✓ Check for TypeScript errors
# ✓ Verify bundle size (Next.js build output)
# ✓ Test production build locally: npm start
```

### Performance Monitoring

```bash
# Lighthouse CI
- [ ] Performance score > 90
- [ ] Accessibility score > 95
- [ ] Best Practices score > 90
- [ ] SEO score > 90
```

---

## Support & Maintenance

**Questions or Issues?**
- GitHub Issues: [diverga-docs/issues](https://github.com/HosungYou/diverga-docs/issues)
- Email: hosung@example.com
- Documentation: `README.md` in components directory

**Version History:**
- v2.0.0 (2025-01-31): Initial release with 6 core components
- v2.1.0 (Planned): Add SuccessStory, Analogy, ProTip, FAQ, Badge components
- v2.2.0 (Planned): Interactive T-Score slider, agent comparison table

---

**Created with Claude Code (Opus 4.5)**
**Design System: VS Diverge**
**Last Updated: 2025-01-31**
