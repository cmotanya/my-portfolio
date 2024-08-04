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
    <div id="intro" className="">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <Image src="/launching.png" alt="image" width={500} height={500} />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          whileInView={"visible"}
          variants={containerVariants}
          className=""
        >
          <IntroCarousel />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
