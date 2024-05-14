import { SanityDocument } from "next-sanity"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProductSection } from "@/components/product-section"
import { Separator } from "@/components/ui/separator"

export default function Home({
  mainPage,
  blogsInfo,
}: {
  mainPage: SanityDocument
  blogsInfo: SanityDocument[]
}) {
  const heroSection = (({
    heroLabel,
    heroTitles,
    heroDescription,
    heroSocials,
    heroImage,
  }) => ({ heroLabel, heroTitles, heroDescription, heroSocials, heroImage }))(
    mainPage
  )

  const aboutSection = (({
    aboutLabel,
    aboutDescription,
    aboutAttributes,
    aboutImage,
  }) => ({ aboutLabel, aboutDescription, aboutAttributes, aboutImage }))(
    mainPage
  )

  const experienceSection = (({ experienceLabel, experienceFields }) => ({
    experienceLabel,
    experienceFields,
  }))(mainPage)

  const productSection = (({ productLabel }) => ({
    productLabel,
  }))(mainPage)

  return (
    <main className="flex flex-col items-center px-4">
      <div className="container relative space-y-5">
        <HeroSection heroSection={heroSection} />
        <Separator />
        <AboutSection aboutSection={aboutSection} />
        <Separator />
        <ExperienceSection experienceSection={experienceSection} />
        <Separator />
        <ProductSection productSection={productSection} blogsInfo={blogsInfo} />
      </div>
    </main>
  )
}
