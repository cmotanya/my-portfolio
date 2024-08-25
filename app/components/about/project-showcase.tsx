"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import {
  IconCamera,
  IconWifi,
  IconDeviceLaptop,
  IconBuildingSkyscraper,
  IconSchool,
  IconBuilding,
  IconCalendar,
} from "@tabler/icons-react";
import { projects } from "@/app/lib/projects";

const ProjectShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showMore, setShowMore] = useState(false);

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.3 } },
  };

  const toggleShowMore = () => {
    setTimeout(() => {
      setVisibleProjects(showMore ? 6 : projects.length);
      setShowMore(!showMore);
    }, 500);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-3 text-center text-2xl font-semibold md:mb-6">
        Recent Project
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <AnimatePresence>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.05,
              }}
              className="rounded-lg border border-200 bg-100 p-4 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-3">
                {/* icons in the first row */}
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-full bg-100">
                  {project.type === "cctv" && (
                    <IconCamera size={20} className="text-accent" />
                  )}
                  {project.type === "network" && (
                    <IconWifi size={20} className="text-accent" />
                  )}
                  {project.type === "both" && (
                    <IconDeviceLaptop size={20} className="text-accent" />
                  )}
                </div>

                {/* middle row */}
                <div className="flex-grow">
                  <h3 className="mb-1 font-semibold">{project.title}</h3>
                  <p className="mb-2 text-sm text-600">{project.description}</p>

                  {/* lower row */}
                  <div className="flex items-center gap-3 text-xs text-500">
                    <div className="flex items-center gap-1">
                      <IconCalendar size={14} className="mb-1 text-400" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      {project.client.includes("Apartment") && (
                        <IconBuilding size={14} className="mr-1 text-400" />
                      )}
                      {project.client.includes("School") && (
                        <IconSchool size={14} className="mr-1 text-400" />
                      )}
                      {project.client.includes("Hotel") && (
                        <IconBuildingSkyscraper
                          size={14}
                          className="mr-1 text-400"
                        />
                      )}
                      {!project.client.includes("Apartment") &&
                        !project.client.includes("School") &&
                        !project.client.includes("Hotel") && (
                          <IconBuilding size={14} className="mr-1 text-400" />
                        )}
                      <span>{project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {projects.length >= visibleProjects && (
        <div className="mt-4 text-center md:mt-8">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full rounded-full bg-primary px-4 py-3 text-white transition md:max-w-fit"
            onClick={toggleShowMore}
          >
            {showMore ? "Show Less" : "Show More"}{" "}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
