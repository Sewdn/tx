import { RepositoryTag } from "@/components/atoms/repository-tag"
import { cn } from "@/lib/utils"
import type { RepositoryTagVariant } from "@/lib/types"

export type PageHeroTag = {
  variant: RepositoryTagVariant
  label: string
}

export type PageHeroProps = {
  tags: PageHeroTag[]
  title: string
  subtitle?: string
  className?: string
}

export function PageHero({ tags, title, subtitle, className }: PageHeroProps) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="mb-2 flex flex-wrap items-center gap-3">
        {tags.map((tag) => (
          <RepositoryTag key={tag.label} variant={tag.variant} label={tag.label} />
        ))}
      </div>
      <h1 className="mb-2 font-headline-lg text-headline-lg text-primary">{title}</h1>
      {subtitle ? (
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant italic">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
