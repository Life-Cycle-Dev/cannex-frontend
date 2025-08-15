"use client";

import Image from "next/legacy/image";
import React from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";

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

export default function Products() {
  return (
    <section className="w-full mt-16">
      <div className="grid grid-cols-2 tablet:grid-cols-4 border-t-[2px]">
        {products.map((product, idx) => (
          <ProductCard key={idx} data={product} />
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
      className="group relative isolate overflow-hidden cursor-pointer border-b-[2px] border-black border-r-[2px]"
    >
      <div className="w-full flex justify-end">
        <div className="h-12 w-12 grid place-items-center group-hover:bg-black group-focus-visible:bg-black">
          <RightUpIcon className="w-8 h-8 text-black group-hover:text-crystalGreen group-focus-visible:text-crystalGreen" />
        </div>
      </div>

      <div className="relative w-full aspect-square bg-white">
        <Image
          src={data.img}
          alt={data.imgAlt}
          width={360}
          height={360}
          className="w-full h-full object-contain"
          quality={95}
          priority
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
