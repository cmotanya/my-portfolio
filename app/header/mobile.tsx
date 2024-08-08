"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import nav from "./navigation";
import HamburgerMenu from "./hamburger";
import { cn } from "../utils/cn";
import {
  IconDeviceMobile,
  IconMail,
  IconMap,
  IconMapCheck,
} from "@tabler/icons-react";

const MobileHeader = () => {
  const [activeLink, setActiveLink] = useState(nav[0].href);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
    router.push(href);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navVariants = {
    closed: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
    open: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <>
      <div className="fixed right-5 top-3 z-[1002] block md:hidden">
        <HamburgerMenu onclick={toggleMenu} isOpen={isOpen} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[1000] bg-gray-800/50 backdrop-blur-md"
              onClick={toggleMenu}
            />
            <motion.nav
              ref={navRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              aria-label="Mobile Navigation"
              className="bg-background fixed inset-y-0 right-0 z-[1001] flex w-full max-w-sm flex-col overflow-hidden"
            >
              <div className="flex h-full flex-col justify-between overflow-y-auto pt-[6rem]">
                <motion.ul
                  className="w-full space-y-4 px-6"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }}
                >
                  {nav.map((item) => (
                    <motion.li key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                        className={cn(
                          "block rounded-md p-4 text-lg font-medium transition-colors",
                          activeLink === item.href
                            ? "bg-primary text-white"
                            : "bg-background text-foreground hover:bg-secondary",
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Contact Section */}
                <motion.div
                  variants={itemVariants}
                  className="rounded-t-lg bg-gray-100 p-6"
                >
                  <h3 className="mb-4 text-lg font-semibold">Contact Me</h3>
                  <ul className="space-y-3 lowercase">
                    <li className="flex items-center">
                      <IconMail className="mr-3 text-primary" />
                      <a
                        href="mailto:motanyac@gmail.com"
                        className="hover:underline"
                      >
                        motanyac@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center">
                      <IconDeviceMobile className="mr-3 text-primary" />
                      <a href="tel:+1234567890" className="hover:underline">
                        (+254) 712-909-475
                      </a>
                    </li>
                    <li className="flex items-center">
                      <IconMap className="mr-3 text-primary" />
                      <span>Mombasa, Kenya</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileHeader;
