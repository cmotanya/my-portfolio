"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "./components/in-view";
import Header from "./header";
import HeaderUI from "./header/headerUI";
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
    <section className="relative min-h-screen">
      <HeaderUI />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-4 md:py-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div className="relative rounded-full shadow-lg ring-4 ring-300 ring-offset-4 ring-offset-white">
            <Image
              src=""
              alt=""
              width={170}
              height={170}
              className="rounded-[9999px] bg-400"
            />
          </motion.div>
        </motion.div>

        <motion.div className="w-full space-y-2">
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="mx-auto mb-8 w-[60%] rounded bg-400 p-6"
          ></motion.h1>

          {/* text */}
          <motion.p
            variants={itemVariants}
            className="mx-auto w-full rounded bg-300 p-3 md:w-[50%]"
          ></motion.p>
          <motion.p
            variants={itemVariants}
            className="mx-auto w-full rounded bg-300 p-3 md:w-[50%]"
          ></motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col justify-center gap-4 md:flex-row"
        >
          <span className="w-full rounded-full bg-400 py-7 md:w-[20%]"></span>
          <span className="w-full rounded-full bg-400 py-7 md:w-[20%]"></span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
