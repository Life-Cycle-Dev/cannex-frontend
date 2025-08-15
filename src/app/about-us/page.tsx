"use client";

import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="w-full h-[961px]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(135deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_100%)]"></div>
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(175deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
          <Image
            src={"/about-us/about-us-hero-section.jpg"}
            alt="about-us-hero-section"
            className="absolute z-0 top-0 left-0 w-full h-full object-cover object-top"
            width={1440}
            height={961}
          />
          <Image
            src={"/about-us/about-us-hero-section-no-bg.png"}
            alt="about-us-hero-section"
            className="absolute z-2 top-0 left-0 w-full h-full object-cover object-top"
            width={1440}
            height={961}
          />
          <div className="absolute inset-0 z-1 flex flex-col justify-start items-center text-white font-bold">
            <div>
              <div className="text-[46px] tablet:text-[72px] pt-[92px] tablet:pt-[32px]">
                About
              </div>
              <div className="text-[26vw] leading-[40%]">cannex</div>
            </div>
          </div>

          <div className="absolute z-4 left-[7vw] bottom-[-140px] tablet:bottom-[30px] flex-col justify-start items-start text-black">
            <div className="flex flex-col gap-3">
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-crystalGreen hidden tablet:block">
                Pharmaceutical-
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-crystalGreen hidden tablet:block">
                Grade Formulation,
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-crystalGreen block tablet:hidden">
                Pharmaceutical
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-crystalGreen block tablet:hidden">
                -Grade
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-crystalGreen block tablet:hidden">
                Formulation,
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-white">
                Crafted with
              </div>
              <div className="text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] bg-white">
                Clinical Precision.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[200px] w-full tablet:hidden"></div>

      <div className="mx-[20px] py-[64px] tablet:p-[80px] grid grid-cols-1 border-t-2 tablet:grid-cols-2">
        <div className="text-[40px] tablet:text-[52px] font-bold">
          Reimagining Medical Cannabis with Science and Purpose
        </div>
        <div className="tablet:p-[15px_20px]">
          <div className="mt-[16px] tablet:mt-0">
            Medical cannabis is undergoing a global transformation — from an
            alternative remedy to a credible therapeutic solution. With growing
            acceptance among physicians, patients, and regulators, the demand
            for cannabis products that meet{" "}
            <b>pharmaceutical-grade standards</b> has never been higher
          </div>
          <div className="mt-[20px]">
            At Cannex, we believe that{" "}
            <b>
              medical cannabis formulations deserve the same level of precision,
              quality control, and scientific discipline
            </b>
            as any pharmaceutical product. It&apos;s not just about being
            natural — it&apos;s about being <b>scientifically precise.</b>
          </div>
        </div>
      </div>
    </div>
  );
}
