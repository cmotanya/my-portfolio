"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroSection } from "../lib/introSection";
import { Merienda } from "next/font/google";
import { cn } from "../utils/cn";
import { carouselItems } from "../lib/carousel";
import Image from "next/image";

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
      className="md: relative mx-auto w-full max-w-3xl scale-0 transform overflow-hidden rounded-sm duration-300 md:mt-10 md:h-[20rem]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full p-6"
        >
          <div className="flex h-full flex-col space-y-5">
            <div className="flex flex-col items-center">
              <motion.h4
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                className={cn("mb-2 text-lg font-semibold uppercase")}
              >
                {carouselItems[currentIndex].name}
              </motion.h4>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
              >
                <Image
                  priority
                  height={100}
                  width={100}
                  className="mx-auto h-16 w-16 rounded-full object-cover object-center"
                  src={carouselItems[currentIndex].src}
                  alt=""
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              className="mb-4 text-balance text-center text-xl"
            >
              {carouselItems[currentIndex].text}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 z-[10] mt-12 flex -translate-x-1/2 items-center space-x-2">
        {num.map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-full text-sm font-bold transition-all duration-300 ${
              currentIndex === n
                ? "scale-110 bg-accent shadow-lg"
                : "bg-secondary"
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
