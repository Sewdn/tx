import { cn } from "@/lib/utils"

export type OpenPagePreviewProps = {
  dropCap?: string
  paragraphs: string[]
  className?: string
}

export function OpenPagePreview({ dropCap = "T", paragraphs, className }: OpenPagePreviewProps) {
  return (
    <article
      className={cn(
        "max-w-reading-width rounded border border-outline-variant bg-surface-container-lowest p-section shadow-lg",
        className,
      )}
    >
      <div className="columns-1 gap-section font-body-lg text-body-lg leading-relaxed text-on-surface md:columns-2">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-component break-inside-avoid">
            {index === 0 ? (
              <>
                <span className="float-left mr-2 font-headline-lg text-5xl leading-none text-primary">
                  {dropCap}
                </span>
                {paragraph.slice(1)}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
    </article>
  )
}
