import { useCallback, useState } from "react"

export function useNavSelection(initialId: string) {
  const [activeId, setActiveId] = useState(initialId)

  const select = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  return { activeId, select }
}
