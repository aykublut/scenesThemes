import React from "react";
import { ModeToggle } from "../ModeToggle";

const Header = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-[#0A0A0A] h-18 md:px-[15rem] px-0 py-4 flex justify-center items-center relative">
      <h1
        className="
          font-sans sm:text-4xl text-3xl text-transparent bg-clip-text 
          bg-gradient-to-r
          from-gray-400 via-gray-500 to-gray-600   /* light mode koyu gümüş */
          dark:from-[#E0E0E0] dark:via-[#C0C0C0] dark:to-[#A0A0A0]  /* dark mode parlak gümüş */
          dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]
        "
      >
        scenesThemes
      </h1>
      <div className="absolute right-3">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
