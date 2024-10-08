"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "./components/in-view";
import DownloadResume from "./components/intro/downloadResume";
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
          className="container -z-40 mx-auto flex h-full flex-col items-center justify-center px-4 py-4 md:py-8"
        >
          <motion.div
            variants={itemVariants}
            className="-mt-[6rem] md:-mb-4 md:-mt-[6rem]"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="relative mx-auto"
            >
              <Image
                src="/profile.png"
                alt="Cornelius Motanya"
                width={500}
                height={500}
                className="size-[25rem] object-cover md:size-[40rem]"
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
            className="mt-8 flex w-full flex-col justify-center gap-4 text-center md:flex-row md:gap-8"
          >
            <motion.button
              whileHover={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full rounded bg-primary px-8 py-3 text-center font-medium uppercase text-white transition-colors hover:bg-indigo-600 md:w-fit md:font-normal"
            >
              <a href="#contact">Get in Touch</a>
            </motion.button>

            <DownloadResume />
          </motion.div>
        </motion.div>
      </InView>
    </section>
  );
};

export default Intro;
