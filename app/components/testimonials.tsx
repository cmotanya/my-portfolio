import React from "react";
import { carouselItems } from "../lib/carousel";

export const Testimonials = () => {
  return (
    <div>
      <h3 className="my-5 text-2xl font-semibold">What our clients say</h3>

      <div className="grid grid-cols-1 gap-4 text-base md:grid-flow-col">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <span className="absolute top-[2rem] text-[8rem] text-secondary">
              &quot;
            </span>
            <blockquote className="flex flex-col gap-3 space-y-4 rounded-md border-2 border-accent p-3 shadow-2xl">
              <p className="font-semibold">{item.name}</p>
              <p>{item.text}</p>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};
