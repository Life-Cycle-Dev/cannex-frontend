"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import RightUpIcon from "./icons/RightUpIcon";

export default function WrapUp() {
  return (
    <div className="bg-black text-white px-5 tablet:px-0 flex flex-col tablet:flex-row">
      <div className="pt-16 tablet:py-16 w-full flex flex-col gap-4 tablet:px-20">
        <p className="text-[32px] font-bold leading-[120%]">
          From lab bench to pharmacy shelf, Cannex is building cannabis products
          that are safe, predictable, and backed by science.
        </p>
        <p className="font-medium leading-[125%]">
          We welcome collaborations with researchers, hospitals, and wellness
          innovators around the world.
        </p>
      </div>
      <div className="pt-4 tablet:pt-16 pb-16 tablet:pb-0 w-full flex flex-col tablet:flex-col-reverse gap-4">
        <div className="flex justify-end">
          <div className="aspect-square w-[140px] tablet:w-[175px] shrink-0 relative">
            <Image
              src="/asset/iconic.png"
              alt="iconic"
              className="object-contain w-full h-full"
              width={343}
              height={343}
              quality={90}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 tablet:px-20">
          <p className="text-2xl font-bold leading-[120%]">
            Interested in co-developing your next cannabinoid solution?
          </p>
          <Button
            type="secondaryWhite"
            href="/contact"
            className="w-full tablet:w-fit px-0 cursor-pointer"
            text="Contact Us & Inquiry"
            suffixIcon={<RightUpIcon className="w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
}
