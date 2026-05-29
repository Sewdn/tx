# CLI — cli-admin

Command-line application built with **Effect 4** (`effect/unstable/cli`) on **Bun**.

Uses a **subset** of `@effect/platform-bun` (stdio, terminal, filesystem, path) — not `BunRuntime.runMain` or full `BunServices` (those pull `platform-node-shared` socket code). The monorepo pins `@effect/platform-node-shared@4.0.0-beta.40` in root `package.json` `overrides` so it stays aligned with `effect@4.0.0-beta.40`.

## Source structure

```
src/
├── index.ts              # Command.run(rootCommand) + Effect.runPromiseExit
├── layers.ts             # CliAdminLive (ServiceMap layers)
├── commands/
│   ├── subcommands.ts    # rootCommand + Command.withSubcommands([...])
│   └── <name>.ts         # One Command.make export per subcommand
└── services/             # Effect ServiceMap services + Layer.live implementations
```

## Docs and agents

- Run **`bunx effect-solutions show cli`** from the repo root for API patterns.
- After scaffold, use the **`cli-effect-app`** skill under `skills/` for how to extend this app.

## Scaffolding commands

```bash
scaffold cli add-command <name> [-a <app>] [-d <description>]
scaffold cli add-service <name> [-a <app>] [-d <description>]
```

## Scripts

- `bun run start` — run the CLI
- `bun run build` — compile TypeScript
- `bun run lint` — oxlint
- `bun run format` — oxfmt

After `bun install`, the CLI is linked globally via `postinstall: bun link`.

## Domain administration

| Command | Description |
|---------|-------------|
| `tx-admin domain validate-schema` | Merge and validate `domain/graphql/*.graphql` |

Example:

```bash
tx-admin domain validate-schema
```

## Fly.io deployment

Deploy targets are defined in `apps/textus-config.ts`. Each static target has an nginx wrapper under `apps/textus-static-*`; `fly deploy` builds from workspace sources, copies output into the wrapper `dist/`, then runs `fly deploy`.

| Command | Description |
|---------|-------------|
| `tx-admin fly deploy [targets]` | Build and deploy (`all`, `pt1`, `ui-storybook`, `ui-lib-storybook`, or comma-separated) |
| `tx-admin fly logs [targets]` | Tail Fly logs |
| `tx-admin fly status [targets]` | Show app status |
| `tx-admin fly open [targets]` | Open deployed apps in the browser |
| `tx-admin fly ssh [targets]` | SSH into a machine |
| `tx-admin fly machines [targets]` | List machines |

Examples:

```bash
# Deploy everything (ui storybooks, then pt1 prototype)
tx-admin fly deploy

# Deploy only the prototype app
tx-admin fly deploy pt1

# Deploy both storybooks
tx-admin fly deploy ui-storybook,ui-lib-storybook

# Pass extra flyctl flags
tx-admin fly deploy pt1 --fly-args "--remote-only"
```

Prerequisites:

- [flyctl](https://fly.io/docs/hands-on/install-flyctl/) installed and authenticated (`fly auth login`)
- Fly apps created once per target (`textus-pt1-prototype`, `textus-ui`, `textus-ui-lib`) — `fly deploy` uses the app names in each wrapper's `fly.toml`
- DNS/custom domains configured separately if using `textus.dev` hostnames from `textus-config.ts`
