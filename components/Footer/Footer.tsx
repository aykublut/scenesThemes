"use client";
import useStore from "@/store/store";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ImLoop } from "react-icons/im";
import { Button } from "../ui/button";
const Footer = () => {
  const {
    secilenFilmMuzigiURL,
    secilenFilmMuzikleri,
    setOnPause,
    onPause,
    movies,
    setSecilenFilmMuzigiURL,
  } = useStore();
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);

  const setAudio = () => {
    if (onPause === true) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
  };

  useEffect(() => {
    setAudio();
  }, [onPause]);

  const [loop, setLoop] = useState<boolean>(false);

  const onEndedFunc = () => {
    let nextSongUrl;
    secilenFilmMuzikleri !== null
      ? movies[secilenFilmMuzikleri].song.forEach((songg: any) => {
          if (songg.url === secilenFilmMuzigiURL) {
            const idNow = songg.id;
            const nextSongID = idNow + 1;
            movies[secilenFilmMuzikleri].song.forEach((songw: any) => {
              if (songw.id === nextSongID) {
                nextSongUrl = songw.url;
                setSecilenFilmMuzigiURL(nextSongUrl);
              }
            });
          }
        })
      : null;
  };
  return (
    <div className="w-full bg-gray-100 dark:bg-[#0A0A0A] h-18 xl:px-[15rem] lg:px-[12rem] md:px-[10rem] px-[2rem]  py-4 flex justify-center items-center relative">
      {pathname === "/clips" ? null : (
        <div className="w-full flex justify-center items-center">
          {secilenFilmMuzigiURL !== null ? (
            <div className="flex w-full justify-center items-center gap-2">
              <audio
                loop={loop}
                ref={audioRef}
                onPause={() => setOnPause(true)}
                onPlay={() => setOnPause(false)}
                onEnded={() => onEndedFunc()}
                key={secilenFilmMuzigiURL}
                autoPlay
                className="w-[100%]  "
                controls
              >
                <source src={secilenFilmMuzigiURL} type="audio/mp3" />
                Tarayıcınız audio etiketini desteklemiyor.
              </audio>

              <ImLoop
                className={
                  loop
                    ? "text-xl cursor-pointer text-white"
                    : "text-xl cursor-pointer text-white/50"
                }
                onClick={() => setLoop(!loop)}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Footer;
