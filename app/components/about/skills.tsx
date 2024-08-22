import { SkillContents } from "@/app/lib/skills";
import { motion } from "framer-motion";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/app/utils/cn";

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
      className="my-8"
    >
      <h2
        className={cn(
          "mb-4 text-center text-3xl font-semibold",
          neue.className,
        )}
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 mx-3 md:mx-5">
        {SkillContents.map((skill, index) => (
          <SkillItem key={index} {...skill} />
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
  kpi: string;
}
const SkillItem = ({ name, icon, description, kpi }: SkillType) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
      className="flex flex-col items-center rounded-lg p-4"
      style={{
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image src={icon} alt="icon" width={50} height={50} className="mb-2" />
      <h3 className="mb-1 font-semibold">{name}</h3>
      <p className="font-bold text-secondary">{kpi}</p>
      <p className="text-balance text-center text-sm text-600">{description}</p>
    </motion.div>
  );
};
