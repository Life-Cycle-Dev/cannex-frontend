"use client";
import React from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import ScrollReveal from "../animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function RnD() {
  return (
    <ScrollReveal className="flex flex-col tablet:flex-row">
      {(show) => (
        <>
          <div
            className={`w-full max-w-3xl border-b-[2px] tablet:border-b-0 tablet:border-r-[2px] ${getClassNameAnimation(
              show,
              1000,
              "opacity-0 -translate-x-10",
              "opacity-100 translate-x-0",
            )}`}
          >
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay={false}
              muted
              loop
            >
              <source src="/asset/rnd.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div
            className={`p-[32px_20px_64px_20px] tablet:p-16 w-full max-w-[403px] flex flex-col gap-6`}
          >
            <div className="flex flex-col gap-4">
              <p
                className={`font-medium bg-black text-white leading-[125%] w-fit py-0.5 px-2 ${getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )}`}
              >
                Scientific & Clinical R&D
              </p>
              <p
                className={`text-[40px] tablet:text-[52px] font-bold leading-[110%] ${getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-10",
                  "opacity-100 translate-x-0",
                )}`}
              >
                Backed by Science. Driven by Compliance.
              </p>
            </div>
            <p
              className={`font-medium leading-[125%] ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 translate-y-10",
                "opacity-100 translate-y-0",
              )}`}
            >
              With proprietary extraction technology from Europe and Japan, our
              R&D ensures every batch is consistent, compliant, and safe —
              including {"<"}
              10ppm THC extraction, chromatography separation, and EU-GMP
              quality control.
            </p>
            <Button
              href="/research-and-development"
              text="Research & Development"
              type="secondaryBlack"
              className={`w-full tablet:w-fit ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 translate-y-10",
                "opacity-100 translate-y-0",
              )}`}
              suffixIcon={<RightUpIcon />}
            />
          </div>
        </>
      )}
    </ScrollReveal>
  );
}
