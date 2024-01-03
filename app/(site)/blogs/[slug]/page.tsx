import { getBlog } from "@/sanity/sanity-utils"
import BlogContent from "@/components/blog-content"

type Props = {
  params: { slug: string }
}

export const revalidate = 10
export default async function BlogContentPage({ params }: Props) {
  const blog = await getBlog(params.slug)
  return <BlogContent blog={blog}></BlogContent>
}
