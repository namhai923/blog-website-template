"use client"

import { BLOGS_INFO_QUERY } from "@/sanity/lib/queries"
import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Home from "./home"

export default function HomePreview({
  blogsInfoInitial,
}: {
  blogsInfoInitial: QueryResponseInitial<SanityDocument[]>
}) {
  const { data: blogsInfo } = useQuery<SanityDocument[] | null>(
    BLOGS_INFO_QUERY,
    {},
    { initial: blogsInfoInitial }
  )

  return blogsInfo ? (
    <Home blogsInfo={blogsInfo} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
