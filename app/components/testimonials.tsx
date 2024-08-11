import React from "react";
import { carouselItems } from "../lib/carousel";

export const Testimonials = () => {
  return (
    <div>
      <h3 className="my-5 text-2xl font-semibold">What our clients say</h3>

      <div className="grid grid-cols-1 gap-4 text-base md:grid-flow-col md:grid-cols-3">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <span className="absolute top-[6rem] text-[8rem] text-secondary">
              <QuotationMark />
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

const QuotationMark = ({ size = 48, color = "#000000" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10.5C10 11.3284 9.32843 12 8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5Z"
        fill={color}
      />
      <path
        d="M17 10.5C17 11.3284 16.3284 12 15.5 12C14.6716 12 14 11.3284 14 10.5C14 9.67157 14.6716 9 15.5 9C16.3284 9 17 9.67157 17 10.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6.5C10 5.11929 8.88071 4 7.5 4C6.11929 4 5 5.11929 5 6.5V13.5C5 14.8807 6.11929 16 7.5 16C8.88071 16 10 14.8807 10 13.5V6.5ZM7.5 6C7.22386 6 7 6.22386 7 6.5V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V6.5C8 6.22386 7.77614 6 7.5 6Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 6.5C19 5.11929 17.8807 4 16.5 4C15.1193 4 14 5.11929 14 6.5V13.5C14 14.8807 15.1193 16 16.5 16C17.8807 16 19 14.8807 19 13.5V6.5ZM16.5 6C16.2239 6 16 6.22386 16 6.5V13.5C16 13.7761 16.2239 14 16.5 14C16.7761 14 17 13.7761 17 13.5V6.5C17 6.22386 16.7761 6 16.5 6Z"
        fill={color}
      />
    </svg>
  );
};

export default QuotationMark;
