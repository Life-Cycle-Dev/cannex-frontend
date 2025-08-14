/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/legacy/image";
import Button from "@/components/Button";
import About from "@/components/About";
import ProductsGrid from "@/components/ProductsGrid";
import RightUpIcon from "@/components/icons/RightUpIcon";
import Contact from "@/components/Contact";
import { useHelperContext } from "@/components/providers/helper-provider";
import { useEffect } from "react";

export default function Home() {
  const { setNavigate } = useHelperContext()();

  useEffect(() => {
    setNavigate("Home");
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>
        <div className="relative w-full min-h-[calc(100vh-64px)] text-white flex flex-col justify-between">
          <div className="relative w-full h-[375px] tablet:min-h-[calc(100vh-133px)]">
            <Image
              src="/hero-section-img.png"
              alt="Hero Background"
              layout="fill"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              quality={100}
            />
          </div>
          {/* left-5 tablet:left-20 top-[268px] tablet:top-12 */}
          <div className="absolute z-10 h-full w-full flex flex-col gap-8 pt-[268px] tablet:pt-0 pl-5 tablet:pl-20 tablet:justify-center">
            <div className="text-[46px] tablet:text-7xl font-bold leading-[110%] text-black flex flex-col gap-2">
              <h1 className="bg-crystalGreen w-fit">Pharmaceutical-</h1>
              <h1 className="bg-crystalGreen w-fit">-Grade</h1>
              <h1 className="bg-crystalGreen w-fit">Formulation,</h1>
              <h1 className="bg-white w-fit">Crafted with</h1>
              <h1 className="hidden tablet:block bg-white w-fit">
                Clinical Precision.
              </h1>
              <h1 className="tablet:hidden bg-white w-fit">Clinical</h1>
              <h1 className="tablet:hidden bg-white w-fit">Precision.</h1>
            </div>
            <p className="font-semibold text-black tablet:text-white tablet:w-[425px]">
              From plant to product — Cannex unites American genetics, Thai
              innovation, and Japanese-grade extraction to deliver premium
              medical cannabis, globally.
            </p>

            <div className="hidden tablet:block">
              <Button
                href=""
                text="Explore our products"
                type="secondaryWhite"
                className="w-fit"
                suffixIcon={<RightUpIcon className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>
        <div className="tablet:hidden">
          <Button
            href=""
            text="Explore our products"
            type="primary"
            className="w-full"
            suffixIcon={<RightUpIcon className="w-4 h-4" />}
          />
        </div>
      </section>
      <About />
      <ProductsGrid />
      <Contact />
    </div>
  );
}
