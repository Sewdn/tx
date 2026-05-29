import type { Repository } from "@tx/domain-shared"
import { useNavigate } from "react-router-dom"
import {
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { RepositoryFormFields } from "@/forms/entity-form-fields"
import { repositoryFormInitialValues, repositoryFormToInput } from "@/forms/form-values"
import { validateRepositoryForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function EditRepositoryPage() {
  const repository = useRepository()
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  return (
    <EntityFormShell
      title="Edit repository"
      backHref={routes.repositoryHome(repository.slug)}
      submitLabel="Save changes"
      defaultValues={repositoryFormInitialValues(repository)}
      validate={validateRepositoryForm}
      resetWhenDefaultValuesChange
      onDelete={() => {
        if (!window.confirm(`Delete repository "${repository.title}"? Related entities may become orphaned.`)) {
          return
        }
        void mutate(async () => {
          await ports.repository.remove(repository.id)
          navigate(routes.repositories, { replace: true })
        })
      }}
      onSubmit={async (values) => {
        const updated = (await mutate(() =>
          ports.repository.update(repository.id, repositoryFormToInput(values)),
        )) as Repository
        navigate(
          updated.slug === repository.slug
            ? routes.repositoryHome(repository.slug)
            : routes.repositoryHome(updated.slug),
          { replace: true },
        )
      }}
    >
      <RepositoryFormFields />
    </EntityFormShell>
  )
}
