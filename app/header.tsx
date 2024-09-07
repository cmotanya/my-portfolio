"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DesktopHeader from "./header/desktop";
import MobileHeader from "./header/mobile";
import { motion } from "framer-motion";
import { IconDeviceMobile } from "@tabler/icons-react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="tel:+254712909475"
          rel="noopener"
          target="_blank"
          className="flex gap-2 rounded bg-secondary p-2 font-medium"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            className="relative"
            animate={
              isHovered
                ? { rotate: [0, 0, 0, 0] }
                : { rotate: [0, 15, -15, 10] }
            }
            transition={{
              repeat: isHovered ? 0 : Infinity,
              repeatType: "loop",
              duration: 0.5,
              ease: "easeInOut",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            <IconDeviceMobile />
          </motion.span>
          0712909475
        </Link>
      </motion.div>

      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
