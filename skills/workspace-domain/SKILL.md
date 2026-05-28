---
name: workspace-domain
description: Domain packages and workspace-domain subcommands for Effect-based entities, schemas, and ports.
globs: ["**/packages/domain-shared/**", "**/packages/domain-*/**", "**/packages/_*-domain-*/**", "**/packages/core-domain/**"]
---

# Workspace Domain

**Canonical:** `skills/workspace-domain/SKILL.md` (mirrored to agent-specific skill directories).

This skill is owned by `packages/core-domain/`, because `core-domain` is the shared prerequisite for every scaffolded domain package.

Read **`skills/scaffolding/SKILL.md`** first for the generic scaffold map. This skill is narrower: it explains how domain packages, entities, and ports should be modeled once domain scaffolding is in play.

Use this skill when working with any scaffolded domain package:

- `packages/core-domain`
- `packages/domain-shared`
- `packages/domain-<name>`
- `packages/_<subdomain>-domain-<name>`

## Purpose

Domain packages hold pure business declarations:

- Effect-backed entity schemas and generated `Schema.Class` models
- DTO-style input schemas for create, update, and list operations
- generic port contracts built on `CrudPort`
- shared types and logic consumed by `svc-*`, apps, and optionally UI packages for types only

Keep domain packages free of database, HTTP, and framework-specific side effects.

## Domain package organization

Use domain packages to model bounded business contracts, not implementation details:

- `domain-shared` holds cross-cutting entities reused across the workspace
- `domain-<name>` or `_<subdomain>-domain-<name>` holds bounded-context contracts
- entity files should model business language, not transport payload quirks or storage schema details
- ports should describe business capabilities and access patterns, not framework adapters
- UI packages may import domain types and schemas, but port implementations belong in services or apps

## Foundation

`packages/core-domain/` is scaffolded automatically before or alongside domain packages and contains the shared boilerplate:

- `EntityId`
- `IsoDateString`
- `PaginationInput`
- `Page`
- `CrudPort`

Generated entities import these primitives from `@tx/core-domain`.

## Shared Domain

`packages/domain-shared/` is not the source of domain boilerplate. It is the shared domain package for cross-cutting entities used across the workspace.

## Target Metadata First

Before traversing package directories, inspect each target package's `.scaffold/target.json`.

Use it to understand what is already scaffolded:

- `domainEntities`
- `serviceModules`
- `uiComponents`
- `uiMockFlows`
- frontend and API app expansions when relevant

Prefer updating that existing scaffolded surface over regenerating parallel files.

## Commands

Create the shared domain package:

```bash
scaffold init my-app --packages domain --non-interactive
```

Create a subdomain package:

```bash
scaffold subdomain billing --packages domain --non-interactive
```

Create a full subdomain package set with UI mock setup:

```bash
scaffold subdomain billing --packages domain,service,ui --with-mocks --non-interactive
```

Add an entity from a schema file:

```bash
scaffold workspace-domain add-entity customer --domain domain-shared --schema ./customer.entity.yaml
```

Add an entity from inline JSON:

```bash
scaffold workspace-domain add-entity customer --domain domain-customer --props '{"description":"Customer aggregate","properties":{"email":"string","isActive":"boolean","lastContactedAt":"IsoDateString","metadata":"JSON","age":{"type":"number","optional":true}}}'
```

Remove an entity:

```bash
scaffold workspace-domain remove-entity customer --domain domain-customer
```

`--domain` accepts:

- `domain-shared`
- `domain` as an alias for `domain-shared`
- `domain-<name>`
- `_<subdomain>-domain-<name>`

## Full Subdomain Workflow

When a full subdomain package set has been scaffolded and all subdomain entities have been added, an AI agent should usually follow this workflow:

1. Read `.scaffold/target.json` for the subdomain packages first.
2. Confirm the owning domain package already contains the required entities.
3. If a dedicated UI package exists, scaffold mock flows for the entities that need UI exploration.
4. Add presentational components to the subdomain UI package.
5. Wire Storybook stories to the generated mock providers and hooks so the components can be exercised visually.
6. If a frontend application exists and the user wants integration, wire the UI package and mock-backed flow into that app.

### Recommended order

For a subdomain such as `billing`:

1. Scaffold packages:

```bash
scaffold subdomain billing --packages domain,service,ui --with-mocks --non-interactive
```

2. Add entities:

```bash
scaffold workspace-domain add-entity invoice --domain _billing-domain-billing --schema ./invoice.entity.yaml
scaffold workspace-domain add-entity payment --domain _billing-domain-billing --schema ./payment.entity.yaml
```

3. Add or extend mock data in the subdomain UI package:

```bash
scaffold workspace-ui add-mock-data invoice --package _billing-ui-billing --domain _billing-domain-billing
scaffold workspace-ui add-mock-data payment --package _billing-ui-billing --domain _billing-domain-billing
```

4. Add presentational components:

```bash
scaffold workspace-ui add-component InvoiceList --package _billing-ui-billing --variant list-item
scaffold workspace-ui add-component BillingOverview --package _billing-ui-billing --variant data-panel
```

### UI and Storybook guidance

Inside `packages/_<subdomain>-ui-<subdomain>`:

- keep components presentational
- keep business logic in hooks or mock-provider-backed composition files
- prefer stories that render components inside `<Entity>MockProvider`
- use generated mock hooks such as `use<Entity>List` and `use<Entity>Item` to supply realistic states
- seed or refine mock inputs so stories demonstrate real entity shapes, not placeholder names only

When a component needs a story:

- render loading, empty, populated, and error-friendly states when useful
- prefer using the generated mock flow instead of ad hoc inline fixtures
- keep Storybook as the first visual verification surface for the UI package

### Optional app integration

If a frontend app is available and the user wants a working prototype:

- wire the subdomain mock-backed flow into the app
- import presentational components from the subdomain UI package, not from stories
- keep the app integration thin: composition and routing in the app, presentation in the UI package

For quick prototype wiring:

```bash
scaffold frontend wire-prototype billing --app frontend-web
```

Use that when the goal is a mock-backed end-to-end demo. Otherwise, import the subdomain UI package directly into the application and compose it with the generated mock provider manually.

### Agent rule of thumb

After scaffolding a subdomain and its entities, the next default move is:

- domain contracts first
- mock data second
- presentational UI third
- Storybook visualization fourth
- application integration only when an app exists and the user wants it

## Entity Schema Contract

Entity definitions can be provided through `--schema <path>` or `--props '<json-or-yaml>'`.

Top-level shape:

```yaml
$schema: ./packages/pkg-domain/schemas/domain-entity.schema.json
title: Customer
description: Customer aggregate
properties:
  email: string
  isActive: boolean
  lastContactedAt: IsoDateString
  metadata: JSON
  age:
    type: number
    optional: true
```

The required key is:

- `properties`

Optional keys are:

- `$schema`
- `title`
- `description`

`properties` is an object whose keys are field names. Each value may be either:

1. A primitive string shorthand
2. An expanded object with `type` and optional `optional`

Expanded form example:

```json
{
  "description": "Customer aggregate",
  "properties": {
    "email": "string",
    "age": { "type": "number", "optional": true },
    "metadata": "JSON"
  }
}
```

## Supported Property Types

- `string`
- `number`
- `boolean`
- `bigint`
- `symbol`
- `null`
- `undefined`
- `IsoDateString`
- `JSON`

Mappings:

- `IsoDateString` -> shared schema from `core-domain`
- `JSON` -> `Schema.Json`
- `optional: true` -> `Schema.optionalKey(...)`

## What Gets Generated

For an entity named `Customer`, scaffolding generates:

- `class Customer extends Schema.Class<Customer>(...)`
- `decodeCustomer`
- `decodeCustomerSync`
- `encodeCustomer`
- `CreateCustomerInput`
- `UpdateCustomerInput`
- `ListCustomerInput`
- `CustomerPage`
- `customerPage`
- `CustomerPort extends CrudPort<...>`

The entity is added to the package barrel export in `src/index.ts`.

## Code quality defaults

- Keep one business concept per generated entity file and avoid dumping unrelated shapes into a single contract
- Prefer create/update/list DTOs that reflect use cases instead of exposing persistence-specific inputs directly
- Extend the generated contracts rather than bypassing them with handwritten parallel types
- Keep domain naming business-oriented and stable so services, APIs, CLI commands, and UI mocks can compose around it
- Treat ports as pure contracts; implementations belong elsewhere

## Consumption

Import domain contracts from the package that owns them:

```ts
import { Customer, type CustomerPort } from "@tx/domain-shared";
import { BillingAccount } from "@tx/domain-billing";
```

Import shared boilerplate only from:

```ts
import { CrudPort, EntityId, IsoDateString } from "@tx/core-domain";
```

See **`skills/backend-workspace/`** for how domain fits with `svc-config` and API layers.
