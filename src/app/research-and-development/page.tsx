"use client";

import Image from "next/image";
import FocusAreas from "./FocusAreas";
import ScientificCollaboration from "./ScientificCollaboration";
import PartnersMatrix from "./PartnersMatrix";
import { useRef, useState } from "react";

export default function RnD() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <main className="bg-white">
      <div className="relative w-full">
        <Image
          src="/Research_Development.png"
          alt="Research & Development"
          width={1920}
          height={800}
          className="hidden md:block w-full h-auto object-cover"
          sizes="100vw"
          priority
        />

        <Image
          src="/rnd/Image 1_1.png"
          alt="Research & Development"
          width={375}
          height={375}
          className="block md:hidden w-full h-auto object-cover"
          sizes="100vw"
          priority
        />

        {/* Overlay text aligned with same container as below */}
        <div className="absolute bottom-0 left-0 w-full py-6 tablet:py-8">
          <div className="mx-auto w-full max-w-[1200px] px-6 desktop:px-8">
            <h1 className="text-5xl desktop:text-7xl font-bold text-black w-fit leading-tight">
              Research
              <br />
              &amp; Development
            </h1>
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <section className="bg-white">
        <div className="mx-auto w-full  px-6 desktop:px-8 py-10 desktop:py-14 grid gap-8 desktop:grid-cols-12 items-center">
          {/* Text */}
          <div className="desktop:col-span-7">
            <h2 className="text-4xl tablet:text-5xl desktop:text-6xl font-bold leading-tight text-black">
              <span className="bg-crystalGreen px-1">
                Science-Driven Innovation
              </span>
              <br />
              <span>for Tomorrow’s Therapeutics</span>
            </h2>

            <p className="mt-6 text-neutral900">
              At Cannex, research is not a department — it’s the foundation of
              everything we do. We believe that advancing the future of medical
              cannabis starts with asking the right questions, investing in the
              right partnerships, and upholding the same scientific rigor
              demanded of pharmaceutical products.
            </p>

            <p className="mt-4 text-neutral900">
              Our R&amp;D ecosystem bridges cutting-edge science from Japan,
              clinical collaboration in Thailand, and product innovation that
              meets the regulatory standards of the world’s most demanding
              medical markets.
            </p>
          </div>

          {/* Image */}
          <div className="desktop:col-span-5">
            <Image
              src="/cannex-42.png"
              alt="Cannabis flower macro"
              width={900}
              height={700}
              sizes="(min-width:1200px) 40vw, 100vw"
              className="w-full h-auto object-contain "
              quality={95}
            />
          </div>
        </div>
      </section>
      <section className="relative w-full border border-neutral200">
        {/* Keep a consistent 16:9 frame */}
        <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
          <video
            ref={videoRef}
            src="/video/rnd.mp4"
            className="absolute inset-0 h-full w-full object-cover"
            poster="/Research_Development.png" // fallback image before play
            controls={playing} // show controls after starting
            preload="metadata"
            onEnded={() => setPlaying(false)}
          />

          {/* Play button overlay (hidden once playing) */}
          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 grid place-items-center"
            >
              <span className="h-16 w-16 rounded-full bg-white/90 shadow ring-1 ring-black/10 grid place-items-center">
                {/* simple play triangle */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  className="text-black"
                >
                  <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </section>
      <FocusAreas />
      <ScientificCollaboration />
      <PartnersMatrix />
    </main>
  );
}
