/* eslint-disable @next/next/no-img-element */

import React from "react";
import ScrollReveal from "./animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function Partners() {
  return (
    <div>
      <div className="hidden tablet:block">
        {/* Desktop */}
        <ScrollReveal className="grid grid-cols-[3fr_2fr] border-b-2">
          {(show) => (
            <>
              <div
                className={
                  "text-[24px] p-[40px_80px] font-bold border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                Market Analysis <br />
                and Planning
              </div>
              <div
                className={
                  "text-[24px] p-[40px_80px] font-bold" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0",
                  )
                }
              >
                Variety Improvement <br />
                and Cultivation
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-5">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-2.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/variety-1.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/variety-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] p-[40px_80px] font-bold border-y-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Technology and <br />
              Engineering
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-5">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-4.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-5.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] p-[40px_80px] font-bold border-y-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Analysis, Testing <br />
              and Clinical Trials
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-5">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-4.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[140px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-5.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>
      </div>

      {/* Mobile */}
      <div className="mx-[20px] w-[calc(100vw-40px)] block tablet:hidden">
        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] py-[32px] font-bold border-b-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Market Analysis <br/> and Planning
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-2">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2 border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-2.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/market-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              ></div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] py-[32px] font-bold border-y-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Variety Improvement <br/> and Cultivation
            </div>
          )}
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/variety-1.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/variety-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] py-[32px] font-bold border-y-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Technology <br/>and Engineering
            </div>
          )}
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2 border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2 border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-4.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/technology-and-engineering-5.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>

        <ScrollReveal>
          {(show) => (
            <div
              className={
                "text-[24px] py-[32px] font-bold border-y-2" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              Analysis, Testing <br/>and Clinical Trials
            </div>
          )}
        </ScrollReveal>
        <ScrollReveal className="grid grid-cols-2">
          {(show) => (
            <>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2 border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-1.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-2.webp"
                  alt="Image | Cannex"
                  className="h-[80%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2 border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-3.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-b-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-4.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
              <div
                className={
                  "flex justify-center items-center h-[167px] border-r-2" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )
                }
              >
                <img
                  src="/partnership/icon/analysis-5.webp"
                  alt="Image | Cannex"
                  className="w-[60%]"
                />
              </div>
            </>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
