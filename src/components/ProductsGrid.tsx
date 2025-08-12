// src/components/ProductsGrid.tsx
"use client";

import Image from "next/image";
import React from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";

type Card = {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
};

const items: Card[] = [
  {
    title: "Premium\nCanabis Flower",
    desc: "Cultivated by California experts,\noptimized for terpene-rich,\npharmaceutical-grade quality.",
    img: "/prod-flower.png",
    imgAlt: "flower",
  },
  {
    title: "CBD Isolate\n[Crystal Powder]",
    desc: "Ultra-pure, pharmaceutical-grade isolate with 0.0% THC — perfect for precision blending.",
    img: "/prod-isolate.png",
    imgAlt: "isolate powder",
  },
  {
    title: "Medical\nCannabis Oil",
    desc: "A standardized, THC-free extract developed for global healthcare needs.",
    img: "/prod-oil.png",
    imgAlt: "medical oil",
  },
  {
    title: "Custom\nFormulation",
    desc: "Tailored cannabinoid profiles for partner brands — from R&D to full-scale production.",
    img: "/prod-custom.png",
    imgAlt: "custom oil",
  },
];

export default function ProductsGrid() {
  return (
    <section className="w-full mt-16">
      {" "}
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 border-t border-neutral200">
        {items.map((it, idx) => (
          <ProductCard key={idx} data={it} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ data }: { data: Card }) {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={data.title.replace(/\n/g, " ")}
      className={[
        "group relative isolate overflow-hidden cursor-pointer",
        "border-b border-neutral200 tablet:border-r tablet:border-neutral200",
        "outline-none transition-transform duration-200",
        "hover:scale-[1.01] focus-visible:scale-[1.01]",
      ].join(" ")}>
      <div
        className={[
          "absolute right-2 top-2 h-7 w-7 grid place-items-center rounded-sm",
          "transition-all duration-300",
          "group-hover:bg-black group-focus-visible:bg-black",
        ].join(" ")}>
        <RightUpIcon
          className={[
            "w-4 h-4",
            "text-black",
            "transition-colors",
            "group-hover:text-primary500 group-focus-visible:text-primary500",
          ].join(" ")}
        />
      </div>

      {/* Image */}
      <div className="px-6 pt-10 tablet:pt-12 desktop:pt-14">
        <div className="relative mx-auto w-full max-w-[340px]">
          <Image
            src="/mock_360x360.png" // ใช้ path ใน public
            alt={data.imgAlt}
            width={360}
            height={360}
            className="w-full h-auto object-contain transition-transform duration-300 group-hover:-translate-y-1"
            quality={95}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-8 pt-6 desktop:pt-8 group-hover:bg-black group-focus-visible:bg-black">
        {/* คลุมพื้นหลังทั้ง block ตอน hover */}
        <div
          className={["transition-all duration-300 p-4 -mx-4 -mb-4"].join(" ")}>
          <h3
            className={[
              "whitespace-pre-line font-bold leading-[1.1]",
              "text-[28px] desktop:text-[32px]",
              "transition-colors duration-300",
              "group-hover:text-primary500 group-focus-visible:text-primary500",
            ].join(" ")}>
            {data.title}
          </h3>

          <p
            className={[
              "mt-3 text-[14px] desktop:text-[15px] leading-relaxed",
              "transition-colors duration-300",
              "group-hover:text-white group-focus-visible:text-white",
            ].join(" ")}>
            {data.desc}
          </p>
        </div>
      </div>

      {/* vertical divider */}
      <span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-neutral200" />
    </article>
  );
}
