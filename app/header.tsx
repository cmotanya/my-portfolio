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
    <header className="duration-400 flex h-[5.5rem] w-full items-center justify-between border-300 px-5 uppercase transition-colors md:border-b">
      <Link href="/" className="rounded bg-secondary p-2 font-medium">
        0712909475
      </Link>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
