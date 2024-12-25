import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <section className="flex flex-col items-center gap-3 p-4">
      <div className="flex justify-center items-center gap-0.5 p-2 bg-gray-15 rounded-3xl">
        <Icons.Check className="w-5 h-5" />
        <p className="font-light text-xs text-center leading-6">
          No LLC Required, No Credit Check.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-center max-w-[358px]">
        <p className="font-semibold text-3xl">
          Welcome to YourBank
          <br />
          Empowering Your
          <br />
          <span className="text-green-60"> Financial Journey</span>
        </p>
        <p className="font-light text-sm">
          At YourBank, our mission is to provide comprehensive banking solutions
          that empower individuals and businesses to achieve their financial
          goals. We are committed to delivering personalized and innovative
          services that prioritize our customers' needs.
        </p>
      </div>
      <Button className="bg-green-60 rounded-full px-6 py-3 mt-7">
        Open Account
      </Button>
    </section>
  )
}
