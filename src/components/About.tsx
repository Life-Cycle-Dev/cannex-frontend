import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full">
      <div className="w-full flex gap-[208px]">
        <div className="pt-[96px] pl-20 w-[629px] shrink-0 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="py-0.5 px-2 bg-black text-white w-fit">
              Brand Introduction
            </div>
            <p className="text-[52px] font-bold">
              Where Expertise Meets Collaboration.
            </p>
          </div>
          <p>
            Cannex was born from a global alliance between Cannex Pharma and
            Siam Agri-Bio — combining world-class cultivation and extraction
            expertise. From California-bred strains to Japan-compliant CBD
            refinement, we cover every step with clinical precision.
          </p>
          <Button text="Learn about cannex" type="secondaryBlack" />
        </div>
        <div className="w-full pt-16">
          <Image
            src="/iconic.png"
            alt="iconic"
            className=""
            width={343}
            height={343}
          />
        </div>
      </div>

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
      <div className="flex flex-col justify-between items-end">
        <div className="pl-20 w-[830px] flex flex-col gap-6">
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
        </div>
        <Button type="secondaryBlack" text="Explore our products" />
      </div>
    </div>
  );
}
