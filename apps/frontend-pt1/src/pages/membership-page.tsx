import { useNavigate } from "react-router-dom"
import {
  EternalArchivePitch,
  MembershipTierGrid,
  PremierMembershipHero,
} from "@tx/ui-lib"
import { useGittenbergData } from "@tx/gittenberg-data-react"
import { consumerViewModels } from "@/data/consumer-data"
import { routes } from "@/navigation/routes"

const premierFeatures = [
  {
    icon: "high_quality",
    title: "Lossless Exports",
    description: "Download archival PDF and press-ready assets for research and print.",
  },
  {
    icon: "auto_awesome",
    title: "Creative Studio",
    description: "Agent-assisted cover art and interior styling before print-on-demand.",
  },
  {
    icon: "local_shipping",
    title: "Print Discount",
    description: "15% off all binding tiers through the Gittenberg Press.",
  },
]

const meceneFeatures = [
  {
    icon: "all_inclusive",
    title: "Eternal Anchoring",
    description: "Fund permaweb storage endowment for canonical commits on Arweave.",
  },
  {
    icon: "history_edu",
    title: "Certificate of Provenance",
    description: "Receive a stewardship deed for each work you anchor.",
  },
  {
    icon: "verified",
    title: "Gallery Credit",
    description: "Public Mécène attribution on Eternal Gallery cards.",
  },
]

export function MembershipPage() {
  const navigate = useNavigate()
  const data = useGittenbergData()
  const { membershipTiers, foundation } = consumerViewModels(data)
  const moby = data.libraryEditions.find((edition) => edition.id === "lib-moby")

  return (
    <main>
      <PremierMembershipHero
        title="Join the Inner Circle"
        subtitle="Support digitization, provenance, and the Eternal Archive — or unlock Premier tools for lossless exports and creative studio access."
        features={premierFeatures}
        heroImageSrc={moby?.heroImageUrl ?? moby?.coverUrl ?? foundation?.coverUrl ?? ""}
      />
      <MembershipTierGrid tiers={membershipTiers} />
      <EternalArchivePitch
        title="Become a Mécène Steward"
        description="Patrons who anchor works on the permaweb receive provenance certificates and permanent gallery credit. No NFTs — only enduring literary stewardship."
        features={meceneFeatures}
        className="mt-region"
      />
      <div className="mx-auto max-w-container-max px-boundary pb-page text-center">
        <button
          type="button"
          onClick={() => navigate(routes.archiveAnchor)}
          className="font-ui-label-md text-primary underline underline-offset-4"
        >
          Configure an Eternal Archive anchoring →
        </button>
      </div>
    </main>
  )
}
