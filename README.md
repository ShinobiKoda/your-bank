<div align="center">
  <img src="public/images/logo.svg" alt="YourBank Logo" width="72" />
  
  # YourBank
  
  Modern banking landing experience built with React, TypeScript, Vite & Tailwind CSS.
</div>

## Overview

YourBank is a frontend project showcasing a responsive banking interface with animated components, data‑driven content, product & feature tabs, testimonials, FAQs, and mobile navigation. It uses route-based code organization with React Router and smooth micro-interactions powered by Motion (Framer Motion-like API for React 19). Data for the homepage and careers sections is loaded from static JSON (cached per session) enabling quick iteration without a backend.

## Tech Stack

Core:

- React 19 + TypeScript
- Vite 7 (fast dev server & build)
- Tailwind CSS 4 (utility-first styling)
- Motion (animation variants / transitions)
- React Router DOM 7 (client-side routing)

UI / UX:

- React Icons (iconography)
- react-spinners (loading indicators)

Tooling:

- ESLint 9 (linting) + TypeScript project refs
- PostCSS + Autoprefixer

## Current Features

Navigation & Layout:

- Responsive navigation bar with animated mobile drawer
- Global `Navbar` + `Footer` layout wrapper

Homepage:

- Hero section with intro blur reveal & staged entrance animations
- Supported currency badge list (dynamic from JSON)
- Product tab switcher (Individuals / Businesses)
- Use case grid with staggered motion
- Feature tab system (features vs FAQs) with animated pill selector
- Feature cards with split column adaptive layout
- Testimonials component (Individuals / Businesses separation) – data loaded & cached
- FAQs accordion (data driven)
- Loading & error states (spinner + messaging) for data fetch

Data Layer:

- Static JSON fetched from `/data/homepage.json` & `/data/careerspage.json`
- Thin fetch wrappers with in‑memory cache + cache clear helpers

Additional Routes:

- `/about` (Aboutpage skeleton / content)
- `/careers` (Careerspage scaffold consuming careers data – WIP UI)
- `/security` (Securitypage placeholder – expansion point)
- Auth flows: `/signup`, `/login` (UI stubs for future integration)

Animations:

- Centralized variants in `src/components/animations/motion.tsx` (stagger, fade, scale, feature grid transitions, etc.)

Accessibility / UX:

- ARIA roles on loading states
- Viewport-based animation triggers with `whileInView`

## Project Structure (simplified)

```
your-bank/
├── public/
│   ├── images/                  # SVG assets
│   └── data/
│       ├── homepage.json        # Homepage dynamic content
│       └── careerspage.json     # Careers benefits & job openings
├── src/
│   ├── App.tsx                  # Route layout + routes
│   ├── main.tsx                 # Root render + router bootstrap
│   ├── index.css                # Tailwind & global styles
│   ├── api/
│   │   ├── getHomepageData.ts   # Homepage fetch + cache
│   │   └── getCareerspageData.ts# Careers fetch + cache
│   └── components/
│       ├── Homepage.tsx
│       ├── Aboutpage.tsx
│       ├── Careerspage.tsx
│       ├── Securitypage.tsx
│       ├── FAQs.tsx
│       ├── Testimonials.tsx
│       ├── auth/
│       │   ├── Login.tsx
│       │   └── Signup.tsx
│       ├── layout/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       └── animations/
│           └── motion.tsx       # Animation variants & helpers
├── vite.config.ts
├── tsconfig.json                # Root TS config
├── tsconfig.app.json            # App build config
├── tsconfig.node.json           # Node/TS build support
├── package.json
├── eslint.config.js
└── README.md
```

## Scripts

Dev:

- `npm run dev` – start Vite dev server

Quality:

- `npm run lint` – ESLint across project

Build & Preview:

- `npm run build` – TypeScript project refs build + Vite bundle
- `npm run preview` – Serve production build locally

Helpful (manual) cache refresh during dev (in browser console):

```js
// Clear in-memory data caches then hard reload
import { clearHomepageDataCache } from "/src/api/getHomepageData.ts";
import { clearCareerpageDataCache } from "/src/api/getCareerspageData.ts";
clearHomepageDataCache();
clearCareerpageDataCache();
location.reload();
```

## Data Model Summary

Homepage JSON powers:

- supportedCurrencies (image paths)
- products (individuals / business)
- useCases (grids)
- stats & percentages
- featureTabs + features keyed collections
- FAQs & testimonials (segmented)

Careers JSON powers:

- benefits list (icon, title, description)
- job_openings (title, location, department, description, requirements[])

Both are fetched client-side from `/data/*.json` with `cache: "no-store"` to ease iteration (still in-memory cached after first load per session).

## Error & Loading States

- Initial homepage fetch -> centered `ClimbingBoxLoader`
- Network / parse failure -> inline message (red text)
- Simple ARIA attributes applied for screen reader context

## Screenshots (Planned)

To add:

- Hero + currency badge
- Products grid (both tabs)
- Features vs FAQs tab state
- Testimonials section
- Mobile nav drawer

## Performance & DX Notes

- Lightweight: all data static & local → no server round trips after first load
- Motion variants reused to minimize re-renders & keep timeline coherent
- Tailwind JIT keeps CSS payload minimal
- Potential future: code-split heavy sections (e.g., testimonials) with `lazy()`

## Code Snippet (Animation Usage)

Example of using a shared motion variant from `motion.tsx` inside a component:

```tsx
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "./components/animations/motion";

export function MiniFeatureList() {
  const items = ["Fast Setup", "Responsive", "Animated"];
  return (
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="flex gap-4"
    >
      {items.map((txt) => (
        <motion.li
          key={txt}
          variants={staggerItem}
          className="px-4 py-2 rounded-full bg-[#1C1C1C] border border-[#262626] text-sm"
        >
          {txt}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

## Quick Run (Local)

Install & start:

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## Animations

Centralized variants live in `src/components/animations/motion.tsx` (stagger, fade, scale, grid transitions, feature tab pills). Import and apply with the `motion` component from `motion/react` to keep transitions consistent and maintainable. Avoid ad-hoc inline animation objects to preserve timing harmony.

## Styling

Tailwind utility classes are used directly in JSX. Design tokens (e.g., `--green-60`, `--grey-70`) are assumed to be defined in `index.css` (or a layered `@theme` section). Extend tokens or add semantic utility classes as project scales. Favor composition over deep component-specific CSS.

## Potential Next Improvements

- Flesh out Careers (benefits grid + job openings listing UI)
- Populate Security page with trust / compliance content
- Add auth form validation + state handling
- Lazy-load large sections (testimonials / FAQs) for initial paint boost
- Lighthouse + Web Vitals badges
- Dark/light theme toggle (currently single dark theme)
- Add unit tests for data fetch utilities
- Implement skeleton loaders for sections while data resolves
- Add screenshot & design reference section

## Contributing (Future)

1. Fork & clone
2. Create feature branch: `git checkout -b feat/your-feature`
3. Run dev server & implement changes
4. Ensure `npm run lint` passes
5. Open PR with concise description & before/after context

## Personal Notes

Personal landing / UI motion lab focused on layout, animation rhythm, data-driven component structure—kept intentionally lightweight without backend or complex state.

---

Built for experimentation—iterating on motion timing, accessibility, and visual polish.
