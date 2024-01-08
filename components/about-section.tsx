"use client"

import Image from "next/image"
import { useRef } from "react"

import { motion, useInView } from "framer-motion"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { imagePlaceholder } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/utils"

export function AboutSection({ aboutSection }: { aboutSection: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  }

  return (
    <section ref={ref} className="py-5">
      <div className="grid lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initital"}
          transition={{ duration: 0.5 }}
          className="grid-cols-1 order-2 place-self-center justify-self-center text-center lg:text-left w-full"
        >
          <PageHeader>
            <PageHeaderHeading>{aboutSection.aboutLabel}</PageHeaderHeading>
            <PageHeaderDescription>
              {aboutSection.aboutDescription}
            </PageHeaderDescription>
            <Accordion type="single" collapsible>
              {aboutSection.aboutAttributes?.map(
                (attribute: any, index: number) => (
                  <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                    <AccordionTrigger>
                      {attribute.atributeLabel}
                    </AccordionTrigger>
                    <AccordionContent>
                      {attribute.atributeDescription}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </PageHeader>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initital"}
          transition={{ duration: 0.5 }}
          className="grid-cols-1 relative aspect-video lg:aspect-[4/5] order-1"
        >
          <Image
            priority
            className="rounded-2xl"
            src={
              aboutSection.aboutImage
                ? urlFor(aboutSection.aboutImage).url()
                : imagePlaceholder
            }
            alt="about image"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
