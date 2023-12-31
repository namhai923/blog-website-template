"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0)

  const onScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100

    setProgress(scrolled)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <Progress value={progress} className="top-14 z-50 w-full sticky" />
}
