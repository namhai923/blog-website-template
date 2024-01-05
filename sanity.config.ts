import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { presentationTool } from "sanity/presentation"
import { schemaTypes } from "./sanity/schemas"
import { siteConfig } from "./config/site"
import { locate } from "@/sanity/presentation/locate"
import { structure } from "./sanity/lib/structure"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!
const title = siteConfig.name

export default defineConfig({
  title,
  projectId,
  dataset,
  apiVersion,

  basePath: "/admin",

  plugins: [
    deskTool({ structure }),
    visionTool(),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
