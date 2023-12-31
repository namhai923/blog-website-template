"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { TypeAnimation } from "react-type-animation"
import { motion, useInView } from "framer-motion"
import {
  IconBrandYoutubeFilled,
  IconBrandX,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header"
import { Button } from "./ui/button"
import { siteConfig } from "@/config/site"
import heroImage from "@/public/hero-image.jpg"

export function HomeSection() {
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
          className="grid-cols-1 order-2 lg:order-1 place-self-center justify-self-center text-center lg:text-left"
        >
          <PageHeader>
            <h2 className="text-3xl font-bold text-muted-foreground">
              Hello, I am
            </h2>
            <PageHeaderHeading>
              <TypeAnimation
                sequence={[
                  "Nguyen Cu",
                  1000,
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </PageHeaderHeading>
            <PageHeaderDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptuous. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptuous.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, voluptuous.
            </PageHeaderDescription>
            <div className="inline-flex space-x-3 justify-center lg:justify-start">
              {siteConfig.links.social.map((socialLink) => (
                <Button
                  key={socialLink.value}
                  asChild
                  variant={"default"}
                  size={"icon"}
                  className="rounded-full"
                >
                  <Link
                    href={socialLink.url}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {socialLink.value === "instagram" ? (
                      <IconBrandInstagram className="h-[1.5rem] w-[1.3rem]" />
                    ) : socialLink.value === "youtube" ? (
                      <IconBrandYoutubeFilled className="h-[1.5rem] w-[1.3rem]" />
                    ) : socialLink.value === "facebook" ? (
                      <IconBrandFacebook className="h-[1.5rem] w-[1.3rem]" />
                    ) : socialLink.value === "linkedin" ? (
                      <IconBrandLinkedin className="h-[1.5rem] w-[1.3rem]" />
                    ) : socialLink.value === "x" ? (
                      <IconBrandX className="h-[1.5rem] w-[1.3rem]" />
                    ) : (
                      ""
                    )}
                  </Link>
                </Button>
              ))}
            </div>
          </PageHeader>
        </motion.div>
        <motion.div
          variants={variants}
          initial="initial"
          animate={isInView ? "animate" : "initital"}
          transition={{ duration: 0.5 }}
          className="grid-cols-1 relative aspect-video lg:aspect-[4/5] order-1 lg:order-2"
        >
          <Image
            priority
            className="rounded-2xl"
            src={heroImage}
            alt="hero image"
            fill
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
