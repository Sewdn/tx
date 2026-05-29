import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { LibraryEditionFormFields } from "@/forms/entity-form-fields"
import { libraryEditionFormInitialValues, libraryEditionFormToInput } from "@/forms/form-values"
import { validateLibraryEditionForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function LibraryEditionFormPage() {
  const { editionId } = useParams<{ editionId?: string }>()
  const isEdit = Boolean(editionId)
  const { libraryEditions } = useGittenbergData()
  const existing = editionId ? libraryEditions.find((item) => item.id === editionId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Library edition not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit library edition" : "Add library edition"}
      backHref={routes.library}
      submitLabel={isEdit ? "Save edition" : "Create edition"}
      defaultValues={libraryEditionFormInitialValues(existing)}
      validate={validateLibraryEditionForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete edition "${existing.title}"?`)) return
              void mutate(async () => {
                await ports.libraryEdition.remove(existing.id)
                navigate(routes.library)
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = libraryEditionFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.libraryEdition.update(existing.id, input))
        } else {
          await mutate(() => ports.libraryEdition.create(input))
        }
        navigate(routes.library)
      }}
    >
      <LibraryEditionFormFields />
    </EntityFormShell>
  )
}
