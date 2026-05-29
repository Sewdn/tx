import { useNavigate, useParams } from "react-router-dom"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { ActivityEventFormFields } from "@/forms/entity-form-fields"
import { activityEventFormInitialValues, activityEventFormToInput } from "@/forms/form-values"
import { validateActivityEventForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function ActivityEventFormPage() {
  const { eventId } = useParams<{ eventId?: string }>()
  const isEdit = Boolean(eventId)
  const { activityEvents } = useGittenbergData()
  const existing = eventId ? activityEvents.find((item) => item.id === eventId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Activity event not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit activity event" : "Log activity event"}
      backHref={routes.agents}
      submitLabel={isEdit ? "Save event" : "Create event"}
      defaultValues={activityEventFormInitialValues(existing)}
      validate={validateActivityEventForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete event "${existing.title}"?`)) return
              void mutate(async () => {
                await ports.activityEvent.remove(existing.id)
                navigate(routes.agents)
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = activityEventFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.activityEvent.update(existing.id, input))
        } else {
          await mutate(() => ports.activityEvent.create(input))
        }
        navigate(routes.agents)
      }}
    >
      <ActivityEventFormFields />
    </EntityFormShell>
  )
}
