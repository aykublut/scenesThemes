"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import React from "react";
import useStore from "@/store/store";
import { FaPause } from "react-icons/fa6";

const SongElement = ({ song }: { song: any }) => {
  const { id, url, name, songPhoto } = song;
  const { setSecilenFilmMuzigiURL, secilenFilmMuzigiURL, onPause, setOnPause } =
    useStore();
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
          className={
            secilenFilmMuzigiURL === url
              ? "w-25 h-25 rounded-sm cursor-pointer border-2 dark:border-white border-black"
              : "w-25 h-25 rounded-sm cursor-pointer"
          }
          alt="songPhoto"
        />
        <div
          onClick={() => {
            if (secilenFilmMuzigiURL !== url) {
              setSecilenFilmMuzigiURL(url);
            }
          }}
          className="w-25 dark:bg-black/50 bg-white/20 h-25  absolute flex justify-center items-center"
        >
          {secilenFilmMuzigiURL === url ? (
            <div className="z-10">
              {onPause ? (
                <FaPlay
                  className="text-3xl"
                  onClick={() => setOnPause(false)}
                />
              ) : (
                <FaPause
                  onClick={() => setOnPause(true)}
                  className="text-3xl "
                />
              )}
            </div>
          ) : (
            <FaPlay onClick={() => setOnPause(false)} className="text-3xl   " />
          )}
        </div>
      </div>
      <h3 className=" flex justify-center items-center text-center">{name}</h3>
    </div>
  );
};

export default SongElement;
