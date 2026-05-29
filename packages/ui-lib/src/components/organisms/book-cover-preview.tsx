import { cn } from "@/lib/utils"

export type BookCoverPreviewProps = {
  title: string
  author: string
  coverSrc: string
  className?: string
}

export function BookCoverPreview({ title, author, coverSrc, className }: BookCoverPreviewProps) {
  return (
    <div className={cn("relative flex items-end", className)}>
      <div className="relative w-64 shadow-2xl">
        <img alt={`${title} cover`} src={coverSrc} className="aspect-[2/3] w-full object-cover" />
        <div className="absolute top-0 -right-3 h-full w-3 bg-gradient-to-r from-black/30 to-black/10" />
      </div>
      <div className="ml-section hidden md:block">
        <h2 className="font-headline-lg text-headline-lg text-primary">{title}</h2>
        <p className="font-body-md italic text-on-surface-variant">{author}</p>
      </div>
    </div>
  )
}
