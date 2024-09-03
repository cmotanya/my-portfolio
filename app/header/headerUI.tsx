import React from "react";

const HeaderUI = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="duration-400 flex h-[5.5rem] w-full items-center border-gray-300 px-5 uppercase transition-colors md:border-b">
        {/* Logo */}
        <span className="w-[40%] animate-pulse rounded bg-400 py-6 md:w-[8%]"></span>

        {/* Hamburger */}
        <div className="relative z-[1010] ml-auto flex h-14 w-14 animate-pulse cursor-pointer flex-col items-center justify-center rounded-full bg-400 md:hidden">
          <div className="relative h-6 w-8">
            <span className="absolute left-0 h-1 w-full"></span>
            <span className="absolute left-0 top-3 h-1 w-full"></span>
            <span className="absolute right-0 h-1 w-3/4"></span>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="mx-auto hidden w-[45%] grid-flow-col gap-4 rounded bg-200 p-2 md:grid">
          <span className="w-full animate-pulse rounded bg-400 py-6"></span>
          <span className="w-full animate-pulse rounded bg-400 py-6"></span>
          <span className="w-full animate-pulse rounded bg-400 py-6"></span>
          <span className="w-full animate-pulse rounded bg-400 py-6"></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderUI;
