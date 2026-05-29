import type { NavItem, SidebarNavItem } from "@/lib/types"

export {
  agentMetrics,
  chapter3DiffLines,
  footerLinks,
  mobyDickAgents,
  mobyDickCover,
  mobyDickFileRows,
  mobyDickMetadata,
  mobyDickSidebarFooter,
  revisionComments,
  seedMobyRepository,
  seedMobyRevision,
} from "@/fixtures/from-seed"

/** Storybook chrome — not part of persisted domain seed */
export const defaultNavItems: NavItem[] = [
  { id: "explore", label: "Explore", href: "#" },
  { id: "repositories", label: "Repositories", href: "/" },
  { id: "agents", label: "Agents", href: "#" },
  { id: "library", label: "Library", href: "#" },
]

/** Storybook chrome — consumer-facing v2 navigation */
export const consumerNavItems: NavItem[] = [
  { id: "explore", label: "Explore", href: "#" },
  { id: "collections", label: "My Collections", href: "#" },
  { id: "library", label: "Library", href: "#" },
  { id: "subscribe", label: "Subscribe", href: "#" },
]

/** Storybook chrome — curator / Lexicon navigation (v1 pattern) */
export const curatorNavItems: NavItem[] = [...defaultNavItems]

/** Storybook chrome — route labels for Moby Dick sidebar stories */
export const mobyDickSidebarNav: SidebarNavItem[] = [
  { id: "manuscript", label: "Manuscript", icon: "menu_book", href: "/", active: true },
  { id: "discussion", label: "Discussion", icon: "forum", href: "#" },
  { id: "revisions", label: "Revisions", icon: "difference", href: "/revision" },
  { id: "insights", label: "Insights", icon: "analytics", href: "#" },
  { id: "reader", label: "Reader", icon: "auto_stories", href: "#" },
]
