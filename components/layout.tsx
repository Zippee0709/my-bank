import React from "react"

import SiteHeader from "@/components/site-header"

interface LayoutProps {
  children: React.ReactNode
}

/* Note : You need use this layout only when you want implement sidebar */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen">
      <SiteHeader />
    </div>
  )
}

export { Layout }
