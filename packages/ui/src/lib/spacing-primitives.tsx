import * as React from "react"

import { cn } from "@/lib/utils"

export type SpacingToken = "micro" | "component" | "section" | "region" | "boundary"

const GridContext = React.createContext<{
  show: boolean
  toggle: () => void
}>({ show: false, toggle: () => {} })

export type Density = "operational" | "spacious"

const DensityContext = React.createContext<{
  density: Density
  toggle: () => void
}>({ density: "operational", toggle: () => {} })

export function useTokenValue(token: SpacingToken) {
  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    const read = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(`--spacing-${token}`)
        .trim()
      if (!raw) {
        setValue("")
        return
      }
      if (raw.endsWith("rem")) {
        setValue(`${Math.round(parseFloat(raw) * 16)}px`)
      } else {
        setValue(raw)
      }
    }

    read()
    const observer = new MutationObserver(read)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-density", "class", "data-theme"],
    })
    return () => observer.disconnect()
  }, [token])

  return value
}

export function TokenTag({ token, className }: { token: SpacingToken; className?: string }) {
  const value = useTokenValue(token)
  return (
    <span
      className={cn(
        "pointer-events-none z-20 inline-flex items-center gap-1 rounded-sm bg-primary px-1 py-px font-mono text-[9px] font-medium leading-none text-primary-foreground shadow-sm",
        className,
      )}
    >
      <span>{token}</span>
      <span className="opacity-70">·</span>
      <span className="tabular-nums">{value}</span>
    </span>
  )
}

const PADDING_CLASS: Record<SpacingToken, string> = {
  micro: "p-micro",
  component: "p-component",
  section: "p-section",
  region: "p-region",
  boundary: "p-boundary",
}

const GAP_CLASS: Record<SpacingToken, string> = {
  micro: "gap-micro",
  component: "gap-component",
  section: "gap-section",
  region: "gap-region",
  boundary: "gap-boundary",
}

export function SpacingBox({
  p,
  className,
  children,
  as: Tag = "div",
  showcase = false,
}: {
  p: SpacingToken
  className?: string
  children?: React.ReactNode
  as?: "div" | "section" | "header" | "footer" | "aside" | "main"
  showcase?: boolean
}) {
  const { show: showGrid } = React.useContext(GridContext)
  const active = showGrid && showcase
  const sideStyle = (axis: "h" | "w") => ({
    [axis === "h" ? "height" : "width"]: `var(--spacing-${p})`,
  })
  return (
    <Tag
      className={cn("relative", PADDING_CLASS[p], active && "outline outline-1 outline-primary/30", className)}
    >
      {active ? (
        <>
          <span
            className="pointer-events-none absolute inset-x-0 top-0 bg-primary/15"
            style={sideStyle("h")}
          />
          <span
            className="pointer-events-none absolute inset-x-0 bottom-0 bg-primary/15"
            style={sideStyle("h")}
          />
          <span
            className="pointer-events-none absolute inset-y-0 left-0 bg-primary/15"
            style={sideStyle("w")}
          />
          <span
            className="pointer-events-none absolute inset-y-0 right-0 bg-primary/15"
            style={sideStyle("w")}
          />
          <TokenTag token={p} className="absolute left-1 top-1" />
        </>
      ) : null}
      {children}
    </Tag>
  )
}

export function SpacingGroup({
  gap,
  className,
  children,
  showcase = false,
}: {
  gap: SpacingToken
  className?: string
  children?: React.ReactNode
  showcase?: boolean
}) {
  const { show: showGrid } = React.useContext(GridContext)
  const active = showGrid && showcase
  return (
    <div className={cn("relative flex", GAP_CLASS[gap], active && "outline outline-1 outline-primary/30", className)}>
      {active ? (
        <TokenTag token={gap} className="absolute left-1 top-1 z-20" />
      ) : null}
      {children}
    </div>
  )
}

export function GridProvider({
  children,
  initial = false,
}: {
  children: React.ReactNode
  initial?: boolean
}) {
  const [show, setShow] = React.useState(initial)
  const toggle = React.useCallback(() => setShow((s) => !s), [])
  const value = React.useMemo(() => ({ show, toggle }), [show, toggle])
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>
}

export function DensityProvider({ children }: { children: React.ReactNode }) {
  const [density, setDensity] = React.useState<Density>("operational")
  React.useEffect(() => {
    document.documentElement.dataset.density = density
  }, [density])
  const toggle = React.useCallback(
    () => setDensity((d) => (d === "operational" ? "spacious" : "operational")),
    [],
  )
  const value = React.useMemo(() => ({ density, toggle }), [density, toggle])
  return <DensityContext.Provider value={value}>{children}</DensityContext.Provider>
}

export function useSpacingGrid() {
  return React.useContext(GridContext)
}

export function useSpacingDensity() {
  return React.useContext(DensityContext)
}
