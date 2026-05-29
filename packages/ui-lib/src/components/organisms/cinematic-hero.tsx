import { EditionVersionTag } from "@/components/atoms/edition-version-tag"
import { HeroActionButton } from "@/components/molecules/hero-action-button"
import { cn } from "@/lib/utils"

export type HeroCta = {
  label: string
  variant: "primary" | "ghost"
  icon?: string
  onClick?: () => void
}

export type CinematicHeroProps = {
  title: string
  subtitle: string
  tagline?: string
  editionTag?: string
  coverSrc: string
  backgroundSrc?: string
  primaryCta: HeroCta
  secondaryCta?: HeroCta
  className?: string
}

export function CinematicHero({
  title,
  subtitle,
  tagline,
  editionTag,
  coverSrc,
  backgroundSrc,
  primaryCta,
  secondaryCta,
  className,
}: CinematicHeroProps) {
  const bgSrc = backgroundSrc ?? coverSrc

  return (
    <section
      className={cn("relative flex h-[85vh] min-h-[600px] items-end overflow-hidden bg-primary", className)}
    >
      <img alt="" src={bgSrc} className="absolute inset-0 size-full object-cover opacity-40" />
      <div className="cinematic-scrim absolute inset-0" />
      <div className="relative z-10 mx-auto flex w-full max-w-container-max items-end gap-region px-boundary pb-region">
        <div className="hidden w-48 shrink-0 md:block">
          <img
            alt={`${title} cover`}
            src={coverSrc}
            className="aspect-[2/3] w-full rounded-lg object-cover shadow-2xl"
          />
        </div>
        <div className="flex-1 pb-section">
          {editionTag ? <EditionVersionTag label={editionTag} className="mb-component" /> : null}
          <h1 className="mb-micro font-display-lg text-display-lg text-on-primary">{title}</h1>
          <p className="mb-component font-headline-lg text-headline-lg text-on-primary-container italic">
            {subtitle}
          </p>
          {tagline ? (
            <p className="mb-section max-w-xl font-body-md text-body-md text-on-primary-container/80">
              {tagline}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-component">
            <HeroActionButton {...primaryCta} />
            {secondaryCta ? <HeroActionButton {...secondaryCta} /> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
