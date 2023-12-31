import Image from "next/image"
import Link from "next/link"

import { formatDate } from "@/lib/utils"
import { urlFor } from "@/sanity/sanity-utils"
import { IconUser } from "@tabler/icons-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { BlogInfo } from "@/types/Blog"

interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blogInfo: BlogInfo
}

export function BlogCard({ blogInfo }: BlogCardProps) {
  return (
    <Link className="" href={`/blogs/${blogInfo._id}`}>
      <Card className="group relative flex flex-col h-full">
        <CardHeader className="p-0">
          <div className="overflow-hidden relative h-60 w-full rounded-t-lg">
            <Image
              priority
              className="h-auto w-auto object-cover transition-all group-hover:scale-105 rounded-t-lg"
              src={urlFor(blogInfo.mainImage).url()}
              alt={blogInfo.title}
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col p-4">
          <div className="space-x-2">
            {blogInfo.categories.map((category: string) => (
              <Badge key={category} className="rounded-md">
                {category}
              </Badge>
            ))}
          </div>
          <h2 className="font-display line-clamp-4 text-2xl font-bold">
            {blogInfo.title}
          </h2>

          <p className="mt-2 flex-1 text-muted-foreground">
            {blogInfo.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-2">
            <p className="text-sm text-foreground">
              {formatDate(blogInfo._createdAt.toString())}
            </p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Avatar>
                    <AvatarImage src={urlFor(blogInfo.author.image).url()} />
                    <AvatarFallback>
                      <IconUser />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{`Written by ${blogInfo.author.name}`}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
