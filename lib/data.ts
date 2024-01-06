import React from "react"

import { IconBriefcase } from "@tabler/icons-react"
import { IconBrandVisualStudio } from "@tabler/icons-react"
import { IconSchool } from "@tabler/icons-react"

export const imagePlaceholder = "https://loremflickr.com/320/240/cat" as const

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(IconSchool),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(IconBriefcase),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(IconBrandVisualStudio),
    date: "2021 - present",
  },
] as const
