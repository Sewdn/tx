import { useCallback, useState } from "react"

import type { TypographyFamily } from "@/lib/types"

export type { TypographyFamily }

export function useTypographyController(initial: TypographyFamily = "serif") {
  const [activeFamily, setActiveFamily] = useState<TypographyFamily>(initial)

  const selectSerif = useCallback(() => setActiveFamily("serif"), [])
  const selectSans = useCallback(() => setActiveFamily("sans"), [])

  return { activeFamily, selectSerif, selectSans }
}
