"use client";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: i * 0.05,
      },
    }),
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      id="intro"
      initial="hidden"
      animate="visible"
      whileInView={"visible"}
      variants={containerVariants}
      className="min-h-screen items-center justify-center space-y-6 pt-[1rem] md:pt-[3rem]"
    >
      <motion.div className="max-w-4xl space-y-6 text-center">
        <motion.p
          variants={itemVariants}
          className="text-xl uppercase tracking-widest"
        >
          hello, i&apos;m cornelius motanya
        </motion.p>
        <motion.p className="text-5xl font-bold uppercase leading-tight tracking-wide md:text-6xl">
          web developer <br></br> code poet <br></br> freelancer
        </motion.p>
        <motion.p variants={itemVariants} className="text-2xl">
          Passionate about creating exceptional experiences on the web.
        </motion.p>
      </motion.div>

      <div></div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col justify-center gap-8 md:flex-row"
      >
        <button className="rounded-md px-4 py-2 ring-2 ring-primary">
          {" "}
          <a href="#href" className="text-xl uppercase">
            get in touch
          </a>
        </button>
        <button className="rounded-md bg-primary px-4 py-2 text-lg uppercase text-white">
          <a href="/resume.pdf" download="resume.pdf">
            download resume
          </a>
        </button>
      </motion.div>

      {/* social icons. Hidden on small screens */}
      <motion.div
        variants={itemVariants}
        className="absolute left-10 top-1/4 hidden -translate-y-1/2 *:p-1 md:block"
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <IconBrandFacebook color="#1877F2" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <IconBrandLinkedin color="#0a66c2" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <IconMail color="#dc4e41" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
        >
          <IconBrandGithub color="#181717" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
