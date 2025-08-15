import React from "react";

export default function SupportingInformation() {
  return (
    <>
      <div className="px-5 tablet:py-16 tablet:px-20 tablet:border-t-[2px]">
        <div className="py-10 border-t-[2px] tablet:border-none">
          <p className="text-[40px] tablet:text-[52px] font-bold leading-[110%]">
            Supporting Information
          </p>
        </div>
      </div>
      <div className="px-5 tablet:p-0 grid tablet:grid-cols-3">
        <div className="border-t-[2px] flex flex-col">
          <div className="p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%] tablet:border-r-[2px]">
            Cannabinoid Compounds
          </div>
          <div className="flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px] tablet:border-r-[2px]">
            CBD / THC / CBN / CBG / Terpenes / Mitragynine
          </div>
        </div>

        <div className="border-t-[2px] flex flex-col">
          <div className="p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%] tablet:border-r-[2px]">
            Product Formats
          </div>
          <div className="flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px] tablet:border-r-[2px]">
            Oil (Full / Broad / Isolate) / Rosin / Aroma Oil / Crystalline
            Powder / Softgel-ready formats
          </div>
        </div>

        <div className="border-t-[2px] flex flex-col">
          <div className="p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%]">
            Testing & Certification
          </div>
          <div className="flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px]">
            <ul className="list-disc pl-5">
              <li>HPLC (Shimadzu)</li>
              <li>LC-MS/MS (Shimadzu)</li>
              <li>PIC/S GMP</li>
              <li>Thai GACP / EU-GACP (SGS)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
