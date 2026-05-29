# frontend-pt1

Gittenberg prototype SPA (Vite + React). UI from `@tx/ui-lib`; data from `@tx/gittenberg-data` + `@tx/gittenberg-data-react`.

## Run

```bash
cd apps/frontend-pt1
bun run dev
```

### Persistence backend

Set `VITE_GITTENBERG_BACKEND` in `.env` (optional):

- `sqlite` (default) — sql.js in the browser, snapshot in localStorage
- `localStorage` — JSON records per entity table
- `memory` — non-persistent

```env
VITE_GITTENBERG_BACKEND=localStorage
```

## Architecture

| Layer | Package |
|-------|---------|
| Domain contracts | `@tx/domain-shared` |
| Data service + backends | `@tx/gittenberg-data` |
| React provider / hooks | `@tx/gittenberg-data-react` |
| View mappers | `src/data/mappers.ts` (app-local) |
| Pages | `src/pages/` |

CRUD changes persist across reloads (sqlite/localStorage). Data is loaded and cached with TanStack Query via `@tx/gittenberg-data-react`. Prefer `useGittenbergCreateMutation` / `useGittenbergUpdateMutation` / `useGittenbergRemoveMutation` for optimistic updates; `useGittenbergMutation()` invalidates the snapshot after ad-hoc port calls.

## Routes

Repository-scoped paths use the repository **slug** (or id) from seed data:

- `/repositories` — pick a repository
- `/repositories/:repositorySlug` — repository home
- `/repositories/:repositorySlug/revision` — revision detail
- `/repositories/:repositorySlug/reader` — reader preview
- `/repositories/:repositorySlug/build` — build & export
- `/repositories/:repositorySlug/edition` — edition history
- `/repositories/:repositorySlug/edition/international` — international builds
- `/repositories/:repositorySlug/editor` — manuscript editor
- `/library`, `/agents` — global views

`/` redirects to `/repositories/moby-dick` (default seed slug only).
