import React from "react";
import ScrollReveal from "./animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function SupportingInformation() {
  return (
    <ScrollReveal>
      {(show) => (
        <>
          <div className="px-5 tablet:py-16 tablet:px-20 tablet:border-t-[2px]">
            <div className="py-10 tablet:py-0 border-t-[2px] tablet:border-none">
              <p
                className={
                  "text-[40px] tablet:text-[52px] font-bold leading-[110%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                Supporting Information
              </p>
            </div>
          </div>
          <div className="px-5 tablet:p-0 grid tablet:grid-cols-3">
            <div className="border-t-[2px] flex flex-col">
              <div
                className={
                  "p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%] tablet:border-r-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Cannabinoid Compounds
              </div>
              <div
                className={
                  "tablet:h-[108px] hidden tablet:block flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px] tablet:border-r-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                CBD / THC / CBN / CBG / Terpenes / Mitragynine
              </div>
              <div
                className={
                  "tablet:h-[108px] tablet:hidden flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px] tablet:border-r-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Our cultivation, extraction, and packaging processes meet or
                exceed pharmaceutical standards — including GACP, PIC/S GMP, and
                EU-GMP guidelines (in progress).
              </div>
            </div>

            <div className="border-t-[2px] flex flex-col">
              <div
                className={
                  "tablet:h-[108px] p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%] tablet:border-r-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Product<br className="hidden tablet:block" /> Formats
              </div>
              <div
                className={
                  "flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px] tablet:border-r-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Oil (Full / Broad / Isolate) / Rosin / Aroma Oil / Crystalline
                Powder / Softgel-ready formats
              </div>
            </div>

            <div className="border-t-[2px] flex flex-col">
              <div
                className={
                  "tablet:h-[108px] p-6 tablet:px-20 tablet:py-4 text-2xl tablet:text-[32px] font-bold leading-[120%]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                Testing & Certification
              </div>
              <div
                className={
                  "flex-1 text-[20px] font-medium leading-[125%] p-6 tablet:px-20 tablet:py-8 border-t-[2px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <ul
                  className={
                    "list-disc pl-5" +
                    getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 -translate-x-10",
                      "opacity-100 translate-x-0",
                    )
                  }
                >
                  <li>HPLC (Shimadzu)</li>
                  <li>LC-MS/MS (Shimadzu)</li>
                  <li>PIC/S GMP</li>
                  <li>Thai GACP / EU-GACP (SGS)</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </ScrollReveal>
  );
}
