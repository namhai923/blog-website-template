import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import { loadQuery } from "@/sanity/lib/store"
import { BLOGS_INFO_QUERY, MAIN_PAGE_QUERY } from "@/sanity/lib/queries"
import Home from "@/components/home"
import HomePreview from "@/components/home-preview"

export default async function HomePage() {
  const mainPageInitial = await loadQuery<SanityDocument>(
    MAIN_PAGE_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )
  const blogsInfoInitial = await loadQuery<SanityDocument[]>(
    BLOGS_INFO_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return draftMode().isEnabled ? (
    <HomePreview
      mainPageInitial={mainPageInitial}
      blogsInfoInitial={blogsInfoInitial}
    />
  ) : (
    <Home mainPage={mainPageInitial.data} blogsInfo={blogsInfoInitial.data} />
  )
}
