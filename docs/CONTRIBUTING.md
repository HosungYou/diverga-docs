# Contributing to Diverga Docs

## Quick Start

```bash
# Clone the repository
git clone https://github.com/HosungYou/diverga-docs.git
cd diverga-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:3000
```

---

## Project Structure

```
src/
├── app/[locale]/          # Pages (Next.js App Router)
├── components/            # React components
├── lib/data/              # Agent/Category data
├── i18n/                  # Internationalization config
├── styles/                # Global CSS
messages/
├── en.json                # English translations
└── ko.json                # Korean translations
docs/                      # Project documentation
```

---

## Development Guidelines

### Adding a New Agent

1. Edit `src/lib/data/agents.ts`
2. Add agent object following the `Agent` interface
3. Include both `en` and `ko` translations
4. Run `pnpm build` to verify

```typescript
{
  id: "X1",
  slug: "your-agent-slug",
  name: { en: "Agent Name", ko: "에이전트 이름" },
  category: "X",
  icon: "🔮",
  tier: "MEDIUM",
  model: "sonnet",
  vsLevel: "ENHANCED",
  description: { en: "...", ko: "..." },
  purpose: { en: "...", ko: "..." },
  triggers: { en: ["keyword1", "keyword2"], ko: ["키워드1", "키워드2"] },
  relatedAgents: ["A1", "B2"],
  paradigms: ["quantitative", "qualitative"],
  checkpoint: "RECOMMENDED"
}
```

### Adding Translations

1. Add keys to `messages/en.json`
2. Add corresponding keys to `messages/ko.json`
3. Use `useTranslations` hook in components

```typescript
import { useTranslations } from 'next-intl';

function MyComponent() {
  const t = useTranslations('myNamespace');
  return <h1>{t('title')}</h1>;
}
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow OKLCH color system defined in `globals.css`
- Use CSS variables for theme colors: `var(--diverga-500)`, `var(--foreground)`, etc.
- Custom font sizes: `.text-hero`, `.text-h1`, `.text-h2`, `.text-h3`

---

## Git Workflow

### Branch Naming

```
feature/add-dark-mode
fix/agent-filter-bug
docs/update-readme
```

### Commit Messages

```
feat: add dark mode toggle
fix: resolve agent filter state issue
docs: update installation guide
style: improve mobile navigation
```

### Pull Request Process

1. Create feature branch from `main`
2. Make changes and test locally
3. Run `pnpm build` to ensure no errors
4. Submit PR with clear description
5. Wait for review and merge

---

## Testing

```bash
# Type checking
pnpm tsc --noEmit

# Build verification
pnpm build

# Local production test
pnpm start
```

---

## Deployment

- **Automatic**: Push to `main` triggers Vercel deployment
- **Preview**: PRs get automatic preview deployments
- **Production**: https://diverga-docs.vercel.app

---

## Questions?

- Open an issue on GitHub
- Contact: @HosungYou
