<div align="center">
  <img src="public/images/logo.svg" alt="YourBank Logo" width="72" />
  
  # YourBank
  
  Modern banking landing experience built with React, TypeScript, Vite & Tailwind CSS.
</div>

## Overview

YourBank is a frontend project showcasing a responsive banking interface with animated components, product tabs, and mobile navigation. It uses route-based code organization with React Router and smooth micro-interactions powered by Motion (Framer Motion for React 19 API).

## Tech Stack

- React 19 + TypeScript
- Vite 7 (fast dev server & build)
- Tailwind CSS 4 (utility-first styling)
- Motion (animation variants / transitions)
- React Router DOM 7 (client-side routing)
- React Icons (iconography)
- ESLint (linting) + TypeScript project references

## Current Features

- Responsive navigation bar with animated mobile drawer
- Homepage hero section with motion-driven entrance animations
- Product tab switcher (Individuals / Businesses)
- Use case grid with staggered animations
- Reusable animation variants in `motion.tsx`
- Basic routing (`/` and `/about`)

## Project Structure (simplified)

```
your-bank/
├── public/
│   └── images/              # SVG assets
├── src/
│   ├── App.tsx              # Route layout
│   ├── main.tsx             # Entry + router bootstrap
│   ├── index.css            # Tailwind & global styles
│   └── components/
│       ├── Homepage.tsx
│       ├── Aboutpage.tsx
│       └── layout/
│           └── Navbar.tsx
│       └── animations/
│           └── motion.tsx   # Animation variants
├── vite.config.ts
├── tsconfig.json            # Root TS config
├── tsconfig.app.json        # App build config
├── package.json
└── eslint.config.js
```

## Scripts

## Screenshots



Additional ideas:

- Add a full-page screenshot after build
- Include a Lighthouse performance badge later

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

## Quick Run (local)

Minimal reminder for myself:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build && npm run preview
```

## Animations

Centralized variants live in `src/components/animations/motion.tsx` (stagger, fade, scale, etc.). Import and apply using the `motion` component from `motion/react` to keep transitions consistent and maintainable.

## Styling

Tailwind utility classes are used directly in JSX. Global tokens (like `--green-60`, `--grey-70`) presume a custom CSS variables setup (likely defined in a global stylesheet or Tailwind layer). Add or adjust them in `index.css` as needed.

## Potential Next Improvements

## Personal Notes

This is a personal landing page experiment focused on layout, animation rhythm, and clean component structure—kept intentionally lightweight without backend or complex state.

---

Made for fun—iterating on motion, timing, and visual polish.
