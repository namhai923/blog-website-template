const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

import { createClient } from "@sanity/client/stega"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  // These settings will be overridden in
  // ./sanity/lib/store.ts when draftMode is enabled
  perspective: "published",
  stega: {
    enabled: false,
    studioUrl: "/admin",
  },
})
