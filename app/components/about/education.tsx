"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconCamera,
  IconWifi,
  IconDeviceLaptop,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconSchool,
  IconBuilding,
  IconCalendar,
  IconChevronDown,
  IconChevronUp,
} from "@tabler/icons-react";

const projects = [
  {
    title: "Home Security Camera Setup",
    date: "June 2023",
    client: "Residential Client",
    description:
      "Installed a 4-camera CCTV system with local network integration for remote viewing.",
    type: "cctv",
  },
  {
    title: "Small Business Wi-Fi Configuration",
    date: "August 2023",
    client: "Local Café",
    description:
      "Configured router and access points for optimal Wi-Fi coverage throughout the café.",
    type: "network",
  },
  {
    title: "Retail Store Security and Network",
    date: "October 2023",
    client: "Boutique Shop Owner",
    description:
      "Set up a 2-camera system and configured a secure local network for POS systems.",
    type: "both",
  },
  {
    title: "Apartment Complex CCTV Installation",
    date: "November 2023",
    client: "Sunset Apartments",
    description:
      "Installed and configured a 20-camera CCTV system with central monitoring setup.",
    type: "cctv",
  },
  {
    title: "Hotel Network Segmentation",
    date: "December 2023",
    client: "Seaside Inn",
    description:
      "Implemented VLAN setup to separate guest and staff networks for improved security.",
    type: "network",
  },
  {
    title: "Home Office Network Optimization",
    date: "January 2024",
    client: "Remote Professional",
    description:
      "Optimized home network for stable video conferencing and file sharing.",
    type: "network",
  },
  {
    title: "School Computer Lab Network",
    date: "February 2024",
    client: "Greenwood Elementary",
    description:
      "Configured switches and set up a network for 25 computers in the new lab.",
    type: "network",
  },
  {
    title: "Law Firm Network Upgrade",
    date: "March 2024",
    client: "Smith & Associates",
    description:
      "Upgraded internal network infrastructure for improved speed and security.",
    type: "network",
  },
  {
    title: "Restaurant CCTV and Wi-Fi Solution",
    date: "April 2024",
    client: "Taste of Italy Restaurant",
    description:
      "Installed 6 CCTV cameras and configured separate VLANs for staff and guest Wi-Fi.",
    type: "both",
  },
  {
    title: "Daycare Center Security System",
    date: "May 2024",
    client: "Tiny Tots Daycare",
    description:
      "Implemented an 8-camera CCTV system with secure local server for footage storage.",
    type: "cctv",
  },
  {
    title: "Small Office Network Overhaul",
    date: "June 2024",
    client: "StartUp Innovations",
    description:
      "Redesigned internal network with new switches and access points for 20 employees.",
    type: "network",
  },
  {
    title: "Community Center Tech Setup",
    date: "July 2024",
    client: "Riverside Community Center",
    description:
      "Configured public Wi-Fi, installed 5 CCTV cameras, and networked 10 PCs.",
    type: "both",
  },
  {
    title: "Farm Surveillance Network",
    date: "August 2024",
    client: "Green Acres Farm",
    description:
      "Set up a local network connecting 6 weatherproof CCTV cameras for livestock monitoring.",
    type: "both",
  },
];

const ProjectShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    if (isExpanded) {
      setVisibleProjects(6);
    } else {
      setVisibleProjects(projects.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mx-auto my-12 max-w-4xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    {project.type === "cctv" && (
                      <IconCamera size={20} className="text-blue-600" />
                    )}
                    {project.type === "network" && (
                      <IconWifi size={20} className="text-blue-600" />
                    )}
                    {project.type === "both" && (
                      <IconDeviceLaptop size={20} className="text-blue-600" />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="mb-1 text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">
                    {project.description}
                  </p>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <IconCalendar size={14} className="mr-1 text-gray-400" />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center">
                      {project.client.includes("Apartment") && (
                        <IconBuildingCommunity
                          size={14}
                          className="mr-1 text-gray-400"
                        />
                      )}
                      {project.client.includes("Hotel") && (
                        <IconBuildingSkyscraper
                          size={14}
                          className="mr-1 text-gray-400"
                        />
                      )}
                      {project.client.includes("School") && (
                        <IconSchool size={14} className="mr-1 text-gray-400" />
                      )}
                      {!project.client.includes("Apartment") &&
                        !project.client.includes("Hotel") &&
                        !project.client.includes("School") && (
                          <IconBuilding
                            size={14}
                            className="mr-1 text-gray-400"
                          />
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
      {projects.length > 6 && (
        <div className="mt-8 text-center">
          <button
            onClick={toggleExpand}
            className="mx-auto flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-blue-600"
          >
            {isExpanded ? (
              <>
                <IconChevronUp size={20} className="mr-2" />
                Show Less
              </>
            ) : (
              <>
                <IconChevronDown size={20} className="mr-2" />
                Show More
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
