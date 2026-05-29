import { Button } from "@tx/ui"
import { cn } from "@/lib/utils"

export type LoadMoreFooterProps = {
  shown: number
  total: number
  onLoadMore?: () => void
  className?: string
}

export function LoadMoreFooter({ shown, total, onLoadMore, className }: LoadMoreFooterProps) {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-component border-t border-outline-variant py-region",
        className,
      )}
    >
      <p className="font-ui-label-md text-ui-label-md text-on-surface-variant">
        Showing {shown} of {total}
      </p>
      {shown < total ? (
        <Button
          variant="outline"
          onClick={onLoadMore}
          className="border-outline-variant px-section font-ui-label-md text-primary"
        >
          Load More
        </Button>
      ) : null}
    </footer>
  )
}
