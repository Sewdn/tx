import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  chapter3DiffLines,
  defaultNavItems,
  footerLinks,
  mobyDickCover,
  mobyDickSidebarFooter,
  revisionComments,
} from "@/fixtures/gittenberg";
import { useSidebarNav } from "@/hooks/use-sidebar-nav";
import { useTypographyController } from "@/hooks/use-typography-controller";
import { DiffViewer } from "@/components/organisms/diff-viewer";
import { DiscussionPanel } from "@/components/organisms/discussion-panel";
import { GittenbergFooter } from "@/components/organisms/gittenberg-footer";
import { GittenbergTopAppBar } from "@/components/organisms/gittenberg-top-app-bar";
import { RepositorySidebar } from "@/components/organisms/repository-sidebar";
import { RevisionPageHeader } from "@/components/organisms/revision-page-header";
import { TypographyController } from "@/components/organisms/typography-controller";

const revisionNav = [
  { id: "manuscript", label: "Manuscript", icon: "menu_book", href: "/" },
  { id: "discussion", label: "Discussion", icon: "forum", href: "#" },
  {
    id: "revisions",
    label: "Revisions",
    icon: "difference",
    href: "/revision",
  },
  { id: "insights", label: "Insights", icon: "analytics", href: "#" },
  { id: "reader", label: "Reader", icon: "auto_stories", href: "#" },
];

function RevisionDetailPage() {
  const { navItems } = useSidebarNav(revisionNav, "revisions");
  const { activeFamily } = useTypographyController("serif");

  return (
    <div className="min-h-screen canvas-bg">
      <GittenbergTopAppBar
        brandName="Gittenberg"
        brandHref="/"
        navItems={defaultNavItems}
        activeNavId="repositories"
        searchPlaceholder="Search the archives..."
      />
      <RepositorySidebar
        title="Moby Dick"
        subtitle="Herman Melville"
        coverSrc={mobyDickCover}
        coverAlt="Moby Dick cover"
        navItems={navItems}
        footerItems={mobyDickSidebarFooter}
        primaryActionLabel="Create Revision"
      />
      <main className="min-h-screen lg:ml-64">
        <RevisionPageHeader
          breadcrumbs={[{ label: "Revisions" }, { label: "PR #142" }]}
          title="Normalize archaic punctuation in Chapter 3"
          status="open"
          author="ScholasticCurator"
          timestamp="4 hours ago"
        />
        <div className="mx-auto flex max-w-[1600px] flex-col gap-8 p-8 xl:flex-row">
          <DiffViewer
            fileName="chapter_03.md"
            viewMode="Unified"
            alternateViewMode="Split"
            lines={chapter3DiffLines}
            className="flex-1"
          />
          <DiscussionPanel
            comments={revisionComments}
            commentPlaceholder="Add a comment..."
            submitLabel="Comment"
            mergeLabel="Approve and Merge"
            requestChangesLabel="Request Changes"
          />
        </div>
        <GittenbergFooter
          links={footerLinks}
          copyright="© 1851-2024 Gittenberg Public Domain Initiative"
        />
      </main>
      <TypographyController
        serifLabel="Serif"
        sansLabel="Sans"
        activeFamily={activeFamily}
      />
    </div>
  );
}

const meta: Meta = {
  title: "Gittenberg/Pages/Revision Detail",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <RevisionDetailPage />,
};
