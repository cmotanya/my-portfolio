import { educationItems } from "@/app/lib/educationItems";
import React, { useState } from "react";
import DownloadResume from "./downloadResume";
import { motion, AnimatePresence } from "framer-motion";
import { IconMapPin, IconRoute } from "@tabler/icons-react";
import { cn } from "@/app/utils/cn";

const Education = () => {
  const [isActiveItem, setIsActiveItem] = useState<string | null>(null);
  return (
    <div className="my-16 h-[15rem]">
      <h2 className="mb-12 text-3xl font-semibold">Education Journey Map</h2>

      <div className="relative mx-auto mb-24 max-w-full">
        {/* <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 transform bg-secondary"></div> */}

        <div className="relative flex justify-between">
          {educationItems.map((item, index) => (
            <JourneyPoint
              key={index}
              item={item}
              isActive={isActiveItem === item.year}
              setActiveItem={setIsActiveItem}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* <div className="mt-24">
        <DownloadResume />
      </div> */}
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
    <div className="group relative w-full">
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
          "absolute left-1/2 top-1/2 -ml-5 mt-1 flex size-10 grow basis-0 -translate-x-1/2 -translate-y-1/2 transform place-content-center rounded-full border-2 border-primary transition-all duration-300 ease-in-out",
          isActive ? "text-primary" : "text-100",
        )}
      >
        <IconMapPin size={26} className="m-auto" />
      </motion.button>

      <div className="absolute -top-[2rem] flex rounded-md bg-accent md:left-1/2 md:-translate-x-1/2 md:text-center">
        <p className="p-1 text-base font-semibold">{item.year}</p>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group:w-full absolute left-1/2 top-[3rem] z-10 w-full -translate-x-1/2 transform rounded-md bg-secondary p-4 text-center text-base shadow-xl"
          >
            <h3 className="pb-2 font-semibold leading-4">{item.degree}</h3>
            <p className="text-sm">{item.institution}</p>
            <p className="text-sm">{item.location}</p>

            <div className="mt-5 flex justify-center gap-4">
              <IconRoute size={18} />
              <span className="text-sm">Journey Milestone</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
