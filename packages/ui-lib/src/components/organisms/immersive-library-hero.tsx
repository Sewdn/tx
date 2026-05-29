import { EditionVersionTag } from "@/components/atoms/edition-version-tag"
import { HeroActionButton } from "@/components/molecules/hero-action-button"
import { cn } from "@/lib/utils"
import type { HeroCta } from "./cinematic-hero"

export type ImmersiveLibraryHeroProps = {
  title: string
  subtitle: string
  tagline?: string
  editionTag?: string
  badgeLabel?: string
  coverSrc: string
  backgroundSrc?: string
  primaryCta: HeroCta
  secondaryCta?: HeroCta
  className?: string
}

export function ImmersiveLibraryHero({
  title,
  subtitle,
  tagline,
  editionTag,
  badgeLabel = "Curator's Choice",
  coverSrc,
  backgroundSrc,
  primaryCta,
  secondaryCta,
  className,
}: ImmersiveLibraryHeroProps) {
  const bgSrc = backgroundSrc ?? coverSrc

  return (
    <section
      className={cn(
        "relative flex min-h-[870px] items-end overflow-hidden bg-surface-container-low",
        className,
      )}
    >
      <img alt="" src={bgSrc} className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="relative z-10 mx-auto flex w-full max-w-container-max items-end gap-region px-boundary pb-region pt-32">
        <div className="w-56 shrink-0">
          <img
            alt={`${title} cover`}
            src={coverSrc}
            className="aspect-[2/3] w-full rounded object-cover paper-shadow"
          />
        </div>
        <div className="flex-1 pb-section">
          <span className="mb-component inline-block rounded bg-secondary px-component py-micro font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-on-secondary">
            {badgeLabel}
          </span>
          {editionTag ? <EditionVersionTag label={editionTag} className="mb-component ml-2" /> : null}
          <h1 className="mb-micro font-display-lg text-display-lg text-ink-primary">{title}</h1>
          <p className="mb-component font-headline-lg text-headline-lg text-on-surface-variant italic">
            {subtitle}
          </p>
          {tagline ? (
            <p className="mb-section max-w-xl font-body-md text-body-md text-on-surface-variant">
              {tagline}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-component">
            <HeroActionButton {...primaryCta} className={primaryCta.variant === "primary" ? "bg-primary text-on-primary hover:scale-105" : undefined} />
            {secondaryCta ? (
              <HeroActionButton
                {...secondaryCta}
                className={secondaryCta.variant === "ghost" ? "border border-outline-variant bg-background/80 text-primary backdrop-blur-md hover:bg-background" : undefined}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
