import React from "react";
import { workExperience } from "../lib/workExperience";
import { cn } from "../utils/cn";
import { Bebas_Neue } from "next/font/google";

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const WorkExperience = () => {
  return (
    <div className="mb-16 space-y-4 pt-8 md:pt-12">
      <h3
        className={cn(
          "mb-6 text-3xl font-medium capitalize md:text-center",
          neue.className,
        )}
      >
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
                "flex w-full flex-col gap-4 rounded-md border-2 border-secondary p-3 shadow-2xl md:w-1/2",
              )}
            >
              <div className="relative flex justify-between">
                <span className="uppercase">{item.company}</span>
                <span className="rounded-md bg-primary p-1 text-sm text-white">
                  {item.year}
                </span>
              </div>

              <div className="flex flex-col space-y-4 text-base font-semibold">
                <span className="">{item.title}</span>
                <span className="font-normal">{item.role}</span>
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
