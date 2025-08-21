/* eslint-disable @next/next/no-img-element */

import React from "react";

export default function Partners() {
  return (
    <div>
      <div className="hidden tablet:block">
        {/* Desktop */}
        <div className="grid grid-cols-[3fr_2fr] border-b-2">
          <div className="text-[24px] p-[40px_80px] font-bold border-r-2">
            Market Analysis <br />
            and Planning
          </div>
          <div className="text-[24px] p-[40px_80px] font-bold">
            Variety Improvement <br />
            and Cultivation
          </div>
        </div>

        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/market-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/market-2.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/market-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/variety-1.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px]">
            <img
              src="/partnership/icon/variety-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
        </div>

        <div className="text-[24px] p-[40px_80px] font-bold border-y-2">
          Technology and <br />
          Engineering
        </div>
        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-4.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px]">
            <img
              src="/partnership/icon/technology-and-engineering-5.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
        </div>

        <div className="text-[24px] p-[40px_80px] font-bold border-y-2">
          Analysis, Testing <br />
          and Clinical Trials
        </div>
        <div className="grid grid-cols-5">
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/analysis-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/analysis-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/analysis-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px] border-r-2">
            <img
              src="/partnership/icon/analysis-4.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[140px]">
            <img
              src="/partnership/icon/analysis-5.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mx-[20px] w-[calc(100vw-40px)] block tablet:hidden">
        <div className="text-[24px] py-[32px] font-bold border-b-2">
          Market Analysis and Planning
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center h-[167px] border-r-2 border-b-2">
            <img
              src="/partnership/icon/market-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2">
            <img
              src="/partnership/icon/market-2.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-r-2">
            <img
              src="/partnership/icon/market-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px]"></div>
        </div>

        <div className="text-[24px] py-[32px] font-bold border-y-2">
          Variety Improvement and Cultivation
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center h-[167px] border-r-2">
            <img
              src="/partnership/icon/variety-1.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px]">
            <img
              src="/partnership/icon/variety-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
        </div>

        <div className="text-[24px] py-[32px] font-bold border-y-2">
          Technology and Engineering
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center h-[167px] border-r-2 border-b-2">
            <img
              src="/partnership/icon/technology-and-engineering-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2">
            <img
              src="/partnership/icon/technology-and-engineering-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2 border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2">
            <img
              src="/partnership/icon/technology-and-engineering-4.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-r-2">
            <img
              src="/partnership/icon/technology-and-engineering-5.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
        </div>

        <div className="text-[24px] py-[32px] font-bold border-y-2">
          Analysis, Testing and Clinical Trials
        </div>
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center h-[167px] border-r-2 border-b-2">
            <img
              src="/partnership/icon/analysis-1.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2">
            <img
              src="/partnership/icon/analysis-2.png"
              alt="Image | Cannex"
              className="h-[80%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2 border-r-2">
            <img
              src="/partnership/icon/analysis-3.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-b-2">
            <img
              src="/partnership/icon/analysis-4.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
          <div className="flex justify-center items-center h-[167px] border-r-2">
            <img
              src="/partnership/icon/analysis-5.png"
              alt="Image | Cannex"
              className="w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
