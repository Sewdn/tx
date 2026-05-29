import { useCallback, useMemo, useState } from "react"

import type { DesignPreset } from "@/lib/types"

export function usePresetSelection(presets: DesignPreset[], initialId?: string) {
  const defaultId = initialId ?? presets.find((p) => p.active)?.id ?? presets[0]?.id ?? ""
  const [selectedId, setSelectedId] = useState(defaultId)

  const presetOptions = useMemo(
    () =>
      presets.map((preset) => ({
        ...preset,
        active: preset.id === selectedId,
      })),
    [presets, selectedId],
  )

  const select = useCallback((id: string) => {
    setSelectedId(id)
  }, [])

  return { selectedId, presetOptions, select }
}
