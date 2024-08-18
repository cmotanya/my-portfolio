import { educationItems } from "@/app/lib/educationItems";
import React, { useState } from "react";
import DownloadResume from "./downloadResume";
import { motion, AnimatePresence } from "framer-motion";
import { IconMapPin, IconRoute } from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

const Education = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <div className="my-16">
      <h2 className="mb-12 text-3xl font-semibold">Education Journey Map</h2>

      <div className="relative mx-auto space-y-2 w-full max-w-2xl">
        {educationItems.map((item, index) => (
          <JourneyPoint
            key={index}
            item={item}
            isActive={activeItem === item.year}
            setActiveItem={setActiveItem}
            index={index}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <DownloadResume />
      </div>
    </div>
  );
};

export default Education;

interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  location: string;
  icon: React.ReactNode;
}
interface JourneyPointProps {
  item: EducationItem;
  isActive: boolean;
  setActiveItem: (year: string | null) => void;
  index: number;
}

const JourneyPoint = ({
  item,
  isActive,
  setActiveItem,
  index,
}: JourneyPointProps) => {
  return (
    <div className="flex rounded-md border-2 border-accent p-4">
      <div className="mb-4 mr-4 flex flex-col items-center gap-2">
        <div className="rounded-md bg-primary px-2 py-1 text-center text-sm text-white">
          {item.year}
        </div>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: index * 0.2,
          }}
          onClick={() => setActiveItem(isActive ? null : item.year)}
          className={cn(
            "flex size-8 items-center justify-center rounded-full border-2 border-primary transition-all duration-300",
            isActive ? "bg-primary text-white" : "bg-white text-primary",
          )}
        >
          <IconMapPin size={20} />
        </motion.button>
      </div>
      <div className="flex grow">
        <AnimatePresence>
          {isActive ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-md bg-secondary p-4 shadow-md"
            >
              <h3 className="mb-2 font-semibold">{item.degree}</h3>
              <p className="text-sm">{item.institution}</p>
              <p className="mb-4 text-sm text-gray-600">{item.location}</p>
              <div className="flex items-center text-primary">
                <IconRoute size={18} />
                <span className="text-sm">Journey Milestone</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cursor-pointer py-2"
              onClick={() => setActiveItem(item.year)}
            >
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
