import { createClient, groq } from "next-sanity"
import ImageUrlBuilder from "@sanity/image-url"
import { BlogInfo, Blog } from "@/types/Blog"
import { Category } from "@/types/Category"
import clientConfig from "./config/client-config"

export const urlFor = (source: any) => {
  return ImageUrlBuilder(clientConfig).image(source)
}

export async function getBlogsInfo(): Promise<BlogInfo[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blog'] | order(_createdAt desc) {
      _id,
      "mainImage": mainImage,
      "categories": categories[]->title,
      title,
      description,
      _createdAt,
      "author": {
        "name":author->name,
        "image":author->image
      }
    }`
  )
}

export async function getBlog(_id: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'blog' && _id == $_id][0] {
      "info": {
        "mainImage": mainImage,
        "categories": categories[]->title,
        title,
        description,
        _createdAt,
        "author": {
          "name":author->name,
          "image":author->image
        }
      },
      content
    }`,
    { _id }
  )
}

export async function getCategories(): Promise<Category[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == 'category'] {
      title, 
      description
    }`
  )
}
