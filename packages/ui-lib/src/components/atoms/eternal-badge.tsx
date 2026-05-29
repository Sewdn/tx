import { cva, type VariantProps } from "class-variance-authority"

import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center bg-[linear-gradient(135deg,#13110f_0%,#494643_100%)] text-on-primary font-ui-label-sm text-ui-label-sm uppercase",
  {
    variants: {
      variant: {
        eternal: "gap-micro px-component py-micro tracking-tighter",
        genesis: "gap-micro px-section py-component tracking-widest",
      },
    },
    defaultVariants: {
      variant: "eternal",
    },
  },
)

const iconByVariant = {
  eternal: "all_inclusive",
  genesis: "workspace_premium",
} as const

export type EternalBadgeProps = {
  label: string
  variant?: "eternal" | "genesis"
  className?: string
} & VariantProps<typeof badgeVariants>

export function EternalBadge({ label, variant = "eternal", className }: EternalBadgeProps) {
  const iconSize = variant === "genesis" ? 18 : 14

  return (
    <span className={cn(badgeVariants({ variant }), className)}>
      <MaterialIcon name={iconByVariant[variant]} size={iconSize} />
      {label}
    </span>
  )
}
