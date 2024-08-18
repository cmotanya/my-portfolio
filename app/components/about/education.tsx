import { educationItems } from "@/app/lib/educationItems";
import React, { useState } from "react";
import DownloadResume from "./downloadResume";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconMapPin,
  IconRoute,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

const Education = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <div className="my-16">
      <h2 className="mb-4 text-3xl font-semibold">Education Journey Map</h2>
      <p className="mb-8 text-center text-gray-600">
        Click on a milestone to view details
      </p>

      <div className="relative mx-auto max-w-2xl">
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
    <div className="mb-8 flex">
      <div className="mr-4 flex flex-col items-center">
        <div className="mb-2 rounded-md bg-secondary px-2 py-1 text-center text-sm font-semibold text-800">
          {item.year}
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: index * 0.2,
          }}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary transition-all duration-300",
            isActive ? "bg-primary text-white" : "bg-white text-primary",
          )}
        >
          <IconMapPin size={20} />
        </motion.div>
      </div>
      <div className="flex-1">
        <button
          onClick={() => setActiveItem(isActive ? null : item.year)}
          className="w-full rounded-md bg-white p-4 text-left shadow-sm transition-all duration-300 hover:bg-gray-50 hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{item.degree}</h3>
              <p className="text-sm text-gray-600">{item.institution}</p>
            </div>
            {isActive ? (
              <IconChevronUp size={20} className="text-primary" />
            ) : (
              <IconChevronDown size={20} className="text-gray-400" />
            )}
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <p className="mb-4 text-sm text-gray-600">{item.location}</p>
                <div className="flex items-center gap-2 text-primary">
                  <IconRoute size={18} />
                  <span className="text-sm">Journey Milestone</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
};
