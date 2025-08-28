import React from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";
import Iconic from "../icons/Iconic";
import ProductIconic from "../ProductIconic";
import ProductIconicMobile from "../ProductIconicMobile";

export default function About() {
  return (
    <div className="w-full">
      <div className="px-5 w-full flex flex-col z-10 tablet:pl-20 tablet:pt-[64px] tablet:flex-row-reverse">
        <ScrollReveal className="w-full tablet:-mt-8 flex justify-end table:justify-center" once>
          {(show) => (
            <div className="mt-[32px] w-[150px] h-[150px] flex justify-end table:justify-center tablet:w-full tablet:h-[343px] tablet:mt-0 tablet:aspect-square">
              <Iconic show={show} className="w-full h-full " />
            </div>
          )}
        </ScrollReveal>

        <div className="w-full max-w-[629px] flex flex-col gap-6">
          <ScrollReveal once>
            {(show) => (
              <div className={`flex flex-col gap-2 tablet:gap-6`}>
                <div className="flex flex-col gap-4">
                  <h2
                    className={`py-0.5 px-2 bg-black text-white w-fit ${getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 -translate-y-10",
                      "opacity-100 translate-y-0",
                    )}`}
                  >
                    Brand Introduction
                  </h2>
                  <h2
                    className={`text-[32px] tablet:text-[52px] font-bold ${getClassNameAnimation(
                      show,
                      500,
                      "opacity-0 -translate-x-10",
                      "opacity-100 translate-x-0",
                    )}`}
                  >
                    Where Expertise Meets Collaboration.
                  </h2>
                </div>
                <div
                  className={`${getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 translate-y-10",
                    "opacity-100 translate-y-0",
                  )}`}
                >
                  <p className="font-medium">
                    Cannex was born from a global alliance between Cannex Pharma
                    and Siam Agri-Bio — combining world-class cultivation and
                    extraction expertise. From California-bred strains to
                    Japan-compliant CBD refinement,<br/>
                  </p>
                  <p className="font-semibold">
                    we cover every step with clinical precision.
                  </p>
                </div>
              </div>
            )}
          </ScrollReveal>

          <ScrollReveal once>
            {(show) => (
              <div
                className={getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 translate-y-10",
                  "opacity-100 translate-y-0",
                )}
              >
                <Button
                  text="Learn about cannex"
                  type="secondaryBlack"
                  href="/about-us"
                  className="w-full tablet:w-fit"
                  suffixIcon={<RightUpIcon />}
                />
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>

      <div className="pb-[107px] relative">
        <div className={`mt-8 tablet:mt-7`}>
          <ScrollReveal once>
            {(show) => (
              <>
                <div className={`mt-7 h-[526px] hidden tablet:block w-full`}>
                  <ProductIconic show={show} />
                </div>
                <div
                  className={`tablet:hidden ${getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-x-20",
                    "opacity-100 translate-x-0",
                  )}`}
                >
                  <ProductIconicMobile show={show} />
                </div>
              </>
            )}
          </ScrollReveal>
          <ScrollReveal once>
            {(show) => (
              <div
                className={`absolute tablet:static z-10 bottom-15 left-5 tablet:mt-12 tablet:px-20 ${getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-20",
                  "opacity-100 translate-x-0",
                )}`}
              >
                <div className="w-[247px] tablet:w-full flex flex-col gap-6 tablet:flex-row tablet:items-end tablet:justify-between">
                  <div className="w-[247px] tablet:w-[830px] flex flex-col gap-2 tablet:gap-6">
                    <div>
                      {/* Modbile */}
                      <p
                        className={
                          "my-1 w-fit tablet:!hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-crystalGreen" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr",
                          )
                        }
                      >
                        Pharmaceutical-
                      </p>
                      <p
                        className={
                          "my-1 w-fit tablet:!hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-crystalGreen" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr",
                          )
                        }
                      >
                        Grade Products
                      </p>
                      <p
                        className={
                          "my-1 w-fit tablet:!hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr",
                          )
                        }
                      >
                        Designed for
                      </p>
                      <p
                        className={
                          "my-1 w-fit tablet:!hidden text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr",
                          )
                        }
                      >
                        Global Markets.
                      </p>

                      {/* Tablet */}
                      <p
                        className={
                          "!hidden tablet:!block w-fit text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black reveal-ltr" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                          )
                        }
                      >
                        Pharmaceutical-Grade Products
                      </p>
                      <p
                        style={{
                          animationDelay: "500ms",
                          transitionDelay: "500ms",
                        }}
                        className={
                          "!hidden tablet:!block w-fit text-[32px] leading-[120%] tablet:text-[52px] font-bold text-black bg-white reveal-ltr" +
                          getClassNameAnimation(
                            show,
                            500,
                            "opacity-0",
                            "opacity-100 animate-reveal-ltr",
                          )
                        }
                      >
                        Designed for Global Markets.
                      </p>
                    </div>
                    <p
                      style={{
                        animationDelay: "1000ms",
                        transitionDelay: "1000ms",
                      }}
                      className={
                        "font-medium" +
                        getClassNameAnimation(
                          show,
                          1000,
                          "opacity-0 -translate-y-5",
                          "opacity-100 translate-y-0",
                        )
                      }
                    >
                      From full-spectrum flower to zero-THC CBD isolate, Cannex
                      delivers reliable formulations tailored for pharmacies,
                      healthcare providers, and wellness innovators.
                    </p>
                  </div>
                  <div
                    style={{
                      animationDelay: "1000ms",
                      transitionDelay: "1000ms",
                    }}
                    className={
                      "font-medium" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-y-5",
                        "opacity-100 translate-y-0",
                      )
                    }
                  >
                    <Button
                      href="/products"
                      text="Explore our products"
                      type="secondaryBlack"
                      className="w-fit shrink-0"
                      suffixIcon={<RightUpIcon />}
                    />
                  </div>
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
