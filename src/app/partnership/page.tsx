import Image from "next/image";
import KeyAlliances from "@/app/partnership/KeyAlliances";

export default function Page() {
  return (
    <div>
      <div className="tablet:h-[590px] flex flex-col tablet:flex-row">
        <div className="w-full tablet:w-[55%] h-full tablet:border-r-2 flex flex-col">
          <div className="w-full h-fit text-[46px] tablet:text-[72px] font-bold p-[32px_20px] tablet:border-b-2 tablet:p-[64px_8%]">
            Partnership
          </div>
          <div className="h-[375px] tablet:h-[352px] border-y-2 tablet:border-y-0">
            <Image
              src="/partnership/hero-section.jpg"
              alt="hero-section"
              className="w-full h-full object-cover"
              width={864}
              height={424}
              quality={100}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center mx-[20px] pb-[64px] pt-[32px] border-b-2 tablet:w-[45%] tablet:border-b-0 tablet:mx-0 tablet:py-0 tablet:px-[80px]">
          <div className="text-[52px] font-bold line-clamp-1 bg-crystalGreen w-fit h-fit leading-[110%]">
            Global
          </div>
          <div className="text-[52px] font-bold line-clamp-1 bg-crystalGreen w-fit leading-[110%]">
            Collaboration
          </div>
          <div className="text-[52px] font-bold line-clamp-1">
            for Local Impact
          </div>
          <div className="text-[16px] my-[16px] line-clamp-5">
            Cannex was built on the belief that great things happen when people
            — and nations — collaborate with purpose. From growers and chemists
            to regulators and healthcare providers, our partnerships are the
            reason we can deliver pharmaceutical-grade cannabis at a global
            scale.
          </div>
          <div className="text-[16px] line-clamp-2">
            We don’t just supply products — we build ecosystems for sustainable
            and scalable medical cannabis growth.
          </div>
        </div>
      </div>

      <div className="mx-[20px]">
        <div className="text-[24px] py-[32px] font-bold border-b-2">
          Market Analysis and Planning
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center h-[167px]">
            <Image
              src="/partnership/icon/market-1.png"
              alt="market-1.png"
              className="w-fit h-fit"
              width={135}
              height={51}
            />
          </div>
          <div className="flex justify-center items-center h-[167px]">
            <Image
              src="/partnership/icon/market-2.png"
              alt="market-1.png"
              className="w-fit h-fit"
              width={135}
              height={51}
            />
          </div>
          <div className="flex justify-center items-center h-[167px]">
            <Image
              src="/partnership/icon/market-3.png"
              alt="market-1.png"
              className="w-fit h-fit"
              width={135}
              height={51}
            />
          </div>
          <div className="flex justify-center items-center h-[167px]"></div>
        </div>
      </div>
      <KeyAlliances />
    </div>
  );
}
