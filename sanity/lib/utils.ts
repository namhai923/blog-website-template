import ImageUrlBuilder from "@sanity/image-url"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const urlFor = (source: any) => {
  return ImageUrlBuilder({ projectId, dataset }).image(source)
}
