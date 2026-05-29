import { cn } from "@/lib/utils"
import type { ActivityFeedItemData } from "@/lib/types"

const dotColors: Record<ActivityFeedItemData["dotVariant"], string> = {
  secondary: "bg-secondary",
  primary: "bg-primary",
  error: "bg-error",
}

const tagStyles: Record<NonNullable<ActivityFeedItemData["tagVariant"]>, string> = {
  secondary: "border border-secondary-container/20 bg-secondary-container/30 text-secondary",
  muted: "bg-surface-container-high text-on-surface-variant",
  error: "bg-error-container text-on-error-container",
}

export type ActivityFeedItemProps = ActivityFeedItemData

export function ActivityFeedItem({
  timestamp,
  title,
  body,
  tag,
  tagVariant = "muted",
  actionLabel,
  dotVariant,
}: ActivityFeedItemProps) {
  return (
    <div className="relative border-l-2 border-outline-variant pl-8">
      <div
        className={cn(
          "absolute top-0 -left-[9px] size-4 rounded-full border-2 border-background",
          dotColors[dotVariant],
        )}
      />
      <div className="mb-micro font-ui-label-sm text-ui-label-sm text-outline">{timestamp}</div>
      <div className="font-ui-label-md font-bold text-primary">{title}</div>
      <div className="mt-micro font-body-md text-body-md text-on-surface-variant italic">{body}</div>
      {tag ? (
        <div
          className={cn(
            "mt-micro inline-block rounded px-micro py-1 font-ui-label-sm text-ui-label-sm",
            tagStyles[tagVariant],
          )}
        >
          {tag}
        </div>
      ) : null}
      {actionLabel ? (
        <span className="mt-3 block font-ui-label-sm font-bold text-primary underline">
          {actionLabel}
        </span>
      ) : null}
    </div>
  )
}
