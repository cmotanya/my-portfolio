"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "./components/in-view";
import DownloadResume from "./components/about/downloadResume";
const Intro = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section className="relative h-full md:h-screen md:pt-0">
      <InView
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
            scale: 0.95,
            filter: "blur(4px)",
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        viewOptions={{ margin: "0px 0px -100px 0px" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-4 md:py-8"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              whileHover={{
                scale: 1.2,

                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="relative rounded-full shadow-lg ring-4 ring-accent ring-offset-4 ring-offset-white"
            >
              <Image
                src="/profile.jpg"
                alt="Cornelius Motanya"
                width={170}
                height={170}
                className="rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.div className="max-w-2xl space-y-4 text-center">
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-indigo-800 md:text-4xl"
            >
              Hello, I&apos;m Cornelius Motanya
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl">
              Passionate about creating exceptional digital experiences and
              safety through tech.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative mt-8 flex w-full flex-col justify-center gap-4 text-center md:flex-row"
          >
            <button className="w-full rounded-full bg-primary px-8 py-3 text-center uppercase font-medium text-white transition-colors hover:bg-indigo-700 md:w-fit">
              <a href="#contact">Get in Touch</a>
            </button>

            <DownloadResume />
          </motion.div>
        </motion.div>
      </InView>
    </section>
  );
};

export default Intro;
