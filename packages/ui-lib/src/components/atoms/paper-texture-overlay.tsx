import { cn } from "@/lib/utils"

const PAPER_TEXTURE_URL =
  "https://www.transparenttextures.com/patterns/felt-paper.png"

export type PaperTextureOverlayProps = {
  className?: string
}

export function PaperTextureOverlay({ className }: PaperTextureOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 opacity-[0.03]",
        className,
      )}
      style={{ backgroundImage: `url("${PAPER_TEXTURE_URL}")` }}
      aria-hidden
    />
  )
}
