/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Button from "@/components/Button";

import RightUpIcon from "@/components/icons/RightUpIcon";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      <div className="pt-8 px-5 tablet:pl-20 tablet:pt-[96px] w-full flex flex-col tablet:flex-row-reverse">
        <div className="w-full flex justify-end tablet:-mt-8">
          <div className="aspect-square w-[150px] tablet:w-[343px] shrink-0 relative">
            <img
              src="/asset/iconic.png"
              alt="Image | Cannex"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="w-full max-w-[629px] flex flex-col gap-6">
          <div className="flex flex-col gap-2 tablet:gap-6">
            <div className="flex flex-col gap-4">
              <h2
                data-aos="fade-right"
                className="py-0.5 px-2 bg-black text-white w-fit"
              >
                Brand Introduction
              </h2>
              <p
                data-aos="fade-down"
                className="text-[32px] tablet:text-[52px] font-bold"
              >
                Where Expertise Meets Collaboration.
              </p>
            </div>
            <p data-aos="fade-up">
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
          <div data-aos="fade-up">
            <Button
              text="Learn about cannex"
              type="secondaryBlack"
              href="/about-us"
              className="w-full tablet:w-fit"
              suffixIcon={<RightUpIcon />}
            />
          </div>
        </div>
      </div>

      <div className="pb-[107px] relative">
        <div className="mt-8 tablet:mt-7">
          <div className="mt-7 hidden tablet:block w-full">
            <img
              src="/asset/product-horizontal.png"
              alt="Image | Cannex"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="tablet:hidden">
            <img
              src="/asset/product-vertical.png"
              alt="Image | Cannex"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="absolute tablet:static z-10 bottom-15 left-5 tablet:mt-12 tablet:px-20">
            <div className="w-[247px] tablet:w-full flex flex-col gap-6 tablet:flex-row tablet:items-end tablet:justify-between">
              <div className="w-[247px] tablet:w-[830px] flex flex-col gap-2 tablet:gap-6">
                <div>
                  {/* Modbile */}
                  <p className="my-1 w-fit tablet:hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-crystalGreen">
                    Pharmaceutical-
                  </p>
                  <p className="my-1 w-fit tablet:hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-crystalGreen">
                    Grade Products
                  </p>
                  <p className="my-1 w-fit tablet:hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white">
                    Designed for
                  </p>
                  <p className="my-1 w-fit tablet:hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white">
                    Global Markets.
                  </p>
                  {/* Tablet */}
                  <p className="hidden tablet:block w-fit text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-crystalGreen">
                    Pharmaceutical-Grade Products
                  </p>
                  <p className="hidden tablet:block w-fit text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white">
                    Designed for Global Markets.
                  </p>
                </div>

                <p className="font-medium">
                  From full-spectrum flower to zero-THC CBD isolate, Cannex
                  delivers reliable formulations tailored for pharmacies,
                  healthcare providers, and wellness innovators.
                </p>
              </div>
              <Button
                type="secondaryBlack"
                text="Explore our products"
                href="/products"
                className="w-full tablet:w-fit shrink-0"
                suffixIcon={<RightUpIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
