import { Input } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type ArchiveSearchFieldProps = {
  placeholder: string
  value?: string
  expandOnFocus?: boolean
  variant?: "default" | "pill"
  className?: string
  inputClassName?: string
}

export function ArchiveSearchField({
  placeholder,
  value,
  expandOnFocus = false,
  variant = "default",
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
          "h-9 border-outline-variant bg-surface-container-low py-component pr-4 pl-10 font-ui-label-md text-ui-label-md focus-visible:border-primary focus-visible:ring-0",
          variant === "pill" ? "rounded-full" : "rounded-sm",
          expandOnFocus ? "w-64 transition-all duration-300 focus:w-80" : "w-64",
          inputClassName,
        )}
      />
    </div>
  )
}
