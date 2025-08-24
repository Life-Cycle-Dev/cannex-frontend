"use client";

import React from "react";
import MapSvg from "@/components/icons/MapSvg";
import CannexSvg from "@/components/icons/CannexSvg";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function Supplying() {
  return (
    <div className="bg-black text-white h-fit">
      <div className="w-full p-[48px_20px_80px_20px] tablet:p-[80px_80px_103px_80px] flex flex-col gap-6 tablet:gap-0">
        <ScrollReveal className="w-full flex justify-end" once>
          {(show) => (
            <div
              className={getClassNameAnimation(
                show,
                500,
                "opacity-0 translate-y-20",
                "opacity-100 translate-y-0",
              )}
            >
              <MapSvg className="w-full tablet:w-fit h-fit" />
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal
          className="w-full tablet:w-[515px] flex flex-col gap-4 tablet:gap-6 tablet:-mt-[62px]"
          once
        >
          {(show) => (
            <div
              className={getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0",
              )}
            >
              <p className="text-[32px] tablet:text-[52px] font-bold leading-[120%] tablet:leading-[110%]">
                Supplying Over 10 Countries Across 3 Continents{" "}
              </p>
              <p className="font-medium leading-[125%]">
                Cannex holds medical cannabis distribution licenses in markets
                like the UK, Germany, Australia, and Japan — delivering
                compliant products at scale, with reliability and integrity.
              </p>
            </div>
          )}
        </ScrollReveal>
      </div>

      <ScrollReveal className="w-full" once>
        {(show) => (
          <div
            className={getClassNameAnimation(
              show,
              1500,
              "opacity-0 translate-y-20",
              "opacity-100 translate-y-0",
            )}
          >
            <CannexSvg className="w-full" />
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
