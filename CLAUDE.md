# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern, single-page portfolio website built with React 18, TypeScript, Tailwind CSS, and Framer Motion. The site is **configuration-driven**, meaning all content (personal info, skills, experience, projects, certificates) is managed through a central config file rather than hardcoded in components.

## Key Commands

```bash
# Development
npm run dev          # Start dev server on http://localhost:5173

# Building
npm run build        # TypeScript compilation + Vite production build
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # ESLint check with TypeScript rules
```

## Architecture & Design Patterns

### Configuration-Driven Content

**Central Source of Truth**: `src/data/portfolio.config.ts`

All portfolio content is defined in a single TypeScript config file that exports a `portfolioConfig` object. This is the **only** file that should be edited when updating portfolio content (adding projects, updating skills, changing contact info, etc.).

Type safety is enforced via `src/types/portfolio.types.ts`, which defines the `PortfolioConfig` interface and all nested types (`PersonalInfo`, `Experience`, `Project`, `Certificate`, etc.).

**When modifying content:**
- Edit `src/data/portfolio.config.ts` only
- Never hardcode content in component files
- The config is imported by section components and rendered dynamically

### Theme System Architecture

**Context-based theme management** via `src/context/ThemeContext.tsx`:
- Uses React Context API for global theme state
- Implements `light` | `dark` theme with localStorage persistence
- Theme preference checked on mount: localStorage → system preference → defaults to light
- Theme class applied to document root (`html.classList.add('dark')`)
- Tailwind's `class` dark mode strategy enables `dark:` prefixes

**ThemeProvider** wraps the entire app in `App.tsx`. All components can access theme via `useTheme()` hook.

### Single Page Application Structure

The app uses **smooth scroll navigation** instead of React Router:
- All sections have `id` attributes matching nav items (e.g., `id="about"`, `id="skills"`)
- Navigation triggers smooth scroll to sections via `element.scrollIntoView()` or manual offset calculation
- `useScrollSpy` hook tracks active section based on scroll position for nav highlighting
- Header remains fixed with `sticky` positioning

### Animation System

**Framer Motion** powers all animations with three reusable wrapper components:

1. **`FadeIn`**: Simple opacity fade-in on mount
2. **`SlideIn`**: Slide from direction (up/down/left/right) with fade
3. **`ScrollReveal`**: Scroll-triggered animations using `useInView` hook
   - Triggers when element is 30% visible (`amount: 0.3`)
   - Animates once (`once: true`)

**Pattern**: Wrap section components with `<ScrollReveal>` for scroll-based reveals. Use `delay` props for staggered animations.

### Component Organization

```
components/
├── animations/    # Reusable Framer Motion wrappers
├── layout/        # Header (nav + mobile menu) + Footer
├── sections/      # Full-page sections (Hero, About, Skills, etc.)
└── ui/            # Shared UI primitives (Button, Card, SectionTitle, ThemeToggle)
```

**Section components** are page-level and consume data from `portfolioConfig`. They're composed of:
- UI components (Card, Button, SectionTitle)
- Animation wrappers (ScrollReveal)
- Data from config

**UI components** are presentational and accept props. They use `clsx` for conditional classes and `tailwind-merge` when needed.

### Contact Form & EmailJS Integration

**EmailJS** handles form submissions without a backend:

1. **Environment variables** (`.env`):
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. **Flow**:
   - `Contact` component manages form state and validation
   - `useEmailJS` hook wraps the send logic with loading/success/error states
   - `src/utils/emailjs.ts` contains the actual EmailJS API call

3. **Template variables** expected by EmailJS:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

**Form validation**: Client-side validation checks name (≥2 chars), valid email format, subject (≥3 chars), message (≥10 chars).

### Styling Approach

**Tailwind CSS** with custom theme extensions:
- Primary color palette defined in `tailwind.config.js`
- Dark mode via `class` strategy (not `media`)
- Custom animations (fade-in, slide-up/down/left/right) defined in config
- `@tailwindcss/forms` plugin for form styling
- Global styles in `src/styles/index.css` (smooth scroll, custom scrollbar)

**Responsive breakpoints** (Tailwind defaults):
- `sm`: 640px (mobile landscape / tablet portrait)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)

### TypeScript Configuration

- **Strict mode enabled**: All type checks enforced
- **Module resolution**: `bundler` (for Vite)
- **JSX**: `react-jsx` (new JSX transform)
- Types defined in `src/types/portfolio.types.ts`
- Environment variables typed in `src/vite-env.d.ts`

## Adding New Content

### Adding a Section
1. Create component in `src/components/sections/`
2. Import data from `portfolioConfig`
3. Wrap with `ScrollReveal` for animations
4. Add to `App.tsx` in the `<main>` tag
5. Add nav item to `Header.tsx` `navItems` array with matching `id`

### Adding a Project/Skill/Certificate
Edit `src/data/portfolio.config.ts` and add to the appropriate array. No component changes needed.

### Modifying Theme Colors
Edit `tailwind.config.js` → `theme.extend.colors.primary` object. The color scale (50-950) is used throughout the app via Tailwind classes like `bg-primary-600`, `text-primary-500`, etc.

## Static Assets

- **Profile photo**: `public/images/profile.jpg`
- **Resume PDF**: `public/resume.pdf`
- **Public files** are served from root path (e.g., `/images/profile.jpg`)
- Hero component has fallback to UI Avatars API if profile photo is missing

## Environment Variables

Required for contact form functionality:
- Copy `.env.example` to `.env`
- Obtain credentials from [EmailJS](https://www.emailjs.com/)
- All env vars must be prefixed with `VITE_` (Vite convention)

## Build Output

- Production builds go to `dist/` directory
- Vite handles code splitting and optimization automatically
- Build command runs TypeScript compiler first, then Vite build
