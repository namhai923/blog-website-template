import { SanityDocument } from "next-sanity"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { LatestBlogsSection } from "@/components/latest-blogs-section"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"

export default function Home({ blogsInfo }: { blogsInfo: SanityDocument[] }) {
  return (
    <main className="flex flex-col items-center px-4">
      <Toaster position="top-center" />
      <div className="container relative space-y-5">
        <HeroSection />
        <Separator />
        <AboutSection />
        <Separator />
        <ExperienceSection />
        <Separator />
        <LatestBlogsSection blogsInfo={blogsInfo} />
      </div>
    </main>
  )
}
