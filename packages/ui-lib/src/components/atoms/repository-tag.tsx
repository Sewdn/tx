import { cva, type VariantProps } from "class-variance-authority"

import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { RepositoryTagVariant } from "@/lib/types"

const tagVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-ui-label-sm text-ui-label-sm",
  {
    variants: {
      variant: {
        "public-domain":
          "bg-secondary-container text-on-secondary-container",
        "agent-curated": "bg-tertiary-fixed text-on-tertiary-fixed-variant",
        version: "border border-outline text-on-surface-variant",
      },
    },
    defaultVariants: {
      variant: "version",
    },
  },
)

export type RepositoryTagProps = {
  variant: RepositoryTagVariant
  label: string
  className?: string
} & VariantProps<typeof tagVariants>

export function RepositoryTag({ variant, label, className }: RepositoryTagProps) {
  return (
    <span className={cn(tagVariants({ variant }), className)}>
      {variant === "agent-curated" ? (
        <MaterialIcon name="smart_toy" size={14} />
      ) : null}
      {label}
    </span>
  )
}
