# @tx/gittenberg-data

Gittenberg prototype **data service**: domain `CrudPort` implementations, swappable persistence backends, and demo seed data.

## Backends

| Backend | Use case |
|---------|----------|
| `memory` | Unit tests, ephemeral demos |
| `localStorage` | Browser JSON persistence (no WASM) |
| `sqlite` | Browser SQLite via [sql.js](https://sql.js.org/) (default); DB snapshot stored in `localStorage` |

All backends expose the same `GittenbergPorts` API from `@tx/domain-shared`.

## Usage

```ts
import { createGittenbergDataService } from "@tx/gittenberg-data"

const service = await createGittenbergDataService({
  backend: "sqlite",
  namespace: "my-prototype",
  seedIfEmpty: true,
})

const repo = await service.ports.repository.getById("repo-moby-dick")
await service.ports.agent.create({ /* … */ })
await service.dispose()
```

## Switching backends later

Prototype apps should depend on `GittenbergPorts` / `GittenbergDataService`, not a specific store. A future HTTP backend can implement the same port interfaces; only `createGittenbergDataService` (or a sibling `createRemoteGittenbergDataService`) changes.

## Layout

- `src/storage/` — `EntityStore` + backends
- `src/crud/` — generic persisted `CrudPort` factory
- `src/entities/` — per-entity codecs (decode/build/patch)
- `src/seed/` — Moby Dick demo dataset
- `src/service/` — `createGittenbergDataService`
