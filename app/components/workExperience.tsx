import React from "react";
import { workExperience } from "../lib/workExperience";
import { cn } from "../utils/cn";
import { Bebas_Neue } from "next/font/google";
import {
  IconHandFingerLeft,
  IconHandFingerRight,
  IconPin,
} from "@tabler/icons-react";

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

      <div className="md:p-2">
        {workExperience.map((item, index) => (
          <div
            key={index}
            className={cn(
              "mb-6 ms-8 flex flex-col md:ms-0",
              index % 2 === 0
                ? "md:me-8 md:items-start"
                : "md:ms-8 md:items-end",
            )}
          >
            <div
              className={cn("absolute left-0 md:left-1/2 md:-translate-x-1/2")}
            >
              {index % 2 === 0 ? (
                <span>
                  <IconHandFingerLeft className="hidden text-primary md:block" />{" "}
                  <IconHandFingerRight className="text-primary md:hidden" />
                </span>
              ) : (
                <IconHandFingerRight className="text-primary" />
              )}
            </div>

            <div
              className="flex w-full flex-col gap-4 rounded-md bg-100 p-3 shadow-xl md:w-1/2"
              style={{
                boxShadow:
                  "2px 2px 5px rgba(0, 0, 0, 0.1), -2px 2px 5px rgba(0, 0, 0, 0.1), 2px -2px 5px rgba(0, 0, 0, 0.1), -2px -2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="relative flex justify-between">
                <span className="font-semibold uppercase text-600">
                  {item.company}
                </span>
                <span className="inline-block w-fit rounded bg-secondary p-1 text-sm font-bold text-800">
                  {item.year}
                </span>
              </div>

              <div className="flex flex-col space-y-2 text-base font-semibold">
                <span className="">{item.title}</span>
                <span className="text-balance font-normal">{item.role}</span>
                <span className="flex items-center gap-2 text-sm font-semibold text-500">
                  <IconPin />
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
