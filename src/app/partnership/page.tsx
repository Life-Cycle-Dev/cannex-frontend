/* eslint-disable @next/next/no-img-element */
"use client";

import KeyAlliances from "@/app/partnership/KeyAlliances";
import OfferAndAudience from "@/app/partnership/OfferAndAudience";
import Certificates from "@/app/partnership/Certificates";
import Supplying from "@/components/homepage/Supplying";
import Partners from "@/components/Partners";

export default function Page() {
  return (
    <div>
      <div
        id="hero-start"
        className="tablet:h-[590px] flex flex-col tablet:flex-row tablet:border-b-2"
      >
        <div className="w-full tablet:w-[55%] h-full tablet:border-r-2 flex flex-col">
          <div className="w-full h-fit text-[46px] tablet:text-[72px] font-bold p-[32px_20px] tablet:border-b-2 tablet:p-[64px_8%]">
            Partnership
          </div>

          <div className="h-[375px] tablet:h-[352px] border-y-2 tablet:border-y-0">
            <img
              src="/partnership/hero-section.webp"
              alt="Image | Cannex"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 justify-center mx-[20px] pb-[64px] pt-[32px] border-b-2 tablet:w-[45%] tablet:border-b-0 tablet:mx-0 tablet:py-0 tablet:px-[80px]">
          <div className="text-[52px] font-bold line-clamp-1 bg-crystalGreen w-fit h-fit leading-[110%]">
            Global
          </div>
          <div className="text-[52px] font-bold line-clamp-1 bg-crystalGreen w-fit leading-[110%]">
            Collaboration
          </div>
          <div className="text-[52px] font-bold line-clamp-1">
            for Local Impact
          </div>

          <div
            className={`
    text-[16px] my-[16px] line-clamp-5
    transition-all duration-700 ease-out
    motion-reduce:transition-none motion-reduce:transform-none
  `}
          >
            Cannex was built on the belief that great things happen when people
            — and nations — collaborate with purpose. From growers and chemists
            to regulators and healthcare providers, our partnerships are the
            reason we can deliver pharmaceutical-grade cannabis at a global
            scale.
          </div>

          <div
            className={`
    text-[16px] line-clamp-2
    transition-all duration-700 ease-out
    motion-reduce:transition-none motion-reduce:transform-none
  `}
          >
            We don’t just supply products — we build ecosystems for sustainable
            and scalable medical cannabis growth.
          </div>
        </div>
      </div>
      <Partners />
      <KeyAlliances />
      <Certificates />
      <Supplying />
      <OfferAndAudience />
    </div>
  );
}
