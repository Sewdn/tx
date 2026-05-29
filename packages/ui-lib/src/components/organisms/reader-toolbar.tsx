import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { CanvasTheme, TypographyFamily } from "@/lib/types"

export type ReaderToolbarProps = {
  fontSize: number
  activeFamily: TypographyFamily
  serifLabel?: string
  sansLabel?: string
  themes: CanvasTheme[]
  activeThemeId?: string
  className?: string
}

export function ReaderToolbar({
  fontSize,
  activeFamily,
  serifLabel = "Serif",
  sansLabel = "Sans",
  themes,
  activeThemeId,
  className,
}: ReaderToolbarProps) {
  return (
    <div className={cn("fixed bottom-12 left-1/2 z-50 -translate-x-1/2", className)}>
      <div className="flex items-center gap-section rounded-full border border-outline-variant bg-surface-container-highest/90 px-section py-component shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-micro">
          <span className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-surface-container-high">
            <MaterialIcon name="text_decrease" size={18} />
          </span>
          <span className="w-8 text-center font-ui-label-md text-ui-label-md">{fontSize}</span>
          <span className="flex size-8 items-center justify-center rounded-full transition-colors hover:bg-surface-container-high">
            <MaterialIcon name="text_increase" size={18} />
          </span>
        </div>
        <div className="h-6 w-px bg-outline-variant" />
        <div className="flex items-center gap-component">
          <span
            className={cn(
              "rounded-full px-component py-1 font-ui-label-md text-ui-label-md",
              activeFamily === "serif"
                ? "bg-primary text-on-primary"
                : "hover:bg-surface-container-high",
            )}
          >
            {serifLabel}
          </span>
          <span
            className={cn(
              "rounded-full px-component py-1 font-ui-label-md text-ui-label-md",
              activeFamily === "sans"
                ? "bg-primary text-on-primary"
                : "hover:bg-surface-container-high",
            )}
          >
            {sansLabel}
          </span>
        </div>
        <div className="h-6 w-px bg-outline-variant" />
        <div className="flex items-center gap-component">
          {themes.map((theme) => (
            <span
              key={theme.id}
              className={cn(
                "size-6 rounded-full border border-outline-variant",
                theme.id === activeThemeId && "ring-2 ring-primary ring-offset-2",
              )}
              style={{ backgroundColor: theme.color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
