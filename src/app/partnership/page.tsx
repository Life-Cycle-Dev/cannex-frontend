/* eslint-disable @next/next/no-img-element */
"use client";

import KeyAlliances from "@/app/partnership/KeyAlliances";
import OfferAndAudience from "@/app/partnership/OfferAndAudience";
import Certificates from "@/app/partnership/Certificates";
import Supplying from "@/components/homepage/Supplying";
import Partners from "@/components/Partners";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";
import WrapUp2 from "@/components/WrapUp2";

export default function Page() {
  return (
    <div className="overflow-hidden">
      <div
        id="hero-start"
        className="tablet:h-[590px] flex flex-col tablet:flex-row tablet:border-b-2"
      >
        <ScrollReveal className="w-full tablet:w-[55%] justify-between h-full tablet:border-r-2 flex flex-col">
          {(show) => (
            <>
              <div
                className={
                  "w-full h-fit text-[46px] tablet:text-[72px] font-bold p-[32px_20px] tablet:p-[64px_8%]" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                Partnership
              </div>

              <div className="h-[375px] tablet:h-[352px] border-y-2 tablet:border-t-2 tablet:border-y-0 overflow-hidden">
                <img
                  src="/partnership/hero-section.webp"
                  alt="Image | Cannex"
                  className={
                    "w-full h-full object-cover zoom-origin-center" +
                    getClassNameAnimation(
                      show,
                      1000,
                      "zoom-from",
                      "animate-zoom-to-fit",
                    )
                  }
                />
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal className="flex flex-col gap-2 justify-center mx-[20px] pb-[64px] pt-[32px] border-b-2 tablet:w-[45%] tablet:border-b-0 tablet:mx-0 tablet:py-0 tablet:px-[80px]">
          {(show) => (
            <>
              <h2
                className={
                  "text-[40px] tablet:text-[52px] font-bold line-clamp-1 w-fit h-fit leading-[110%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0",
                    "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                  )
                }
              >
                Global
              </h2>
              <h2
                style={{ animationDelay: "500ms", transitionDelay: "500ms" }}
                className={
                  "text-[40px] tablet:text-[52px] font-bold line-clamp-1 w-fit leading-[110%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0",
                    "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                  )
                }
              >
                Collaboration
              </h2>
              <h2
                style={{ animationDelay: "1000ms", transitionDelay: "1000ms" }}
                className={
                  "text-[40px] tablet:text-[52px] font-bold leading-[110%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0",
                    "opacity-100 animate-reveal-ltr",
                  )
                }
              >
                for Local Impact
              </h2>
              <div
                style={{ animationDelay: "1500ms", transitionDelay: "1500ms" }}
                className={`
    text-[16px] my-[16px] line-clamp-5
    transition-all duration-700 ease-out
    motion-reduce:transition-none motion-reduce:transform-none
    ${getClassNameAnimation(
      show,
      500,
      "opacity-0 -translate-y-10",
      "opacity-100 translate-y-0",
    )}
  `}
              >
                Cannex was built on the belief that great things happen when
                people — and nations — collaborate with purpose. From growers
                and chemists to regulators and healthcare providers, our
                partnerships are the reason we can deliver pharmaceutical-grade
                cannabis at a global scale.
              </div>
              <div
                style={{ animationDelay: "1500ms", transitionDelay: "1500ms" }}
                className={`
    text-[16px] line-clamp-2
    transition-all duration-700 ease-out
    motion-reduce:transition-none motion-reduce:transform-none
    ${getClassNameAnimation(
      show,
      500,
      "opacity-0 -translate-y-10",
      "opacity-100 translate-y-0",
    )}
  `}
              >
                We don’t just supply products — we <b>build ecosystems</b> for
                sustainable and scalable medical cannabis growth.
              </div>
            </>
          )}
        </ScrollReveal>
      </div>
      <Partners />
      <KeyAlliances />
      <Certificates />
      <Supplying />
      <OfferAndAudience />
      <WrapUp2 />
    </div>
  );
}
