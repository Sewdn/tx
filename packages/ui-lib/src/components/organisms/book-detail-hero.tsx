import { EditionVersionTag } from "@/components/atoms/edition-version-tag"
import { HeroActionButton } from "@/components/molecules/hero-action-button"
import { cn } from "@/lib/utils"

export type BookDetailHeroAction = {
  label: string
  variant: "primary" | "ghost"
  icon?: string
  onClick?: () => void
}

export type BookDetailHeroProps = {
  title: string
  author: string
  tagline: string
  editionTag: string
  coverSrc: string
  heroImageSrc: string
  actions: BookDetailHeroAction[]
  className?: string
}

export function BookDetailHero({
  title,
  author,
  tagline,
  editionTag,
  coverSrc,
  heroImageSrc,
  actions,
  className,
}: BookDetailHeroProps) {
  return (
    <section className={cn("relative min-h-[70vh] overflow-hidden bg-primary", className)}>
      <img alt="" src={heroImageSrc} className="absolute inset-0 size-full object-cover opacity-50" />
      <div className="cinematic-scrim absolute inset-0" />
      <div className="relative z-10 mx-auto flex max-w-container-max flex-col gap-region px-boundary py-region md:flex-row md:items-end">
        <img
          alt={`${title} cover`}
          src={coverSrc}
          className="mx-auto aspect-[2/3] w-48 shrink-0 rounded object-cover shadow-2xl md:mx-0 md:w-56"
        />
        <div className="flex-1 pb-section">
          <EditionVersionTag label={editionTag} className="mb-component" />
          <h1 className="mb-micro font-display-lg text-display-lg text-on-primary">{title}</h1>
          <p className="mb-micro font-headline-lg text-headline-lg text-on-primary-container italic">
            {author}
          </p>
          <p className="mb-section max-w-xl font-body-md text-body-md text-on-primary-container/80">
            {tagline}
          </p>
          <div className="flex flex-wrap gap-component">
            {actions.map((action) => (
              <HeroActionButton key={action.label} {...action} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
