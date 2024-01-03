"use client"

import { useRef } from "react"

import { motion, useInView } from "framer-motion"

import { TabsContent } from "@/components/ui/tabs"
import { BlogCard } from "@/components/blog-card"

import type { BlogInfo } from "@/types/Blog"

interface BlogsTabProps extends React.HTMLAttributes<HTMLDivElement> {
  blogsInfo: BlogInfo[]
  category: string
}

export default function BlogsTab({ blogsInfo, category }: BlogsTabProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }
  return (
    <TabsContent
      ref={ref}
      value={category}
      className="border-none p-0 outline-none flex-1"
    >
      <ul className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3">
        {blogsInfo.map((blogInfo, index) => (
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
    </TabsContent>
  )
}
