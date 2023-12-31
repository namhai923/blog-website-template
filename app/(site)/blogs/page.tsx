import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { CommandMenu } from "@/components/command-menu"
import { BlogCard } from "@/components/blog-card"
import { getBlogsInfo, getCategories } from "@/sanity/sanity-utils"

export const revalidate = 10
export default async function BlogsPage() {
  const blogsInfo = await getBlogsInfo()
  const categories = await getCategories()

  return (
    <div className="container">
      <Tabs defaultValue="All" className="h-full ">
        <TabsContent value="All">
          <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
            <PageHeaderHeading>All blogs</PageHeaderHeading>
            <PageHeaderDescription>
              Hand-picked themes that you can copy and paste into your apps.
            </PageHeaderDescription>
          </PageHeader>
        </TabsContent>
        {categories.map((category) => (
          <TabsContent key={category.title} value={category.title}>
            <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
              <PageHeaderHeading>{category.title}</PageHeaderHeading>
              <PageHeaderDescription>
                {category.description}
              </PageHeaderDescription>
            </PageHeader>
          </TabsContent>
        ))}
        <div className="flex space-between items-center">
          <ScrollArea className="rounded-md">
            <TabsList>
              <TabsTrigger key="All" value="All">
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category.title} value={category.title}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal"></ScrollBar>
          </ScrollArea>

          <div className="ml-auto pl-4">
            <CommandMenu blogsInfo={blogsInfo} />
          </div>
        </div>
        <Separator className="my-4" />

        <TabsContent
          value="All"
          className="border-none p-0 outline-none flex-1"
        >
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3">
            {blogsInfo.map((blogInfo) => (
              <BlogCard key={blogInfo._id} blogInfo={blogInfo} />
            ))}
          </div>
        </TabsContent>
        {categories.map((category) => (
          <TabsContent
            key={category.title}
            value={category.title}
            className="border-none p-0 outline-none"
          >
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3">
              {blogsInfo
                .filter((blogInfo) =>
                  blogInfo.categories.includes(category.title)
                )
                .map((blogInfo) => (
                  <BlogCard key={blogInfo._id} blogInfo={blogInfo} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
