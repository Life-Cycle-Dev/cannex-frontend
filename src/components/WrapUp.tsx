"use client";

import React, { useEffect } from "react";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";
import Iconic from "./icons/Iconic";
import ScrollReveal from "./animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";
import { useHelperContext } from "./providers/helper-provider";

export default function WrapUp() {
  const { setIsFooterBorder } = useHelperContext()();
  useEffect(() => {
    setIsFooterBorder(false);
    return () => {
      setIsFooterBorder(true);
    };
  }, [setIsFooterBorder]);

  return (
    <ScrollReveal className="relative bg-black text-white px-5 p-[64px_20px] tablet:p-[68px_80px]">
      {(show) => (
        <>
          <div className="flex flex-col tablet:flex-row w-full gap-[172px] tablet:gap-[96px]">
            <div className="flex flex-col tablet:max-w-[624px] gap-4">
              <p
                className={
                  "text-[32px] font-bold leading-[120%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                From lab bench to pharmacy shelf, Cannex is building cannabis
                products that are safe, predictable, and backed by science.
              </p>
              <p
                className={
                  "font-medium leading-[125%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                We welcome collaborations with researchers, hospitals, and
                wellness innovators around the world.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p
                className={
                  "text-2xl font-bold leading-[120%] z-1" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Interested in co-developing <br /> your next cannabinoid
                solution?
              </p>
              <Button
                type="secondaryWhite"
                href="/contact"
                className={
                  "w-full tablet:w-fit px-0 cursor-pointer z-1" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
                text="Contact Us & Inquiry"
                suffixIcon={<RightUpIcon />}
              />
            </div>
          </div>

          <div className="absolute right-0 bottom-[230px] w-[140px] h-[140px] tablet:bottom-0 z-0">
            <Iconic className="w-full h-full mr-[-20px]" show={show} />
          </div>
        </>
      )}
    </ScrollReveal>
  );
}
