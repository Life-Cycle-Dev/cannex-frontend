import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      <div className="pt-8 px-5 desktop:pl-20 desktop:pt-[96px] w-full flex flex-col tablet:flex-row-reverse">
        <div className="w-full flex justify-end tablet:-mt-8">
          <div className="aspect-square w-[150px] tablet:w-[343px] shrink-0">
            <Image
              src="/iconic.png"
              alt="iconic"
              className=""
              width={343}
              height={343}
            />
          </div>
        </div>
        <div className="w-full max-w-[629px] flex flex-col gap-6">
          <div className="flex flex-col gap-2 tablet:gap-6">
            <div className="flex flex-col gap-4">
              <div className="py-0.5 px-2 bg-black text-white w-fit">
                Brand Introduction
              </div>
              <p className="text-[32px] tablet:text-[52px] font-bold">
                Where Expertise Meets Collaboration.
              </p>
            </div>
            <p>
              <span className="font-medium">
                Cannex was born from a global alliance between Cannex Pharma and
                Siam Agri-Bio — combining world-class cultivation and extraction
                expertise. From California-bred strains to Japan-compliant CBD
                refinement,
              </span>
              <span className="font-semibold">
                we cover every step with clinical precision.
              </span>
            </p>
          </div>
          <Button
            text="Learn about cannex"
            type="secondaryBlack"
            width="w-full tablet:w-fit"
          />
        </div>
      </div>

      <div className="mt-8 tablet:mt-7">
        <div className="mt-7 w-full relative hidden desktop:block">
          <Image
            src="/product-horizontal.png"
            alt="product"
            className="w-full h-full object-cover"
            width={343}
            height={343}
          />
        </div>
        <div className="absolute right-0 desktop:hidden">
          <Image
            src="/product-vertical.png"
            alt="product"
            className="w-full h-full object-cover"
            width={343}
            height={343}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between items-end">
        {/* <div className="pl-20 w-[830px] flex flex-col gap-6">
          <div className="h-[51px] desktop:h-20">
            <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-crystalGreen w-fit">
              Pharmaceutical-Grade Products
            </h1>
          </div>
          <div className="h-[51px] desktop:h-20">
            <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-white w-fit">
              Designed for Global Markets.
            </h1>
          </div>
          <p className="font-medium">
            From full-spectrum flower to zero-THC CBD isolate, Cannex delivers
            reliable formulations tailored for pharmacies, healthcare providers,
            and wellness innovators.
          </p>
        </div> */}
        {/* <Button type="secondaryBlack" text="Explore our products" /> */}
      </div>
    </div>
  );
}
