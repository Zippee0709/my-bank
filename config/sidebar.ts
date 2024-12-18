interface SidebarBodyListItem {
  title: string
  href?: string
  children: SidebarBodyListItem[]
}

const sidebar: SidebarBodyListItem[] = [
  {
    title: "Quickstart",
    href: "/quickstart",
    children: [],
  },
  {
    title: "Web",
    children: [
      {
        title: "Create an account",
        href: "/web/create-an-account",
        children: [],
      },
      {
        title: "Planification",
        href: "/web/planification",
        children: [],
      },
      {
        title: "Colis problématiques",
        href: "/web/colis-problematiques",
        children: [],
      },
    ],
  },
]

export type SiteConfig = typeof sidebarConfig

const sidebarConfig = {
  quickstart: {
    title: "Quickstart",
    href: "/quickstart",
  },
  web: [
    {
      title: "Create an account",
      href: "/web/create-an-account",
    },
    {
      title: "Planification",
      href: "/web/planification",
    },
    {
      title: "Colis problématiques",
      href: "/web/colis-problematiques",
    },
  ],
  app: [
    {
      title: "APP MOBILE",
      href: "/mobile",
    },
    {
      title: "APP WEB",
      href: "/web",
    },
    {
      title: "LARK",
      href: "/lark",
    },
  ],
  lark: [],
}
