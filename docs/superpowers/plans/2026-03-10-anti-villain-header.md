# ANTI-VILLAIN Header Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the new ANTI-VILLAIN editorial header component in isolation, leaving the existing Dante theme untouched.

**Architecture:** New components live under `src/components/av/` and use a new `AVLayout.astro`. The existing `BaseLayout.astro`, `Header.astro`, and `Nav.astro` are not modified. The new header is a single unified component (no separate Nav file) with two rows: a global nav bar and a context bar for interior pages. Colors use Tailwind white/black utilities + dark: modifiers directly — no changes to `global.css`.

**Tech Stack:** Astro 5, Tailwind CSS 3, Work Sans (Google Fonts), existing ThemeToggle component

---

## Chunk 1: Scaffold the new layout and header

### Task 1: Create the AVLayout base

**Files:**

- Create: `src/layouts/AVLayout.astro`

This layout replaces `BaseLayout.astro` for the new theme. It loads only Work Sans (no Crimson Pro), uses `AVHeader`, and applies a white/black color scheme.

- [ ] **Step 1: Create `src/layouts/AVLayout.astro`**

```astro
---
import { ViewTransitions } from 'astro:transitions';
import BaseHead, { type Props as HeadProps } from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
import AVHeader from '../components/av/AVHeader.astro';

export type Props = HeadProps & {
    category?: string;
    backHref?: string;
};

const { category, backHref, ...head } = Astro.props;
---

<!doctype html>
<html lang="en" class="antialiased break-words">
    <head>
        <BaseHead {...head} />
        <!-- Override font: Work Sans only -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
        />
        <script>
            if (localStorage.theme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        </script>
        <ViewTransitions />
        <!-- Google tag (gtag.js) -->
        <script type="text/partytown" async src="https://www.googletagmanager.com/gtag/js?id=G-JZ392B2RLT"></script>
        <script type="text/partytown">
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JZ392B2RLT');
        </script>
    </head>
    <body class="bg-white text-black dark:bg-black dark:text-white font-sans min-h-screen flex flex-col">
        <AVHeader category={category} backHref={backHref} />
        <main class="flex-grow w-full max-w-screen-xl mx-auto px-6 md:px-10 pt-10">
            <slot />
        </main>
        <Footer />
    </body>
</html>
```

- [ ] **Step 2: Verify the file exists and Astro can parse it**

```bash
cd /Users/shawncoots/Documents/Sites/antivillain.github.io
npx astro check 2>&1 | grep -E "AVLayout|error" | head -20
```

Expected: no errors referencing AVLayout (AVHeader doesn't exist yet — that error is expected)

---

### Task 2: Create the AVHeader component

**Files:**

- Create: `src/components/av/AVHeader.astro`

A unified component with two rows. Row 1 is always visible (wordmark + nav + toggle). Row 2 is visible only when a `category` prop is passed (interior pages).

- [ ] **Step 1: Create the `av/` directory and `AVHeader.astro`**

```astro
---
import ThemeToggle from '../ThemeToggle.astro';
import siteConfig from '../../data/site-config';

export type Props = {
    category?: string;
    backHref?: string;
};

const { category, backHref = '/' } = Astro.props;

const navLinks = [
    { href: '/projects', text: 'Projects' },
    { href: '/blog', text: 'Articles' },
    { href: '/about', text: 'About' },
];
---

<header class="w-full sticky top-0 z-50 bg-white dark:bg-black font-sans">

    <!-- Row 1: Global nav bar -->
    <div class="w-full border-b border-black dark:border-white">
        <div class="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-12">

            <!-- Wordmark -->
            <a
                href="/"
                class="text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:opacity-70 transition-opacity"
            >
                {siteConfig.title}
            </a>

            <!-- Desktop nav + toggle -->
            <div class="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        href={link.href}
                        class="text-xs font-normal uppercase tracking-widest text-black dark:text-white hover:opacity-70 transition-opacity"
                    >
                        {link.text}
                    </a>
                ))}
                <ThemeToggle />
            </div>

            <!-- Mobile: hamburger -->
            <button
                class="menu-toggle md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                aria-label="Open Menu"
                aria-expanded="false"
                aria-controls="av-menu"
            >
                <span class="menu-bar block w-5 h-px bg-black dark:bg-white transition-all"></span>
                <span class="menu-bar block w-5 h-px bg-black dark:bg-white transition-all"></span>
            </button>
        </div>
    </div>

    <!-- Mobile menu drawer -->
    <div
        id="av-menu"
        class="av-menu hidden md:hidden border-b border-black dark:border-white bg-white dark:bg-black"
    >
        <div class="max-w-screen-xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
                <a
                    href={link.href}
                    class="text-xs font-normal uppercase tracking-widest text-black dark:text-white hover:opacity-70 transition-opacity"
                >
                    {link.text}
                </a>
            ))}
            <div class="pt-2">
                <ThemeToggle />
            </div>
        </div>
    </div>

    <!-- Row 2: Page context bar (interior pages only) -->
    {category && (
        <div class="w-full border-b border-black dark:border-white">
            <div class="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-10">
                <a
                    href={backHref}
                    class="text-xs font-normal uppercase tracking-widest text-black dark:text-white hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                    ← Back
                </a>
                <span class="text-xs font-bold uppercase tracking-widest text-black dark:text-white">
                    {category}
                </span>
            </div>
        </div>
    )}
</header>

<script>
    function initMenu() {
        const toggle = document.querySelector('.menu-toggle');
        const menu = document.getElementById('av-menu');
        const bars = document.querySelectorAll('.menu-bar');

        toggle?.addEventListener('click', () => {
            const isOpen = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
            menu?.classList.toggle('hidden');

            // Animate bars into X
            if (!isOpen) {
                bars[0]?.classList.add('rotate-45', 'translate-y-[7px]');
                bars[1]?.classList.add('-rotate-45', '-translate-y-[7px]');
            } else {
                bars[0]?.classList.remove('rotate-45', 'translate-y-[7px]');
                bars[1]?.classList.remove('-rotate-45', '-translate-y-[7px]');
            }
        });
    }

    initMenu();
    document.addEventListener('astro:after-swap', initMenu);
</script>
```

- [ ] **Step 2: Run type check to verify no errors**

```bash
npx astro check 2>&1 | grep -E "error|warn" | grep -v node_modules | head -20
```

Expected: no errors in `av/AVHeader.astro` or `AVLayout.astro`

- [ ] **Step 3: Commit**

```bash
git add src/components/av/AVHeader.astro src/layouts/AVLayout.astro docs/
git commit -m "feat: add AVLayout and AVHeader for new anti-villain theme"
```

---

## Chunk 2: Preview and verify

### Task 3: Create a preview page

**Files:**

- Create: `src/pages/av-preview.astro` (temporary — deleted after visual verification)

- [ ] **Step 1: Create the preview page**

```astro
---
import AVLayout from '../layouts/AVLayout.astro';
---

<AVLayout title="Header Preview" category="ARTICLES" backHref="/blog">
    <div class="py-20 text-center">
        <p class="text-sm uppercase tracking-widest opacity-50">Header preview — this page will be deleted</p>
    </div>
</AVLayout>
```

- [ ] **Step 2: Start dev server and open preview**

```bash
npm run dev
```

Open: `http://localhost:4321/av-preview`

Verify visually:

- [ ] Row 1 shows "ANTI-VILLAIN" left, "Projects Articles About [toggle]" right
- [ ] Row 1 has a bottom border, sticky on scroll
- [ ] Row 2 shows "← Back" left, "ARTICLES" right
- [ ] Dark mode toggle switches colors correctly
- [ ] On mobile (resize < 640px): hamburger appears, nav collapses into drawer

- [ ] **Step 3: Delete the preview page**

```bash
rm src/pages/av-preview.astro
```

- [ ] **Step 4: Final build check**

```bash
npm run build 2>&1 | tail -5
```

Expected: `✓ Completed` with no errors

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: verify av header preview and remove temp page"
```

---

## Notes

- `AVLayout` passes `category` and `backHref` props down to `AVHeader`. Every new page template using `AVLayout` can set these to activate Row 2.
- The existing Dante theme (`BaseLayout`, `Header`, `Nav`) is completely untouched.
- Next components to build: Homepage template, then Article/Project page templates.
