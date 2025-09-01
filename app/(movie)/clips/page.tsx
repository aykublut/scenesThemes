"use client";
import useStore from "@/store/store";
import React from "react";

const clipsPage = () => {
  const { secilenFilmSahnesiURL } = useStore();
  return (
    <div className="w-full flex justify-center items-center ">
      {secilenFilmSahnesiURL && (
        <video autoPlay width="1000" height="240" controls preload="none">
          <source src={secilenFilmSahnesiURL} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default clipsPage;
