"use client"

import { useRef } from "react"
import { SanityDocument } from "next-sanity"

import { motion, useInView } from "framer-motion"

import { BlogCard } from "./blog-card"
import { PageHeaderHeading } from "./page-header"

type Props = {
  blogsInfo: SanityDocument[]
}

export function LatestBlogsSection({ blogsInfo }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section ref={ref} id="projects">
      <PageHeaderHeading className="text-center pb-10">
        Latest blogs
      </PageHeaderHeading>

      <ul className="grid md:grid-cols-3 gap-3 lg:gap-12">
        {blogsInfo.slice(0, 3).map((blogInfo, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <BlogCard key={blogInfo.slug} blogInfo={blogInfo} />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
