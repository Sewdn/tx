import type { LiteraryBuild } from "@tx/domain-shared"
import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
  useRepositoryLiteraryBuilds,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { LiteraryBuildFormFields } from "@/forms/entity-form-fields"
import { literaryBuildFormInitialValues, literaryBuildFormToInput } from "@/forms/form-values"
import { validateLiteraryBuildForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function LiteraryBuildFormPage() {
  const repository = useRepository()
  const { buildId } = useParams<{ buildId?: string }>()
  const isEdit = Boolean(buildId)
  const builds = useRepositoryLiteraryBuilds()
  const existing = buildId ? builds.find((item) => item.id === buildId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-margin-desktop pt-24">
        <p className="text-destructive">Literary build not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit literary build" : "Create literary build"}
      backHref={routes.repositoryBuild(repository.slug, existing?.id)}
      submitLabel={isEdit ? "Save build" : "Create build"}
      defaultValues={literaryBuildFormInitialValues(repository.id, existing)}
      validate={validateLiteraryBuildForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete build "${existing.title || existing.version}"?`)) return
              void mutate(async () => {
                await ports.literaryBuild.remove(existing.id)
                navigate(routes.repositoryHome(repository.slug))
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = literaryBuildFormToInput(values)
        const saved = (isEdit && existing
          ? await mutate(() => ports.literaryBuild.update(existing.id, input))
          : await mutate(() => ports.literaryBuild.create(input))) as LiteraryBuild
        navigate(routes.repositoryBuild(repository.slug, saved.id))
      }}
    >
      <LiteraryBuildFormFields />
    </EntityFormShell>
  )
}
