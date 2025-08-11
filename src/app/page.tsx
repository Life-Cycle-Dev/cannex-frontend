"use client";

import Image from "next/image";
import Button from "@/components/Button";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Image
          src="/hero-section-img.png"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col gap-8 left-5 desktop:left-20 top-12">
          <div>
            <div className="h-[51px] desktop:h-20">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-crystalGreen w-fit">
                Pharmaceutical-
              </h1>
            </div>
            <div className="h-[51px] desktop:h-20">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-crystalGreen w-fit">
                -Grade
              </h1>
            </div>
            <div className="h-[51px] desktop:h-20">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-crystalGreen w-fit">
                Formulation,
              </h1>
            </div>
            <div className="h-[51px] desktop:h-20">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-white w-fit">
                Crafted with
              </h1>
            </div>
            <div className="hidden desktop:block desktop:h-20">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-white w-fit">
                Clinical Precision.
              </h1>
            </div>
            <div className="h-[51px] desktop:hidden">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-white w-fit">
                Clinical
              </h1>
            </div>
            <div className="h-[51px] desktop:hidden">
              <h1 className="text-5xl desktop:text-7xl font-bold text-black bg-white w-fit">
                Precision.
              </h1>
            </div>
          </div>
          <p className="font-semibold">
            From plant to product — Cannex unites American genetics, Thai
            innovation, and Japanese-grade extraction to deliver premium medical
            cannabis, globally.
          </p>
          <Button href="" text="Explore our products" type="secondaryWhite" />
        </div>
      </section>
      <About />
    </div>
  );
}
