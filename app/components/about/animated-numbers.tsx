import { cn } from "@/app/utils/cn";
import { motion, SpringOptions, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

type AnimatedNumber = {
  value: number;
  springOptions?: SpringOptions;
};
const AnimatedNumber = ({ value, springOptions }: AnimatedNumber) => {
  const spring = useSpring(value, springOptions);
  const display = useTransform(spring, (n) =>
    Math.round(n).toLocaleString("en"),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={cn("inline-flex items-center tabular-nums")}>
      {display}
    </motion.span>
  );
};

export default AnimatedNumber;
