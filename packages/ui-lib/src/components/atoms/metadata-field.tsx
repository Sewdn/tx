import { cn } from "@/lib/utils"

export type MetadataFieldProps = {
  label: string
  value: string
  href?: string
  className?: string
}

export function MetadataField({ label, value, href, className }: MetadataFieldProps) {
  return (
    <div className={cn("space-y-micro", className)}>
      <span className="font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-outline">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="font-ui-label-md text-ui-label-md text-primary underline"
        >
          {value}
        </a>
      ) : (
        <p className="font-ui-label-md text-ui-label-md text-primary">{value}</p>
      )}
    </div>
  )
}
