import { PortableTextBlock } from "sanity"
import type { Author } from "./Author"

export type Blog = {
  info: BlogInfo
  content: PortableTextBlock[]
}

export type BlogInfo = {
  _id: string
  mainImage: any
  categories: string[]
  title: string
  description: string
  _createdAt: Date
  author: Author
}
