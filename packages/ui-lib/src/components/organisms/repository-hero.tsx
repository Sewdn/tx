import { Button } from "@tx/ui"
import { MaterialIcon } from "@/components/atoms/material-icon"
export type RepositoryHeroProps = {
  badge: string
  repoId: string
  title: string
  description: string
  forkLabel: string
  watchLabel: string
}

export function RepositoryHero({
  badge,
  repoId,
  title,
  description,
  forkLabel,
  watchLabel,
}: RepositoryHeroProps) {
  return (
    <section className="mb-region border-b border-outline-variant pb-section">
      <div className="flex flex-col justify-between gap-section md:flex-row md:items-end">
        <div>
          <div className="mb-micro flex items-center gap-component">
            <span className="rounded bg-secondary-fixed px-micro py-micro text-[10px] font-bold tracking-widest text-on-secondary-fixed uppercase">
              {badge}
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">{repoId}</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
        </div>
        <div className="flex gap-component">
          <Button variant="outline" className="gap-micro font-ui-label-md">
            <MaterialIcon name="fork_right" size={18} />
            {forkLabel}
          </Button>
          <Button className="gap-micro bg-primary font-ui-label-md text-on-primary">
            <MaterialIcon name="star" size={18} />
            {watchLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
