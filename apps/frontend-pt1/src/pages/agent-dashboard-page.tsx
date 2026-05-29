import { Link } from "react-router-dom"
import { Button } from "@tx/ui"
import {
  ActivityFeed,
  AgentDashboardTable,
  CurationProgressChart,
  MetricGrid,
} from "@tx/ui-lib"
import {
  useGittenbergData,
  useGittenbergMutation,
  useGittenbergPorts,
} from "@tx/gittenberg-data-react"
import {
  toActivityFeedItems,
  toAgentDashboardRows,
  toCurationBars,
  toMetricCards,
} from "@/data/mappers"
import { routes } from "@/navigation/routes"

export function AgentDashboardPage() {
  const { agents, activityEvents, metricSnapshots, ui } = useGittenbergData()
  const ports = useGittenbergPorts()
  const mutate = useGittenbergMutation()
  const agentMetrics = metricSnapshots.filter((metric) => metric.scope === "agents")

  return (
    <main className="mx-auto grid max-w-container-max grid-cols-12 gap-region px-boundary pt-shell pb-page">
      <div className="col-span-12 mb-section flex flex-wrap items-start justify-between gap-component">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Agent Orchestration</h1>
          <p className="max-w-2xl text-on-surface-variant">
            A real-time overview of automated curation, stylistic normalization, and OCR correction
            protocols across the Gittenberg digital stacks.
          </p>
        </div>
        <div className="flex flex-wrap gap-micro">
          <Button variant="outline" asChild>
            <Link to={routes.activityEventNew}>Log activity</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={routes.metricNew("agents")}>Add metric</Link>
          </Button>
        </div>
      </div>
      <div className="col-span-12">
        <MetricGrid metrics={toMetricCards(agentMetrics)} />
        <ul className="mt-component flex flex-wrap gap-micro">
          {agentMetrics.map((metric) => (
            <li key={metric.id}>
              <Button size="sm" variant="outline" asChild>
                <Link to={routes.metricEdit(metric.id)}>Edit {metric.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-12 space-y-gutter lg:col-span-8">
        <AgentDashboardTable agents={toAgentDashboardRows([...agents])} />
        <CurationProgressChart bars={toCurationBars(ui.curationBars)} />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <ActivityFeed items={toActivityFeedItems([...activityEvents])} />
        <ul className="mt-section space-y-2">
          {activityEvents.map((event) => (
            <li
              key={event.id}
              className="flex items-center justify-between gap-micro rounded border border-outline-variant px-component py-component text-sm"
            >
              <span className="truncate">{event.title}</span>
              <div className="flex shrink-0 gap-micro">
                <Button size="sm" variant="ghost" asChild>
                  <Link to={routes.activityEventEdit(event.id)}>Edit</Link>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-destructive"
                  onClick={() => {
                    if (!window.confirm(`Delete "${event.title}"?`)) return
                    void mutate(() => ports.activityEvent.remove(event.id))
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
