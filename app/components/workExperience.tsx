import React from "react";
import { workExperience } from "./about/workExperience";
import { cn } from "../utils/cn";

const WorkExperience = () => {
  return (
    <div className="mb-16 space-y-4 pt-8 md:pt-12">
      <h3 className="mb-12 text-3xl font-semibold capitalize">
        work experience
      </h3>

      <div className="relative">
        <div className="absolute left-[0.20rem] h-full w-1 bg-accent md:left-1/2 md:-translate-x-1/2"></div>
        {workExperience.map((item, index) => (
          <div
            key={index}
            className={cn(
              "mb-6 ms-4 flex flex-col md:ms-0",
              index % 2 === 0
                ? "md:me-5 md:items-start"
                : "md:ms-5 md:items-end",
            )}
          >
            <div className="absolute left-0 size-2.5 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2"></div>

            <div
              className={cn(
                "flex w-full flex-col gap-4 rounded-md border-2 border-gray-800 p-3 shadow-2xl md:w-1/2",
                index % 2 === 0
                  ? "bg-gradient-to-r from-50%"
                  : "bg-gradient-to-l from-50%",
              )}
            >
              <div className="flex justify-between">
                <span className="font-semibold">{item.company}</span>
                <span className="rounded-md bg-primary p-1 text-sm text-white">
                  {item.year}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="italic">{item.title}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
