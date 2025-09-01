"use client";
import useStore from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

const ClipElement = ({ clip }: { clip: any }) => {
  const { id, url, name, clipPhoto } = clip;
  const { setSecilenFilmSahnesiURL, setSecilenFilmMuzigiURL } = useStore();
  return (
    <div
      id={id}
      className="flex flex-col  justify-around items-center   rounded-md "
    >
      <div className="relative  flex justify-center cursor-pointer items-center rounded-sm hover:shadow-sm shadow-white ">
        <Link
          className="z-10"
          onClick={() => {
            setSecilenFilmSahnesiURL(url);
            setSecilenFilmMuzigiURL(null);
            console.log("calisti");
          }}
          href="/clips"
        >
          <div className="w-40 bg-black/20 h-25 absolute flex justify-center items-center">
            <FaPlay className="text-3xl   " />
          </div>
          <div>
            <Image
              src={`/${clipPhoto}`}
              width={60}
              height={60}
              className="w-40 h-25 rounded-sm cursor-pointer"
              alt="songPhoto"
            />
          </div>
        </Link>
      </div>
      <h3 className=" flex justify-center items-center text-center">{name}</h3>
    </div>
  );
};

export default ClipElement;
