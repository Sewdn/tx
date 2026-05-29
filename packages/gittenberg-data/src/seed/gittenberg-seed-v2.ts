import type {
  Author,
  CollectionItem,
  CreateAuthorInput,
  CreateCollectionItemInput,
  CreateCreativeStudioSessionInput,
  CreateCuratedCollectionInput,
  CreateDiscoveryShelfInput,
  CreateMembershipPlanInput,
  CreatePatronInput,
  CreatePermawebAnchorInput,
  CreatePrintOrderInput,
  CreatePrintProductInput,
  CreateProvenanceCertificateInput,
  CreateUserCollectionInput,
  CreateUserMembershipInput,
  CreativeStudioSession,
  CuratedCollection,
  DiscoveryShelf,
  MembershipPlan,
  Patron,
  PermawebAnchor,
  PrintOrder,
  PrintProduct,
  ProvenanceCertificate,
  UserCollection,
  UserMembership,
} from "@tx/domain-shared";
import {
  DEMO_USER_ID,
  FOUNDATION_REPOSITORY_ID,
  MOBY_REPOSITORY_ID,
} from "../ports.js";

const NOW = "2026-05-28T12:00:00.000Z";
const ANCHOR_DATE = "2024-10-14T00:00:00.000Z";

export const AUTHOR_MELVILLE_ID = "author-melville";
export const AUTHOR_ASIMOV_ID = "author-asimov";
export const PATRON_BEAUMONT_ID = "patron-beaumont";
export const PATRON_ARCHIVIST_ID = "patron-archivist";
export const ANCHOR_MOBY_ID = "anchor-moby";
export const CERT_MOBY_ID = "cert-moby";
export const PLAN_FREE_ID = "plan-free";
export const PLAN_PREMIER_ID = "plan-premier";
export const PLAN_MECENE_ID = "plan-mecene";
export const COLLECTION_CURRENT_ID = "collection-current-reads";
export const COLLECTION_ARCHIVE_ID = "collection-archive";
export const COLLECTION_WISHLIST_ID = "collection-wishlist";
export const COLLECTION_CUSTOM_ID = "collection-19th-verse";
export const CURATED_ASIMOV_ID = "curated-asimov";
export const AGENT_DURER_ID = "agent-durer";
export const AGENT_MORRIS_ID = "agent-morris";
export const STUDIO_MOBY_ID = "studio-moby";
export const PRINT_PRODUCT_MOBY_ID = "print-product-moby";
export const PRINT_ORDER_DEMO_ID = "print-order-demo";
export const BUILD_FOUNDATION_ID = "build-foundation-primary";
export const LIB_FOUNDATION_ID = "lib-foundation";
export const LIB_FOUNDATION_EMPIRE_ID = "lib-foundation-empire";
export const LIB_FOUNDATION_SECOND_ID = "lib-foundation-second";

const asimovPortrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxDFHX8-G_MaJAXXGq9S8E_EqwhNAawzIzialH7xwopS6eByvnrpRyVNgI5MKqs4nd1Q2aSOTcgdGHLRlD085fmAFHWd9NqgralZalPo7jxs7z1AgVQJfilgcK5ZqAc3Uz0Qt8F__xrf3vG81h6o08rNH8FVRe676kijCJx_2A_kLY2bewrIymf_66YOcLULU_TYFr3mzQIR6FyvNPla8PZYYhducyqeZ2QSJ1oq3mtMApDw_3TvJOcbO8R1Eko24e-TOLTsckzO1f";

const foundationCover =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBinX7S3M-OXFGiLfhbfaDT4S_Cmzqpm5sSfGVBCDlheh2pRc82HE81pDGpkQnzDrJCL3wxxEfQ0qjYXiHr5MyF9SzBZP0VEHllk8LiG9AWGygHGa8eE_8ce3gr-_1ewZ3uQJfzjcbTqj9sdGaHh4C1hWzYY-6_6kzfo0GClGX2Wa-qNmhgGUWvCC7Lp3i9OltEbXLZYbv5qn81xlSDGlRjDKE9qYDzGOi5D3H6FMsUnZudTxnvajL786qSsRLBMH0dOaHQak5r4ngI";

function author(input: CreateAuthorInput, id: string): Author {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function patron(input: CreatePatronInput, id: string): Patron {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function anchor(input: CreatePermawebAnchorInput, id: string): PermawebAnchor {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function certificate(input: CreateProvenanceCertificateInput, id: string): ProvenanceCertificate {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function plan(input: CreateMembershipPlanInput, id: string): MembershipPlan {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function membership(input: CreateUserMembershipInput, id: string): UserMembership {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function collection(input: CreateUserCollectionInput, id: string): UserCollection {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function item(input: CreateCollectionItemInput, id: string): CollectionItem {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function shelf(input: CreateDiscoveryShelfInput, id: string): DiscoveryShelf {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function curated(input: CreateCuratedCollectionInput, id: string): CuratedCollection {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function studio(input: CreateCreativeStudioSessionInput, id: string): CreativeStudioSession {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function printProduct(input: CreatePrintProductInput, id: string): PrintProduct {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

function printOrder(input: CreatePrintOrderInput, id: string): PrintOrder {
  return { id, createdAt: NOW, updatedAt: NOW, ...input };
}

export const seedAuthors: Author[] = [
  author(
    {
      slug: "herman-melville",
      name: "Herman Melville",
      birthYear: 1819,
      deathYear: 1891,
      portraitUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdz6Fs84GwlJoTpWJFL2UHiyZsBQmlBSAHJwNCt_3TqaG8VZTiRJwcG8b8BriSC4ExHYLWsJZhSevnmmLlhFhZUeA_rcYvletTnDWsTCjgmD3vvE1iDU-fcG6jKp4mW0L1EbzjMxoBuwf4XDaEMvlGWkphD5KH4PLhpPeuEmYD6Coe3eGmTPXkrXKiSJbBWcMQZwWoNL2v0lvEMHRlOFG2-kPZEDHF7cAnoVSvjGuOiIZiKIoWxF7Ak5czTLa0Ae2fuI3aqUcLIy0O",
      biography:
        "American novelist, short story writer, and poet of the American Renaissance period. Best known for Moby-Dick.",
    },
    AUTHOR_MELVILLE_ID,
  ),
  author(
    {
      slug: "isaac-asimov",
      name: "Isaac Asimov",
      birthYear: 1920,
      deathYear: 1992,
      portraitUrl: asimovPortrait,
      biography:
        'A polymath and one of the "Big Three" science fiction writers. His Three Laws of Robotics and Foundation series shaped the modern conceptual landscape of futurism.',
      collectionId: CURATED_ASIMOV_ID,
    },
    AUTHOR_ASIMOV_ID,
  ),
];

export const seedPatrons: Patron[] = [
  patron(
    {
      displayName: "Alexandre V. Beaumont",
      creditName: "Alexandre V. Beaumont",
    },
    PATRON_BEAUMONT_ID,
  ),
  patron(
    {
      displayName: "The Digital Archivist",
      creditName: "The Digital Archivist",
    },
    PATRON_ARCHIVIST_ID,
  ),
];

export const seedPermawebAnchors: PermawebAnchor[] = [
  anchor(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      literaryBuildId: "build-moby-primary",
      commitHash: "8f2c011e4b8593a2e3799c9c0c1b0d2f1707963",
      arweaveTxId: "z-H_7vK2mX-9wL7u8R_fPq2N1x0A9vM4bS6kL9",
      anchoredAt: ANCHOR_DATE,
      seriesNumber: 42,
      stewardshipLevel: "high-fidelity",
      patronId: PATRON_BEAUMONT_ID,
      certificateId: CERT_MOBY_ID,
    },
    ANCHOR_MOBY_ID,
  ),
];

export const seedProvenanceCertificates: ProvenanceCertificate[] = [
  certificate(
    {
      anchorId: ANCHOR_MOBY_ID,
      patronDisplayName: "The Digital Archivist",
      workTitle: "Moby Dick",
      workAuthor: "Herman Melville",
      workYear: "1851",
      commitHash: "8f2c011e4b8593a2e3799c9c0c1b0d2f1707963",
      arweaveTxId: "z-H_7vK2mX-9wL7u8R_fPq2N1x0A9vM4bS6kL9",
      issuedAt: ANCHOR_DATE,
      seriesLabel: "Eternal Edition № 0042",
      stewardshipDecree:
        "This contribution ensures the perpetual availability of this text on the permaweb, immutable and sovereign, for the edification of future generations.",
    },
    CERT_MOBY_ID,
  ),
];

export const seedMembershipPlans: MembershipPlan[] = [
  plan(
    {
      tier: "free",
      name: "Gittenberg Reader",
      monthlyPriceCents: 0,
      annualPriceCents: 0,
      features: [
        {
          icon: "menu_book",
          title: "Standard Downloads",
          description: "Access EPUB and web reader for the public catalog.",
        },
        {
          icon: "collections_bookmark",
          title: "Personal Collections",
          description: "Organize current reads, archive, and wishlist.",
        },
      ],
    },
    PLAN_FREE_ID,
  ),
  plan(
    {
      tier: "premier",
      name: "Gittenberg Premier",
      monthlyPriceCents: 2900,
      annualPriceCents: 27800,
      features: [
        {
          icon: "high_quality",
          title: "Lossless Exports",
          description: "Download archival PDF and press-ready assets.",
        },
        {
          icon: "local_shipping",
          title: "Print Discount",
          description: "15% off all print-on-demand binding tiers.",
        },
        {
          icon: "auto_awesome",
          title: "Early Studio Access",
          description: "Preview creative studio agents before general release.",
        },
      ],
    },
    PLAN_PREMIER_ID,
  ),
  plan(
    {
      tier: "mecene-patron",
      name: "Mécène Patron",
      monthlyPriceCents: undefined,
      annualPriceCents: undefined,
      features: [
        {
          icon: "all_inclusive",
          title: "Eternal Anchoring",
          description: "Fund permaweb storage endowment for canonical commits.",
        },
        {
          icon: "history_edu",
          title: "Certificate of Provenance",
          description: "Receive a stewardship deed for each anchored work.",
        },
        {
          icon: "verified",
          title: "Gallery Credit",
          description: "Public Mécène attribution on Eternal Gallery cards.",
        },
      ],
    },
    PLAN_MECENE_ID,
  ),
];

export const seedUserMemberships: UserMembership[] = [
  membership(
    {
      userId: DEMO_USER_ID,
      planId: PLAN_FREE_ID,
      billingPeriod: "monthly",
      activeUntil: "2027-05-28T12:00:00.000Z",
    },
    "membership-demo-user",
  ),
];

export const seedUserCollections: UserCollection[] = [
  collection(
    { userId: DEMO_USER_ID, name: "Current Reads", kind: "current-reads", sortOrder: 0 },
    COLLECTION_CURRENT_ID,
  ),
  collection(
    { userId: DEMO_USER_ID, name: "Archive", kind: "archive", sortOrder: 1 },
    COLLECTION_ARCHIVE_ID,
  ),
  collection(
    { userId: DEMO_USER_ID, name: "Wishlist", kind: "wishlist", sortOrder: 2 },
    COLLECTION_WISHLIST_ID,
  ),
  collection(
    {
      userId: DEMO_USER_ID,
      name: "19th Century Verse",
      kind: "custom-folder",
      sortOrder: 3,
    },
    COLLECTION_CUSTOM_ID,
  ),
];

export const seedCollectionItems: CollectionItem[] = [
  item(
    {
      collectionId: COLLECTION_CURRENT_ID,
      libraryEditionId: "lib-moby",
      literaryBuildId: "build-moby-primary",
      addedAt: NOW,
      progressPercent: 34,
    },
    "item-current-moby",
  ),
  item(
    {
      collectionId: COLLECTION_CURRENT_ID,
      libraryEditionId: LIB_FOUNDATION_ID,
      literaryBuildId: BUILD_FOUNDATION_ID,
      addedAt: NOW,
      progressPercent: 12,
    },
    "item-current-foundation",
  ),
  item(
    {
      collectionId: COLLECTION_ARCHIVE_ID,
      libraryEditionId: "lib-pride",
      addedAt: NOW,
      progressPercent: 100,
    },
    "item-archive-pride",
  ),
  item(
    {
      collectionId: COLLECTION_WISHLIST_ID,
      libraryEditionId: LIB_FOUNDATION_EMPIRE_ID,
      addedAt: NOW,
    },
    "item-wishlist-empire",
  ),
  item(
    {
      collectionId: COLLECTION_WISHLIST_ID,
      libraryEditionId: "lib-premier-locked",
      addedAt: NOW,
      requiredTier: "premier",
    },
    "item-wishlist-locked",
  ),
];

export const seedDiscoveryShelves: DiscoveryShelf[] = [
  shelf(
    {
      slug: "featured-hero",
      title: "Featured Edition",
      subtitle: "Scholarly Edition v4.2",
      shelfType: "featured-hero",
      editionIds: ["lib-moby"],
      layout: "bento-featured",
    },
    "shelf-featured-hero",
  ),
  shelf(
    {
      slug: "continue-reading",
      title: "Continue Reading",
      shelfType: "continue-reading",
      editionIds: ["lib-moby", LIB_FOUNDATION_ID],
      layout: "horizontal-portrait",
    },
    "shelf-continue-reading",
  ),
  shelf(
    {
      slug: "trending",
      title: "Trending in the Archive",
      shelfType: "trending",
      editionIds: [LIB_FOUNDATION_ID, "lib-moby", "lib-pride"],
      layout: "horizontal-landscape",
    },
    "shelf-trending",
  ),
  shelf(
    {
      slug: "1950s",
      title: "1950s Golden Age",
      shelfType: "decade",
      editionIds: [LIB_FOUNDATION_ID, LIB_FOUNDATION_EMPIRE_ID, LIB_FOUNDATION_SECOND_ID],
      layout: "horizontal-portrait",
    },
    "shelf-decade-1950s",
  ),
  shelf(
    {
      slug: "sci-fi-modernism",
      title: "Sci-Fi Modernism",
      shelfType: "thematic",
      editionIds: [LIB_FOUNDATION_ID, LIB_FOUNDATION_EMPIRE_ID],
      layout: "grid",
    },
    "shelf-thematic-scifi",
  ),
  shelf(
    {
      slug: "asimov-spotlight",
      title: "Author Spotlight",
      subtitle: "Isaac Asimov",
      shelfType: "author-spotlight",
      editionIds: [LIB_FOUNDATION_ID, LIB_FOUNDATION_EMPIRE_ID, LIB_FOUNDATION_SECOND_ID],
      layout: "horizontal-portrait",
    },
    "shelf-asimov-spotlight",
  ),
];

export const seedCuratedCollections: CuratedCollection[] = [
  curated(
    {
      slug: "asimov-galactic-archive",
      title: "The Isaac Asimov Collection",
      description:
        "The complete galactic saga — Foundation, Empire, and Robot series in scholarly Gittenberg editions.",
      heroImageUrl: asimovPortrait,
      authorName: "Isaac Asimov",
      editionIds: [LIB_FOUNDATION_ID, LIB_FOUNDATION_EMPIRE_ID, LIB_FOUNDATION_SECOND_ID],
      filterDefaults: {
        eras: ["1950s", "1960s"],
        themes: ["Galactic Empire", "Psychohistory", "Robotics"],
        formats: ["menu_book", "picture_as_pdf"],
      },
    },
    CURATED_ASIMOV_ID,
  ),
];

export const seedCreativeStudioSessions: CreativeStudioSession[] = [
  studio(
    {
      repositoryId: MOBY_REPOSITORY_ID,
      literaryBuildId: "build-moby-primary",
      activeAgentId: AGENT_DURER_ID,
      coverIntentPrompt:
        "A heavy sea, midnight, the eye of the whale — woodcut engraving in the style of Dürer.",
      coverAssetUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBf8zrtHjLlM8lZwjYVyBdGl1xGVgLag_ajuH9rLvR3PsFcQv4bCw5_trAXwD_gtJqH82nBv81to-go-ZM5fl6sTI0jSn3A0-8MrqWUfA79vf5CAiiIX4LmsfqJ8YjRGAEuIHRyWZfcCywYmI4F_s0LtfeldjOT001iFAwO_f0tg7z8TCPIXuasfjO0k34Uk0ZHVTCyIzM1-9e_rpT1D7wsiBbfAoWBLrWw7bz4qngcxlHzCO3kahgUwHLcb4u91KNItSs5VkKpj1OD",
      illustrationStyle: "silverpoint",
      layoutPresetId: "classic",
      status: "ready-for-build",
    },
    STUDIO_MOBY_ID,
  ),
];

export const seedPrintProducts: PrintProduct[] = [
  printProduct(
    {
      literaryBuildId: "build-moby-primary",
      slug: "moby-dick-archival",
      seriesLabel: "Archival Series",
      stockStatus: "in-stock",
      bindingOptions: [
        {
          id: "binding-softcover",
          label: "Softcover with Dust Jacket",
          description: "300gsm matte cardstock, satin finish.",
          priceCents: 3400,
          isDefault: true,
        },
        {
          id: "binding-hardcover",
          label: "Hardcover (Casewrap)",
          description: "Durable buckram cloth, silver foil stamping.",
          priceCents: 5800,
        },
        {
          id: "binding-linen",
          label: "Linen Library Edition",
          description: "Archival linen wrap, debossed spine titling.",
          priceCents: 7200,
        },
      ],
    },
    PRINT_PRODUCT_MOBY_ID,
  ),
];

export const seedPrintOrders: PrintOrder[] = [
  printOrder(
    {
      userId: DEMO_USER_ID,
      literaryBuildId: "build-moby-primary",
      studioSessionId: STUDIO_MOBY_ID,
      bindingOptionId: "binding-hardcover",
      coverMode: "agent-generated",
      coverAssetUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Lxob_cg6IJhCBW5Lsmo3PzkMXBNr2MMf-NNn65V6gvDqsv3a22lcL0bfHsFWoIZ6EWd4v2xzqVHn7MrDnYJ6aX0B6hFGwN28xog7--LLz3tOK16i3XfD5laIm66Tri5Q-_5M8lVVYfXoJJbIEx0Jj2kMbM9JKOUkJPcecgInxbrvQWdQ8zt0sAExssLpMWjKM-FwKCEejFByVhzAdI3vzXtWbMf7cRMC0JRKAzv4AYGZsuKYeKiz3Tz-CkYzFphp5NnTs0ciT03L",
      interiorStyle: "silverpoint",
      typographyPreset: "Classic Scholarly",
      shippingAddress: {
        name: "Demo Reader",
        line1: "42 Whale Street",
        line2: "Suite 3",
        city: "New Bedford",
        region: "MA",
        postalCode: "02740",
        countryCode: "US",
      },
      status: "customization",
      totalCents: 5800,
    },
    PRINT_ORDER_DEMO_ID,
  ),
];
