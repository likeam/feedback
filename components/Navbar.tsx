import { Sparkle } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return <nav className=" border bg-background ">
    <div className=" container mx-auto flex h-16 items-center justify-between p-4">
      <div className=" flex items-center gap-6">
      <Link href="/">
      <div className=" flex items-center gap-2">
        <div className="">
          <Sparkle className=" h-4 w-4 text-whites" />
        </div>
        </div>
        </Link>
      </div>
    </div>
    </nav>;
};

export default Navbar;
