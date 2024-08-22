"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Intro = () => {
  const [specialty, setSpecialty] = useState(0);
  const specialties = ["Web Development", "CCTV Systems", "Computer Services"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSpecialty((specialty + 1) % specialties.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [specialty]);

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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto flex h-full flex-col items-center justify-center px-4 py-8"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <Image
            src="/profile.jpg"
            alt="Cornelius Motanya"
            width={200}
            height={200}
            className="rounded-full shadow-lg ring-4 ring-accent ring-offset-4 ring-offset-white"
          />
        </motion.div>

        <motion.div className="max-w-2xl space-y-6 text-center">
          <motion.h1
            variants={itemVariants}
            className="text-3xl font-bold text-indigo-800 md:text-4xl"
          >
            Hello, I&apos;m Cornelius Motanya
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-gray-700">
            Passionate about creating exceptional digital experiences and safety
            through tech.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="h-16 overflow-hidden text-2xl font-semibold text-purple-600"
          >
            <motion.p
              key={specialty}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", damping: 12, stiffness: 200 }}
            >
              Specialty in {specialties[specialty]}
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        >
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="rounded-full bg-purple-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-purple-600"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
