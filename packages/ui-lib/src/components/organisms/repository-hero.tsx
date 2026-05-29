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
    <section className="mb-12 border-b border-outline-variant pb-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <span className="rounded bg-secondary-fixed px-2 py-0.5 text-[10px] font-bold tracking-widest text-on-secondary-fixed uppercase">
              {badge}
            </span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">{repoId}</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary">{title}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">{description}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 font-ui-label-md">
            <MaterialIcon name="fork_right" size={18} />
            {forkLabel}
          </Button>
          <Button className="gap-2 bg-primary font-ui-label-md text-on-primary">
            <MaterialIcon name="star" size={18} />
            {watchLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
