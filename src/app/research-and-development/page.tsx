/* eslint-disable @next/next/no-img-element */
"use client";

import ScientificCollaboration from "./ScientificCollaboration";
import { useRef, useState } from "react";
import Partners from "@/components/Partners";
import FocusArea from "./FocusArea";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <main className="bg-white overflow-x-hidden">
      <div className="relative w-full h-[436px] tablet:h-[calc(100vh-64px)] desktop:h-[calc(100vh-134px)]">
        <ScrollReveal>
          {(show) => (
            <img
              src="/asset/research-development.webp"
              alt="Image | Cannex"
              className={
                "h-[375px] w-full tablet:h-full object-cover zoom-origin-center" +
                getClassNameAnimation(
                  show,
                  1000,
                  "zoom-from",
                  "animate-zoom-to-fit",
                )
              }
            />
          )}
        </ScrollReveal>

        <ScrollReveal
          className="absolute bottom-0 left-0 w-full pt-6 tablet:pt-8"
          once
        >
          {(show) => (
            <div className="w-full tablet:px-20 pt-16 tablet:pt-0">
              <h1
                className={
                  "text-5xl tablet:text-7xl font-bold text-black w-fit leading-tight mx-[20px] tablet:mx-0" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                Research
                <br />
                &amp; Development
              </h1>
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* INTRO SECTION */}
      <ScrollReveal className="bg-white" once>
        {(show) => (
          <div
            className={getClassNameAnimation(
              show,
              1000,
              "opacity-0 translate-x-20",
              "opacity-100 translate-x-0",
            )}
          >
            <div className="mx-auto w-full tablet:px-20 py-10 tablet:pt-[64px] tablet:pb-14 flex flex-col tablet:justify-between tablet:items-center tablet:flex-row tablet:gap-8">
              {/* Text */}
              <div className="tablet:col-span-7 w-full max-w-[733px]">
                <h2 className="text-[40px] tablet:text-[52px] font-bold leading-tight text-black mx-[20px] tablet:mx-0">
                  <div
                    className={
                      "bg-crystalGreen px-1 w-fit hidden tablet:block" +
                      getClassNameAnimation(
                        show,
                        500,
                        "opacity-0",
                        "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                      )
                    }
                  >
                    Science-Driven Innovation
                  </div>
                  <div
                    className={
                      "bg-crystalGreen px-1 w-fit block tablet:hidden" +
                      getClassNameAnimation(
                        show,
                        500,
                        "opacity-0",
                        "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                      )
                    }
                  >
                    Science-Driven
                  </div>
                  <div
                    className={
                      "bg-crystalGreen px-1 w-fit block tablet:hidden mt-1" +
                      getClassNameAnimation(
                        show,
                        500,
                        "opacity-0",
                        "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                      )
                    }
                  >
                    Innovation
                  </div>
                  <div
                    style={{
                      animationDelay: "500ms",
                      transitionDelay: "500ms",
                    }}
                    className={`${getClassNameAnimation(
                      show,
                      500,
                      "opacity-0",
                      "opacity-100 animate-reveal-ltr",
                    )}`}
                  >
                    for Tomorrow&#39;s Therapeutics
                  </div>
                </h2>

                <p
                  className={
                    "mt-[24px] font-medium leading-[125%] mx-[20px] tablet:mx-0" +
                    getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 -translate-y-10",
                      "opacity-100 translate-y-0",
                    )
                  }
                >
                  At Cannex, research is not a department — it&#39;s the
                  foundation of everything we do. We believe that advancing the
                  future of medical cannabis starts with asking the right
                  questions, investing in the right partnerships, and upholding
                  the same scientific rigor demanded of pharmaceutical products.
                </p>

                <p
                  className={
                    "mt-4 font-medium leading-[125%] mx-[20px] tablet:mx-0" +
                    getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 -translate-y-10",
                      "opacity-100 translate-y-0",
                    )
                  }
                >
                  Our R&amp;D ecosystem bridges cutting-edge science from Japan,
                  clinical collaboration in Thailand, and product innovation
                  that meets the regulatory standards of the world&#39;s most
                  demanding medical markets.
                </p>
              </div>

              {/* Image */}
              <div className="w-full tablet:max-w-[597px] h-full">
                <img
                  src="/asset/cannex-42.webp"
                  alt="Image | Cannex"
                  className={
                    "w-full h-full object-cover" +
                    getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 translate-x-10",
                      "opacity-100 translate-x-0",
                    )
                  }
                />
              </div>
            </div>
          </div>
        )}
      </ScrollReveal>

      <ScrollReveal className="relative w-full border border-neutral200" once>
        {(show) => (
          <div
            className={getClassNameAnimation(
              show,
              1500,
              "opacity-0 translate-x-20",
              "opacity-100 translate-x-0",
            )}
          >
            <div className="relative w-full h-[750px] tablet:h-[720px] border-y-[2px]">
              <video
                ref={videoRef}
                src="/asset/rnd.mp4"
                className="absolute inset-0 h-full w-full object-cover"
                poster="/asset/research-development.webp" // fallback image before play
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
          </div>
        )}
      </ScrollReveal>

      <FocusArea />
      <ScientificCollaboration />
      <Partners />
    </main>
  );
}
