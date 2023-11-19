import Link from "next/link";
import { ModeToggle } from "@/components/Theme/toggleTheme";
import Logo from "../../public/assets/Logo.png";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="w-full sticky bg-background z-10 top-0 ">
      <div className=" max-w-screen-2xl  mx-auto p-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="logo" width={40} height={40} />
            <p className="text-xl text-muted-foreground font-semibold hover:text-primary transition">
              PDA Blog
            </p>
          </div>
        </Link>
        <div className="text-xl flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
