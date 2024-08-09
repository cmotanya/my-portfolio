"use client";

import {
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandPython,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const About = () => {
  const skillsRef = useRef<HTMLDivElement | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  useEffect(() => {
    const scrollContainer = skillsRef.current;

    if (scrollContainer) {
      const scrollContent = Array.from(scrollContainer.children);
      scrollContent.forEach((element) => {
        const duplicatedItem = element.cloneNode(true);
        scrollContainer.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section id="about-me" className="min-h-screen py-4">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="space-y-4"
      >
        <motion.div variants={textVariants} className="space-y-4">
          <h1>About Me</h1>
          <p className="text-justify text-lg">
            Having a background in IT and love of learning new technologies, I
            realized that I can help people with their needs by writing code. My
            determination to learn and improve my skills initially started in
            2020 when I started learning Python. I later started learning
            JavaScript and TypeScript where I found my passion for front-end
            development.
          </p>
          <p className="text-justify text-lg">
            Alongside being a front-end developer, I am also a freelance
            technician specializing in cctv, networking and security. Any leads
            you may have in any of these areas are welcome.
          </p>
        </motion.div>

        <motion.button
          variants={buttonVariants}
          className="rounded-md bg-primary px-4 py-2 text-white"
        >
          Hire Me
        </motion.button>
      </motion.div>

      <motion.div>
        <h2 className="pt-12 text-3xl font-semibold">Skills</h2>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div
            ref={skillsRef}
            className="animate-scroll mx-auto mt-4 flex w-full items-center justify-center gap-8 p-2 md:max-w-2xl"
          >
            <li className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 shadow-md">
              JavaScript <IconBrandJavascript />
            </li>
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              React <IconBrandReact />
            </li>{" "}
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              TypeScript <IconBrandTypescript />
            </li>
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              Next.js <IconBrandNextjs />
            </li>
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              Tailwind <IconBrandTailwind />
            </li>
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              {" "}
              Python <IconBrandPython />
            </li>
            <li className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 shadow-md">
              CSS <IconBrandCss3 />
            </li>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
