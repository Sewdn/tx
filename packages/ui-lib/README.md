# @tx/ui-lib

Composed **presentational** UI for Gittenberg, built from `@tx/ui` primitives.

## Structure

| Layer | Path | Examples |
|-------|------|----------|
| Atoms | `src/components/atoms/` | `MaterialIcon`, `RepositoryTag`, `StatusDot` |
| Molecules | `src/components/molecules/` | `FileTableRow`, `MetricCard`, `DiffLine` |
| Organisms | `src/components/organisms/` | `GittenbergTopAppBar`, `FileTable`, `DiffViewer` |
| Pages (Storybook) | `src/components/pages/` | Full-screen composites stitched from organisms |
| Hooks | `src/hooks/` | `useNavSelection`, `useSidebarNav`, `useTypographyController` |

Components are strictly presentational. State and interaction live in hooks (consumed by apps or Storybook demo wrappers).

## Storybook

```bash
cd packages/ui-lib
bun run storybook
```

Open **http://localhost:6007**. Default toolbar theme: **Gittenberg** (`@tx/ui` → `src/styles/themes/gittenberg.css`).

### Sidebar hierarchy

Stories are grouped so you can drill from full pages down to atoms:

```
Gittenberg
├── Pages/                    # Full mock screens
│   ├── Repository Home
│   ├── Revision Detail
│   └── …
├── Shell/                    # Shared chrome
│   ├── Organisms → Molecules → Atoms
├── Repository/
├── Revision/
├── Reader/
├── Build & Export/
├── Edition History/
├── Library/
├── Agents/
└── Lexicon Editor/
```

Within each domain, **Organisms → Molecules → Atoms** (configured in `.storybook/preview.tsx` `storySort`).

Every component under `src/components/{atoms,molecules,organisms}/` has a matching `*.stories.tsx`. Page composites live under `src/components/pages/`.

### Regenerating stories

Storybook CSF requires **string literal** `title` values. After adding a component, update `scripts/sync-stories.mjs` and run:

```bash
bun run sync-stories          # atoms, molecules, organisms
bun run sync-page-titles      # page story titles only
```

Canonical title paths are documented in `src/storybook/titles.ts` (reference; generated stories embed literals).

## Fixtures

`src/fixtures/gittenberg.ts` and `src/fixtures/slices.ts` hold mock data aligned with `mocks/*.html` and stitched HTML exports.
