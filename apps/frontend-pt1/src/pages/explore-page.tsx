import { useNavigate } from "react-router-dom"
import {
  EternalArchivePitch,
  FeaturePillarGrid,
  MissionLandingHero,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { consumerViewModels } from "@/data/consumer-data"
import { routes } from "@/navigation/routes"

const missionPillars = [
  {
    icon: "history_edu",
    title: "Version-Controlled Literature",
    description:
      "Every edition tracked with scholarly lineage, forks, and reproducible builds.",
  },
  {
    icon: "auto_stories",
    title: "Cinematic Discovery",
    description:
      "Browse the archive through immersive shelves, curated collections, and edition detail.",
  },
  {
    icon: "all_inclusive",
    title: "Eternal Archive",
    description:
      "Permaweb anchoring via Arweave ensures manuscripts outlive platforms and servers.",
  },
]

const eternalArchiveFeatures = [
  {
    icon: "cloud_done",
    title: "200-Year Endowment",
    description:
      "Upfront storage funding on Arweave's permaweb keeps canonical commits available for generations.",
  },
  {
    icon: "verified",
    title: "Provenance Certificates",
    description:
      "Mécène patrons receive stewardship deeds linking commits to immutable transaction IDs.",
  },
  {
    icon: "history",
    title: "Eternal Gallery",
    description: "Public credit for patrons who anchor high-fidelity editions of the literary canon.",
  },
]

export function ExplorePage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const { foundation } = consumerViewModels(data)

  return (
    <main>
      <MissionLandingHero
        title="Gittenberg"
        description="A decentralized infrastructure for the curation, versioning, and permanent storage of humanity's written heritage — from first editions to scholarly revisions."
        primaryCtaLabel="Enter the Cinematic Library"
        secondaryCtaLabel="Eternal Gallery"
        sampleCommit={{
          hash: foundation?.commit ?? "master @ a3f9b2c",
          message: `Scholarly build: ${foundation?.title ?? "Foundation"}`,
          author: foundation?.author ?? "Isaac Asimov",
          timestamp: "2026-05-28",
        }}
        onPrimaryClick={() => navigate(routes.libraryCinematic)}
        onSecondaryClick={() => navigate(routes.eternalGallery)}
      />
      <EternalArchivePitch
        title="The Eternal Archive"
        description="Physical books decay. Servers fail. Gittenberg utilizes the Arweave protocol so every anchored manuscript persists across a decentralized network."
        features={eternalArchiveFeatures}
      />
      <FeaturePillarGrid pillars={missionPillars} />
    </main>
  )
}
