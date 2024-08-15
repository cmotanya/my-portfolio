import { IconArrowDown } from "@tabler/icons-react";
import { useRef } from "react";

const DownArrow = () => {
  const scrollToNextSectionRef = useRef<HTMLButtonElement>(null);

  const scrollToNextSection = () => {
    scrollToNextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        ref={scrollToNextSectionRef}
        id="about-me"
        onClick={scrollToNextSection}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 cursor-pointer"
      >
        <IconArrowDown />
      </button>
    </>
  );
};

export default DownArrow;
