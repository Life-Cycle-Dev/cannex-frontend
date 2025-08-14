"use client";

import Image from "next/image";

export default function PartnershipPage() {
  return (
    <main className="bg-white text-black">
      <section className="w-full grid grid-cols-1 desktop:grid-cols-2 border-b-2 border-black">
        <div className="border-r-2 border-black">
          <div className="max-w-[1200px] px-20 py-16">
            <h1 className="text-4xl tablet:text-5xl desktop:text-6xl font-bold">
              Partnership
            </h1>
          </div>

          <div className="border-t-2 border-black">
            <Image
              src="/partners/Image 2_1.png"
              alt="Cultivation partnership"
              width={1920}
              height={1080}
              priority
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

        <div className="px-6 desktop:px-12 py-8 desktop:py-12 flex flex-col gap-5 justify-center">
          <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold leading-tight">
            <span className="bg-crystalGreen px-1 text-black">Global</span>{" "}
            <span className="bg-crystalGreen px-1 text-black">
              Collaboration
            </span>
            <br />
            <span className="text-black">for Local Impact</span>
          </h2>

          <p className="text-neutral800 text-sm desktop:text-base leading-relaxed">
            Cannex was built on the belief that great things happen when people
            — and nations — collaborate with purpose. From growers and chemists
            to regulators and healthcare providers, our partnerships are the
            reason we can deliver pharmaceutical-grade cannabis at a global
            scale.
          </p>

          <p className="text-neutral800 text-sm desktop:text-base leading-relaxed">
            We don’t just supply products —{" "}
            <span className="font-bold">we build ecosystems</span> for
            sustainable and scalable medical cannabis growth.
          </p>
        </div>
      </section>
    </main>
  );
}
