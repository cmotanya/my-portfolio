"use client";

import { motion } from "framer-motion";
import React from "react";
import Education from "./components/about/education";
import Skills from "./components/about/skills";
import { Toaster } from "sonner";
import JobExperience from "./components/workExperience";
import WorkExperience from "./components/workExperience";

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

  return (
    <section id="about-me" className="md:pt-0">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="space-y-4"
      >
        <motion.div variants={textVariants} className="space-y-4">
          <h1>About Me</h1>
          <p className="text-base">
            Having a background in IT and love of learning new technologies, I
            realized that I can help people with their needs by writing code. My
            determination to learn and improve my skills initially started in
            2020 when I started learning Python. I later started learning
            JavaScript and TypeScript where I found my passion for front-end
            development.
          </p>
          <p className="text-base">
            Alongside being a front-end developer, I am also a freelance
            technician specializing in cctv, networking and security. Any leads
            you may have in any of these areas are welcome.
          </p>
        </motion.div>

        <motion.button
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-full rounded-md bg-primary px-4 py-2 uppercase text-white md:w-fit"
        >
          Hire Me
        </motion.button>
      </motion.div>

      {/* SKILLS */}
      <Skills />

      {/* EDUCATION */}
      <Education />

      {/* WORK */}
      <WorkExperience />

      <Toaster position="top-center" richColors duration={3000} />
    </section>
  );
};

export default About;
