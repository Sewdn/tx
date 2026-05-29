import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export type CinematicScrimProps = {
  children: ReactNode
  className?: string
}

export function CinematicScrim({ children, className }: CinematicScrimProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <div className="cinematic-scrim pointer-events-none absolute inset-0" aria-hidden />
    </div>
  )
}
