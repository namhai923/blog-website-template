import { HomeSection } from "@/components/home-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { LatestBlogsSection } from "@/components/latest-blogs-section"
import { Separator } from "@/components/ui/separator"

import { getBlogsInfo } from "@/sanity/sanity-utils"

export const revalidate = 10
export default async function Home() {
  const blogsInfo = await getBlogsInfo()

  return (
    <main className="flex flex-col items-center px-4">
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
