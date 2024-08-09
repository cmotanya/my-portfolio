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
import { skillItems } from "./lib/aboutSection";

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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 1) => ({
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: i * 0.5,
      },
    }),
  };

  useEffect(() => {
    const scrollContainer = skillsRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (scrollContainer && !prefersReducedMotion) {
      const itemContainer = Array.from(scrollContainer.children);

      itemContainer.forEach((item) => {
        item.setAttribute("data-attribute", "true");
      });
    }
  }, []);

  return (
    <section id="about-me" className="min-h-screen">
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full rounded-md bg-primary px-4 py-2 text-white md:w-fit"
        >
          Hire Me
        </motion.button>
      </motion.div>

      <motion.div>
        <h2 className="pt-4 text-3xl font-semibold md:pt-12">Skills</h2>
        <div ref={skillsRef} className="flex flex-wrap">
          {skillItems.map((skill, index) => (
            <motion.ul
              variants={skillVariants}
              key={index}
              className="mt-4 p-2 md:max-w-2xl"
            >
              <li className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 shadow-md">
                {skill.name} {skill.icon}
              </li>
            </motion.ul>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
