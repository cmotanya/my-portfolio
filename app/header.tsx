"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import DesktopHeader from "./header/desktop";
import MobileHeader from "./header/mobile";
import { Caveat } from "next/font/google";

const greyQo = Caveat({ subsets: ["latin"], weight: "700" });

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
    <header
      className={cn(
        "duration-400 flex h-[5.5rem] w-full items-center justify-between px-5 uppercase transition-colors",
      )}
    >
      <Link href="/" className={cn("font-bold", greyQo.className)}>
        Cornelius
      </Link>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
