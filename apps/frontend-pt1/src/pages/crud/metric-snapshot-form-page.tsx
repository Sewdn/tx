import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
  useOptionalRepositorySlugParam,
} from "@tx/gittenberg-data-react"
import { EntityFormShell } from "@/crud/entity-form-shell"
import { MetricSnapshotFormFields } from "@/forms/entity-form-fields"
import { metricSnapshotFormInitialValues, metricSnapshotFormToInput } from "@/forms/form-values"
import { validateMetricSnapshotForm } from "@/forms/validation"
import { routes } from "@/navigation/routes"

export function MetricSnapshotFormPage() {
  const { metricId } = useParams<{ metricId?: string }>()
  const [searchParams] = useSearchParams()
  const repositorySlug = useOptionalRepositorySlugParam()
  const defaultScope = searchParams.get("scope") === "agents" ? "agents" : "repository"
  const fromSlug = searchParams.get("from")
  const isEdit = Boolean(metricId)
  const { metricSnapshots } = useGittenbergData()
  const existing = metricId ? metricSnapshots.find((item) => item.id === metricId) : undefined
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const navigate = useNavigate()

  const backHref = fromSlug
    ? routes.repositoryHome(fromSlug)
    : repositorySlug
      ? routes.repositoryHome(repositorySlug)
      : defaultScope === "agents"
        ? routes.agents
        : routes.repositories

  if (isEdit && !existing) {
    return (
      <main className="px-boundary pt-shell">
        <p className="text-destructive">Metric not found.</p>
      </main>
    )
  }

  return (
    <EntityFormShell
      title={isEdit ? "Edit metric" : "Add metric"}
      backHref={backHref}
      submitLabel={isEdit ? "Save metric" : "Create metric"}
      defaultValues={metricSnapshotFormInitialValues(existing?.scope ?? defaultScope, existing)}
      validate={validateMetricSnapshotForm}
      resetWhenDefaultValuesChange={isEdit}
      onDelete={
        isEdit && existing
          ? () => {
              if (!window.confirm(`Delete metric "${existing.label}"?`)) return
              void mutate(async () => {
                await ports.metricSnapshot.remove(existing.id)
                navigate(backHref)
              })
            }
          : undefined
      }
      onSubmit={async (values) => {
        const input = metricSnapshotFormToInput(values)
        if (isEdit && existing) {
          await mutate(() => ports.metricSnapshot.update(existing.id, input))
        } else {
          await mutate(() => ports.metricSnapshot.create(input))
        }
        navigate(backHref)
      }}
    >
      <MetricSnapshotFormFields />
    </EntityFormShell>
  )
}
