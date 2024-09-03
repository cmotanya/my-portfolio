"use client";

import Link from "next/link";
import nav from "../lib/navigation";
import { cn } from "../utils/cn";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const DesktopHeader = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <nav className="hidden w-full justify-center py-4 md:flex">
      <motion.ul
        className="group flex items-center gap-6 rounded bg-100 px-1 py-3 shadow-inner"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
      >
        {nav.map((item) => {
          const isActive = activeItem === item.href;
          return (
            <motion.li
              key={item.href}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-6 py-2 text-lg font-medium transition-colors duration-200 ease-in-out",
                  isActive ? "rounded bg-primary text-white" : "hover:text-800",
                )}
                onClick={() => setActiveItem(item.href)}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 z-[-1] rounded-full bg-primary"
                    layoutId="activeBackground"
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
};

export default DesktopHeader;
