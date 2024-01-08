"use client"

import { BLOGS_INFO_QUERY, MAIN_PAGE_QUERY } from "@/sanity/lib/queries"
import { QueryResponseInitial, useQuery } from "@sanity/react-loader"
import { SanityDocument } from "next-sanity"

import Home from "./home"

export default function HomePreview({
  mainPageInitial,
  blogsInfoInitial,
}: {
  mainPageInitial: QueryResponseInitial<SanityDocument>
  blogsInfoInitial: QueryResponseInitial<SanityDocument[]>
}) {
  const { data: mainPage } = useQuery<SanityDocument | null>(
    MAIN_PAGE_QUERY,
    {},
    { initial: mainPageInitial }
  )
  const { data: blogsInfo } = useQuery<SanityDocument[] | null>(
    BLOGS_INFO_QUERY,
    {},
    { initial: blogsInfoInitial }
  )

  return mainPage !== null && blogsInfo !== null ? (
    <Home mainPage={mainPage} blogsInfo={blogsInfo} />
  ) : (
    <div className="bg-red-100">Data is not available</div>
  )
}
