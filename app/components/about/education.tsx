import { educationItems } from "@/app/lib/educationItems";
import React, { useState } from "react";
import DownloadResume from "./downloadResume";
import { motion } from "framer-motion";
import { IconMapPin, IconCalendar, IconSchool } from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

const Education = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <div className="my-16 rounded-2xl">
      <h2 className="mb-4 text-center text-4xl font-bold text-teal-400">
        Educational Journey
      </h2>
      <p className="mb-8 text-center text-400">
        Explore my academic milestones
      </p>

      <div className="relative mx-auto w-full">
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

      <div className="mt-12">
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
    <div className="mb-2 flex">
      <div className="mr-3 flex flex-col items-center">
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
            "flex h-12 w-12 items-center justify-center rounded-full bg-teal-500",
          )}
        >
          <IconSchool size={24} className="text-900" />
        </motion.div>
        {/* <div className="mt-2 h-full w-0.5 bg-teal-500"></div> */}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="flex flex-1 overflow-hidden rounded-xl border border-gray-700 bg-800 transition-all duration-300 hover:border-teal-500"
      >
        <div
          className="cursor-pointer p-6"
          onClick={() => setActiveItem(isActive ? null : item.year)}
        >
          <div className="mb-2 flex flex-col-reverse justify-between md:flex-row md:items-center">
            <h3 className="text-xl font-bold text-teal-400">{item.degree}</h3>
            <div className="flex items-center text-400">
              <IconCalendar size={18} className="mr-2" />
              <span className="font-semibold">{item.year}</span>
            </div>
          </div>
          <p className="text-lg text-300">{item.institution}</p>
          <div className="flex items-center text-500">
            <IconMapPin size={18} className="mr-2" />
            <p className="text-sm">{item.location}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
