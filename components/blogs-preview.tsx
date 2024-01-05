"use client"

import { BLOGS_INFO_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries"
import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Blogs from "./blogs"

export default function BlogsPreview({
  blogsInfoInitial,
  categoriesInitial,
}: {
  blogsInfoInitial: QueryResponseInitial<SanityDocument[]>
  categoriesInitial: QueryResponseInitial<SanityDocument[]>
}) {
  const { data: blogsInfo } = useQuery<SanityDocument[] | null>(
    BLOGS_INFO_QUERY,
    {},
    { initial: blogsInfoInitial }
  )
  const { data: categories } = useQuery<SanityDocument[] | null>(
    CATEGORIES_QUERY,
    {},
    { initial: categoriesInitial }
  )

  return blogsInfo !== null && categories !== null ? (
    <Blogs blogsInfo={blogsInfo} categories={categories} />
  ) : (
    <div className="bg-red-100">No blogs found</div>
  )
}
