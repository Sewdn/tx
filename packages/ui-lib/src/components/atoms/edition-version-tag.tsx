import { cn } from "@/lib/utils"

export type EditionVersionTagProps = {
  label: string
  className?: string
}

export function EditionVersionTag({ label, className }: EditionVersionTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-micro border border-secondary bg-secondary-fixed/20 px-component py-micro font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-on-secondary-fixed",
        className,
      )}
    >
      {label}
    </span>
  )
}
