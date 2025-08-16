"use client";
import React from "react";

export default function RnD() {
  return (
    <>
      {/* <video src="/video/rnd.mp4" controls width="100%" />; */}
      <div className="w-full max-w-3xl">
        <video
          className="w-full h-full rounded-lg"
          controls
          autoPlay={false}
          muted
          loop
        >
          <source src="/video/rnd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
