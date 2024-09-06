"use client";

import { motion } from "framer-motion";
import HeaderUI from "./header/headerUI";

const LoaderUI = () => {
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

  const shimmerEffect = {
    hidden: { backgroundPosition: "200% 0" },
    visible: {
      backgroundPosition: "-200% 0",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gray-50">
      {/* HeaderUI simulating the nav elements */}
      <HeaderUI />

      {/* Intro section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-4 md:py-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            variants={shimmerEffect}
            className="relative h-[170px] w-[170px] rounded-full bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%] shadow-lg"
          />
        </motion.div>

        <motion.div
          variants={shimmerEffect}
          initial="hidden"
          animate="visible"
          className="w-full max-w-2xl space-y-6 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto h-10 w-3/4 rounded-lg bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%]"
          />

          <motion.div
            variants={itemVariants}
            className="mx-auto h-6 w-full rounded-lg bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%]"
          />
          <motion.div
            variants={itemVariants}
            className="mx-auto h-6 w-5/6 rounded-lg bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%]"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex w-full flex-col justify-center gap-4 md:flex-row"
        >
          <motion.div
            className="h-12 w-full rounded-full bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%] md:w-40"
            initial="hidden"
            animate="visible"
            variants={shimmerEffect}
          />
          <motion.div
            className="h-12 w-full rounded-full bg-gradient-to-r from-300 via-400 to-300 bg-[length:400%_100%] md:w-40"
            initial="hidden"
            animate="visible"
            variants={shimmerEffect}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoaderUI;
