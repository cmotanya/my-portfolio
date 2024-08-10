import { educationItems } from "@/app/lib/educationItems";
import React from "react";
import DownloadResume from "./downloadResume";

const Education = () => {
  return (
    <div className="space-y-4 pt-8 md:pt-12">
      <h3 className="text-3xl font-semibold">Education Journey</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="w-fit rounded-md bg-gradient-to-l from-secondary from-50% shadow-2xl"
          >
            <div className="flex items-center justify-between gap-2 p-4">
              <span className="rounded-full bg-accent p-1">{item.icon}</span>
              <span className="rounded-md bg-primary p-1 text-white">
                {item.year}
              </span>
            </div>

            <div className="px-6 py-2">
              <p className="font-semibold leading-[1.2rem]">{item.degree}</p>
              <div className="mt-3 font-medium uppercase">
                <p className="text-sm">{item.institution}</p>
                <p className="text-sm">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DownloadResume />
    </div>
  );
};

export default Education;
