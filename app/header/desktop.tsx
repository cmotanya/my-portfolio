"use client";

import Link from "next/link";
import nav from "./navigation";
import { cn } from "../utils/cn";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const DesktopHeader = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setActiveItem(pathname);
  }, [pathname]);

  return (
    <nav className="bg-400 hidden overflow-hidden rounded-full text-lg md:flex">
      <ul className="group grid grid-flow-col items-center gap-4 p-1">
        {nav.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <li
              key={item.href}
              className="bg-700 grid rounded-full text-teal-300"
            >
              <Link
                href={item.href}
                className={cn(
                  "w-full px-4 py-2 text-xl",
                  isActive && "bg-400 text-teal-100",
                )}
                onClick={() => setActiveItem(item.href)}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default DesktopHeader;
