/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/legacy/image";
import Button from "@/components/Button";
import About from "@/components/About";
import RightUpIcon from "@/components/icons/RightUpIcon";
import Contact from "@/components/Contact";
import { useHelperContext } from "@/components/providers/helper-provider";
import { useEffect } from "react";
import Supplying from "@/components/Supplying";
import AOS from "aos";
import Products from "@/components/Products";

export default function Home() {
  const { setNavigate } = useHelperContext()();

  useEffect(() => {
    setNavigate("Home");

    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section>
        <div className="relative w-full min-h-[calc(100vh-64px)] text-white flex flex-col justify-between">
          <div className="relative w-full h-[375px] tablet:min-h-[calc(100vh-133px)]">
            <div className="absolute top-0 left-0 z-5 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%)]"></div>
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
          <div className="absolute h-fit z-10 top-[clamp(1rem,268px,calc(100vh-584px))] tablet:top-[10vh] left-5 tablet:left-20 bottom-0">
            <div className="w-full flex flex-col gap-8 tablet:justify-center">
              <div className="text-[46px] tablet:text-7xl font-bold leading-[110%] text-black flex flex-col gap-2">
                <p className="bg-crystalGreen w-fit">Pharmaceutical-</p>
                <p className="tablet:hidden bg-crystalGreen w-fit">-Grade</p>
                <p className="tablet:hidden bg-crystalGreen w-fit">
                  Formulation,
                </p>
                <p className="hidden tablet:block bg-crystalGreen w-fit">
                  Grade Formulation,
                </p>
                <p className="bg-white w-fit">Crafted with</p>
                <p className="hidden tablet:block bg-white w-fit">
                  Clinical Precision.
                </p>
                <p className="tablet:hidden bg-white w-fit">Clinical</p>
                <p className="tablet:hidden bg-white w-fit">Precision.</p>
              </div>
              <p
                data-aos="fade-down"
                className="font-semibold text-black tablet:text-white tablet:w-[425px]"
              >
                From plant to product — Cannex unites American genetics, Thai
                innovation, and Japanese-grade extraction to deliver premium
                medical cannabis, globally.
              </p>

              <div data-aos="fade-right" className="hidden tablet:block">
                <Button
                  href="/products"
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
              href="/products"
              text="Explore our products"
              type="primary"
              className="w-full"
              suffixIcon={<RightUpIcon className="w-4 h-4" />}
            />
          </div>
        </div>
      </section>
      <About />
      <Products />
      <Supplying />
      <Contact />
    </div>
  );
}
