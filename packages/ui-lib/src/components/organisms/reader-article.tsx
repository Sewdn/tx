import { cn } from "@/lib/utils"

export type ReaderArticleProps = {
  chapterLabel: string
  title: string
  paragraphs: string[]
  dropCap?: string
  illustrationSrc?: string
  illustrationAlt?: string
  fontSize?: number
  className?: string
}

export function ReaderArticle({
  chapterLabel,
  title,
  paragraphs,
  dropCap = "C",
  illustrationSrc,
  illustrationAlt = "",
  fontSize = 18,
  className,
}: ReaderArticleProps) {
  return (
    <article
      className={cn("reader-transition mx-auto max-w-reading-width", className)}
      style={{ fontSize: `${fontSize}px` }}
    >
      <header className="mb-16 text-center">
        <p className="mb-4 font-ui-label-sm text-ui-label-sm tracking-widest text-on-surface-variant uppercase">
          {chapterLabel}
        </p>
        <h2 className="mb-8 font-headline-lg text-headline-lg text-primary md:text-[48px]">{title}</h2>
        <div className="mx-auto mb-12 h-px w-24 bg-outline-variant" />
      </header>
      <div className="space-y-8 text-justify font-body-lg text-body-lg leading-loose text-on-surface">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {index === 0 ? (
              <>
                <span className="float-left mt-1 mr-3 font-headline-lg text-[42px] leading-none text-primary">
                  {dropCap}
                </span>
                {paragraph.slice(1)}
              </>
            ) : (
              paragraph
            )}
          </p>
        ))}
        {illustrationSrc ? (
          <div className="my-16 flex justify-center">
            <img
              alt={illustrationAlt}
              src={illustrationSrc}
              className="max-w-full rounded-lg border border-outline-variant opacity-90 grayscale shadow-sm"
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}
