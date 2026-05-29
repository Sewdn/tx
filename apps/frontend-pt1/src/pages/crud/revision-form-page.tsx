import type { Revision } from "@tx/domain-shared"
import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
  useRepositoryRevisions,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { RevisionFormFields } from "@/forms/entity-form-fields"
import { revisionFormInitialValues, revisionFormToInput } from "@/forms/form-values"
import { validateRevisionForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function RevisionFormPage() {
  const repository = useRepository()
  const { revisionId } = useParams<{ revisionId?: string }>()
  const isEdit = Boolean(revisionId)
  const revisions = useRepositoryRevisions()
  const existing = revisionId ? revisions.find((item) => item.id === revisionId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Revision not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit revision" : "Create revision"}
      backHref={routes.repositoryHome(repository.slug)}
      submitLabel={isEdit ? "Save revision" : "Create revision"}
      defaultValues={revisionFormInitialValues(repository.id, existing)}
      validate={validateRevisionForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete revision "${existing.title}"?`)) return
              void mutate(async () => {
                await ports.revision.remove(existing.id)
                navigate(routes.repositoryHome(repository.slug))
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = revisionFormToInput(values)
        const saved = (isEdit && existing
          ? await mutate(() => ports.revision.update(existing.id, input))
          : await mutate(() => ports.revision.create(input))) as Revision
        navigate(routes.repositoryRevision(repository.slug, saved.id))
      }}
    >
      <RevisionFormFields />
    </EntityFormShell>
  )
}
