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
