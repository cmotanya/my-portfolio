"use client";

import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about-me", "projects", "contact", "blog"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about-me", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
    { href: "#blog", text: "Blog" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/yourusername",
      ariaLabel: "GitHub",
      icon: (
        <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577v-2.17c-3.338.726-4.033-1.607-4.033-1.607-.546-1.389-1.333-1.76-1.333-1.76-1.09-.744.083-.729.083-.729 1.204.086 1.837 1.238 1.837 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.763-1.605-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.398 3.003-.402 1.02.004 2.047.136 3.006.402 2.29-1.552 3.297-1.23 3.297-1.23.654 1.652.243 2.873.119 3.176.77.84 1.235 1.91 1.235 3.22 0 4.609-2.805 5.625-5.475 5.92.43.372.824 1.103.824 2.222v3.293c0 .32.217.694.825.576C20.565 21.798 24 17.302 24 12c0-6.629-5.371-12-12-12z" />
      ),
    },
    {
      href: "https://linkedin.com/in/yourusername",
      ariaLabel: "LinkedIn",
      icon: (
        <path d="M20.452 20.452h-3.998V14.8c0-1.345-.027-3.08-1.877-3.08-1.878 0-2.166 1.467-2.166 2.979v5.753H8.413V9h3.84v1.561h.055c.534-1.012 1.835-2.078 3.778-2.078 4.041 0 4.789 2.66 4.789 6.12v6.849zM5.337 7.433c-1.285 0-2.33-1.045-2.33-2.332 0-1.286 1.045-2.332 2.33-2.332 1.287 0 2.332 1.046 2.332 2.332 0 1.287-1.046 2.332-2.332 2.332zM6.872 20.452H3.805V9h3.067v11.452zM22.225 0H1.771C.79 0 0 .792 0 1.77v20.457C0 23.209.79 24 1.771 24h20.453c.979 0 1.771-.791 1.771-1.771V1.771C23.996.792 23.204 0 22.225 0z" />
      ),
    },
    {
      href: "https://twitter.com/yourusername",
      ariaLabel: "Twitter",
      icon: (
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.607 1.794-1.569 2.163-2.724-.949.564-2.002.974-3.127 1.195-.896-.959-2.173-1.558-3.591-1.558-2.717 0-4.92 2.205-4.92 4.918 0 .385.045.76.127 1.122-4.087-.205-7.713-2.165-10.141-5.144-.424.729-.666 1.576-.666 2.476 0 1.709.87 3.217 2.191 4.099-.807-.026-1.566-.248-2.229-.616v.062c0 2.385 1.698 4.375 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.087.627 1.956 2.445 3.379 4.6 3.42-1.684 1.319-3.809 2.107-6.116 2.107-.398 0-.79-.023-1.176-.069 2.182 1.402 4.768 2.222 7.557 2.222 9.054 0 14.002-7.504 14.002-14.002 0-.213-.004-.426-.014-.637.961-.695 1.796-1.562 2.457-2.549z" />
      ),
    },
  ];

  return (
    <footer className="border-t border-gray-300 bg-gray-100 px-6 py-10 text-gray-700">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo or Name Section */}
          <div className="flex flex-col items-start">
            <h1 className="mb-2 text-3xl font-bold text-gray-900">
              <span className="text-blue-600">Your</span> Name
            </h1>
            <p className="text-sm font-medium">
              Full Stack Developer & Designer
            </p>
            <p className="mt-4 text-sm">
              Crafting digital experiences with passion and precision.
            </p>
            <button className="mt-4 rounded bg-blue-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700">
              Get in Touch
            </button>
          </div>

          {/* Links Section */}
          <nav className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-center md:space-x-6 md:space-y-0">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg transition-colors duration-200 hover:text-gray-900 ${
                  activeSection === link.href.slice(1)
                    ? "font-bold text-blue-600"
                    : ""
                }`}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Social Media Icons Section */}
          <div className="flex items-center justify-center space-x-4 md:justify-end">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="group relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 fill-current text-gray-700 transition-colors duration-200 group-hover:text-blue-600"
                  viewBox="0 0 24 24"
                >
                  {link.icon}
                </svg>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {link.ariaLabel}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center">
          <p>&copy; {currentYear} Your Name. All Rights Reserved.</p>
          <p className="mt-2 text-xs text-gray-500">
            Designed & Built with{" "}
            <span className="animate-pulse text-red-500">&hearts;</span> by Your
            Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
