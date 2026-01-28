# Changelog

All notable changes to Diverga Docs will be documented in this file.

## [1.1.0] - 2025-01-28

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
