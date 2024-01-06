"use client"

import Link from "next/link"
import Image from "next/image"
import { SanityDocument } from "next-sanity"

import slug from "slug"
import { IconChevronLeft } from "@tabler/icons-react"
import { Link as ScrollLink } from "react-scroll"

import { PortableText } from "@portabletext/react"
import { RichText } from "@/components/rich-text"
import { buttonVariants } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

import { cn, formatDate } from "@/lib/utils"
import { urlFor } from "@/sanity/lib/utils"

import { PageHeaderHeading } from "./page-header"
import { ProgressBar } from "./progress-bar"
import { imagePlaceholder } from "@/lib/data"

export default function BlogContent({ blog }: { blog: SanityDocument }) {
  console.log(blog)
  return (
    <div className="relative">
      <ProgressBar></ProgressBar>
      <div className="container flex justify-center gap-10 pb-10 pt-6 md:flex-row">
        <article className="relative max-w-3xl py-6 w-full md:w-2/3 lg:w-1/2 lg:py-10">
          <Link
            href="/blogs"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-[-200px] top-14 hidden xl:inline-flex"
            )}
          >
            <IconChevronLeft className="mr-2 h-4 w-4" />
            See all blogs
          </Link>
          <div>
            <time
              dateTime={blog.info._createdAt.toString()}
              className="block text-sm text-muted-foreground"
            >
              Published on {formatDate(blog.info._createdAt.toString())}
            </time>
            <PageHeaderHeading>{blog.info.title}</PageHeaderHeading>
            <div className="mt-2 flex items-center space-x-2 text-sm">
              <Avatar>
                <AvatarImage
                  title={`Written by ${blog.info.author.name}`}
                  src={
                    blog.info.author.image
                      ? urlFor(blog.info.author.image).url()
                      : imagePlaceholder
                  }
                />
              </Avatar>
              <div className="flex-1 text-left leading-tight">
                <p className="font-medium">{blog.info.author.name}</p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden relative h-96 w-full rounded-lg my-3">
            <Image
              priority
              src={
                blog.info.mainImage
                  ? urlFor(blog.info.mainImage).url()
                  : imagePlaceholder
              }
              alt={blog.info.title}
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <PortableText value={blog.content} components={RichText} />
        </article>
        <div className="top-20 mt-16 w-44 self-start px-5 hidden md:sticky md:block">
          <h2 className="mb-4 text-xs font-bold uppercase text-foreground/70">
            Table of Contents
          </h2>
          <div className="grid gap-2 border-l-2">
            {blog.content &&
              blog.content
                .filter(
                  (block: any) => block.style == "h1" || block.style == "h2"
                )
                .map((block: any) => {
                  const headerString = block.children
                    .map((child: any) => child.text)
                    .join(" ")
                  return (
                    <ScrollLink
                      key={`${slug(headerString)}`}
                      to={`${slug(headerString)}`}
                      className="-ml-0.5 pl-2 text-xs leading-tight text-foreground/70 cursor-pointer hover:text-foreground hover:border-l-2 hover:border-foreground"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-56}
                    >
                      {headerString}
                    </ScrollLink>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  )
}
