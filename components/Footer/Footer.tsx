"use client";
import useStore from "@/store/store";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const { secilenFilmMuzigiURL, setSecilenFilmMuzigiURL } = useStore();
  const pathname = usePathname();
  return (
    <div className="w-full bg-gray-100 dark:bg-[#0A0A0A] h-18 xl:px-[15rem] lg:px-[12rem] md:px-[10rem] px-[2rem]  py-4 flex justify-center items-center relative">
      {pathname === "/clips" ? null : (
        <div className="w-full flex justify-center items-center">
          {secilenFilmMuzigiURL !== null ? (
            <audio
              loop
              key={secilenFilmMuzigiURL}
              autoPlay
              className="w-[100%]  "
              controls
            >
              <source src={secilenFilmMuzigiURL} type="audio/mp3" />
              Tarayıcınız audio etiketini desteklemiyor.
            </audio>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Footer;
