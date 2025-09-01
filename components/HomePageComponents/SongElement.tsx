"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import React from "react";
import useStore from "@/store/store";

const SongElement = ({ song }: { song: any }) => {
  const { id, url, name, songPhoto } = song;
  const { setSecilenFilmMuzigiURL } = useStore();
  console.log(url);

  return (
    <div
      id={id}
      className="flex flex-col  justify-around items-center   rounded-md "
    >
      <div className="relative   flex justify-center cursor-pointer items-center rounded-sm hover:shadow-sm shadow-black dark:shadow-white ">
        <Image
          src={`/${songPhoto}`}
          width={25}
          height={25}
          className="w-25 h-25 rounded-sm cursor-pointer"
          alt="songPhoto"
        />
        <div
          onClick={() => {
            setSecilenFilmMuzigiURL(url);
          }}
          className="w-25 dark:bg-black/50 bg-white/20 h-25  absolute flex justify-center items-center"
        >
          <FaPlay className="text-3xl   " />
        </div>
      </div>
      <h3 className=" flex justify-center items-center text-center">{name}</h3>
    </div>
  );
};

export default SongElement;
