import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { ManuscriptFileFormFields } from "@/forms/entity-form-fields"
import {
  manuscriptFileFormInitialValues,
  manuscriptFileFormToInput,
} from "@/forms/form-values"
import { validateManuscriptFileForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function ManuscriptFileFormPage() {
  const repository = useRepository()
  const { fileId } = useParams<{ fileId?: string }>()
  const isEdit = Boolean(fileId)
  const { manuscriptFiles } = useGittenbergData()
  const existing = fileId ? manuscriptFiles.find((file) => file.id === fileId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Manuscript file not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit manuscript file" : "Add manuscript file"}
      backHref={routes.repositoryHome(repository.slug)}
      submitLabel={isEdit ? "Save file" : "Create file"}
      defaultValues={manuscriptFileFormInitialValues(repository.id, existing)}
      validate={validateManuscriptFileForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete file "${existing.name}"?`)) return
              void mutate(async () => {
                await ports.manuscriptFile.remove(existing.id)
                navigate(routes.repositoryHome(repository.slug))
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = manuscriptFileFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.manuscriptFile.update(existing.id, input))
        } else {
          await mutate(() => ports.manuscriptFile.create(input))
        }
        navigate(routes.repositoryHome(repository.slug))
      }}
    >
      <ManuscriptFileFormFields />
    </EntityFormShell>
  )
}
