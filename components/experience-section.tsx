"use client"

import React from "react"

import { PageHeaderHeading } from "./page-header"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section className="scroll-mt-28 mb-28 sm:mb-40 text-center">
      <PageHeaderHeading className="pb-10">My experience</PageHeaderHeading>
      <VerticalTimeline
        className="vertical-timeline vertical-timeline-custom-line"
        lineColor="hsl(var(--secondary))"
      >
        {experiencesData.map((item, index) => (
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
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "hsl(var(--secondary))",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-muted-foreground">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
