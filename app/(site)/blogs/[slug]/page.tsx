import { SanityDocument, QueryParams } from "next-sanity"
import { draftMode } from "next/headers"

import { loadQuery } from "@/sanity/lib/store"
import { BLOGS_INFO_QUERY, BLOG_QUERY } from "@/sanity/lib/queries"
import BlogContent from "@/components/blog-content"
import BlogContentPreview from "@/components/blog-content-preview"
import { client } from "@/sanity/lib/client"

export async function generateStaticParams() {
  const blogsInfo = await client.fetch<SanityDocument[]>(BLOGS_INFO_QUERY)

  return blogsInfo.map((blogInfo) => ({
    slug: blogInfo.slug.current,
  }))
}

export default async function BlogContentPage({
  params,
}: {
  params: QueryParams
}) {
  const blogInitial = await loadQuery<SanityDocument>(BLOG_QUERY, params, {
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  })

  return draftMode().isEnabled ? (
    <BlogContentPreview
      blogInitial={blogInitial}
      params={params}
    ></BlogContentPreview>
  ) : (
    <BlogContent blog={blogInitial.data}></BlogContent>
  )
}
