"use client";
import ScrollReveal from "@/components/animation/ScrollReveal";
import ConsistencyIcon from "@/components/icons/partnership/ConsistencyIcon";
import EfficacyIcon from "@/components/icons/partnership/EfficacyIcon";
import SafetyIcon from "@/components/icons/partnership/SafetyIcon";
import QuoteBottomIcon from "@/components/icons/QuoteBottomIcon";
import QuoteTopIcon from "@/components/icons/QuoteTopIcon";
import ResolveMap from "@/components/map/ResolveMap";
import { getClassNameAnimation } from "@/utils/animation-helper";
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
              <ScrollReveal>
                {(show) => (
                  <div
                    className={`
                      text-[46px] tablet:text-[72px] pt-[92px] tablet:pt-[32px] transition-all duration-[300ms]
                      ${getClassNameAnimation(
                        show,
                        300,
                        0,
                        "opacity-0 -translate-x-10",
                        "opacity-100 translate-x-0",
                      )}
                    `}
                  >
                    About
                  </div>
                )}
              </ScrollReveal>

              <div className="flex justify-center text-[26vw] leading-[40%] font-bold">
                {"cannex".split("").map((char, i) => (
                  <ScrollReveal key={i}>
                    {(show) => (
                      <span
                        style={{ transitionDelay: `${i * 100}ms` }}
                        className={`
                          inline-block 
                          ${getClassNameAnimation(
                            show,
                            100,
                            0,
                            "opacity-0 translate-y-10",
                            "opacity-100 translate-y-0",
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

          <div className="absolute z-4 left-[7vw] bottom-[-140px] tablet:bottom-[30px] flex-col justify-start items-start text-black">
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
                          0,
                          "opacity-0",
                          `opacity-100 animate-reveal-ltr ${item.animateClassName}`,
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
      <div className="min-h-[200px] w-full tablet:hidden"></div>

      <div className="mx-[20px] py-[64px] tablet:p-[80px] grid grid-cols-1 border-t-2 tablet:border-t-0 tablet:grid-cols-2">
        <ScrollReveal once>
          {(show) => (
            <div
              className={`text-[40px] tablet:text-[52px] font-bold transition-all duration-[500ms]
                ${getClassNameAnimation(
                  show,
                  1000,
                  0,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
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
                0,
                "opacity-0 -translate-x-10",
                "opacity-100 translate-x-0",
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
        <div className="border-b-2 tablet:border-b-0 tablet:border-r-2">
          <Image
            src="/about-us/about-us-lab.jpg"
            alt="lab"
            className="object-cover h-full w-full"
            width={863}
            height={576}
          />
        </div>
        <div className="flex flex-col items-start justify-center px-[46px] py-[40px] tablet:py-[20px] gap-2">
          <QuoteTopIcon />
          <div className="text-[40px] font-bold">
            This is the standard that defines us, and the promise we deliver in
            every drop.
          </div>
          <QuoteBottomIcon />
        </div>
      </div>

      <div className="tablet:p-[96px_80px] mx-[20px] tablet:mx-0 py-[64px] border-y-2 ">
        <div className="mb-[48px]">
          <div className="text-[24px] tablet:text-[52px] font-bold">
            Our Origin:
            <br /> A Global Collaboration for Global Standards
          </div>
          <div className="text-[16px] py-[24px]">
            Cannex was founded to meet the rising need for safe, standardized,
            and clinically trusted cannabis products — and we knew that
            achieving this required more than cultivation alone. It required
            science, compliance, and collaboration across continents.
          </div>
          <div className="text-[20px]">
            Cannex is the product of a powerful alliance between three nations:
          </div>
        </div>

        <ResolveMap />

        <div className="flex justify-center">
          <div className="text-[14px] text-left tablet:text-center">
            Together, we create a vertically integrated system —
            <b>from seed to shelf,</b> built to meet the most rigorous
            international standards.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b-2 tablet:grid-cols-2 mx-[20px] py-[48px] tablet:mx-0 tablet:p-[64px_80px]">
        <div className="text-[40px] tablet:text-[52px] mb-[16px] tablet:mt-0 font-bold">
          <div>Our Mission: </div>
          <div>Raising the Global Standard</div>
        </div>
        <div className="text-[16px] flex flex-col gap-3">
          <div>
            We don’t just grow cannabis — we{" "}
            <b>engineer medical-grade wellness solutions.</b> Cannex exists to
            bridge the gap between traditional cultivation and modern
            pharmaceutical expectations.
          </div>
          <div>
            With clinical-grade facilities, stringent quality assurance, and
            transparent global compliance, we ensure:
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-3  mx-[20px] tablet:mx-0">
        <div className="flex justify-start items-center border-b-2 tablet:border-b-0 py-10 tablet:px-20 tablet:border-r-2">
          <div className="flex flex-col flex-shrink-0 items-start gap-4 w-80">
            <SafetyIcon />
            <div className="self-stretch text-[2rem] font-bold leading-[120%]">
              Safety
            </div>
            <div className="self-stretch ont-medium leading-[125%]">
              Every batch is tested for cannabinoids and contaminants using HPLC
              and LC-MS/MS
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center border-b-2 tablet:border-b-0 py-10 tablet:px-20 tablet:border-r-2">
          <div className="flex flex-col flex-shrink-0 items-start gap-4 w-80">
            <ConsistencyIcon />
            <div className="self-stretch text-[2rem] font-bold leading-[120%]">
              Consistency
            </div>
            <div className="self-stretch ont-medium leading-[125%]">
              Genetics, terpene profiles, and potency are maintained lot-to-lot
            </div>
          </div>
        </div>

        <div className="flex justify-start items-center  py-10 tablet:px-20">
          <div className="flex flex-col flex-shrink-0 items-start gap-4 w-80">
            <EfficacyIcon />
            <div className="self-stretch text-[2rem] font-bold leading-[120%]">
              Consistency
            </div>
            <div className="self-stretch ont-medium leading-[125%]">
              Genetics, terpene profiles, and potency are maintained lot-to-lot
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
