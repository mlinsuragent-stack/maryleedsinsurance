# Project Guide

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Supabase (Postgres, Auth, Storage)
- Deployed on Vercel
- Node 22+, npm

## Commands

```bash
npm run dev          # local dev server
npm run build        # ALWAYS run before declaring work complete
npm run lint         # eslint
npx tsc --noEmit     # typecheck
```

## Non-negotiables

1. **Never read, print, or commit `.env*` files.** Ask me for a value if you need one.
2. **Never use `SUPABASE_SERVICE_ROLE_KEY` in client components or in any code path
   reachable from the browser.** Service-role clients bypass RLS entirely. If a task
   seems to require it, stop and explain why before writing anything.
3. **Never run `git push`, `vercel --prod`, or destructive DB commands.** Stage and
   commit locally; I'll push.
4. **Every new table gets RLS enabled and explicit policies in the same migration.**
   A table without policies is a bug, not a TODO.

## Supabase client conventions

Use `@supabase/ssr`. There are three distinct clients — do not mix them:

- `lib/supabase/client.ts` — `createBrowserClient`, for client components only
- `lib/supabase/server.ts` — `createServerClient` with cookie handling, for server
  components, route handlers, and server actions
- `middleware.ts` — session refresh only

Do not use the deprecated `@supabase/auth-helpers-nextjs` package.

Never `SELECT *` in application code. List the columns you need so the payload and
the type surface stay honest.

## Database changes

- All schema changes go through migration files, never ad-hoc SQL against the
  hosted DB.
- Regenerate types after any schema change and use them:
  `npx supabase gen types typescript --project-id <ref> > types/database.ts`
- Prefer additive migrations. If a change is destructive, propose it and wait.

## Next.js conventions

- Server Components by default. Add `"use client"` only when the component needs
  state, effects, or browser APIs — and push it as far down the tree as possible.
- Data fetching happens in Server Components or route handlers, not in `useEffect`.
- Use `next/image` for images and `next/link` for internal navigation.
- Route handlers live in `app/api/*/route.ts` and validate input before touching
  the database.

## Tailwind conventions

- Utility classes in the markup. No separate CSS files unless there's a real reason.
- Define colors, spacing, and fonts in `tailwind.config.ts` and reference the tokens.
  Do not scatter arbitrary values like `text-[#1a2b3c]` through components.
- Extract a component when a class string repeats three or more times — not a
  `@apply` block.
- Mobile-first: unprefixed utilities are the small-screen case.

## Code style

- TypeScript strict. No `any`. If a type is genuinely unknown, use `unknown` and
  narrow it.
- Named exports; default exports only where Next.js requires them (pages, layouts).
- Handle the error case explicitly. No empty catch blocks, no swallowed promises.
- Keep files under ~250 lines. Split by responsibility, not by arbitrary line count.

## Working style

- Before a multi-file change, outline the plan and wait for confirmation.
- Make the smallest change that solves the problem. Don't refactor adjacent code
  unless I ask.
- After changes, run `npm run build` and `npx tsc --noEmit` and report the result.
- If something is ambiguous, ask. Don't guess at product behavior.
