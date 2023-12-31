"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { IconSun, IconMoon } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IconSun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <IconMoon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
