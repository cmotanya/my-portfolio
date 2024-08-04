import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IntroSection } from "../lib/introSection";
import { Merienda } from "next/font/google";
import { cn } from "../utils/cn";

const merienda = Merienda({ subsets: ["latin"] });

const IntroCarousel = () => {
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

    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => {
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="relative h-[24rem] w-full scale-0 transform overflow-hidden rounded-sm shadow-lg transition duration-300 md:mt-10"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-white"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <h4
                className={cn(
                  "mb-2 text-xl font-bold uppercase",
                  merienda.className,
                )}
              >
                {IntroSection[currentIndex].title}
              </h4>
              <p className="mb-4 text-3xl font-semibold">
                {IntroSection[currentIndex].description}
              </p>
            </div>

            <div className="w-fit rounded-full bg-white p-3 text-indigo-600">
              {IntroSection[currentIndex].icon}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-[10] flex -translate-x-1/2 items-center space-x-2">
        {num.map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-full text-sm font-bold transition-all duration-300 ${
              currentIndex === n
                ? "scale-110 bg-white text-indigo-600 shadow-lg"
                : "bg-indigo-200 text-indigo-600 hover:bg-indigo-300"
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

export default IntroCarousel;
