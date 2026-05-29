import { useCallback, useMemo, useState } from "react"

import type { SidebarNavItem } from "@/lib/types"

export function useSidebarNav(items: SidebarNavItem[], initialActiveId: string) {
  const [activeId, setActiveId] = useState(initialActiveId)

  const navItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        active: item.id === activeId,
      })),
    [items, activeId],
  )

  const select = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  return { navItems, activeId, select }
}
