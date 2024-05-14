"use client"

import { useState } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const publicKey = process.env.EMAILJS_PUBLIC_KEY!

const formSchema = z.object({
  userEmail: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ConnectSheet() {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userEmail: "",
      message: "",
    },
  })

  function onSubmit(formValues: z.infer<typeof formSchema>) {
    emailjs
      .send(serviceId, templateId, formValues, publicKey)
      .then(() => {
        toast.success("Message sent. Thank you!")
      })
      .catch((error) => {
        console.log("FAIL!", error)
      })

    setOpen(false)
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} onClose={form.reset}>
      <DrawerTrigger asChild>
        <Button
          variant="link"
          className="justify-start p-0 transition-colors text-foreground/60 hover:text-foreground/80"
        >
          Connect
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Connect with me</DrawerTitle>
            <DrawerDescription>
              Your personal information will be kept confidential
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 grid gap-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="userEmail"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-left">Email</FormLabel>
                      <FormControl className="col-span-3">
                        <div>
                          <Input
                            autoComplete="off"
                            placeholder="example@email.com"
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid grid-cols-4 items-center gap-4">
                      <FormLabel className="text-left">Your message</FormLabel>
                      <FormControl className="col-span-3">
                        <div>
                          <Textarea
                            autoComplete="off"
                            placeholder="Type your message here."
                            {...field}
                          />
                          <FormMessage />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <DrawerFooter className="px-0">
                  <Button type="submit">Send Message</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </Form>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
