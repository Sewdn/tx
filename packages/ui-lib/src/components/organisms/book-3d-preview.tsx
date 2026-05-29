import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type Book3DPreviewProps = {
  coverSrc: string
  title: string
  overlayMode?: "none" | "spine" | "shadow"
  className?: string
}

function PreviewToolButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-outline-variant bg-background transition-colors hover:bg-surface-container"
    >
      <MaterialIcon name={icon} size={20} className="text-primary" />
    </button>
  )
}

export function Book3DPreview({
  coverSrc,
  title,
  overlayMode = "spine",
  className,
}: Book3DPreviewProps) {
  return (
    <div className={cn("flex flex-col items-center gap-section", className)}>
      <div className="perspective-[1200px]">
        <div
          className="relative transition-transform duration-500 hover:rotate-y-[-15deg]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative w-48 shadow-2xl" style={{ transform: "rotateY(-8deg)" }}>
            <img alt={`${title} cover`} src={coverSrc} className="aspect-[2/3] w-full object-cover" />
            {overlayMode === "spine" ? (
              <div
                className="absolute top-0 left-0 h-full w-4 bg-gradient-to-r from-black/40 to-black/10"
                style={{ transform: "rotateY(-90deg) translateX(-8px)", transformOrigin: "left center" }}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex gap-micro">
        <PreviewToolButton icon="rotate_left" label="Rotate left" />
        <PreviewToolButton icon="rotate_right" label="Rotate right" />
        <PreviewToolButton icon="zoom_in" label="Zoom in" />
      </div>
    </div>
  )
}
