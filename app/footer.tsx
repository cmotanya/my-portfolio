"use client";

import React from "react";
import { Socials } from "./lib/socials";
import nav from "./lib/navigation";
import { cn } from "./utils/cn";

const Footer = () => {
  const [activeLink, setActiveLink] = React.useState("");

  return (
    <footer className="border-t border-300">
      <div className="mx-auto max-w-5xl p-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* name here */}
          <div className="flex flex-col items-start space-y-2">
            <h1 className="mb-2">
              <span className="text-primary">Cornelius </span>Motanya
            </h1>
            <p className="text-sm font-medium">Front-end Developer</p>
            <p className="mt-4 text-sm">
              Crafting digital ideas with passion and precision
            </p>
            <button className="mt-4 rounded border-2 border-primary bg-primary px-4 py-2 text-sm font-medium text-white">
              Get in Touch
            </button>
          </div>

          {/*  Links here */}
          <nav className="flex flex-col gap-4 md:items-center">
            {nav.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className={cn(
                  "transition-colors duration-200 hover:text-secondary",
                  {
                    "font-semibold text-accent": activeLink === link.href,
                    "text-800": activeLink !== link.href,
                  },
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials here */}
          <div className="flex items-center justify-center gap-4 md:justify-end">
            {Socials.map((social, index) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                key={index}
                className="group relative"
              >
                {social.icon}
                <span className="absolute -top-full left-1/2 -translate-x-1/2 rounded bg-200 px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                  {social.ariaLabel}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* copyright here */}
      <div className="mx-auto max-w-2xl border-t border-300 p-4 text-center">
        <p className="text-base">
          &copy; {new Date().getFullYear()} Cornelius Motanya. All Rights
          Reserved.
        </p>
        <p className="text-xs text-500">
          Designed in Figma and fully built with Next.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
