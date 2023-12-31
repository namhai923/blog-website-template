const url = process.env.NEXT_PUBLIC_SITE_URL!

export const siteConfig = {
  name: "Ngủyên",
  url,
  description: "A blog website",
  links: {
    shadcn: "https://ui.shadcn.com/",
    sanity: "https://www.sanity.io/",
    hainguyen: "https://www.linkedin.com/in/akias/",
    social: [
      { value: "instagram", url: "https://www.instagram.com/cukhoinguyen99/" },
      {
        value: "youtube",
        url: "https://www.youtube.com/channel/UCc8nekVlF9l-X2e976hDYMQ",
      },
      {
        value: "facebook",
        url: "https://www.facebook.com/profile.php?id=100053966762286",
      },
      { value: "linkedin", url: "https://www.instagram.com/cukhoinguyen99/" },
      { value: "x", url: "https://www.instagram.com/cukhoinguyen99/" },
    ],
  },
}

export type SiteConfig = typeof siteConfig
