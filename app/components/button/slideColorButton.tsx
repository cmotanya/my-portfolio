import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  text: string;
  icon: JSX.Element;
};

export const SlideColorButton = ({ text, icon }: ButtonProps) => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <motion.button
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      className="!text-background !bg-primary group relative mx-auto w-full overflow-hidden rounded-full py-8 font-semibold uppercase tracking-wide md:w-[16rem] md:py-3"
    >
      <Link href="/contact" className="flex w-full items-center">
        <span className="text-100 absolute left-10 z-20 group-active:text-black md:left-8 md:group-hover:text-black">
          {text}
        </span>
        <div className="bg-50 group-hover:bg-200 absolute inset-y-0 right-1 top-1/2 flex h-[calc(100%-0.5rem)] w-16 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full pl-1 transition-all duration-200 ease-in-out group-active:w-[calc(100%-0.45rem)] md:w-12 md:group-hover:w-[calc(100%-0.45rem)]">
          <span className="absolute right-3 text-lg">{icon}</span>
        </div>
      </Link>
    </motion.button>
  );
};
