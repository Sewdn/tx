import { useCallback, useMemo, useState } from "react"

import type { TocChapterItem } from "@/lib/types"

export function useTocSelection(chapters: TocChapterItem[], initialId: string) {
  const [activeId, setActiveId] = useState(initialId)

  const chapterItems = useMemo(
    () =>
      chapters.map((chapter) => ({
        ...chapter,
        active: chapter.id === activeId,
      })),
    [chapters, activeId],
  )

  const select = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  return { activeId, chapterItems, select }
}
