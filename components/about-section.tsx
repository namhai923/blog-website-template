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

import aboutImage from "@/public/about-image.jpg"

export function AboutSection() {
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
          className="grid-cols-1 order-2 place-self-center justify-self-center text-center lg:text-left"
        >
          <PageHeader>
            <PageHeaderHeading>About me</PageHeaderHeading>
            <PageHeaderDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptuous. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptuous.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptuous.
            </PageHeaderDescription>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
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
            src={aboutImage}
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
