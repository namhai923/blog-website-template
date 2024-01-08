"use client"

import React from "react"

import { IconBriefcase, IconSchool, IconTimeline } from "@tabler/icons-react"

import { PageHeaderHeading } from "./page-header"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

export function ExperienceSection({
  experienceSection,
}: {
  experienceSection: any
}) {
  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40 text-center">
      <PageHeaderHeading className="pb-10">
        {experienceSection.experienceLabel}
      </PageHeaderHeading>
      {experienceSection.experienceFields && (
        <VerticalTimeline
          className="vertical-timeline vertical-timeline-custom-line"
          lineColor="hsl(var(--secondary))"
        >
          {experienceSection.experienceFields.map(
            (experience: any, index: number) => (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: "hsl(var(--popover))",
                    boxShadow: "none",
                    border: "1px solid hsl(var(--border))",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid hsl(var(--primary))",
                  }}
                  date={experience.experienceTimeLine}
                  icon={
                    experience.experienceType === "work" ? (
                      <IconBriefcase />
                    ) : experience.experienceType === "education" ? (
                      <IconSchool />
                    ) : (
                      <IconTimeline />
                    )
                  }
                  iconStyle={{
                    background: "hsl(var(--secondary))",
                    fontSize: "1.5rem",
                  }}
                >
                  <h3 className="font-semibold capitalize">
                    {experience.experienceTitle}
                  </h3>
                  <p className="font-normal !mt-0">
                    {experience.experienceLocation}
                  </p>
                  <p className="!mt-1 !font-normal text-muted-foreground">
                    {experience.experienceDescription}
                  </p>
                </VerticalTimelineElement>
              </React.Fragment>
            )
          )}
        </VerticalTimeline>
      )}
    </section>
  )
}
