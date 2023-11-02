import Link from "next/link";
import { ModeToggle } from "@/components/Theme/toggleTheme";

export function NavBar() {
  return (
    <div className="w-full sticky bg-background top-0 ">
      <div className=" max-w-screen-2xl  mx-auto p-4 flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-4">
            <p>🎉</p>
            <p className="text-xl ">My Blog</p>
          </div>
        </Link>
        <div className="text-xl flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
