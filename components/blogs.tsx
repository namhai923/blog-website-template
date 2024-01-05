import { SanityDocument } from "next-sanity"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { CommandMenu } from "@/components/command-menu"
import BlogsTab from "@/components/blogs-tab"

export default function Blogs({
  blogsInfo,
  categories,
}: {
  blogsInfo: SanityDocument[]
  categories: SanityDocument[]
}) {
  return (
    <div className="container">
      <Tabs defaultValue="All" className="h-full ">
        <TabsContent value="All">
          <PageHeader className="relative pb-4 md:pb-8 lg:pb-12">
            <PageHeaderHeading>All blogs</PageHeaderHeading>
            <PageHeaderDescription>
              All of your blogs will display here.
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
        <BlogsTab key="All" category="All" blogsInfo={blogsInfo}></BlogsTab>
        {categories.map((category) => (
          <BlogsTab
            key={category.title}
            category={category.title}
            blogsInfo={blogsInfo.filter((blogInfo) =>
              blogInfo.categories.includes(category.title)
            )}
          ></BlogsTab>
        ))}
      </Tabs>
    </div>
  )
}
