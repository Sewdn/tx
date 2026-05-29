import { ActivityFeedItem } from "@/components/molecules/activity-feed-item"
import type { ActivityFeedItemData } from "@/lib/types"

export type ActivityFeedProps = {
  title?: string
  subtitle?: string
  items: ActivityFeedItemData[]
}

export function ActivityFeed({
  title = "Recent Actions",
  subtitle = "Real-time repository mutations",
  items,
}: ActivityFeedProps) {
  return (
    <section className="flex h-[700px] flex-col rounded-lg border border-outline-variant bg-surface-container-low">
      <div className="border-b border-outline-variant p-section">
        <h2 className="font-headline-lg text-[20px] text-primary">{title}</h2>
        <p className="font-ui-label-sm text-outline">{subtitle}</p>
      </div>
      <div className="grow space-y-section overflow-y-auto p-section custom-scrollbar">
        {items.map((item) => (
          <ActivityFeedItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
