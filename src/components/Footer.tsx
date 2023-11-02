import Link from "next/link";
import { Github, Linkedin, PlaneTakeoff, CalendarHeart } from "lucide-react";

export function Footer() {
  return (
    <footer className="block mt-12">
      <div className=" py-8 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex-col flex items-center">
          <div className="mb-8 mt-8 border border-b border-muted-foregound w-48"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid w-full max-w-[208px] gap-3">
            <Link
              href="https://github.com/AlexandrePDA/AlexandrePDA"
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
            🎉
          </p>
          <p className="text-muted-foreground max-[479px]:text-sm">
            © Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
