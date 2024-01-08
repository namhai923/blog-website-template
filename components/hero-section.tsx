"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

import { vercelStegaCleanAll } from "@sanity/client/stega"

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
import { imagePlaceholder } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/utils"

export function HeroSection({ heroSection }: { heroSection: any }) {
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
          className="grid-cols-1 order-2 lg:order-1 place-self-center justify-self-center text-center lg:text-left w-full"
        >
          <PageHeader>
            <h2 className="text-3xl font-bold text-muted-foreground">
              {heroSection.heroLabel}
            </h2>
            <PageHeaderHeading>
              <TypeAnimation
                sequence={
                  vercelStegaCleanAll(heroSection.heroTitles)
                    ? vercelStegaCleanAll(heroSection.heroTitles).reduce(
                        (sequence: any, title: string) =>
                          sequence.concat([title, 1000]),
                        []
                      )
                    : [1000]
                }
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </PageHeaderHeading>
            <PageHeaderDescription>
              {heroSection.heroDescription}
            </PageHeaderDescription>
            <div className="inline-flex space-x-3 justify-center lg:justify-start">
              {vercelStegaCleanAll(heroSection.heroSocials)?.map(
                (social: any, index: number) => (
                  <Button
                    key={index}
                    asChild
                    variant={"default"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <Link
                      href={social.socialUrl || "/"}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {social.socialType === "instagram" ? (
                        <IconBrandInstagram className="h-[1.5rem] w-[1.3rem]" />
                      ) : social.socialType === "youtube" ? (
                        <IconBrandYoutubeFilled className="h-[1.5rem] w-[1.3rem]" />
                      ) : social.socialType === "facebook" ? (
                        <IconBrandFacebook className="h-[1.5rem] w-[1.3rem]" />
                      ) : social.socialType === "linkedin" ? (
                        <IconBrandLinkedin className="h-[1.5rem] w-[1.3rem]" />
                      ) : social.socialType === "x" ? (
                        <IconBrandX className="h-[1.5rem] w-[1.3rem]" />
                      ) : (
                        ""
                      )}
                    </Link>
                  </Button>
                )
              )}
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
            src={
              heroSection.heroImage
                ? urlFor(heroSection.heroImage).url()
                : imagePlaceholder
            }
            alt="hero image"
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
