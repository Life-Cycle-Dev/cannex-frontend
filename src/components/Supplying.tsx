"use client";

import React, { useEffect } from "react";
import MapSvg from "./icons/MapSvg";
import CannexSvg from "./icons/CannexSvg";
import AOS from "aos";

export default function Supplying() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white h-fit">
      <div className="w-full p-[48px_20px_80px_20px] tablet:p-[80px_80px_103px_80px] flex flex-col gap-6 tablet:gap-0">
        <div className="w-full flex justify-end">
          <MapSvg className="w-full tablet:w-fit h-fit" />
        </div>
        <div className="w-full tablet:w-[515px] flex flex-col gap-4 tablet:gap-6 tablet:-mt-[62px]">
          <p className="text-[32px] tablet:text-[52px] font-bold leading-[120%] tablet:leading-[110%]">
            Supplying Over 10 Countries Across 3 Continents{" "}
          </p>
          <p className="font-medium leading-[125%]">
            Cannex holds medical cannabis distribution licenses in markets like
            the UK, Germany, Australia, and Japan — delivering compliant
            products at scale, with reliability and integrity.
          </p>
        </div>
      </div>
      <CannexSvg className="w-full" />
    </div>
  );
}
