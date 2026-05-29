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

`/` redirects to `/explore` (project landing with Eternal Archive pitch).

### Consumer prototype (v2)

- `/explore` — mission landing, Eternal Archive story
- `/library/cinematic` — immersive library (featured hero + discovery shelves)
- `/library/collections/:collectionId` — curated collection (e.g. Asimov galactic archive)
- `/library/editions/:editionId` — edition detail → studio / print
- `/collections` — my collections
- `/subscribe` — membership + Mécène stewardship
- `/gallery/eternal` — Eternal Gallery
- `/studio/:editionId` — creative studio (mock agent cover regeneration)
- `/order/print/:buildId` — print customization checkout
- `/order/print/:buildId/agent` — POD with agent-assisted cover
- `/patronage/certificate/:certificateId` — certificate of provenance
- `/archive/anchor` — Arweave anchoring wizard

### Curator / CRUD (v1)

Repository-scoped paths use the repository **slug** from seed data:

- `/repositories` — pick a repository
- `/repositories/:repositorySlug` — repository home
- `/repositories/:repositorySlug/revision` — revision detail
- `/repositories/:repositorySlug/reader` — reader preview
- `/repositories/:repositorySlug/build` — build & export
- `/repositories/:repositorySlug/edition` — edition history
- `/repositories/:repositorySlug/editor` — manuscript editor
- `/library`, `/agents` — curator catalog and agent dashboard
