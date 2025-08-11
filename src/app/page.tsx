"use client";

import Image from "next/image";
import Button from "./components/NavBar/Button";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Image
          src="/hero-section-img.png"
          layout="fill"
          objectFit="cover"
          alt="Hero Background"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Pharmaceutical-</h1>
          <p className="font-semibold">
            From plant to product — Cannex unites American genetics, Thai
            innovation, and Japanese-grade extraction to deliver premium medical
            cannabis, globally.
          </p>
          <Button href="" text="Explore our products" type="secondaryWhite" />
        </div>
      </section>
    </div>
  );
}
