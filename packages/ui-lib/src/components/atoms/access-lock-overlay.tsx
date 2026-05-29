import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type AccessLockOverlayProps = {
  message?: string
  className?: string
}

export function AccessLockOverlay({ message, className }: AccessLockOverlayProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex flex-col items-center justify-center gap-micro bg-primary/20 backdrop-blur-[2px]",
        className,
      )}
      aria-hidden={message ? undefined : true}
      aria-label={message}
    >
      <MaterialIcon name="lock" size={32} className="text-on-primary" />
      {message ? (
        <span className="font-ui-label-sm text-ui-label-sm text-on-primary">{message}</span>
      ) : null}
    </div>
  )
}
