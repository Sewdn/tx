import { useCallback, useMemo, useState } from "react"

import type { FormatOption } from "@/lib/types"

export function useFormatSelection(options: FormatOption[], initialId?: string) {
  const defaultId = initialId ?? options.find((o) => o.selected)?.id ?? options[0]?.id ?? ""
  const [selectedId, setSelectedId] = useState(defaultId)

  const formatOptions = useMemo(
    () =>
      options.map((option) => ({
        ...option,
        selected: option.id === selectedId,
      })),
    [options, selectedId],
  )

  const select = useCallback((id: string) => {
    setSelectedId(id)
  }, [])

  return { selectedId, formatOptions, select }
}
