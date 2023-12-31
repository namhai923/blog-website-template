"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconBackground } from "@tabler/icons-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ConnectSheet } from "./connect-sheet"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <IconBackground className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/blogs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname.startsWith("/blogs")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blogs
        </Link>
        <ConnectSheet />
      </nav>
    </div>
  )
}
