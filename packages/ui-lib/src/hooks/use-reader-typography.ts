import { useCallback, useState } from "react"

import type { CanvasTheme, TypographyFamily } from "@/lib/types"

const MIN_FONT = 12
const MAX_FONT = 32
const STEP = 2

export function useReaderTypography(
  initialFontSize = 18,
  initialFamily: TypographyFamily = "serif",
  initialThemeId?: string,
) {
  const [fontSize, setFontSize] = useState(initialFontSize)
  const [activeFamily, setActiveFamily] = useState<TypographyFamily>(initialFamily)
  const [activeThemeId, setActiveThemeId] = useState(initialThemeId)

  const increaseFontSize = useCallback(() => {
    setFontSize((size) => Math.min(MAX_FONT, size + STEP))
  }, [])

  const decreaseFontSize = useCallback(() => {
    setFontSize((size) => Math.max(MIN_FONT, size - STEP))
  }, [])

  const selectSerif = useCallback(() => setActiveFamily("serif"), [])
  const selectSans = useCallback(() => setActiveFamily("sans"), [])

  const selectTheme = useCallback((theme: CanvasTheme) => {
    setActiveThemeId(theme.id)
  }, [])

  return {
    fontSize,
    activeFamily,
    activeThemeId,
    increaseFontSize,
    decreaseFontSize,
    selectSerif,
    selectSans,
    selectTheme,
  }
}
