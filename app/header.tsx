"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import DesktopHeader from "./header/desktop";
import MobileHeader from "./header/mobile";
import { Lilita_One } from "next/font/google";

const greyQo = Lilita_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="duration-400 flex h-[5.5rem] w-full items-center justify-between border-gray-300 px-5 uppercase transition-colors md:border-b">
      <Link href="/" className={cn("font-extrabold", greyQo.className)}>
        Cornelius
      </Link>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
