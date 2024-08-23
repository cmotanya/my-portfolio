import React from "react";

const HeaderUI = () => {
  return (
    <div className="hidden overflow-hidden md:flex">
      <div className="duration-400 flex h-[5.5rem] w-full items-center justify-between border-gray-300 px-5 uppercase transition-colors md:border-b">
        <span className="w-[20%] rounded bg-300 py-5"></span>

        <div className="grid w-[40%] grid-flow-col gap-4 p-1">
          <span className="w-full rounded bg-400 py-5"></span>
          <span className="w-full rounded bg-400 py-5"></span>
          <span className="w-full rounded bg-400 py-5"></span>
          <span className="w-full rounded bg-400 py-5"></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderUI;
