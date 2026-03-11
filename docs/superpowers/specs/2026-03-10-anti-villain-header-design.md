# ANTI-VILLAIN Header Component — Design Spec

**Date:** 2026-03-10
**Status:** Approved
**Scope:** Global site header for the new ANTI-VILLAIN theme (replacing Dante)

---

## Overview

A bold editorial header inspired by the Fyrre Magazine Figma template. Text-only wordmark, no logomark. Work Sans throughout — no serif font.

---

## Structure

Two rows, stacked, full-width:

### Row 1 — Global nav bar (always visible)

```
ANTI-VILLAIN                    Projects  Articles  About  ◐
```

- Left: "ANTI-VILLAIN" wordmark — Work Sans, bold, uppercase, ~14–16px
- Right: Nav links ("Projects", "Articles", "About") — Work Sans, regular, uppercase, ~14px
- Far right: Dark/light mode toggle icon (◐)
- Bottom border: `1px solid` using current border color token

### Row 2 — Page context bar (interior pages only)

```
← Back                                              ARTICLES
```

- Left: Back link ("← Back") — Work Sans, regular, small
- Right: Category label (e.g., "ARTICLES", "PROJECTS", "ABOUT") — Work Sans, bold, uppercase
- Bottom border: same as Row 1
- Hidden on homepage

---

## Typography

- Font: Work Sans (existing Google Fonts import — remove Crimson Pro)
- Wordmark: `font-weight: 700`, `text-transform: uppercase`, `font-size: 14px`, `letter-spacing: 0.05em`
- Nav links: `font-weight: 400`, `text-transform: uppercase`, `font-size: 13px`
- Category label: `font-weight: 700`, `text-transform: uppercase`, `font-size: 13px`

---

## Colors

Inherits existing CSS variable tokens:

- Light mode: `--color-text: #0a0a0a`, `--color-bg: #ffffff`, `--color-border: #0a0a0a`
- Dark mode: `--color-text: #f2f2f2`, `--color-bg: #0a0a0a`, `--color-border: #f2f2f2`

---

## Behavior

- **Sticky:** Header sticks to top on scroll. No box shadow — border only.
- **Dark mode toggle:** Existing ThemeToggle component, repositioned to header right.
- **Active nav link:** Bold weight on the current section.

---

## Responsive / Mobile

- Wordmark stays left
- Nav links collapse into a hamburger menu (right side, replaces toggle + links)
- Dark mode toggle moves inside the mobile menu
- Category bar (Row 2) collapses/hides on mobile
- Breakpoint: `sm` (640px)

---

## Files to Create / Modify

| File                           | Action                                              |
| ------------------------------ | --------------------------------------------------- |
| `src/components/Header.astro`  | Replace existing header with new design             |
| `src/components/Nav.astro`     | Refactor nav to support new layout                  |
| `src/styles/global.css`        | Update color tokens; remove Crimson Pro font import |
| `src/layouts/BaseLayout.astro` | Pass `category` prop to header for Row 2            |
| `tailwind.config.cjs`          | No changes needed                                   |

---

## Out of Scope (future components)

- Homepage layout
- Article / Project page headers
- Feed layouts
- Footer
