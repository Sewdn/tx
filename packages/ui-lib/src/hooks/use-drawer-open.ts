import { useCallback, useState } from "react"

export function useDrawerOpen(initialOpen = false) {
  const [open, setOpen] = useState(initialOpen)

  const openDrawer = useCallback(() => setOpen(true), [])
  const closeDrawer = useCallback(() => setOpen(false), [])
  const toggleDrawer = useCallback(() => setOpen((prev) => !prev), [])

  return { open, openDrawer, closeDrawer, toggleDrawer }
}
