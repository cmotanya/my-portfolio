"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "./utils/cn";
import DesktopHeader from "./header/desktop";
import MobileHeader from "./header/mobile";

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
        "duration-400 z-[1000] flex h-[5.5rem] w-full items-center justify-between border-black bg-800 px-5 uppercase transition-colors",
      )}
    >
      <Link href="/">Cornelius</Link>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
