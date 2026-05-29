import { createContext, useContext, type ReactNode } from "react"
import type { ReactFormExtendedApi } from "@tanstack/react-form"

/** Form instance shared by entity field components (typed per screen via {@link useEntityForm}). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type EntityFormApi = ReactFormExtendedApi<any, any, any, any, any, any, any, any, any, any, any, any>

const EntityFormContext = createContext<EntityFormApi | null>(null)

export function EntityFormProvider({
  form,
  children,
}: {
  form: EntityFormApi
  children: ReactNode
}) {
  return <EntityFormContext.Provider value={form}>{children}</EntityFormContext.Provider>
}

export function useEntityForm<T extends object = object>() {
  const form = useContext(EntityFormContext)
  if (!form) {
    throw new Error("useEntityForm must be used within EntityFormShell")
  }
  return form as EntityFormApi & { state: { values: T } }
}
