/* eslint-disable @next/next/no-img-element */
"use client";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ConsistencyIcon from "@/components/icons/partnership/ConsistencyIcon";
import EfficacyIcon from "@/components/icons/partnership/EfficacyIcon";
import SafetyIcon from "@/components/icons/partnership/SafetyIcon";
import QuoteBottomIcon from "@/components/icons/QuoteBottomIcon";
import QuoteTopIcon from "@/components/icons/QuoteTopIcon";
import ResolveMap from "@/components/map/ResolveMap";
import { getClassNameAnimation } from "@/utils/animation-helper";

export default function Page() {
  return (
    <div>
      <div className="w-full h-[499px] tablet:h-[961px]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_50%)]"></div>
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(135deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.5)_100%)]"></div>
          <div className="absolute top-0 left-0 z-1 w-full h-full bg-[linear-gradient(175deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]"></div>
          <img
            src={"/about-us/about-us-hero-section.webp"}
            alt="Image | Cannex"
            className="absolute z-0 top-0 left-0 w-full h-full object-cover object-top"
          />
          <img
            src={"/about-us/about-us-hero-section-no-bg.webp"}
            alt="Image | Cannex"
            className="absolute z-2 top-0 left-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 z-1 flex flex-col justify-start items-center text-white font-bold">
            <div>
              <ScrollReveal>
                {(show) => (
                  <h1
                    className={`
                      text-[46px] tablet:text-[72px] pt-[24px] tablet:pt-[32px] transition-all duration-[300ms] 
                      ${getClassNameAnimation(
                        show,
                        300,
                        "opacity-0 -translate-x-10",
                        "opacity-100 translate-x-0"
                      )}
                    `}
                  >
                    About
                  </h1>
                )}
              </ScrollReveal>

              <div className="flex justify-center text-[26vw] font-bold">
                {"cannex".split("").map((char, i) => (
                  <ScrollReveal className="!leading-0" key={i}>
                    {(show) => (
                      <span
                        style={{ transitionDelay: `${i * 100}ms`, lineHeight: 0 }}
                        className={`
                          inline-block !leading-0 mt-[10px] tablet:mt-[72px]
                          ${getClassNameAnimation(
                            show,
                            100,
                            "opacity-0 translate-y-10",
                            "opacity-100 translate-y-0"
                          )}
                        `}
                      >
                        {char}
                      </span>
                    )}
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute z-4 left-[7vw] bottom-[-255px] tablet:bottom-[30px] flex-col justify-start items-start text-black">
            <div className="flex flex-col">
              {[
                {
                  text: "Pharmaceutical-",
                  className: "hidden tablet:block mb-3",
                  animateClassName: "reveal-crystalGreen",
                },
                {
                  text: "Grade Formulation,",
                  className: "hidden tablet:block mb-3",
                  animateClassName: "reveal-crystalGreen",
                },
                {
                  text: "Pharmaceutical",
                  className: "block tablet:hidden mb-3",
                  animateClassName: "reveal-crystalGreen",
                },
                {
                  text: "-Grade",
                  className: "block tablet:hidden mb-3",
                  animateClassName: "reveal-crystalGreen",
                },
                {
                  text: "Formulation,",
                  className: "block tablet:hidden mb-3",
                  animateClassName: "reveal-crystalGreen",
                },
                {
                  text: "Crafted with",
                  className: "mb-3",
                  animateClassName: "reveal-white",
                },
                {
                  text: "Clinical Precision.",
                  className: "mb-3",
                  animateClassName: "reveal-white",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} once>
                  {(show) => (
                    <div
                      className={`text-[46px] tablet:text-[56px] w-fit font-bold leading-[110%] ${item.className}`}
                    >
                      <span
                        style={{ animationDelay: `${i * 100}ms` }}
                        className={`reveal-ltr 
                        ${getClassNameAnimation(
                          show,
                          300,
                          "opacity-0",
                          `opacity-100 animate-reveal-ltr ${item.animateClassName}`
                        )}
                        `}
                      >
                        {item.text}
                      </span>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[290px] w-full tablet:hidden"></div>

      <div className="mx-[20px] py-[64px] tablet:p-[80px] grid grid-cols-1 border-t-2 tablet:border-t-0 tablet:grid-cols-2">
        <ScrollReveal once>
          {(show) => (
            <div
              className={`text-[40px] tablet:text-[52px] font-bold transition-all duration-[500ms]
                ${getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0"
                )}
              `}
            >
              Reimagining Medical Cannabis with Science and Purpose
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal once>
          {(show) => (
            <div
              className={`tablet:p-[15px_20px] ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-10",
                "opacity-100 translate-x-0"
              )}`}
            >
              <div className="mt-[16px] tablet:mt-0">
                Medical cannabis is undergoing a global transformation — from an
                alternative remedy to a credible therapeutic solution. With
                growing acceptance among physicians, patients, and regulators,
                the demand for cannabis products that meet{" "}
                <b>pharmaceutical-grade standards</b> has never been higher
              </div>
              <div className="mt-[20px]">
                At Cannex, we believe that{" "}
                <b>
                  medical cannabis formulations deserve the same level of
                  precision, quality control, and scientific discipline
                </b>
                as any pharmaceutical product. It&apos;s not just about being
                natural — it&apos;s about being <b>scientifically precise.</b>
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 border-t-2">
        <div className="border-b-2 tablet:border-b-0 tablet:border-r-2 overflow-y-hidden">
          <ScrollReveal
            className="h-full w-full aspect-square tablet:aspect-auto"
            once
          >
            {(show) => (
              <img
                src="/about-us/about-us-lab.webp"
                alt="Image | Cannex"
                className={
                  "object-cover h-full w-full scale-x-[-1]" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 translate-y-30",
                    "opacity-100 translate-y-0"
                  )
                }
                height={576}
              />
            )}
          </ScrollReveal>
        </div>
        <div className="flex flex-col items-start justify-center px-[46px] py-[40px] tablet:py-[20px] gap-2">
          <ScrollReveal once>
            {(show) => (
              <QuoteTopIcon
                className={getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 translate-y-5",
                  "opacity-100 translate-y-0"
                )}
              />
            )}
          </ScrollReveal>

          <ScrollReveal once>
            {(show) => (
              <h2
                className={
                  "text-[40px] tablet:text-[52px] font-bold" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-x-20",
                    "opacity-100 translate-x-0"
                  )
                }
              >
                This is the standard that defines us, and the promise we deliver
                in every drop.
              </h2>
            )}
          </ScrollReveal>

          <ScrollReveal once>
            {(show) => (
              <QuoteBottomIcon
                className={getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-5",
                  "opacity-100 translate-y-0"
                )}
              />
            )}
          </ScrollReveal>
        </div>
      </div>

      <div className="tablet:p-[96px_80px] mx-[20px] tablet:mx-0 py-[64px] border-y-2 ">
        <div className="mb-[48px]">
          <ScrollReveal once>
            {(show) => (
              <h2
                className={
                  "text-[24px] tablet:text-[52px] font-bold" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0"
                  )
                }
              >
                Our Origin:
                <br /> A Global Collaboration for Global Standards
              </h2>
            )}
          </ScrollReveal>

          <ScrollReveal>
            {(show) => (
              <div
                className={
                  "text-[16px] py-[24px]" +
                  getClassNameAnimation(
                    show,
                    500,
                    "opacity-0 -translate-y-5",
                    "opacity-100 translate-y-0"
                  )
                }
              >
                Cannex was founded to meet the rising need for safe,
                standardized, and clinically trusted cannabis products — and we
                knew that achieving this required more than cultivation alone.
                It required science, compliance, and collaboration across
                continents.
              </div>
            )}
          </ScrollReveal>
          <ScrollReveal>
            {(show) => (
              <div
                className={
                  "text-[20px]" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 translate-y-5",
                    "opacity-100 translate-y-0"
                  )
                }
              >
                Cannex is the product of a powerful alliance between{" "}
                <b
                  style={{
                    transitionDelay: "500ms",
                    animationDelay: "500ms",
                  }}
                  className={
                    "highlight-animate" +
                    getClassNameAnimation(show, 500, "", "highlight-run")
                  }
                >
                  three nations:
                </b>
              </div>
            )}
          </ScrollReveal>
        </div>

        <ResolveMap />

        <ScrollReveal once>
          {(show) => (
            <div
              style={{ transitionDelay: "500ms", animationDelay: "500ms" }}
              className={
                "flex justify-center" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 translate-y-5",
                  "opacity-100 translate-y-0"
                )
              }
            >
              <div className="text-[14px] text-left tablet:text-center">
                Together, we create a vertically integrated system —
                <b>from seed to shelf,</b> built to meet the most rigorous
                international standards.
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 border-b-2 tablet:grid-cols-2 mx-[20px] py-[48px] tablet:mx-0 tablet:p-[64px_80px]">
        <ScrollReveal once>
          {(show) => (
            <h2
              className={
                "text-[40px] tablet:text-[52px] mb-[16px] tablet:mt-0 font-bold" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-5",
                  "opacity-100 translate-x-0"
                )
              }
            >
              <div>Our Mission: </div>
              <div>Raising the Global Standard</div>
            </h2>
          )}
        </ScrollReveal>

        <ScrollReveal once>
          {(show) => (
            <div className="text-[16px] flex flex-col gap-3">
              <div
                className={getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-5",
                  "opacity-100 translate-x-0"
                )}
              >
                We don’t just grow cannabis — we{" "}
                <b>engineer medical-grade wellness solutions.</b> Cannex exists
                to bridge the gap between traditional cultivation and modern
                pharmaceutical expectations.
              </div>
              <div
                className={getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-5",
                  "opacity-100 translate-x-0"
                )}
              >
                With clinical-grade facilities, stringent quality assurance, and
                transparent global compliance, we ensure:
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>

      <ScrollReveal once>
        {(show) => (
          <div className="grid grid-cols-1 tablet:grid-cols-3  mx-[20px] tablet:mx-0">
            <div
              className={
                "flex justify-start items-center border-b-2 tablet:border-b-0 py-10 tablet:px-20 tablet:border-r-2" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-2",
                  "opacity-100 translate-x-0"
                )
              }
            >
              <div className="flex flex-col  items-start gap-4">
                <SafetyIcon />
                <div className="self-stretch text-[2rem] font-bold leading-[120%]">
                  Safety
                </div>
                <div className="self-stretch font-medium leading-[125%]">
                  Every batch is tested for cannabinoids and contaminants using
                  HPLC and LC-MS/MS
                </div>
              </div>
            </div>

            <div
              style={{ transitionDelay: "200ms", animationDelay: "200ms" }}
              className={
                "flex justify-start items-center border-b-2 tablet:border-b-0 py-10 tablet:px-20 tablet:border-r-2" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-2",
                  "opacity-100 translate-x-0"
                )
              }
            >
              <div className="flex flex-col items-start gap-4">
                <ConsistencyIcon />
                <div className="self-stretch text-[2rem] font-bold leading-[120%]">
                  Consistency
                </div>
                <div className="self-stretch font-medium leading-[125%]">
                  Genetics, terpene profiles, and potency are maintained
                  lot-to-lot
                </div>
              </div>
            </div>

            <div
              style={{ transitionDelay: "400ms", animationDelay: "400ms" }}
              className={
                "flex justify-start items-center py-10 tablet:px-20" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-2",
                  "opacity-100 translate-x-0"
                )
              }
            >
              <div className="flex flex-col items-start gap-4">
                <EfficacyIcon />
                <div className="self-stretch text-[2rem] font-bold leading-[120%]">
                  Consistency
                </div>
                <div className="self-stretch font-medium leading-[125%]">
                  Genetics, terpene profiles, and potency are maintained
                  lot-to-lot
                </div>
              </div>
            </div>
          </div>
        )}
      </ScrollReveal>

      <ScrollReveal once>
        {(show) => (
          <>
            <div className="w-full h-[500px] tablet:h-[720px] relative">
              <div className="w-full h-full overflow-hidden">
                <div className="absolute top-0 right-0 z-1 w-full h-full bg-gradient-to-b from-black/70 via-black/0 to-black/70" />
                <img
                  src="/about-us/about-us-what-we-belive.webp"
                  alt="Image | Cannex"
                  className={
                    "w-full h-full object-cover z-0 will-change-transform zoom-origin-center " +
                    getClassNameAnimation(
                      show,
                      1000,
                      "zoom-from",
                      "animate-zoom-to-fit"
                    )
                  }
                />
              </div>
              <div className="absolute z-2 top-0 right-0 w-full h-full p-[20px] tablet:p-[64px_80px] flex flex-col tablet:flex-row gap-13">
                <div className="flex flex-col gap-3">
                  <div
                    className={
                      "text-white text-5xl font-bold leading-[57.20px]" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-5",
                        "opacity-100 translate-x-0"
                      )
                    }
                  >
                    What We Believe
                  </div>
                  <div
                    className={
                      "text-white text-base font-medium leading-tight" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-y-5",
                        "opacity-100 translate-y-0"
                      )
                    }
                  >
                    Medical cannabis should be held to the same standards as any
                    pharmaceutical product.
                  </div>
                </div>

                {/* Desktop */}
                <div className="flex-col z-2 tablet:gap-2 hidden tablet:flex">
                  <div
                    className={
                      "text-white text-3xl font-bold leading-10" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-y-5",
                        "opacity-100 translate-y-0"
                      )
                    }
                  >
                    It should be
                  </div>
                  <div
                    style={{
                      transitionDelay: "500ms",
                      animationDelay: "500ms",
                    }}
                    className={
                      "self-stretch justify-start" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-5",
                        "opacity-100 translate-x-0"
                      )
                    }
                  >
                    <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                      formulated with precision,
                    </span>
                    <span className="text-white text-2xl font-bold leading-7">
                      {" "}
                      not guesswork.
                    </span>
                  </div>
                  <div
                    style={{
                      transitionDelay: "500ms",
                      animationDelay: "500ms",
                    }}
                    className={
                      "self-stretch z-2 justify-start" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-5",
                        "opacity-100 translate-x-0"
                      )
                    }
                  >
                    <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                      developed with scientific evidence,
                    </span>
                    <span className="text-white text-2xl font-bold leading-7">
                      {" "}
                      not assumptions.
                    </span>
                  </div>
                  <div
                    style={{
                      transitionDelay: "500ms",
                      animationDelay: "500ms",
                    }}
                    className={
                      "self-stretch z-2 justify-start" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-5",
                        "opacity-100 translate-x-0"
                      )
                    }
                  >
                    <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                      delivered with integrity,
                    </span>
                    <span className="text-white text-2xl font-bold leading-7">
                      {" "}
                      not inconsistency.
                    </span>
                  </div>
                </div>

                {/* Mobile */}
                <div className="absolute z-2 bottom-2 block tablet:hidden">
                  <div
                    className={
                      "text-white text-3xl font-bold leading-10" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-y-5",
                        "opacity-100 translate-y-0"
                      )
                    }
                  >
                    It should be
                  </div>
                  <div
                    style={{
                      transitionDelay: "500ms",
                      animationDelay: "500ms",
                    }}
                    className={
                      "self-stretch justify-start" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-5",
                        "opacity-100 translate-x-0"
                      )
                    }
                  >
                    <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                      formulated with precision,
                    </span>
                    <span className="text-white text-2xl font-bold leading-7">
                      {" "}
                      not guesswork.
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div
                style={{
                  transitionDelay: "500ms",
                  animationDelay: "500ms",
                }}
                className={
                  "absolute z-2 tablet:bottom-10 w-full justify-center hidden tablet:flex" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 translate-y-5",
                    "opacity-100 translate-y-0"
                  )
                }
              >
                <div className="w-full text-center justify-start">
                  <span className="text-white text-base font-medium leading-tight">
                    We believe in{" "}
                  </span>
                  <span className="text-crystalGreen text-base font-bold leading-tight">
                    empowering communities, supporting physicians
                  </span>
                  <span className="text-white text-base font-medium leading-tight">
                    , and delivering products that truly improve lives — with
                    clarity, transparency, and compassion.
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div
              className={
                "mt-1 mx-5 pb-10 border-b-2 flex flex-col gap-2 tablet:hidden" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-5",
                  "opacity-100 translate-x-0"
                )
              }
              style={{
                transitionDelay: "500ms",
                animationDelay: "500ms",
              }}
            >
              <div>
                <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                  developed with scientific evidence,
                </span>
                <span className="text-black text-2xl font-bold leading-7">
                  {" "}
                  not assumptions.
                </span>
              </div>
              <div>
                <span className="text-black bg-crystalGreen text-2xl font-bold leading-7">
                  delivered with integrity,
                </span>
                <span className="text-black text-2xl font-bold leading-7">
                  {" "}
                  not inconsistency.
                </span>
              </div>
              <div className="w-full text-left mt-4 justify-start">
                <span className="text-black text-base font-medium leading-tight">
                  We believe in{" "}
                </span>
                <span className="text-crystalGreen text-base font-bold leading-tight">
                  empowering communities, supporting physicians
                </span>
                <span className="text-black text-base font-medium leading-tight">
                  , and delivering products that truly improve lives — with
                  clarity, transparency, and compassion.
                </span>
              </div>
            </div>
          </>
        )}
      </ScrollReveal>

      <ScrollReveal once>
        {(show) => (
          <>
            <h2
              className={
                "tablet:px-20 text-[30px] py-10 tablet:py-16 tablet:text-[52px] mx-[20px] tablet:mx-0 font-bold border-b-2" +
                getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-y-5",
                  "opacity-100 translate-y-0"
                )
              }
            >
              <div>What Defines Us:</div>
              <div>The Cannex Pillars</div>
            </h2>
            <div className="grid grid-cols-1 tablet:grid-cols-3">
              {[
                {
                  title: "Pharmaceutical-Grade Formulation",
                  desc: "Our cultivation, extraction, and packaging processes meet or exceed pharmaceutical standards — including GACP, PIC/S GMP, and EU-GMP guidelines (in progress).",
                  bottom: -59,
                },
                {
                  title: "Science-Led Integrity",
                  desc: "We prioritize transparency, traceability, and scientific validation — so every product is verifiable, reproducible, and built on data, not trends.",
                  bottom: -59,
                },
                {
                  title: "Human-Centered Wellness Innovation",
                  desc: "We design every formulation around real needs — chronic pain, inflammation, anxiety, and beyond — putting patients and healthcare providers at the heart of our innovation.",
                  bottom: -57,
                },
              ].map((item, index) => {
                return (
                  <div
                    className={
                      "relative" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-20",
                        "opacity-100 translate-x-0"
                      )
                    }
                    key={index}
                  >
                    <div
                      style={{
                        transitionDelay: `${index * 200 + 200}ms`,
                        animationDelay: `${index * 200 + 200}ms`,
                      }}
                      className={`font-bold line-clamp-2 flex items-center text-2xl h-[100px] mx-[20px] tablet:mx-0 border-b-2 tablet:px-10 ${
                        index != 0 && "border-t-2 tablet:border-t-0"
                      } ${index != 2 && "tablet:border-r-2"}`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={`${
                        index != 2 && "tablet:border-r-2"
                      } py-8 h-[335px] tablet:h-[230px]`}
                    >
                      <div className="px-[20px] tablet:px-10 line-clamp-5">
                        {item.desc}
                      </div>
                      <div
                        style={{ bottom: item.bottom, letterSpacing: 0 }}
                        className={`absolute right-5 tablet:right-[0px] text-right mr-[-6px] text-[145px] font-bold mb-[-3px]`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </ScrollReveal>

      <ScrollReveal once>
        {(show) => (
          <div className="tablet:h-[620px] grid grid-cols-1 tablet:grid-cols-2 tablet:border-t-2">
            <div className="border-b-2 tablet:border-b-0 tablet:border-r-2 h-full w-full overflow-hidden aspect-square">
              <img
                src="/about-us/about-us-last-section.webp"
                alt="Image | Cannex"
                className={
                  "h-full w-full object-cover" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 translate-y-20",
                    "opacity-100 translate-y-0"
                  )
                }
              />
            </div>
            <div className="mx-[20px] mt-[40px] mb-[80px] tablet:m-0 flex flex-col gap-6 justify-center tablet:px-[64px]">
              <h2
                className={
                  "text-[40px] tablet:text-[52px] font-bold" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0"
                  )
                }
              >
                The Cannex Commitment
              </h2>
              <div
                className={
                  "text-[20px]" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0"
                  )
                }
              >
                From California genetics to Japanese engineering and Thai
                execution, Cannex is more than a brand — it is a{" "}
                <b>new benchmark</b> for medical cannabis worldwide.
              </div>
              <div
                className={
                  "text-[20px]" +
                  getClassNameAnimation(
                    show,
                    1000,
                    "opacity-0 -translate-y-10",
                    "opacity-100 translate-y-0"
                  )
                }
              >
                Rooted in science. Driven by collaboration. Committed to care.
              </div>
            </div>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}
