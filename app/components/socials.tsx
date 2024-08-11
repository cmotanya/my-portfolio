import { motion } from "framer-motion";
import React from "react";
import { Socials } from "../lib/socials";

const SocialSection = () => {
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
    /* social icons. Hidden on small screens */
    <motion.div
      variants={itemVariants}
      className="absolute left-10 top-1/4 hidden -translate-y-1/2 *:p-1 md:block"
    >
      {Socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialSection;
