"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroSection } from "../lib/introSection";
import { testimonials } from "../lib/testimonials";
import Image from "next/image";
import { cn } from "../utils/cn";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const carouselRef = useRef(null);
  const interval = 5000;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    },
    [isTransitioning],
  );

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === IntroSection.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(goToNext, interval);
    return () => clearInterval(timer);
  }, [goToNext]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "scale-0");
            entry.target.classList.add("opacity-100", "scale-100");
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentRef = carouselRef.current;

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <div
      ref={carouselRef}
      className="relative mb-8 w-full md:mt-10 md:max-w-3xl"
    >
      <h3 className="mb-6 mt-4 text-2xl font-semibold md:mb-10">
        What Our Clients Say
      </h3>

      <div className="relative h-[400px] w-full">
        <AnimatePresence mode="popLayout">
          {[-1, 0, 1].map((offset) => {
            const index = getTestimonialIndex(offset);
            const testimonial = testimonials[index];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 * offset }}
                animate={{
                  opacity: 1,
                  x:
                    offset === -1
                      ? "-20%"
                      : offset === 1
                        ? "20%"
                        : `${30 * offset}%`,
                  scale: offset === 0 ? 1 : 0.9,
                  zIndex: offset === 0 ? 2 : 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute left-9 top-0 h-full w-[80%] md:left-[20%] md:w-full"
              >
                <div
                  className={cn(
                    "relative mx-auto mt-10 flex w-full transform flex-col items-center gap-1 rounded-md border-2 border-primary bg-100 p-3 pt-[2.5rem] shadow-xl",
                    offset === 0 ? "z-10 scale-100" : "z-0 scale-90 blur-sm",
                  )}
                >
                  <Image
                    src={testimonial.src}
                    alt="profile"
                    width={100}
                    height={100}
                    className="absolute -top-10 size-24 rounded-full object-cover object-center"
                  />
                  <p className="mt-5 font-semibold">{testimonial.name}</p>
                  <p className="text-base font-semibold">
                    {testimonial.jobTitle}
                  </p>
                  <p className="text-center text-base">{testimonial.text}</p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots */}
      {/* <div className="absolute -bottom-[5rem] left-1/2 z-[20] mb-8 mt-12 flex -translate-x-1/2 items-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-8 w-8 rounded-full text-sm font-bold transition-all duration-300 ${
              currentIndex === index
                ? "scale-110 border-2 border-primary shadow-lg"
                : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index}`}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default Testimonial;
