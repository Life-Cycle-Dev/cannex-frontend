import React from "react";

type ContentItem = {
  title?: string;
  desc?: string;
};

const items: {
  title: string;
  imgSrc: string;
  contents: ContentItem[];
}[] = [
  {
    title: "Cannabinoid Innovation",
    imgSrc: "/asset/rnd-cell-1.webp",
    contents: [
      {
        title: "Water-soluble CBD",
        desc: "for increased bioavailability in beverages and oral forms",
      },
      {
        title: "Pure THC isolation",
        desc: "using preparative chromatography",
      },
      {
        title: "Minor cannabinoid separation,",
        desc: "such as CBG, CBN, CBC, for targeted effects",
      },
      {
        title: "Cannabinoid-terpene matching",
        desc: "to enhance therapeutic outcomes",
      },
    ],
  },
  {
    title: "Formulation Development",
    imgSrc: "/asset/rnd-cell-2.webp",
    contents: [
      {
        desc: "Custom ratios for tinctures, gummies, soft gels, vapes",
      },
      {
        desc: "Product development guided by clinical use cases and global compliance",
      },
      {
        desc: "Terpene profile design for efficacy and flavor control",
      },
    ],
  },
  {
    title: "Formulation Development",
    imgSrc: "/asset/rnd-cell-3.webp",
    contents: [
      {
        desc: "Dose-consistent delivery (sublingual, vapor, topical)",
      },
      {
        desc: "Stability testing for export conditions (heat, humidity)",
      },
      {
        desc: "Secure packaging for traceability and patient safety",
      },
    ],
  },
];

export default function FocusArea() {
  return (
    <div className="flex flex-col tablet:flex-row">
      <div className="p-[40px_20px_40px_20px] tablet:p-[96px_96px_0px_75px] tablet:border-r-[2px]">
        <p className="text-[40px] tablet:text-[52px] font-bold leading-[110%]">
          Our Core Focus Areas
        </p>
      </div>

      <div>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`border-t-[2px] tablet:border-t-0 grid tablet:grid-cols-2
                ${
                  idx < items.length - 1
                    ? "tablet:border-b-[2px]"
                    : "tablet:border-b-0"
                }
                 ${
                   idx % 2 === 1
                     ? "tablet:[&>*:first-child]:order-2 [&>*:last-child]:order-1"
                     : ""
                 }`}
          >
            <div
              className={`w-full h-[375px] tablet:h-[572px] relative border-b-[2px] tablet:border-b-0
                        ${idx % 2 === 1 ? "" : "tablet:border-r-[2px]"}`}
            >
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className={`relative p-[32px_20px_16px_20px] tablet:p-[96px_80px_0px_64px] w-full flex flex-col gap-4
                      ${idx % 2 === 0 ? "" : "tablet:border-r-[2px]"}`}
            >
              <p
                className={`absolute top-[53px] right-[17px] tablet:top-auto tablet:bottom-[-22px] leading-none text-[108px] tablet:text-[145px] font-bold
                ${
                  idx % 2 === 0 ? "tablet:right-[-3px]" : "tablet:left-[-3px]"
                }`}
              >
                {idx + 1}
              </p>

              <p className="text-[32px] font-bold h-fit w-[324px]">
                {item.title}
              </p>

              <div className="leading-[125%] border-t-2">
                {item.contents.map((content, index) => (
                  <div
                    key={index}
                    className={`py-4 ${
                      index < item.contents.length - 1
                        ? "border-b-[2px]"
                        : "border-b-0"
                    }`}
                  >
                    <p>
                      {content.title && (
                        <span className="font-bold">{content.title + " "}</span>
                      )}
                      <span className="font-medium">{content.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
