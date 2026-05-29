import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const SPACING_ROLES = ["micro", "component", "section", "region", "boundary"] as const

type SpacingRole = (typeof SPACING_ROLES)[number]
type ResolvedTokens = Record<SpacingRole, { mobile: string; desktop: string }>

const remToPx = (value: string): string => {
  const trimmed = value.trim()
  if (!trimmed) return ""
  if (trimmed.endsWith("rem")) return `${Math.round(parseFloat(trimmed) * 16)}px`
  return trimmed
}

function readSpacingFromStyleSheets(targetSelector: string): ResolvedTokens {
  const result = Object.fromEntries(
    SPACING_ROLES.map((role) => [role, { mobile: "", desktop: "" }]),
  ) as ResolvedTokens

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRule[]
    try {
      rules = Array.from(sheet.cssRules ?? [])
    } catch {
      continue
    }
    for (const rule of rules) {
      if (rule instanceof CSSStyleRule && rule.selectorText === targetSelector) {
        for (const role of SPACING_ROLES) {
          const value = rule.style.getPropertyValue(`--spacing-${role}`)
          if (value) result[role].mobile = remToPx(value)
        }
      } else if (rule instanceof CSSMediaRule && rule.conditionText.includes("768px")) {
        for (const inner of Array.from(rule.cssRules)) {
          if (inner instanceof CSSStyleRule && inner.selectorText === targetSelector) {
            for (const role of SPACING_ROLES) {
              const value = inner.style.getPropertyValue(`--spacing-${role}`)
              if (value) result[role].desktop = remToPx(value)
            }
          }
        }
      }
    }
  }
  return result
}

function useSpacingTokens(targetSelector: string): ResolvedTokens {
  const [tokens, setTokens] = React.useState<ResolvedTokens>(
    () =>
      Object.fromEntries(
        SPACING_ROLES.map((role) => [role, { mobile: "", desktop: "" }]),
      ) as ResolvedTokens,
  )
  React.useEffect(() => {
    setTokens(readSpacingFromStyleSheets(targetSelector))
  }, [targetSelector])
  return tokens
}

type ScaleToken = { name: string; value: number }

const ScaleRow = ({ value, name }: ScaleToken) => {
  const style = window.getComputedStyle(document.body)
  const size = style.getPropertyValue("--spacing")
  const rem = parseFloat(size) * value
  const pixels = parseFloat(size) * 16 * value
  return (
    <TableRow>
      <TableCell className="font-mono text-xs">{name}</TableCell>
      <TableCell className="font-mono text-xs text-muted-foreground">{pixels}px</TableCell>
      <TableCell className="w-full">
        <div className="flex items-center gap-3">
          <div className="h-4 shrink-0 rounded-sm bg-primary" style={{ width: pixels }} />
          <span className="shrink-0 font-mono text-[10px] text-muted-foreground">{rem}rem</span>
        </div>
      </TableCell>
    </TableRow>
  )
}

type ContextToken = {
  role: string
  mobile: string
  desktop: string
  intent: string
}

const ContextRow = ({ role, mobile, desktop, intent }: ContextToken) => (
  <TableRow>
    <TableCell>
      <Badge variant="outline" className="font-medium normal-case tracking-normal">
        {role}
      </Badge>
    </TableCell>
    <TableCell className="font-mono text-xs text-muted-foreground">{desktop}</TableCell>
    <TableCell className="font-mono text-xs text-muted-foreground">{mobile}</TableCell>
    <TableCell className="text-xs text-muted-foreground">{intent}</TableCell>
  </TableRow>
)

function ContextTable({
  title,
  subtitle,
  tokens,
}: {
  title: string
  subtitle: string
  tokens: ContextToken[]
}) {
  return (
    <div>
      <header className="mb-section">
        <h2 className="text-heading-lg font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="mt-component max-w-2xl text-base text-muted-foreground">{subtitle}</p>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Desktop (≥768px)</TableHead>
            <TableHead>Mobile (&lt;768px)</TableHead>
            <TableHead>Intent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token) => (
            <ContextRow key={token.role} {...token} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

const ROLE_INTENT: Record<SpacingRole, { label: string; intent: string }> = {
  micro: {
    label: "Micro",
    intent: "Inside a phrase. Icon-to-label, title-to-subtitle, status dot to text.",
  },
  component: {
    label: "Component",
    intent: "Inside a primitive. Button padding, input inset, icon gaps. Larger on mobile for touch.",
  },
  section: {
    label: "Section",
    intent: "Inside a card or panel. Card padding, gaps between rows in a list.",
  },
  region: {
    label: "Region",
    intent: "Between page blocks. Header to grid, hero to content, column gutters.",
  },
  boundary: {
    label: "Boundary",
    intent: "Page frame. Main margins and shell padding — applied once by the layout.",
  },
}

function buildContextTokens(resolved: ResolvedTokens): ContextToken[] {
  return SPACING_ROLES.map((role) => ({
    role: ROLE_INTENT[role].label,
    mobile: resolved[role].mobile || "—",
    desktop: resolved[role].desktop || resolved[role].mobile || "—",
    intent: ROLE_INTENT[role].intent,
  }))
}

const meta: Meta = {
  title: "design tokens/Spacing",
}

export default meta

type Story = StoryObj<typeof meta>

const scaleTokens: ScaleToken[] = [
  { name: "ds-1", value: 1 },
  { name: "ds-2", value: 2 },
  { name: "ds-3", value: 3 },
  { name: "ds-4", value: 4 },
  { name: "ds-6", value: 6 },
  { name: "ds-8", value: 8 },
  { name: "ds-10", value: 10 },
  { name: "ds-12", value: 12 },
  { name: "ds-16", value: 16 },
  { name: "ds-20", value: 20 },
  { name: "ds-24", value: 24 },
]

export const ScaleFoundations: Story = {
  render: () => (
    <div className="p-section">
      <header className="mb-section">
        <h2 className="text-heading-lg font-semibold tracking-tight text-foreground">
          Scale foundations
        </h2>
        <p className="mt-component max-w-2xl text-base text-muted-foreground">
          4px base unit multiplier scale (`spacing-ds-*`) for exceptional layout tuning.
          Prefer semantic roles (micro → boundary) in product UI.
        </p>
      </header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Token</TableHead>
            <TableHead>Size</TableHead>
            <TableHead className="hidden sm:table-cell">
              <span className="sr-only">Preview</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scaleTokens.map((token) => (
            <ScaleRow key={token.name} {...token} />
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}

function OperationalSpacingTable() {
  const resolved = useSpacingTokens(":root")
  return (
    <ContextTable
      title="Operational spacing"
      subtitle="Default density for manuscript tools, revisions, agents, and dashboards. Dense and scannable."
      tokens={buildContextTokens(resolved)}
    />
  )
}

export const OperationalSpacing: Story = {
  render: () => (
    <div className="p-section">
      <OperationalSpacingTable />
    </div>
  ),
}

function SpaciousSpacingTable() {
  const resolved = useSpacingTokens('[data-density="spacious"]')
  return (
    <ContextTable
      title="Spacious spacing"
      subtitle="Reader preview, library catalog, and public literary surfaces. Generous rhythm for trust and readability."
      tokens={buildContextTokens(resolved)}
    />
  )
}

export const SpaciousSpacing: Story = {
  render: () => (
    <div className="p-section" data-density="spacious">
      <SpaciousSpacingTable />
    </div>
  ),
}
