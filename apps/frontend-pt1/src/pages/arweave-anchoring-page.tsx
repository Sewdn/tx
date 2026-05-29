import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  AnchorFundingPanel,
  AnchorScopeSelector,
  ArweaveAnchoringHeader,
  LexiconAppBar,
  LexiconSidebar,
} from "@tx/ui-lib"
import { MOBY_REPOSITORY_ID } from "@tx/gittenberg-data"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { routes } from "@/navigation/routes"

const lexiconNav = [
  { id: "explorer", label: "Explorer", icon: "folder_open", href: "#" },
  { id: "lineage", label: "Lineage", icon: "account_tree", href: "#" },
  { id: "build", label: "Build", icon: "output", href: "#", active: true },
]

const lexiconAppNav = [
  { id: "repo", label: "Repository", href: routes.repositories, active: true },
  { id: "archives", label: "Eternal Archive", href: routes.eternalGallery },
]

export function ArweaveAnchoringPage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const repository = data.repositories.find((entry) => entry.id === MOBY_REPOSITORY_ID)
  const mobyBuild = data.literaryBuilds.find((build) => build.repositoryId === MOBY_REPOSITORY_ID)
  const anchor = data.permawebAnchors[0]
  const [patronName, setPatronName] = useState(data.patrons[0]?.displayName ?? "")
  const [publicCredit, setPublicCredit] = useState(true)

  return (
    <div className="min-h-screen bg-background" data-density="operational">
      <LexiconSidebar
        title="Lexicon Archival"
        subtitle={repository?.subtitle ?? "Public Domain Project"}
        navItems={lexiconNav}
        primaryActionLabel="Commit Changes"
      />
      <div className="ml-0 lg:ml-64">
        <LexiconAppBar title="Eternal Archive" navItems={lexiconAppNav} />
        <main className="mx-auto max-w-container-max space-y-region p-boundary">
          <ArweaveAnchoringHeader
            title="Anchor to the Permaweb"
            description={`Permanently preserve "${mobyBuild?.title ?? repository?.title}" on Arweave with cryptographic provenance.`}
          />
          <AnchorScopeSelector
            commitHash={mobyBuild?.commitHash ?? anchor?.commitHash ?? "8f2c011e"}
            commitMessage={mobyBuild?.title ?? "Canonical build"}
            manifestSize="42.8 MB"
            fileCount={135}
            selected
          />
          <AnchorFundingPanel
            costs={[
              { label: "Storage (200 years)", amount: "$42.00" },
              { label: "Network Fee", amount: "$3.20" },
              { label: "Gittenberg Service", amount: "$4.80" },
            ]}
            totalLabel="$50.00"
            patronName={patronName}
            onPatronNameChange={setPatronName}
            publicCredit={publicCredit}
            onPublicCreditChange={setPublicCredit}
            onConfirm={() => {
              const certId = anchor?.certificateId ?? data.provenanceCertificates[0]?.id
              if (certId) navigate(routes.certificate(certId))
            }}
            onCancel={() => navigate(routes.subscribe)}
          />
        </main>
      </div>
    </div>
  )
}
