/* eslint-disable @next/next/no-img-element */
"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

type Alliance = { flag: string; title: string; bullets: string[] };

const ALLIANCES: Alliance[] = [
  {
    flag: "/partnership/icon/usa-flag.webp",
    title: "Cannex Pharma (USA)",
    bullets: [
      "Founded by the team behind Cookies Maywood",
      "Exclusive cannabis genetics & premium cultivation know-how",
      "Brand-building and operational excellence from California",
      "Export-oriented cultivation and compliance leadership",
    ],
  },
  {
    flag: "/partnership/icon/jp-flag.webp",
    title: "Japanese Pharmaceutical Partners",
    bullets: [
      "Advanced extraction, crystallization, and chromatography",
      "Engineering systems for THC-free certification (≤10 ppm)",
      "Co-formulation and lab-grade precision",
    ],
  },
  {
    flag: "/partnership/icon/th-flag.webp",
    title: "Siam Agri-Bio (Thailand)",
    bullets: [
      "PIC/S GMP-certified facility for extraction & production",
      "Regional supply hub for APAC",
      "Compliant with Thai FDA and aligned with EU-GMP roadmap",
    ],
  },
];

/* ---------- Page ---------- */
export default function Home() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      <section
        aria-labelledby="alliances-title"
        className="w-full border-t-2 desktop:border-b-2 border-black"
      >
        <ScrollReveal
          className="border-black  py-[40px] desktop:px-[80px] desktop:py-[64px]"
          once
        >
          {(show) => (
            <div
              className={getClassNameAnimation(
                show,
                500,
                "opacity-0 -translate-x-10",
                "opacity-100 translate-x-0",
              )}
            >
              <h2
                id="alliances-title"
                className="text-[40px] tablet:text-[52px] font-bold mx-[20px]"
              >
                Our Key Strategic
                <br />
                Alliances
              </h2>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal
          className="desktop:hidden border-t-[2px] border-black"
          once
        >
          {(show) => (
            <div>
              <div className="relative w-full h-full border-b-2 desktop:border-b-0">
                <img
                  src="/partnership/Image.webp"
                  alt="Image | Cannex"
                  className={
                    "object-cover w-full h-full zoom-origin-center" +
                    getClassNameAnimation(
                      show,
                      1000,
                      "zoom-from",
                      "animate-zoom-to-fit",
                    )
                  }
                />
              </div>
            </div>
          )}
        </ScrollReveal>

        {/* Grid: ซ้าย/ขวา */}
        <div className="grid grid-cols-1 desktop:grid-cols-2">
          {/* LEFT: 3 บล็อก */}
          <div className="border-black">
            {ALLIANCES.map((a, idx) => (
              <ScrollReveal key={a.title} once>
                {(show) => (
                  <div
                    className={getClassNameAnimation(
                      show,
                      1500 + idx * 300,
                      "opacity-0 translate-x-20",
                      "opacity-100 translate-x-0",
                    )}
                  >
                    <AllianceItem data={a} index={idx} />
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>

          {/* RIGHT: รูปภาพ */}
          <ScrollReveal
            className="hidden desktop:block desktop:row-span-3 border-l-2 border-black h-full"
            once
          >
            {(show) => (
              <div
                className={
                  getClassNameAnimation(
                    show,
                    2000,
                    "opacity-0 translate-x-20",
                    "opacity-100 translate-x-0",
                  ) + "h-full"
                }
              >
                <div className="relative w-full h-full border-t-[2px]">
                  <img
                    src="/partnership/Image.webp"
                    alt="Image | Cannex"
                    className={
                      "object-cover w-full h-full zoom-origin-center" +
                      getClassNameAnimation(
                        show,
                        1000,
                        "zoom-from",
                        "animate-zoom-to-fit",
                      )
                    }
                  />
                </div>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponent ---------- */
function AllianceItem({ data, index }: { data: Alliance; index: number }) {
  return (
    <div
      className={`border-black ${
        index !== 0 && "border-t-2"
      } border-b-0 desktop:border-t-2 mx-[20px] desktop:mx-0`}
    >
      <div
        className={`
          pb-[32px]
          pt-[32px]           
          desktop:pt-0
          desktop:px-[80px]
        `}
      >
        <h3 className="mt-0 tablet:mt-[32px] text-xl tablet:text-2xl font-bold flex flex-col items-start tablet:flex-row tablet:items-center gap-3">
          <span aria-hidden className="relative w-[44px] tablet:w-[33px] flex-shrink-0">
            <img src={data.flag} alt={data.title} className="object-contain" />
          </span>
          <span>{data.title}</span>
        </h3>

        <ul className="mt-3 space-x-1 text-sm desktop:text-[15px] text-neutral-900">
          {data.bullets.map((b, i) => (
            <li key={i} className="pl-4 relative leading-relaxed">
              <span className="absolute left-0 top-2 block w-1 h-1 rounded-full bg-black" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
