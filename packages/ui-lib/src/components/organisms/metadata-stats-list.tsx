import { MetadataField } from "@/components/atoms/metadata-field"
import { cn } from "@/lib/utils"

export type MetadataStatsListProps = {
  fields: { label: string; value: string; href?: string }[]
  className?: string
}

export function MetadataStatsList({ fields, className }: MetadataStatsListProps) {
  return (
    <div className={cn("space-y-section border-t border-outline-variant pt-section", className)}>
      {fields.map((field) => (
        <MetadataField key={field.label} {...field} />
      ))}
    </div>
  )
}
