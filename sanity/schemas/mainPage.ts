import { defineField, defineType } from "sanity"

export default defineType({
  name: "mainPage",
  title: "Main Page",
  type: "document",
  groups: [
    {
      name: "heroSection",
      title: "Hero Section",
    },
    {
      name: "aboutSection",
      title: "About Section",
    },
    {
      name: "experienceSection",
      title: "Experience Section",
    },
    {
      name: "productSection",
      title: "Product Section",
    },
  ],
  fields: [
    defineField({
      name: "heroLabel",
      title: "Hero Label",
      type: "string",
      group: "heroSection",
    }),
    defineField({
      name: "heroTitles",
      title: "Hero Titles",
      type: "array",
      of: [{ type: "string" }],
      group: "heroSection",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
      group: "heroSection",
    }),
    defineField({
      name: "heroSocials",
      title: "Hero Socials",
      type: "array",
      of: [
        {
          name: "social",
          title: "Social",
          type: "object",
          fields: [
            {
              title: "URL / Link",
              name: "socialUrl",
              type: "url",
            },
            {
              title: "Type",
              name: "socialType",
              type: "string",
              options: {
                list: [
                  { title: "Youtube", value: "youtube" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Facebook", value: "facebook" },
                  { title: "X (Twitter)", value: "x" },
                  { title: "Instagram", value: "instagram" },
                ],
              },
            },
          ],
        },
      ],
      group: "heroSection",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "heroSection",
    }),

    defineField({
      name: "aboutLabel",
      title: "About Label",
      type: "string",
      group: "aboutSection",
    }),
    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      group: "aboutSection",
    }),
    defineField({
      name: "aboutAttributes",
      title: "About Attributes",
      type: "array",
      of: [
        {
          name: "attribute",
          title: "Attribute",
          type: "object",
          fields: [
            {
              title: "Atribute Label",
              name: "atributeLabel",
              type: "string",
            },
            {
              title: "Atribute Description",
              name: "atributeDescription",
              type: "text",
            },
          ],
        },
      ],
      group: "aboutSection",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "aboutSection",
    }),

    defineField({
      name: "experienceLabel",
      title: "Experience Label",
      type: "string",
      group: "experienceSection",
    }),
    defineField({
      name: "experienceFields",
      title: "Experience Fields",
      type: "array",
      of: [
        {
          name: "experience",
          title: "Experience",
          type: "object",
          fields: [
            {
              title: "Experience Title",
              name: "experienceTitle",
              type: "string",
            },
            {
              title: "Experience Location",
              name: "experienceLocation",
              type: "string",
            },
            {
              title: "Experience Description",
              name: "experienceDescription",
              type: "text",
            },
            {
              title: "Experience Timeline",
              name: "experienceTimeLine",
              type: "string",
            },
            {
              title: "Experience Type",
              name: "experienceType",
              type: "string",
              options: {
                list: [
                  { title: "Work", value: "work" },
                  { title: "Education", value: "education" },
                ],
              },
            },
          ],
        },
      ],
      group: "experienceSection",
    }),

    defineField({
      name: "productLabel",
      title: "Product Label",
      type: "string",
      group: "productSection",
    }),
  ],
})
