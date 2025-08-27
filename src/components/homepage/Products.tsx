/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

type Card = {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
};

const products: Card[] = [
  {
    title: "Premium\nCanabis Flower",
    desc: "Cultivated by California experts,\noptimized for terpene-rich,\npharmaceutical-grade quality.",
    img: "/product/product-flower.webp",
    imgAlt: "flower",
  },
  {
    title: "CBD Isolate\n[Crystal Powder]",
    desc: "Ultra-pure, pharmaceutical-grade isolate with 0.0% THC — perfect for precision blending.",
    img: "/product/product-isolate.webp",
    imgAlt: "isolate powder",
  },
  {
    title: "Medical\nCannabis Oil",
    desc: "A standardized, THC-free extract developed for global healthcare needs.",
    img: "/product/product-oil.webp",
    imgAlt: "medical oil",
  },
  {
    title: "Custom\nFormulation",
    desc: "Tailored cannabinoid profiles for partner brands — from R&D to full-scale production.",
    img: "/product/product-custom.webp",
    imgAlt: "custom oil",
  },
];

export default function Products() {
  return (
    <section className="w-full">
      <ScrollReveal className="grid grid-cols-2 tablet:grid-cols-4 border-t-[2px] mx-5 tablet:mx-0">
        {(show) => (
          <>
            {products.map((product, idx) => (
              <ProductCard data={product} show={show} key={idx} index={idx} />
            ))}
          </>
        )}
      </ScrollReveal>
    </section>
  );
}

function ProductCard({
  data,
  show,
  index,
}: {
  data: Card;
  show: boolean;
  index: number;
}) {
  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={data.title.replace(/\n/g, " ")}
      style={{
        transitionDelay: `${500 + index * 200}ms`,
        animationDelay: `${500 + index * 200}ms`,
      }}
      className={`group relative isolate cursor-pointer overflow-hidden border-b-[2px] border-black  
        ${
          index % 2 === 1
            ? index === products.length - 1
              ? "tablet:border-r-0"
              : "border-r-0 tablet:border-r-[2px]"
            : "border-r-[2px]"
        } 
        ${getClassNameAnimation(
          show,
          500 + index * 200,
          "opacity-0 -translate-x-20",
          "opacity-100 translate-x-0"
        )}`}
    >
      <div className="w-full flex justify-end bg-white">
        <div className="relative h-12 w-12 grid place-items-center group-hover:bg-black group-focus-visible:bg-black">
          <RightUpIcon
            className="
              absolute transition-transform duration-500 ease-out
              w-8 h-8 text-black group-hover:-translate-y-6 group-hover:translate-x-6
          "
          />
          <RightUpIcon
            className="
              absolute transition-transform duration-500 ease-out
              translate-y-8 -translate-x-8
              w-8 h-8 text-crystalGreen group-hover:translate-y-0 group-hover:translate-x-0
          "
          />
        </div>
      </div>

      <div className="relative w-full aspect-square bg-white">
        <img
          src={data.img}
          alt={data.imgAlt}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col gap-4 tablet:p-6">
        <div className="absolute inset-0 group-hover:bg-black group-focus-visible:bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-2000 ease-out z-[-10]" />
        <p className="whitespace-pre-line font-bold leading-[120%] text-2xl tablet:text-[32px] group-hover:text-crystalGreen group-focus-visible:text-crystalGreen">
          {data.title}
        </p>

        <p className="font-medium leading-[125%] group-hover:text-white group-focus-visible:text-white">
          {data.desc}
        </p>
      </div>
    </article>
  );
}
