import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          This website is built by{" "}
          <a
            href={siteConfig.links.hainguyen}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Hai Nguyen
          </a>{" "}
          with love {"<3"}. Made with{" "}
          <a
            href={siteConfig.links.shadcn}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Shadcn UI
          </a>{" "}
          and{" "}
          <a
            href={siteConfig.links.sanity}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Sanity
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
