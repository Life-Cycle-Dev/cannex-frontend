"use client";
import PartnersMatrix from "@/app/research-and-development/PartnersMatrix";
import KeyAlliances from "@/app/partnership/KeyAlliances";
import OfferAndAudience from "@/app/partnership/OfferAndAudience";
import Image from "next/image";

export default function PartnershipPage() {
  return (
    <>
      <main className="bg-white text-black">
        <section className="w-full grid grid-cols-1 desktop:grid-cols-2 border-2 border-black">
          <div className="border-r-2 border-black">
            {/* หัวข้อ */}
            <div className="max-w-[1200px] px-5 tablet:px-20 py-8 tablet:py-16">
              <h1 className="text-4xl tablet:text-5xl desktop:text-6xl font-bold">
                Partnership
              </h1>
            </div>

            {/* รูปภาพ */}
            <div className="border-t-2 border-black tablet:px-0  tablet:pt-0">
              {/* Mobile image */}
              <Image
                src="/partners/partnership-mobile.png"
                alt="Cultivation partnership mobile"
                width={1920}
                height={1080}
                priority
                className="object-contain w-full h-auto tablet:hidden"
              />

              {/* Tablet+ image */}
              <Image
                src="/partners/Image 2_1.png"
                alt="Cultivation partnership"
                width={1920}
                height={1080}
                priority
                className="object-contain w-full h-auto hidden tablet:block"
              />
            </div>
          </div>

          <div className="pt-[96px] pb-[64px] px-[20px] tablet:px-[80px] flex flex-col gap-6 justify-center">
            <h2 className="font-extrabold tracking-tight text-[44px] tablet:text-[56px] desktop:text-[64px] leading-[0.95]">
              <span className="inline-block align-top -mx-[2px] px-[2px] bg-crystalGreen text-black">
                Global
              </span>
              <br />
              <span className="inline-block align-top -mx-[2px] px-[2px] bg-crystalGreen text-black">
                Collaboration
              </span>
              <br />
              <span className="inline-block align-top text-black">
                for Local Impact
              </span>
            </h2>

            <p className="text-neutral1000 text-[15px] desktop:text-base leading-relaxed">
              Cannex was built on the belief that great things happen when
              people — and nations — collaborate with purpose. From growers and
              chemists to regulators and healthcare providers, our partnerships
              are the reason we can deliver pharmaceutical-grade cannabis at a
              global scale.
            </p>

            <p className="text-neutral1000 text-[15px] desktop:text-base leading-relaxed">
              We don’t just supply products —{" "}
              <span className="font-bold">we build ecosystems</span> for
              sustainable and scalable medical cannabis growth.
            </p>
          </div>
        </section>
      </main>
      <PartnersMatrix />
      <KeyAlliances />
      <OfferAndAudience />
    </>
  );
}
