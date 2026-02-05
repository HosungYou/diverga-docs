# Memory Feature Components

## MemoryComparisonTable

A visual before/after comparison table showing how Diverga's Memory System transforms research workflows.

### Usage

```tsx
import { MemoryComparisonTable } from '@/components/features/memory';

export default function MemoryPage() {
  return (
    <div>
      <MemoryComparisonTable locale="en" />
      {/* or */}
      <MemoryComparisonTable locale="ko" />
    </div>
  );
}
```

### Features

- **Bilingual Support**: English and Korean content
- **Animated Reveal**: Scroll-triggered animations for each comparison row
- **Color-Coded Design**: Red (before) vs. Green (after) visual differentiation
- **Responsive Layout**: Mobile-friendly grid system
- **Dark Mode Support**: Automatic theme adaptation

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `locale` | `string` | Yes | Language code (`'en'` or `'ko'`) |

### Comparison Categories

1. **Session Start** - Context loading efficiency
2. **Making Decisions** - Decision recording and recall
3. **Methodology Tracking** - Centralized organization
4. **Cross-Session Continuity** - Seamless workflow
5. **Collaboration** - Shared project memory
