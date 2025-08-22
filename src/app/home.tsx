/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { useHelperContext } from "@/components/providers/helper-provider";
import { useEffect } from "react";
import AOS from "aos";
import Products from "@/components/homepage/Products";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";
import About from "@/components/homepage/About";
import RnD from "@/components/homepage/RnD";
import Supplying from "@/components/homepage/Supplying";
import Contact from "@/components/homepage/Contact";
import Newsroom from "@/components/homepage/Newsroom";
import EventsAndUpdated from "@/components/homepage/EventsAndUpdated";

export default function Home() {
  const { setNavigate } = useHelperContext()();

  useEffect(() => {
    setNavigate("Home");

    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ScrollReveal>
        {(show) => (
          <section>
            <div className="relative w-full min-h-[calc(100vh-64px)] text-white flex flex-col justify-between">
              <div className="relative w-full h-[375px] tablet:min-h-[calc(100vh-133px)]">
                <div className="absolute top-0 left-0 z-5 w-full h-full bg-[linear-gradient(45deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%)]"></div>
                <img
                  src="/asset/hero-section-img.png"
                  alt="Image | Cannex"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute h-fit z-10 top-[clamp(1rem,268px,calc(100vh-584px))] tablet:top-[10vh] left-5 tablet:left-20 bottom-0">
                <div className="w-full flex flex-col gap-8 tablet:justify-center">
                  <h1 className="text-[46px] tablet:text-7xl font-bold leading-[110%] text-black flex flex-col gap-2">
                    <p
                      className={
                        "bg-crystalGreen w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                        )
                      }
                    >
                      Pharmaceutical-
                    </p>
                    <p
                      style={{ animationDelay: `500ms` }}
                      className={
                        "bg-crystalGreen w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-crystalGreen !hidden tablet:!block",
                        )
                      }
                    >
                      Grade Formulation,
                    </p>
                    <p
                      style={{ animationDelay: `1000ms` }}
                      className={
                        "tablet:hidden bg-crystalGreen w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-crystalGreen",
                        )
                      }
                    >
                      -Grade
                    </p>
                    <p
                      style={{ animationDelay: `1000ms` }}
                      className={
                        "bg-crystalGreen w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-crystalGreen tablet:!hidden",
                        )
                      }
                    >
                      Formulation,
                    </p>
                    <p
                      style={{ animationDelay: `1000ms` }}
                      className={
                        "bg-white w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-white tablet:!hidden",
                        )
                      }
                    >
                      Crafted with
                    </p>
                    <p
                      style={{ animationDelay: `1500ms` }}
                      className={
                        "bg-white w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-white !hidden tablet:!block",
                        )
                      }
                    >
                      Clinical Precision.
                    </p>
                    <p
                      style={{ animationDelay: `1500ms` }}
                      className={
                        "tablet:hidden bg-white w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-white tablet:!hidden",
                        )
                      }
                    >
                      Clinical
                    </p>
                    <p
                      style={{ animationDelay: `2000ms` }}
                      className={
                        "bg-white w-fit reveal-ltr" +
                        getClassNameAnimation(
                          show,
                          500,
                          "opacity-0",
                          "opacity-100 animate-reveal-ltr reveal-white tablet:!hidden",
                        )
                      }
                    >
                      Precision.
                    </p>
                  </h1>
                  <p
                    style={{
                      animationDelay: `2500ms`,
                      transitionDelay: `2500ms`,
                    }}
                    className={
                      "font-semibold text-black tablet:text-white tablet:w-[425px]" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-y-10",
                        "opacity-100 translate-y-0",
                      )
                    }
                  >
                    From plant to product — Cannex unites American genetics,
                    Thai innovation, and Japanese-grade extraction to deliver
                    premium medical cannabis, globally.
                  </p>

                  <div
                    style={{
                      animationDelay: `2500ms`,
                      transitionDelay: `2500ms`,
                    }}
                    className={
                      "hidden tablet:block" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "opacity-0 -translate-x-10",
                        "opacity-100 translate-x-0",
                      )
                    }
                  >
                    <Button
                      href="/products"
                      text="Explore our products"
                      type="secondaryWhite"
                      className="w-fit"
                      suffixIcon={<RightUpIcon />}
                    />
                  </div>
                </div>
              </div>

              <div className="tablet:hidden">
                <Button
                  href="/products"
                  text="Explore our products"
                  type="primary"
                  className="w-full"
                  suffixIcon={<RightUpIcon />}
                />
              </div>
            </div>
          </section>
        )}
      </ScrollReveal>

      <About />
      <Products />
      <RnD />
      <Newsroom />
      <EventsAndUpdated />
      <Supplying />
      <Contact />
    </div>
  );
}
