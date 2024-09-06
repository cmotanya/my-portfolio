"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Merienda } from "next/font/google";
import Image from "next/image";
import { IntroSection } from "@/app/lib/introSection";
import { testimonials } from "@/app/lib/testimonials";

const merienda = Merienda({ subsets: ["latin"] });

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const carouselRef = useRef(null);
  const interval = 3000;

  const num = Array.from({ length: IntroSection.length }, (_, index) => index);

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
            entry.target.classList.remove("opacity-0", "scale-0", "invisible");
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

  return (
    <div
      ref={carouselRef}
      className="relative mx-auto mb-8 max-w-3xl scale-0 transform rounded-sm duration-300 md:mt-10"
    >
      <h3 className="mb-8 text-2xl font-semibold">What Our Clients Say</h3>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="grid h-full grid-cols-3"
        >
          <div className="grid grid-flow-col grid-cols-1 gap-4 text-base">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="relative mt-10 flex flex-col items-center gap-3 space-y-4 rounded-md bg-secondary p-3 pt-[2.5rem] shadow-2xl"
              >
                <Image
                  src={item.src}
                  alt="profile"
                  width={100}
                  height={100}
                  className="absolute -top-10 size-24 rounded-full object-cover object-center"
                />
                <p className="font-semibold">{item.name}</p>
                <p className="text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute -bottom-10 left-1/2 z-[20] mb-8 mt-12 flex -translate-x-1/2 items-center space-x-2">
        {num.map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-full text-sm font-bold transition-all duration-300 ${
              currentIndex === n
                ? "scale-110 border-2 border-primary shadow-lg"
                : ""
            }`}
            onClick={() => goToSlide(n)}
            aria-label={`Go to slide ${n}`}
          >
            {n + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
