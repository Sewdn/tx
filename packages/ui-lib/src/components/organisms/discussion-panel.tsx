import { Button, Textarea } from "@tx/ui"
import { CommentBubble } from "@/components/molecules/comment-bubble"
import { MaterialIcon } from "@/components/atoms/material-icon"
import { cn } from "@/lib/utils"
import type { CommentData } from "@/lib/types"

export type DiscussionPanelProps = {
  comments: CommentData[]
  commentPlaceholder: string
  submitLabel: string
  mergeLabel: string
  requestChangesLabel: string
  className?: string
}

export function DiscussionPanel({
  comments,
  commentPlaceholder,
  submitLabel,
  mergeLabel,
  requestChangesLabel,
  className,
}: DiscussionPanelProps) {
  return (
    <div className={cn("flex w-full flex-col gap-section xl:w-[400px]", className)}>
      <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-section shadow-sm">
        <h4 className="mb-section flex items-center gap-micro font-headline-lg text-[20px]">
          <MaterialIcon name="forum" />
          Discussion
        </h4>
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentBubble
              key={comment.id}
              author={comment.author}
              timestamp={comment.timestamp}
              body={comment.body}
            />
          ))}
        </div>
        <div className="relative mt-section border-t border-outline-variant pt-section">
          <Textarea
            readOnly
            rows={3}
            placeholder={commentPlaceholder}
            className="w-full resize-none rounded-lg border-outline-variant bg-background p-component font-body-md text-body-md focus-visible:ring-1 focus-visible:ring-primary"
          />
          <Button className="absolute right-3 bottom-3 bg-primary font-ui-label-md text-on-primary hover:opacity-90">
            {submitLabel}
          </Button>
        </div>
      </div>
      <div className="rounded-xl border border-outline-variant bg-surface-container-highest/50 p-section">
        <Button className="mb-component flex w-full items-center justify-center gap-micro bg-primary py-component font-ui-label-md text-on-primary">
          <MaterialIcon name="verified" />
          {mergeLabel}
        </Button>
        <Button
          variant="outline"
          className="w-full border-outline py-component font-ui-label-md text-on-surface hover:bg-surface-variant"
        >
          {requestChangesLabel}
        </Button>
      </div>
    </div>
  )
}
