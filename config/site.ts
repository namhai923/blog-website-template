const url = process.env.NEXT_PUBLIC_SITE_URL!

export const siteConfig = {
  name: "Akias",
  url,
  description: "A blog website template",
  links: {
    shadcn: "https://ui.shadcn.com/",
    sanity: "https://www.sanity.io/",
    hainguyen: "https://www.linkedin.com/in/akias/",
  },
}

export type SiteConfig = typeof siteConfig
