"use client";

import { splitStringUsingRegex } from "@/app/utils/splitStrings";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

type ButtonProps = {
  text: string;
  icon: JSX.Element;
};

export const SlideTextButton = ({ text, icon }: ButtonProps) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const getTransformStyle = (isMouseEntered: boolean, index: number) => ({
    transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
    transition: `transform 0.3s ease ${index * 0.03}s`,
  });

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      className="border-500 hover:bg-primary group flex w-full items-center justify-center gap-8 rounded-full border-2 py-2 text-lg font-semibold uppercase tracking-wide transition-all hover:ring-0 md:w-[12rem]"
    >
      <Link
        href="#"
        className="flex h-full w-full items-center justify-center gap-4"
      >
        <span className="relative flex items-center overflow-hidden">
          {splitStringUsingRegex(text).map((char, index) => (
            <span key={index} className="relative inline-block overflow-hidden">
              <span
                style={getTransformStyle(isMouseEntered, index)}
                className="relative whitespace-pre group-hover:text-black"
              >
                {char}
              </span>
              <span
                style={getTransformStyle(isMouseEntered, index)}
                className="absolute left-0 top-full inline-block group-hover:text-black"
              >
                {char}
              </span>
            </span>
          ))}{" "}
        </span>
        <span className="bg-400 group-hover:text-100 flex h-8 w-8 items-center justify-center rounded-full">
          {icon}
        </span>
      </Link>
    </motion.button>
  );
};
