"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { IconCheck, IconPalette } from "@tabler/icons-react"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Skeleton } from "@/components/ui/skeleton"
import { themes } from "@/registry/themes"

export function ThemeCustomizer() {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <IconPalette className="mr-2 h-5 w-5" />
            Customize
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <Customizer />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
      <div className="hidden md:flex">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <IconPalette className="mr-2 h-5 w-5" />
              Customize
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950 mt-3"
          >
            <Customizer />
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

function Customizer() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme: mode } = useTheme()
  const [config, setConfig] = useConfig()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="grid grid-cols-3 gap-2">
      {themes.map((theme) => {
        const isActive = config.theme === theme.name

        return mounted ? (
          <Button
            variant={"outline"}
            size="sm"
            key={theme.name}
            onClick={() => {
              setConfig({
                ...config,
                theme: theme.name,
              })
            }}
            className={cn(
              "justify-start",
              isActive && "border-2 border-primary"
            )}
            style={
              {
                "--theme-primary": `hsl(${
                  theme?.activeColor[mode === "dark" ? "dark" : "light"]
                })`,
              } as React.CSSProperties
            }
          >
            <span
              className={cn(
                "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
              )}
            >
              {isActive && <IconCheck className="h-4 w-4 text-white" />}
            </span>
            {theme.label}
          </Button>
        ) : (
          <Skeleton className="h-8 w-full" key={theme.name} />
        )
      })}
    </div>
  )
}
