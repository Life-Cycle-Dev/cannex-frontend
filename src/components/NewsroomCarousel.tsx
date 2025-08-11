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
          No news yet
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

      <div key={current.id} className="w-full flex tablet:flex-row flex-col">
        <img
          className="min-w-full h-[315px] tablet:min-w-[623px] tablet:h-[413px] object-cover tablet:border-r-2"
          src={current?.image?.url || "/placeholder.png"}
          alt={current?.image?.name || current?.title || "news image"}
        />

        <div
          className="
            w-full border-b-2 tablet:border-0
            relative tablet:static
            flex flex-col
            tablet:h-[413px]
            pb-20 tablet:pb-0 
          "
        >
          <div className="absolute top-4 right-4 tablet:static tablet:self-end tablet:mb-4">
            <RightUpIcon />
          </div>

          <div className="pt-10 px-6 tablet:px-16 flex flex-col gap-3">
            <div className="font-bold text-3xl tablet:text-5xl/tight">
              {current?.title ?? "-"}
            </div>
            <div className="text-gray-400 text-md">
              {current?.createdAt ? formatDate(current.createdAt) : ""}
            </div>
            <div className="text-md line-clamp-4">
              {current?.description ?? ""}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="absolute bottom-7 left-6 tablet:pl-16 tablet:static flex gap-2">
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

            <div className="absolute bottom-0 right-0 tablet:static flex">
              <button
                onClick={goPrev}
                className={`w-16 h-16 border-t-2 border-l-2 flex justify-center items-center ${
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
                className={`w-16 h-16 border-t-2 border-l-2 flex justify-center items-center ${
                  index === items.length - 1
                    ? "border-neutral100 text-neutral100 cursor-not-allowed"
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
