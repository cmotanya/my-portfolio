import { educationItems } from "@/app/lib/educationItems";
import React, { useState } from "react";
import DownloadResume from "./downloadResume";
import { motion, AnimatePresence } from "framer-motion";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

const Education = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (year: string) => {
    setOpenItem(openItem === year ? null : year);
  };

  return (
    <section className="space-y-6 pt-12 md:pt-16">
      <h2 className="text-3xl font-bold text-primary">Education Journey</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educationItems.map((item, index) => (
          <EducationItem
            key={item.year}
            item={item}
            isOpen={openItem === item.year}
            toggleItem={toggleItem}
            index={index}
          />
        ))}
      </div>
      <DownloadResume />
    </section>
  );
};

export default Education;

interface EducationItemProps {
  item: {
    icon: React.ReactNode;
    year: string;
    degree: string;
    location: string;
    institution: string;
  };
  isOpen: boolean;
  toggleItem: (year: string) => void;
  index: number;
}

const EducationItem = ({
  item,
  isOpen,
  toggleItem,
  index,
}: EducationItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-background flex flex-col justify-between rounded-lg border-2 border-accent p-6 shadow-lg transition-all hover:shadow-xl"
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent p-2 text-primary">
          {item.icon}
        </span>
        <span className="rounded-md bg-primary px-3 py-1 text-sm font-medium text-white">
          {item.year}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-primary">{item.degree}</h3>

      <button
        onClick={() => toggleItem(item.year)}
        className={cn(
          "mt-4 w-full transform rounded-md border-2 border-accent px-4 py-2 font-medium transition-all duration-300 ease-in-out hover:bg-accent hover:text-primary",
          isOpen &&
            "hover:bg-secondary/90 border-secondary bg-secondary text-white",
        )}
      >
        <span className="flex items-center justify-center gap-2">
          {isOpen ? "Hide Details" : "Show Details"}
          {isOpen ? <IconMinus size={18} /> : <IconPlus size={18} />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <p className="text-sm text-gray-600">{item.location}</p>
            <p className="mt-1 text-sm font-medium text-primary">
              {item.institution}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
