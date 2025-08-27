"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

type PartnerBlock = {
  title: string;
  body: string;
};

const PARTNERS: PartnerBlock[] = [
  {
    title: "Thai universities and medical institutes",
    body: "for preclinical studies, lab testing, and pilot trials",
  },
  {
    title: "Japanese chemical companies",
    body: "for advanced separation, formulation, and THC remediation",
  },
  {
    title: "International medical brands",
    body: "co-developing patient-ready products for export",
  },
];

export default function ScientificCollaboration() {
  return (
    <section
      id="scientific-collaboration"
      aria-labelledby="scientific-collaboration-title"
      className="bg-white text-foreground px-5 tablet:p-0 tablet:border-t-[2px]"
    >
      {/* Heading */}
      <ScrollReveal
        className="w-full border-t-[2px] tablet:border-none py-10 tablet:p-[80px_80px_32px_80px] flex flex-col gap-4"
        once
      >
        {(show) => (
          <div>
            <p
              className={
                "text-[40px] tablet:text-[52px] font-bold" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-x-10",
                  "opacity-100 translate-x-0",
                )
              }
            >
              Scientific Collaboration
            </p>
            <p
              className={
                "tablet:text-xl font-medium leading-[125%]" +
                getClassNameAnimation(
                  show,
                  500,
                  "opacity-0 -translate-y-10",
                  "opacity-100 translate-y-0",
                )
              }
            >
              We partner with:
            </p>
          </div>
        )}
      </ScrollReveal>

      <ScrollReveal
        className="w-full grid tablet:grid-cols-3 border-b-[2px]"
        once
      >
        {(show) => (
          <>
            {PARTNERS.map((p, i) => (
              <div
                key={`partner-${i}`}
                className="flex flex-col border-t-[2px] tablet:border-r-[2px]"
              >
                {/* Title */}
                <div
                  className={`py-6 tablet:py-4 tablet:px-20 text-[32px] font-bold leading-[120%] flex items-center tablet:border-b-2 ${getClassNameAnimation(
                    show,
                    1000 + i * 200,
                    "opacity-0 -translate-x-10",
                    "opacity-100 translate-x-0",
                  )}`}
                >
                  {p.title}
                </div>

                {/* Body */}
                <div
                  className={`border-t-[2px] tablet:border-0 py-6 tablet:py-8 tablet:px-20 text-xl font-medium leading-[125%] whitespace-pre-line ${getClassNameAnimation(
                    show,
                    1500 + i * 200,
                    "opacity-0 translate-x-10",
                    "opacity-100 translate-x-0",
                  )}`}
                >
                  {p.body}
                </div>
              </div>
            ))}
          </>
        )}
      </ScrollReveal>
    </section>
  );
}
