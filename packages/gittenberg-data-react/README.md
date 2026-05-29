# @tx/gittenberg-data-react

React bindings for `@tx/gittenberg-data`: provider, TanStack Query caching, and hooks for prototype apps.

Data loading and mutations go through **TanStack Query**. The persistence backend (sqlite, localStorage, memory, or a future HTTP API) is only accessed inside `queryFn` / `mutationFn` via `GittenbergDataService` ports.

## Usage

```tsx
import {
  GittenbergDataProvider,
  useGittenbergData,
  useGittenbergCreateMutation,
  useGittenbergRemoveMutation,
} from "@tx/gittenberg-data-react"

function App() {
  return (
    <GittenbergDataProvider backend="sqlite" namespace="frontend-pt1">
      <Routes />
    </GittenbergDataProvider>
  )
}
```

### Data fetching

- `useGittenbergSnapshotQuery()` — loads the full domain snapshot via `loadGittenbergSnapshot(service)` (async port lists under the hood).
- `useGittenbergData()` — snapshot data + `service`, `refresh`, `resetToSeed` (same shape as before for existing screens).
- `useGittenbergService()` — `service`, `ports`, `ui`, `namespace`, `backend` without waiting on lists.

### Mutations (preferred)

Use collection-scoped mutations for **optimistic cache updates** and automatic invalidation:

```tsx
const createAgent = useGittenbergCreateMutation({
  collection: "agents",
  mutationFn: (input) => ports.agent.create(input),
})

const removeAgent = useGittenbergRemoveMutation({
  collection: "agents",
  mutationFn: (id) => ports.agent.remove(id),
})

void createAgent.mutate({ name: "New Agent", /* … */ })
void removeAgent.mutate(agentId)
```

- `useGittenbergCreateMutation` — optional `optimisticEntity` for immediate list append.
- `useGittenbergUpdateMutation` — optimistic merge by `id`, then reconcile with server entity.
- `useGittenbergRemoveMutation` — optimistic removal from the cached snapshot.

### Legacy mutation helper

`useGittenbergMutation()` still accepts `() => ports.*.create(...)` and **invalidates** the snapshot query when done (no optimistic update). Prefer the typed mutation hooks above.

### Repository route hooks

`useRepository()`, `useRepositoryManuscriptFiles()`, … — resolve entities from `:repositorySlug` using cached snapshot data.
