import { getBlog } from "@/sanity/sanity-utils"
import BlogContent from "@/components/blog-content"

type Props = {
  params: { _id: string }
}

export const revalidate = 10
export default async function BlogContentPage({ params }: Props) {
  const blog = await getBlog(params._id)
  return <BlogContent blog={blog}></BlogContent>
}
