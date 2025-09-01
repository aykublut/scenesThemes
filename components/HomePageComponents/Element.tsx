"use client";
import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiFolderMusicFill } from "react-icons/ri";
import useStore from "@/store/store";
const Element = ({ movie }: { movie: any }) => {
  const { id, movieName, avatar } = movie;
  const { setSecilenFilmMuzikleri, setSecilenFilmSahneleri } = useStore();

  return (
    <div
      id={id}
      className="flex gap-3 justify-around items-center   rounded-md "
    >
      <div className="relative w-[20%] p-1 flex justify-center items-center">
        <Avatar className="w-15 h-15">
          <AvatarImage src={avatar} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h3 className="w-[40%] flex justify-center items-center text-center">
        {movieName}
      </h3>
      <div className="w-[40%] flex justify-center items-center text-center gap-2 ">
        <BiSolidMoviePlay
          onClick={() => setSecilenFilmSahneleri(id - 1)}
          className="text-4xl cursor-pointer hover:shadow-sm shadow-white rounded-md"
        />

        <RiFolderMusicFill
          onClick={() => setSecilenFilmMuzikleri(id - 1)}
          className="text-4xl cursor-pointer hover:shadow-sm shadow-white rounded-md"
        />
      </div>
    </div>
  );
};

export default Element;
