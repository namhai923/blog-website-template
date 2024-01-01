const url = process.env.NEXT_PUBLIC_SITE_URL!

export const siteConfig = {
  name: "Akias",
  url,
  description: "A blog website",
  links: {
    shadcn: "https://ui.shadcn.com/",
    sanity: "https://www.sanity.io/",
    hainguyen: "https://www.linkedin.com/in/akias/",
    social: [
      { value: "instagram", url },
      { value: "youtube", url },
      { value: "facebook", url },
      { value: "linkedin", url },
      { value: "x", url },
    ],
  },
}

export type SiteConfig = typeof siteConfig
