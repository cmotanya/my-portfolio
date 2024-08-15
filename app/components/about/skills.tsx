import { skillItems } from "@/app/lib/skills";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Skills = () => {
  const listRef = useRef<HTMLUListElement | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        dampness: 12,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  useEffect(() => {
    if (listRef.current) {
      const clone = listRef.current.cloneNode(true) as HTMLElement;
      clone.setAttribute("aria-hidden", "true");
      listRef.current.parentNode?.appendChild(clone);
    }
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pt-8 md:pt-12"
    >
      <h2 className="text-3xl font-semibold">Skills</h2>

      <motion.div variants={skillVariants} className="flex gap-4">
        <motion.ul className="flex max-w-full animate-scroll items-center justify-between gap-[20px] p-2">
          {skillItems.map((skill, index) => (
            <motion.li
              key={index}
              variants={skillVariants}
              className="flex items-center rounded-lg px-4 py-2 shadow-md ring-2 ring-accent"
            >
              <span className="text-xl text-black">{skill.name}</span>{" "}
              <span>{skill.icon}</span>
            </motion.li>
          ))}
          {skillItems.map((skill, index) => (
            <motion.li
              key={`duplicate-${index}`}
              aria-hidden
              variants={skillVariants}
              className="flex items-center gap-2 rounded-lg px-4 py-2 shadow-md ring-2 ring-accent"
            >
              <span className="text-xl text-black">{skill.name}</span>{" "}
              <span>{skill.icon}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
