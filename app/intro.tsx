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
    }, 4000); //change text every 4 seconds
    return () => clearInterval(interval);
  });

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
    <section id="intro" className="h-dvh">
      <motion.div
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        variants={containerVariants}
        className="m-auto flex h-full flex-col items-center pt-16"
      >
        <Image
          src="/profile.jpg"
          alt="profile"
          width={300}
          height={300}
          className="-mt-10 mb-4 h-40 w-40 rounded-full object-cover object-center ring-4 ring-secondary ring-offset-4 md:h-52 md:w-52"
        />
        <motion.div className="max-w-4xl space-y-8 text-center">
          <motion.p
            variants={itemVariants}
            className="text-base font-semibold uppercase tracking-widest"
          >
            hello 👋, i&apos;m cornelius motanya
          </motion.p>

          <motion.p variants={itemVariants} className="text-balance text-xl">
            Passionate about creating exceptional digital experiences and safety
            through tech.
          </motion.p>

          <motion.p
            key={specialty}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: "spring", damping: 12, stiffness: 200 }}
            className="h-[4rem] overflow-hidden text-xl uppercase md:h-auto"
          >
            Specialty in <span className="">{specialties[specialty]}</span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col justify-center gap-4 pt-4 md:flex-row md:gap-8 md:pt-10"
        >
          <button className="w-full rounded-md px-4 py-2 ring-2 ring-primary md:w-fit">
            {" "}
            <a href="#href" className="text-xl uppercase">
              {" "}
              get in touch
            </a>
          </button>
          <button className="w-full rounded-md bg-primary px-4 py-2 text-lg uppercase text-white md:w-fit">
            <a href="/resume.pdf" download="resume.pdf">
              download resume
            </a>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
