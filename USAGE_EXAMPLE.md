# VS Methodology Components Usage

## Components Created

Two new feature components have been created in `/src/components/features/`:

1. **VSProcessFlow.tsx** - 3-stage VS process visualization
2. **ModeCollapseDemo.tsx** - Interactive comparison demo

## Import and Usage

### VSProcessFlow Component

```tsx
import { VSProcessFlow } from '@/components/features/VSProcessFlow';

export default function MyPage() {
  const locale = 'en'; // or 'ko'
  
  return (
    <div>
      <VSProcessFlow locale={locale} />
    </div>
  );
}
```

**Features:**
- 3 stages: Modal ID → Long-tail Sampling → Low-T Selection
- Animated flow with stage cards
- T-Score color coding (modal=#ff3366, divergent=#22ccff)
- Responsive design (stacks on mobile)
- Framer Motion animations with staggered reveals
- Key insight callout box

### ModeCollapseDemo Component

```tsx
import { ModeCollapseDemo } from '@/components/features/ModeCollapseDemo';

export default function MyPage() {
  const locale = 'en'; // or 'ko'
  
  return (
    <div>
      <ModeCollapseDemo locale={locale} />
    </div>
  );
}
```

**Features:**
- Interactive toggle between "Traditional AI" and "Diverga" views
- Traditional: Single TAM recommendation (T=0.92)
- Diverga: 5 options spanning T-Score spectrum (0.18-0.92)
- Animated T-Score bars using TScoreBar component
- Smooth transitions with AnimatePresence
- Bilingual support (English/Korean)

## Example: Adding to VS Methodology Page

You can add these components to the existing VS methodology page at `/src/app/[locale]/docs/vs-methodology/page.tsx`:

```tsx
import { VSProcessFlow } from '@/components/features/VSProcessFlow';
import { ModeCollapseDemo } from '@/components/features/ModeCollapseDemo';

export default function VSMethodologyPage() {
  const locale = useLocale() as 'en' | 'ko';
  
  return (
    <div className="min-h-screen bg-void-deep py-16 sm:py-24">
      {/* ... existing header content ... */}
      
      {/* Add Process Flow Visualization */}
      <section className="mb-16">
        <VSProcessFlow locale={locale} />
      </section>
      
      {/* Add Mode Collapse Comparison */}
      <section className="mb-16">
        <ModeCollapseDemo locale={locale} />
      </section>
      
      {/* ... rest of the page ... */}
    </div>
  );
}
```

## Design System Integration

Both components follow the Void Cartography design system:

### T-Score Colors
- **Modal** (T ≥ 0.8): `#ff3366` - Predictable, overused
- **Typical** (T 0.6-0.8): `#ff8844` - Well-validated
- **Balanced** (T 0.4-0.6): `#ffcc22` - Moderate novelty
- **Creative** (T 0.2-0.4): `#44ffaa` - Innovative yet grounded
- **Divergent** (T < 0.2): `#22ccff` - Novel, experimental

### Component Styles
- Dark backgrounds: `bg-void-elevated`, `bg-void-surface`
- Borders: `border-stellar-faint/20`
- Glow effects on hover
- Framer Motion animations
- Responsive grid layouts
- Font: Space Mono (mono), IBM Plex Sans (body)

## File Locations

```
diverga-docs/
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   ├── VSProcessFlow.tsx       ← NEW
│   │   │   ├── ModeCollapseDemo.tsx    ← NEW
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── FeatureHero.tsx
│   │   │   └── FeaturesGrid.tsx
│   │   └── visualization/
│   │       └── TScoreSpectrum.tsx      ← Used by ModeCollapseDemo
│   └── app/
│       └── [locale]/
│           └── docs/
│               └── vs-methodology/
│                   └── page.tsx         ← Can integrate here
```

## Props Interface

### VSProcessFlow
```typescript
interface VSProcessFlowProps {
  locale: string; // 'en' | 'ko'
}
```

### ModeCollapseDemo
```typescript
interface ModeCollapseDemoProps {
  locale: string; // 'en' | 'ko'
}
```

Both components are fully typed with TypeScript and include bilingual content.
