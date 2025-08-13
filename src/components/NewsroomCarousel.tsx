/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { formatDate } from "@/utils/format";

type Item = {
  id: string | number;
  title?: string;
  description?: string;
  createdAt?: string;
  image?: { url?: string; name?: string };
};

export default function NewsroomCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = React.useState(0);

  if (!items || items.length === 0) {
    return (
      <div className="flex justify-between min-h-[315px] tablet:min-h-[415px] border-b-2">
        <div className="min-w-[79px] h-full border-r-2" />
        <div className="w-full flex items-center justify-center text-gray-500">
          No newsroom yet
        </div>
        <div className="min-w-[79px] h-full border-l-2" />
      </div>
    );
  }

  const goNext = () => {
    if (index === items.length - 1) return;

    setIndex((i) => (i + 1) % items.length);
  };
  const goPrev = () => {
    if (index === 0) return;
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const current = items[index];

  return (
    <div className="flex justify-between tablet:border-b-2">
      <div className="min-w-[79px] border-r-2 hidden tablet:block" />

      <div
        key={current.id}
        className="w-full flex tablet:flex-row flex-col"
      >
        <img
          className="min-w-full h-[315px] tablet:min-w-[45%] tablet:h-[413px] object-cover tablet:border-r-2 cursor-pointer"
          src={current?.image?.url || "/placeholder.png"}
          alt={current?.image?.name || current?.title || "news image"}
        />

        <div>
          <div
            className="
            w-full flex flex-col pb-20 
            tablet:border-0 tablet:h-[349px] tablet:pb-0 
            relative group/preview overflow-hidden cursor-pointer
          "
          >
            <div className="self-end mb-4 relative w-8 h-8 overflow-hidden group z-1">
              <RightUpIcon
                className="
                  absolute inset-0 text-black w-full h-full
                  transition-transform duration-300 ease-out
                  group-hover/preview:-translate-y-6 group-hover/preview:translate-x-6
                "
              />
              <RightUpIcon
                className="
                  absolute inset-0 text-crystalGreen w-full h-full
                  translate-y-6 -translate-x-6
                  transition-transform duration-300 ease-out
                  group-hover/preview:translate-y-0 group-hover/preview:translate-x-0
                "
              />
            </div>
            <div className="absolute z-0 inset-0 bg-black transition-transform duration-300 ease-out translate-y-full group-hover/preview:translate-y-0" />

            <div className="pt-5 tablet:pt-2 px-6 tablet:px-16 flex flex-col gap-3">
              <div className="relative z-10 font-bold text-4xl/tight group-hover/preview:text-crystalGreen">
                {current?.title ?? "-"}
              </div>
              <div className="relative z-10 text-gray-400 text-md">
                {current?.createdAt ? formatDate(current.createdAt) : ""}
              </div>
              <div className="relative z-10 text-md line-clamp-4 group-hover/preview:text-white">
                {current?.description ?? ""}
              </div>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between border-b-2 tablet:border-b-0">
            <div className="pl-8 tablet:pl-16 flex gap-2 justify-start">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-[8px] h-[8px] cursor-pointer ${
                    i === index ? "bg-crystalGreen" : "bg-black"
                  }`}
                />
              ))}
            </div>

            <div className="flex">
              <button
                onClick={goPrev}
                className={`w-16 h-16 border-t-2 border-l-2 flex justify-center items-center 
                  ${
                    index === 0
                      ? "border-neutral100 text-neutral100 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                disabled={index === 0}
              >
                <RightUpIcon className="-rotate-135 w-8 h-8" />
              </button>
              <button
                onClick={goNext}
                aria-label="Next"
                className={`w-16 h-16 border-t-2 border-l-2 border-black flex justify-center items-center ${
                  index === items.length - 1
                    ? "border-t-neutral100 text-neutral100 cursor-not-allowed"
                    : "cursor-pointer"
                }`}
                disabled={index === items.length - 1}
              >
                <RightUpIcon className="rotate-45 w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="min-w-[79px] border-l-2 hidden tablet:block" />
    </div>
  );
}
