"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import DesktopHeader from "./header/desktop";
import MobileHeader from "./header/mobile";
import { Lilita_One } from "next/font/google";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
      >
        <Link href="/" className="rounded bg-secondary p-2 font-medium">
          0712909475
        </Link>
      </motion.div>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
