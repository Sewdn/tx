import { useMemo, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import {
  AgentSummonPanel,
  Book3DPreview,
  OrderTotalBar,
  PrintCustomizationPanel,
  PrintOrderStepper,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { consumerViewModels, studioAgents } from "@/data/consumer-data"
import { buildIdParam, routes } from "@/navigation/routes"

type PrintOrderPageProps = {
  agentMode?: boolean
}

export function PrintOrderPage({ agentMode = false }: PrintOrderPageProps) {
  const navigate = useNavigate()
  const params = useParams<{ [buildIdParam]: string }>()
  const buildId = params[buildIdParam] ?? ""
  const data = useGittenbergData()
  const { bindingForProduct } = consumerViewModels(data)

  const build = data.literaryBuilds.find((entry) => entry.id === buildId)
  const edition = data.libraryEditions.find(
    (entry) => entry.primaryBuildId === buildId || entry.repositoryId === build?.repositoryId,
  )
  const product = data.printProducts.find((entry) => entry.literaryBuildId === buildId) ?? data.printProducts[0]
  const session = data.creativeStudioSessions.find((entry) => entry.literaryBuildId === buildId)
  const agents = useMemo(() => studioAgents(data.agents), [data.agents])

  const [step, setStep] = useState(1)
  const [bindingId, setBindingId] = useState(
    data.printOrders[0]?.bindingOptionId ?? "binding-hardcover",
  )
  const [coverMode, setCoverMode] = useState<"original" | "scholarly">("original")
  const [selectedAgentId, setSelectedAgentId] = useState(session?.activeAgentId ?? agents[0]?.id ?? "")
  const [intent, setIntent] = useState(session?.coverIntentPrompt ?? "")
  const [coverSrc, setCoverSrc] = useState(
    session?.coverAssetUrl ?? edition?.coverUrl ?? data.libraryEditions[0]?.coverUrl ?? "",
  )

  const bindingOptions = product ? bindingForProduct(product.id, bindingId) : []
  const selectedBinding = bindingOptions.find((option) => option.selected) ?? bindingOptions[0]
  const totalCents = selectedBinding?.priceCents ?? 5800

  if (!edition && !build) {
    return (
      <main className="mx-auto max-w-container-max px-boundary py-region">
        <p className="font-body-md text-on-surface-variant">Build not found.</p>
        <Link to={routes.libraryCinematic} className="mt-component text-primary underline">
          Back to library
        </Link>
      </main>
    )
  }

  const title = edition?.title ?? build?.title ?? "Edition"
  const demoOrder = data.printOrders.find((entry) => entry.literaryBuildId === buildId)
  const useAgent = agentMode || demoOrder?.coverMode === "agent-generated"

  return (
    <main className="mx-auto max-w-container-max px-boundary py-region">
      <PrintOrderStepper activeStep={step} />
      <div className="mt-region grid grid-cols-1 gap-region lg:grid-cols-2">
        <div className="space-y-section">
          <Book3DPreview title={title} coverSrc={coverSrc} />
          {!useAgent ? (
            <Link
              to={routes.printOrder(buildId, true)}
              className="font-ui-label-sm text-primary underline"
            >
              Switch to agent-assisted cover customization
            </Link>
          ) : (
            <Link to={routes.printOrder(buildId)} className="font-ui-label-sm text-primary underline">
              Use standard cover options
            </Link>
          )}
        </div>
        <div className="space-y-region">
          {step === 1 ? (
            <PrintCustomizationPanel
              coverPanel={
                useAgent ? (
                  <AgentSummonPanel
                    agents={agents.map((agent) => ({
                      ...agent,
                      selected: agent.id === selectedAgentId,
                    }))}
                    intent={intent}
                    onIntentChange={setIntent}
                    onAgentSelect={setSelectedAgentId}
                    onRegenerate={() => setCoverSrc(session?.coverAssetUrl ?? coverSrc)}
                  />
                ) : undefined
              }
              coverOptions={
                useAgent
                  ? undefined
                  : [
                      {
                        id: "original",
                        label: "Original Art",
                        description: "Canonical cover from the archival build.",
                        selected: coverMode === "original",
                      },
                      {
                        id: "scholarly",
                        label: "Scholarly Minimal",
                        description: "Typographic wrap with edition metadata.",
                        selected: coverMode === "scholarly",
                      },
                    ]
              }
              onCoverOptionSelect={(id) => setCoverMode(id as "original" | "scholarly")}
              bindingOptions={bindingOptions.map((option) => ({
                ...option,
                selected: option.id === bindingId,
              }))}
              onBindingSelect={setBindingId}
            />
          ) : (
            <div className="rounded border border-outline-variant bg-surface-container-low p-section">
              <p className="font-body-md text-on-surface-variant">
                {step === 2
                  ? "Shipping address (prototype): Demo Reader, 42 Whale Street, New Bedford MA"
                  : "Payment (prototype): Checkout is mocked for the literary ledger demo."}
              </p>
            </div>
          )}
          <OrderTotalBar
            totalLabel="Estimated Total"
            totalCents={totalCents}
            ctaLabel={step < 3 ? "Continue" : "Place Order"}
            onCtaClick={() => {
              if (step < 3) setStep(step + 1)
              else navigate(routes.myCollections)
            }}
          />
          {edition ? (
            <button
              type="button"
              onClick={() => navigate(routes.creativeStudio(edition.id))}
              className="font-ui-label-sm text-outline underline"
            >
              Open Creative Studio for more customization
            </button>
          ) : null}
        </div>
      </div>
    </main>
  )
}
