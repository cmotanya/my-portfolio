"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { Toaster } from "sonner";
import { InView } from "./components/in-view";
import { cn } from "./utils/cn";

const Skills = React.lazy(() => import("./components/skills/skills"));
const WorkExperience = React.lazy(() => import("./components/workExperience"));

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
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

  const childVariants = {
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

  return (
    <section id="about-me" className="relative pt-8 md:pt-0">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            x: 100,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          whileInView={"visible"}
          variants={containerVariants}
          className="space-y-4"
        >
          <motion.div variants={childVariants} className="space-y-4">
            <h1 className={cn("text-6xl font-bold uppercase", neue.className)}>
              About Me
            </h1>
            <p>
              Having a background in IT and love of learning new technologies, I
              realized that I can help people with their needs by writing code.
              My determination to learn and improve my skills initially started
              in 2020 when I started learning Python. I later started learning
              JavaScript and TypeScript where I found my passion for front-end
              development.
            </p>
            <p>
              Alongside being a front-end developer, I am also a freelance
              technician specializing in cctv, networking and security. Any
              leads you may have in any of these areas are welcome.
            </p>
          </motion.div>

          <motion.button
            aria-label="Hire Me Button"
            variants={childVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full rounded bg-secondary px-8 py-3 font-semibold uppercase text-black md:w-fit"
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* SKILLS */}
        <Skills />

        {/* WORK */}
        <WorkExperience />

        <Toaster
          position="top-center"
          richColors
          toastOptions={{ duration: 5000 }}
        />
      </InView>
    </section>
  );
};

export default About;
