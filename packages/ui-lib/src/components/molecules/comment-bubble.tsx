import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"

export type CommentBubbleProps = {
  author: string
  timestamp: string
  body: string
  className?: string
}

export function CommentBubble({ author, timestamp, body, className }: CommentBubbleProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary-fixed">
        <MaterialIcon name="person" size={18} />
      </div>
      <div>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="font-ui-label-md font-bold">{author}</span>
          <span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">
            {timestamp}
          </span>
        </div>
        <p className="rounded-lg border border-outline-variant/30 bg-surface-container-low p-3 font-body-md text-body-md text-on-surface-variant">
          {body}
        </p>
      </div>
    </div>
  )
}
