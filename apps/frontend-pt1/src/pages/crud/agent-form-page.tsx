import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
  useRepository,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { AgentFormFields } from "@/forms/entity-form-fields"
import { agentFormInitialValues, agentFormToInput } from "@/forms/form-values"
import { validateAgentForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function AgentFormPage() {
  const repository = useRepository()
  const { agentId } = useParams<{ agentId?: string }>()
  const isEdit = Boolean(agentId)
  const { agents } = useGittenbergData()
  const existing = agentId ? agents.find((item) => item.id === agentId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Agent not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit agent" : "Create agent"}
      backHref={routes.repositoryHome(repository.slug)}
      submitLabel={isEdit ? "Save agent" : "Create agent"}
      defaultValues={agentFormInitialValues(repository.id, existing)}
      validate={validateAgentForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete agent "${existing.name}"?`)) return
              void mutate(async () => {
                await ports.agent.remove(existing.id)
                navigate(routes.repositoryHome(repository.slug))
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = agentFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.agent.update(existing.id, input))
        } else {
          await mutate(() => ports.agent.create(input))
        }
        navigate(routes.repositoryHome(repository.slug))
      }}
    >
      <AgentFormFields />
    </EntityFormShell>
  )
}
