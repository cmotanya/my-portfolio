import React, { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { cn } from "@/app/utils/cn";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import { pricingPlans } from "@/app/lib/pricing";

const neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

type Price = {
  title: string;
  price: number | string;
  isPopular: boolean;
  features: { feature: string; index: number }[];
};

const Plans = ({ features, isPopular, price, title }: Price) => {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border bg-50 p-4",
        isPopular ? "border-secondary" : "border-none",
      )}
      whileHover={{ scale: 1.05 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        type: "spring",
        stiffness: 300,
      }}
    >
      {isPopular && (
        <div className="mb-4">
          <span className="inline-block rounded bg-primary p-2 text-sm font-semibold text-white">
            Best Value
          </span>
        </div>
      )}
      <h3 className="mb-2 text-2xl font-semibold text-primary">{title}</h3>
      <span className="text-3xl font-bold text-800">{price}</span>
      <p className="mt-2 text-sm text-500">Starting Price</p>

      <ul className="my-5">
        {features.map(
          ({ feature, index }: { feature: string; index: number }) => (
            <li key={index} className="flex shrink-0 items-center gap-2">
              <IconCheck className="size-5 text-green-500" />
              <span className="text-base font-medium text-600">{feature}</span>
            </li>
          ),
        )}
      </ul>

      <button
        aria-label="Get In Touch"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className={cn(
          "mt-6 w-full items-center justify-center rounded bg-primary p-3",
          isPopular
            ? "bg-primary text-white"
            : "bg-secondary font-medium text-black",
        )}
      >
        Get In Touch
      </button>
    </motion.div>
  );
};

const PricingSection = () => {
  return (
    <div className="container m-12 mx-auto bg-100 px-4 py-6 shadow-lg">
      <h2 className={cn("text-center text-3xl", neue.className)}>
        Simple, Affordable Web Design
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-balance text-center font-medium text-800">
        Quality websites tailored to your needs, at prices that won&apos;t break
        the bank.
      </p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {pricingPlans.map((plan, index) => (
          <Plans key={index} {...plan} />
        ))}
      </div>
      <p className="mt-8 text-balance text-center text-base font-medium text-500">
        All plans include free hosting setup and basic SEO optimization. Prices
        may vary based on specific requirements.
      </p>
    </div>
  );
};

export default PricingSection;
