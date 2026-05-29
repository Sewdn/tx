import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type TypographyControllerProps = {
  serifLabel: string
  sansLabel: string
  activeFamily: "serif" | "sans"
  className?: string
}

export function TypographyController({
  serifLabel,
  sansLabel,
  activeFamily,
  className,
}: TypographyControllerProps) {
  return (
    <div
      className={cn(
        "fixed right-8 bottom-8 z-40 flex items-center gap-4 rounded-full border border-outline bg-surface-container-lowest px-6 py-3 shadow-lg",
        className,
      )}
    >
      <MaterialIcon name="format_size" className="cursor-pointer text-primary" />
      <div className="h-4 w-px bg-outline-variant" />
      <span
        className={cn(
          "font-headline-lg text-[16px]",
          activeFamily === "serif" ? "text-primary" : "font-ui-label-md text-on-surface-variant",
        )}
      >
        {serifLabel}
      </span>
      <span
        className={cn(
          activeFamily === "sans" ? "font-ui-label-md text-primary" : "font-ui-label-md text-on-surface-variant",
        )}
      >
        {sansLabel}
      </span>
      <div className="h-4 w-px bg-outline-variant" />
      <MaterialIcon name="settings_brightness" className="cursor-pointer text-outline" />
    </div>
  )
}
