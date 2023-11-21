/* eslint-disable react/no-unescaped-entities */
"use client";

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

const Newsletter = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

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
        setIsDone(true);
        toast.success("🎉 Tu recevras les prochaines Newsletter !");
      } else {
        setLoading(false);
        setIsDone(false);
        toast.error("😢 Une erreur est survenue !");
      }
    } catch (error) {
      setLoading(false);
      setIsDone(false);
      toast.error("😢 Une erreur est survenue !");
    }
    setIsDone(false);
    setLoading(false);
  }

  return (
    <div className="bg-gradient-to-b from-primary to-purple-300 dark:to-purple-900 max-w-screen-md w-full my-12 flex gap-4 items-center flex-col rounded-md px-4 py-8 text-white ">
      <h2 className="text-2xl text-center text-bold">
        Inscris-toi à la Newsletter pour ne rien manquer 💌
      </h2>
      <h4 className="text-center">
        Chaque lundi, commence la semaine avec une veille de l'actu tech !
      </h4>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex items-center md:flex-row flex-col gap-2 text-slate-800 dark:text-white"
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
            <Button className="md:ml-2 dark:text-white text-primary bg-white dark:bg-[#040712]">
              Patience...
            </Button>
          ) : (
            <Button
              className="md:ml-2  hover:bg-white dark:text-white text-primary bg-white dark:bg-[#040712] active:bg-white"
              type="submit"
            >
              Je rejoins
            </Button>
          )}
        </form>
        <FormMessage>{form.formState.errors.email?.message}</FormMessage>
      </Form>
      {isDone && <p>À lundi ! 🥳</p>}
      <p className="text-xs text-center text-muted-foreground">
        🔒 Ton email sera uniquement utilisé pour t'envoyer la newsletter
      </p>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};
export default Newsletter;
