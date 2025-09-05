"use client";
import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Element from "./Element";
import SongElement from "./SongElement";
import useStore from "@/store/store";
import ClipElement from "./ClipElement";

export function ScrollAreaDemo({ movies }: { movies: any }) {
  const { secilenFilmMuzikleri, secilenFilmSahneleri, setMovies } = useStore();
  React.useEffect(() => {
    setMovies(movies);
  }, []);
  console.log(movies);

  return (
    <div className="flex h-[100%] justify-center items-center w-full xl:px-[15rem] lg:px-[10rem] md:px-[7rem] px-0     gap-x-5 py-10">
      <div className="w-[25%] h-full lg:block hidden  ">
        <ScrollArea className=" h-[15rem] lg:h-[30rem] w-full rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium text-center">
              clips
            </h4>

            {secilenFilmSahneleri !== null
              ? movies[secilenFilmSahneleri].clip.map((clip: any) => (
                  <React.Fragment key={clip.id}>
                    <ClipElement clip={clip} />
                    <Separator className="my-2" />
                  </React.Fragment>
                ))
              : null}
          </div>
        </ScrollArea>
      </div>
      <div className="w-[90%] lg:w-[50%] h-full  ">
        <ScrollArea className="  h-[15rem] lg:h-[30rem] w-full rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium text-center">
              movies
            </h4>
            {movies.map((movie: any) => (
              <React.Fragment key={movie.id}>
                <Element movie={movie} />
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
        <div className="lg:hidden flex">
          <ScrollArea className="h-[15rem] lg:h-[30rem] w-[50%] rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium text-center">
                songs
              </h4>
              {secilenFilmMuzikleri !== null
                ? movies[secilenFilmMuzikleri].song.map((song: any) => (
                    <React.Fragment key={song.id}>
                      <SongElement song={song} />
                      <Separator className="my-2 " />
                    </React.Fragment>
                  ))
                : null}
            </div>
          </ScrollArea>
          <ScrollArea className=" h-[15rem] lg:h-[30rem] w-[50%] rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
            <div className="p-4">
              <h4 className="mb-4 text-sm leading-none font-medium text-center">
                clips
              </h4>

              {secilenFilmSahneleri !== null
                ? movies[secilenFilmSahneleri].clip.map((clip: any) => (
                    <React.Fragment key={clip.id}>
                      <ClipElement clip={clip} />
                      <Separator className="my-2" />
                    </React.Fragment>
                  ))
                : null}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="w-[25%] h-full lg:block hidden  ">
        <ScrollArea className="h-[15rem] lg:h-[30rem] w-full rounded-md border shadow-sm dark:shadow-blue-100 shadow-black">
          <div className="p-4">
            <h4 className="mb-4 text-sm leading-none font-medium text-center">
              songs
            </h4>
            {secilenFilmMuzikleri !== null
              ? movies[secilenFilmMuzikleri].song.map((song: any) => (
                  <React.Fragment key={song.id}>
                    <SongElement song={song} />
                    <Separator className="my-2" />
                  </React.Fragment>
                ))
              : null}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
