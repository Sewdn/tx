import { Link } from "react-router-dom"
import type { LiteraryBuild } from "@tx/domain-shared"
import { Button } from "@tx/ui"
import {
  BuildPreviewCard,
  BuildProgressPanel,
  FormatSelector,
  PresetSelector,
  StylingOptionsPanel,
  useFormatSelection,
  usePresetSelection,
} from "@tx/ui-lib"
import { useRepository } from "@tx/gittenberg-data-react"
import {
  toDesignPresets,
  toFormatOptions,
  toStylingSliders,
  toStylingToggles,
} from "@/data/mappers"
import { routes } from "@/navigation/routes"

type BuildExportPageProps = {
  build: LiteraryBuild
  allBuilds: ReadonlyArray<LiteraryBuild>
}

export function BuildExportPage({ build, allBuilds }: BuildExportPageProps) {
  const repository = useRepository()
  const { formatOptions } = useFormatSelection(toFormatOptions(build))
  const { presetOptions } = usePresetSelection(toDesignPresets(build))

  return (
    <main className="grid min-h-screen grid-cols-12 gap-gutter p-margin-desktop pt-24">
      <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 pb-2">
        {allBuilds.length > 1 ? (
          <label className="flex items-center gap-2 text-sm">
            <span className="text-on-surface-variant">Build</span>
            <select
              className="rounded-md border border-input bg-background px-2 py-1"
              value={build.id}
              onChange={(e) => {
                window.location.href = routes.repositoryBuild(repository.slug, e.target.value)
              }}
            >
              {allBuilds.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title || item.version}
                </option>
              ))}
            </select>
          </label>
        ) : (
          <span className="text-sm text-on-surface-variant">
            {build.version} · {build.statusLabel}
          </span>
        )}
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <Link to={routes.repositoryBuildEdit(repository.slug, build.id)}>Edit build</Link>
          </Button>
          <Button size="sm" asChild>
            <Link to={routes.repositoryBuildNew(repository.slug)}>New build</Link>
          </Button>
        </div>
      </div>
      <div className="col-span-12 max-h-[calc(100vh-120px)] space-y-gutter overflow-y-auto pr-4 custom-scrollbar lg:col-span-4">
        <FormatSelector options={formatOptions} />
        <PresetSelector presets={presetOptions} />
        <StylingOptionsPanel sliders={toStylingSliders(build)} toggles={toStylingToggles(build)} />
      </div>
      <div className="col-span-12 flex h-full flex-col gap-6 lg:col-span-8">
        <BuildPreviewCard
          author={repository.title}
          title={build.title || repository.heroTitle}
          subtitle={repository.subtitle}
          press="Gittenberg Press"
          edition={`Edition ${build.version}-release`}
          illustrationSrc={repository.coverUrl}
        />
        <BuildProgressPanel
          title="Generating Output"
          statusMessage={build.statusMessage}
          progressPercent={build.progressPercent}
          cancelLabel="Cancel Build"
          buildLabel="Build Now"
        />
      </div>
    </main>
  )
}
