---
name: soya-ui
description: Build or improve Svelte 5 and SvelteKit apps with the Soya UI component library. Use when an agent needs to set up Soya UI, choose and compose its components, build responsive screens, apply themes, or review an app for Soya UI API, accessibility, and design consistency.
---

# Build with Soya UI

Use the released package and its documented public API to deliver a working app, not just a mockup. Preserve the host project's conventions unless the user asks to change them.

## 1. Establish the package and task boundary

1. Inspect the app's framework, Svelte version, package manager, existing UI patterns, and requested screens. In an existing Soya UI app, keep its installed version unless an upgrade is part of the task.
2. For a new consumer app, choose a Svelte 5 version within the release package's `peerDependencies` range (v0.1.3 requires `>=5.40.0 <6`). Find the current stable package in the [public Releases](https://github.com/SoyaNyan/soya-ui-docs/releases/latest), then install that release's `soya-ui-<version>.tgz` with the project's package manager. For example: `pnpm add https://github.com/SoyaNyan/soya-ui-docs/releases/download/v<version>/soya-ui-<version>.tgz`. Use the same version in the tag and filename. In the Soya UI monorepo itself, use its existing workspace dependency.
3. Check the [getting-started guide](https://soyanyan.github.io/soya-ui-docs/docs/) and the installed package's exported types before using a prop. The package version's declarations win if online documentation describes a different version. Import only public paths: `soya-ui`, `soya-ui/theme`, `soya-ui/state`, `soya-ui/styles.css`, `soya-ui/scss`, and the optional `soya-ui/code-block/shiki` adapter.

## 2. Establish the app shell once

Import `soya-ui/styles.css` once at the app root and wrap the UI in `ThemeProvider`. For a SvelteKit root layout, use this pattern:

```svelte
<script lang="ts">
  import { ThemeProvider } from 'soya-ui';
  import type { Snippet } from 'svelte';
  import 'soya-ui/styles.css';

  let { children }: { children: Snippet } = $props();
</script>

<ThemeProvider scope="root" initialMode="system" initialPreset="neutral">
  {@render children()}
</ThemeProvider>
```

Set `storageKey` and `persist` only if the app should remember the theme. Keep dialogs, menus, tooltips, sheets, and other portal content under the relevant provider. Use `scope="local"` only for deliberately isolated previews or nested theme regions.

## 3. Compose from the public components

- Search the [component catalogue](https://soyanyan.github.io/soya-ui-docs/components/) and installed type declarations before writing a control. Prefer `Field` with `Input`, `Select`, `Checkbox`, or `Textarea` for forms; use the `Field` child snippet's `id`, `describedBy`, and `invalid` values to connect labels, help text, and errors.
- Use Soya UI `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Alert`, `Tabs`, `Dialog`, `Sheet`, `ToastProvider`/`Toaster`, `EmptyState`, and `Skeleton` where they fit. Choose `Table`/`DataTable` for data, `BarChart`/`LineChart`/`DonutChart` for charts, `Masonry` for unequal-height card columns, and `Timeline` for ordered milestones. Confirm the installed API before choosing exact props.
- Treat the [blocks gallery](https://soyanyan.github.io/soya-ui-docs/blocks/) as copyable compositions, not package exports. `AppShell`, `FilterPanel`, `PageHeader`, `ResultPanel`, `SplitPane`, and `StatCard` are block examples; do not import those names from `soya-ui`.
- Keep application state and business logic in the app. Use Svelte 5 `$state` for mutable UI state and `$derived` for computed values; use SvelteKit load functions or form actions for server work when appropriate. Bind to documented component state or use callbacks; do not reach into internal DOM structure or import `src/lib` files.

## 4. Apply Soya UI's design system

- Start with semantic markup, a clear content hierarchy, and the library's spacing and color tokens. Use `--soya-*` CSS variables and the exported `su-` utility classes for ordinary layout; responsive variants include `su-md-`, `su-xl-`, and `su-xxl-`. Component implementation classes such as `.soya-button` are not utility classes.
- Avoid adding Tailwind or a second component system just to reproduce an available Soya UI pattern. Add small app-specific CSS for genuinely unique layouts and content, not copies of controls. Keep spacing consistent across cards, form fields, headings, and actions.
- Check narrow and wide viewports, both color modes, long text, loading/empty/error states, keyboard navigation, and touch targets. Preserve visible keyboard focus. Use `focusRing="keyboard"` on `ThemeProvider` only when pointer-triggered rings are undesirable while keyboard focus remains visible.
- Use explicit labels, accessible names for icon-only actions and charts, and feedback where actions occur. For copy/save actions, prefer a toast or button feedback over a permanently reserved blank message area.

## 5. Verify the delivered screen

Run the host app's typecheck, lint, relevant tests, and production build. Inspect the rendered page at phone and desktop widths; exercise its primary interactions, overlays, forms, and theme switching. Fix Svelte or accessibility warnings and report any checks that could not run. When adding a component, compare its usage with the [component documentation](https://soyanyan.github.io/soya-ui-docs/components/) and the installed package's public types before calling the work complete.
