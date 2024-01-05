import { SanityDocument } from "next-sanity"

import { HomeSection } from "@/components/home-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { LatestBlogsSection } from "@/components/latest-blogs-section"
import { Separator } from "@/components/ui/separator"
import { Toaster } from "@/components/ui/sonner"

import { loadQuery } from "@/sanity/lib/store"
import { BLOGS_INFO_QUERY } from "@/sanity/lib/queries"

export default async function HomePage() {
  const { data: blogsInfo } = await loadQuery<SanityDocument[]>(
    BLOGS_INFO_QUERY
  )

  return (
    <main className="flex flex-col items-center px-4">
      <Toaster position="top-center" />
      <div className="container relative space-y-5">
        <HomeSection />
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
