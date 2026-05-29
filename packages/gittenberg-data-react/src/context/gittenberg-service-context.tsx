import { createContext, useContext, type ReactNode } from "react"
import type { GittenbergBackend, GittenbergDataService } from "@tx/gittenberg-data"
import type { GittenbergUiSeed } from "@tx/gittenberg-data"

export type GittenbergServiceContextValue = {
  readonly service: GittenbergDataService
  readonly ui: GittenbergUiSeed
  readonly backend: GittenbergBackend
  readonly namespace: string
}

const GittenbergServiceContext = createContext<GittenbergServiceContextValue | null>(null)

export function GittenbergServiceProvider({
  value,
  children,
}: {
  value: GittenbergServiceContextValue
  children: ReactNode
}) {
  return (
    <GittenbergServiceContext.Provider value={value}>{children}</GittenbergServiceContext.Provider>
  )
}

export function useGittenbergService(): GittenbergServiceContextValue {
  const value = useContext(GittenbergServiceContext)
  if (!value) {
    throw new Error("useGittenbergService must be used within GittenbergDataProvider")
  }
  return value
}
