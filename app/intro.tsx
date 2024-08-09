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
    <section id="intro" className="min-h-screen pt-[1rem] md:pt-[4rem]">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="flex flex-col items-center justify-center space-y-6"
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
          <motion.p variants={itemVariants} className="text-balance text-2xl">
            Passionate about creating exceptional experiences on the web.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col justify-center gap-4 pt-4 md:flex-row md:gap-8 md:pt-6"
        >
          <button className="w-full rounded-md px-4 py-2 ring-2 ring-primary md:w-fit">
            {" "}
            <a href="#href" className="text-xl uppercase">
              get in touch
            </a>
          </button>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-lg uppercase text-white md:w-fit">
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
    </section>
  );
};

export default Intro;
