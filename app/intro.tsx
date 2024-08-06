"use client";

import { splitStringUsingRegex } from "./utils/splitStrings";
import { motion } from "framer-motion";
import Image from "next/image";
import IntroCarousel from "./components/carousel";

const Intro = () => {
  const heading = "front-end developer";
  const words = splitStringUsingRegex(heading);

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

  const charVariants = {
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
      y: 50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <div id="intro" className="mt-[5rem] h-dvh">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="space-y-4 text-center"
      >
        <p className="uppercase">cornelius motanya</p>
        <p className="text-3xl uppercase">
          web developer | code poet | freelancer
        </p>
        <p>I am passionate about creating on the web.</p>
      </motion.div>
    </div>
  );
};

export default Intro;
