import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const SiteHeader = () => {
  return (
    <header className="flex justify-between items-center mx-4 my-10 px-6 rounded-full bg-neutral-900 h-16">
      <Link href="/" className="flex items-center">
        <Icons.Logo className="h-6 w-6 mr-2" />
        <h1 className="text-lg font-semibold">MyBank</h1>
      </Link>
      <Button variant="ghost" size="icon" className="bg-green-60">
        <Icons.Menu className="h-6 w-6" stroke="#000" />
      </Button>
    </header>
  )
}

export default SiteHeader
