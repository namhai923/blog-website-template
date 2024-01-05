import { SanityDocument } from "next-sanity"
import { draftMode } from "next/headers"

import { loadQuery } from "@/sanity/lib/store"
import { BLOGS_INFO_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries"
import Blogs from "@/components/blogs"
import BlogsPreview from "@/components/blogs-preview"

export default async function BlogsPage() {
  const blogsInfoInitial = await loadQuery<SanityDocument[]>(
    BLOGS_INFO_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )
  const categoriesInitial = await loadQuery<SanityDocument[]>(
    CATEGORIES_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  )

  return draftMode().isEnabled ? (
    <BlogsPreview
      blogsInfoInitial={blogsInfoInitial}
      categoriesInitial={categoriesInitial}
    />
  ) : (
    <Blogs
      blogsInfo={blogsInfoInitial.data}
      categories={categoriesInitial.data}
    />
  )
}
