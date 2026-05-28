---
name: backend-workspace
description: Backend stack — domain, svc-config, API apps (Elysia/Hono/Fastify), svc-* packages, scaffold service/module, API expansion commands.
globs:
  [
    "**/packages/domain-shared/**",
    "**/packages/svc-*/**",
    "**/apps/api-*/**",
  ]
---

# Backend workspace (scaffold CLI)

**Canonical skill file:** `skills/backend-workspace/SKILL.md`. The same content is synced to `.cursor/skills/`, `.claude/skills/`, and `.codex/skills/` for multi-agent tooling.

Read **`skills/scaffolding/SKILL.md`** first for the generic CLI surface, project creation flags, and the cross-workspace scaffold map.

This skill is intentionally narrower: it explains how backend pieces should be organized, which expansion command to choose, and what code-quality rules apply once backend packages and API apps exist.

Workspace imports use **`@tx/…`** (for example `@tx/domain-shared`, `@tx/svc-config`).

## Backend roles

| Path | Role |
|------|------|
| **`packages/domain-shared`** | Pure business entities, DTOs, pages, and ports. No IO. |
| **`packages/svc-config`** | Typed environment/config access for backend and CLI surfaces. |
| **`packages/svc-*`** | Backend business logic, orchestration, persistence adapters, third-party integrations. |
| **`apps/api-*`** | HTTP transport and module wiring around existing service and domain contracts. |

Backend foundations also include **`packages/core-svc`** and **`packages/core-http-app`**. Framework adapters such as **`packages/core-http-elysia`**, **`packages/core-http-hono`**, and **`packages/core-http-fastify`** are scaffolded alongside matching API apps.

## Choose the right expansion

Run from the repo root. Use **`--app`** when multiple API apps exist.

| Command | Use when |
|--------|----------|
| `scaffold workspace-service add-module <name> --service <svc>` | The capability belongs in a backend service package and should be reusable from API and CLI surfaces |
| `scaffold app-module add-module <name> --app <api-app>` | The API needs a transport-only module that does not yet map to a service package |
| `scaffold app-module add-service-module <name> --service <svc> --app <api-app>` | The API needs routes around an existing non-CRUD service capability |
| `scaffold app-module add-crud-module <entity> --service <svc> --app <api-app>` | The API needs conventional CRUD endpoints over a service entity module |
| `scaffold app-module remove-module <name> --app <api-app>` | Remove a scaffolded API module and unwind barrel/module registration |

Examples:

```bash
scaffold workspace-service add-module invoices --service svc-billing
scaffold app-module add-service-module pricing --service pricing-engine --app api-hono-api
scaffold app-module add-crud-module users --service accounts --app api-elysia-api
```

## Service package organization

Inside **`packages/svc-*`**:

- keep code backend-only; never import `ui-*`
- organize features under **`src/modules/<name>/`**
- keep the package root export surface stable and framework-agnostic
- put transport concerns in apps, not in services
- hide raw database or third-party clients behind service-internal adapters or data packages

Use services to expose business operations such as create/update/list/search rather than leaking ORM calls or HTTP semantics upward.

## API app organization

Inside **`apps/api-*`**:

- keep route handlers thin
- validate request/query bodies at the module boundary using shared schemas where available
- call a service layer instead of Prisma or database clients directly
- keep module registration deterministic under **`src/modules/`**
- map transport concerns here: routing, HTTP status codes, serialization, error shapes, auth middleware

Framework-specific app skills such as **`skills/api-elysia-app/`**, **`skills/api-hono-app/`**, or **`skills/api-fastify-app/`** can add adapter-specific examples after those apps are scaffolded.

## Wiring services into API apps

Default approach:

1. Model the domain contract first.
2. Add or extend the owning `svc-*` package with a service module.
3. Scaffold the API module from that service using `add-service-module` or `add-crud-module`.
4. Keep HTTP handlers as composition only: parse input, call service, map result.

When persistence is involved:

- keep DB schema and raw client code in a dedicated package such as **`svc-prisma`**
- let the service package wrap that persistence layer
- keep the API app unaware of storage details

## Code quality defaults

1. Keep **domain** pure, **services** orchestrating, and **API apps** transport-only.
2. Prefer scaffold expansion commands before hand-rolling `src/modules/*` trees.
3. Use one module per bounded backend capability or entity family.
4. Avoid circular dependencies between `svc-*`, domain packages, and apps.
5. Add focused tests around service behavior and API integration, not around generated scaffolding itself.

## Related skills

- **`skills/workspace-domain/`** for entity schemas, DTOs, pages, and ports
- **`skills/workspace-service/`** for service-package module guidance
- **`skills/workspace-http-app/`** for framework-agnostic HTTP app composition
- **`skills/frontend-workspace/`** for UI packages and frontend integration
