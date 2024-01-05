import { groq } from "next-sanity"

export const BLOGS_INFO_QUERY = groq`*[_type == 'blog'] | order(_createdAt desc) {
  "slug": slug.current,
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

export const BLOG_QUERY = groq`*[_type == 'blog' && slug.current == $slug][0] {
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
}`

export const CATEGORIES_QUERY = groq`*[_type == 'category'] {
  title,
  description
}`
