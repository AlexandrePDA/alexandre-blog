/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { Github, Linkedin, PlaneTakeoff, CalendarHeart } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const formSchema = z.object({
  email: z.string().min(4, { message: "Le champ est vide 🚨" }),
});

export function Footer() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      setLoading(true);
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setLoading(false);
        form.reset();
        toast.success("🎉 Tu recevras les prochaines Newsletter !");
      } else {
        setLoading(false);
        toast.error("😢 Une erreur est survenue !");
      }
    } catch (error) {
      setLoading(false);
      toast.error("😢 Une erreur est survenue !");
    }
    setLoading(false);
  }

  return (
    <footer className="relative block mt-12">
      <div className=" py-8 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex-col flex items-center">
          <div className="mb-8 mt-8 border border-b border-muted-foregound w-48"></div>

          <div className="flex flex-col gap-2 mb-8 items-center border rounded-lg p-4 z-10 ">
            <p>
              Inscris-toi à la{" "}
              <span className="text-primary font-bold">Newsletter</span> 💌
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" flex items-center my-2 flex-col gap-2 text-slate-800 dark:text-white"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="hello@mail.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {loading ? (
                  <Button className="md:ml-2 text-white dark:text-primary dark:bg-white bg-[#040712]">
                    Patience...
                  </Button>
                ) : (
                  <Button
                    className="md:ml-2  text-white dark:text-primary dark:bg-white bg-[#040712] animate-pulse active:bg-white"
                    type="submit"
                  >
                    Je rejoins
                  </Button>
                )}
              </form>
              <FormMessage>{form.formState.errors.email?.message}</FormMessage>
            </Form>
            <p className="text-xs text-center  text-muted-foreground">
              🔒 Ton email sera uniquement utilisé pour t'envoyer la newsletter
            </p>
          </div>

          <div className="mb-4 grid-cols-4 grid-flow-col grid w-full max-w-[208px] gap-3">
            <Link
              href="https://github.com/AlexandrePDA/"
              className="mx-auto flex-col flex max-w-[24px] items-center justify-center "
            >
              <Github size={28} color="#6D2CD9" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alexandre-pires-de-almeida"
              className="mx-auto flex-col flex max-w-[24px] items-center justify-center "
            >
              <Linkedin size={28} color="#6D2CD9" />
            </Link>
            <Link
              href="https://calendly.com/apiresdealmeida"
              className="mx-auto flex-col flex max-w-[24px] items-center justify-center "
            >
              <CalendarHeart size={28} color="#6D2CD9" />
            </Link>
            <Link
              href="https://www.malt.fr/profile/alexandrepiresdealmeida"
              className="mx-auto flex-col flex max-w-[24px] items-center justify-center "
            >
              <PlaneTakeoff size={28} color="#6D2CD9" />
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Made by{" "}
            <Link
              href="https://www.linkedin.com/in/alexandre-pires-de-almeida"
              className="text-primary"
            >
              Alexandre
            </Link>{" "}
            🎉 !
          </p>
          <p className="text-muted-foreground max-[479px]:text-sm">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
      <div
        className="absolute inset-44 max-w-md mx-auto h-40 blur-[110px] "
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </footer>
  );
}
