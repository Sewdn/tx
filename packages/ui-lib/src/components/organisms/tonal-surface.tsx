import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export type TonalSurfaceProps = {
  children: ReactNode
  variant?: "default" | "layer-1" | "layer-2"
  className?: string
}

export function TonalSurface({
  children,
  variant = "default",
  className,
}: TonalSurfaceProps) {
  return (
    <div
      className={cn(
        variant === "default" && "tonal-surface",
        variant === "layer-1" && "tonal-layer-1",
        variant === "layer-2" && "tonal-layer-2",
        "rounded-lg",
        className,
      )}
    >
      {children}
    </div>
  )
}
