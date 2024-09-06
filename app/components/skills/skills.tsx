import { SkillContents } from "@/app/lib/skills";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/app/utils/cn";
import { useRef, useState } from "react";

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="mb-8 mt-12"
    >
      <h2
        className={cn(
          "mb-4 text-3xl font-medium md:text-center",
          neue.className,
        )}
      >
        Skills
      </h2>

      <div className="mx-3 grid grid-cols-1 justify-center gap-4 md:mx-5 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {SkillContents.map((skill, index) => (
          <SkillItem key={index} {...skill} kpi={parseFloat(skill.kpi)} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

interface SkillType {
  name: string;
  icon: string;
  description: string;
  kpi: number;
}
const SkillItem = ({ name, icon, description, kpi }: SkillType) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  if (isInView && value === 0) {
    setValue(kpi);
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)",
        rotateY: 10,
        background: "linearGradient(145deg, #f3f3f3, #ffffff)",
      }}
      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
      className="relative flex flex-col items-center overflow-hidden rounded-lg p-4"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent to-fuchsia-300/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <Image src={icon} alt="icon" width={50} height={50} className="mb-2" />
      <h3 className="mb-1 font-semibold">{name}</h3>
      <p className="font-bold text-primary" ref={ref}>
        {kpi}
      </p>
      <p className="text-balance text-center text-sm text-600">{description}</p>
    </motion.div>
  );
};
