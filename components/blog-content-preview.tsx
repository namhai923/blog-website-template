"use client"

import { BLOG_QUERY } from "@/sanity/lib/queries"
import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { QueryParams, SanityDocument } from "next-sanity"

import BlogContent from "@/components/blog-content"

export default function BlogContentPreview({
  blogInitial,
  params,
}: {
  blogInitial: QueryResponseInitial<SanityDocument>
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(BLOG_QUERY, params, {
    initial: blogInitial,
  })

  return data ? (
    <BlogContent blog={data} />
  ) : (
    <div className="bg-red-100">Blog not found</div>
  )
}
