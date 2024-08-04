"use client";

import { IconArrowRight, IconTemplate } from "@tabler/icons-react";
import { SlideTextButton } from "./components/button/slideTextButton";
import { SlideColorButton } from "./components/button/slideColorButton";
import { splitStringUsingRegex } from "./utils/splitStrings";
import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import { cn } from "./utils/cn";

const merienda = Merienda({ subsets: ["latin"] });

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
    <div id="intro" className="pt-[4rem] md:pt-28">
      <div className="bg-300 absolute inset-0 z-[-50] w-full"></div>
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="space-y-4"
      >
        <h3>Hi, I&apos;m Cornelius</h3>

        <h2
          className={cn(
            "pt-10 text-center text-3xl font-semibold uppercase",
            merienda.className,
          )}
        >
          <span>
            {words.map((word, index) => (
              <motion.span variants={charVariants} key={index}>
                {word.split("")}
              </motion.span>
            ))}
          </span>
        </h2>

        <motion.p variants={charVariants} className="text-balance text-center">
          I&apos;m a full-stack web developer passionate about creating
          intuitive, high-performance web applications. With expertise in modern
          frameworks and a keen eye for design, I turn complex problems into
          elegant solutions
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="mx-auto mt-12 flex w-[80%] flex-col justify-between gap-6 md:w-fit md:flex-row md:gap-[5rem]"
      >
        <SlideTextButton text="My Work" icon={<IconTemplate />} />
        <SlideColorButton text="Contact" icon={<IconArrowRight />} />
      </motion.div>
    </div>
  );
};

export default Intro;
