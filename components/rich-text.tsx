import { urlFor } from "@/sanity/lib/utils"
import Image from "next/image"
import Link from "next/link"
import slug from "slug"
import { Element } from "react-scroll"

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="overflow-hidden relative h-96 w-full rounded-lg my-3">
          <Image
            priority
            src={urlFor(value).url()}
            alt="Blog image"
            fill
            sizes="(min-width: 1000px) 30vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 ml-10 list-disc [&>li]:mt-2">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    h1: ({ children }: any) => {
      const headerString = children
        .map((child: any) => (child.props ? child.props.text : child))
        .join(" ")
      return (
        <Element name={`${slug(headerString)}`}>
          <h1 className="scroll-m-20 font-bold inline-block tracking-tighter md:tracking-tight text-4xl lg:text-5xl my-5">
            {children}
          </h1>
        </Element>
      )
    },
    h2: ({ children }: any) => {
      const headerString = children
        .map((child: any) => (child.props ? child.props.text : child))
        .join(" ")
      return (
        <Element name={`${slug(headerString)}`}>
          <h2 className="scroll-m-20 border-b-2 text-3xl font-bold tracking-tighter md:tracking-tight first:mt-0 my-5">
            {children}
          </h2>
        </Element>
      )
    },
    h3: ({ children }: any) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tighter md:tracking-tight my-5">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tighter md:tracking-tight my-5">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="mt-6 border-l-4 pl-6 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      if (value.href) {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined
        return (
          <Link
            href={value.href}
            target="_blank"
            rel={rel}
            className="underline transition-colors text-foreground/80 hover:text-foreground"
          >
            {children}
          </Link>
        )
      }
    },
  },
}
