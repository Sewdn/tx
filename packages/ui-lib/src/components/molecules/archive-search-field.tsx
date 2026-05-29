import { Input } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type ArchiveSearchFieldProps = {
  placeholder: string
  value?: string
  className?: string
  inputClassName?: string
}

export function ArchiveSearchField({
  placeholder,
  value,
  className,
  inputClassName,
}: ArchiveSearchFieldProps) {
  return (
    <div className={cn("relative hidden sm:block", className)}>
      <MaterialIcon
        name="search"
        size={20}
        className="absolute top-1/2 left-3 -translate-y-1/2 text-on-surface-variant"
      />
      <Input
        readOnly
        value={value}
        placeholder={placeholder}
        className={cn(
          "h-9 w-64 rounded-sm border-outline-variant bg-surface-container-low py-2 pr-4 pl-10 font-ui-label-md text-ui-label-md focus-visible:border-primary focus-visible:ring-0",
          inputClassName,
        )}
      />
    </div>
  )
}
