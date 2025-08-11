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
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold">Pharmaceutical-</h1>

          <Button href="" text="eiei"></Button>
        </div>
      </section>
    </div>
  );
}
