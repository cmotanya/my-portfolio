"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import nav from "./navigation";
import HamburgerMenu from "./hamburger";
import { cn } from "../utils/cn";

const MobileHeader = () => {
  const [activeLink, setActiveLink] = useState<string | null>(nav[0].href);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (href: string, index: number) => {
    setActiveLink(href);
    setIsOpen(false);
    router.push(href);
  };

  const navVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    open: {
      x: 0,
      opacity: 1,
    },
    closed: {
      x: 20,
      opacity: 0,
    },
  };

  return (
    <div className="fixed right-5 top-3 z-[1000] block md:hidden">
      <HamburgerMenu onclick={toggleMenu} isOpen={isOpen} />

      {isOpen && (
        <div
          className="fixed inset-0 z-[999] bg-gray-800/50 backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>
      )}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={navRef}
            initial="closed"
            animate="open"
            exit="closed"
            variants={navVariants}
            aria-label="Mobile Navigation"
            className={cn(
              "bg-200 fixed inset-y-0 right-0 z-[1000] flex w-full flex-col overflow-hidden text-xl",
              isOpen ? "right-0" : "-right-full",
            )}
          >
            <div className="flex h-full flex-col overflow-y-auto">
              <div className="flex-grow pt-20">
                <motion.ul
                  className="w-full gap-3 px-4 py-4"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2,
                      },
                    },
                  }}
                >
                  {nav.map((item, index) => {
                    const isActive = activeLink === item.href;
                    return (
                      <motion.li
                        key={index}
                        variants={itemVariants}
                        className="my-2"
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleClick(item.href, index)}
                          className={cn(
                            "block w-full rounded-md p-4 transition-colors",
                            isActive
                              ? "bg-teal-600 text-50"
                              : "bg-800 text-50 hover:bg-700 hover:text-50",
                          )}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHeader;
