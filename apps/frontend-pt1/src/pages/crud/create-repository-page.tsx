import type { Repository } from "@tx/domain-shared"
import { useNavigate } from "react-router-dom"
import { useGittenbergMutation, useGittenbergPorts } from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { RepositoryFormFields } from "@/forms/entity-form-fields"
import { repositoryFormInitialValues, repositoryFormToInput } from "@/forms/form-values"
import { validateRepositoryForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function CreateRepositoryPage() {
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  return (
    <EntityFormShell
      title="Create repository"
      description="Start a new literary repository. Related manuscript files, revisions, and builds can be added from the repository home."
      backHref={routes.repositories}
      submitLabel="Create repository"
      defaultValues={repositoryFormInitialValues()}
      validate={validateRepositoryForm}
      onSubmit={async (values) => {
        const created = (await mutate(() =>
          ports.repository.create(repositoryFormToInput(values)),
        )) as Repository
        navigate(routes.repositoryHome(created.slug), { replace: true })
      }}
    >
      <RepositoryFormFields />
    </EntityFormShell>
  )
}
